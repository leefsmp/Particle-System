
import ParticleSystem from 'ParticleSystem'
import UnitTestBase from 'UnitTestBase'

export default class ES6Test extends UnitTestBase {

  constructor (config) {

    super (config)
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  initialize (config) {

    return new Promise((resolve, reject) => {

      this.ps = new ParticleSystem({
        maxParticles: config.maxParticles
      })

      config.emitters.forEach((emitterConfig) => {

        var emitter = this.ps.addEmitter(emitterConfig.id)

        emitter.position =
          emitterConfig.position

        emitter.emissionRate =
          emitterConfig.emissionRate

        emitter.velocity =
          emitterConfig.velocity

        emitter.spread =
          emitterConfig.spread

        emitter.charge =
          emitterConfig.charge
      })

      config.fields.forEach((fieldConfig) => {

        var field = this.ps.addMagneticField(fieldConfig.id)

        field.position =
          fieldConfig.position

        field.force =
          fieldConfig.force
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

    particleSystem.particles.forEach(function (particle) {

      var pos = particle.position

      console.log('Particle' +
        '[' + (idx++) + ']: [' +
        pos.x.toFixed(3) + ', ' +
        pos.y.toFixed(3) + ', ' +
        pos.z.toFixed(3) + ']')
    })
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  doTest (config) {

    return new Promise((resolve, reject) => {

      if (config.dumpParticles) {

        for (var i = 0; i < config.nbSteps; ++i) {
          console.log('-------- Step ' + (i + 1) + ' --------')
          this.ps.step(config.timeStep)
          this.dumpParticles(ps)
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

  }
}


