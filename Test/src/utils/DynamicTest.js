import UnitTestBase from 'UnitTestBase'

export default class DynamicTest extends UnitTestBase {

  constructor (config, ParticleSystem) {

    super (config)

    this.ParticleSystem = ParticleSystem
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  initialize (config) {

    return new Promise((resolve, reject) => {

      this.ps = new this.ParticleSystem(
        config.maxParticles)

      config.emitters.forEach((emitterConfig) => {

        let emitter = this.ps.addEmitter(emitterConfig.id)

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
      })

      config.fields.forEach((fieldConfig) => {

        let field = this.ps.addMagneticField(fieldConfig.id)

        field.setPosition(
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

    let idx = 0

    let particle

    particleSystem.initParticleLoop()

    while (true) {

      particle = particleSystem.nextParticle()

      if(!particle.ptr) {
        break
      }

      let pos = particle.getPosition()

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

    return new Promise((resolve, reject) => {

      if (config.dumpParticles) {

        for (let i = 0; i < config.nbSteps; ++i) {

          console.log('-------- Step ' + (i + 1) + ' --------')
          this.ps.step(config.timeStep)
          this.dumpParticles(this.ps)
        }

      } else {

        for (let i = 0; i < config.nbSteps; ++i) {

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
  finalize (config) {

    // check if ParticleSystem
    // must be explicitly disposed
    if(config.destroy) {

      Module.destroy(this.ps)
    }
  }
}




