Module["asm"] =  (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var cttz_i8=env.cttz_i8|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_clz32=global.Math.clz32;
  var abort=env.abort;
  var assert=env.assert;
  var abortStackOverflow=env.abortStackOverflow;
  var nullFunc_viddd=env.nullFunc_viddd;
  var nullFunc_iiii=env.nullFunc_iiii;
  var nullFunc_viiiii=env.nullFunc_viiiii;
  var nullFunc_i=env.nullFunc_i;
  var nullFunc_vi=env.nullFunc_vi;
  var nullFunc_vii=env.nullFunc_vii;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_viii=env.nullFunc_viii;
  var nullFunc_v=env.nullFunc_v;
  var nullFunc_viiiiii=env.nullFunc_viiiiii;
  var nullFunc_iii=env.nullFunc_iii;
  var nullFunc_viiii=env.nullFunc_viiii;
  var invoke_viddd=env.invoke_viddd;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_i=env.invoke_i;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var _pthread_getspecific=env._pthread_getspecific;
  var _llvm_pow_f64=env._llvm_pow_f64;
  var ___syscall54=env.___syscall54;
  var ___syscall6=env.___syscall6;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var ___cxa_free_exception=env.___cxa_free_exception;
  var ___cxa_find_matching_catch_2=env.___cxa_find_matching_catch_2;
  var ___cxa_find_matching_catch_3=env.___cxa_find_matching_catch_3;
  var _llvm_cttz_i32=env._llvm_cttz_i32;
  var _sbrk=env._sbrk;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___cxa_end_catch=env.___cxa_end_catch;
  var ___resumeException=env.___resumeException;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var ___cxa_call_unexpected=env.___cxa_call_unexpected;
  var _pthread_once=env._pthread_once;
  var _pthread_key_create=env._pthread_key_create;
  var _pthread_setspecific=env._pthread_setspecific;
  var ___cxa_throw=env.___cxa_throw;
  var _abort=env._abort;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var ___syscall140=env.___syscall140;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var ___syscall146=env.___syscall146;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;
  if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(size|0);

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function __ZN5Field10applyForceEP8Particle($this,$pParticle) {
 $this = $this|0;
 $pParticle = $pParticle|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN5FieldC2Eii($this,$id,$type) {
 $this = $this|0;
 $id = $id|0;
 $type = $type|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 8|0);
 __ZN10BaseObjectC2Eii($0,$id,$type);
 HEAP32[$this>>2] = (1304);
 return;
}
function __ZN13MagneticField10applyForceEP8Particle($this,$pParticle) {
 $this = $this|0;
 $pParticle = $pParticle|0;
 var $0 = 0, $1 = 0, $10 = 0.0, $11 = 0.0, $12 = 0, $13 = 0.0, $14 = 0, $15 = 0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $19 = 0, $2 = 0.0, $20 = 0.0, $21 = 0.0, $22 = 0.0, $23 = 0.0, $24 = 0.0, $25 = 0.0, $26 = 0.0;
 var $27 = 0.0, $28 = 0.0, $29 = 0.0, $3 = 0, $30 = 0, $31 = 0.0, $32 = 0, $33 = 0.0, $34 = 0.0, $35 = 0.0, $36 = 0, $37 = 0, $38 = 0.0, $39 = 0.0, $4 = 0.0, $40 = 0.0, $41 = 0, $42 = 0, $43 = 0.0, $44 = 0.0;
 var $5 = 0.0, $6 = 0, $7 = 0.0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 8|0);
 $1 = ((($0)) + 8|0);
 $2 = +HEAPF64[$1>>3];
 $3 = (__ZN8Particle11getPositionEv($pParticle)|0);
 $4 = +HEAPF64[$3>>3];
 $5 = $2 - $4;
 $6 = ((($0)) + 16|0);
 $7 = +HEAPF64[$6>>3];
 $8 = (__ZN8Particle11getPositionEv($pParticle)|0);
 $9 = ((($8)) + 8|0);
 $10 = +HEAPF64[$9>>3];
 $11 = $7 - $10;
 $12 = ((($0)) + 24|0);
 $13 = +HEAPF64[$12>>3];
 $14 = (__ZN8Particle11getPositionEv($pParticle)|0);
 $15 = ((($14)) + 16|0);
 $16 = +HEAPF64[$15>>3];
 $17 = $13 - $16;
 $18 = (+__ZN8Particle9getChargeEv($pParticle));
 $19 = ((($this)) + 72|0);
 $20 = +HEAPF64[$19>>3];
 $21 = $18 * $20;
 $22 = $5 * $5;
 $23 = $11 * $11;
 $24 = $22 + $23;
 $25 = $17 * $17;
 $26 = $24 + $25;
 $27 = (+Math_pow((+$26),1.5));
 $28 = $21 / $27;
 $29 = (+Math_abs((+$28)));
 $30 = $29 > 0.001;
 if (!($30)) {
  return;
 }
 $31 = $5 * $28;
 $32 = (__ZN8Particle15getAccelerationEv($pParticle)|0);
 $33 = +HEAPF64[$32>>3];
 $34 = $31 + $33;
 HEAPF64[$32>>3] = $34;
 $35 = $11 * $28;
 $36 = (__ZN8Particle15getAccelerationEv($pParticle)|0);
 $37 = ((($36)) + 8|0);
 $38 = +HEAPF64[$37>>3];
 $39 = $35 + $38;
 HEAPF64[$37>>3] = $39;
 $40 = $17 * $28;
 $41 = (__ZN8Particle15getAccelerationEv($pParticle)|0);
 $42 = ((($41)) + 16|0);
 $43 = +HEAPF64[$42>>3];
 $44 = $40 + $43;
 HEAPF64[$42>>3] = $44;
 return;
}
function __ZN13MagneticFieldC2Ei($this,$id) {
 $this = $this|0;
 $id = $id|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN5FieldC2Eii($this,$id,1);
 HEAP32[$this>>2] = (1316);
 return;
}
function __ZN13MagneticField8setForceEd($this,$force) {
 $this = $this|0;
 $force = +$force;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 72|0);
 HEAPF64[$0>>3] = $force;
 return;
}
function __ZN13MagneticField8getForceEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 72|0);
 $1 = +HEAPF64[$0>>3];
 return (+$1);
}
function ___clang_call_terminate($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___cxa_begin_catch(($0|0))|0);
 __ZSt9terminatev();
 // unreachable;
}
function _main() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function __ZN10BaseObjectC2Eii($this,$id,$type) {
 $this = $this|0;
 $id = $id|0;
 $type = $type|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 8|0);
 __ZN6VectorC2Ev($0);
 $1 = ((($this)) + 32|0);
 __ZN6VectorC2Ev($1);
 HEAP8[$this>>0] = 1;
 $2 = ((($this)) + 1|0);
 HEAP8[$2>>0] = 1;
 $3 = ((($this)) + 56|0);
 HEAP32[$3>>2] = $type;
 $4 = ((($this)) + 60|0);
 HEAP32[$4>>2] = $id;
 return;
}
function __ZN10BaseObject7getTypeEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 56|0);
 $1 = HEAP32[$0>>2]|0;
 return ($1|0);
}
function __ZN10BaseObject5getIdEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 60|0);
 $1 = HEAP32[$0>>2]|0;
 return ($1|0);
}
function __ZN10BaseObject11getPositionEv($this) {
 $this = $this|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 8|0);
 return ($0|0);
}
function __ZN10BaseObject11setPositionEddd($this,$x,$y,$z) {
 $this = $this|0;
 $x = +$x;
 $y = +$y;
 $z = +$z;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 8|0);
 __ZN6Vector3setEddd($0,$x,$y,$z);
 return;
}
function __ZN10BaseObject9getOffsetEv($this) {
 $this = $this|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 32|0);
 return ($0|0);
}
function __ZN10BaseObject9setOffsetEddd($this,$x,$y,$z) {
 $this = $this|0;
 $x = +$x;
 $y = +$y;
 $z = +$z;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 32|0);
 __ZN6Vector3setEddd($0,$x,$y,$z);
 return;
}
function __ZN10BaseObject16getTransformableEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP8[$this>>0]|0;
 $1 = ($0<<24>>24)!=(0);
 return ($1|0);
}
function __ZN10BaseObject16setTransformableEb($this,$transformable) {
 $this = $this|0;
 $transformable = $transformable|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $transformable&1;
 HEAP8[$this>>0] = $0;
 return;
}
function __ZN10BaseObject13getSelectableEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 1|0);
 $1 = HEAP8[$0>>0]|0;
 $2 = ($1<<24>>24)!=(0);
 return ($2|0);
}
function __ZN10BaseObject13setSelectableEb($this,$selectable) {
 $this = $this|0;
 $selectable = $selectable|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 1|0);
 $1 = $selectable&1;
 HEAP8[$0>>0] = $1;
 return;
}
function __ZN8ParticleC2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __ZN6VectorC2Ev($this);
 $0 = ((($this)) + 24|0);
 __ZN6VectorC2Ev($0);
 $1 = ((($this)) + 48|0);
 __ZN6VectorC2Ev($1);
 $2 = ((($this)) + 72|0);
 __ZN6VectorC2Ev($2);
 $3 = ((($this)) + 104|0);
 HEAPF64[$3>>3] = 0.029999999999999999;
 $4 = ((($this)) + 120|0);
 HEAP8[$4>>0] = 0;
 $5 = ((($this)) + 96|0);
 HEAPF64[$5>>3] = 30.0;
 return;
}
function __ZN8Particle5resetEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 120|0);
 HEAP8[$0>>0] = 0;
 $1 = ((($this)) + 96|0);
 HEAPF64[$1>>3] = 30.0;
 return;
}
function __ZN8Particle15getAccelerationEv($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return ($this|0);
}
function __ZN8Particle11getPositionEv($this) {
 $this = $this|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 48|0);
 return ($0|0);
}
function __ZN8Particle11getVelocityEv($this) {
 $this = $this|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 24|0);
 return ($0|0);
}
function __ZN8Particle6getDofEv($this) {
 $this = $this|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 72|0);
 return ($0|0);
}
function __ZN8Particle6setDofEP6Vector($this,$dof) {
 $this = $this|0;
 $dof = $dof|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 72|0);
 __ZN6Vector3setERS_($0,$dof);
 return;
}
function __ZN8Particle9setChargeEd($this,$charge) {
 $this = $this|0;
 $charge = +$charge;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 112|0);
 HEAPF64[$0>>3] = $charge;
 return;
}
function __ZN8Particle9getChargeEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 112|0);
 $1 = +HEAPF64[$0>>3];
 return (+$1);
}
function __ZN8Particle11setRecycledEb($this,$recycled) {
 $this = $this|0;
 $recycled = $recycled|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 120|0);
 $1 = $recycled&1;
 HEAP8[$0>>0] = $1;
 return;
}
function __ZN8Particle11getRecycledEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 120|0);
 $1 = HEAP8[$0>>0]|0;
 $2 = ($1<<24>>24)!=(0);
 return ($2|0);
}
function __ZN8Particle11getLifeTimeEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 96|0);
 $1 = +HEAPF64[$0>>3];
 return (+$1);
}
function __ZN8Particle11setLifeTimeEd($this,$lifeTime) {
 $this = $this|0;
 $lifeTime = +$lifeTime;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 96|0);
 HEAPF64[$0>>3] = $lifeTime;
 return;
}
function __ZN8Particle9getRadiusEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 104|0);
 $1 = +HEAPF64[$0>>3];
 return (+$1);
}
function __ZN8Particle4stepEd($this,$dt) {
 $this = $this|0;
 $dt = +$dt;
 var $0 = 0, $1 = 0.0, $10 = 0.0, $11 = 0.0, $12 = 0, $13 = 0.0, $14 = 0.0, $15 = 0, $16 = 0.0, $17 = 0.0, $18 = 0, $19 = 0.0, $2 = 0.0, $20 = 0.0, $21 = 0, $22 = 0.0, $23 = 0.0, $24 = 0.0, $25 = 0, $26 = 0.0;
 var $27 = 0.0, $28 = 0, $29 = 0.0, $3 = 0.0, $30 = 0.0, $31 = 0, $32 = 0.0, $33 = 0.0, $34 = 0, $35 = 0.0, $36 = 0.0, $37 = 0.0, $38 = 0, $39 = 0.0, $4 = 0.0, $40 = 0.0, $5 = 0, $6 = 0.0, $7 = 0.0, $8 = 0;
 var $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 96|0);
 $1 = +HEAPF64[$0>>3];
 $2 = $1 - $dt;
 HEAPF64[$0>>3] = $2;
 $3 = +HEAPF64[$this>>3];
 $4 = $3 * $dt;
 $5 = ((($this)) + 24|0);
 $6 = +HEAPF64[$5>>3];
 $7 = $6 + $4;
 HEAPF64[$5>>3] = $7;
 $8 = ((($this)) + 72|0);
 $9 = +HEAPF64[$8>>3];
 $10 = $7 * $9;
 $11 = $10 * $dt;
 $12 = ((($this)) + 48|0);
 $13 = +HEAPF64[$12>>3];
 $14 = $13 + $11;
 HEAPF64[$12>>3] = $14;
 $15 = ((($this)) + 8|0);
 $16 = +HEAPF64[$15>>3];
 $17 = $16 * $dt;
 $18 = ((($this)) + 32|0);
 $19 = +HEAPF64[$18>>3];
 $20 = $19 + $17;
 HEAPF64[$18>>3] = $20;
 $21 = ((($this)) + 80|0);
 $22 = +HEAPF64[$21>>3];
 $23 = $20 * $22;
 $24 = $23 * $dt;
 $25 = ((($this)) + 56|0);
 $26 = +HEAPF64[$25>>3];
 $27 = $26 + $24;
 HEAPF64[$25>>3] = $27;
 $28 = ((($this)) + 16|0);
 $29 = +HEAPF64[$28>>3];
 $30 = $29 * $dt;
 $31 = ((($this)) + 40|0);
 $32 = +HEAPF64[$31>>3];
 $33 = $32 + $30;
 HEAPF64[$31>>3] = $33;
 $34 = ((($this)) + 88|0);
 $35 = +HEAPF64[$34>>3];
 $36 = $33 * $35;
 $37 = $36 * $dt;
 $38 = ((($this)) + 64|0);
 $39 = +HEAPF64[$38>>3];
 $40 = $39 + $37;
 HEAPF64[$38>>3] = $40;
 return;
}
function __ZN15ParticleEmitterC2Ei($this,$id) {
 $this = $this|0;
 $id = $id|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN10BaseObjectC2Eii($this,$id,0);
 return;
}
function __ZN15ParticleEmitter15setEmissionRateEd($this,$emissionRate) {
 $this = $this|0;
 $emissionRate = +$emissionRate;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 64|0);
 HEAPF64[$0>>3] = $emissionRate;
 return;
}
function __ZN15ParticleEmitter15getEmissionRateEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 64|0);
 $1 = +HEAPF64[$0>>3];
 return (+$1);
}
function __ZN15ParticleEmitter11setVelocityEd($this,$velocity) {
 $this = $this|0;
 $velocity = +$velocity;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 72|0);
 HEAPF64[$0>>3] = $velocity;
 return;
}
function __ZN15ParticleEmitter11getVelocityEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 72|0);
 $1 = +HEAPF64[$0>>3];
 return (+$1);
}
function __ZN15ParticleEmitter9setSpreadEd($this,$spread) {
 $this = $this|0;
 $spread = +$spread;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 80|0);
 HEAPF64[$0>>3] = $spread;
 return;
}
function __ZN15ParticleEmitter9getSpreadEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 80|0);
 $1 = +HEAPF64[$0>>3];
 return (+$1);
}
function __ZN15ParticleEmitter9setChargeEd($this,$charge) {
 $this = $this|0;
 $charge = +$charge;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 88|0);
 HEAPF64[$0>>3] = $charge;
 return;
}
function __ZN15ParticleEmitter9getChargeEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 88|0);
 $1 = +HEAPF64[$0>>3];
 return (+$1);
}
function __ZN15ParticleEmitter10emitNumberEd($this,$dt) {
 $this = $this|0;
 $dt = +$dt;
 var $0 = 0, $1 = 0.0, $2 = 0.0, $3 = 0.0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 64|0);
 $1 = +HEAPF64[$0>>3];
 $2 = $1 * $dt;
 $3 = (+Math_floor((+$2)));
 $4 = (~~(($3)));
 return ($4|0);
}
function __ZN15ParticleEmitter12emitParticleEP8Particle($this,$pParticle) {
 $this = $this|0;
 $pParticle = $pParticle|0;
 var $0 = 0, $1 = 0.0, $10 = 0.0, $11 = 0.0, $12 = 0.0, $13 = 0.0, $14 = 0.0, $15 = 0, $16 = 0, $17 = 0.0, $18 = 0.0, $19 = 0.0, $2 = 0, $20 = 0.0, $21 = 0.0, $22 = 0.0, $23 = 0.0, $24 = 0.0, $25 = 0.0, $26 = 0.0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0.0, $30 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0.0, $8 = 0.0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 80|0);
 $1 = +HEAPF64[$0>>3];
 $2 = (_rand()|0);
 $3 = (+($2|0));
 $4 = $3 / 2147483647.0;
 $5 = $4 * 2.0;
 $6 = $5 + -1.0;
 $7 = $1 * $6;
 $8 = +HEAPF64[$0>>3];
 $9 = (_rand()|0);
 $10 = (+($9|0));
 $11 = $10 / 2147483647.0;
 $12 = $11 * 2.0;
 $13 = $12 + -1.0;
 $14 = $8 * $13;
 $15 = (__ZN8Particle11getVelocityEv($pParticle)|0);
 $16 = ((($this)) + 72|0);
 $17 = +HEAPF64[$16>>3];
 $18 = (+_cos($7));
 $19 = $17 * $18;
 $20 = (+_cos($14));
 $21 = $19 * $20;
 $22 = (+_sin($7));
 $23 = $17 * $22;
 $24 = $20 * $23;
 $25 = (+_sin($14));
 $26 = $17 * $25;
 __ZN6Vector3setEddd($15,$21,$24,$26);
 $27 = (__ZN8Particle11getPositionEv($pParticle)|0);
 $28 = ((($this)) + 8|0);
 __ZN6Vector3setERS_($27,$28);
 $29 = ((($this)) + 88|0);
 $30 = +HEAPF64[$29>>3];
 __ZN8Particle9setChargeEd($pParticle,$30);
 return;
}
function __ZN14ParticleSystemC2Ei($this,$maxParticles) {
 $this = $this|0;
 $maxParticles = $maxParticles|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $scevgep$i$i$i = 0, $scevgep$i$i$i5 = 0, $scevgep$i$i$i8 = 0, $scevgep4$i$i$i = 0, $scevgep4$i$i$i6 = 0, $scevgep4$i$i$i9 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 __ZN12EventEmitterC2Ev($this);
 $0 = ((($this)) + 16|0);
 $1 = ((($this)) + 20|0);
 $2 = ((($this)) + 28|0);
 $3 = ((($this)) + 32|0);
 $4 = ((($this)) + 40|0);
 $5 = ((($this)) + 64|0);
 $6 = ((($this)) + 68|0);
 $7 = ((($this)) + 88|0);
 dest=$0; stop=dest+60|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 __THREW__ = 0;
 invoke_vi(31,($7|0));
 $8 = __THREW__; __THREW__ = 0;
 $9 = $8&1;
 if (!($9)) {
  $10 = ((($this)) + 80|0);
  HEAP32[$10>>2] = $maxParticles;
  $11 = ((($this)) + 76|0);
  HEAP32[$11>>2] = 0;
  __THREW__ = 0;
  invoke_viddd(32,($7|0),1.0,1.0,1.0);
  $12 = __THREW__; __THREW__ = 0;
  $13 = $12&1;
  if (!($13)) {
   return;
  }
 }
 $14 = ___cxa_find_matching_catch_2()|0;
 $15 = tempRet0;
 $16 = HEAP32[$5>>2]|0;
 $17 = ($16|0)==(0|0);
 $18 = $16;
 if (!($17)) {
  $19 = HEAP32[$6>>2]|0;
  $20 = ($19|0)==($16|0);
  if (!($20)) {
   $scevgep$i$i$i8 = ((($19)) + -4|0);
   $21 = $scevgep$i$i$i8;
   $22 = (($21) - ($18))|0;
   $23 = $22 >>> 2;
   $24 = $23 ^ -1;
   $scevgep4$i$i$i9 = (($19) + ($24<<2)|0);
   HEAP32[$6>>2] = $scevgep4$i$i$i9;
  }
  __ZdlPv($16);
 }
 __ZNSt3__25queueIP8ParticleNS_5dequeIS2_NS_9allocatorIS2_EEEEED2Ev($4);
 $25 = HEAP32[$2>>2]|0;
 $26 = ($25|0)==(0|0);
 $27 = $25;
 if (!($26)) {
  $28 = HEAP32[$3>>2]|0;
  $29 = ($28|0)==($25|0);
  if (!($29)) {
   $scevgep$i$i$i5 = ((($28)) + -4|0);
   $30 = $scevgep$i$i$i5;
   $31 = (($30) - ($27))|0;
   $32 = $31 >>> 2;
   $33 = $32 ^ -1;
   $scevgep4$i$i$i6 = (($28) + ($33<<2)|0);
   HEAP32[$3>>2] = $scevgep4$i$i$i6;
  }
  __ZdlPv($25);
 }
 $34 = HEAP32[$0>>2]|0;
 $35 = ($34|0)==(0|0);
 $36 = $34;
 if ($35) {
  $43 = ((($this)) + 4|0);
  $44 = HEAP32[$43>>2]|0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE($this,$44);
  ___resumeException($14|0);
  // unreachable;
 }
 $37 = HEAP32[$1>>2]|0;
 $38 = ($37|0)==($34|0);
 if (!($38)) {
  $scevgep$i$i$i = ((($37)) + -4|0);
  $39 = $scevgep$i$i$i;
  $40 = (($39) - ($36))|0;
  $41 = $40 >>> 2;
  $42 = $41 ^ -1;
  $scevgep4$i$i$i = (($37) + ($42<<2)|0);
  HEAP32[$1>>2] = $scevgep4$i$i$i;
 }
 __ZdlPv($34);
 $43 = ((($this)) + 4|0);
 $44 = HEAP32[$43>>2]|0;
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE($this,$44);
 ___resumeException($14|0);
 // unreachable;
}
function __ZNSt3__25queueIP8ParticleNS_5dequeIS2_NS_9allocatorIS2_EEEEED2Ev($this) {
 $this = $this|0;
 var $$cast$i = 0, $$in$i = 0, $$lcssa$i = 0, $$pre$i = 0, $$pre2$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $__i$01$i = 0, $__i$sroa$0$0$ph$i = 0, $__i$sroa$5$0$i = 0, $__i$sroa$5$0$ph$i = 0, $__new_last2$i$i$i$i$i = 0, $phitmp$i = 0, $scevgep$i$i$i$i$i = 0, $scevgep4$i$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 16|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = $3 >>> 10;
 $5 = (($1) + ($4<<2)|0);
 $6 = ((($this)) + 8|0);
 $7 = HEAP32[$6>>2]|0;
 $8 = ($7|0)==($1|0);
 $9 = $7;
 $10 = $1;
 if ($8) {
  $11 = ((($this)) + 20|0);
  $25 = 0;$26 = $11;$57 = 0;
 } else {
  $12 = HEAP32[$5>>2]|0;
  $13 = $3 & 1023;
  $14 = (($12) + ($13<<2)|0);
  $phitmp$i = $14;
  $15 = ((($this)) + 20|0);
  $16 = HEAP32[$15>>2]|0;
  $17 = (($16) + ($3))|0;
  $18 = $17 >>> 10;
  $19 = (($1) + ($18<<2)|0);
  $20 = HEAP32[$19>>2]|0;
  $21 = $17 & 1023;
  $22 = (($20) + ($21<<2)|0);
  $25 = $22;$26 = $15;$57 = $phitmp$i;
 }
 $__i$sroa$0$0$ph$i = $5;$__i$sroa$5$0$ph$i = $57;
 L5: while(1) {
  $__i$sroa$5$0$i = $__i$sroa$5$0$ph$i;
  while(1) {
   $23 = $__i$sroa$5$0$i;
   $24 = ($23|0)==($25|0);
   if ($24) {
    break L5;
   }
   $30 = ((($23)) + 4|0);
   $31 = $30;
   $32 = HEAP32[$__i$sroa$0$0$ph$i>>2]|0;
   $33 = (($31) - ($32))|0;
   $34 = ($33|0)==(4096);
   if ($34) {
    break;
   } else {
    $__i$sroa$5$0$i = $31;
   }
  }
  $35 = ((($__i$sroa$0$0$ph$i)) + 4|0);
  $36 = HEAP32[$35>>2]|0;
  $__i$sroa$0$0$ph$i = $35;$__i$sroa$5$0$ph$i = $36;
 }
 HEAP32[$26>>2] = 0;
 $27 = (($9) - ($10))|0;
 $28 = $27 >> 2;
 $29 = ($28>>>0)>(2);
 if ($29) {
  $$in$i = $1;
  while(1) {
   $37 = HEAP32[$$in$i>>2]|0;
   __ZdlPv($37);
   $38 = HEAP32[$0>>2]|0;
   $39 = ((($38)) + 4|0);
   HEAP32[$0>>2] = $39;
   $40 = HEAP32[$6>>2]|0;
   $$cast$i = $39;
   $41 = (($40) - ($$cast$i))|0;
   $42 = $41 >> 2;
   $43 = ($42>>>0)>(2);
   if ($43) {
    $$in$i = $39;
   } else {
    $$lcssa$i = $42;
    break;
   }
  }
 } else {
  $$lcssa$i = $28;
 }
 switch ($$lcssa$i|0) {
 case 1:  {
  HEAP32[$2>>2] = 512;
  break;
 }
 case 2:  {
  HEAP32[$2>>2] = 1024;
  break;
 }
 default: {
 }
 }
 $44 = HEAP32[$0>>2]|0;
 $45 = HEAP32[$6>>2]|0;
 $46 = ($44|0)==($45|0);
 if (!($46)) {
  $__i$01$i = $44;
  while(1) {
   $47 = HEAP32[$__i$01$i>>2]|0;
   __ZdlPv($47);
   $48 = ((($__i$01$i)) + 4|0);
   $49 = ($48|0)==($45|0);
   if ($49) {
    break;
   } else {
    $__i$01$i = $48;
   }
  }
  $$pre$i = HEAP32[$0>>2]|0;
  $$pre2$i = HEAP32[$6>>2]|0;
  $50 = ($$pre2$i|0)==($$pre$i|0);
  if (!($50)) {
   $__new_last2$i$i$i$i$i = $$pre$i;
   $scevgep$i$i$i$i$i = ((($$pre2$i)) + -4|0);
   $51 = $scevgep$i$i$i$i$i;
   $52 = (($51) - ($__new_last2$i$i$i$i$i))|0;
   $53 = $52 >>> 2;
   $54 = $53 ^ -1;
   $scevgep4$i$i$i$i$i = (($$pre2$i) + ($54<<2)|0);
   HEAP32[$6>>2] = $scevgep4$i$i$i$i$i;
  }
 }
 $55 = HEAP32[$this>>2]|0;
 $56 = ($55|0)==(0|0);
 if ($56) {
  return;
 }
 __ZdlPv($55);
 return;
}
function __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE($this,$__nd) {
 $this = $this|0;
 $__nd = $__nd|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($__nd|0)==(0|0);
 if ($0) {
  return;
 }
 $1 = HEAP32[$__nd>>2]|0;
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE($this,$1);
 $2 = ((($__nd)) + 4|0);
 $3 = HEAP32[$2>>2]|0;
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE($this,$3);
 $4 = ((($__nd)) + 16|0);
 __THREW__ = 0;
 invoke_vi(33,($4|0));
 $5 = __THREW__; __THREW__ = 0;
 $6 = $5&1;
 if ($6) {
  $7 = ___cxa_find_matching_catch_2()|0;
  $8 = tempRet0;
  ___cxa_call_unexpected(($7|0));
  // unreachable;
 }
 __ZdlPv($__nd);
 return;
}
function __ZN14ParticleSystemD2Ev($this) {
 $this = $this|0;
 var $$pre = 0, $$pre31 = 0, $$pre32 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $7 = 0, $8 = 0, $9 = 0, $it$sroa$0$027 = 0, $it1$sroa$0$023 = 0, $it2$sroa$0$022 = 0, $scevgep$i$i$i12 = 0, $scevgep$i$i$i17 = 0, $scevgep$i$i$i7 = 0, $scevgep4$i$i$i13 = 0, $scevgep4$i$i$i18 = 0, $scevgep4$i$i$i8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 16|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 20|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1|0)==($3|0);
 if (!($4)) {
  $60 = $3;$it$sroa$0$027 = $1;
  while(1) {
   $10 = HEAP32[$it$sroa$0$027>>2]|0;
   $11 = ($10|0)==(0|0);
   if ($11) {
    $14 = $60;
   } else {
    __ZdlPv($10);
    $$pre = HEAP32[$2>>2]|0;
    $14 = $$pre;
   }
   $12 = ((($it$sroa$0$027)) + 4|0);
   $13 = ($12|0)==($14|0);
   if ($13) {
    break;
   } else {
    $60 = $14;$it$sroa$0$027 = $12;
   }
  }
 }
 $5 = ((($this)) + 64|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = ((($this)) + 68|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = ($6|0)==($8|0);
 if (!($9)) {
  $61 = $8;$it1$sroa$0$023 = $6;
  while(1) {
   $20 = HEAP32[$it1$sroa$0$023>>2]|0;
   $21 = ($20|0)==(0|0);
   if ($21) {
    $24 = $61;
   } else {
    __ZdlPv($20);
    $$pre31 = HEAP32[$7>>2]|0;
    $24 = $$pre31;
   }
   $22 = ((($it1$sroa$0$023)) + 4|0);
   $23 = ($22|0)==($24|0);
   if ($23) {
    break;
   } else {
    $61 = $24;$it1$sroa$0$023 = $22;
   }
  }
 }
 $15 = ((($this)) + 28|0);
 $16 = HEAP32[$15>>2]|0;
 $17 = ((($this)) + 32|0);
 $18 = HEAP32[$17>>2]|0;
 $19 = ($16|0)==($18|0);
 if (!($19)) {
  $62 = $18;$it2$sroa$0$022 = $16;
  while(1) {
   $34 = HEAP32[$it2$sroa$0$022>>2]|0;
   $35 = ($34|0)==(0|0);
   if ($35) {
    $38 = $62;
   } else {
    __ZdlPv($34);
    $$pre32 = HEAP32[$17>>2]|0;
    $38 = $$pre32;
   }
   $36 = ((($it2$sroa$0$022)) + 4|0);
   $37 = ($36|0)==($38|0);
   if ($37) {
    break;
   } else {
    $62 = $38;$it2$sroa$0$022 = $36;
   }
  }
 }
 $25 = HEAP32[$5>>2]|0;
 $26 = ($25|0)==(0|0);
 $27 = $25;
 if (!($26)) {
  $28 = HEAP32[$7>>2]|0;
  $29 = ($28|0)==($25|0);
  if (!($29)) {
   $scevgep$i$i$i17 = ((($28)) + -4|0);
   $30 = $scevgep$i$i$i17;
   $31 = (($30) - ($27))|0;
   $32 = $31 >>> 2;
   $33 = $32 ^ -1;
   $scevgep4$i$i$i18 = (($28) + ($33<<2)|0);
   HEAP32[$7>>2] = $scevgep4$i$i$i18;
  }
  __ZdlPv($25);
 }
 $39 = ((($this)) + 40|0);
 __ZNSt3__25queueIP8ParticleNS_5dequeIS2_NS_9allocatorIS2_EEEEED2Ev($39);
 $40 = HEAP32[$15>>2]|0;
 $41 = ($40|0)==(0|0);
 $42 = $40;
 if (!($41)) {
  $43 = HEAP32[$17>>2]|0;
  $44 = ($43|0)==($40|0);
  if (!($44)) {
   $scevgep$i$i$i12 = ((($43)) + -4|0);
   $45 = $scevgep$i$i$i12;
   $46 = (($45) - ($42))|0;
   $47 = $46 >>> 2;
   $48 = $47 ^ -1;
   $scevgep4$i$i$i13 = (($43) + ($48<<2)|0);
   HEAP32[$17>>2] = $scevgep4$i$i$i13;
  }
  __ZdlPv($40);
 }
 $49 = HEAP32[$0>>2]|0;
 $50 = ($49|0)==(0|0);
 $51 = $49;
 if ($50) {
  $58 = ((($this)) + 4|0);
  $59 = HEAP32[$58>>2]|0;
  __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE($this,$59);
  return;
 }
 $52 = HEAP32[$2>>2]|0;
 $53 = ($52|0)==($49|0);
 if (!($53)) {
  $scevgep$i$i$i7 = ((($52)) + -4|0);
  $54 = $scevgep$i$i$i7;
  $55 = (($54) - ($51))|0;
  $56 = $55 >>> 2;
  $57 = $56 ^ -1;
  $scevgep4$i$i$i8 = (($52) + ($57<<2)|0);
  HEAP32[$2>>2] = $scevgep4$i$i$i8;
 }
 __ZdlPv($49);
 $58 = ((($this)) + 4|0);
 $59 = HEAP32[$58>>2]|0;
 __ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE($this,$59);
 return;
}
function __ZN14ParticleSystem7destroyEv($this) {
 $this = $this|0;
 var $$lcssa = 0, $$pre = 0, $$pre4 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__new_last2$i$i$i = 0;
 var $it$sroa$0$02 = 0, $scevgep$i$i$i = 0, $scevgep4$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 28|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 32|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1|0)==($3|0);
 if ($4) {
  return;
 } else {
  $15 = $3;$it$sroa$0$02 = $1;
 }
 while(1) {
  $10 = HEAP32[$it$sroa$0$02>>2]|0;
  $11 = ($10|0)==(0|0);
  if ($11) {
   $14 = $15;
  } else {
   __ZdlPv($10);
   $$pre = HEAP32[$2>>2]|0;
   $14 = $$pre;
  }
  $12 = ((($it$sroa$0$02)) + 4|0);
  $13 = ($12|0)==($14|0);
  if ($13) {
   $$lcssa = $14;
   break;
  } else {
   $15 = $14;$it$sroa$0$02 = $12;
  }
 }
 $$pre4 = HEAP32[$0>>2]|0;
 $5 = ($$lcssa|0)==($$pre4|0);
 if ($5) {
  return;
 }
 $__new_last2$i$i$i = $$pre4;
 $scevgep$i$i$i = ((($$lcssa)) + -4|0);
 $6 = $scevgep$i$i$i;
 $7 = (($6) - ($__new_last2$i$i$i))|0;
 $8 = $7 >>> 2;
 $9 = $8 ^ -1;
 $scevgep4$i$i$i = (($$lcssa) + ($9<<2)|0);
 HEAP32[$2>>2] = $scevgep4$i$i$i;
 return;
}
function __ZN14ParticleSystem15setMaxParticlesEi($this,$maxParticles) {
 $this = $this|0;
 $maxParticles = $maxParticles|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 80|0);
 HEAP32[$0>>2] = $maxParticles;
 return;
}
function __ZN14ParticleSystem15getMaxParticlesEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 80|0);
 $1 = HEAP32[$0>>2]|0;
 return ($1|0);
}
function __ZN14ParticleSystem6setDofEddd($this,$x,$y,$z) {
 $this = $this|0;
 $x = +$x;
 $y = +$y;
 $z = +$z;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 88|0);
 __ZN6Vector3setEddd($0,$x,$y,$z);
 return;
}
function __ZN14ParticleSystem13getObjectByIdEi($this,$id) {
 $this = $this|0;
 $id = $id|0;
 var $$lcssa = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $it$sroa$0$08 = 0, $it1$sroa$0$07 = 0, $it1$sroa$0$07$lcssa = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 16|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 20|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1|0)==($3|0);
 L1: do {
  if (!($4)) {
   $it$sroa$0$08 = $1;
   while(1) {
    $8 = HEAP32[$it$sroa$0$08>>2]|0;
    $9 = (__ZN10BaseObject5getIdEv($8)|0);
    $10 = ($9|0)==($id|0);
    $7 = ((($it$sroa$0$08)) + 4|0);
    if ($10) {
     $$lcssa = $it$sroa$0$08;
     break;
    }
    $5 = HEAP32[$2>>2]|0;
    $6 = ($7|0)==($5|0);
    if ($6) {
     break L1;
    } else {
     $it$sroa$0$08 = $7;
    }
   }
   $28 = HEAP32[$$lcssa>>2]|0;
   return ($28|0);
  }
 } while(0);
 $11 = ((($this)) + 64|0);
 $12 = HEAP32[$11>>2]|0;
 $13 = ((($this)) + 68|0);
 $14 = HEAP32[$13>>2]|0;
 $15 = ($12|0)==($14|0);
 if ($15) {
  $27 = 0;
  return ($27|0);
 } else {
  $it1$sroa$0$07 = $12;
 }
 while(1) {
  $16 = HEAP32[$it1$sroa$0$07>>2]|0;
  $17 = ((($16)) + 8|0);
  $18 = (__ZN10BaseObject5getIdEv($17)|0);
  $19 = ($18|0)==($id|0);
  if ($19) {
   $it1$sroa$0$07$lcssa = $it1$sroa$0$07;
   break;
  }
  $20 = ((($it1$sroa$0$07)) + 4|0);
  $21 = HEAP32[$13>>2]|0;
  $22 = ($20|0)==($21|0);
  if ($22) {
   $27 = 0;
   label = 8;
   break;
  } else {
   $it1$sroa$0$07 = $20;
  }
 }
 if ((label|0) == 8) {
  return ($27|0);
 }
 $23 = HEAP32[$it1$sroa$0$07$lcssa>>2]|0;
 $24 = ($23|0)==(0|0);
 $25 = ((($23)) + 8|0);
 $26 = $24 ? 0 : $25;
 $27 = $26;
 return ($27|0);
}
function __ZN14ParticleSystem10getEmitterEi($this,$id) {
 $this = $this|0;
 $id = $id|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $it$sroa$0$03 = 0, $it$sroa$0$03$lcssa = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 16|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 20|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1|0)==($3|0);
 if ($4) {
  $12 = 0;
  return ($12|0);
 } else {
  $it$sroa$0$03 = $1;
 }
 while(1) {
  $5 = HEAP32[$it$sroa$0$03>>2]|0;
  $6 = (__ZN10BaseObject5getIdEv($5)|0);
  $7 = ($6|0)==($id|0);
  if ($7) {
   $it$sroa$0$03$lcssa = $it$sroa$0$03;
   break;
  }
  $8 = ((($it$sroa$0$03)) + 4|0);
  $9 = HEAP32[$2>>2]|0;
  $10 = ($8|0)==($9|0);
  if ($10) {
   $12 = 0;
   label = 5;
   break;
  } else {
   $it$sroa$0$03 = $8;
  }
 }
 if ((label|0) == 5) {
  return ($12|0);
 }
 $11 = HEAP32[$it$sroa$0$03$lcssa>>2]|0;
 $12 = $11;
 return ($12|0);
}
function __ZN14ParticleSystem16getMagneticFieldEi($this,$id) {
 $this = $this|0;
 $id = $id|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $it$sroa$0$03 = 0, $it$sroa$0$03$lcssa = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 64|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 68|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1|0)==($3|0);
 if ($4) {
  $13 = 0;
  return ($13|0);
 } else {
  $it$sroa$0$03 = $1;
 }
 while(1) {
  $5 = HEAP32[$it$sroa$0$03>>2]|0;
  $6 = ((($5)) + 8|0);
  $7 = (__ZN10BaseObject5getIdEv($6)|0);
  $8 = ($7|0)==($id|0);
  if ($8) {
   $it$sroa$0$03$lcssa = $it$sroa$0$03;
   break;
  }
  $9 = ((($it$sroa$0$03)) + 4|0);
  $10 = HEAP32[$2>>2]|0;
  $11 = ($9|0)==($10|0);
  if ($11) {
   $13 = 0;
   label = 5;
   break;
  } else {
   $it$sroa$0$03 = $9;
  }
 }
 if ((label|0) == 5) {
  return ($13|0);
 }
 $12 = HEAP32[$it$sroa$0$03$lcssa>>2]|0;
 $13 = $12;
 return ($13|0);
}
function __ZN14ParticleSystem16initParticleLoopEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 12|0);
 $1 = ((($this)) + 28|0);
 $2 = HEAP32[$1>>2]|0;
 HEAP32[$0>>2] = $2;
 return;
}
function __ZN14ParticleSystem12nextParticleEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 32|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 12|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($3|0)==($1|0);
 if ($4) {
  $7 = 0;
  return ($7|0);
 }
 $5 = ((($3)) + 4|0);
 HEAP32[$2>>2] = $5;
 $6 = HEAP32[$3>>2]|0;
 $7 = $6;
 return ($7|0);
}
function __ZN14ParticleSystem10addEmitterEi($this,$id) {
 $this = $this|0;
 $id = $id|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $pEmitter = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $pEmitter = sp;
 $0 = (__Znwj(96)|0);
 __THREW__ = 0;
 invoke_vii(34,($0|0),($id|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $12 = ___cxa_find_matching_catch_2()|0;
  $13 = tempRet0;
  __ZdlPv($0);
  ___resumeException($12|0);
  // unreachable;
 }
 HEAP32[$pEmitter>>2] = $0;
 $3 = ((($this)) + 20|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ((($this)) + 24|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = ($4|0)==($6|0);
 if ($7) {
  $11 = ((($this)) + 16|0);
  __ZNSt3__26vectorIP15ParticleEmitterNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($11,$pEmitter);
  STACKTOP = sp;return ($0|0);
 } else {
  $8 = $0;
  HEAP32[$4>>2] = $8;
  $9 = HEAP32[$3>>2]|0;
  $10 = ((($9)) + 4|0);
  HEAP32[$3>>2] = $10;
  STACKTOP = sp;return ($0|0);
 }
 return (0)|0;
}
function __ZNSt3__26vectorIP15ParticleEmitterNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$0$i13 = 0, $$0$i2 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = HEAP32[$this>>2]|0;
 $3 = (($1) - ($2))|0;
 $4 = $3 >> 2;
 $5 = (($4) + 1)|0;
 $6 = ($5>>>0)>(1073741823);
 if ($6) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($this);
  // unreachable;
 }
 $7 = ((($this)) + 8|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = (($8) - ($2))|0;
 $10 = $9 >> 2;
 $11 = ($10>>>0)<(536870911);
 if ($11) {
  $15 = $9 >> 1;
  $16 = ($15>>>0)<($5>>>0);
  $17 = $16 ? $5 : $15;
  $18 = HEAP32[$0>>2]|0;
  $19 = (($18) - ($2))|0;
  $20 = $19 >> 2;
  $21 = ($17|0)==(0);
  if ($21) {
   $$0$i2 = 0;$27 = 0;$28 = $20;$35 = $18;
  } else {
   $22 = ($17>>>0)>(1073741823);
   if ($22) {
    $23 = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($23);
    ___cxa_throw(($23|0),(1200|0),(20|0));
    // unreachable;
   } else {
    $$0$i13 = $17;$44 = $18;$45 = $20;
    label = 8;
   }
  }
 } else {
  $12 = HEAP32[$0>>2]|0;
  $13 = (($12) - ($2))|0;
  $14 = $13 >> 2;
  $$0$i13 = 1073741823;$44 = $12;$45 = $14;
  label = 8;
 }
 if ((label|0) == 8) {
  $24 = $$0$i13 << 2;
  $25 = (__Znwj($24)|0);
  $$0$i2 = $$0$i13;$27 = $25;$28 = $45;$35 = $44;
 }
 $26 = (($27) + ($28<<2)|0);
 $29 = (($27) + ($$0$i2<<2)|0);
 $30 = $29;
 $31 = HEAP32[$__x>>2]|0;
 HEAP32[$26>>2] = $31;
 $32 = ((($26)) + 4|0);
 $33 = $32;
 $34 = (($35) - ($2))|0;
 $36 = $34 >> 2;
 $37 = (0 - ($36))|0;
 $38 = (($26) + ($37<<2)|0);
 $39 = $38;
 $40 = ($34|0)>(0);
 if ($40) {
  $41 = $2;
  _memcpy(($38|0),($41|0),($34|0))|0;
 }
 HEAP32[$this>>2] = $39;
 HEAP32[$0>>2] = $33;
 HEAP32[$7>>2] = $30;
 $42 = ($2|0)==(0);
 if ($42) {
  return;
 }
 $43 = $2;
 __ZdlPv($43);
 return;
}
function __ZN14ParticleSystem16addMagneticFieldEi($this,$id) {
 $this = $this|0;
 $id = $id|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = sp;
 $1 = (__Znwj(80)|0);
 __THREW__ = 0;
 invoke_vii(35,($1|0),($id|0));
 $2 = __THREW__; __THREW__ = 0;
 $3 = $2&1;
 if ($3) {
  $13 = ___cxa_find_matching_catch_2()|0;
  $14 = tempRet0;
  __ZdlPv($1);
  ___resumeException($13|0);
  // unreachable;
 }
 HEAP32[$0>>2] = $1;
 $4 = ((($this)) + 68|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = ((($this)) + 72|0);
 $7 = HEAP32[$6>>2]|0;
 $8 = ($5|0)==($7|0);
 if ($8) {
  $12 = ((($this)) + 64|0);
  __ZNSt3__26vectorIP5FieldNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($12,$0);
  STACKTOP = sp;return ($1|0);
 } else {
  $9 = $1;
  HEAP32[$5>>2] = $9;
  $10 = HEAP32[$4>>2]|0;
  $11 = ((($10)) + 4|0);
  HEAP32[$4>>2] = $11;
  STACKTOP = sp;return ($1|0);
 }
 return (0)|0;
}
function __ZNSt3__26vectorIP5FieldNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$0$i13 = 0, $$0$i2 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = HEAP32[$this>>2]|0;
 $3 = (($1) - ($2))|0;
 $4 = $3 >> 2;
 $5 = (($4) + 1)|0;
 $6 = ($5>>>0)>(1073741823);
 if ($6) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($this);
  // unreachable;
 }
 $7 = ((($this)) + 8|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = (($8) - ($2))|0;
 $10 = $9 >> 2;
 $11 = ($10>>>0)<(536870911);
 if ($11) {
  $15 = $9 >> 1;
  $16 = ($15>>>0)<($5>>>0);
  $17 = $16 ? $5 : $15;
  $18 = HEAP32[$0>>2]|0;
  $19 = (($18) - ($2))|0;
  $20 = $19 >> 2;
  $21 = ($17|0)==(0);
  if ($21) {
   $$0$i2 = 0;$27 = 0;$28 = $20;$35 = $18;
  } else {
   $22 = ($17>>>0)>(1073741823);
   if ($22) {
    $23 = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($23);
    ___cxa_throw(($23|0),(1200|0),(20|0));
    // unreachable;
   } else {
    $$0$i13 = $17;$44 = $18;$45 = $20;
    label = 8;
   }
  }
 } else {
  $12 = HEAP32[$0>>2]|0;
  $13 = (($12) - ($2))|0;
  $14 = $13 >> 2;
  $$0$i13 = 1073741823;$44 = $12;$45 = $14;
  label = 8;
 }
 if ((label|0) == 8) {
  $24 = $$0$i13 << 2;
  $25 = (__Znwj($24)|0);
  $$0$i2 = $$0$i13;$27 = $25;$28 = $45;$35 = $44;
 }
 $26 = (($27) + ($28<<2)|0);
 $29 = (($27) + ($$0$i2<<2)|0);
 $30 = $29;
 $31 = HEAP32[$__x>>2]|0;
 HEAP32[$26>>2] = $31;
 $32 = ((($26)) + 4|0);
 $33 = $32;
 $34 = (($35) - ($2))|0;
 $36 = $34 >> 2;
 $37 = (0 - ($36))|0;
 $38 = (($26) + ($37<<2)|0);
 $39 = $38;
 $40 = ($34|0)>(0);
 if ($40) {
  $41 = $2;
  _memcpy(($38|0),($41|0),($34|0))|0;
 }
 HEAP32[$this>>2] = $39;
 HEAP32[$0>>2] = $33;
 HEAP32[$7>>2] = $30;
 $42 = ($2|0)==(0);
 if ($42) {
  return;
 }
 $43 = $2;
 __ZdlPv($43);
 return;
}
function __ZN14ParticleSystem4stepEd($this,$dt) {
 $this = $this|0;
 $dt = +$dt;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i$01$i = 0, $it$sroa$0$02$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 16|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 20|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1|0)==($3|0);
 if ($4) {
  __ZN14ParticleSystem15filterParticlesEd($this,$dt);
  return;
 } else {
  $it$sroa$0$02$i = $1;
 }
 while(1) {
  $5 = HEAP32[$it$sroa$0$02$i>>2]|0;
  $6 = (__ZN15ParticleEmitter10emitNumberEd($5,$dt)|0);
  $7 = ($6|0)>(0);
  if ($7) {
   $i$01$i = 0;
   while(1) {
    $11 = (__ZN14ParticleSystem10popRecycleEv($this)|0);
    $12 = ($11|0)==(0|0);
    if (!($12)) {
     $13 = HEAP32[$it$sroa$0$02$i>>2]|0;
     __ZN15ParticleEmitter12emitParticleEP8Particle($13,$11);
    }
    $14 = (($i$01$i) + 1)|0;
    $15 = HEAP32[$it$sroa$0$02$i>>2]|0;
    $16 = (__ZN15ParticleEmitter10emitNumberEd($15,$dt)|0);
    $17 = ($14|0)<($16|0);
    if ($17) {
     $i$01$i = $14;
    } else {
     break;
    }
   }
  }
  $8 = ((($it$sroa$0$02$i)) + 4|0);
  $9 = HEAP32[$2>>2]|0;
  $10 = ($8|0)==($9|0);
  if ($10) {
   break;
  } else {
   $it$sroa$0$02$i = $8;
  }
 }
 __ZN14ParticleSystem15filterParticlesEd($this,$dt);
 return;
}
function __ZN14ParticleSystem10popRecycleEv($this) {
 $this = $this|0;
 var $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $pParticle1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $pParticle1 = sp;
 $0 = ((($this)) + 76|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 80|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1|0)<($3|0);
 if (!($4)) {
  $$0 = 0;
  STACKTOP = sp;return ($$0|0);
 }
 $5 = (($1) + 1)|0;
 HEAP32[$0>>2] = $5;
 $6 = ((($this)) + 60|0);
 $7 = HEAP32[$6>>2]|0;
 $8 = ($7|0)==(0);
 if (!($8)) {
  $9 = ((($this)) + 44|0);
  $10 = HEAP32[$9>>2]|0;
  $11 = ((($this)) + 56|0);
  $12 = HEAP32[$11>>2]|0;
  $13 = $12 >>> 10;
  $14 = (($10) + ($13<<2)|0);
  $15 = HEAP32[$14>>2]|0;
  $16 = $12 & 1023;
  $17 = (($15) + ($16<<2)|0);
  $18 = HEAP32[$17>>2]|0;
  $19 = (($7) + -1)|0;
  HEAP32[$6>>2] = $19;
  $20 = (($12) + 1)|0;
  HEAP32[$11>>2] = $20;
  $21 = ($20>>>0)>(2047);
  if ($21) {
   $22 = HEAP32[$10>>2]|0;
   __ZdlPv($22);
   $23 = HEAP32[$9>>2]|0;
   $24 = ((($23)) + 4|0);
   HEAP32[$9>>2] = $24;
   $25 = HEAP32[$11>>2]|0;
   $26 = (($25) + -1024)|0;
   HEAP32[$11>>2] = $26;
  }
  __ZN8Particle5resetEv($18);
  $$0 = $18;
  STACKTOP = sp;return ($$0|0);
 }
 $27 = (__Znwj(128)|0);
 __THREW__ = 0;
 invoke_vi(36,($27|0));
 $28 = __THREW__; __THREW__ = 0;
 $29 = $28&1;
 if ($29) {
  $40 = ___cxa_find_matching_catch_2()|0;
  $41 = tempRet0;
  __ZdlPv($27);
  ___resumeException($40|0);
  // unreachable;
 }
 HEAP32[$pParticle1>>2] = $27;
 $30 = ((($this)) + 32|0);
 $31 = HEAP32[$30>>2]|0;
 $32 = ((($this)) + 36|0);
 $33 = HEAP32[$32>>2]|0;
 $34 = ($31|0)==($33|0);
 if ($34) {
  $38 = ((($this)) + 28|0);
  __ZNSt3__26vectorIP8ParticleNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($38,$pParticle1);
 } else {
  $35 = $27;
  HEAP32[$31>>2] = $35;
  $36 = HEAP32[$30>>2]|0;
  $37 = ((($36)) + 4|0);
  HEAP32[$30>>2] = $37;
 }
 $39 = ((($this)) + 88|0);
 __ZN8Particle6setDofEP6Vector($27,$39);
 $$0 = $27;
 STACKTOP = sp;return ($$0|0);
}
function __ZNSt3__26vectorIP8ParticleNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$0$i13 = 0, $$0$i2 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = HEAP32[$this>>2]|0;
 $3 = (($1) - ($2))|0;
 $4 = $3 >> 2;
 $5 = (($4) + 1)|0;
 $6 = ($5>>>0)>(1073741823);
 if ($6) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($this);
  // unreachable;
 }
 $7 = ((($this)) + 8|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = (($8) - ($2))|0;
 $10 = $9 >> 2;
 $11 = ($10>>>0)<(536870911);
 if ($11) {
  $15 = $9 >> 1;
  $16 = ($15>>>0)<($5>>>0);
  $17 = $16 ? $5 : $15;
  $18 = HEAP32[$0>>2]|0;
  $19 = (($18) - ($2))|0;
  $20 = $19 >> 2;
  $21 = ($17|0)==(0);
  if ($21) {
   $$0$i2 = 0;$27 = 0;$28 = $20;$35 = $18;
  } else {
   $22 = ($17>>>0)>(1073741823);
   if ($22) {
    $23 = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($23);
    ___cxa_throw(($23|0),(1200|0),(20|0));
    // unreachable;
   } else {
    $$0$i13 = $17;$44 = $18;$45 = $20;
    label = 8;
   }
  }
 } else {
  $12 = HEAP32[$0>>2]|0;
  $13 = (($12) - ($2))|0;
  $14 = $13 >> 2;
  $$0$i13 = 1073741823;$44 = $12;$45 = $14;
  label = 8;
 }
 if ((label|0) == 8) {
  $24 = $$0$i13 << 2;
  $25 = (__Znwj($24)|0);
  $$0$i2 = $$0$i13;$27 = $25;$28 = $45;$35 = $44;
 }
 $26 = (($27) + ($28<<2)|0);
 $29 = (($27) + ($$0$i2<<2)|0);
 $30 = $29;
 $31 = HEAP32[$__x>>2]|0;
 HEAP32[$26>>2] = $31;
 $32 = ((($26)) + 4|0);
 $33 = $32;
 $34 = (($35) - ($2))|0;
 $36 = $34 >> 2;
 $37 = (0 - ($36))|0;
 $38 = (($26) + ($37<<2)|0);
 $39 = $38;
 $40 = ($34|0)>(0);
 if ($40) {
  $41 = $2;
  _memcpy(($38|0),($41|0),($34|0))|0;
 }
 HEAP32[$this>>2] = $39;
 HEAP32[$0>>2] = $33;
 HEAP32[$7>>2] = $30;
 $42 = ($2|0)==(0);
 if ($42) {
  return;
 }
 $43 = $2;
 __ZdlPv($43);
 return;
}
function __ZN14ParticleSystem15filterParticlesEd($this,$dt) {
 $this = $this|0;
 $dt = +$dt;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $fIt$sroa$0$02 = 0, $pIt$sroa$0$03 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 28|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 32|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1|0)==($3|0);
 if ($4) {
  return;
 }
 $5 = ((($this)) + 64|0);
 $6 = ((($this)) + 68|0);
 $pIt$sroa$0$03 = $1;
 while(1) {
  $7 = HEAP32[$pIt$sroa$0$03>>2]|0;
  $8 = (__ZN14ParticleSystem14filterParticleEP8Particle($this,$7)|0);
  if (!($8)) {
   $9 = HEAP32[$pIt$sroa$0$03>>2]|0;
   $10 = (__ZN8Particle15getAccelerationEv($9)|0);
   __ZN6Vector3setEddd($10,0.0,0.0,0.0);
   $11 = HEAP32[$5>>2]|0;
   $12 = HEAP32[$6>>2]|0;
   $13 = ($11|0)==($12|0);
   if (!($13)) {
    $fIt$sroa$0$02 = $11;
    while(1) {
     $15 = HEAP32[$fIt$sroa$0$02>>2]|0;
     $16 = HEAP32[$15>>2]|0;
     $17 = HEAP32[$16>>2]|0;
     $18 = HEAP32[$pIt$sroa$0$03>>2]|0;
     FUNCTION_TABLE_vii[$17 & 63]($15,$18);
     $19 = ((($fIt$sroa$0$02)) + 4|0);
     $20 = HEAP32[$6>>2]|0;
     $21 = ($19|0)==($20|0);
     if ($21) {
      break;
     } else {
      $fIt$sroa$0$02 = $19;
     }
    }
   }
   $14 = HEAP32[$pIt$sroa$0$03>>2]|0;
   __ZN8Particle4stepEd($14,$dt);
  }
  $22 = ((($pIt$sroa$0$03)) + 4|0);
  $23 = HEAP32[$2>>2]|0;
  $24 = ($22|0)==($23|0);
  if ($24) {
   break;
  } else {
   $pIt$sroa$0$03 = $22;
  }
 }
 return;
}
function __ZN14ParticleSystem14filterParticleEP8Particle($this,$pParticle) {
 $this = $this|0;
 $pParticle = $pParticle|0;
 var $$0 = 0, $$pre$i$i$i = 0, $$pre1$i$i$i = 0, $$pre2$i$i$i = 0, $0 = 0, $1 = 0.0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $sum$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN8Particle11getRecycledEv($pParticle)|0);
 if ($0) {
  $$0 = 1;
  return ($$0|0);
 }
 $1 = (+__ZN8Particle11getLifeTimeEv($pParticle));
 $2 = $1 < 0.0;
 if (!($2)) {
  $$0 = 0;
  return ($$0|0);
 }
 $3 = $pParticle;
 $4 = ((($this)) + 76|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = (($5) + -1)|0;
 HEAP32[$4>>2] = $6;
 __ZN8Particle11setRecycledEb($pParticle,1);
 $7 = ((($this)) + 48|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = ((($this)) + 44|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = (($8) - ($10))|0;
 $12 = ($8|0)==($10|0);
 $13 = $11 << 8;
 $14 = (($13) + -1)|0;
 $15 = $12 ? 0 : $14;
 $16 = ((($this)) + 56|0);
 $17 = HEAP32[$16>>2]|0;
 $18 = ((($this)) + 60|0);
 $19 = HEAP32[$18>>2]|0;
 $sum$i$i$i$i = (($19) + ($17))|0;
 $20 = ($15|0)==($sum$i$i$i$i|0);
 $21 = $10;
 if ($20) {
  $22 = ((($this)) + 40|0);
  __ZNSt3__25dequeIP8ParticleNS_9allocatorIS2_EEE19__add_back_capacityEv($22);
  $$pre$i$i$i = HEAP32[$18>>2]|0;
  $$pre1$i$i$i = HEAP32[$16>>2]|0;
  $$pre2$i$i$i = HEAP32[$9>>2]|0;
  $24 = $$pre$i$i$i;$25 = $$pre1$i$i$i;$28 = $$pre2$i$i$i;
 } else {
  $24 = $19;$25 = $17;$28 = $21;
 }
 $23 = (($24) + ($25))|0;
 $26 = $23 >>> 10;
 $27 = (($28) + ($26<<2)|0);
 $29 = HEAP32[$27>>2]|0;
 $30 = $23 & 1023;
 $31 = (($29) + ($30<<2)|0);
 HEAP32[$31>>2] = $3;
 $32 = (($24) + 1)|0;
 HEAP32[$18>>2] = $32;
 $$0 = 1;
 return ($$0|0);
}
function __ZNSt3__25dequeIP8ParticleNS_9allocatorIS2_EEE19__add_back_capacityEv($this) {
 $this = $this|0;
 var $$0 = 0, $$01 = 0, $$in = 0, $$in$i = 0, $$in$i12 = 0, $$in$i25 = 0, $$lcssa = 0, $$lcssa69 = 0, $$lcssa70 = 0, $$lcssa71 = 0, $$pre$i = 0, $$pre$i14 = 0, $$pre$i27 = 0, $$pre4$i = 0, $$pre4$i21 = 0, $$pre4$i8 = 0, $$pre5$i = 0, $$pre5$i19 = 0, $$pre5$i32 = 0, $0 = 0;
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0;
 var $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0;
 var $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0;
 var $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $__buf = 0, $__i$0 = 0, $__new_last2$i$i$i$i = 0, $__new_last2$i$i$i$i2 = 0, $__t$sroa$10$0$i = 0;
 var $__t$sroa$10$0$i11 = 0, $__t$sroa$10$0$i24 = 0, $__t$sroa$10$1$i = 0, $__t$sroa$10$1$i16 = 0, $__t$sroa$10$1$i29 = 0, $scevgep$i$i$i$i = 0, $scevgep$i$i$i$i3 = 0, $scevgep4$i$i$i$i = 0, $scevgep4$i$i$i$i4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = sp + 20|0;
 $__buf = sp;
 $1 = ((($this)) + 16|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2>>>0)>(1023);
 if ($3) {
  $4 = (($2) + -1024)|0;
  HEAP32[$1>>2] = $4;
  $5 = ((($this)) + 4|0);
  $6 = HEAP32[$5>>2]|0;
  $7 = HEAP32[$6>>2]|0;
  $8 = ((($6)) + 4|0);
  HEAP32[$5>>2] = $8;
  $9 = ((($this)) + 8|0);
  $10 = HEAP32[$9>>2]|0;
  $11 = ((($this)) + 12|0);
  $12 = HEAP32[$11>>2]|0;
  $13 = ($10|0)==($12|0);
  $14 = $12;
  $15 = $10;
  do {
   if ($13) {
    $16 = HEAP32[$this>>2]|0;
    $17 = ($8>>>0)>($16>>>0);
    $18 = $16;
    if ($17) {
     $19 = $8;
     $20 = (($19) - ($18))|0;
     $21 = $20 >> 2;
     $22 = (($21) + 1)|0;
     $23 = (($22|0) / -2)&-1;
     $24 = (($8) + ($23<<2)|0);
     $25 = (($15) - ($19))|0;
     $26 = $25 >> 2;
     $27 = ($26|0)==(0);
     if ($27) {
      $30 = $8;
     } else {
      _memmove(($24|0),($8|0),($25|0))|0;
      $$pre4$i = HEAP32[$5>>2]|0;
      $30 = $$pre4$i;
     }
     $28 = (($24) + ($26<<2)|0);
     HEAP32[$9>>2] = $28;
     $29 = (($30) + ($23<<2)|0);
     HEAP32[$5>>2] = $29;
     $56 = $28;
     break;
    }
    $31 = (($14) - ($18))|0;
    $32 = $31 >> 1;
    $33 = ($32|0)==(0);
    $34 = $33 ? 1 : $32;
    $35 = ($34>>>0)>(1073741823);
    if ($35) {
     $36 = (___cxa_allocate_exception(4)|0);
     __ZNSt9bad_allocC2Ev($36);
     ___cxa_throw(($36|0),(1200|0),(20|0));
     // unreachable;
    }
    $37 = $34 >>> 2;
    $38 = $34 << 2;
    $39 = (__Znwj($38)|0);
    $40 = $39;
    $41 = (($39) + ($37<<2)|0);
    $42 = $41;
    $43 = (($39) + ($34<<2)|0);
    $44 = $43;
    $45 = ($8|0)==($10|0);
    if ($45) {
     $54 = $16;$__t$sroa$10$1$i = $42;
    } else {
     $$in$i = $41;$47 = $8;$__t$sroa$10$0$i = $42;
     while(1) {
      $46 = HEAP32[$47>>2]|0;
      HEAP32[$$in$i>>2] = $46;
      $48 = $__t$sroa$10$0$i;
      $49 = ((($48)) + 4|0);
      $50 = $49;
      $51 = ((($47)) + 4|0);
      $52 = ($51|0)==($10|0);
      if ($52) {
       $$lcssa = $50;
       break;
      } else {
       $$in$i = $49;$47 = $51;$__t$sroa$10$0$i = $50;
      }
     }
     $$pre$i = HEAP32[$this>>2]|0;
     $54 = $$pre$i;$__t$sroa$10$1$i = $$lcssa;
    }
    HEAP32[$this>>2] = $40;
    HEAP32[$5>>2] = $42;
    HEAP32[$9>>2] = $__t$sroa$10$1$i;
    HEAP32[$11>>2] = $44;
    $53 = ($54|0)==(0|0);
    $55 = $__t$sroa$10$1$i;
    if ($53) {
     $56 = $55;
    } else {
     __ZdlPv($54);
     $$pre5$i = HEAP32[$9>>2]|0;
     $56 = $$pre5$i;
    }
   } else {
    $56 = $10;
   }
  } while(0);
  HEAP32[$56>>2] = $7;
  $57 = HEAP32[$9>>2]|0;
  $58 = ((($57)) + 4|0);
  HEAP32[$9>>2] = $58;
  STACKTOP = sp;return;
 }
 $59 = ((($this)) + 8|0);
 $60 = HEAP32[$59>>2]|0;
 $61 = ((($this)) + 4|0);
 $62 = HEAP32[$61>>2]|0;
 $63 = (($60) - ($62))|0;
 $64 = ((($this)) + 12|0);
 $65 = HEAP32[$64>>2]|0;
 $66 = HEAP32[$this>>2]|0;
 $67 = (($65) - ($66))|0;
 $68 = ($63>>>0)<($67>>>0);
 $69 = $60;
 $70 = $65;
 $71 = $62;
 $72 = $66;
 if (!($68)) {
  $170 = $67 >> 1;
  $171 = ($170|0)==(0);
  $172 = $171 ? 1 : $170;
  $173 = ((($this)) + 12|0);
  $174 = ((($__buf)) + 12|0);
  HEAP32[$174>>2] = 0;
  $175 = ((($__buf)) + 16|0);
  HEAP32[$175>>2] = $173;
  $176 = ($172>>>0)>(1073741823);
  if ($176) {
   $177 = (___cxa_allocate_exception(4)|0);
   __ZNSt9bad_allocC2Ev($177);
   ___cxa_throw(($177|0),(1200|0),(20|0));
   // unreachable;
  }
  $178 = $63 >> 2;
  $179 = $172 << 2;
  $180 = (__Znwj($179)|0);
  HEAP32[$__buf>>2] = $180;
  $181 = (($180) + ($178<<2)|0);
  $182 = ((($__buf)) + 8|0);
  HEAP32[$182>>2] = $181;
  $183 = ((($__buf)) + 4|0);
  HEAP32[$183>>2] = $181;
  $184 = (($180) + ($172<<2)|0);
  $185 = ((($__buf)) + 12|0);
  HEAP32[$185>>2] = $184;
  __THREW__ = 0;
  $186 = (invoke_ii(37,4096)|0);
  $187 = __THREW__; __THREW__ = 0;
  $188 = $187&1;
  L28: do {
   if ($188) {
    $222 = ___cxa_find_matching_catch_2()|0;
    $223 = tempRet0;
    $$0 = $223;$$01 = $222;
   } else {
    $189 = $186;
    $190 = ($178|0)==($172|0);
    $191 = $184;
    $192 = $181;
    do {
     if ($190) {
      $193 = ($181>>>0)>($180>>>0);
      $194 = $180;
      if ($193) {
       $195 = (($192) - ($194))|0;
       $196 = $195 >> 2;
       $197 = (($196) + 1)|0;
       $198 = (($197|0) / -2)&-1;
       $199 = (($181) + ($198<<2)|0);
       HEAP32[$182>>2] = $199;
       HEAP32[$183>>2] = $199;
       $$in = $199;
       break;
      }
      $200 = (($191) - ($194))|0;
      $201 = $200 >> 1;
      $202 = ($201|0)==(0);
      $203 = $202 ? 1 : $201;
      $204 = ($203>>>0)>(1073741823);
      if ($204) {
       $205 = (___cxa_allocate_exception(4)|0);
       __ZNSt9bad_allocC2Ev($205);
       __THREW__ = 0;
       invoke_viii(38,($205|0),(1200|0),(20|0));
       $206 = __THREW__; __THREW__ = 0;
      } else {
       $207 = $203 << 2;
       __THREW__ = 0;
       $208 = (invoke_ii(37,($207|0))|0);
       $209 = __THREW__; __THREW__ = 0;
       $210 = $209&1;
       if (!($210)) {
        $211 = $203 >>> 2;
        $212 = $208;
        $213 = (($208) + ($211<<2)|0);
        $214 = $213;
        $215 = (($208) + ($203<<2)|0);
        $216 = $215;
        HEAP32[$__buf>>2] = $212;
        HEAP32[$183>>2] = $214;
        HEAP32[$182>>2] = $214;
        HEAP32[$185>>2] = $216;
        __ZdlPv($180);
        $$in = $213;
        break;
       }
      }
      $226 = ___cxa_find_matching_catch_2()|0;
      $227 = tempRet0;
      __ZdlPv($186);
      $$0 = $227;$$01 = $226;
      break L28;
     } else {
      $$in = $181;
     }
    } while(0);
    HEAP32[$$in>>2] = $189;
    $217 = HEAP32[$182>>2]|0;
    $218 = ((($217)) + 4|0);
    HEAP32[$182>>2] = $218;
    $219 = HEAP32[$59>>2]|0;
    $__i$0 = $219;
    while(1) {
     $220 = HEAP32[$61>>2]|0;
     $221 = ($__i$0|0)==($220|0);
     if ($221) {
      $$lcssa71 = $220;
      break;
     }
     $228 = ((($__i$0)) + -4|0);
     __THREW__ = 0;
     invoke_vii(39,($__buf|0),($228|0));
     $229 = __THREW__; __THREW__ = 0;
     $230 = $229&1;
     if ($230) {
      label = 56;
      break;
     } else {
      $__i$0 = $228;
     }
    }
    if ((label|0) == 56) {
     $224 = ___cxa_find_matching_catch_2()|0;
     $225 = tempRet0;
     $$0 = $225;$$01 = $224;
     break;
    }
    $231 = $$lcssa71;
    $232 = HEAP32[$this>>2]|0;
    $233 = HEAP32[$__buf>>2]|0;
    HEAP32[$this>>2] = $233;
    HEAP32[$__buf>>2] = $232;
    $234 = HEAP32[$183>>2]|0;
    HEAP32[$61>>2] = $234;
    HEAP32[$183>>2] = $231;
    $235 = HEAP32[$59>>2]|0;
    $236 = HEAP32[$182>>2]|0;
    HEAP32[$59>>2] = $236;
    HEAP32[$182>>2] = $235;
    $237 = HEAP32[$64>>2]|0;
    $238 = HEAP32[$185>>2]|0;
    HEAP32[$64>>2] = $238;
    HEAP32[$185>>2] = $237;
    $239 = $235;
    $240 = ($239|0)==($$lcssa71|0);
    if (!($240)) {
     $__new_last2$i$i$i$i2 = $$lcssa71;
     $scevgep$i$i$i$i3 = ((($239)) + -4|0);
     $241 = $scevgep$i$i$i$i3;
     $242 = (($241) - ($__new_last2$i$i$i$i2))|0;
     $243 = $242 >>> 2;
     $244 = $243 ^ -1;
     $scevgep4$i$i$i$i4 = (($239) + ($244<<2)|0);
     HEAP32[$182>>2] = $scevgep4$i$i$i$i4;
    }
    $245 = ($232|0)==(0);
    if (!($245)) {
     $246 = $232;
     __ZdlPv($246);
    }
    STACKTOP = sp;return;
   }
  } while(0);
  $247 = HEAP32[$183>>2]|0;
  $248 = HEAP32[$182>>2]|0;
  $249 = ($248|0)==($247|0);
  if (!($249)) {
   $__new_last2$i$i$i$i = $247;
   $scevgep$i$i$i$i = ((($248)) + -4|0);
   $250 = $scevgep$i$i$i$i;
   $251 = (($250) - ($__new_last2$i$i$i$i))|0;
   $252 = $251 >>> 2;
   $253 = $252 ^ -1;
   $scevgep4$i$i$i$i = (($248) + ($253<<2)|0);
   HEAP32[$182>>2] = $scevgep4$i$i$i$i;
  }
  $254 = HEAP32[$__buf>>2]|0;
  $255 = ($254|0)==(0|0);
  if ($255) {
   ___resumeException($$01|0);
   // unreachable;
  }
  __ZdlPv($254);
  ___resumeException($$01|0);
  // unreachable;
 }
 $73 = ($65|0)==($60|0);
 $74 = (__Znwj(4096)|0);
 if ($73) {
  HEAP32[$0>>2] = $74;
  __ZNSt3__214__split_bufferIPP8ParticleNS_9allocatorIS3_EEE10push_frontERKS3_($this,$0);
  $119 = HEAP32[$61>>2]|0;
  $120 = HEAP32[$119>>2]|0;
  $121 = ((($119)) + 4|0);
  HEAP32[$61>>2] = $121;
  $122 = HEAP32[$59>>2]|0;
  $123 = HEAP32[$64>>2]|0;
  $124 = ($122|0)==($123|0);
  $125 = $123;
  $126 = $122;
  do {
   if ($124) {
    $127 = HEAP32[$this>>2]|0;
    $128 = ($121>>>0)>($127>>>0);
    $129 = $127;
    if ($128) {
     $130 = $121;
     $131 = (($130) - ($129))|0;
     $132 = $131 >> 2;
     $133 = (($132) + 1)|0;
     $134 = (($133|0) / -2)&-1;
     $135 = (($121) + ($134<<2)|0);
     $136 = (($126) - ($130))|0;
     $137 = $136 >> 2;
     $138 = ($137|0)==(0);
     if ($138) {
      $141 = $121;
     } else {
      _memmove(($135|0),($121|0),($136|0))|0;
      $$pre4$i21 = HEAP32[$61>>2]|0;
      $141 = $$pre4$i21;
     }
     $139 = (($135) + ($137<<2)|0);
     HEAP32[$59>>2] = $139;
     $140 = (($141) + ($134<<2)|0);
     HEAP32[$61>>2] = $140;
     $167 = $139;
     break;
    }
    $142 = (($125) - ($129))|0;
    $143 = $142 >> 1;
    $144 = ($143|0)==(0);
    $145 = $144 ? 1 : $143;
    $146 = ($145>>>0)>(1073741823);
    if ($146) {
     $147 = (___cxa_allocate_exception(4)|0);
     __ZNSt9bad_allocC2Ev($147);
     ___cxa_throw(($147|0),(1200|0),(20|0));
     // unreachable;
    }
    $148 = $145 >>> 2;
    $149 = $145 << 2;
    $150 = (__Znwj($149)|0);
    $151 = $150;
    $152 = (($150) + ($148<<2)|0);
    $153 = $152;
    $154 = (($150) + ($145<<2)|0);
    $155 = $154;
    $156 = ($121|0)==($122|0);
    if ($156) {
     $165 = $127;$__t$sroa$10$1$i29 = $153;
    } else {
     $$in$i25 = $152;$158 = $121;$__t$sroa$10$0$i24 = $153;
     while(1) {
      $157 = HEAP32[$158>>2]|0;
      HEAP32[$$in$i25>>2] = $157;
      $159 = $__t$sroa$10$0$i24;
      $160 = ((($159)) + 4|0);
      $161 = $160;
      $162 = ((($158)) + 4|0);
      $163 = ($162|0)==($122|0);
      if ($163) {
       $$lcssa69 = $161;
       break;
      } else {
       $$in$i25 = $160;$158 = $162;$__t$sroa$10$0$i24 = $161;
      }
     }
     $$pre$i27 = HEAP32[$this>>2]|0;
     $165 = $$pre$i27;$__t$sroa$10$1$i29 = $$lcssa69;
    }
    HEAP32[$this>>2] = $151;
    HEAP32[$61>>2] = $153;
    HEAP32[$59>>2] = $__t$sroa$10$1$i29;
    HEAP32[$64>>2] = $155;
    $164 = ($165|0)==(0|0);
    $166 = $__t$sroa$10$1$i29;
    if ($164) {
     $167 = $166;
    } else {
     __ZdlPv($165);
     $$pre5$i32 = HEAP32[$59>>2]|0;
     $167 = $$pre5$i32;
    }
   } else {
    $167 = $122;
   }
  } while(0);
  HEAP32[$167>>2] = $120;
  $168 = HEAP32[$59>>2]|0;
  $169 = ((($168)) + 4|0);
  HEAP32[$59>>2] = $169;
  STACKTOP = sp;return;
 } else {
  $75 = $74;
  $76 = ($69|0)==($70|0);
  $77 = $60;
  do {
   if ($76) {
    $78 = ($71>>>0)>($72>>>0);
    if ($78) {
     $79 = (($62) - ($66))|0;
     $80 = $79 >> 2;
     $81 = (($80) + 1)|0;
     $82 = (($81|0) / -2)&-1;
     $83 = (($71) + ($82<<2)|0);
     $84 = (($60) - ($62))|0;
     $85 = $84 >> 2;
     $86 = ($85|0)==(0);
     if ($86) {
      $90 = $71;
     } else {
      $87 = $62;
      _memmove(($83|0),($87|0),($84|0))|0;
      $$pre4$i8 = HEAP32[$61>>2]|0;
      $90 = $$pre4$i8;
     }
     $88 = (($83) + ($85<<2)|0);
     HEAP32[$59>>2] = $88;
     $89 = (($90) + ($82<<2)|0);
     HEAP32[$61>>2] = $89;
     $116 = $88;
     break;
    }
    $91 = (($65) - ($66))|0;
    $92 = $91 >> 1;
    $93 = ($92|0)==(0);
    $94 = $93 ? 1 : $92;
    $95 = ($94>>>0)>(1073741823);
    if ($95) {
     $96 = (___cxa_allocate_exception(4)|0);
     __ZNSt9bad_allocC2Ev($96);
     ___cxa_throw(($96|0),(1200|0),(20|0));
     // unreachable;
    }
    $97 = $94 >>> 2;
    $98 = $94 << 2;
    $99 = (__Znwj($98)|0);
    $100 = $99;
    $101 = (($99) + ($97<<2)|0);
    $102 = $101;
    $103 = (($99) + ($94<<2)|0);
    $104 = $103;
    $105 = ($71|0)==($69|0);
    if ($105) {
     $114 = $72;$__t$sroa$10$1$i16 = $102;
    } else {
     $$in$i12 = $101;$107 = $71;$__t$sroa$10$0$i11 = $102;
     while(1) {
      $106 = HEAP32[$107>>2]|0;
      HEAP32[$$in$i12>>2] = $106;
      $108 = $__t$sroa$10$0$i11;
      $109 = ((($108)) + 4|0);
      $110 = $109;
      $111 = ((($107)) + 4|0);
      $112 = ($111|0)==($69|0);
      if ($112) {
       $$lcssa70 = $110;
       break;
      } else {
       $$in$i12 = $109;$107 = $111;$__t$sroa$10$0$i11 = $110;
      }
     }
     $$pre$i14 = HEAP32[$this>>2]|0;
     $114 = $$pre$i14;$__t$sroa$10$1$i16 = $$lcssa70;
    }
    HEAP32[$this>>2] = $100;
    HEAP32[$61>>2] = $102;
    HEAP32[$59>>2] = $__t$sroa$10$1$i16;
    HEAP32[$64>>2] = $104;
    $113 = ($114|0)==(0|0);
    $115 = $__t$sroa$10$1$i16;
    if ($113) {
     $116 = $115;
    } else {
     __ZdlPv($114);
     $$pre5$i19 = HEAP32[$59>>2]|0;
     $116 = $$pre5$i19;
    }
   } else {
    $116 = $77;
   }
  } while(0);
  HEAP32[$116>>2] = $75;
  $117 = HEAP32[$59>>2]|0;
  $118 = ((($117)) + 4|0);
  HEAP32[$59>>2] = $118;
  STACKTOP = sp;return;
 }
}
function __ZNSt3__214__split_bufferIPP8ParticleNS_9allocatorIS3_EEE10push_frontERKS3_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$0$i$i = 0, $$cast = 0, $$in = 0, $$lcssa = 0, $$pre = 0, $$pre4 = 0, $$pre5 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $__t$sroa$10$0 = 0, $__t$sroa$10$1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = HEAP32[$this>>2]|0;
 $3 = ($1|0)==($2|0);
 $4 = $2;
 do {
  if ($3) {
   $5 = ((($this)) + 8|0);
   $6 = HEAP32[$5>>2]|0;
   $7 = ((($this)) + 12|0);
   $8 = HEAP32[$7>>2]|0;
   $9 = ($6>>>0)<($8>>>0);
   $$cast = $8;
   if ($9) {
    $10 = $6;
    $11 = (($$cast) - ($10))|0;
    $12 = $11 >> 2;
    $13 = (($12) + 1)|0;
    $14 = (($13|0) / 2)&-1;
    $15 = (($6) + ($14<<2)|0);
    $16 = $1;
    $17 = (($10) - ($16))|0;
    $18 = $17 >> 2;
    $19 = ($18|0)==(0);
    if ($19) {
     $$0$i$i = $15;$23 = $6;
    } else {
     $20 = (0 - ($18))|0;
     $21 = (($15) + ($20<<2)|0);
     _memmove(($21|0),($1|0),($17|0))|0;
     $$pre4 = HEAP32[$5>>2]|0;
     $$0$i$i = $21;$23 = $$pre4;
    }
    HEAP32[$0>>2] = $$0$i$i;
    $22 = (($23) + ($14<<2)|0);
    HEAP32[$5>>2] = $22;
    $50 = $$0$i$i;
    break;
   }
   $24 = (($$cast) - ($4))|0;
   $25 = $24 >> 1;
   $26 = ($25|0)==(0);
   $27 = $26 ? 1 : $25;
   $28 = ($27>>>0)>(1073741823);
   if ($28) {
    $29 = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($29);
    ___cxa_throw(($29|0),(1200|0),(20|0));
    // unreachable;
   }
   $30 = (($27) + 3)|0;
   $31 = $30 >>> 2;
   $32 = $27 << 2;
   $33 = (__Znwj($32)|0);
   $34 = $33;
   $35 = (($33) + ($31<<2)|0);
   $36 = $35;
   $37 = (($33) + ($27<<2)|0);
   $38 = $37;
   $39 = ($1|0)==($6|0);
   if ($39) {
    $48 = $1;$__t$sroa$10$1 = $36;
   } else {
    $$in = $35;$41 = $1;$__t$sroa$10$0 = $36;
    while(1) {
     $40 = HEAP32[$41>>2]|0;
     HEAP32[$$in>>2] = $40;
     $42 = $__t$sroa$10$0;
     $43 = ((($42)) + 4|0);
     $44 = $43;
     $45 = ((($41)) + 4|0);
     $46 = ($45|0)==($6|0);
     if ($46) {
      $$lcssa = $44;
      break;
     } else {
      $$in = $43;$41 = $45;$__t$sroa$10$0 = $44;
     }
    }
    $$pre = HEAP32[$this>>2]|0;
    $48 = $$pre;$__t$sroa$10$1 = $$lcssa;
   }
   HEAP32[$this>>2] = $34;
   HEAP32[$0>>2] = $36;
   HEAP32[$5>>2] = $__t$sroa$10$1;
   HEAP32[$7>>2] = $38;
   $47 = ($48|0)==(0|0);
   if ($47) {
    $50 = $35;
   } else {
    __ZdlPv($48);
    $$pre5 = HEAP32[$0>>2]|0;
    $50 = $$pre5;
   }
  } else {
   $50 = $1;
  }
 } while(0);
 $49 = ((($50)) + -4|0);
 $51 = HEAP32[$__x>>2]|0;
 HEAP32[$49>>2] = $51;
 $52 = HEAP32[$0>>2]|0;
 $53 = ((($52)) + -4|0);
 HEAP32[$0>>2] = $53;
 return;
}
function __ZNSt3__214__split_bufferIPP8ParticleRNS_9allocatorIS3_EEE10push_frontERKS3_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$0$i$i = 0, $$cast = 0, $$in = 0, $$lcssa = 0, $$pre = 0, $$pre4 = 0, $$pre5 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $__t$sroa$10$0 = 0, $__t$sroa$10$1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = HEAP32[$this>>2]|0;
 $3 = ($1|0)==($2|0);
 $4 = $2;
 do {
  if ($3) {
   $5 = ((($this)) + 8|0);
   $6 = HEAP32[$5>>2]|0;
   $7 = ((($this)) + 12|0);
   $8 = HEAP32[$7>>2]|0;
   $9 = ($6>>>0)<($8>>>0);
   $$cast = $8;
   if ($9) {
    $10 = $6;
    $11 = (($$cast) - ($10))|0;
    $12 = $11 >> 2;
    $13 = (($12) + 1)|0;
    $14 = (($13|0) / 2)&-1;
    $15 = (($6) + ($14<<2)|0);
    $16 = $1;
    $17 = (($10) - ($16))|0;
    $18 = $17 >> 2;
    $19 = ($18|0)==(0);
    if ($19) {
     $$0$i$i = $15;$23 = $6;
    } else {
     $20 = (0 - ($18))|0;
     $21 = (($15) + ($20<<2)|0);
     _memmove(($21|0),($1|0),($17|0))|0;
     $$pre4 = HEAP32[$5>>2]|0;
     $$0$i$i = $21;$23 = $$pre4;
    }
    HEAP32[$0>>2] = $$0$i$i;
    $22 = (($23) + ($14<<2)|0);
    HEAP32[$5>>2] = $22;
    $50 = $$0$i$i;
    break;
   }
   $24 = (($$cast) - ($4))|0;
   $25 = $24 >> 1;
   $26 = ($25|0)==(0);
   $27 = $26 ? 1 : $25;
   $28 = ($27>>>0)>(1073741823);
   if ($28) {
    $29 = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($29);
    ___cxa_throw(($29|0),(1200|0),(20|0));
    // unreachable;
   }
   $30 = (($27) + 3)|0;
   $31 = $30 >>> 2;
   $32 = $27 << 2;
   $33 = (__Znwj($32)|0);
   $34 = $33;
   $35 = (($33) + ($31<<2)|0);
   $36 = $35;
   $37 = (($33) + ($27<<2)|0);
   $38 = $37;
   $39 = ($1|0)==($6|0);
   if ($39) {
    $48 = $1;$__t$sroa$10$1 = $36;
   } else {
    $$in = $35;$41 = $1;$__t$sroa$10$0 = $36;
    while(1) {
     $40 = HEAP32[$41>>2]|0;
     HEAP32[$$in>>2] = $40;
     $42 = $__t$sroa$10$0;
     $43 = ((($42)) + 4|0);
     $44 = $43;
     $45 = ((($41)) + 4|0);
     $46 = ($45|0)==($6|0);
     if ($46) {
      $$lcssa = $44;
      break;
     } else {
      $$in = $43;$41 = $45;$__t$sroa$10$0 = $44;
     }
    }
    $$pre = HEAP32[$this>>2]|0;
    $48 = $$pre;$__t$sroa$10$1 = $$lcssa;
   }
   HEAP32[$this>>2] = $34;
   HEAP32[$0>>2] = $36;
   HEAP32[$5>>2] = $__t$sroa$10$1;
   HEAP32[$7>>2] = $38;
   $47 = ($48|0)==(0|0);
   if ($47) {
    $50 = $35;
   } else {
    __ZdlPv($48);
    $$pre5 = HEAP32[$0>>2]|0;
    $50 = $$pre5;
   }
  } else {
   $50 = $1;
  }
 } while(0);
 $49 = ((($50)) + -4|0);
 $51 = HEAP32[$__x>>2]|0;
 HEAP32[$49>>2] = $51;
 $52 = HEAP32[$0>>2]|0;
 $53 = ((($52)) + -4|0);
 HEAP32[$0>>2] = $53;
 return;
}
function __ZN12EventEmitterC2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 HEAP32[$0>>2] = 0;
 $1 = ((($this)) + 8|0);
 HEAP32[$1>>2] = 0;
 $2 = ((($this)) + 4|0);
 HEAP32[$this>>2] = $2;
 return;
}
function __ZN12EventEmitter2onEPNSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEP12EventHandler($this,$pEventName,$handler) {
 $this = $this|0;
 $pEventName = $pEventName|0;
 $handler = $handler|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = sp;
 HEAP32[$0>>2] = $handler;
 $1 = (__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE14__count_uniqueIS7_EEjRKT_($this,$pEventName)|0);
 $2 = ($1|0)==(0);
 $3 = $handler;
 if ($2) {
  $4 = (__Znwj(12)|0);
  HEAP32[$4>>2] = 0;
  $5 = ((($4)) + 4|0);
  HEAP32[$5>>2] = 0;
  $6 = ((($4)) + 8|0);
  HEAP32[$6>>2] = 0;
  $7 = (__ZNSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS4_IS9_EEEENS_4lessIS6_EENS4_INS_4pairIKS6_SC_EEEEEixERSG_($this,$pEventName)|0);
  HEAP32[$7>>2] = $4;
 }
 $8 = (__ZNSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS4_IS9_EEEENS_4lessIS6_EENS4_INS_4pairIKS6_SC_EEEEEixERSG_($this,$pEventName)|0);
 $9 = HEAP32[$8>>2]|0;
 $10 = ((($9)) + 4|0);
 $11 = HEAP32[$10>>2]|0;
 $12 = ((($9)) + 8|0);
 $13 = HEAP32[$12>>2]|0;
 $14 = ($11|0)==($13|0);
 if ($14) {
  __ZNSt3__26vectorIP12EventHandlerNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($9,$0);
  STACKTOP = sp;return;
 } else {
  HEAP32[$11>>2] = $3;
  $15 = HEAP32[$10>>2]|0;
  $16 = ((($15)) + 4|0);
  HEAP32[$10>>2] = $16;
  STACKTOP = sp;return;
 }
}
function __ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE14__count_uniqueIS7_EEjRKT_($this,$__k) {
 $this = $this|0;
 $__k = $__k|0;
 var $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__rt$0 = 0;
 var $__rt$0$in$be = 0, $__rt$08 = 0, $__rt$09 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $__rt$08 = HEAP32[$0>>2]|0;
 $1 = ($__rt$08|0)==(0|0);
 if ($1) {
  $$0 = 0;
  return ($$0|0);
 }
 $2 = ((($__k)) + 11|0);
 $3 = HEAP8[$2>>0]|0;
 $4 = ($3<<24>>24)<(0);
 $5 = ((($__k)) + 4|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = $3&255;
 $8 = $4 ? $6 : $7;
 $9 = HEAP32[$__k>>2]|0;
 $10 = $4 ? $9 : $__k;
 $__rt$09 = $__rt$08;
 while(1) {
  $11 = ((($__rt$09)) + 16|0);
  $12 = ((($11)) + 11|0);
  $13 = HEAP8[$12>>0]|0;
  $14 = ($13<<24>>24)<(0);
  $15 = ((($__rt$09)) + 20|0);
  $16 = HEAP32[$15>>2]|0;
  $17 = $13&255;
  $18 = $14 ? $16 : $17;
  $19 = ($18>>>0)<($8>>>0);
  $20 = $19 ? $18 : $8;
  $21 = ($20|0)==(0);
  if ($21) {
   label = 5;
  } else {
   $22 = HEAP32[$11>>2]|0;
   $23 = $14 ? $22 : $11;
   $24 = (_memcmp($10,$23,$20)|0);
   $25 = ($24|0)==(0);
   if ($25) {
    label = 5;
   } else {
    $27 = ($24|0)<(0);
    if ($27) {
     label = 7;
    } else {
     label = 8;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $26 = ($8>>>0)<($18>>>0);
   if ($26) {
    label = 7;
   } else {
    label = 8;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $__rt$0$in$be = $__rt$09;
  }
  else if ((label|0) == 8) {
   label = 0;
   $28 = ($8>>>0)<($18>>>0);
   $29 = $28 ? $8 : $18;
   $30 = ($29|0)==(0);
   if ($30) {
    label = 10;
   } else {
    $31 = HEAP32[$11>>2]|0;
    $32 = $14 ? $31 : $11;
    $33 = (_memcmp($32,$10,$29)|0);
    $34 = ($33|0)==(0);
    if ($34) {
     label = 10;
    } else {
     $35 = ($33|0)<(0);
     if (!($35)) {
      $$0 = 1;
      label = 14;
      break;
     }
    }
   }
   if ((label|0) == 10) {
    label = 0;
    if (!($19)) {
     $$0 = 1;
     label = 14;
     break;
    }
   }
   $36 = ((($__rt$09)) + 4|0);
   $__rt$0$in$be = $36;
  }
  $__rt$0 = HEAP32[$__rt$0$in$be>>2]|0;
  $37 = ($__rt$0|0)==(0|0);
  if ($37) {
   $$0 = 0;
   label = 14;
   break;
  } else {
   $__rt$09 = $__rt$0;
  }
 }
 if ((label|0) == 14) {
  return ($$0|0);
 }
 return (0)|0;
}
function __ZNSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS4_IS9_EEEENS_4lessIS6_EENS4_INS_4pairIKS6_SC_EEEEEixERSG_($this,$__k) {
 $this = $this|0;
 $__k = $__k|0;
 var $$pre$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__parent = 0, $__r$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $__parent = sp;
 $0 = (__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS4_IS9_EEEENS_4lessIS6_EENS4_INS_4pairIKS6_SC_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSG_($this,$__parent,$__k)|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)==(0|0);
 if (!($2)) {
  $__r$0 = $1;
  $23 = ((($__r$0)) + 28|0);
  STACKTOP = sp;return ($23|0);
 }
 $3 = (__Znwj(32)|0);
 $4 = ((($3)) + 16|0);
 __THREW__ = 0;
 invoke_vii(40,($4|0),($__k|0));
 $5 = __THREW__; __THREW__ = 0;
 $6 = $5&1;
 if ($6) {
  $7 = ___cxa_find_matching_catch_2()|0;
  $8 = tempRet0;
  __ZdlPv($3);
  ___resumeException($7|0);
  // unreachable;
 }
 $9 = ((($3)) + 28|0);
 HEAP32[$9>>2] = 0;
 $10 = HEAP32[$__parent>>2]|0;
 HEAP32[$3>>2] = 0;
 $11 = ((($3)) + 4|0);
 HEAP32[$11>>2] = 0;
 $12 = ((($3)) + 8|0);
 HEAP32[$12>>2] = $10;
 HEAP32[$0>>2] = $3;
 $13 = HEAP32[$this>>2]|0;
 $14 = HEAP32[$13>>2]|0;
 $15 = ($14|0)==(0|0);
 if ($15) {
  $19 = $3;
 } else {
  $16 = $14;
  HEAP32[$this>>2] = $16;
  $$pre$i = HEAP32[$0>>2]|0;
  $19 = $$pre$i;
 }
 $17 = ((($this)) + 4|0);
 $18 = HEAP32[$17>>2]|0;
 __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($18,$19);
 $20 = ((($this)) + 8|0);
 $21 = HEAP32[$20>>2]|0;
 $22 = (($21) + 1)|0;
 HEAP32[$20>>2] = $22;
 $__r$0 = $3;
 $23 = ((($__r$0)) + 28|0);
 STACKTOP = sp;return ($23|0);
}
function __ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS4_IS9_EEEENS_4lessIS6_EENS4_INS_4pairIKS6_SC_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSG_($this,$__parent,$__k) {
 $this = $this|0;
 $__parent = $__parent|0;
 $__k = $__k|0;
 var $$0 = 0, $$lcssa = 0, $$lcssa28 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__nd$0 = 0, $__nd$0$be$in = 0, $__nd$0$lcssa = 0, $__nd$0$lcssa26 = 0, $__nd$0$lcssa27 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)==(0|0);
 if ($2) {
  HEAP32[$__parent>>2] = $0;
  $$0 = $0;
  return ($$0|0);
 }
 $3 = ((($__k)) + 11|0);
 $4 = HEAP8[$3>>0]|0;
 $5 = ($4<<24>>24)<(0);
 $6 = ((($__k)) + 4|0);
 $7 = HEAP32[$6>>2]|0;
 $8 = $4&255;
 $9 = $5 ? $7 : $8;
 $10 = HEAP32[$__k>>2]|0;
 $11 = $5 ? $10 : $__k;
 $__nd$0 = $1;
 while(1) {
  $12 = ((($__nd$0)) + 16|0);
  $13 = ((($12)) + 11|0);
  $14 = HEAP8[$13>>0]|0;
  $15 = ($14<<24>>24)<(0);
  $16 = ((($__nd$0)) + 20|0);
  $17 = HEAP32[$16>>2]|0;
  $18 = $14&255;
  $19 = $15 ? $17 : $18;
  $20 = ($19>>>0)<($9>>>0);
  $21 = $20 ? $19 : $9;
  $22 = ($21|0)==(0);
  if ($22) {
   label = 5;
  } else {
   $23 = HEAP32[$12>>2]|0;
   $24 = $15 ? $23 : $12;
   $25 = (_memcmp($11,$24,$21)|0);
   $26 = ($25|0)==(0);
   if ($26) {
    label = 5;
   } else {
    $28 = ($25|0)<(0);
    if ($28) {
     label = 7;
    } else {
     label = 9;
    }
   }
  }
  if ((label|0) == 5) {
   label = 0;
   $27 = ($9>>>0)<($19>>>0);
   if ($27) {
    label = 7;
   } else {
    label = 9;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   $29 = HEAP32[$__nd$0>>2]|0;
   $30 = ($29|0)==(0|0);
   if ($30) {
    $$lcssa28 = $__nd$0;$__nd$0$lcssa27 = $__nd$0;
    label = 8;
    break;
   } else {
    $__nd$0$be$in = $29;
   }
  }
  else if ((label|0) == 9) {
   label = 0;
   $31 = ($9>>>0)<($19>>>0);
   $32 = $31 ? $9 : $19;
   $33 = ($32|0)==(0);
   if ($33) {
    label = 11;
   } else {
    $34 = HEAP32[$12>>2]|0;
    $35 = $15 ? $34 : $12;
    $36 = (_memcmp($35,$11,$32)|0);
    $37 = ($36|0)==(0);
    if ($37) {
     label = 11;
    } else {
     $38 = ($36|0)<(0);
     if (!($38)) {
      $__nd$0$lcssa = $__nd$0;
      label = 16;
      break;
     }
    }
   }
   if ((label|0) == 11) {
    label = 0;
    if (!($20)) {
     $__nd$0$lcssa = $__nd$0;
     label = 16;
     break;
    }
   }
   $39 = ((($__nd$0)) + 4|0);
   $40 = HEAP32[$39>>2]|0;
   $41 = ($40|0)==(0|0);
   if ($41) {
    $$lcssa = $39;$__nd$0$lcssa26 = $__nd$0;
    label = 15;
    break;
   } else {
    $__nd$0$be$in = $40;
   }
  }
  $__nd$0 = $__nd$0$be$in;
 }
 if ((label|0) == 8) {
  HEAP32[$__parent>>2] = $__nd$0$lcssa27;
  $$0 = $$lcssa28;
  return ($$0|0);
 }
 else if ((label|0) == 15) {
  HEAP32[$__parent>>2] = $__nd$0$lcssa26;
  $$0 = $$lcssa;
  return ($$0|0);
 }
 else if ((label|0) == 16) {
  HEAP32[$__parent>>2] = $__nd$0$lcssa;
  $$0 = $__parent;
  return ($$0|0);
 }
 return (0)|0;
}
function __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($__root,$__x) {
 $__root = $__root|0;
 $__x = $__x|0;
 var $$011 = 0, $$011$lcssa60 = 0, $$011$lcssa61 = 0, $$lcssa = 0, $$lcssa62 = 0, $$lcssa63 = 0, $$lcssa64 = 0, $$lcssa65 = 0, $$lcssa66 = 0, $$lcssa67 = 0, $$lcssa68 = 0, $$lcssa69 = 0, $$lcssa70 = 0, $$pre = 0, $$pre17 = 0, $$pre19 = 0, $$pre20 = 0, $0 = 0, $1 = 0, $10 = 0;
 var $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($__x|0)==($__root|0);
 $1 = ((($__x)) + 12|0);
 $2 = $0&1;
 HEAP8[$1>>0] = $2;
 if ($0) {
  return;
 } else {
  $$011 = $__x;
 }
 while(1) {
  $3 = ((($$011)) + 8|0);
  $4 = HEAP32[$3>>2]|0;
  $5 = ((($4)) + 12|0);
  $6 = HEAP8[$5>>0]|0;
  $7 = ($6<<24>>24)==(0);
  if (!($7)) {
   label = 37;
   break;
  }
  $8 = ((($4)) + 8|0);
  $9 = HEAP32[$8>>2]|0;
  $10 = HEAP32[$9>>2]|0;
  $11 = ($10|0)==($4|0);
  if ($11) {
   $12 = ((($9)) + 4|0);
   $13 = HEAP32[$12>>2]|0;
   $14 = ($13|0)==(0|0);
   if ($14) {
    $$011$lcssa61 = $$011;$$lcssa63 = $4;$$lcssa64 = $8;$$lcssa66 = $8;$$lcssa68 = $9;$$lcssa70 = $9;
    label = 8;
    break;
   }
   $15 = ((($13)) + 12|0);
   $16 = HEAP8[$15>>0]|0;
   $17 = ($16<<24>>24)==(0);
   if (!($17)) {
    $$011$lcssa61 = $$011;$$lcssa63 = $4;$$lcssa64 = $8;$$lcssa66 = $8;$$lcssa68 = $9;$$lcssa70 = $9;
    label = 8;
    break;
   }
   HEAP8[$5>>0] = 1;
   $18 = ($9|0)==($__root|0);
   $19 = ((($9)) + 12|0);
   $20 = $18&1;
   HEAP8[$19>>0] = $20;
   HEAP8[$15>>0] = 1;
  } else {
   $52 = ($10|0)==(0|0);
   if ($52) {
    $$011$lcssa60 = $$011;$$lcssa = $8;$$lcssa62 = $4;$$lcssa65 = $8;$$lcssa67 = $9;$$lcssa69 = $9;
    label = 24;
    break;
   }
   $53 = ((($10)) + 12|0);
   $54 = HEAP8[$53>>0]|0;
   $55 = ($54<<24>>24)==(0);
   if (!($55)) {
    $$011$lcssa60 = $$011;$$lcssa = $8;$$lcssa62 = $4;$$lcssa65 = $8;$$lcssa67 = $9;$$lcssa69 = $9;
    label = 24;
    break;
   }
   HEAP8[$5>>0] = 1;
   $56 = ($9|0)==($__root|0);
   $57 = ((($9)) + 12|0);
   $58 = $56&1;
   HEAP8[$57>>0] = $58;
   HEAP8[$53>>0] = 1;
  }
  $21 = ($9|0)==($__root|0);
  if ($21) {
   label = 37;
   break;
  } else {
   $$011 = $9;
  }
 }
 if ((label|0) == 8) {
  $22 = HEAP32[$$lcssa63>>2]|0;
  $23 = ($22|0)==($$011$lcssa61|0);
  if ($23) {
   $37 = $$lcssa63;$39 = $$lcssa70;
  } else {
   $24 = $$lcssa68;
   $25 = ((($$lcssa63)) + 4|0);
   $26 = HEAP32[$25>>2]|0;
   $27 = HEAP32[$26>>2]|0;
   HEAP32[$25>>2] = $27;
   $28 = ($27|0)==(0|0);
   if ($28) {
    $31 = $24;
   } else {
    $29 = ((($27)) + 8|0);
    HEAP32[$29>>2] = $$lcssa63;
    $$pre19 = HEAP32[$$lcssa64>>2]|0;
    $31 = $$pre19;
   }
   $30 = ((($26)) + 8|0);
   HEAP32[$30>>2] = $31;
   $32 = HEAP32[$$lcssa66>>2]|0;
   $33 = HEAP32[$32>>2]|0;
   $34 = ($33|0)==($$lcssa63|0);
   if ($34) {
    HEAP32[$32>>2] = $26;
   } else {
    $35 = ((($32)) + 4|0);
    HEAP32[$35>>2] = $26;
   }
   HEAP32[$26>>2] = $$lcssa63;
   HEAP32[$$lcssa64>>2] = $26;
   $$pre20 = HEAP32[$30>>2]|0;
   $37 = $26;$39 = $$pre20;
  }
  $36 = ((($37)) + 12|0);
  HEAP8[$36>>0] = 1;
  $38 = ((($39)) + 12|0);
  HEAP8[$38>>0] = 0;
  $40 = HEAP32[$39>>2]|0;
  $41 = ((($40)) + 4|0);
  $42 = HEAP32[$41>>2]|0;
  HEAP32[$39>>2] = $42;
  $43 = ($42|0)==(0|0);
  if (!($43)) {
   $44 = ((($42)) + 8|0);
   HEAP32[$44>>2] = $39;
  }
  $45 = ((($39)) + 8|0);
  $46 = HEAP32[$45>>2]|0;
  $47 = ((($40)) + 8|0);
  HEAP32[$47>>2] = $46;
  $48 = HEAP32[$45>>2]|0;
  $49 = HEAP32[$48>>2]|0;
  $50 = ($49|0)==($39|0);
  if ($50) {
   HEAP32[$48>>2] = $40;
  } else {
   $51 = ((($48)) + 4|0);
   HEAP32[$51>>2] = $40;
  }
  HEAP32[$41>>2] = $39;
  HEAP32[$45>>2] = $40;
  return;
 }
 else if ((label|0) == 24) {
  $59 = HEAP32[$$lcssa62>>2]|0;
  $60 = ($59|0)==($$011$lcssa60|0);
  if ($60) {
   $61 = $$lcssa67;
   $62 = HEAP32[$$lcssa62>>2]|0;
   $63 = ((($62)) + 4|0);
   $64 = HEAP32[$63>>2]|0;
   HEAP32[$$lcssa62>>2] = $64;
   $65 = ($64|0)==(0|0);
   if ($65) {
    $68 = $61;
   } else {
    $66 = ((($64)) + 8|0);
    HEAP32[$66>>2] = $$lcssa62;
    $$pre = HEAP32[$$lcssa>>2]|0;
    $68 = $$pre;
   }
   $67 = ((($62)) + 8|0);
   HEAP32[$67>>2] = $68;
   $69 = HEAP32[$$lcssa65>>2]|0;
   $70 = HEAP32[$69>>2]|0;
   $71 = ($70|0)==($$lcssa62|0);
   if ($71) {
    HEAP32[$69>>2] = $62;
   } else {
    $72 = ((($69)) + 4|0);
    HEAP32[$72>>2] = $62;
   }
   HEAP32[$63>>2] = $$lcssa62;
   HEAP32[$$lcssa>>2] = $62;
   $$pre17 = HEAP32[$67>>2]|0;
   $74 = $62;$76 = $$pre17;
  } else {
   $74 = $$lcssa62;$76 = $$lcssa69;
  }
  $73 = ((($74)) + 12|0);
  HEAP8[$73>>0] = 1;
  $75 = ((($76)) + 12|0);
  HEAP8[$75>>0] = 0;
  $77 = ((($76)) + 4|0);
  $78 = HEAP32[$77>>2]|0;
  $79 = HEAP32[$78>>2]|0;
  HEAP32[$77>>2] = $79;
  $80 = ($79|0)==(0|0);
  if (!($80)) {
   $81 = ((($79)) + 8|0);
   HEAP32[$81>>2] = $76;
  }
  $82 = ((($76)) + 8|0);
  $83 = HEAP32[$82>>2]|0;
  $84 = ((($78)) + 8|0);
  HEAP32[$84>>2] = $83;
  $85 = HEAP32[$82>>2]|0;
  $86 = HEAP32[$85>>2]|0;
  $87 = ($86|0)==($76|0);
  if ($87) {
   HEAP32[$85>>2] = $78;
  } else {
   $88 = ((($85)) + 4|0);
   HEAP32[$88>>2] = $78;
  }
  HEAP32[$78>>2] = $76;
  HEAP32[$82>>2] = $78;
  return;
 }
 else if ((label|0) == 37) {
  return;
 }
}
function __ZNSt3__26vectorIP12EventHandlerNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$0$i13 = 0, $$0$i2 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = HEAP32[$this>>2]|0;
 $3 = (($1) - ($2))|0;
 $4 = $3 >> 2;
 $5 = (($4) + 1)|0;
 $6 = ($5>>>0)>(1073741823);
 if ($6) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($this);
  // unreachable;
 }
 $7 = ((($this)) + 8|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = (($8) - ($2))|0;
 $10 = $9 >> 2;
 $11 = ($10>>>0)<(536870911);
 if ($11) {
  $15 = $9 >> 1;
  $16 = ($15>>>0)<($5>>>0);
  $17 = $16 ? $5 : $15;
  $18 = HEAP32[$0>>2]|0;
  $19 = (($18) - ($2))|0;
  $20 = $19 >> 2;
  $21 = ($17|0)==(0);
  if ($21) {
   $$0$i2 = 0;$27 = 0;$28 = $20;$35 = $18;
  } else {
   $22 = ($17>>>0)>(1073741823);
   if ($22) {
    $23 = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($23);
    ___cxa_throw(($23|0),(1200|0),(20|0));
    // unreachable;
   } else {
    $$0$i13 = $17;$44 = $18;$45 = $20;
    label = 8;
   }
  }
 } else {
  $12 = HEAP32[$0>>2]|0;
  $13 = (($12) - ($2))|0;
  $14 = $13 >> 2;
  $$0$i13 = 1073741823;$44 = $12;$45 = $14;
  label = 8;
 }
 if ((label|0) == 8) {
  $24 = $$0$i13 << 2;
  $25 = (__Znwj($24)|0);
  $$0$i2 = $$0$i13;$27 = $25;$28 = $45;$35 = $44;
 }
 $26 = (($27) + ($28<<2)|0);
 $29 = (($27) + ($$0$i2<<2)|0);
 $30 = $29;
 $31 = HEAP32[$__x>>2]|0;
 HEAP32[$26>>2] = $31;
 $32 = ((($26)) + 4|0);
 $33 = $32;
 $34 = (($35) - ($2))|0;
 $36 = $34 >> 2;
 $37 = (0 - ($36))|0;
 $38 = (($26) + ($37<<2)|0);
 $39 = $38;
 $40 = ($34|0)>(0);
 if ($40) {
  $41 = $2;
  _memcpy(($38|0),($41|0),($34|0))|0;
 }
 HEAP32[$this>>2] = $39;
 HEAP32[$0>>2] = $33;
 HEAP32[$7>>2] = $30;
 $42 = ($2|0)==(0);
 if ($42) {
  return;
 }
 $43 = $2;
 __ZdlPv($43);
 return;
}
function __ZN12EventHandlerC2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN12EventHandler11handleEventEPNSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE($this,$pData) {
 $this = $this|0;
 $pData = $pData|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (_puts(2052)|0);
 return 0;
}
function __ZN6VectorC2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 ;HEAP32[$this>>2]=0|0;HEAP32[$this+4>>2]=0|0;HEAP32[$this+8>>2]=0|0;HEAP32[$this+12>>2]=0|0;HEAP32[$this+16>>2]=0|0;HEAP32[$this+20>>2]=0|0;
 return;
}
function __ZN6VectorC2Eddd($this,$x,$y,$z) {
 $this = $this|0;
 $x = +$x;
 $y = +$y;
 $z = +$z;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAPF64[$this>>3] = $x;
 $0 = ((($this)) + 8|0);
 HEAPF64[$0>>3] = $y;
 $1 = ((($this)) + 16|0);
 HEAPF64[$1>>3] = $z;
 return;
}
function __ZN6Vector3setEddd($this,$x,$y,$z) {
 $this = $this|0;
 $x = +$x;
 $y = +$y;
 $z = +$z;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAPF64[$this>>3] = $x;
 $0 = ((($this)) + 8|0);
 HEAPF64[$0>>3] = $y;
 $1 = ((($this)) + 16|0);
 HEAPF64[$1>>3] = $z;
 return;
}
function __ZN6Vector3setERS_($this,$v) {
 $this = $this|0;
 $v = $v|0;
 var $0 = 0.0, $1 = 0, $2 = 0.0, $3 = 0, $4 = 0.0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = +HEAPF64[$v>>3];
 $1 = ((($v)) + 8|0);
 $2 = +HEAPF64[$1>>3];
 $3 = ((($v)) + 16|0);
 $4 = +HEAPF64[$3>>3];
 HEAPF64[$this>>3] = $0;
 $5 = ((($this)) + 8|0);
 HEAPF64[$5>>3] = $2;
 $6 = ((($this)) + 16|0);
 HEAPF64[$6>>3] = $4;
 return;
}
function __ZN6Vector4getXEv($this) {
 $this = $this|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = +HEAPF64[$this>>3];
 return (+$0);
}
function __ZN6Vector4getYEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 8|0);
 $1 = +HEAPF64[$0>>3];
 return (+$1);
}
function __ZN6Vector4getZEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 16|0);
 $1 = +HEAPF64[$0>>3];
 return (+$1);
}
function __ZN6Vector9magnitudeEv($this) {
 $this = $this|0;
 var $0 = 0.0, $1 = 0.0, $10 = 0.0, $2 = 0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0, $7 = 0.0, $8 = 0.0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = +HEAPF64[$this>>3];
 $1 = $0 * $0;
 $2 = ((($this)) + 8|0);
 $3 = +HEAPF64[$2>>3];
 $4 = $3 * $3;
 $5 = $1 + $4;
 $6 = ((($this)) + 16|0);
 $7 = +HEAPF64[$6>>3];
 $8 = $7 * $7;
 $9 = $5 + $8;
 $10 = (+Math_sqrt((+$9)));
 return (+$10);
}
function __ZN6Vector12withinSphereEPS_d($this,$center,$radius) {
 $this = $this|0;
 $center = $center|0;
 $radius = +$radius;
 var $0 = 0.0, $1 = 0.0, $10 = 0.0, $11 = 0, $12 = 0.0, $13 = 0, $14 = 0.0, $15 = 0.0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $19 = 0, $2 = 0.0, $3 = 0.0, $4 = 0, $5 = 0.0, $6 = 0, $7 = 0.0, $8 = 0.0, $9 = 0.0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $0 = +HEAPF64[$this>>3];
 $1 = +HEAPF64[$center>>3];
 $2 = $0 - $1;
 $3 = $2 * $2;
 $4 = ((($this)) + 8|0);
 $5 = +HEAPF64[$4>>3];
 $6 = ((($center)) + 8|0);
 $7 = +HEAPF64[$6>>3];
 $8 = $5 - $7;
 $9 = $8 * $8;
 $10 = $3 + $9;
 $11 = ((($this)) + 16|0);
 $12 = +HEAPF64[$11>>3];
 $13 = ((($center)) + 16|0);
 $14 = +HEAPF64[$13>>3];
 $15 = $12 - $14;
 $16 = $15 * $15;
 $17 = $10 + $16;
 $18 = $radius * $radius;
 $19 = $17 < $18;
 return ($19|0);
}
function _emscripten_bind_BaseObject_BaseObject_2($arg0,$arg1) {
 $arg0 = $arg0|0;
 $arg1 = $arg1|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(64)|0);
 __THREW__ = 0;
 invoke_viii(41,($0|0),($arg0|0),($arg1|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  __ZdlPv($0);
  ___resumeException($3|0);
  // unreachable;
 } else {
  return ($0|0);
 }
 return (0)|0;
}
function _emscripten_bind_BaseObject___destroy___0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($self|0)==(0|0);
 if ($0) {
  return;
 }
 __ZdlPv($self);
 return;
}
function _emscripten_bind_BaseObject_getId_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN10BaseObject5getIdEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_BaseObject_getSelectable_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN10BaseObject13getSelectableEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_BaseObject_getTransformable_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN10BaseObject16getTransformableEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_BaseObject_getType_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN10BaseObject7getTypeEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_BaseObject_setPosition_3($self,$arg0,$arg1,$arg2) {
 $self = $self|0;
 $arg0 = +$arg0;
 $arg1 = +$arg1;
 $arg2 = +$arg2;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN10BaseObject11setPositionEddd($self,$arg0,$arg1,$arg2);
 return;
}
function _emscripten_bind_BaseObject_setSelectable_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN10BaseObject13setSelectableEb($self,$arg0);
 return;
}
function _emscripten_bind_BaseObject_setTransformable_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN10BaseObject16setTransformableEb($self,$arg0);
 return;
}
function _emscripten_bind_EmString_EmString_0() {
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(12)|0);
 ;HEAP32[$0>>2]=0|0;HEAP32[$0+4>>2]=0|0;HEAP32[$0+8>>2]=0|0;
 return ($0|0);
}
function _emscripten_bind_EmString_EmString_1($arg0) {
 $arg0 = $arg0|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(12)|0);
 ;HEAP32[$0>>2]=0|0;HEAP32[$0+4>>2]=0|0;HEAP32[$0+8>>2]=0|0;
 __THREW__ = 0;
 (invoke_iii(42,($0|0),($arg0|0))|0);
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if (!($2)) {
  return ($0|0);
 }
 $3 = ___cxa_find_matching_catch_2()|0;
 $4 = tempRet0;
 __THREW__ = 0;
 invoke_vi(33,($0|0));
 $5 = __THREW__; __THREW__ = 0;
 $6 = $5&1;
 if ($6) {
  $7 = ___cxa_find_matching_catch_3(0|0)|0;
  $8 = tempRet0;
  ___clang_call_terminate($7);
  // unreachable;
 } else {
  __ZdlPv($0);
  ___resumeException($3|0);
  // unreachable;
 }
 return (0)|0;
}
function _emscripten_bind_EmString___destroy___0($self) {
 $self = $self|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($self|0)==(0|0);
 if ($0) {
  return;
 }
 __THREW__ = 0;
 invoke_vi(33,($self|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  __ZdlPv($self);
  ___resumeException($3|0);
  // unreachable;
 }
 __ZdlPv($self);
 return;
}
function _emscripten_bind_EmString_c_str_0($self) {
 $self = $self|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($self)) + 11|0);
 $1 = HEAP8[$0>>0]|0;
 $2 = ($1<<24>>24)<(0);
 if ($2) {
  $3 = HEAP32[$self>>2]|0;
  $4 = $3;
  return ($4|0);
 } else {
  $4 = $self;
  return ($4|0);
 }
 return (0)|0;
}
function _emscripten_bind_EventHandler_EventHandler_0() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(1)|0);
 __THREW__ = 0;
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  __ZdlPv($0);
  ___resumeException($3|0);
  // unreachable;
 } else {
  return ($0|0);
 }
 return (0)|0;
}
function _emscripten_bind_EventHandler___destroy___0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($self|0)==(0|0);
 if ($0) {
  return;
 }
 __ZdlPv($self);
 return;
}
function _emscripten_bind_EventHandler_handleEvent_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN12EventHandler11handleEventEPNSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE($self,$arg0)|0);
 return ($0|0);
}
function _emscripten_bind_MagneticField_MagneticField_1($arg0) {
 $arg0 = $arg0|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(80)|0);
 __THREW__ = 0;
 invoke_vii(35,($0|0),($arg0|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  __ZdlPv($0);
  ___resumeException($3|0);
  // unreachable;
 } else {
  return ($0|0);
 }
 return (0)|0;
}
function _emscripten_bind_MagneticField___destroy___0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($self|0)==(0|0);
 if ($0) {
  return;
 }
 __ZdlPv($self);
 return;
}
function _emscripten_bind_MagneticField_getForce_0($self) {
 $self = $self|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+__ZN13MagneticField8getForceEv($self));
 return (+$0);
}
function _emscripten_bind_MagneticField_getOffset_0($self) {
 $self = $self|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($self)) + 8|0);
 $1 = (__ZN10BaseObject9getOffsetEv($0)|0);
 return ($1|0);
}
function _emscripten_bind_MagneticField_getPosition_0($self) {
 $self = $self|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($self)) + 8|0);
 $1 = (__ZN10BaseObject11getPositionEv($0)|0);
 return ($1|0);
}
function _emscripten_bind_MagneticField_setForce_1($self,$arg0) {
 $self = $self|0;
 $arg0 = +$arg0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN13MagneticField8setForceEd($self,$arg0);
 return;
}
function _emscripten_bind_MagneticField_setOffset_3($self,$arg0,$arg1,$arg2) {
 $self = $self|0;
 $arg0 = +$arg0;
 $arg1 = +$arg1;
 $arg2 = +$arg2;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($self)) + 8|0);
 __ZN10BaseObject9setOffsetEddd($0,$arg0,$arg1,$arg2);
 return;
}
function _emscripten_bind_MagneticField_setPosition_3($self,$arg0,$arg1,$arg2) {
 $self = $self|0;
 $arg0 = +$arg0;
 $arg1 = +$arg1;
 $arg2 = +$arg2;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($self)) + 8|0);
 __ZN10BaseObject11setPositionEddd($0,$arg0,$arg1,$arg2);
 return;
}
function _emscripten_bind_MagneticField_setSelectable_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($self)) + 8|0);
 __ZN10BaseObject13setSelectableEb($0,$arg0);
 return;
}
function _emscripten_bind_MagneticField_setTransformable_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($self)) + 8|0);
 __ZN10BaseObject16setTransformableEb($0,$arg0);
 return;
}
function _emscripten_bind_ParticleEmitter_ParticleEmitter_1($arg0) {
 $arg0 = $arg0|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(96)|0);
 __THREW__ = 0;
 invoke_vii(34,($0|0),($arg0|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  __ZdlPv($0);
  ___resumeException($3|0);
  // unreachable;
 } else {
  return ($0|0);
 }
 return (0)|0;
}
function _emscripten_bind_ParticleEmitter___destroy___0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($self|0)==(0|0);
 if ($0) {
  return;
 }
 __ZdlPv($self);
 return;
}
function _emscripten_bind_ParticleEmitter_getCharge_0($self) {
 $self = $self|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+__ZN15ParticleEmitter9getChargeEv($self));
 return (+$0);
}
function _emscripten_bind_ParticleEmitter_getEmissionRate_0($self) {
 $self = $self|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+__ZN15ParticleEmitter15getEmissionRateEv($self));
 return (+$0);
}
function _emscripten_bind_ParticleEmitter_getOffset_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN10BaseObject9getOffsetEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_ParticleEmitter_getPosition_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN10BaseObject11getPositionEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_ParticleEmitter_getSpread_0($self) {
 $self = $self|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+__ZN15ParticleEmitter9getSpreadEv($self));
 return (+$0);
}
function _emscripten_bind_ParticleEmitter_getVelocity_0($self) {
 $self = $self|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+__ZN15ParticleEmitter11getVelocityEv($self));
 return (+$0);
}
function _emscripten_bind_ParticleEmitter_setCharge_1($self,$arg0) {
 $self = $self|0;
 $arg0 = +$arg0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN15ParticleEmitter9setChargeEd($self,$arg0);
 return;
}
function _emscripten_bind_ParticleEmitter_setEmissionRate_1($self,$arg0) {
 $self = $self|0;
 $arg0 = +$arg0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN15ParticleEmitter15setEmissionRateEd($self,$arg0);
 return;
}
function _emscripten_bind_ParticleEmitter_setOffset_3($self,$arg0,$arg1,$arg2) {
 $self = $self|0;
 $arg0 = +$arg0;
 $arg1 = +$arg1;
 $arg2 = +$arg2;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN10BaseObject9setOffsetEddd($self,$arg0,$arg1,$arg2);
 return;
}
function _emscripten_bind_ParticleEmitter_setPosition_3($self,$arg0,$arg1,$arg2) {
 $self = $self|0;
 $arg0 = +$arg0;
 $arg1 = +$arg1;
 $arg2 = +$arg2;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN10BaseObject11setPositionEddd($self,$arg0,$arg1,$arg2);
 return;
}
function _emscripten_bind_ParticleEmitter_setSelectable_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN10BaseObject13setSelectableEb($self,$arg0);
 return;
}
function _emscripten_bind_ParticleEmitter_setSpread_1($self,$arg0) {
 $self = $self|0;
 $arg0 = +$arg0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN15ParticleEmitter9setSpreadEd($self,$arg0);
 return;
}
function _emscripten_bind_ParticleEmitter_setTransformable_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN10BaseObject16setTransformableEb($self,$arg0);
 return;
}
function _emscripten_bind_ParticleEmitter_setVelocity_1($self,$arg0) {
 $self = $self|0;
 $arg0 = +$arg0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN15ParticleEmitter11setVelocityEd($self,$arg0);
 return;
}
function _emscripten_bind_ParticleSystem_ParticleSystem_1($arg0) {
 $arg0 = $arg0|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(112)|0);
 __THREW__ = 0;
 invoke_vii(43,($0|0),($arg0|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  __ZdlPv($0);
  ___resumeException($3|0);
  // unreachable;
 } else {
  return ($0|0);
 }
 return (0)|0;
}
function _emscripten_bind_ParticleSystem___destroy___0($self) {
 $self = $self|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($self|0)==(0|0);
 if ($0) {
  return;
 }
 __THREW__ = 0;
 invoke_vi(44,($self|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  __ZdlPv($self);
  ___resumeException($3|0);
  // unreachable;
 }
 __ZdlPv($self);
 return;
}
function _emscripten_bind_ParticleSystem_addEmitter_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN14ParticleSystem10addEmitterEi($self,$arg0)|0);
 return ($0|0);
}
function _emscripten_bind_ParticleSystem_addMagneticField_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN14ParticleSystem16addMagneticFieldEi($self,$arg0)|0);
 return ($0|0);
}
function _emscripten_bind_ParticleSystem_destroy_0($self) {
 $self = $self|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN14ParticleSystem7destroyEv($self);
 return;
}
function _emscripten_bind_ParticleSystem_getEmitter_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN14ParticleSystem10getEmitterEi($self,$arg0)|0);
 return ($0|0);
}
function _emscripten_bind_ParticleSystem_getMagneticField_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN14ParticleSystem16getMagneticFieldEi($self,$arg0)|0);
 return ($0|0);
}
function _emscripten_bind_ParticleSystem_getMaxParticles_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN14ParticleSystem15getMaxParticlesEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_ParticleSystem_getObjectById_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN14ParticleSystem13getObjectByIdEi($self,$arg0)|0);
 return ($0|0);
}
function _emscripten_bind_ParticleSystem_initParticleLoop_0($self) {
 $self = $self|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN14ParticleSystem16initParticleLoopEv($self);
 return;
}
function _emscripten_bind_ParticleSystem_nextParticle_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN14ParticleSystem12nextParticleEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_ParticleSystem_on_2($self,$arg0,$arg1) {
 $self = $self|0;
 $arg0 = $arg0|0;
 $arg1 = $arg1|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN12EventEmitter2onEPNSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEP12EventHandler($self,$arg0,$arg1);
 return;
}
function _emscripten_bind_ParticleSystem_setDof_3($self,$arg0,$arg1,$arg2) {
 $self = $self|0;
 $arg0 = +$arg0;
 $arg1 = +$arg1;
 $arg2 = +$arg2;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN14ParticleSystem6setDofEddd($self,$arg0,$arg1,$arg2);
 return;
}
function _emscripten_bind_ParticleSystem_setMaxParticles_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN14ParticleSystem15setMaxParticlesEi($self,$arg0);
 return;
}
function _emscripten_bind_ParticleSystem_step_1($self,$arg0) {
 $self = $self|0;
 $arg0 = +$arg0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN14ParticleSystem4stepEd($self,$arg0);
 return;
}
function _emscripten_bind_Particle_Particle_0() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(128)|0);
 __THREW__ = 0;
 invoke_vi(36,($0|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  __ZdlPv($0);
  ___resumeException($3|0);
  // unreachable;
 } else {
  return ($0|0);
 }
 return (0)|0;
}
function _emscripten_bind_Particle___destroy___0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($self|0)==(0|0);
 if ($0) {
  return;
 }
 __ZdlPv($self);
 return;
}
function _emscripten_bind_Particle_getAcceleration_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN8Particle15getAccelerationEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_Particle_getDof_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN8Particle6getDofEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_Particle_getLifeTime_0($self) {
 $self = $self|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+__ZN8Particle11getLifeTimeEv($self));
 return (+$0);
}
function _emscripten_bind_Particle_getPosition_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN8Particle11getPositionEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_Particle_getRadius_0($self) {
 $self = $self|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+__ZN8Particle9getRadiusEv($self));
 return (+$0);
}
function _emscripten_bind_Particle_getRecycled_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN8Particle11getRecycledEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_Particle_getVelocity_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN8Particle11getVelocityEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_Particle_setLifeTime_1($self,$arg0) {
 $self = $self|0;
 $arg0 = +$arg0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN8Particle11setLifeTimeEd($self,$arg0);
 return;
}
function _emscripten_bind_Vector_Vector_3($arg0,$arg1,$arg2) {
 $arg0 = +$arg0;
 $arg1 = +$arg1;
 $arg2 = +$arg2;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(24)|0);
 __THREW__ = 0;
 invoke_viddd(45,($0|0),(+$arg0),(+$arg1),(+$arg2));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  __ZdlPv($0);
  ___resumeException($3|0);
  // unreachable;
 } else {
  return ($0|0);
 }
 return (0)|0;
}
function _emscripten_bind_Vector___destroy___0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($self|0)==(0|0);
 if ($0) {
  return;
 }
 __ZdlPv($self);
 return;
}
function _emscripten_bind_Vector_getX_0($self) {
 $self = $self|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+__ZN6Vector4getXEv($self));
 return (+$0);
}
function _emscripten_bind_Vector_getY_0($self) {
 $self = $self|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+__ZN6Vector4getYEv($self));
 return (+$0);
}
function _emscripten_bind_Vector_getZ_0($self) {
 $self = $self|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+__ZN6Vector4getZEv($self));
 return (+$0);
}
function _emscripten_bind_Vector_magnitude_0($self) {
 $self = $self|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+__ZN6Vector9magnitudeEv($self));
 return (+$0);
}
function _emscripten_bind_Vector_set_3($self,$arg0,$arg1,$arg2) {
 $self = $self|0;
 $arg0 = +$arg0;
 $arg1 = +$arg1;
 $arg2 = +$arg2;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN6Vector3setEddd($self,$arg0,$arg1,$arg2);
 return;
}
function _emscripten_bind_Vector_withinSphere_2($self,$arg0,$arg1) {
 $self = $self|0;
 $arg0 = $arg0|0;
 $arg1 = +$arg1;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN6Vector12withinSphereEPS_d($self,$arg0,$arg1)|0);
 return ($0|0);
}
function _emscripten_bind_VoidPtr___destroy___0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($self|0)==(0|0);
 if ($0) {
  return;
 }
 __ZdlPv($self);
 return;
}
function ___stdio_close($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = ((($f)) + 60|0);
 $1 = HEAP32[$0>>2]|0;
 HEAP32[$vararg_buffer>>2] = $1;
 $2 = (___syscall6(6,($vararg_buffer|0))|0);
 $3 = (___syscall_ret($2)|0);
 STACKTOP = sp;return ($3|0);
}
function ___syscall_ret($r) {
 $r = $r|0;
 var $$0 = 0, $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($r>>>0)>(4294963200);
 if ($0) {
  $1 = (0 - ($r))|0;
  $2 = (___errno_location()|0);
  HEAP32[$2>>2] = $1;
  $$0 = -1;
 } else {
  $$0 = $r;
 }
 return ($$0|0);
}
function ___errno_location() {
 var $$0 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (0|0)==(0|0);
 if ($0) {
  $$0 = 5244;
 } else {
  $1 = (_pthread_self()|0);
  $2 = ((($1)) + 64|0);
  $3 = HEAP32[$2>>2]|0;
  $$0 = $3;
 }
 return ($$0|0);
}
function ___stdio_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $$0 = 0, $$phi$trans$insert = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $cnt$0 = 0, $cnt$1 = 0, $iov$0 = 0, $iov$0$lcssa11 = 0, $iov$1 = 0, $iovcnt$0 = 0, $iovcnt$0$lcssa12 = 0;
 var $iovcnt$1 = 0, $iovs = 0, $rem$0 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $iovs = sp + 32|0;
 $0 = ((($f)) + 28|0);
 $1 = HEAP32[$0>>2]|0;
 HEAP32[$iovs>>2] = $1;
 $2 = ((($iovs)) + 4|0);
 $3 = ((($f)) + 20|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = (($4) - ($1))|0;
 HEAP32[$2>>2] = $5;
 $6 = ((($iovs)) + 8|0);
 HEAP32[$6>>2] = $buf;
 $7 = ((($iovs)) + 12|0);
 HEAP32[$7>>2] = $len;
 $8 = (($5) + ($len))|0;
 $9 = ((($f)) + 60|0);
 $10 = ((($f)) + 44|0);
 $iov$0 = $iovs;$iovcnt$0 = 2;$rem$0 = $8;
 while(1) {
  $11 = HEAP32[1300]|0;
  $12 = ($11|0)==(0|0);
  if ($12) {
   $16 = HEAP32[$9>>2]|0;
   HEAP32[$vararg_buffer3>>2] = $16;
   $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
   HEAP32[$vararg_ptr6>>2] = $iov$0;
   $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
   HEAP32[$vararg_ptr7>>2] = $iovcnt$0;
   $17 = (___syscall146(146,($vararg_buffer3|0))|0);
   $18 = (___syscall_ret($17)|0);
   $cnt$0 = $18;
  } else {
   _pthread_cleanup_push((46|0),($f|0));
   $13 = HEAP32[$9>>2]|0;
   HEAP32[$vararg_buffer>>2] = $13;
   $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
   HEAP32[$vararg_ptr1>>2] = $iov$0;
   $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
   HEAP32[$vararg_ptr2>>2] = $iovcnt$0;
   $14 = (___syscall146(146,($vararg_buffer|0))|0);
   $15 = (___syscall_ret($14)|0);
   _pthread_cleanup_pop(0);
   $cnt$0 = $15;
  }
  $19 = ($rem$0|0)==($cnt$0|0);
  if ($19) {
   label = 6;
   break;
  }
  $26 = ($cnt$0|0)<(0);
  if ($26) {
   $iov$0$lcssa11 = $iov$0;$iovcnt$0$lcssa12 = $iovcnt$0;
   label = 8;
   break;
  }
  $34 = (($rem$0) - ($cnt$0))|0;
  $35 = ((($iov$0)) + 4|0);
  $36 = HEAP32[$35>>2]|0;
  $37 = ($cnt$0>>>0)>($36>>>0);
  if ($37) {
   $38 = HEAP32[$10>>2]|0;
   HEAP32[$0>>2] = $38;
   HEAP32[$3>>2] = $38;
   $39 = (($cnt$0) - ($36))|0;
   $40 = ((($iov$0)) + 8|0);
   $41 = (($iovcnt$0) + -1)|0;
   $$phi$trans$insert = ((($iov$0)) + 12|0);
   $$pre = HEAP32[$$phi$trans$insert>>2]|0;
   $49 = $$pre;$cnt$1 = $39;$iov$1 = $40;$iovcnt$1 = $41;
  } else {
   $42 = ($iovcnt$0|0)==(2);
   if ($42) {
    $43 = HEAP32[$0>>2]|0;
    $44 = (($43) + ($cnt$0)|0);
    HEAP32[$0>>2] = $44;
    $49 = $36;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = 2;
   } else {
    $49 = $36;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = $iovcnt$0;
   }
  }
  $45 = HEAP32[$iov$1>>2]|0;
  $46 = (($45) + ($cnt$1)|0);
  HEAP32[$iov$1>>2] = $46;
  $47 = ((($iov$1)) + 4|0);
  $48 = (($49) - ($cnt$1))|0;
  HEAP32[$47>>2] = $48;
  $iov$0 = $iov$1;$iovcnt$0 = $iovcnt$1;$rem$0 = $34;
 }
 if ((label|0) == 6) {
  $20 = HEAP32[$10>>2]|0;
  $21 = ((($f)) + 48|0);
  $22 = HEAP32[$21>>2]|0;
  $23 = (($20) + ($22)|0);
  $24 = ((($f)) + 16|0);
  HEAP32[$24>>2] = $23;
  $25 = $20;
  HEAP32[$0>>2] = $25;
  HEAP32[$3>>2] = $25;
  $$0 = $len;
 }
 else if ((label|0) == 8) {
  $27 = ((($f)) + 16|0);
  HEAP32[$27>>2] = 0;
  HEAP32[$0>>2] = 0;
  HEAP32[$3>>2] = 0;
  $28 = HEAP32[$f>>2]|0;
  $29 = $28 | 32;
  HEAP32[$f>>2] = $29;
  $30 = ($iovcnt$0$lcssa12|0)==(2);
  if ($30) {
   $$0 = 0;
  } else {
   $31 = ((($iov$0$lcssa11)) + 4|0);
   $32 = HEAP32[$31>>2]|0;
   $33 = (($len) - ($32))|0;
   $$0 = $33;
  }
 }
 STACKTOP = sp;return ($$0|0);
}
function _cleanup_387($p) {
 $p = $p|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($p)) + 68|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)==(0);
 if ($2) {
  ___unlockfile($p);
 }
 return;
}
function ___unlockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___stdio_seek($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $ret = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $ret = sp + 20|0;
 $0 = ((($f)) + 60|0);
 $1 = HEAP32[$0>>2]|0;
 HEAP32[$vararg_buffer>>2] = $1;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = 0;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $off;
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 HEAP32[$vararg_ptr3>>2] = $ret;
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 HEAP32[$vararg_ptr4>>2] = $whence;
 $2 = (___syscall140(140,($vararg_buffer|0))|0);
 $3 = (___syscall_ret($2)|0);
 $4 = ($3|0)<(0);
 if ($4) {
  HEAP32[$ret>>2] = -1;
  $5 = -1;
 } else {
  $$pre = HEAP32[$ret>>2]|0;
  $5 = $$pre;
 }
 STACKTOP = sp;return ($5|0);
}
function ___stdout_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $tio = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $tio = sp + 12|0;
 $0 = ((($f)) + 36|0);
 HEAP32[$0>>2] = 4;
 $1 = HEAP32[$f>>2]|0;
 $2 = $1 & 64;
 $3 = ($2|0)==(0);
 if ($3) {
  $4 = ((($f)) + 60|0);
  $5 = HEAP32[$4>>2]|0;
  HEAP32[$vararg_buffer>>2] = $5;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = 21505;
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  HEAP32[$vararg_ptr2>>2] = $tio;
  $6 = (___syscall54(54,($vararg_buffer|0))|0);
  $7 = ($6|0)==(0);
  if (!($7)) {
   $8 = ((($f)) + 75|0);
   HEAP8[$8>>0] = -1;
  }
 }
 $9 = (___stdio_write($f,$buf,$len)|0);
 STACKTOP = sp;return ($9|0);
}
function _memchr($src,$c,$n) {
 $src = $src|0;
 $c = $c|0;
 $n = $n|0;
 var $$0$lcssa = 0, $$0$lcssa30 = 0, $$019 = 0, $$1$lcssa = 0, $$110 = 0, $$110$lcssa = 0, $$24 = 0, $$3 = 0, $$lcssa = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0;
 var $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond18 = 0, $s$0$lcssa = 0, $s$0$lcssa29 = 0, $s$020 = 0, $s$15 = 0, $s$2 = 0, $w$0$lcssa = 0, $w$011 = 0, $w$011$lcssa = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $c & 255;
 $1 = $src;
 $2 = $1 & 3;
 $3 = ($2|0)!=(0);
 $4 = ($n|0)!=(0);
 $or$cond18 = $4 & $3;
 L1: do {
  if ($or$cond18) {
   $5 = $c&255;
   $$019 = $n;$s$020 = $src;
   while(1) {
    $6 = HEAP8[$s$020>>0]|0;
    $7 = ($6<<24>>24)==($5<<24>>24);
    if ($7) {
     $$0$lcssa30 = $$019;$s$0$lcssa29 = $s$020;
     label = 6;
     break L1;
    }
    $8 = ((($s$020)) + 1|0);
    $9 = (($$019) + -1)|0;
    $10 = $8;
    $11 = $10 & 3;
    $12 = ($11|0)!=(0);
    $13 = ($9|0)!=(0);
    $or$cond = $13 & $12;
    if ($or$cond) {
     $$019 = $9;$s$020 = $8;
    } else {
     $$0$lcssa = $9;$$lcssa = $13;$s$0$lcssa = $8;
     label = 5;
     break;
    }
   }
  } else {
   $$0$lcssa = $n;$$lcssa = $4;$s$0$lcssa = $src;
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  if ($$lcssa) {
   $$0$lcssa30 = $$0$lcssa;$s$0$lcssa29 = $s$0$lcssa;
   label = 6;
  } else {
   $$3 = 0;$s$2 = $s$0$lcssa;
  }
 }
 L8: do {
  if ((label|0) == 6) {
   $14 = HEAP8[$s$0$lcssa29>>0]|0;
   $15 = $c&255;
   $16 = ($14<<24>>24)==($15<<24>>24);
   if ($16) {
    $$3 = $$0$lcssa30;$s$2 = $s$0$lcssa29;
   } else {
    $17 = Math_imul($0, 16843009)|0;
    $18 = ($$0$lcssa30>>>0)>(3);
    L11: do {
     if ($18) {
      $$110 = $$0$lcssa30;$w$011 = $s$0$lcssa29;
      while(1) {
       $19 = HEAP32[$w$011>>2]|0;
       $20 = $19 ^ $17;
       $21 = (($20) + -16843009)|0;
       $22 = $20 & -2139062144;
       $23 = $22 ^ -2139062144;
       $24 = $23 & $21;
       $25 = ($24|0)==(0);
       if (!($25)) {
        $$110$lcssa = $$110;$w$011$lcssa = $w$011;
        break;
       }
       $26 = ((($w$011)) + 4|0);
       $27 = (($$110) + -4)|0;
       $28 = ($27>>>0)>(3);
       if ($28) {
        $$110 = $27;$w$011 = $26;
       } else {
        $$1$lcssa = $27;$w$0$lcssa = $26;
        label = 11;
        break L11;
       }
      }
      $$24 = $$110$lcssa;$s$15 = $w$011$lcssa;
     } else {
      $$1$lcssa = $$0$lcssa30;$w$0$lcssa = $s$0$lcssa29;
      label = 11;
     }
    } while(0);
    if ((label|0) == 11) {
     $29 = ($$1$lcssa|0)==(0);
     if ($29) {
      $$3 = 0;$s$2 = $w$0$lcssa;
      break;
     } else {
      $$24 = $$1$lcssa;$s$15 = $w$0$lcssa;
     }
    }
    while(1) {
     $30 = HEAP8[$s$15>>0]|0;
     $31 = ($30<<24>>24)==($15<<24>>24);
     if ($31) {
      $$3 = $$24;$s$2 = $s$15;
      break L8;
     }
     $32 = ((($s$15)) + 1|0);
     $33 = (($$24) + -1)|0;
     $34 = ($33|0)==(0);
     if ($34) {
      $$3 = 0;$s$2 = $32;
      break;
     } else {
      $$24 = $33;$s$15 = $32;
     }
    }
   }
  }
 } while(0);
 $35 = ($$3|0)!=(0);
 $36 = $35 ? $s$2 : 0;
 return ($36|0);
}
function _memcmp($vl,$vr,$n) {
 $vl = $vl|0;
 $vr = $vr|0;
 $n = $n|0;
 var $$03 = 0, $$lcssa = 0, $$lcssa19 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $l$04 = 0, $r$05 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($n|0)==(0);
 L1: do {
  if ($0) {
   $11 = 0;
  } else {
   $$03 = $n;$l$04 = $vl;$r$05 = $vr;
   while(1) {
    $1 = HEAP8[$l$04>>0]|0;
    $2 = HEAP8[$r$05>>0]|0;
    $3 = ($1<<24>>24)==($2<<24>>24);
    if (!($3)) {
     $$lcssa = $1;$$lcssa19 = $2;
     break;
    }
    $4 = (($$03) + -1)|0;
    $5 = ((($l$04)) + 1|0);
    $6 = ((($r$05)) + 1|0);
    $7 = ($4|0)==(0);
    if ($7) {
     $11 = 0;
     break L1;
    } else {
     $$03 = $4;$l$04 = $5;$r$05 = $6;
    }
   }
   $8 = $$lcssa&255;
   $9 = $$lcssa19&255;
   $10 = (($8) - ($9))|0;
   $11 = $10;
  }
 } while(0);
 return ($11|0);
}
function _vfprintf($f,$fmt,$ap) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $$ = 0, $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $ap2 = 0, $internal_buf = 0, $nl_arg = 0, $nl_type = 0;
 var $ret$1 = 0, $ret$1$ = 0, $vacopy_currentptr = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $ap2 = sp + 120|0;
 $nl_type = sp + 80|0;
 $nl_arg = sp;
 $internal_buf = sp + 136|0;
 dest=$nl_type; stop=dest+40|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 $vacopy_currentptr = HEAP32[$ap>>2]|0;
 HEAP32[$ap2>>2] = $vacopy_currentptr;
 $0 = (_printf_core(0,$fmt,$ap2,$nl_arg,$nl_type)|0);
 $1 = ($0|0)<(0);
 if ($1) {
  $$0 = -1;
 } else {
  $2 = ((($f)) + 76|0);
  $3 = HEAP32[$2>>2]|0;
  $4 = ($3|0)>(-1);
  if ($4) {
   $5 = (___lockfile($f)|0);
   $33 = $5;
  } else {
   $33 = 0;
  }
  $6 = HEAP32[$f>>2]|0;
  $7 = $6 & 32;
  $8 = ((($f)) + 74|0);
  $9 = HEAP8[$8>>0]|0;
  $10 = ($9<<24>>24)<(1);
  if ($10) {
   $11 = $6 & -33;
   HEAP32[$f>>2] = $11;
  }
  $12 = ((($f)) + 48|0);
  $13 = HEAP32[$12>>2]|0;
  $14 = ($13|0)==(0);
  if ($14) {
   $16 = ((($f)) + 44|0);
   $17 = HEAP32[$16>>2]|0;
   HEAP32[$16>>2] = $internal_buf;
   $18 = ((($f)) + 28|0);
   HEAP32[$18>>2] = $internal_buf;
   $19 = ((($f)) + 20|0);
   HEAP32[$19>>2] = $internal_buf;
   HEAP32[$12>>2] = 80;
   $20 = ((($internal_buf)) + 80|0);
   $21 = ((($f)) + 16|0);
   HEAP32[$21>>2] = $20;
   $22 = (_printf_core($f,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $23 = ($17|0)==(0|0);
   if ($23) {
    $ret$1 = $22;
   } else {
    $24 = ((($f)) + 36|0);
    $25 = HEAP32[$24>>2]|0;
    (FUNCTION_TABLE_iiii[$25 & 15]($f,0,0)|0);
    $26 = HEAP32[$19>>2]|0;
    $27 = ($26|0)==(0|0);
    $$ = $27 ? -1 : $22;
    HEAP32[$16>>2] = $17;
    HEAP32[$12>>2] = 0;
    HEAP32[$21>>2] = 0;
    HEAP32[$18>>2] = 0;
    HEAP32[$19>>2] = 0;
    $ret$1 = $$;
   }
  } else {
   $15 = (_printf_core($f,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $ret$1 = $15;
  }
  $28 = HEAP32[$f>>2]|0;
  $29 = $28 & 32;
  $30 = ($29|0)==(0);
  $ret$1$ = $30 ? $ret$1 : -1;
  $31 = $28 | $7;
  HEAP32[$f>>2] = $31;
  $32 = ($33|0)==(0);
  if (!($32)) {
   ___unlockfile($f);
  }
  $$0 = $ret$1$;
 }
 STACKTOP = sp;return ($$0|0);
}
function _printf_core($f,$fmt,$ap,$nl_arg,$nl_type) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 $nl_arg = $nl_arg|0;
 $nl_type = $nl_type|0;
 var $$ = 0, $$$i = 0, $$0 = 0, $$0$i = 0, $$0$lcssa$i = 0, $$012$i = 0, $$013$i = 0, $$03$i33 = 0, $$07$i = 0.0, $$1$i = 0.0, $$114$i = 0, $$2$i = 0.0, $$20$i = 0.0, $$210$$24$i = 0, $$210$$26$i = 0, $$210$i = 0, $$23$i = 0, $$25$i = 0, $$3$i = 0.0, $$311$i = 0;
 var $$33$i = 0, $$36$i = 0.0, $$4$i = 0.0, $$412$lcssa$i = 0, $$41278$i = 0, $$43 = 0, $$5$lcssa$i = 0, $$589$i = 0, $$a$3$i = 0, $$a$3191$i = 0, $$a$3192$i = 0, $$fl$4 = 0, $$l10n$0 = 0, $$lcssa = 0, $$lcssa162$i = 0, $$lcssa295 = 0, $$lcssa300 = 0, $$lcssa301 = 0, $$lcssa302 = 0, $$lcssa303 = 0;
 var $$lcssa304 = 0, $$lcssa306 = 0, $$lcssa316 = 0, $$lcssa319 = 0.0, $$lcssa321 = 0, $$neg55$i = 0, $$neg56$i = 0, $$p$$i = 0, $$p$5 = 0, $$p$i = 0, $$pn$i = 0, $$pr$i = 0, $$pr50$i = 0, $$pre = 0, $$pre$i = 0, $$pre$phi190$iZ2D = 0, $$pre170 = 0, $$pre171 = 0, $$pre185$i = 0, $$pre188$i = 0;
 var $$pre189$i = 0, $$z$3$i = 0, $$z$4$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0;
 var $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0;
 var $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0;
 var $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0;
 var $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0;
 var $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0;
 var $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0;
 var $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0;
 var $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0;
 var $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0;
 var $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0;
 var $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0;
 var $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0;
 var $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0;
 var $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0.0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0.0, $363 = 0, $364 = 0, $365 = 0;
 var $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0;
 var $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0.0, $391 = 0.0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0;
 var $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0.0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0.0, $411 = 0.0, $412 = 0.0, $413 = 0.0, $414 = 0.0, $415 = 0.0, $416 = 0, $417 = 0, $418 = 0, $419 = 0;
 var $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0;
 var $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0.0, $442 = 0.0, $443 = 0.0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0;
 var $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0;
 var $474 = 0.0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0.0, $483 = 0.0, $484 = 0.0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0;
 var $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0;
 var $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0;
 var $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0;
 var $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0;
 var $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0;
 var $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0.0, $594 = 0.0, $595 = 0, $596 = 0.0, $597 = 0, $598 = 0, $599 = 0, $6 = 0;
 var $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0;
 var $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0;
 var $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0;
 var $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0;
 var $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0;
 var $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0;
 var $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0;
 var $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0;
 var $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0;
 var $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0;
 var $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0;
 var $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0;
 var $98 = 0, $99 = 0, $a$0 = 0, $a$1 = 0, $a$1$lcssa$i = 0, $a$1149$i = 0, $a$2 = 0, $a$2$ph$i = 0, $a$3$lcssa$i = 0, $a$3136$i = 0, $a$5$lcssa$i = 0, $a$5111$i = 0, $a$6$i = 0, $a$8$i = 0, $a$9$ph$i = 0, $arg = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0;
 var $argpos$0 = 0, $big$i = 0, $buf = 0, $buf$i = 0, $carry$0142$i = 0, $carry3$0130$i = 0, $cnt$0 = 0, $cnt$1 = 0, $cnt$1$lcssa = 0, $d$0$i = 0, $d$0141$i = 0, $d$0143$i = 0, $d$1129$i = 0, $d$2$lcssa$i = 0, $d$2110$i = 0, $d$4$i = 0, $d$584$i = 0, $d$677$i = 0, $d$788$i = 0, $e$0125$i = 0;
 var $e$1$i = 0, $e$2106$i = 0, $e$4$i = 0, $e$5$ph$i = 0, $e2$i = 0, $ebuf0$i = 0, $estr$0$i = 0, $estr$1$lcssa$i = 0, $estr$195$i = 0, $estr$2$i = 0, $exitcond$i = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded4 = 0, $expanded6 = 0, $expanded7 = 0;
 var $expanded8 = 0, $fl$0100 = 0, $fl$053 = 0, $fl$1 = 0, $fl$1$ = 0, $fl$3 = 0, $fl$4 = 0, $fl$6 = 0, $i$0$lcssa = 0, $i$0$lcssa178 = 0, $i$0105 = 0, $i$0124$i = 0, $i$03$i = 0, $i$03$i25 = 0, $i$1$lcssa$i = 0, $i$1116 = 0, $i$1118$i = 0, $i$2105$i = 0, $i$291 = 0, $i$291$lcssa = 0;
 var $i$3101$i = 0, $i$389 = 0, $isdigit = 0, $isdigit$i = 0, $isdigit$i27 = 0, $isdigit10 = 0, $isdigit12 = 0, $isdigit2$i = 0, $isdigit2$i23 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp$i = 0, $isdigittmp$i26 = 0, $isdigittmp1$i = 0, $isdigittmp1$i22 = 0, $isdigittmp11 = 0, $isdigittmp4$i = 0, $isdigittmp4$i24 = 0, $isdigittmp9 = 0, $j$0$i = 0;
 var $j$0117$i = 0, $j$0119$i = 0, $j$1102$i = 0, $j$2$i = 0, $l$0 = 0, $l$0$i = 0, $l$1$i = 0, $l$1104 = 0, $l$2 = 0, $l10n$0 = 0, $l10n$0$lcssa = 0, $l10n$0$phi = 0, $l10n$1 = 0, $l10n$2 = 0, $l10n$3 = 0, $mb = 0, $notlhs$i = 0, $notrhs$i = 0, $or$cond = 0, $or$cond$i = 0;
 var $or$cond122 = 0, $or$cond15 = 0, $or$cond17 = 0, $or$cond18$i = 0, $or$cond20 = 0, $or$cond22$i = 0, $or$cond3$not$i = 0, $or$cond31$i = 0, $or$cond6$i = 0, $p$0 = 0, $p$0$ = 0, $p$1 = 0, $p$2 = 0, $p$2$ = 0, $p$3 = 0, $p$4176 = 0, $p$5 = 0, $pl$0 = 0, $pl$0$i = 0, $pl$1 = 0;
 var $pl$1$i = 0, $pl$2 = 0, $prefix$0 = 0, $prefix$0$$i = 0, $prefix$0$i = 0, $prefix$1 = 0, $prefix$2 = 0, $r$0$a$9$i = 0, $re$171$i = 0, $round$070$i = 0.0, $round6$1$i = 0.0, $s$0 = 0, $s$0$i = 0, $s$1 = 0, $s$1$i = 0, $s$1$i$lcssa = 0, $s$2$lcssa = 0, $s$292 = 0, $s$4 = 0, $s$6 = 0;
 var $s$7 = 0, $s$7$lcssa298 = 0, $s1$0$i = 0, $s7$081$i = 0, $s7$1$i = 0, $s8$0$lcssa$i = 0, $s8$072$i = 0, $s9$0$i = 0, $s9$185$i = 0, $s9$2$i = 0, $scevgep182$i = 0, $scevgep182183$i = 0, $small$0$i = 0.0, $small$1$i = 0.0, $st$0 = 0, $st$0$lcssa299 = 0, $storemerge = 0, $storemerge13 = 0, $storemerge851 = 0, $storemerge899 = 0;
 var $sum = 0, $t$0 = 0, $t$1 = 0, $w$$i = 0, $w$0 = 0, $w$1 = 0, $w$2 = 0, $w$32$i = 0, $wc = 0, $ws$0106 = 0, $ws$1117 = 0, $z$0$i = 0, $z$0$lcssa = 0, $z$093 = 0, $z$1 = 0, $z$1$lcssa$i = 0, $z$1148$i = 0, $z$2 = 0, $z$2$i = 0, $z$2$i$lcssa = 0;
 var $z$3$lcssa$i = 0, $z$3135$i = 0, $z$4$i = 0, $z$7$$i = 0, $z$7$i = 0, $z$7$i$lcssa = 0, $z$7$ph$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 624|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $big$i = sp + 24|0;
 $e2$i = sp + 16|0;
 $buf$i = sp + 588|0;
 $ebuf0$i = sp + 576|0;
 $arg = sp;
 $buf = sp + 536|0;
 $wc = sp + 8|0;
 $mb = sp + 528|0;
 $0 = ($f|0)!=(0|0);
 $1 = ((($buf)) + 40|0);
 $2 = $1;
 $3 = ((($buf)) + 39|0);
 $4 = ((($wc)) + 4|0);
 $5 = $buf$i;
 $6 = (0 - ($5))|0;
 $7 = ((($ebuf0$i)) + 12|0);
 $8 = ((($ebuf0$i)) + 11|0);
 $9 = $7;
 $10 = (($9) - ($5))|0;
 $11 = (-2 - ($5))|0;
 $12 = (($9) + 2)|0;
 $13 = ((($big$i)) + 288|0);
 $14 = ((($buf$i)) + 9|0);
 $15 = $14;
 $16 = ((($buf$i)) + 8|0);
 $cnt$0 = 0;$l$0 = 0;$l10n$0 = 0;$s$0 = $fmt;
 L1: while(1) {
  $17 = ($cnt$0|0)>(-1);
  do {
   if ($17) {
    $18 = (2147483647 - ($cnt$0))|0;
    $19 = ($l$0|0)>($18|0);
    if ($19) {
     $20 = (___errno_location()|0);
     HEAP32[$20>>2] = 75;
     $cnt$1 = -1;
     break;
    } else {
     $21 = (($l$0) + ($cnt$0))|0;
     $cnt$1 = $21;
     break;
    }
   } else {
    $cnt$1 = $cnt$0;
   }
  } while(0);
  $22 = HEAP8[$s$0>>0]|0;
  $23 = ($22<<24>>24)==(0);
  if ($23) {
   $cnt$1$lcssa = $cnt$1;$l10n$0$lcssa = $l10n$0;
   label = 244;
   break;
  } else {
   $24 = $22;$s$1 = $s$0;
  }
  L9: while(1) {
   switch ($24<<24>>24) {
   case 37:  {
    $s$292 = $s$1;$z$093 = $s$1;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $s$2$lcssa = $s$1;$z$0$lcssa = $s$1;
    break L9;
    break;
   }
   default: {
   }
   }
   $25 = ((($s$1)) + 1|0);
   $$pre = HEAP8[$25>>0]|0;
   $24 = $$pre;$s$1 = $25;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $26 = ((($s$292)) + 1|0);
     $27 = HEAP8[$26>>0]|0;
     $28 = ($27<<24>>24)==(37);
     if (!($28)) {
      $s$2$lcssa = $s$292;$z$0$lcssa = $z$093;
      break L12;
     }
     $29 = ((($z$093)) + 1|0);
     $30 = ((($s$292)) + 2|0);
     $31 = HEAP8[$30>>0]|0;
     $32 = ($31<<24>>24)==(37);
     if ($32) {
      $s$292 = $30;$z$093 = $29;
      label = 9;
     } else {
      $s$2$lcssa = $30;$z$0$lcssa = $29;
      break;
     }
    }
   }
  } while(0);
  $33 = $z$0$lcssa;
  $34 = $s$0;
  $35 = (($33) - ($34))|0;
  if ($0) {
   $36 = HEAP32[$f>>2]|0;
   $37 = $36 & 32;
   $38 = ($37|0)==(0);
   if ($38) {
    (___fwritex($s$0,$35,$f)|0);
   }
  }
  $39 = ($z$0$lcssa|0)==($s$0|0);
  if (!($39)) {
   $l10n$0$phi = $l10n$0;$cnt$0 = $cnt$1;$l$0 = $35;$s$0 = $s$2$lcssa;$l10n$0 = $l10n$0$phi;
   continue;
  }
  $40 = ((($s$2$lcssa)) + 1|0);
  $41 = HEAP8[$40>>0]|0;
  $42 = $41 << 24 >> 24;
  $isdigittmp = (($42) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $43 = ((($s$2$lcssa)) + 2|0);
   $44 = HEAP8[$43>>0]|0;
   $45 = ($44<<24>>24)==(36);
   $46 = ((($s$2$lcssa)) + 3|0);
   $$43 = $45 ? $46 : $40;
   $$l10n$0 = $45 ? 1 : $l10n$0;
   $isdigittmp$ = $45 ? $isdigittmp : -1;
   $$pre170 = HEAP8[$$43>>0]|0;
   $48 = $$pre170;$argpos$0 = $isdigittmp$;$l10n$1 = $$l10n$0;$storemerge = $$43;
  } else {
   $48 = $41;$argpos$0 = -1;$l10n$1 = $l10n$0;$storemerge = $40;
  }
  $47 = $48 << 24 >> 24;
  $49 = $47 & -32;
  $50 = ($49|0)==(32);
  L25: do {
   if ($50) {
    $52 = $47;$57 = $48;$fl$0100 = 0;$storemerge899 = $storemerge;
    while(1) {
     $51 = (($52) + -32)|0;
     $53 = 1 << $51;
     $54 = $53 & 75913;
     $55 = ($54|0)==(0);
     if ($55) {
      $67 = $57;$fl$053 = $fl$0100;$storemerge851 = $storemerge899;
      break L25;
     }
     $56 = $57 << 24 >> 24;
     $58 = (($56) + -32)|0;
     $59 = 1 << $58;
     $60 = $59 | $fl$0100;
     $61 = ((($storemerge899)) + 1|0);
     $62 = HEAP8[$61>>0]|0;
     $63 = $62 << 24 >> 24;
     $64 = $63 & -32;
     $65 = ($64|0)==(32);
     if ($65) {
      $52 = $63;$57 = $62;$fl$0100 = $60;$storemerge899 = $61;
     } else {
      $67 = $62;$fl$053 = $60;$storemerge851 = $61;
      break;
     }
    }
   } else {
    $67 = $48;$fl$053 = 0;$storemerge851 = $storemerge;
   }
  } while(0);
  $66 = ($67<<24>>24)==(42);
  do {
   if ($66) {
    $68 = ((($storemerge851)) + 1|0);
    $69 = HEAP8[$68>>0]|0;
    $70 = $69 << 24 >> 24;
    $isdigittmp11 = (($70) + -48)|0;
    $isdigit12 = ($isdigittmp11>>>0)<(10);
    if ($isdigit12) {
     $71 = ((($storemerge851)) + 2|0);
     $72 = HEAP8[$71>>0]|0;
     $73 = ($72<<24>>24)==(36);
     if ($73) {
      $74 = (($nl_type) + ($isdigittmp11<<2)|0);
      HEAP32[$74>>2] = 10;
      $75 = HEAP8[$68>>0]|0;
      $76 = $75 << 24 >> 24;
      $77 = (($76) + -48)|0;
      $78 = (($nl_arg) + ($77<<3)|0);
      $79 = $78;
      $80 = $79;
      $81 = HEAP32[$80>>2]|0;
      $82 = (($79) + 4)|0;
      $83 = $82;
      $84 = HEAP32[$83>>2]|0;
      $85 = ((($storemerge851)) + 3|0);
      $l10n$2 = 1;$storemerge13 = $85;$w$0 = $81;
     } else {
      label = 24;
     }
    } else {
     label = 24;
    }
    if ((label|0) == 24) {
     label = 0;
     $86 = ($l10n$1|0)==(0);
     if (!($86)) {
      $$0 = -1;
      break L1;
     }
     if (!($0)) {
      $fl$1 = $fl$053;$l10n$3 = 0;$s$4 = $68;$w$1 = 0;
      break;
     }
     $arglist_current = HEAP32[$ap>>2]|0;
     $87 = $arglist_current;
     $88 = ((0) + 4|0);
     $expanded4 = $88;
     $expanded = (($expanded4) - 1)|0;
     $89 = (($87) + ($expanded))|0;
     $90 = ((0) + 4|0);
     $expanded8 = $90;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $91 = $89 & $expanded6;
     $92 = $91;
     $93 = HEAP32[$92>>2]|0;
     $arglist_next = ((($92)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next;
     $l10n$2 = 0;$storemerge13 = $68;$w$0 = $93;
    }
    $94 = ($w$0|0)<(0);
    if ($94) {
     $95 = $fl$053 | 8192;
     $96 = (0 - ($w$0))|0;
     $fl$1 = $95;$l10n$3 = $l10n$2;$s$4 = $storemerge13;$w$1 = $96;
    } else {
     $fl$1 = $fl$053;$l10n$3 = $l10n$2;$s$4 = $storemerge13;$w$1 = $w$0;
    }
   } else {
    $97 = $67 << 24 >> 24;
    $isdigittmp1$i = (($97) + -48)|0;
    $isdigit2$i = ($isdigittmp1$i>>>0)<(10);
    if ($isdigit2$i) {
     $101 = $storemerge851;$i$03$i = 0;$isdigittmp4$i = $isdigittmp1$i;
     while(1) {
      $98 = ($i$03$i*10)|0;
      $99 = (($98) + ($isdigittmp4$i))|0;
      $100 = ((($101)) + 1|0);
      $102 = HEAP8[$100>>0]|0;
      $103 = $102 << 24 >> 24;
      $isdigittmp$i = (($103) + -48)|0;
      $isdigit$i = ($isdigittmp$i>>>0)<(10);
      if ($isdigit$i) {
       $101 = $100;$i$03$i = $99;$isdigittmp4$i = $isdigittmp$i;
      } else {
       $$lcssa = $99;$$lcssa295 = $100;
       break;
      }
     }
     $104 = ($$lcssa|0)<(0);
     if ($104) {
      $$0 = -1;
      break L1;
     } else {
      $fl$1 = $fl$053;$l10n$3 = $l10n$1;$s$4 = $$lcssa295;$w$1 = $$lcssa;
     }
    } else {
     $fl$1 = $fl$053;$l10n$3 = $l10n$1;$s$4 = $storemerge851;$w$1 = 0;
    }
   }
  } while(0);
  $105 = HEAP8[$s$4>>0]|0;
  $106 = ($105<<24>>24)==(46);
  L46: do {
   if ($106) {
    $107 = ((($s$4)) + 1|0);
    $108 = HEAP8[$107>>0]|0;
    $109 = ($108<<24>>24)==(42);
    if (!($109)) {
     $136 = $108 << 24 >> 24;
     $isdigittmp1$i22 = (($136) + -48)|0;
     $isdigit2$i23 = ($isdigittmp1$i22>>>0)<(10);
     if ($isdigit2$i23) {
      $140 = $107;$i$03$i25 = 0;$isdigittmp4$i24 = $isdigittmp1$i22;
     } else {
      $p$0 = 0;$s$6 = $107;
      break;
     }
     while(1) {
      $137 = ($i$03$i25*10)|0;
      $138 = (($137) + ($isdigittmp4$i24))|0;
      $139 = ((($140)) + 1|0);
      $141 = HEAP8[$139>>0]|0;
      $142 = $141 << 24 >> 24;
      $isdigittmp$i26 = (($142) + -48)|0;
      $isdigit$i27 = ($isdigittmp$i26>>>0)<(10);
      if ($isdigit$i27) {
       $140 = $139;$i$03$i25 = $138;$isdigittmp4$i24 = $isdigittmp$i26;
      } else {
       $p$0 = $138;$s$6 = $139;
       break L46;
      }
     }
    }
    $110 = ((($s$4)) + 2|0);
    $111 = HEAP8[$110>>0]|0;
    $112 = $111 << 24 >> 24;
    $isdigittmp9 = (($112) + -48)|0;
    $isdigit10 = ($isdigittmp9>>>0)<(10);
    if ($isdigit10) {
     $113 = ((($s$4)) + 3|0);
     $114 = HEAP8[$113>>0]|0;
     $115 = ($114<<24>>24)==(36);
     if ($115) {
      $116 = (($nl_type) + ($isdigittmp9<<2)|0);
      HEAP32[$116>>2] = 10;
      $117 = HEAP8[$110>>0]|0;
      $118 = $117 << 24 >> 24;
      $119 = (($118) + -48)|0;
      $120 = (($nl_arg) + ($119<<3)|0);
      $121 = $120;
      $122 = $121;
      $123 = HEAP32[$122>>2]|0;
      $124 = (($121) + 4)|0;
      $125 = $124;
      $126 = HEAP32[$125>>2]|0;
      $127 = ((($s$4)) + 4|0);
      $p$0 = $123;$s$6 = $127;
      break;
     }
    }
    $128 = ($l10n$3|0)==(0);
    if (!($128)) {
     $$0 = -1;
     break L1;
    }
    if ($0) {
     $arglist_current2 = HEAP32[$ap>>2]|0;
     $129 = $arglist_current2;
     $130 = ((0) + 4|0);
     $expanded11 = $130;
     $expanded10 = (($expanded11) - 1)|0;
     $131 = (($129) + ($expanded10))|0;
     $132 = ((0) + 4|0);
     $expanded15 = $132;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $133 = $131 & $expanded13;
     $134 = $133;
     $135 = HEAP32[$134>>2]|0;
     $arglist_next3 = ((($134)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next3;
     $p$0 = $135;$s$6 = $110;
    } else {
     $p$0 = 0;$s$6 = $110;
    }
   } else {
    $p$0 = -1;$s$6 = $s$4;
   }
  } while(0);
  $s$7 = $s$6;$st$0 = 0;
  while(1) {
   $143 = HEAP8[$s$7>>0]|0;
   $144 = $143 << 24 >> 24;
   $145 = (($144) + -65)|0;
   $146 = ($145>>>0)>(57);
   if ($146) {
    $$0 = -1;
    break L1;
   }
   $147 = ((($s$7)) + 1|0);
   $148 = ((2057 + (($st$0*58)|0)|0) + ($145)|0);
   $149 = HEAP8[$148>>0]|0;
   $150 = $149&255;
   $151 = (($150) + -1)|0;
   $152 = ($151>>>0)<(8);
   if ($152) {
    $s$7 = $147;$st$0 = $150;
   } else {
    $$lcssa300 = $147;$$lcssa301 = $149;$$lcssa302 = $150;$s$7$lcssa298 = $s$7;$st$0$lcssa299 = $st$0;
    break;
   }
  }
  $153 = ($$lcssa301<<24>>24)==(0);
  if ($153) {
   $$0 = -1;
   break;
  }
  $154 = ($$lcssa301<<24>>24)==(19);
  $155 = ($argpos$0|0)>(-1);
  do {
   if ($154) {
    if ($155) {
     $$0 = -1;
     break L1;
    } else {
     label = 52;
    }
   } else {
    if ($155) {
     $156 = (($nl_type) + ($argpos$0<<2)|0);
     HEAP32[$156>>2] = $$lcssa302;
     $157 = (($nl_arg) + ($argpos$0<<3)|0);
     $158 = $157;
     $159 = $158;
     $160 = HEAP32[$159>>2]|0;
     $161 = (($158) + 4)|0;
     $162 = $161;
     $163 = HEAP32[$162>>2]|0;
     $164 = $arg;
     $165 = $164;
     HEAP32[$165>>2] = $160;
     $166 = (($164) + 4)|0;
     $167 = $166;
     HEAP32[$167>>2] = $163;
     label = 52;
     break;
    }
    if (!($0)) {
     $$0 = 0;
     break L1;
    }
    _pop_arg($arg,$$lcssa302,$ap);
   }
  } while(0);
  if ((label|0) == 52) {
   label = 0;
   if (!($0)) {
    $cnt$0 = $cnt$1;$l$0 = $35;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
    continue;
   }
  }
  $168 = HEAP8[$s$7$lcssa298>>0]|0;
  $169 = $168 << 24 >> 24;
  $170 = ($st$0$lcssa299|0)!=(0);
  $171 = $169 & 15;
  $172 = ($171|0)==(3);
  $or$cond15 = $170 & $172;
  $173 = $169 & -33;
  $t$0 = $or$cond15 ? $173 : $169;
  $174 = $fl$1 & 8192;
  $175 = ($174|0)==(0);
  $176 = $fl$1 & -65537;
  $fl$1$ = $175 ? $fl$1 : $176;
  L75: do {
   switch ($t$0|0) {
   case 110:  {
    switch ($st$0$lcssa299|0) {
    case 0:  {
     $183 = HEAP32[$arg>>2]|0;
     HEAP32[$183>>2] = $cnt$1;
     $cnt$0 = $cnt$1;$l$0 = $35;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
     continue L1;
     break;
    }
    case 1:  {
     $184 = HEAP32[$arg>>2]|0;
     HEAP32[$184>>2] = $cnt$1;
     $cnt$0 = $cnt$1;$l$0 = $35;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
     continue L1;
     break;
    }
    case 2:  {
     $185 = ($cnt$1|0)<(0);
     $186 = $185 << 31 >> 31;
     $187 = HEAP32[$arg>>2]|0;
     $188 = $187;
     $189 = $188;
     HEAP32[$189>>2] = $cnt$1;
     $190 = (($188) + 4)|0;
     $191 = $190;
     HEAP32[$191>>2] = $186;
     $cnt$0 = $cnt$1;$l$0 = $35;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
     continue L1;
     break;
    }
    case 3:  {
     $192 = $cnt$1&65535;
     $193 = HEAP32[$arg>>2]|0;
     HEAP16[$193>>1] = $192;
     $cnt$0 = $cnt$1;$l$0 = $35;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
     continue L1;
     break;
    }
    case 4:  {
     $194 = $cnt$1&255;
     $195 = HEAP32[$arg>>2]|0;
     HEAP8[$195>>0] = $194;
     $cnt$0 = $cnt$1;$l$0 = $35;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
     continue L1;
     break;
    }
    case 6:  {
     $196 = HEAP32[$arg>>2]|0;
     HEAP32[$196>>2] = $cnt$1;
     $cnt$0 = $cnt$1;$l$0 = $35;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
     continue L1;
     break;
    }
    case 7:  {
     $197 = ($cnt$1|0)<(0);
     $198 = $197 << 31 >> 31;
     $199 = HEAP32[$arg>>2]|0;
     $200 = $199;
     $201 = $200;
     HEAP32[$201>>2] = $cnt$1;
     $202 = (($200) + 4)|0;
     $203 = $202;
     HEAP32[$203>>2] = $198;
     $cnt$0 = $cnt$1;$l$0 = $35;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
     continue L1;
     break;
    }
    default: {
     $cnt$0 = $cnt$1;$l$0 = $35;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $204 = ($p$0>>>0)>(8);
    $205 = $204 ? $p$0 : 8;
    $206 = $fl$1$ | 8;
    $fl$3 = $206;$p$1 = $205;$t$1 = 120;
    label = 64;
    break;
   }
   case 88: case 120:  {
    $fl$3 = $fl$1$;$p$1 = $p$0;$t$1 = $t$0;
    label = 64;
    break;
   }
   case 111:  {
    $244 = $arg;
    $245 = $244;
    $246 = HEAP32[$245>>2]|0;
    $247 = (($244) + 4)|0;
    $248 = $247;
    $249 = HEAP32[$248>>2]|0;
    $250 = ($246|0)==(0);
    $251 = ($249|0)==(0);
    $252 = $250 & $251;
    if ($252) {
     $$0$lcssa$i = $1;
    } else {
     $$03$i33 = $1;$254 = $246;$258 = $249;
     while(1) {
      $253 = $254 & 7;
      $255 = $253 | 48;
      $256 = $255&255;
      $257 = ((($$03$i33)) + -1|0);
      HEAP8[$257>>0] = $256;
      $259 = (_bitshift64Lshr(($254|0),($258|0),3)|0);
      $260 = tempRet0;
      $261 = ($259|0)==(0);
      $262 = ($260|0)==(0);
      $263 = $261 & $262;
      if ($263) {
       $$0$lcssa$i = $257;
       break;
      } else {
       $$03$i33 = $257;$254 = $259;$258 = $260;
      }
     }
    }
    $264 = $fl$1$ & 8;
    $265 = ($264|0)==(0);
    if ($265) {
     $a$0 = $$0$lcssa$i;$fl$4 = $fl$1$;$p$2 = $p$0;$pl$1 = 0;$prefix$1 = 2537;
     label = 77;
    } else {
     $266 = $$0$lcssa$i;
     $267 = (($2) - ($266))|0;
     $268 = ($p$0|0)>($267|0);
     $269 = (($267) + 1)|0;
     $p$0$ = $268 ? $p$0 : $269;
     $a$0 = $$0$lcssa$i;$fl$4 = $fl$1$;$p$2 = $p$0$;$pl$1 = 0;$prefix$1 = 2537;
     label = 77;
    }
    break;
   }
   case 105: case 100:  {
    $270 = $arg;
    $271 = $270;
    $272 = HEAP32[$271>>2]|0;
    $273 = (($270) + 4)|0;
    $274 = $273;
    $275 = HEAP32[$274>>2]|0;
    $276 = ($275|0)<(0);
    if ($276) {
     $277 = (_i64Subtract(0,0,($272|0),($275|0))|0);
     $278 = tempRet0;
     $279 = $arg;
     $280 = $279;
     HEAP32[$280>>2] = $277;
     $281 = (($279) + 4)|0;
     $282 = $281;
     HEAP32[$282>>2] = $278;
     $287 = $277;$288 = $278;$pl$0 = 1;$prefix$0 = 2537;
     label = 76;
     break L75;
    }
    $283 = $fl$1$ & 2048;
    $284 = ($283|0)==(0);
    if ($284) {
     $285 = $fl$1$ & 1;
     $286 = ($285|0)==(0);
     $$ = $286 ? 2537 : (2539);
     $287 = $272;$288 = $275;$pl$0 = $285;$prefix$0 = $$;
     label = 76;
    } else {
     $287 = $272;$288 = $275;$pl$0 = 1;$prefix$0 = (2538);
     label = 76;
    }
    break;
   }
   case 117:  {
    $177 = $arg;
    $178 = $177;
    $179 = HEAP32[$178>>2]|0;
    $180 = (($177) + 4)|0;
    $181 = $180;
    $182 = HEAP32[$181>>2]|0;
    $287 = $179;$288 = $182;$pl$0 = 0;$prefix$0 = 2537;
    label = 76;
    break;
   }
   case 99:  {
    $308 = $arg;
    $309 = $308;
    $310 = HEAP32[$309>>2]|0;
    $311 = (($308) + 4)|0;
    $312 = $311;
    $313 = HEAP32[$312>>2]|0;
    $314 = $310&255;
    HEAP8[$3>>0] = $314;
    $a$2 = $3;$fl$6 = $176;$p$5 = 1;$pl$2 = 0;$prefix$2 = 2537;$z$2 = $1;
    break;
   }
   case 109:  {
    $315 = (___errno_location()|0);
    $316 = HEAP32[$315>>2]|0;
    $317 = (_strerror($316)|0);
    $a$1 = $317;
    label = 82;
    break;
   }
   case 115:  {
    $318 = HEAP32[$arg>>2]|0;
    $319 = ($318|0)!=(0|0);
    $320 = $319 ? $318 : 4439;
    $a$1 = $320;
    label = 82;
    break;
   }
   case 67:  {
    $327 = $arg;
    $328 = $327;
    $329 = HEAP32[$328>>2]|0;
    $330 = (($327) + 4)|0;
    $331 = $330;
    $332 = HEAP32[$331>>2]|0;
    HEAP32[$wc>>2] = $329;
    HEAP32[$4>>2] = 0;
    HEAP32[$arg>>2] = $wc;
    $798 = $wc;$p$4176 = -1;
    label = 86;
    break;
   }
   case 83:  {
    $$pre171 = HEAP32[$arg>>2]|0;
    $333 = ($p$0|0)==(0);
    if ($333) {
     _pad($f,32,$w$1,0,$fl$1$);
     $i$0$lcssa178 = 0;
     label = 97;
    } else {
     $798 = $$pre171;$p$4176 = $p$0;
     label = 86;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $358 = +HEAPF64[$arg>>3];
    HEAP32[$e2$i>>2] = 0;
    HEAPF64[tempDoublePtr>>3] = $358;$359 = HEAP32[tempDoublePtr>>2]|0;
    $360 = HEAP32[tempDoublePtr+4>>2]|0;
    $361 = ($360|0)<(0);
    if ($361) {
     $362 = -$358;
     $$07$i = $362;$pl$0$i = 1;$prefix$0$i = 4446;
    } else {
     $363 = $fl$1$ & 2048;
     $364 = ($363|0)==(0);
     if ($364) {
      $365 = $fl$1$ & 1;
      $366 = ($365|0)==(0);
      $$$i = $366 ? (4447) : (4452);
      $$07$i = $358;$pl$0$i = $365;$prefix$0$i = $$$i;
     } else {
      $$07$i = $358;$pl$0$i = 1;$prefix$0$i = (4449);
     }
    }
    HEAPF64[tempDoublePtr>>3] = $$07$i;$367 = HEAP32[tempDoublePtr>>2]|0;
    $368 = HEAP32[tempDoublePtr+4>>2]|0;
    $369 = $368 & 2146435072;
    $370 = ($369>>>0)<(2146435072);
    $371 = (0)<(0);
    $372 = ($369|0)==(2146435072);
    $373 = $372 & $371;
    $374 = $370 | $373;
    do {
     if ($374) {
      $390 = (+_frexpl($$07$i,$e2$i));
      $391 = $390 * 2.0;
      $392 = $391 != 0.0;
      if ($392) {
       $393 = HEAP32[$e2$i>>2]|0;
       $394 = (($393) + -1)|0;
       HEAP32[$e2$i>>2] = $394;
      }
      $395 = $t$0 | 32;
      $396 = ($395|0)==(97);
      if ($396) {
       $397 = $t$0 & 32;
       $398 = ($397|0)==(0);
       $399 = ((($prefix$0$i)) + 9|0);
       $prefix$0$$i = $398 ? $prefix$0$i : $399;
       $400 = $pl$0$i | 2;
       $401 = ($p$0>>>0)>(11);
       $402 = (12 - ($p$0))|0;
       $403 = ($402|0)==(0);
       $404 = $401 | $403;
       do {
        if ($404) {
         $$1$i = $391;
        } else {
         $re$171$i = $402;$round$070$i = 8.0;
         while(1) {
          $405 = (($re$171$i) + -1)|0;
          $406 = $round$070$i * 16.0;
          $407 = ($405|0)==(0);
          if ($407) {
           $$lcssa319 = $406;
           break;
          } else {
           $re$171$i = $405;$round$070$i = $406;
          }
         }
         $408 = HEAP8[$prefix$0$$i>>0]|0;
         $409 = ($408<<24>>24)==(45);
         if ($409) {
          $410 = -$391;
          $411 = $410 - $$lcssa319;
          $412 = $$lcssa319 + $411;
          $413 = -$412;
          $$1$i = $413;
          break;
         } else {
          $414 = $391 + $$lcssa319;
          $415 = $414 - $$lcssa319;
          $$1$i = $415;
          break;
         }
        }
       } while(0);
       $416 = HEAP32[$e2$i>>2]|0;
       $417 = ($416|0)<(0);
       $418 = (0 - ($416))|0;
       $419 = $417 ? $418 : $416;
       $420 = ($419|0)<(0);
       $421 = $420 << 31 >> 31;
       $422 = (_fmt_u($419,$421,$7)|0);
       $423 = ($422|0)==($7|0);
       if ($423) {
        HEAP8[$8>>0] = 48;
        $estr$0$i = $8;
       } else {
        $estr$0$i = $422;
       }
       $424 = $416 >> 31;
       $425 = $424 & 2;
       $426 = (($425) + 43)|0;
       $427 = $426&255;
       $428 = ((($estr$0$i)) + -1|0);
       HEAP8[$428>>0] = $427;
       $429 = (($t$0) + 15)|0;
       $430 = $429&255;
       $431 = ((($estr$0$i)) + -2|0);
       HEAP8[$431>>0] = $430;
       $notrhs$i = ($p$0|0)<(1);
       $432 = $fl$1$ & 8;
       $433 = ($432|0)==(0);
       $$2$i = $$1$i;$s$0$i = $buf$i;
       while(1) {
        $434 = (~~(($$2$i)));
        $435 = (2521 + ($434)|0);
        $436 = HEAP8[$435>>0]|0;
        $437 = $436&255;
        $438 = $437 | $397;
        $439 = $438&255;
        $440 = ((($s$0$i)) + 1|0);
        HEAP8[$s$0$i>>0] = $439;
        $441 = (+($434|0));
        $442 = $$2$i - $441;
        $443 = $442 * 16.0;
        $444 = $440;
        $445 = (($444) - ($5))|0;
        $446 = ($445|0)==(1);
        do {
         if ($446) {
          $notlhs$i = $443 == 0.0;
          $or$cond3$not$i = $notrhs$i & $notlhs$i;
          $or$cond$i = $433 & $or$cond3$not$i;
          if ($or$cond$i) {
           $s$1$i = $440;
           break;
          }
          $447 = ((($s$0$i)) + 2|0);
          HEAP8[$440>>0] = 46;
          $s$1$i = $447;
         } else {
          $s$1$i = $440;
         }
        } while(0);
        $448 = $443 != 0.0;
        if ($448) {
         $$2$i = $443;$s$0$i = $s$1$i;
        } else {
         $s$1$i$lcssa = $s$1$i;
         break;
        }
       }
       $449 = ($p$0|0)!=(0);
       $$pre188$i = $s$1$i$lcssa;
       $450 = (($11) + ($$pre188$i))|0;
       $451 = ($450|0)<($p$0|0);
       $or$cond122 = $449 & $451;
       $452 = $431;
       $453 = (($12) + ($p$0))|0;
       $454 = (($453) - ($452))|0;
       $455 = (($10) - ($452))|0;
       $456 = (($455) + ($$pre188$i))|0;
       $l$0$i = $or$cond122 ? $454 : $456;
       $457 = (($l$0$i) + ($400))|0;
       _pad($f,32,$w$1,$457,$fl$1$);
       $458 = HEAP32[$f>>2]|0;
       $459 = $458 & 32;
       $460 = ($459|0)==(0);
       if ($460) {
        (___fwritex($prefix$0$$i,$400,$f)|0);
       }
       $461 = $fl$1$ ^ 65536;
       _pad($f,48,$w$1,$457,$461);
       $462 = (($$pre188$i) - ($5))|0;
       $463 = HEAP32[$f>>2]|0;
       $464 = $463 & 32;
       $465 = ($464|0)==(0);
       if ($465) {
        (___fwritex($buf$i,$462,$f)|0);
       }
       $466 = (($9) - ($452))|0;
       $sum = (($462) + ($466))|0;
       $467 = (($l$0$i) - ($sum))|0;
       _pad($f,48,$467,0,0);
       $468 = HEAP32[$f>>2]|0;
       $469 = $468 & 32;
       $470 = ($469|0)==(0);
       if ($470) {
        (___fwritex($431,$466,$f)|0);
       }
       $471 = $fl$1$ ^ 8192;
       _pad($f,32,$w$1,$457,$471);
       $472 = ($457|0)<($w$1|0);
       $w$$i = $472 ? $w$1 : $457;
       $$0$i = $w$$i;
       break;
      }
      $473 = ($p$0|0)<(0);
      $$p$i = $473 ? 6 : $p$0;
      if ($392) {
       $474 = $391 * 268435456.0;
       $475 = HEAP32[$e2$i>>2]|0;
       $476 = (($475) + -28)|0;
       HEAP32[$e2$i>>2] = $476;
       $$3$i = $474;$478 = $476;
      } else {
       $$pre185$i = HEAP32[$e2$i>>2]|0;
       $$3$i = $391;$478 = $$pre185$i;
      }
      $477 = ($478|0)<(0);
      $$33$i = $477 ? $big$i : $13;
      $479 = $$33$i;
      $$4$i = $$3$i;$z$0$i = $$33$i;
      while(1) {
       $480 = (~~(($$4$i))>>>0);
       HEAP32[$z$0$i>>2] = $480;
       $481 = ((($z$0$i)) + 4|0);
       $482 = (+($480>>>0));
       $483 = $$4$i - $482;
       $484 = $483 * 1.0E+9;
       $485 = $484 != 0.0;
       if ($485) {
        $$4$i = $484;$z$0$i = $481;
       } else {
        $$lcssa303 = $481;
        break;
       }
      }
      $$pr$i = HEAP32[$e2$i>>2]|0;
      $486 = ($$pr$i|0)>(0);
      if ($486) {
       $488 = $$pr$i;$a$1149$i = $$33$i;$z$1148$i = $$lcssa303;
       while(1) {
        $487 = ($488|0)>(29);
        $489 = $487 ? 29 : $488;
        $d$0141$i = ((($z$1148$i)) + -4|0);
        $490 = ($d$0141$i>>>0)<($a$1149$i>>>0);
        do {
         if ($490) {
          $a$2$ph$i = $a$1149$i;
         } else {
          $carry$0142$i = 0;$d$0143$i = $d$0141$i;
          while(1) {
           $491 = HEAP32[$d$0143$i>>2]|0;
           $492 = (_bitshift64Shl(($491|0),0,($489|0))|0);
           $493 = tempRet0;
           $494 = (_i64Add(($492|0),($493|0),($carry$0142$i|0),0)|0);
           $495 = tempRet0;
           $496 = (___uremdi3(($494|0),($495|0),1000000000,0)|0);
           $497 = tempRet0;
           HEAP32[$d$0143$i>>2] = $496;
           $498 = (___udivdi3(($494|0),($495|0),1000000000,0)|0);
           $499 = tempRet0;
           $d$0$i = ((($d$0143$i)) + -4|0);
           $500 = ($d$0$i>>>0)<($a$1149$i>>>0);
           if ($500) {
            $$lcssa304 = $498;
            break;
           } else {
            $carry$0142$i = $498;$d$0143$i = $d$0$i;
           }
          }
          $501 = ($$lcssa304|0)==(0);
          if ($501) {
           $a$2$ph$i = $a$1149$i;
           break;
          }
          $502 = ((($a$1149$i)) + -4|0);
          HEAP32[$502>>2] = $$lcssa304;
          $a$2$ph$i = $502;
         }
        } while(0);
        $z$2$i = $z$1148$i;
        while(1) {
         $503 = ($z$2$i>>>0)>($a$2$ph$i>>>0);
         if (!($503)) {
          $z$2$i$lcssa = $z$2$i;
          break;
         }
         $504 = ((($z$2$i)) + -4|0);
         $505 = HEAP32[$504>>2]|0;
         $506 = ($505|0)==(0);
         if ($506) {
          $z$2$i = $504;
         } else {
          $z$2$i$lcssa = $z$2$i;
          break;
         }
        }
        $507 = HEAP32[$e2$i>>2]|0;
        $508 = (($507) - ($489))|0;
        HEAP32[$e2$i>>2] = $508;
        $509 = ($508|0)>(0);
        if ($509) {
         $488 = $508;$a$1149$i = $a$2$ph$i;$z$1148$i = $z$2$i$lcssa;
        } else {
         $$pr50$i = $508;$a$1$lcssa$i = $a$2$ph$i;$z$1$lcssa$i = $z$2$i$lcssa;
         break;
        }
       }
      } else {
       $$pr50$i = $$pr$i;$a$1$lcssa$i = $$33$i;$z$1$lcssa$i = $$lcssa303;
      }
      $510 = ($$pr50$i|0)<(0);
      if ($510) {
       $511 = (($$p$i) + 25)|0;
       $512 = (($511|0) / 9)&-1;
       $513 = (($512) + 1)|0;
       $514 = ($395|0)==(102);
       $516 = $$pr50$i;$a$3136$i = $a$1$lcssa$i;$z$3135$i = $z$1$lcssa$i;
       while(1) {
        $515 = (0 - ($516))|0;
        $517 = ($515|0)>(9);
        $518 = $517 ? 9 : $515;
        $519 = ($a$3136$i>>>0)<($z$3135$i>>>0);
        do {
         if ($519) {
          $523 = 1 << $518;
          $524 = (($523) + -1)|0;
          $525 = 1000000000 >>> $518;
          $carry3$0130$i = 0;$d$1129$i = $a$3136$i;
          while(1) {
           $526 = HEAP32[$d$1129$i>>2]|0;
           $527 = $526 & $524;
           $528 = $526 >>> $518;
           $529 = (($528) + ($carry3$0130$i))|0;
           HEAP32[$d$1129$i>>2] = $529;
           $530 = Math_imul($527, $525)|0;
           $531 = ((($d$1129$i)) + 4|0);
           $532 = ($531>>>0)<($z$3135$i>>>0);
           if ($532) {
            $carry3$0130$i = $530;$d$1129$i = $531;
           } else {
            $$lcssa306 = $530;
            break;
           }
          }
          $533 = HEAP32[$a$3136$i>>2]|0;
          $534 = ($533|0)==(0);
          $535 = ((($a$3136$i)) + 4|0);
          $$a$3$i = $534 ? $535 : $a$3136$i;
          $536 = ($$lcssa306|0)==(0);
          if ($536) {
           $$a$3192$i = $$a$3$i;$z$4$i = $z$3135$i;
           break;
          }
          $537 = ((($z$3135$i)) + 4|0);
          HEAP32[$z$3135$i>>2] = $$lcssa306;
          $$a$3192$i = $$a$3$i;$z$4$i = $537;
         } else {
          $520 = HEAP32[$a$3136$i>>2]|0;
          $521 = ($520|0)==(0);
          $522 = ((($a$3136$i)) + 4|0);
          $$a$3191$i = $521 ? $522 : $a$3136$i;
          $$a$3192$i = $$a$3191$i;$z$4$i = $z$3135$i;
         }
        } while(0);
        $538 = $514 ? $$33$i : $$a$3192$i;
        $539 = $z$4$i;
        $540 = $538;
        $541 = (($539) - ($540))|0;
        $542 = $541 >> 2;
        $543 = ($542|0)>($513|0);
        $544 = (($538) + ($513<<2)|0);
        $$z$4$i = $543 ? $544 : $z$4$i;
        $545 = HEAP32[$e2$i>>2]|0;
        $546 = (($545) + ($518))|0;
        HEAP32[$e2$i>>2] = $546;
        $547 = ($546|0)<(0);
        if ($547) {
         $516 = $546;$a$3136$i = $$a$3192$i;$z$3135$i = $$z$4$i;
        } else {
         $a$3$lcssa$i = $$a$3192$i;$z$3$lcssa$i = $$z$4$i;
         break;
        }
       }
      } else {
       $a$3$lcssa$i = $a$1$lcssa$i;$z$3$lcssa$i = $z$1$lcssa$i;
      }
      $548 = ($a$3$lcssa$i>>>0)<($z$3$lcssa$i>>>0);
      do {
       if ($548) {
        $549 = $a$3$lcssa$i;
        $550 = (($479) - ($549))|0;
        $551 = $550 >> 2;
        $552 = ($551*9)|0;
        $553 = HEAP32[$a$3$lcssa$i>>2]|0;
        $554 = ($553>>>0)<(10);
        if ($554) {
         $e$1$i = $552;
         break;
        } else {
         $e$0125$i = $552;$i$0124$i = 10;
        }
        while(1) {
         $555 = ($i$0124$i*10)|0;
         $556 = (($e$0125$i) + 1)|0;
         $557 = ($553>>>0)<($555>>>0);
         if ($557) {
          $e$1$i = $556;
          break;
         } else {
          $e$0125$i = $556;$i$0124$i = $555;
         }
        }
       } else {
        $e$1$i = 0;
       }
      } while(0);
      $558 = ($395|0)!=(102);
      $559 = $558 ? $e$1$i : 0;
      $560 = (($$p$i) - ($559))|0;
      $561 = ($395|0)==(103);
      $562 = ($$p$i|0)!=(0);
      $563 = $562 & $561;
      $$neg55$i = $563 << 31 >> 31;
      $564 = (($560) + ($$neg55$i))|0;
      $565 = $z$3$lcssa$i;
      $566 = (($565) - ($479))|0;
      $567 = $566 >> 2;
      $568 = ($567*9)|0;
      $569 = (($568) + -9)|0;
      $570 = ($564|0)<($569|0);
      if ($570) {
       $571 = ((($$33$i)) + 4|0);
       $572 = (($564) + 9216)|0;
       $573 = (($572|0) / 9)&-1;
       $574 = (($573) + -1024)|0;
       $575 = (($571) + ($574<<2)|0);
       $576 = (($572|0) % 9)&-1;
       $j$0117$i = (($576) + 1)|0;
       $577 = ($j$0117$i|0)<(9);
       if ($577) {
        $i$1118$i = 10;$j$0119$i = $j$0117$i;
        while(1) {
         $578 = ($i$1118$i*10)|0;
         $j$0$i = (($j$0119$i) + 1)|0;
         $exitcond$i = ($j$0$i|0)==(9);
         if ($exitcond$i) {
          $i$1$lcssa$i = $578;
          break;
         } else {
          $i$1118$i = $578;$j$0119$i = $j$0$i;
         }
        }
       } else {
        $i$1$lcssa$i = 10;
       }
       $579 = HEAP32[$575>>2]|0;
       $580 = (($579>>>0) % ($i$1$lcssa$i>>>0))&-1;
       $581 = ($580|0)==(0);
       $582 = ((($575)) + 4|0);
       $583 = ($582|0)==($z$3$lcssa$i|0);
       $or$cond18$i = $583 & $581;
       do {
        if ($or$cond18$i) {
         $a$8$i = $a$3$lcssa$i;$d$4$i = $575;$e$4$i = $e$1$i;
        } else {
         $584 = (($579>>>0) / ($i$1$lcssa$i>>>0))&-1;
         $585 = $584 & 1;
         $586 = ($585|0)==(0);
         $$20$i = $586 ? 9007199254740992.0 : 9007199254740994.0;
         $587 = (($i$1$lcssa$i|0) / 2)&-1;
         $588 = ($580>>>0)<($587>>>0);
         if ($588) {
          $small$0$i = 0.5;
         } else {
          $589 = ($580|0)==($587|0);
          $or$cond22$i = $583 & $589;
          $$36$i = $or$cond22$i ? 1.0 : 1.5;
          $small$0$i = $$36$i;
         }
         $590 = ($pl$0$i|0)==(0);
         do {
          if ($590) {
           $round6$1$i = $$20$i;$small$1$i = $small$0$i;
          } else {
           $591 = HEAP8[$prefix$0$i>>0]|0;
           $592 = ($591<<24>>24)==(45);
           if (!($592)) {
            $round6$1$i = $$20$i;$small$1$i = $small$0$i;
            break;
           }
           $593 = -$$20$i;
           $594 = -$small$0$i;
           $round6$1$i = $593;$small$1$i = $594;
          }
         } while(0);
         $595 = (($579) - ($580))|0;
         HEAP32[$575>>2] = $595;
         $596 = $round6$1$i + $small$1$i;
         $597 = $596 != $round6$1$i;
         if (!($597)) {
          $a$8$i = $a$3$lcssa$i;$d$4$i = $575;$e$4$i = $e$1$i;
          break;
         }
         $598 = (($595) + ($i$1$lcssa$i))|0;
         HEAP32[$575>>2] = $598;
         $599 = ($598>>>0)>(999999999);
         if ($599) {
          $a$5111$i = $a$3$lcssa$i;$d$2110$i = $575;
          while(1) {
           $600 = ((($d$2110$i)) + -4|0);
           HEAP32[$d$2110$i>>2] = 0;
           $601 = ($600>>>0)<($a$5111$i>>>0);
           if ($601) {
            $602 = ((($a$5111$i)) + -4|0);
            HEAP32[$602>>2] = 0;
            $a$6$i = $602;
           } else {
            $a$6$i = $a$5111$i;
           }
           $603 = HEAP32[$600>>2]|0;
           $604 = (($603) + 1)|0;
           HEAP32[$600>>2] = $604;
           $605 = ($604>>>0)>(999999999);
           if ($605) {
            $a$5111$i = $a$6$i;$d$2110$i = $600;
           } else {
            $a$5$lcssa$i = $a$6$i;$d$2$lcssa$i = $600;
            break;
           }
          }
         } else {
          $a$5$lcssa$i = $a$3$lcssa$i;$d$2$lcssa$i = $575;
         }
         $606 = $a$5$lcssa$i;
         $607 = (($479) - ($606))|0;
         $608 = $607 >> 2;
         $609 = ($608*9)|0;
         $610 = HEAP32[$a$5$lcssa$i>>2]|0;
         $611 = ($610>>>0)<(10);
         if ($611) {
          $a$8$i = $a$5$lcssa$i;$d$4$i = $d$2$lcssa$i;$e$4$i = $609;
          break;
         } else {
          $e$2106$i = $609;$i$2105$i = 10;
         }
         while(1) {
          $612 = ($i$2105$i*10)|0;
          $613 = (($e$2106$i) + 1)|0;
          $614 = ($610>>>0)<($612>>>0);
          if ($614) {
           $a$8$i = $a$5$lcssa$i;$d$4$i = $d$2$lcssa$i;$e$4$i = $613;
           break;
          } else {
           $e$2106$i = $613;$i$2105$i = $612;
          }
         }
        }
       } while(0);
       $615 = ((($d$4$i)) + 4|0);
       $616 = ($z$3$lcssa$i>>>0)>($615>>>0);
       $$z$3$i = $616 ? $615 : $z$3$lcssa$i;
       $a$9$ph$i = $a$8$i;$e$5$ph$i = $e$4$i;$z$7$ph$i = $$z$3$i;
      } else {
       $a$9$ph$i = $a$3$lcssa$i;$e$5$ph$i = $e$1$i;$z$7$ph$i = $z$3$lcssa$i;
      }
      $617 = (0 - ($e$5$ph$i))|0;
      $z$7$i = $z$7$ph$i;
      while(1) {
       $618 = ($z$7$i>>>0)>($a$9$ph$i>>>0);
       if (!($618)) {
        $$lcssa162$i = 0;$z$7$i$lcssa = $z$7$i;
        break;
       }
       $619 = ((($z$7$i)) + -4|0);
       $620 = HEAP32[$619>>2]|0;
       $621 = ($620|0)==(0);
       if ($621) {
        $z$7$i = $619;
       } else {
        $$lcssa162$i = 1;$z$7$i$lcssa = $z$7$i;
        break;
       }
      }
      do {
       if ($561) {
        $622 = $562&1;
        $623 = $622 ^ 1;
        $$p$$i = (($623) + ($$p$i))|0;
        $624 = ($$p$$i|0)>($e$5$ph$i|0);
        $625 = ($e$5$ph$i|0)>(-5);
        $or$cond6$i = $624 & $625;
        if ($or$cond6$i) {
         $626 = (($t$0) + -1)|0;
         $$neg56$i = (($$p$$i) + -1)|0;
         $627 = (($$neg56$i) - ($e$5$ph$i))|0;
         $$013$i = $626;$$210$i = $627;
        } else {
         $628 = (($t$0) + -2)|0;
         $629 = (($$p$$i) + -1)|0;
         $$013$i = $628;$$210$i = $629;
        }
        $630 = $fl$1$ & 8;
        $631 = ($630|0)==(0);
        if (!($631)) {
         $$114$i = $$013$i;$$311$i = $$210$i;$$pre$phi190$iZ2D = $630;
         break;
        }
        do {
         if ($$lcssa162$i) {
          $632 = ((($z$7$i$lcssa)) + -4|0);
          $633 = HEAP32[$632>>2]|0;
          $634 = ($633|0)==(0);
          if ($634) {
           $j$2$i = 9;
           break;
          }
          $635 = (($633>>>0) % 10)&-1;
          $636 = ($635|0)==(0);
          if ($636) {
           $i$3101$i = 10;$j$1102$i = 0;
          } else {
           $j$2$i = 0;
           break;
          }
          while(1) {
           $637 = ($i$3101$i*10)|0;
           $638 = (($j$1102$i) + 1)|0;
           $639 = (($633>>>0) % ($637>>>0))&-1;
           $640 = ($639|0)==(0);
           if ($640) {
            $i$3101$i = $637;$j$1102$i = $638;
           } else {
            $j$2$i = $638;
            break;
           }
          }
         } else {
          $j$2$i = 9;
         }
        } while(0);
        $641 = $$013$i | 32;
        $642 = ($641|0)==(102);
        $643 = $z$7$i$lcssa;
        $644 = (($643) - ($479))|0;
        $645 = $644 >> 2;
        $646 = ($645*9)|0;
        $647 = (($646) + -9)|0;
        if ($642) {
         $648 = (($647) - ($j$2$i))|0;
         $649 = ($648|0)<(0);
         $$23$i = $649 ? 0 : $648;
         $650 = ($$210$i|0)<($$23$i|0);
         $$210$$24$i = $650 ? $$210$i : $$23$i;
         $$114$i = $$013$i;$$311$i = $$210$$24$i;$$pre$phi190$iZ2D = 0;
         break;
        } else {
         $651 = (($647) + ($e$5$ph$i))|0;
         $652 = (($651) - ($j$2$i))|0;
         $653 = ($652|0)<(0);
         $$25$i = $653 ? 0 : $652;
         $654 = ($$210$i|0)<($$25$i|0);
         $$210$$26$i = $654 ? $$210$i : $$25$i;
         $$114$i = $$013$i;$$311$i = $$210$$26$i;$$pre$phi190$iZ2D = 0;
         break;
        }
       } else {
        $$pre189$i = $fl$1$ & 8;
        $$114$i = $t$0;$$311$i = $$p$i;$$pre$phi190$iZ2D = $$pre189$i;
       }
      } while(0);
      $655 = $$311$i | $$pre$phi190$iZ2D;
      $656 = ($655|0)!=(0);
      $657 = $656&1;
      $658 = $$114$i | 32;
      $659 = ($658|0)==(102);
      if ($659) {
       $660 = ($e$5$ph$i|0)>(0);
       $661 = $660 ? $e$5$ph$i : 0;
       $$pn$i = $661;$estr$2$i = 0;
      } else {
       $662 = ($e$5$ph$i|0)<(0);
       $663 = $662 ? $617 : $e$5$ph$i;
       $664 = ($663|0)<(0);
       $665 = $664 << 31 >> 31;
       $666 = (_fmt_u($663,$665,$7)|0);
       $667 = $666;
       $668 = (($9) - ($667))|0;
       $669 = ($668|0)<(2);
       if ($669) {
        $estr$195$i = $666;
        while(1) {
         $670 = ((($estr$195$i)) + -1|0);
         HEAP8[$670>>0] = 48;
         $671 = $670;
         $672 = (($9) - ($671))|0;
         $673 = ($672|0)<(2);
         if ($673) {
          $estr$195$i = $670;
         } else {
          $estr$1$lcssa$i = $670;
          break;
         }
        }
       } else {
        $estr$1$lcssa$i = $666;
       }
       $674 = $e$5$ph$i >> 31;
       $675 = $674 & 2;
       $676 = (($675) + 43)|0;
       $677 = $676&255;
       $678 = ((($estr$1$lcssa$i)) + -1|0);
       HEAP8[$678>>0] = $677;
       $679 = $$114$i&255;
       $680 = ((($estr$1$lcssa$i)) + -2|0);
       HEAP8[$680>>0] = $679;
       $681 = $680;
       $682 = (($9) - ($681))|0;
       $$pn$i = $682;$estr$2$i = $680;
      }
      $683 = (($pl$0$i) + 1)|0;
      $684 = (($683) + ($$311$i))|0;
      $l$1$i = (($684) + ($657))|0;
      $685 = (($l$1$i) + ($$pn$i))|0;
      _pad($f,32,$w$1,$685,$fl$1$);
      $686 = HEAP32[$f>>2]|0;
      $687 = $686 & 32;
      $688 = ($687|0)==(0);
      if ($688) {
       (___fwritex($prefix$0$i,$pl$0$i,$f)|0);
      }
      $689 = $fl$1$ ^ 65536;
      _pad($f,48,$w$1,$685,$689);
      do {
       if ($659) {
        $690 = ($a$9$ph$i>>>0)>($$33$i>>>0);
        $r$0$a$9$i = $690 ? $$33$i : $a$9$ph$i;
        $d$584$i = $r$0$a$9$i;
        while(1) {
         $691 = HEAP32[$d$584$i>>2]|0;
         $692 = (_fmt_u($691,0,$14)|0);
         $693 = ($d$584$i|0)==($r$0$a$9$i|0);
         do {
          if ($693) {
           $699 = ($692|0)==($14|0);
           if (!($699)) {
            $s7$1$i = $692;
            break;
           }
           HEAP8[$16>>0] = 48;
           $s7$1$i = $16;
          } else {
           $694 = ($692>>>0)>($buf$i>>>0);
           if (!($694)) {
            $s7$1$i = $692;
            break;
           }
           $695 = $692;
           $696 = (($695) - ($5))|0;
           _memset(($buf$i|0),48,($696|0))|0;
           $s7$081$i = $692;
           while(1) {
            $697 = ((($s7$081$i)) + -1|0);
            $698 = ($697>>>0)>($buf$i>>>0);
            if ($698) {
             $s7$081$i = $697;
            } else {
             $s7$1$i = $697;
             break;
            }
           }
          }
         } while(0);
         $700 = HEAP32[$f>>2]|0;
         $701 = $700 & 32;
         $702 = ($701|0)==(0);
         if ($702) {
          $703 = $s7$1$i;
          $704 = (($15) - ($703))|0;
          (___fwritex($s7$1$i,$704,$f)|0);
         }
         $705 = ((($d$584$i)) + 4|0);
         $706 = ($705>>>0)>($$33$i>>>0);
         if ($706) {
          $$lcssa316 = $705;
          break;
         } else {
          $d$584$i = $705;
         }
        }
        $707 = ($655|0)==(0);
        do {
         if (!($707)) {
          $708 = HEAP32[$f>>2]|0;
          $709 = $708 & 32;
          $710 = ($709|0)==(0);
          if (!($710)) {
           break;
          }
          (___fwritex(4481,1,$f)|0);
         }
        } while(0);
        $711 = ($$lcssa316>>>0)<($z$7$i$lcssa>>>0);
        $712 = ($$311$i|0)>(0);
        $713 = $712 & $711;
        if ($713) {
         $$41278$i = $$311$i;$d$677$i = $$lcssa316;
         while(1) {
          $714 = HEAP32[$d$677$i>>2]|0;
          $715 = (_fmt_u($714,0,$14)|0);
          $716 = ($715>>>0)>($buf$i>>>0);
          if ($716) {
           $717 = $715;
           $718 = (($717) - ($5))|0;
           _memset(($buf$i|0),48,($718|0))|0;
           $s8$072$i = $715;
           while(1) {
            $719 = ((($s8$072$i)) + -1|0);
            $720 = ($719>>>0)>($buf$i>>>0);
            if ($720) {
             $s8$072$i = $719;
            } else {
             $s8$0$lcssa$i = $719;
             break;
            }
           }
          } else {
           $s8$0$lcssa$i = $715;
          }
          $721 = HEAP32[$f>>2]|0;
          $722 = $721 & 32;
          $723 = ($722|0)==(0);
          if ($723) {
           $724 = ($$41278$i|0)>(9);
           $725 = $724 ? 9 : $$41278$i;
           (___fwritex($s8$0$lcssa$i,$725,$f)|0);
          }
          $726 = ((($d$677$i)) + 4|0);
          $727 = (($$41278$i) + -9)|0;
          $728 = ($726>>>0)<($z$7$i$lcssa>>>0);
          $729 = ($$41278$i|0)>(9);
          $730 = $729 & $728;
          if ($730) {
           $$41278$i = $727;$d$677$i = $726;
          } else {
           $$412$lcssa$i = $727;
           break;
          }
         }
        } else {
         $$412$lcssa$i = $$311$i;
        }
        $731 = (($$412$lcssa$i) + 9)|0;
        _pad($f,48,$731,9,0);
       } else {
        $732 = ((($a$9$ph$i)) + 4|0);
        $z$7$$i = $$lcssa162$i ? $z$7$i$lcssa : $732;
        $733 = ($$311$i|0)>(-1);
        if ($733) {
         $734 = ($$pre$phi190$iZ2D|0)==(0);
         $$589$i = $$311$i;$d$788$i = $a$9$ph$i;
         while(1) {
          $735 = HEAP32[$d$788$i>>2]|0;
          $736 = (_fmt_u($735,0,$14)|0);
          $737 = ($736|0)==($14|0);
          if ($737) {
           HEAP8[$16>>0] = 48;
           $s9$0$i = $16;
          } else {
           $s9$0$i = $736;
          }
          $738 = ($d$788$i|0)==($a$9$ph$i|0);
          do {
           if ($738) {
            $742 = ((($s9$0$i)) + 1|0);
            $743 = HEAP32[$f>>2]|0;
            $744 = $743 & 32;
            $745 = ($744|0)==(0);
            if ($745) {
             (___fwritex($s9$0$i,1,$f)|0);
            }
            $746 = ($$589$i|0)<(1);
            $or$cond31$i = $734 & $746;
            if ($or$cond31$i) {
             $s9$2$i = $742;
             break;
            }
            $747 = HEAP32[$f>>2]|0;
            $748 = $747 & 32;
            $749 = ($748|0)==(0);
            if (!($749)) {
             $s9$2$i = $742;
             break;
            }
            (___fwritex(4481,1,$f)|0);
            $s9$2$i = $742;
           } else {
            $739 = ($s9$0$i>>>0)>($buf$i>>>0);
            if (!($739)) {
             $s9$2$i = $s9$0$i;
             break;
            }
            $scevgep182$i = (($s9$0$i) + ($6)|0);
            $scevgep182183$i = $scevgep182$i;
            _memset(($buf$i|0),48,($scevgep182183$i|0))|0;
            $s9$185$i = $s9$0$i;
            while(1) {
             $740 = ((($s9$185$i)) + -1|0);
             $741 = ($740>>>0)>($buf$i>>>0);
             if ($741) {
              $s9$185$i = $740;
             } else {
              $s9$2$i = $740;
              break;
             }
            }
           }
          } while(0);
          $750 = $s9$2$i;
          $751 = (($15) - ($750))|0;
          $752 = HEAP32[$f>>2]|0;
          $753 = $752 & 32;
          $754 = ($753|0)==(0);
          if ($754) {
           $755 = ($$589$i|0)>($751|0);
           $756 = $755 ? $751 : $$589$i;
           (___fwritex($s9$2$i,$756,$f)|0);
          }
          $757 = (($$589$i) - ($751))|0;
          $758 = ((($d$788$i)) + 4|0);
          $759 = ($758>>>0)<($z$7$$i>>>0);
          $760 = ($757|0)>(-1);
          $761 = $759 & $760;
          if ($761) {
           $$589$i = $757;$d$788$i = $758;
          } else {
           $$5$lcssa$i = $757;
           break;
          }
         }
        } else {
         $$5$lcssa$i = $$311$i;
        }
        $762 = (($$5$lcssa$i) + 18)|0;
        _pad($f,48,$762,18,0);
        $763 = HEAP32[$f>>2]|0;
        $764 = $763 & 32;
        $765 = ($764|0)==(0);
        if (!($765)) {
         break;
        }
        $766 = $estr$2$i;
        $767 = (($9) - ($766))|0;
        (___fwritex($estr$2$i,$767,$f)|0);
       }
      } while(0);
      $768 = $fl$1$ ^ 8192;
      _pad($f,32,$w$1,$685,$768);
      $769 = ($685|0)<($w$1|0);
      $w$32$i = $769 ? $w$1 : $685;
      $$0$i = $w$32$i;
     } else {
      $375 = $t$0 & 32;
      $376 = ($375|0)!=(0);
      $377 = $376 ? 4465 : 4469;
      $378 = ($$07$i != $$07$i) | (0.0 != 0.0);
      $379 = $376 ? 4473 : 4477;
      $pl$1$i = $378 ? 0 : $pl$0$i;
      $s1$0$i = $378 ? $379 : $377;
      $380 = (($pl$1$i) + 3)|0;
      _pad($f,32,$w$1,$380,$176);
      $381 = HEAP32[$f>>2]|0;
      $382 = $381 & 32;
      $383 = ($382|0)==(0);
      if ($383) {
       (___fwritex($prefix$0$i,$pl$1$i,$f)|0);
       $$pre$i = HEAP32[$f>>2]|0;
       $385 = $$pre$i;
      } else {
       $385 = $381;
      }
      $384 = $385 & 32;
      $386 = ($384|0)==(0);
      if ($386) {
       (___fwritex($s1$0$i,3,$f)|0);
      }
      $387 = $fl$1$ ^ 8192;
      _pad($f,32,$w$1,$380,$387);
      $388 = ($380|0)<($w$1|0);
      $389 = $388 ? $w$1 : $380;
      $$0$i = $389;
     }
    } while(0);
    $cnt$0 = $cnt$1;$l$0 = $$0$i;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
    continue L1;
    break;
   }
   default: {
    $a$2 = $s$0;$fl$6 = $fl$1$;$p$5 = $p$0;$pl$2 = 0;$prefix$2 = 2537;$z$2 = $1;
   }
   }
  } while(0);
  L311: do {
   if ((label|0) == 64) {
    label = 0;
    $207 = $arg;
    $208 = $207;
    $209 = HEAP32[$208>>2]|0;
    $210 = (($207) + 4)|0;
    $211 = $210;
    $212 = HEAP32[$211>>2]|0;
    $213 = $t$1 & 32;
    $214 = ($209|0)==(0);
    $215 = ($212|0)==(0);
    $216 = $214 & $215;
    if ($216) {
     $a$0 = $1;$fl$4 = $fl$3;$p$2 = $p$1;$pl$1 = 0;$prefix$1 = 2537;
     label = 77;
    } else {
     $$012$i = $1;$218 = $209;$225 = $212;
     while(1) {
      $217 = $218 & 15;
      $219 = (2521 + ($217)|0);
      $220 = HEAP8[$219>>0]|0;
      $221 = $220&255;
      $222 = $221 | $213;
      $223 = $222&255;
      $224 = ((($$012$i)) + -1|0);
      HEAP8[$224>>0] = $223;
      $226 = (_bitshift64Lshr(($218|0),($225|0),4)|0);
      $227 = tempRet0;
      $228 = ($226|0)==(0);
      $229 = ($227|0)==(0);
      $230 = $228 & $229;
      if ($230) {
       $$lcssa321 = $224;
       break;
      } else {
       $$012$i = $224;$218 = $226;$225 = $227;
      }
     }
     $231 = $arg;
     $232 = $231;
     $233 = HEAP32[$232>>2]|0;
     $234 = (($231) + 4)|0;
     $235 = $234;
     $236 = HEAP32[$235>>2]|0;
     $237 = ($233|0)==(0);
     $238 = ($236|0)==(0);
     $239 = $237 & $238;
     $240 = $fl$3 & 8;
     $241 = ($240|0)==(0);
     $or$cond17 = $241 | $239;
     if ($or$cond17) {
      $a$0 = $$lcssa321;$fl$4 = $fl$3;$p$2 = $p$1;$pl$1 = 0;$prefix$1 = 2537;
      label = 77;
     } else {
      $242 = $t$1 >> 4;
      $243 = (2537 + ($242)|0);
      $a$0 = $$lcssa321;$fl$4 = $fl$3;$p$2 = $p$1;$pl$1 = 2;$prefix$1 = $243;
      label = 77;
     }
    }
   }
   else if ((label|0) == 76) {
    label = 0;
    $289 = (_fmt_u($287,$288,$1)|0);
    $a$0 = $289;$fl$4 = $fl$1$;$p$2 = $p$0;$pl$1 = $pl$0;$prefix$1 = $prefix$0;
    label = 77;
   }
   else if ((label|0) == 82) {
    label = 0;
    $321 = (_memchr($a$1,0,$p$0)|0);
    $322 = ($321|0)==(0|0);
    $323 = $321;
    $324 = $a$1;
    $325 = (($323) - ($324))|0;
    $326 = (($a$1) + ($p$0)|0);
    $z$1 = $322 ? $326 : $321;
    $p$3 = $322 ? $p$0 : $325;
    $a$2 = $a$1;$fl$6 = $176;$p$5 = $p$3;$pl$2 = 0;$prefix$2 = 2537;$z$2 = $z$1;
   }
   else if ((label|0) == 86) {
    label = 0;
    $i$0105 = 0;$l$1104 = 0;$ws$0106 = $798;
    while(1) {
     $334 = HEAP32[$ws$0106>>2]|0;
     $335 = ($334|0)==(0);
     if ($335) {
      $i$0$lcssa = $i$0105;$l$2 = $l$1104;
      break;
     }
     $336 = (_wctomb($mb,$334)|0);
     $337 = ($336|0)<(0);
     $338 = (($p$4176) - ($i$0105))|0;
     $339 = ($336>>>0)>($338>>>0);
     $or$cond20 = $337 | $339;
     if ($or$cond20) {
      $i$0$lcssa = $i$0105;$l$2 = $336;
      break;
     }
     $340 = ((($ws$0106)) + 4|0);
     $341 = (($336) + ($i$0105))|0;
     $342 = ($p$4176>>>0)>($341>>>0);
     if ($342) {
      $i$0105 = $341;$l$1104 = $336;$ws$0106 = $340;
     } else {
      $i$0$lcssa = $341;$l$2 = $336;
      break;
     }
    }
    $343 = ($l$2|0)<(0);
    if ($343) {
     $$0 = -1;
     break L1;
    }
    _pad($f,32,$w$1,$i$0$lcssa,$fl$1$);
    $344 = ($i$0$lcssa|0)==(0);
    if ($344) {
     $i$0$lcssa178 = 0;
     label = 97;
    } else {
     $i$1116 = 0;$ws$1117 = $798;
     while(1) {
      $345 = HEAP32[$ws$1117>>2]|0;
      $346 = ($345|0)==(0);
      if ($346) {
       $i$0$lcssa178 = $i$0$lcssa;
       label = 97;
       break L311;
      }
      $347 = ((($ws$1117)) + 4|0);
      $348 = (_wctomb($mb,$345)|0);
      $349 = (($348) + ($i$1116))|0;
      $350 = ($349|0)>($i$0$lcssa|0);
      if ($350) {
       $i$0$lcssa178 = $i$0$lcssa;
       label = 97;
       break L311;
      }
      $351 = HEAP32[$f>>2]|0;
      $352 = $351 & 32;
      $353 = ($352|0)==(0);
      if ($353) {
       (___fwritex($mb,$348,$f)|0);
      }
      $354 = ($349>>>0)<($i$0$lcssa>>>0);
      if ($354) {
       $i$1116 = $349;$ws$1117 = $347;
      } else {
       $i$0$lcssa178 = $i$0$lcssa;
       label = 97;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 97) {
   label = 0;
   $355 = $fl$1$ ^ 8192;
   _pad($f,32,$w$1,$i$0$lcssa178,$355);
   $356 = ($w$1|0)>($i$0$lcssa178|0);
   $357 = $356 ? $w$1 : $i$0$lcssa178;
   $cnt$0 = $cnt$1;$l$0 = $357;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
   continue;
  }
  if ((label|0) == 77) {
   label = 0;
   $290 = ($p$2|0)>(-1);
   $291 = $fl$4 & -65537;
   $$fl$4 = $290 ? $291 : $fl$4;
   $292 = $arg;
   $293 = $292;
   $294 = HEAP32[$293>>2]|0;
   $295 = (($292) + 4)|0;
   $296 = $295;
   $297 = HEAP32[$296>>2]|0;
   $298 = ($294|0)!=(0);
   $299 = ($297|0)!=(0);
   $300 = $298 | $299;
   $301 = ($p$2|0)!=(0);
   $or$cond = $301 | $300;
   if ($or$cond) {
    $302 = $a$0;
    $303 = (($2) - ($302))|0;
    $304 = $300&1;
    $305 = $304 ^ 1;
    $306 = (($305) + ($303))|0;
    $307 = ($p$2|0)>($306|0);
    $p$2$ = $307 ? $p$2 : $306;
    $a$2 = $a$0;$fl$6 = $$fl$4;$p$5 = $p$2$;$pl$2 = $pl$1;$prefix$2 = $prefix$1;$z$2 = $1;
   } else {
    $a$2 = $1;$fl$6 = $$fl$4;$p$5 = 0;$pl$2 = $pl$1;$prefix$2 = $prefix$1;$z$2 = $1;
   }
  }
  $770 = $z$2;
  $771 = $a$2;
  $772 = (($770) - ($771))|0;
  $773 = ($p$5|0)<($772|0);
  $$p$5 = $773 ? $772 : $p$5;
  $774 = (($pl$2) + ($$p$5))|0;
  $775 = ($w$1|0)<($774|0);
  $w$2 = $775 ? $774 : $w$1;
  _pad($f,32,$w$2,$774,$fl$6);
  $776 = HEAP32[$f>>2]|0;
  $777 = $776 & 32;
  $778 = ($777|0)==(0);
  if ($778) {
   (___fwritex($prefix$2,$pl$2,$f)|0);
  }
  $779 = $fl$6 ^ 65536;
  _pad($f,48,$w$2,$774,$779);
  _pad($f,48,$$p$5,$772,0);
  $780 = HEAP32[$f>>2]|0;
  $781 = $780 & 32;
  $782 = ($781|0)==(0);
  if ($782) {
   (___fwritex($a$2,$772,$f)|0);
  }
  $783 = $fl$6 ^ 8192;
  _pad($f,32,$w$2,$774,$783);
  $cnt$0 = $cnt$1;$l$0 = $w$2;$l10n$0 = $l10n$3;$s$0 = $$lcssa300;
 }
 L345: do {
  if ((label|0) == 244) {
   $784 = ($f|0)==(0|0);
   if ($784) {
    $785 = ($l10n$0$lcssa|0)==(0);
    if ($785) {
     $$0 = 0;
    } else {
     $i$291 = 1;
     while(1) {
      $786 = (($nl_type) + ($i$291<<2)|0);
      $787 = HEAP32[$786>>2]|0;
      $788 = ($787|0)==(0);
      if ($788) {
       $i$291$lcssa = $i$291;
       break;
      }
      $790 = (($nl_arg) + ($i$291<<3)|0);
      _pop_arg($790,$787,$ap);
      $791 = (($i$291) + 1)|0;
      $792 = ($791|0)<(10);
      if ($792) {
       $i$291 = $791;
      } else {
       $$0 = 1;
       break L345;
      }
     }
     $789 = ($i$291$lcssa|0)<(10);
     if ($789) {
      $i$389 = $i$291$lcssa;
      while(1) {
       $795 = (($nl_type) + ($i$389<<2)|0);
       $796 = HEAP32[$795>>2]|0;
       $797 = ($796|0)==(0);
       $794 = (($i$389) + 1)|0;
       if (!($797)) {
        $$0 = -1;
        break L345;
       }
       $793 = ($794|0)<(10);
       if ($793) {
        $i$389 = $794;
       } else {
        $$0 = 1;
        break;
       }
      }
     } else {
      $$0 = 1;
     }
    }
   } else {
    $$0 = $cnt$1$lcssa;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function ___fwritex($s,$l,$f) {
 $s = $s|0;
 $l = $l|0;
 $f = $f|0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$pre = 0, $$pre6 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i$0 = 0, $i$0$lcssa12 = 0;
 var $i$1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($f)) + 16|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)==(0|0);
 if ($2) {
  $4 = (___towrite($f)|0);
  $5 = ($4|0)==(0);
  if ($5) {
   $$pre = HEAP32[$0>>2]|0;
   $9 = $$pre;
   label = 5;
  } else {
   $$0 = 0;
  }
 } else {
  $3 = $1;
  $9 = $3;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $6 = ((($f)) + 20|0);
   $7 = HEAP32[$6>>2]|0;
   $8 = (($9) - ($7))|0;
   $10 = ($8>>>0)<($l>>>0);
   $11 = $7;
   if ($10) {
    $12 = ((($f)) + 36|0);
    $13 = HEAP32[$12>>2]|0;
    $14 = (FUNCTION_TABLE_iiii[$13 & 15]($f,$s,$l)|0);
    $$0 = $14;
    break;
   }
   $15 = ((($f)) + 75|0);
   $16 = HEAP8[$15>>0]|0;
   $17 = ($16<<24>>24)>(-1);
   L10: do {
    if ($17) {
     $i$0 = $l;
     while(1) {
      $18 = ($i$0|0)==(0);
      if ($18) {
       $$01 = $l;$$02 = $s;$29 = $11;$i$1 = 0;
       break L10;
      }
      $19 = (($i$0) + -1)|0;
      $20 = (($s) + ($19)|0);
      $21 = HEAP8[$20>>0]|0;
      $22 = ($21<<24>>24)==(10);
      if ($22) {
       $i$0$lcssa12 = $i$0;
       break;
      } else {
       $i$0 = $19;
      }
     }
     $23 = ((($f)) + 36|0);
     $24 = HEAP32[$23>>2]|0;
     $25 = (FUNCTION_TABLE_iiii[$24 & 15]($f,$s,$i$0$lcssa12)|0);
     $26 = ($25>>>0)<($i$0$lcssa12>>>0);
     if ($26) {
      $$0 = $i$0$lcssa12;
      break L5;
     }
     $27 = (($s) + ($i$0$lcssa12)|0);
     $28 = (($l) - ($i$0$lcssa12))|0;
     $$pre6 = HEAP32[$6>>2]|0;
     $$01 = $28;$$02 = $27;$29 = $$pre6;$i$1 = $i$0$lcssa12;
    } else {
     $$01 = $l;$$02 = $s;$29 = $11;$i$1 = 0;
    }
   } while(0);
   _memcpy(($29|0),($$02|0),($$01|0))|0;
   $30 = HEAP32[$6>>2]|0;
   $31 = (($30) + ($$01)|0);
   HEAP32[$6>>2] = $31;
   $32 = (($i$1) + ($$01))|0;
   $$0 = $32;
  }
 } while(0);
 return ($$0|0);
}
function ___towrite($f) {
 $f = $f|0;
 var $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($f)) + 74|0);
 $1 = HEAP8[$0>>0]|0;
 $2 = $1 << 24 >> 24;
 $3 = (($2) + 255)|0;
 $4 = $3 | $2;
 $5 = $4&255;
 HEAP8[$0>>0] = $5;
 $6 = HEAP32[$f>>2]|0;
 $7 = $6 & 8;
 $8 = ($7|0)==(0);
 if ($8) {
  $10 = ((($f)) + 8|0);
  HEAP32[$10>>2] = 0;
  $11 = ((($f)) + 4|0);
  HEAP32[$11>>2] = 0;
  $12 = ((($f)) + 44|0);
  $13 = HEAP32[$12>>2]|0;
  $14 = ((($f)) + 28|0);
  HEAP32[$14>>2] = $13;
  $15 = ((($f)) + 20|0);
  HEAP32[$15>>2] = $13;
  $16 = $13;
  $17 = ((($f)) + 48|0);
  $18 = HEAP32[$17>>2]|0;
  $19 = (($16) + ($18)|0);
  $20 = ((($f)) + 16|0);
  HEAP32[$20>>2] = $19;
  $$0 = 0;
 } else {
  $9 = $6 | 32;
  HEAP32[$f>>2] = $9;
  $$0 = -1;
 }
 return ($$0|0);
}
function _pop_arg($arg,$type,$ap) {
 $arg = $arg|0;
 $type = $type|0;
 $ap = $ap|0;
 var $$mask = 0, $$mask1 = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0.0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0.0;
 var $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0;
 var $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0, $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $expanded = 0, $expanded28 = 0, $expanded30 = 0, $expanded31 = 0;
 var $expanded32 = 0, $expanded34 = 0, $expanded35 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded41 = 0, $expanded42 = 0, $expanded44 = 0, $expanded45 = 0, $expanded46 = 0, $expanded48 = 0, $expanded49 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded55 = 0, $expanded56 = 0, $expanded58 = 0, $expanded59 = 0;
 var $expanded60 = 0, $expanded62 = 0, $expanded63 = 0, $expanded65 = 0, $expanded66 = 0, $expanded67 = 0, $expanded69 = 0, $expanded70 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded76 = 0, $expanded77 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded83 = 0, $expanded84 = 0, $expanded86 = 0, $expanded87 = 0;
 var $expanded88 = 0, $expanded90 = 0, $expanded91 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($type>>>0)>(20);
 L1: do {
  if (!($0)) {
   do {
    switch ($type|0) {
    case 9:  {
     $arglist_current = HEAP32[$ap>>2]|0;
     $1 = $arglist_current;
     $2 = ((0) + 4|0);
     $expanded28 = $2;
     $expanded = (($expanded28) - 1)|0;
     $3 = (($1) + ($expanded))|0;
     $4 = ((0) + 4|0);
     $expanded32 = $4;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $5 = $3 & $expanded30;
     $6 = $5;
     $7 = HEAP32[$6>>2]|0;
     $arglist_next = ((($6)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next;
     HEAP32[$arg>>2] = $7;
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = HEAP32[$ap>>2]|0;
     $8 = $arglist_current2;
     $9 = ((0) + 4|0);
     $expanded35 = $9;
     $expanded34 = (($expanded35) - 1)|0;
     $10 = (($8) + ($expanded34))|0;
     $11 = ((0) + 4|0);
     $expanded39 = $11;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $12 = $10 & $expanded37;
     $13 = $12;
     $14 = HEAP32[$13>>2]|0;
     $arglist_next3 = ((($13)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next3;
     $15 = ($14|0)<(0);
     $16 = $15 << 31 >> 31;
     $17 = $arg;
     $18 = $17;
     HEAP32[$18>>2] = $14;
     $19 = (($17) + 4)|0;
     $20 = $19;
     HEAP32[$20>>2] = $16;
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = HEAP32[$ap>>2]|0;
     $21 = $arglist_current5;
     $22 = ((0) + 4|0);
     $expanded42 = $22;
     $expanded41 = (($expanded42) - 1)|0;
     $23 = (($21) + ($expanded41))|0;
     $24 = ((0) + 4|0);
     $expanded46 = $24;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $25 = $23 & $expanded44;
     $26 = $25;
     $27 = HEAP32[$26>>2]|0;
     $arglist_next6 = ((($26)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next6;
     $28 = $arg;
     $29 = $28;
     HEAP32[$29>>2] = $27;
     $30 = (($28) + 4)|0;
     $31 = $30;
     HEAP32[$31>>2] = 0;
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = HEAP32[$ap>>2]|0;
     $32 = $arglist_current8;
     $33 = ((0) + 8|0);
     $expanded49 = $33;
     $expanded48 = (($expanded49) - 1)|0;
     $34 = (($32) + ($expanded48))|0;
     $35 = ((0) + 8|0);
     $expanded53 = $35;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $36 = $34 & $expanded51;
     $37 = $36;
     $38 = $37;
     $39 = $38;
     $40 = HEAP32[$39>>2]|0;
     $41 = (($38) + 4)|0;
     $42 = $41;
     $43 = HEAP32[$42>>2]|0;
     $arglist_next9 = ((($37)) + 8|0);
     HEAP32[$ap>>2] = $arglist_next9;
     $44 = $arg;
     $45 = $44;
     HEAP32[$45>>2] = $40;
     $46 = (($44) + 4)|0;
     $47 = $46;
     HEAP32[$47>>2] = $43;
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = HEAP32[$ap>>2]|0;
     $48 = $arglist_current11;
     $49 = ((0) + 4|0);
     $expanded56 = $49;
     $expanded55 = (($expanded56) - 1)|0;
     $50 = (($48) + ($expanded55))|0;
     $51 = ((0) + 4|0);
     $expanded60 = $51;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $52 = $50 & $expanded58;
     $53 = $52;
     $54 = HEAP32[$53>>2]|0;
     $arglist_next12 = ((($53)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next12;
     $55 = $54&65535;
     $56 = $55 << 16 >> 16;
     $57 = ($56|0)<(0);
     $58 = $57 << 31 >> 31;
     $59 = $arg;
     $60 = $59;
     HEAP32[$60>>2] = $56;
     $61 = (($59) + 4)|0;
     $62 = $61;
     HEAP32[$62>>2] = $58;
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = HEAP32[$ap>>2]|0;
     $63 = $arglist_current14;
     $64 = ((0) + 4|0);
     $expanded63 = $64;
     $expanded62 = (($expanded63) - 1)|0;
     $65 = (($63) + ($expanded62))|0;
     $66 = ((0) + 4|0);
     $expanded67 = $66;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $67 = $65 & $expanded65;
     $68 = $67;
     $69 = HEAP32[$68>>2]|0;
     $arglist_next15 = ((($68)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next15;
     $$mask1 = $69 & 65535;
     $70 = $arg;
     $71 = $70;
     HEAP32[$71>>2] = $$mask1;
     $72 = (($70) + 4)|0;
     $73 = $72;
     HEAP32[$73>>2] = 0;
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = HEAP32[$ap>>2]|0;
     $74 = $arglist_current17;
     $75 = ((0) + 4|0);
     $expanded70 = $75;
     $expanded69 = (($expanded70) - 1)|0;
     $76 = (($74) + ($expanded69))|0;
     $77 = ((0) + 4|0);
     $expanded74 = $77;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $78 = $76 & $expanded72;
     $79 = $78;
     $80 = HEAP32[$79>>2]|0;
     $arglist_next18 = ((($79)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next18;
     $81 = $80&255;
     $82 = $81 << 24 >> 24;
     $83 = ($82|0)<(0);
     $84 = $83 << 31 >> 31;
     $85 = $arg;
     $86 = $85;
     HEAP32[$86>>2] = $82;
     $87 = (($85) + 4)|0;
     $88 = $87;
     HEAP32[$88>>2] = $84;
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = HEAP32[$ap>>2]|0;
     $89 = $arglist_current20;
     $90 = ((0) + 4|0);
     $expanded77 = $90;
     $expanded76 = (($expanded77) - 1)|0;
     $91 = (($89) + ($expanded76))|0;
     $92 = ((0) + 4|0);
     $expanded81 = $92;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $93 = $91 & $expanded79;
     $94 = $93;
     $95 = HEAP32[$94>>2]|0;
     $arglist_next21 = ((($94)) + 4|0);
     HEAP32[$ap>>2] = $arglist_next21;
     $$mask = $95 & 255;
     $96 = $arg;
     $97 = $96;
     HEAP32[$97>>2] = $$mask;
     $98 = (($96) + 4)|0;
     $99 = $98;
     HEAP32[$99>>2] = 0;
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = HEAP32[$ap>>2]|0;
     $100 = $arglist_current23;
     $101 = ((0) + 8|0);
     $expanded84 = $101;
     $expanded83 = (($expanded84) - 1)|0;
     $102 = (($100) + ($expanded83))|0;
     $103 = ((0) + 8|0);
     $expanded88 = $103;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $104 = $102 & $expanded86;
     $105 = $104;
     $106 = +HEAPF64[$105>>3];
     $arglist_next24 = ((($105)) + 8|0);
     HEAP32[$ap>>2] = $arglist_next24;
     HEAPF64[$arg>>3] = $106;
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = HEAP32[$ap>>2]|0;
     $107 = $arglist_current26;
     $108 = ((0) + 8|0);
     $expanded91 = $108;
     $expanded90 = (($expanded91) - 1)|0;
     $109 = (($107) + ($expanded90))|0;
     $110 = ((0) + 8|0);
     $expanded95 = $110;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $111 = $109 & $expanded93;
     $112 = $111;
     $113 = +HEAPF64[$112>>3];
     $arglist_next27 = ((($112)) + 8|0);
     HEAP32[$ap>>2] = $arglist_next27;
     HEAPF64[$arg>>3] = $113;
     break L1;
     break;
    }
    default: {
     break L1;
    }
    }
   } while(0);
  }
 } while(0);
 return;
}
function _fmt_u($0,$1,$s) {
 $0 = $0|0;
 $1 = $1|0;
 $s = $s|0;
 var $$0$lcssa = 0, $$01$lcssa$off0 = 0, $$05 = 0, $$1$lcssa = 0, $$12 = 0, $$lcssa19 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $y$03 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1>>>0)>(0);
 $3 = ($0>>>0)>(4294967295);
 $4 = ($1|0)==(0);
 $5 = $4 & $3;
 $6 = $2 | $5;
 if ($6) {
  $$05 = $s;$7 = $0;$8 = $1;
  while(1) {
   $9 = (___uremdi3(($7|0),($8|0),10,0)|0);
   $10 = tempRet0;
   $11 = $9 | 48;
   $12 = $11&255;
   $13 = ((($$05)) + -1|0);
   HEAP8[$13>>0] = $12;
   $14 = (___udivdi3(($7|0),($8|0),10,0)|0);
   $15 = tempRet0;
   $16 = ($8>>>0)>(9);
   $17 = ($7>>>0)>(4294967295);
   $18 = ($8|0)==(9);
   $19 = $18 & $17;
   $20 = $16 | $19;
   if ($20) {
    $$05 = $13;$7 = $14;$8 = $15;
   } else {
    $$lcssa19 = $13;$28 = $14;$29 = $15;
    break;
   }
  }
  $$0$lcssa = $$lcssa19;$$01$lcssa$off0 = $28;
 } else {
  $$0$lcssa = $s;$$01$lcssa$off0 = $0;
 }
 $21 = ($$01$lcssa$off0|0)==(0);
 if ($21) {
  $$1$lcssa = $$0$lcssa;
 } else {
  $$12 = $$0$lcssa;$y$03 = $$01$lcssa$off0;
  while(1) {
   $22 = (($y$03>>>0) % 10)&-1;
   $23 = $22 | 48;
   $24 = $23&255;
   $25 = ((($$12)) + -1|0);
   HEAP8[$25>>0] = $24;
   $26 = (($y$03>>>0) / 10)&-1;
   $27 = ($y$03>>>0)<(10);
   if ($27) {
    $$1$lcssa = $25;
    break;
   } else {
    $$12 = $25;$y$03 = $26;
   }
  }
 }
 return ($$1$lcssa|0);
}
function _strerror($e) {
 $e = $e|0;
 var $$lcssa = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i$03 = 0, $i$03$lcssa = 0, $i$12 = 0, $s$0$lcssa = 0, $s$01 = 0, $s$1 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $i$03 = 0;
 while(1) {
  $1 = (2547 + ($i$03)|0);
  $2 = HEAP8[$1>>0]|0;
  $3 = $2&255;
  $4 = ($3|0)==($e|0);
  if ($4) {
   $i$03$lcssa = $i$03;
   label = 2;
   break;
  }
  $5 = (($i$03) + 1)|0;
  $6 = ($5|0)==(87);
  if ($6) {
   $i$12 = 87;$s$01 = 2635;
   label = 5;
   break;
  } else {
   $i$03 = $5;
  }
 }
 if ((label|0) == 2) {
  $0 = ($i$03$lcssa|0)==(0);
  if ($0) {
   $s$0$lcssa = 2635;
  } else {
   $i$12 = $i$03$lcssa;$s$01 = 2635;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $s$1 = $s$01;
   while(1) {
    $7 = HEAP8[$s$1>>0]|0;
    $8 = ($7<<24>>24)==(0);
    $9 = ((($s$1)) + 1|0);
    if ($8) {
     $$lcssa = $9;
     break;
    } else {
     $s$1 = $9;
    }
   }
   $10 = (($i$12) + -1)|0;
   $11 = ($10|0)==(0);
   if ($11) {
    $s$0$lcssa = $$lcssa;
    break;
   } else {
    $i$12 = $10;$s$01 = $$lcssa;
    label = 5;
   }
  }
 }
 return ($s$0$lcssa|0);
}
function _pad($f,$c,$w,$l,$fl) {
 $f = $f|0;
 $c = $c|0;
 $w = $w|0;
 $l = $l|0;
 $fl = $fl|0;
 var $$0$lcssa6 = 0, $$02 = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $or$cond = 0, $pad = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $pad = sp;
 $0 = $fl & 73728;
 $1 = ($0|0)==(0);
 $2 = ($w|0)>($l|0);
 $or$cond = $2 & $1;
 do {
  if ($or$cond) {
   $3 = (($w) - ($l))|0;
   $4 = ($3>>>0)>(256);
   $5 = $4 ? 256 : $3;
   _memset(($pad|0),($c|0),($5|0))|0;
   $6 = ($3>>>0)>(255);
   $7 = HEAP32[$f>>2]|0;
   $8 = $7 & 32;
   $9 = ($8|0)==(0);
   if ($6) {
    $10 = (($w) - ($l))|0;
    $$02 = $3;$17 = $7;$18 = $9;
    while(1) {
     if ($18) {
      (___fwritex($pad,256,$f)|0);
      $$pre = HEAP32[$f>>2]|0;
      $14 = $$pre;
     } else {
      $14 = $17;
     }
     $11 = (($$02) + -256)|0;
     $12 = ($11>>>0)>(255);
     $13 = $14 & 32;
     $15 = ($13|0)==(0);
     if ($12) {
      $$02 = $11;$17 = $14;$18 = $15;
     } else {
      break;
     }
    }
    $16 = $10 & 255;
    if ($15) {
     $$0$lcssa6 = $16;
    } else {
     break;
    }
   } else {
    if ($9) {
     $$0$lcssa6 = $3;
    } else {
     break;
    }
   }
   (___fwritex($pad,$$0$lcssa6,$f)|0);
  }
 } while(0);
 STACKTOP = sp;return;
}
function _wctomb($s,$wc) {
 $s = $s|0;
 $wc = $wc|0;
 var $$0 = 0, $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($s|0)==(0|0);
 if ($0) {
  $$0 = 0;
 } else {
  $1 = (_wcrtomb($s,$wc,0)|0);
  $$0 = $1;
 }
 return ($$0|0);
}
function _wcrtomb($s,$wc,$st) {
 $s = $s|0;
 $wc = $wc|0;
 $st = $st|0;
 var $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($s|0)==(0|0);
 do {
  if ($0) {
   $$0 = 1;
  } else {
   $1 = ($wc>>>0)<(128);
   if ($1) {
    $2 = $wc&255;
    HEAP8[$s>>0] = $2;
    $$0 = 1;
    break;
   }
   $3 = ($wc>>>0)<(2048);
   if ($3) {
    $4 = $wc >>> 6;
    $5 = $4 | 192;
    $6 = $5&255;
    $7 = ((($s)) + 1|0);
    HEAP8[$s>>0] = $6;
    $8 = $wc & 63;
    $9 = $8 | 128;
    $10 = $9&255;
    HEAP8[$7>>0] = $10;
    $$0 = 2;
    break;
   }
   $11 = ($wc>>>0)<(55296);
   $12 = $wc & -8192;
   $13 = ($12|0)==(57344);
   $or$cond = $11 | $13;
   if ($or$cond) {
    $14 = $wc >>> 12;
    $15 = $14 | 224;
    $16 = $15&255;
    $17 = ((($s)) + 1|0);
    HEAP8[$s>>0] = $16;
    $18 = $wc >>> 6;
    $19 = $18 & 63;
    $20 = $19 | 128;
    $21 = $20&255;
    $22 = ((($s)) + 2|0);
    HEAP8[$17>>0] = $21;
    $23 = $wc & 63;
    $24 = $23 | 128;
    $25 = $24&255;
    HEAP8[$22>>0] = $25;
    $$0 = 3;
    break;
   }
   $26 = (($wc) + -65536)|0;
   $27 = ($26>>>0)<(1048576);
   if ($27) {
    $28 = $wc >>> 18;
    $29 = $28 | 240;
    $30 = $29&255;
    $31 = ((($s)) + 1|0);
    HEAP8[$s>>0] = $30;
    $32 = $wc >>> 12;
    $33 = $32 & 63;
    $34 = $33 | 128;
    $35 = $34&255;
    $36 = ((($s)) + 2|0);
    HEAP8[$31>>0] = $35;
    $37 = $wc >>> 6;
    $38 = $37 & 63;
    $39 = $38 | 128;
    $40 = $39&255;
    $41 = ((($s)) + 3|0);
    HEAP8[$36>>0] = $40;
    $42 = $wc & 63;
    $43 = $42 | 128;
    $44 = $43&255;
    HEAP8[$41>>0] = $44;
    $$0 = 4;
    break;
   } else {
    $45 = (___errno_location()|0);
    HEAP32[$45>>2] = 84;
    $$0 = -1;
    break;
   }
  }
 } while(0);
 return ($$0|0);
}
function _frexpl($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+_frexp($x,$e));
 return (+$0);
}
function _frexp($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $$0 = 0.0, $$01 = 0.0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0.0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0.0, $7 = 0.0, $8 = 0, $9 = 0, $storemerge = 0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $x;$0 = HEAP32[tempDoublePtr>>2]|0;
 $1 = HEAP32[tempDoublePtr+4>>2]|0;
 $2 = (_bitshift64Lshr(($0|0),($1|0),52)|0);
 $3 = tempRet0;
 $4 = $2 & 2047;
 switch ($4|0) {
 case 0:  {
  $5 = $x != 0.0;
  if ($5) {
   $6 = $x * 1.8446744073709552E+19;
   $7 = (+_frexp($6,$e));
   $8 = HEAP32[$e>>2]|0;
   $9 = (($8) + -64)|0;
   $$01 = $7;$storemerge = $9;
  } else {
   $$01 = $x;$storemerge = 0;
  }
  HEAP32[$e>>2] = $storemerge;
  $$0 = $$01;
  break;
 }
 case 2047:  {
  $$0 = $x;
  break;
 }
 default: {
  $10 = (($4) + -1022)|0;
  HEAP32[$e>>2] = $10;
  $11 = $1 & -2146435073;
  $12 = $11 | 1071644672;
  HEAP32[tempDoublePtr>>2] = $0;HEAP32[tempDoublePtr+4>>2] = $12;$13 = +HEAPF64[tempDoublePtr>>3];
  $$0 = $13;
 }
 }
 return (+$$0);
}
function ___lockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function _scalbn($x,$n) {
 $x = +$x;
 $n = $n|0;
 var $$ = 0, $$0 = 0, $$1 = 0, $0 = 0, $1 = 0.0, $10 = 0, $11 = 0.0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0.0, $18 = 0.0, $2 = 0, $3 = 0, $4 = 0.0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0.0, $9 = 0, $y$0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($n|0)>(1023);
 if ($0) {
  $1 = $x * 8.9884656743115795E+307;
  $2 = (($n) + -1023)|0;
  $3 = ($2|0)>(1023);
  if ($3) {
   $4 = $1 * 8.9884656743115795E+307;
   $5 = (($n) + -2046)|0;
   $6 = ($5|0)>(1023);
   $$ = $6 ? 1023 : $5;
   $$0 = $$;$y$0 = $4;
  } else {
   $$0 = $2;$y$0 = $1;
  }
 } else {
  $7 = ($n|0)<(-1022);
  if ($7) {
   $8 = $x * 2.2250738585072014E-308;
   $9 = (($n) + 1022)|0;
   $10 = ($9|0)<(-1022);
   if ($10) {
    $11 = $8 * 2.2250738585072014E-308;
    $12 = (($n) + 2044)|0;
    $13 = ($12|0)<(-1022);
    $$1 = $13 ? -1022 : $12;
    $$0 = $$1;$y$0 = $11;
   } else {
    $$0 = $9;$y$0 = $8;
   }
  } else {
   $$0 = $n;$y$0 = $x;
  }
 }
 $14 = (($$0) + 1023)|0;
 $15 = (_bitshift64Shl(($14|0),0,52)|0);
 $16 = tempRet0;
 HEAP32[tempDoublePtr>>2] = $15;HEAP32[tempDoublePtr+4>>2] = $16;$17 = +HEAPF64[tempDoublePtr>>3];
 $18 = $y$0 * $17;
 return (+$18);
}
function _strlen($s) {
 $s = $s|0;
 var $$0 = 0, $$01$lcssa = 0, $$014 = 0, $$1$lcssa = 0, $$lcssa20 = 0, $$pn = 0, $$pn15 = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $w$0 = 0, $w$0$lcssa = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $s;
 $1 = $0 & 3;
 $2 = ($1|0)==(0);
 L1: do {
  if ($2) {
   $$01$lcssa = $s;
   label = 4;
  } else {
   $$014 = $s;$21 = $0;
   while(1) {
    $3 = HEAP8[$$014>>0]|0;
    $4 = ($3<<24>>24)==(0);
    if ($4) {
     $$pn = $21;
     break L1;
    }
    $5 = ((($$014)) + 1|0);
    $6 = $5;
    $7 = $6 & 3;
    $8 = ($7|0)==(0);
    if ($8) {
     $$01$lcssa = $5;
     label = 4;
     break;
    } else {
     $$014 = $5;$21 = $6;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $w$0 = $$01$lcssa;
  while(1) {
   $9 = HEAP32[$w$0>>2]|0;
   $10 = (($9) + -16843009)|0;
   $11 = $9 & -2139062144;
   $12 = $11 ^ -2139062144;
   $13 = $12 & $10;
   $14 = ($13|0)==(0);
   $15 = ((($w$0)) + 4|0);
   if ($14) {
    $w$0 = $15;
   } else {
    $$lcssa20 = $9;$w$0$lcssa = $w$0;
    break;
   }
  }
  $16 = $$lcssa20&255;
  $17 = ($16<<24>>24)==(0);
  if ($17) {
   $$1$lcssa = $w$0$lcssa;
  } else {
   $$pn15 = $w$0$lcssa;
   while(1) {
    $18 = ((($$pn15)) + 1|0);
    $$pre = HEAP8[$18>>0]|0;
    $19 = ($$pre<<24>>24)==(0);
    if ($19) {
     $$1$lcssa = $18;
     break;
    } else {
     $$pn15 = $18;
    }
   }
  }
  $20 = $$1$lcssa;
  $$pn = $20;
 }
 $$0 = (($$pn) - ($0))|0;
 return ($$0|0);
}
function ___cos($x,$y) {
 $x = +$x;
 $y = +$y;
 var $0 = 0.0, $1 = 0.0, $10 = 0.0, $11 = 0.0, $12 = 0.0, $13 = 0.0, $14 = 0.0, $15 = 0.0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $19 = 0.0, $2 = 0.0, $20 = 0.0, $21 = 0.0, $22 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0.0;
 var $7 = 0.0, $8 = 0.0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $x * $x;
 $1 = $0 * $0;
 $2 = $0 * 2.4801587289476729E-5;
 $3 = $2 + -0.001388888888887411;
 $4 = $0 * $3;
 $5 = $4 + 0.041666666666666602;
 $6 = $0 * $5;
 $7 = $1 * $1;
 $8 = $0 * 1.1359647557788195E-11;
 $9 = 2.0875723212981748E-9 - $8;
 $10 = $0 * $9;
 $11 = $10 + -2.7557314351390663E-7;
 $12 = $7 * $11;
 $13 = $6 + $12;
 $14 = $0 * 0.5;
 $15 = 1.0 - $14;
 $16 = 1.0 - $15;
 $17 = $16 - $14;
 $18 = $0 * $13;
 $19 = $x * $y;
 $20 = $18 - $19;
 $21 = $17 + $20;
 $22 = $15 + $21;
 return (+$22);
}
function ___rem_pio2($x,$y) {
 $x = +$x;
 $y = $y|0;
 var $$0 = 0, $$phi$trans$insert = 0, $$pre = 0.0, $0 = 0, $1 = 0, $10 = 0.0, $100 = 0, $101 = 0, $102 = 0, $103 = 0.0, $104 = 0, $105 = 0.0, $106 = 0.0, $107 = 0.0, $108 = 0, $109 = 0.0, $11 = 0.0, $110 = 0, $111 = 0.0, $112 = 0.0;
 var $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0.0, $120 = 0, $121 = 0, $122 = 0, $123 = 0.0, $124 = 0, $125 = 0.0, $126 = 0.0, $127 = 0.0, $128 = 0, $129 = 0, $13 = 0.0, $130 = 0;
 var $14 = 0, $15 = 0.0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $19 = 0, $2 = 0, $20 = 0.0, $21 = 0.0, $22 = 0.0, $23 = 0.0, $24 = 0, $25 = 0.0, $26 = 0.0, $27 = 0.0, $28 = 0.0, $29 = 0, $3 = 0, $30 = 0, $31 = 0;
 var $32 = 0, $33 = 0, $34 = 0.0, $35 = 0.0, $36 = 0.0, $37 = 0.0, $38 = 0, $39 = 0.0, $4 = 0, $40 = 0.0, $41 = 0.0, $42 = 0.0, $43 = 0, $44 = 0, $45 = 0, $46 = 0.0, $47 = 0.0, $48 = 0.0, $49 = 0.0, $5 = 0;
 var $50 = 0, $51 = 0.0, $52 = 0.0, $53 = 0.0, $54 = 0.0, $55 = 0, $56 = 0, $57 = 0.0, $58 = 0.0, $59 = 0.0, $6 = 0, $60 = 0, $61 = 0.0, $62 = 0.0, $63 = 0.0, $64 = 0.0, $65 = 0, $66 = 0, $67 = 0, $68 = 0;
 var $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0.0, $74 = 0.0, $75 = 0.0, $76 = 0.0, $77 = 0.0, $78 = 0.0, $79 = 0.0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0;
 var $87 = 0.0, $88 = 0.0, $89 = 0.0, $9 = 0, $90 = 0.0, $91 = 0.0, $92 = 0.0, $93 = 0.0, $94 = 0.0, $95 = 0.0, $96 = 0.0, $97 = 0, $98 = 0, $99 = 0.0, $i$1$lcssa = 0, $r$0 = 0.0, $tx = 0, $ty = 0, $w$0 = 0.0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $tx = sp + 16|0;
 $ty = sp;
 HEAPF64[tempDoublePtr>>3] = $x;$0 = HEAP32[tempDoublePtr>>2]|0;
 $1 = HEAP32[tempDoublePtr+4>>2]|0;
 $2 = (_bitshift64Lshr(($0|0),($1|0),63)|0);
 $3 = tempRet0;
 $4 = $1 & 2147483647;
 $5 = ($4>>>0)<(1074752123);
 do {
  if ($5) {
   $6 = $1 & 1048575;
   $7 = ($6|0)==(598523);
   if ($7) {
    label = 21;
   } else {
    $8 = ($4>>>0)<(1073928573);
    $9 = ($2|0)!=(0);
    if ($8) {
     if ($9) {
      $15 = $x + 1.5707963267341256;
      $16 = $15 + 6.0771005065061922E-11;
      HEAPF64[$y>>3] = $16;
      $17 = $15 - $16;
      $18 = $17 + 6.0771005065061922E-11;
      $19 = ((($y)) + 8|0);
      HEAPF64[$19>>3] = $18;
      $$0 = -1;
      break;
     } else {
      $10 = $x + -1.5707963267341256;
      $11 = $10 + -6.0771005065061922E-11;
      HEAPF64[$y>>3] = $11;
      $12 = $10 - $11;
      $13 = $12 + -6.0771005065061922E-11;
      $14 = ((($y)) + 8|0);
      HEAPF64[$14>>3] = $13;
      $$0 = 1;
      break;
     }
    } else {
     if ($9) {
      $25 = $x + 3.1415926534682512;
      $26 = $25 + 1.2154201013012384E-10;
      HEAPF64[$y>>3] = $26;
      $27 = $25 - $26;
      $28 = $27 + 1.2154201013012384E-10;
      $29 = ((($y)) + 8|0);
      HEAPF64[$29>>3] = $28;
      $$0 = -2;
      break;
     } else {
      $20 = $x + -3.1415926534682512;
      $21 = $20 + -1.2154201013012384E-10;
      HEAPF64[$y>>3] = $21;
      $22 = $20 - $21;
      $23 = $22 + -1.2154201013012384E-10;
      $24 = ((($y)) + 8|0);
      HEAPF64[$24>>3] = $23;
      $$0 = 2;
      break;
     }
    }
   }
  } else {
   $30 = ($4>>>0)<(1075594812);
   if (!($30)) {
    $56 = ($4>>>0)<(1094263291);
    if ($56) {
     label = 21;
     break;
    }
    $98 = ($4>>>0)>(2146435071);
    if ($98) {
     $99 = $x - $x;
     $100 = ((($y)) + 8|0);
     HEAPF64[$100>>3] = $99;
     HEAPF64[$y>>3] = $99;
     $$0 = 0;
     break;
    }
    $101 = $1 & 1048575;
    $102 = $101 | 1096810496;
    HEAP32[tempDoublePtr>>2] = $0;HEAP32[tempDoublePtr+4>>2] = $102;$103 = +HEAPF64[tempDoublePtr>>3];
    $104 = (~~(($103)));
    $105 = (+($104|0));
    HEAPF64[$tx>>3] = $105;
    $106 = $103 - $105;
    $107 = $106 * 16777216.0;
    $108 = (~~(($107)));
    $109 = (+($108|0));
    $110 = ((($tx)) + 8|0);
    HEAPF64[$110>>3] = $109;
    $111 = $107 - $109;
    $112 = $111 * 16777216.0;
    $113 = ((($tx)) + 16|0);
    HEAPF64[$113>>3] = $112;
    $114 = $112 == 0.0;
    if ($114) {
     $115 = 1;
     while(1) {
      $$phi$trans$insert = (($tx) + ($115<<3)|0);
      $$pre = +HEAPF64[$$phi$trans$insert>>3];
      $116 = $$pre == 0.0;
      $117 = (($115) + -1)|0;
      if ($116) {
       $115 = $117;
      } else {
       $i$1$lcssa = $115;
       break;
      }
     }
    } else {
     $i$1$lcssa = 2;
    }
    $118 = $4 >>> 20;
    $119 = (($118) + -1046)|0;
    $120 = (($i$1$lcssa) + 1)|0;
    $121 = (___rem_pio2_large($tx,$ty,$119,$120,1)|0);
    $122 = ($2|0)==(0);
    $123 = +HEAPF64[$ty>>3];
    $124 = ((($ty)) + 8|0);
    $125 = +HEAPF64[$124>>3];
    if ($122) {
     HEAPF64[$y>>3] = $123;
     $130 = ((($y)) + 8|0);
     HEAPF64[$130>>3] = $125;
     $$0 = $121;
     break;
    } else {
     $126 = -$123;
     HEAPF64[$y>>3] = $126;
     $127 = -$125;
     $128 = ((($y)) + 8|0);
     HEAPF64[$128>>3] = $127;
     $129 = (0 - ($121))|0;
     $$0 = $129;
     break;
    }
   }
   $31 = ($4>>>0)<(1075183037);
   if ($31) {
    $32 = ($4|0)==(1074977148);
    if ($32) {
     label = 21;
     break;
    }
    $33 = ($2|0)==(0);
    if ($33) {
     $34 = $x + -4.7123889802023768;
     $35 = $34 + -1.8231301519518578E-10;
     HEAPF64[$y>>3] = $35;
     $36 = $34 - $35;
     $37 = $36 + -1.8231301519518578E-10;
     $38 = ((($y)) + 8|0);
     HEAPF64[$38>>3] = $37;
     $$0 = 3;
     break;
    } else {
     $39 = $x + 4.7123889802023768;
     $40 = $39 + 1.8231301519518578E-10;
     HEAPF64[$y>>3] = $40;
     $41 = $39 - $40;
     $42 = $41 + 1.8231301519518578E-10;
     $43 = ((($y)) + 8|0);
     HEAPF64[$43>>3] = $42;
     $$0 = -3;
     break;
    }
   } else {
    $44 = ($4|0)==(1075388923);
    if ($44) {
     label = 21;
     break;
    }
    $45 = ($2|0)==(0);
    if ($45) {
     $46 = $x + -6.2831853069365025;
     $47 = $46 + -2.4308402026024769E-10;
     HEAPF64[$y>>3] = $47;
     $48 = $46 - $47;
     $49 = $48 + -2.4308402026024769E-10;
     $50 = ((($y)) + 8|0);
     HEAPF64[$50>>3] = $49;
     $$0 = 4;
     break;
    } else {
     $51 = $x + 6.2831853069365025;
     $52 = $51 + 2.4308402026024769E-10;
     HEAPF64[$y>>3] = $52;
     $53 = $51 - $52;
     $54 = $53 + 2.4308402026024769E-10;
     $55 = ((($y)) + 8|0);
     HEAPF64[$55>>3] = $54;
     $$0 = -4;
     break;
    }
   }
  }
 } while(0);
 if ((label|0) == 21) {
  $57 = $x * 0.63661977236758138;
  $58 = $57 + 6755399441055744.0;
  $59 = $58 + -6755399441055744.0;
  $60 = (~~(($59)));
  $61 = $59 * 1.5707963267341256;
  $62 = $x - $61;
  $63 = $59 * 6.0771005065061922E-11;
  $64 = $62 - $63;
  HEAPF64[$y>>3] = $64;
  HEAPF64[tempDoublePtr>>3] = $64;$65 = HEAP32[tempDoublePtr>>2]|0;
  $66 = HEAP32[tempDoublePtr+4>>2]|0;
  $67 = (_bitshift64Lshr(($65|0),($66|0),52)|0);
  $68 = tempRet0;
  $69 = $67 & 2047;
  $70 = $4 >>> 20;
  $71 = (($70) - ($69))|0;
  $72 = ($71|0)>(16);
  if ($72) {
   $73 = $59 * 6.077100506303966E-11;
   $74 = $62 - $73;
   $75 = $59 * 2.0222662487959506E-21;
   $76 = $62 - $74;
   $77 = $76 - $73;
   $78 = $75 - $77;
   $79 = $74 - $78;
   HEAPF64[$y>>3] = $79;
   HEAPF64[tempDoublePtr>>3] = $79;$80 = HEAP32[tempDoublePtr>>2]|0;
   $81 = HEAP32[tempDoublePtr+4>>2]|0;
   $82 = (_bitshift64Lshr(($80|0),($81|0),52)|0);
   $83 = tempRet0;
   $84 = $82 & 2047;
   $85 = (($70) - ($84))|0;
   $86 = ($85|0)>(49);
   if ($86) {
    $87 = $59 * 2.0222662487111665E-21;
    $88 = $74 - $87;
    $89 = $59 * 8.4784276603688995E-32;
    $90 = $74 - $88;
    $91 = $90 - $87;
    $92 = $89 - $91;
    $93 = $88 - $92;
    HEAPF64[$y>>3] = $93;
    $95 = $93;$r$0 = $88;$w$0 = $92;
   } else {
    $95 = $79;$r$0 = $74;$w$0 = $78;
   }
  } else {
   $95 = $64;$r$0 = $62;$w$0 = $63;
  }
  $94 = $r$0 - $95;
  $96 = $94 - $w$0;
  $97 = ((($y)) + 8|0);
  HEAPF64[$97>>3] = $96;
  $$0 = $60;
 }
 STACKTOP = sp;return ($$0|0);
}
function ___rem_pio2_large($x,$y,$e0,$nx,$prec) {
 $x = $x|0;
 $y = $y|0;
 $e0 = $e0|0;
 $nx = $nx|0;
 $prec = $prec|0;
 var $$ = 0, $$lcssa180 = 0.0, $$lcssa182 = 0, $$phi$trans$insert = 0, $$phi$trans$insert133 = 0, $$pre = 0.0, $$pre134 = 0.0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0;
 var $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0.0, $116 = 0, $117 = 0, $118 = 0, $119 = 0.0, $12 = 0, $120 = 0, $121 = 0, $122 = 0.0, $123 = 0.0, $124 = 0.0, $125 = 0, $126 = 0, $127 = 0;
 var $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0.0, $133 = 0, $134 = 0.0, $135 = 0, $136 = 0.0, $137 = 0.0, $138 = 0.0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0;
 var $146 = 0, $147 = 0.0, $148 = 0, $149 = 0, $15 = 0, $150 = 0.0, $151 = 0.0, $152 = 0, $153 = 0.0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0.0, $159 = 0, $16 = 0, $160 = 0, $161 = 0.0, $162 = 0.0, $163 = 0.0;
 var $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0.0, $170 = 0, $171 = 0, $172 = 0.0, $173 = 0.0, $174 = 0, $175 = 0, $176 = 0, $177 = 0.0, $178 = 0.0, $179 = 0, $18 = 0, $180 = 0.0, $181 = 0.0;
 var $182 = 0, $183 = 0, $184 = 0, $185 = 0.0, $186 = 0.0, $187 = 0.0, $188 = 0.0, $189 = 0, $19 = 0.0, $190 = 0, $191 = 0.0, $192 = 0.0, $193 = 0, $194 = 0.0, $195 = 0.0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0;
 var $20 = 0, $200 = 0.0, $201 = 0, $202 = 0.0, $203 = 0.0, $204 = 0.0, $205 = 0.0, $206 = 0, $207 = 0, $208 = 0, $209 = 0.0, $21 = 0, $210 = 0, $211 = 0.0, $212 = 0.0, $213 = 0.0, $214 = 0.0, $215 = 0, $216 = 0, $217 = 0.0;
 var $218 = 0.0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0.0, $223 = 0, $224 = 0.0, $225 = 0, $226 = 0, $227 = 0.0, $228 = 0.0, $229 = 0, $23 = 0, $230 = 0.0, $231 = 0, $232 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0.0, $3 = 0, $30 = 0, $31 = 0, $32 = 0.0, $33 = 0.0, $34 = 0.0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0.0, $41 = 0, $42 = 0.0, $43 = 0, $44 = 0.0;
 var $45 = 0.0, $46 = 0.0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0.0, $52 = 0.0, $53 = 0, $54 = 0, $55 = 0.0, $56 = 0.0, $57 = 0.0, $58 = 0.0, $59 = 0.0, $6 = 0, $60 = 0, $61 = 0.0, $62 = 0.0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0.0, $95 = 0, $96 = 0.0, $97 = 0.0, $98 = 0, $99 = 0;
 var $carry$0$lcssa = 0, $carry$076 = 0, $carry$1 = 0, $exitcond = 0, $exitcond129 = 0, $exitcond130 = 0, $exitcond131 = 0, $exitcond132 = 0, $f = 0, $fq = 0, $fw$0$lcssa = 0.0, $fw$099 = 0.0, $fw$1$lcssa = 0.0, $fw$188 = 0.0, $fw$266 = 0.0, $fw$358 = 0.0, $fw$4$lcssa = 0.0, $fw$435 = 0.0, $fw$5$lcssa = 0.0, $fw$543 = 0.0;
 var $fw$6$lcssa = 0.0, $fw$637 = 0.0, $fw$7$lcssa = 0.0, $fw$748 = 0.0, $i$0105 = 0, $i$1036 = 0, $i$1103 = 0, $i$1154 = 0, $i$1252 = 0, $i$1347 = 0, $i$269 = 0, $i$377 = 0, $i$483 = 0, $i$483$in = 0, $i$595 = 0, $i$595$in = 0, $i$665 = 0, $i$762 = 0, $i$834 = 0, $i$942 = 0;
 var $ih$0 = 0, $ih$04 = 0, $ih$05 = 0, $ih$05$lcssa = 0, $ih$05$lcssa185 = 0, $ih$05186 = 0, $iq = 0, $j$0106 = 0, $j$198 = 0, $j$270 = 0, $j$382 = 0, $j$487 = 0, $jz$0 = 0, $jz$0$lcssa = 0, $jz$0$lcssa184 = 0, $jz$1 = 0, $jz$1$in = 0, $jz$2 = 0, $k$0 = 0, $k$0$lcssa = 0;
 var $k$157 = 0, $n$0 = 0, $n$03 = 0, $n$1 = 0, $n$1$lcssa = 0, $n$1$lcssa187 = 0, $n$1188 = 0, $or$cond = 0, $q = 0, $q0$0 = 0, $q0$0$in = 0, $q0$1 = 0, $z$0$lcssa = 0.0, $z$071 = 0.0, $z$1 = 0.0, $z$1$lcssa = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 560|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $iq = sp + 480|0;
 $f = sp + 320|0;
 $fq = sp + 160|0;
 $q = sp;
 $0 = (1552 + ($prec<<2)|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = (($nx) + -1)|0;
 $3 = (($e0) + -3)|0;
 $4 = (($3|0) / 24)&-1;
 $5 = ($4|0)<(0);
 $$ = $5 ? 0 : $4;
 $6 = ($$*24)|0;
 $7 = (($6) + 24)|0;
 $8 = (($e0) - ($7))|0;
 $9 = (($1) + ($2))|0;
 $10 = ($9|0)<(0);
 if (!($10)) {
  $11 = (($$) - ($2))|0;
  $12 = (($1) + ($nx))|0;
  $i$0105 = 0;$j$0106 = $11;
  while(1) {
   $14 = ($j$0106|0)<(0);
   if ($14) {
    $19 = 0.0;
   } else {
    $15 = (1568 + ($j$0106<<2)|0);
    $16 = HEAP32[$15>>2]|0;
    $17 = (+($16|0));
    $19 = $17;
   }
   $18 = (($f) + ($i$0105<<3)|0);
   HEAPF64[$18>>3] = $19;
   $20 = (($i$0105) + 1)|0;
   $21 = (($j$0106) + 1)|0;
   $exitcond132 = ($20|0)==($12|0);
   if ($exitcond132) {
    break;
   } else {
    $i$0105 = $20;$j$0106 = $21;
   }
  }
 }
 $13 = ($nx|0)>(0);
 $i$1103 = 0;
 while(1) {
  if ($13) {
   $22 = (($i$1103) + ($2))|0;
   $fw$099 = 0.0;$j$198 = 0;
   while(1) {
    $28 = (($x) + ($j$198<<3)|0);
    $29 = +HEAPF64[$28>>3];
    $30 = (($22) - ($j$198))|0;
    $31 = (($f) + ($30<<3)|0);
    $32 = +HEAPF64[$31>>3];
    $33 = $29 * $32;
    $34 = $fw$099 + $33;
    $35 = (($j$198) + 1)|0;
    $exitcond131 = ($35|0)==($nx|0);
    if ($exitcond131) {
     $fw$0$lcssa = $34;
     break;
    } else {
     $fw$099 = $34;$j$198 = $35;
    }
   }
  } else {
   $fw$0$lcssa = 0.0;
  }
  $36 = (($q) + ($i$1103<<3)|0);
  HEAPF64[$36>>3] = $fw$0$lcssa;
  $37 = (($i$1103) + 1)|0;
  $38 = ($i$1103|0)<($1|0);
  if ($38) {
   $i$1103 = $37;
  } else {
   break;
  }
 }
 $23 = ($8|0)>(0);
 $24 = (24 - ($8))|0;
 $25 = (23 - ($8))|0;
 $26 = ($nx|0)>(0);
 $27 = ($7|0)==($e0|0);
 $jz$0 = $1;
 L17: while(1) {
  $39 = (($q) + ($jz$0<<3)|0);
  $40 = +HEAPF64[$39>>3];
  $41 = ($jz$0|0)>(0);
  if ($41) {
   $i$269 = 0;$j$270 = $jz$0;$z$071 = $40;
   while(1) {
    $42 = $z$071 * 5.9604644775390625E-8;
    $43 = (~~(($42)));
    $44 = (+($43|0));
    $45 = $44 * 16777216.0;
    $46 = $z$071 - $45;
    $47 = (~~(($46)));
    $48 = (($iq) + ($i$269<<2)|0);
    HEAP32[$48>>2] = $47;
    $49 = (($j$270) + -1)|0;
    $50 = (($q) + ($49<<3)|0);
    $51 = +HEAPF64[$50>>3];
    $52 = $44 + $51;
    $53 = (($i$269) + 1)|0;
    $54 = ($j$270|0)>(1);
    if ($54) {
     $i$269 = $53;$j$270 = $49;$z$071 = $52;
    } else {
     $z$0$lcssa = $52;
     break;
    }
   }
  } else {
   $z$0$lcssa = $40;
  }
  $55 = (+_scalbn($z$0$lcssa,$8));
  $56 = $55 * 0.125;
  $57 = (+Math_floor((+$56)));
  $58 = $57 * 8.0;
  $59 = $55 - $58;
  $60 = (~~(($59)));
  $61 = (+($60|0));
  $62 = $59 - $61;
  do {
   if ($23) {
    $63 = (($jz$0) + -1)|0;
    $64 = (($iq) + ($63<<2)|0);
    $65 = HEAP32[$64>>2]|0;
    $66 = $65 >> $24;
    $67 = (($66) + ($60))|0;
    $68 = $66 << $24;
    $69 = (($65) - ($68))|0;
    HEAP32[$64>>2] = $69;
    $70 = $69 >> $25;
    $ih$0 = $70;$n$0 = $67;
    label = 19;
   } else {
    if ($27) {
     $71 = (($jz$0) + -1)|0;
     $72 = (($iq) + ($71<<2)|0);
     $73 = HEAP32[$72>>2]|0;
     $74 = $73 >> 23;
     $ih$0 = $74;$n$0 = $60;
     label = 19;
     break;
    } else {
     $75 = !($62 >= 0.5);
     if ($75) {
      $ih$05 = 0;$n$1 = $60;$z$1 = $62;
      break;
     } else {
      $ih$04 = 2;$n$03 = $60;
      label = 20;
      break;
     }
    }
   }
  } while(0);
  if ((label|0) == 19) {
   label = 0;
   $76 = ($ih$0|0)>(0);
   if ($76) {
    $ih$04 = $ih$0;$n$03 = $n$0;
    label = 20;
   } else {
    $ih$05 = $ih$0;$n$1 = $n$0;$z$1 = $62;
   }
  }
  if ((label|0) == 20) {
   label = 0;
   $77 = (($n$03) + 1)|0;
   if ($41) {
    $carry$076 = 0;$i$377 = 0;
    while(1) {
     $78 = (($iq) + ($i$377<<2)|0);
     $79 = HEAP32[$78>>2]|0;
     $80 = ($carry$076|0)==(0);
     if ($80) {
      $81 = ($79|0)==(0);
      if ($81) {
       $carry$1 = 0;
      } else {
       $82 = (16777216 - ($79))|0;
       HEAP32[$78>>2] = $82;
       $carry$1 = 1;
      }
     } else {
      $83 = (16777215 - ($79))|0;
      HEAP32[$78>>2] = $83;
      $carry$1 = $carry$076;
     }
     $84 = (($i$377) + 1)|0;
     $exitcond129 = ($84|0)==($jz$0|0);
     if ($exitcond129) {
      $carry$0$lcssa = $carry$1;
      break;
     } else {
      $carry$076 = $carry$1;$i$377 = $84;
     }
    }
   } else {
    $carry$0$lcssa = 0;
   }
   L42: do {
    if ($23) {
     switch ($8|0) {
     case 1:  {
      $85 = (($jz$0) + -1)|0;
      $86 = (($iq) + ($85<<2)|0);
      $87 = HEAP32[$86>>2]|0;
      $88 = $87 & 8388607;
      HEAP32[$86>>2] = $88;
      break L42;
      break;
     }
     case 2:  {
      $89 = (($jz$0) + -1)|0;
      $90 = (($iq) + ($89<<2)|0);
      $91 = HEAP32[$90>>2]|0;
      $92 = $91 & 4194303;
      HEAP32[$90>>2] = $92;
      break L42;
      break;
     }
     default: {
      break L42;
     }
     }
    }
   } while(0);
   $93 = ($ih$04|0)==(2);
   if ($93) {
    $94 = 1.0 - $62;
    $95 = ($carry$0$lcssa|0)==(0);
    if ($95) {
     $ih$05 = 2;$n$1 = $77;$z$1 = $94;
    } else {
     $96 = (+_scalbn(1.0,$8));
     $97 = $94 - $96;
     $ih$05 = 2;$n$1 = $77;$z$1 = $97;
    }
   } else {
    $ih$05 = $ih$04;$n$1 = $77;$z$1 = $62;
   }
  }
  $98 = $z$1 == 0.0;
  if (!($98)) {
   $ih$05$lcssa = $ih$05;$jz$0$lcssa = $jz$0;$n$1$lcssa = $n$1;$z$1$lcssa = $z$1;
   label = 44;
   break;
  }
  $99 = ($jz$0|0)>($1|0);
  if ($99) {
   $i$483$in = $jz$0;$j$382 = 0;
   while(1) {
    $i$483 = (($i$483$in) + -1)|0;
    $100 = (($iq) + ($i$483<<2)|0);
    $101 = HEAP32[$100>>2]|0;
    $102 = $101 | $j$382;
    $103 = ($i$483|0)>($1|0);
    if ($103) {
     $i$483$in = $i$483;$j$382 = $102;
    } else {
     $$lcssa182 = $102;
     break;
    }
   }
   $104 = ($$lcssa182|0)==(0);
   if ($104) {
    $k$0 = 1;
   } else {
    $ih$05$lcssa185 = $ih$05;$jz$0$lcssa184 = $jz$0;$n$1$lcssa187 = $n$1;
    label = 37;
    break;
   }
  } else {
   $k$0 = 1;
  }
  while(1) {
   $105 = (($1) - ($k$0))|0;
   $106 = (($iq) + ($105<<2)|0);
   $107 = HEAP32[$106>>2]|0;
   $108 = ($107|0)==(0);
   $109 = (($k$0) + 1)|0;
   if ($108) {
    $k$0 = $109;
   } else {
    $k$0$lcssa = $k$0;
    break;
   }
  }
  $110 = (($k$0$lcssa) + ($jz$0))|0;
  $111 = ($k$0$lcssa|0)>(0);
  if ($111) {
   $i$595$in = $jz$0;
  } else {
   $jz$0 = $110;
   continue;
  }
  while(1) {
   $i$595 = (($i$595$in) + 1)|0;
   $112 = (($i$595) + ($$))|0;
   $113 = (1568 + ($112<<2)|0);
   $114 = HEAP32[$113>>2]|0;
   $115 = (+($114|0));
   $116 = (($i$595$in) + ($nx))|0;
   $117 = (($f) + ($116<<3)|0);
   HEAPF64[$117>>3] = $115;
   if ($26) {
    $fw$188 = 0.0;$j$487 = 0;
    while(1) {
     $118 = (($x) + ($j$487<<3)|0);
     $119 = +HEAPF64[$118>>3];
     $120 = (($116) - ($j$487))|0;
     $121 = (($f) + ($120<<3)|0);
     $122 = +HEAPF64[$121>>3];
     $123 = $119 * $122;
     $124 = $fw$188 + $123;
     $125 = (($j$487) + 1)|0;
     $exitcond130 = ($125|0)==($nx|0);
     if ($exitcond130) {
      $fw$1$lcssa = $124;
      break;
     } else {
      $fw$188 = $124;$j$487 = $125;
     }
    }
   } else {
    $fw$1$lcssa = 0.0;
   }
   $126 = (($q) + ($i$595<<3)|0);
   HEAPF64[$126>>3] = $fw$1$lcssa;
   $127 = ($i$595|0)<($110|0);
   if ($127) {
    $i$595$in = $i$595;
   } else {
    $jz$0 = $110;
    continue L17;
   }
  }
 }
 do {
  if ((label|0) == 37) {
   $jz$1$in = $jz$0$lcssa184;$q0$0$in = $8;
   while(1) {
    $q0$0 = (($q0$0$in) + -24)|0;
    $jz$1 = (($jz$1$in) + -1)|0;
    $128 = (($iq) + ($jz$1<<2)|0);
    $129 = HEAP32[$128>>2]|0;
    $130 = ($129|0)==(0);
    if ($130) {
     $jz$1$in = $jz$1;$q0$0$in = $q0$0;
    } else {
     $ih$05186 = $ih$05$lcssa185;$jz$2 = $jz$1;$n$1188 = $n$1$lcssa187;$q0$1 = $q0$0;
     break;
    }
   }
  }
  else if ((label|0) == 44) {
   $131 = (0 - ($8))|0;
   $132 = (+_scalbn($z$1$lcssa,$131));
   $133 = !($132 >= 16777216.0);
   if ($133) {
    $144 = (~~(($132)));
    $145 = (($iq) + ($jz$0$lcssa<<2)|0);
    HEAP32[$145>>2] = $144;
    $ih$05186 = $ih$05$lcssa;$jz$2 = $jz$0$lcssa;$n$1188 = $n$1$lcssa;$q0$1 = $8;
    break;
   } else {
    $134 = $132 * 5.9604644775390625E-8;
    $135 = (~~(($134)));
    $136 = (+($135|0));
    $137 = $136 * 16777216.0;
    $138 = $132 - $137;
    $139 = (~~(($138)));
    $140 = (($iq) + ($jz$0$lcssa<<2)|0);
    HEAP32[$140>>2] = $139;
    $141 = (($jz$0$lcssa) + 1)|0;
    $142 = (($8) + 24)|0;
    $143 = (($iq) + ($141<<2)|0);
    HEAP32[$143>>2] = $135;
    $ih$05186 = $ih$05$lcssa;$jz$2 = $141;$n$1188 = $n$1$lcssa;$q0$1 = $142;
    break;
   }
  }
 } while(0);
 $146 = ($jz$2|0)>(-1);
 if ($146) {
  $147 = (+_scalbn(1.0,$q0$1));
  $fw$266 = $147;$i$665 = $jz$2;
  while(1) {
   $148 = (($iq) + ($i$665<<2)|0);
   $149 = HEAP32[$148>>2]|0;
   $150 = (+($149|0));
   $151 = $fw$266 * $150;
   $152 = (($q) + ($i$665<<3)|0);
   HEAPF64[$152>>3] = $151;
   $153 = $fw$266 * 5.9604644775390625E-8;
   $154 = (($i$665) + -1)|0;
   $155 = ($i$665|0)>(0);
   if ($155) {
    $fw$266 = $153;$i$665 = $154;
   } else {
    break;
   }
  }
  if ($146) {
   $i$762 = $jz$2;
   while(1) {
    $156 = (($jz$2) - ($i$762))|0;
    $fw$358 = 0.0;$k$157 = 0;
    while(1) {
     $157 = (1072 + ($k$157<<3)|0);
     $158 = +HEAPF64[$157>>3];
     $159 = (($k$157) + ($i$762))|0;
     $160 = (($q) + ($159<<3)|0);
     $161 = +HEAPF64[$160>>3];
     $162 = $158 * $161;
     $163 = $fw$358 + $162;
     $164 = (($k$157) + 1)|0;
     $165 = ($k$157|0)>=($1|0);
     $166 = ($k$157|0)>=($156|0);
     $or$cond = $165 | $166;
     if ($or$cond) {
      $$lcssa180 = $163;
      break;
     } else {
      $fw$358 = $163;$k$157 = $164;
     }
    }
    $167 = (($fq) + ($156<<3)|0);
    HEAPF64[$167>>3] = $$lcssa180;
    $168 = (($i$762) + -1)|0;
    $169 = ($i$762|0)>(0);
    if ($169) {
     $i$762 = $168;
    } else {
     break;
    }
   }
  }
 }
 L85: do {
  switch ($prec|0) {
  case 0:  {
   if ($146) {
    $fw$435 = 0.0;$i$834 = $jz$2;
    while(1) {
     $171 = (($fq) + ($i$834<<3)|0);
     $172 = +HEAPF64[$171>>3];
     $173 = $fw$435 + $172;
     $174 = (($i$834) + -1)|0;
     $175 = ($i$834|0)>(0);
     if ($175) {
      $fw$435 = $173;$i$834 = $174;
     } else {
      $fw$4$lcssa = $173;
      break;
     }
    }
   } else {
    $fw$4$lcssa = 0.0;
   }
   $176 = ($ih$05186|0)==(0);
   $177 = -$fw$4$lcssa;
   $178 = $176 ? $fw$4$lcssa : $177;
   HEAPF64[$y>>3] = $178;
   break;
  }
  case 2: case 1:  {
   if ($146) {
    $fw$543 = 0.0;$i$942 = $jz$2;
    while(1) {
     $179 = (($fq) + ($i$942<<3)|0);
     $180 = +HEAPF64[$179>>3];
     $181 = $fw$543 + $180;
     $182 = (($i$942) + -1)|0;
     $183 = ($i$942|0)>(0);
     if ($183) {
      $fw$543 = $181;$i$942 = $182;
     } else {
      $fw$5$lcssa = $181;
      break;
     }
    }
   } else {
    $fw$5$lcssa = 0.0;
   }
   $184 = ($ih$05186|0)==(0);
   $185 = -$fw$5$lcssa;
   $186 = $184 ? $fw$5$lcssa : $185;
   HEAPF64[$y>>3] = $186;
   $187 = +HEAPF64[$fq>>3];
   $188 = $187 - $fw$5$lcssa;
   $189 = ($jz$2|0)<(1);
   if ($189) {
    $fw$6$lcssa = $188;
   } else {
    $fw$637 = $188;$i$1036 = 1;
    while(1) {
     $190 = (($fq) + ($i$1036<<3)|0);
     $191 = +HEAPF64[$190>>3];
     $192 = $fw$637 + $191;
     $193 = (($i$1036) + 1)|0;
     $exitcond = ($i$1036|0)==($jz$2|0);
     if ($exitcond) {
      $fw$6$lcssa = $192;
      break;
     } else {
      $fw$637 = $192;$i$1036 = $193;
     }
    }
   }
   $194 = -$fw$6$lcssa;
   $195 = $184 ? $fw$6$lcssa : $194;
   $196 = ((($y)) + 8|0);
   HEAPF64[$196>>3] = $195;
   break;
  }
  case 3:  {
   $170 = ($jz$2|0)>(0);
   if ($170) {
    $$phi$trans$insert = (($fq) + ($jz$2<<3)|0);
    $$pre = +HEAPF64[$$phi$trans$insert>>3];
    $203 = $$pre;$i$1154 = $jz$2;
    while(1) {
     $198 = (($i$1154) + -1)|0;
     $199 = (($fq) + ($198<<3)|0);
     $200 = +HEAPF64[$199>>3];
     $201 = (($fq) + ($i$1154<<3)|0);
     $202 = $200 + $203;
     $204 = $200 - $202;
     $205 = $203 + $204;
     HEAPF64[$201>>3] = $205;
     HEAPF64[$199>>3] = $202;
     $206 = ($i$1154|0)>(1);
     if ($206) {
      $203 = $202;$i$1154 = $198;
     } else {
      break;
     }
    }
    $197 = ($jz$2|0)>(1);
    if ($197) {
     $$phi$trans$insert133 = (($fq) + ($jz$2<<3)|0);
     $$pre134 = +HEAPF64[$$phi$trans$insert133>>3];
     $212 = $$pre134;$i$1252 = $jz$2;
     while(1) {
      $207 = (($i$1252) + -1)|0;
      $208 = (($fq) + ($207<<3)|0);
      $209 = +HEAPF64[$208>>3];
      $210 = (($fq) + ($i$1252<<3)|0);
      $211 = $209 + $212;
      $213 = $209 - $211;
      $214 = $212 + $213;
      HEAPF64[$210>>3] = $214;
      HEAPF64[$208>>3] = $211;
      $215 = ($207|0)>(1);
      if ($215) {
       $212 = $211;$i$1252 = $207;
      } else {
       break;
      }
     }
     if ($197) {
      $fw$748 = 0.0;$i$1347 = $jz$2;
      while(1) {
       $216 = (($fq) + ($i$1347<<3)|0);
       $217 = +HEAPF64[$216>>3];
       $218 = $fw$748 + $217;
       $219 = (($i$1347) + -1)|0;
       $220 = ($219|0)>(1);
       if ($220) {
        $fw$748 = $218;$i$1347 = $219;
       } else {
        $fw$7$lcssa = $218;
        break;
       }
      }
     } else {
      $fw$7$lcssa = 0.0;
     }
    } else {
     $fw$7$lcssa = 0.0;
    }
   } else {
    $fw$7$lcssa = 0.0;
   }
   $221 = ($ih$05186|0)==(0);
   $222 = +HEAPF64[$fq>>3];
   $223 = ((($fq)) + 8|0);
   $224 = +HEAPF64[$223>>3];
   if ($221) {
    HEAPF64[$y>>3] = $222;
    $225 = ((($y)) + 8|0);
    HEAPF64[$225>>3] = $224;
    $226 = ((($y)) + 16|0);
    HEAPF64[$226>>3] = $fw$7$lcssa;
    break L85;
   } else {
    $227 = -$222;
    HEAPF64[$y>>3] = $227;
    $228 = -$224;
    $229 = ((($y)) + 8|0);
    HEAPF64[$229>>3] = $228;
    $230 = -$fw$7$lcssa;
    $231 = ((($y)) + 16|0);
    HEAPF64[$231>>3] = $230;
    break L85;
   }
   break;
  }
  default: {
  }
  }
 } while(0);
 $232 = $n$1188 & 7;
 STACKTOP = sp;return ($232|0);
}
function ___sin($x,$y,$iy) {
 $x = +$x;
 $y = +$y;
 $iy = $iy|0;
 var $$0 = 0.0, $0 = 0.0, $1 = 0.0, $10 = 0.0, $11 = 0.0, $12 = 0, $13 = 0.0, $14 = 0.0, $15 = 0.0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $19 = 0.0, $2 = 0.0, $20 = 0.0, $21 = 0.0, $22 = 0.0, $23 = 0.0, $24 = 0.0, $3 = 0.0;
 var $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0.0, $8 = 0.0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $x * $x;
 $1 = $0 * $0;
 $2 = $0 * 2.7557313707070068E-6;
 $3 = $2 + -1.9841269829857949E-4;
 $4 = $0 * $3;
 $5 = $4 + 0.0083333333333224895;
 $6 = $0 * $1;
 $7 = $0 * 1.5896909952115501E-10;
 $8 = $7 + -2.5050760253406863E-8;
 $9 = $6 * $8;
 $10 = $9 + $5;
 $11 = $0 * $x;
 $12 = ($iy|0)==(0);
 if ($12) {
  $13 = $0 * $10;
  $14 = $13 + -0.16666666666666632;
  $15 = $11 * $14;
  $16 = $15 + $x;
  $$0 = $16;
 } else {
  $17 = $y * 0.5;
  $18 = $11 * $10;
  $19 = $17 - $18;
  $20 = $0 * $19;
  $21 = $20 - $y;
  $22 = $11 * 0.16666666666666632;
  $23 = $22 + $21;
  $24 = $x - $23;
  $$0 = $24;
 }
 return (+$$0);
}
function _rand() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = 5192;
 $1 = $0;
 $2 = HEAP32[$1>>2]|0;
 $3 = (($0) + 4)|0;
 $4 = $3;
 $5 = HEAP32[$4>>2]|0;
 $6 = (___muldi3(($2|0),($5|0),1284865837,1481765933)|0);
 $7 = tempRet0;
 $8 = (_i64Add(($6|0),($7|0),1,0)|0);
 $9 = tempRet0;
 $10 = 5192;
 $11 = $10;
 HEAP32[$11>>2] = $8;
 $12 = (($10) + 4)|0;
 $13 = $12;
 HEAP32[$13>>2] = $9;
 $14 = (_bitshift64Lshr(($8|0),($9|0),33)|0);
 $15 = tempRet0;
 return ($14|0);
}
function ___overflow($f,$_c) {
 $f = $f|0;
 $_c = $_c|0;
 var $$0 = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $c = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $c = sp;
 $0 = $_c&255;
 HEAP8[$c>>0] = $0;
 $1 = ((($f)) + 16|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)==(0|0);
 if ($3) {
  $4 = (___towrite($f)|0);
  $5 = ($4|0)==(0);
  if ($5) {
   $$pre = HEAP32[$1>>2]|0;
   $9 = $$pre;
   label = 4;
  } else {
   $$0 = -1;
  }
 } else {
  $9 = $2;
  label = 4;
 }
 do {
  if ((label|0) == 4) {
   $6 = ((($f)) + 20|0);
   $7 = HEAP32[$6>>2]|0;
   $8 = ($7>>>0)<($9>>>0);
   if ($8) {
    $10 = $_c & 255;
    $11 = ((($f)) + 75|0);
    $12 = HEAP8[$11>>0]|0;
    $13 = $12 << 24 >> 24;
    $14 = ($10|0)==($13|0);
    if (!($14)) {
     $15 = ((($7)) + 1|0);
     HEAP32[$6>>2] = $15;
     HEAP8[$7>>0] = $0;
     $$0 = $10;
     break;
    }
   }
   $16 = ((($f)) + 36|0);
   $17 = HEAP32[$16>>2]|0;
   $18 = (FUNCTION_TABLE_iiii[$17 & 15]($f,$c,1)|0);
   $19 = ($18|0)==(1);
   if ($19) {
    $20 = HEAP8[$c>>0]|0;
    $21 = $20&255;
    $$0 = $21;
   } else {
    $$0 = -1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function _fputc($c,$f) {
 $c = $c|0;
 $f = $f|0;
 var $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($f)) + 76|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)<(0);
 if ($2) {
  label = 3;
 } else {
  $3 = (___lockfile($f)|0);
  $4 = ($3|0)==(0);
  if ($4) {
   label = 3;
  } else {
   $18 = ((($f)) + 75|0);
   $19 = HEAP8[$18>>0]|0;
   $20 = $19 << 24 >> 24;
   $21 = ($20|0)==($c|0);
   if ($21) {
    label = 10;
   } else {
    $22 = ((($f)) + 20|0);
    $23 = HEAP32[$22>>2]|0;
    $24 = ((($f)) + 16|0);
    $25 = HEAP32[$24>>2]|0;
    $26 = ($23>>>0)<($25>>>0);
    if ($26) {
     $27 = $c&255;
     $28 = ((($23)) + 1|0);
     HEAP32[$22>>2] = $28;
     HEAP8[$23>>0] = $27;
     $29 = $c & 255;
     $31 = $29;
    } else {
     label = 10;
    }
   }
   if ((label|0) == 10) {
    $30 = (___overflow($f,$c)|0);
    $31 = $30;
   }
   ___unlockfile($f);
   $$0 = $31;
  }
 }
 do {
  if ((label|0) == 3) {
   $5 = ((($f)) + 75|0);
   $6 = HEAP8[$5>>0]|0;
   $7 = $6 << 24 >> 24;
   $8 = ($7|0)==($c|0);
   if (!($8)) {
    $9 = ((($f)) + 20|0);
    $10 = HEAP32[$9>>2]|0;
    $11 = ((($f)) + 16|0);
    $12 = HEAP32[$11>>2]|0;
    $13 = ($10>>>0)<($12>>>0);
    if ($13) {
     $14 = $c&255;
     $15 = ((($10)) + 1|0);
     HEAP32[$9>>2] = $15;
     HEAP8[$10>>0] = $14;
     $16 = $c & 255;
     $$0 = $16;
     break;
    }
   }
   $17 = (___overflow($f,$c)|0);
   $$0 = $17;
  }
 } while(0);
 return ($$0|0);
}
function _fputs($s,$f) {
 $s = $s|0;
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_strlen($s)|0);
 $1 = (_fwrite($s,$0,1,$f)|0);
 $2 = (($1) + -1)|0;
 return ($2|0);
}
function _fwrite($src,$size,$nmemb,$f) {
 $src = $src|0;
 $size = $size|0;
 $nmemb = $nmemb|0;
 $f = $f|0;
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = Math_imul($nmemb, $size)|0;
 $1 = ((($f)) + 76|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)>(-1);
 if ($3) {
  $5 = (___lockfile($f)|0);
  $phitmp = ($5|0)==(0);
  $6 = (___fwritex($src,$0,$f)|0);
  if ($phitmp) {
   $8 = $6;
  } else {
   ___unlockfile($f);
   $8 = $6;
  }
 } else {
  $4 = (___fwritex($src,$0,$f)|0);
  $8 = $4;
 }
 $7 = ($8|0)==($0|0);
 if ($7) {
  $10 = $nmemb;
 } else {
  $9 = (($8>>>0) / ($size>>>0))&-1;
  $10 = $9;
 }
 return ($10|0);
}
function _puts($s) {
 $s = $s|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[359]|0;
 $1 = ((($0)) + 76|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)>(-1);
 if ($3) {
  $4 = (___lockfile($0)|0);
  $20 = $4;
 } else {
  $20 = 0;
 }
 $5 = (_fputs($s,$0)|0);
 $6 = ($5|0)<(0);
 do {
  if ($6) {
   $18 = 1;
  } else {
   $7 = ((($0)) + 75|0);
   $8 = HEAP8[$7>>0]|0;
   $9 = ($8<<24>>24)==(10);
   if (!($9)) {
    $10 = ((($0)) + 20|0);
    $11 = HEAP32[$10>>2]|0;
    $12 = ((($0)) + 16|0);
    $13 = HEAP32[$12>>2]|0;
    $14 = ($11>>>0)<($13>>>0);
    if ($14) {
     $15 = ((($11)) + 1|0);
     HEAP32[$10>>2] = $15;
     HEAP8[$11>>0] = 10;
     $18 = 0;
     break;
    }
   }
   $16 = (___overflow($0,10)|0);
   $phitmp = ($16|0)<(0);
   $18 = $phitmp;
  }
 } while(0);
 $17 = $18 << 31 >> 31;
 $19 = ($20|0)==(0);
 if (!($19)) {
  ___unlockfile($0);
 }
 return ($17|0);
}
function _malloc($bytes) {
 $bytes = $bytes|0;
 var $$0 = 0, $$lcssa = 0, $$lcssa141 = 0, $$lcssa142 = 0, $$lcssa144 = 0, $$lcssa147 = 0, $$lcssa149 = 0, $$lcssa151 = 0, $$lcssa153 = 0, $$lcssa155 = 0, $$lcssa157 = 0, $$not$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i13 = 0, $$pre$i16$i = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i14Z2D = 0, $$pre$phi$i17$iZ2D = 0;
 var $$pre$phi$iZ2D = 0, $$pre$phi10$i$iZ2D = 0, $$pre$phiZ2D = 0, $$pre71 = 0, $$pre9$i$i = 0, $$rsize$0$i = 0, $$rsize$4$i = 0, $$v$0$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0;
 var $1008 = 0, $1009 = 0, $101 = 0, $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0, $1015 = 0, $1016 = 0, $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0;
 var $1026 = 0, $1027 = 0, $1028 = 0, $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0, $1033 = 0, $1034 = 0, $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0;
 var $1044 = 0, $1045 = 0, $1046 = 0, $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0, $1051 = 0, $1052 = 0, $1053 = 0, $1054 = 0, $1055 = 0, $1056 = 0, $1057 = 0, $1058 = 0, $1059 = 0, $106 = 0, $107 = 0, $108 = 0;
 var $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0;
 var $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0;
 var $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0;
 var $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0;
 var $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0;
 var $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0;
 var $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0;
 var $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0;
 var $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0;
 var $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0;
 var $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0;
 var $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0;
 var $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0;
 var $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0;
 var $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0;
 var $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0;
 var $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0;
 var $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0;
 var $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0;
 var $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0;
 var $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0;
 var $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0;
 var $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0;
 var $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0;
 var $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0;
 var $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0;
 var $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0;
 var $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0;
 var $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0;
 var $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0;
 var $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0;
 var $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0;
 var $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0;
 var $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0;
 var $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0;
 var $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0;
 var $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0;
 var $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0;
 var $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0, $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0;
 var $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0, $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0;
 var $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0, $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0;
 var $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0, $860 = 0, $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0;
 var $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0, $879 = 0, $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0;
 var $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0, $897 = 0, $898 = 0, $899 = 0, $9 = 0, $90 = 0, $900 = 0;
 var $901 = 0, $902 = 0, $903 = 0, $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0, $914 = 0, $915 = 0, $916 = 0, $917 = 0, $918 = 0, $919 = 0;
 var $92 = 0, $920 = 0, $921 = 0, $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0, $932 = 0, $933 = 0, $934 = 0, $935 = 0, $936 = 0, $937 = 0;
 var $938 = 0, $939 = 0, $94 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0, $950 = 0, $951 = 0, $952 = 0, $953 = 0, $954 = 0, $955 = 0;
 var $956 = 0, $957 = 0, $958 = 0, $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0, $969 = 0, $97 = 0, $970 = 0, $971 = 0, $972 = 0, $973 = 0;
 var $974 = 0, $975 = 0, $976 = 0, $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0, $987 = 0, $988 = 0, $989 = 0, $99 = 0, $990 = 0, $991 = 0;
 var $992 = 0, $993 = 0, $994 = 0, $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $F$0$i$i = 0, $F1$0$i = 0, $F4$0 = 0, $F4$0$i$i = 0, $F5$0$i = 0, $I1$0$i$i = 0, $I7$0$i = 0, $I7$0$i$i = 0, $K12$0$i = 0, $K2$0$i$i = 0, $K8$0$i$i = 0, $R$1$i = 0;
 var $R$1$i$i = 0, $R$1$i$i$lcssa = 0, $R$1$i$lcssa = 0, $R$1$i9 = 0, $R$1$i9$lcssa = 0, $R$3$i = 0, $R$3$i$i = 0, $R$3$i11 = 0, $RP$1$i = 0, $RP$1$i$i = 0, $RP$1$i$i$lcssa = 0, $RP$1$i$lcssa = 0, $RP$1$i8 = 0, $RP$1$i8$lcssa = 0, $T$0$i = 0, $T$0$i$i = 0, $T$0$i$i$lcssa = 0, $T$0$i$i$lcssa140 = 0, $T$0$i$lcssa = 0, $T$0$i$lcssa156 = 0;
 var $T$0$i18$i = 0, $T$0$i18$i$lcssa = 0, $T$0$i18$i$lcssa139 = 0, $br$2$ph$i = 0, $cond$i = 0, $cond$i$i = 0, $cond$i12 = 0, $exitcond$i$i = 0, $i$01$i$i = 0, $idx$0$i = 0, $magic$i$i = 0, $nb$0 = 0, $not$$i$i = 0, $not$$i20$i = 0, $not$7$i = 0, $oldfirst$0$i$i = 0, $or$cond$i = 0, $or$cond$i17 = 0, $or$cond1$i = 0, $or$cond1$i16 = 0;
 var $or$cond10$i = 0, $or$cond11$i = 0, $or$cond2$i = 0, $or$cond48$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond8$i = 0, $p$0$i$i = 0, $qsize$0$i$i = 0, $rsize$0$i = 0, $rsize$0$i$lcssa = 0, $rsize$0$i5 = 0, $rsize$1$i = 0, $rsize$3$i = 0, $rsize$4$lcssa$i = 0, $rsize$412$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sizebits$0$$i = 0, $sizebits$0$i = 0;
 var $sp$0$i$i = 0, $sp$0$i$i$i = 0, $sp$068$i = 0, $sp$068$i$lcssa = 0, $sp$167$i = 0, $sp$167$i$lcssa = 0, $ssize$0$i = 0, $ssize$2$ph$i = 0, $ssize$5$i = 0, $t$0$i = 0, $t$0$i4 = 0, $t$2$i = 0, $t$4$ph$i = 0, $t$4$v$4$i = 0, $t$411$i = 0, $tbase$746$i = 0, $tsize$745$i = 0, $v$0$i = 0, $v$0$i$lcssa = 0, $v$0$i6 = 0;
 var $v$1$i = 0, $v$3$i = 0, $v$4$lcssa$i = 0, $v$413$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $magic$i$i = sp;
 $0 = ($bytes>>>0)<(245);
 do {
  if ($0) {
   $1 = ($bytes>>>0)<(11);
   $2 = (($bytes) + 11)|0;
   $3 = $2 & -8;
   $4 = $1 ? 16 : $3;
   $5 = $4 >>> 3;
   $6 = HEAP32[1312]|0;
   $7 = $6 >>> $5;
   $8 = $7 & 3;
   $9 = ($8|0)==(0);
   if (!($9)) {
    $10 = $7 & 1;
    $11 = $10 ^ 1;
    $12 = (($11) + ($5))|0;
    $13 = $12 << 1;
    $14 = (5288 + ($13<<2)|0);
    $15 = ((($14)) + 8|0);
    $16 = HEAP32[$15>>2]|0;
    $17 = ((($16)) + 8|0);
    $18 = HEAP32[$17>>2]|0;
    $19 = ($14|0)==($18|0);
    do {
     if ($19) {
      $20 = 1 << $12;
      $21 = $20 ^ -1;
      $22 = $6 & $21;
      HEAP32[1312] = $22;
     } else {
      $23 = HEAP32[(5264)>>2]|0;
      $24 = ($18>>>0)<($23>>>0);
      if ($24) {
       _abort();
       // unreachable;
      }
      $25 = ((($18)) + 12|0);
      $26 = HEAP32[$25>>2]|0;
      $27 = ($26|0)==($16|0);
      if ($27) {
       HEAP32[$25>>2] = $14;
       HEAP32[$15>>2] = $18;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $28 = $12 << 3;
    $29 = $28 | 3;
    $30 = ((($16)) + 4|0);
    HEAP32[$30>>2] = $29;
    $31 = (($16) + ($28)|0);
    $32 = ((($31)) + 4|0);
    $33 = HEAP32[$32>>2]|0;
    $34 = $33 | 1;
    HEAP32[$32>>2] = $34;
    $$0 = $17;
    STACKTOP = sp;return ($$0|0);
   }
   $35 = HEAP32[(5256)>>2]|0;
   $36 = ($4>>>0)>($35>>>0);
   if ($36) {
    $37 = ($7|0)==(0);
    if (!($37)) {
     $38 = $7 << $5;
     $39 = 2 << $5;
     $40 = (0 - ($39))|0;
     $41 = $39 | $40;
     $42 = $38 & $41;
     $43 = (0 - ($42))|0;
     $44 = $42 & $43;
     $45 = (($44) + -1)|0;
     $46 = $45 >>> 12;
     $47 = $46 & 16;
     $48 = $45 >>> $47;
     $49 = $48 >>> 5;
     $50 = $49 & 8;
     $51 = $50 | $47;
     $52 = $48 >>> $50;
     $53 = $52 >>> 2;
     $54 = $53 & 4;
     $55 = $51 | $54;
     $56 = $52 >>> $54;
     $57 = $56 >>> 1;
     $58 = $57 & 2;
     $59 = $55 | $58;
     $60 = $56 >>> $58;
     $61 = $60 >>> 1;
     $62 = $61 & 1;
     $63 = $59 | $62;
     $64 = $60 >>> $62;
     $65 = (($63) + ($64))|0;
     $66 = $65 << 1;
     $67 = (5288 + ($66<<2)|0);
     $68 = ((($67)) + 8|0);
     $69 = HEAP32[$68>>2]|0;
     $70 = ((($69)) + 8|0);
     $71 = HEAP32[$70>>2]|0;
     $72 = ($67|0)==($71|0);
     do {
      if ($72) {
       $73 = 1 << $65;
       $74 = $73 ^ -1;
       $75 = $6 & $74;
       HEAP32[1312] = $75;
       $90 = $35;
      } else {
       $76 = HEAP32[(5264)>>2]|0;
       $77 = ($71>>>0)<($76>>>0);
       if ($77) {
        _abort();
        // unreachable;
       }
       $78 = ((($71)) + 12|0);
       $79 = HEAP32[$78>>2]|0;
       $80 = ($79|0)==($69|0);
       if ($80) {
        HEAP32[$78>>2] = $67;
        HEAP32[$68>>2] = $71;
        $$pre = HEAP32[(5256)>>2]|0;
        $90 = $$pre;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $81 = $65 << 3;
     $82 = (($81) - ($4))|0;
     $83 = $4 | 3;
     $84 = ((($69)) + 4|0);
     HEAP32[$84>>2] = $83;
     $85 = (($69) + ($4)|0);
     $86 = $82 | 1;
     $87 = ((($85)) + 4|0);
     HEAP32[$87>>2] = $86;
     $88 = (($85) + ($82)|0);
     HEAP32[$88>>2] = $82;
     $89 = ($90|0)==(0);
     if (!($89)) {
      $91 = HEAP32[(5268)>>2]|0;
      $92 = $90 >>> 3;
      $93 = $92 << 1;
      $94 = (5288 + ($93<<2)|0);
      $95 = HEAP32[1312]|0;
      $96 = 1 << $92;
      $97 = $95 & $96;
      $98 = ($97|0)==(0);
      if ($98) {
       $99 = $95 | $96;
       HEAP32[1312] = $99;
       $$pre71 = ((($94)) + 8|0);
       $$pre$phiZ2D = $$pre71;$F4$0 = $94;
      } else {
       $100 = ((($94)) + 8|0);
       $101 = HEAP32[$100>>2]|0;
       $102 = HEAP32[(5264)>>2]|0;
       $103 = ($101>>>0)<($102>>>0);
       if ($103) {
        _abort();
        // unreachable;
       } else {
        $$pre$phiZ2D = $100;$F4$0 = $101;
       }
      }
      HEAP32[$$pre$phiZ2D>>2] = $91;
      $104 = ((($F4$0)) + 12|0);
      HEAP32[$104>>2] = $91;
      $105 = ((($91)) + 8|0);
      HEAP32[$105>>2] = $F4$0;
      $106 = ((($91)) + 12|0);
      HEAP32[$106>>2] = $94;
     }
     HEAP32[(5256)>>2] = $82;
     HEAP32[(5268)>>2] = $85;
     $$0 = $70;
     STACKTOP = sp;return ($$0|0);
    }
    $107 = HEAP32[(5252)>>2]|0;
    $108 = ($107|0)==(0);
    if ($108) {
     $nb$0 = $4;
    } else {
     $109 = (0 - ($107))|0;
     $110 = $107 & $109;
     $111 = (($110) + -1)|0;
     $112 = $111 >>> 12;
     $113 = $112 & 16;
     $114 = $111 >>> $113;
     $115 = $114 >>> 5;
     $116 = $115 & 8;
     $117 = $116 | $113;
     $118 = $114 >>> $116;
     $119 = $118 >>> 2;
     $120 = $119 & 4;
     $121 = $117 | $120;
     $122 = $118 >>> $120;
     $123 = $122 >>> 1;
     $124 = $123 & 2;
     $125 = $121 | $124;
     $126 = $122 >>> $124;
     $127 = $126 >>> 1;
     $128 = $127 & 1;
     $129 = $125 | $128;
     $130 = $126 >>> $128;
     $131 = (($129) + ($130))|0;
     $132 = (5552 + ($131<<2)|0);
     $133 = HEAP32[$132>>2]|0;
     $134 = ((($133)) + 4|0);
     $135 = HEAP32[$134>>2]|0;
     $136 = $135 & -8;
     $137 = (($136) - ($4))|0;
     $rsize$0$i = $137;$t$0$i = $133;$v$0$i = $133;
     while(1) {
      $138 = ((($t$0$i)) + 16|0);
      $139 = HEAP32[$138>>2]|0;
      $140 = ($139|0)==(0|0);
      if ($140) {
       $141 = ((($t$0$i)) + 20|0);
       $142 = HEAP32[$141>>2]|0;
       $143 = ($142|0)==(0|0);
       if ($143) {
        $rsize$0$i$lcssa = $rsize$0$i;$v$0$i$lcssa = $v$0$i;
        break;
       } else {
        $145 = $142;
       }
      } else {
       $145 = $139;
      }
      $144 = ((($145)) + 4|0);
      $146 = HEAP32[$144>>2]|0;
      $147 = $146 & -8;
      $148 = (($147) - ($4))|0;
      $149 = ($148>>>0)<($rsize$0$i>>>0);
      $$rsize$0$i = $149 ? $148 : $rsize$0$i;
      $$v$0$i = $149 ? $145 : $v$0$i;
      $rsize$0$i = $$rsize$0$i;$t$0$i = $145;$v$0$i = $$v$0$i;
     }
     $150 = HEAP32[(5264)>>2]|0;
     $151 = ($v$0$i$lcssa>>>0)<($150>>>0);
     if ($151) {
      _abort();
      // unreachable;
     }
     $152 = (($v$0$i$lcssa) + ($4)|0);
     $153 = ($v$0$i$lcssa>>>0)<($152>>>0);
     if (!($153)) {
      _abort();
      // unreachable;
     }
     $154 = ((($v$0$i$lcssa)) + 24|0);
     $155 = HEAP32[$154>>2]|0;
     $156 = ((($v$0$i$lcssa)) + 12|0);
     $157 = HEAP32[$156>>2]|0;
     $158 = ($157|0)==($v$0$i$lcssa|0);
     do {
      if ($158) {
       $168 = ((($v$0$i$lcssa)) + 20|0);
       $169 = HEAP32[$168>>2]|0;
       $170 = ($169|0)==(0|0);
       if ($170) {
        $171 = ((($v$0$i$lcssa)) + 16|0);
        $172 = HEAP32[$171>>2]|0;
        $173 = ($172|0)==(0|0);
        if ($173) {
         $R$3$i = 0;
         break;
        } else {
         $R$1$i = $172;$RP$1$i = $171;
        }
       } else {
        $R$1$i = $169;$RP$1$i = $168;
       }
       while(1) {
        $174 = ((($R$1$i)) + 20|0);
        $175 = HEAP32[$174>>2]|0;
        $176 = ($175|0)==(0|0);
        if (!($176)) {
         $R$1$i = $175;$RP$1$i = $174;
         continue;
        }
        $177 = ((($R$1$i)) + 16|0);
        $178 = HEAP32[$177>>2]|0;
        $179 = ($178|0)==(0|0);
        if ($179) {
         $R$1$i$lcssa = $R$1$i;$RP$1$i$lcssa = $RP$1$i;
         break;
        } else {
         $R$1$i = $178;$RP$1$i = $177;
        }
       }
       $180 = ($RP$1$i$lcssa>>>0)<($150>>>0);
       if ($180) {
        _abort();
        // unreachable;
       } else {
        HEAP32[$RP$1$i$lcssa>>2] = 0;
        $R$3$i = $R$1$i$lcssa;
        break;
       }
      } else {
       $159 = ((($v$0$i$lcssa)) + 8|0);
       $160 = HEAP32[$159>>2]|0;
       $161 = ($160>>>0)<($150>>>0);
       if ($161) {
        _abort();
        // unreachable;
       }
       $162 = ((($160)) + 12|0);
       $163 = HEAP32[$162>>2]|0;
       $164 = ($163|0)==($v$0$i$lcssa|0);
       if (!($164)) {
        _abort();
        // unreachable;
       }
       $165 = ((($157)) + 8|0);
       $166 = HEAP32[$165>>2]|0;
       $167 = ($166|0)==($v$0$i$lcssa|0);
       if ($167) {
        HEAP32[$162>>2] = $157;
        HEAP32[$165>>2] = $160;
        $R$3$i = $157;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $181 = ($155|0)==(0|0);
     do {
      if (!($181)) {
       $182 = ((($v$0$i$lcssa)) + 28|0);
       $183 = HEAP32[$182>>2]|0;
       $184 = (5552 + ($183<<2)|0);
       $185 = HEAP32[$184>>2]|0;
       $186 = ($v$0$i$lcssa|0)==($185|0);
       if ($186) {
        HEAP32[$184>>2] = $R$3$i;
        $cond$i = ($R$3$i|0)==(0|0);
        if ($cond$i) {
         $187 = 1 << $183;
         $188 = $187 ^ -1;
         $189 = HEAP32[(5252)>>2]|0;
         $190 = $189 & $188;
         HEAP32[(5252)>>2] = $190;
         break;
        }
       } else {
        $191 = HEAP32[(5264)>>2]|0;
        $192 = ($155>>>0)<($191>>>0);
        if ($192) {
         _abort();
         // unreachable;
        }
        $193 = ((($155)) + 16|0);
        $194 = HEAP32[$193>>2]|0;
        $195 = ($194|0)==($v$0$i$lcssa|0);
        if ($195) {
         HEAP32[$193>>2] = $R$3$i;
        } else {
         $196 = ((($155)) + 20|0);
         HEAP32[$196>>2] = $R$3$i;
        }
        $197 = ($R$3$i|0)==(0|0);
        if ($197) {
         break;
        }
       }
       $198 = HEAP32[(5264)>>2]|0;
       $199 = ($R$3$i>>>0)<($198>>>0);
       if ($199) {
        _abort();
        // unreachable;
       }
       $200 = ((($R$3$i)) + 24|0);
       HEAP32[$200>>2] = $155;
       $201 = ((($v$0$i$lcssa)) + 16|0);
       $202 = HEAP32[$201>>2]|0;
       $203 = ($202|0)==(0|0);
       do {
        if (!($203)) {
         $204 = ($202>>>0)<($198>>>0);
         if ($204) {
          _abort();
          // unreachable;
         } else {
          $205 = ((($R$3$i)) + 16|0);
          HEAP32[$205>>2] = $202;
          $206 = ((($202)) + 24|0);
          HEAP32[$206>>2] = $R$3$i;
          break;
         }
        }
       } while(0);
       $207 = ((($v$0$i$lcssa)) + 20|0);
       $208 = HEAP32[$207>>2]|0;
       $209 = ($208|0)==(0|0);
       if (!($209)) {
        $210 = HEAP32[(5264)>>2]|0;
        $211 = ($208>>>0)<($210>>>0);
        if ($211) {
         _abort();
         // unreachable;
        } else {
         $212 = ((($R$3$i)) + 20|0);
         HEAP32[$212>>2] = $208;
         $213 = ((($208)) + 24|0);
         HEAP32[$213>>2] = $R$3$i;
         break;
        }
       }
      }
     } while(0);
     $214 = ($rsize$0$i$lcssa>>>0)<(16);
     if ($214) {
      $215 = (($rsize$0$i$lcssa) + ($4))|0;
      $216 = $215 | 3;
      $217 = ((($v$0$i$lcssa)) + 4|0);
      HEAP32[$217>>2] = $216;
      $218 = (($v$0$i$lcssa) + ($215)|0);
      $219 = ((($218)) + 4|0);
      $220 = HEAP32[$219>>2]|0;
      $221 = $220 | 1;
      HEAP32[$219>>2] = $221;
     } else {
      $222 = $4 | 3;
      $223 = ((($v$0$i$lcssa)) + 4|0);
      HEAP32[$223>>2] = $222;
      $224 = $rsize$0$i$lcssa | 1;
      $225 = ((($152)) + 4|0);
      HEAP32[$225>>2] = $224;
      $226 = (($152) + ($rsize$0$i$lcssa)|0);
      HEAP32[$226>>2] = $rsize$0$i$lcssa;
      $227 = HEAP32[(5256)>>2]|0;
      $228 = ($227|0)==(0);
      if (!($228)) {
       $229 = HEAP32[(5268)>>2]|0;
       $230 = $227 >>> 3;
       $231 = $230 << 1;
       $232 = (5288 + ($231<<2)|0);
       $233 = HEAP32[1312]|0;
       $234 = 1 << $230;
       $235 = $233 & $234;
       $236 = ($235|0)==(0);
       if ($236) {
        $237 = $233 | $234;
        HEAP32[1312] = $237;
        $$pre$i = ((($232)) + 8|0);
        $$pre$phi$iZ2D = $$pre$i;$F1$0$i = $232;
       } else {
        $238 = ((($232)) + 8|0);
        $239 = HEAP32[$238>>2]|0;
        $240 = HEAP32[(5264)>>2]|0;
        $241 = ($239>>>0)<($240>>>0);
        if ($241) {
         _abort();
         // unreachable;
        } else {
         $$pre$phi$iZ2D = $238;$F1$0$i = $239;
        }
       }
       HEAP32[$$pre$phi$iZ2D>>2] = $229;
       $242 = ((($F1$0$i)) + 12|0);
       HEAP32[$242>>2] = $229;
       $243 = ((($229)) + 8|0);
       HEAP32[$243>>2] = $F1$0$i;
       $244 = ((($229)) + 12|0);
       HEAP32[$244>>2] = $232;
      }
      HEAP32[(5256)>>2] = $rsize$0$i$lcssa;
      HEAP32[(5268)>>2] = $152;
     }
     $245 = ((($v$0$i$lcssa)) + 8|0);
     $$0 = $245;
     STACKTOP = sp;return ($$0|0);
    }
   } else {
    $nb$0 = $4;
   }
  } else {
   $246 = ($bytes>>>0)>(4294967231);
   if ($246) {
    $nb$0 = -1;
   } else {
    $247 = (($bytes) + 11)|0;
    $248 = $247 & -8;
    $249 = HEAP32[(5252)>>2]|0;
    $250 = ($249|0)==(0);
    if ($250) {
     $nb$0 = $248;
    } else {
     $251 = (0 - ($248))|0;
     $252 = $247 >>> 8;
     $253 = ($252|0)==(0);
     if ($253) {
      $idx$0$i = 0;
     } else {
      $254 = ($248>>>0)>(16777215);
      if ($254) {
       $idx$0$i = 31;
      } else {
       $255 = (($252) + 1048320)|0;
       $256 = $255 >>> 16;
       $257 = $256 & 8;
       $258 = $252 << $257;
       $259 = (($258) + 520192)|0;
       $260 = $259 >>> 16;
       $261 = $260 & 4;
       $262 = $261 | $257;
       $263 = $258 << $261;
       $264 = (($263) + 245760)|0;
       $265 = $264 >>> 16;
       $266 = $265 & 2;
       $267 = $262 | $266;
       $268 = (14 - ($267))|0;
       $269 = $263 << $266;
       $270 = $269 >>> 15;
       $271 = (($268) + ($270))|0;
       $272 = $271 << 1;
       $273 = (($271) + 7)|0;
       $274 = $248 >>> $273;
       $275 = $274 & 1;
       $276 = $275 | $272;
       $idx$0$i = $276;
      }
     }
     $277 = (5552 + ($idx$0$i<<2)|0);
     $278 = HEAP32[$277>>2]|0;
     $279 = ($278|0)==(0|0);
     L123: do {
      if ($279) {
       $rsize$3$i = $251;$t$2$i = 0;$v$3$i = 0;
       label = 86;
      } else {
       $280 = ($idx$0$i|0)==(31);
       $281 = $idx$0$i >>> 1;
       $282 = (25 - ($281))|0;
       $283 = $280 ? 0 : $282;
       $284 = $248 << $283;
       $rsize$0$i5 = $251;$rst$0$i = 0;$sizebits$0$i = $284;$t$0$i4 = $278;$v$0$i6 = 0;
       while(1) {
        $285 = ((($t$0$i4)) + 4|0);
        $286 = HEAP32[$285>>2]|0;
        $287 = $286 & -8;
        $288 = (($287) - ($248))|0;
        $289 = ($288>>>0)<($rsize$0$i5>>>0);
        if ($289) {
         $290 = ($287|0)==($248|0);
         if ($290) {
          $rsize$412$i = $288;$t$411$i = $t$0$i4;$v$413$i = $t$0$i4;
          label = 90;
          break L123;
         } else {
          $rsize$1$i = $288;$v$1$i = $t$0$i4;
         }
        } else {
         $rsize$1$i = $rsize$0$i5;$v$1$i = $v$0$i6;
        }
        $291 = ((($t$0$i4)) + 20|0);
        $292 = HEAP32[$291>>2]|0;
        $293 = $sizebits$0$i >>> 31;
        $294 = (((($t$0$i4)) + 16|0) + ($293<<2)|0);
        $295 = HEAP32[$294>>2]|0;
        $296 = ($292|0)==(0|0);
        $297 = ($292|0)==($295|0);
        $or$cond1$i = $296 | $297;
        $rst$1$i = $or$cond1$i ? $rst$0$i : $292;
        $298 = ($295|0)==(0|0);
        $299 = $298&1;
        $300 = $299 ^ 1;
        $sizebits$0$$i = $sizebits$0$i << $300;
        if ($298) {
         $rsize$3$i = $rsize$1$i;$t$2$i = $rst$1$i;$v$3$i = $v$1$i;
         label = 86;
         break;
        } else {
         $rsize$0$i5 = $rsize$1$i;$rst$0$i = $rst$1$i;$sizebits$0$i = $sizebits$0$$i;$t$0$i4 = $295;$v$0$i6 = $v$1$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 86) {
      $301 = ($t$2$i|0)==(0|0);
      $302 = ($v$3$i|0)==(0|0);
      $or$cond$i = $301 & $302;
      if ($or$cond$i) {
       $303 = 2 << $idx$0$i;
       $304 = (0 - ($303))|0;
       $305 = $303 | $304;
       $306 = $249 & $305;
       $307 = ($306|0)==(0);
       if ($307) {
        $nb$0 = $248;
        break;
       }
       $308 = (0 - ($306))|0;
       $309 = $306 & $308;
       $310 = (($309) + -1)|0;
       $311 = $310 >>> 12;
       $312 = $311 & 16;
       $313 = $310 >>> $312;
       $314 = $313 >>> 5;
       $315 = $314 & 8;
       $316 = $315 | $312;
       $317 = $313 >>> $315;
       $318 = $317 >>> 2;
       $319 = $318 & 4;
       $320 = $316 | $319;
       $321 = $317 >>> $319;
       $322 = $321 >>> 1;
       $323 = $322 & 2;
       $324 = $320 | $323;
       $325 = $321 >>> $323;
       $326 = $325 >>> 1;
       $327 = $326 & 1;
       $328 = $324 | $327;
       $329 = $325 >>> $327;
       $330 = (($328) + ($329))|0;
       $331 = (5552 + ($330<<2)|0);
       $332 = HEAP32[$331>>2]|0;
       $t$4$ph$i = $332;
      } else {
       $t$4$ph$i = $t$2$i;
      }
      $333 = ($t$4$ph$i|0)==(0|0);
      if ($333) {
       $rsize$4$lcssa$i = $rsize$3$i;$v$4$lcssa$i = $v$3$i;
      } else {
       $rsize$412$i = $rsize$3$i;$t$411$i = $t$4$ph$i;$v$413$i = $v$3$i;
       label = 90;
      }
     }
     if ((label|0) == 90) {
      while(1) {
       label = 0;
       $334 = ((($t$411$i)) + 4|0);
       $335 = HEAP32[$334>>2]|0;
       $336 = $335 & -8;
       $337 = (($336) - ($248))|0;
       $338 = ($337>>>0)<($rsize$412$i>>>0);
       $$rsize$4$i = $338 ? $337 : $rsize$412$i;
       $t$4$v$4$i = $338 ? $t$411$i : $v$413$i;
       $339 = ((($t$411$i)) + 16|0);
       $340 = HEAP32[$339>>2]|0;
       $341 = ($340|0)==(0|0);
       if (!($341)) {
        $rsize$412$i = $$rsize$4$i;$t$411$i = $340;$v$413$i = $t$4$v$4$i;
        label = 90;
        continue;
       }
       $342 = ((($t$411$i)) + 20|0);
       $343 = HEAP32[$342>>2]|0;
       $344 = ($343|0)==(0|0);
       if ($344) {
        $rsize$4$lcssa$i = $$rsize$4$i;$v$4$lcssa$i = $t$4$v$4$i;
        break;
       } else {
        $rsize$412$i = $$rsize$4$i;$t$411$i = $343;$v$413$i = $t$4$v$4$i;
        label = 90;
       }
      }
     }
     $345 = ($v$4$lcssa$i|0)==(0|0);
     if ($345) {
      $nb$0 = $248;
     } else {
      $346 = HEAP32[(5256)>>2]|0;
      $347 = (($346) - ($248))|0;
      $348 = ($rsize$4$lcssa$i>>>0)<($347>>>0);
      if ($348) {
       $349 = HEAP32[(5264)>>2]|0;
       $350 = ($v$4$lcssa$i>>>0)<($349>>>0);
       if ($350) {
        _abort();
        // unreachable;
       }
       $351 = (($v$4$lcssa$i) + ($248)|0);
       $352 = ($v$4$lcssa$i>>>0)<($351>>>0);
       if (!($352)) {
        _abort();
        // unreachable;
       }
       $353 = ((($v$4$lcssa$i)) + 24|0);
       $354 = HEAP32[$353>>2]|0;
       $355 = ((($v$4$lcssa$i)) + 12|0);
       $356 = HEAP32[$355>>2]|0;
       $357 = ($356|0)==($v$4$lcssa$i|0);
       do {
        if ($357) {
         $367 = ((($v$4$lcssa$i)) + 20|0);
         $368 = HEAP32[$367>>2]|0;
         $369 = ($368|0)==(0|0);
         if ($369) {
          $370 = ((($v$4$lcssa$i)) + 16|0);
          $371 = HEAP32[$370>>2]|0;
          $372 = ($371|0)==(0|0);
          if ($372) {
           $R$3$i11 = 0;
           break;
          } else {
           $R$1$i9 = $371;$RP$1$i8 = $370;
          }
         } else {
          $R$1$i9 = $368;$RP$1$i8 = $367;
         }
         while(1) {
          $373 = ((($R$1$i9)) + 20|0);
          $374 = HEAP32[$373>>2]|0;
          $375 = ($374|0)==(0|0);
          if (!($375)) {
           $R$1$i9 = $374;$RP$1$i8 = $373;
           continue;
          }
          $376 = ((($R$1$i9)) + 16|0);
          $377 = HEAP32[$376>>2]|0;
          $378 = ($377|0)==(0|0);
          if ($378) {
           $R$1$i9$lcssa = $R$1$i9;$RP$1$i8$lcssa = $RP$1$i8;
           break;
          } else {
           $R$1$i9 = $377;$RP$1$i8 = $376;
          }
         }
         $379 = ($RP$1$i8$lcssa>>>0)<($349>>>0);
         if ($379) {
          _abort();
          // unreachable;
         } else {
          HEAP32[$RP$1$i8$lcssa>>2] = 0;
          $R$3$i11 = $R$1$i9$lcssa;
          break;
         }
        } else {
         $358 = ((($v$4$lcssa$i)) + 8|0);
         $359 = HEAP32[$358>>2]|0;
         $360 = ($359>>>0)<($349>>>0);
         if ($360) {
          _abort();
          // unreachable;
         }
         $361 = ((($359)) + 12|0);
         $362 = HEAP32[$361>>2]|0;
         $363 = ($362|0)==($v$4$lcssa$i|0);
         if (!($363)) {
          _abort();
          // unreachable;
         }
         $364 = ((($356)) + 8|0);
         $365 = HEAP32[$364>>2]|0;
         $366 = ($365|0)==($v$4$lcssa$i|0);
         if ($366) {
          HEAP32[$361>>2] = $356;
          HEAP32[$364>>2] = $359;
          $R$3$i11 = $356;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $380 = ($354|0)==(0|0);
       do {
        if (!($380)) {
         $381 = ((($v$4$lcssa$i)) + 28|0);
         $382 = HEAP32[$381>>2]|0;
         $383 = (5552 + ($382<<2)|0);
         $384 = HEAP32[$383>>2]|0;
         $385 = ($v$4$lcssa$i|0)==($384|0);
         if ($385) {
          HEAP32[$383>>2] = $R$3$i11;
          $cond$i12 = ($R$3$i11|0)==(0|0);
          if ($cond$i12) {
           $386 = 1 << $382;
           $387 = $386 ^ -1;
           $388 = HEAP32[(5252)>>2]|0;
           $389 = $388 & $387;
           HEAP32[(5252)>>2] = $389;
           break;
          }
         } else {
          $390 = HEAP32[(5264)>>2]|0;
          $391 = ($354>>>0)<($390>>>0);
          if ($391) {
           _abort();
           // unreachable;
          }
          $392 = ((($354)) + 16|0);
          $393 = HEAP32[$392>>2]|0;
          $394 = ($393|0)==($v$4$lcssa$i|0);
          if ($394) {
           HEAP32[$392>>2] = $R$3$i11;
          } else {
           $395 = ((($354)) + 20|0);
           HEAP32[$395>>2] = $R$3$i11;
          }
          $396 = ($R$3$i11|0)==(0|0);
          if ($396) {
           break;
          }
         }
         $397 = HEAP32[(5264)>>2]|0;
         $398 = ($R$3$i11>>>0)<($397>>>0);
         if ($398) {
          _abort();
          // unreachable;
         }
         $399 = ((($R$3$i11)) + 24|0);
         HEAP32[$399>>2] = $354;
         $400 = ((($v$4$lcssa$i)) + 16|0);
         $401 = HEAP32[$400>>2]|0;
         $402 = ($401|0)==(0|0);
         do {
          if (!($402)) {
           $403 = ($401>>>0)<($397>>>0);
           if ($403) {
            _abort();
            // unreachable;
           } else {
            $404 = ((($R$3$i11)) + 16|0);
            HEAP32[$404>>2] = $401;
            $405 = ((($401)) + 24|0);
            HEAP32[$405>>2] = $R$3$i11;
            break;
           }
          }
         } while(0);
         $406 = ((($v$4$lcssa$i)) + 20|0);
         $407 = HEAP32[$406>>2]|0;
         $408 = ($407|0)==(0|0);
         if (!($408)) {
          $409 = HEAP32[(5264)>>2]|0;
          $410 = ($407>>>0)<($409>>>0);
          if ($410) {
           _abort();
           // unreachable;
          } else {
           $411 = ((($R$3$i11)) + 20|0);
           HEAP32[$411>>2] = $407;
           $412 = ((($407)) + 24|0);
           HEAP32[$412>>2] = $R$3$i11;
           break;
          }
         }
        }
       } while(0);
       $413 = ($rsize$4$lcssa$i>>>0)<(16);
       do {
        if ($413) {
         $414 = (($rsize$4$lcssa$i) + ($248))|0;
         $415 = $414 | 3;
         $416 = ((($v$4$lcssa$i)) + 4|0);
         HEAP32[$416>>2] = $415;
         $417 = (($v$4$lcssa$i) + ($414)|0);
         $418 = ((($417)) + 4|0);
         $419 = HEAP32[$418>>2]|0;
         $420 = $419 | 1;
         HEAP32[$418>>2] = $420;
        } else {
         $421 = $248 | 3;
         $422 = ((($v$4$lcssa$i)) + 4|0);
         HEAP32[$422>>2] = $421;
         $423 = $rsize$4$lcssa$i | 1;
         $424 = ((($351)) + 4|0);
         HEAP32[$424>>2] = $423;
         $425 = (($351) + ($rsize$4$lcssa$i)|0);
         HEAP32[$425>>2] = $rsize$4$lcssa$i;
         $426 = $rsize$4$lcssa$i >>> 3;
         $427 = ($rsize$4$lcssa$i>>>0)<(256);
         if ($427) {
          $428 = $426 << 1;
          $429 = (5288 + ($428<<2)|0);
          $430 = HEAP32[1312]|0;
          $431 = 1 << $426;
          $432 = $430 & $431;
          $433 = ($432|0)==(0);
          if ($433) {
           $434 = $430 | $431;
           HEAP32[1312] = $434;
           $$pre$i13 = ((($429)) + 8|0);
           $$pre$phi$i14Z2D = $$pre$i13;$F5$0$i = $429;
          } else {
           $435 = ((($429)) + 8|0);
           $436 = HEAP32[$435>>2]|0;
           $437 = HEAP32[(5264)>>2]|0;
           $438 = ($436>>>0)<($437>>>0);
           if ($438) {
            _abort();
            // unreachable;
           } else {
            $$pre$phi$i14Z2D = $435;$F5$0$i = $436;
           }
          }
          HEAP32[$$pre$phi$i14Z2D>>2] = $351;
          $439 = ((($F5$0$i)) + 12|0);
          HEAP32[$439>>2] = $351;
          $440 = ((($351)) + 8|0);
          HEAP32[$440>>2] = $F5$0$i;
          $441 = ((($351)) + 12|0);
          HEAP32[$441>>2] = $429;
          break;
         }
         $442 = $rsize$4$lcssa$i >>> 8;
         $443 = ($442|0)==(0);
         if ($443) {
          $I7$0$i = 0;
         } else {
          $444 = ($rsize$4$lcssa$i>>>0)>(16777215);
          if ($444) {
           $I7$0$i = 31;
          } else {
           $445 = (($442) + 1048320)|0;
           $446 = $445 >>> 16;
           $447 = $446 & 8;
           $448 = $442 << $447;
           $449 = (($448) + 520192)|0;
           $450 = $449 >>> 16;
           $451 = $450 & 4;
           $452 = $451 | $447;
           $453 = $448 << $451;
           $454 = (($453) + 245760)|0;
           $455 = $454 >>> 16;
           $456 = $455 & 2;
           $457 = $452 | $456;
           $458 = (14 - ($457))|0;
           $459 = $453 << $456;
           $460 = $459 >>> 15;
           $461 = (($458) + ($460))|0;
           $462 = $461 << 1;
           $463 = (($461) + 7)|0;
           $464 = $rsize$4$lcssa$i >>> $463;
           $465 = $464 & 1;
           $466 = $465 | $462;
           $I7$0$i = $466;
          }
         }
         $467 = (5552 + ($I7$0$i<<2)|0);
         $468 = ((($351)) + 28|0);
         HEAP32[$468>>2] = $I7$0$i;
         $469 = ((($351)) + 16|0);
         $470 = ((($469)) + 4|0);
         HEAP32[$470>>2] = 0;
         HEAP32[$469>>2] = 0;
         $471 = HEAP32[(5252)>>2]|0;
         $472 = 1 << $I7$0$i;
         $473 = $471 & $472;
         $474 = ($473|0)==(0);
         if ($474) {
          $475 = $471 | $472;
          HEAP32[(5252)>>2] = $475;
          HEAP32[$467>>2] = $351;
          $476 = ((($351)) + 24|0);
          HEAP32[$476>>2] = $467;
          $477 = ((($351)) + 12|0);
          HEAP32[$477>>2] = $351;
          $478 = ((($351)) + 8|0);
          HEAP32[$478>>2] = $351;
          break;
         }
         $479 = HEAP32[$467>>2]|0;
         $480 = ($I7$0$i|0)==(31);
         $481 = $I7$0$i >>> 1;
         $482 = (25 - ($481))|0;
         $483 = $480 ? 0 : $482;
         $484 = $rsize$4$lcssa$i << $483;
         $K12$0$i = $484;$T$0$i = $479;
         while(1) {
          $485 = ((($T$0$i)) + 4|0);
          $486 = HEAP32[$485>>2]|0;
          $487 = $486 & -8;
          $488 = ($487|0)==($rsize$4$lcssa$i|0);
          if ($488) {
           $T$0$i$lcssa = $T$0$i;
           label = 148;
           break;
          }
          $489 = $K12$0$i >>> 31;
          $490 = (((($T$0$i)) + 16|0) + ($489<<2)|0);
          $491 = $K12$0$i << 1;
          $492 = HEAP32[$490>>2]|0;
          $493 = ($492|0)==(0|0);
          if ($493) {
           $$lcssa157 = $490;$T$0$i$lcssa156 = $T$0$i;
           label = 145;
           break;
          } else {
           $K12$0$i = $491;$T$0$i = $492;
          }
         }
         if ((label|0) == 145) {
          $494 = HEAP32[(5264)>>2]|0;
          $495 = ($$lcssa157>>>0)<($494>>>0);
          if ($495) {
           _abort();
           // unreachable;
          } else {
           HEAP32[$$lcssa157>>2] = $351;
           $496 = ((($351)) + 24|0);
           HEAP32[$496>>2] = $T$0$i$lcssa156;
           $497 = ((($351)) + 12|0);
           HEAP32[$497>>2] = $351;
           $498 = ((($351)) + 8|0);
           HEAP32[$498>>2] = $351;
           break;
          }
         }
         else if ((label|0) == 148) {
          $499 = ((($T$0$i$lcssa)) + 8|0);
          $500 = HEAP32[$499>>2]|0;
          $501 = HEAP32[(5264)>>2]|0;
          $502 = ($500>>>0)>=($501>>>0);
          $not$7$i = ($T$0$i$lcssa>>>0)>=($501>>>0);
          $503 = $502 & $not$7$i;
          if ($503) {
           $504 = ((($500)) + 12|0);
           HEAP32[$504>>2] = $351;
           HEAP32[$499>>2] = $351;
           $505 = ((($351)) + 8|0);
           HEAP32[$505>>2] = $500;
           $506 = ((($351)) + 12|0);
           HEAP32[$506>>2] = $T$0$i$lcssa;
           $507 = ((($351)) + 24|0);
           HEAP32[$507>>2] = 0;
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $508 = ((($v$4$lcssa$i)) + 8|0);
       $$0 = $508;
       STACKTOP = sp;return ($$0|0);
      } else {
       $nb$0 = $248;
      }
     }
    }
   }
  }
 } while(0);
 $509 = HEAP32[(5256)>>2]|0;
 $510 = ($509>>>0)<($nb$0>>>0);
 if (!($510)) {
  $511 = (($509) - ($nb$0))|0;
  $512 = HEAP32[(5268)>>2]|0;
  $513 = ($511>>>0)>(15);
  if ($513) {
   $514 = (($512) + ($nb$0)|0);
   HEAP32[(5268)>>2] = $514;
   HEAP32[(5256)>>2] = $511;
   $515 = $511 | 1;
   $516 = ((($514)) + 4|0);
   HEAP32[$516>>2] = $515;
   $517 = (($514) + ($511)|0);
   HEAP32[$517>>2] = $511;
   $518 = $nb$0 | 3;
   $519 = ((($512)) + 4|0);
   HEAP32[$519>>2] = $518;
  } else {
   HEAP32[(5256)>>2] = 0;
   HEAP32[(5268)>>2] = 0;
   $520 = $509 | 3;
   $521 = ((($512)) + 4|0);
   HEAP32[$521>>2] = $520;
   $522 = (($512) + ($509)|0);
   $523 = ((($522)) + 4|0);
   $524 = HEAP32[$523>>2]|0;
   $525 = $524 | 1;
   HEAP32[$523>>2] = $525;
  }
  $526 = ((($512)) + 8|0);
  $$0 = $526;
  STACKTOP = sp;return ($$0|0);
 }
 $527 = HEAP32[(5260)>>2]|0;
 $528 = ($527>>>0)>($nb$0>>>0);
 if ($528) {
  $529 = (($527) - ($nb$0))|0;
  HEAP32[(5260)>>2] = $529;
  $530 = HEAP32[(5272)>>2]|0;
  $531 = (($530) + ($nb$0)|0);
  HEAP32[(5272)>>2] = $531;
  $532 = $529 | 1;
  $533 = ((($531)) + 4|0);
  HEAP32[$533>>2] = $532;
  $534 = $nb$0 | 3;
  $535 = ((($530)) + 4|0);
  HEAP32[$535>>2] = $534;
  $536 = ((($530)) + 8|0);
  $$0 = $536;
  STACKTOP = sp;return ($$0|0);
 }
 $537 = HEAP32[1430]|0;
 $538 = ($537|0)==(0);
 if ($538) {
  HEAP32[(5728)>>2] = 4096;
  HEAP32[(5724)>>2] = 4096;
  HEAP32[(5732)>>2] = -1;
  HEAP32[(5736)>>2] = -1;
  HEAP32[(5740)>>2] = 0;
  HEAP32[(5692)>>2] = 0;
  $539 = $magic$i$i;
  $540 = $539 & -16;
  $541 = $540 ^ 1431655768;
  HEAP32[$magic$i$i>>2] = $541;
  HEAP32[1430] = $541;
 }
 $542 = (($nb$0) + 48)|0;
 $543 = HEAP32[(5728)>>2]|0;
 $544 = (($nb$0) + 47)|0;
 $545 = (($543) + ($544))|0;
 $546 = (0 - ($543))|0;
 $547 = $545 & $546;
 $548 = ($547>>>0)>($nb$0>>>0);
 if (!($548)) {
  $$0 = 0;
  STACKTOP = sp;return ($$0|0);
 }
 $549 = HEAP32[(5688)>>2]|0;
 $550 = ($549|0)==(0);
 if (!($550)) {
  $551 = HEAP32[(5680)>>2]|0;
  $552 = (($551) + ($547))|0;
  $553 = ($552>>>0)<=($551>>>0);
  $554 = ($552>>>0)>($549>>>0);
  $or$cond1$i16 = $553 | $554;
  if ($or$cond1$i16) {
   $$0 = 0;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $555 = HEAP32[(5692)>>2]|0;
 $556 = $555 & 4;
 $557 = ($556|0)==(0);
 L254: do {
  if ($557) {
   $558 = HEAP32[(5272)>>2]|0;
   $559 = ($558|0)==(0|0);
   L256: do {
    if ($559) {
     label = 171;
    } else {
     $sp$0$i$i = (5696);
     while(1) {
      $560 = HEAP32[$sp$0$i$i>>2]|0;
      $561 = ($560>>>0)>($558>>>0);
      if (!($561)) {
       $562 = ((($sp$0$i$i)) + 4|0);
       $563 = HEAP32[$562>>2]|0;
       $564 = (($560) + ($563)|0);
       $565 = ($564>>>0)>($558>>>0);
       if ($565) {
        $$lcssa153 = $sp$0$i$i;$$lcssa155 = $562;
        break;
       }
      }
      $566 = ((($sp$0$i$i)) + 8|0);
      $567 = HEAP32[$566>>2]|0;
      $568 = ($567|0)==(0|0);
      if ($568) {
       label = 171;
       break L256;
      } else {
       $sp$0$i$i = $567;
      }
     }
     $591 = HEAP32[(5260)>>2]|0;
     $592 = (($545) - ($591))|0;
     $593 = $592 & $546;
     $594 = ($593>>>0)<(2147483647);
     if ($594) {
      $595 = (_sbrk(($593|0))|0);
      $596 = HEAP32[$$lcssa153>>2]|0;
      $597 = HEAP32[$$lcssa155>>2]|0;
      $598 = (($596) + ($597)|0);
      $599 = ($595|0)==($598|0);
      if ($599) {
       $600 = ($595|0)==((-1)|0);
       if (!($600)) {
        $tbase$746$i = $595;$tsize$745$i = $593;
        label = 191;
        break L254;
       }
      } else {
       $br$2$ph$i = $595;$ssize$2$ph$i = $593;
       label = 181;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 171) {
     $569 = (_sbrk(0)|0);
     $570 = ($569|0)==((-1)|0);
     if (!($570)) {
      $571 = $569;
      $572 = HEAP32[(5724)>>2]|0;
      $573 = (($572) + -1)|0;
      $574 = $573 & $571;
      $575 = ($574|0)==(0);
      if ($575) {
       $ssize$0$i = $547;
      } else {
       $576 = (($573) + ($571))|0;
       $577 = (0 - ($572))|0;
       $578 = $576 & $577;
       $579 = (($547) - ($571))|0;
       $580 = (($579) + ($578))|0;
       $ssize$0$i = $580;
      }
      $581 = HEAP32[(5680)>>2]|0;
      $582 = (($581) + ($ssize$0$i))|0;
      $583 = ($ssize$0$i>>>0)>($nb$0>>>0);
      $584 = ($ssize$0$i>>>0)<(2147483647);
      $or$cond$i17 = $583 & $584;
      if ($or$cond$i17) {
       $585 = HEAP32[(5688)>>2]|0;
       $586 = ($585|0)==(0);
       if (!($586)) {
        $587 = ($582>>>0)<=($581>>>0);
        $588 = ($582>>>0)>($585>>>0);
        $or$cond2$i = $587 | $588;
        if ($or$cond2$i) {
         break;
        }
       }
       $589 = (_sbrk(($ssize$0$i|0))|0);
       $590 = ($589|0)==($569|0);
       if ($590) {
        $tbase$746$i = $569;$tsize$745$i = $ssize$0$i;
        label = 191;
        break L254;
       } else {
        $br$2$ph$i = $589;$ssize$2$ph$i = $ssize$0$i;
        label = 181;
       }
      }
     }
    }
   } while(0);
   L276: do {
    if ((label|0) == 181) {
     $601 = (0 - ($ssize$2$ph$i))|0;
     $602 = ($br$2$ph$i|0)!=((-1)|0);
     $603 = ($ssize$2$ph$i>>>0)<(2147483647);
     $or$cond7$i = $603 & $602;
     $604 = ($542>>>0)>($ssize$2$ph$i>>>0);
     $or$cond8$i = $604 & $or$cond7$i;
     do {
      if ($or$cond8$i) {
       $605 = HEAP32[(5728)>>2]|0;
       $606 = (($544) - ($ssize$2$ph$i))|0;
       $607 = (($606) + ($605))|0;
       $608 = (0 - ($605))|0;
       $609 = $607 & $608;
       $610 = ($609>>>0)<(2147483647);
       if ($610) {
        $611 = (_sbrk(($609|0))|0);
        $612 = ($611|0)==((-1)|0);
        if ($612) {
         (_sbrk(($601|0))|0);
         break L276;
        } else {
         $613 = (($609) + ($ssize$2$ph$i))|0;
         $ssize$5$i = $613;
         break;
        }
       } else {
        $ssize$5$i = $ssize$2$ph$i;
       }
      } else {
       $ssize$5$i = $ssize$2$ph$i;
      }
     } while(0);
     $614 = ($br$2$ph$i|0)==((-1)|0);
     if (!($614)) {
      $tbase$746$i = $br$2$ph$i;$tsize$745$i = $ssize$5$i;
      label = 191;
      break L254;
     }
    }
   } while(0);
   $615 = HEAP32[(5692)>>2]|0;
   $616 = $615 | 4;
   HEAP32[(5692)>>2] = $616;
   label = 188;
  } else {
   label = 188;
  }
 } while(0);
 if ((label|0) == 188) {
  $617 = ($547>>>0)<(2147483647);
  if ($617) {
   $618 = (_sbrk(($547|0))|0);
   $619 = (_sbrk(0)|0);
   $620 = ($618|0)!=((-1)|0);
   $621 = ($619|0)!=((-1)|0);
   $or$cond5$i = $620 & $621;
   $622 = ($618>>>0)<($619>>>0);
   $or$cond10$i = $622 & $or$cond5$i;
   if ($or$cond10$i) {
    $623 = $619;
    $624 = $618;
    $625 = (($623) - ($624))|0;
    $626 = (($nb$0) + 40)|0;
    $$not$i = ($625>>>0)>($626>>>0);
    if ($$not$i) {
     $tbase$746$i = $618;$tsize$745$i = $625;
     label = 191;
    }
   }
  }
 }
 if ((label|0) == 191) {
  $627 = HEAP32[(5680)>>2]|0;
  $628 = (($627) + ($tsize$745$i))|0;
  HEAP32[(5680)>>2] = $628;
  $629 = HEAP32[(5684)>>2]|0;
  $630 = ($628>>>0)>($629>>>0);
  if ($630) {
   HEAP32[(5684)>>2] = $628;
  }
  $631 = HEAP32[(5272)>>2]|0;
  $632 = ($631|0)==(0|0);
  do {
   if ($632) {
    $633 = HEAP32[(5264)>>2]|0;
    $634 = ($633|0)==(0|0);
    $635 = ($tbase$746$i>>>0)<($633>>>0);
    $or$cond11$i = $634 | $635;
    if ($or$cond11$i) {
     HEAP32[(5264)>>2] = $tbase$746$i;
    }
    HEAP32[(5696)>>2] = $tbase$746$i;
    HEAP32[(5700)>>2] = $tsize$745$i;
    HEAP32[(5708)>>2] = 0;
    $636 = HEAP32[1430]|0;
    HEAP32[(5284)>>2] = $636;
    HEAP32[(5280)>>2] = -1;
    $i$01$i$i = 0;
    while(1) {
     $637 = $i$01$i$i << 1;
     $638 = (5288 + ($637<<2)|0);
     $639 = ((($638)) + 12|0);
     HEAP32[$639>>2] = $638;
     $640 = ((($638)) + 8|0);
     HEAP32[$640>>2] = $638;
     $641 = (($i$01$i$i) + 1)|0;
     $exitcond$i$i = ($641|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $i$01$i$i = $641;
     }
    }
    $642 = (($tsize$745$i) + -40)|0;
    $643 = ((($tbase$746$i)) + 8|0);
    $644 = $643;
    $645 = $644 & 7;
    $646 = ($645|0)==(0);
    $647 = (0 - ($644))|0;
    $648 = $647 & 7;
    $649 = $646 ? 0 : $648;
    $650 = (($tbase$746$i) + ($649)|0);
    $651 = (($642) - ($649))|0;
    HEAP32[(5272)>>2] = $650;
    HEAP32[(5260)>>2] = $651;
    $652 = $651 | 1;
    $653 = ((($650)) + 4|0);
    HEAP32[$653>>2] = $652;
    $654 = (($650) + ($651)|0);
    $655 = ((($654)) + 4|0);
    HEAP32[$655>>2] = 40;
    $656 = HEAP32[(5736)>>2]|0;
    HEAP32[(5276)>>2] = $656;
   } else {
    $sp$068$i = (5696);
    while(1) {
     $657 = HEAP32[$sp$068$i>>2]|0;
     $658 = ((($sp$068$i)) + 4|0);
     $659 = HEAP32[$658>>2]|0;
     $660 = (($657) + ($659)|0);
     $661 = ($tbase$746$i|0)==($660|0);
     if ($661) {
      $$lcssa147 = $657;$$lcssa149 = $658;$$lcssa151 = $659;$sp$068$i$lcssa = $sp$068$i;
      label = 201;
      break;
     }
     $662 = ((($sp$068$i)) + 8|0);
     $663 = HEAP32[$662>>2]|0;
     $664 = ($663|0)==(0|0);
     if ($664) {
      break;
     } else {
      $sp$068$i = $663;
     }
    }
    if ((label|0) == 201) {
     $665 = ((($sp$068$i$lcssa)) + 12|0);
     $666 = HEAP32[$665>>2]|0;
     $667 = $666 & 8;
     $668 = ($667|0)==(0);
     if ($668) {
      $669 = ($631>>>0)>=($$lcssa147>>>0);
      $670 = ($631>>>0)<($tbase$746$i>>>0);
      $or$cond48$i = $670 & $669;
      if ($or$cond48$i) {
       $671 = (($$lcssa151) + ($tsize$745$i))|0;
       HEAP32[$$lcssa149>>2] = $671;
       $672 = HEAP32[(5260)>>2]|0;
       $673 = ((($631)) + 8|0);
       $674 = $673;
       $675 = $674 & 7;
       $676 = ($675|0)==(0);
       $677 = (0 - ($674))|0;
       $678 = $677 & 7;
       $679 = $676 ? 0 : $678;
       $680 = (($631) + ($679)|0);
       $681 = (($tsize$745$i) - ($679))|0;
       $682 = (($681) + ($672))|0;
       HEAP32[(5272)>>2] = $680;
       HEAP32[(5260)>>2] = $682;
       $683 = $682 | 1;
       $684 = ((($680)) + 4|0);
       HEAP32[$684>>2] = $683;
       $685 = (($680) + ($682)|0);
       $686 = ((($685)) + 4|0);
       HEAP32[$686>>2] = 40;
       $687 = HEAP32[(5736)>>2]|0;
       HEAP32[(5276)>>2] = $687;
       break;
      }
     }
    }
    $688 = HEAP32[(5264)>>2]|0;
    $689 = ($tbase$746$i>>>0)<($688>>>0);
    if ($689) {
     HEAP32[(5264)>>2] = $tbase$746$i;
     $753 = $tbase$746$i;
    } else {
     $753 = $688;
    }
    $690 = (($tbase$746$i) + ($tsize$745$i)|0);
    $sp$167$i = (5696);
    while(1) {
     $691 = HEAP32[$sp$167$i>>2]|0;
     $692 = ($691|0)==($690|0);
     if ($692) {
      $$lcssa144 = $sp$167$i;$sp$167$i$lcssa = $sp$167$i;
      label = 209;
      break;
     }
     $693 = ((($sp$167$i)) + 8|0);
     $694 = HEAP32[$693>>2]|0;
     $695 = ($694|0)==(0|0);
     if ($695) {
      $sp$0$i$i$i = (5696);
      break;
     } else {
      $sp$167$i = $694;
     }
    }
    if ((label|0) == 209) {
     $696 = ((($sp$167$i$lcssa)) + 12|0);
     $697 = HEAP32[$696>>2]|0;
     $698 = $697 & 8;
     $699 = ($698|0)==(0);
     if ($699) {
      HEAP32[$$lcssa144>>2] = $tbase$746$i;
      $700 = ((($sp$167$i$lcssa)) + 4|0);
      $701 = HEAP32[$700>>2]|0;
      $702 = (($701) + ($tsize$745$i))|0;
      HEAP32[$700>>2] = $702;
      $703 = ((($tbase$746$i)) + 8|0);
      $704 = $703;
      $705 = $704 & 7;
      $706 = ($705|0)==(0);
      $707 = (0 - ($704))|0;
      $708 = $707 & 7;
      $709 = $706 ? 0 : $708;
      $710 = (($tbase$746$i) + ($709)|0);
      $711 = ((($690)) + 8|0);
      $712 = $711;
      $713 = $712 & 7;
      $714 = ($713|0)==(0);
      $715 = (0 - ($712))|0;
      $716 = $715 & 7;
      $717 = $714 ? 0 : $716;
      $718 = (($690) + ($717)|0);
      $719 = $718;
      $720 = $710;
      $721 = (($719) - ($720))|0;
      $722 = (($710) + ($nb$0)|0);
      $723 = (($721) - ($nb$0))|0;
      $724 = $nb$0 | 3;
      $725 = ((($710)) + 4|0);
      HEAP32[$725>>2] = $724;
      $726 = ($718|0)==($631|0);
      do {
       if ($726) {
        $727 = HEAP32[(5260)>>2]|0;
        $728 = (($727) + ($723))|0;
        HEAP32[(5260)>>2] = $728;
        HEAP32[(5272)>>2] = $722;
        $729 = $728 | 1;
        $730 = ((($722)) + 4|0);
        HEAP32[$730>>2] = $729;
       } else {
        $731 = HEAP32[(5268)>>2]|0;
        $732 = ($718|0)==($731|0);
        if ($732) {
         $733 = HEAP32[(5256)>>2]|0;
         $734 = (($733) + ($723))|0;
         HEAP32[(5256)>>2] = $734;
         HEAP32[(5268)>>2] = $722;
         $735 = $734 | 1;
         $736 = ((($722)) + 4|0);
         HEAP32[$736>>2] = $735;
         $737 = (($722) + ($734)|0);
         HEAP32[$737>>2] = $734;
         break;
        }
        $738 = ((($718)) + 4|0);
        $739 = HEAP32[$738>>2]|0;
        $740 = $739 & 3;
        $741 = ($740|0)==(1);
        if ($741) {
         $742 = $739 & -8;
         $743 = $739 >>> 3;
         $744 = ($739>>>0)<(256);
         L328: do {
          if ($744) {
           $745 = ((($718)) + 8|0);
           $746 = HEAP32[$745>>2]|0;
           $747 = ((($718)) + 12|0);
           $748 = HEAP32[$747>>2]|0;
           $749 = $743 << 1;
           $750 = (5288 + ($749<<2)|0);
           $751 = ($746|0)==($750|0);
           do {
            if (!($751)) {
             $752 = ($746>>>0)<($753>>>0);
             if ($752) {
              _abort();
              // unreachable;
             }
             $754 = ((($746)) + 12|0);
             $755 = HEAP32[$754>>2]|0;
             $756 = ($755|0)==($718|0);
             if ($756) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $757 = ($748|0)==($746|0);
           if ($757) {
            $758 = 1 << $743;
            $759 = $758 ^ -1;
            $760 = HEAP32[1312]|0;
            $761 = $760 & $759;
            HEAP32[1312] = $761;
            break;
           }
           $762 = ($748|0)==($750|0);
           do {
            if ($762) {
             $$pre9$i$i = ((($748)) + 8|0);
             $$pre$phi10$i$iZ2D = $$pre9$i$i;
            } else {
             $763 = ($748>>>0)<($753>>>0);
             if ($763) {
              _abort();
              // unreachable;
             }
             $764 = ((($748)) + 8|0);
             $765 = HEAP32[$764>>2]|0;
             $766 = ($765|0)==($718|0);
             if ($766) {
              $$pre$phi10$i$iZ2D = $764;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $767 = ((($746)) + 12|0);
           HEAP32[$767>>2] = $748;
           HEAP32[$$pre$phi10$i$iZ2D>>2] = $746;
          } else {
           $768 = ((($718)) + 24|0);
           $769 = HEAP32[$768>>2]|0;
           $770 = ((($718)) + 12|0);
           $771 = HEAP32[$770>>2]|0;
           $772 = ($771|0)==($718|0);
           do {
            if ($772) {
             $782 = ((($718)) + 16|0);
             $783 = ((($782)) + 4|0);
             $784 = HEAP32[$783>>2]|0;
             $785 = ($784|0)==(0|0);
             if ($785) {
              $786 = HEAP32[$782>>2]|0;
              $787 = ($786|0)==(0|0);
              if ($787) {
               $R$3$i$i = 0;
               break;
              } else {
               $R$1$i$i = $786;$RP$1$i$i = $782;
              }
             } else {
              $R$1$i$i = $784;$RP$1$i$i = $783;
             }
             while(1) {
              $788 = ((($R$1$i$i)) + 20|0);
              $789 = HEAP32[$788>>2]|0;
              $790 = ($789|0)==(0|0);
              if (!($790)) {
               $R$1$i$i = $789;$RP$1$i$i = $788;
               continue;
              }
              $791 = ((($R$1$i$i)) + 16|0);
              $792 = HEAP32[$791>>2]|0;
              $793 = ($792|0)==(0|0);
              if ($793) {
               $R$1$i$i$lcssa = $R$1$i$i;$RP$1$i$i$lcssa = $RP$1$i$i;
               break;
              } else {
               $R$1$i$i = $792;$RP$1$i$i = $791;
              }
             }
             $794 = ($RP$1$i$i$lcssa>>>0)<($753>>>0);
             if ($794) {
              _abort();
              // unreachable;
             } else {
              HEAP32[$RP$1$i$i$lcssa>>2] = 0;
              $R$3$i$i = $R$1$i$i$lcssa;
              break;
             }
            } else {
             $773 = ((($718)) + 8|0);
             $774 = HEAP32[$773>>2]|0;
             $775 = ($774>>>0)<($753>>>0);
             if ($775) {
              _abort();
              // unreachable;
             }
             $776 = ((($774)) + 12|0);
             $777 = HEAP32[$776>>2]|0;
             $778 = ($777|0)==($718|0);
             if (!($778)) {
              _abort();
              // unreachable;
             }
             $779 = ((($771)) + 8|0);
             $780 = HEAP32[$779>>2]|0;
             $781 = ($780|0)==($718|0);
             if ($781) {
              HEAP32[$776>>2] = $771;
              HEAP32[$779>>2] = $774;
              $R$3$i$i = $771;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $795 = ($769|0)==(0|0);
           if ($795) {
            break;
           }
           $796 = ((($718)) + 28|0);
           $797 = HEAP32[$796>>2]|0;
           $798 = (5552 + ($797<<2)|0);
           $799 = HEAP32[$798>>2]|0;
           $800 = ($718|0)==($799|0);
           do {
            if ($800) {
             HEAP32[$798>>2] = $R$3$i$i;
             $cond$i$i = ($R$3$i$i|0)==(0|0);
             if (!($cond$i$i)) {
              break;
             }
             $801 = 1 << $797;
             $802 = $801 ^ -1;
             $803 = HEAP32[(5252)>>2]|0;
             $804 = $803 & $802;
             HEAP32[(5252)>>2] = $804;
             break L328;
            } else {
             $805 = HEAP32[(5264)>>2]|0;
             $806 = ($769>>>0)<($805>>>0);
             if ($806) {
              _abort();
              // unreachable;
             }
             $807 = ((($769)) + 16|0);
             $808 = HEAP32[$807>>2]|0;
             $809 = ($808|0)==($718|0);
             if ($809) {
              HEAP32[$807>>2] = $R$3$i$i;
             } else {
              $810 = ((($769)) + 20|0);
              HEAP32[$810>>2] = $R$3$i$i;
             }
             $811 = ($R$3$i$i|0)==(0|0);
             if ($811) {
              break L328;
             }
            }
           } while(0);
           $812 = HEAP32[(5264)>>2]|0;
           $813 = ($R$3$i$i>>>0)<($812>>>0);
           if ($813) {
            _abort();
            // unreachable;
           }
           $814 = ((($R$3$i$i)) + 24|0);
           HEAP32[$814>>2] = $769;
           $815 = ((($718)) + 16|0);
           $816 = HEAP32[$815>>2]|0;
           $817 = ($816|0)==(0|0);
           do {
            if (!($817)) {
             $818 = ($816>>>0)<($812>>>0);
             if ($818) {
              _abort();
              // unreachable;
             } else {
              $819 = ((($R$3$i$i)) + 16|0);
              HEAP32[$819>>2] = $816;
              $820 = ((($816)) + 24|0);
              HEAP32[$820>>2] = $R$3$i$i;
              break;
             }
            }
           } while(0);
           $821 = ((($815)) + 4|0);
           $822 = HEAP32[$821>>2]|0;
           $823 = ($822|0)==(0|0);
           if ($823) {
            break;
           }
           $824 = HEAP32[(5264)>>2]|0;
           $825 = ($822>>>0)<($824>>>0);
           if ($825) {
            _abort();
            // unreachable;
           } else {
            $826 = ((($R$3$i$i)) + 20|0);
            HEAP32[$826>>2] = $822;
            $827 = ((($822)) + 24|0);
            HEAP32[$827>>2] = $R$3$i$i;
            break;
           }
          }
         } while(0);
         $828 = (($718) + ($742)|0);
         $829 = (($742) + ($723))|0;
         $oldfirst$0$i$i = $828;$qsize$0$i$i = $829;
        } else {
         $oldfirst$0$i$i = $718;$qsize$0$i$i = $723;
        }
        $830 = ((($oldfirst$0$i$i)) + 4|0);
        $831 = HEAP32[$830>>2]|0;
        $832 = $831 & -2;
        HEAP32[$830>>2] = $832;
        $833 = $qsize$0$i$i | 1;
        $834 = ((($722)) + 4|0);
        HEAP32[$834>>2] = $833;
        $835 = (($722) + ($qsize$0$i$i)|0);
        HEAP32[$835>>2] = $qsize$0$i$i;
        $836 = $qsize$0$i$i >>> 3;
        $837 = ($qsize$0$i$i>>>0)<(256);
        if ($837) {
         $838 = $836 << 1;
         $839 = (5288 + ($838<<2)|0);
         $840 = HEAP32[1312]|0;
         $841 = 1 << $836;
         $842 = $840 & $841;
         $843 = ($842|0)==(0);
         do {
          if ($843) {
           $844 = $840 | $841;
           HEAP32[1312] = $844;
           $$pre$i16$i = ((($839)) + 8|0);
           $$pre$phi$i17$iZ2D = $$pre$i16$i;$F4$0$i$i = $839;
          } else {
           $845 = ((($839)) + 8|0);
           $846 = HEAP32[$845>>2]|0;
           $847 = HEAP32[(5264)>>2]|0;
           $848 = ($846>>>0)<($847>>>0);
           if (!($848)) {
            $$pre$phi$i17$iZ2D = $845;$F4$0$i$i = $846;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         HEAP32[$$pre$phi$i17$iZ2D>>2] = $722;
         $849 = ((($F4$0$i$i)) + 12|0);
         HEAP32[$849>>2] = $722;
         $850 = ((($722)) + 8|0);
         HEAP32[$850>>2] = $F4$0$i$i;
         $851 = ((($722)) + 12|0);
         HEAP32[$851>>2] = $839;
         break;
        }
        $852 = $qsize$0$i$i >>> 8;
        $853 = ($852|0)==(0);
        do {
         if ($853) {
          $I7$0$i$i = 0;
         } else {
          $854 = ($qsize$0$i$i>>>0)>(16777215);
          if ($854) {
           $I7$0$i$i = 31;
           break;
          }
          $855 = (($852) + 1048320)|0;
          $856 = $855 >>> 16;
          $857 = $856 & 8;
          $858 = $852 << $857;
          $859 = (($858) + 520192)|0;
          $860 = $859 >>> 16;
          $861 = $860 & 4;
          $862 = $861 | $857;
          $863 = $858 << $861;
          $864 = (($863) + 245760)|0;
          $865 = $864 >>> 16;
          $866 = $865 & 2;
          $867 = $862 | $866;
          $868 = (14 - ($867))|0;
          $869 = $863 << $866;
          $870 = $869 >>> 15;
          $871 = (($868) + ($870))|0;
          $872 = $871 << 1;
          $873 = (($871) + 7)|0;
          $874 = $qsize$0$i$i >>> $873;
          $875 = $874 & 1;
          $876 = $875 | $872;
          $I7$0$i$i = $876;
         }
        } while(0);
        $877 = (5552 + ($I7$0$i$i<<2)|0);
        $878 = ((($722)) + 28|0);
        HEAP32[$878>>2] = $I7$0$i$i;
        $879 = ((($722)) + 16|0);
        $880 = ((($879)) + 4|0);
        HEAP32[$880>>2] = 0;
        HEAP32[$879>>2] = 0;
        $881 = HEAP32[(5252)>>2]|0;
        $882 = 1 << $I7$0$i$i;
        $883 = $881 & $882;
        $884 = ($883|0)==(0);
        if ($884) {
         $885 = $881 | $882;
         HEAP32[(5252)>>2] = $885;
         HEAP32[$877>>2] = $722;
         $886 = ((($722)) + 24|0);
         HEAP32[$886>>2] = $877;
         $887 = ((($722)) + 12|0);
         HEAP32[$887>>2] = $722;
         $888 = ((($722)) + 8|0);
         HEAP32[$888>>2] = $722;
         break;
        }
        $889 = HEAP32[$877>>2]|0;
        $890 = ($I7$0$i$i|0)==(31);
        $891 = $I7$0$i$i >>> 1;
        $892 = (25 - ($891))|0;
        $893 = $890 ? 0 : $892;
        $894 = $qsize$0$i$i << $893;
        $K8$0$i$i = $894;$T$0$i18$i = $889;
        while(1) {
         $895 = ((($T$0$i18$i)) + 4|0);
         $896 = HEAP32[$895>>2]|0;
         $897 = $896 & -8;
         $898 = ($897|0)==($qsize$0$i$i|0);
         if ($898) {
          $T$0$i18$i$lcssa = $T$0$i18$i;
          label = 279;
          break;
         }
         $899 = $K8$0$i$i >>> 31;
         $900 = (((($T$0$i18$i)) + 16|0) + ($899<<2)|0);
         $901 = $K8$0$i$i << 1;
         $902 = HEAP32[$900>>2]|0;
         $903 = ($902|0)==(0|0);
         if ($903) {
          $$lcssa = $900;$T$0$i18$i$lcssa139 = $T$0$i18$i;
          label = 276;
          break;
         } else {
          $K8$0$i$i = $901;$T$0$i18$i = $902;
         }
        }
        if ((label|0) == 276) {
         $904 = HEAP32[(5264)>>2]|0;
         $905 = ($$lcssa>>>0)<($904>>>0);
         if ($905) {
          _abort();
          // unreachable;
         } else {
          HEAP32[$$lcssa>>2] = $722;
          $906 = ((($722)) + 24|0);
          HEAP32[$906>>2] = $T$0$i18$i$lcssa139;
          $907 = ((($722)) + 12|0);
          HEAP32[$907>>2] = $722;
          $908 = ((($722)) + 8|0);
          HEAP32[$908>>2] = $722;
          break;
         }
        }
        else if ((label|0) == 279) {
         $909 = ((($T$0$i18$i$lcssa)) + 8|0);
         $910 = HEAP32[$909>>2]|0;
         $911 = HEAP32[(5264)>>2]|0;
         $912 = ($910>>>0)>=($911>>>0);
         $not$$i20$i = ($T$0$i18$i$lcssa>>>0)>=($911>>>0);
         $913 = $912 & $not$$i20$i;
         if ($913) {
          $914 = ((($910)) + 12|0);
          HEAP32[$914>>2] = $722;
          HEAP32[$909>>2] = $722;
          $915 = ((($722)) + 8|0);
          HEAP32[$915>>2] = $910;
          $916 = ((($722)) + 12|0);
          HEAP32[$916>>2] = $T$0$i18$i$lcssa;
          $917 = ((($722)) + 24|0);
          HEAP32[$917>>2] = 0;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $1048 = ((($710)) + 8|0);
      $$0 = $1048;
      STACKTOP = sp;return ($$0|0);
     } else {
      $sp$0$i$i$i = (5696);
     }
    }
    while(1) {
     $918 = HEAP32[$sp$0$i$i$i>>2]|0;
     $919 = ($918>>>0)>($631>>>0);
     if (!($919)) {
      $920 = ((($sp$0$i$i$i)) + 4|0);
      $921 = HEAP32[$920>>2]|0;
      $922 = (($918) + ($921)|0);
      $923 = ($922>>>0)>($631>>>0);
      if ($923) {
       $$lcssa142 = $922;
       break;
      }
     }
     $924 = ((($sp$0$i$i$i)) + 8|0);
     $925 = HEAP32[$924>>2]|0;
     $sp$0$i$i$i = $925;
    }
    $926 = ((($$lcssa142)) + -47|0);
    $927 = ((($926)) + 8|0);
    $928 = $927;
    $929 = $928 & 7;
    $930 = ($929|0)==(0);
    $931 = (0 - ($928))|0;
    $932 = $931 & 7;
    $933 = $930 ? 0 : $932;
    $934 = (($926) + ($933)|0);
    $935 = ((($631)) + 16|0);
    $936 = ($934>>>0)<($935>>>0);
    $937 = $936 ? $631 : $934;
    $938 = ((($937)) + 8|0);
    $939 = ((($937)) + 24|0);
    $940 = (($tsize$745$i) + -40)|0;
    $941 = ((($tbase$746$i)) + 8|0);
    $942 = $941;
    $943 = $942 & 7;
    $944 = ($943|0)==(0);
    $945 = (0 - ($942))|0;
    $946 = $945 & 7;
    $947 = $944 ? 0 : $946;
    $948 = (($tbase$746$i) + ($947)|0);
    $949 = (($940) - ($947))|0;
    HEAP32[(5272)>>2] = $948;
    HEAP32[(5260)>>2] = $949;
    $950 = $949 | 1;
    $951 = ((($948)) + 4|0);
    HEAP32[$951>>2] = $950;
    $952 = (($948) + ($949)|0);
    $953 = ((($952)) + 4|0);
    HEAP32[$953>>2] = 40;
    $954 = HEAP32[(5736)>>2]|0;
    HEAP32[(5276)>>2] = $954;
    $955 = ((($937)) + 4|0);
    HEAP32[$955>>2] = 27;
    ;HEAP32[$938>>2]=HEAP32[(5696)>>2]|0;HEAP32[$938+4>>2]=HEAP32[(5696)+4>>2]|0;HEAP32[$938+8>>2]=HEAP32[(5696)+8>>2]|0;HEAP32[$938+12>>2]=HEAP32[(5696)+12>>2]|0;
    HEAP32[(5696)>>2] = $tbase$746$i;
    HEAP32[(5700)>>2] = $tsize$745$i;
    HEAP32[(5708)>>2] = 0;
    HEAP32[(5704)>>2] = $938;
    $p$0$i$i = $939;
    while(1) {
     $956 = ((($p$0$i$i)) + 4|0);
     HEAP32[$956>>2] = 7;
     $957 = ((($956)) + 4|0);
     $958 = ($957>>>0)<($$lcssa142>>>0);
     if ($958) {
      $p$0$i$i = $956;
     } else {
      break;
     }
    }
    $959 = ($937|0)==($631|0);
    if (!($959)) {
     $960 = $937;
     $961 = $631;
     $962 = (($960) - ($961))|0;
     $963 = HEAP32[$955>>2]|0;
     $964 = $963 & -2;
     HEAP32[$955>>2] = $964;
     $965 = $962 | 1;
     $966 = ((($631)) + 4|0);
     HEAP32[$966>>2] = $965;
     HEAP32[$937>>2] = $962;
     $967 = $962 >>> 3;
     $968 = ($962>>>0)<(256);
     if ($968) {
      $969 = $967 << 1;
      $970 = (5288 + ($969<<2)|0);
      $971 = HEAP32[1312]|0;
      $972 = 1 << $967;
      $973 = $971 & $972;
      $974 = ($973|0)==(0);
      if ($974) {
       $975 = $971 | $972;
       HEAP32[1312] = $975;
       $$pre$i$i = ((($970)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $970;
      } else {
       $976 = ((($970)) + 8|0);
       $977 = HEAP32[$976>>2]|0;
       $978 = HEAP32[(5264)>>2]|0;
       $979 = ($977>>>0)<($978>>>0);
       if ($979) {
        _abort();
        // unreachable;
       } else {
        $$pre$phi$i$iZ2D = $976;$F$0$i$i = $977;
       }
      }
      HEAP32[$$pre$phi$i$iZ2D>>2] = $631;
      $980 = ((($F$0$i$i)) + 12|0);
      HEAP32[$980>>2] = $631;
      $981 = ((($631)) + 8|0);
      HEAP32[$981>>2] = $F$0$i$i;
      $982 = ((($631)) + 12|0);
      HEAP32[$982>>2] = $970;
      break;
     }
     $983 = $962 >>> 8;
     $984 = ($983|0)==(0);
     if ($984) {
      $I1$0$i$i = 0;
     } else {
      $985 = ($962>>>0)>(16777215);
      if ($985) {
       $I1$0$i$i = 31;
      } else {
       $986 = (($983) + 1048320)|0;
       $987 = $986 >>> 16;
       $988 = $987 & 8;
       $989 = $983 << $988;
       $990 = (($989) + 520192)|0;
       $991 = $990 >>> 16;
       $992 = $991 & 4;
       $993 = $992 | $988;
       $994 = $989 << $992;
       $995 = (($994) + 245760)|0;
       $996 = $995 >>> 16;
       $997 = $996 & 2;
       $998 = $993 | $997;
       $999 = (14 - ($998))|0;
       $1000 = $994 << $997;
       $1001 = $1000 >>> 15;
       $1002 = (($999) + ($1001))|0;
       $1003 = $1002 << 1;
       $1004 = (($1002) + 7)|0;
       $1005 = $962 >>> $1004;
       $1006 = $1005 & 1;
       $1007 = $1006 | $1003;
       $I1$0$i$i = $1007;
      }
     }
     $1008 = (5552 + ($I1$0$i$i<<2)|0);
     $1009 = ((($631)) + 28|0);
     HEAP32[$1009>>2] = $I1$0$i$i;
     $1010 = ((($631)) + 20|0);
     HEAP32[$1010>>2] = 0;
     HEAP32[$935>>2] = 0;
     $1011 = HEAP32[(5252)>>2]|0;
     $1012 = 1 << $I1$0$i$i;
     $1013 = $1011 & $1012;
     $1014 = ($1013|0)==(0);
     if ($1014) {
      $1015 = $1011 | $1012;
      HEAP32[(5252)>>2] = $1015;
      HEAP32[$1008>>2] = $631;
      $1016 = ((($631)) + 24|0);
      HEAP32[$1016>>2] = $1008;
      $1017 = ((($631)) + 12|0);
      HEAP32[$1017>>2] = $631;
      $1018 = ((($631)) + 8|0);
      HEAP32[$1018>>2] = $631;
      break;
     }
     $1019 = HEAP32[$1008>>2]|0;
     $1020 = ($I1$0$i$i|0)==(31);
     $1021 = $I1$0$i$i >>> 1;
     $1022 = (25 - ($1021))|0;
     $1023 = $1020 ? 0 : $1022;
     $1024 = $962 << $1023;
     $K2$0$i$i = $1024;$T$0$i$i = $1019;
     while(1) {
      $1025 = ((($T$0$i$i)) + 4|0);
      $1026 = HEAP32[$1025>>2]|0;
      $1027 = $1026 & -8;
      $1028 = ($1027|0)==($962|0);
      if ($1028) {
       $T$0$i$i$lcssa = $T$0$i$i;
       label = 305;
       break;
      }
      $1029 = $K2$0$i$i >>> 31;
      $1030 = (((($T$0$i$i)) + 16|0) + ($1029<<2)|0);
      $1031 = $K2$0$i$i << 1;
      $1032 = HEAP32[$1030>>2]|0;
      $1033 = ($1032|0)==(0|0);
      if ($1033) {
       $$lcssa141 = $1030;$T$0$i$i$lcssa140 = $T$0$i$i;
       label = 302;
       break;
      } else {
       $K2$0$i$i = $1031;$T$0$i$i = $1032;
      }
     }
     if ((label|0) == 302) {
      $1034 = HEAP32[(5264)>>2]|0;
      $1035 = ($$lcssa141>>>0)<($1034>>>0);
      if ($1035) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$$lcssa141>>2] = $631;
       $1036 = ((($631)) + 24|0);
       HEAP32[$1036>>2] = $T$0$i$i$lcssa140;
       $1037 = ((($631)) + 12|0);
       HEAP32[$1037>>2] = $631;
       $1038 = ((($631)) + 8|0);
       HEAP32[$1038>>2] = $631;
       break;
      }
     }
     else if ((label|0) == 305) {
      $1039 = ((($T$0$i$i$lcssa)) + 8|0);
      $1040 = HEAP32[$1039>>2]|0;
      $1041 = HEAP32[(5264)>>2]|0;
      $1042 = ($1040>>>0)>=($1041>>>0);
      $not$$i$i = ($T$0$i$i$lcssa>>>0)>=($1041>>>0);
      $1043 = $1042 & $not$$i$i;
      if ($1043) {
       $1044 = ((($1040)) + 12|0);
       HEAP32[$1044>>2] = $631;
       HEAP32[$1039>>2] = $631;
       $1045 = ((($631)) + 8|0);
       HEAP32[$1045>>2] = $1040;
       $1046 = ((($631)) + 12|0);
       HEAP32[$1046>>2] = $T$0$i$i$lcssa;
       $1047 = ((($631)) + 24|0);
       HEAP32[$1047>>2] = 0;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $1049 = HEAP32[(5260)>>2]|0;
  $1050 = ($1049>>>0)>($nb$0>>>0);
  if ($1050) {
   $1051 = (($1049) - ($nb$0))|0;
   HEAP32[(5260)>>2] = $1051;
   $1052 = HEAP32[(5272)>>2]|0;
   $1053 = (($1052) + ($nb$0)|0);
   HEAP32[(5272)>>2] = $1053;
   $1054 = $1051 | 1;
   $1055 = ((($1053)) + 4|0);
   HEAP32[$1055>>2] = $1054;
   $1056 = $nb$0 | 3;
   $1057 = ((($1052)) + 4|0);
   HEAP32[$1057>>2] = $1056;
   $1058 = ((($1052)) + 8|0);
   $$0 = $1058;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $1059 = (___errno_location()|0);
 HEAP32[$1059>>2] = 12;
 $$0 = 0;
 STACKTOP = sp;return ($$0|0);
}
function _free($mem) {
 $mem = $mem|0;
 var $$lcssa = 0, $$pre = 0, $$pre$phi41Z2D = 0, $$pre$phi43Z2D = 0, $$pre$phiZ2D = 0, $$pre40 = 0, $$pre42 = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0;
 var $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0;
 var $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0;
 var $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0;
 var $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0;
 var $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0;
 var $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0;
 var $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0;
 var $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0;
 var $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0;
 var $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0;
 var $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0;
 var $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F18$0 = 0, $I20$0 = 0, $K21$0 = 0, $R$1 = 0, $R$1$lcssa = 0, $R$3 = 0, $R8$1 = 0, $R8$1$lcssa = 0, $R8$3 = 0, $RP$1 = 0, $RP$1$lcssa = 0, $RP10$1 = 0, $RP10$1$lcssa = 0;
 var $T$0 = 0, $T$0$lcssa = 0, $T$0$lcssa48 = 0, $cond20 = 0, $cond21 = 0, $not$ = 0, $p$1 = 0, $psize$1 = 0, $psize$2 = 0, $sp$0$i = 0, $sp$0$in$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($mem|0)==(0|0);
 if ($0) {
  return;
 }
 $1 = ((($mem)) + -8|0);
 $2 = HEAP32[(5264)>>2]|0;
 $3 = ($1>>>0)<($2>>>0);
 if ($3) {
  _abort();
  // unreachable;
 }
 $4 = ((($mem)) + -4|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = $5 & 3;
 $7 = ($6|0)==(1);
 if ($7) {
  _abort();
  // unreachable;
 }
 $8 = $5 & -8;
 $9 = (($1) + ($8)|0);
 $10 = $5 & 1;
 $11 = ($10|0)==(0);
 do {
  if ($11) {
   $12 = HEAP32[$1>>2]|0;
   $13 = ($6|0)==(0);
   if ($13) {
    return;
   }
   $14 = (0 - ($12))|0;
   $15 = (($1) + ($14)|0);
   $16 = (($12) + ($8))|0;
   $17 = ($15>>>0)<($2>>>0);
   if ($17) {
    _abort();
    // unreachable;
   }
   $18 = HEAP32[(5268)>>2]|0;
   $19 = ($15|0)==($18|0);
   if ($19) {
    $104 = ((($9)) + 4|0);
    $105 = HEAP32[$104>>2]|0;
    $106 = $105 & 3;
    $107 = ($106|0)==(3);
    if (!($107)) {
     $p$1 = $15;$psize$1 = $16;
     break;
    }
    HEAP32[(5256)>>2] = $16;
    $108 = $105 & -2;
    HEAP32[$104>>2] = $108;
    $109 = $16 | 1;
    $110 = ((($15)) + 4|0);
    HEAP32[$110>>2] = $109;
    $111 = (($15) + ($16)|0);
    HEAP32[$111>>2] = $16;
    return;
   }
   $20 = $12 >>> 3;
   $21 = ($12>>>0)<(256);
   if ($21) {
    $22 = ((($15)) + 8|0);
    $23 = HEAP32[$22>>2]|0;
    $24 = ((($15)) + 12|0);
    $25 = HEAP32[$24>>2]|0;
    $26 = $20 << 1;
    $27 = (5288 + ($26<<2)|0);
    $28 = ($23|0)==($27|0);
    if (!($28)) {
     $29 = ($23>>>0)<($2>>>0);
     if ($29) {
      _abort();
      // unreachable;
     }
     $30 = ((($23)) + 12|0);
     $31 = HEAP32[$30>>2]|0;
     $32 = ($31|0)==($15|0);
     if (!($32)) {
      _abort();
      // unreachable;
     }
    }
    $33 = ($25|0)==($23|0);
    if ($33) {
     $34 = 1 << $20;
     $35 = $34 ^ -1;
     $36 = HEAP32[1312]|0;
     $37 = $36 & $35;
     HEAP32[1312] = $37;
     $p$1 = $15;$psize$1 = $16;
     break;
    }
    $38 = ($25|0)==($27|0);
    if ($38) {
     $$pre42 = ((($25)) + 8|0);
     $$pre$phi43Z2D = $$pre42;
    } else {
     $39 = ($25>>>0)<($2>>>0);
     if ($39) {
      _abort();
      // unreachable;
     }
     $40 = ((($25)) + 8|0);
     $41 = HEAP32[$40>>2]|0;
     $42 = ($41|0)==($15|0);
     if ($42) {
      $$pre$phi43Z2D = $40;
     } else {
      _abort();
      // unreachable;
     }
    }
    $43 = ((($23)) + 12|0);
    HEAP32[$43>>2] = $25;
    HEAP32[$$pre$phi43Z2D>>2] = $23;
    $p$1 = $15;$psize$1 = $16;
    break;
   }
   $44 = ((($15)) + 24|0);
   $45 = HEAP32[$44>>2]|0;
   $46 = ((($15)) + 12|0);
   $47 = HEAP32[$46>>2]|0;
   $48 = ($47|0)==($15|0);
   do {
    if ($48) {
     $58 = ((($15)) + 16|0);
     $59 = ((($58)) + 4|0);
     $60 = HEAP32[$59>>2]|0;
     $61 = ($60|0)==(0|0);
     if ($61) {
      $62 = HEAP32[$58>>2]|0;
      $63 = ($62|0)==(0|0);
      if ($63) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $62;$RP$1 = $58;
      }
     } else {
      $R$1 = $60;$RP$1 = $59;
     }
     while(1) {
      $64 = ((($R$1)) + 20|0);
      $65 = HEAP32[$64>>2]|0;
      $66 = ($65|0)==(0|0);
      if (!($66)) {
       $R$1 = $65;$RP$1 = $64;
       continue;
      }
      $67 = ((($R$1)) + 16|0);
      $68 = HEAP32[$67>>2]|0;
      $69 = ($68|0)==(0|0);
      if ($69) {
       $R$1$lcssa = $R$1;$RP$1$lcssa = $RP$1;
       break;
      } else {
       $R$1 = $68;$RP$1 = $67;
      }
     }
     $70 = ($RP$1$lcssa>>>0)<($2>>>0);
     if ($70) {
      _abort();
      // unreachable;
     } else {
      HEAP32[$RP$1$lcssa>>2] = 0;
      $R$3 = $R$1$lcssa;
      break;
     }
    } else {
     $49 = ((($15)) + 8|0);
     $50 = HEAP32[$49>>2]|0;
     $51 = ($50>>>0)<($2>>>0);
     if ($51) {
      _abort();
      // unreachable;
     }
     $52 = ((($50)) + 12|0);
     $53 = HEAP32[$52>>2]|0;
     $54 = ($53|0)==($15|0);
     if (!($54)) {
      _abort();
      // unreachable;
     }
     $55 = ((($47)) + 8|0);
     $56 = HEAP32[$55>>2]|0;
     $57 = ($56|0)==($15|0);
     if ($57) {
      HEAP32[$52>>2] = $47;
      HEAP32[$55>>2] = $50;
      $R$3 = $47;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $71 = ($45|0)==(0|0);
   if ($71) {
    $p$1 = $15;$psize$1 = $16;
   } else {
    $72 = ((($15)) + 28|0);
    $73 = HEAP32[$72>>2]|0;
    $74 = (5552 + ($73<<2)|0);
    $75 = HEAP32[$74>>2]|0;
    $76 = ($15|0)==($75|0);
    if ($76) {
     HEAP32[$74>>2] = $R$3;
     $cond20 = ($R$3|0)==(0|0);
     if ($cond20) {
      $77 = 1 << $73;
      $78 = $77 ^ -1;
      $79 = HEAP32[(5252)>>2]|0;
      $80 = $79 & $78;
      HEAP32[(5252)>>2] = $80;
      $p$1 = $15;$psize$1 = $16;
      break;
     }
    } else {
     $81 = HEAP32[(5264)>>2]|0;
     $82 = ($45>>>0)<($81>>>0);
     if ($82) {
      _abort();
      // unreachable;
     }
     $83 = ((($45)) + 16|0);
     $84 = HEAP32[$83>>2]|0;
     $85 = ($84|0)==($15|0);
     if ($85) {
      HEAP32[$83>>2] = $R$3;
     } else {
      $86 = ((($45)) + 20|0);
      HEAP32[$86>>2] = $R$3;
     }
     $87 = ($R$3|0)==(0|0);
     if ($87) {
      $p$1 = $15;$psize$1 = $16;
      break;
     }
    }
    $88 = HEAP32[(5264)>>2]|0;
    $89 = ($R$3>>>0)<($88>>>0);
    if ($89) {
     _abort();
     // unreachable;
    }
    $90 = ((($R$3)) + 24|0);
    HEAP32[$90>>2] = $45;
    $91 = ((($15)) + 16|0);
    $92 = HEAP32[$91>>2]|0;
    $93 = ($92|0)==(0|0);
    do {
     if (!($93)) {
      $94 = ($92>>>0)<($88>>>0);
      if ($94) {
       _abort();
       // unreachable;
      } else {
       $95 = ((($R$3)) + 16|0);
       HEAP32[$95>>2] = $92;
       $96 = ((($92)) + 24|0);
       HEAP32[$96>>2] = $R$3;
       break;
      }
     }
    } while(0);
    $97 = ((($91)) + 4|0);
    $98 = HEAP32[$97>>2]|0;
    $99 = ($98|0)==(0|0);
    if ($99) {
     $p$1 = $15;$psize$1 = $16;
    } else {
     $100 = HEAP32[(5264)>>2]|0;
     $101 = ($98>>>0)<($100>>>0);
     if ($101) {
      _abort();
      // unreachable;
     } else {
      $102 = ((($R$3)) + 20|0);
      HEAP32[$102>>2] = $98;
      $103 = ((($98)) + 24|0);
      HEAP32[$103>>2] = $R$3;
      $p$1 = $15;$psize$1 = $16;
      break;
     }
    }
   }
  } else {
   $p$1 = $1;$psize$1 = $8;
  }
 } while(0);
 $112 = ($p$1>>>0)<($9>>>0);
 if (!($112)) {
  _abort();
  // unreachable;
 }
 $113 = ((($9)) + 4|0);
 $114 = HEAP32[$113>>2]|0;
 $115 = $114 & 1;
 $116 = ($115|0)==(0);
 if ($116) {
  _abort();
  // unreachable;
 }
 $117 = $114 & 2;
 $118 = ($117|0)==(0);
 if ($118) {
  $119 = HEAP32[(5272)>>2]|0;
  $120 = ($9|0)==($119|0);
  if ($120) {
   $121 = HEAP32[(5260)>>2]|0;
   $122 = (($121) + ($psize$1))|0;
   HEAP32[(5260)>>2] = $122;
   HEAP32[(5272)>>2] = $p$1;
   $123 = $122 | 1;
   $124 = ((($p$1)) + 4|0);
   HEAP32[$124>>2] = $123;
   $125 = HEAP32[(5268)>>2]|0;
   $126 = ($p$1|0)==($125|0);
   if (!($126)) {
    return;
   }
   HEAP32[(5268)>>2] = 0;
   HEAP32[(5256)>>2] = 0;
   return;
  }
  $127 = HEAP32[(5268)>>2]|0;
  $128 = ($9|0)==($127|0);
  if ($128) {
   $129 = HEAP32[(5256)>>2]|0;
   $130 = (($129) + ($psize$1))|0;
   HEAP32[(5256)>>2] = $130;
   HEAP32[(5268)>>2] = $p$1;
   $131 = $130 | 1;
   $132 = ((($p$1)) + 4|0);
   HEAP32[$132>>2] = $131;
   $133 = (($p$1) + ($130)|0);
   HEAP32[$133>>2] = $130;
   return;
  }
  $134 = $114 & -8;
  $135 = (($134) + ($psize$1))|0;
  $136 = $114 >>> 3;
  $137 = ($114>>>0)<(256);
  do {
   if ($137) {
    $138 = ((($9)) + 8|0);
    $139 = HEAP32[$138>>2]|0;
    $140 = ((($9)) + 12|0);
    $141 = HEAP32[$140>>2]|0;
    $142 = $136 << 1;
    $143 = (5288 + ($142<<2)|0);
    $144 = ($139|0)==($143|0);
    if (!($144)) {
     $145 = HEAP32[(5264)>>2]|0;
     $146 = ($139>>>0)<($145>>>0);
     if ($146) {
      _abort();
      // unreachable;
     }
     $147 = ((($139)) + 12|0);
     $148 = HEAP32[$147>>2]|0;
     $149 = ($148|0)==($9|0);
     if (!($149)) {
      _abort();
      // unreachable;
     }
    }
    $150 = ($141|0)==($139|0);
    if ($150) {
     $151 = 1 << $136;
     $152 = $151 ^ -1;
     $153 = HEAP32[1312]|0;
     $154 = $153 & $152;
     HEAP32[1312] = $154;
     break;
    }
    $155 = ($141|0)==($143|0);
    if ($155) {
     $$pre40 = ((($141)) + 8|0);
     $$pre$phi41Z2D = $$pre40;
    } else {
     $156 = HEAP32[(5264)>>2]|0;
     $157 = ($141>>>0)<($156>>>0);
     if ($157) {
      _abort();
      // unreachable;
     }
     $158 = ((($141)) + 8|0);
     $159 = HEAP32[$158>>2]|0;
     $160 = ($159|0)==($9|0);
     if ($160) {
      $$pre$phi41Z2D = $158;
     } else {
      _abort();
      // unreachable;
     }
    }
    $161 = ((($139)) + 12|0);
    HEAP32[$161>>2] = $141;
    HEAP32[$$pre$phi41Z2D>>2] = $139;
   } else {
    $162 = ((($9)) + 24|0);
    $163 = HEAP32[$162>>2]|0;
    $164 = ((($9)) + 12|0);
    $165 = HEAP32[$164>>2]|0;
    $166 = ($165|0)==($9|0);
    do {
     if ($166) {
      $177 = ((($9)) + 16|0);
      $178 = ((($177)) + 4|0);
      $179 = HEAP32[$178>>2]|0;
      $180 = ($179|0)==(0|0);
      if ($180) {
       $181 = HEAP32[$177>>2]|0;
       $182 = ($181|0)==(0|0);
       if ($182) {
        $R8$3 = 0;
        break;
       } else {
        $R8$1 = $181;$RP10$1 = $177;
       }
      } else {
       $R8$1 = $179;$RP10$1 = $178;
      }
      while(1) {
       $183 = ((($R8$1)) + 20|0);
       $184 = HEAP32[$183>>2]|0;
       $185 = ($184|0)==(0|0);
       if (!($185)) {
        $R8$1 = $184;$RP10$1 = $183;
        continue;
       }
       $186 = ((($R8$1)) + 16|0);
       $187 = HEAP32[$186>>2]|0;
       $188 = ($187|0)==(0|0);
       if ($188) {
        $R8$1$lcssa = $R8$1;$RP10$1$lcssa = $RP10$1;
        break;
       } else {
        $R8$1 = $187;$RP10$1 = $186;
       }
      }
      $189 = HEAP32[(5264)>>2]|0;
      $190 = ($RP10$1$lcssa>>>0)<($189>>>0);
      if ($190) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$RP10$1$lcssa>>2] = 0;
       $R8$3 = $R8$1$lcssa;
       break;
      }
     } else {
      $167 = ((($9)) + 8|0);
      $168 = HEAP32[$167>>2]|0;
      $169 = HEAP32[(5264)>>2]|0;
      $170 = ($168>>>0)<($169>>>0);
      if ($170) {
       _abort();
       // unreachable;
      }
      $171 = ((($168)) + 12|0);
      $172 = HEAP32[$171>>2]|0;
      $173 = ($172|0)==($9|0);
      if (!($173)) {
       _abort();
       // unreachable;
      }
      $174 = ((($165)) + 8|0);
      $175 = HEAP32[$174>>2]|0;
      $176 = ($175|0)==($9|0);
      if ($176) {
       HEAP32[$171>>2] = $165;
       HEAP32[$174>>2] = $168;
       $R8$3 = $165;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $191 = ($163|0)==(0|0);
    if (!($191)) {
     $192 = ((($9)) + 28|0);
     $193 = HEAP32[$192>>2]|0;
     $194 = (5552 + ($193<<2)|0);
     $195 = HEAP32[$194>>2]|0;
     $196 = ($9|0)==($195|0);
     if ($196) {
      HEAP32[$194>>2] = $R8$3;
      $cond21 = ($R8$3|0)==(0|0);
      if ($cond21) {
       $197 = 1 << $193;
       $198 = $197 ^ -1;
       $199 = HEAP32[(5252)>>2]|0;
       $200 = $199 & $198;
       HEAP32[(5252)>>2] = $200;
       break;
      }
     } else {
      $201 = HEAP32[(5264)>>2]|0;
      $202 = ($163>>>0)<($201>>>0);
      if ($202) {
       _abort();
       // unreachable;
      }
      $203 = ((($163)) + 16|0);
      $204 = HEAP32[$203>>2]|0;
      $205 = ($204|0)==($9|0);
      if ($205) {
       HEAP32[$203>>2] = $R8$3;
      } else {
       $206 = ((($163)) + 20|0);
       HEAP32[$206>>2] = $R8$3;
      }
      $207 = ($R8$3|0)==(0|0);
      if ($207) {
       break;
      }
     }
     $208 = HEAP32[(5264)>>2]|0;
     $209 = ($R8$3>>>0)<($208>>>0);
     if ($209) {
      _abort();
      // unreachable;
     }
     $210 = ((($R8$3)) + 24|0);
     HEAP32[$210>>2] = $163;
     $211 = ((($9)) + 16|0);
     $212 = HEAP32[$211>>2]|0;
     $213 = ($212|0)==(0|0);
     do {
      if (!($213)) {
       $214 = ($212>>>0)<($208>>>0);
       if ($214) {
        _abort();
        // unreachable;
       } else {
        $215 = ((($R8$3)) + 16|0);
        HEAP32[$215>>2] = $212;
        $216 = ((($212)) + 24|0);
        HEAP32[$216>>2] = $R8$3;
        break;
       }
      }
     } while(0);
     $217 = ((($211)) + 4|0);
     $218 = HEAP32[$217>>2]|0;
     $219 = ($218|0)==(0|0);
     if (!($219)) {
      $220 = HEAP32[(5264)>>2]|0;
      $221 = ($218>>>0)<($220>>>0);
      if ($221) {
       _abort();
       // unreachable;
      } else {
       $222 = ((($R8$3)) + 20|0);
       HEAP32[$222>>2] = $218;
       $223 = ((($218)) + 24|0);
       HEAP32[$223>>2] = $R8$3;
       break;
      }
     }
    }
   }
  } while(0);
  $224 = $135 | 1;
  $225 = ((($p$1)) + 4|0);
  HEAP32[$225>>2] = $224;
  $226 = (($p$1) + ($135)|0);
  HEAP32[$226>>2] = $135;
  $227 = HEAP32[(5268)>>2]|0;
  $228 = ($p$1|0)==($227|0);
  if ($228) {
   HEAP32[(5256)>>2] = $135;
   return;
  } else {
   $psize$2 = $135;
  }
 } else {
  $229 = $114 & -2;
  HEAP32[$113>>2] = $229;
  $230 = $psize$1 | 1;
  $231 = ((($p$1)) + 4|0);
  HEAP32[$231>>2] = $230;
  $232 = (($p$1) + ($psize$1)|0);
  HEAP32[$232>>2] = $psize$1;
  $psize$2 = $psize$1;
 }
 $233 = $psize$2 >>> 3;
 $234 = ($psize$2>>>0)<(256);
 if ($234) {
  $235 = $233 << 1;
  $236 = (5288 + ($235<<2)|0);
  $237 = HEAP32[1312]|0;
  $238 = 1 << $233;
  $239 = $237 & $238;
  $240 = ($239|0)==(0);
  if ($240) {
   $241 = $237 | $238;
   HEAP32[1312] = $241;
   $$pre = ((($236)) + 8|0);
   $$pre$phiZ2D = $$pre;$F18$0 = $236;
  } else {
   $242 = ((($236)) + 8|0);
   $243 = HEAP32[$242>>2]|0;
   $244 = HEAP32[(5264)>>2]|0;
   $245 = ($243>>>0)<($244>>>0);
   if ($245) {
    _abort();
    // unreachable;
   } else {
    $$pre$phiZ2D = $242;$F18$0 = $243;
   }
  }
  HEAP32[$$pre$phiZ2D>>2] = $p$1;
  $246 = ((($F18$0)) + 12|0);
  HEAP32[$246>>2] = $p$1;
  $247 = ((($p$1)) + 8|0);
  HEAP32[$247>>2] = $F18$0;
  $248 = ((($p$1)) + 12|0);
  HEAP32[$248>>2] = $236;
  return;
 }
 $249 = $psize$2 >>> 8;
 $250 = ($249|0)==(0);
 if ($250) {
  $I20$0 = 0;
 } else {
  $251 = ($psize$2>>>0)>(16777215);
  if ($251) {
   $I20$0 = 31;
  } else {
   $252 = (($249) + 1048320)|0;
   $253 = $252 >>> 16;
   $254 = $253 & 8;
   $255 = $249 << $254;
   $256 = (($255) + 520192)|0;
   $257 = $256 >>> 16;
   $258 = $257 & 4;
   $259 = $258 | $254;
   $260 = $255 << $258;
   $261 = (($260) + 245760)|0;
   $262 = $261 >>> 16;
   $263 = $262 & 2;
   $264 = $259 | $263;
   $265 = (14 - ($264))|0;
   $266 = $260 << $263;
   $267 = $266 >>> 15;
   $268 = (($265) + ($267))|0;
   $269 = $268 << 1;
   $270 = (($268) + 7)|0;
   $271 = $psize$2 >>> $270;
   $272 = $271 & 1;
   $273 = $272 | $269;
   $I20$0 = $273;
  }
 }
 $274 = (5552 + ($I20$0<<2)|0);
 $275 = ((($p$1)) + 28|0);
 HEAP32[$275>>2] = $I20$0;
 $276 = ((($p$1)) + 16|0);
 $277 = ((($p$1)) + 20|0);
 HEAP32[$277>>2] = 0;
 HEAP32[$276>>2] = 0;
 $278 = HEAP32[(5252)>>2]|0;
 $279 = 1 << $I20$0;
 $280 = $278 & $279;
 $281 = ($280|0)==(0);
 do {
  if ($281) {
   $282 = $278 | $279;
   HEAP32[(5252)>>2] = $282;
   HEAP32[$274>>2] = $p$1;
   $283 = ((($p$1)) + 24|0);
   HEAP32[$283>>2] = $274;
   $284 = ((($p$1)) + 12|0);
   HEAP32[$284>>2] = $p$1;
   $285 = ((($p$1)) + 8|0);
   HEAP32[$285>>2] = $p$1;
  } else {
   $286 = HEAP32[$274>>2]|0;
   $287 = ($I20$0|0)==(31);
   $288 = $I20$0 >>> 1;
   $289 = (25 - ($288))|0;
   $290 = $287 ? 0 : $289;
   $291 = $psize$2 << $290;
   $K21$0 = $291;$T$0 = $286;
   while(1) {
    $292 = ((($T$0)) + 4|0);
    $293 = HEAP32[$292>>2]|0;
    $294 = $293 & -8;
    $295 = ($294|0)==($psize$2|0);
    if ($295) {
     $T$0$lcssa = $T$0;
     label = 130;
     break;
    }
    $296 = $K21$0 >>> 31;
    $297 = (((($T$0)) + 16|0) + ($296<<2)|0);
    $298 = $K21$0 << 1;
    $299 = HEAP32[$297>>2]|0;
    $300 = ($299|0)==(0|0);
    if ($300) {
     $$lcssa = $297;$T$0$lcssa48 = $T$0;
     label = 127;
     break;
    } else {
     $K21$0 = $298;$T$0 = $299;
    }
   }
   if ((label|0) == 127) {
    $301 = HEAP32[(5264)>>2]|0;
    $302 = ($$lcssa>>>0)<($301>>>0);
    if ($302) {
     _abort();
     // unreachable;
    } else {
     HEAP32[$$lcssa>>2] = $p$1;
     $303 = ((($p$1)) + 24|0);
     HEAP32[$303>>2] = $T$0$lcssa48;
     $304 = ((($p$1)) + 12|0);
     HEAP32[$304>>2] = $p$1;
     $305 = ((($p$1)) + 8|0);
     HEAP32[$305>>2] = $p$1;
     break;
    }
   }
   else if ((label|0) == 130) {
    $306 = ((($T$0$lcssa)) + 8|0);
    $307 = HEAP32[$306>>2]|0;
    $308 = HEAP32[(5264)>>2]|0;
    $309 = ($307>>>0)>=($308>>>0);
    $not$ = ($T$0$lcssa>>>0)>=($308>>>0);
    $310 = $309 & $not$;
    if ($310) {
     $311 = ((($307)) + 12|0);
     HEAP32[$311>>2] = $p$1;
     HEAP32[$306>>2] = $p$1;
     $312 = ((($p$1)) + 8|0);
     HEAP32[$312>>2] = $307;
     $313 = ((($p$1)) + 12|0);
     HEAP32[$313>>2] = $T$0$lcssa;
     $314 = ((($p$1)) + 24|0);
     HEAP32[$314>>2] = 0;
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $315 = HEAP32[(5280)>>2]|0;
 $316 = (($315) + -1)|0;
 HEAP32[(5280)>>2] = $316;
 $317 = ($316|0)==(0);
 if ($317) {
  $sp$0$in$i = (5704);
 } else {
  return;
 }
 while(1) {
  $sp$0$i = HEAP32[$sp$0$in$i>>2]|0;
  $318 = ($sp$0$i|0)==(0|0);
  $319 = ((($sp$0$i)) + 8|0);
  if ($318) {
   break;
  } else {
   $sp$0$in$i = $319;
  }
 }
 HEAP32[(5280)>>2] = -1;
 return;
}
function _cos($x) {
 $x = +$x;
 var $$0 = 0.0, $0 = 0, $1 = 0, $10 = 0.0, $11 = 0, $12 = 0.0, $13 = 0.0, $14 = 0.0, $15 = 0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $19 = 0.0, $2 = 0, $20 = 0, $21 = 0.0, $22 = 0.0, $23 = 0.0, $24 = 0.0, $25 = 0;
 var $26 = 0.0, $27 = 0.0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0, $7 = 0.0, $8 = 0, $9 = 0, $y = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $y = sp;
 HEAPF64[tempDoublePtr>>3] = $x;$0 = HEAP32[tempDoublePtr>>2]|0;
 $1 = HEAP32[tempDoublePtr+4>>2]|0;
 $2 = $1 & 2147483647;
 $3 = ($2>>>0)<(1072243196);
 L1: do {
  if ($3) {
   $4 = ($2>>>0)<(1044816030);
   if ($4) {
    $$0 = 1.0;
   } else {
    $5 = (+___cos($x,0.0));
    $$0 = $5;
   }
  } else {
   $6 = ($2>>>0)>(2146435071);
   if ($6) {
    $7 = $x - $x;
    $$0 = $7;
    break;
   }
   $8 = (___rem_pio2($x,$y)|0);
   $9 = $8 & 3;
   switch ($9|0) {
   case 0:  {
    $10 = +HEAPF64[$y>>3];
    $11 = ((($y)) + 8|0);
    $12 = +HEAPF64[$11>>3];
    $13 = (+___cos($10,$12));
    $$0 = $13;
    break L1;
    break;
   }
   case 1:  {
    $14 = +HEAPF64[$y>>3];
    $15 = ((($y)) + 8|0);
    $16 = +HEAPF64[$15>>3];
    $17 = (+___sin($14,$16,1));
    $18 = -$17;
    $$0 = $18;
    break L1;
    break;
   }
   case 2:  {
    $19 = +HEAPF64[$y>>3];
    $20 = ((($y)) + 8|0);
    $21 = +HEAPF64[$20>>3];
    $22 = (+___cos($19,$21));
    $23 = -$22;
    $$0 = $23;
    break L1;
    break;
   }
   default: {
    $24 = +HEAPF64[$y>>3];
    $25 = ((($y)) + 8|0);
    $26 = +HEAPF64[$25>>3];
    $27 = (+___sin($24,$26,1));
    $$0 = $27;
    break L1;
   }
   }
  }
 } while(0);
 STACKTOP = sp;return (+$$0);
}
function _sin($x) {
 $x = +$x;
 var $$0 = 0.0, $0 = 0, $1 = 0, $10 = 0.0, $11 = 0, $12 = 0.0, $13 = 0.0, $14 = 0.0, $15 = 0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $19 = 0, $2 = 0, $20 = 0.0, $21 = 0.0, $22 = 0.0, $23 = 0.0, $24 = 0, $25 = 0.0;
 var $26 = 0.0, $27 = 0.0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0, $7 = 0.0, $8 = 0, $9 = 0, $y = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $y = sp;
 HEAPF64[tempDoublePtr>>3] = $x;$0 = HEAP32[tempDoublePtr>>2]|0;
 $1 = HEAP32[tempDoublePtr+4>>2]|0;
 $2 = $1 & 2147483647;
 $3 = ($2>>>0)<(1072243196);
 L1: do {
  if ($3) {
   $4 = ($2>>>0)<(1045430272);
   if ($4) {
    $$0 = $x;
   } else {
    $5 = (+___sin($x,0.0,0));
    $$0 = $5;
   }
  } else {
   $6 = ($2>>>0)>(2146435071);
   if ($6) {
    $7 = $x - $x;
    $$0 = $7;
    break;
   }
   $8 = (___rem_pio2($x,$y)|0);
   $9 = $8 & 3;
   switch ($9|0) {
   case 0:  {
    $10 = +HEAPF64[$y>>3];
    $11 = ((($y)) + 8|0);
    $12 = +HEAPF64[$11>>3];
    $13 = (+___sin($10,$12,1));
    $$0 = $13;
    break L1;
    break;
   }
   case 1:  {
    $14 = +HEAPF64[$y>>3];
    $15 = ((($y)) + 8|0);
    $16 = +HEAPF64[$15>>3];
    $17 = (+___cos($14,$16));
    $$0 = $17;
    break L1;
    break;
   }
   case 2:  {
    $18 = +HEAPF64[$y>>3];
    $19 = ((($y)) + 8|0);
    $20 = +HEAPF64[$19>>3];
    $21 = (+___sin($18,$20,1));
    $22 = -$21;
    $$0 = $22;
    break L1;
    break;
   }
   default: {
    $23 = +HEAPF64[$y>>3];
    $24 = ((($y)) + 8|0);
    $25 = +HEAPF64[$24>>3];
    $26 = (+___cos($23,$25));
    $27 = -$26;
    $$0 = $27;
    break L1;
   }
   }
  }
 } while(0);
 STACKTOP = sp;return (+$$0);
}
function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (___cxa_allocate_exception(8)|0);
 __THREW__ = 0;
 invoke_vii(47,($0|0),(4483|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  ___cxa_free_exception(($0|0));
  ___resumeException($3|0);
  // unreachable;
 } else {
  HEAP32[$0>>2] = (1964);
  ___cxa_throw(($0|0),(1232|0),(23|0));
  // unreachable;
 }
}
function __Znwj($size) {
 $size = $size|0;
 var $$lcssa = 0, $$size = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($size|0)==(0);
 $$size = $0 ? 1 : $size;
 while(1) {
  $1 = (_malloc($$size)|0);
  $2 = ($1|0)==(0|0);
  if (!($2)) {
   $$lcssa = $1;
   label = 6;
   break;
  }
  $3 = (__ZSt15get_new_handlerv()|0);
  $4 = ($3|0)==(0|0);
  if ($4) {
   label = 5;
   break;
  }
  FUNCTION_TABLE_v[$3 & 63]();
 }
 if ((label|0) == 5) {
  $5 = (___cxa_allocate_exception(4)|0);
  __ZNSt9bad_allocC2Ev($5);
  ___cxa_throw(($5|0),(1200|0),(20|0));
  // unreachable;
 }
 else if ((label|0) == 6) {
  return ($$lcssa|0);
 }
 return (0)|0;
}
function __ZdlPv($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($ptr);
 return;
}
function __ZNSt3__218__libcpp_refstringC2EPKc($this,$msg) {
 $this = $this|0;
 $msg = $msg|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_strlen($msg)|0);
 $1 = (($0) + 13)|0;
 $2 = (__Znwj($1)|0);
 HEAP32[$2>>2] = $0;
 $3 = ((($2)) + 4|0);
 HEAP32[$3>>2] = $0;
 $4 = ((($2)) + 8|0);
 HEAP32[$4>>2] = 0;
 $5 = ((($2)) + 12|0);
 $6 = (($0) + 1)|0;
 _memcpy(($5|0),($msg|0),($6|0))|0;
 HEAP32[$this>>2] = $5;
 return;
}
function __ZNSt11logic_errorC2EPKc($this,$msg) {
 $this = $this|0;
 $msg = $msg|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAP32[$this>>2] = (1944);
 $0 = ((($this)) + 4|0);
 __THREW__ = 0;
 invoke_vii(48,($0|0),($msg|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  ___resumeException($3|0);
  // unreachable;
 } else {
  return;
 }
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (___cxa_allocate_exception(8)|0);
 __THREW__ = 0;
 invoke_vii(47,($0|0),(4490|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  ___cxa_free_exception(($0|0));
  ___resumeException($3|0);
  // unreachable;
 } else {
  HEAP32[$0>>2] = (1964);
  ___cxa_throw(($0|0),(1232|0),(23|0));
  // unreachable;
 }
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_($this,$__str) {
 $this = $this|0;
 $__str = $__str|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 ;HEAP32[$this>>2]=0|0;HEAP32[$this+4>>2]=0|0;HEAP32[$this+8>>2]=0|0;
 $0 = ((($__str)) + 11|0);
 $1 = HEAP8[$0>>0]|0;
 $2 = ($1<<24>>24)<(0);
 if ($2) {
  $3 = HEAP32[$__str>>2]|0;
  $4 = ((($__str)) + 4|0);
  $5 = HEAP32[$4>>2]|0;
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($this,$3,$5);
 } else {
  ;HEAP32[$this>>2]=HEAP32[$__str>>2]|0;HEAP32[$this+4>>2]=HEAP32[$__str+4>>2]|0;HEAP32[$this+8>>2]=HEAP32[$__str+8>>2]|0;
 }
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($this,$__s,$__sz) {
 $this = $this|0;
 $__s = $__s|0;
 $__sz = $__sz|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__p$01 = 0, $__p$02 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($__sz>>>0)>(4294967279);
 if ($0) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($this);
  // unreachable;
 }
 $1 = ($__sz>>>0)<(11);
 if ($1) {
  $8 = $__sz&255;
  $9 = ((($this)) + 11|0);
  HEAP8[$9>>0] = $8;
  $10 = ($__sz|0)==(0);
  if ($10) {
   $__p$02 = $this;
  } else {
   $__p$01 = $this;
   label = 6;
  }
 } else {
  $2 = (($__sz) + 16)|0;
  $3 = $2 & -16;
  $4 = (__Znwj($3)|0);
  HEAP32[$this>>2] = $4;
  $5 = $3 | -2147483648;
  $6 = ((($this)) + 8|0);
  HEAP32[$6>>2] = $5;
  $7 = ((($this)) + 4|0);
  HEAP32[$7>>2] = $__sz;
  $__p$01 = $4;
  label = 6;
 }
 if ((label|0) == 6) {
  _memcpy(($__p$01|0),($__s|0),($__sz|0))|0;
  $__p$02 = $__p$01;
 }
 $11 = (($__p$02) + ($__sz)|0);
 HEAP8[$11>>0] = 0;
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 11|0);
 $1 = HEAP8[$0>>0]|0;
 $2 = ($1<<24>>24)<(0);
 if ($2) {
  $3 = HEAP32[$this>>2]|0;
  __ZdlPv($3);
 }
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj($this,$__s,$__n) {
 $this = $this|0;
 $__s = $__s|0;
 $__n = $__n|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $phitmp$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 11|0);
 $1 = HEAP8[$0>>0]|0;
 $2 = ($1<<24>>24)<(0);
 if ($2) {
  $3 = ((($this)) + 8|0);
  $4 = HEAP32[$3>>2]|0;
  $5 = $4 & 2147483647;
  $phitmp$i = (($5) + -1)|0;
  $7 = $phitmp$i;
 } else {
  $7 = 10;
 }
 $6 = ($7>>>0)<($__n>>>0);
 do {
  if ($6) {
   if ($2) {
    $16 = ((($this)) + 4|0);
    $17 = HEAP32[$16>>2]|0;
    $20 = $17;
   } else {
    $18 = $1&255;
    $20 = $18;
   }
   $19 = (($__n) - ($7))|0;
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc($this,$7,$19,$20,0,$20,$__n,$__s);
  } else {
   if ($2) {
    $8 = HEAP32[$this>>2]|0;
    $10 = $8;
   } else {
    $10 = $this;
   }
   $9 = ($__n|0)==(0);
   if (!($9)) {
    _memmove(($10|0),($__s|0),($__n|0))|0;
   }
   $11 = (($10) + ($__n)|0);
   HEAP8[$11>>0] = 0;
   $12 = HEAP8[$0>>0]|0;
   $13 = ($12<<24>>24)<(0);
   if ($13) {
    $14 = ((($this)) + 4|0);
    HEAP32[$14>>2] = $__n;
    break;
   } else {
    $15 = $__n&255;
    HEAP8[$0>>0] = $15;
    break;
   }
  }
 } while(0);
 return ($this|0);
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc($this,$__old_cap,$__delta_cap,$__old_sz,$__n_copy,$__n_del,$__n_add,$__p_new_stuff) {
 $this = $this|0;
 $__old_cap = $__old_cap|0;
 $__delta_cap = $__delta_cap|0;
 $__old_sz = $__old_sz|0;
 $__n_copy = $__n_copy|0;
 $__n_del = $__n_del|0;
 $__n_add = $__n_add|0;
 $__p_new_stuff = $__p_new_stuff|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (-18 - ($__old_cap))|0;
 $1 = ($0>>>0)<($__delta_cap>>>0);
 if ($1) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($this);
  // unreachable;
 }
 $2 = ((($this)) + 11|0);
 $3 = HEAP8[$2>>0]|0;
 $4 = ($3<<24>>24)<(0);
 if ($4) {
  $5 = HEAP32[$this>>2]|0;
  $18 = $5;
 } else {
  $18 = $this;
 }
 $6 = ($__old_cap>>>0)<(2147483623);
 if ($6) {
  $7 = (($__delta_cap) + ($__old_cap))|0;
  $8 = $__old_cap << 1;
  $9 = ($7>>>0)<($8>>>0);
  $10 = $9 ? $8 : $7;
  $11 = ($10>>>0)<(11);
  $12 = (($10) + 16)|0;
  $13 = $12 & -16;
  $14 = $11 ? 11 : $13;
  $15 = $14;
 } else {
  $15 = -17;
 }
 $16 = (__Znwj($15)|0);
 $17 = ($__n_copy|0)==(0);
 if (!($17)) {
  _memcpy(($16|0),($18|0),($__n_copy|0))|0;
 }
 $19 = ($__n_add|0)==(0);
 if (!($19)) {
  $20 = (($16) + ($__n_copy)|0);
  _memcpy(($20|0),($__p_new_stuff|0),($__n_add|0))|0;
 }
 $21 = (($__old_sz) - ($__n_del))|0;
 $22 = ($21|0)==($__n_copy|0);
 if (!($22)) {
  $23 = (($21) - ($__n_copy))|0;
  $24 = (($18) + ($__n_copy)|0);
  $25 = (($24) + ($__n_del)|0);
  $26 = (($16) + ($__n_copy)|0);
  $27 = (($26) + ($__n_add)|0);
  _memcpy(($27|0),($25|0),($23|0))|0;
 }
 $28 = ($__old_cap|0)==(10);
 if (!($28)) {
  __ZdlPv($18);
 }
 HEAP32[$this>>2] = $16;
 $29 = $15 | -2147483648;
 $30 = ((($this)) + 8|0);
 HEAP32[$30>>2] = $29;
 $31 = (($21) + ($__n_add))|0;
 $32 = ((($this)) + 4|0);
 HEAP32[$32>>2] = $31;
 $33 = (($16) + ($31)|0);
 HEAP8[$33>>0] = 0;
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc($this,$__s) {
 $this = $this|0;
 $__s = $__s|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (_strlen($__s)|0);
 $1 = (__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj($this,$__s,$0)|0);
 return ($1|0);
}
function __ZL25default_terminate_handlerv() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $thrown_object = 0, $vararg_buffer = 0, $vararg_buffer10 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0;
 var $vararg_ptr2 = 0, $vararg_ptr6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer10 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $thrown_object = sp + 36|0;
 $0 = (___cxa_get_globals_fast()|0);
 $1 = ($0|0)==(0|0);
 if (!($1)) {
  $2 = HEAP32[$0>>2]|0;
  $3 = ($2|0)==(0|0);
  if (!($3)) {
   $4 = ((($2)) + 80|0);
   $5 = ((($2)) + 48|0);
   $6 = $5;
   $7 = $6;
   $8 = HEAP32[$7>>2]|0;
   $9 = (($6) + 4)|0;
   $10 = $9;
   $11 = HEAP32[$10>>2]|0;
   $12 = $8 & -256;
   $13 = ($12|0)==(1126902528);
   $14 = ($11|0)==(1129074247);
   $15 = $13 & $14;
   if (!($15)) {
    HEAP32[$vararg_buffer7>>2] = 4785;
    _abort_message(4880,$vararg_buffer7);
    // unreachable;
   }
   $16 = ($8|0)==(1126902529);
   $17 = ($11|0)==(1129074247);
   $18 = $16 & $17;
   if ($18) {
    $19 = ((($2)) + 44|0);
    $20 = HEAP32[$19>>2]|0;
    $21 = $20;
   } else {
    $21 = $4;
   }
   HEAP32[$thrown_object>>2] = $21;
   $22 = HEAP32[$2>>2]|0;
   $23 = ((($22)) + 4|0);
   $24 = HEAP32[$23>>2]|0;
   $25 = HEAP32[284]|0;
   $26 = ((($25)) + 16|0);
   $27 = HEAP32[$26>>2]|0;
   $28 = (FUNCTION_TABLE_iiii[$27 & 15](1136,$22,$thrown_object)|0);
   if ($28) {
    $29 = HEAP32[$thrown_object>>2]|0;
    $30 = HEAP32[$29>>2]|0;
    $31 = ((($30)) + 8|0);
    $32 = HEAP32[$31>>2]|0;
    $33 = (FUNCTION_TABLE_ii[$32 & 63]($29)|0);
    HEAP32[$vararg_buffer>>2] = 4785;
    $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
    HEAP32[$vararg_ptr1>>2] = $24;
    $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
    HEAP32[$vararg_ptr2>>2] = $33;
    _abort_message(4794,$vararg_buffer);
    // unreachable;
   } else {
    HEAP32[$vararg_buffer3>>2] = 4785;
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    HEAP32[$vararg_ptr6>>2] = $24;
    _abort_message(4839,$vararg_buffer3);
    // unreachable;
   }
  }
 }
 _abort_message(4918,$vararg_buffer10);
 // unreachable;
}
function ___cxa_get_globals_fast() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = (_pthread_once((5744|0),(49|0))|0);
 $1 = ($0|0)==(0);
 if ($1) {
  $2 = HEAP32[1437]|0;
  $3 = (_pthread_getspecific(($2|0))|0);
  STACKTOP = sp;return ($3|0);
 } else {
  _abort_message(4606,$vararg_buffer);
  // unreachable;
 }
 return (0)|0;
}
function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var $0 = 0, $1 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = (_pthread_key_create((5748|0),(50|0))|0);
 $1 = ($0|0)==(0);
 if ($1) {
  STACKTOP = sp;return;
 } else {
  _abort_message(4556,$vararg_buffer);
  // unreachable;
 }
}
function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv($p) {
 $p = $p|0;
 var $0 = 0, $1 = 0, $2 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 _free($p);
 $0 = HEAP32[1437]|0;
 $1 = (_pthread_setspecific(($0|0),(0|0))|0);
 $2 = ($1|0)==(0);
 if ($2) {
  STACKTOP = sp;return;
 } else {
  _abort_message(4503,$vararg_buffer);
  // unreachable;
 }
}
function _abort_message($format,$varargs) {
 $format = $format|0;
 $varargs = $varargs|0;
 var $0 = 0, $list = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $list = sp;
 HEAP32[$list>>2] = $varargs;
 $0 = HEAP32[330]|0;
 (_vfprintf($0,$format,$list)|0);
 (_fputc(10,$0)|0);
 _abort();
 // unreachable;
}
function __ZN10__cxxabiv116__shim_type_infoD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9type_infoD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type,$adjustedPtr) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 $adjustedPtr = $adjustedPtr|0;
 var $$0 = 0, $$2 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $info = 0, dest = 0;
 var label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $info = sp;
 $0 = ($this|0)==($thrown_type|0);
 if ($0) {
  $$2 = 1;
 } else {
  $1 = ($thrown_type|0)==(0|0);
  if ($1) {
   $$2 = 0;
  } else {
   $2 = (___dynamic_cast($thrown_type,1176,1144,0)|0);
   $3 = ($2|0)==(0|0);
   if ($3) {
    $$2 = 0;
   } else {
    dest=$info; stop=dest+56|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
    HEAP32[$info>>2] = $2;
    $4 = ((($info)) + 8|0);
    HEAP32[$4>>2] = $this;
    $5 = ((($info)) + 12|0);
    HEAP32[$5>>2] = -1;
    $6 = ((($info)) + 48|0);
    HEAP32[$6>>2] = 1;
    $7 = HEAP32[$2>>2]|0;
    $8 = ((($7)) + 28|0);
    $9 = HEAP32[$8>>2]|0;
    $10 = HEAP32[$adjustedPtr>>2]|0;
    FUNCTION_TABLE_viiii[$9 & 31]($2,$info,$10,1);
    $11 = ((($info)) + 24|0);
    $12 = HEAP32[$11>>2]|0;
    $13 = ($12|0)==(1);
    if ($13) {
     $14 = ((($info)) + 16|0);
     $15 = HEAP32[$14>>2]|0;
     HEAP32[$adjustedPtr>>2] = $15;
     $$0 = 1;
    } else {
     $$0 = 0;
    }
    $$2 = $$0;
   }
  }
 }
 STACKTOP = sp;return ($$2|0);
}
function ___dynamic_cast($static_ptr,$static_type,$dst_type,$src2dst_offset) {
 $static_ptr = $static_ptr|0;
 $static_type = $static_type|0;
 $dst_type = $dst_type|0;
 $src2dst_offset = $src2dst_offset|0;
 var $$ = 0, $$8 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $dst_ptr$0 = 0, $info = 0, $or$cond = 0, $or$cond3 = 0, $or$cond5 = 0, $or$cond7 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $info = sp;
 $0 = HEAP32[$static_ptr>>2]|0;
 $1 = ((($0)) + -8|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = (($static_ptr) + ($2)|0);
 $4 = ((($0)) + -4|0);
 $5 = HEAP32[$4>>2]|0;
 HEAP32[$info>>2] = $dst_type;
 $6 = ((($info)) + 4|0);
 HEAP32[$6>>2] = $static_ptr;
 $7 = ((($info)) + 8|0);
 HEAP32[$7>>2] = $static_type;
 $8 = ((($info)) + 12|0);
 HEAP32[$8>>2] = $src2dst_offset;
 $9 = ((($info)) + 16|0);
 $10 = ((($info)) + 20|0);
 $11 = ((($info)) + 24|0);
 $12 = ((($info)) + 28|0);
 $13 = ((($info)) + 32|0);
 $14 = ((($info)) + 40|0);
 $15 = ($5|0)==($dst_type|0);
 dest=$9; stop=dest+36|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));HEAP16[$9+36>>1]=0|0;HEAP8[$9+38>>0]=0|0;
 L1: do {
  if ($15) {
   $16 = ((($info)) + 48|0);
   HEAP32[$16>>2] = 1;
   $17 = HEAP32[$dst_type>>2]|0;
   $18 = ((($17)) + 20|0);
   $19 = HEAP32[$18>>2]|0;
   FUNCTION_TABLE_viiiiii[$19 & 31]($dst_type,$info,$3,$3,1,0);
   $20 = HEAP32[$11>>2]|0;
   $21 = ($20|0)==(1);
   $$ = $21 ? $3 : 0;
   $dst_ptr$0 = $$;
  } else {
   $22 = ((($info)) + 36|0);
   $23 = HEAP32[$5>>2]|0;
   $24 = ((($23)) + 24|0);
   $25 = HEAP32[$24>>2]|0;
   FUNCTION_TABLE_viiiii[$25 & 31]($5,$info,$3,1,0);
   $26 = HEAP32[$22>>2]|0;
   switch ($26|0) {
   case 0:  {
    $27 = HEAP32[$14>>2]|0;
    $28 = ($27|0)==(1);
    $29 = HEAP32[$12>>2]|0;
    $30 = ($29|0)==(1);
    $or$cond = $28 & $30;
    $31 = HEAP32[$13>>2]|0;
    $32 = ($31|0)==(1);
    $or$cond3 = $or$cond & $32;
    $33 = HEAP32[$10>>2]|0;
    $$8 = $or$cond3 ? $33 : 0;
    $dst_ptr$0 = $$8;
    break L1;
    break;
   }
   case 1:  {
    break;
   }
   default: {
    $dst_ptr$0 = 0;
    break L1;
   }
   }
   $34 = HEAP32[$11>>2]|0;
   $35 = ($34|0)==(1);
   if (!($35)) {
    $36 = HEAP32[$14>>2]|0;
    $37 = ($36|0)==(0);
    $38 = HEAP32[$12>>2]|0;
    $39 = ($38|0)==(1);
    $or$cond5 = $37 & $39;
    $40 = HEAP32[$13>>2]|0;
    $41 = ($40|0)==(1);
    $or$cond7 = $or$cond5 & $41;
    if (!($or$cond7)) {
     $dst_ptr$0 = 0;
     break;
    }
   }
   $42 = HEAP32[$9>>2]|0;
   $dst_ptr$0 = $42;
  }
 } while(0);
 STACKTOP = sp;return ($dst_ptr$0|0);
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($info)) + 8|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($this|0)==($1|0);
 if ($2) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$info,$dst_ptr,$current_ptr,$path_below);
 } else {
  $3 = ((($this)) + 8|0);
  $4 = HEAP32[$3>>2]|0;
  $5 = HEAP32[$4>>2]|0;
  $6 = ((($5)) + 20|0);
  $7 = HEAP32[$6>>2]|0;
  FUNCTION_TABLE_viiiiii[$7 & 31]($4,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($this,$info,$dst_ptr,$current_ptr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($info)) + 53|0);
 HEAP8[$0>>0] = 1;
 $1 = ((($info)) + 4|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)==($current_ptr|0);
 do {
  if ($3) {
   $4 = ((($info)) + 52|0);
   HEAP8[$4>>0] = 1;
   $5 = ((($info)) + 16|0);
   $6 = HEAP32[$5>>2]|0;
   $7 = ($6|0)==(0|0);
   if ($7) {
    HEAP32[$5>>2] = $dst_ptr;
    $8 = ((($info)) + 24|0);
    HEAP32[$8>>2] = $path_below;
    $9 = ((($info)) + 36|0);
    HEAP32[$9>>2] = 1;
    $10 = ((($info)) + 48|0);
    $11 = HEAP32[$10>>2]|0;
    $12 = ($11|0)==(1);
    $13 = ($path_below|0)==(1);
    $or$cond = $12 & $13;
    if (!($or$cond)) {
     break;
    }
    $14 = ((($info)) + 54|0);
    HEAP8[$14>>0] = 1;
    break;
   }
   $15 = ($6|0)==($dst_ptr|0);
   if (!($15)) {
    $25 = ((($info)) + 36|0);
    $26 = HEAP32[$25>>2]|0;
    $27 = (($26) + 1)|0;
    HEAP32[$25>>2] = $27;
    $28 = ((($info)) + 54|0);
    HEAP8[$28>>0] = 1;
    break;
   }
   $16 = ((($info)) + 24|0);
   $17 = HEAP32[$16>>2]|0;
   $18 = ($17|0)==(2);
   if ($18) {
    HEAP32[$16>>2] = $path_below;
    $23 = $path_below;
   } else {
    $23 = $17;
   }
   $19 = ((($info)) + 48|0);
   $20 = HEAP32[$19>>2]|0;
   $21 = ($20|0)==(1);
   $22 = ($23|0)==(1);
   $or$cond1 = $21 & $22;
   if ($or$cond1) {
    $24 = ((($info)) + 54|0);
    HEAP8[$24>>0] = 1;
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $is_dst_type_derived_from_static_type$0$off02 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($info)) + 8|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($this|0)==($1|0);
 do {
  if ($2) {
   $3 = ((($info)) + 4|0);
   $4 = HEAP32[$3>>2]|0;
   $5 = ($4|0)==($current_ptr|0);
   if ($5) {
    $6 = ((($info)) + 28|0);
    $7 = HEAP32[$6>>2]|0;
    $8 = ($7|0)==(1);
    if (!($8)) {
     HEAP32[$6>>2] = $path_below;
    }
   }
  } else {
   $9 = HEAP32[$info>>2]|0;
   $10 = ($this|0)==($9|0);
   if (!($10)) {
    $44 = ((($this)) + 8|0);
    $45 = HEAP32[$44>>2]|0;
    $46 = HEAP32[$45>>2]|0;
    $47 = ((($46)) + 24|0);
    $48 = HEAP32[$47>>2]|0;
    FUNCTION_TABLE_viiiii[$48 & 31]($45,$info,$current_ptr,$path_below,$use_strcmp);
    break;
   }
   $11 = ((($info)) + 16|0);
   $12 = HEAP32[$11>>2]|0;
   $13 = ($12|0)==($current_ptr|0);
   if (!($13)) {
    $14 = ((($info)) + 20|0);
    $15 = HEAP32[$14>>2]|0;
    $16 = ($15|0)==($current_ptr|0);
    if (!($16)) {
     $19 = ((($info)) + 32|0);
     HEAP32[$19>>2] = $path_below;
     $20 = ((($info)) + 44|0);
     $21 = HEAP32[$20>>2]|0;
     $22 = ($21|0)==(4);
     if ($22) {
      break;
     }
     $23 = ((($info)) + 52|0);
     HEAP8[$23>>0] = 0;
     $24 = ((($info)) + 53|0);
     HEAP8[$24>>0] = 0;
     $25 = ((($this)) + 8|0);
     $26 = HEAP32[$25>>2]|0;
     $27 = HEAP32[$26>>2]|0;
     $28 = ((($27)) + 20|0);
     $29 = HEAP32[$28>>2]|0;
     FUNCTION_TABLE_viiiiii[$29 & 31]($26,$info,$current_ptr,$current_ptr,1,$use_strcmp);
     $30 = HEAP8[$24>>0]|0;
     $31 = ($30<<24>>24)==(0);
     if ($31) {
      $is_dst_type_derived_from_static_type$0$off02 = 0;
      label = 13;
     } else {
      $32 = HEAP8[$23>>0]|0;
      $not$ = ($32<<24>>24)==(0);
      if ($not$) {
       $is_dst_type_derived_from_static_type$0$off02 = 1;
       label = 13;
      } else {
       label = 17;
      }
     }
     do {
      if ((label|0) == 13) {
       HEAP32[$14>>2] = $current_ptr;
       $33 = ((($info)) + 40|0);
       $34 = HEAP32[$33>>2]|0;
       $35 = (($34) + 1)|0;
       HEAP32[$33>>2] = $35;
       $36 = ((($info)) + 36|0);
       $37 = HEAP32[$36>>2]|0;
       $38 = ($37|0)==(1);
       if ($38) {
        $39 = ((($info)) + 24|0);
        $40 = HEAP32[$39>>2]|0;
        $41 = ($40|0)==(2);
        if ($41) {
         $42 = ((($info)) + 54|0);
         HEAP8[$42>>0] = 1;
         if ($is_dst_type_derived_from_static_type$0$off02) {
          label = 17;
          break;
         } else {
          $43 = 4;
          break;
         }
        }
       }
       if ($is_dst_type_derived_from_static_type$0$off02) {
        label = 17;
       } else {
        $43 = 4;
       }
      }
     } while(0);
     if ((label|0) == 17) {
      $43 = 3;
     }
     HEAP32[$20>>2] = $43;
     break;
    }
   }
   $17 = ($path_below|0)==(1);
   if ($17) {
    $18 = ((($info)) + 32|0);
    HEAP32[$18>>2] = 1;
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($info)) + 8|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($this|0)==($1|0);
 if ($2) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$info,$adjustedPtr,$path_below);
 } else {
  $3 = ((($this)) + 8|0);
  $4 = HEAP32[$3>>2]|0;
  $5 = HEAP32[$4>>2]|0;
  $6 = ((($5)) + 28|0);
  $7 = HEAP32[$6>>2]|0;
  FUNCTION_TABLE_viiii[$7 & 31]($4,$info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($info)) + 16|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)==(0|0);
 do {
  if ($2) {
   HEAP32[$0>>2] = $adjustedPtr;
   $3 = ((($info)) + 24|0);
   HEAP32[$3>>2] = $path_below;
   $4 = ((($info)) + 36|0);
   HEAP32[$4>>2] = 1;
  } else {
   $5 = ($1|0)==($adjustedPtr|0);
   if (!($5)) {
    $9 = ((($info)) + 36|0);
    $10 = HEAP32[$9>>2]|0;
    $11 = (($10) + 1)|0;
    HEAP32[$9>>2] = $11;
    $12 = ((($info)) + 24|0);
    HEAP32[$12>>2] = 2;
    $13 = ((($info)) + 54|0);
    HEAP8[$13>>0] = 1;
    break;
   }
   $6 = ((($info)) + 24|0);
   $7 = HEAP32[$6>>2]|0;
   $8 = ($7|0)==(2);
   if ($8) {
    HEAP32[$6>>2] = $path_below;
   }
  }
 } while(0);
 return;
}
function __ZN10__cxxabiv117__class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($info)) + 8|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($this|0)==($1|0);
 if ($2) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$info,$dst_ptr,$current_ptr,$path_below);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($info)) + 8|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($this|0)==($1|0);
 do {
  if ($2) {
   $3 = ((($info)) + 4|0);
   $4 = HEAP32[$3>>2]|0;
   $5 = ($4|0)==($current_ptr|0);
   if ($5) {
    $6 = ((($info)) + 28|0);
    $7 = HEAP32[$6>>2]|0;
    $8 = ($7|0)==(1);
    if (!($8)) {
     HEAP32[$6>>2] = $path_below;
    }
   }
  } else {
   $9 = HEAP32[$info>>2]|0;
   $10 = ($this|0)==($9|0);
   if ($10) {
    $11 = ((($info)) + 16|0);
    $12 = HEAP32[$11>>2]|0;
    $13 = ($12|0)==($current_ptr|0);
    if (!($13)) {
     $14 = ((($info)) + 20|0);
     $15 = HEAP32[$14>>2]|0;
     $16 = ($15|0)==($current_ptr|0);
     if (!($16)) {
      $19 = ((($info)) + 32|0);
      HEAP32[$19>>2] = $path_below;
      HEAP32[$14>>2] = $current_ptr;
      $20 = ((($info)) + 40|0);
      $21 = HEAP32[$20>>2]|0;
      $22 = (($21) + 1)|0;
      HEAP32[$20>>2] = $22;
      $23 = ((($info)) + 36|0);
      $24 = HEAP32[$23>>2]|0;
      $25 = ($24|0)==(1);
      if ($25) {
       $26 = ((($info)) + 24|0);
       $27 = HEAP32[$26>>2]|0;
       $28 = ($27|0)==(2);
       if ($28) {
        $29 = ((($info)) + 54|0);
        HEAP8[$29>>0] = 1;
       }
      }
      $30 = ((($info)) + 44|0);
      HEAP32[$30>>2] = 4;
      break;
     }
    }
    $17 = ($path_below|0)==(1);
    if ($17) {
     $18 = ((($info)) + 32|0);
     HEAP32[$18>>2] = 1;
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($info)) + 8|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($this|0)==($1|0);
 if ($2) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZSt9terminatev() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer3 = 0, $vararg_buffer5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer5 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 __THREW__ = 0;
 $0 = (invoke_i(51)|0);
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $45 = ___cxa_find_matching_catch_3(0|0)|0;
  $46 = tempRet0;
  ___clang_call_terminate($45);
  // unreachable;
 }
 $3 = ($0|0)==(0|0);
 if (!($3)) {
  $4 = HEAP32[$0>>2]|0;
  $5 = ($4|0)==(0|0);
  if (!($5)) {
   $6 = ((($4)) + 48|0);
   $7 = $6;
   $8 = $7;
   $9 = HEAP32[$8>>2]|0;
   $10 = (($7) + 4)|0;
   $11 = $10;
   $12 = HEAP32[$11>>2]|0;
   $13 = $9 & -256;
   $14 = ($13|0)==(1126902528);
   $15 = ($12|0)==(1129074247);
   $16 = $14 & $15;
   if ($16) {
    $17 = ((($4)) + 12|0);
    $18 = HEAP32[$17>>2]|0;
    __THREW__ = 0;
    invoke_v($18|0);
    $19 = __THREW__; __THREW__ = 0;
    $20 = $19&1;
    if (!($20)) {
     __THREW__ = 0;
     invoke_vii(52,(4930|0),($vararg_buffer|0));
     $21 = __THREW__; __THREW__ = 0;
    }
    $22 = ___cxa_find_matching_catch_3(0|0)|0;
    $23 = tempRet0;
    (___cxa_begin_catch(($22|0))|0);
    __THREW__ = 0;
    invoke_vii(52,(4970|0),($vararg_buffer1|0));
    $24 = __THREW__; __THREW__ = 0;
    $25 = ___cxa_find_matching_catch_3(0|0)|0;
    $26 = tempRet0;
    __THREW__ = 0;
    invoke_v(53);
    $27 = __THREW__; __THREW__ = 0;
    $28 = $27&1;
    if ($28) {
     $29 = ___cxa_find_matching_catch_3(0|0)|0;
     $30 = tempRet0;
     ___clang_call_terminate($29);
     // unreachable;
    } else {
     ___clang_call_terminate($25);
     // unreachable;
    }
   }
  }
 }
 $31 = HEAP32[458]|0;HEAP32[458] = (($31+0)|0);
 $32 = $31;
 __THREW__ = 0;
 invoke_v($32|0);
 $33 = __THREW__; __THREW__ = 0;
 $34 = $33&1;
 if (!($34)) {
  __THREW__ = 0;
  invoke_vii(52,(4930|0),($vararg_buffer3|0));
  $35 = __THREW__; __THREW__ = 0;
 }
 $36 = ___cxa_find_matching_catch_3(0|0)|0;
 $37 = tempRet0;
 (___cxa_begin_catch(($36|0))|0);
 __THREW__ = 0;
 invoke_vii(52,(4970|0),($vararg_buffer5|0));
 $38 = __THREW__; __THREW__ = 0;
 $39 = ___cxa_find_matching_catch_3(0|0)|0;
 $40 = tempRet0;
 __THREW__ = 0;
 invoke_v(53);
 $41 = __THREW__; __THREW__ = 0;
 $42 = $41&1;
 if ($42) {
  $43 = ___cxa_find_matching_catch_3(0|0)|0;
  $44 = tempRet0;
  ___clang_call_terminate($43);
  // unreachable;
 } else {
  ___clang_call_terminate($39);
  // unreachable;
 }
}
function __ZNSt9bad_allocD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9exceptionD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9bad_allocD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNKSt9bad_alloc4whatEv($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (5033|0);
}
function __ZNSt11logic_errorD2Ev($this) {
 $this = $this|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAP32[$this>>2] = (1944);
 $0 = ((($this)) + 4|0);
 __ZN12_GLOBAL__N_114__libcpp_nmstrD2Ev($0);
 return;
}
function __ZN12_GLOBAL__N_114__libcpp_nmstrD2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[$this>>2]|0;
 $1 = ((($0)) + -4|0);
 $2 = HEAP32[$1>>2]|0;HEAP32[$1>>2] = (($2+-1)|0);
 $3 = (($2) + -1)|0;
 $4 = ($3|0)<(0);
 if ($4) {
  $5 = HEAP32[$this>>2]|0;
  $6 = ((($5)) + -12|0);
  __ZdlPv($6);
 }
 return;
}
function __ZNSt11logic_errorD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt11logic_errorD2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZNKSt11logic_error4whatEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 return ($1|0);
}
function __ZNSt12length_errorD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt11logic_errorD2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZN10__cxxabiv121__vmi_class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $p$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($info)) + 8|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($this|0)==($1|0);
 if ($2) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$info,$dst_ptr,$current_ptr,$path_below);
 } else {
  $3 = ((($info)) + 52|0);
  $4 = HEAP16[$3>>1]|0;
  $5 = $4&255;
  $6 = ((($info)) + 53|0);
  $7 = ($4&65535) >>> 8;
  $8 = $7&255;
  $9 = ((($this)) + 16|0);
  $10 = ((($this)) + 12|0);
  $11 = HEAP32[$10>>2]|0;
  $12 = (((($this)) + 16|0) + ($11<<3)|0);
  HEAP8[$3>>0] = 0;
  HEAP8[$6>>0] = 0;
  __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($9,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
  $13 = ($11|0)>(1);
  L4: do {
   if ($13) {
    $14 = ((($this)) + 24|0);
    $15 = ((($info)) + 24|0);
    $16 = ((($this)) + 8|0);
    $17 = ((($info)) + 54|0);
    $p$0 = $14;
    while(1) {
     $18 = HEAP8[$17>>0]|0;
     $19 = ($18<<24>>24)==(0);
     if (!($19)) {
      break L4;
     }
     $20 = HEAP16[$3>>1]|0;
     $21 = $20&255;
     $22 = ($21<<24>>24)==(0);
     if ($22) {
      $28 = ($20&65535)<(256);
      if (!($28)) {
       $29 = HEAP32[$16>>2]|0;
       $30 = $29 & 1;
       $31 = ($30|0)==(0);
       if ($31) {
        break L4;
       }
      }
     } else {
      $23 = HEAP32[$15>>2]|0;
      $24 = ($23|0)==(1);
      if ($24) {
       break L4;
      }
      $25 = HEAP32[$16>>2]|0;
      $26 = $25 & 2;
      $27 = ($26|0)==(0);
      if ($27) {
       break L4;
      }
     }
     HEAP8[$3>>0] = 0;
     HEAP8[$6>>0] = 0;
     __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($p$0,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
     $32 = ((($p$0)) + 8|0);
     $33 = ($32>>>0)<($12>>>0);
     if ($33) {
      $p$0 = $32;
     } else {
      break;
     }
    }
   }
  } while(0);
  HEAP8[$3>>0] = $5;
  HEAP8[$6>>0] = $8;
 }
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $offset_to_base$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = $1 >> 8;
 $3 = $1 & 1;
 $4 = ($3|0)==(0);
 if ($4) {
  $offset_to_base$0 = $2;
 } else {
  $5 = HEAP32[$current_ptr>>2]|0;
  $6 = (($5) + ($2)|0);
  $7 = HEAP32[$6>>2]|0;
  $offset_to_base$0 = $7;
 }
 $8 = HEAP32[$this>>2]|0;
 $9 = HEAP32[$8>>2]|0;
 $10 = ((($9)) + 20|0);
 $11 = HEAP32[$10>>2]|0;
 $12 = (($current_ptr) + ($offset_to_base$0)|0);
 $13 = $1 & 2;
 $14 = ($13|0)!=(0);
 $15 = $14 ? $path_below : 2;
 FUNCTION_TABLE_viiiiii[$11 & 31]($8,$info,$dst_ptr,$12,$15,$use_strcmp);
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $does_dst_type_point_to_our_static_type$0$off0 = 0, $does_dst_type_point_to_our_static_type$0$off0$lcssa = 0, $does_dst_type_point_to_our_static_type$1$off0 = 0, $is_dst_type_derived_from_static_type$0$off0 = 0, $is_dst_type_derived_from_static_type$1$off0 = 0, $is_dst_type_derived_from_static_type$2$off0 = 0;
 var $p$0 = 0, $p2$0 = 0, $p2$1 = 0, $p2$2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($info)) + 8|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($this|0)==($1|0);
 L1: do {
  if ($2) {
   $3 = ((($info)) + 4|0);
   $4 = HEAP32[$3>>2]|0;
   $5 = ($4|0)==($current_ptr|0);
   if ($5) {
    $6 = ((($info)) + 28|0);
    $7 = HEAP32[$6>>2]|0;
    $8 = ($7|0)==(1);
    if (!($8)) {
     HEAP32[$6>>2] = $path_below;
    }
   }
  } else {
   $9 = HEAP32[$info>>2]|0;
   $10 = ($this|0)==($9|0);
   if (!($10)) {
    $57 = ((($this)) + 16|0);
    $58 = ((($this)) + 12|0);
    $59 = HEAP32[$58>>2]|0;
    $60 = (((($this)) + 16|0) + ($59<<3)|0);
    __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($57,$info,$current_ptr,$path_below,$use_strcmp);
    $61 = ((($this)) + 24|0);
    $62 = ($59|0)>(1);
    if (!($62)) {
     break;
    }
    $63 = ((($this)) + 8|0);
    $64 = HEAP32[$63>>2]|0;
    $65 = $64 & 2;
    $66 = ($65|0)==(0);
    if ($66) {
     $67 = ((($info)) + 36|0);
     $68 = HEAP32[$67>>2]|0;
     $69 = ($68|0)==(1);
     if (!($69)) {
      $75 = $64 & 1;
      $76 = ($75|0)==(0);
      if ($76) {
       $79 = ((($info)) + 54|0);
       $p2$2 = $61;
       while(1) {
        $88 = HEAP8[$79>>0]|0;
        $89 = ($88<<24>>24)==(0);
        if (!($89)) {
         break L1;
        }
        $90 = HEAP32[$67>>2]|0;
        $91 = ($90|0)==(1);
        if ($91) {
         break L1;
        }
        __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($p2$2,$info,$current_ptr,$path_below,$use_strcmp);
        $92 = ((($p2$2)) + 8|0);
        $93 = ($92>>>0)<($60>>>0);
        if ($93) {
         $p2$2 = $92;
        } else {
         break L1;
        }
       }
      }
      $77 = ((($info)) + 24|0);
      $78 = ((($info)) + 54|0);
      $p2$1 = $61;
      while(1) {
       $80 = HEAP8[$78>>0]|0;
       $81 = ($80<<24>>24)==(0);
       if (!($81)) {
        break L1;
       }
       $82 = HEAP32[$67>>2]|0;
       $83 = ($82|0)==(1);
       if ($83) {
        $84 = HEAP32[$77>>2]|0;
        $85 = ($84|0)==(1);
        if ($85) {
         break L1;
        }
       }
       __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($p2$1,$info,$current_ptr,$path_below,$use_strcmp);
       $86 = ((($p2$1)) + 8|0);
       $87 = ($86>>>0)<($60>>>0);
       if ($87) {
        $p2$1 = $86;
       } else {
        break L1;
       }
      }
     }
    }
    $70 = ((($info)) + 54|0);
    $p2$0 = $61;
    while(1) {
     $71 = HEAP8[$70>>0]|0;
     $72 = ($71<<24>>24)==(0);
     if (!($72)) {
      break L1;
     }
     __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($p2$0,$info,$current_ptr,$path_below,$use_strcmp);
     $73 = ((($p2$0)) + 8|0);
     $74 = ($73>>>0)<($60>>>0);
     if ($74) {
      $p2$0 = $73;
     } else {
      break L1;
     }
    }
   }
   $11 = ((($info)) + 16|0);
   $12 = HEAP32[$11>>2]|0;
   $13 = ($12|0)==($current_ptr|0);
   if (!($13)) {
    $14 = ((($info)) + 20|0);
    $15 = HEAP32[$14>>2]|0;
    $16 = ($15|0)==($current_ptr|0);
    if (!($16)) {
     $19 = ((($info)) + 32|0);
     HEAP32[$19>>2] = $path_below;
     $20 = ((($info)) + 44|0);
     $21 = HEAP32[$20>>2]|0;
     $22 = ($21|0)==(4);
     if ($22) {
      break;
     }
     $23 = ((($this)) + 16|0);
     $24 = ((($this)) + 12|0);
     $25 = HEAP32[$24>>2]|0;
     $26 = (((($this)) + 16|0) + ($25<<3)|0);
     $27 = ((($info)) + 52|0);
     $28 = ((($info)) + 53|0);
     $29 = ((($info)) + 54|0);
     $30 = ((($this)) + 8|0);
     $31 = ((($info)) + 24|0);
     $does_dst_type_point_to_our_static_type$0$off0 = 0;$is_dst_type_derived_from_static_type$0$off0 = 0;$p$0 = $23;
     L34: while(1) {
      $32 = ($p$0>>>0)<($26>>>0);
      if (!($32)) {
       $does_dst_type_point_to_our_static_type$0$off0$lcssa = $does_dst_type_point_to_our_static_type$0$off0;$is_dst_type_derived_from_static_type$2$off0 = $is_dst_type_derived_from_static_type$0$off0;
       label = 20;
       break;
      }
      HEAP8[$27>>0] = 0;
      HEAP8[$28>>0] = 0;
      __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($p$0,$info,$current_ptr,$current_ptr,1,$use_strcmp);
      $33 = HEAP8[$29>>0]|0;
      $34 = ($33<<24>>24)==(0);
      if (!($34)) {
       $does_dst_type_point_to_our_static_type$0$off0$lcssa = $does_dst_type_point_to_our_static_type$0$off0;$is_dst_type_derived_from_static_type$2$off0 = $is_dst_type_derived_from_static_type$0$off0;
       label = 20;
       break;
      }
      $35 = HEAP8[$28>>0]|0;
      $36 = ($35<<24>>24)==(0);
      do {
       if ($36) {
        $does_dst_type_point_to_our_static_type$1$off0 = $does_dst_type_point_to_our_static_type$0$off0;$is_dst_type_derived_from_static_type$1$off0 = $is_dst_type_derived_from_static_type$0$off0;
       } else {
        $37 = HEAP8[$27>>0]|0;
        $38 = ($37<<24>>24)==(0);
        if ($38) {
         $44 = HEAP32[$30>>2]|0;
         $45 = $44 & 1;
         $46 = ($45|0)==(0);
         if ($46) {
          $does_dst_type_point_to_our_static_type$0$off0$lcssa = $does_dst_type_point_to_our_static_type$0$off0;$is_dst_type_derived_from_static_type$2$off0 = 1;
          label = 20;
          break L34;
         } else {
          $does_dst_type_point_to_our_static_type$1$off0 = $does_dst_type_point_to_our_static_type$0$off0;$is_dst_type_derived_from_static_type$1$off0 = 1;
          break;
         }
        }
        $39 = HEAP32[$31>>2]|0;
        $40 = ($39|0)==(1);
        if ($40) {
         label = 25;
         break L34;
        }
        $41 = HEAP32[$30>>2]|0;
        $42 = $41 & 2;
        $43 = ($42|0)==(0);
        if ($43) {
         label = 25;
         break L34;
        } else {
         $does_dst_type_point_to_our_static_type$1$off0 = 1;$is_dst_type_derived_from_static_type$1$off0 = 1;
        }
       }
      } while(0);
      $47 = ((($p$0)) + 8|0);
      $does_dst_type_point_to_our_static_type$0$off0 = $does_dst_type_point_to_our_static_type$1$off0;$is_dst_type_derived_from_static_type$0$off0 = $is_dst_type_derived_from_static_type$1$off0;$p$0 = $47;
     }
     do {
      if ((label|0) == 20) {
       if (!($does_dst_type_point_to_our_static_type$0$off0$lcssa)) {
        HEAP32[$14>>2] = $current_ptr;
        $48 = ((($info)) + 40|0);
        $49 = HEAP32[$48>>2]|0;
        $50 = (($49) + 1)|0;
        HEAP32[$48>>2] = $50;
        $51 = ((($info)) + 36|0);
        $52 = HEAP32[$51>>2]|0;
        $53 = ($52|0)==(1);
        if ($53) {
         $54 = HEAP32[$31>>2]|0;
         $55 = ($54|0)==(2);
         if ($55) {
          HEAP8[$29>>0] = 1;
          if ($is_dst_type_derived_from_static_type$2$off0) {
           label = 25;
           break;
          } else {
           $56 = 4;
           break;
          }
         }
        }
       }
       if ($is_dst_type_derived_from_static_type$2$off0) {
        label = 25;
       } else {
        $56 = 4;
       }
      }
     } while(0);
     if ((label|0) == 25) {
      $56 = 3;
     }
     HEAP32[$20>>2] = $56;
     break;
    }
   }
   $17 = ($path_below|0)==(1);
   if ($17) {
    $18 = ((($info)) + 32|0);
    HEAP32[$18>>2] = 1;
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $offset_to_base$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = $1 >> 8;
 $3 = $1 & 1;
 $4 = ($3|0)==(0);
 if ($4) {
  $offset_to_base$0 = $2;
 } else {
  $5 = HEAP32[$current_ptr>>2]|0;
  $6 = (($5) + ($2)|0);
  $7 = HEAP32[$6>>2]|0;
  $offset_to_base$0 = $7;
 }
 $8 = HEAP32[$this>>2]|0;
 $9 = HEAP32[$8>>2]|0;
 $10 = ((($9)) + 24|0);
 $11 = HEAP32[$10>>2]|0;
 $12 = (($current_ptr) + ($offset_to_base$0)|0);
 $13 = $1 & 2;
 $14 = ($13|0)!=(0);
 $15 = $14 ? $path_below : 2;
 FUNCTION_TABLE_viiiii[$11 & 31]($8,$info,$12,$15,$use_strcmp);
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $p$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($info)) + 8|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($this|0)==($1|0);
 L1: do {
  if ($2) {
   __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$info,$adjustedPtr,$path_below);
  } else {
   $3 = ((($this)) + 16|0);
   $4 = ((($this)) + 12|0);
   $5 = HEAP32[$4>>2]|0;
   $6 = (((($this)) + 16|0) + ($5<<3)|0);
   __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($3,$info,$adjustedPtr,$path_below);
   $7 = ($5|0)>(1);
   if ($7) {
    $8 = ((($this)) + 24|0);
    $9 = ((($info)) + 54|0);
    $p$0 = $8;
    while(1) {
     __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($p$0,$info,$adjustedPtr,$path_below);
     $10 = HEAP8[$9>>0]|0;
     $11 = ($10<<24>>24)==(0);
     if (!($11)) {
      break L1;
     }
     $12 = ((($p$0)) + 8|0);
     $13 = ($12>>>0)<($6>>>0);
     if ($13) {
      $p$0 = $12;
     } else {
      break;
     }
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $offset_to_base$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = $1 >> 8;
 $3 = $1 & 1;
 $4 = ($3|0)==(0);
 if ($4) {
  $offset_to_base$0 = $2;
 } else {
  $5 = HEAP32[$adjustedPtr>>2]|0;
  $6 = (($5) + ($2)|0);
  $7 = HEAP32[$6>>2]|0;
  $offset_to_base$0 = $7;
 }
 $8 = HEAP32[$this>>2]|0;
 $9 = HEAP32[$8>>2]|0;
 $10 = ((($9)) + 28|0);
 $11 = HEAP32[$10>>2]|0;
 $12 = (($adjustedPtr) + ($offset_to_base$0)|0);
 $13 = $1 & 2;
 $14 = ($13|0)!=(0);
 $15 = $14 ? $path_below : 2;
 FUNCTION_TABLE_viiii[$11 & 31]($8,$info,$12,$15);
 return;
}
function __ZNSt9bad_allocC2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 HEAP32[$this>>2] = (1924);
 return;
}
function __ZSt15get_new_handlerv() {
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[1438]|0;HEAP32[1438] = (($0+0)|0);
 $1 = $0;
 return ($1|0);
}
function ___cxa_can_catch($catchType,$excpType,$thrown) {
 $catchType = $catchType|0;
 $excpType = $excpType|0;
 $thrown = $thrown|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $temp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $temp = sp;
 $0 = HEAP32[$thrown>>2]|0;
 HEAP32[$temp>>2] = $0;
 $1 = HEAP32[$catchType>>2]|0;
 $2 = ((($1)) + 16|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = (FUNCTION_TABLE_iiii[$3 & 15]($catchType,$excpType,$temp)|0);
 $5 = $4&1;
 if ($4) {
  $6 = HEAP32[$temp>>2]|0;
  HEAP32[$thrown>>2] = $6;
 }
 STACKTOP = sp;return ($5|0);
}
function ___cxa_is_pointer_type($type) {
 $type = $type|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($type|0)==(0|0);
 if ($0) {
  $3 = 0;
 } else {
  $1 = (___dynamic_cast($type,1176,1264,0)|0);
  $phitmp = ($1|0)!=(0|0);
  $3 = $phitmp;
 }
 $2 = $3&1;
 return ($2|0);
}
function runPostSets() {
}
function _i64Subtract(a, b, c, d) {
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a - c)>>>0;
    h = (b - d)>>>0;
    h = (b - d - (((c>>>0) > (a>>>0))|0))>>>0; // Borrow one from high word to low word on underflow.
    return ((tempRet0 = h,l|0)|0);
}
function _i64Add(a, b, c, d) {
    /*
      x = a + b*2^32
      y = c + d*2^32
      result = l + h*2^32
    */
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a + c)>>>0;
    h = (b + d + (((l>>>0) < (a>>>0))|0))>>>0; // Add carry from low word to high word on overflow.
    return ((tempRet0 = h,l|0)|0);
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var stop = 0, value4 = 0, stop4 = 0, unaligned = 0;
    stop = (ptr + num)|0;
    if ((num|0) >= 20) {
      // This is unaligned, but quite large, so work hard to get to aligned settings
      value = value & 0xff;
      unaligned = ptr & 3;
      value4 = value | (value << 8) | (value << 16) | (value << 24);
      stop4 = stop & ~3;
      if (unaligned) {
        unaligned = (ptr + 4 - unaligned)|0;
        while ((ptr|0) < (unaligned|0)) { // no need to check for stop, since we have large num
          HEAP8[((ptr)>>0)]=value;
          ptr = (ptr+1)|0;
        }
      }
      while ((ptr|0) < (stop4|0)) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    while ((ptr|0) < (stop|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (ptr-num)|0;
}
function _bitshift64Shl(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = (high << bits) | ((low&(ander << (32 - bits))) >>> (32 - bits));
      return low << bits;
    }
    tempRet0 = low << (bits - 32);
    return 0;
}
function _bitshift64Lshr(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = high >>> bits;
      return (low >>> bits) | ((high&ander) << (32 - bits));
    }
    tempRet0 = 0;
    return (high >>> (bits - 32))|0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    if ((num|0) >= 4096) return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    ret = dest|0;
    if ((dest&3) == (src&3)) {
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      while ((num|0) >= 4) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
        num = (num-4)|0;
      }
    }
    while ((num|0) > 0) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
      num = (num-1)|0;
    }
    return ret|0;
}
function ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    $rem = $rem | 0;
    var $n_sroa_0_0_extract_trunc = 0, $n_sroa_1_4_extract_shift$0 = 0, $n_sroa_1_4_extract_trunc = 0, $d_sroa_0_0_extract_trunc = 0, $d_sroa_1_4_extract_shift$0 = 0, $d_sroa_1_4_extract_trunc = 0, $4 = 0, $17 = 0, $37 = 0, $49 = 0, $51 = 0, $57 = 0, $58 = 0, $66 = 0, $78 = 0, $86 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $95 = 0, $105 = 0, $117 = 0, $119 = 0, $125 = 0, $126 = 0, $130 = 0, $q_sroa_1_1_ph = 0, $q_sroa_0_1_ph = 0, $r_sroa_1_1_ph = 0, $r_sroa_0_1_ph = 0, $sr_1_ph = 0, $d_sroa_0_0_insert_insert99$0 = 0, $d_sroa_0_0_insert_insert99$1 = 0, $137$0 = 0, $137$1 = 0, $carry_0203 = 0, $sr_1202 = 0, $r_sroa_0_1201 = 0, $r_sroa_1_1200 = 0, $q_sroa_0_1199 = 0, $q_sroa_1_1198 = 0, $147 = 0, $149 = 0, $r_sroa_0_0_insert_insert42$0 = 0, $r_sroa_0_0_insert_insert42$1 = 0, $150$1 = 0, $151$0 = 0, $152 = 0, $154$0 = 0, $r_sroa_0_0_extract_trunc = 0, $r_sroa_1_4_extract_trunc = 0, $155 = 0, $carry_0_lcssa$0 = 0, $carry_0_lcssa$1 = 0, $r_sroa_0_1_lcssa = 0, $r_sroa_1_1_lcssa = 0, $q_sroa_0_1_lcssa = 0, $q_sroa_1_1_lcssa = 0, $q_sroa_0_0_insert_ext75$0 = 0, $q_sroa_0_0_insert_ext75$1 = 0, $q_sroa_0_0_insert_insert77$1 = 0, $_0$0 = 0, $_0$1 = 0;
    $n_sroa_0_0_extract_trunc = $a$0;
    $n_sroa_1_4_extract_shift$0 = $a$1;
    $n_sroa_1_4_extract_trunc = $n_sroa_1_4_extract_shift$0;
    $d_sroa_0_0_extract_trunc = $b$0;
    $d_sroa_1_4_extract_shift$0 = $b$1;
    $d_sroa_1_4_extract_trunc = $d_sroa_1_4_extract_shift$0;
    if (($n_sroa_1_4_extract_trunc | 0) == 0) {
      $4 = ($rem | 0) != 0;
      if (($d_sroa_1_4_extract_trunc | 0) == 0) {
        if ($4) {
          HEAP32[$rem >> 2] = ($n_sroa_0_0_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
          HEAP32[$rem + 4 >> 2] = 0;
        }
        $_0$1 = 0;
        $_0$0 = ($n_sroa_0_0_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$4) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
    }
    $17 = ($d_sroa_1_4_extract_trunc | 0) == 0;
    do {
      if (($d_sroa_0_0_extract_trunc | 0) == 0) {
        if ($17) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
            HEAP32[$rem + 4 >> 2] = 0;
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        if (($n_sroa_0_0_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0;
            HEAP32[$rem + 4 >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_1_4_extract_trunc >>> 0);
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_1_4_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $37 = $d_sroa_1_4_extract_trunc - 1 | 0;
        if (($37 & $d_sroa_1_4_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0 | $a$0 & -1;
            HEAP32[$rem + 4 >> 2] = $37 & $n_sroa_1_4_extract_trunc | $a$1 & 0;
          }
          $_0$1 = 0;
          $_0$0 = $n_sroa_1_4_extract_trunc >>> ((_llvm_cttz_i32($d_sroa_1_4_extract_trunc | 0) | 0) >>> 0);
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $49 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
        $51 = $49 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
        if ($51 >>> 0 <= 30) {
          $57 = $51 + 1 | 0;
          $58 = 31 - $51 | 0;
          $sr_1_ph = $57;
          $r_sroa_0_1_ph = $n_sroa_1_4_extract_trunc << $58 | $n_sroa_0_0_extract_trunc >>> ($57 >>> 0);
          $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($57 >>> 0);
          $q_sroa_0_1_ph = 0;
          $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $58;
          break;
        }
        if (($rem | 0) == 0) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = 0 | $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$17) {
          $117 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
          $119 = $117 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          if ($119 >>> 0 <= 31) {
            $125 = $119 + 1 | 0;
            $126 = 31 - $119 | 0;
            $130 = $119 - 31 >> 31;
            $sr_1_ph = $125;
            $r_sroa_0_1_ph = $n_sroa_0_0_extract_trunc >>> ($125 >>> 0) & $130 | $n_sroa_1_4_extract_trunc << $126;
            $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($125 >>> 0) & $130;
            $q_sroa_0_1_ph = 0;
            $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $126;
            break;
          }
          if (($rem | 0) == 0) {
            $_0$1 = 0;
            $_0$0 = 0;
            return (tempRet0 = $_0$1, $_0$0) | 0;
          }
          HEAP32[$rem >> 2] = 0 | $a$0 & -1;
          HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $66 = $d_sroa_0_0_extract_trunc - 1 | 0;
        if (($66 & $d_sroa_0_0_extract_trunc | 0) != 0) {
          $86 = (Math_clz32($d_sroa_0_0_extract_trunc | 0) | 0) + 33 | 0;
          $88 = $86 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          $89 = 64 - $88 | 0;
          $91 = 32 - $88 | 0;
          $92 = $91 >> 31;
          $95 = $88 - 32 | 0;
          $105 = $95 >> 31;
          $sr_1_ph = $88;
          $r_sroa_0_1_ph = $91 - 1 >> 31 & $n_sroa_1_4_extract_trunc >>> ($95 >>> 0) | ($n_sroa_1_4_extract_trunc << $91 | $n_sroa_0_0_extract_trunc >>> ($88 >>> 0)) & $105;
          $r_sroa_1_1_ph = $105 & $n_sroa_1_4_extract_trunc >>> ($88 >>> 0);
          $q_sroa_0_1_ph = $n_sroa_0_0_extract_trunc << $89 & $92;
          $q_sroa_1_1_ph = ($n_sroa_1_4_extract_trunc << $89 | $n_sroa_0_0_extract_trunc >>> ($95 >>> 0)) & $92 | $n_sroa_0_0_extract_trunc << $91 & $88 - 33 >> 31;
          break;
        }
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = $66 & $n_sroa_0_0_extract_trunc;
          HEAP32[$rem + 4 >> 2] = 0;
        }
        if (($d_sroa_0_0_extract_trunc | 0) == 1) {
          $_0$1 = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$0 = 0 | $a$0 & -1;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        } else {
          $78 = _llvm_cttz_i32($d_sroa_0_0_extract_trunc | 0) | 0;
          $_0$1 = 0 | $n_sroa_1_4_extract_trunc >>> ($78 >>> 0);
          $_0$0 = $n_sroa_1_4_extract_trunc << 32 - $78 | $n_sroa_0_0_extract_trunc >>> ($78 >>> 0) | 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
      }
    } while (0);
    if (($sr_1_ph | 0) == 0) {
      $q_sroa_1_1_lcssa = $q_sroa_1_1_ph;
      $q_sroa_0_1_lcssa = $q_sroa_0_1_ph;
      $r_sroa_1_1_lcssa = $r_sroa_1_1_ph;
      $r_sroa_0_1_lcssa = $r_sroa_0_1_ph;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = 0;
    } else {
      $d_sroa_0_0_insert_insert99$0 = 0 | $b$0 & -1;
      $d_sroa_0_0_insert_insert99$1 = $d_sroa_1_4_extract_shift$0 | $b$1 & 0;
      $137$0 = _i64Add($d_sroa_0_0_insert_insert99$0 | 0, $d_sroa_0_0_insert_insert99$1 | 0, -1, -1) | 0;
      $137$1 = tempRet0;
      $q_sroa_1_1198 = $q_sroa_1_1_ph;
      $q_sroa_0_1199 = $q_sroa_0_1_ph;
      $r_sroa_1_1200 = $r_sroa_1_1_ph;
      $r_sroa_0_1201 = $r_sroa_0_1_ph;
      $sr_1202 = $sr_1_ph;
      $carry_0203 = 0;
      while (1) {
        $147 = $q_sroa_0_1199 >>> 31 | $q_sroa_1_1198 << 1;
        $149 = $carry_0203 | $q_sroa_0_1199 << 1;
        $r_sroa_0_0_insert_insert42$0 = 0 | ($r_sroa_0_1201 << 1 | $q_sroa_1_1198 >>> 31);
        $r_sroa_0_0_insert_insert42$1 = $r_sroa_0_1201 >>> 31 | $r_sroa_1_1200 << 1 | 0;
        _i64Subtract($137$0 | 0, $137$1 | 0, $r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0) | 0;
        $150$1 = tempRet0;
        $151$0 = $150$1 >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1;
        $152 = $151$0 & 1;
        $154$0 = _i64Subtract($r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0, $151$0 & $d_sroa_0_0_insert_insert99$0 | 0, ((($150$1 | 0) < 0 ? -1 : 0) >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1) & $d_sroa_0_0_insert_insert99$1 | 0) | 0;
        $r_sroa_0_0_extract_trunc = $154$0;
        $r_sroa_1_4_extract_trunc = tempRet0;
        $155 = $sr_1202 - 1 | 0;
        if (($155 | 0) == 0) {
          break;
        } else {
          $q_sroa_1_1198 = $147;
          $q_sroa_0_1199 = $149;
          $r_sroa_1_1200 = $r_sroa_1_4_extract_trunc;
          $r_sroa_0_1201 = $r_sroa_0_0_extract_trunc;
          $sr_1202 = $155;
          $carry_0203 = $152;
        }
      }
      $q_sroa_1_1_lcssa = $147;
      $q_sroa_0_1_lcssa = $149;
      $r_sroa_1_1_lcssa = $r_sroa_1_4_extract_trunc;
      $r_sroa_0_1_lcssa = $r_sroa_0_0_extract_trunc;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = $152;
    }
    $q_sroa_0_0_insert_ext75$0 = $q_sroa_0_1_lcssa;
    $q_sroa_0_0_insert_ext75$1 = 0;
    $q_sroa_0_0_insert_insert77$1 = $q_sroa_1_1_lcssa | $q_sroa_0_0_insert_ext75$1;
    if (($rem | 0) != 0) {
      HEAP32[$rem >> 2] = 0 | $r_sroa_0_1_lcssa;
      HEAP32[$rem + 4 >> 2] = $r_sroa_1_1_lcssa | 0;
    }
    $_0$1 = (0 | $q_sroa_0_0_insert_ext75$0) >>> 31 | $q_sroa_0_0_insert_insert77$1 << 1 | ($q_sroa_0_0_insert_ext75$1 << 1 | $q_sroa_0_0_insert_ext75$0 >>> 31) & 0 | $carry_0_lcssa$1;
    $_0$0 = ($q_sroa_0_0_insert_ext75$0 << 1 | 0 >>> 31) & -2 | $carry_0_lcssa$0;
    return (tempRet0 = $_0$1, $_0$0) | 0;
}
function ___udivdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $1$0 = 0;
    $1$0 = ___udivmoddi4($a$0, $a$1, $b$0, $b$1, 0) | 0;
    return $1$0 | 0;
}
function ___muldsi3($a, $b) {
    $a = $a | 0;
    $b = $b | 0;
    var $1 = 0, $2 = 0, $3 = 0, $6 = 0, $8 = 0, $11 = 0, $12 = 0;
    $1 = $a & 65535;
    $2 = $b & 65535;
    $3 = Math_imul($2, $1) | 0;
    $6 = $a >>> 16;
    $8 = ($3 >>> 16) + (Math_imul($2, $6) | 0) | 0;
    $11 = $b >>> 16;
    $12 = Math_imul($11, $1) | 0;
    return (tempRet0 = (($8 >>> 16) + (Math_imul($11, $6) | 0) | 0) + ((($8 & 65535) + $12 | 0) >>> 16) | 0, 0 | ($8 + $12 << 16 | $3 & 65535)) | 0;
}
function ___muldi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $x_sroa_0_0_extract_trunc = 0, $y_sroa_0_0_extract_trunc = 0, $1$0 = 0, $1$1 = 0, $2 = 0;
    $x_sroa_0_0_extract_trunc = $a$0;
    $y_sroa_0_0_extract_trunc = $b$0;
    $1$0 = ___muldsi3($x_sroa_0_0_extract_trunc, $y_sroa_0_0_extract_trunc) | 0;
    $1$1 = tempRet0;
    $2 = Math_imul($a$1, $y_sroa_0_0_extract_trunc) | 0;
    return (tempRet0 = ((Math_imul($b$1, $x_sroa_0_0_extract_trunc) | 0) + $2 | 0) + $1$1 | $1$1 & 0, 0 | $1$0 & -1) | 0;
}
function _memmove(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    if (((src|0) < (dest|0)) & ((dest|0) < ((src + num)|0))) {
      // Unlikely case: Copy backwards in a safe manner
      ret = dest;
      src = (src + num)|0;
      dest = (dest + num)|0;
      while ((num|0) > 0) {
        dest = (dest - 1)|0;
        src = (src - 1)|0;
        num = (num - 1)|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      }
      dest = ret;
    } else {
      _memcpy(dest, src, num) | 0;
    }
    return dest | 0;
}
function ___uremdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $rem = 0, __stackBase__ = 0;
    __stackBase__ = STACKTOP;
    STACKTOP = STACKTOP + 16 | 0;
    $rem = __stackBase__ | 0;
    ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) | 0;
    STACKTOP = __stackBase__;
    return (tempRet0 = HEAP32[$rem + 4 >> 2] | 0, HEAP32[$rem >> 2] | 0) | 0;
}
function _pthread_self() {
    return 0;
}

  
function dynCall_viddd(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=+a2; a3=+a3; a4=+a4;
  FUNCTION_TABLE_viddd[index&63](a1|0,+a2,+a3,+a4);
}


function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&15](a1|0,a2|0,a3|0)|0;
}


function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  FUNCTION_TABLE_viiiii[index&31](a1|0,a2|0,a3|0,a4|0,a5|0);
}


function dynCall_i(index) {
  index = index|0;
  
  return FUNCTION_TABLE_i[index&63]()|0;
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&63](a1|0);
}


function dynCall_vii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  FUNCTION_TABLE_vii[index&63](a1|0,a2|0);
}


function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&63](a1|0)|0;
}


function dynCall_viii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  FUNCTION_TABLE_viii[index&63](a1|0,a2|0,a3|0);
}


function dynCall_v(index) {
  index = index|0;
  
  FUNCTION_TABLE_v[index&63]();
}


function dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0;
  FUNCTION_TABLE_viiiiii[index&31](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0);
}


function dynCall_iii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  return FUNCTION_TABLE_iii[index&63](a1|0,a2|0)|0;
}


function dynCall_viiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  FUNCTION_TABLE_viiii[index&31](a1|0,a2|0,a3|0,a4|0);
}

function b0(p0,p1,p2,p3) {
 p0 = p0|0;p1 = +p1;p2 = +p2;p3 = +p3; nullFunc_viddd(0);
}
function b1(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_iiii(1);return 0;
}
function b2(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; nullFunc_viiiii(2);
}
function b3() {
 ; nullFunc_i(3);return 0;
}
function b4(p0) {
 p0 = p0|0; nullFunc_vi(4);
}
function b5(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_vii(5);
}
function b6(p0) {
 p0 = p0|0; nullFunc_ii(6);return 0;
}
function b7(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_viii(7);
}
function ___cxa_throw__wrapper(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; ___cxa_throw(p0|0,p1|0,p2|0);
}
function b8() {
 ; nullFunc_v(8);
}
function ___cxa_end_catch__wrapper() {
 ; ___cxa_end_catch();
}
function b9(p0,p1,p2,p3,p4,p5) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0;p5 = p5|0; nullFunc_viiiiii(9);
}
function b10(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_iii(10);return 0;
}
function b11(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; nullFunc_viiii(11);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_viddd = [b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,__ZN6Vector3setEddd,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,__ZN6VectorC2Eddd,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0];
var FUNCTION_TABLE_iiii = [b1,b1,b1,b1,___stdio_write,___stdio_seek,___stdout_write,b1,b1,b1,b1,b1,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,b1,b1,b1];
var FUNCTION_TABLE_viiiii = [b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b2,b2,b2,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b2,b2];
var FUNCTION_TABLE_i = [b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,___cxa_get_globals_fast,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3,b3,b3];
var FUNCTION_TABLE_vi = [b4,b4,b4,b4,b4,b4,b4,b4,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,b4,b4,b4,b4,__ZN10__cxxabiv120__si_class_type_infoD0Ev,b4,b4,b4,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,b4,__ZNSt11logic_errorD2Ev,__ZNSt11logic_errorD0Ev,b4,__ZNSt12length_errorD0Ev,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,b4
,b4,b4,__ZN6VectorC2Ev,b4,__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev,b4,b4,__ZN8ParticleC2Ev,b4,b4,b4,b4,b4,b4,b4,__ZN14ParticleSystemD2Ev,b4,_cleanup_387,b4,b4,b4,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b4,b4,b4,b4,b4,b4,b4,b4
,b4,b4,b4,b4,b4];
var FUNCTION_TABLE_vii = [b5,__ZN5Field10applyForceEP8Particle,__ZN13MagneticField10applyForceEP8Particle,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
,b5,b5,b5,b5,b5,__ZN15ParticleEmitterC2Ei,__ZN13MagneticFieldC2Ei,b5,b5,b5,__ZNSt3__214__split_bufferIPP8ParticleRNS_9allocatorIS3_EEE10push_frontERKS3_,__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_,b5,b5,__ZN14ParticleSystemC2Ei,b5,b5,b5,__ZNSt11logic_errorC2EPKc,__ZNSt3__218__libcpp_refstringC2EPKc,b5,b5,b5,_abort_message,b5,b5,b5,b5,b5,b5
,b5,b5,b5,b5,b5];
var FUNCTION_TABLE_ii = [b6,b6,b6,___stdio_close,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,__ZNKSt9bad_alloc4whatEv,b6,b6,__ZNKSt11logic_error4whatEv,b6,b6,b6
,b6,b6,b6,b6,b6,b6,b6,b6,__Znwj,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
,b6,b6,b6,b6,b6];
var FUNCTION_TABLE_viii = [b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7
,b7,b7,b7,b7,b7,b7,b7,b7,b7,___cxa_throw__wrapper,b7,b7,__ZN10BaseObjectC2Eii,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7
,b7,b7,b7,b7,b7];
var FUNCTION_TABLE_v = [b8,b8,b8,b8,b8,b8,b8,__ZL25default_terminate_handlerv,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b8,b8,b8,___cxa_end_catch__wrapper,b8,b8,b8,b8,b8
,b8,b8,b8,b8,b8];
var FUNCTION_TABLE_viiiiii = [b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b9,b9,b9,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib
,b9,b9,b9];
var FUNCTION_TABLE_iii = [b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10
,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10
,b10,b10,b10,b10,b10];
var FUNCTION_TABLE_viiii = [b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b11,b11,b11,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b11,b11,b11,b11,b11,b11,b11,b11,b11
,b11,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b11];

  return { _emscripten_bind_ParticleSystem_getObjectById_1: _emscripten_bind_ParticleSystem_getObjectById_1, _emscripten_bind_BaseObject_getTransformable_0: _emscripten_bind_BaseObject_getTransformable_0, _emscripten_bind_MagneticField_MagneticField_1: _emscripten_bind_MagneticField_MagneticField_1, _emscripten_bind_MagneticField_getOffset_0: _emscripten_bind_MagneticField_getOffset_0, _bitshift64Lshr: _bitshift64Lshr, _emscripten_bind_Vector_getZ_0: _emscripten_bind_Vector_getZ_0, _emscripten_bind_ParticleSystem_on_2: _emscripten_bind_ParticleSystem_on_2, _emscripten_bind_ParticleSystem_ParticleSystem_1: _emscripten_bind_ParticleSystem_ParticleSystem_1, _emscripten_bind_MagneticField_getForce_0: _emscripten_bind_MagneticField_getForce_0, _memcpy: _memcpy, _emscripten_bind_Particle_getLifeTime_0: _emscripten_bind_Particle_getLifeTime_0, _emscripten_bind_ParticleSystem_setMaxParticles_1: _emscripten_bind_ParticleSystem_setMaxParticles_1, _emscripten_bind_BaseObject___destroy___0: _emscripten_bind_BaseObject___destroy___0, ___udivmoddi4: ___udivmoddi4, _emscripten_bind_Vector_Vector_3: _emscripten_bind_Vector_Vector_3, _emscripten_bind_Vector_set_3: _emscripten_bind_Vector_set_3, _emscripten_bind_ParticleSystem_getEmitter_1: _emscripten_bind_ParticleSystem_getEmitter_1, _emscripten_bind_Particle_getAcceleration_0: _emscripten_bind_Particle_getAcceleration_0, ___cxa_can_catch: ___cxa_can_catch, _free: _free, _emscripten_bind_Vector_withinSphere_2: _emscripten_bind_Vector_withinSphere_2, _emscripten_bind_Vector_getX_0: _emscripten_bind_Vector_getX_0, _main: _main, _emscripten_bind_BaseObject_getType_0: _emscripten_bind_BaseObject_getType_0, _emscripten_bind_MagneticField_setForce_1: _emscripten_bind_MagneticField_setForce_1, _emscripten_bind_ParticleSystem_addEmitter_1: _emscripten_bind_ParticleSystem_addEmitter_1, _emscripten_bind_Vector_getY_0: _emscripten_bind_Vector_getY_0, _emscripten_bind_ParticleSystem_step_1: _emscripten_bind_ParticleSystem_step_1, _emscripten_bind_ParticleEmitter_getSpread_0: _emscripten_bind_ParticleEmitter_getSpread_0, _emscripten_bind_ParticleEmitter_setVelocity_1: _emscripten_bind_ParticleEmitter_setVelocity_1, _emscripten_bind_EventHandler_EventHandler_0: _emscripten_bind_EventHandler_EventHandler_0, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _emscripten_bind_EmString_c_str_0: _emscripten_bind_EmString_c_str_0, _emscripten_bind_ParticleEmitter_getOffset_0: _emscripten_bind_ParticleEmitter_getOffset_0, _emscripten_bind_ParticleEmitter_setCharge_1: _emscripten_bind_ParticleEmitter_setCharge_1, _emscripten_bind_ParticleSystem___destroy___0: _emscripten_bind_ParticleSystem___destroy___0, _emscripten_bind_MagneticField_setTransformable_1: _emscripten_bind_MagneticField_setTransformable_1, _emscripten_bind_BaseObject_getSelectable_0: _emscripten_bind_BaseObject_getSelectable_0, _emscripten_bind_ParticleEmitter_setOffset_3: _emscripten_bind_ParticleEmitter_setOffset_3, _emscripten_bind_Particle___destroy___0: _emscripten_bind_Particle___destroy___0, _emscripten_bind_ParticleSystem_destroy_0: _emscripten_bind_ParticleSystem_destroy_0, _emscripten_bind_BaseObject_setPosition_3: _emscripten_bind_BaseObject_setPosition_3, _emscripten_bind_ParticleEmitter_setEmissionRate_1: _emscripten_bind_ParticleEmitter_setEmissionRate_1, _emscripten_bind_ParticleEmitter_setSelectable_1: _emscripten_bind_ParticleEmitter_setSelectable_1, _emscripten_bind_ParticleEmitter_ParticleEmitter_1: _emscripten_bind_ParticleEmitter_ParticleEmitter_1, _emscripten_bind_ParticleEmitter___destroy___0: _emscripten_bind_ParticleEmitter___destroy___0, _emscripten_bind_MagneticField_getPosition_0: _emscripten_bind_MagneticField_getPosition_0, _emscripten_bind_ParticleEmitter_getCharge_0: _emscripten_bind_ParticleEmitter_getCharge_0, _emscripten_bind_MagneticField___destroy___0: _emscripten_bind_MagneticField___destroy___0, _emscripten_bind_Vector_magnitude_0: _emscripten_bind_Vector_magnitude_0, _emscripten_bind_EmString___destroy___0: _emscripten_bind_EmString___destroy___0, _emscripten_bind_ParticleSystem_initParticleLoop_0: _emscripten_bind_ParticleSystem_initParticleLoop_0, _emscripten_bind_ParticleEmitter_setTransformable_1: _emscripten_bind_ParticleEmitter_setTransformable_1, ___muldsi3: ___muldsi3, _emscripten_bind_Particle_getRecycled_0: _emscripten_bind_Particle_getRecycled_0, _emscripten_bind_VoidPtr___destroy___0: _emscripten_bind_VoidPtr___destroy___0, _memset: _memset, _emscripten_bind_Particle_getRadius_0: _emscripten_bind_Particle_getRadius_0, _emscripten_bind_BaseObject_getId_0: _emscripten_bind_BaseObject_getId_0, _emscripten_bind_BaseObject_setSelectable_1: _emscripten_bind_BaseObject_setSelectable_1, _emscripten_bind_EmString_EmString_0: _emscripten_bind_EmString_EmString_0, _emscripten_bind_EmString_EmString_1: _emscripten_bind_EmString_EmString_1, _i64Subtract: _i64Subtract, _emscripten_bind_ParticleSystem_addMagneticField_1: _emscripten_bind_ParticleSystem_addMagneticField_1, _emscripten_bind_Particle_Particle_0: _emscripten_bind_Particle_Particle_0, _emscripten_bind_Particle_getVelocity_0: _emscripten_bind_Particle_getVelocity_0, _emscripten_bind_Particle_setLifeTime_1: _emscripten_bind_Particle_setLifeTime_1, _emscripten_bind_ParticleSystem_getMagneticField_1: _emscripten_bind_ParticleSystem_getMagneticField_1, _emscripten_bind_ParticleEmitter_getVelocity_0: _emscripten_bind_ParticleEmitter_getVelocity_0, _malloc: _malloc, _emscripten_bind_EventHandler___destroy___0: _emscripten_bind_EventHandler___destroy___0, _memmove: _memmove, _emscripten_bind_Particle_getDof_0: _emscripten_bind_Particle_getDof_0, _emscripten_bind_BaseObject_setTransformable_1: _emscripten_bind_BaseObject_setTransformable_1, _emscripten_bind_Particle_getPosition_0: _emscripten_bind_Particle_getPosition_0, _emscripten_bind_ParticleEmitter_setPosition_3: _emscripten_bind_ParticleEmitter_setPosition_3, ___udivdi3: ___udivdi3, _emscripten_bind_EventHandler_handleEvent_1: _emscripten_bind_EventHandler_handleEvent_1, _emscripten_bind_Vector___destroy___0: _emscripten_bind_Vector___destroy___0, _bitshift64Shl: _bitshift64Shl, _emscripten_bind_MagneticField_setOffset_3: _emscripten_bind_MagneticField_setOffset_3, _emscripten_bind_ParticleSystem_nextParticle_0: _emscripten_bind_ParticleSystem_nextParticle_0, ___muldi3: ___muldi3, _emscripten_bind_ParticleEmitter_setSpread_1: _emscripten_bind_ParticleEmitter_setSpread_1, ___uremdi3: ___uremdi3, _emscripten_bind_ParticleSystem_setDof_3: _emscripten_bind_ParticleSystem_setDof_3, _i64Add: _i64Add, _pthread_self: _pthread_self, _emscripten_bind_BaseObject_BaseObject_2: _emscripten_bind_BaseObject_BaseObject_2, _emscripten_bind_ParticleEmitter_getPosition_0: _emscripten_bind_ParticleEmitter_getPosition_0, _emscripten_bind_ParticleSystem_getMaxParticles_0: _emscripten_bind_ParticleSystem_getMaxParticles_0, _emscripten_bind_MagneticField_setPosition_3: _emscripten_bind_MagneticField_setPosition_3, ___errno_location: ___errno_location, _emscripten_bind_ParticleEmitter_getEmissionRate_0: _emscripten_bind_ParticleEmitter_getEmissionRate_0, _emscripten_bind_MagneticField_setSelectable_1: _emscripten_bind_MagneticField_setSelectable_1, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_viddd: dynCall_viddd, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_i: dynCall_i, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
;