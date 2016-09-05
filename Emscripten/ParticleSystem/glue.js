
// Bindings utilities

function WrapperObject() {
}
WrapperObject.prototype = Object.create(WrapperObject.prototype);
WrapperObject.prototype.constructor = WrapperObject;
WrapperObject.prototype.__class__ = WrapperObject;
WrapperObject.__cache__ = {};
Module['WrapperObject'] = WrapperObject;

function getCache(__class__) {
  return (__class__ || WrapperObject).__cache__;
}
Module['getCache'] = getCache;

function wrapPointer(ptr, __class__) {
  var cache = getCache(__class__);
  var ret = cache[ptr];
  if (ret) return ret;
  ret = Object.create((__class__ || WrapperObject).prototype);
  ret.ptr = ptr;
  return cache[ptr] = ret;
}
Module['wrapPointer'] = wrapPointer;

function castObject(obj, __class__) {
  return wrapPointer(obj.ptr, __class__);
}
Module['castObject'] = castObject;

Module['NULL'] = wrapPointer(0);

function destroy(obj) {
  if (!obj['__destroy__']) throw 'Error: Cannot destroy object. (Did you create it yourself?)';
  obj['__destroy__']();
  // Remove from cache, so the object can be GC'd and refs added onto it released
  delete getCache(obj.__class__)[obj.ptr];
}
Module['destroy'] = destroy;

function compare(obj1, obj2) {
  return obj1.ptr === obj2.ptr;
}
Module['compare'] = compare;

function getPointer(obj) {
  return obj.ptr;
}
Module['getPointer'] = getPointer;

function getClass(obj) {
  return obj.__class__;
}
Module['getClass'] = getClass;

// Converts big (string or array) values into a C-style storage, in temporary space

var ensureCache = {
  buffer: 0,  // the main buffer of temporary storage
  size: 0,   // the size of buffer
  pos: 0,    // the next free offset in buffer
  temps: [], // extra allocations
  needed: 0, // the total size we need next time

  prepare: function() {
    if (this.needed) {
      // clear the temps
      for (var i = 0; i < this.temps.length; i++) {
        Module['_free'](this.temps[i]);
      }
      this.temps.length = 0;
      // prepare to allocate a bigger buffer
      Module['_free'](this.buffer);
      this.buffer = 0;
      this.size += this.needed;
      // clean up
      this.needed = 0;
    }
    if (!this.buffer) { // happens first time, or when we need to grow
      this.size += 128; // heuristic, avoid many small grow events
      this.buffer = Module['_malloc'](this.size);
      assert(this.buffer);
    }
    this.pos = 0;
  },
  alloc: function(array, view) {
    assert(this.buffer);
    var bytes = view.BYTES_PER_ELEMENT;
    var len = array.length * bytes;
    len = (len + 7) & -8; // keep things aligned to 8 byte boundaries
    var ret;
    if (this.pos + len >= this.size) {
      // we failed to allocate in the buffer, this time around :(
      assert(len > 0); // null terminator, at least
      this.needed += len;
      ret = Module['_malloc'](len);
      this.temps.push(ret);
    } else {
      // we can allocate in the buffer
      ret = this.buffer + this.pos;
      this.pos += len;
    }
    var retShifted = ret;
    switch (bytes) {
      case 2: retShifted >>= 1; break;
      case 4: retShifted >>= 2; break;
      case 8: retShifted >>= 3; break;
    }
    for (var i = 0; i < array.length; i++) {
      view[retShifted + i] = array[i];
    }
    return ret;
  },
};

function ensureString(value) {
  if (typeof value === 'string') return ensureCache.alloc(intArrayFromString(value), HEAP8);
  return value;
}
function ensureInt8(value) {
  if (typeof value === 'object') return ensureCache.alloc(value, HEAP8);
  return value;
}
function ensureInt16(value) {
  if (typeof value === 'object') return ensureCache.alloc(value, HEAP16);
  return value;
}
function ensureInt32(value) {
  if (typeof value === 'object') return ensureCache.alloc(value, HEAP32);
  return value;
}
function ensureFloat32(value) {
  if (typeof value === 'object') return ensureCache.alloc(value, HEAPF32);
  return value;
}
function ensureFloat64(value) {
  if (typeof value === 'object') return ensureCache.alloc(value, HEAPF64);
  return value;
}


