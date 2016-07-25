
var EmscriptenTest = {

  initParticleSystem: function (config) {

    var ps = new Module.ParticleSystem(config.maxParticles)

    config.emitters.forEach(function (emitterConfig) {

      var emitter = ps.addEmitter(emitterConfig.id)

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

    config.fields.forEach(function (fieldConfig) {

      var field = ps.addMagneticField(fieldConfig.id)

      field.getPosition().set(
        fieldConfig.position.x,
        fieldConfig.position.y,
        fieldConfig.position.z)

      field.setForce(fieldConfig.force)
    })

    return ps
  },

  dumpParticles: function (particleSystem) {

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
}

export default EmscriptenTest

