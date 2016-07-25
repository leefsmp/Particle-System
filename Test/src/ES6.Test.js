
import ParticleSystem from 'ParticleSystem'

var ES6Test = {

  initParticleSystem: function (config) {

    var ps = new ParticleSystem({
      maxParticles: config.maxParticles
    })

    config.emitters.forEach(function (emitterConfig) {

      var emitter = ps.addEmitter(emitterConfig.id)

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

    config.fields.forEach(function (fieldConfig) {

      var field = ps.addMagneticField(fieldConfig.id)

      field.position =
        fieldConfig.position

      field.force =
        fieldConfig.force
    })

    return ps
  },

  dumpParticles: function (particleSystem) {

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
}

export default ES6Test

