
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

// EventHandler

EventHandler* EMSCRIPTEN_KEEPALIVE emscripten_bind_EventHandler_EventHandler_0() {
  return new EventHandler();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_EventHandler_handleEvent_1(EventHandler* self, EmString* arg0) {
  return self->handleEvent(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_EventHandler___destroy___0(EventHandler* self) {
  delete self;
}

// BaseObject

BaseObject* EMSCRIPTEN_KEEPALIVE emscripten_bind_BaseObject_BaseObject_2(int arg0, int arg1) {
  return new BaseObject(arg0, arg1);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_BaseObject_getType_0(BaseObject* self) {
  return self->getType();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_BaseObject_getId_0(BaseObject* self) {
  return self->getId();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_BaseObject_setPosition_3(BaseObject* self, double arg0, double arg1, double arg2) {
  self->setPosition(arg0, arg1, arg2);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_BaseObject_setTransformable_1(BaseObject* self, bool arg0) {
  self->setTransformable(arg0);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_BaseObject_getTransformable_0(BaseObject* self) {
  return self->getTransformable();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_BaseObject_setSelectable_1(BaseObject* self, bool arg0) {
  self->setSelectable(arg0);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_BaseObject_getSelectable_0(BaseObject* self) {
  return self->getSelectable();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_BaseObject___destroy___0(BaseObject* self) {
  delete self;
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

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Particle_setLifeTime_1(Particle* self, double arg0) {
  self->setLifeTime(arg0);
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_Particle_getLifeTime_0(Particle* self) {
  return self->getLifeTime();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_Particle_getRecycled_0(Particle* self) {
  return self->getRecycled();
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_Particle_getRadius_0(Particle* self) {
  return self->getRadius();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Particle___destroy___0(Particle* self) {
  delete self;
}

// MagneticField

MagneticField* EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_MagneticField_1(int arg0) {
  return new MagneticField(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_setTransformable_1(MagneticField* self, bool arg0) {
  self->setTransformable(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_setSelectable_1(MagneticField* self, bool arg0) {
  self->setSelectable(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_setPosition_3(MagneticField* self, double arg0, double arg1, double arg2) {
  self->setPosition(arg0, arg1, arg2);
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_getPosition_0(MagneticField* self) {
  return self->getPosition();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_setOffset_3(MagneticField* self, double arg0, double arg1, double arg2) {
  self->setOffset(arg0, arg1, arg2);
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_getOffset_0(MagneticField* self) {
  return self->getOffset();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_setForce_1(MagneticField* self, double arg0) {
  self->setForce(arg0);
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField_getForce_0(MagneticField* self) {
  return self->getForce();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_MagneticField___destroy___0(MagneticField* self) {
  delete self;
}

// Vector

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_Vector_Vector_3(double arg0, double arg1, double arg2) {
  return new Vector(arg0, arg1, arg2);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_Vector_withinSphere_2(Vector* self, Vector* arg0, double arg1) {
  return self->withinSphere(arg0, arg1);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Vector_set_3(Vector* self, double arg0, double arg1, double arg2) {
  self->set(arg0, arg1, arg2);
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_Vector_magnitude_0(Vector* self) {
  return self->magnitude();
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

// EmString

EmString* EMSCRIPTEN_KEEPALIVE emscripten_bind_EmString_EmString_0() {
  return new EmString();
}

EmString* EMSCRIPTEN_KEEPALIVE emscripten_bind_EmString_EmString_1(char* arg0) {
  return new EmString(arg0);
}

const char* EMSCRIPTEN_KEEPALIVE emscripten_bind_EmString_c_str_0(EmString* self) {
  return self->c_str();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_EmString___destroy___0(EmString* self) {
  delete self;
}

// ParticleEmitter

ParticleEmitter* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_ParticleEmitter_1(int arg0) {
  return new ParticleEmitter(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setPosition_3(ParticleEmitter* self, double arg0, double arg1, double arg2) {
  self->setPosition(arg0, arg1, arg2);
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_getPosition_0(ParticleEmitter* self) {
  return self->getPosition();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setOffset_3(ParticleEmitter* self, double arg0, double arg1, double arg2) {
  self->setOffset(arg0, arg1, arg2);
}

Vector* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_getOffset_0(ParticleEmitter* self) {
  return self->getOffset();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setTransformable_1(ParticleEmitter* self, bool arg0) {
  self->setTransformable(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setSelectable_1(ParticleEmitter* self, bool arg0) {
  self->setSelectable(arg0);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setEmissionRate_1(ParticleEmitter* self, double arg0) {
  self->setEmissionRate(arg0);
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_getEmissionRate_0(ParticleEmitter* self) {
  return self->getEmissionRate();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setVelocity_1(ParticleEmitter* self, double arg0) {
  self->setVelocity(arg0);
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_getVelocity_0(ParticleEmitter* self) {
  return self->getVelocity();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setSpread_1(ParticleEmitter* self, double arg0) {
  self->setSpread(arg0);
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_getSpread_0(ParticleEmitter* self) {
  return self->getSpread();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_setCharge_1(ParticleEmitter* self, double arg0) {
  self->setCharge(arg0);
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleEmitter_getCharge_0(ParticleEmitter* self) {
  return self->getCharge();
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

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_destroy_0(ParticleSystem* self) {
  self->destroy();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_setDof_3(ParticleSystem* self, double arg0, double arg1, double arg2) {
  self->setDof(arg0, arg1, arg2);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_setMaxParticles_1(ParticleSystem* self, int arg0) {
  self->setMaxParticles(arg0);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_getMaxParticles_0(ParticleSystem* self) {
  return self->getMaxParticles();
}

MagneticField* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_getMagneticField_1(ParticleSystem* self, int arg0) {
  return self->getMagneticField(arg0);
}

ParticleEmitter* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_getEmitter_1(ParticleSystem* self, int arg0) {
  return self->getEmitter(arg0);
}

BaseObject* EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_getObjectById_1(ParticleSystem* self, int arg0) {
  return self->getObjectById(arg0);
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

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem_on_2(ParticleSystem* self, EmString* arg0, EventHandler* arg1) {
  self->on(arg0, arg1);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ParticleSystem___destroy___0(ParticleSystem* self) {
  delete self;
}

}

