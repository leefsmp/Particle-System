import EventsEmitter from 'EventsEmitter'
import Toolkit from 'ViewerToolkit'
import Stopwatch from 'Stopwatch'

const vertexShader = `

  // switch on high precision floats
  #ifdef GL_ES
  precision highp float;
  #endif

  uniform vec3 offset;

  void main() {

    vec3 newPosition = position + offset;

    gl_Position = projectionMatrix *
      modelViewMatrix *
      vec4(newPosition, 1.0);
  }
`

const fragmentShader = `

  #ifdef GL_ES
  precision highp float;
  #endif

  uniform vec4 color;

  void main() {

    gl_FragColor = color;
  }
`

export default class ParticleTool extends EventsEmitter {

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  constructor (viewer, options = {}){

    super()

    this.stopwatch = new Stopwatch()

    this.nbParticleTypes = 50

    this.options = options

    this.viewer = viewer

    this.active = false

    this.objectMaterials =
      this.createObjectMaterials()

    this.particleMaterials =
      this.createRandomMaterials(
        this.nbParticleTypes)
  
    this.particleSystem = new Module.ParticleSystem(
      this.options.maxParticles || 0)

    this.activateShaders (true)
  }

  /////////////////////////////////////////////////////////////////
  // Tool names
  //
  /////////////////////////////////////////////////////////////////
  getNames () {

    return ["Viewing.Particle.Tool"]
  }

  /////////////////////////////////////////////////////////////////
  // Tool name
  //
  /////////////////////////////////////////////////////////////////
  getName () {

    return "Viewing.Particle.Tool"
  }

  /////////////////////////////////////////////////////////////////
  // Activate Tool
  //
  /////////////////////////////////////////////////////////////////
  activate () {
    
    console.log(this.getName() + ' activated')

    this.stopwatch.getElapsedMs()

    this.active = true
  }