// EventHandler
function EventHandler() {
  this.ptr = _emscripten_bind_EventHandler_EventHandler_0();
  getCache(EventHandler)[this.ptr] = this;
};;
EventHandler.prototype = Object.create(WrapperObject.prototype);
EventHandler.prototype.constructor = EventHandler;
EventHandler.prototype.__class__ = EventHandler;
EventHandler.__cache__ = {};
Module['EventHandler'] = EventHandler;

EventHandler.prototype['handleEvent'] = EventHandler.prototype.handleEvent = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  return !!(_emscripten_bind_EventHandler_handleEvent_1(self, arg0));
};;

  EventHandler.prototype['__destroy__'] = EventHandler.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_EventHandler___destroy___0(self);
};
// BaseObject
function BaseObject(arg0, arg1) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  this.ptr = _emscripten_bind_BaseObject_BaseObject_2(arg0, arg1);
  getCache(BaseObject)[this.ptr] = this;
};;
BaseObject.prototype = Object.create(WrapperObject.prototype);
BaseObject.prototype.constructor = BaseObject;
BaseObject.prototype.__class__ = BaseObject;
BaseObject.__cache__ = {};
Module['BaseObject'] = BaseObject;

BaseObject.prototype['getType'] = BaseObject.prototype.getType = function() {
  var self = this.ptr;
  return _emscripten_bind_BaseObject_getType_0(self);
};;

BaseObject.prototype['getId'] = BaseObject.prototype.getId = function() {
  var self = this.ptr;
  return _emscripten_bind_BaseObject_getId_0(self);
};;

BaseObject.prototype['setPosition'] = BaseObject.prototype.setPosition = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  _emscripten_bind_BaseObject_setPosition_3(self, arg0, arg1, arg2);
};;

BaseObject.prototype['setTransformable'] = BaseObject.prototype.setTransformable = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_BaseObject_setTransformable_1(self, arg0);
};;

BaseObject.prototype['getTransformable'] = BaseObject.prototype.getTransformable = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_BaseObject_getTransformable_0(self));
};;

BaseObject.prototype['setSelectable'] = BaseObject.prototype.setSelectable = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_BaseObject_setSelectable_1(self, arg0);
};;

BaseObject.prototype['getSelectable'] = BaseObject.prototype.getSelectable = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_BaseObject_getSelectable_0(self));
};;

  BaseObject.prototype['__destroy__'] = BaseObject.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_BaseObject___destroy___0(self);
};
// Particle
function Particle() {
  this.ptr = _emscripten_bind_Particle_Particle_0();
  getCache(Particle)[this.ptr] = this;
};;
Particle.prototype = Object.create(WrapperObject.prototype);
Particle.prototype.constructor = Particle;
Particle.prototype.__class__ = Particle;
Particle.__cache__ = {};
Module['Particle'] = Particle;

Particle.prototype['getAcceleration'] = Particle.prototype.getAcceleration = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Particle_getAcceleration_0(self), Vector);
};;

Particle.prototype['getVelocity'] = Particle.prototype.getVelocity = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Particle_getVelocity_0(self), Vector);
};;

Particle.prototype['getPosition'] = Particle.prototype.getPosition = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Particle_getPosition_0(self), Vector);
};;

Particle.prototype['getDof'] = Particle.prototype.getDof = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Particle_getDof_0(self), Vector);
};;

Particle.prototype['setLifeTime'] = Particle.prototype.setLifeTime = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_Particle_setLifeTime_1(self, arg0);
};;

Particle.prototype['getLifeTime'] = Particle.prototype.getLifeTime = function() {
  var self = this.ptr;
  return _emscripten_bind_Particle_getLifeTime_0(self);
};;

