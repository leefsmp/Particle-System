

import TrackballControls from './TrackballControls'
import TransformControls from './TransformControls'
import SettingsPanel from './SettingsPanel'
import 'jsoneditor/dist/jsoneditor.min.css'
import ConfigPanel from './ConfigPanel'
import JSONEditor from 'jsoneditor'
import Stopwatch from 'Stopwatch'
import THREELib from 'three-js'
import FPS from 'FPSMeter'
import './three.css'

var THREE = THREELib()
TransformControls(THREE)

const vertexShader = `

  // switch on high precision floats
  #ifdef GL_ES
  precision highp float;
  #endif

  varying vec3 vColor;
  uniform vec3 offset;

  void main() {

    vColor = color;

    gl_PointSize = 4.0;

    gl_Position = projectionMatrix *
      modelViewMatrix *
      vec4(position, 1.0);
  }
`

const fragmentShader = `

  #ifdef GL_ES
  precision highp float;
  #endif

  varying vec3 vColor;

  void main() {

    gl_FragColor = vec4(vColor, 1);
  }
`

class ThreeJsApp {

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  constructor() {

    this.stopwatch = new Stopwatch()

    this.camera = new THREE.PerspectiveCamera(60,
      window.innerWidth / window.innerHeight,
      1, 1000)
  
    this.camera.position.z = 500

    this.scene = new THREE.Scene()


    let light1 = new THREE.DirectionalLight(0xffffff)
    light1.position.set(1, 1, 1)
    this.scene.add(light1)
  
    let light2 = new THREE.DirectionalLight(0x002288)
    light2.position.set( -1, -1, -1 )
    this.scene.add(light2)
  
    let light3 = new THREE.AmbientLight(0x222222)
    this.scene.add(light3)

    this.renderer = new THREE.WebGLRenderer({ antialias: false })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(0x9b9b9b)

    this.domContainer = document.getElementById('container')

    $(this.domContainer).append(
      '<div id="particle-toolbar"> </div>')

    $('#particle-toolbar').css({
      position: 'absolute',
      left: '10px',
      top: '90px'
    })

    this.fps = new FPSMeter(
      document.getElementById('particle-toolbar'), {
        maxFps:    30, //expected
        smoothing: 10,
        show: 'fps',
        decimals: 1,
        left: '0px',
        top: '-80px',
        theme: 'transparent',
        heat: 1,
        graph: 1,
        toggleOn: null,
        history: 32
      })

    this.domContainer.appendChild(
      this.renderer.domElement)

    this.onTransformHandler = (e) => {
      this.onTransform(e)
    }

    this.onMouseMoveHandler = (e) => {
      this.onMouseMove(e)
    }

    this.onMouseDownHandler = (e) => {
      this.onMouseDown(e)
    }
    
    this.onMouseUpHandler = (e) => {
      this.onMouseUp(e)
    }

    this.updateHandler = () => {
      this.update ()
    }

    this.resizeHandler = () => {
      this.onResize()
    }

    this.renderHandler = () => {
      this.render()
    }

    this.controls = new TrackballControls(this.camera)
    this.controls.dynamicDampingFactor = 0.3
    this.controls.staticMoving = true
    this.controls.rotateSpeed = 1.0
    this.controls.zoomSpeed = 1.2
    this.controls.panSpeed = 0.8
    this.controls.noZoom = false
    this.controls.noPan = false

    this.controls.addEventListener(
      'change',
      this.renderHandler)

    window.addEventListener(
      'resize',
      this.resizeHandler,
      false)

    this.transformControlTx = new THREE.TransformControls(
      this.camera,
      this.domContainer)

    this.transformControlTx.visible = false

    this.scene.add(this.transformControlTx)

    this.transformControlTx.addEventListener(
      'change',
      this.onTransformHandler)

    this.raycaster = new THREE.Raycaster()
    this.raycaster.params.Points.threshold = 0.1

    this.domContainer.addEventListener(
      'mousedown',
      this.onMouseDownHandler,
      false)

    this.domContainer.addEventListener(
      'mouseup',
      this.onMouseUpHandler,
      false)

    this.configPanel = new ConfigPanel(
      this.domContainer)

    //this.configPanel.setVisible(true)
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  sleep (ms) {

    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve()
      }, ms)
    })
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  createPointCloud (maxPoints, material) {

    this.bufferGeometry = new THREE.BufferGeometry()

    this.bufferGeometry.dynamic = true

    this.bufferGeometry.addAttribute(
      'position',
      new THREE.BufferAttribute(
        new Float32Array(maxPoints * 3), 3))

    this.bufferGeometry.addAttribute(
      'color',
      new THREE.BufferAttribute(
        new Float32Array(maxPoints * 3), 3))

    var colors = this.bufferGeometry.attributes.color.array

    for(let i = 0; i < maxPoints; ++i) {

      colors[3 * i] = Math.random()
      colors[3 * i + 1] = Math.random()
      colors[3 * i + 2] = Math.random()
    }

    return new THREE.Points(
      this.bufferGeometry,
      material)
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  async load (config) {

    while (!Module.ParticleSystem) {

      await this.sleep(10)
    }

    this.selectables = []

    this.ps = new Module.ParticleSystem(
      config.maxParticles)

    config.emitters.forEach((emitterConfig) => {

      var emitter = this.ps.addEmitter(emitterConfig.id)

      emitter.setPosition(
        emitterConfig.position.x,
        emitterConfig.position.y,
        emitterConfig.position.z)

      emitter.setEmissionRate(
        emitterConfig.emissionRate)

      emitter.setVelocity(
        emitterConfig.velocity)

      emitter.setSpread(
        emitterConfig.spread)

      emitter.setCharge(
        emitterConfig.charge)

      this.addEmitter(emitterConfig)
    })

    config.fields.forEach((fieldConfig) => {

      var field = this.ps.addMagneticField(fieldConfig.id)

      field.setForce(fieldConfig.force)

      field.setPosition(
        fieldConfig.position.x,
        fieldConfig.position.y,
        fieldConfig.position.z)

      this.addField(fieldConfig)
    })

    this.bounds = [{
        center: new Module.Vector(0, 0, 0),
        type: 'sphere',
        max: 400
      }
    ]

    this.shader = {
      vertexColors: THREE.VertexColors,
      transparent:true,
      uniforms: {},
      fragmentShader,
      vertexShader
      //blending: THREE.AdditiveBlending,
      //opacity: 0.8,
      //map: THREE.ImageUtils.loadTexture("../resources/img/particle.png")
    }

    let shaderMaterial = new THREE.ShaderMaterial(
      this.shader)

    this.pointCloud = this.createPointCloud(
      config.maxParticles,
      shaderMaterial)

    this.scene.add(this.pointCloud)

    this.panel = new SettingsPanel(
      this.domContainer,
      this.ps)

    this.panel.on('maxParticles.changed', (maxParticles) => {

      this.scene.remove(this.pointCloud)

      this.pointCloud = this.createPointCloud(
        maxParticles,
        shaderMaterial)

      this.scene.add(this.pointCloud)
    })

    this.panel.setVisible(true)
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  addEmitter (emitterConfig) {

    let material = new THREE.MeshPhongMaterial( {
      color: 0x000099,
      specular: 0x000099,
      shininess: 30,
      shading: THREE.FlatShading
    })

    let selectable = this.createCone(
      emitterConfig.position,
      new THREE.Vector3(-1,0,0),
      25, material)

    selectable.psId = emitterConfig.id

    this.scene.add(selectable)

    this.selectables.push(selectable)
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  addField (fieldConfig) {

    let geometry = new THREE.SphereGeometry(
      5, 100, 100)

    let material = new THREE.MeshPhongMaterial( {
      color: 0x990000,
      specular: 0x990000,
      shininess: 30,
      shading: THREE.FlatShading
    })

    let selectable = new THREE.Mesh(
      geometry,
      material)

    selectable.psId = fieldConfig.id

    selectable.position.x = fieldConfig.position.x
    selectable.position.y = fieldConfig.position.y
    selectable.position.z = fieldConfig.position.z

    this.scene.add(selectable)

    this.selectables.push(selectable)
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  onResize () {
  
    this.camera.aspect =
      window.innerWidth / window.innerHeight

    this.camera.updateProjectionMatrix()
  
    this.renderer.setSize(
      window.innerWidth,
      window.innerHeight)

    this.controls.handleResize()

    this.render()
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  update () {

    this.bufferGeometry.attributes.position.needsUpdate = true

    requestAnimationFrame(this.updateHandler)

    this.ps.step(
      this.stopwatch.getElapsedMs() * 0.001)

    this.ps.initParticleLoop()

    let index = -1

    let particle

    while (true) {

      particle = this.ps.nextParticle()

      ++index

      if (!particle.ptr) {

        break
      }

      this.updateParticle(particle, index)
    }

    this.controls.update()

    this.fps.tick()

    this.render()
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  updateParticle (particle, index) {

    var positions = this.bufferGeometry.attributes.position.array

    if(particle.getRecycled()) {

      positions[3 * index]     = -5000.0
      positions[3 * index + 1] = -5000.0
      positions[3 * index + 2] = -5000.0

    } else if (this.filterParticle(particle)) {

      particle.setLifeTime(-1)

      positions[3 * index]     = -5000.0
      positions[3 * index + 1] = -5000.0
      positions[3 * index + 2] = -5000.0

    } else {

      let pos = particle.getPosition()

      positions[3 * index]     = pos.getX()
      positions[3 * index + 1] = pos.getY()
      positions[3 * index + 2] = pos.getZ()
    }
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

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  render () {

    this.transformControlTx.update()

    this.renderer.render(this.scene, this.camera)
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  run () {

    this.stopwatch.getElapsedMs()

    this.updateHandler()

    this.render()
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  createCone (start, dir, length, material) {

    dir.normalize()

    var end = {
      x: start.x + dir.x * length,
      y: start.y + dir.y * length,
      z: start.z + dir.z * length
    }

    var orientation = new THREE.Matrix4()

    orientation.lookAt(
      start,
      end,
      new THREE.Object3D().up)

    var matrix = new THREE.Matrix4()

    matrix.set(
      1, 0, 0, 0,
      0, 0, 1, 0,
      0, -1, 0, 0,
      0, 0, 0, 1)

    orientation.multiply(matrix)

    var geometry = new THREE.CylinderGeometry(
      0, length * 0.2, length, 128, 1)

    var cone = new THREE.Mesh(geometry, material)

    cone.applyMatrix(orientation)

    cone.position.x = start.x + dir.x * length / 2
    cone.position.y = start.y + dir.y * length / 2
    cone.position.z = start.z + dir.z * length / 2

    return cone
  }
  
  ///////////////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////////////
  onMouseDown (event) {

    var element = document.elementFromPoint(
      event.pageX, event.pageY)

    if(element.tagName.toUpperCase() !== 'CANVAS') {

      event.preventDefault()
      event.stopPropagation()
    }
    
    this.domContainer.addEventListener(
      'mousemove',
      this.onMouseMoveHandler,
      false)
  }

  ///////////////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////////////
  onMouseMove (event) {

    this.domContainer.removeEventListener(
      'mousemove',
      this.onMouseMoveHandler)
  }

  ///////////////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////////////
  onMouseUp (event) {

    var element = document.elementFromPoint(
      event.pageX, event.pageY)

    if(element.tagName.toUpperCase() !== 'CANVAS') {
      return
    }

    let mouse = {
      x:( event.clientX / window.innerWidth ) * 2 - 1,
      y: 1 - ( event.clientY / window.innerHeight ) * 2
    }

    this.raycaster.setFromCamera(mouse, this.camera)

    let intersections = this.raycaster.intersectObjects(
      this.selectables)

    if (intersections.length) {

      let selectable = intersections[0].object

      var obj = this.ps.getObjectById(
        selectable.psId)

      this.panel.loadObjectGUI(obj)

      this.transformControlTx.attach(selectable)

      this.transformControlTx.visible = true

    } else {

      this.panel.loadObjectGUI(null)

      this.transformControlTx.detach()

      this.transformControlTx.visible = false
    }
  }

  ///////////////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////////////
  onTransform () {

    let selectable = this.transformControlTx.object

    let obj = this.ps.getObjectById(
      selectable.psId)

    let pos = selectable.position

    obj.setPosition(pos.x, pos.y, pos.z)

    this.render()
  }
}

///////////////////////////////////////////////////////////////////////////
// App Bootstraping
//
///////////////////////////////////////////////////////////////////////////
const App = new ThreeJsApp()

var defaultTestConfig = {
  maxParticles: 0,
  emitters: [ {
    id: 0,
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    emissionRate: 1000,
    velocity: 100,
    spread: 0.1,
    charge: 100
  }],

  fields: [ {
    id: 1,
    position: {
      x: 200,
      y: 20,
      z: 0
    },
    force: -2500
  }, {
    id: 2,
    position: {
      x: 200,
      y: -20,
      z: 0
    },
    force: -500
  } ]
}

App.load(defaultTestConfig).then(()=>{

  App.run()
})

