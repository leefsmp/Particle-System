
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

// Converts a value into a C-style string, storing it in temporary space

var ensureStringCache = {
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
      this.size += 100; // heuristic, avoid many small grow events
      this.buffer = Module['_malloc'](this.size);
      assert(this.buffer);
    }
    this.pos = 0;
  },
  alloc: function(value) {
    assert(this.buffer);
    var array = intArrayFromString(value);
    var len = array.length;
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
    writeArrayToMemory(array, ret);
    return ret;
  },
};

function ensureString(value) {
  if (typeof value === 'string') return ensureStringCache.alloc(value);
  return value;
}


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

MagneticField.prototype['getPosition'] = MagneticField.prototype.getPosition = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_MagneticField_getPosition_0(self), Vector);
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

Vector.prototype['set'] = Vector.prototype.set = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  _emscripten_bind_Vector_set_3(self, arg0, arg1, arg2);
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

ParticleEmitter.prototype['getPosition'] = ParticleEmitter.prototype.getPosition = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ParticleEmitter_getPosition_0(self), Vector);
};;

ParticleEmitter.prototype['getOffset'] = ParticleEmitter.prototype.getOffset = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ParticleEmitter_getOffset_0(self), Vector);
};;

ParticleEmitter.prototype['setEmissionRate'] = ParticleEmitter.prototype.setEmissionRate = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleEmitter_setEmissionRate_1(self, arg0);
};;

ParticleEmitter.prototype['setVelocity'] = ParticleEmitter.prototype.setVelocity = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleEmitter_setVelocity_1(self, arg0);
};;

ParticleEmitter.prototype['setSpread'] = ParticleEmitter.prototype.setSpread = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleEmitter_setSpread_1(self, arg0);
};;

ParticleEmitter.prototype['setCharge'] = ParticleEmitter.prototype.setCharge = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleEmitter_setCharge_1(self, arg0);
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

ParticleSystem.prototype['pushRecycle'] = ParticleSystem.prototype.pushRecycle = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ParticleSystem_pushRecycle_1(self, arg0);
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