  /////////////////////////////////////////////////////////////////
  // Deactivate tool
  //
  /////////////////////////////////////////////////////////////////
  deactivate () {

    console.log(this.getName() + ' deactivated')

    this.clearParticles()

    this.active = false
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  clearParticles () {

    this.particleSystem.initParticleLoop()

    while (true) {

      var particle = this.particleSystem.nextParticle()

      if (!particle.ptr) {
        break
      }

      this.destroyParticle(particle)
    }

    this.viewer.impl.invalidate(true)
  }

  /////////////////////////////////////////////////////////////////
  // Load Scene settings from properties
  //
  /////////////////////////////////////////////////////////////////
  loadScene () {

    return new Promise((resolve, reject)=> {

      this.viewer.search('particle.scene', async(dbIds)=>{

        if (dbIds.length != 1)
          return reject('Invalid Particle scene')

        try {

          var propSettings = await Toolkit.getProperty(
            this.viewer.model, dbIds[0], 'particle.settings')

          var settings = JSON.parse(
            propSettings.displayValue)

          this.particleSystem.setDof(
            settings.dof[0],
            settings.dof[1],
            settings.dof[2])

          this.bounds = []

          for (var i = 1; i <= settings.bounds; ++i) {

            var propBounds = await Toolkit.getProperty(
              this.viewer.model, dbIds[0], 'particle.bound' + i)

            this.bounds.push(this.parseBound(propBounds))
          }

          var tasks = [
            this.loadEmitters(),
            this.loadObjects(),
            this.loadFields()
          ]

          return resolve(Promise.all(tasks))
        }
        catch (ex) {
          return reject(ex)
        }
      })
    })
  }

  /////////////////////////////////////////////////////////////////
  // Parses scene bounds
  //
  /////////////////////////////////////////////////////////////////
  parseBound (propBound) {

    var bound = JSON.parse(propBound.displayValue)

    switch(bound.type) {

      case 'box':

        return {

          center: new Module.Vector(
            bound.center[0],
            bound.center[1],
            bound.center[2]),

          size: new Module.Vector(
            bound.size[0],
            bound.size[1],
            bound.size[2]),

          type: 'box'
        }

      case 'sphere':

        return {

          center: new Module.Vector(
            bound.center[0],
            bound.center[1],
            bound.center[2]),

          min: bound.min,
          max: bound.max,
          type: 'sphere'
        }
    }
  }

  /////////////////////////////////////////////////////////////////
  // Loads scene objects
  //
  /////////////////////////////////////////////////////////////////
  loadObject (dbId) {

    return new Promise(async(resolve, reject) => {

      try {

        var propSettings = await Toolkit.getProperty(
          this.viewer.model, dbId, 'particle.settings')

        var settings = JSON.parse(
          propSettings.displayValue)

        var color = parseInt(settings.clr, 16)

        var material = this.createMaterial({
          transparent: settings.transparent,
          opacity: settings.opacity,
          shading: THREE.FlatShading,
          name: Toolkit.guid(),
          shininess: 30,
          specular: color,
          color: color
        })

        Toolkit.setMaterial(
          this.viewer.model, dbId, material)

          return resolve()
      }
      catch (ex) {

        //throwing Invalid DbId
        //return reject(ex)
        return resolve()
      }
    })
  }

  loadObjects () {

    return new Promise((resolve, reject)=> {

      this.viewer.search('particle.object', (dbIds)=>{

        var tasks = dbIds.map((dbId)=> {

          return this.loadObject(dbId)
        })

        return resolve(Promise.all(tasks))
      })
    })
  }
  
  /////////////////////////////////////////////////////////////////
  // Load scene emitters
  //
  /////////////////////////////////////////////////////////////////
  loadEmitter (dbId) {

    return new Promise(async(resolve, reject) => {

      try {

        var bbox = await Toolkit.getWorldBoundingBox(
          this.viewer.model, dbId)

        var emitter = this.particleSystem.addEmitter(dbId)

        var propSettings = await Toolkit.getProperty(
          this.viewer.model, dbId, 'particle.settings')

        var settings = JSON.parse(
          propSettings.displayValue)

        emitter.setTransformable(settings.transfo)
        emitter.setEmissionRate(settings.rate)
        emitter.setSelectable(settings.select)
        emitter.setVelocity(settings.velocity)
        emitter.setCharge(settings.charge)
        emitter.setSpread(settings.spread)

        var offset = new Module.Vector(
          settings.dir[0],
          settings.dir[1],
          settings.dir[2])

        var magnitude = offset.magnitude();

        emitter.setOffset(
          offset.getX() * 0.5 / magnitude,
          offset.getY() * 0.5 / magnitude,
          offset.getZ() * 0.5 / magnitude)

          emitter.setPosition(
          (bbox.min.x + bbox.max.x) /2,
          (bbox.min.y + bbox.max.y) /2,
          (bbox.min.z + bbox.max.z) /2)

        var matIdx = emitter.charge < 0 ? 0 : 1

        var material = this.objectMaterials[matIdx]

        Toolkit.setMaterial(
          this.viewer.model,
          dbId, material)

        return resolve()
      }
      catch(ex){

        console.log(ex)

        //throwing Invalid DbId
        //return reject(ex)
        return resolve()
      }
    })
  }

  loadEmitters () {
  
    return new Promise((resolve, reject) => {

      this.viewer.search('particle.emitter', (dbIds) => {

        var tasks = dbIds.map((dbId)=> {

          return this.loadEmitter(dbId)
        })

        return resolve(Promise.all(tasks))
      })
    })
  }
  
  /////////////////////////////////////////////////////////////////
  // Load scene fields
  //
  /////////////////////////////////////////////////////////////////
  loadField (dbId) {
  
    return new Promise(async(resolve, reject) => {

      try {

        var bbox = await Toolkit.getWorldBoundingBox(
          this.viewer.model, dbId)

        var field = this.particleSystem.addMagneticField(dbId)

        var propSettings = await Toolkit.getProperty(
          this.viewer.model, dbId,
          'particle.settings')

        var settings = JSON.parse(
          propSettings.displayValue)

        field.setTransformable(settings.transfo)
        field.setSelectable(settings.select)
        field.setForce(settings.force)

        field.setPosition(
          (bbox.min.x + bbox.max.x) /2,
          (bbox.min.y + bbox.max.y) /2,
          (bbox.min.z + bbox.max.z) /2)

        var matIdx = settings.force < 0 ? 0 : 1

        var material = this.objectMaterials[matIdx]

        Toolkit.setMaterial(
          this.viewer.model,
          dbId, material)

        return resolve()
      }
      catch(ex){

        //throwing Invalid DbId
        //return reject(ex)
        return resolve()
      }
    })
  }

  loadFields () {

    return new Promise((resolve, reject) => {

      this.viewer.search('particle.field', (dbIds) => {

        var tasks = dbIds.map((dbId)=> {

          return this.loadField(dbId)
        })

        return resolve(Promise.all(tasks))
      })
    })
  }

  /////////////////////////////////////////////////////////////////
  // Update object position
  //
  /////////////////////////////////////////////////////////////////
  async updateObjectPosition (dbId) {

    var bbox = await Toolkit.getWorldBoundingBox(
      this.viewer.model, dbId)

    var obj = this.particleSystem.getObjectById(dbId)

    obj.setPosition(
      (bbox.min.x + bbox.max.x) / 2,
      (bbox.min.y + bbox.max.y) / 2,
      (bbox.min.z + bbox.max.z) / 2)
  }

  /////////////////////////////////////////////////////////////////
  // Creates object materials
  //
  /////////////////////////////////////////////////////////////////
  createObjectMaterials () {

    var materials = [

      this.createMaterial({
        shading: THREE.FlatShading,
        name: Toolkit.guid(),
        shininess: 80,
        specular: parseInt('B80000', 16),
        color: parseInt('B80000', 16)
      }),

      this.createMaterial({
        shading: THREE.FlatShading,
        name: Toolkit.guid(),
        shininess: 80,
        specular: parseInt('0000B8', 16),
        color: parseInt('0000B8', 16)
      })
    ]

    return materials
  }

  /////////////////////////////////////////////////////////////////
  // Creates a bunch of materials with random colors
  //
  /////////////////////////////////////////////////////////////////
  createRandomMaterials(nb){

    var materials = []

    for (var i = 0; i < nb; ++i) {

      var clr = Math.random() * 16777215

      materials.push(this.createMaterial({
        shading: THREE.FlatShading,
        name: Toolkit.guid(),
        shininess: 50,
        specular: clr,
        color: clr
      }))
    }

    return materials
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  destroyParticle (particle) {

    this.viewer.impl.scene.remove(
      particle.mesh)

    particle.mesh = null
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  filterParticle (particle) {

    var result = false

    this.bounds.forEach((bound)=>{

      switch(bound.type){

        case 'sphere':

          if(bound.max){
            if(!particle.getPosition().withinSphere(
                bound.center, bound.max)) {
              result = true
            }
          }

          if(bound.min){
            if(particle.getPosition().withinSphere(
                bound.center, bound.min)) {
              result = true
            }
          }

          break

        case 'box':

          if(!particle.getPosition().withinBox(
              bound.center, bound.size)) {
            result = true
          }

          break
      }
    })

    return result
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  onObjectModified (event) {

    switch (event.property) {

      case 'charge':
      case 'force':

        // red material < 0
        // blue material >= 0
        var matIdx = event.value < 0 ? 0 : 1

        var material = this.objectMaterials[matIdx]

        Toolkit.setMaterial(
          this.viewer.model,
          event.object.getId(),
          material)

        break
    }
  }

  /////////////////////////////////////////////////////////////////
  // Update loop without shaders
  //
  /////////////////////////////////////////////////////////////////
  update () {

    this.particleSystem.step(
      this.stopwatch.getElapsedMs() * 0.001)

    this.updateChunk ()

    // invalidate (needsClear, needsRender, overlayDirty)
    this.viewer.impl.invalidate(true, false, false)

    this.emit('fps.tick')
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  updateChunk () {

    this.particleSystem.initParticleLoop()

    let particle

    let tick = () => {

      var start = new Date().getTime()

      while (true) {

        particle = this.particleSystem.nextParticle()

        if (!particle.ptr) {

          break

        } else if ((new Date().getTime() - start) > 50) {

          // Yield execution to rendering logic
          setTimeout(tick, 25)

          break

        } else {

          this.updateParticle(particle)
        }
      }
    }

    setTimeout(tick, 25)
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  updateParticleShadersOff (particle) {

    if (!particle.mesh) {

      var type = randomInt(0, this.nbParticleTypes)

      particle.mesh = this.createMesh(
        particle.getRadius(),
        this.particleMaterials[type])

        this.viewer.impl.scene.add(particle.mesh)
    }

    particle.mesh.visible = !particle.getRecycled()

    if (this.filterParticle(particle)) {

      particle.setLifeTime(-1)

    } else if (particle.mesh.visible) {

      var pos = particle.getPosition()

      particle.mesh.position.x = pos.getX()
      particle.mesh.position.y = pos.getY()
      particle.mesh.position.z = pos.getZ()
    }
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  updateParticleShadersOn (particle) {

    if (!particle.mesh) {

      particle.shader = {
        uniforms: {
          offset: {
            type: 'v3',
            value: new THREE.Vector3(0,0,0)
          },
          color: {
            type: 'v4',
            value: new THREE.Vector4(
              Math.random(),
              Math.random(),
              Math.random(), 1)
          }
        },
        vertexShader,
        fragmentShader
      }

      var shaderMaterial = new THREE.ShaderMaterial(
        particle.shader)

      particle.mesh = this.createMesh(
        particle.getRadius(),
        shaderMaterial)

      this.viewer.impl.scene.add(particle.mesh)
    }

    particle.mesh.visible = !particle.getRecycled()

    if (this.filterParticle(particle)) {

      particle.setLifeTime(-1)

    } else if (particle.mesh.visible) {

      var pos = particle.getPosition()

      var offset = particle.shader.uniforms.offset.value

      offset.x = pos.getX()
      offset.y = pos.getY()
      offset.z = pos.getZ()
    }
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  activateShaders (activate) {

    this.updateParticle = (activate ?
      this.updateParticleShadersOn :
      this.updateParticleShadersOff)

    this.clearParticles()
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  createMaterial (props) {

    var material = new THREE.MeshPhongMaterial(props)

    this.viewer.impl.matman().addMaterial(
      props.name,
      material,
      true)

    return material
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  createMesh (size, material) {

    var geometry = new THREE.SphereGeometry(
      size, 4, 4)

    var mesh = new THREE.Mesh(
      geometry,
      material)

    return mesh
  }
}

// Random int in [min, max[
function randomInt(min, max) {

  return Math.floor(Math.random() * (max - min)) + min
}