Particle.prototype['getRecycled'] = Particle.prototype.getRecycled = function() {
  var self = this.ptr;
  return !!(_emscripten_bind_Particle_getRecycled_0(self));
};;

Particle.prototype['getRadius'] = Particle.prototype.getRadius = function() {
  var self = this.ptr;
  return _emscripten_bind_Particle_getRadius_0(self);
};;

  Particle.prototype['__destroy__'] = Particle.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_Particle___destroy___0(self);
};
// MagneticField
function MagneticField(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  this.ptr = _emscripten_bind_MagneticField_MagneticField_1(arg0);
  getCache(MagneticField)[this.ptr] = this;
};;
MagneticField.prototype = Object.create(WrapperObject.prototype);
MagneticField.prototype.constructor = MagneticField;
MagneticField.prototype.__class__ = MagneticField;
MagneticField.__cache__ = {};
Module['MagneticField'] = MagneticField;

MagneticField.prototype['setTransformable'] = MagneticField.prototype.setTransformable = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_MagneticField_setTransformable_1(self, arg0);
};;

MagneticField.prototype['setSelectable'] = MagneticField.prototype.setSelectable = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_MagneticField_setSelectable_1(self, arg0);
};;

MagneticField.prototype['setPosition'] = MagneticField.prototype.setPosition = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  _emscripten_bind_MagneticField_setPosition_3(self, arg0, arg1, arg2);
};;

MagneticField.prototype['getPosition'] = MagneticField.prototype.getPosition = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_MagneticField_getPosition_0(self), Vector);
};;

MagneticField.prototype['setOffset'] = MagneticField.prototype.setOffset = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  _emscripten_bind_MagneticField_setOffset_3(self, arg0, arg1, arg2);
};;

MagneticField.prototype['getOffset'] = MagneticField.prototype.getOffset = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_MagneticField_getOffset_0(self), Vector);
};;

MagneticField.prototype['setForce'] = MagneticField.prototype.setForce = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_MagneticField_setForce_1(self, arg0);
};;

MagneticField.prototype['getForce'] = MagneticField.prototype.getForce = function() {
  var self = this.ptr;
  return _emscripten_bind_MagneticField_getForce_0(self);
};;

  MagneticField.prototype['__destroy__'] = MagneticField.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_MagneticField___destroy___0(self);
};
// Vector
function Vector(arg0, arg1, arg2) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  this.ptr = _emscripten_bind_Vector_Vector_3(arg0, arg1, arg2);
  getCache(Vector)[this.ptr] = this;
};;
Vector.prototype = Object.create(WrapperObject.prototype);
Vector.prototype.constructor = Vector;
Vector.prototype.__class__ = Vector;
Vector.__cache__ = {};
Module['Vector'] = Vector;

Vector.prototype['withinSphere'] = Vector.prototype.withinSphere = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  return !!(_emscripten_bind_Vector_withinSphere_2(self, arg0, arg1));
};;

Vector.prototype['set'] = Vector.prototype.set = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  _emscripten_bind_Vector_set_3(self, arg0, arg1, arg2);
};;

Vector.prototype['magnitude'] = Vector.prototype.magnitude = function() {
  var self = this.ptr;
  return _emscripten_bind_Vector_magnitude_0(self);
};;

Vector.prototype['getX'] = Vector.prototype.getX = function() {
  var self = this.ptr;
  return _emscripten_bind_Vector_getX_0(self);
};;

Vector.prototype['getY'] = Vector.prototype.getY = function() {
  var self = this.ptr;
  return _emscripten_bind_Vector_getY_0(self);
};;

