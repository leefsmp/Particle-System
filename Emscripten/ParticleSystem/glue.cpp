
#include <emscripten.h>

extern "C" {

// Not using size_t for array indices as the values used by the javascript code are signed.
void array_bounds_check(const int array_size, const int array_idx) {
  if (array_idx < 0 || array_idx >= array_size) {
    EM_ASM_INT({
      throw 'Array index ' + $0 + ' out of bounds: [0,' + $1 + ')';
    }, array_idx, array_size);
  }
}

// Particle

Particle* EMSCRIPTEN_KEEPALIVE emscripten_bind_Particle_Particle_0() {
  return new Particle();
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_Particle_getAcceleration_0(Particle* self) {
  return self->getAcceleration();
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_Particle_getVelocity_0(Particle* self) {
  return self->getVelocity();
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_Particle_getPosition_0(Particle* self) {
  return self->getPosition();
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_Particle_getDof_0(Particle* self) {
  return self->getDof();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Particle___destroy___0(Particle* self) {
  delete self;
}

// MagneticField

MagneticField* EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_MagneticField_1(int arg0) {
  return new MagneticField(arg0);
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_getPosition_0(MagneticField* self) {
  return self->getPosition();
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_getOffset_0(MagneticField* self) {
  return self->getOffset();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_setForce_1(MagneticField* self, double arg0) {
  self->setForce(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField___destroy___0(MagneticField* self) {
  delete self;
}

// Vector

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_Vector_Vector_3(double arg0, double arg1, double arg2) {
  return new Vector(arg0, arg1, arg2);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Vector_set_3(Vector* self, double arg0, double arg1, double arg2) {
  self->set(arg0, arg1, arg2);
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_Vector_getX_0(Vector* self) {
  return self->getX();
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_Vector_getY_0(Vector* self) {
  return self->getY();
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_Vector_getZ_0(Vector* self) {
  return self->getZ();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Vector___destroy___0(Vector* self) {
  delete self;
}

// ParticleEmitter

ParticleEmitter* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_ParticleEmitter_1(int arg0) {
  return new ParticleEmitter(arg0);
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_getPosition_0(ParticleEmitter* self) {
  return self->getPosition();
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_getOffset_0(ParticleEmitter* self) {
  return self->getOffset();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setEmissionRate_1(ParticleEmitter* self, double arg0) {
  self->setEmissionRate(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setVelocity_1(ParticleEmitter* self, double arg0) {
  self->setVelocity(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setSpread_1(ParticleEmitter* self, double arg0) {
  self->setSpread(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setCharge_1(ParticleEmitter* self, double arg0) {
  self->setCharge(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter___destroy___0(ParticleEmitter* self) {
  delete self;
}

// VoidPtr

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VoidPtr___destroy___0(void** self) {
  delete self;
}

// ParticleSystem

ParticleSystem* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_ParticleSystem_1(int arg0) {
  return new ParticleSystem(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_pushRecycle_1(ParticleSystem* self, Particle* arg0) {
  self->pushRecycle(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_initParticleLoop_0(ParticleSystem* self) {
  self->initParticleLoop();
}

Particle* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_nextParticle_0(ParticleSystem* self) {
  return self->nextParticle();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_step_1(ParticleSystem* self, double arg0) {
  self->step(arg0);
}

MagneticField* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_addMagneticField_1(ParticleSystem* self, int arg0) {
  return self->addMagneticField(arg0);
}

ParticleEmitter* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_addEmitter_1(ParticleSystem* self, int arg0) {
  return self->addEmitter(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem___destroy___0(ParticleSystem* self) {
  delete self;
}

}

