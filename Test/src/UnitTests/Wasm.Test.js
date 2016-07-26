import UnitTestBase from 'UnitTestBase'

export default class WasmTest extends UnitTestBase {

  constructor (config) {

    super (config)
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
  initialize (config) {

    return new Promise((resolve, reject) => {

      this.ps = new Module.ParticleSystem(
        config.maxParticles)

      config.emitters.forEach((emitterConfig) => {

        var emitter = this.ps.addEmitter(emitterConfig.id)

        emitter.getPosition().set(
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
      })

      config.fields.forEach((fieldConfig) => {

        var field = this.ps.addMagneticField(fieldConfig.id)

        field.getPosition().set(
          fieldConfig.position.x,
          fieldConfig.position.y,
          fieldConfig.position.z)

        field.setForce(fieldConfig.force)
      })

      resolve()
    })
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  dumpParticles (particleSystem) {

    var idx = 0

    particleSystem.initParticleLoop()

    while (true) {

      var particle = particleSystem.nextParticle()

      if(particle.ptr === 0) {
        break
      }

      var pos = particle.getPosition()

      console.log('Particle' +
        '[' + (idx++) + ']: [' +
        pos.getX().toFixed(3) + ', ' +
        pos.getY().toFixed(3) + ', ' +
        pos.getZ().toFixed(3) + ']')
    }
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  doTest (config) {

    return new Promise(async(resolve, reject) => {

      if (config.dumpParticles) {

        for (var i = 0; i < config.nbSteps; ++i) {
          console.log('-------- Step ' + (i + 1) + ' --------')
          this.ps.step(config.timeStep)
          this.dumpParticles(this.ps)
        }

      } else {
        for (var i = 0; i < config.nbSteps; ++i) {
          this.ps.step(config.timeStep)
        }
      }

      resolve()
    })
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  finalize () {

    Module.destroy(this.ps)
  }
}