Vector.prototype['getZ'] = Vector.prototype.getZ = function() {
  var self = this.ptr;
  return _emscripten_bind_Vector_getZ_0(self);
};;

  Vector.prototype['__destroy__'] = Vector.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_Vector___destroy___0(self);
};
// EmString
function EmString(arg0) {
  ensureCache.prepare();
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg0 === undefined) { this.ptr = _emscripten_bind_EmString_EmString_0(); getCache(EmString)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_EmString_EmString_1(arg0);
  getCache(EmString)[this.ptr] = this;
};;
EmString.prototype = Object.create(WrapperObject.prototype);
EmString.prototype.constructor = EmString;
EmString.prototype.__class__ = EmString;
EmString.__cache__ = {};
Module['EmString'] = EmString;

EmString.prototype['c_str'] = EmString.prototype.c_str = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_EmString_c_str_0(self));
};;

  EmString.prototype['__destroy__'] = EmString.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_EmString___destroy___0(self);
};
// ParticleEmitter
function ParticleEmitter(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  this.ptr = _emscripten_bind_ParticleEmitter_ParticleEmitter_1(arg0);
  getCache(ParticleEmitter)[this.ptr] = this;
};;
ParticleEmitter.prototype = Object.create(WrapperObject.prototype);
ParticleEmitter.prototype.constructor = ParticleEmitter;
ParticleEmitter.prototype.__class__ = ParticleEmitter;
ParticleEmitter.__cache__ = {};
Module['ParticleEmitter'] = ParticleEmitter;

ParticleEmitter.prototype['setPosition'] = ParticleEmitter.prototype.setPosition = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  _emscripten_bind_ParticleEmitter_setPosition_3(self, arg0, arg1, arg2);
};;

ParticleEmitter.prototype['getPosition'] = ParticleEmitter.prototype.getPosition = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ParticleEmitter_getPosition_0(self), Vector);
};;

ParticleEmitter.prototype['setOffset'] = ParticleEmitter.prototype.setOffset = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  _emscripten_bind_ParticleEmitter_setOffset_3(self, arg0, arg1, arg2);
};;

ParticleEmitter.prototype['getOffset'] = ParticleEmitter.prototype.getOffset = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ParticleEmitter_getOffset_0(self), Vector);
};;

ParticleEmitter.prototype['setTransformable'] = ParticleEmitter.prototype.setTransformable = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleEmitter_setTransformable_1(self, arg0);
};;

ParticleEmitter.prototype['setSelectable'] = ParticleEmitter.prototype.setSelectable = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleEmitter_setSelectable_1(self, arg0);
};;

ParticleEmitter.prototype['setEmissionRate'] = ParticleEmitter.prototype.setEmissionRate = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleEmitter_setEmissionRate_1(self, arg0);
};;

ParticleEmitter.prototype['getEmissionRate'] = ParticleEmitter.prototype.getEmissionRate = function() {
  var self = this.ptr;
  return _emscripten_bind_ParticleEmitter_getEmissionRate_0(self);
};;

ParticleEmitter.prototype['setVelocity'] = ParticleEmitter.prototype.setVelocity = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleEmitter_setVelocity_1(self, arg0);
};;

ParticleEmitter.prototype['getVelocity'] = ParticleEmitter.prototype.getVelocity = function() {
  var self = this.ptr;
  return _emscripten_bind_ParticleEmitter_getVelocity_0(self);
};;

ParticleEmitter.prototype['setSpread'] = ParticleEmitter.prototype.setSpread = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleEmitter_setSpread_1(self, arg0);
};;

ParticleEmitter.prototype['getSpread'] = ParticleEmitter.prototype.getSpread = function() {
  var self = this.ptr;
  return _emscripten_bind_ParticleEmitter_getSpread_0(self);
};;

ParticleEmitter.prototype['setCharge'] = ParticleEmitter.prototype.setCharge = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleEmitter_setCharge_1(self, arg0);
};;

ParticleEmitter.prototype['getCharge'] = ParticleEmitter.prototype.getCharge = function() {
  var self = this.ptr;
  return _emscripten_bind_ParticleEmitter_getCharge_0(self);
};;

  ParticleEmitter.prototype['__destroy__'] = ParticleEmitter.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_ParticleEmitter___destroy___0(self);
};
// VoidPtr
function VoidPtr() { throw "cannot construct a VoidPtr, no constructor in IDL" }
VoidPtr.prototype = Object.create(WrapperObject.prototype);
VoidPtr.prototype.constructor = VoidPtr;
VoidPtr.prototype.__class__ = VoidPtr;
VoidPtr.__cache__ = {};
Module['VoidPtr'] = VoidPtr;

  VoidPtr.prototype['__destroy__'] = VoidPtr.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_VoidPtr___destroy___0(self);
};
// ParticleSystem
function ParticleSystem(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  this.ptr = _emscripten_bind_ParticleSystem_ParticleSystem_1(arg0);
  getCache(ParticleSystem)[this.ptr] = this;
};;
ParticleSystem.prototype = Object.create(WrapperObject.prototype);
ParticleSystem.prototype.constructor = ParticleSystem;
ParticleSystem.prototype.__class__ = ParticleSystem;
ParticleSystem.__cache__ = {};
Module['ParticleSystem'] = ParticleSystem;

ParticleSystem.prototype['destroy'] = ParticleSystem.prototype.destroy = function() {
  var self = this.ptr;
  _emscripten_bind_ParticleSystem_destroy_0(self);
};;

ParticleSystem.prototype['setDof'] = ParticleSystem.prototype.setDof = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  _emscripten_bind_ParticleSystem_setDof_3(self, arg0, arg1, arg2);
};;

ParticleSystem.prototype['setMaxParticles'] = ParticleSystem.prototype.setMaxParticles = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleSystem_setMaxParticles_1(self, arg0);
};;

ParticleSystem.prototype['getMaxParticles'] = ParticleSystem.prototype.getMaxParticles = function() {
  var self = this.ptr;
  return _emscripten_bind_ParticleSystem_getMaxParticles_0(self);
};;

ParticleSystem.prototype['getMagneticField'] = ParticleSystem.prototype.getMagneticField = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  return wrapPointer(_emscripten_bind_ParticleSystem_getMagneticField_1(self, arg0), MagneticField);
};;

ParticleSystem.prototype['getEmitter'] = ParticleSystem.prototype.getEmitter = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  return wrapPointer(_emscripten_bind_ParticleSystem_getEmitter_1(self, arg0), ParticleEmitter);
};;

ParticleSystem.prototype['getObjectById'] = ParticleSystem.prototype.getObjectById = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  return wrapPointer(_emscripten_bind_ParticleSystem_getObjectById_1(self, arg0), BaseObject);
};;

ParticleSystem.prototype['initParticleLoop'] = ParticleSystem.prototype.initParticleLoop = function() {
  var self = this.ptr;
  _emscripten_bind_ParticleSystem_initParticleLoop_0(self);
};;

ParticleSystem.prototype['nextParticle'] = ParticleSystem.prototype.nextParticle = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ParticleSystem_nextParticle_0(self), Particle);
};;

ParticleSystem.prototype['step'] = ParticleSystem.prototype.step = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleSystem_step_1(self, arg0);
};;

ParticleSystem.prototype['addMagneticField'] = ParticleSystem.prototype.addMagneticField = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  return wrapPointer(_emscripten_bind_ParticleSystem_addMagneticField_1(self, arg0), MagneticField);
};;

ParticleSystem.prototype['addEmitter'] = ParticleSystem.prototype.addEmitter = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  return wrapPointer(_emscripten_bind_ParticleSystem_addEmitter_1(self, arg0), ParticleEmitter);
};;

ParticleSystem.prototype['on'] = ParticleSystem.prototype.on = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  _emscripten_bind_ParticleSystem_on_2(self, arg0, arg1);
};;

  ParticleSystem.prototype['__destroy__'] = ParticleSystem.prototype.__destroy__ = function() {
  var self = this.ptr;
  _emscripten_bind_ParticleSystem___destroy___0(self);
};
(function() {
  function setupEnums() {
    
  }
  if (Module['calledRun']) setupEnums();
  else addOnPreMain(setupEnums);
})();
