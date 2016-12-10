(module
  (type $FUNCSIG$id (func (param f64) (result i32)))
  (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
  (type $FUNCSIG$vii (func (param i32 i32)))
  (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
  (type $FUNCSIG$v (func))
  (type $FUNCSIG$ii (func (param i32) (result i32)))
  (type $FUNCSIG$viiii (func (param i32 i32 i32 i32)))
  (type $FUNCSIG$viiiiii (func (param i32 i32 i32 i32 i32 i32)))
  (type $FUNCSIG$viiiii (func (param i32 i32 i32 i32 i32)))
  (type $FUNCSIG$vi (func (param i32)))
  (type $FUNCSIG$ddd (func (param f64 f64) (result f64)))
  (type $FUNCSIG$i (func (result i32)))
  (type $FUNCSIG$viii (func (param i32 i32 i32)))
  (import "env" "STACKTOP" (global $STACKTOP$asm2wasm$import i32))
  (import "env" "STACK_MAX" (global $STACK_MAX$asm2wasm$import i32))
  (import "env" "DYNAMICTOP_PTR" (global $DYNAMICTOP_PTR$asm2wasm$import i32))
  (import "env" "tempDoublePtr" (global $tempDoublePtr$asm2wasm$import i32))
  (import "env" "ABORT" (global $ABORT$asm2wasm$import i32))
  (import "global" "NaN" (global $nan$asm2wasm$import f64))
  (import "global" "Infinity" (global $inf$asm2wasm$import f64))
  (import "global.Math" "pow" (func $Math_pow (param f64 f64) (result f64)))
  (import "env" "abort" (func $abort (param i32)))
  (import "env" "enlargeMemory" (func $enlargeMemory (result i32)))
  (import "env" "getTotalMemory" (func $getTotalMemory (result i32)))
  (import "env" "abortOnCannotGrowMemory" (func $abortOnCannotGrowMemory (result i32)))
  (import "env" "_pthread_cleanup_pop" (func $_pthread_cleanup_pop (param i32)))
  (import "env" "___syscall54" (func $___syscall54 (param i32 i32) (result i32)))
  (import "env" "___syscall6" (func $___syscall6 (param i32 i32) (result i32)))
  (import "env" "___assert_fail" (func $___assert_fail (param i32 i32 i32 i32)))
  (import "env" "___cxa_allocate_exception" (func $___cxa_allocate_exception (param i32) (result i32)))
  (import "env" "___setErrNo" (func $___setErrNo (param i32)))
  (import "env" "___cxa_begin_catch" (func $___cxa_begin_catch (param i32) (result i32)))
  (import "env" "_emscripten_memcpy_big" (func $_emscripten_memcpy_big (param i32 i32 i32) (result i32)))
  (import "env" "_pthread_getspecific" (func $_pthread_getspecific (param i32) (result i32)))
  (import "env" "_pthread_once" (func $_pthread_once (param i32 i32) (result i32)))
  (import "env" "_pthread_key_create" (func $_pthread_key_create (param i32 i32) (result i32)))
  (import "env" "_pthread_setspecific" (func $_pthread_setspecific (param i32 i32) (result i32)))
  (import "env" "___cxa_throw" (func $___cxa_throw (param i32 i32 i32)))
  (import "env" "_abort" (func $_abort))
  (import "env" "_pthread_cleanup_push" (func $_pthread_cleanup_push (param i32 i32)))
  (import "env" "___syscall140" (func $___syscall140 (param i32 i32) (result i32)))
  (import "env" "___syscall146" (func $___syscall146 (param i32 i32) (result i32)))
  (import "asm2wasm" "f64-to-int" (func $f64-to-int (param f64) (result i32)))
  (import "asm2wasm" "i32s-div" (func $i32s-div (param i32 i32) (result i32)))
  (import "asm2wasm" "i32s-rem" (func $i32s-rem (param i32 i32) (result i32)))
  (import "asm2wasm" "i32u-rem" (func $i32u-rem (param i32 i32) (result i32)))
  (import "asm2wasm" "i32u-div" (func $i32u-div (param i32 i32) (result i32)))
  (import "env" "memory" (memory $0 256 256))
  (import "env" "table" (table 48 48 anyfunc))
  (import "env" "memoryBase" (global $memoryBase i32))
  (import "env" "tableBase" (global $tableBase i32))
  (elem (i32.const 0) $b0 $___stdio_write $___stdio_seek $___stdout_write $__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv $b0 $b0 $b0 $b1 $__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib $__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib $__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib $b2 $__ZN12EventHandlerC2Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZN12EventHandlerC2Ev $__ZN12EventHandlerC2Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZN12EventHandlerC2Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $__ZN10__cxxabiv117__class_type_infoD0Ev $_cleanup_387 $__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv $b2 $b2 $b2 $b2 $b2 $b3 $__ZN5Field10applyForceEP8Particle $__ZN13MagneticField10applyForceEP8Particle $b3 $b4 $___stdio_close $__ZNKSt9bad_alloc4whatEv $b4 $b5 $__ZL25default_terminate_handlerv $__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev $b5 $b6 $__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib $__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib $__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib $b7 $__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi $__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi $__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi)
  (data (i32.const 1024) "x\07\00\00\98\07\00\00\00\00\00\00\01\00\00\00\18\04\00\00\02\08\00\00\14\07\00\00\9f\07\00\00<\07\00\00\ac\07\00\00\00\04")
  (data (i32.const 1075) "@\fb!\f9?\00\00\00\00-Dt>\00\00\00\80\98F\f8<\00\00\00`Q\ccx;\00\00\00\80\83\1b\f09\00\00\00@ %z8\00\00\00\80\"\82\e36\00\00\00\00\1d\f3i5\14\07\00\00\a1\12\00\00<\07\00\00\01\13\00\00\88\04\00\00\00\00\00\00<\07\00\00\ae\12\00\00\98\04\00\00\00\00\00\00\14\07\00\00\cf\12\00\00<\07\00\00\dc\12\00\00x\04\00\00\00\00\00\00<\07\00\00\f2\13\00\00p\04\00\00\00\00\00\00<\07\00\00#\14\00\00\88\04\00\00\00\00\00\00<\07\00\00\ff\13\00\00\c0\04\00\00\00\00\00\00<\07\00\00E\14\00\00x\04")
  (data (i32.const 1269) "\04\00\00\01\00\00\00\00\00\00\00 \04\00\00\02\00\00\00\0c\05\00\00\05")
  (data (i32.const 1304) "\01")
  (data (i32.const 1328) "\01\00\00\00\02\00\00\00\ac\16")
  (data (i32.const 1352) "\02")
  (data (i32.const 1367) "\ff\ff\ff\ff\ff")
  (data (i32.const 1404) "\80\05\00\00\05")
  (data (i32.const 1420) "\01")
  (data (i32.const 1444) "\03\00\00\00\02\00\00\00\b4\16\00\00\00\04")
  (data (i32.const 1468) "\01")
  (data (i32.const 1483) "\n\ff\ff\ff\ff")
  (data (i32.const 1520) "\03\00\00\00\04\00\00\00\04\00\00\00\06\00\00\00\83\f9\a2\00DNn\00\fc)\15\00\d1W\'\00\dd4\f5\00b\db\c0\00<\99\95\00A\90C\00cQ\fe\00\bb\de\ab\00\b7a\c5\00:n$\00\d2MB\00I\06\e0\00\t\ea.\00\1c\92\d1\00\eb\1d\fe\00)\b1\1c\00\e8>\a7\00\f55\82\00D\bb.\00\9c\e9\84\00\b4&p\00A~_\00\d6\919\00S\839\00\9c\f49\00\8b_\84\00(\f9\bd\00\f8\1f;\00\de\ff\97\00\0f\98\05\00\11/\ef\00\nZ\8b\00m\1fm\00\cf~6\00\t\cb\'\00FO\b7\00\9ef?\00-\ea_\00\ba\'u\00\e5\eb\c7\00={\f1\00\f79\07\00\92R\8a\00\fbk\ea\00\1f\b1_\00\08]\8d\000\03V\00{\fcF\00\f0\abk\00 \bc\cf\006\f4\9a\00\e3\a9\1d\00^a\91\00\08\1b\e6\00\85\99e\00\a0\14_\00\8d@h\00\80\d8\ff\00\'sM\00\06\061\00\caV\15\00\c9\a8s\00{\e2`\00k\8c\c0\00\01\00\00\00\00\00\00\00x\04\00\00\01\00\00\00\02\00\00\00\03\00\00\00\04\00\00\00\04\00\00\00\01\00\00\00\01\00\00\00\01\00\00\00\00\00\00\00\a0\04\00\00\01\00\00\00\05\00\00\00\03\00\00\00\04\00\00\00\04\00\00\00\02\00\00\00\02\00\00\00\02\00\00\00\00\00\00\00\b0\04\00\00\06\00\00\00\07\00\00\00\02\00\00\00\00\00\00\00\e0\04\00\00\01\00\00\00\08\00\00\00\03\00\00\00\04\00\00\00\04\00\00\00\03\00\00\00\03\00\00\00\03\00\00\005Field\0010BaseObject\0013MagneticField\00data\00\11\00\n\00\11\11\11\00\00\00\00\05\00\00\00\00\00\00\t\00\00\00\00\0b")
  (data (i32.const 2017) "\11\00\0f\n\11\11\11\03\n\07\00\01\13\t\0b\0b\00\00\t\06\0b\00\00\0b\00\06\11\00\00\00\11\11\11")
  (data (i32.const 2066) "\0b")
  (data (i32.const 2075) "\11\00\n\n\11\11\11\00\n\00\00\02\00\t\0b\00\00\00\t\00\0b\00\00\0b")
  (data (i32.const 2124) "\0c")
  (data (i32.const 2136) "\0c\00\00\00\00\0c\00\00\00\00\t\0c\00\00\00\00\00\0c\00\00\0c")
  (data (i32.const 2182) "\0e")
  (data (i32.const 2194) "\0d\00\00\00\04\0d\00\00\00\00\t\0e\00\00\00\00\00\0e\00\00\0e")
  (data (i32.const 2240) "\10")
  (data (i32.const 2252) "\0f\00\00\00\00\0f\00\00\00\00\t\10\00\00\00\00\00\10\00\00\10\00\00\12\00\00\00\12\12\12")
  (data (i32.const 2307) "\12\00\00\00\12\12\12\00\00\00\00\00\00\t")
  (data (i32.const 2356) "\0b")
  (data (i32.const 2368) "\n\00\00\00\00\n\00\00\00\00\t\0b\00\00\00\00\00\0b\00\00\0b")
  (data (i32.const 2414) "\0c")
  (data (i32.const 2426) "\0c\00\00\00\00\0c\00\00\00\00\t\0c\00\00\00\00\00\0c\00\00\0c\00\000123456789ABCDEF-+   0X0x\00(null)\00-0X+0X 0X-0x+0x 0x\00inf\00INF\00nan\00NAN\00.\00T!\"\19\0d\01\02\03\11K\1c\0c\10\04\0b\1d\12\1e\'hnopqb \05\06\0f\13\14\15\1a\08\16\07($\17\18\t\n\0e\1b\1f%#\83\82}&*+<=>?CGJMXYZ[\\]^_`acdefgijklrstyz{|\00Illegal byte sequence\00Domain error\00Result not representable\00Not a tty\00Permission denied\00Operation not permitted\00No such file or directory\00No such process\00File exists\00Value too large for data type\00No space left on device\00Out of memory\00Resource busy\00Interrupted system call\00Resource temporarily unavailable\00Invalid seek\00Cross-device link\00Read-only file system\00Directory not empty\00Connection reset by peer\00Operation timed out\00Connection refused\00Host is down\00Host is unreachable\00Address in use\00Broken pipe\00I/O error\00No such device or address\00Block device required\00No such device\00Not a directory\00Is a directory\00Text file busy\00Exec format error\00Invalid argument\00Argument list too long\00Symbolic link loop\00Filename too long\00Too many open files in system\00No file descriptors available\00Bad file descriptor\00No child process\00Bad address\00File too large\00Too many links\00No locks available\00Resource deadlock would occur\00State not recoverable\00Previous owner died\00Operation canceled\00Function not implemented\00No message of desired type\00Identifier removed\00Device not a stream\00No data available\00Device timeout\00Out of streams resources\00Link has been severed\00Protocol error\00Bad message\00File descriptor in bad state\00Not a socket\00Destination address required\00Message too large\00Protocol wrong type for socket\00Protocol not available\00Protocol not supported\00Socket type not supported\00Not supported\00Protocol family not supported\00Address family not supported by protocol\00Address not available\00Network is down\00Network unreachable\00Connection reset by network\00Connection aborted\00No buffer space available\00Socket is connected\00Socket not connected\00Cannot send after socket shutdown\00Operation already in progress\00Operation in progress\00Stale file handle\00Remote I/O error\00Quota exceeded\00No medium found\00Wrong medium type\00No error information\00\00!\"vector length_error\"\00/Users/leefsmp/emsdk/emscripten/incoming/system/include/libcxx/vector\00!\"basic_string length_error\"\00/Users/leefsmp/emsdk/emscripten/incoming/system/include/libcxx/string\00__throw_length_error\00terminating with %s exception of type %s: %s\00terminating with %s exception of type %s\00terminating with %s foreign exception\00terminating\00uncaught\00St9exception\00N10__cxxabiv116__shim_type_infoE\00St9type_info\00N10__cxxabiv120__si_class_type_infoE\00N10__cxxabiv117__class_type_infoE\00pthread_once failure in __cxa_get_globals_fast()\00cannot create pthread key for __cxa_get_globals()\00cannot zero out thread value for __cxa_get_globals()\00terminate_handler unexpectedly returned\00std::bad_alloc\00St9bad_alloc\00N10__cxxabiv119__pointer_type_infoE\00N10__cxxabiv117__pbase_type_infoE\00N10__cxxabiv121__vmi_class_type_infoE")
  (global $STACKTOP (mut i32) (get_global $STACKTOP$asm2wasm$import))
  (global $STACK_MAX (mut i32) (get_global $STACK_MAX$asm2wasm$import))
  (global $DYNAMICTOP_PTR (mut i32) (get_global $DYNAMICTOP_PTR$asm2wasm$import))
  (global $tempDoublePtr (mut i32) (get_global $tempDoublePtr$asm2wasm$import))
  (global $ABORT (mut i32) (get_global $ABORT$asm2wasm$import))
  (global $__THREW__ (mut i32) (i32.const 0))
  (global $threwValue (mut i32) (i32.const 0))
  (global $setjmpId (mut i32) (i32.const 0))
  (global $undef (mut i32) (i32.const 0))
  (global $nan (mut f64) (get_global $nan$asm2wasm$import))
  (global $inf (mut f64) (get_global $inf$asm2wasm$import))
  (global $tempInt (mut i32) (i32.const 0))
  (global $tempBigInt (mut i32) (i32.const 0))
  (global $tempBigIntP (mut i32) (i32.const 0))
  (global $tempBigIntS (mut i32) (i32.const 0))
  (global $tempBigIntR (mut f64) (f64.const 0))
  (global $tempBigIntI (mut i32) (i32.const 0))
  (global $tempBigIntD (mut i32) (i32.const 0))
  (global $tempValue (mut i32) (i32.const 0))
  (global $tempDouble (mut f64) (f64.const 0))
  (global $tempRet0 (mut i32) (i32.const 0))
  (global $tempFloat (mut f32) (f32.const 0))
  (global $f0 (mut f32) (f32.const 0))
  (export "_emscripten_bind_ParticleSystem_getObjectById_1" (func $_emscripten_bind_ParticleSystem_getObjectById_1))
  (export "_emscripten_bind_BaseObject_getTransformable_0" (func $_emscripten_bind_BaseObject_getTransformable_0))
  (export "_emscripten_bind_MagneticField_MagneticField_1" (func $_emscripten_bind_MagneticField_MagneticField_1))
  (export "_emscripten_bind_MagneticField_getOffset_0" (func $_emscripten_bind_MagneticField_getOffset_0))
  (export "_emscripten_bind_Vector_getZ_0" (func $_emscripten_bind_Vector_getZ_0))
  (export "_emscripten_bind_ParticleSystem_on_2" (func $_emscripten_bind_ParticleSystem_on_2))
  (export "_emscripten_bind_ParticleSystem_ParticleSystem_1" (func $_emscripten_bind_ParticleSystem_ParticleSystem_1))
  (export "_sbrk" (func $_sbrk))
  (export "_emscripten_bind_MagneticField_getForce_0" (func $_emscripten_bind_MagneticField_getForce_0))
  (export "_memcpy" (func $_memcpy))
  (export "_emscripten_bind_Particle_getLifeTime_0" (func $_emscripten_bind_Particle_getLifeTime_0))
  (export "_emscripten_bind_ParticleSystem_setMaxParticles_1" (func $_emscripten_bind_ParticleSystem_setMaxParticles_1))
  (export "_emscripten_bind_BaseObject___destroy___0" (func $_emscripten_bind_BaseObject___destroy___0))
  (export "_emscripten_bind_Vector_Vector_3" (func $_emscripten_bind_Vector_Vector_3))
  (export "_emscripten_bind_Vector_set_3" (func $_emscripten_bind_Vector_set_3))
  (export "_emscripten_bind_ParticleSystem_getEmitter_1" (func $_emscripten_bind_ParticleSystem_getEmitter_1))
  (export "_emscripten_bind_Particle_getAcceleration_0" (func $_emscripten_bind_Particle_getAcceleration_0))
  (export "___cxa_can_catch" (func $___cxa_can_catch))
  (export "_free" (func $_free))
  (export "_emscripten_bind_Vector_withinSphere_2" (func $_emscripten_bind_Vector_withinSphere_2))
  (export "_emscripten_bind_Vector_getX_0" (func $_emscripten_bind_Vector_getX_0))
  (export "_main" (func $_main))
  (export "_emscripten_bind_BaseObject_getType_0" (func $_emscripten_bind_BaseObject_getType_0))
  (export "_emscripten_bind_MagneticField_setForce_1" (func $_emscripten_bind_MagneticField_setForce_1))
  (export "_emscripten_bind_ParticleSystem_addEmitter_1" (func $_emscripten_bind_ParticleSystem_addEmitter_1))
  (export "_emscripten_bind_Vector_getY_0" (func $_emscripten_bind_Vector_getY_0))
  (export "_emscripten_bind_Particle_getDof_0" (func $_emscripten_bind_Particle_getDof_0))
  (export "_emscripten_bind_ParticleSystem_step_1" (func $_emscripten_bind_ParticleSystem_step_1))
  (export "_emscripten_bind_ParticleEmitter_getSpread_0" (func $_emscripten_bind_ParticleEmitter_getSpread_0))
  (export "_emscripten_bind_ParticleEmitter_setVelocity_1" (func $_emscripten_bind_MagneticField_setForce_1))
  (export "_emscripten_bind_EventHandler_EventHandler_0" (func $_emscripten_bind_EventHandler_EventHandler_0))
  (export "___cxa_is_pointer_type" (func $___cxa_is_pointer_type))
  (export "_emscripten_bind_EmString_c_str_0" (func $_emscripten_bind_EmString_c_str_0))
  (export "_emscripten_bind_ParticleEmitter_getOffset_0" (func $_emscripten_bind_ParticleEmitter_getOffset_0))
  (export "_emscripten_bind_ParticleEmitter_setCharge_1" (func $_emscripten_bind_ParticleEmitter_setCharge_1))
  (export "_emscripten_bind_ParticleSystem___destroy___0" (func $_emscripten_bind_ParticleSystem___destroy___0))
  (export "_emscripten_bind_MagneticField_setTransformable_1" (func $_emscripten_bind_MagneticField_setTransformable_1))
  (export "_emscripten_bind_BaseObject_getSelectable_0" (func $_emscripten_bind_BaseObject_getSelectable_0))
  (export "_emscripten_bind_ParticleEmitter_setOffset_3" (func $_emscripten_bind_ParticleEmitter_setOffset_3))
  (export "_emscripten_bind_Particle___destroy___0" (func $_emscripten_bind_BaseObject___destroy___0))
  (export "_emscripten_bind_ParticleSystem_destroy_0" (func $_emscripten_bind_ParticleSystem_destroy_0))
  (export "_emscripten_bind_BaseObject_setPosition_3" (func $_emscripten_bind_BaseObject_setPosition_3))
  (export "_emscripten_bind_ParticleEmitter_setEmissionRate_1" (func $_emscripten_bind_ParticleEmitter_setEmissionRate_1))
  (export "_emscripten_bind_ParticleEmitter_setSelectable_1" (func $_emscripten_bind_BaseObject_setSelectable_1))
  (export "_emscripten_bind_ParticleEmitter_ParticleEmitter_1" (func $_emscripten_bind_ParticleEmitter_ParticleEmitter_1))
  (export "_emscripten_bind_ParticleEmitter___destroy___0" (func $_emscripten_bind_BaseObject___destroy___0))
  (export "_emscripten_bind_MagneticField_getPosition_0" (func $_emscripten_bind_MagneticField_getPosition_0))
  (export "_emscripten_bind_ParticleEmitter_getCharge_0" (func $_emscripten_bind_ParticleEmitter_getCharge_0))
  (export "_emscripten_bind_MagneticField___destroy___0" (func $_emscripten_bind_BaseObject___destroy___0))
  (export "_emscripten_bind_Vector_magnitude_0" (func $_emscripten_bind_Vector_magnitude_0))
  (export "_emscripten_bind_EmString___destroy___0" (func $_emscripten_bind_EmString___destroy___0))
  (export "_emscripten_bind_ParticleSystem_initParticleLoop_0" (func $_emscripten_bind_ParticleSystem_initParticleLoop_0))
  (export "_emscripten_bind_ParticleEmitter_setTransformable_1" (func $_emscripten_bind_BaseObject_setTransformable_1))
  (export "_emscripten_bind_Particle_getRecycled_0" (func $_emscripten_bind_Particle_getRecycled_0))
  (export "_emscripten_bind_VoidPtr___destroy___0" (func $_emscripten_bind_BaseObject___destroy___0))
  (export "_memset" (func $_memset))
  (export "_emscripten_bind_Particle_getRadius_0" (func $_emscripten_bind_Particle_getRadius_0))
  (export "_emscripten_bind_BaseObject_getId_0" (func $_emscripten_bind_BaseObject_getId_0))
  (export "_emscripten_bind_BaseObject_setSelectable_1" (func $_emscripten_bind_BaseObject_setSelectable_1))
  (export "_emscripten_bind_EmString_EmString_0" (func $_emscripten_bind_EmString_EmString_0))
  (export "_emscripten_bind_EmString_EmString_1" (func $_emscripten_bind_EmString_EmString_1))
  (export "_emscripten_bind_ParticleSystem_addMagneticField_1" (func $_emscripten_bind_ParticleSystem_addMagneticField_1))
  (export "_emscripten_bind_Particle_Particle_0" (func $_emscripten_bind_Particle_Particle_0))
  (export "_emscripten_bind_Particle_getVelocity_0" (func $_emscripten_bind_Particle_getVelocity_0))
  (export "_emscripten_bind_Particle_setLifeTime_1" (func $_emscripten_bind_Particle_setLifeTime_1))
  (export "_emscripten_bind_ParticleSystem_getMagneticField_1" (func $_emscripten_bind_ParticleSystem_getMagneticField_1))
  (export "_emscripten_bind_ParticleEmitter_getVelocity_0" (func $_emscripten_bind_MagneticField_getForce_0))
  (export "_malloc" (func $_malloc))
  (export "_emscripten_bind_EventHandler___destroy___0" (func $_emscripten_bind_BaseObject___destroy___0))
  (export "_emscripten_bind_ParticleEmitter_getEmissionRate_0" (func $_emscripten_bind_ParticleEmitter_getEmissionRate_0))
  (export "_emscripten_bind_BaseObject_setTransformable_1" (func $_emscripten_bind_BaseObject_setTransformable_1))
  (export "_emscripten_bind_Particle_getPosition_0" (func $_emscripten_bind_Particle_getPosition_0))
  (export "_emscripten_bind_ParticleEmitter_setPosition_3" (func $_emscripten_bind_BaseObject_setPosition_3))
  (export "_emscripten_bind_EventHandler_handleEvent_1" (func $_emscripten_bind_EventHandler_handleEvent_1))
  (export "_emscripten_bind_Vector___destroy___0" (func $_emscripten_bind_BaseObject___destroy___0))
  (export "_emscripten_bind_MagneticField_setOffset_3" (func $_emscripten_bind_MagneticField_setOffset_3))
  (export "_emscripten_bind_ParticleSystem_nextParticle_0" (func $_emscripten_bind_ParticleSystem_nextParticle_0))
  (export "_emscripten_bind_ParticleEmitter_setSpread_1" (func $_emscripten_bind_ParticleEmitter_setSpread_1))
  (export "_emscripten_bind_ParticleSystem_setDof_3" (func $_emscripten_bind_ParticleSystem_setDof_3))
  (export "_pthread_self" (func $_main))
  (export "_emscripten_bind_BaseObject_BaseObject_2" (func $_emscripten_bind_BaseObject_BaseObject_2))
  (export "_emscripten_bind_ParticleEmitter_getPosition_0" (func $_emscripten_bind_ParticleEmitter_getPosition_0))
  (export "_emscripten_bind_ParticleSystem_getMaxParticles_0" (func $_emscripten_bind_ParticleSystem_getMaxParticles_0))
  (export "_emscripten_bind_MagneticField_setPosition_3" (func $_emscripten_bind_MagneticField_setPosition_3))
  (export "_memmove" (func $_memmove))
  (export "_emscripten_bind_MagneticField_setSelectable_1" (func $_emscripten_bind_MagneticField_setSelectable_1))
  (export "runPostSets" (func $runPostSets))
  (export "stackAlloc" (func $stackAlloc))
  (export "stackSave" (func $stackSave))
  (export "stackRestore" (func $stackRestore))
  (export "establishStackSpace" (func $establishStackSpace))
  (export "setThrew" (func $setThrew))
  (export "setTempRet0" (func $setTempRet0))
  (export "getTempRet0" (func $getTempRet0))
  (export "dynCall_iiii" (func $dynCall_iiii))
  (export "dynCall_viiiii" (func $dynCall_viiiii))
  (export "dynCall_vi" (func $dynCall_vi))
  (export "dynCall_vii" (func $dynCall_vii))
  (export "dynCall_ii" (func $dynCall_ii))
  (export "dynCall_v" (func $dynCall_v))
  (export "dynCall_viiiiii" (func $dynCall_viiiiii))
  (export "dynCall_viiii" (func $dynCall_viiii))
  (func $stackAlloc (param $0 i32) (result i32)
    (local $1 i32)
    (set_local $1
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (get_local $0)
      )
    )
    (set_global $STACKTOP
      (i32.and
        (i32.add
          (get_global $STACKTOP)
          (i32.const 15)
        )
        (i32.const -16)
      )
    )
    (get_local $1)
  )
  (func $stackSave (result i32)
    (get_global $STACKTOP)
  )
  (func $stackRestore (param $0 i32)
    (set_global $STACKTOP
      (get_local $0)
    )
  )
  (func $establishStackSpace (param $0 i32) (param $1 i32)
    (set_global $STACKTOP
      (get_local $0)
    )
    (set_global $STACK_MAX
      (get_local $1)
    )
  )
  (func $setThrew (param $0 i32) (param $1 i32)
    (if
      (i32.eqz
        (get_global $__THREW__)
      )
      (block
        (set_global $__THREW__
          (get_local $0)
        )
        (set_global $threwValue
          (get_local $1)
        )
      )
    )
  )
  (func $setTempRet0 (param $0 i32)
    (set_global $tempRet0
      (get_local $0)
    )
  )
  (func $getTempRet0 (result i32)
    (get_global $tempRet0)
  )
  (func $__ZN5Field10applyForceEP8Particle (param $0 i32) (param $1 i32)
    (nop)
  )
  (func $__ZN5FieldC2Eii (param $0 i32) (param $1 i32) (param $2 i32)
    (call $__ZN10BaseObjectC2Eii
      (i32.add
        (get_local $0)
        (i32.const 8)
      )
      (get_local $1)
      (get_local $2)
    )
    (i32.store
      (get_local $0)
      (i32.const 1272)
    )
  )
  (func $__ZN13MagneticField10applyForceEP8Particle (param $0 i32) (param $1 i32)
    (local $2 f64)
    (local $3 f64)
    (local $4 f64)
    (local $5 f64)
    (local $6 i32)
    (set_local $2
      (f64.sub
        (f64.load offset=8
          (tee_local $6
            (i32.add
              (get_local $0)
              (i32.const 8)
            )
          )
        )
        (f64.load
          (call $__ZN8Particle11getPositionEv
            (get_local $1)
          )
        )
      )
    )
    (set_local $3
      (f64.sub
        (f64.load offset=16
          (get_local $6)
        )
        (f64.load offset=8
          (call $__ZN8Particle11getPositionEv
            (get_local $1)
          )
        )
      )
    )
    (set_local $4
      (f64.sub
        (f64.load offset=24
          (get_local $6)
        )
        (f64.load offset=16
          (call $__ZN8Particle11getPositionEv
            (get_local $1)
          )
        )
      )
    )
    (if
      (i32.eqz
        (f64.gt
          (f64.abs
            (tee_local $5
              (f64.div
                (f64.mul
                  (call $__ZN8Particle9getChargeEv
                    (get_local $1)
                  )
                  (f64.load offset=72
                    (get_local $0)
                  )
                )
                (call $Math_pow
                  (f64.add
                    (f64.add
                      (f64.mul
                        (get_local $2)
                        (get_local $2)
                      )
                      (f64.mul
                        (get_local $3)
                        (get_local $3)
                      )
                    )
                    (f64.mul
                      (get_local $4)
                      (get_local $4)
                    )
                  )
                  (f64.const 1.5)
                )
              )
            )
          )
          (f64.const 0.001)
        )
      )
      (return)
    )
    (f64.store
      (tee_local $0
        (call $__ZN8Particle15getAccelerationEv
          (get_local $1)
        )
      )
      (f64.add
        (f64.mul
          (get_local $2)
          (get_local $5)
        )
        (f64.load
          (get_local $0)
        )
      )
    )
    (f64.store
      (tee_local $0
        (i32.add
          (call $__ZN8Particle15getAccelerationEv
            (get_local $1)
          )
          (i32.const 8)
        )
      )
      (f64.add
        (f64.mul
          (get_local $3)
          (get_local $5)
        )
        (f64.load
          (get_local $0)
        )
      )
    )
    (f64.store
      (tee_local $0
        (i32.add
          (call $__ZN8Particle15getAccelerationEv
            (get_local $1)
          )
          (i32.const 16)
        )
      )
      (f64.add
        (f64.mul
          (get_local $4)
          (get_local $5)
        )
        (f64.load
          (get_local $0)
        )
      )
    )
  )
  (func $__ZN13MagneticFieldC2Ei (param $0 i32) (param $1 i32)
    (call $__ZN5FieldC2Eii
      (get_local $0)
      (get_local $1)
      (i32.const 1)
    )
    (i32.store
      (get_local $0)
      (i32.const 1284)
    )
  )
  (func $__ZN13MagneticField8setForceEd (param $0 i32) (param $1 f64)
    (f64.store offset=72
      (get_local $0)
      (get_local $1)
    )
  )
  (func $__ZN13MagneticField8getForceEv (param $0 i32) (result f64)
    (f64.load offset=72
      (get_local $0)
    )
  )
  (func $_main (result i32)
    (i32.const 0)
  )
  (func $__ZN10BaseObjectC2Eii (param $0 i32) (param $1 i32) (param $2 i32)
    (call $__ZN6VectorC2Ev
      (i32.add
        (get_local $0)
        (i32.const 8)
      )
    )
    (call $__ZN6VectorC2Ev
      (i32.add
        (get_local $0)
        (i32.const 32)
      )
    )
    (i32.store8
      (get_local $0)
      (i32.const 1)
    )
    (i32.store8 offset=1
      (get_local $0)
      (i32.const 1)
    )
    (i32.store offset=56
      (get_local $0)
      (get_local $2)
    )
    (i32.store offset=60
      (get_local $0)
      (get_local $1)
    )
  )
  (func $__ZN10BaseObject7getTypeEv (param $0 i32) (result i32)
    (i32.load offset=56
      (get_local $0)
    )
  )
  (func $__ZN10BaseObject5getIdEv (param $0 i32) (result i32)
    (i32.load offset=60
      (get_local $0)
    )
  )
  (func $__ZN10BaseObject11getPositionEv (param $0 i32) (result i32)
    (i32.add
      (get_local $0)
      (i32.const 8)
    )
  )
  (func $__ZN10BaseObject11setPositionEddd (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64)
    (call $__ZN6VectorC2Eddd
      (i32.add
        (get_local $0)
        (i32.const 8)
      )
      (get_local $1)
      (get_local $2)
      (get_local $3)
    )
  )
  (func $__ZN10BaseObject9getOffsetEv (param $0 i32) (result i32)
    (i32.add
      (get_local $0)
      (i32.const 32)
    )
  )
  (func $__ZN10BaseObject9setOffsetEddd (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64)
    (call $__ZN6VectorC2Eddd
      (i32.add
        (get_local $0)
        (i32.const 32)
      )
      (get_local $1)
      (get_local $2)
      (get_local $3)
    )
  )
  (func $__ZN10BaseObject16getTransformableEv (param $0 i32) (result i32)
    (i32.ne
      (i32.load8_s
        (get_local $0)
      )
      (i32.const 0)
    )
  )
  (func $__ZN10BaseObject16setTransformableEb (param $0 i32) (param $1 i32)
    (i32.store8
      (get_local $0)
      (i32.and
        (get_local $1)
        (i32.const 1)
      )
    )
  )
  (func $__ZN10BaseObject13getSelectableEv (param $0 i32) (result i32)
    (i32.ne
      (i32.load8_s offset=1
        (get_local $0)
      )
      (i32.const 0)
    )
  )
  (func $__ZN10BaseObject13setSelectableEb (param $0 i32) (param $1 i32)
    (i32.store8 offset=1
      (get_local $0)
      (i32.and
        (get_local $1)
        (i32.const 1)
      )
    )
  )
  (func $__ZN8ParticleC2Ev (param $0 i32)
    (call $__ZN6VectorC2Ev
      (get_local $0)
    )
    (call $__ZN6VectorC2Ev
      (i32.add
        (get_local $0)
        (i32.const 24)
      )
    )
    (call $__ZN6VectorC2Ev
      (i32.add
        (get_local $0)
        (i32.const 48)
      )
    )
    (call $__ZN6VectorC2Ev
      (i32.add
        (get_local $0)
        (i32.const 72)
      )
    )
    (f64.store offset=104
      (get_local $0)
      (f64.const 0.03)
    )
    (i32.store8 offset=120
      (get_local $0)
      (i32.const 0)
    )
    (f64.store offset=96
      (get_local $0)
      (f64.const 30)
    )
  )
  (func $__ZN8Particle5resetEv (param $0 i32)
    (i32.store8 offset=120
      (get_local $0)
      (i32.const 0)
    )
    (f64.store offset=96
      (get_local $0)
      (f64.const 30)
    )
  )
  (func $__ZN8Particle15getAccelerationEv (param $0 i32) (result i32)
    (get_local $0)
  )
  (func $__ZN8Particle11getPositionEv (param $0 i32) (result i32)
    (i32.add
      (get_local $0)
      (i32.const 48)
    )
  )
  (func $__ZN8Particle11getVelocityEv (param $0 i32) (result i32)
    (i32.add
      (get_local $0)
      (i32.const 24)
    )
  )
  (func $__ZN8Particle6getDofEv (param $0 i32) (result i32)
    (i32.add
      (get_local $0)
      (i32.const 72)
    )
  )
  (func $__ZN8Particle6setDofEP6Vector (param $0 i32) (param $1 i32)
    (call $__ZN6Vector3setERKS_
      (i32.add
        (get_local $0)
        (i32.const 72)
      )
      (get_local $1)
    )
  )
  (func $__ZN8Particle9setChargeEd (param $0 i32) (param $1 f64)
    (f64.store offset=112
      (get_local $0)
      (get_local $1)
    )
  )
  (func $__ZN8Particle9getChargeEv (param $0 i32) (result f64)
    (f64.load offset=112
      (get_local $0)
    )
  )
  (func $__ZN8Particle11setRecycledEb (param $0 i32) (param $1 i32)
    (i32.store8 offset=120
      (get_local $0)
      (i32.and
        (get_local $1)
        (i32.const 1)
      )
    )
  )
  (func $__ZN8Particle11getRecycledEv (param $0 i32) (result i32)
    (i32.ne
      (i32.load8_s offset=120
        (get_local $0)
      )
      (i32.const 0)
    )
  )
  (func $__ZN8Particle11getLifeTimeEv (param $0 i32) (result f64)
    (f64.load offset=96
      (get_local $0)
    )
  )
  (func $__ZN8Particle11setLifeTimeEd (param $0 i32) (param $1 f64)
    (f64.store offset=96
      (get_local $0)
      (get_local $1)
    )
  )
  (func $__ZN8Particle9getRadiusEv (param $0 i32) (result f64)
    (f64.load offset=104
      (get_local $0)
    )
  )
  (func $__ZN8Particle4stepEd (param $0 i32) (param $1 f64)
    (local $2 i32)
    (local $3 f64)
    (f64.store
      (tee_local $2
        (i32.add
          (get_local $0)
          (i32.const 96)
        )
      )
      (f64.sub
        (f64.load
          (get_local $2)
        )
        (get_local $1)
      )
    )
    (set_local $3
      (f64.add
        (f64.load
          (tee_local $2
            (i32.add
              (get_local $0)
              (i32.const 24)
            )
          )
        )
        (f64.mul
          (f64.load
            (get_local $0)
          )
          (get_local $1)
        )
      )
    )
    (f64.store
      (get_local $2)
      (get_local $3)
    )
    (f64.store
      (tee_local $2
        (i32.add
          (get_local $0)
          (i32.const 48)
        )
      )
      (f64.add
        (f64.load
          (get_local $2)
        )
        (f64.mul
          (f64.mul
            (get_local $3)
            (f64.load offset=72
              (get_local $0)
            )
          )
          (get_local $1)
        )
      )
    )
    (set_local $3
      (f64.add
        (f64.load
          (tee_local $2
            (i32.add
              (get_local $0)
              (i32.const 32)
            )
          )
        )
        (f64.mul
          (f64.load offset=8
            (get_local $0)
          )
          (get_local $1)
        )
      )
    )
    (f64.store
      (get_local $2)
      (get_local $3)
    )
    (f64.store
      (tee_local $2
        (i32.add
          (get_local $0)
          (i32.const 56)
        )
      )
      (f64.add
        (f64.load
          (get_local $2)
        )
        (f64.mul
          (f64.mul
            (get_local $3)
            (f64.load offset=80
              (get_local $0)
            )
          )
          (get_local $1)
        )
      )
    )
    (set_local $3
      (f64.add
        (f64.load
          (tee_local $2
            (i32.add
              (get_local $0)
              (i32.const 40)
            )
          )
        )
        (f64.mul
          (f64.load offset=16
            (get_local $0)
          )
          (get_local $1)
        )
      )
    )
    (f64.store
      (get_local $2)
      (get_local $3)
    )
    (f64.store
      (tee_local $2
        (i32.add
          (get_local $0)
          (i32.const 64)
        )
      )
      (f64.add
        (f64.load
          (get_local $2)
        )
        (f64.mul
          (f64.mul
            (get_local $3)
            (f64.load offset=88
              (get_local $0)
            )
          )
          (get_local $1)
        )
      )
    )
  )
  (func $__ZN15ParticleEmitterC2Ei (param $0 i32) (param $1 i32)
    (call $__ZN10BaseObjectC2Eii
      (get_local $0)
      (get_local $1)
      (i32.const 0)
    )
  )
  (func $__ZN15ParticleEmitter15setEmissionRateEd (param $0 i32) (param $1 f64)
    (f64.store offset=64
      (get_local $0)
      (get_local $1)
    )
  )
  (func $__ZN15ParticleEmitter15getEmissionRateEv (param $0 i32) (result f64)
    (f64.load offset=64
      (get_local $0)
    )
  )
  (func $__ZN15ParticleEmitter9setSpreadEd (param $0 i32) (param $1 f64)
    (f64.store offset=80
      (get_local $0)
      (get_local $1)
    )
  )
  (func $__ZN15ParticleEmitter9getSpreadEv (param $0 i32) (result f64)
    (f64.load offset=80
      (get_local $0)
    )
  )
  (func $__ZN15ParticleEmitter9setChargeEd (param $0 i32) (param $1 f64)
    (f64.store offset=88
      (get_local $0)
      (get_local $1)
    )
  )
  (func $__ZN15ParticleEmitter9getChargeEv (param $0 i32) (result f64)
    (f64.load offset=88
      (get_local $0)
    )
  )
  (func $__ZN15ParticleEmitter10emitNumberEd (param $0 i32) (param $1 f64) (result i32)
    (call $f64-to-int
      (f64.floor
        (f64.mul
          (f64.load offset=64
            (get_local $0)
          )
          (get_local $1)
        )
      )
    )
  )
  (func $__ZN15ParticleEmitter12emitParticleEP8Particle (param $0 i32) (param $1 i32)
    (local $2 f64)
    (local $3 i32)
    (local $4 f64)
    (local $5 f64)
    (local $6 f64)
    (local $7 f64)
    (set_local $2
      (f64.mul
        (f64.load
          (tee_local $3
            (i32.add
              (get_local $0)
              (i32.const 80)
            )
          )
        )
        (f64.add
          (f64.mul
            (f64.div
              (f64.convert_s/i32
                (call $_rand)
              )
              (f64.const 2147483647)
            )
            (f64.const 2)
          )
          (f64.const -1)
        )
      )
    )
    (set_local $4
      (f64.mul
        (f64.load
          (get_local $3)
        )
        (f64.add
          (f64.mul
            (f64.div
              (f64.convert_s/i32
                (call $_rand)
              )
              (f64.const 2147483647)
            )
            (f64.const 2)
          )
          (f64.const -1)
        )
      )
    )
    (set_local $3
      (call $__ZN8Particle11getVelocityEv
        (get_local $1)
      )
    )
    (set_local $6
      (f64.mul
        (tee_local $5
          (f64.load offset=72
            (get_local $0)
          )
        )
        (call $_cos
          (get_local $2)
        )
      )
    )
    (set_local $2
      (f64.mul
        (tee_local $7
          (call $_cos
            (get_local $4)
          )
        )
        (f64.mul
          (get_local $5)
          (call $_sin
            (get_local $2)
          )
        )
      )
    )
    (call $__ZN6VectorC2Eddd
      (get_local $3)
      (f64.mul
        (get_local $6)
        (get_local $7)
      )
      (get_local $2)
      (f64.mul
        (get_local $5)
        (call $_sin
          (get_local $4)
        )
      )
    )
    (call $__ZN6Vector3setERKS_
      (call $__ZN8Particle11getPositionEv
        (get_local $1)
      )
      (i32.add
        (get_local $0)
        (i32.const 8)
      )
    )
    (call $__ZN8Particle9setChargeEd
      (get_local $1)
      (f64.load offset=88
        (get_local $0)
      )
    )
  )
  (func $__ZN14ParticleSystemC2Ei (param $0 i32) (param $1 i32)
    (local $2 i32)
    (call $__ZN12EventEmitterC2Ev
      (get_local $0)
    )
    (i64.store align=4
      (tee_local $2
        (i32.add
          (get_local $0)
          (i32.const 16)
        )
      )
      (i64.const 0)
    )
    (i64.store offset=8 align=4
      (get_local $2)
      (i64.const 0)
    )
    (i64.store offset=16 align=4
      (get_local $2)
      (i64.const 0)
    )
    (i64.store offset=24 align=4
      (get_local $2)
      (i64.const 0)
    )
    (i64.store offset=32 align=4
      (get_local $2)
      (i64.const 0)
    )
    (i64.store offset=40 align=4
      (get_local $2)
      (i64.const 0)
    )
    (i64.store offset=48 align=4
      (get_local $2)
      (i64.const 0)
    )
    (i32.store offset=56
      (get_local $2)
      (i32.const 0)
    )
    (call $__ZN6VectorC2Ev
      (tee_local $2
        (i32.add
          (get_local $0)
          (i32.const 88)
        )
      )
    )
    (call $__ZN14ParticleSystem15setMaxParticlesEi
      (get_local $0)
      (get_local $1)
    )
    (i32.store offset=80
      (get_local $0)
      (get_local $1)
    )
    (call $__ZN6VectorC2Eddd
      (get_local $2)
      (f64.const 1)
      (f64.const 1)
      (f64.const 1)
    )
  )
  (func $__ZN14ParticleSystem15setMaxParticlesEi (param $0 i32) (param $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 i32)
    (local $16 i32)
    (local $17 i32)
    (set_local $8
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (if
      (i32.ne
        (tee_local $2
          (i32.load
            (tee_local $9
              (i32.add
                (get_local $0)
                (i32.const 28)
              )
            )
          )
        )
        (tee_local $3
          (i32.load
            (tee_local $6
              (i32.add
                (get_local $0)
                (i32.const 32)
              )
            )
          )
        )
      )
      (block
        (loop $while-in
          (if
            (tee_local $4
              (i32.load
                (get_local $2)
              )
            )
            (block
              (call $__ZdlPv
                (get_local $4)
              )
              (set_local $3
                (i32.load
                  (get_local $6)
                )
              )
            )
          )
          (br_if $while-in
            (i32.ne
              (tee_local $2
                (i32.add
                  (get_local $2)
                  (i32.const 4)
                )
              )
              (get_local $3)
            )
          )
        )
        (if
          (i32.ne
            (get_local $3)
            (tee_local $2
              (i32.load
                (get_local $9)
              )
            )
          )
          (i32.store
            (get_local $6)
            (i32.add
              (get_local $3)
              (i32.shl
                (i32.xor
                  (i32.shr_u
                    (i32.sub
                      (i32.add
                        (get_local $3)
                        (i32.const -4)
                      )
                      (get_local $2)
                    )
                    (i32.const 2)
                  )
                  (i32.const -1)
                )
                (i32.const 2)
              )
            )
          )
        )
      )
    )
    (if
      (tee_local $2
        (i32.load
          (tee_local $7
            (i32.add
              (get_local $0)
              (i32.const 60)
            )
          )
        )
      )
      (block
        (set_local $4
          (i32.add
            (get_local $0)
            (i32.const 44)
          )
        )
        (set_local $3
          (i32.load
            (tee_local $5
              (i32.add
                (get_local $0)
                (i32.const 56)
              )
            )
          )
        )
        (loop $while-in1
          (i32.store
            (get_local $7)
            (tee_local $2
              (i32.add
                (get_local $2)
                (i32.const -1)
              )
            )
          )
          (i32.store
            (get_local $5)
            (tee_local $3
              (i32.add
                (get_local $3)
                (i32.const 1)
              )
            )
          )
          (if
            (i32.gt_u
              (get_local $3)
              (i32.const 2047)
            )
            (block
              (call $__ZdlPv
                (i32.load
                  (i32.load
                    (get_local $4)
                  )
                )
              )
              (i32.store
                (get_local $4)
                (i32.add
                  (i32.load
                    (get_local $4)
                  )
                  (i32.const 4)
                )
              )
              (i32.store
                (get_local $5)
                (tee_local $3
                  (i32.add
                    (i32.load
                      (get_local $5)
                    )
                    (i32.const -1024)
                  )
                )
              )
              (set_local $2
                (i32.load
                  (get_local $7)
                )
              )
            )
          )
          (br_if $while-in1
            (get_local $2)
          )
        )
      )
    )
    (i32.store offset=80
      (get_local $0)
      (get_local $1)
    )
    (if
      (i32.le_s
        (get_local $1)
        (i32.const 0)
      )
      (block
        (set_global $STACKTOP
          (get_local $8)
        )
        (return)
      )
    )
    (set_local $2
      (get_local $8)
    )
    (set_local $12
      (i32.add
        (get_local $0)
        (i32.const 36)
      )
    )
    (set_local $13
      (i32.add
        (get_local $0)
        (i32.const 88)
      )
    )
    (set_local $14
      (i32.add
        (get_local $0)
        (i32.const 48)
      )
    )
    (set_local $10
      (i32.add
        (get_local $0)
        (i32.const 44)
      )
    )
    (set_local $11
      (i32.add
        (get_local $0)
        (i32.const 56)
      )
    )
    (set_local $15
      (i32.add
        (get_local $0)
        (i32.const 40)
      )
    )
    (set_local $3
      (i32.const 0)
    )
    (loop $while-in3
      (call $__ZN8ParticleC2Ev
        (tee_local $0
          (call $__Znwj
            (i32.const 128)
          )
        )
      )
      (i32.store
        (get_local $2)
        (get_local $0)
      )
      (if
        (i32.eq
          (tee_local $4
            (i32.load
              (get_local $6)
            )
          )
          (i32.load
            (get_local $12)
          )
        )
        (call $__ZNSt3__26vectorIP8ParticleNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_
          (get_local $9)
          (get_local $2)
        )
        (block
          (i32.store
            (get_local $4)
            (get_local $0)
          )
          (i32.store
            (get_local $6)
            (i32.add
              (i32.load
                (get_local $6)
              )
              (i32.const 4)
            )
          )
        )
      )
      (call $__ZN8Particle6setDofEP6Vector
        (i32.load
          (get_local $2)
        )
        (get_local $13)
      )
      (call $__ZN8Particle11setRecycledEb
        (i32.load
          (get_local $2)
        )
        (i32.const 1)
      )
      (set_local $17
        (i32.add
          (i32.shl
            (tee_local $16
              (i32.sub
                (i32.load
                  (get_local $14)
                )
                (tee_local $0
                  (i32.load
                    (get_local $10)
                  )
                )
              )
            )
            (i32.const 8)
          )
          (i32.const -1)
        )
      )
      (set_local $5
        (i32.load
          (get_local $11)
        )
      )
      (set_local $4
        (i32.load
          (get_local $7)
        )
      )
      (if
        (i32.eq
          (if i32
            (get_local $16)
            (get_local $17)
            (i32.const 0)
          )
          (i32.add
            (get_local $4)
            (get_local $5)
          )
        )
        (block
          (call $__ZNSt3__25dequeIP8ParticleNS_9allocatorIS2_EEE19__add_back_capacityEv
            (get_local $15)
          )
          (set_local $4
            (i32.load
              (get_local $7)
            )
          )
          (set_local $5
            (i32.load
              (get_local $11)
            )
          )
          (set_local $0
            (i32.load
              (get_local $10)
            )
          )
        )
      )
      (i32.store
        (i32.add
          (i32.load
            (i32.add
              (get_local $0)
              (i32.shl
                (i32.shr_u
                  (tee_local $0
                    (i32.add
                      (get_local $4)
                      (get_local $5)
                    )
                  )
                  (i32.const 10)
                )
                (i32.const 2)
              )
            )
          )
          (i32.shl
            (i32.and
              (get_local $0)
              (i32.const 1023)
            )
            (i32.const 2)
          )
        )
        (i32.load
          (get_local $2)
        )
      )
      (i32.store
        (get_local $7)
        (i32.add
          (get_local $4)
          (i32.const 1)
        )
      )
      (br_if $while-in3
        (i32.lt_s
          (tee_local $3
            (i32.add
              (get_local $3)
              (i32.const 1)
            )
          )
          (get_local $1)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $8)
    )
  )
  (func $__ZNSt3__25queueIP8ParticleNS_5dequeIS2_NS_9allocatorIS2_EEEEED2Ev (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (set_local $4
      (i32.add
        (tee_local $2
          (i32.load
            (tee_local $3
              (i32.add
                (get_local $0)
                (i32.const 4)
              )
            )
          )
        )
        (i32.shl
          (i32.shr_u
            (tee_local $1
              (i32.load
                (tee_local $7
                  (i32.add
                    (get_local $0)
                    (i32.const 16)
                  )
                )
              )
            )
            (i32.const 10)
          )
          (i32.const 2)
        )
      )
    )
    (set_local $1
      (if i32
        (i32.eq
          (tee_local $10
            (i32.load
              (tee_local $5
                (i32.add
                  (get_local $0)
                  (i32.const 8)
                )
              )
            )
          )
          (get_local $2)
        )
        (block i32
          (set_local $8
            (i32.const 0)
          )
          (set_local $9
            (i32.add
              (get_local $0)
              (i32.const 20)
            )
          )
          (i32.const 0)
        )
        (block i32
          (set_local $8
            (i32.add
              (i32.load
                (i32.add
                  (get_local $2)
                  (i32.shl
                    (i32.shr_u
                      (tee_local $6
                        (i32.add
                          (i32.load
                            (tee_local $9
                              (i32.add
                                (get_local $0)
                                (i32.const 20)
                              )
                            )
                          )
                          (get_local $1)
                        )
                      )
                      (i32.const 10)
                    )
                    (i32.const 2)
                  )
                )
              )
              (i32.shl
                (i32.and
                  (get_local $6)
                  (i32.const 1023)
                )
                (i32.const 2)
              )
            )
          )
          (i32.add
            (i32.load
              (get_local $4)
            )
            (i32.shl
              (i32.and
                (get_local $1)
                (i32.const 1023)
              )
              (i32.const 2)
            )
          )
        )
      )
    )
    (set_local $6
      (get_local $2)
    )
    (loop $label$continue$L5
      (block $label$break$L5
        (loop $while-in
          (br_if $label$break$L5
            (i32.eq
              (get_local $1)
              (get_local $8)
            )
          )
          (br_if $while-in
            (i32.ne
              (i32.sub
                (tee_local $1
                  (i32.add
                    (get_local $1)
                    (i32.const 4)
                  )
                )
                (i32.load
                  (get_local $4)
                )
              )
              (i32.const 4096)
            )
          )
        )
        (set_local $4
          (tee_local $1
            (i32.add
              (get_local $4)
              (i32.const 4)
            )
          )
        )
        (set_local $1
          (i32.load
            (get_local $1)
          )
        )
        (br $label$continue$L5)
      )
    )
    (i32.store
      (get_local $9)
      (i32.const 0)
    )
    (if
      (i32.gt_u
        (tee_local $1
          (i32.shr_s
            (i32.sub
              (get_local $10)
              (get_local $6)
            )
            (i32.const 2)
          )
        )
        (i32.const 2)
      )
      (block
        (set_local $1
          (get_local $2)
        )
        (loop $while-in1
          (call $__ZdlPv
            (i32.load
              (get_local $1)
            )
          )
          (i32.store
            (get_local $3)
            (tee_local $1
              (i32.add
                (i32.load
                  (get_local $3)
                )
                (i32.const 4)
              )
            )
          )
          (br_if $while-in1
            (i32.gt_u
              (tee_local $2
                (i32.shr_s
                  (i32.sub
                    (i32.load
                      (get_local $5)
                    )
                    (get_local $1)
                  )
                  (i32.const 2)
                )
              )
              (i32.const 2)
            )
          )
          (set_local $1
            (get_local $2)
          )
        )
      )
    )
    (block $switch-default
      (block $switch-case2
        (block $switch-case
          (br_table $switch-case $switch-case2 $switch-default
            (i32.sub
              (get_local $1)
              (i32.const 1)
            )
          )
        )
        (i32.store
          (get_local $7)
          (i32.const 512)
        )
        (br $switch-default)
      )
      (i32.store
        (get_local $7)
        (i32.const 1024)
      )
    )
    (if
      (i32.ne
        (tee_local $1
          (i32.load
            (get_local $3)
          )
        )
        (tee_local $2
          (i32.load
            (get_local $5)
          )
        )
      )
      (block
        (loop $while-in4
          (call $__ZdlPv
            (i32.load
              (get_local $1)
            )
          )
          (br_if $while-in4
            (i32.ne
              (tee_local $1
                (i32.add
                  (get_local $1)
                  (i32.const 4)
                )
              )
              (get_local $2)
            )
          )
        )
        (if
          (i32.ne
            (tee_local $1
              (i32.load
                (get_local $5)
              )
            )
            (tee_local $2
              (i32.load
                (get_local $3)
              )
            )
          )
          (i32.store
            (get_local $5)
            (i32.add
              (get_local $1)
              (i32.shl
                (i32.xor
                  (i32.shr_u
                    (i32.sub
                      (i32.add
                        (get_local $1)
                        (i32.const -4)
                      )
                      (get_local $2)
                    )
                    (i32.const 2)
                  )
                  (i32.const -1)
                )
                (i32.const 2)
              )
            )
          )
        )
      )
    )
    (if
      (i32.eqz
        (tee_local $0
          (i32.load
            (get_local $0)
          )
        )
      )
      (return)
    )
    (call $__ZdlPv
      (get_local $0)
    )
  )
  (func $__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE (param $0 i32) (param $1 i32)
    (if
      (i32.eqz
        (get_local $1)
      )
      (return)
    )
    (call $__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE
      (get_local $0)
      (i32.load
        (get_local $1)
      )
    )
    (call $__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE
      (get_local $0)
      (i32.load offset=4
        (get_local $1)
      )
    )
    (call $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev
      (i32.add
        (get_local $1)
        (i32.const 16)
      )
    )
    (call $__ZdlPv
      (get_local $1)
    )
  )
  (func $__ZNSt3__26vectorIP8ParticleNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_ (param $0 i32) (param $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (if
      (i32.gt_u
        (tee_local $3
          (i32.add
            (i32.shr_s
              (i32.sub
                (tee_local $5
                  (i32.load
                    (tee_local $8
                      (i32.add
                        (get_local $0)
                        (i32.const 4)
                      )
                    )
                  )
                )
                (tee_local $4
                  (i32.load
                    (get_local $0)
                  )
                )
              )
              (i32.const 2)
            )
            (i32.const 1)
          )
        )
        (i32.const 1073741823)
      )
      (call $__ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv
        (get_local $0)
      )
    )
    (set_local $6
      (i32.lt_u
        (i32.shr_s
          (tee_local $2
            (i32.sub
              (i32.load
                (tee_local $9
                  (i32.add
                    (get_local $0)
                    (i32.const 8)
                  )
                )
              )
              (get_local $4)
            )
          )
          (i32.const 2)
        )
        (i32.const 536870911)
      )
    )
    (if
      (i32.ge_u
        (tee_local $2
          (i32.shr_s
            (get_local $2)
            (i32.const 1)
          )
        )
        (get_local $3)
      )
      (set_local $3
        (get_local $2)
      )
    )
    (set_local $2
      (i32.shr_s
        (i32.sub
          (get_local $5)
          (get_local $4)
        )
        (i32.const 2)
      )
    )
    (if
      (if i32
        (get_local $6)
        (get_local $3)
        (tee_local $3
          (i32.const 1073741823)
        )
      )
      (if
        (i32.gt_u
          (get_local $3)
          (i32.const 1073741823)
        )
        (block
          (call $__ZNSt9bad_allocC2Ev
            (tee_local $6
              (call $___cxa_allocate_exception
                (i32.const 4)
              )
            )
          )
          (call $___cxa_throw
            (get_local $6)
            (i32.const 1200)
            (i32.const 6)
          )
        )
        (set_local $7
          (call $__Znwj
            (i32.shl
              (get_local $3)
              (i32.const 2)
            )
          )
        )
      )
      (set_local $7
        (i32.const 0)
      )
    )
    (i32.store
      (tee_local $2
        (i32.add
          (get_local $7)
          (i32.shl
            (get_local $2)
            (i32.const 2)
          )
        )
      )
      (i32.load
        (get_local $1)
      )
    )
    (set_local $5
      (i32.add
        (get_local $2)
        (i32.shl
          (i32.sub
            (i32.const 0)
            (i32.shr_s
              (tee_local $1
                (i32.sub
                  (get_local $5)
                  (get_local $4)
                )
              )
              (i32.const 2)
            )
          )
          (i32.const 2)
        )
      )
    )
    (if
      (i32.gt_s
        (get_local $1)
        (i32.const 0)
      )
      (drop
        (call $_memcpy
          (get_local $5)
          (get_local $4)
          (get_local $1)
        )
      )
    )
    (i32.store
      (get_local $0)
      (get_local $5)
    )
    (i32.store
      (get_local $8)
      (i32.add
        (get_local $2)
        (i32.const 4)
      )
    )
    (i32.store
      (get_local $9)
      (i32.add
        (get_local $7)
        (i32.shl
          (get_local $3)
          (i32.const 2)
        )
      )
    )
    (if
      (i32.eqz
        (get_local $4)
      )
      (return)
    )
    (call $__ZdlPv
      (get_local $4)
    )
  )
  (func $__ZNSt3__25dequeIP8ParticleNS_9allocatorIS2_EEE19__add_back_capacityEv (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 i32)
    (local $16 i32)
    (set_local $12
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 32)
      )
    )
    (if
      (i32.gt_u
        (tee_local $3
          (i32.load
            (tee_local $1
              (i32.add
                (get_local $0)
                (i32.const 16)
              )
            )
          )
        )
        (i32.const 1023)
      )
      (block
        (i32.store
          (get_local $1)
          (i32.add
            (get_local $3)
            (i32.const -1024)
          )
        )
        (set_local $8
          (i32.load
            (tee_local $2
              (i32.load
                (tee_local $7
                  (i32.add
                    (get_local $0)
                    (i32.const 4)
                  )
                )
              )
            )
          )
        )
        (i32.store
          (get_local $7)
          (tee_local $2
            (i32.add
              (get_local $2)
              (i32.const 4)
            )
          )
        )
        (set_local $4
          (tee_local $1
            (i32.load
              (tee_local $10
                (i32.add
                  (get_local $0)
                  (i32.const 12)
                )
              )
            )
          )
        )
        (set_local $6
          (tee_local $5
            (i32.load
              (tee_local $9
                (i32.add
                  (get_local $0)
                  (i32.const 8)
                )
              )
            )
          )
        )
        (block $do-once
          (if
            (i32.eq
              (get_local $5)
              (get_local $1)
            )
            (block
              (set_local $3
                (tee_local $1
                  (i32.load
                    (get_local $0)
                  )
                )
              )
              (if
                (i32.gt_u
                  (get_local $2)
                  (get_local $1)
                )
                (block
                  (set_local $1
                    (i32.add
                      (get_local $2)
                      (i32.shl
                        (tee_local $3
                          (call $i32s-div
                            (i32.add
                              (i32.shr_s
                                (i32.sub
                                  (tee_local $0
                                    (get_local $2)
                                  )
                                  (get_local $3)
                                )
                                (i32.const 2)
                              )
                              (i32.const 1)
                            )
                            (i32.const -2)
                          )
                        )
                        (i32.const 2)
                      )
                    )
                  )
                  (if
                    (tee_local $4
                      (i32.shr_s
                        (tee_local $0
                          (i32.sub
                            (get_local $6)
                            (get_local $0)
                          )
                        )
                        (i32.const 2)
                      )
                    )
                    (block
                      (drop
                        (call $_memmove
                          (get_local $1)
                          (get_local $2)
                          (get_local $0)
                        )
                      )
                      (set_local $2
                        (i32.load
                          (get_local $7)
                        )
                      )
                    )
                  )
                  (i32.store
                    (get_local $9)
                    (tee_local $0
                      (i32.add
                        (get_local $1)
                        (i32.shl
                          (get_local $4)
                          (i32.const 2)
                        )
                      )
                    )
                  )
                  (i32.store
                    (get_local $7)
                    (i32.add
                      (get_local $2)
                      (i32.shl
                        (get_local $3)
                        (i32.const 2)
                      )
                    )
                  )
                  (br $do-once)
                )
              )
              (if
                (i32.gt_u
                  (if i32
                    (tee_local $6
                      (i32.shr_s
                        (i32.sub
                          (get_local $4)
                          (get_local $3)
                        )
                        (i32.const 1)
                      )
                    )
                    (get_local $6)
                    (tee_local $6
                      (i32.const 1)
                    )
                  )
                  (i32.const 1073741823)
                )
                (block
                  (call $__ZNSt9bad_allocC2Ev
                    (tee_local $3
                      (call $___cxa_allocate_exception
                        (i32.const 4)
                      )
                    )
                  )
                  (call $___cxa_throw
                    (get_local $3)
                    (i32.const 1200)
                    (i32.const 6)
                  )
                )
              )
              (set_local $4
                (tee_local $3
                  (i32.add
                    (tee_local $11
                      (call $__Znwj
                        (i32.shl
                          (get_local $6)
                          (i32.const 2)
                        )
                      )
                    )
                    (i32.shl
                      (i32.shr_u
                        (get_local $6)
                        (i32.const 2)
                      )
                      (i32.const 2)
                    )
                  )
                )
              )
              (set_local $2
                (if i32
                  (i32.eq
                    (get_local $2)
                    (get_local $5)
                  )
                  (get_local $4)
                  (block i32
                    (set_local $1
                      (get_local $3)
                    )
                    (set_local $3
                      (get_local $4)
                    )
                    (loop $while-in
                      (i32.store
                        (get_local $1)
                        (i32.load
                          (get_local $2)
                        )
                      )
                      (set_local $3
                        (tee_local $1
                          (i32.add
                            (get_local $3)
                            (i32.const 4)
                          )
                        )
                      )
                      (br_if $while-in
                        (i32.ne
                          (tee_local $2
                            (i32.add
                              (get_local $2)
                              (i32.const 4)
                            )
                          )
                          (get_local $5)
                        )
                      )
                    )
                    (set_local $1
                      (i32.load
                        (get_local $0)
                      )
                    )
                    (get_local $3)
                  )
                )
              )
              (i32.store
                (get_local $0)
                (get_local $11)
              )
              (i32.store
                (get_local $7)
                (get_local $4)
              )
              (i32.store
                (get_local $9)
                (get_local $2)
              )
              (i32.store
                (get_local $10)
                (i32.add
                  (get_local $11)
                  (i32.shl
                    (get_local $6)
                    (i32.const 2)
                  )
                )
              )
              (set_local $0
                (get_local $2)
              )
              (if
                (get_local $1)
                (block
                  (call $__ZdlPv
                    (get_local $1)
                  )
                  (set_local $0
                    (i32.load
                      (get_local $9)
                    )
                  )
                )
              )
            )
            (set_local $0
              (get_local $5)
            )
          )
        )
        (i32.store
          (get_local $0)
          (get_local $8)
        )
        (i32.store
          (get_local $9)
          (i32.add
            (i32.load
              (get_local $9)
            )
            (i32.const 4)
          )
        )
        (set_global $STACKTOP
          (get_local $12)
        )
        (return)
      )
    )
    (set_local $4
      (get_local $12)
    )
    (if
      (i32.ge_u
        (tee_local $11
          (i32.sub
            (tee_local $1
              (i32.load
                (tee_local $8
                  (i32.add
                    (get_local $0)
                    (i32.const 8)
                  )
                )
              )
            )
            (tee_local $5
              (i32.load
                (tee_local $10
                  (i32.add
                    (get_local $0)
                    (i32.const 4)
                  )
                )
              )
            )
          )
        )
        (tee_local $3
          (i32.sub
            (tee_local $6
              (i32.load
                (tee_local $13
                  (i32.add
                    (get_local $0)
                    (i32.const 12)
                  )
                )
              )
            )
            (tee_local $9
              (i32.load
                (get_local $0)
              )
            )
          )
        )
      )
      (block
        (i32.store offset=12
          (get_local $4)
          (i32.const 0)
        )
        (i32.store offset=16
          (get_local $4)
          (i32.add
            (get_local $0)
            (i32.const 12)
          )
        )
        (if
          (i32.gt_u
            (if i32
              (tee_local $5
                (i32.shr_s
                  (get_local $3)
                  (i32.const 1)
                )
              )
              (get_local $5)
              (tee_local $5
                (i32.const 1)
              )
            )
            (i32.const 1073741823)
          )
          (block
            (call $__ZNSt9bad_allocC2Ev
              (tee_local $1
                (call $___cxa_allocate_exception
                  (i32.const 4)
                )
              )
            )
            (call $___cxa_throw
              (get_local $1)
              (i32.const 1200)
              (i32.const 6)
            )
          )
        )
        (i32.store
          (get_local $4)
          (tee_local $3
            (call $__Znwj
              (i32.shl
                (get_local $5)
                (i32.const 2)
              )
            )
          )
        )
        (i32.store
          (tee_local $7
            (i32.add
              (get_local $4)
              (i32.const 8)
            )
          )
          (tee_local $1
            (i32.add
              (get_local $3)
              (i32.shl
                (tee_local $15
                  (i32.shr_s
                    (get_local $11)
                    (i32.const 2)
                  )
                )
                (i32.const 2)
              )
            )
          )
        )
        (i32.store
          (tee_local $11
            (i32.add
              (get_local $4)
              (i32.const 4)
            )
          )
          (get_local $1)
        )
        (i32.store
          (tee_local $14
            (i32.add
              (get_local $4)
              (i32.const 12)
            )
          )
          (tee_local $6
            (i32.add
              (get_local $3)
              (i32.shl
                (get_local $5)
                (i32.const 2)
              )
            )
          )
        )
        (set_local $16
          (call $__Znwj
            (i32.const 4096)
          )
        )
        (set_local $9
          (get_local $1)
        )
        (block $do-once0
          (if
            (i32.eq
              (get_local $15)
              (get_local $5)
            )
            (block
              (set_local $5
                (get_local $3)
              )
              (if
                (i32.gt_u
                  (get_local $1)
                  (get_local $3)
                )
                (block
                  (i32.store
                    (get_local $7)
                    (tee_local $2
                      (i32.add
                        (get_local $1)
                        (i32.shl
                          (call $i32s-div
                            (i32.add
                              (i32.shr_s
                                (i32.sub
                                  (get_local $9)
                                  (get_local $5)
                                )
                                (i32.const 2)
                              )
                              (i32.const 1)
                            )
                            (i32.const -2)
                          )
                          (i32.const 2)
                        )
                      )
                    )
                  )
                  (i32.store
                    (get_local $11)
                    (get_local $2)
                  )
                  (br $do-once0)
                )
              )
              (if
                (i32.gt_u
                  (if i32
                    (tee_local $1
                      (i32.shr_s
                        (i32.sub
                          (get_local $6)
                          (get_local $5)
                        )
                        (i32.const 1)
                      )
                    )
                    (get_local $1)
                    (tee_local $1
                      (i32.const 1)
                    )
                  )
                  (i32.const 1073741823)
                )
                (block
                  (call $__ZNSt9bad_allocC2Ev
                    (tee_local $1
                      (call $___cxa_allocate_exception
                        (i32.const 4)
                      )
                    )
                  )
                  (call $___cxa_throw
                    (get_local $1)
                    (i32.const 1200)
                    (i32.const 6)
                  )
                )
                (block
                  (set_local $6
                    (tee_local $2
                      (i32.add
                        (tee_local $5
                          (call $__Znwj
                            (i32.shl
                              (get_local $1)
                              (i32.const 2)
                            )
                          )
                        )
                        (i32.shl
                          (i32.shr_u
                            (get_local $1)
                            (i32.const 2)
                          )
                          (i32.const 2)
                        )
                      )
                    )
                  )
                  (i32.store
                    (get_local $4)
                    (get_local $5)
                  )
                  (i32.store
                    (get_local $11)
                    (get_local $6)
                  )
                  (i32.store
                    (get_local $7)
                    (get_local $6)
                  )
                  (i32.store
                    (get_local $14)
                    (i32.add
                      (get_local $5)
                      (i32.shl
                        (get_local $1)
                        (i32.const 2)
                      )
                    )
                  )
                  (call $__ZdlPv
                    (get_local $3)
                  )
                )
              )
            )
            (set_local $2
              (get_local $1)
            )
          )
        )
        (i32.store
          (get_local $2)
          (get_local $16)
        )
        (i32.store
          (get_local $7)
          (i32.add
            (i32.load
              (get_local $7)
            )
            (i32.const 4)
          )
        )
        (set_local $2
          (i32.load
            (get_local $8)
          )
        )
        (loop $while-in3
          (if
            (i32.ne
              (get_local $2)
              (tee_local $1
                (i32.load
                  (get_local $10)
                )
              )
            )
            (block
              (call $__ZNSt3__214__split_bufferIPP8ParticleNS_9allocatorIS3_EEE10push_frontERKS3_
                (get_local $4)
                (tee_local $2
                  (i32.add
                    (get_local $2)
                    (i32.const -4)
                  )
                )
              )
              (br $while-in3)
            )
          )
        )
        (set_local $2
          (i32.load
            (get_local $0)
          )
        )
        (i32.store
          (get_local $0)
          (i32.load
            (get_local $4)
          )
        )
        (i32.store
          (get_local $4)
          (get_local $2)
        )
        (i32.store
          (get_local $10)
          (i32.load
            (get_local $11)
          )
        )
        (i32.store
          (get_local $11)
          (get_local $1)
        )
        (set_local $0
          (i32.load
            (get_local $8)
          )
        )
        (i32.store
          (get_local $8)
          (i32.load
            (get_local $7)
          )
        )
        (i32.store
          (get_local $7)
          (get_local $0)
        )
        (set_local $3
          (i32.load
            (get_local $13)
          )
        )
        (i32.store
          (get_local $13)
          (i32.load
            (get_local $14)
          )
        )
        (i32.store
          (get_local $14)
          (get_local $3)
        )
        (if
          (i32.ne
            (get_local $0)
            (get_local $1)
          )
          (i32.store
            (get_local $7)
            (i32.add
              (get_local $0)
              (i32.shl
                (i32.xor
                  (i32.shr_u
                    (i32.sub
                      (i32.add
                        (get_local $0)
                        (i32.const -4)
                      )
                      (get_local $1)
                    )
                    (i32.const 2)
                  )
                  (i32.const -1)
                )
                (i32.const 2)
              )
            )
          )
        )
        (if
          (get_local $2)
          (call $__ZdlPv
            (get_local $2)
          )
        )
        (set_global $STACKTOP
          (get_local $12)
        )
        (return)
      )
    )
    (set_local $7
      (get_local $1)
    )
    (set_local $11
      (get_local $6)
    )
    (set_local $2
      (get_local $5)
    )
    (set_local $3
      (get_local $9)
    )
    (if
      (i32.eq
        (get_local $6)
        (get_local $1)
      )
      (block
        (i32.store
          (get_local $4)
          (call $__Znwj
            (i32.const 4096)
          )
        )
        (call $__ZNSt3__214__split_bufferIPP8ParticleNS_9allocatorIS3_EEE10push_frontERKS3_
          (get_local $0)
          (get_local $4)
        )
        (set_local $7
          (i32.load
            (tee_local $2
              (i32.load
                (get_local $10)
              )
            )
          )
        )
        (i32.store
          (get_local $10)
          (tee_local $2
            (i32.add
              (get_local $2)
              (i32.const 4)
            )
          )
        )
        (set_local $4
          (tee_local $1
            (i32.load
              (get_local $13)
            )
          )
        )
        (set_local $6
          (tee_local $5
            (i32.load
              (get_local $8)
            )
          )
        )
        (block $do-once4
          (if
            (i32.eq
              (get_local $5)
              (get_local $1)
            )
            (block
              (set_local $3
                (tee_local $1
                  (i32.load
                    (get_local $0)
                  )
                )
              )
              (if
                (i32.gt_u
                  (get_local $2)
                  (get_local $1)
                )
                (block
                  (set_local $1
                    (i32.add
                      (get_local $2)
                      (i32.shl
                        (tee_local $3
                          (call $i32s-div
                            (i32.add
                              (i32.shr_s
                                (i32.sub
                                  (tee_local $0
                                    (get_local $2)
                                  )
                                  (get_local $3)
                                )
                                (i32.const 2)
                              )
                              (i32.const 1)
                            )
                            (i32.const -2)
                          )
                        )
                        (i32.const 2)
                      )
                    )
                  )
                  (if
                    (tee_local $4
                      (i32.shr_s
                        (tee_local $0
                          (i32.sub
                            (get_local $6)
                            (get_local $0)
                          )
                        )
                        (i32.const 2)
                      )
                    )
                    (block
                      (drop
                        (call $_memmove
                          (get_local $1)
                          (get_local $2)
                          (get_local $0)
                        )
                      )
                      (set_local $2
                        (i32.load
                          (get_local $10)
                        )
                      )
                    )
                  )
                  (i32.store
                    (get_local $8)
                    (tee_local $0
                      (i32.add
                        (get_local $1)
                        (i32.shl
                          (get_local $4)
                          (i32.const 2)
                        )
                      )
                    )
                  )
                  (i32.store
                    (get_local $10)
                    (i32.add
                      (get_local $2)
                      (i32.shl
                        (get_local $3)
                        (i32.const 2)
                      )
                    )
                  )
                  (br $do-once4)
                )
              )
              (if
                (i32.gt_u
                  (if i32
                    (tee_local $6
                      (i32.shr_s
                        (i32.sub
                          (get_local $4)
                          (get_local $3)
                        )
                        (i32.const 1)
                      )
                    )
                    (get_local $6)
                    (tee_local $6
                      (i32.const 1)
                    )
                  )
                  (i32.const 1073741823)
                )
                (block
                  (call $__ZNSt9bad_allocC2Ev
                    (tee_local $3
                      (call $___cxa_allocate_exception
                        (i32.const 4)
                      )
                    )
                  )
                  (call $___cxa_throw
                    (get_local $3)
                    (i32.const 1200)
                    (i32.const 6)
                  )
                )
              )
              (set_local $4
                (tee_local $3
                  (i32.add
                    (tee_local $9
                      (call $__Znwj
                        (i32.shl
                          (get_local $6)
                          (i32.const 2)
                        )
                      )
                    )
                    (i32.shl
                      (i32.shr_u
                        (get_local $6)
                        (i32.const 2)
                      )
                      (i32.const 2)
                    )
                  )
                )
              )
              (set_local $2
                (if i32
                  (i32.eq
                    (get_local $2)
                    (get_local $5)
                  )
                  (get_local $4)
                  (block i32
                    (set_local $1
                      (get_local $3)
                    )
                    (set_local $3
                      (get_local $4)
                    )
                    (loop $while-in7
                      (i32.store
                        (get_local $1)
                        (i32.load
                          (get_local $2)
                        )
                      )
                      (set_local $3
                        (tee_local $1
                          (i32.add
                            (get_local $3)
                            (i32.const 4)
                          )
                        )
                      )
                      (br_if $while-in7
                        (i32.ne
                          (tee_local $2
                            (i32.add
                              (get_local $2)
                              (i32.const 4)
                            )
                          )
                          (get_local $5)
                        )
                      )
                    )
                    (set_local $1
                      (i32.load
                        (get_local $0)
                      )
                    )
                    (get_local $3)
                  )
                )
              )
              (i32.store
                (get_local $0)
                (get_local $9)
              )
              (i32.store
                (get_local $10)
                (get_local $4)
              )
              (i32.store
                (get_local $8)
                (get_local $2)
              )
              (i32.store
                (get_local $13)
                (i32.add
                  (get_local $9)
                  (i32.shl
                    (get_local $6)
                    (i32.const 2)
                  )
                )
              )
              (set_local $0
                (get_local $2)
              )
              (if
                (get_local $1)
                (block
                  (call $__ZdlPv
                    (get_local $1)
                  )
                  (set_local $0
                    (i32.load
                      (get_local $8)
                    )
                  )
                )
              )
            )
            (set_local $0
              (get_local $5)
            )
          )
        )
        (i32.store
          (get_local $0)
          (get_local $7)
        )
        (i32.store
          (get_local $8)
          (i32.add
            (i32.load
              (get_local $8)
            )
            (i32.const 4)
          )
        )
        (set_global $STACKTOP
          (get_local $12)
        )
      )
      (block
        (set_local $14
          (call $__Znwj
            (i32.const 4096)
          )
        )
        (set_local $4
          (get_local $1)
        )
        (block $do-once8
          (if
            (i32.eq
              (get_local $7)
              (get_local $11)
            )
            (block
              (if
                (i32.gt_u
                  (get_local $2)
                  (get_local $3)
                )
                (block
                  (set_local $0
                    (i32.add
                      (get_local $2)
                      (i32.shl
                        (tee_local $3
                          (call $i32s-div
                            (i32.add
                              (i32.shr_s
                                (i32.sub
                                  (get_local $5)
                                  (get_local $9)
                                )
                                (i32.const 2)
                              )
                              (i32.const 1)
                            )
                            (i32.const -2)
                          )
                        )
                        (i32.const 2)
                      )
                    )
                  )
                  (if
                    (tee_local $4
                      (i32.shr_s
                        (tee_local $1
                          (i32.sub
                            (get_local $1)
                            (get_local $5)
                          )
                        )
                        (i32.const 2)
                      )
                    )
                    (block
                      (drop
                        (call $_memmove
                          (get_local $0)
                          (get_local $5)
                          (get_local $1)
                        )
                      )
                      (set_local $2
                        (i32.load
                          (get_local $10)
                        )
                      )
                    )
                  )
                  (i32.store
                    (get_local $8)
                    (tee_local $0
                      (i32.add
                        (get_local $0)
                        (i32.shl
                          (get_local $4)
                          (i32.const 2)
                        )
                      )
                    )
                  )
                  (i32.store
                    (get_local $10)
                    (i32.add
                      (get_local $2)
                      (i32.shl
                        (get_local $3)
                        (i32.const 2)
                      )
                    )
                  )
                  (br $do-once8)
                )
              )
              (if
                (i32.gt_u
                  (if i32
                    (tee_local $5
                      (i32.shr_s
                        (i32.sub
                          (get_local $6)
                          (get_local $9)
                        )
                        (i32.const 1)
                      )
                    )
                    (get_local $5)
                    (tee_local $5
                      (i32.const 1)
                    )
                  )
                  (i32.const 1073741823)
                )
                (block
                  (call $__ZNSt9bad_allocC2Ev
                    (tee_local $1
                      (call $___cxa_allocate_exception
                        (i32.const 4)
                      )
                    )
                  )
                  (call $___cxa_throw
                    (get_local $1)
                    (i32.const 1200)
                    (i32.const 6)
                  )
                )
              )
              (set_local $4
                (tee_local $1
                  (i32.add
                    (tee_local $6
                      (call $__Znwj
                        (i32.shl
                          (get_local $5)
                          (i32.const 2)
                        )
                      )
                    )
                    (i32.shl
                      (i32.shr_u
                        (get_local $5)
                        (i32.const 2)
                      )
                      (i32.const 2)
                    )
                  )
                )
              )
              (if
                (i32.eq
                  (get_local $2)
                  (get_local $7)
                )
                (set_local $2
                  (get_local $4)
                )
                (block
                  (set_local $3
                    (get_local $4)
                  )
                  (loop $while-in11
                    (i32.store
                      (get_local $1)
                      (i32.load
                        (get_local $2)
                      )
                    )
                    (set_local $3
                      (tee_local $1
                        (i32.add
                          (get_local $3)
                          (i32.const 4)
                        )
                      )
                    )
                    (br_if $while-in11
                      (i32.ne
                        (tee_local $2
                          (i32.add
                            (get_local $2)
                            (i32.const 4)
                          )
                        )
                        (get_local $7)
                      )
                    )
                  )
                  (set_local $2
                    (get_local $3)
                  )
                  (set_local $3
                    (i32.load
                      (get_local $0)
                    )
                  )
                )
              )
              (i32.store
                (get_local $0)
                (get_local $6)
              )
              (i32.store
                (get_local $10)
                (get_local $4)
              )
              (i32.store
                (get_local $8)
                (get_local $2)
              )
              (i32.store
                (get_local $13)
                (i32.add
                  (get_local $6)
                  (i32.shl
                    (get_local $5)
                    (i32.const 2)
                  )
                )
              )
              (set_local $0
                (get_local $2)
              )
              (if
                (get_local $3)
                (block
                  (call $__ZdlPv
                    (get_local $3)
                  )
                  (set_local $0
                    (i32.load
                      (get_local $8)
                    )
                  )
                )
              )
            )
            (set_local $0
              (get_local $4)
            )
          )
        )
        (i32.store
          (get_local $0)
          (get_local $14)
        )
        (i32.store
          (get_local $8)
          (i32.add
            (i32.load
              (get_local $8)
            )
            (i32.const 4)
          )
        )
        (set_global $STACKTOP
          (get_local $12)
        )
      )
    )
  )
  (func $__ZNSt3__214__split_bufferIPP8ParticleNS_9allocatorIS3_EEE10push_frontERKS3_ (param $0 i32) (param $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (set_local $4
      (tee_local $3
        (i32.load
          (get_local $0)
        )
      )
    )
    (block $do-once
      (if
        (i32.eq
          (tee_local $2
            (i32.load
              (tee_local $7
                (i32.add
                  (get_local $0)
                  (i32.const 4)
                )
              )
            )
          )
          (get_local $3)
        )
        (block
          (set_local $3
            (tee_local $5
              (i32.load
                (tee_local $12
                  (i32.add
                    (get_local $0)
                    (i32.const 12)
                  )
                )
              )
            )
          )
          (if
            (i32.lt_u
              (tee_local $6
                (i32.load
                  (tee_local $10
                    (i32.add
                      (get_local $0)
                      (i32.const 8)
                    )
                  )
                )
              )
              (get_local $5)
            )
            (block
              (set_local $0
                (i32.add
                  (tee_local $3
                    (i32.add
                      (get_local $6)
                      (i32.shl
                        (tee_local $4
                          (call $i32s-div
                            (i32.add
                              (i32.shr_s
                                (i32.sub
                                  (get_local $3)
                                  (tee_local $0
                                    (get_local $6)
                                  )
                                )
                                (i32.const 2)
                              )
                              (i32.const 1)
                            )
                            (i32.const 2)
                          )
                        )
                        (i32.const 2)
                      )
                    )
                  )
                  (i32.shl
                    (i32.sub
                      (i32.const 0)
                      (tee_local $9
                        (i32.shr_s
                          (tee_local $5
                            (i32.sub
                              (get_local $0)
                              (get_local $2)
                            )
                          )
                          (i32.const 2)
                        )
                      )
                    )
                    (i32.const 2)
                  )
                )
              )
              (i32.store
                (get_local $7)
                (tee_local $2
                  (if i32
                    (get_local $9)
                    (block i32
                      (drop
                        (call $_memmove
                          (get_local $0)
                          (get_local $2)
                          (get_local $5)
                        )
                      )
                      (set_local $6
                        (i32.load
                          (get_local $10)
                        )
                      )
                      (get_local $0)
                    )
                    (get_local $3)
                  )
                )
              )
              (i32.store
                (get_local $10)
                (i32.add
                  (get_local $6)
                  (i32.shl
                    (get_local $4)
                    (i32.const 2)
                  )
                )
              )
              (br $do-once)
            )
          )
          (if
            (i32.gt_u
              (if i32
                (tee_local $8
                  (i32.shr_s
                    (i32.sub
                      (get_local $3)
                      (get_local $4)
                    )
                    (i32.const 1)
                  )
                )
                (get_local $8)
                (tee_local $8
                  (i32.const 1)
                )
              )
              (i32.const 1073741823)
            )
            (block
              (call $__ZNSt9bad_allocC2Ev
                (tee_local $3
                  (call $___cxa_allocate_exception
                    (i32.const 4)
                  )
                )
              )
              (call $___cxa_throw
                (get_local $3)
                (i32.const 1200)
                (i32.const 6)
              )
            )
          )
          (set_local $5
            (tee_local $9
              (i32.add
                (tee_local $11
                  (call $__Znwj
                    (i32.shl
                      (get_local $8)
                      (i32.const 2)
                    )
                  )
                )
                (i32.shl
                  (i32.shr_u
                    (i32.add
                      (get_local $8)
                      (i32.const 3)
                    )
                    (i32.const 2)
                  )
                  (i32.const 2)
                )
              )
            )
          )
          (if
            (i32.eq
              (get_local $2)
              (get_local $6)
            )
            (set_local $4
              (get_local $5)
            )
            (block
              (set_local $3
                (get_local $9)
              )
              (set_local $4
                (get_local $5)
              )
              (loop $while-in
                (i32.store
                  (get_local $3)
                  (i32.load
                    (get_local $2)
                  )
                )
                (set_local $4
                  (tee_local $3
                    (i32.add
                      (get_local $4)
                      (i32.const 4)
                    )
                  )
                )
                (br_if $while-in
                  (i32.ne
                    (tee_local $2
                      (i32.add
                        (get_local $2)
                        (i32.const 4)
                      )
                    )
                    (get_local $6)
                  )
                )
              )
              (set_local $2
                (i32.load
                  (get_local $0)
                )
              )
            )
          )
          (i32.store
            (get_local $0)
            (get_local $11)
          )
          (i32.store
            (get_local $7)
            (get_local $5)
          )
          (i32.store
            (get_local $10)
            (get_local $4)
          )
          (i32.store
            (get_local $12)
            (i32.add
              (get_local $11)
              (i32.shl
                (get_local $8)
                (i32.const 2)
              )
            )
          )
          (set_local $2
            (if i32
              (get_local $2)
              (block i32
                (call $__ZdlPv
                  (get_local $2)
                )
                (i32.load
                  (get_local $7)
                )
              )
              (get_local $9)
            )
          )
        )
      )
    )
    (i32.store
      (i32.add
        (get_local $2)
        (i32.const -4)
      )
      (i32.load
        (get_local $1)
      )
    )
    (i32.store
      (get_local $7)
      (i32.add
        (i32.load
          (get_local $7)
        )
        (i32.const -4)
      )
    )
  )
  (func $__ZN14ParticleSystemD2Ev (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (if
      (i32.ne
        (tee_local $2
          (i32.load
            (tee_local $7
              (i32.add
                (get_local $0)
                (i32.const 16)
              )
            )
          )
        )
        (tee_local $1
          (i32.load
            (tee_local $5
              (i32.add
                (get_local $0)
                (i32.const 20)
              )
            )
          )
        )
      )
      (loop $while-in
        (if
          (tee_local $3
            (i32.load
              (get_local $2)
            )
          )
          (block
            (call $__ZdlPv
              (get_local $3)
            )
            (set_local $1
              (i32.load
                (get_local $5)
              )
            )
          )
        )
        (br_if $while-in
          (i32.ne
            (tee_local $2
              (i32.add
                (get_local $2)
                (i32.const 4)
              )
            )
            (get_local $1)
          )
        )
      )
    )
    (if
      (i32.ne
        (tee_local $2
          (i32.load
            (tee_local $6
              (i32.add
                (get_local $0)
                (i32.const 64)
              )
            )
          )
        )
        (tee_local $1
          (i32.load
            (tee_local $3
              (i32.add
                (get_local $0)
                (i32.const 68)
              )
            )
          )
        )
      )
      (loop $while-in1
        (if
          (tee_local $4
            (i32.load
              (get_local $2)
            )
          )
          (block
            (call $__ZdlPv
              (get_local $4)
            )
            (set_local $1
              (i32.load
                (get_local $3)
              )
            )
          )
        )
        (br_if $while-in1
          (i32.ne
            (tee_local $2
              (i32.add
                (get_local $2)
                (i32.const 4)
              )
            )
            (get_local $1)
          )
        )
      )
    )
    (if
      (i32.ne
        (tee_local $2
          (i32.load
            (tee_local $8
              (i32.add
                (get_local $0)
                (i32.const 28)
              )
            )
          )
        )
        (tee_local $1
          (i32.load
            (tee_local $4
              (i32.add
                (get_local $0)
                (i32.const 32)
              )
            )
          )
        )
      )
      (loop $while-in3
        (if
          (tee_local $9
            (i32.load
              (get_local $2)
            )
          )
          (block
            (call $__ZdlPv
              (get_local $9)
            )
            (set_local $1
              (i32.load
                (get_local $4)
              )
            )
          )
        )
        (br_if $while-in3
          (i32.ne
            (tee_local $2
              (i32.add
                (get_local $2)
                (i32.const 4)
              )
            )
            (get_local $1)
          )
        )
      )
    )
    (set_local $6
      (tee_local $1
        (i32.load
          (get_local $6)
        )
      )
    )
    (if
      (get_local $1)
      (block
        (if
          (i32.ne
            (tee_local $2
              (i32.load
                (get_local $3)
              )
            )
            (get_local $1)
          )
          (i32.store
            (get_local $3)
            (i32.add
              (get_local $2)
              (i32.shl
                (i32.xor
                  (i32.shr_u
                    (i32.sub
                      (i32.add
                        (get_local $2)
                        (i32.const -4)
                      )
                      (get_local $6)
                    )
                    (i32.const 2)
                  )
                  (i32.const -1)
                )
                (i32.const 2)
              )
            )
          )
        )
        (call $__ZdlPv
          (get_local $1)
        )
      )
    )
    (call $__ZNSt3__25queueIP8ParticleNS_5dequeIS2_NS_9allocatorIS2_EEEEED2Ev
      (i32.add
        (get_local $0)
        (i32.const 40)
      )
    )
    (set_local $3
      (tee_local $1
        (i32.load
          (get_local $8)
        )
      )
    )
    (if
      (get_local $1)
      (block
        (if
          (i32.ne
            (tee_local $2
              (i32.load
                (get_local $4)
              )
            )
            (get_local $1)
          )
          (i32.store
            (get_local $4)
            (i32.add
              (get_local $2)
              (i32.shl
                (i32.xor
                  (i32.shr_u
                    (i32.sub
                      (i32.add
                        (get_local $2)
                        (i32.const -4)
                      )
                      (get_local $3)
                    )
                    (i32.const 2)
                  )
                  (i32.const -1)
                )
                (i32.const 2)
              )
            )
          )
        )
        (call $__ZdlPv
          (get_local $1)
        )
      )
    )
    (if
      (i32.eqz
        (tee_local $1
          (i32.load
            (get_local $7)
          )
        )
      )
      (block
        (call $__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE
          (get_local $0)
          (i32.load offset=4
            (get_local $0)
          )
        )
        (return)
      )
    )
    (set_local $2
      (get_local $1)
    )
    (if
      (i32.ne
        (tee_local $3
          (i32.load
            (get_local $5)
          )
        )
        (get_local $1)
      )
      (i32.store
        (get_local $5)
        (i32.add
          (get_local $3)
          (i32.shl
            (i32.xor
              (i32.shr_u
                (i32.sub
                  (i32.add
                    (get_local $3)
                    (i32.const -4)
                  )
                  (get_local $2)
                )
                (i32.const 2)
              )
              (i32.const -1)
            )
            (i32.const 2)
          )
        )
      )
    )
    (call $__ZdlPv
      (get_local $1)
    )
    (call $__ZNSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE7destroyEPNS_11__tree_nodeISE_PvEE
      (get_local $0)
      (i32.load offset=4
        (get_local $0)
      )
    )
  )
  (func $__ZN14ParticleSystem7destroyEv (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (if
      (i32.eq
        (tee_local $1
          (i32.load
            (tee_local $3
              (i32.add
                (get_local $0)
                (i32.const 28)
              )
            )
          )
        )
        (tee_local $0
          (i32.load
            (tee_local $2
              (i32.add
                (get_local $0)
                (i32.const 32)
              )
            )
          )
        )
      )
      (return)
    )
    (loop $while-in
      (if
        (tee_local $4
          (i32.load
            (get_local $1)
          )
        )
        (block
          (call $__ZdlPv
            (get_local $4)
          )
          (set_local $0
            (i32.load
              (get_local $2)
            )
          )
        )
      )
      (br_if $while-in
        (i32.ne
          (tee_local $1
            (i32.add
              (get_local $1)
              (i32.const 4)
            )
          )
          (get_local $0)
        )
      )
    )
    (if
      (i32.eq
        (get_local $0)
        (tee_local $1
          (i32.load
            (get_local $3)
          )
        )
      )
      (return)
    )
    (i32.store
      (get_local $2)
      (i32.add
        (get_local $0)
        (i32.shl
          (i32.xor
            (i32.shr_u
              (i32.sub
                (i32.add
                  (get_local $0)
                  (i32.const -4)
                )
                (get_local $1)
              )
              (i32.const 2)
            )
            (i32.const -1)
          )
          (i32.const 2)
        )
      )
    )
  )
  (func $__ZN14ParticleSystem15getMaxParticlesEv (param $0 i32) (result i32)
    (i32.load offset=80
      (get_local $0)
    )
  )
  (func $__ZN14ParticleSystem6setDofEddd (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64)
    (call $__ZN6VectorC2Eddd
      (i32.add
        (get_local $0)
        (i32.const 88)
      )
      (get_local $1)
      (get_local $2)
      (get_local $3)
    )
  )
  (func $__ZN14ParticleSystem13getObjectByIdEi (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (block $label$break$L1
      (if
        (i32.ne
          (tee_local $2
            (i32.load offset=16
              (get_local $0)
            )
          )
          (i32.load
            (tee_local $3
              (i32.add
                (get_local $0)
                (i32.const 20)
              )
            )
          )
        )
        (block
          (loop $while-in
            (if
              (i32.ne
                (call $__ZN10BaseObject5getIdEv
                  (i32.load
                    (get_local $2)
                  )
                )
                (get_local $1)
              )
              (block
                (br_if $label$break$L1
                  (i32.eq
                    (tee_local $2
                      (i32.add
                        (get_local $2)
                        (i32.const 4)
                      )
                    )
                    (i32.load
                      (get_local $3)
                    )
                  )
                )
                (br $while-in)
              )
            )
          )
          (return
            (i32.load
              (get_local $2)
            )
          )
        )
      )
    )
    (if
      (i32.eq
        (tee_local $2
          (i32.load offset=64
            (get_local $0)
          )
        )
        (i32.load
          (tee_local $3
            (i32.add
              (get_local $0)
              (i32.const 68)
            )
          )
        )
      )
      (return
        (i32.const 0)
      )
      (set_local $0
        (get_local $2)
      )
    )
    (block $jumpthreading$outer$0
      (block $jumpthreading$inner$0
        (loop $while-in1
          (if
            (i32.ne
              (call $__ZN10BaseObject5getIdEv
                (i32.add
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 8)
                )
              )
              (get_local $1)
            )
            (if
              (i32.eq
                (tee_local $0
                  (i32.add
                    (get_local $0)
                    (i32.const 4)
                  )
                )
                (i32.load
                  (get_local $3)
                )
              )
              (block
                (set_local $0
                  (i32.const 0)
                )
                (br $jumpthreading$inner$0)
              )
              (br $while-in1)
            )
          )
        )
        (br $jumpthreading$outer$0)
      )
      (return
        (get_local $0)
      )
    )
    (set_local $0
      (i32.add
        (tee_local $1
          (i32.load
            (get_local $0)
          )
        )
        (i32.const 8)
      )
    )
    (if i32
      (get_local $1)
      (get_local $0)
      (i32.const 0)
    )
  )
  (func $__ZN14ParticleSystem10getEmitterEi (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (if
      (i32.eq
        (tee_local $2
          (i32.load offset=16
            (get_local $0)
          )
        )
        (i32.load
          (tee_local $3
            (i32.add
              (get_local $0)
              (i32.const 20)
            )
          )
        )
      )
      (return
        (i32.const 0)
      )
      (set_local $0
        (get_local $2)
      )
    )
    (block $jumpthreading$outer$0
      (block $jumpthreading$inner$0
        (loop $while-in
          (if
            (i32.ne
              (call $__ZN10BaseObject5getIdEv
                (i32.load
                  (get_local $0)
                )
              )
              (get_local $1)
            )
            (if
              (i32.eq
                (tee_local $0
                  (i32.add
                    (get_local $0)
                    (i32.const 4)
                  )
                )
                (i32.load
                  (get_local $3)
                )
              )
              (block
                (set_local $0
                  (i32.const 0)
                )
                (br $jumpthreading$inner$0)
              )
              (br $while-in)
            )
          )
        )
        (br $jumpthreading$outer$0)
      )
      (return
        (get_local $0)
      )
    )
    (i32.load
      (get_local $0)
    )
  )
  (func $__ZN14ParticleSystem16getMagneticFieldEi (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (if
      (i32.eq
        (tee_local $2
          (i32.load offset=64
            (get_local $0)
          )
        )
        (i32.load
          (tee_local $3
            (i32.add
              (get_local $0)
              (i32.const 68)
            )
          )
        )
      )
      (return
        (i32.const 0)
      )
      (set_local $0
        (get_local $2)
      )
    )
    (block $jumpthreading$outer$0
      (block $jumpthreading$inner$0
        (loop $while-in
          (if
            (i32.ne
              (call $__ZN10BaseObject5getIdEv
                (i32.add
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 8)
                )
              )
              (get_local $1)
            )
            (if
              (i32.eq
                (tee_local $0
                  (i32.add
                    (get_local $0)
                    (i32.const 4)
                  )
                )
                (i32.load
                  (get_local $3)
                )
              )
              (block
                (set_local $0
                  (i32.const 0)
                )
                (br $jumpthreading$inner$0)
              )
              (br $while-in)
            )
          )
        )
        (br $jumpthreading$outer$0)
      )
      (return
        (get_local $0)
      )
    )
    (i32.load
      (get_local $0)
    )
  )
  (func $__ZN14ParticleSystem16initParticleLoopEv (param $0 i32)
    (i32.store offset=12
      (get_local $0)
      (i32.load offset=28
        (get_local $0)
      )
    )
  )
  (func $__ZN14ParticleSystem12nextParticleEv (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (if
      (i32.eq
        (tee_local $1
          (i32.load
            (tee_local $2
              (i32.add
                (get_local $0)
                (i32.const 12)
              )
            )
          )
        )
        (i32.load offset=32
          (get_local $0)
        )
      )
      (return
        (i32.const 0)
      )
    )
    (i32.store
      (get_local $2)
      (i32.add
        (get_local $1)
        (i32.const 4)
      )
    )
    (i32.load
      (get_local $1)
    )
  )
  (func $__ZN14ParticleSystem10addEmitterEi (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $2
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (call $__ZN15ParticleEmitterC2Ei
      (tee_local $3
        (call $__Znwj
          (i32.const 96)
        )
      )
      (get_local $1)
    )
    (i32.store
      (tee_local $1
        (get_local $2)
      )
      (get_local $3)
    )
    (if i32
      (i32.eq
        (tee_local $5
          (i32.load
            (tee_local $4
              (i32.add
                (get_local $0)
                (i32.const 20)
              )
            )
          )
        )
        (i32.load offset=24
          (get_local $0)
        )
      )
      (block i32
        (call $__ZNSt3__26vectorIP8ParticleNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_
          (i32.add
            (get_local $0)
            (i32.const 16)
          )
          (get_local $1)
        )
        (set_global $STACKTOP
          (get_local $2)
        )
        (i32.load
          (get_local $1)
        )
      )
      (block i32
        (i32.store
          (get_local $5)
          (get_local $3)
        )
        (i32.store
          (get_local $4)
          (i32.add
            (i32.load
              (get_local $4)
            )
            (i32.const 4)
          )
        )
        (set_global $STACKTOP
          (get_local $2)
        )
        (i32.load
          (get_local $1)
        )
      )
    )
  )
  (func $__ZN14ParticleSystem16addMagneticFieldEi (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $3
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (call $__ZN13MagneticFieldC2Ei
      (tee_local $2
        (call $__Znwj
          (i32.const 80)
        )
      )
      (get_local $1)
    )
    (i32.store
      (tee_local $1
        (get_local $3)
      )
      (get_local $2)
    )
    (if i32
      (i32.eq
        (tee_local $5
          (i32.load
            (tee_local $4
              (i32.add
                (get_local $0)
                (i32.const 68)
              )
            )
          )
        )
        (i32.load offset=72
          (get_local $0)
        )
      )
      (block i32
        (call $__ZNSt3__26vectorIP8ParticleNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_
          (i32.add
            (get_local $0)
            (i32.const 64)
          )
          (get_local $1)
        )
        (set_global $STACKTOP
          (get_local $3)
        )
        (get_local $2)
      )
      (block i32
        (i32.store
          (get_local $5)
          (get_local $2)
        )
        (i32.store
          (get_local $4)
          (i32.add
            (i32.load
              (get_local $4)
            )
            (i32.const 4)
          )
        )
        (set_global $STACKTOP
          (get_local $3)
        )
        (get_local $2)
      )
    )
  )
  (func $__ZN14ParticleSystem4stepEd (param $0 i32) (param $1 f64)
    (call $__ZN14ParticleSystem15addNewParticlesEd
      (get_local $0)
      (get_local $1)
    )
    (call $__ZN14ParticleSystem15filterParticlesEd
      (get_local $0)
      (get_local $1)
    )
  )
  (func $__ZN14ParticleSystem15addNewParticlesEd (param $0 i32) (param $1 f64)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (if
      (i32.eq
        (tee_local $2
          (i32.load offset=16
            (get_local $0)
          )
        )
        (i32.load
          (tee_local $8
            (i32.add
              (get_local $0)
              (i32.const 20)
            )
          )
        )
      )
      (return)
    )
    (set_local $7
      (i32.add
        (get_local $0)
        (i32.const 60)
      )
    )
    (set_local $5
      (i32.add
        (get_local $0)
        (i32.const 44)
      )
    )
    (set_local $3
      (i32.add
        (get_local $0)
        (i32.const 56)
      )
    )
    (set_local $0
      (get_local $2)
    )
    (loop $while-in
      (if
        (i32.gt_s
          (call $__ZN15ParticleEmitter10emitNumberEd
            (i32.load
              (get_local $0)
            )
            (get_local $1)
          )
          (i32.const 0)
        )
        (block
          (set_local $2
            (i32.const 0)
          )
          (loop $while-in1
            (if
              (tee_local $9
                (i32.load
                  (get_local $7)
                )
              )
              (block
                (set_local $6
                  (i32.load
                    (i32.add
                      (i32.load
                        (i32.add
                          (tee_local $10
                            (i32.load
                              (get_local $5)
                            )
                          )
                          (i32.shl
                            (i32.shr_u
                              (tee_local $4
                                (i32.load
                                  (get_local $3)
                                )
                              )
                              (i32.const 10)
                            )
                            (i32.const 2)
                          )
                        )
                      )
                      (i32.shl
                        (i32.and
                          (get_local $4)
                          (i32.const 1023)
                        )
                        (i32.const 2)
                      )
                    )
                  )
                )
                (i32.store
                  (get_local $7)
                  (i32.add
                    (get_local $9)
                    (i32.const -1)
                  )
                )
                (i32.store
                  (get_local $3)
                  (tee_local $4
                    (i32.add
                      (get_local $4)
                      (i32.const 1)
                    )
                  )
                )
                (if
                  (i32.gt_u
                    (get_local $4)
                    (i32.const 2047)
                  )
                  (block
                    (call $__ZdlPv
                      (i32.load
                        (get_local $10)
                      )
                    )
                    (i32.store
                      (get_local $5)
                      (i32.add
                        (i32.load
                          (get_local $5)
                        )
                        (i32.const 4)
                      )
                    )
                    (i32.store
                      (get_local $3)
                      (i32.add
                        (i32.load
                          (get_local $3)
                        )
                        (i32.const -1024)
                      )
                    )
                  )
                )
                (call $__ZN8Particle5resetEv
                  (get_local $6)
                )
                (if
                  (get_local $6)
                  (call $__ZN15ParticleEmitter12emitParticleEP8Particle
                    (i32.load
                      (get_local $0)
                    )
                    (get_local $6)
                  )
                )
              )
            )
            (br_if $while-in1
              (i32.lt_s
                (tee_local $2
                  (i32.add
                    (get_local $2)
                    (i32.const 1)
                  )
                )
                (call $__ZN15ParticleEmitter10emitNumberEd
                  (i32.load
                    (get_local $0)
                  )
                  (get_local $1)
                )
              )
            )
          )
        )
      )
      (br_if $while-in
        (i32.ne
          (tee_local $0
            (i32.add
              (get_local $0)
              (i32.const 4)
            )
          )
          (i32.load
            (get_local $8)
          )
        )
      )
    )
  )
  (func $__ZN14ParticleSystem15filterParticlesEd (param $0 i32) (param $1 f64)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 i32)
    (if
      (i32.eq
        (tee_local $2
          (i32.load offset=28
            (get_local $0)
          )
        )
        (i32.load
          (tee_local $10
            (i32.add
              (get_local $0)
              (i32.const 32)
            )
          )
        )
      )
      (return)
    )
    (set_local $11
      (i32.add
        (get_local $0)
        (i32.const 48)
      )
    )
    (set_local $7
      (i32.add
        (get_local $0)
        (i32.const 44)
      )
    )
    (set_local $8
      (i32.add
        (get_local $0)
        (i32.const 56)
      )
    )
    (set_local $4
      (i32.add
        (get_local $0)
        (i32.const 60)
      )
    )
    (set_local $12
      (i32.add
        (get_local $0)
        (i32.const 40)
      )
    )
    (set_local $13
      (i32.add
        (get_local $0)
        (i32.const 64)
      )
    )
    (set_local $9
      (i32.add
        (get_local $0)
        (i32.const 68)
      )
    )
    (set_local $0
      (get_local $2)
    )
    (loop $while-in
      (if
        (i32.eqz
          (call $__ZN8Particle11getRecycledEv
            (tee_local $5
              (i32.load
                (get_local $0)
              )
            )
          )
        )
        (if
          (f64.lt
            (call $__ZN8Particle11getLifeTimeEv
              (get_local $5)
            )
            (f64.const 0)
          )
          (block
            (call $__ZN8Particle11setRecycledEb
              (get_local $5)
              (i32.const 1)
            )
            (set_local $15
              (i32.add
                (i32.shl
                  (tee_local $14
                    (i32.sub
                      (i32.load
                        (get_local $11)
                      )
                      (tee_local $2
                        (i32.load
                          (get_local $7)
                        )
                      )
                    )
                  )
                  (i32.const 8)
                )
                (i32.const -1)
              )
            )
            (set_local $6
              (i32.load
                (get_local $8)
              )
            )
            (set_local $3
              (i32.load
                (get_local $4)
              )
            )
            (if
              (i32.eq
                (if i32
                  (get_local $14)
                  (get_local $15)
                  (i32.const 0)
                )
                (i32.add
                  (get_local $3)
                  (get_local $6)
                )
              )
              (block
                (call $__ZNSt3__25dequeIP8ParticleNS_9allocatorIS2_EEE19__add_back_capacityEv
                  (get_local $12)
                )
                (set_local $3
                  (i32.load
                    (get_local $4)
                  )
                )
                (set_local $6
                  (i32.load
                    (get_local $8)
                  )
                )
                (set_local $2
                  (i32.load
                    (get_local $7)
                  )
                )
              )
            )
            (i32.store
              (i32.add
                (i32.load
                  (i32.add
                    (get_local $2)
                    (i32.shl
                      (i32.shr_u
                        (tee_local $2
                          (i32.add
                            (get_local $3)
                            (get_local $6)
                          )
                        )
                        (i32.const 10)
                      )
                      (i32.const 2)
                    )
                  )
                )
                (i32.shl
                  (i32.and
                    (get_local $2)
                    (i32.const 1023)
                  )
                  (i32.const 2)
                )
              )
              (get_local $5)
            )
            (i32.store
              (get_local $4)
              (i32.add
                (get_local $3)
                (i32.const 1)
              )
            )
          )
          (block
            (call $__ZN6VectorC2Eddd
              (call $__ZN8Particle15getAccelerationEv
                (i32.load
                  (get_local $0)
                )
              )
              (f64.const 0)
              (f64.const 0)
              (f64.const 0)
            )
            (if
              (i32.ne
                (tee_local $2
                  (i32.load
                    (get_local $13)
                  )
                )
                (i32.load
                  (get_local $9)
                )
              )
              (loop $while-in1
                (call_indirect $FUNCSIG$vii
                  (tee_local $3
                    (i32.load
                      (get_local $2)
                    )
                  )
                  (i32.load
                    (get_local $0)
                  )
                  (i32.add
                    (i32.and
                      (i32.load
                        (i32.load
                          (get_local $3)
                        )
                      )
                      (i32.const 3)
                    )
                    (i32.const 28)
                  )
                )
                (br_if $while-in1
                  (i32.ne
                    (tee_local $2
                      (i32.add
                        (get_local $2)
                        (i32.const 4)
                      )
                    )
                    (i32.load
                      (get_local $9)
                    )
                  )
                )
              )
            )
            (call $__ZN8Particle4stepEd
              (i32.load
                (get_local $0)
              )
              (get_local $1)
            )
          )
        )
      )
      (br_if $while-in
        (i32.ne
          (tee_local $0
            (i32.add
              (get_local $0)
              (i32.const 4)
            )
          )
          (i32.load
            (get_local $10)
          )
        )
      )
    )
  )
  (func $__ZN12EventEmitterC2Ev (param $0 i32)
    (i32.store offset=4
      (get_local $0)
      (i32.const 0)
    )
    (i32.store offset=8
      (get_local $0)
      (i32.const 0)
    )
    (i32.store
      (get_local $0)
      (i32.add
        (get_local $0)
        (i32.const 4)
      )
    )
  )
  (func $__ZN12EventEmitter2onEPNSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEP12EventHandler (param $0 i32) (param $1 i32) (param $2 i32)
    (local $3 i32)
    (local $4 i32)
    (set_local $3
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (i32.store
      (tee_local $4
        (get_local $3)
      )
      (get_local $2)
    )
    (if
      (i32.eqz
        (call $__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE14__count_uniqueIS7_EEjRKT_
          (get_local $0)
          (get_local $1)
        )
      )
      (block
        (i32.store
          (tee_local $2
            (call $__Znwj
              (i32.const 12)
            )
          )
          (i32.const 0)
        )
        (i32.store offset=4
          (get_local $2)
          (i32.const 0)
        )
        (i32.store offset=8
          (get_local $2)
          (i32.const 0)
        )
        (i32.store
          (call $__ZNSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS4_IS9_EEEENS_4lessIS6_EENS4_INS_4pairIKS6_SC_EEEEEixERSG_
            (get_local $0)
            (get_local $1)
          )
          (get_local $2)
        )
      )
    )
    (if
      (i32.eq
        (tee_local $0
          (i32.load
            (tee_local $1
              (i32.add
                (tee_local $2
                  (i32.load
                    (call $__ZNSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS4_IS9_EEEENS_4lessIS6_EENS4_INS_4pairIKS6_SC_EEEEEixERSG_
                      (get_local $0)
                      (get_local $1)
                    )
                  )
                )
                (i32.const 4)
              )
            )
          )
        )
        (i32.load offset=8
          (get_local $2)
        )
      )
      (block
        (call $__ZNSt3__26vectorIP8ParticleNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_
          (get_local $2)
          (get_local $4)
        )
        (set_global $STACKTOP
          (get_local $3)
        )
      )
      (block
        (i32.store
          (get_local $0)
          (i32.load
            (get_local $4)
          )
        )
        (i32.store
          (get_local $1)
          (i32.add
            (i32.load
              (get_local $1)
            )
            (i32.const 4)
          )
        )
        (set_global $STACKTOP
          (get_local $3)
        )
      )
    )
  )
  (func $__ZNKSt3__26__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS5_ISA_EEEEEENS_19__map_value_compareIS7_SE_NS_4lessIS7_EELb1EEENS5_ISE_EEE14__count_uniqueIS7_EEjRKT_ (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (if
      (i32.eqz
        (tee_local $0
          (i32.load offset=4
            (get_local $0)
          )
        )
      )
      (return
        (i32.const 0)
      )
    )
    (set_local $2
      (i32.lt_s
        (i32.shr_s
          (i32.shl
            (tee_local $3
              (i32.load8_s offset=11
                (get_local $1)
              )
            )
            (i32.const 24)
          )
          (i32.const 24)
        )
        (i32.const 0)
      )
    )
    (set_local $4
      (i32.load offset=4
        (get_local $1)
      )
    )
    (set_local $3
      (i32.and
        (get_local $3)
        (i32.const 255)
      )
    )
    (if
      (i32.eqz
        (get_local $2)
      )
      (set_local $4
        (get_local $3)
      )
    )
    (set_local $3
      (i32.load
        (get_local $1)
      )
    )
    (if
      (i32.eqz
        (get_local $2)
      )
      (set_local $3
        (get_local $1)
      )
    )
    (block $jumpthreading$inner$4
      (loop $while-in
        (set_local $6
          (i32.lt_s
            (i32.shr_s
              (i32.shl
                (tee_local $2
                  (i32.load8_s offset=11
                    (tee_local $5
                      (i32.add
                        (get_local $0)
                        (i32.const 16)
                      )
                    )
                  )
                )
                (i32.const 24)
              )
              (i32.const 24)
            )
            (i32.const 0)
          )
        )
        (set_local $1
          (i32.load offset=20
            (get_local $0)
          )
        )
        (set_local $2
          (i32.and
            (get_local $2)
            (i32.const 255)
          )
        )
        (block $jumpthreading$outer$3
          (block $jumpthreading$inner$3
            (block $jumpthreading$inner$2
              (if
                (tee_local $2
                  (if i32
                    (tee_local $7
                      (i32.lt_u
                        (if i32
                          (get_local $6)
                          (get_local $1)
                          (tee_local $1
                            (get_local $2)
                          )
                        )
                        (get_local $4)
                      )
                    )
                    (get_local $1)
                    (get_local $4)
                  )
                )
                (block
                  (set_local $8
                    (i32.load
                      (get_local $5)
                    )
                  )
                  (if
                    (tee_local $2
                      (call $_memcmp
                        (get_local $3)
                        (if i32
                          (get_local $6)
                          (get_local $8)
                          (get_local $5)
                        )
                        (get_local $2)
                      )
                    )
                    (block
                      (br_if $jumpthreading$outer$3
                        (i32.lt_s
                          (get_local $2)
                          (i32.const 0)
                        )
                      )
                      (br $jumpthreading$inner$3)
                    )
                  )
                )
              )
              (br_if $jumpthreading$inner$3
                (i32.ge_u
                  (get_local $4)
                  (get_local $1)
                )
              )
            )
            (br $jumpthreading$outer$3)
          )
          (block $jumpthreading$outer$0
            (block $jumpthreading$inner$0
              (br_if $jumpthreading$inner$0
                (i32.eqz
                  (if i32
                    (i32.lt_u
                      (get_local $4)
                      (get_local $1)
                    )
                    (tee_local $1
                      (get_local $4)
                    )
                    (get_local $1)
                  )
                )
              )
              (set_local $2
                (i32.load
                  (get_local $5)
                )
              )
              (br_if $jumpthreading$inner$0
                (i32.eqz
                  (tee_local $1
                    (call $_memcmp
                      (if i32
                        (get_local $6)
                        (get_local $2)
                        (get_local $5)
                      )
                      (get_local $3)
                      (get_local $1)
                    )
                  )
                )
              )
              (if
                (i32.ge_s
                  (get_local $1)
                  (i32.const 0)
                )
                (block
                  (set_local $0
                    (i32.const 1)
                  )
                  (br $jumpthreading$inner$4)
                )
              )
              (br $jumpthreading$outer$0)
            )
            (if
              (i32.eqz
                (get_local $7)
              )
              (block
                (set_local $0
                  (i32.const 1)
                )
                (br $jumpthreading$inner$4)
              )
            )
          )
          (set_local $0
            (i32.add
              (get_local $0)
              (i32.const 4)
            )
          )
        )
        (br_if $while-in
          (tee_local $0
            (i32.load
              (get_local $0)
            )
          )
        )
        (set_local $0
          (i32.const 0)
        )
        (br $jumpthreading$inner$4)
      )
    )
    (get_local $0)
  )
  (func $__ZNSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS4_IS9_EEEENS_4lessIS6_EENS4_INS_4pairIKS6_SC_EEEEEixERSG_ (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $3
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (if
      (tee_local $2
        (i32.load
          (tee_local $4
            (call $__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS4_IS9_EEEENS_4lessIS6_EENS4_INS_4pairIKS6_SC_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSG_
              (get_local $0)
              (tee_local $5
                (get_local $3)
              )
              (get_local $1)
            )
          )
        )
      )
      (block
        (set_global $STACKTOP
          (get_local $3)
        )
        (return
          (i32.add
            (get_local $2)
            (i32.const 28)
          )
        )
      )
    )
    (call $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_
      (i32.add
        (tee_local $2
          (call $__Znwj
            (i32.const 32)
          )
        )
        (i32.const 16)
      )
      (get_local $1)
    )
    (i32.store offset=28
      (get_local $2)
      (i32.const 0)
    )
    (set_local $1
      (i32.load
        (get_local $5)
      )
    )
    (i32.store
      (get_local $2)
      (i32.const 0)
    )
    (i32.store offset=4
      (get_local $2)
      (i32.const 0)
    )
    (i32.store offset=8
      (get_local $2)
      (get_local $1)
    )
    (i32.store
      (get_local $4)
      (get_local $2)
    )
    (set_local $1
      (if i32
        (tee_local $1
          (i32.load
            (i32.load
              (get_local $0)
            )
          )
        )
        (block i32
          (i32.store
            (get_local $0)
            (get_local $1)
          )
          (i32.load
            (get_local $4)
          )
        )
        (get_local $2)
      )
    )
    (call $__ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_
      (i32.load offset=4
        (get_local $0)
      )
      (get_local $1)
    )
    (i32.store
      (tee_local $0
        (i32.add
          (get_local $0)
          (i32.const 8)
        )
      )
      (i32.add
        (i32.load
          (get_local $0)
        )
        (i32.const 1)
      )
    )
    (set_global $STACKTOP
      (get_local $3)
    )
    (i32.add
      (get_local $2)
      (i32.const 28)
    )
  )
  (func $__ZNKSt3__23mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPNS_6vectorIP12EventHandlerNS4_IS9_EEEENS_4lessIS6_EENS4_INS_4pairIKS6_SC_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSG_ (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (if
      (i32.eqz
        (tee_local $0
          (i32.load
            (tee_local $4
              (i32.add
                (get_local $0)
                (i32.const 4)
              )
            )
          )
        )
      )
      (block
        (i32.store
          (get_local $1)
          (get_local $4)
        )
        (return
          (get_local $4)
        )
      )
    )
    (set_local $3
      (i32.lt_s
        (i32.shr_s
          (i32.shl
            (tee_local $5
              (i32.load8_s offset=11
                (get_local $2)
              )
            )
            (i32.const 24)
          )
          (i32.const 24)
        )
        (i32.const 0)
      )
    )
    (set_local $4
      (i32.load offset=4
        (get_local $2)
      )
    )
    (set_local $5
      (i32.and
        (get_local $5)
        (i32.const 255)
      )
    )
    (if
      (i32.eqz
        (get_local $3)
      )
      (set_local $4
        (get_local $5)
      )
    )
    (set_local $5
      (i32.load
        (get_local $2)
      )
    )
    (if
      (i32.eqz
        (get_local $3)
      )
      (set_local $5
        (get_local $2)
      )
    )
    (block $jumpthreading$inner$6
      (block $jumpthreading$inner$5
        (block $jumpthreading$inner$4
          (loop $while-in
            (set_local $7
              (i32.lt_s
                (i32.shr_s
                  (i32.shl
                    (tee_local $3
                      (i32.load8_s offset=11
                        (tee_local $6
                          (i32.add
                            (get_local $0)
                            (i32.const 16)
                          )
                        )
                      )
                    )
                    (i32.const 24)
                  )
                  (i32.const 24)
                )
                (i32.const 0)
              )
            )
            (set_local $2
              (i32.load offset=20
                (get_local $0)
              )
            )
            (set_local $3
              (i32.and
                (get_local $3)
                (i32.const 255)
              )
            )
            (set_local $0
              (block $jumpthreading$outer$3 i32
                (block $jumpthreading$inner$3
                  (block $jumpthreading$inner$2
                    (if
                      (tee_local $3
                        (if i32
                          (tee_local $8
                            (i32.lt_u
                              (if i32
                                (get_local $7)
                                (get_local $2)
                                (tee_local $2
                                  (get_local $3)
                                )
                              )
                              (get_local $4)
                            )
                          )
                          (get_local $2)
                          (get_local $4)
                        )
                      )
                      (block
                        (set_local $9
                          (i32.load
                            (get_local $6)
                          )
                        )
                        (if
                          (tee_local $3
                            (call $_memcmp
                              (get_local $5)
                              (if i32
                                (get_local $7)
                                (get_local $9)
                                (get_local $6)
                              )
                              (get_local $3)
                            )
                          )
                          (block
                            (br_if $jumpthreading$inner$2
                              (i32.lt_s
                                (get_local $3)
                                (i32.const 0)
                              )
                            )
                            (br $jumpthreading$inner$3)
                          )
                        )
                      )
                    )
                    (br_if $jumpthreading$inner$3
                      (i32.ge_u
                        (get_local $4)
                        (get_local $2)
                      )
                    )
                  )
                  (br_if $jumpthreading$inner$4
                    (i32.eqz
                      (tee_local $2
                        (i32.load
                          (get_local $0)
                        )
                      )
                    )
                  )
                  (br $jumpthreading$outer$3
                    (get_local $2)
                  )
                )
                (block $jumpthreading$outer$0
                  (block $jumpthreading$inner$0
                    (br_if $jumpthreading$inner$0
                      (i32.eqz
                        (if i32
                          (i32.lt_u
                            (get_local $4)
                            (get_local $2)
                          )
                          (tee_local $2
                            (get_local $4)
                          )
                          (get_local $2)
                        )
                      )
                    )
                    (set_local $3
                      (i32.load
                        (get_local $6)
                      )
                    )
                    (br_if $jumpthreading$inner$0
                      (i32.eqz
                        (tee_local $2
                          (call $_memcmp
                            (if i32
                              (get_local $7)
                              (get_local $3)
                              (get_local $6)
                            )
                            (get_local $5)
                            (get_local $2)
                          )
                        )
                      )
                    )
                    (br_if $jumpthreading$inner$6
                      (i32.ge_s
                        (get_local $2)
                        (i32.const 0)
                      )
                    )
                    (br $jumpthreading$outer$0)
                  )
                  (br_if $jumpthreading$inner$6
                    (i32.eqz
                      (get_local $8)
                    )
                  )
                )
                (br_if $jumpthreading$inner$5
                  (i32.eqz
                    (tee_local $2
                      (i32.load
                        (tee_local $3
                          (i32.add
                            (get_local $0)
                            (i32.const 4)
                          )
                        )
                      )
                    )
                  )
                )
                (get_local $2)
              )
            )
            (br $while-in)
          )
        )
        (i32.store
          (get_local $1)
          (get_local $0)
        )
        (return
          (get_local $0)
        )
      )
      (i32.store
        (get_local $1)
        (get_local $0)
      )
      (return
        (get_local $3)
      )
    )
    (i32.store
      (get_local $1)
      (get_local $0)
    )
    (get_local $1)
  )
  (func $__ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_ (param $0 i32) (param $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (i32.store8 offset=12
      (get_local $1)
      (i32.and
        (tee_local $2
          (i32.eq
            (get_local $1)
            (get_local $0)
          )
        )
        (i32.const 1)
      )
    )
    (if
      (get_local $2)
      (return)
      (set_local $2
        (get_local $1)
      )
    )
    (block $jumpthreading$outer$2
      (block $jumpthreading$inner$1
        (block $jumpthreading$inner$0
          (loop $while-in
            (br_if $jumpthreading$outer$2
              (i32.load8_s
                (tee_local $6
                  (i32.add
                    (tee_local $3
                      (i32.load offset=8
                        (get_local $2)
                      )
                    )
                    (i32.const 12)
                  )
                )
              )
            )
            (if
              (i32.eq
                (tee_local $5
                  (i32.load
                    (tee_local $1
                      (i32.load
                        (tee_local $4
                          (i32.add
                            (get_local $3)
                            (i32.const 8)
                          )
                        )
                      )
                    )
                  )
                )
                (get_local $3)
              )
              (block
                (br_if $jumpthreading$inner$0
                  (i32.eqz
                    (tee_local $5
                      (i32.load offset=4
                        (get_local $1)
                      )
                    )
                  )
                )
                (br_if $jumpthreading$inner$0
                  (i32.load8_s
                    (tee_local $5
                      (i32.add
                        (get_local $5)
                        (i32.const 12)
                      )
                    )
                  )
                )
                (i32.store8
                  (get_local $6)
                  (i32.const 1)
                )
                (i32.store8 offset=12
                  (get_local $1)
                  (i32.eq
                    (get_local $1)
                    (get_local $0)
                  )
                )
                (i32.store8
                  (get_local $5)
                  (i32.const 1)
                )
              )
              (block
                (br_if $jumpthreading$inner$1
                  (i32.eqz
                    (get_local $5)
                  )
                )
                (br_if $jumpthreading$inner$1
                  (i32.load8_s
                    (tee_local $5
                      (i32.add
                        (get_local $5)
                        (i32.const 12)
                      )
                    )
                  )
                )
                (i32.store8
                  (get_local $6)
                  (i32.const 1)
                )
                (i32.store8 offset=12
                  (get_local $1)
                  (i32.eq
                    (get_local $1)
                    (get_local $0)
                  )
                )
                (i32.store8
                  (get_local $5)
                  (i32.const 1)
                )
              )
            )
            (br_if $jumpthreading$outer$2
              (i32.eq
                (get_local $1)
                (get_local $0)
              )
            )
            (set_local $2
              (get_local $1)
            )
            (br $while-in)
          )
        )
        (if
          (i32.ne
            (i32.load
              (get_local $3)
            )
            (get_local $2)
          )
          (block
            (set_local $2
              (i32.load
                (tee_local $0
                  (i32.load
                    (tee_local $6
                      (i32.add
                        (get_local $3)
                        (i32.const 4)
                      )
                    )
                  )
                )
              )
            )
            (i32.store
              (get_local $6)
              (get_local $2)
            )
            (if
              (get_local $2)
              (block
                (i32.store offset=8
                  (get_local $2)
                  (get_local $3)
                )
                (set_local $1
                  (i32.load
                    (get_local $4)
                  )
                )
              )
            )
            (i32.store
              (tee_local $2
                (i32.add
                  (get_local $0)
                  (i32.const 8)
                )
              )
              (get_local $1)
            )
            (if
              (i32.eq
                (i32.load
                  (tee_local $1
                    (i32.load
                      (get_local $4)
                    )
                  )
                )
                (get_local $3)
              )
              (i32.store
                (get_local $1)
                (get_local $0)
              )
              (i32.store offset=4
                (get_local $1)
                (get_local $0)
              )
            )
            (i32.store
              (get_local $0)
              (get_local $3)
            )
            (i32.store
              (get_local $4)
              (get_local $0)
            )
            (set_local $3
              (get_local $0)
            )
            (set_local $1
              (i32.load
                (get_local $2)
              )
            )
          )
        )
        (i32.store8 offset=12
          (get_local $3)
          (i32.const 1)
        )
        (i32.store8 offset=12
          (get_local $1)
          (i32.const 0)
        )
        (i32.store
          (get_local $1)
          (tee_local $2
            (i32.load
              (tee_local $4
                (i32.add
                  (tee_local $0
                    (i32.load
                      (get_local $1)
                    )
                  )
                  (i32.const 4)
                )
              )
            )
          )
        )
        (if
          (get_local $2)
          (i32.store offset=8
            (get_local $2)
            (get_local $1)
          )
        )
        (i32.store offset=8
          (get_local $0)
          (i32.load
            (tee_local $2
              (i32.add
                (get_local $1)
                (i32.const 8)
              )
            )
          )
        )
        (if
          (i32.eq
            (i32.load
              (tee_local $3
                (i32.load
                  (get_local $2)
                )
              )
            )
            (get_local $1)
          )
          (i32.store
            (get_local $3)
            (get_local $0)
          )
          (i32.store offset=4
            (get_local $3)
            (get_local $0)
          )
        )
        (i32.store
          (get_local $4)
          (get_local $1)
        )
        (i32.store
          (get_local $2)
          (get_local $0)
        )
        (return)
      )
      (if
        (i32.eq
          (i32.load
            (get_local $3)
          )
          (get_local $2)
        )
        (block
          (i32.store
            (get_local $3)
            (tee_local $2
              (i32.load
                (tee_local $6
                  (i32.add
                    (tee_local $0
                      (i32.load
                        (get_local $3)
                      )
                    )
                    (i32.const 4)
                  )
                )
              )
            )
          )
          (if
            (get_local $2)
            (block
              (i32.store offset=8
                (get_local $2)
                (get_local $3)
              )
              (set_local $1
                (i32.load
                  (get_local $4)
                )
              )
            )
          )
          (i32.store
            (tee_local $2
              (i32.add
                (get_local $0)
                (i32.const 8)
              )
            )
            (get_local $1)
          )
          (if
            (i32.eq
              (i32.load
                (tee_local $1
                  (i32.load
                    (get_local $4)
                  )
                )
              )
              (get_local $3)
            )
            (i32.store
              (get_local $1)
              (get_local $0)
            )
            (i32.store offset=4
              (get_local $1)
              (get_local $0)
            )
          )
          (i32.store
            (get_local $6)
            (get_local $3)
          )
          (i32.store
            (get_local $4)
            (get_local $0)
          )
          (set_local $3
            (get_local $0)
          )
          (set_local $1
            (i32.load
              (get_local $2)
            )
          )
        )
      )
      (i32.store8 offset=12
        (get_local $3)
        (i32.const 1)
      )
      (i32.store8 offset=12
        (get_local $1)
        (i32.const 0)
      )
      (set_local $2
        (i32.load
          (tee_local $0
            (i32.load
              (tee_local $3
                (i32.add
                  (get_local $1)
                  (i32.const 4)
                )
              )
            )
          )
        )
      )
      (i32.store
        (get_local $3)
        (get_local $2)
      )
      (if
        (get_local $2)
        (i32.store offset=8
          (get_local $2)
          (get_local $1)
        )
      )
      (i32.store offset=8
        (get_local $0)
        (i32.load
          (tee_local $2
            (i32.add
              (get_local $1)
              (i32.const 8)
            )
          )
        )
      )
      (if
        (i32.eq
          (i32.load
            (tee_local $3
              (i32.load
                (get_local $2)
              )
            )
          )
          (get_local $1)
        )
        (i32.store
          (get_local $3)
          (get_local $0)
        )
        (i32.store offset=4
          (get_local $3)
          (get_local $0)
        )
      )
      (i32.store
        (get_local $0)
        (get_local $1)
      )
      (i32.store
        (get_local $2)
        (get_local $0)
      )
    )
  )
  (func $__ZN12EventHandlerC2Ev (param $0 i32)
    (nop)
  )
  (func $__ZN12EventHandler11handleEventEPNSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE (param $0 i32) (param $1 i32) (result i32)
    (drop
      (call $_puts
        (i32.const 1980)
      )
    )
    (i32.const 0)
  )
  (func $__ZN6VectorC2Ev (param $0 i32)
    (i64.store
      (get_local $0)
      (i64.const 0)
    )
    (i64.store offset=8
      (get_local $0)
      (i64.const 0)
    )
    (i64.store offset=16
      (get_local $0)
      (i64.const 0)
    )
  )
  (func $__ZN6VectorC2Eddd (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64)
    (f64.store
      (get_local $0)
      (get_local $1)
    )
    (f64.store offset=8
      (get_local $0)
      (get_local $2)
    )
    (f64.store offset=16
      (get_local $0)
      (get_local $3)
    )
  )
  (func $__ZN6Vector3setERKS_ (param $0 i32) (param $1 i32)
    (local $2 f64)
    (local $3 f64)
    (set_local $2
      (f64.load offset=8
        (get_local $1)
      )
    )
    (set_local $3
      (f64.load offset=16
        (get_local $1)
      )
    )
    (f64.store
      (get_local $0)
      (f64.load
        (get_local $1)
      )
    )
    (f64.store offset=8
      (get_local $0)
      (get_local $2)
    )
    (f64.store offset=16
      (get_local $0)
      (get_local $3)
    )
  )
  (func $__ZNK6Vector4getXEv (param $0 i32) (result f64)
    (f64.load
      (get_local $0)
    )
  )
  (func $__ZNK6Vector4getYEv (param $0 i32) (result f64)
    (f64.load offset=8
      (get_local $0)
    )
  )
  (func $__ZNK6Vector4getZEv (param $0 i32) (result f64)
    (f64.load offset=16
      (get_local $0)
    )
  )
  (func $__ZNK6Vector9magnitudeEv (param $0 i32) (result f64)
    (local $1 f64)
    (f64.sqrt
      (f64.add
        (f64.add
          (f64.mul
            (tee_local $1
              (f64.load
                (get_local $0)
              )
            )
            (get_local $1)
          )
          (f64.mul
            (tee_local $1
              (f64.load offset=8
                (get_local $0)
              )
            )
            (get_local $1)
          )
        )
        (f64.mul
          (tee_local $1
            (f64.load offset=16
              (get_local $0)
            )
          )
          (get_local $1)
        )
      )
    )
  )
  (func $__ZNK6Vector12withinSphereEPKS_d (param $0 i32) (param $1 i32) (param $2 f64) (result i32)
    (local $3 f64)
    (f64.lt
      (f64.add
        (f64.add
          (f64.mul
            (tee_local $3
              (f64.sub
                (f64.load
                  (get_local $0)
                )
                (f64.load
                  (get_local $1)
                )
              )
            )
            (get_local $3)
          )
          (f64.mul
            (tee_local $3
              (f64.sub
                (f64.load offset=8
                  (get_local $0)
                )
                (f64.load offset=8
                  (get_local $1)
                )
              )
            )
            (get_local $3)
          )
        )
        (f64.mul
          (tee_local $3
            (f64.sub
              (f64.load offset=16
                (get_local $0)
              )
              (f64.load offset=16
                (get_local $1)
              )
            )
          )
          (get_local $3)
        )
      )
      (f64.mul
        (get_local $2)
        (get_local $2)
      )
    )
  )
  (func $_emscripten_bind_BaseObject_BaseObject_2 (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (call $__ZN10BaseObjectC2Eii
      (tee_local $2
        (call $__Znwj
          (i32.const 64)
        )
      )
      (get_local $0)
      (get_local $1)
    )
    (get_local $2)
  )
  (func $_emscripten_bind_BaseObject___destroy___0 (param $0 i32)
    (if
      (i32.eqz
        (get_local $0)
      )
      (return)
    )
    (call $__ZdlPv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_BaseObject_getId_0 (param $0 i32) (result i32)
    (call $__ZN10BaseObject5getIdEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_BaseObject_getSelectable_0 (param $0 i32) (result i32)
    (call $__ZN10BaseObject13getSelectableEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_BaseObject_getTransformable_0 (param $0 i32) (result i32)
    (call $__ZN10BaseObject16getTransformableEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_BaseObject_getType_0 (param $0 i32) (result i32)
    (call $__ZN10BaseObject7getTypeEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_BaseObject_setPosition_3 (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64)
    (call $__ZN10BaseObject11setPositionEddd
      (get_local $0)
      (get_local $1)
      (get_local $2)
      (get_local $3)
    )
  )
  (func $_emscripten_bind_BaseObject_setSelectable_1 (param $0 i32) (param $1 i32)
    (call $__ZN10BaseObject13setSelectableEb
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_BaseObject_setTransformable_1 (param $0 i32) (param $1 i32)
    (call $__ZN10BaseObject16setTransformableEb
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_EmString_EmString_0 (result i32)
    (local $0 i32)
    (i64.store align=4
      (tee_local $0
        (call $__Znwj
          (i32.const 12)
        )
      )
      (i64.const 0)
    )
    (i32.store offset=8
      (get_local $0)
      (i32.const 0)
    )
    (get_local $0)
  )
  (func $_emscripten_bind_EmString_EmString_1 (param $0 i32) (result i32)
    (local $1 i32)
    (i64.store align=4
      (tee_local $1
        (call $__Znwj
          (i32.const 12)
        )
      )
      (i64.const 0)
    )
    (i32.store offset=8
      (get_local $1)
      (i32.const 0)
    )
    (drop
      (call $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc
        (get_local $1)
        (get_local $0)
      )
    )
    (get_local $1)
  )
  (func $_emscripten_bind_EmString___destroy___0 (param $0 i32)
    (if
      (i32.eqz
        (get_local $0)
      )
      (return)
    )
    (call $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev
      (get_local $0)
    )
    (call $__ZdlPv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_EmString_c_str_0 (param $0 i32) (result i32)
    (if i32
      (i32.lt_s
        (i32.load8_s offset=11
          (get_local $0)
        )
        (i32.const 0)
      )
      (i32.load
        (get_local $0)
      )
      (get_local $0)
    )
  )
  (func $_emscripten_bind_EventHandler_EventHandler_0 (result i32)
    (call $__Znwj
      (i32.const 1)
    )
  )
  (func $_emscripten_bind_EventHandler_handleEvent_1 (param $0 i32) (param $1 i32) (result i32)
    (call $__ZN12EventHandler11handleEventEPNSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_MagneticField_MagneticField_1 (param $0 i32) (result i32)
    (local $1 i32)
    (call $__ZN13MagneticFieldC2Ei
      (tee_local $1
        (call $__Znwj
          (i32.const 80)
        )
      )
      (get_local $0)
    )
    (get_local $1)
  )
  (func $_emscripten_bind_MagneticField_getForce_0 (param $0 i32) (result f64)
    (call $__ZN13MagneticField8getForceEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_MagneticField_getOffset_0 (param $0 i32) (result i32)
    (call $__ZN10BaseObject9getOffsetEv
      (i32.add
        (get_local $0)
        (i32.const 8)
      )
    )
  )
  (func $_emscripten_bind_MagneticField_getPosition_0 (param $0 i32) (result i32)
    (call $__ZN10BaseObject11getPositionEv
      (i32.add
        (get_local $0)
        (i32.const 8)
      )
    )
  )
  (func $_emscripten_bind_MagneticField_setForce_1 (param $0 i32) (param $1 f64)
    (call $__ZN13MagneticField8setForceEd
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_MagneticField_setOffset_3 (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64)
    (call $__ZN10BaseObject9setOffsetEddd
      (i32.add
        (get_local $0)
        (i32.const 8)
      )
      (get_local $1)
      (get_local $2)
      (get_local $3)
    )
  )
  (func $_emscripten_bind_MagneticField_setPosition_3 (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64)
    (call $__ZN10BaseObject11setPositionEddd
      (i32.add
        (get_local $0)
        (i32.const 8)
      )
      (get_local $1)
      (get_local $2)
      (get_local $3)
    )
  )
  (func $_emscripten_bind_MagneticField_setSelectable_1 (param $0 i32) (param $1 i32)
    (call $__ZN10BaseObject13setSelectableEb
      (i32.add
        (get_local $0)
        (i32.const 8)
      )
      (get_local $1)
    )
  )
  (func $_emscripten_bind_MagneticField_setTransformable_1 (param $0 i32) (param $1 i32)
    (call $__ZN10BaseObject16setTransformableEb
      (i32.add
        (get_local $0)
        (i32.const 8)
      )
      (get_local $1)
    )
  )
  (func $_emscripten_bind_ParticleEmitter_ParticleEmitter_1 (param $0 i32) (result i32)
    (local $1 i32)
    (call $__ZN15ParticleEmitterC2Ei
      (tee_local $1
        (call $__Znwj
          (i32.const 96)
        )
      )
      (get_local $0)
    )
    (get_local $1)
  )
  (func $_emscripten_bind_ParticleEmitter_getCharge_0 (param $0 i32) (result f64)
    (call $__ZN15ParticleEmitter9getChargeEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_ParticleEmitter_getEmissionRate_0 (param $0 i32) (result f64)
    (call $__ZN15ParticleEmitter15getEmissionRateEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_ParticleEmitter_getOffset_0 (param $0 i32) (result i32)
    (call $__ZN10BaseObject9getOffsetEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_ParticleEmitter_getPosition_0 (param $0 i32) (result i32)
    (call $__ZN10BaseObject11getPositionEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_ParticleEmitter_getSpread_0 (param $0 i32) (result f64)
    (call $__ZN15ParticleEmitter9getSpreadEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_ParticleEmitter_setCharge_1 (param $0 i32) (param $1 f64)
    (call $__ZN15ParticleEmitter9setChargeEd
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_ParticleEmitter_setEmissionRate_1 (param $0 i32) (param $1 f64)
    (call $__ZN15ParticleEmitter15setEmissionRateEd
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_ParticleEmitter_setOffset_3 (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64)
    (call $__ZN10BaseObject9setOffsetEddd
      (get_local $0)
      (get_local $1)
      (get_local $2)
      (get_local $3)
    )
  )
  (func $_emscripten_bind_ParticleEmitter_setSpread_1 (param $0 i32) (param $1 f64)
    (call $__ZN15ParticleEmitter9setSpreadEd
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_ParticleSystem_ParticleSystem_1 (param $0 i32) (result i32)
    (local $1 i32)
    (call $__ZN14ParticleSystemC2Ei
      (tee_local $1
        (call $__Znwj
          (i32.const 112)
        )
      )
      (get_local $0)
    )
    (get_local $1)
  )
  (func $_emscripten_bind_ParticleSystem___destroy___0 (param $0 i32)
    (if
      (i32.eqz
        (get_local $0)
      )
      (return)
    )
    (call $__ZN14ParticleSystemD2Ev
      (get_local $0)
    )
    (call $__ZdlPv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_ParticleSystem_addEmitter_1 (param $0 i32) (param $1 i32) (result i32)
    (call $__ZN14ParticleSystem10addEmitterEi
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_ParticleSystem_addMagneticField_1 (param $0 i32) (param $1 i32) (result i32)
    (call $__ZN14ParticleSystem16addMagneticFieldEi
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_ParticleSystem_destroy_0 (param $0 i32)
    (call $__ZN14ParticleSystem7destroyEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_ParticleSystem_getEmitter_1 (param $0 i32) (param $1 i32) (result i32)
    (call $__ZN14ParticleSystem10getEmitterEi
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_ParticleSystem_getMagneticField_1 (param $0 i32) (param $1 i32) (result i32)
    (call $__ZN14ParticleSystem16getMagneticFieldEi
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_ParticleSystem_getMaxParticles_0 (param $0 i32) (result i32)
    (call $__ZN14ParticleSystem15getMaxParticlesEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_ParticleSystem_getObjectById_1 (param $0 i32) (param $1 i32) (result i32)
    (call $__ZN14ParticleSystem13getObjectByIdEi
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_ParticleSystem_initParticleLoop_0 (param $0 i32)
    (call $__ZN14ParticleSystem16initParticleLoopEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_ParticleSystem_nextParticle_0 (param $0 i32) (result i32)
    (call $__ZN14ParticleSystem12nextParticleEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_ParticleSystem_on_2 (param $0 i32) (param $1 i32) (param $2 i32)
    (call $__ZN12EventEmitter2onEPNSt3__212basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEEP12EventHandler
      (get_local $0)
      (get_local $1)
      (get_local $2)
    )
  )
  (func $_emscripten_bind_ParticleSystem_setDof_3 (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64)
    (call $__ZN14ParticleSystem6setDofEddd
      (get_local $0)
      (get_local $1)
      (get_local $2)
      (get_local $3)
    )
  )
  (func $_emscripten_bind_ParticleSystem_setMaxParticles_1 (param $0 i32) (param $1 i32)
    (call $__ZN14ParticleSystem15setMaxParticlesEi
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_ParticleSystem_step_1 (param $0 i32) (param $1 f64)
    (call $__ZN14ParticleSystem4stepEd
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_Particle_Particle_0 (result i32)
    (local $0 i32)
    (call $__ZN8ParticleC2Ev
      (tee_local $0
        (call $__Znwj
          (i32.const 128)
        )
      )
    )
    (get_local $0)
  )
  (func $_emscripten_bind_Particle_getAcceleration_0 (param $0 i32) (result i32)
    (call $__ZN8Particle15getAccelerationEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_Particle_getDof_0 (param $0 i32) (result i32)
    (call $__ZN8Particle6getDofEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_Particle_getLifeTime_0 (param $0 i32) (result f64)
    (call $__ZN8Particle11getLifeTimeEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_Particle_getPosition_0 (param $0 i32) (result i32)
    (call $__ZN8Particle11getPositionEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_Particle_getRadius_0 (param $0 i32) (result f64)
    (call $__ZN8Particle9getRadiusEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_Particle_getRecycled_0 (param $0 i32) (result i32)
    (call $__ZN8Particle11getRecycledEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_Particle_getVelocity_0 (param $0 i32) (result i32)
    (call $__ZN8Particle11getVelocityEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_Particle_setLifeTime_1 (param $0 i32) (param $1 f64)
    (call $__ZN8Particle11setLifeTimeEd
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_emscripten_bind_Vector_Vector_3 (param $0 f64) (param $1 f64) (param $2 f64) (result i32)
    (local $3 i32)
    (call $__ZN6VectorC2Eddd
      (tee_local $3
        (call $__Znwj
          (i32.const 24)
        )
      )
      (get_local $0)
      (get_local $1)
      (get_local $2)
    )
    (get_local $3)
  )
  (func $_emscripten_bind_Vector_getX_0 (param $0 i32) (result f64)
    (call $__ZNK6Vector4getXEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_Vector_getY_0 (param $0 i32) (result f64)
    (call $__ZNK6Vector4getYEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_Vector_getZ_0 (param $0 i32) (result f64)
    (call $__ZNK6Vector4getZEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_Vector_magnitude_0 (param $0 i32) (result f64)
    (call $__ZNK6Vector9magnitudeEv
      (get_local $0)
    )
  )
  (func $_emscripten_bind_Vector_set_3 (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64)
    (call $__ZN6VectorC2Eddd
      (get_local $0)
      (get_local $1)
      (get_local $2)
      (get_local $3)
    )
  )
  (func $_emscripten_bind_Vector_withinSphere_2 (param $0 i32) (param $1 i32) (param $2 f64) (result i32)
    (call $__ZNK6Vector12withinSphereEPKS_d
      (get_local $0)
      (get_local $1)
      (get_local $2)
    )
  )
  (func $___stdio_close (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (i32.store
      (tee_local $2
        (get_local $1)
      )
      (i32.load offset=60
        (get_local $0)
      )
    )
    (set_local $0
      (call $___syscall_ret
        (call $___syscall6
          (i32.const 6)
          (get_local $2)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $1)
    )
    (get_local $0)
  )
  (func $___stdio_write (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 i32)
    (set_local $7
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 48)
      )
    )
    (set_local $8
      (i32.add
        (get_local $7)
        (i32.const 16)
      )
    )
    (set_local $9
      (get_local $7)
    )
    (i32.store
      (tee_local $3
        (i32.add
          (get_local $7)
          (i32.const 32)
        )
      )
      (tee_local $4
        (i32.load
          (tee_local $6
            (i32.add
              (get_local $0)
              (i32.const 28)
            )
          )
        )
      )
    )
    (i32.store offset=4
      (get_local $3)
      (tee_local $4
        (i32.sub
          (i32.load
            (tee_local $11
              (i32.add
                (get_local $0)
                (i32.const 20)
              )
            )
          )
          (get_local $4)
        )
      )
    )
    (i32.store offset=8
      (get_local $3)
      (get_local $1)
    )
    (i32.store offset=12
      (get_local $3)
      (get_local $2)
    )
    (set_local $14
      (i32.add
        (get_local $0)
        (i32.const 60)
      )
    )
    (set_local $15
      (i32.add
        (get_local $0)
        (i32.const 44)
      )
    )
    (set_local $5
      (i32.const 2)
    )
    (set_local $12
      (i32.add
        (get_local $4)
        (get_local $2)
      )
    )
    (set_local $1
      (get_local $3)
    )
    (block $jumpthreading$outer$1
      (block $jumpthreading$inner$1
        (block $jumpthreading$inner$0
          (loop $while-in
            (if
              (i32.load
                (i32.const 5240)
              )
              (block
                (call $_pthread_cleanup_push
                  (i32.const 9)
                  (get_local $0)
                )
                (i32.store
                  (get_local $9)
                  (i32.load
                    (get_local $14)
                  )
                )
                (i32.store offset=4
                  (get_local $9)
                  (get_local $1)
                )
                (i32.store offset=8
                  (get_local $9)
                  (get_local $5)
                )
                (set_local $4
                  (call $___syscall_ret
                    (call $___syscall146
                      (i32.const 146)
                      (get_local $9)
                    )
                  )
                )
                (call $_pthread_cleanup_pop
                  (i32.const 0)
                )
              )
              (block
                (i32.store
                  (get_local $8)
                  (i32.load
                    (get_local $14)
                  )
                )
                (i32.store offset=4
                  (get_local $8)
                  (get_local $1)
                )
                (i32.store offset=8
                  (get_local $8)
                  (get_local $5)
                )
                (set_local $4
                  (call $___syscall_ret
                    (call $___syscall146
                      (i32.const 146)
                      (get_local $8)
                    )
                  )
                )
              )
            )
            (br_if $jumpthreading$inner$0
              (i32.eq
                (get_local $12)
                (get_local $4)
              )
            )
            (br_if $jumpthreading$inner$1
              (i32.lt_s
                (get_local $4)
                (i32.const 0)
              )
            )
            (set_local $1
              (if i32
                (i32.gt_u
                  (get_local $4)
                  (tee_local $13
                    (i32.load offset=4
                      (get_local $1)
                    )
                  )
                )
                (block i32
                  (i32.store
                    (get_local $6)
                    (tee_local $3
                      (i32.load
                        (get_local $15)
                      )
                    )
                  )
                  (i32.store
                    (get_local $11)
                    (get_local $3)
                  )
                  (set_local $10
                    (i32.sub
                      (get_local $4)
                      (get_local $13)
                    )
                  )
                  (set_local $5
                    (i32.add
                      (get_local $5)
                      (i32.const -1)
                    )
                  )
                  (set_local $3
                    (i32.add
                      (get_local $1)
                      (i32.const 8)
                    )
                  )
                  (i32.load offset=12
                    (get_local $1)
                  )
                )
                (if i32
                  (i32.eq
                    (get_local $5)
                    (i32.const 2)
                  )
                  (block i32
                    (i32.store
                      (get_local $6)
                      (i32.add
                        (i32.load
                          (get_local $6)
                        )
                        (get_local $4)
                      )
                    )
                    (set_local $10
                      (get_local $4)
                    )
                    (set_local $5
                      (i32.const 2)
                    )
                    (set_local $3
                      (get_local $1)
                    )
                    (get_local $13)
                  )
                  (block i32
                    (set_local $10
                      (get_local $4)
                    )
                    (set_local $3
                      (get_local $1)
                    )
                    (get_local $13)
                  )
                )
              )
            )
            (i32.store
              (get_local $3)
              (i32.add
                (i32.load
                  (get_local $3)
                )
                (get_local $10)
              )
            )
            (i32.store offset=4
              (get_local $3)
              (i32.sub
                (get_local $1)
                (get_local $10)
              )
            )
            (set_local $12
              (i32.sub
                (get_local $12)
                (get_local $4)
              )
            )
            (set_local $1
              (get_local $3)
            )
            (br $while-in)
          )
        )
        (i32.store offset=16
          (get_local $0)
          (i32.add
            (tee_local $1
              (i32.load
                (get_local $15)
              )
            )
            (i32.load offset=48
              (get_local $0)
            )
          )
        )
        (i32.store
          (get_local $6)
          (tee_local $0
            (get_local $1)
          )
        )
        (i32.store
          (get_local $11)
          (get_local $0)
        )
        (br $jumpthreading$outer$1)
      )
      (i32.store offset=16
        (get_local $0)
        (i32.const 0)
      )
      (i32.store
        (get_local $6)
        (i32.const 0)
      )
      (i32.store
        (get_local $11)
        (i32.const 0)
      )
      (i32.store
        (get_local $0)
        (i32.or
          (i32.load
            (get_local $0)
          )
          (i32.const 32)
        )
      )
      (set_local $2
        (if i32
          (i32.eq
            (get_local $5)
            (i32.const 2)
          )
          (i32.const 0)
          (i32.sub
            (get_local $2)
            (i32.load offset=4
              (get_local $1)
            )
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $7)
    )
    (get_local $2)
  )
  (func $___stdio_seek (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (set_local $4
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 32)
      )
    )
    (i32.store
      (tee_local $3
        (get_local $4)
      )
      (i32.load offset=60
        (get_local $0)
      )
    )
    (i32.store offset=4
      (get_local $3)
      (i32.const 0)
    )
    (i32.store offset=8
      (get_local $3)
      (get_local $1)
    )
    (i32.store offset=12
      (get_local $3)
      (tee_local $0
        (i32.add
          (get_local $4)
          (i32.const 20)
        )
      )
    )
    (i32.store offset=16
      (get_local $3)
      (get_local $2)
    )
    (set_local $0
      (if i32
        (i32.lt_s
          (call $___syscall_ret
            (call $___syscall140
              (i32.const 140)
              (get_local $3)
            )
          )
          (i32.const 0)
        )
        (block i32
          (i32.store
            (get_local $0)
            (i32.const -1)
          )
          (i32.const -1)
        )
        (i32.load
          (get_local $0)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $4)
    )
    (get_local $0)
  )
  (func $___syscall_ret (param $0 i32) (result i32)
    (if i32
      (i32.gt_u
        (get_local $0)
        (i32.const -4096)
      )
      (block i32
        (i32.store
          (call $___errno_location)
          (i32.sub
            (i32.const 0)
            (get_local $0)
          )
        )
        (i32.const -1)
      )
      (get_local $0)
    )
  )
  (func $___errno_location (result i32)
    (i32.const 5284)
  )
  (func $_cleanup_387 (param $0 i32)
    (if
      (i32.eqz
        (i32.load offset=68
          (get_local $0)
        )
      )
      (call $__ZN12EventHandlerC2Ev
        (get_local $0)
      )
    )
  )
  (func $___stdout_write (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $4
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 80)
      )
    )
    (set_local $3
      (get_local $4)
    )
    (set_local $5
      (i32.add
        (get_local $4)
        (i32.const 12)
      )
    )
    (i32.store offset=36
      (get_local $0)
      (i32.const 1)
    )
    (if
      (i32.eqz
        (i32.and
          (i32.load
            (get_local $0)
          )
          (i32.const 64)
        )
      )
      (block
        (i32.store
          (get_local $3)
          (i32.load offset=60
            (get_local $0)
          )
        )
        (i32.store offset=4
          (get_local $3)
          (i32.const 21505)
        )
        (i32.store offset=8
          (get_local $3)
          (get_local $5)
        )
        (if
          (call $___syscall54
            (i32.const 54)
            (get_local $3)
          )
          (i32.store8 offset=75
            (get_local $0)
            (i32.const -1)
          )
        )
      )
    )
    (set_local $0
      (call $___stdio_write
        (get_local $0)
        (get_local $1)
        (get_local $2)
      )
    )
    (set_global $STACKTOP
      (get_local $4)
    )
    (get_local $0)
  )
  (func $_memcmp (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (tee_local $0
      (block $label$break$L1 i32
        (if i32
          (get_local $2)
          (block i32
            (loop $while-in
              (if
                (i32.eq
                  (i32.shr_s
                    (i32.shl
                      (tee_local $3
                        (i32.load8_s
                          (get_local $0)
                        )
                      )
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                  (i32.shr_s
                    (i32.shl
                      (tee_local $4
                        (i32.load8_s
                          (get_local $1)
                        )
                      )
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                )
                (block
                  (set_local $0
                    (i32.add
                      (get_local $0)
                      (i32.const 1)
                    )
                  )
                  (set_local $1
                    (i32.add
                      (get_local $1)
                      (i32.const 1)
                    )
                  )
                  (drop
                    (br_if $label$break$L1
                      (i32.const 0)
                      (i32.eqz
                        (tee_local $2
                          (i32.add
                            (get_local $2)
                            (i32.const -1)
                          )
                        )
                      )
                    )
                  )
                  (br $while-in)
                )
              )
            )
            (i32.sub
              (i32.and
                (get_local $3)
                (i32.const 255)
              )
              (i32.and
                (get_local $4)
                (i32.const 255)
              )
            )
          )
          (i32.const 0)
        )
      )
    )
  )
  (func $_vfprintf (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (set_local $4
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 224)
      )
    )
    (set_local $5
      (i32.add
        (get_local $4)
        (i32.const 136)
      )
    )
    (i64.store align=4
      (tee_local $3
        (i32.add
          (get_local $4)
          (i32.const 80)
        )
      )
      (i64.const 0)
    )
    (i64.store offset=8 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i64.store offset=16 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i64.store offset=24 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i64.store offset=32 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i32.store
      (tee_local $6
        (i32.add
          (get_local $4)
          (i32.const 120)
        )
      )
      (i32.load
        (get_local $2)
      )
    )
    (if
      (i32.lt_s
        (call $_printf_core
          (i32.const 0)
          (get_local $1)
          (get_local $6)
          (tee_local $2
            (get_local $4)
          )
          (get_local $3)
        )
        (i32.const 0)
      )
      (set_local $1
        (i32.const -1)
      )
      (block
        (set_local $12
          (if i32
            (i32.gt_s
              (i32.load offset=76
                (get_local $0)
              )
              (i32.const -1)
            )
            (call $___lockfile
              (get_local $0)
            )
            (i32.const 0)
          )
        )
        (set_local $7
          (i32.load
            (get_local $0)
          )
        )
        (if
          (i32.lt_s
            (i32.load8_s offset=74
              (get_local $0)
            )
            (i32.const 1)
          )
          (i32.store
            (get_local $0)
            (i32.and
              (get_local $7)
              (i32.const -33)
            )
          )
        )
        (if
          (i32.load
            (tee_local $8
              (i32.add
                (get_local $0)
                (i32.const 48)
              )
            )
          )
          (set_local $1
            (call $_printf_core
              (get_local $0)
              (get_local $1)
              (get_local $6)
              (get_local $2)
              (get_local $3)
            )
          )
          (block
            (set_local $10
              (i32.load
                (tee_local $9
                  (i32.add
                    (get_local $0)
                    (i32.const 44)
                  )
                )
              )
            )
            (i32.store
              (get_local $9)
              (get_local $5)
            )
            (i32.store
              (tee_local $13
                (i32.add
                  (get_local $0)
                  (i32.const 28)
                )
              )
              (get_local $5)
            )
            (i32.store
              (tee_local $11
                (i32.add
                  (get_local $0)
                  (i32.const 20)
                )
              )
              (get_local $5)
            )
            (i32.store
              (get_local $8)
              (i32.const 80)
            )
            (i32.store
              (tee_local $14
                (i32.add
                  (get_local $0)
                  (i32.const 16)
                )
              )
              (i32.add
                (get_local $5)
                (i32.const 80)
              )
            )
            (set_local $1
              (call $_printf_core
                (get_local $0)
                (get_local $1)
                (get_local $6)
                (get_local $2)
                (get_local $3)
              )
            )
            (if
              (get_local $10)
              (block
                (drop
                  (call_indirect $FUNCSIG$iiii
                    (get_local $0)
                    (i32.const 0)
                    (i32.const 0)
                    (i32.add
                      (i32.and
                        (i32.load offset=36
                          (get_local $0)
                        )
                        (i32.const 7)
                      )
                      (i32.const 0)
                    )
                  )
                )
                (if
                  (i32.eqz
                    (i32.load
                      (get_local $11)
                    )
                  )
                  (set_local $1
                    (i32.const -1)
                  )
                )
                (i32.store
                  (get_local $9)
                  (get_local $10)
                )
                (i32.store
                  (get_local $8)
                  (i32.const 0)
                )
                (i32.store
                  (get_local $14)
                  (i32.const 0)
                )
                (i32.store
                  (get_local $13)
                  (i32.const 0)
                )
                (i32.store
                  (get_local $11)
                  (i32.const 0)
                )
              )
            )
          )
        )
        (i32.store
          (get_local $0)
          (i32.or
            (tee_local $2
              (i32.load
                (get_local $0)
              )
            )
            (i32.and
              (get_local $7)
              (i32.const 32)
            )
          )
        )
        (if
          (get_local $12)
          (call $__ZN12EventHandlerC2Ev
            (get_local $0)
          )
        )
        (if
          (i32.and
            (get_local $2)
            (i32.const 32)
          )
          (set_local $1
            (i32.const -1)
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $4)
    )
    (get_local $1)
  )
  (func $i64u-rem (param $0 i64) (param $1 i64) (result i64)
    (if i64
      (i64.eqz
        (get_local $1)
      )
      (i64.const 0)
      (i64.rem_u
        (get_local $0)
        (get_local $1)
      )
    )
  )
  (func $i64u-div (param $0 i64) (param $1 i64) (result i64)
    (if i64
      (i64.eqz
        (get_local $1)
      )
      (i64.const 0)
      (i64.div_u
        (get_local $0)
        (get_local $1)
      )
    )
  )
  (func $_printf_core (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 f64)
    (local $15 i32)
    (local $16 i32)
    (local $17 i32)
    (local $18 i32)
    (local $19 i32)
    (local $20 i64)
    (local $21 i32)
    (local $22 i32)
    (local $23 i32)
    (local $24 i32)
    (local $25 i32)
    (local $26 f64)
    (local $27 i32)
    (local $28 i32)
    (local $29 i32)
    (local $30 i32)
    (local $31 i32)
    (local $32 i32)
    (local $33 i32)
    (local $34 i32)
    (local $35 i32)
    (local $36 i32)
    (local $37 i32)
    (local $38 i32)
    (local $39 i32)
    (local $40 i32)
    (local $41 f64)
    (local $42 i32)
    (local $43 i32)
    (local $44 i32)
    (local $45 i32)
    (local $46 i32)
    (local $47 i32)
    (local $48 i32)
    (local $49 i32)
    (local $50 i32)
    (local $51 i32)
    (local $52 i32)
    (local $53 i64)
    (local $54 i32)
    (local $55 i32)
    (set_local $27
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 624)
      )
    )
    (set_local $23
      (i32.add
        (get_local $27)
        (i32.const 16)
      )
    )
    (set_local $16
      (get_local $27)
    )
    (set_local $38
      (i32.add
        (get_local $27)
        (i32.const 528)
      )
    )
    (set_local $34
      (i32.ne
        (get_local $0)
        (i32.const 0)
      )
    )
    (set_local $42
      (tee_local $25
        (i32.add
          (tee_local $17
            (i32.add
              (get_local $27)
              (i32.const 536)
            )
          )
          (i32.const 40)
        )
      )
    )
    (set_local $43
      (i32.add
        (get_local $17)
        (i32.const 39)
      )
    )
    (set_local $46
      (i32.add
        (tee_local $39
          (i32.add
            (get_local $27)
            (i32.const 8)
          )
        )
        (i32.const 4)
      )
    )
    (set_local $47
      (i32.sub
        (i32.const 0)
        (tee_local $30
          (tee_local $22
            (i32.add
              (get_local $27)
              (i32.const 588)
            )
          )
        )
      )
    )
    (set_local $36
      (i32.add
        (tee_local $17
          (i32.add
            (get_local $27)
            (i32.const 576)
          )
        )
        (i32.const 12)
      )
    )
    (set_local $44
      (i32.add
        (get_local $17)
        (i32.const 11)
      )
    )
    (set_local $48
      (i32.sub
        (tee_local $31
          (get_local $36)
        )
        (get_local $30)
      )
    )
    (set_local $49
      (i32.sub
        (i32.const -2)
        (get_local $30)
      )
    )
    (set_local $50
      (i32.add
        (get_local $31)
        (i32.const 2)
      )
    )
    (set_local $52
      (i32.add
        (tee_local $51
          (i32.add
            (get_local $27)
            (i32.const 24)
          )
        )
        (i32.const 288)
      )
    )
    (set_local $45
      (tee_local $35
        (i32.add
          (get_local $22)
          (i32.const 9)
        )
      )
    )
    (set_local $37
      (i32.add
        (get_local $22)
        (i32.const 8)
      )
    )
    (set_local $10
      (i32.const 0)
    )
    (set_local $15
      (i32.const 0)
    )
    (set_local $17
      (i32.const 0)
    )
    (block $label$break$L345
      (block $jumpthreading$inner$9
        (loop $label$continue$L1
          (block $label$break$L1
            (if
              (i32.gt_s
                (get_local $15)
                (i32.const -1)
              )
              (set_local $15
                (if i32
                  (i32.gt_s
                    (get_local $10)
                    (i32.sub
                      (i32.const 2147483647)
                      (get_local $15)
                    )
                  )
                  (block i32
                    (i32.store
                      (call $___errno_location)
                      (i32.const 75)
                    )
                    (i32.const -1)
                  )
                  (i32.add
                    (get_local $10)
                    (get_local $15)
                  )
                )
              )
            )
            (br_if $jumpthreading$inner$9
              (i32.eqz
                (i32.shr_s
                  (i32.shl
                    (tee_local $5
                      (i32.load8_s
                        (get_local $1)
                      )
                    )
                    (i32.const 24)
                  )
                  (i32.const 24)
                )
              )
            )
            (set_local $11
              (get_local $1)
            )
            (block $label$break$L12
              (block $jumpthreading$inner$1
                (loop $label$continue$L9
                  (block $label$break$L9
                    (block $switch-default
                      (block $switch-case0
                        (block $switch-case
                          (br_table $switch-case0 $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-case $switch-default
                            (i32.sub
                              (i32.shr_s
                                (i32.shl
                                  (get_local $5)
                                  (i32.const 24)
                                )
                                (i32.const 24)
                              )
                              (i32.const 0)
                            )
                          )
                        )
                        (set_local $5
                          (get_local $11)
                        )
                        (br $jumpthreading$inner$1)
                      )
                      (set_local $5
                        (get_local $11)
                      )
                      (br $label$break$L9)
                    )
                    (set_local $11
                      (tee_local $5
                        (i32.add
                          (get_local $11)
                          (i32.const 1)
                        )
                      )
                    )
                    (set_local $5
                      (i32.load8_s
                        (get_local $5)
                      )
                    )
                    (br $label$continue$L9)
                  )
                )
                (br $label$break$L12)
              )
              (loop $while-in
                (br_if $label$break$L12
                  (i32.ne
                    (i32.load8_s offset=1
                      (get_local $11)
                    )
                    (i32.const 37)
                  )
                )
                (set_local $5
                  (i32.add
                    (get_local $5)
                    (i32.const 1)
                  )
                )
                (br_if $while-in
                  (i32.eq
                    (i32.load8_s
                      (tee_local $11
                        (i32.add
                          (get_local $11)
                          (i32.const 2)
                        )
                      )
                    )
                    (i32.const 37)
                  )
                )
              )
            )
            (set_local $10
              (i32.sub
                (get_local $5)
                (get_local $1)
              )
            )
            (if
              (get_local $34)
              (if
                (i32.eqz
                  (i32.and
                    (i32.load
                      (get_local $0)
                    )
                    (i32.const 32)
                  )
                )
                (drop
                  (call $___fwritex
                    (get_local $1)
                    (get_local $10)
                    (get_local $0)
                  )
                )
              )
            )
            (if
              (get_local $10)
              (block
                (set_local $1
                  (get_local $11)
                )
                (br $label$continue$L1)
              )
            )
            (set_local $8
              (if i32
                (i32.lt_u
                  (tee_local $9
                    (i32.add
                      (i32.shr_s
                        (i32.shl
                          (tee_local $5
                            (i32.load8_s
                              (tee_local $10
                                (i32.add
                                  (get_local $11)
                                  (i32.const 1)
                                )
                              )
                            )
                          )
                          (i32.const 24)
                        )
                        (i32.const 24)
                      )
                      (i32.const -48)
                    )
                  )
                  (i32.const 10)
                )
                (block i32
                  (set_local $5
                    (i32.add
                      (get_local $11)
                      (i32.const 3)
                    )
                  )
                  (set_local $11
                    (if i32
                      (tee_local $12
                        (i32.eq
                          (i32.load8_s offset=2
                            (get_local $11)
                          )
                          (i32.const 36)
                        )
                      )
                      (get_local $5)
                      (get_local $10)
                    )
                  )
                  (if
                    (get_local $12)
                    (set_local $17
                      (i32.const 1)
                    )
                  )
                  (if
                    (i32.eqz
                      (get_local $12)
                    )
                    (set_local $9
                      (i32.const -1)
                    )
                  )
                  (set_local $5
                    (i32.load8_s
                      (get_local $11)
                    )
                  )
                  (get_local $17)
                )
                (block i32
                  (set_local $9
                    (i32.const -1)
                  )
                  (set_local $11
                    (get_local $10)
                  )
                  (get_local $17)
                )
              )
            )
            (block $label$break$L25
              (if
                (i32.lt_u
                  (tee_local $10
                    (i32.add
                      (i32.shr_s
                        (i32.shl
                          (get_local $5)
                          (i32.const 24)
                        )
                        (i32.const 24)
                      )
                      (i32.const -32)
                    )
                  )
                  (i32.const 32)
                )
                (block
                  (set_local $17
                    (i32.const 0)
                  )
                  (loop $while-in4
                    (br_if $label$break$L25
                      (i32.eqz
                        (i32.and
                          (i32.shl
                            (i32.const 1)
                            (get_local $10)
                          )
                          (i32.const 75913)
                        )
                      )
                    )
                    (set_local $17
                      (i32.or
                        (i32.shl
                          (i32.const 1)
                          (i32.add
                            (i32.shr_s
                              (i32.shl
                                (get_local $5)
                                (i32.const 24)
                              )
                              (i32.const 24)
                            )
                            (i32.const -32)
                          )
                        )
                        (get_local $17)
                      )
                    )
                    (br_if $while-in4
                      (i32.lt_u
                        (tee_local $10
                          (i32.add
                            (i32.shr_s
                              (i32.shl
                                (tee_local $5
                                  (i32.load8_s
                                    (tee_local $11
                                      (i32.add
                                        (get_local $11)
                                        (i32.const 1)
                                      )
                                    )
                                  )
                                )
                                (i32.const 24)
                              )
                              (i32.const 24)
                            )
                            (i32.const -32)
                          )
                        )
                        (i32.const 32)
                      )
                    )
                  )
                )
                (set_local $17
                  (i32.const 0)
                )
              )
            )
            (block $do-once5
              (if
                (i32.eq
                  (i32.shr_s
                    (i32.shl
                      (get_local $5)
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                  (i32.const 42)
                )
                (block
                  (set_local $8
                    (block $jumpthreading$outer$0 i32
                      (block $jumpthreading$inner$0
                        (br_if $jumpthreading$inner$0
                          (i32.ge_u
                            (tee_local $10
                              (i32.add
                                (i32.shr_s
                                  (i32.shl
                                    (tee_local $6
                                      (i32.load8_s
                                        (tee_local $5
                                          (i32.add
                                            (get_local $11)
                                            (i32.const 1)
                                          )
                                        )
                                      )
                                    )
                                    (i32.const 24)
                                  )
                                  (i32.const 24)
                                )
                                (i32.const -48)
                              )
                            )
                            (i32.const 10)
                          )
                        )
                        (br_if $jumpthreading$inner$0
                          (i32.ne
                            (i32.load8_s offset=2
                              (get_local $11)
                            )
                            (i32.const 36)
                          )
                        )
                        (i32.store
                          (i32.add
                            (get_local $4)
                            (i32.shl
                              (get_local $10)
                              (i32.const 2)
                            )
                          )
                          (i32.const 10)
                        )
                        (set_local $10
                          (i32.wrap/i64
                            (i64.load
                              (i32.add
                                (get_local $3)
                                (i32.shl
                                  (i32.add
                                    (i32.load8_s
                                      (get_local $5)
                                    )
                                    (i32.const -48)
                                  )
                                  (i32.const 3)
                                )
                              )
                            )
                          )
                        )
                        (set_local $5
                          (i32.add
                            (get_local $11)
                            (i32.const 3)
                          )
                        )
                        (br $jumpthreading$outer$0
                          (i32.const 1)
                        )
                      )
                      (if
                        (get_local $8)
                        (block
                          (set_local $15
                            (i32.const -1)
                          )
                          (br $label$break$L1)
                        )
                      )
                      (if
                        (i32.eqz
                          (get_local $34)
                        )
                        (block
                          (set_local $10
                            (i32.const 0)
                          )
                          (set_local $12
                            (get_local $17)
                          )
                          (set_local $17
                            (i32.const 0)
                          )
                          (set_local $11
                            (get_local $5)
                          )
                          (set_local $5
                            (get_local $6)
                          )
                          (br $do-once5)
                        )
                      )
                      (set_local $10
                        (i32.load
                          (tee_local $11
                            (i32.and
                              (i32.add
                                (i32.load
                                  (get_local $2)
                                )
                                (i32.const 3)
                              )
                              (i32.const -4)
                            )
                          )
                        )
                      )
                      (i32.store
                        (get_local $2)
                        (i32.add
                          (get_local $11)
                          (i32.const 4)
                        )
                      )
                      (i32.const 0)
                    )
                  )
                  (set_local $12
                    (i32.or
                      (get_local $17)
                      (i32.const 8192)
                    )
                  )
                  (set_local $11
                    (i32.sub
                      (i32.const 0)
                      (get_local $10)
                    )
                  )
                  (if
                    (i32.eqz
                      (tee_local $6
                        (i32.lt_s
                          (get_local $10)
                          (i32.const 0)
                        )
                      )
                    )
                    (set_local $12
                      (get_local $17)
                    )
                  )
                  (if
                    (get_local $6)
                    (set_local $10
                      (get_local $11)
                    )
                  )
                  (set_local $17
                    (get_local $8)
                  )
                  (set_local $11
                    (get_local $5)
                  )
                  (set_local $5
                    (i32.load8_s
                      (get_local $5)
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (tee_local $12
                      (i32.add
                        (i32.shr_s
                          (i32.shl
                            (get_local $5)
                            (i32.const 24)
                          )
                          (i32.const 24)
                        )
                        (i32.const -48)
                      )
                    )
                    (i32.const 10)
                  )
                  (block
                    (set_local $10
                      (i32.const 0)
                    )
                    (set_local $5
                      (get_local $12)
                    )
                    (loop $while-in8
                      (set_local $10
                        (i32.add
                          (i32.mul
                            (get_local $10)
                            (i32.const 10)
                          )
                          (get_local $5)
                        )
                      )
                      (br_if $while-in8
                        (i32.lt_u
                          (tee_local $5
                            (i32.add
                              (i32.shr_s
                                (i32.shl
                                  (tee_local $6
                                    (i32.load8_s
                                      (tee_local $11
                                        (i32.add
                                          (get_local $11)
                                          (i32.const 1)
                                        )
                                      )
                                    )
                                  )
                                  (i32.const 24)
                                )
                                (i32.const 24)
                              )
                              (i32.const -48)
                            )
                          )
                          (i32.const 10)
                        )
                      )
                    )
                    (if
                      (i32.lt_s
                        (get_local $10)
                        (i32.const 0)
                      )
                      (block
                        (set_local $15
                          (i32.const -1)
                        )
                        (br $label$break$L1)
                      )
                      (block
                        (set_local $12
                          (get_local $17)
                        )
                        (set_local $17
                          (get_local $8)
                        )
                        (set_local $5
                          (get_local $6)
                        )
                      )
                    )
                  )
                  (block
                    (set_local $10
                      (i32.const 0)
                    )
                    (set_local $12
                      (get_local $17)
                    )
                    (set_local $17
                      (get_local $8)
                    )
                  )
                )
              )
            )
            (block $label$break$L45
              (if
                (i32.eq
                  (i32.shr_s
                    (i32.shl
                      (get_local $5)
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                  (i32.const 46)
                )
                (block
                  (if
                    (i32.ne
                      (i32.shr_s
                        (i32.shl
                          (tee_local $5
                            (i32.load8_s
                              (tee_local $8
                                (i32.add
                                  (get_local $11)
                                  (i32.const 1)
                                )
                              )
                            )
                          )
                          (i32.const 24)
                        )
                        (i32.const 24)
                      )
                      (i32.const 42)
                    )
                    (block
                      (if
                        (i32.lt_u
                          (tee_local $5
                            (i32.add
                              (i32.shr_s
                                (i32.shl
                                  (get_local $5)
                                  (i32.const 24)
                                )
                                (i32.const 24)
                              )
                              (i32.const -48)
                            )
                          )
                          (i32.const 10)
                        )
                        (block
                          (set_local $6
                            (i32.const 0)
                          )
                          (set_local $11
                            (get_local $8)
                          )
                        )
                        (block
                          (set_local $5
                            (i32.const 0)
                          )
                          (set_local $11
                            (get_local $8)
                          )
                          (br $label$break$L45)
                        )
                      )
                      (loop $while-in11
                        (set_local $5
                          (i32.add
                            (i32.mul
                              (get_local $6)
                              (i32.const 10)
                            )
                            (get_local $5)
                          )
                        )
                        (br_if $label$break$L45
                          (i32.ge_u
                            (tee_local $8
                              (i32.add
                                (i32.load8_s
                                  (tee_local $11
                                    (i32.add
                                      (get_local $11)
                                      (i32.const 1)
                                    )
                                  )
                                )
                                (i32.const -48)
                              )
                            )
                            (i32.const 10)
                          )
                        )
                        (set_local $6
                          (get_local $5)
                        )
                        (set_local $5
                          (get_local $8)
                        )
                        (br $while-in11)
                      )
                    )
                  )
                  (if
                    (i32.lt_u
                      (tee_local $5
                        (i32.add
                          (i32.load8_s
                            (tee_local $8
                              (i32.add
                                (get_local $11)
                                (i32.const 2)
                              )
                            )
                          )
                          (i32.const -48)
                        )
                      )
                      (i32.const 10)
                    )
                    (if
                      (i32.eq
                        (i32.load8_s offset=3
                          (get_local $11)
                        )
                        (i32.const 36)
                      )
                      (block
                        (i32.store
                          (i32.add
                            (get_local $4)
                            (i32.shl
                              (get_local $5)
                              (i32.const 2)
                            )
                          )
                          (i32.const 10)
                        )
                        (set_local $5
                          (i32.wrap/i64
                            (i64.load
                              (i32.add
                                (get_local $3)
                                (i32.shl
                                  (i32.add
                                    (i32.load8_s
                                      (get_local $8)
                                    )
                                    (i32.const -48)
                                  )
                                  (i32.const 3)
                                )
                              )
                            )
                          )
                        )
                        (set_local $11
                          (i32.add
                            (get_local $11)
                            (i32.const 4)
                          )
                        )
                        (br $label$break$L45)
                      )
                    )
                  )
                  (if
                    (get_local $17)
                    (block
                      (set_local $15
                        (i32.const -1)
                      )
                      (br $label$break$L1)
                    )
                  )
                  (set_local $11
                    (if i32
                      (get_local $34)
                      (block i32
                        (set_local $5
                          (i32.load
                            (tee_local $11
                              (i32.and
                                (i32.add
                                  (i32.load
                                    (get_local $2)
                                  )
                                  (i32.const 3)
                                )
                                (i32.const -4)
                              )
                            )
                          )
                        )
                        (i32.store
                          (get_local $2)
                          (i32.add
                            (get_local $11)
                            (i32.const 4)
                          )
                        )
                        (get_local $8)
                      )
                      (block i32
                        (set_local $5
                          (i32.const 0)
                        )
                        (get_local $8)
                      )
                    )
                  )
                )
                (set_local $5
                  (i32.const -1)
                )
              )
            )
            (set_local $7
              (i32.const 0)
            )
            (set_local $8
              (get_local $11)
            )
            (loop $while-in13
              (if
                (i32.gt_u
                  (tee_local $6
                    (i32.add
                      (i32.load8_s
                        (get_local $8)
                      )
                      (i32.const -65)
                    )
                  )
                  (i32.const 57)
                )
                (block
                  (set_local $15
                    (i32.const -1)
                  )
                  (br $label$break$L1)
                )
              )
              (set_local $11
                (i32.add
                  (get_local $8)
                  (i32.const 1)
                )
              )
              (if
                (i32.lt_u
                  (i32.add
                    (tee_local $6
                      (i32.and
                        (tee_local $13
                          (i32.load8_s
                            (i32.add
                              (i32.add
                                (i32.mul
                                  (get_local $7)
                                  (i32.const 58)
                                )
                                (i32.const 1985)
                              )
                              (get_local $6)
                            )
                          )
                        )
                        (i32.const 255)
                      )
                    )
                    (i32.const -1)
                  )
                  (i32.const 8)
                )
                (block
                  (set_local $7
                    (get_local $6)
                  )
                  (set_local $8
                    (get_local $11)
                  )
                  (br $while-in13)
                )
              )
            )
            (if
              (i32.eqz
                (i32.shr_s
                  (i32.shl
                    (get_local $13)
                    (i32.const 24)
                  )
                  (i32.const 24)
                )
              )
              (block
                (set_local $15
                  (i32.const -1)
                )
                (br $label$break$L1)
              )
            )
            (set_local $21
              (i32.gt_s
                (get_local $9)
                (i32.const -1)
              )
            )
            (block $jumpthreading$outer$2
              (block $jumpthreading$inner$2
                (if
                  (i32.eq
                    (i32.shr_s
                      (i32.shl
                        (get_local $13)
                        (i32.const 24)
                      )
                      (i32.const 24)
                    )
                    (i32.const 19)
                  )
                  (if
                    (get_local $21)
                    (block
                      (set_local $15
                        (i32.const -1)
                      )
                      (br $label$break$L1)
                    )
                    (br $jumpthreading$inner$2)
                  )
                  (block
                    (if
                      (get_local $21)
                      (block
                        (i32.store
                          (i32.add
                            (get_local $4)
                            (i32.shl
                              (get_local $9)
                              (i32.const 2)
                            )
                          )
                          (get_local $6)
                        )
                        (i64.store
                          (get_local $16)
                          (i64.load
                            (i32.add
                              (get_local $3)
                              (i32.shl
                                (get_local $9)
                                (i32.const 3)
                              )
                            )
                          )
                        )
                        (br $jumpthreading$inner$2)
                      )
                    )
                    (if
                      (i32.eqz
                        (get_local $34)
                      )
                      (block
                        (set_local $15
                          (i32.const 0)
                        )
                        (br $label$break$L1)
                      )
                    )
                    (call $_pop_arg
                      (get_local $16)
                      (get_local $6)
                      (get_local $2)
                    )
                  )
                )
                (br $jumpthreading$outer$2)
              )
              (if
                (i32.eqz
                  (get_local $34)
                )
                (block
                  (set_local $10
                    (i32.const 0)
                  )
                  (set_local $1
                    (get_local $11)
                  )
                  (br $label$continue$L1)
                )
              )
            )
            (set_local $9
              (i32.and
                (tee_local $8
                  (i32.load8_s
                    (get_local $8)
                  )
                )
                (i32.const -33)
              )
            )
            (if
              (i32.eqz
                (i32.and
                  (i32.ne
                    (get_local $7)
                    (i32.const 0)
                  )
                  (i32.eq
                    (i32.and
                      (get_local $8)
                      (i32.const 15)
                    )
                    (i32.const 3)
                  )
                )
              )
              (set_local $9
                (get_local $8)
              )
            )
            (set_local $6
              (i32.and
                (get_local $12)
                (i32.const -65537)
              )
            )
            (if
              (i32.and
                (get_local $12)
                (i32.const 8192)
              )
              (set_local $12
                (get_local $6)
              )
            )
            (block $jumpthreading$outer$8
              (block $jumpthreading$inner$8
                (block $jumpthreading$inner$7
                  (block $jumpthreading$inner$6
                    (block $jumpthreading$inner$5
                      (block $jumpthreading$inner$4
                        (block $jumpthreading$inner$3
                          (block $switch-default120
                            (block $switch-case42
                              (block $switch-case41
                                (block $switch-case40
                                  (block $switch-case39
                                    (block $switch-case38
                                      (block $switch-case37
                                        (block $switch-case36
                                          (block $switch-case34
                                            (block $switch-case33
                                              (block $switch-case29
                                                (block $switch-case28
                                                  (block $switch-case27
                                                    (br_table $switch-case42 $switch-default120 $switch-case40 $switch-default120 $switch-case42 $switch-case42 $switch-case42 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-case41 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-case29 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-case42 $switch-default120 $switch-case37 $switch-case34 $switch-case42 $switch-case42 $switch-case42 $switch-default120 $switch-case34 $switch-default120 $switch-default120 $switch-default120 $switch-case38 $switch-case27 $switch-case33 $switch-case28 $switch-default120 $switch-default120 $switch-case39 $switch-default120 $switch-case36 $switch-default120 $switch-default120 $switch-case29 $switch-default120
                                                      (i32.sub
                                                        (get_local $9)
                                                        (i32.const 65)
                                                      )
                                                    )
                                                  )
                                                  (block $switch-default26
                                                    (block $switch-case25
                                                      (block $switch-case24
                                                        (block $switch-case23
                                                          (block $switch-case22
                                                            (block $switch-case21
                                                              (block $switch-case20
                                                                (block $switch-case19
                                                                  (br_table $switch-case19 $switch-case20 $switch-case21 $switch-case22 $switch-case23 $switch-default26 $switch-case24 $switch-case25 $switch-default26
                                                                    (i32.sub
                                                                      (i32.shr_s
                                                                        (i32.shl
                                                                          (i32.and
                                                                            (get_local $7)
                                                                            (i32.const 255)
                                                                          )
                                                                          (i32.const 24)
                                                                        )
                                                                        (i32.const 24)
                                                                      )
                                                                      (i32.const 0)
                                                                    )
                                                                  )
                                                                )
                                                                (i32.store
                                                                  (i32.load
                                                                    (get_local $16)
                                                                  )
                                                                  (get_local $15)
                                                                )
                                                                (set_local $10
                                                                  (i32.const 0)
                                                                )
                                                                (set_local $1
                                                                  (get_local $11)
                                                                )
                                                                (br $label$continue$L1)
                                                              )
                                                              (i32.store
                                                                (i32.load
                                                                  (get_local $16)
                                                                )
                                                                (get_local $15)
                                                              )
                                                              (set_local $10
                                                                (i32.const 0)
                                                              )
                                                              (set_local $1
                                                                (get_local $11)
                                                              )
                                                              (br $label$continue$L1)
                                                            )
                                                            (i64.store
                                                              (i32.load
                                                                (get_local $16)
                                                              )
                                                              (i64.extend_s/i32
                                                                (get_local $15)
                                                              )
                                                            )
                                                            (set_local $10
                                                              (i32.const 0)
                                                            )
                                                            (set_local $1
                                                              (get_local $11)
                                                            )
                                                            (br $label$continue$L1)
                                                          )
                                                          (i32.store16
                                                            (i32.load
                                                              (get_local $16)
                                                            )
                                                            (get_local $15)
                                                          )
                                                          (set_local $10
                                                            (i32.const 0)
                                                          )
                                                          (set_local $1
                                                            (get_local $11)
                                                          )
                                                          (br $label$continue$L1)
                                                        )
                                                        (i32.store8
                                                          (i32.load
                                                            (get_local $16)
                                                          )
                                                          (get_local $15)
                                                        )
                                                        (set_local $10
                                                          (i32.const 0)
                                                        )
                                                        (set_local $1
                                                          (get_local $11)
                                                        )
                                                        (br $label$continue$L1)
                                                      )
                                                      (i32.store
                                                        (i32.load
                                                          (get_local $16)
                                                        )
                                                        (get_local $15)
                                                      )
                                                      (set_local $10
                                                        (i32.const 0)
                                                      )
                                                      (set_local $1
                                                        (get_local $11)
                                                      )
                                                      (br $label$continue$L1)
                                                    )
                                                    (i64.store
                                                      (i32.load
                                                        (get_local $16)
                                                      )
                                                      (i64.extend_s/i32
                                                        (get_local $15)
                                                      )
                                                    )
                                                    (set_local $10
                                                      (i32.const 0)
                                                    )
                                                    (set_local $1
                                                      (get_local $11)
                                                    )
                                                    (br $label$continue$L1)
                                                  )
                                                  (set_local $10
                                                    (i32.const 0)
                                                  )
                                                  (set_local $1
                                                    (get_local $11)
                                                  )
                                                  (br $label$continue$L1)
                                                )
                                                (set_local $9
                                                  (i32.const 120)
                                                )
                                                (if
                                                  (i32.le_u
                                                    (get_local $5)
                                                    (i32.const 8)
                                                  )
                                                  (set_local $5
                                                    (i32.const 8)
                                                  )
                                                )
                                                (set_local $12
                                                  (i32.or
                                                    (get_local $12)
                                                    (i32.const 8)
                                                  )
                                                )
                                                (br $jumpthreading$inner$3)
                                              )
                                              (br $jumpthreading$inner$3)
                                            )
                                            (if
                                              (i64.eq
                                                (tee_local $20
                                                  (i64.load
                                                    (get_local $16)
                                                  )
                                                )
                                                (i64.const 0)
                                              )
                                              (set_local $6
                                                (get_local $25)
                                              )
                                              (block
                                                (set_local $1
                                                  (get_local $25)
                                                )
                                                (loop $while-in32
                                                  (i64.store8
                                                    (tee_local $1
                                                      (i32.add
                                                        (get_local $1)
                                                        (i32.const -1)
                                                      )
                                                    )
                                                    (i64.or
                                                      (i64.and
                                                        (get_local $20)
                                                        (i64.const 7)
                                                      )
                                                      (i64.const 48)
                                                    )
                                                  )
                                                  (br_if $while-in32
                                                    (i64.ne
                                                      (tee_local $20
                                                        (i64.shr_u
                                                          (get_local $20)
                                                          (i64.const 3)
                                                        )
                                                      )
                                                      (i64.const 0)
                                                    )
                                                  )
                                                  (set_local $6
                                                    (get_local $1)
                                                  )
                                                )
                                              )
                                            )
                                            (if
                                              (i32.and
                                                (get_local $12)
                                                (i32.const 8)
                                              )
                                              (block
                                                (set_local $9
                                                  (i32.add
                                                    (tee_local $1
                                                      (i32.sub
                                                        (get_local $42)
                                                        (get_local $6)
                                                      )
                                                    )
                                                    (i32.const 1)
                                                  )
                                                )
                                                (set_local $7
                                                  (i32.const 0)
                                                )
                                                (set_local $8
                                                  (i32.const 2465)
                                                )
                                                (if
                                                  (i32.le_s
                                                    (get_local $5)
                                                    (get_local $1)
                                                  )
                                                  (set_local $5
                                                    (get_local $9)
                                                  )
                                                )
                                                (br $jumpthreading$inner$8)
                                              )
                                              (block
                                                (set_local $7
                                                  (i32.const 0)
                                                )
                                                (set_local $8
                                                  (i32.const 2465)
                                                )
                                                (br $jumpthreading$inner$8)
                                              )
                                            )
                                          )
                                          (if
                                            (i64.lt_s
                                              (tee_local $20
                                                (i64.load
                                                  (get_local $16)
                                                )
                                              )
                                              (i64.const 0)
                                            )
                                            (block
                                              (i64.store
                                                (get_local $16)
                                                (tee_local $20
                                                  (i64.sub
                                                    (i64.const 0)
                                                    (get_local $20)
                                                  )
                                                )
                                              )
                                              (set_local $7
                                                (i32.const 1)
                                              )
                                              (set_local $8
                                                (i32.const 2465)
                                              )
                                              (br $jumpthreading$inner$4)
                                            )
                                          )
                                          (if
                                            (i32.and
                                              (get_local $12)
                                              (i32.const 2048)
                                            )
                                            (block
                                              (set_local $7
                                                (i32.const 1)
                                              )
                                              (set_local $8
                                                (i32.const 2466)
                                              )
                                              (br $jumpthreading$inner$4)
                                            )
                                            (block
                                              (set_local $7
                                                (tee_local $1
                                                  (i32.and
                                                    (get_local $12)
                                                    (i32.const 1)
                                                  )
                                                )
                                              )
                                              (set_local $8
                                                (if i32
                                                  (get_local $1)
                                                  (i32.const 2467)
                                                  (i32.const 2465)
                                                )
                                              )
                                              (br $jumpthreading$inner$4)
                                            )
                                          )
                                        )
                                        (set_local $7
                                          (i32.const 0)
                                        )
                                        (set_local $8
                                          (i32.const 2465)
                                        )
                                        (set_local $20
                                          (i64.load
                                            (get_local $16)
                                          )
                                        )
                                        (br $jumpthreading$inner$4)
                                      )
                                      (i64.store8
                                        (get_local $43)
                                        (i64.load
                                          (get_local $16)
                                        )
                                      )
                                      (set_local $1
                                        (get_local $43)
                                      )
                                      (set_local $7
                                        (i32.const 0)
                                      )
                                      (set_local $9
                                        (i32.const 2465)
                                      )
                                      (set_local $8
                                        (get_local $25)
                                      )
                                      (set_local $5
                                        (i32.const 1)
                                      )
                                      (set_local $12
                                        (get_local $6)
                                      )
                                      (br $jumpthreading$outer$8)
                                    )
                                    (set_local $1
                                      (call $_strerror
                                        (i32.load
                                          (call $___errno_location)
                                        )
                                      )
                                    )
                                    (br $jumpthreading$inner$5)
                                  )
                                  (if
                                    (i32.eqz
                                      (tee_local $1
                                        (i32.load
                                          (get_local $16)
                                        )
                                      )
                                    )
                                    (set_local $1
                                      (i32.const 2475)
                                    )
                                  )
                                  (br $jumpthreading$inner$5)
                                )
                                (i64.store32
                                  (get_local $39)
                                  (i64.load
                                    (get_local $16)
                                  )
                                )
                                (i32.store
                                  (get_local $46)
                                  (i32.const 0)
                                )
                                (i32.store
                                  (get_local $16)
                                  (get_local $39)
                                )
                                (set_local $7
                                  (i32.const -1)
                                )
                                (set_local $5
                                  (get_local $39)
                                )
                                (br $jumpthreading$inner$6)
                              )
                              (set_local $1
                                (i32.load
                                  (get_local $16)
                                )
                              )
                              (if
                                (get_local $5)
                                (block
                                  (set_local $7
                                    (get_local $5)
                                  )
                                  (set_local $5
                                    (get_local $1)
                                  )
                                  (br $jumpthreading$inner$6)
                                )
                                (block
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $10)
                                    (i32.const 0)
                                    (get_local $12)
                                  )
                                  (set_local $1
                                    (i32.const 0)
                                  )
                                  (br $jumpthreading$inner$7)
                                )
                              )
                            )
                            (set_local $14
                              (f64.load
                                (get_local $16)
                              )
                            )
                            (i32.store
                              (get_local $23)
                              (i32.const 0)
                            )
                            (set_local $29
                              (if i32
                                (i64.lt_s
                                  (i64.reinterpret/f64
                                    (get_local $14)
                                  )
                                  (i64.const 0)
                                )
                                (block i32
                                  (set_local $14
                                    (f64.neg
                                      (get_local $14)
                                    )
                                  )
                                  (set_local $21
                                    (i32.const 1)
                                  )
                                  (i32.const 2482)
                                )
                                (block i32
                                  (set_local $1
                                    (i32.and
                                      (get_local $12)
                                      (i32.const 1)
                                    )
                                  )
                                  (if i32
                                    (i32.and
                                      (get_local $12)
                                      (i32.const 2048)
                                    )
                                    (block i32
                                      (set_local $21
                                        (i32.const 1)
                                      )
                                      (i32.const 2485)
                                    )
                                    (block i32
                                      (set_local $21
                                        (get_local $1)
                                      )
                                      (if i32
                                        (get_local $1)
                                        (i32.const 2488)
                                        (i32.const 2483)
                                      )
                                    )
                                  )
                                )
                              )
                            )
                            (block $do-once49
                              (if
                                (i64.lt_u
                                  (i64.and
                                    (i64.reinterpret/f64
                                      (get_local $14)
                                    )
                                    (i64.const 9218868437227405312)
                                  )
                                  (i64.const 9218868437227405312)
                                )
                                (block
                                  (if
                                    (tee_local $1
                                      (f64.ne
                                        (tee_local $14
                                          (f64.mul
                                            (call $_frexpl
                                              (get_local $14)
                                              (get_local $23)
                                            )
                                            (f64.const 2)
                                          )
                                        )
                                        (f64.const 0)
                                      )
                                    )
                                    (i32.store
                                      (get_local $23)
                                      (i32.add
                                        (i32.load
                                          (get_local $23)
                                        )
                                        (i32.const -1)
                                      )
                                    )
                                  )
                                  (if
                                    (i32.eq
                                      (tee_local $18
                                        (i32.or
                                          (get_local $9)
                                          (i32.const 32)
                                        )
                                      )
                                      (i32.const 97)
                                    )
                                    (block
                                      (set_local $1
                                        (i32.add
                                          (get_local $29)
                                          (i32.const 9)
                                        )
                                      )
                                      (if
                                        (tee_local $7
                                          (i32.and
                                            (get_local $9)
                                            (i32.const 32)
                                          )
                                        )
                                        (set_local $29
                                          (get_local $1)
                                        )
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.or
                                            (i32.gt_u
                                              (get_local $5)
                                              (i32.const 11)
                                            )
                                            (i32.eqz
                                              (tee_local $1
                                                (i32.sub
                                                  (i32.const 12)
                                                  (get_local $5)
                                                )
                                              )
                                            )
                                          )
                                        )
                                        (block
                                          (set_local $26
                                            (f64.const 8)
                                          )
                                          (loop $while-in54
                                            (set_local $26
                                              (f64.mul
                                                (get_local $26)
                                                (f64.const 16)
                                              )
                                            )
                                            (br_if $while-in54
                                              (tee_local $1
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const -1)
                                                )
                                              )
                                            )
                                          )
                                          (set_local $14
                                            (if f64
                                              (i32.eq
                                                (i32.load8_s
                                                  (get_local $29)
                                                )
                                                (i32.const 45)
                                              )
                                              (f64.neg
                                                (f64.add
                                                  (get_local $26)
                                                  (f64.sub
                                                    (f64.neg
                                                      (get_local $14)
                                                    )
                                                    (get_local $26)
                                                  )
                                                )
                                              )
                                              (f64.sub
                                                (f64.add
                                                  (get_local $14)
                                                  (get_local $26)
                                                )
                                                (get_local $26)
                                              )
                                            )
                                          )
                                        )
                                      )
                                      (set_local $1
                                        (i32.sub
                                          (i32.const 0)
                                          (tee_local $8
                                            (i32.load
                                              (get_local $23)
                                            )
                                          )
                                        )
                                      )
                                      (if
                                        (i32.eq
                                          (tee_local $1
                                            (call $_fmt_u
                                              (i64.extend_s/i32
                                                (if i32
                                                  (i32.lt_s
                                                    (get_local $8)
                                                    (i32.const 0)
                                                  )
                                                  (get_local $1)
                                                  (get_local $8)
                                                )
                                              )
                                              (get_local $36)
                                            )
                                          )
                                          (get_local $36)
                                        )
                                        (block
                                          (i32.store8
                                            (get_local $44)
                                            (i32.const 48)
                                          )
                                          (set_local $1
                                            (get_local $44)
                                          )
                                        )
                                      )
                                      (set_local $13
                                        (i32.or
                                          (get_local $21)
                                          (i32.const 2)
                                        )
                                      )
                                      (i32.store8
                                        (i32.add
                                          (get_local $1)
                                          (i32.const -1)
                                        )
                                        (i32.add
                                          (i32.and
                                            (i32.shr_s
                                              (get_local $8)
                                              (i32.const 31)
                                            )
                                            (i32.const 2)
                                          )
                                          (i32.const 43)
                                        )
                                      )
                                      (i32.store8
                                        (tee_local $6
                                          (i32.add
                                            (get_local $1)
                                            (i32.const -2)
                                          )
                                        )
                                        (i32.add
                                          (get_local $9)
                                          (i32.const 15)
                                        )
                                      )
                                      (set_local $9
                                        (i32.lt_s
                                          (get_local $5)
                                          (i32.const 1)
                                        )
                                      )
                                      (set_local $21
                                        (i32.eqz
                                          (i32.and
                                            (get_local $12)
                                            (i32.const 8)
                                          )
                                        )
                                      )
                                      (set_local $1
                                        (get_local $22)
                                      )
                                      (loop $while-in56
                                        (i32.store8
                                          (get_local $1)
                                          (i32.or
                                            (i32.load8_u
                                              (i32.add
                                                (tee_local $8
                                                  (call $f64-to-int
                                                    (get_local $14)
                                                  )
                                                )
                                                (i32.const 2449)
                                              )
                                            )
                                            (get_local $7)
                                          )
                                        )
                                        (set_local $14
                                          (f64.mul
                                            (f64.sub
                                              (get_local $14)
                                              (f64.convert_s/i32
                                                (get_local $8)
                                              )
                                            )
                                            (f64.const 16)
                                          )
                                        )
                                        (set_local $1
                                          (block $do-once57 i32
                                            (if i32
                                              (i32.eq
                                                (i32.sub
                                                  (tee_local $8
                                                    (i32.add
                                                      (get_local $1)
                                                      (i32.const 1)
                                                    )
                                                  )
                                                  (get_local $30)
                                                )
                                                (i32.const 1)
                                              )
                                              (block i32
                                                (drop
                                                  (br_if $do-once57
                                                    (get_local $8)
                                                    (i32.and
                                                      (get_local $21)
                                                      (i32.and
                                                        (get_local $9)
                                                        (f64.eq
                                                          (get_local $14)
                                                          (f64.const 0)
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                                (i32.store8
                                                  (get_local $8)
                                                  (i32.const 46)
                                                )
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const 2)
                                                )
                                              )
                                              (get_local $8)
                                            )
                                          )
                                        )
                                        (br_if $while-in56
                                          (f64.ne
                                            (get_local $14)
                                            (f64.const 0)
                                          )
                                        )
                                      )
                                      (set_local $7
                                        (i32.sub
                                          (i32.add
                                            (get_local $50)
                                            (get_local $5)
                                          )
                                          (tee_local $8
                                            (get_local $6)
                                          )
                                        )
                                      )
                                      (set_local $9
                                        (i32.add
                                          (i32.sub
                                            (get_local $48)
                                            (get_local $8)
                                          )
                                          (get_local $1)
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 32)
                                        (get_local $10)
                                        (tee_local $5
                                          (i32.add
                                            (if i32
                                              (i32.and
                                                (i32.ne
                                                  (get_local $5)
                                                  (i32.const 0)
                                                )
                                                (i32.lt_s
                                                  (i32.add
                                                    (get_local $49)
                                                    (get_local $1)
                                                  )
                                                  (get_local $5)
                                                )
                                              )
                                              (get_local $7)
                                              (tee_local $7
                                                (get_local $9)
                                              )
                                            )
                                            (get_local $13)
                                          )
                                        )
                                        (get_local $12)
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (drop
                                          (call $___fwritex
                                            (get_local $29)
                                            (get_local $13)
                                            (get_local $0)
                                          )
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 48)
                                        (get_local $10)
                                        (get_local $5)
                                        (i32.xor
                                          (get_local $12)
                                          (i32.const 65536)
                                        )
                                      )
                                      (set_local $1
                                        (i32.sub
                                          (get_local $1)
                                          (get_local $30)
                                        )
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (drop
                                          (call $___fwritex
                                            (get_local $22)
                                            (get_local $1)
                                            (get_local $0)
                                          )
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 48)
                                        (i32.sub
                                          (get_local $7)
                                          (i32.add
                                            (get_local $1)
                                            (tee_local $1
                                              (i32.sub
                                                (get_local $31)
                                                (get_local $8)
                                              )
                                            )
                                          )
                                        )
                                        (i32.const 0)
                                        (i32.const 0)
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (drop
                                          (call $___fwritex
                                            (get_local $6)
                                            (get_local $1)
                                            (get_local $0)
                                          )
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 32)
                                        (get_local $10)
                                        (get_local $5)
                                        (i32.xor
                                          (get_local $12)
                                          (i32.const 8192)
                                        )
                                      )
                                      (if
                                        (i32.ge_s
                                          (get_local $5)
                                          (get_local $10)
                                        )
                                        (set_local $10
                                          (get_local $5)
                                        )
                                      )
                                      (br $do-once49)
                                    )
                                  )
                                  (if
                                    (get_local $1)
                                    (block
                                      (i32.store
                                        (get_local $23)
                                        (tee_local $7
                                          (i32.add
                                            (i32.load
                                              (get_local $23)
                                            )
                                            (i32.const -28)
                                          )
                                        )
                                      )
                                      (set_local $14
                                        (f64.mul
                                          (get_local $14)
                                          (f64.const 268435456)
                                        )
                                      )
                                    )
                                    (set_local $7
                                      (i32.load
                                        (get_local $23)
                                      )
                                    )
                                  )
                                  (set_local $6
                                    (tee_local $8
                                      (if i32
                                        (i32.lt_s
                                          (get_local $7)
                                          (i32.const 0)
                                        )
                                        (get_local $51)
                                        (get_local $52)
                                      )
                                    )
                                  )
                                  (loop $while-in60
                                    (i32.store
                                      (get_local $6)
                                      (tee_local $1
                                        (call $f64-to-int
                                          (get_local $14)
                                        )
                                      )
                                    )
                                    (set_local $6
                                      (i32.add
                                        (get_local $6)
                                        (i32.const 4)
                                      )
                                    )
                                    (br_if $while-in60
                                      (f64.ne
                                        (tee_local $14
                                          (f64.mul
                                            (f64.sub
                                              (get_local $14)
                                              (f64.convert_u/i32
                                                (get_local $1)
                                              )
                                            )
                                            (f64.const 1e9)
                                          )
                                        )
                                        (f64.const 0)
                                      )
                                    )
                                  )
                                  (if
                                    (i32.gt_s
                                      (get_local $7)
                                      (i32.const 0)
                                    )
                                    (block
                                      (set_local $1
                                        (get_local $8)
                                      )
                                      (loop $while-in62
                                        (set_local $19
                                          (if i32
                                            (i32.gt_s
                                              (get_local $7)
                                              (i32.const 29)
                                            )
                                            (i32.const 29)
                                            (get_local $7)
                                          )
                                        )
                                        (block $do-once63
                                          (if
                                            (i32.ge_u
                                              (tee_local $7
                                                (i32.add
                                                  (get_local $6)
                                                  (i32.const -4)
                                                )
                                              )
                                              (get_local $1)
                                            )
                                            (block
                                              (set_local $20
                                                (i64.extend_u/i32
                                                  (get_local $19)
                                                )
                                              )
                                              (set_local $13
                                                (i32.const 0)
                                              )
                                              (loop $while-in66
                                                (i64.store32
                                                  (get_local $7)
                                                  (call $i64u-rem
                                                    (tee_local $53
                                                      (i64.add
                                                        (i64.shl
                                                          (i64.extend_u/i32
                                                            (i32.load
                                                              (get_local $7)
                                                            )
                                                          )
                                                          (get_local $20)
                                                        )
                                                        (i64.extend_u/i32
                                                          (get_local $13)
                                                        )
                                                      )
                                                    )
                                                    (i64.const 1000000000)
                                                  )
                                                )
                                                (set_local $13
                                                  (i32.wrap/i64
                                                    (call $i64u-div
                                                      (get_local $53)
                                                      (i64.const 1000000000)
                                                    )
                                                  )
                                                )
                                                (br_if $while-in66
                                                  (i32.ge_u
                                                    (tee_local $7
                                                      (i32.add
                                                        (get_local $7)
                                                        (i32.const -4)
                                                      )
                                                    )
                                                    (get_local $1)
                                                  )
                                                )
                                              )
                                              (br_if $do-once63
                                                (i32.eqz
                                                  (get_local $13)
                                                )
                                              )
                                              (i32.store
                                                (tee_local $1
                                                  (i32.add
                                                    (get_local $1)
                                                    (i32.const -4)
                                                  )
                                                )
                                                (get_local $13)
                                              )
                                            )
                                          )
                                        )
                                        (loop $while-in68
                                          (if
                                            (i32.gt_u
                                              (get_local $6)
                                              (get_local $1)
                                            )
                                            (if
                                              (i32.eqz
                                                (i32.load
                                                  (tee_local $7
                                                    (i32.add
                                                      (get_local $6)
                                                      (i32.const -4)
                                                    )
                                                  )
                                                )
                                              )
                                              (block
                                                (set_local $6
                                                  (get_local $7)
                                                )
                                                (br $while-in68)
                                              )
                                            )
                                          )
                                        )
                                        (i32.store
                                          (get_local $23)
                                          (tee_local $7
                                            (i32.sub
                                              (i32.load
                                                (get_local $23)
                                              )
                                              (get_local $19)
                                            )
                                          )
                                        )
                                        (br_if $while-in62
                                          (i32.gt_s
                                            (get_local $7)
                                            (i32.const 0)
                                          )
                                        )
                                      )
                                    )
                                    (set_local $1
                                      (get_local $8)
                                    )
                                  )
                                  (set_local $19
                                    (if i32
                                      (i32.lt_s
                                        (get_local $5)
                                        (i32.const 0)
                                      )
                                      (i32.const 6)
                                      (get_local $5)
                                    )
                                  )
                                  (if
                                    (i32.lt_s
                                      (get_local $7)
                                      (i32.const 0)
                                    )
                                    (block
                                      (set_local $24
                                        (i32.add
                                          (call $i32s-div
                                            (i32.add
                                              (get_local $19)
                                              (i32.const 25)
                                            )
                                            (i32.const 9)
                                          )
                                          (i32.const 1)
                                        )
                                      )
                                      (set_local $28
                                        (i32.eq
                                          (get_local $18)
                                          (i32.const 102)
                                        )
                                      )
                                      (set_local $5
                                        (get_local $6)
                                      )
                                      (loop $while-in70
                                        (if
                                          (i32.gt_s
                                            (tee_local $13
                                              (i32.sub
                                                (i32.const 0)
                                                (get_local $7)
                                              )
                                            )
                                            (i32.const 9)
                                          )
                                          (set_local $13
                                            (i32.const 9)
                                          )
                                        )
                                        (block $do-once71
                                          (if
                                            (i32.lt_u
                                              (get_local $1)
                                              (get_local $5)
                                            )
                                            (block
                                              (set_local $32
                                                (i32.add
                                                  (i32.shl
                                                    (i32.const 1)
                                                    (get_local $13)
                                                  )
                                                  (i32.const -1)
                                                )
                                              )
                                              (set_local $33
                                                (i32.shr_u
                                                  (i32.const 1000000000)
                                                  (get_local $13)
                                                )
                                              )
                                              (set_local $7
                                                (i32.const 0)
                                              )
                                              (set_local $6
                                                (get_local $1)
                                              )
                                              (loop $while-in74
                                                (i32.store
                                                  (get_local $6)
                                                  (i32.add
                                                    (i32.shr_u
                                                      (tee_local $40
                                                        (i32.load
                                                          (get_local $6)
                                                        )
                                                      )
                                                      (get_local $13)
                                                    )
                                                    (get_local $7)
                                                  )
                                                )
                                                (set_local $7
                                                  (i32.mul
                                                    (i32.and
                                                      (get_local $40)
                                                      (get_local $32)
                                                    )
                                                    (get_local $33)
                                                  )
                                                )
                                                (br_if $while-in74
                                                  (i32.lt_u
                                                    (tee_local $6
                                                      (i32.add
                                                        (get_local $6)
                                                        (i32.const 4)
                                                      )
                                                    )
                                                    (get_local $5)
                                                  )
                                                )
                                              )
                                              (set_local $6
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const 4)
                                                )
                                              )
                                              (if
                                                (i32.eqz
                                                  (i32.load
                                                    (get_local $1)
                                                  )
                                                )
                                                (set_local $1
                                                  (get_local $6)
                                                )
                                              )
                                              (br_if $do-once71
                                                (i32.eqz
                                                  (get_local $7)
                                                )
                                              )
                                              (i32.store
                                                (get_local $5)
                                                (get_local $7)
                                              )
                                              (set_local $5
                                                (i32.add
                                                  (get_local $5)
                                                  (i32.const 4)
                                                )
                                              )
                                            )
                                            (block
                                              (set_local $6
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const 4)
                                                )
                                              )
                                              (if
                                                (i32.eqz
                                                  (i32.load
                                                    (get_local $1)
                                                  )
                                                )
                                                (set_local $1
                                                  (get_local $6)
                                                )
                                              )
                                            )
                                          )
                                        )
                                        (set_local $7
                                          (i32.add
                                            (tee_local $6
                                              (if i32
                                                (get_local $28)
                                                (get_local $8)
                                                (get_local $1)
                                              )
                                            )
                                            (i32.shl
                                              (get_local $24)
                                              (i32.const 2)
                                            )
                                          )
                                        )
                                        (if
                                          (i32.gt_s
                                            (i32.shr_s
                                              (i32.sub
                                                (get_local $5)
                                                (get_local $6)
                                              )
                                              (i32.const 2)
                                            )
                                            (get_local $24)
                                          )
                                          (set_local $5
                                            (get_local $7)
                                          )
                                        )
                                        (i32.store
                                          (get_local $23)
                                          (tee_local $7
                                            (i32.add
                                              (i32.load
                                                (get_local $23)
                                              )
                                              (get_local $13)
                                            )
                                          )
                                        )
                                        (br_if $while-in70
                                          (i32.lt_s
                                            (get_local $7)
                                            (i32.const 0)
                                          )
                                        )
                                        (set_local $13
                                          (get_local $5)
                                        )
                                      )
                                    )
                                    (set_local $13
                                      (get_local $6)
                                    )
                                  )
                                  (set_local $24
                                    (get_local $8)
                                  )
                                  (block $do-once75
                                    (if
                                      (i32.lt_u
                                        (get_local $1)
                                        (get_local $13)
                                      )
                                      (block
                                        (set_local $5
                                          (i32.mul
                                            (i32.shr_s
                                              (i32.sub
                                                (get_local $24)
                                                (get_local $1)
                                              )
                                              (i32.const 2)
                                            )
                                            (i32.const 9)
                                          )
                                        )
                                        (br_if $do-once75
                                          (i32.lt_u
                                            (tee_local $7
                                              (i32.load
                                                (get_local $1)
                                              )
                                            )
                                            (i32.const 10)
                                          )
                                        )
                                        (set_local $6
                                          (i32.const 10)
                                        )
                                        (loop $while-in78
                                          (set_local $5
                                            (i32.add
                                              (get_local $5)
                                              (i32.const 1)
                                            )
                                          )
                                          (br_if $while-in78
                                            (i32.ge_u
                                              (get_local $7)
                                              (tee_local $6
                                                (i32.mul
                                                  (get_local $6)
                                                  (i32.const 10)
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                      (set_local $5
                                        (i32.const 0)
                                      )
                                    )
                                  )
                                  (set_local $28
                                    (i32.eq
                                      (get_local $18)
                                      (i32.const 103)
                                    )
                                  )
                                  (set_local $32
                                    (i32.ne
                                      (get_local $19)
                                      (i32.const 0)
                                    )
                                  )
                                  (set_local $13
                                    (if i32
                                      (i32.lt_s
                                        (tee_local $6
                                          (i32.add
                                            (i32.sub
                                              (get_local $19)
                                              (if i32
                                                (i32.ne
                                                  (get_local $18)
                                                  (i32.const 102)
                                                )
                                                (get_local $5)
                                                (i32.const 0)
                                              )
                                            )
                                            (i32.shr_s
                                              (i32.shl
                                                (i32.and
                                                  (get_local $32)
                                                  (get_local $28)
                                                )
                                                (i32.const 31)
                                              )
                                              (i32.const 31)
                                            )
                                          )
                                        )
                                        (i32.add
                                          (i32.mul
                                            (i32.shr_s
                                              (i32.sub
                                                (get_local $13)
                                                (get_local $24)
                                              )
                                              (i32.const 2)
                                            )
                                            (i32.const 9)
                                          )
                                          (i32.const -9)
                                        )
                                      )
                                      (block i32
                                        (set_local $18
                                          (call $i32s-div
                                            (tee_local $6
                                              (i32.add
                                                (get_local $6)
                                                (i32.const 9216)
                                              )
                                            )
                                            (i32.const 9)
                                          )
                                        )
                                        (if
                                          (i32.lt_s
                                            (tee_local $6
                                              (i32.add
                                                (call $i32s-rem
                                                  (get_local $6)
                                                  (i32.const 9)
                                                )
                                                (i32.const 1)
                                              )
                                            )
                                            (i32.const 9)
                                          )
                                          (block
                                            (set_local $7
                                              (i32.const 10)
                                            )
                                            (loop $while-in80
                                              (set_local $7
                                                (i32.mul
                                                  (get_local $7)
                                                  (i32.const 10)
                                                )
                                              )
                                              (br_if $while-in80
                                                (i32.ne
                                                  (tee_local $6
                                                    (i32.add
                                                      (get_local $6)
                                                      (i32.const 1)
                                                    )
                                                  )
                                                  (i32.const 9)
                                                )
                                              )
                                            )
                                          )
                                          (set_local $7
                                            (i32.const 10)
                                          )
                                        )
                                        (set_local $18
                                          (call $i32u-rem
                                            (tee_local $33
                                              (i32.load
                                                (tee_local $6
                                                  (i32.add
                                                    (i32.add
                                                      (get_local $8)
                                                      (i32.const 4)
                                                    )
                                                    (i32.shl
                                                      (i32.add
                                                        (get_local $18)
                                                        (i32.const -1024)
                                                      )
                                                      (i32.const 2)
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                            (get_local $7)
                                          )
                                        )
                                        (block $do-once81
                                          (if
                                            (i32.eqz
                                              (i32.and
                                                (tee_local $40
                                                  (i32.eq
                                                    (i32.add
                                                      (get_local $6)
                                                      (i32.const 4)
                                                    )
                                                    (get_local $13)
                                                  )
                                                )
                                                (i32.eqz
                                                  (get_local $18)
                                                )
                                              )
                                            )
                                            (block
                                              (set_local $54
                                                (call $i32u-div
                                                  (get_local $33)
                                                  (get_local $7)
                                                )
                                              )
                                              (set_local $14
                                                (if f64
                                                  (i32.lt_u
                                                    (get_local $18)
                                                    (tee_local $55
                                                      (call $i32s-div
                                                        (get_local $7)
                                                        (i32.const 2)
                                                      )
                                                    )
                                                  )
                                                  (f64.const 0.5)
                                                  (if f64
                                                    (i32.and
                                                      (get_local $40)
                                                      (i32.eq
                                                        (get_local $18)
                                                        (get_local $55)
                                                      )
                                                    )
                                                    (f64.const 1)
                                                    (f64.const 1.5)
                                                  )
                                                )
                                              )
                                              (set_local $26
                                                (if f64
                                                  (i32.and
                                                    (get_local $54)
                                                    (i32.const 1)
                                                  )
                                                  (f64.const 9007199254740994)
                                                  (f64.const 9007199254740992)
                                                )
                                              )
                                              (set_local $14
                                                (block $do-once83 f64
                                                  (if f64
                                                    (get_local $21)
                                                    (block f64
                                                      (if
                                                        (i32.ne
                                                          (i32.load8_s
                                                            (get_local $29)
                                                          )
                                                          (i32.const 45)
                                                        )
                                                        (block
                                                          (set_local $41
                                                            (get_local $14)
                                                          )
                                                          (br $do-once83
                                                            (get_local $26)
                                                          )
                                                        )
                                                      )
                                                      (set_local $41
                                                        (f64.neg
                                                          (get_local $14)
                                                        )
                                                      )
                                                      (f64.neg
                                                        (get_local $26)
                                                      )
                                                    )
                                                    (block f64
                                                      (set_local $41
                                                        (get_local $14)
                                                      )
                                                      (get_local $26)
                                                    )
                                                  )
                                                )
                                              )
                                              (i32.store
                                                (get_local $6)
                                                (tee_local $18
                                                  (i32.sub
                                                    (get_local $33)
                                                    (get_local $18)
                                                  )
                                                )
                                              )
                                              (br_if $do-once81
                                                (f64.eq
                                                  (f64.add
                                                    (get_local $14)
                                                    (get_local $41)
                                                  )
                                                  (get_local $14)
                                                )
                                              )
                                              (i32.store
                                                (get_local $6)
                                                (tee_local $5
                                                  (i32.add
                                                    (get_local $18)
                                                    (get_local $7)
                                                  )
                                                )
                                              )
                                              (if
                                                (i32.gt_u
                                                  (get_local $5)
                                                  (i32.const 999999999)
                                                )
                                                (loop $while-in86
                                                  (i32.store
                                                    (get_local $6)
                                                    (i32.const 0)
                                                  )
                                                  (if
                                                    (i32.lt_u
                                                      (tee_local $6
                                                        (i32.add
                                                          (get_local $6)
                                                          (i32.const -4)
                                                        )
                                                      )
                                                      (get_local $1)
                                                    )
                                                    (i32.store
                                                      (tee_local $1
                                                        (i32.add
                                                          (get_local $1)
                                                          (i32.const -4)
                                                        )
                                                      )
                                                      (i32.const 0)
                                                    )
                                                  )
                                                  (i32.store
                                                    (get_local $6)
                                                    (tee_local $5
                                                      (i32.add
                                                        (i32.load
                                                          (get_local $6)
                                                        )
                                                        (i32.const 1)
                                                      )
                                                    )
                                                  )
                                                  (br_if $while-in86
                                                    (i32.gt_u
                                                      (get_local $5)
                                                      (i32.const 999999999)
                                                    )
                                                  )
                                                )
                                              )
                                              (set_local $5
                                                (i32.mul
                                                  (i32.shr_s
                                                    (i32.sub
                                                      (get_local $24)
                                                      (get_local $1)
                                                    )
                                                    (i32.const 2)
                                                  )
                                                  (i32.const 9)
                                                )
                                              )
                                              (br_if $do-once81
                                                (i32.lt_u
                                                  (tee_local $18
                                                    (i32.load
                                                      (get_local $1)
                                                    )
                                                  )
                                                  (i32.const 10)
                                                )
                                              )
                                              (set_local $7
                                                (i32.const 10)
                                              )
                                              (loop $while-in88
                                                (set_local $5
                                                  (i32.add
                                                    (get_local $5)
                                                    (i32.const 1)
                                                  )
                                                )
                                                (br_if $while-in88
                                                  (i32.ge_u
                                                    (get_local $18)
                                                    (tee_local $7
                                                      (i32.mul
                                                        (get_local $7)
                                                        (i32.const 10)
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                        (set_local $7
                                          (get_local $5)
                                        )
                                        (if
                                          (i32.le_u
                                            (get_local $13)
                                            (tee_local $6
                                              (i32.add
                                                (get_local $6)
                                                (i32.const 4)
                                              )
                                            )
                                          )
                                          (set_local $6
                                            (get_local $13)
                                          )
                                        )
                                        (get_local $1)
                                      )
                                      (block i32
                                        (set_local $7
                                          (get_local $5)
                                        )
                                        (set_local $6
                                          (get_local $13)
                                        )
                                        (get_local $1)
                                      )
                                    )
                                  )
                                  (set_local $33
                                    (i32.sub
                                      (i32.const 0)
                                      (get_local $7)
                                    )
                                  )
                                  (loop $while-in90
                                    (block $while-out89
                                      (if
                                        (i32.le_u
                                          (get_local $6)
                                          (get_local $13)
                                        )
                                        (block
                                          (set_local $18
                                            (i32.const 0)
                                          )
                                          (br $while-out89)
                                        )
                                      )
                                      (if
                                        (i32.load
                                          (tee_local $1
                                            (i32.add
                                              (get_local $6)
                                              (i32.const -4)
                                            )
                                          )
                                        )
                                        (set_local $18
                                          (i32.const 1)
                                        )
                                        (block
                                          (set_local $6
                                            (get_local $1)
                                          )
                                          (br $while-in90)
                                        )
                                      )
                                    )
                                  )
                                  (block $do-once91
                                    (set_local $19
                                      (if i32
                                        (get_local $28)
                                        (block i32
                                          (set_local $1
                                            (if i32
                                              (i32.and
                                                (i32.gt_s
                                                  (tee_local $1
                                                    (i32.add
                                                      (i32.xor
                                                        (i32.and
                                                          (get_local $32)
                                                          (i32.const 1)
                                                        )
                                                        (i32.const 1)
                                                      )
                                                      (get_local $19)
                                                    )
                                                  )
                                                  (get_local $7)
                                                )
                                                (i32.gt_s
                                                  (get_local $7)
                                                  (i32.const -5)
                                                )
                                              )
                                              (block i32
                                                (set_local $5
                                                  (i32.add
                                                    (get_local $9)
                                                    (i32.const -1)
                                                  )
                                                )
                                                (i32.sub
                                                  (i32.add
                                                    (get_local $1)
                                                    (i32.const -1)
                                                  )
                                                  (get_local $7)
                                                )
                                              )
                                              (block i32
                                                (set_local $5
                                                  (i32.add
                                                    (get_local $9)
                                                    (i32.const -2)
                                                  )
                                                )
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const -1)
                                                )
                                              )
                                            )
                                          )
                                          (br_if $do-once91
                                            (tee_local $19
                                              (i32.and
                                                (get_local $12)
                                                (i32.const 8)
                                              )
                                            )
                                          )
                                          (block $do-once93
                                            (if
                                              (get_local $18)
                                              (block
                                                (if
                                                  (i32.eqz
                                                    (tee_local $28
                                                      (i32.load
                                                        (i32.add
                                                          (get_local $6)
                                                          (i32.const -4)
                                                        )
                                                      )
                                                    )
                                                  )
                                                  (block
                                                    (set_local $9
                                                      (i32.const 9)
                                                    )
                                                    (br $do-once93)
                                                  )
                                                )
                                                (if
                                                  (call $i32u-rem
                                                    (get_local $28)
                                                    (i32.const 10)
                                                  )
                                                  (block
                                                    (set_local $9
                                                      (i32.const 0)
                                                    )
                                                    (br $do-once93)
                                                  )
                                                  (block
                                                    (set_local $9
                                                      (i32.const 0)
                                                    )
                                                    (set_local $19
                                                      (i32.const 10)
                                                    )
                                                  )
                                                )
                                                (loop $while-in96
                                                  (set_local $9
                                                    (i32.add
                                                      (get_local $9)
                                                      (i32.const 1)
                                                    )
                                                  )
                                                  (br_if $while-in96
                                                    (i32.eqz
                                                      (call $i32u-rem
                                                        (get_local $28)
                                                        (tee_local $19
                                                          (i32.mul
                                                            (get_local $19)
                                                            (i32.const 10)
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                              (set_local $9
                                                (i32.const 9)
                                              )
                                            )
                                          )
                                          (set_local $19
                                            (i32.add
                                              (i32.mul
                                                (i32.shr_s
                                                  (i32.sub
                                                    (get_local $6)
                                                    (get_local $24)
                                                  )
                                                  (i32.const 2)
                                                )
                                                (i32.const 9)
                                              )
                                              (i32.const -9)
                                            )
                                          )
                                          (if i32
                                            (i32.eq
                                              (i32.or
                                                (get_local $5)
                                                (i32.const 32)
                                              )
                                              (i32.const 102)
                                            )
                                            (block i32
                                              (if
                                                (i32.ge_s
                                                  (get_local $1)
                                                  (if i32
                                                    (i32.lt_s
                                                      (tee_local $9
                                                        (i32.sub
                                                          (get_local $19)
                                                          (get_local $9)
                                                        )
                                                      )
                                                      (i32.const 0)
                                                    )
                                                    (tee_local $9
                                                      (i32.const 0)
                                                    )
                                                    (get_local $9)
                                                  )
                                                )
                                                (set_local $1
                                                  (get_local $9)
                                                )
                                              )
                                              (i32.const 0)
                                            )
                                            (block i32
                                              (if
                                                (i32.ge_s
                                                  (get_local $1)
                                                  (if i32
                                                    (i32.lt_s
                                                      (tee_local $9
                                                        (i32.sub
                                                          (i32.add
                                                            (get_local $19)
                                                            (get_local $7)
                                                          )
                                                          (get_local $9)
                                                        )
                                                      )
                                                      (i32.const 0)
                                                    )
                                                    (tee_local $9
                                                      (i32.const 0)
                                                    )
                                                    (get_local $9)
                                                  )
                                                )
                                                (set_local $1
                                                  (get_local $9)
                                                )
                                              )
                                              (i32.const 0)
                                            )
                                          )
                                        )
                                        (block i32
                                          (set_local $5
                                            (get_local $9)
                                          )
                                          (set_local $1
                                            (get_local $19)
                                          )
                                          (i32.and
                                            (get_local $12)
                                            (i32.const 8)
                                          )
                                        )
                                      )
                                    )
                                  )
                                  (if
                                    (tee_local $28
                                      (i32.eq
                                        (i32.or
                                          (get_local $5)
                                          (i32.const 32)
                                        )
                                        (i32.const 102)
                                      )
                                    )
                                    (block
                                      (set_local $9
                                        (i32.const 0)
                                      )
                                      (if
                                        (i32.le_s
                                          (get_local $7)
                                          (i32.const 0)
                                        )
                                        (set_local $7
                                          (i32.const 0)
                                        )
                                      )
                                    )
                                    (block
                                      (if
                                        (i32.lt_s
                                          (i32.sub
                                            (get_local $31)
                                            (tee_local $9
                                              (call $_fmt_u
                                                (i64.extend_s/i32
                                                  (if i32
                                                    (i32.lt_s
                                                      (get_local $7)
                                                      (i32.const 0)
                                                    )
                                                    (get_local $33)
                                                    (get_local $7)
                                                  )
                                                )
                                                (get_local $36)
                                              )
                                            )
                                          )
                                          (i32.const 2)
                                        )
                                        (loop $while-in98
                                          (i32.store8
                                            (tee_local $9
                                              (i32.add
                                                (get_local $9)
                                                (i32.const -1)
                                              )
                                            )
                                            (i32.const 48)
                                          )
                                          (br_if $while-in98
                                            (i32.lt_s
                                              (i32.sub
                                                (get_local $31)
                                                (get_local $9)
                                              )
                                              (i32.const 2)
                                            )
                                          )
                                        )
                                      )
                                      (i32.store8
                                        (i32.add
                                          (get_local $9)
                                          (i32.const -1)
                                        )
                                        (i32.add
                                          (i32.and
                                            (i32.shr_s
                                              (get_local $7)
                                              (i32.const 31)
                                            )
                                            (i32.const 2)
                                          )
                                          (i32.const 43)
                                        )
                                      )
                                      (i32.store8
                                        (tee_local $7
                                          (i32.add
                                            (get_local $9)
                                            (i32.const -2)
                                          )
                                        )
                                        (get_local $5)
                                      )
                                      (set_local $9
                                        (get_local $7)
                                      )
                                      (set_local $7
                                        (i32.sub
                                          (get_local $31)
                                          (get_local $7)
                                        )
                                      )
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $10)
                                    (tee_local $24
                                      (i32.add
                                        (i32.add
                                          (i32.add
                                            (i32.add
                                              (get_local $21)
                                              (i32.const 1)
                                            )
                                            (get_local $1)
                                          )
                                          (i32.ne
                                            (tee_local $32
                                              (i32.or
                                                (get_local $1)
                                                (get_local $19)
                                              )
                                            )
                                            (i32.const 0)
                                          )
                                        )
                                        (get_local $7)
                                      )
                                    )
                                    (get_local $12)
                                  )
                                  (if
                                    (i32.eqz
                                      (i32.and
                                        (i32.load
                                          (get_local $0)
                                        )
                                        (i32.const 32)
                                      )
                                    )
                                    (drop
                                      (call $___fwritex
                                        (get_local $29)
                                        (get_local $21)
                                        (get_local $0)
                                      )
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 48)
                                    (get_local $10)
                                    (get_local $24)
                                    (i32.xor
                                      (get_local $12)
                                      (i32.const 65536)
                                    )
                                  )
                                  (block $do-once99
                                    (if
                                      (get_local $28)
                                      (block
                                        (set_local $7
                                          (tee_local $9
                                            (if i32
                                              (i32.gt_u
                                                (get_local $13)
                                                (get_local $8)
                                              )
                                              (get_local $8)
                                              (get_local $13)
                                            )
                                          )
                                        )
                                        (loop $while-in102
                                          (set_local $5
                                            (call $_fmt_u
                                              (i64.extend_u/i32
                                                (i32.load
                                                  (get_local $7)
                                                )
                                              )
                                              (get_local $35)
                                            )
                                          )
                                          (block $do-once103
                                            (if
                                              (i32.eq
                                                (get_local $7)
                                                (get_local $9)
                                              )
                                              (block
                                                (br_if $do-once103
                                                  (i32.ne
                                                    (get_local $5)
                                                    (get_local $35)
                                                  )
                                                )
                                                (i32.store8
                                                  (get_local $37)
                                                  (i32.const 48)
                                                )
                                                (set_local $5
                                                  (get_local $37)
                                                )
                                              )
                                              (block
                                                (br_if $do-once103
                                                  (i32.le_u
                                                    (get_local $5)
                                                    (get_local $22)
                                                  )
                                                )
                                                (drop
                                                  (call $_memset
                                                    (get_local $22)
                                                    (i32.const 48)
                                                    (i32.sub
                                                      (get_local $5)
                                                      (get_local $30)
                                                    )
                                                  )
                                                )
                                                (loop $while-in106
                                                  (br_if $while-in106
                                                    (i32.gt_u
                                                      (tee_local $5
                                                        (i32.add
                                                          (get_local $5)
                                                          (i32.const -1)
                                                        )
                                                      )
                                                      (get_local $22)
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                          (if
                                            (i32.eqz
                                              (i32.and
                                                (i32.load
                                                  (get_local $0)
                                                )
                                                (i32.const 32)
                                              )
                                            )
                                            (drop
                                              (call $___fwritex
                                                (get_local $5)
                                                (i32.sub
                                                  (get_local $45)
                                                  (get_local $5)
                                                )
                                                (get_local $0)
                                              )
                                            )
                                          )
                                          (if
                                            (i32.le_u
                                              (tee_local $5
                                                (i32.add
                                                  (get_local $7)
                                                  (i32.const 4)
                                                )
                                              )
                                              (get_local $8)
                                            )
                                            (block
                                              (set_local $7
                                                (get_local $5)
                                              )
                                              (br $while-in102)
                                            )
                                          )
                                        )
                                        (block $do-once107
                                          (if
                                            (get_local $32)
                                            (block
                                              (br_if $do-once107
                                                (i32.and
                                                  (i32.load
                                                    (get_local $0)
                                                  )
                                                  (i32.const 32)
                                                )
                                              )
                                              (drop
                                                (call $___fwritex
                                                  (i32.const 2517)
                                                  (i32.const 1)
                                                  (get_local $0)
                                                )
                                              )
                                            )
                                          )
                                        )
                                        (if
                                          (i32.and
                                            (i32.gt_s
                                              (get_local $1)
                                              (i32.const 0)
                                            )
                                            (i32.lt_u
                                              (get_local $5)
                                              (get_local $6)
                                            )
                                          )
                                          (loop $while-in110
                                            (if
                                              (i32.gt_u
                                                (tee_local $8
                                                  (call $_fmt_u
                                                    (i64.extend_u/i32
                                                      (i32.load
                                                        (get_local $5)
                                                      )
                                                    )
                                                    (get_local $35)
                                                  )
                                                )
                                                (get_local $22)
                                              )
                                              (block
                                                (drop
                                                  (call $_memset
                                                    (get_local $22)
                                                    (i32.const 48)
                                                    (i32.sub
                                                      (get_local $8)
                                                      (get_local $30)
                                                    )
                                                  )
                                                )
                                                (loop $while-in112
                                                  (br_if $while-in112
                                                    (i32.gt_u
                                                      (tee_local $8
                                                        (i32.add
                                                          (get_local $8)
                                                          (i32.const -1)
                                                        )
                                                      )
                                                      (get_local $22)
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                            (if
                                              (i32.eqz
                                                (i32.and
                                                  (i32.load
                                                    (get_local $0)
                                                  )
                                                  (i32.const 32)
                                                )
                                              )
                                              (drop
                                                (call $___fwritex
                                                  (get_local $8)
                                                  (if i32
                                                    (i32.gt_s
                                                      (get_local $1)
                                                      (i32.const 9)
                                                    )
                                                    (i32.const 9)
                                                    (get_local $1)
                                                  )
                                                  (get_local $0)
                                                )
                                              )
                                            )
                                            (set_local $8
                                              (i32.add
                                                (get_local $1)
                                                (i32.const -9)
                                              )
                                            )
                                            (if
                                              (i32.and
                                                (i32.gt_s
                                                  (get_local $1)
                                                  (i32.const 9)
                                                )
                                                (i32.lt_u
                                                  (tee_local $5
                                                    (i32.add
                                                      (get_local $5)
                                                      (i32.const 4)
                                                    )
                                                  )
                                                  (get_local $6)
                                                )
                                              )
                                              (block
                                                (set_local $1
                                                  (get_local $8)
                                                )
                                                (br $while-in110)
                                              )
                                              (set_local $1
                                                (get_local $8)
                                              )
                                            )
                                          )
                                        )
                                        (call $_pad
                                          (get_local $0)
                                          (i32.const 48)
                                          (i32.add
                                            (get_local $1)
                                            (i32.const 9)
                                          )
                                          (i32.const 9)
                                          (i32.const 0)
                                        )
                                      )
                                      (block
                                        (set_local $5
                                          (i32.add
                                            (get_local $13)
                                            (i32.const 4)
                                          )
                                        )
                                        (if
                                          (i32.eqz
                                            (get_local $18)
                                          )
                                          (set_local $6
                                            (get_local $5)
                                          )
                                        )
                                        (if
                                          (i32.gt_s
                                            (get_local $1)
                                            (i32.const -1)
                                          )
                                          (block
                                            (set_local $21
                                              (i32.eqz
                                                (get_local $19)
                                              )
                                            )
                                            (set_local $5
                                              (get_local $1)
                                            )
                                            (set_local $8
                                              (get_local $13)
                                            )
                                            (loop $while-in114
                                              (if
                                                (i32.eq
                                                  (tee_local $1
                                                    (call $_fmt_u
                                                      (i64.extend_u/i32
                                                        (i32.load
                                                          (get_local $8)
                                                        )
                                                      )
                                                      (get_local $35)
                                                    )
                                                  )
                                                  (get_local $35)
                                                )
                                                (block
                                                  (i32.store8
                                                    (get_local $37)
                                                    (i32.const 48)
                                                  )
                                                  (set_local $1
                                                    (get_local $37)
                                                  )
                                                )
                                              )
                                              (block $do-once115
                                                (if
                                                  (i32.eq
                                                    (get_local $8)
                                                    (get_local $13)
                                                  )
                                                  (block
                                                    (if
                                                      (i32.eqz
                                                        (i32.and
                                                          (i32.load
                                                            (get_local $0)
                                                          )
                                                          (i32.const 32)
                                                        )
                                                      )
                                                      (drop
                                                        (call $___fwritex
                                                          (get_local $1)
                                                          (i32.const 1)
                                                          (get_local $0)
                                                        )
                                                      )
                                                    )
                                                    (set_local $1
                                                      (i32.add
                                                        (get_local $1)
                                                        (i32.const 1)
                                                      )
                                                    )
                                                    (br_if $do-once115
                                                      (i32.and
                                                        (get_local $21)
                                                        (i32.lt_s
                                                          (get_local $5)
                                                          (i32.const 1)
                                                        )
                                                      )
                                                    )
                                                    (br_if $do-once115
                                                      (i32.and
                                                        (i32.load
                                                          (get_local $0)
                                                        )
                                                        (i32.const 32)
                                                      )
                                                    )
                                                    (drop
                                                      (call $___fwritex
                                                        (i32.const 2517)
                                                        (i32.const 1)
                                                        (get_local $0)
                                                      )
                                                    )
                                                  )
                                                  (block
                                                    (br_if $do-once115
                                                      (i32.le_u
                                                        (get_local $1)
                                                        (get_local $22)
                                                      )
                                                    )
                                                    (drop
                                                      (call $_memset
                                                        (get_local $22)
                                                        (i32.const 48)
                                                        (i32.add
                                                          (get_local $1)
                                                          (get_local $47)
                                                        )
                                                      )
                                                    )
                                                    (loop $while-in118
                                                      (br_if $while-in118
                                                        (i32.gt_u
                                                          (tee_local $1
                                                            (i32.add
                                                              (get_local $1)
                                                              (i32.const -1)
                                                            )
                                                          )
                                                          (get_local $22)
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                              (set_local $7
                                                (i32.sub
                                                  (get_local $45)
                                                  (get_local $1)
                                                )
                                              )
                                              (if
                                                (i32.eqz
                                                  (i32.and
                                                    (i32.load
                                                      (get_local $0)
                                                    )
                                                    (i32.const 32)
                                                  )
                                                )
                                                (drop
                                                  (call $___fwritex
                                                    (get_local $1)
                                                    (if i32
                                                      (i32.gt_s
                                                        (get_local $5)
                                                        (get_local $7)
                                                      )
                                                      (get_local $7)
                                                      (get_local $5)
                                                    )
                                                    (get_local $0)
                                                  )
                                                )
                                              )
                                              (br_if $while-in114
                                                (i32.and
                                                  (i32.lt_u
                                                    (tee_local $8
                                                      (i32.add
                                                        (get_local $8)
                                                        (i32.const 4)
                                                      )
                                                    )
                                                    (get_local $6)
                                                  )
                                                  (i32.gt_s
                                                    (tee_local $5
                                                      (i32.sub
                                                        (get_local $5)
                                                        (get_local $7)
                                                      )
                                                    )
                                                    (i32.const -1)
                                                  )
                                                )
                                              )
                                              (set_local $1
                                                (get_local $5)
                                              )
                                            )
                                          )
                                        )
                                        (call $_pad
                                          (get_local $0)
                                          (i32.const 48)
                                          (i32.add
                                            (get_local $1)
                                            (i32.const 18)
                                          )
                                          (i32.const 18)
                                          (i32.const 0)
                                        )
                                        (br_if $do-once99
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (drop
                                          (call $___fwritex
                                            (get_local $9)
                                            (i32.sub
                                              (get_local $31)
                                              (get_local $9)
                                            )
                                            (get_local $0)
                                          )
                                        )
                                      )
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $10)
                                    (get_local $24)
                                    (i32.xor
                                      (get_local $12)
                                      (i32.const 8192)
                                    )
                                  )
                                  (if
                                    (i32.ge_s
                                      (get_local $24)
                                      (get_local $10)
                                    )
                                    (set_local $10
                                      (get_local $24)
                                    )
                                  )
                                )
                                (block
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $10)
                                    (tee_local $8
                                      (i32.add
                                        (if i32
                                          (tee_local $7
                                            (i32.or
                                              (f64.ne
                                                (get_local $14)
                                                (get_local $14)
                                              )
                                              (i32.const 0)
                                            )
                                          )
                                          (tee_local $21
                                            (i32.const 0)
                                          )
                                          (get_local $21)
                                        )
                                        (i32.const 3)
                                      )
                                    )
                                    (get_local $6)
                                  )
                                  (if
                                    (i32.eqz
                                      (i32.and
                                        (tee_local $1
                                          (i32.load
                                            (get_local $0)
                                          )
                                        )
                                        (i32.const 32)
                                      )
                                    )
                                    (block
                                      (drop
                                        (call $___fwritex
                                          (get_local $29)
                                          (get_local $21)
                                          (get_local $0)
                                        )
                                      )
                                      (set_local $1
                                        (i32.load
                                          (get_local $0)
                                        )
                                      )
                                    )
                                  )
                                  (set_local $6
                                    (if i32
                                      (tee_local $5
                                        (i32.ne
                                          (i32.and
                                            (get_local $9)
                                            (i32.const 32)
                                          )
                                          (i32.const 0)
                                        )
                                      )
                                      (i32.const 2501)
                                      (i32.const 2505)
                                    )
                                  )
                                  (set_local $5
                                    (if i32
                                      (get_local $5)
                                      (i32.const 2509)
                                      (i32.const 2513)
                                    )
                                  )
                                  (if
                                    (i32.eqz
                                      (get_local $7)
                                    )
                                    (set_local $5
                                      (get_local $6)
                                    )
                                  )
                                  (if
                                    (i32.eqz
                                      (i32.and
                                        (get_local $1)
                                        (i32.const 32)
                                      )
                                    )
                                    (drop
                                      (call $___fwritex
                                        (get_local $5)
                                        (i32.const 3)
                                        (get_local $0)
                                      )
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $10)
                                    (get_local $8)
                                    (i32.xor
                                      (get_local $12)
                                      (i32.const 8192)
                                    )
                                  )
                                  (if
                                    (i32.ge_s
                                      (get_local $8)
                                      (get_local $10)
                                    )
                                    (set_local $10
                                      (get_local $8)
                                    )
                                  )
                                )
                              )
                            )
                            (set_local $1
                              (get_local $11)
                            )
                            (br $label$continue$L1)
                          )
                          (set_local $7
                            (i32.const 0)
                          )
                          (set_local $9
                            (i32.const 2465)
                          )
                          (set_local $8
                            (get_local $25)
                          )
                          (br $jumpthreading$outer$8)
                        )
                        (set_local $8
                          (i32.and
                            (get_local $9)
                            (i32.const 32)
                          )
                        )
                        (set_local $6
                          (if i32
                            (i64.eq
                              (tee_local $20
                                (i64.load
                                  (get_local $16)
                                )
                              )
                              (i64.const 0)
                            )
                            (block i32
                              (set_local $20
                                (i64.const 0)
                              )
                              (get_local $25)
                            )
                            (block i32
                              (set_local $1
                                (get_local $25)
                              )
                              (loop $while-in123
                                (i32.store8
                                  (tee_local $1
                                    (i32.add
                                      (get_local $1)
                                      (i32.const -1)
                                    )
                                  )
                                  (i32.or
                                    (i32.load8_u
                                      (i32.add
                                        (i32.and
                                          (i32.wrap/i64
                                            (get_local $20)
                                          )
                                          (i32.const 15)
                                        )
                                        (i32.const 2449)
                                      )
                                    )
                                    (get_local $8)
                                  )
                                )
                                (br_if $while-in123
                                  (i64.ne
                                    (tee_local $20
                                      (i64.shr_u
                                        (get_local $20)
                                        (i64.const 4)
                                      )
                                    )
                                    (i64.const 0)
                                  )
                                )
                              )
                              (set_local $20
                                (i64.load
                                  (get_local $16)
                                )
                              )
                              (get_local $1)
                            )
                          )
                        )
                        (set_local $8
                          (i32.add
                            (i32.shr_s
                              (get_local $9)
                              (i32.const 4)
                            )
                            (i32.const 2465)
                          )
                        )
                        (if
                          (tee_local $1
                            (i32.or
                              (i32.eqz
                                (i32.and
                                  (get_local $12)
                                  (i32.const 8)
                                )
                              )
                              (i64.eq
                                (get_local $20)
                                (i64.const 0)
                              )
                            )
                          )
                          (set_local $8
                            (i32.const 2465)
                          )
                        )
                        (set_local $7
                          (if i32
                            (get_local $1)
                            (i32.const 0)
                            (i32.const 2)
                          )
                        )
                        (br $jumpthreading$inner$8)
                      )
                      (set_local $6
                        (call $_fmt_u
                          (get_local $20)
                          (get_local $25)
                        )
                      )
                      (br $jumpthreading$inner$8)
                    )
                    (set_local $13
                      (i32.eqz
                        (tee_local $12
                          (call $_memchr
                            (get_local $1)
                            (i32.const 0)
                            (get_local $5)
                          )
                        )
                      )
                    )
                    (set_local $7
                      (i32.sub
                        (get_local $12)
                        (get_local $1)
                      )
                    )
                    (set_local $8
                      (i32.add
                        (get_local $1)
                        (get_local $5)
                      )
                    )
                    (if
                      (i32.eqz
                        (get_local $13)
                      )
                      (set_local $5
                        (get_local $7)
                      )
                    )
                    (set_local $7
                      (i32.const 0)
                    )
                    (set_local $9
                      (i32.const 2465)
                    )
                    (if
                      (i32.eqz
                        (get_local $13)
                      )
                      (set_local $8
                        (get_local $12)
                      )
                    )
                    (set_local $12
                      (get_local $6)
                    )
                    (br $jumpthreading$outer$8)
                  )
                  (set_local $6
                    (get_local $5)
                  )
                  (set_local $1
                    (i32.const 0)
                  )
                  (set_local $8
                    (i32.const 0)
                  )
                  (loop $while-in125
                    (block $while-out124
                      (br_if $while-out124
                        (i32.eqz
                          (tee_local $9
                            (i32.load
                              (get_local $6)
                            )
                          )
                        )
                      )
                      (br_if $while-out124
                        (i32.or
                          (i32.lt_s
                            (tee_local $8
                              (call $_wctomb
                                (get_local $38)
                                (get_local $9)
                              )
                            )
                            (i32.const 0)
                          )
                          (i32.gt_u
                            (get_local $8)
                            (i32.sub
                              (get_local $7)
                              (get_local $1)
                            )
                          )
                        )
                      )
                      (set_local $6
                        (i32.add
                          (get_local $6)
                          (i32.const 4)
                        )
                      )
                      (br_if $while-in125
                        (i32.gt_u
                          (get_local $7)
                          (tee_local $1
                            (i32.add
                              (get_local $8)
                              (get_local $1)
                            )
                          )
                        )
                      )
                    )
                  )
                  (if
                    (i32.lt_s
                      (get_local $8)
                      (i32.const 0)
                    )
                    (block
                      (set_local $15
                        (i32.const -1)
                      )
                      (br $label$break$L1)
                    )
                  )
                  (call $_pad
                    (get_local $0)
                    (i32.const 32)
                    (get_local $10)
                    (get_local $1)
                    (get_local $12)
                  )
                  (if
                    (get_local $1)
                    (block
                      (set_local $8
                        (i32.const 0)
                      )
                      (loop $while-in127
                        (br_if $jumpthreading$inner$7
                          (i32.eqz
                            (tee_local $6
                              (i32.load
                                (get_local $5)
                              )
                            )
                          )
                        )
                        (br_if $jumpthreading$inner$7
                          (i32.gt_s
                            (tee_local $8
                              (i32.add
                                (tee_local $6
                                  (call $_wctomb
                                    (get_local $38)
                                    (get_local $6)
                                  )
                                )
                                (get_local $8)
                              )
                            )
                            (get_local $1)
                          )
                        )
                        (if
                          (i32.eqz
                            (i32.and
                              (i32.load
                                (get_local $0)
                              )
                              (i32.const 32)
                            )
                          )
                          (drop
                            (call $___fwritex
                              (get_local $38)
                              (get_local $6)
                              (get_local $0)
                            )
                          )
                        )
                        (set_local $5
                          (i32.add
                            (get_local $5)
                            (i32.const 4)
                          )
                        )
                        (br_if $while-in127
                          (i32.lt_u
                            (get_local $8)
                            (get_local $1)
                          )
                        )
                        (br $jumpthreading$inner$7)
                      )
                    )
                    (block
                      (set_local $1
                        (i32.const 0)
                      )
                      (br $jumpthreading$inner$7)
                    )
                  )
                  (br $jumpthreading$outer$8)
                )
                (call $_pad
                  (get_local $0)
                  (i32.const 32)
                  (get_local $10)
                  (get_local $1)
                  (i32.xor
                    (get_local $12)
                    (i32.const 8192)
                  )
                )
                (if
                  (i32.le_s
                    (get_local $10)
                    (get_local $1)
                  )
                  (set_local $10
                    (get_local $1)
                  )
                )
                (set_local $1
                  (get_local $11)
                )
                (br $label$continue$L1)
              )
              (set_local $1
                (i32.and
                  (get_local $12)
                  (i32.const -65537)
                )
              )
              (if
                (i32.gt_s
                  (get_local $5)
                  (i32.const -1)
                )
                (set_local $12
                  (get_local $1)
                )
              )
              (if
                (i32.or
                  (get_local $5)
                  (tee_local $13
                    (i64.ne
                      (i64.load
                        (get_local $16)
                      )
                      (i64.const 0)
                    )
                  )
                )
                (block
                  (set_local $1
                    (get_local $6)
                  )
                  (set_local $9
                    (get_local $8)
                  )
                  (set_local $8
                    (get_local $25)
                  )
                  (if
                    (i32.le_s
                      (get_local $5)
                      (tee_local $6
                        (i32.add
                          (i32.xor
                            (i32.and
                              (get_local $13)
                              (i32.const 1)
                            )
                            (i32.const 1)
                          )
                          (i32.sub
                            (get_local $42)
                            (get_local $6)
                          )
                        )
                      )
                    )
                    (set_local $5
                      (get_local $6)
                    )
                  )
                )
                (block
                  (set_local $1
                    (get_local $25)
                  )
                  (set_local $9
                    (get_local $8)
                  )
                  (set_local $8
                    (get_local $25)
                  )
                  (set_local $5
                    (i32.const 0)
                  )
                )
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 32)
              (if i32
                (i32.lt_s
                  (get_local $10)
                  (tee_local $5
                    (i32.add
                      (tee_local $6
                        (if i32
                          (i32.lt_s
                            (get_local $5)
                            (tee_local $8
                              (i32.sub
                                (get_local $8)
                                (get_local $1)
                              )
                            )
                          )
                          (get_local $8)
                          (get_local $5)
                        )
                      )
                      (get_local $7)
                    )
                  )
                )
                (tee_local $10
                  (get_local $5)
                )
                (get_local $10)
              )
              (get_local $5)
              (get_local $12)
            )
            (if
              (i32.eqz
                (i32.and
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 32)
                )
              )
              (drop
                (call $___fwritex
                  (get_local $9)
                  (get_local $7)
                  (get_local $0)
                )
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 48)
              (get_local $10)
              (get_local $5)
              (i32.xor
                (get_local $12)
                (i32.const 65536)
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 48)
              (get_local $6)
              (get_local $8)
              (i32.const 0)
            )
            (if
              (i32.eqz
                (i32.and
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 32)
                )
              )
              (drop
                (call $___fwritex
                  (get_local $1)
                  (get_local $8)
                  (get_local $0)
                )
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 32)
              (get_local $10)
              (get_local $5)
              (i32.xor
                (get_local $12)
                (i32.const 8192)
              )
            )
            (set_local $1
              (get_local $11)
            )
            (br $label$continue$L1)
          )
        )
        (br $label$break$L345)
      )
      (if
        (i32.eqz
          (get_local $0)
        )
        (if
          (get_local $17)
          (block
            (set_local $0
              (i32.const 1)
            )
            (loop $while-in130
              (if
                (tee_local $1
                  (i32.load
                    (i32.add
                      (get_local $4)
                      (i32.shl
                        (get_local $0)
                        (i32.const 2)
                      )
                    )
                  )
                )
                (block
                  (call $_pop_arg
                    (i32.add
                      (get_local $3)
                      (i32.shl
                        (get_local $0)
                        (i32.const 3)
                      )
                    )
                    (get_local $1)
                    (get_local $2)
                  )
                  (br_if $while-in130
                    (i32.lt_s
                      (tee_local $0
                        (i32.add
                          (get_local $0)
                          (i32.const 1)
                        )
                      )
                      (i32.const 10)
                    )
                  )
                  (set_local $15
                    (i32.const 1)
                  )
                  (br $label$break$L345)
                )
              )
            )
            (loop $while-in132
              (if
                (i32.load
                  (i32.add
                    (get_local $4)
                    (i32.shl
                      (get_local $0)
                      (i32.const 2)
                    )
                  )
                )
                (block
                  (set_local $15
                    (i32.const -1)
                  )
                  (br $label$break$L345)
                )
              )
              (br_if $while-in132
                (i32.lt_s
                  (tee_local $0
                    (i32.add
                      (get_local $0)
                      (i32.const 1)
                    )
                  )
                  (i32.const 10)
                )
              )
              (set_local $15
                (i32.const 1)
              )
            )
          )
          (set_local $15
            (i32.const 0)
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $27)
    )
    (get_local $15)
  )
  (func $___lockfile (param $0 i32) (result i32)
    (i32.const 0)
  )
  (func $___fwritex (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (block $label$break$L5
      (block $jumpthreading$inner$0
        (br_if $jumpthreading$inner$0
          (tee_local $3
            (i32.load
              (tee_local $4
                (i32.add
                  (get_local $2)
                  (i32.const 16)
                )
              )
            )
          )
        )
        (if
          (call $___towrite
            (get_local $2)
          )
          (set_local $3
            (i32.const 0)
          )
          (block
            (set_local $3
              (i32.load
                (get_local $4)
              )
            )
            (br $jumpthreading$inner$0)
          )
        )
        (br $label$break$L5)
      )
      (if
        (i32.lt_u
          (i32.sub
            (get_local $3)
            (tee_local $4
              (i32.load
                (tee_local $5
                  (i32.add
                    (get_local $2)
                    (i32.const 20)
                  )
                )
              )
            )
          )
          (get_local $1)
        )
        (block
          (set_local $3
            (call_indirect $FUNCSIG$iiii
              (get_local $2)
              (get_local $0)
              (get_local $1)
              (i32.add
                (i32.and
                  (i32.load offset=36
                    (get_local $2)
                  )
                  (i32.const 7)
                )
                (i32.const 0)
              )
            )
          )
          (br $label$break$L5)
        )
      )
      (block $label$break$L10
        (if
          (i32.gt_s
            (i32.load8_s offset=75
              (get_local $2)
            )
            (i32.const -1)
          )
          (block
            (set_local $3
              (get_local $1)
            )
            (loop $while-in
              (if
                (i32.eqz
                  (get_local $3)
                )
                (block
                  (set_local $3
                    (i32.const 0)
                  )
                  (br $label$break$L10)
                )
              )
              (if
                (i32.ne
                  (i32.load8_s
                    (i32.add
                      (get_local $0)
                      (tee_local $6
                        (i32.add
                          (get_local $3)
                          (i32.const -1)
                        )
                      )
                    )
                  )
                  (i32.const 10)
                )
                (block
                  (set_local $3
                    (get_local $6)
                  )
                  (br $while-in)
                )
              )
            )
            (br_if $label$break$L5
              (i32.lt_u
                (call_indirect $FUNCSIG$iiii
                  (get_local $2)
                  (get_local $0)
                  (get_local $3)
                  (i32.add
                    (i32.and
                      (i32.load offset=36
                        (get_local $2)
                      )
                      (i32.const 7)
                    )
                    (i32.const 0)
                  )
                )
                (get_local $3)
              )
            )
            (set_local $1
              (i32.sub
                (get_local $1)
                (get_local $3)
              )
            )
            (set_local $0
              (i32.add
                (get_local $0)
                (get_local $3)
              )
            )
            (set_local $4
              (i32.load
                (get_local $5)
              )
            )
          )
          (set_local $3
            (i32.const 0)
          )
        )
      )
      (drop
        (call $_memcpy
          (get_local $4)
          (get_local $0)
          (get_local $1)
        )
      )
      (i32.store
        (get_local $5)
        (i32.add
          (i32.load
            (get_local $5)
          )
          (get_local $1)
        )
      )
      (set_local $3
        (i32.add
          (get_local $3)
          (get_local $1)
        )
      )
    )
    (get_local $3)
  )
  (func $_pop_arg (param $0 i32) (param $1 i32) (param $2 i32)
    (local $3 i32)
    (local $4 f64)
    (local $5 i64)
    (block $label$break$L1
      (if
        (i32.le_u
          (get_local $1)
          (i32.const 20)
        )
        (block $switch-default
          (block $switch-case9
            (block $switch-case8
              (block $switch-case7
                (block $switch-case6
                  (block $switch-case5
                    (block $switch-case4
                      (block $switch-case3
                        (block $switch-case2
                          (block $switch-case1
                            (block $switch-case
                              (br_table $switch-case $switch-case1 $switch-case2 $switch-case3 $switch-case4 $switch-case5 $switch-case6 $switch-case7 $switch-case8 $switch-case9 $switch-default
                                (i32.sub
                                  (get_local $1)
                                  (i32.const 9)
                                )
                              )
                            )
                            (set_local $3
                              (i32.load
                                (tee_local $1
                                  (i32.and
                                    (i32.add
                                      (i32.load
                                        (get_local $2)
                                      )
                                      (i32.const 3)
                                    )
                                    (i32.const -4)
                                  )
                                )
                              )
                            )
                            (i32.store
                              (get_local $2)
                              (i32.add
                                (get_local $1)
                                (i32.const 4)
                              )
                            )
                            (i32.store
                              (get_local $0)
                              (get_local $3)
                            )
                            (br $label$break$L1)
                          )
                          (set_local $3
                            (i32.load
                              (tee_local $1
                                (i32.and
                                  (i32.add
                                    (i32.load
                                      (get_local $2)
                                    )
                                    (i32.const 3)
                                  )
                                  (i32.const -4)
                                )
                              )
                            )
                          )
                          (i32.store
                            (get_local $2)
                            (i32.add
                              (get_local $1)
                              (i32.const 4)
                            )
                          )
                          (i64.store
                            (get_local $0)
                            (i64.extend_s/i32
                              (get_local $3)
                            )
                          )
                          (br $label$break$L1)
                        )
                        (set_local $3
                          (i32.load
                            (tee_local $1
                              (i32.and
                                (i32.add
                                  (i32.load
                                    (get_local $2)
                                  )
                                  (i32.const 3)
                                )
                                (i32.const -4)
                              )
                            )
                          )
                        )
                        (i32.store
                          (get_local $2)
                          (i32.add
                            (get_local $1)
                            (i32.const 4)
                          )
                        )
                        (i64.store
                          (get_local $0)
                          (i64.extend_u/i32
                            (get_local $3)
                          )
                        )
                        (br $label$break$L1)
                      )
                      (set_local $5
                        (i64.load
                          (tee_local $1
                            (i32.and
                              (i32.add
                                (i32.load
                                  (get_local $2)
                                )
                                (i32.const 7)
                              )
                              (i32.const -8)
                            )
                          )
                        )
                      )
                      (i32.store
                        (get_local $2)
                        (i32.add
                          (get_local $1)
                          (i32.const 8)
                        )
                      )
                      (i64.store
                        (get_local $0)
                        (get_local $5)
                      )
                      (br $label$break$L1)
                    )
                    (set_local $3
                      (i32.load
                        (tee_local $1
                          (i32.and
                            (i32.add
                              (i32.load
                                (get_local $2)
                              )
                              (i32.const 3)
                            )
                            (i32.const -4)
                          )
                        )
                      )
                    )
                    (i32.store
                      (get_local $2)
                      (i32.add
                        (get_local $1)
                        (i32.const 4)
                      )
                    )
                    (i64.store
                      (get_local $0)
                      (i64.extend_s/i32
                        (i32.shr_s
                          (i32.shl
                            (i32.and
                              (get_local $3)
                              (i32.const 65535)
                            )
                            (i32.const 16)
                          )
                          (i32.const 16)
                        )
                      )
                    )
                    (br $label$break$L1)
                  )
                  (set_local $3
                    (i32.load
                      (tee_local $1
                        (i32.and
                          (i32.add
                            (i32.load
                              (get_local $2)
                            )
                            (i32.const 3)
                          )
                          (i32.const -4)
                        )
                      )
                    )
                  )
                  (i32.store
                    (get_local $2)
                    (i32.add
                      (get_local $1)
                      (i32.const 4)
                    )
                  )
                  (i64.store
                    (get_local $0)
                    (i64.extend_u/i32
                      (i32.and
                        (get_local $3)
                        (i32.const 65535)
                      )
                    )
                  )
                  (br $label$break$L1)
                )
                (set_local $3
                  (i32.load
                    (tee_local $1
                      (i32.and
                        (i32.add
                          (i32.load
                            (get_local $2)
                          )
                          (i32.const 3)
                        )
                        (i32.const -4)
                      )
                    )
                  )
                )
                (i32.store
                  (get_local $2)
                  (i32.add
                    (get_local $1)
                    (i32.const 4)
                  )
                )
                (i64.store
                  (get_local $0)
                  (i64.extend_s/i32
                    (i32.shr_s
                      (i32.shl
                        (i32.and
                          (get_local $3)
                          (i32.const 255)
                        )
                        (i32.const 24)
                      )
                      (i32.const 24)
                    )
                  )
                )
                (br $label$break$L1)
              )
              (set_local $3
                (i32.load
                  (tee_local $1
                    (i32.and
                      (i32.add
                        (i32.load
                          (get_local $2)
                        )
                        (i32.const 3)
                      )
                      (i32.const -4)
                    )
                  )
                )
              )
              (i32.store
                (get_local $2)
                (i32.add
                  (get_local $1)
                  (i32.const 4)
                )
              )
              (i64.store
                (get_local $0)
                (i64.extend_u/i32
                  (i32.and
                    (get_local $3)
                    (i32.const 255)
                  )
                )
              )
              (br $label$break$L1)
            )
            (set_local $4
              (f64.load
                (tee_local $1
                  (i32.and
                    (i32.add
                      (i32.load
                        (get_local $2)
                      )
                      (i32.const 7)
                    )
                    (i32.const -8)
                  )
                )
              )
            )
            (i32.store
              (get_local $2)
              (i32.add
                (get_local $1)
                (i32.const 8)
              )
            )
            (f64.store
              (get_local $0)
              (get_local $4)
            )
            (br $label$break$L1)
          )
          (set_local $4
            (f64.load
              (tee_local $1
                (i32.and
                  (i32.add
                    (i32.load
                      (get_local $2)
                    )
                    (i32.const 7)
                  )
                  (i32.const -8)
                )
              )
            )
          )
          (i32.store
            (get_local $2)
            (i32.add
              (get_local $1)
              (i32.const 8)
            )
          )
          (f64.store
            (get_local $0)
            (get_local $4)
          )
        )
      )
    )
  )
  (func $_fmt_u (param $0 i64) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i64)
    (local $4 i32)
    (set_local $2
      (i32.wrap/i64
        (get_local $0)
      )
    )
    (if
      (i64.gt_u
        (get_local $0)
        (i64.const 4294967295)
      )
      (block
        (loop $while-in
          (i64.store8
            (tee_local $1
              (i32.add
                (get_local $1)
                (i32.const -1)
              )
            )
            (i64.or
              (call $i64u-rem
                (get_local $0)
                (i64.const 10)
              )
              (i64.const 48)
            )
          )
          (set_local $3
            (call $i64u-div
              (get_local $0)
              (i64.const 10)
            )
          )
          (if
            (i64.gt_u
              (get_local $0)
              (i64.const 42949672959)
            )
            (block
              (set_local $0
                (get_local $3)
              )
              (br $while-in)
            )
          )
        )
        (set_local $2
          (i32.wrap/i64
            (get_local $3)
          )
        )
      )
    )
    (if
      (get_local $2)
      (loop $while-in1
        (i32.store8
          (tee_local $1
            (i32.add
              (get_local $1)
              (i32.const -1)
            )
          )
          (i32.or
            (call $i32u-rem
              (get_local $2)
              (i32.const 10)
            )
            (i32.const 48)
          )
        )
        (set_local $4
          (call $i32u-div
            (get_local $2)
            (i32.const 10)
          )
        )
        (if
          (i32.ge_u
            (get_local $2)
            (i32.const 10)
          )
          (block
            (set_local $2
              (get_local $4)
            )
            (br $while-in1)
          )
        )
      )
    )
    (get_local $1)
  )
  (func $_strerror (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (i32.const 0)
    )
    (block $jumpthreading$outer$1
      (block $jumpthreading$inner$1
        (block $jumpthreading$inner$0
          (loop $while-in
            (br_if $jumpthreading$inner$0
              (i32.eq
                (i32.load8_u
                  (i32.add
                    (get_local $1)
                    (i32.const 2519)
                  )
                )
                (get_local $0)
              )
            )
            (br_if $while-in
              (i32.ne
                (tee_local $1
                  (i32.add
                    (get_local $1)
                    (i32.const 1)
                  )
                )
                (i32.const 87)
              )
            )
            (set_local $0
              (i32.const 2607)
            )
            (set_local $1
              (i32.const 87)
            )
            (br $jumpthreading$inner$1)
          )
        )
        (if
          (get_local $1)
          (block
            (set_local $0
              (i32.const 2607)
            )
            (br $jumpthreading$inner$1)
          )
          (set_local $0
            (i32.const 2607)
          )
        )
        (br $jumpthreading$outer$1)
      )
      (loop $while-in1
        (set_local $2
          (get_local $0)
        )
        (loop $while-in3
          (set_local $0
            (i32.add
              (get_local $2)
              (i32.const 1)
            )
          )
          (if
            (i32.load8_s
              (get_local $2)
            )
            (block
              (set_local $2
                (get_local $0)
              )
              (br $while-in3)
            )
          )
        )
        (br_if $while-in1
          (tee_local $1
            (i32.add
              (get_local $1)
              (i32.const -1)
            )
          )
        )
      )
    )
    (get_local $0)
  )
  (func $_memchr (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $4
      (i32.and
        (get_local $1)
        (i32.const 255)
      )
    )
    (block $label$break$L8
      (block $jumpthreading$inner$2
        (block $jumpthreading$inner$1
          (if
            (i32.and
              (tee_local $3
                (i32.ne
                  (get_local $2)
                  (i32.const 0)
                )
              )
              (i32.ne
                (i32.and
                  (get_local $0)
                  (i32.const 3)
                )
                (i32.const 0)
              )
            )
            (block
              (set_local $5
                (i32.and
                  (get_local $1)
                  (i32.const 255)
                )
              )
              (loop $while-in
                (br_if $jumpthreading$inner$2
                  (i32.eq
                    (i32.load8_s
                      (get_local $0)
                    )
                    (i32.shr_s
                      (i32.shl
                        (get_local $5)
                        (i32.const 24)
                      )
                      (i32.const 24)
                    )
                  )
                )
                (br_if $while-in
                  (i32.and
                    (tee_local $3
                      (i32.ne
                        (tee_local $2
                          (i32.add
                            (get_local $2)
                            (i32.const -1)
                          )
                        )
                        (i32.const 0)
                      )
                    )
                    (i32.ne
                      (i32.and
                        (tee_local $0
                          (i32.add
                            (get_local $0)
                            (i32.const 1)
                          )
                        )
                        (i32.const 3)
                      )
                      (i32.const 0)
                    )
                  )
                )
                (br $jumpthreading$inner$1)
              )
            )
          )
        )
        (br_if $jumpthreading$inner$2
          (get_local $3)
        )
        (set_local $1
          (i32.const 0)
        )
        (br $label$break$L8)
      )
      (if
        (i32.eq
          (i32.load8_s
            (get_local $0)
          )
          (i32.shr_s
            (i32.shl
              (tee_local $3
                (i32.and
                  (get_local $1)
                  (i32.const 255)
                )
              )
              (i32.const 24)
            )
            (i32.const 24)
          )
        )
        (set_local $1
          (get_local $2)
        )
        (block
          (set_local $4
            (i32.mul
              (get_local $4)
              (i32.const 16843009)
            )
          )
          (block $jumpthreading$outer$0
            (block $jumpthreading$inner$0
              (if
                (i32.gt_u
                  (get_local $2)
                  (i32.const 3)
                )
                (block
                  (set_local $1
                    (get_local $2)
                  )
                  (loop $while-in3
                    (if
                      (i32.eqz
                        (i32.and
                          (i32.xor
                            (i32.and
                              (tee_local $2
                                (i32.xor
                                  (i32.load
                                    (get_local $0)
                                  )
                                  (get_local $4)
                                )
                              )
                              (i32.const -2139062144)
                            )
                            (i32.const -2139062144)
                          )
                          (i32.add
                            (get_local $2)
                            (i32.const -16843009)
                          )
                        )
                      )
                      (block
                        (set_local $0
                          (i32.add
                            (get_local $0)
                            (i32.const 4)
                          )
                        )
                        (br_if $while-in3
                          (i32.gt_u
                            (tee_local $1
                              (i32.add
                                (get_local $1)
                                (i32.const -4)
                              )
                            )
                            (i32.const 3)
                          )
                        )
                        (br $jumpthreading$inner$0)
                      )
                    )
                  )
                )
                (block
                  (set_local $1
                    (get_local $2)
                  )
                  (br $jumpthreading$inner$0)
                )
              )
              (br $jumpthreading$outer$0)
            )
            (if
              (i32.eqz
                (get_local $1)
              )
              (block
                (set_local $1
                  (i32.const 0)
                )
                (br $label$break$L8)
              )
            )
          )
          (loop $while-in5
            (br_if $label$break$L8
              (i32.eq
                (i32.load8_s
                  (get_local $0)
                )
                (i32.shr_s
                  (i32.shl
                    (get_local $3)
                    (i32.const 24)
                  )
                  (i32.const 24)
                )
              )
            )
            (set_local $0
              (i32.add
                (get_local $0)
                (i32.const 1)
              )
            )
            (br_if $while-in5
              (tee_local $1
                (i32.add
                  (get_local $1)
                  (i32.const -1)
                )
              )
            )
            (set_local $1
              (i32.const 0)
            )
          )
        )
      )
    )
    (if i32
      (get_local $1)
      (get_local $0)
      (i32.const 0)
    )
  )
  (func $_pad (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (set_local $7
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 256)
      )
    )
    (set_local $6
      (get_local $7)
    )
    (block $do-once
      (if
        (i32.and
          (i32.gt_s
            (get_local $2)
            (get_local $3)
          )
          (i32.eqz
            (i32.and
              (get_local $4)
              (i32.const 73728)
            )
          )
        )
        (block
          (drop
            (call $_memset
              (get_local $6)
              (get_local $1)
              (if i32
                (i32.gt_u
                  (tee_local $5
                    (i32.sub
                      (get_local $2)
                      (get_local $3)
                    )
                  )
                  (i32.const 256)
                )
                (i32.const 256)
                (get_local $5)
              )
            )
          )
          (set_local $4
            (i32.eqz
              (i32.and
                (tee_local $1
                  (i32.load
                    (get_local $0)
                  )
                )
                (i32.const 32)
              )
            )
          )
          (if
            (i32.gt_u
              (get_local $5)
              (i32.const 255)
            )
            (block
              (loop $while-in
                (if
                  (get_local $4)
                  (block
                    (drop
                      (call $___fwritex
                        (get_local $6)
                        (i32.const 256)
                        (get_local $0)
                      )
                    )
                    (set_local $1
                      (i32.load
                        (get_local $0)
                      )
                    )
                  )
                )
                (set_local $4
                  (i32.eqz
                    (i32.and
                      (get_local $1)
                      (i32.const 32)
                    )
                  )
                )
                (br_if $while-in
                  (i32.gt_u
                    (tee_local $5
                      (i32.add
                        (get_local $5)
                        (i32.const -256)
                      )
                    )
                    (i32.const 255)
                  )
                )
              )
              (br_if $do-once
                (i32.eqz
                  (get_local $4)
                )
              )
              (set_local $5
                (i32.and
                  (i32.sub
                    (get_local $2)
                    (get_local $3)
                  )
                  (i32.const 255)
                )
              )
            )
            (br_if $do-once
              (i32.eqz
                (get_local $4)
              )
            )
          )
          (drop
            (call $___fwritex
              (get_local $6)
              (get_local $5)
              (get_local $0)
            )
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $7)
    )
  )
  (func $_wctomb (param $0 i32) (param $1 i32) (result i32)
    (if i32
      (get_local $0)
      (call $_wcrtomb
        (get_local $0)
        (get_local $1)
        (i32.const 0)
      )
      (i32.const 0)
    )
  )
  (func $_frexpl (param $0 f64) (param $1 i32) (result f64)
    (call $_frexp
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_frexp (param $0 f64) (param $1 i32) (result f64)
    (local $2 i64)
    (local $3 i64)
    (block $switch
      (block $switch-default
        (block $switch-case0
          (block $switch-case
            (br_table $switch-case $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-case0 $switch-default
              (i32.sub
                (i32.shr_s
                  (i32.shl
                    (i32.and
                      (i32.and
                        (i32.wrap/i64
                          (tee_local $3
                            (i64.shr_u
                              (tee_local $2
                                (i64.reinterpret/f64
                                  (get_local $0)
                                )
                              )
                              (i64.const 52)
                            )
                          )
                        )
                        (i32.const 65535)
                      )
                      (i32.const 2047)
                    )
                    (i32.const 16)
                  )
                  (i32.const 16)
                )
                (i32.const 0)
              )
            )
          )
          (i32.store
            (get_local $1)
            (if i32
              (f64.ne
                (get_local $0)
                (f64.const 0)
              )
              (block i32
                (set_local $0
                  (call $_frexp
                    (f64.mul
                      (get_local $0)
                      (f64.const 18446744073709551615)
                    )
                    (get_local $1)
                  )
                )
                (i32.add
                  (i32.load
                    (get_local $1)
                  )
                  (i32.const -64)
                )
              )
              (i32.const 0)
            )
          )
          (br $switch)
        )
        (br $switch)
      )
      (i32.store
        (get_local $1)
        (i32.add
          (i32.and
            (i32.wrap/i64
              (get_local $3)
            )
            (i32.const 2047)
          )
          (i32.const -1022)
        )
      )
      (set_local $0
        (f64.reinterpret/i64
          (i64.or
            (i64.and
              (get_local $2)
              (i64.const -9218868437227405313)
            )
            (i64.const 4602678819172646912)
          )
        )
      )
    )
    (get_local $0)
  )
  (func $_wcrtomb (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (block $do-once i32
      (if i32
        (get_local $0)
        (block i32
          (if
            (i32.lt_u
              (get_local $1)
              (i32.const 128)
            )
            (block
              (i32.store8
                (get_local $0)
                (get_local $1)
              )
              (br $do-once
                (i32.const 1)
              )
            )
          )
          (if
            (i32.lt_u
              (get_local $1)
              (i32.const 2048)
            )
            (block
              (i32.store8
                (get_local $0)
                (i32.or
                  (i32.shr_u
                    (get_local $1)
                    (i32.const 6)
                  )
                  (i32.const 192)
                )
              )
              (i32.store8 offset=1
                (get_local $0)
                (i32.or
                  (i32.and
                    (get_local $1)
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (br $do-once
                (i32.const 2)
              )
            )
          )
          (if
            (i32.or
              (i32.lt_u
                (get_local $1)
                (i32.const 55296)
              )
              (i32.eq
                (i32.and
                  (get_local $1)
                  (i32.const -8192)
                )
                (i32.const 57344)
              )
            )
            (block
              (i32.store8
                (get_local $0)
                (i32.or
                  (i32.shr_u
                    (get_local $1)
                    (i32.const 12)
                  )
                  (i32.const 224)
                )
              )
              (i32.store8 offset=1
                (get_local $0)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $1)
                      (i32.const 6)
                    )
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.store8 offset=2
                (get_local $0)
                (i32.or
                  (i32.and
                    (get_local $1)
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (br $do-once
                (i32.const 3)
              )
            )
          )
          (if i32
            (i32.lt_u
              (i32.add
                (get_local $1)
                (i32.const -65536)
              )
              (i32.const 1048576)
            )
            (block i32
              (i32.store8
                (get_local $0)
                (i32.or
                  (i32.shr_u
                    (get_local $1)
                    (i32.const 18)
                  )
                  (i32.const 240)
                )
              )
              (i32.store8 offset=1
                (get_local $0)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $1)
                      (i32.const 12)
                    )
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.store8 offset=2
                (get_local $0)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $1)
                      (i32.const 6)
                    )
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.store8 offset=3
                (get_local $0)
                (i32.or
                  (i32.and
                    (get_local $1)
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.const 4)
            )
            (block i32
              (i32.store
                (call $___errno_location)
                (i32.const 84)
              )
              (i32.const -1)
            )
          )
        )
        (i32.const 1)
      )
    )
  )
  (func $___towrite (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (i32.load8_s
        (tee_local $2
          (i32.add
            (get_local $0)
            (i32.const 74)
          )
        )
      )
    )
    (i32.store8
      (get_local $2)
      (i32.or
        (i32.add
          (get_local $1)
          (i32.const 255)
        )
        (get_local $1)
      )
    )
    (tee_local $0
      (if i32
        (i32.and
          (tee_local $1
            (i32.load
              (get_local $0)
            )
          )
          (i32.const 8)
        )
        (block i32
          (i32.store
            (get_local $0)
            (i32.or
              (get_local $1)
              (i32.const 32)
            )
          )
          (i32.const -1)
        )
        (block i32
          (i32.store offset=8
            (get_local $0)
            (i32.const 0)
          )
          (i32.store offset=4
            (get_local $0)
            (i32.const 0)
          )
          (i32.store offset=28
            (get_local $0)
            (tee_local $1
              (i32.load offset=44
                (get_local $0)
              )
            )
          )
          (i32.store offset=20
            (get_local $0)
            (get_local $1)
          )
          (i32.store offset=16
            (get_local $0)
            (i32.add
              (get_local $1)
              (i32.load offset=48
                (get_local $0)
              )
            )
          )
          (i32.const 0)
        )
      )
    )
  )
  (func $_scalbn (param $0 f64) (param $1 i32) (result f64)
    (local $2 i32)
    (if
      (i32.gt_s
        (get_local $1)
        (i32.const 1023)
      )
      (block
        (set_local $0
          (f64.mul
            (get_local $0)
            (f64.const 8988465674311579538646525e283)
          )
        )
        (set_local $2
          (i32.add
            (get_local $1)
            (i32.const -2046)
          )
        )
        (if
          (i32.gt_s
            (tee_local $1
              (i32.add
                (get_local $1)
                (i32.const -1023)
              )
            )
            (i32.const 1023)
          )
          (block
            (set_local $0
              (f64.mul
                (get_local $0)
                (f64.const 8988465674311579538646525e283)
              )
            )
            (set_local $1
              (if i32
                (i32.gt_s
                  (get_local $2)
                  (i32.const 1023)
                )
                (i32.const 1023)
                (get_local $2)
              )
            )
          )
        )
      )
      (if
        (i32.lt_s
          (get_local $1)
          (i32.const -1022)
        )
        (block
          (set_local $0
            (f64.mul
              (get_local $0)
              (f64.const 2.2250738585072014e-308)
            )
          )
          (set_local $2
            (i32.add
              (get_local $1)
              (i32.const 2044)
            )
          )
          (if
            (i32.lt_s
              (tee_local $1
                (i32.add
                  (get_local $1)
                  (i32.const 1022)
                )
              )
              (i32.const -1022)
            )
            (block
              (set_local $0
                (f64.mul
                  (get_local $0)
                  (f64.const 2.2250738585072014e-308)
                )
              )
              (set_local $1
                (if i32
                  (i32.lt_s
                    (get_local $2)
                    (i32.const -1022)
                  )
                  (i32.const -1022)
                  (get_local $2)
                )
              )
            )
          )
        )
      )
    )
    (f64.mul
      (get_local $0)
      (f64.reinterpret/i64
        (i64.shl
          (i64.extend_u/i32
            (i32.add
              (get_local $1)
              (i32.const 1023)
            )
          )
          (i64.const 52)
        )
      )
    )
  )
  (func $_strlen (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (block $jumpthreading$outer$0
      (block $jumpthreading$inner$0
        (br_if $jumpthreading$inner$0
          (i32.eqz
            (i32.and
              (tee_local $2
                (get_local $0)
              )
              (i32.const 3)
            )
          )
        )
        (set_local $1
          (get_local $0)
        )
        (set_local $0
          (get_local $2)
        )
        (loop $while-in
          (br_if $jumpthreading$outer$0
            (i32.eqz
              (i32.load8_s
                (get_local $1)
              )
            )
          )
          (br_if $while-in
            (i32.and
              (tee_local $0
                (tee_local $1
                  (i32.add
                    (get_local $1)
                    (i32.const 1)
                  )
                )
              )
              (i32.const 3)
            )
          )
          (set_local $0
            (get_local $1)
          )
          (br $jumpthreading$inner$0)
        )
        (br $jumpthreading$outer$0)
      )
      (loop $while-in1
        (set_local $1
          (i32.add
            (get_local $0)
            (i32.const 4)
          )
        )
        (if
          (i32.eqz
            (i32.and
              (i32.xor
                (i32.and
                  (tee_local $3
                    (i32.load
                      (get_local $0)
                    )
                  )
                  (i32.const -2139062144)
                )
                (i32.const -2139062144)
              )
              (i32.add
                (get_local $3)
                (i32.const -16843009)
              )
            )
          )
          (block
            (set_local $0
              (get_local $1)
            )
            (br $while-in1)
          )
        )
      )
      (if
        (i32.shr_s
          (i32.shl
            (i32.and
              (get_local $3)
              (i32.const 255)
            )
            (i32.const 24)
          )
          (i32.const 24)
        )
        (loop $while-in3
          (br_if $while-in3
            (i32.load8_s
              (tee_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 1)
                )
              )
            )
          )
        )
      )
    )
    (i32.sub
      (get_local $0)
      (get_local $2)
    )
  )
  (func $___cos (param $0 f64) (param $1 f64) (result f64)
    (local $2 f64)
    (local $3 f64)
    (local $4 f64)
    (local $5 f64)
    (set_local $3
      (f64.mul
        (tee_local $2
          (f64.mul
            (get_local $0)
            (get_local $0)
          )
        )
        (get_local $2)
      )
    )
    (f64.add
      (tee_local $5
        (f64.sub
          (f64.const 1)
          (tee_local $4
            (f64.mul
              (get_local $2)
              (f64.const 0.5)
            )
          )
        )
      )
      (f64.add
        (f64.sub
          (f64.sub
            (f64.const 1)
            (get_local $5)
          )
          (get_local $4)
        )
        (f64.sub
          (f64.mul
            (get_local $2)
            (f64.add
              (f64.mul
                (get_local $2)
                (f64.add
                  (f64.mul
                    (get_local $2)
                    (f64.add
                      (f64.mul
                        (get_local $2)
                        (f64.const 2.480158728947673e-05)
                      )
                      (f64.const -0.001388888888887411)
                    )
                  )
                  (f64.const 0.0416666666666666)
                )
              )
              (f64.mul
                (f64.mul
                  (get_local $3)
                  (get_local $3)
                )
                (f64.add
                  (f64.mul
                    (get_local $2)
                    (f64.sub
                      (f64.const 2.087572321298175e-09)
                      (f64.mul
                        (get_local $2)
                        (f64.const 1.1359647557788195e-11)
                      )
                    )
                  )
                  (f64.const -2.7557314351390663e-07)
                )
              )
            )
          )
          (f64.mul
            (get_local $0)
            (get_local $1)
          )
        )
      )
    )
  )
  (func $___rem_pio2 (param $0 f64) (param $1 i32) (result i32)
    (local $2 f64)
    (local $3 i32)
    (local $4 i32)
    (local $5 f64)
    (local $6 f64)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i64)
    (set_local $9
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 48)
      )
    )
    (set_local $7
      (i32.add
        (get_local $9)
        (i32.const 16)
      )
    )
    (set_local $10
      (get_local $9)
    )
    (set_local $8
      (i32.wrap/i64
        (i64.shr_u
          (tee_local $12
            (i64.reinterpret/f64
              (get_local $0)
            )
          )
          (i64.const 63)
        )
      )
    )
    (set_local $1
      (block $jumpthreading$outer$0 i32
        (block $jumpthreading$inner$0
          (br $jumpthreading$outer$0
            (if i32
              (i32.lt_u
                (tee_local $4
                  (i32.and
                    (tee_local $3
                      (i32.wrap/i64
                        (i64.shr_u
                          (get_local $12)
                          (i64.const 32)
                        )
                      )
                    )
                    (i32.const 2147483647)
                  )
                )
                (i32.const 1074752123)
              )
              (block i32
                (br_if $jumpthreading$inner$0
                  (i32.eq
                    (i32.and
                      (get_local $3)
                      (i32.const 1048575)
                    )
                    (i32.const 598523)
                  )
                )
                (set_local $3
                  (i32.ne
                    (get_local $8)
                    (i32.const 0)
                  )
                )
                (if i32
                  (i32.lt_u
                    (get_local $4)
                    (i32.const 1073928573)
                  )
                  (if i32
                    (get_local $3)
                    (block i32
                      (f64.store
                        (get_local $1)
                        (tee_local $2
                          (f64.add
                            (tee_local $0
                              (f64.add
                                (get_local $0)
                                (f64.const 1.5707963267341256)
                              )
                            )
                            (f64.const 6.077100506506192e-11)
                          )
                        )
                      )
                      (f64.store offset=8
                        (get_local $1)
                        (f64.add
                          (f64.sub
                            (get_local $0)
                            (get_local $2)
                          )
                          (f64.const 6.077100506506192e-11)
                        )
                      )
                      (i32.const -1)
                    )
                    (block i32
                      (f64.store
                        (get_local $1)
                        (tee_local $2
                          (f64.add
                            (tee_local $0
                              (f64.add
                                (get_local $0)
                                (f64.const -1.5707963267341256)
                              )
                            )
                            (f64.const -6.077100506506192e-11)
                          )
                        )
                      )
                      (f64.store offset=8
                        (get_local $1)
                        (f64.add
                          (f64.sub
                            (get_local $0)
                            (get_local $2)
                          )
                          (f64.const -6.077100506506192e-11)
                        )
                      )
                      (i32.const 1)
                    )
                  )
                  (if i32
                    (get_local $3)
                    (block i32
                      (f64.store
                        (get_local $1)
                        (tee_local $2
                          (f64.add
                            (tee_local $0
                              (f64.add
                                (get_local $0)
                                (f64.const 3.1415926534682512)
                              )
                            )
                            (f64.const 1.2154201013012384e-10)
                          )
                        )
                      )
                      (f64.store offset=8
                        (get_local $1)
                        (f64.add
                          (f64.sub
                            (get_local $0)
                            (get_local $2)
                          )
                          (f64.const 1.2154201013012384e-10)
                        )
                      )
                      (i32.const -2)
                    )
                    (block i32
                      (f64.store
                        (get_local $1)
                        (tee_local $2
                          (f64.add
                            (tee_local $0
                              (f64.add
                                (get_local $0)
                                (f64.const -3.1415926534682512)
                              )
                            )
                            (f64.const -1.2154201013012384e-10)
                          )
                        )
                      )
                      (f64.store offset=8
                        (get_local $1)
                        (f64.add
                          (f64.sub
                            (get_local $0)
                            (get_local $2)
                          )
                          (f64.const -1.2154201013012384e-10)
                        )
                      )
                      (i32.const 2)
                    )
                  )
                )
              )
              (block i32
                (if
                  (i32.lt_u
                    (get_local $4)
                    (i32.const 1075594812)
                  )
                  (if
                    (i32.lt_u
                      (get_local $4)
                      (i32.const 1075183037)
                    )
                    (block
                      (br_if $jumpthreading$inner$0
                        (i32.eq
                          (get_local $4)
                          (i32.const 1074977148)
                        )
                      )
                      (if
                        (get_local $8)
                        (block
                          (f64.store
                            (get_local $1)
                            (tee_local $2
                              (f64.add
                                (tee_local $0
                                  (f64.add
                                    (get_local $0)
                                    (f64.const 4.712388980202377)
                                  )
                                )
                                (f64.const 1.8231301519518578e-10)
                              )
                            )
                          )
                          (f64.store offset=8
                            (get_local $1)
                            (f64.add
                              (f64.sub
                                (get_local $0)
                                (get_local $2)
                              )
                              (f64.const 1.8231301519518578e-10)
                            )
                          )
                          (br $jumpthreading$outer$0
                            (i32.const -3)
                          )
                        )
                        (block
                          (f64.store
                            (get_local $1)
                            (tee_local $2
                              (f64.add
                                (tee_local $0
                                  (f64.add
                                    (get_local $0)
                                    (f64.const -4.712388980202377)
                                  )
                                )
                                (f64.const -1.8231301519518578e-10)
                              )
                            )
                          )
                          (f64.store offset=8
                            (get_local $1)
                            (f64.add
                              (f64.sub
                                (get_local $0)
                                (get_local $2)
                              )
                              (f64.const -1.8231301519518578e-10)
                            )
                          )
                          (br $jumpthreading$outer$0
                            (i32.const 3)
                          )
                        )
                      )
                    )
                    (block
                      (br_if $jumpthreading$inner$0
                        (i32.eq
                          (get_local $4)
                          (i32.const 1075388923)
                        )
                      )
                      (if
                        (get_local $8)
                        (block
                          (f64.store
                            (get_local $1)
                            (tee_local $2
                              (f64.add
                                (tee_local $0
                                  (f64.add
                                    (get_local $0)
                                    (f64.const 6.2831853069365025)
                                  )
                                )
                                (f64.const 2.430840202602477e-10)
                              )
                            )
                          )
                          (f64.store offset=8
                            (get_local $1)
                            (f64.add
                              (f64.sub
                                (get_local $0)
                                (get_local $2)
                              )
                              (f64.const 2.430840202602477e-10)
                            )
                          )
                          (br $jumpthreading$outer$0
                            (i32.const -4)
                          )
                        )
                        (block
                          (f64.store
                            (get_local $1)
                            (tee_local $2
                              (f64.add
                                (tee_local $0
                                  (f64.add
                                    (get_local $0)
                                    (f64.const -6.2831853069365025)
                                  )
                                )
                                (f64.const -2.430840202602477e-10)
                              )
                            )
                          )
                          (f64.store offset=8
                            (get_local $1)
                            (f64.add
                              (f64.sub
                                (get_local $0)
                                (get_local $2)
                              )
                              (f64.const -2.430840202602477e-10)
                            )
                          )
                          (br $jumpthreading$outer$0
                            (i32.const 4)
                          )
                        )
                      )
                    )
                  )
                )
                (br_if $jumpthreading$inner$0
                  (i32.lt_u
                    (get_local $4)
                    (i32.const 1094263291)
                  )
                )
                (if
                  (i32.gt_u
                    (get_local $4)
                    (i32.const 2146435071)
                  )
                  (block
                    (f64.store offset=8
                      (get_local $1)
                      (tee_local $0
                        (f64.sub
                          (get_local $0)
                          (get_local $0)
                        )
                      )
                    )
                    (f64.store
                      (get_local $1)
                      (get_local $0)
                    )
                    (br $jumpthreading$outer$0
                      (i32.const 0)
                    )
                  )
                )
                (set_local $0
                  (f64.reinterpret/i64
                    (i64.or
                      (i64.and
                        (get_local $12)
                        (i64.const 4503599627370495)
                      )
                      (i64.const 4710765210229538816)
                    )
                  )
                )
                (set_local $3
                  (i32.const 0)
                )
                (loop $while-in
                  (f64.store
                    (i32.add
                      (get_local $7)
                      (i32.shl
                        (get_local $3)
                        (i32.const 3)
                      )
                    )
                    (tee_local $2
                      (f64.convert_s/i32
                        (call $f64-to-int
                          (get_local $0)
                        )
                      )
                    )
                  )
                  (set_local $0
                    (f64.mul
                      (f64.sub
                        (get_local $0)
                        (get_local $2)
                      )
                      (f64.const 16777216)
                    )
                  )
                  (br_if $while-in
                    (i32.ne
                      (tee_local $3
                        (i32.add
                          (get_local $3)
                          (i32.const 1)
                        )
                      )
                      (i32.const 2)
                    )
                  )
                )
                (f64.store offset=16
                  (get_local $7)
                  (get_local $0)
                )
                (if
                  (f64.eq
                    (get_local $0)
                    (f64.const 0)
                  )
                  (block
                    (set_local $3
                      (i32.const 1)
                    )
                    (loop $while-in1
                      (set_local $11
                        (i32.add
                          (get_local $3)
                          (i32.const -1)
                        )
                      )
                      (if
                        (f64.eq
                          (f64.load
                            (i32.add
                              (get_local $7)
                              (i32.shl
                                (get_local $3)
                                (i32.const 3)
                              )
                            )
                          )
                          (f64.const 0)
                        )
                        (block
                          (set_local $3
                            (get_local $11)
                          )
                          (br $while-in1)
                        )
                      )
                    )
                  )
                  (set_local $3
                    (i32.const 2)
                  )
                )
                (set_local $3
                  (call $___rem_pio2_large
                    (get_local $7)
                    (get_local $10)
                    (i32.add
                      (i32.shr_u
                        (get_local $4)
                        (i32.const 20)
                      )
                      (i32.const -1046)
                    )
                    (i32.add
                      (get_local $3)
                      (i32.const 1)
                    )
                    (i32.const 1)
                  )
                )
                (set_local $0
                  (f64.load
                    (get_local $10)
                  )
                )
                (set_local $2
                  (f64.load offset=8
                    (get_local $10)
                  )
                )
                (if i32
                  (get_local $8)
                  (block i32
                    (f64.store
                      (get_local $1)
                      (f64.neg
                        (get_local $0)
                      )
                    )
                    (f64.store offset=8
                      (get_local $1)
                      (f64.neg
                        (get_local $2)
                      )
                    )
                    (i32.sub
                      (i32.const 0)
                      (get_local $3)
                    )
                  )
                  (block i32
                    (f64.store
                      (get_local $1)
                      (get_local $0)
                    )
                    (f64.store offset=8
                      (get_local $1)
                      (get_local $2)
                    )
                    (get_local $3)
                  )
                )
              )
            )
          )
        )
        (set_local $3
          (call $f64-to-int
            (tee_local $5
              (f64.add
                (f64.add
                  (f64.mul
                    (get_local $0)
                    (f64.const 0.6366197723675814)
                  )
                  (f64.const 6755399441055744)
                )
                (f64.const -6755399441055744)
              )
            )
          )
        )
        (f64.store
          (get_local $1)
          (tee_local $6
            (f64.sub
              (tee_local $0
                (f64.sub
                  (get_local $0)
                  (f64.mul
                    (get_local $5)
                    (f64.const 1.5707963267341256)
                  )
                )
              )
              (tee_local $2
                (f64.mul
                  (get_local $5)
                  (f64.const 6.077100506506192e-11)
                )
              )
            )
          )
        )
        (if
          (i32.gt_s
            (i32.sub
              (tee_local $11
                (i32.shr_u
                  (get_local $4)
                  (i32.const 20)
                )
              )
              (i32.and
                (i32.wrap/i64
                  (i64.shr_u
                    (i64.reinterpret/f64
                      (get_local $6)
                    )
                    (i64.const 52)
                  )
                )
                (i32.const 2047)
              )
            )
            (i32.const 16)
          )
          (block
            (set_local $2
              (f64.sub
                (f64.mul
                  (get_local $5)
                  (f64.const 2.0222662487959506e-21)
                )
                (f64.sub
                  (f64.sub
                    (get_local $0)
                    (tee_local $0
                      (f64.sub
                        (get_local $0)
                        (tee_local $2
                          (f64.mul
                            (get_local $5)
                            (f64.const 6.077100506303966e-11)
                          )
                        )
                      )
                    )
                  )
                  (get_local $2)
                )
              )
            )
            (f64.store
              (get_local $1)
              (tee_local $6
                (f64.sub
                  (get_local $0)
                  (get_local $2)
                )
              )
            )
            (if
              (i32.gt_s
                (i32.sub
                  (get_local $11)
                  (i32.and
                    (i32.wrap/i64
                      (i64.shr_u
                        (i64.reinterpret/f64
                          (get_local $6)
                        )
                        (i64.const 52)
                      )
                    )
                    (i32.const 2047)
                  )
                )
                (i32.const 49)
              )
              (block
                (set_local $2
                  (f64.sub
                    (f64.mul
                      (get_local $5)
                      (f64.const 8.4784276603689e-32)
                    )
                    (f64.sub
                      (f64.sub
                        (get_local $0)
                        (tee_local $0
                          (f64.sub
                            (get_local $0)
                            (tee_local $2
                              (f64.mul
                                (get_local $5)
                                (f64.const 2.0222662487111665e-21)
                              )
                            )
                          )
                        )
                      )
                      (get_local $2)
                    )
                  )
                )
                (f64.store
                  (get_local $1)
                  (tee_local $6
                    (f64.sub
                      (get_local $0)
                      (get_local $2)
                    )
                  )
                )
              )
            )
          )
        )
        (f64.store offset=8
          (get_local $1)
          (f64.sub
            (f64.sub
              (get_local $0)
              (get_local $6)
            )
            (get_local $2)
          )
        )
        (get_local $3)
      )
    )
    (set_global $STACKTOP
      (get_local $9)
    )
    (get_local $1)
  )
  (func $___rem_pio2_large (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
    (local $5 f64)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 f64)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 i32)
    (local $16 i32)
    (local $17 f64)
    (local $18 i32)
    (local $19 i32)
    (local $20 i32)
    (local $21 i32)
    (local $22 i32)
    (local $23 i32)
    (local $24 i32)
    (local $25 i32)
    (local $26 i32)
    (local $27 i32)
    (local $28 i32)
    (set_local $18
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 560)
      )
    )
    (set_local $20
      (i32.add
        (get_local $18)
        (i32.const 320)
      )
    )
    (set_local $15
      (i32.load
        (i32.add
          (i32.shl
            (get_local $4)
            (i32.const 2)
          )
          (i32.const 1520)
        )
      )
    )
    (set_local $7
      (i32.add
        (get_local $3)
        (i32.const -1)
      )
    )
    (if
      (i32.lt_s
        (tee_local $21
          (call $i32s-div
            (i32.add
              (get_local $2)
              (i32.const -3)
            )
            (i32.const 24)
          )
        )
        (i32.const 0)
      )
      (set_local $21
        (i32.const 0)
      )
    )
    (if
      (i32.ge_s
        (i32.add
          (get_local $15)
          (get_local $7)
        )
        (i32.const 0)
      )
      (block
        (set_local $10
          (i32.add
            (get_local $15)
            (get_local $3)
          )
        )
        (set_local $6
          (i32.sub
            (get_local $21)
            (get_local $7)
          )
        )
        (set_local $8
          (i32.const 0)
        )
        (loop $while-in
          (f64.store
            (i32.add
              (get_local $20)
              (i32.shl
                (get_local $8)
                (i32.const 3)
              )
            )
            (tee_local $5
              (if f64
                (i32.lt_s
                  (get_local $6)
                  (i32.const 0)
                )
                (f64.const 0)
                (f64.convert_s/i32
                  (i32.load
                    (i32.add
                      (i32.shl
                        (get_local $6)
                        (i32.const 2)
                      )
                      (i32.const 1536)
                    )
                  )
                )
              )
            )
          )
          (set_local $6
            (i32.add
              (get_local $6)
              (i32.const 1)
            )
          )
          (br_if $while-in
            (i32.ne
              (tee_local $8
                (i32.add
                  (get_local $8)
                  (i32.const 1)
                )
              )
              (get_local $10)
            )
          )
        )
      )
    )
    (set_local $14
      (i32.add
        (get_local $18)
        (i32.const 480)
      )
    )
    (set_local $12
      (i32.add
        (get_local $18)
        (i32.const 160)
      )
    )
    (set_local $16
      (get_local $18)
    )
    (set_local $10
      (i32.add
        (i32.add
          (get_local $2)
          (i32.const -24)
        )
        (tee_local $25
          (i32.mul
            (get_local $21)
            (i32.const -24)
          )
        )
      )
    )
    (set_local $9
      (i32.gt_s
        (get_local $3)
        (i32.const 0)
      )
    )
    (set_local $6
      (i32.const 0)
    )
    (loop $while-in1
      (if
        (get_local $9)
        (block
          (set_local $13
            (i32.add
              (get_local $6)
              (get_local $7)
            )
          )
          (set_local $5
            (f64.const 0)
          )
          (set_local $8
            (i32.const 0)
          )
          (loop $while-in3
            (set_local $5
              (f64.add
                (get_local $5)
                (f64.mul
                  (f64.load
                    (i32.add
                      (get_local $0)
                      (i32.shl
                        (get_local $8)
                        (i32.const 3)
                      )
                    )
                  )
                  (f64.load
                    (i32.add
                      (get_local $20)
                      (i32.shl
                        (i32.sub
                          (get_local $13)
                          (get_local $8)
                        )
                        (i32.const 3)
                      )
                    )
                  )
                )
              )
            )
            (br_if $while-in3
              (i32.ne
                (tee_local $8
                  (i32.add
                    (get_local $8)
                    (i32.const 1)
                  )
                )
                (get_local $3)
              )
            )
          )
        )
        (set_local $5
          (f64.const 0)
        )
      )
      (f64.store
        (i32.add
          (get_local $16)
          (i32.shl
            (get_local $6)
            (i32.const 3)
          )
        )
        (get_local $5)
      )
      (set_local $8
        (i32.add
          (get_local $6)
          (i32.const 1)
        )
      )
      (if
        (i32.lt_s
          (get_local $6)
          (get_local $15)
        )
        (block
          (set_local $6
            (get_local $8)
          )
          (br $while-in1)
        )
      )
    )
    (set_local $22
      (i32.gt_s
        (get_local $10)
        (i32.const 0)
      )
    )
    (set_local $23
      (i32.sub
        (i32.const 24)
        (get_local $10)
      )
    )
    (set_local $26
      (i32.sub
        (i32.const 23)
        (get_local $10)
      )
    )
    (set_local $27
      (i32.gt_s
        (get_local $3)
        (i32.const 0)
      )
    )
    (set_local $28
      (i32.eqz
        (get_local $10)
      )
    )
    (set_local $6
      (get_local $15)
    )
    (block $do-once18
      (block $jumpthreading$inner$3
        (block $jumpthreading$inner$2
          (loop $label$continue$L17
            (set_local $5
              (f64.load
                (i32.add
                  (get_local $16)
                  (i32.shl
                    (get_local $6)
                    (i32.const 3)
                  )
                )
              )
            )
            (if
              (tee_local $13
                (i32.gt_s
                  (get_local $6)
                  (i32.const 0)
                )
              )
              (block
                (set_local $8
                  (get_local $6)
                )
                (set_local $7
                  (i32.const 0)
                )
                (loop $while-in5
                  (i32.store
                    (i32.add
                      (get_local $14)
                      (i32.shl
                        (get_local $7)
                        (i32.const 2)
                      )
                    )
                    (call $f64-to-int
                      (f64.sub
                        (get_local $5)
                        (f64.mul
                          (tee_local $5
                            (f64.convert_s/i32
                              (call $f64-to-int
                                (f64.mul
                                  (get_local $5)
                                  (f64.const 5.9604644775390625e-08)
                                )
                              )
                            )
                          )
                          (f64.const 16777216)
                        )
                      )
                    )
                  )
                  (set_local $5
                    (f64.add
                      (get_local $5)
                      (f64.load
                        (i32.add
                          (get_local $16)
                          (i32.shl
                            (tee_local $9
                              (i32.add
                                (get_local $8)
                                (i32.const -1)
                              )
                            )
                            (i32.const 3)
                          )
                        )
                      )
                    )
                  )
                  (set_local $7
                    (i32.add
                      (get_local $7)
                      (i32.const 1)
                    )
                  )
                  (if
                    (i32.gt_s
                      (get_local $8)
                      (i32.const 1)
                    )
                    (block
                      (set_local $8
                        (get_local $9)
                      )
                      (br $while-in5)
                    )
                  )
                )
              )
            )
            (set_local $8
              (call $f64-to-int
                (tee_local $5
                  (f64.sub
                    (tee_local $5
                      (call $_scalbn
                        (get_local $5)
                        (get_local $10)
                      )
                    )
                    (f64.mul
                      (f64.floor
                        (f64.mul
                          (get_local $5)
                          (f64.const 0.125)
                        )
                      )
                      (f64.const 8)
                    )
                  )
                )
              )
            )
            (set_local $5
              (f64.sub
                (get_local $5)
                (f64.convert_s/i32
                  (get_local $8)
                )
              )
            )
            (block $jumpthreading$outer$1
              (block $jumpthreading$inner$1
                (block $jumpthreading$inner$0
                  (if
                    (get_local $22)
                    (block
                      (set_local $7
                        (i32.shr_s
                          (tee_local $19
                            (i32.load
                              (tee_local $9
                                (i32.add
                                  (get_local $14)
                                  (i32.shl
                                    (i32.add
                                      (get_local $6)
                                      (i32.const -1)
                                    )
                                    (i32.const 2)
                                  )
                                )
                              )
                            )
                          )
                          (get_local $23)
                        )
                      )
                      (i32.store
                        (get_local $9)
                        (tee_local $9
                          (i32.sub
                            (get_local $19)
                            (i32.shl
                              (get_local $7)
                              (get_local $23)
                            )
                          )
                        )
                      )
                      (set_local $9
                        (i32.shr_s
                          (get_local $9)
                          (get_local $26)
                        )
                      )
                      (set_local $8
                        (i32.add
                          (get_local $7)
                          (get_local $8)
                        )
                      )
                      (br $jumpthreading$inner$0)
                    )
                    (if
                      (get_local $28)
                      (block
                        (set_local $9
                          (i32.shr_s
                            (i32.load
                              (i32.add
                                (get_local $14)
                                (i32.shl
                                  (i32.add
                                    (get_local $6)
                                    (i32.const -1)
                                  )
                                  (i32.const 2)
                                )
                              )
                            )
                            (i32.const 23)
                          )
                        )
                        (br $jumpthreading$inner$0)
                      )
                      (if
                        (f64.ge
                          (get_local $5)
                          (f64.const 0.5)
                        )
                        (block
                          (set_local $9
                            (i32.const 2)
                          )
                          (set_local $7
                            (get_local $8)
                          )
                          (br $jumpthreading$inner$1)
                        )
                        (set_local $9
                          (i32.const 0)
                        )
                      )
                    )
                  )
                  (br $jumpthreading$outer$1)
                )
                (if
                  (i32.gt_s
                    (get_local $9)
                    (i32.const 0)
                  )
                  (block
                    (set_local $7
                      (get_local $8)
                    )
                    (br $jumpthreading$inner$1)
                  )
                )
                (br $jumpthreading$outer$1)
              )
              (if
                (get_local $13)
                (block
                  (set_local $8
                    (i32.const 0)
                  )
                  (set_local $13
                    (i32.const 0)
                  )
                  (loop $while-in7
                    (set_local $19
                      (i32.load
                        (tee_local $24
                          (i32.add
                            (get_local $14)
                            (i32.shl
                              (get_local $13)
                              (i32.const 2)
                            )
                          )
                        )
                      )
                    )
                    (if
                      (get_local $8)
                      (i32.store
                        (get_local $24)
                        (i32.sub
                          (i32.const 16777215)
                          (get_local $19)
                        )
                      )
                      (set_local $8
                        (if i32
                          (get_local $19)
                          (block i32
                            (i32.store
                              (get_local $24)
                              (i32.sub
                                (i32.const 16777216)
                                (get_local $19)
                              )
                            )
                            (i32.const 1)
                          )
                          (i32.const 0)
                        )
                      )
                    )
                    (br_if $while-in7
                      (i32.ne
                        (tee_local $13
                          (i32.add
                            (get_local $13)
                            (i32.const 1)
                          )
                        )
                        (get_local $6)
                      )
                    )
                    (set_local $13
                      (get_local $8)
                    )
                  )
                )
                (set_local $13
                  (i32.const 0)
                )
              )
              (set_local $8
                (i32.add
                  (get_local $7)
                  (i32.const 1)
                )
              )
              (block $label$break$L42
                (if
                  (get_local $22)
                  (block $switch-default
                    (block $switch-case9
                      (block $switch-case
                        (br_table $switch-case $switch-case9 $switch-default
                          (i32.sub
                            (get_local $10)
                            (i32.const 1)
                          )
                        )
                      )
                      (i32.store
                        (tee_local $7
                          (i32.add
                            (get_local $14)
                            (i32.shl
                              (i32.add
                                (get_local $6)
                                (i32.const -1)
                              )
                              (i32.const 2)
                            )
                          )
                        )
                        (i32.and
                          (i32.load
                            (get_local $7)
                          )
                          (i32.const 8388607)
                        )
                      )
                      (br $label$break$L42)
                    )
                    (i32.store
                      (tee_local $7
                        (i32.add
                          (get_local $14)
                          (i32.shl
                            (i32.add
                              (get_local $6)
                              (i32.const -1)
                            )
                            (i32.const 2)
                          )
                        )
                      )
                      (i32.and
                        (i32.load
                          (get_local $7)
                        )
                        (i32.const 4194303)
                      )
                    )
                  )
                )
              )
              (if
                (i32.eq
                  (get_local $9)
                  (i32.const 2)
                )
                (block
                  (set_local $5
                    (f64.sub
                      (f64.const 1)
                      (get_local $5)
                    )
                  )
                  (set_local $9
                    (if i32
                      (get_local $13)
                      (block i32
                        (set_local $5
                          (f64.sub
                            (get_local $5)
                            (call $_scalbn
                              (f64.const 1)
                              (get_local $10)
                            )
                          )
                        )
                        (i32.const 2)
                      )
                      (i32.const 2)
                    )
                  )
                )
              )
            )
            (br_if $jumpthreading$inner$3
              (f64.ne
                (get_local $5)
                (f64.const 0)
              )
            )
            (if
              (i32.gt_s
                (get_local $6)
                (get_local $15)
              )
              (block
                (set_local $13
                  (i32.const 0)
                )
                (set_local $7
                  (get_local $6)
                )
                (loop $while-in11
                  (set_local $13
                    (i32.or
                      (i32.load
                        (i32.add
                          (get_local $14)
                          (i32.shl
                            (tee_local $7
                              (i32.add
                                (get_local $7)
                                (i32.const -1)
                              )
                            )
                            (i32.const 2)
                          )
                        )
                      )
                      (get_local $13)
                    )
                  )
                  (br_if $while-in11
                    (i32.gt_s
                      (get_local $7)
                      (get_local $15)
                    )
                  )
                )
                (if
                  (get_local $13)
                  (block
                    (set_local $0
                      (get_local $10)
                    )
                    (br $jumpthreading$inner$2)
                  )
                  (set_local $7
                    (i32.const 1)
                  )
                )
              )
              (set_local $7
                (i32.const 1)
              )
            )
            (loop $while-in13
              (set_local $8
                (i32.add
                  (get_local $7)
                  (i32.const 1)
                )
              )
              (if
                (i32.eqz
                  (i32.load
                    (i32.add
                      (get_local $14)
                      (i32.shl
                        (i32.sub
                          (get_local $15)
                          (get_local $7)
                        )
                        (i32.const 2)
                      )
                    )
                  )
                )
                (block
                  (set_local $7
                    (get_local $8)
                  )
                  (br $while-in13)
                )
              )
            )
            (set_local $8
              (i32.add
                (get_local $7)
                (get_local $6)
              )
            )
            (if
              (i32.le_s
                (get_local $7)
                (i32.const 0)
              )
              (block
                (set_local $6
                  (get_local $8)
                )
                (br $label$continue$L17)
              )
            )
            (loop $while-in15
              (f64.store
                (i32.add
                  (get_local $20)
                  (i32.shl
                    (tee_local $9
                      (i32.add
                        (get_local $6)
                        (get_local $3)
                      )
                    )
                    (i32.const 3)
                  )
                )
                (f64.convert_s/i32
                  (i32.load
                    (i32.add
                      (i32.shl
                        (i32.add
                          (tee_local $7
                            (i32.add
                              (get_local $6)
                              (i32.const 1)
                            )
                          )
                          (get_local $21)
                        )
                        (i32.const 2)
                      )
                      (i32.const 1536)
                    )
                  )
                )
              )
              (if
                (get_local $27)
                (block
                  (set_local $5
                    (f64.const 0)
                  )
                  (set_local $6
                    (i32.const 0)
                  )
                  (loop $while-in17
                    (set_local $5
                      (f64.add
                        (get_local $5)
                        (f64.mul
                          (f64.load
                            (i32.add
                              (get_local $0)
                              (i32.shl
                                (get_local $6)
                                (i32.const 3)
                              )
                            )
                          )
                          (f64.load
                            (i32.add
                              (get_local $20)
                              (i32.shl
                                (i32.sub
                                  (get_local $9)
                                  (get_local $6)
                                )
                                (i32.const 3)
                              )
                            )
                          )
                        )
                      )
                    )
                    (br_if $while-in17
                      (i32.ne
                        (tee_local $6
                          (i32.add
                            (get_local $6)
                            (i32.const 1)
                          )
                        )
                        (get_local $3)
                      )
                    )
                  )
                )
                (set_local $5
                  (f64.const 0)
                )
              )
              (f64.store
                (i32.add
                  (get_local $16)
                  (i32.shl
                    (get_local $7)
                    (i32.const 3)
                  )
                )
                (get_local $5)
              )
              (if
                (i32.lt_s
                  (get_local $7)
                  (get_local $8)
                )
                (block
                  (set_local $6
                    (get_local $7)
                  )
                  (br $while-in15)
                )
                (block
                  (set_local $6
                    (get_local $8)
                  )
                  (br $label$continue$L17)
                )
              )
            )
          )
        )
        (loop $while-in21
          (set_local $0
            (i32.add
              (get_local $0)
              (i32.const -24)
            )
          )
          (br_if $while-in21
            (i32.eqz
              (i32.load
                (i32.add
                  (get_local $14)
                  (i32.shl
                    (tee_local $6
                      (i32.add
                        (get_local $6)
                        (i32.const -1)
                      )
                    )
                    (i32.const 2)
                  )
                )
              )
            )
          )
          (set_local $10
            (get_local $0)
          )
          (set_local $0
            (get_local $6)
          )
        )
        (br $do-once18)
      )
      (if
        (f64.ge
          (tee_local $5
            (call $_scalbn
              (get_local $5)
              (i32.sub
                (i32.const 0)
                (get_local $10)
              )
            )
          )
          (f64.const 16777216)
        )
        (block
          (i32.store
            (i32.add
              (get_local $14)
              (i32.shl
                (get_local $6)
                (i32.const 2)
              )
            )
            (call $f64-to-int
              (f64.sub
                (get_local $5)
                (f64.mul
                  (f64.convert_s/i32
                    (tee_local $3
                      (call $f64-to-int
                        (f64.mul
                          (get_local $5)
                          (f64.const 5.9604644775390625e-08)
                        )
                      )
                    )
                  )
                  (f64.const 16777216)
                )
              )
            )
          )
          (i32.store
            (i32.add
              (get_local $14)
              (i32.shl
                (tee_local $0
                  (i32.add
                    (get_local $6)
                    (i32.const 1)
                  )
                )
                (i32.const 2)
              )
            )
            (get_local $3)
          )
          (set_local $10
            (i32.add
              (get_local $25)
              (get_local $2)
            )
          )
        )
        (block
          (i32.store
            (i32.add
              (get_local $14)
              (i32.shl
                (get_local $6)
                (i32.const 2)
              )
            )
            (call $f64-to-int
              (get_local $5)
            )
          )
          (set_local $0
            (get_local $6)
          )
        )
      )
    )
    (if
      (tee_local $7
        (i32.gt_s
          (get_local $0)
          (i32.const -1)
        )
      )
      (block
        (set_local $5
          (call $_scalbn
            (f64.const 1)
            (get_local $10)
          )
        )
        (set_local $2
          (get_local $0)
        )
        (loop $while-in23
          (f64.store
            (i32.add
              (get_local $16)
              (i32.shl
                (get_local $2)
                (i32.const 3)
              )
            )
            (f64.mul
              (get_local $5)
              (f64.convert_s/i32
                (i32.load
                  (i32.add
                    (get_local $14)
                    (i32.shl
                      (get_local $2)
                      (i32.const 2)
                    )
                  )
                )
              )
            )
          )
          (set_local $5
            (f64.mul
              (get_local $5)
              (f64.const 5.9604644775390625e-08)
            )
          )
          (set_local $3
            (i32.add
              (get_local $2)
              (i32.const -1)
            )
          )
          (if
            (i32.gt_s
              (get_local $2)
              (i32.const 0)
            )
            (block
              (set_local $2
                (get_local $3)
              )
              (br $while-in23)
            )
          )
        )
        (if
          (get_local $7)
          (block
            (set_local $2
              (get_local $0)
            )
            (loop $while-in25
              (set_local $10
                (i32.sub
                  (get_local $0)
                  (get_local $2)
                )
              )
              (set_local $3
                (i32.const 0)
              )
              (set_local $5
                (f64.const 0)
              )
              (loop $while-in27
                (set_local $5
                  (f64.add
                    (get_local $5)
                    (f64.mul
                      (f64.load
                        (i32.add
                          (i32.shl
                            (get_local $3)
                            (i32.const 3)
                          )
                          (i32.const 1072)
                        )
                      )
                      (f64.load
                        (i32.add
                          (get_local $16)
                          (i32.shl
                            (i32.add
                              (get_local $3)
                              (get_local $2)
                            )
                            (i32.const 3)
                          )
                        )
                      )
                    )
                  )
                )
                (set_local $6
                  (i32.add
                    (get_local $3)
                    (i32.const 1)
                  )
                )
                (if
                  (i32.eqz
                    (i32.or
                      (i32.ge_s
                        (get_local $3)
                        (get_local $15)
                      )
                      (i32.ge_s
                        (get_local $3)
                        (get_local $10)
                      )
                    )
                  )
                  (block
                    (set_local $3
                      (get_local $6)
                    )
                    (br $while-in27)
                  )
                )
              )
              (f64.store
                (i32.add
                  (get_local $12)
                  (i32.shl
                    (get_local $10)
                    (i32.const 3)
                  )
                )
                (get_local $5)
              )
              (set_local $3
                (i32.add
                  (get_local $2)
                  (i32.const -1)
                )
              )
              (if
                (i32.gt_s
                  (get_local $2)
                  (i32.const 0)
                )
                (block
                  (set_local $2
                    (get_local $3)
                  )
                  (br $while-in25)
                )
              )
            )
          )
        )
      )
    )
    (block $switch-default46
      (block $switch-case45
        (block $switch-case33
          (block $switch-case32
            (br_table $switch-case32 $switch-case33 $switch-case33 $switch-case45 $switch-default46
              (i32.sub
                (get_local $4)
                (i32.const 0)
              )
            )
          )
          (if
            (get_local $7)
            (block
              (set_local $5
                (f64.const 0)
              )
              (loop $while-in31
                (set_local $5
                  (f64.add
                    (get_local $5)
                    (f64.load
                      (i32.add
                        (get_local $12)
                        (i32.shl
                          (get_local $0)
                          (i32.const 3)
                        )
                      )
                    )
                  )
                )
                (set_local $2
                  (i32.add
                    (get_local $0)
                    (i32.const -1)
                  )
                )
                (if
                  (i32.gt_s
                    (get_local $0)
                    (i32.const 0)
                  )
                  (block
                    (set_local $0
                      (get_local $2)
                    )
                    (br $while-in31)
                  )
                )
              )
            )
            (set_local $5
              (f64.const 0)
            )
          )
          (set_local $11
            (f64.neg
              (get_local $5)
            )
          )
          (f64.store
            (get_local $1)
            (if f64
              (get_local $9)
              (get_local $11)
              (get_local $5)
            )
          )
          (br $switch-default46)
        )
        (if
          (get_local $7)
          (block
            (set_local $5
              (f64.const 0)
            )
            (set_local $2
              (get_local $0)
            )
            (loop $while-in35
              (set_local $5
                (f64.add
                  (get_local $5)
                  (f64.load
                    (i32.add
                      (get_local $12)
                      (i32.shl
                        (get_local $2)
                        (i32.const 3)
                      )
                    )
                  )
                )
              )
              (set_local $3
                (i32.add
                  (get_local $2)
                  (i32.const -1)
                )
              )
              (if
                (i32.gt_s
                  (get_local $2)
                  (i32.const 0)
                )
                (block
                  (set_local $2
                    (get_local $3)
                  )
                  (br $while-in35)
                )
              )
            )
          )
          (set_local $5
            (f64.const 0)
          )
        )
        (set_local $11
          (f64.neg
            (get_local $5)
          )
        )
        (f64.store
          (get_local $1)
          (if f64
            (tee_local $4
              (i32.eqz
                (get_local $9)
              )
            )
            (get_local $5)
            (get_local $11)
          )
        )
        (set_local $5
          (f64.sub
            (f64.load
              (get_local $12)
            )
            (get_local $5)
          )
        )
        (if
          (i32.ge_s
            (get_local $0)
            (i32.const 1)
          )
          (block
            (set_local $2
              (i32.const 1)
            )
            (loop $while-in37
              (set_local $5
                (f64.add
                  (get_local $5)
                  (f64.load
                    (i32.add
                      (get_local $12)
                      (i32.shl
                        (get_local $2)
                        (i32.const 3)
                      )
                    )
                  )
                )
              )
              (set_local $3
                (i32.add
                  (get_local $2)
                  (i32.const 1)
                )
              )
              (if
                (i32.ne
                  (get_local $2)
                  (get_local $0)
                )
                (block
                  (set_local $2
                    (get_local $3)
                  )
                  (br $while-in37)
                )
              )
            )
          )
        )
        (set_local $11
          (f64.neg
            (get_local $5)
          )
        )
        (f64.store offset=8
          (get_local $1)
          (if f64
            (get_local $4)
            (get_local $5)
            (get_local $11)
          )
        )
        (br $switch-default46)
      )
      (if
        (i32.gt_s
          (get_local $0)
          (i32.const 0)
        )
        (block
          (set_local $2
            (get_local $0)
          )
          (set_local $5
            (f64.load
              (i32.add
                (get_local $12)
                (i32.shl
                  (get_local $0)
                  (i32.const 3)
                )
              )
            )
          )
          (loop $while-in40
            (set_local $11
              (f64.add
                (tee_local $17
                  (f64.load
                    (tee_local $4
                      (i32.add
                        (get_local $12)
                        (i32.shl
                          (tee_local $3
                            (i32.add
                              (get_local $2)
                              (i32.const -1)
                            )
                          )
                          (i32.const 3)
                        )
                      )
                    )
                  )
                )
                (get_local $5)
              )
            )
            (f64.store
              (i32.add
                (get_local $12)
                (i32.shl
                  (get_local $2)
                  (i32.const 3)
                )
              )
              (f64.add
                (get_local $5)
                (f64.sub
                  (get_local $17)
                  (get_local $11)
                )
              )
            )
            (f64.store
              (get_local $4)
              (get_local $11)
            )
            (if
              (i32.gt_s
                (get_local $2)
                (i32.const 1)
              )
              (block
                (set_local $2
                  (get_local $3)
                )
                (set_local $5
                  (get_local $11)
                )
                (br $while-in40)
              )
            )
          )
          (if
            (tee_local $4
              (i32.gt_s
                (get_local $0)
                (i32.const 1)
              )
            )
            (block
              (set_local $2
                (get_local $0)
              )
              (set_local $5
                (f64.load
                  (i32.add
                    (get_local $12)
                    (i32.shl
                      (get_local $0)
                      (i32.const 3)
                    )
                  )
                )
              )
              (loop $while-in42
                (set_local $11
                  (f64.add
                    (tee_local $17
                      (f64.load
                        (tee_local $6
                          (i32.add
                            (get_local $12)
                            (i32.shl
                              (tee_local $3
                                (i32.add
                                  (get_local $2)
                                  (i32.const -1)
                                )
                              )
                              (i32.const 3)
                            )
                          )
                        )
                      )
                    )
                    (get_local $5)
                  )
                )
                (f64.store
                  (i32.add
                    (get_local $12)
                    (i32.shl
                      (get_local $2)
                      (i32.const 3)
                    )
                  )
                  (f64.add
                    (get_local $5)
                    (f64.sub
                      (get_local $17)
                      (get_local $11)
                    )
                  )
                )
                (f64.store
                  (get_local $6)
                  (get_local $11)
                )
                (if
                  (i32.gt_s
                    (get_local $3)
                    (i32.const 1)
                  )
                  (block
                    (set_local $2
                      (get_local $3)
                    )
                    (set_local $5
                      (get_local $11)
                    )
                    (br $while-in42)
                  )
                )
              )
              (if
                (get_local $4)
                (block
                  (set_local $5
                    (f64.const 0)
                  )
                  (loop $while-in44
                    (set_local $5
                      (f64.add
                        (get_local $5)
                        (f64.load
                          (i32.add
                            (get_local $12)
                            (i32.shl
                              (get_local $0)
                              (i32.const 3)
                            )
                          )
                        )
                      )
                    )
                    (br_if $while-in44
                      (i32.gt_s
                        (tee_local $0
                          (i32.add
                            (get_local $0)
                            (i32.const -1)
                          )
                        )
                        (i32.const 1)
                      )
                    )
                  )
                )
                (set_local $5
                  (f64.const 0)
                )
              )
            )
            (set_local $5
              (f64.const 0)
            )
          )
        )
        (set_local $5
          (f64.const 0)
        )
      )
      (set_local $11
        (f64.load
          (get_local $12)
        )
      )
      (set_local $17
        (f64.load offset=8
          (get_local $12)
        )
      )
      (if
        (get_local $9)
        (block
          (f64.store
            (get_local $1)
            (f64.neg
              (get_local $11)
            )
          )
          (f64.store offset=8
            (get_local $1)
            (f64.neg
              (get_local $17)
            )
          )
          (f64.store offset=16
            (get_local $1)
            (f64.neg
              (get_local $5)
            )
          )
        )
        (block
          (f64.store
            (get_local $1)
            (get_local $11)
          )
          (f64.store offset=8
            (get_local $1)
            (get_local $17)
          )
          (f64.store offset=16
            (get_local $1)
            (get_local $5)
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $18)
    )
    (i32.and
      (get_local $8)
      (i32.const 7)
    )
  )
  (func $___sin (param $0 f64) (param $1 f64) (param $2 i32) (result f64)
    (local $3 f64)
    (local $4 f64)
    (local $5 f64)
    (set_local $5
      (f64.add
        (f64.mul
          (f64.mul
            (tee_local $3
              (f64.mul
                (get_local $0)
                (get_local $0)
              )
            )
            (f64.mul
              (get_local $3)
              (get_local $3)
            )
          )
          (f64.add
            (f64.mul
              (get_local $3)
              (f64.const 1.58969099521155e-10)
            )
            (f64.const -2.5050760253406863e-08)
          )
        )
        (f64.add
          (f64.mul
            (get_local $3)
            (f64.add
              (f64.mul
                (get_local $3)
                (f64.const 2.7557313707070068e-06)
              )
              (f64.const -1.984126982985795e-04)
            )
          )
          (f64.const 0.00833333333332249)
        )
      )
    )
    (set_local $4
      (f64.mul
        (get_local $3)
        (get_local $0)
      )
    )
    (tee_local $0
      (if f64
        (get_local $2)
        (f64.sub
          (get_local $0)
          (f64.add
            (f64.mul
              (get_local $4)
              (f64.const 0.16666666666666632)
            )
            (f64.sub
              (f64.mul
                (get_local $3)
                (f64.sub
                  (f64.mul
                    (get_local $1)
                    (f64.const 0.5)
                  )
                  (f64.mul
                    (get_local $4)
                    (get_local $5)
                  )
                )
              )
              (get_local $1)
            )
          )
        )
        (f64.add
          (f64.mul
            (get_local $4)
            (f64.add
              (f64.mul
                (get_local $3)
                (get_local $5)
              )
              (f64.const -0.16666666666666632)
            )
          )
          (get_local $0)
        )
      )
    )
  )
  (func $_rand (result i32)
    (local $0 i64)
    (i64.store
      (i32.const 5232)
      (tee_local $0
        (i64.add
          (i64.mul
            (i64.load
              (i32.const 5232)
            )
            (i64.const 6364136223846793005)
          )
          (i64.const 1)
        )
      )
    )
    (i32.wrap/i64
      (i64.shr_u
        (get_local $0)
        (i64.const 33)
      )
    )
  )
  (func $___overflow (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (set_local $3
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (i32.store8
      (tee_local $4
        (get_local $3)
      )
      (tee_local $7
        (i32.and
          (get_local $1)
          (i32.const 255)
        )
      )
    )
    (block $do-once
      (block $jumpthreading$inner$0
        (br_if $jumpthreading$inner$0
          (tee_local $5
            (i32.load
              (tee_local $2
                (i32.add
                  (get_local $0)
                  (i32.const 16)
                )
              )
            )
          )
        )
        (if
          (call $___towrite
            (get_local $0)
          )
          (set_local $1
            (i32.const -1)
          )
          (block
            (set_local $5
              (i32.load
                (get_local $2)
              )
            )
            (br $jumpthreading$inner$0)
          )
        )
        (br $do-once)
      )
      (if
        (i32.lt_u
          (tee_local $6
            (i32.load
              (tee_local $2
                (i32.add
                  (get_local $0)
                  (i32.const 20)
                )
              )
            )
          )
          (get_local $5)
        )
        (if
          (i32.ne
            (tee_local $1
              (i32.and
                (get_local $1)
                (i32.const 255)
              )
            )
            (i32.load8_s offset=75
              (get_local $0)
            )
          )
          (block
            (i32.store
              (get_local $2)
              (i32.add
                (get_local $6)
                (i32.const 1)
              )
            )
            (i32.store8
              (get_local $6)
              (get_local $7)
            )
            (br $do-once)
          )
        )
      )
      (set_local $1
        (if i32
          (i32.eq
            (call_indirect $FUNCSIG$iiii
              (get_local $0)
              (get_local $4)
              (i32.const 1)
              (i32.add
                (i32.and
                  (i32.load offset=36
                    (get_local $0)
                  )
                  (i32.const 7)
                )
                (i32.const 0)
              )
            )
            (i32.const 1)
          )
          (i32.load8_u
            (get_local $4)
          )
          (i32.const -1)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $3)
    )
    (get_local $1)
  )
  (func $_fputc (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (block $do-once
      (block $jumpthreading$inner$1
        (br_if $jumpthreading$inner$1
          (i32.lt_s
            (i32.load offset=76
              (get_local $1)
            )
            (i32.const 0)
          )
        )
        (br_if $jumpthreading$inner$1
          (i32.eqz
            (call $___lockfile
              (get_local $1)
            )
          )
        )
        (set_local $0
          (block $jumpthreading$outer$0 i32
            (block $jumpthreading$inner$0
              (br_if $jumpthreading$inner$0
                (i32.eq
                  (i32.load8_s offset=75
                    (get_local $1)
                  )
                  (get_local $0)
                )
              )
              (br_if $jumpthreading$inner$0
                (i32.ge_u
                  (tee_local $2
                    (i32.load
                      (tee_local $3
                        (i32.add
                          (get_local $1)
                          (i32.const 20)
                        )
                      )
                    )
                  )
                  (i32.load offset=16
                    (get_local $1)
                  )
                )
              )
              (i32.store
                (get_local $3)
                (i32.add
                  (get_local $2)
                  (i32.const 1)
                )
              )
              (i32.store8
                (get_local $2)
                (get_local $0)
              )
              (br $jumpthreading$outer$0
                (i32.and
                  (get_local $0)
                  (i32.const 255)
                )
              )
            )
            (call $___overflow
              (get_local $1)
              (get_local $0)
            )
          )
        )
        (call $__ZN12EventHandlerC2Ev
          (get_local $1)
        )
        (br $do-once)
      )
      (if
        (i32.ne
          (i32.load8_s offset=75
            (get_local $1)
          )
          (get_local $0)
        )
        (if
          (i32.lt_u
            (tee_local $2
              (i32.load
                (tee_local $3
                  (i32.add
                    (get_local $1)
                    (i32.const 20)
                  )
                )
              )
            )
            (i32.load offset=16
              (get_local $1)
            )
          )
          (block
            (i32.store
              (get_local $3)
              (i32.add
                (get_local $2)
                (i32.const 1)
              )
            )
            (i32.store8
              (get_local $2)
              (get_local $0)
            )
            (set_local $0
              (i32.and
                (get_local $0)
                (i32.const 255)
              )
            )
            (br $do-once)
          )
        )
      )
      (set_local $0
        (call $___overflow
          (get_local $1)
          (get_local $0)
        )
      )
    )
    (get_local $0)
  )
  (func $_fputs (param $0 i32) (param $1 i32) (result i32)
    (i32.add
      (call $_fwrite
        (get_local $0)
        (call $_strlen
          (get_local $0)
        )
        (i32.const 1)
        (get_local $1)
      )
      (i32.const -1)
    )
  )
  (func $_fwrite (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $4
      (i32.mul
        (get_local $2)
        (get_local $1)
      )
    )
    (if
      (i32.gt_s
        (i32.load offset=76
          (get_local $3)
        )
        (i32.const -1)
      )
      (block
        (set_local $5
          (i32.eqz
            (call $___lockfile
              (get_local $3)
            )
          )
        )
        (set_local $0
          (call $___fwritex
            (get_local $0)
            (get_local $4)
            (get_local $3)
          )
        )
        (if
          (i32.eqz
            (get_local $5)
          )
          (call $__ZN12EventHandlerC2Ev
            (get_local $3)
          )
        )
      )
      (set_local $0
        (call $___fwritex
          (get_local $0)
          (get_local $4)
          (get_local $3)
        )
      )
    )
    (if
      (i32.ne
        (get_local $0)
        (get_local $4)
      )
      (set_local $2
        (call $i32u-div
          (get_local $0)
          (get_local $1)
        )
      )
    )
    (get_local $2)
  )
  (func $_puts (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (set_local $2
      (if i32
        (i32.gt_s
          (i32.load offset=76
            (tee_local $1
              (i32.load
                (i32.const 1404)
              )
            )
          )
          (i32.const -1)
        )
        (call $___lockfile
          (get_local $1)
        )
        (i32.const 0)
      )
    )
    (set_local $0
      (block $do-once i32
        (if i32
          (i32.lt_s
            (call $_fputs
              (get_local $0)
              (get_local $1)
            )
            (i32.const 0)
          )
          (i32.const 1)
          (block i32
            (if
              (i32.ne
                (i32.load8_s offset=75
                  (get_local $1)
                )
                (i32.const 10)
              )
              (if
                (i32.lt_u
                  (tee_local $0
                    (i32.load
                      (tee_local $3
                        (i32.add
                          (get_local $1)
                          (i32.const 20)
                        )
                      )
                    )
                  )
                  (i32.load offset=16
                    (get_local $1)
                  )
                )
                (block
                  (i32.store
                    (get_local $3)
                    (i32.add
                      (get_local $0)
                      (i32.const 1)
                    )
                  )
                  (i32.store8
                    (get_local $0)
                    (i32.const 10)
                  )
                  (br $do-once
                    (i32.const 0)
                  )
                )
              )
            )
            (i32.lt_s
              (call $___overflow
                (get_local $1)
                (i32.const 10)
              )
              (i32.const 0)
            )
          )
        )
      )
    )
    (if
      (get_local $2)
      (call $__ZN12EventHandlerC2Ev
        (get_local $1)
      )
    )
    (i32.shr_s
      (i32.shl
        (get_local $0)
        (i32.const 31)
      )
      (i32.const 31)
    )
  )
  (func $_malloc (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 i32)
    (local $16 i32)
    (local $17 i32)
    (local $18 i32)
    (local $19 i32)
    (local $20 i32)
    (set_local $13
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $15
      (get_local $13)
    )
    (block $do-once
      (if
        (i32.lt_u
          (get_local $0)
          (i32.const 245)
        )
        (block
          (set_local $2
            (i32.and
              (i32.add
                (get_local $0)
                (i32.const 11)
              )
              (i32.const -8)
            )
          )
          (if
            (i32.and
              (tee_local $1
                (i32.shr_u
                  (tee_local $7
                    (i32.load
                      (i32.const 5288)
                    )
                  )
                  (tee_local $0
                    (i32.shr_u
                      (if i32
                        (i32.lt_u
                          (get_local $0)
                          (i32.const 11)
                        )
                        (tee_local $2
                          (i32.const 16)
                        )
                        (get_local $2)
                      )
                      (i32.const 3)
                    )
                  )
                )
              )
              (i32.const 3)
            )
            (block
              (set_local $0
                (i32.load
                  (tee_local $6
                    (i32.add
                      (tee_local $1
                        (i32.load
                          (tee_local $5
                            (i32.add
                              (tee_local $3
                                (i32.add
                                  (i32.shl
                                    (i32.shl
                                      (tee_local $2
                                        (i32.add
                                          (i32.xor
                                            (i32.and
                                              (get_local $1)
                                              (i32.const 1)
                                            )
                                            (i32.const 1)
                                          )
                                          (get_local $0)
                                        )
                                      )
                                      (i32.const 1)
                                    )
                                    (i32.const 2)
                                  )
                                  (i32.const 5328)
                                )
                              )
                              (i32.const 8)
                            )
                          )
                        )
                      )
                      (i32.const 8)
                    )
                  )
                )
              )
              (if
                (i32.eq
                  (get_local $3)
                  (get_local $0)
                )
                (i32.store
                  (i32.const 5288)
                  (i32.and
                    (get_local $7)
                    (i32.xor
                      (i32.shl
                        (i32.const 1)
                        (get_local $2)
                      )
                      (i32.const -1)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $0)
                      (i32.load
                        (i32.const 5304)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $4
                          (i32.add
                            (get_local $0)
                            (i32.const 12)
                          )
                        )
                      )
                      (get_local $1)
                    )
                    (block
                      (i32.store
                        (get_local $4)
                        (get_local $3)
                      )
                      (i32.store
                        (get_local $5)
                        (get_local $0)
                      )
                    )
                    (call $_abort)
                  )
                )
              )
              (i32.store offset=4
                (get_local $1)
                (i32.or
                  (tee_local $0
                    (i32.shl
                      (get_local $2)
                      (i32.const 3)
                    )
                  )
                  (i32.const 3)
                )
              )
              (i32.store
                (tee_local $0
                  (i32.add
                    (i32.add
                      (get_local $1)
                      (get_local $0)
                    )
                    (i32.const 4)
                  )
                )
                (i32.or
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 1)
                )
              )
              (set_global $STACKTOP
                (get_local $13)
              )
              (return
                (get_local $6)
              )
            )
          )
          (if
            (i32.gt_u
              (get_local $2)
              (tee_local $16
                (i32.load
                  (i32.const 5296)
                )
              )
            )
            (block
              (if
                (get_local $1)
                (block
                  (set_local $0
                    (i32.and
                      (i32.shr_u
                        (tee_local $1
                          (i32.add
                            (i32.and
                              (tee_local $0
                                (i32.and
                                  (i32.shl
                                    (get_local $1)
                                    (get_local $0)
                                  )
                                  (i32.or
                                    (tee_local $0
                                      (i32.shl
                                        (i32.const 2)
                                        (get_local $0)
                                      )
                                    )
                                    (i32.sub
                                      (i32.const 0)
                                      (get_local $0)
                                    )
                                  )
                                )
                              )
                              (i32.sub
                                (i32.const 0)
                                (get_local $0)
                              )
                            )
                            (i32.const -1)
                          )
                        )
                        (i32.const 12)
                      )
                      (i32.const 16)
                    )
                  )
                  (set_local $0
                    (i32.load
                      (tee_local $10
                        (i32.add
                          (tee_local $1
                            (i32.load
                              (tee_local $8
                                (i32.add
                                  (tee_local $4
                                    (i32.add
                                      (i32.shl
                                        (i32.shl
                                          (tee_local $5
                                            (i32.add
                                              (i32.or
                                                (i32.or
                                                  (i32.or
                                                    (i32.or
                                                      (tee_local $5
                                                        (i32.and
                                                          (i32.shr_u
                                                            (tee_local $1
                                                              (i32.shr_u
                                                                (get_local $1)
                                                                (get_local $0)
                                                              )
                                                            )
                                                            (i32.const 5)
                                                          )
                                                          (i32.const 8)
                                                        )
                                                      )
                                                      (get_local $0)
                                                    )
                                                    (tee_local $1
                                                      (i32.and
                                                        (i32.shr_u
                                                          (tee_local $0
                                                            (i32.shr_u
                                                              (get_local $1)
                                                              (get_local $5)
                                                            )
                                                          )
                                                          (i32.const 2)
                                                        )
                                                        (i32.const 4)
                                                      )
                                                    )
                                                  )
                                                  (tee_local $1
                                                    (i32.and
                                                      (i32.shr_u
                                                        (tee_local $0
                                                          (i32.shr_u
                                                            (get_local $0)
                                                            (get_local $1)
                                                          )
                                                        )
                                                        (i32.const 1)
                                                      )
                                                      (i32.const 2)
                                                    )
                                                  )
                                                )
                                                (tee_local $1
                                                  (i32.and
                                                    (i32.shr_u
                                                      (tee_local $0
                                                        (i32.shr_u
                                                          (get_local $0)
                                                          (get_local $1)
                                                        )
                                                      )
                                                      (i32.const 1)
                                                    )
                                                    (i32.const 1)
                                                  )
                                                )
                                              )
                                              (i32.shr_u
                                                (get_local $0)
                                                (get_local $1)
                                              )
                                            )
                                          )
                                          (i32.const 1)
                                        )
                                        (i32.const 2)
                                      )
                                      (i32.const 5328)
                                    )
                                  )
                                  (i32.const 8)
                                )
                              )
                            )
                          )
                          (i32.const 8)
                        )
                      )
                    )
                  )
                  (if
                    (i32.eq
                      (get_local $4)
                      (get_local $0)
                    )
                    (i32.store
                      (i32.const 5288)
                      (tee_local $3
                        (i32.and
                          (get_local $7)
                          (i32.xor
                            (i32.shl
                              (i32.const 1)
                              (get_local $5)
                            )
                            (i32.const -1)
                          )
                        )
                      )
                    )
                    (block
                      (if
                        (i32.lt_u
                          (get_local $0)
                          (i32.load
                            (i32.const 5304)
                          )
                        )
                        (call $_abort)
                      )
                      (if
                        (i32.eq
                          (i32.load
                            (tee_local $12
                              (i32.add
                                (get_local $0)
                                (i32.const 12)
                              )
                            )
                          )
                          (get_local $1)
                        )
                        (block
                          (i32.store
                            (get_local $12)
                            (get_local $4)
                          )
                          (i32.store
                            (get_local $8)
                            (get_local $0)
                          )
                          (set_local $3
                            (get_local $7)
                          )
                        )
                        (call $_abort)
                      )
                    )
                  )
                  (i32.store offset=4
                    (get_local $1)
                    (i32.or
                      (get_local $2)
                      (i32.const 3)
                    )
                  )
                  (i32.store offset=4
                    (tee_local $8
                      (i32.add
                        (get_local $1)
                        (get_local $2)
                      )
                    )
                    (i32.or
                      (tee_local $4
                        (i32.sub
                          (i32.shl
                            (get_local $5)
                            (i32.const 3)
                          )
                          (get_local $2)
                        )
                      )
                      (i32.const 1)
                    )
                  )
                  (i32.store
                    (i32.add
                      (get_local $8)
                      (get_local $4)
                    )
                    (get_local $4)
                  )
                  (if
                    (get_local $16)
                    (block
                      (set_local $5
                        (i32.load
                          (i32.const 5308)
                        )
                      )
                      (set_local $0
                        (i32.add
                          (i32.shl
                            (i32.shl
                              (tee_local $1
                                (i32.shr_u
                                  (get_local $16)
                                  (i32.const 3)
                                )
                              )
                              (i32.const 1)
                            )
                            (i32.const 2)
                          )
                          (i32.const 5328)
                        )
                      )
                      (if
                        (i32.and
                          (get_local $3)
                          (tee_local $1
                            (i32.shl
                              (i32.const 1)
                              (get_local $1)
                            )
                          )
                        )
                        (if
                          (i32.lt_u
                            (tee_local $2
                              (i32.load
                                (tee_local $1
                                  (i32.add
                                    (get_local $0)
                                    (i32.const 8)
                                  )
                                )
                              )
                            )
                            (i32.load
                              (i32.const 5304)
                            )
                          )
                          (call $_abort)
                          (block
                            (set_local $6
                              (get_local $2)
                            )
                            (set_local $11
                              (get_local $1)
                            )
                          )
                        )
                        (block
                          (i32.store
                            (i32.const 5288)
                            (i32.or
                              (get_local $3)
                              (get_local $1)
                            )
                          )
                          (set_local $6
                            (get_local $0)
                          )
                          (set_local $11
                            (i32.add
                              (get_local $0)
                              (i32.const 8)
                            )
                          )
                        )
                      )
                      (i32.store
                        (get_local $11)
                        (get_local $5)
                      )
                      (i32.store offset=12
                        (get_local $6)
                        (get_local $5)
                      )
                      (i32.store offset=8
                        (get_local $5)
                        (get_local $6)
                      )
                      (i32.store offset=12
                        (get_local $5)
                        (get_local $0)
                      )
                    )
                  )
                  (i32.store
                    (i32.const 5296)
                    (get_local $4)
                  )
                  (i32.store
                    (i32.const 5308)
                    (get_local $8)
                  )
                  (set_global $STACKTOP
                    (get_local $13)
                  )
                  (return
                    (get_local $10)
                  )
                )
              )
              (if
                (tee_local $11
                  (i32.load
                    (i32.const 5292)
                  )
                )
                (block
                  (set_local $0
                    (i32.and
                      (i32.shr_u
                        (tee_local $1
                          (i32.add
                            (i32.and
                              (get_local $11)
                              (i32.sub
                                (i32.const 0)
                                (get_local $11)
                              )
                            )
                            (i32.const -1)
                          )
                        )
                        (i32.const 12)
                      )
                      (i32.const 16)
                    )
                  )
                  (set_local $8
                    (tee_local $0
                      (i32.load
                        (i32.add
                          (i32.shl
                            (i32.add
                              (i32.or
                                (i32.or
                                  (i32.or
                                    (i32.or
                                      (tee_local $3
                                        (i32.and
                                          (i32.shr_u
                                            (tee_local $1
                                              (i32.shr_u
                                                (get_local $1)
                                                (get_local $0)
                                              )
                                            )
                                            (i32.const 5)
                                          )
                                          (i32.const 8)
                                        )
                                      )
                                      (get_local $0)
                                    )
                                    (tee_local $1
                                      (i32.and
                                        (i32.shr_u
                                          (tee_local $0
                                            (i32.shr_u
                                              (get_local $1)
                                              (get_local $3)
                                            )
                                          )
                                          (i32.const 2)
                                        )
                                        (i32.const 4)
                                      )
                                    )
                                  )
                                  (tee_local $1
                                    (i32.and
                                      (i32.shr_u
                                        (tee_local $0
                                          (i32.shr_u
                                            (get_local $0)
                                            (get_local $1)
                                          )
                                        )
                                        (i32.const 1)
                                      )
                                      (i32.const 2)
                                    )
                                  )
                                )
                                (tee_local $1
                                  (i32.and
                                    (i32.shr_u
                                      (tee_local $0
                                        (i32.shr_u
                                          (get_local $0)
                                          (get_local $1)
                                        )
                                      )
                                      (i32.const 1)
                                    )
                                    (i32.const 1)
                                  )
                                )
                              )
                              (i32.shr_u
                                (get_local $0)
                                (get_local $1)
                              )
                            )
                            (i32.const 2)
                          )
                          (i32.const 5592)
                        )
                      )
                    )
                  )
                  (set_local $3
                    (get_local $0)
                  )
                  (set_local $6
                    (i32.sub
                      (i32.and
                        (i32.load offset=4
                          (get_local $0)
                        )
                        (i32.const -8)
                      )
                      (get_local $2)
                    )
                  )
                  (loop $while-in
                    (block $while-out
                      (if
                        (i32.eqz
                          (tee_local $0
                            (i32.load offset=16
                              (get_local $8)
                            )
                          )
                        )
                        (br_if $while-out
                          (i32.eqz
                            (tee_local $0
                              (i32.load offset=20
                                (get_local $8)
                              )
                            )
                          )
                        )
                      )
                      (if
                        (i32.eqz
                          (tee_local $10
                            (i32.lt_u
                              (tee_local $1
                                (i32.sub
                                  (i32.and
                                    (i32.load offset=4
                                      (get_local $0)
                                    )
                                    (i32.const -8)
                                  )
                                  (get_local $2)
                                )
                              )
                              (get_local $6)
                            )
                          )
                        )
                        (set_local $1
                          (get_local $6)
                        )
                      )
                      (set_local $8
                        (get_local $0)
                      )
                      (if
                        (get_local $10)
                        (set_local $3
                          (get_local $0)
                        )
                      )
                      (set_local $6
                        (get_local $1)
                      )
                      (br $while-in)
                    )
                  )
                  (if
                    (i32.lt_u
                      (get_local $3)
                      (tee_local $15
                        (i32.load
                          (i32.const 5304)
                        )
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.ge_u
                      (get_local $3)
                      (tee_local $9
                        (i32.add
                          (get_local $3)
                          (get_local $2)
                        )
                      )
                    )
                    (call $_abort)
                  )
                  (set_local $12
                    (i32.load offset=24
                      (get_local $3)
                    )
                  )
                  (block $do-once4
                    (if
                      (i32.eq
                        (tee_local $0
                          (i32.load offset=12
                            (get_local $3)
                          )
                        )
                        (get_local $3)
                      )
                      (block
                        (if
                          (i32.eqz
                            (tee_local $0
                              (i32.load
                                (tee_local $1
                                  (i32.add
                                    (get_local $3)
                                    (i32.const 20)
                                  )
                                )
                              )
                            )
                          )
                          (if
                            (i32.eqz
                              (tee_local $0
                                (i32.load
                                  (tee_local $1
                                    (i32.add
                                      (get_local $3)
                                      (i32.const 16)
                                    )
                                  )
                                )
                              )
                            )
                            (block
                              (set_local $5
                                (i32.const 0)
                              )
                              (br $do-once4)
                            )
                          )
                        )
                        (loop $while-in7
                          (if
                            (tee_local $10
                              (i32.load
                                (tee_local $8
                                  (i32.add
                                    (get_local $0)
                                    (i32.const 20)
                                  )
                                )
                              )
                            )
                            (block
                              (set_local $0
                                (get_local $10)
                              )
                              (set_local $1
                                (get_local $8)
                              )
                              (br $while-in7)
                            )
                          )
                          (if
                            (tee_local $10
                              (i32.load
                                (tee_local $8
                                  (i32.add
                                    (get_local $0)
                                    (i32.const 16)
                                  )
                                )
                              )
                            )
                            (block
                              (set_local $0
                                (get_local $10)
                              )
                              (set_local $1
                                (get_local $8)
                              )
                              (br $while-in7)
                            )
                          )
                        )
                        (if
                          (i32.lt_u
                            (get_local $1)
                            (get_local $15)
                          )
                          (call $_abort)
                          (block
                            (i32.store
                              (get_local $1)
                              (i32.const 0)
                            )
                            (set_local $5
                              (get_local $0)
                            )
                          )
                        )
                      )
                      (block
                        (if
                          (i32.lt_u
                            (tee_local $1
                              (i32.load offset=8
                                (get_local $3)
                              )
                            )
                            (get_local $15)
                          )
                          (call $_abort)
                        )
                        (if
                          (i32.ne
                            (i32.load
                              (tee_local $8
                                (i32.add
                                  (get_local $1)
                                  (i32.const 12)
                                )
                              )
                            )
                            (get_local $3)
                          )
                          (call $_abort)
                        )
                        (if
                          (i32.eq
                            (i32.load
                              (tee_local $10
                                (i32.add
                                  (get_local $0)
                                  (i32.const 8)
                                )
                              )
                            )
                            (get_local $3)
                          )
                          (block
                            (i32.store
                              (get_local $8)
                              (get_local $0)
                            )
                            (i32.store
                              (get_local $10)
                              (get_local $1)
                            )
                            (set_local $5
                              (get_local $0)
                            )
                          )
                          (call $_abort)
                        )
                      )
                    )
                  )
                  (block $do-once8
                    (if
                      (get_local $12)
                      (block
                        (if
                          (i32.eq
                            (get_local $3)
                            (i32.load
                              (tee_local $1
                                (i32.add
                                  (i32.shl
                                    (tee_local $0
                                      (i32.load offset=28
                                        (get_local $3)
                                      )
                                    )
                                    (i32.const 2)
                                  )
                                  (i32.const 5592)
                                )
                              )
                            )
                          )
                          (block
                            (i32.store
                              (get_local $1)
                              (get_local $5)
                            )
                            (if
                              (i32.eqz
                                (get_local $5)
                              )
                              (block
                                (i32.store
                                  (i32.const 5292)
                                  (i32.and
                                    (get_local $11)
                                    (i32.xor
                                      (i32.shl
                                        (i32.const 1)
                                        (get_local $0)
                                      )
                                      (i32.const -1)
                                    )
                                  )
                                )
                                (br $do-once8)
                              )
                            )
                          )
                          (block
                            (if
                              (i32.lt_u
                                (get_local $12)
                                (i32.load
                                  (i32.const 5304)
                                )
                              )
                              (call $_abort)
                            )
                            (if
                              (i32.eq
                                (i32.load
                                  (tee_local $0
                                    (i32.add
                                      (get_local $12)
                                      (i32.const 16)
                                    )
                                  )
                                )
                                (get_local $3)
                              )
                              (i32.store
                                (get_local $0)
                                (get_local $5)
                              )
                              (i32.store offset=20
                                (get_local $12)
                                (get_local $5)
                              )
                            )
                            (br_if $do-once8
                              (i32.eqz
                                (get_local $5)
                              )
                            )
                          )
                        )
                        (if
                          (i32.lt_u
                            (get_local $5)
                            (tee_local $1
                              (i32.load
                                (i32.const 5304)
                              )
                            )
                          )
                          (call $_abort)
                        )
                        (i32.store offset=24
                          (get_local $5)
                          (get_local $12)
                        )
                        (if
                          (tee_local $0
                            (i32.load offset=16
                              (get_local $3)
                            )
                          )
                          (if
                            (i32.lt_u
                              (get_local $0)
                              (get_local $1)
                            )
                            (call $_abort)
                            (block
                              (i32.store offset=16
                                (get_local $5)
                                (get_local $0)
                              )
                              (i32.store offset=24
                                (get_local $0)
                                (get_local $5)
                              )
                            )
                          )
                        )
                        (if
                          (tee_local $0
                            (i32.load offset=20
                              (get_local $3)
                            )
                          )
                          (if
                            (i32.lt_u
                              (get_local $0)
                              (i32.load
                                (i32.const 5304)
                              )
                            )
                            (call $_abort)
                            (block
                              (i32.store offset=20
                                (get_local $5)
                                (get_local $0)
                              )
                              (i32.store offset=24
                                (get_local $0)
                                (get_local $5)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                  (if
                    (i32.lt_u
                      (get_local $6)
                      (i32.const 16)
                    )
                    (block
                      (i32.store offset=4
                        (get_local $3)
                        (i32.or
                          (tee_local $0
                            (i32.add
                              (get_local $6)
                              (get_local $2)
                            )
                          )
                          (i32.const 3)
                        )
                      )
                      (i32.store
                        (tee_local $0
                          (i32.add
                            (i32.add
                              (get_local $3)
                              (get_local $0)
                            )
                            (i32.const 4)
                          )
                        )
                        (i32.or
                          (i32.load
                            (get_local $0)
                          )
                          (i32.const 1)
                        )
                      )
                    )
                    (block
                      (i32.store offset=4
                        (get_local $3)
                        (i32.or
                          (get_local $2)
                          (i32.const 3)
                        )
                      )
                      (i32.store offset=4
                        (get_local $9)
                        (i32.or
                          (get_local $6)
                          (i32.const 1)
                        )
                      )
                      (i32.store
                        (i32.add
                          (get_local $9)
                          (get_local $6)
                        )
                        (get_local $6)
                      )
                      (if
                        (get_local $16)
                        (block
                          (set_local $5
                            (i32.load
                              (i32.const 5308)
                            )
                          )
                          (set_local $0
                            (i32.add
                              (i32.shl
                                (i32.shl
                                  (tee_local $1
                                    (i32.shr_u
                                      (get_local $16)
                                      (i32.const 3)
                                    )
                                  )
                                  (i32.const 1)
                                )
                                (i32.const 2)
                              )
                              (i32.const 5328)
                            )
                          )
                          (if
                            (i32.and
                              (get_local $7)
                              (tee_local $1
                                (i32.shl
                                  (i32.const 1)
                                  (get_local $1)
                                )
                              )
                            )
                            (if
                              (i32.lt_u
                                (tee_local $2
                                  (i32.load
                                    (tee_local $1
                                      (i32.add
                                        (get_local $0)
                                        (i32.const 8)
                                      )
                                    )
                                  )
                                )
                                (i32.load
                                  (i32.const 5304)
                                )
                              )
                              (call $_abort)
                              (block
                                (set_local $4
                                  (get_local $2)
                                )
                                (set_local $14
                                  (get_local $1)
                                )
                              )
                            )
                            (block
                              (i32.store
                                (i32.const 5288)
                                (i32.or
                                  (get_local $7)
                                  (get_local $1)
                                )
                              )
                              (set_local $4
                                (get_local $0)
                              )
                              (set_local $14
                                (i32.add
                                  (get_local $0)
                                  (i32.const 8)
                                )
                              )
                            )
                          )
                          (i32.store
                            (get_local $14)
                            (get_local $5)
                          )
                          (i32.store offset=12
                            (get_local $4)
                            (get_local $5)
                          )
                          (i32.store offset=8
                            (get_local $5)
                            (get_local $4)
                          )
                          (i32.store offset=12
                            (get_local $5)
                            (get_local $0)
                          )
                        )
                      )
                      (i32.store
                        (i32.const 5296)
                        (get_local $6)
                      )
                      (i32.store
                        (i32.const 5308)
                        (get_local $9)
                      )
                    )
                  )
                  (set_global $STACKTOP
                    (get_local $13)
                  )
                  (return
                    (i32.add
                      (get_local $3)
                      (i32.const 8)
                    )
                  )
                )
                (set_local $0
                  (get_local $2)
                )
              )
            )
            (set_local $0
              (get_local $2)
            )
          )
        )
        (if
          (i32.gt_u
            (get_local $0)
            (i32.const -65)
          )
          (set_local $0
            (i32.const -1)
          )
          (block
            (set_local $5
              (i32.and
                (tee_local $0
                  (i32.add
                    (get_local $0)
                    (i32.const 11)
                  )
                )
                (i32.const -8)
              )
            )
            (if
              (tee_local $6
                (i32.load
                  (i32.const 5292)
                )
              )
              (block
                (set_local $17
                  (if i32
                    (tee_local $0
                      (i32.shr_u
                        (get_local $0)
                        (i32.const 8)
                      )
                    )
                    (if i32
                      (i32.gt_u
                        (get_local $5)
                        (i32.const 16777215)
                      )
                      (i32.const 31)
                      (i32.or
                        (i32.and
                          (i32.shr_u
                            (get_local $5)
                            (i32.add
                              (tee_local $0
                                (i32.add
                                  (i32.sub
                                    (i32.const 14)
                                    (i32.or
                                      (i32.or
                                        (tee_local $3
                                          (i32.and
                                            (i32.shr_u
                                              (i32.add
                                                (tee_local $2
                                                  (i32.shl
                                                    (get_local $0)
                                                    (tee_local $0
                                                      (i32.and
                                                        (i32.shr_u
                                                          (i32.add
                                                            (get_local $0)
                                                            (i32.const 1048320)
                                                          )
                                                          (i32.const 16)
                                                        )
                                                        (i32.const 8)
                                                      )
                                                    )
                                                  )
                                                )
                                                (i32.const 520192)
                                              )
                                              (i32.const 16)
                                            )
                                            (i32.const 4)
                                          )
                                        )
                                        (get_local $0)
                                      )
                                      (tee_local $2
                                        (i32.and
                                          (i32.shr_u
                                            (i32.add
                                              (tee_local $0
                                                (i32.shl
                                                  (get_local $2)
                                                  (get_local $3)
                                                )
                                              )
                                              (i32.const 245760)
                                            )
                                            (i32.const 16)
                                          )
                                          (i32.const 2)
                                        )
                                      )
                                    )
                                  )
                                  (i32.shr_u
                                    (i32.shl
                                      (get_local $0)
                                      (get_local $2)
                                    )
                                    (i32.const 15)
                                  )
                                )
                              )
                              (i32.const 7)
                            )
                          )
                          (i32.const 1)
                        )
                        (i32.shl
                          (get_local $0)
                          (i32.const 1)
                        )
                      )
                    )
                    (i32.const 0)
                  )
                )
                (set_local $3
                  (i32.sub
                    (i32.const 0)
                    (get_local $5)
                  )
                )
                (block $jumpthreading$outer$3
                  (block $jumpthreading$inner$3
                    (block $jumpthreading$inner$2
                      (if
                        (tee_local $0
                          (i32.load
                            (i32.add
                              (i32.shl
                                (get_local $17)
                                (i32.const 2)
                              )
                              (i32.const 5592)
                            )
                          )
                        )
                        (block
                          (set_local $4
                            (i32.sub
                              (i32.const 25)
                              (i32.shr_u
                                (get_local $17)
                                (i32.const 1)
                              )
                            )
                          )
                          (set_local $2
                            (i32.const 0)
                          )
                          (set_local $11
                            (i32.shl
                              (get_local $5)
                              (if i32
                                (i32.eq
                                  (get_local $17)
                                  (i32.const 31)
                                )
                                (i32.const 0)
                                (get_local $4)
                              )
                            )
                          )
                          (set_local $4
                            (i32.const 0)
                          )
                          (loop $while-in14
                            (if
                              (i32.lt_u
                                (tee_local $14
                                  (i32.sub
                                    (i32.and
                                      (i32.load offset=4
                                        (get_local $0)
                                      )
                                      (i32.const -8)
                                    )
                                    (get_local $5)
                                  )
                                )
                                (get_local $3)
                              )
                              (if
                                (get_local $14)
                                (block
                                  (set_local $2
                                    (get_local $0)
                                  )
                                  (set_local $3
                                    (get_local $14)
                                  )
                                )
                                (block
                                  (set_local $2
                                    (get_local $0)
                                  )
                                  (set_local $3
                                    (i32.const 0)
                                  )
                                  (br $jumpthreading$inner$3)
                                )
                              )
                            )
                            (if
                              (i32.eqz
                                (i32.or
                                  (i32.eqz
                                    (tee_local $14
                                      (i32.load offset=20
                                        (get_local $0)
                                      )
                                    )
                                  )
                                  (i32.eq
                                    (get_local $14)
                                    (tee_local $0
                                      (i32.load
                                        (i32.add
                                          (i32.add
                                            (get_local $0)
                                            (i32.const 16)
                                          )
                                          (i32.shl
                                            (i32.shr_u
                                              (get_local $11)
                                              (i32.const 31)
                                            )
                                            (i32.const 2)
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                              (set_local $4
                                (get_local $14)
                              )
                            )
                            (set_local $11
                              (i32.shl
                                (get_local $11)
                                (i32.xor
                                  (i32.and
                                    (tee_local $14
                                      (i32.eqz
                                        (get_local $0)
                                      )
                                    )
                                    (i32.const 1)
                                  )
                                  (i32.const 1)
                                )
                              )
                            )
                            (br_if $while-in14
                              (i32.eqz
                                (get_local $14)
                              )
                            )
                            (br $jumpthreading$inner$2)
                          )
                        )
                        (block
                          (set_local $4
                            (i32.const 0)
                          )
                          (set_local $2
                            (i32.const 0)
                          )
                        )
                      )
                    )
                    (br_if $jumpthreading$inner$3
                      (tee_local $0
                        (if i32
                          (i32.and
                            (i32.eqz
                              (get_local $4)
                            )
                            (i32.eqz
                              (get_local $2)
                            )
                          )
                          (block i32
                            (if
                              (i32.eqz
                                (tee_local $0
                                  (i32.and
                                    (get_local $6)
                                    (i32.or
                                      (tee_local $0
                                        (i32.shl
                                          (i32.const 2)
                                          (get_local $17)
                                        )
                                      )
                                      (i32.sub
                                        (i32.const 0)
                                        (get_local $0)
                                      )
                                    )
                                  )
                                )
                              )
                              (block
                                (set_local $0
                                  (get_local $5)
                                )
                                (br $do-once)
                              )
                            )
                            (set_local $0
                              (i32.and
                                (i32.shr_u
                                  (tee_local $4
                                    (i32.add
                                      (i32.and
                                        (get_local $0)
                                        (i32.sub
                                          (i32.const 0)
                                          (get_local $0)
                                        )
                                      )
                                      (i32.const -1)
                                    )
                                  )
                                  (i32.const 12)
                                )
                                (i32.const 16)
                              )
                            )
                            (i32.load
                              (i32.add
                                (i32.shl
                                  (i32.add
                                    (i32.or
                                      (i32.or
                                        (i32.or
                                          (i32.or
                                            (tee_local $11
                                              (i32.and
                                                (i32.shr_u
                                                  (tee_local $4
                                                    (i32.shr_u
                                                      (get_local $4)
                                                      (get_local $0)
                                                    )
                                                  )
                                                  (i32.const 5)
                                                )
                                                (i32.const 8)
                                              )
                                            )
                                            (get_local $0)
                                          )
                                          (tee_local $4
                                            (i32.and
                                              (i32.shr_u
                                                (tee_local $0
                                                  (i32.shr_u
                                                    (get_local $4)
                                                    (get_local $11)
                                                  )
                                                )
                                                (i32.const 2)
                                              )
                                              (i32.const 4)
                                            )
                                          )
                                        )
                                        (tee_local $4
                                          (i32.and
                                            (i32.shr_u
                                              (tee_local $0
                                                (i32.shr_u
                                                  (get_local $0)
                                                  (get_local $4)
                                                )
                                              )
                                              (i32.const 1)
                                            )
                                            (i32.const 2)
                                          )
                                        )
                                      )
                                      (tee_local $4
                                        (i32.and
                                          (i32.shr_u
                                            (tee_local $0
                                              (i32.shr_u
                                                (get_local $0)
                                                (get_local $4)
                                              )
                                            )
                                            (i32.const 1)
                                          )
                                          (i32.const 1)
                                        )
                                      )
                                    )
                                    (i32.shr_u
                                      (get_local $0)
                                      (get_local $4)
                                    )
                                  )
                                  (i32.const 2)
                                )
                                (i32.const 5592)
                              )
                            )
                          )
                          (get_local $4)
                        )
                      )
                    )
                    (set_local $4
                      (get_local $2)
                    )
                    (br $jumpthreading$outer$3)
                  )
                  (loop $while-in16
                    (if
                      (tee_local $11
                        (i32.lt_u
                          (tee_local $4
                            (i32.sub
                              (i32.and
                                (i32.load offset=4
                                  (get_local $0)
                                )
                                (i32.const -8)
                              )
                              (get_local $5)
                            )
                          )
                          (get_local $3)
                        )
                      )
                      (set_local $3
                        (get_local $4)
                      )
                    )
                    (if
                      (get_local $11)
                      (set_local $2
                        (get_local $0)
                      )
                    )
                    (if
                      (tee_local $4
                        (i32.load offset=16
                          (get_local $0)
                        )
                      )
                      (block
                        (set_local $0
                          (get_local $4)
                        )
                        (br $while-in16)
                      )
                    )
                    (br_if $while-in16
                      (tee_local $0
                        (i32.load offset=20
                          (get_local $0)
                        )
                      )
                    )
                    (set_local $4
                      (get_local $2)
                    )
                  )
                )
                (if
                  (get_local $4)
                  (if
                    (i32.lt_u
                      (get_local $3)
                      (i32.sub
                        (i32.load
                          (i32.const 5296)
                        )
                        (get_local $5)
                      )
                    )
                    (block
                      (if
                        (i32.lt_u
                          (get_local $4)
                          (tee_local $15
                            (i32.load
                              (i32.const 5304)
                            )
                          )
                        )
                        (call $_abort)
                      )
                      (if
                        (i32.ge_u
                          (get_local $4)
                          (tee_local $9
                            (i32.add
                              (get_local $4)
                              (get_local $5)
                            )
                          )
                        )
                        (call $_abort)
                      )
                      (set_local $11
                        (i32.load offset=24
                          (get_local $4)
                        )
                      )
                      (block $do-once17
                        (if
                          (i32.eq
                            (tee_local $0
                              (i32.load offset=12
                                (get_local $4)
                              )
                            )
                            (get_local $4)
                          )
                          (block
                            (if
                              (i32.eqz
                                (tee_local $0
                                  (i32.load
                                    (tee_local $2
                                      (i32.add
                                        (get_local $4)
                                        (i32.const 20)
                                      )
                                    )
                                  )
                                )
                              )
                              (if
                                (i32.eqz
                                  (tee_local $0
                                    (i32.load
                                      (tee_local $2
                                        (i32.add
                                          (get_local $4)
                                          (i32.const 16)
                                        )
                                      )
                                    )
                                  )
                                )
                                (block
                                  (set_local $8
                                    (i32.const 0)
                                  )
                                  (br $do-once17)
                                )
                              )
                            )
                            (loop $while-in20
                              (if
                                (tee_local $12
                                  (i32.load
                                    (tee_local $10
                                      (i32.add
                                        (get_local $0)
                                        (i32.const 20)
                                      )
                                    )
                                  )
                                )
                                (block
                                  (set_local $0
                                    (get_local $12)
                                  )
                                  (set_local $2
                                    (get_local $10)
                                  )
                                  (br $while-in20)
                                )
                              )
                              (if
                                (tee_local $12
                                  (i32.load
                                    (tee_local $10
                                      (i32.add
                                        (get_local $0)
                                        (i32.const 16)
                                      )
                                    )
                                  )
                                )
                                (block
                                  (set_local $0
                                    (get_local $12)
                                  )
                                  (set_local $2
                                    (get_local $10)
                                  )
                                  (br $while-in20)
                                )
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $2)
                                (get_local $15)
                              )
                              (call $_abort)
                              (block
                                (i32.store
                                  (get_local $2)
                                  (i32.const 0)
                                )
                                (set_local $8
                                  (get_local $0)
                                )
                              )
                            )
                          )
                          (block
                            (if
                              (i32.lt_u
                                (tee_local $2
                                  (i32.load offset=8
                                    (get_local $4)
                                  )
                                )
                                (get_local $15)
                              )
                              (call $_abort)
                            )
                            (if
                              (i32.ne
                                (i32.load
                                  (tee_local $10
                                    (i32.add
                                      (get_local $2)
                                      (i32.const 12)
                                    )
                                  )
                                )
                                (get_local $4)
                              )
                              (call $_abort)
                            )
                            (if
                              (i32.eq
                                (i32.load
                                  (tee_local $12
                                    (i32.add
                                      (get_local $0)
                                      (i32.const 8)
                                    )
                                  )
                                )
                                (get_local $4)
                              )
                              (block
                                (i32.store
                                  (get_local $10)
                                  (get_local $0)
                                )
                                (i32.store
                                  (get_local $12)
                                  (get_local $2)
                                )
                                (set_local $8
                                  (get_local $0)
                                )
                              )
                              (call $_abort)
                            )
                          )
                        )
                      )
                      (block $do-once21
                        (if
                          (get_local $11)
                          (block
                            (if
                              (i32.eq
                                (get_local $4)
                                (i32.load
                                  (tee_local $2
                                    (i32.add
                                      (i32.shl
                                        (tee_local $0
                                          (i32.load offset=28
                                            (get_local $4)
                                          )
                                        )
                                        (i32.const 2)
                                      )
                                      (i32.const 5592)
                                    )
                                  )
                                )
                              )
                              (block
                                (i32.store
                                  (get_local $2)
                                  (get_local $8)
                                )
                                (if
                                  (i32.eqz
                                    (get_local $8)
                                  )
                                  (block
                                    (i32.store
                                      (i32.const 5292)
                                      (tee_local $1
                                        (i32.and
                                          (get_local $6)
                                          (i32.xor
                                            (i32.shl
                                              (i32.const 1)
                                              (get_local $0)
                                            )
                                            (i32.const -1)
                                          )
                                        )
                                      )
                                    )
                                    (br $do-once21)
                                  )
                                )
                              )
                              (block
                                (if
                                  (i32.lt_u
                                    (get_local $11)
                                    (i32.load
                                      (i32.const 5304)
                                    )
                                  )
                                  (call $_abort)
                                )
                                (if
                                  (i32.eq
                                    (i32.load
                                      (tee_local $0
                                        (i32.add
                                          (get_local $11)
                                          (i32.const 16)
                                        )
                                      )
                                    )
                                    (get_local $4)
                                  )
                                  (i32.store
                                    (get_local $0)
                                    (get_local $8)
                                  )
                                  (i32.store offset=20
                                    (get_local $11)
                                    (get_local $8)
                                  )
                                )
                                (if
                                  (i32.eqz
                                    (get_local $8)
                                  )
                                  (block
                                    (set_local $1
                                      (get_local $6)
                                    )
                                    (br $do-once21)
                                  )
                                )
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $8)
                                (tee_local $2
                                  (i32.load
                                    (i32.const 5304)
                                  )
                                )
                              )
                              (call $_abort)
                            )
                            (i32.store offset=24
                              (get_local $8)
                              (get_local $11)
                            )
                            (if
                              (tee_local $0
                                (i32.load offset=16
                                  (get_local $4)
                                )
                              )
                              (if
                                (i32.lt_u
                                  (get_local $0)
                                  (get_local $2)
                                )
                                (call $_abort)
                                (block
                                  (i32.store offset=16
                                    (get_local $8)
                                    (get_local $0)
                                  )
                                  (i32.store offset=24
                                    (get_local $0)
                                    (get_local $8)
                                  )
                                )
                              )
                            )
                            (if
                              (tee_local $0
                                (i32.load offset=20
                                  (get_local $4)
                                )
                              )
                              (if
                                (i32.lt_u
                                  (get_local $0)
                                  (i32.load
                                    (i32.const 5304)
                                  )
                                )
                                (call $_abort)
                                (block
                                  (i32.store offset=20
                                    (get_local $8)
                                    (get_local $0)
                                  )
                                  (i32.store offset=24
                                    (get_local $0)
                                    (get_local $8)
                                  )
                                  (set_local $1
                                    (get_local $6)
                                  )
                                )
                              )
                              (set_local $1
                                (get_local $6)
                              )
                            )
                          )
                          (set_local $1
                            (get_local $6)
                          )
                        )
                      )
                      (block $do-once25
                        (if
                          (i32.lt_u
                            (get_local $3)
                            (i32.const 16)
                          )
                          (block
                            (i32.store offset=4
                              (get_local $4)
                              (i32.or
                                (tee_local $0
                                  (i32.add
                                    (get_local $3)
                                    (get_local $5)
                                  )
                                )
                                (i32.const 3)
                              )
                            )
                            (i32.store
                              (tee_local $0
                                (i32.add
                                  (i32.add
                                    (get_local $4)
                                    (get_local $0)
                                  )
                                  (i32.const 4)
                                )
                              )
                              (i32.or
                                (i32.load
                                  (get_local $0)
                                )
                                (i32.const 1)
                              )
                            )
                          )
                          (block
                            (i32.store offset=4
                              (get_local $4)
                              (i32.or
                                (get_local $5)
                                (i32.const 3)
                              )
                            )
                            (i32.store offset=4
                              (get_local $9)
                              (i32.or
                                (get_local $3)
                                (i32.const 1)
                              )
                            )
                            (i32.store
                              (i32.add
                                (get_local $9)
                                (get_local $3)
                              )
                              (get_local $3)
                            )
                            (set_local $2
                              (i32.shr_u
                                (get_local $3)
                                (i32.const 3)
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $3)
                                (i32.const 256)
                              )
                              (block
                                (set_local $0
                                  (i32.add
                                    (i32.shl
                                      (i32.shl
                                        (get_local $2)
                                        (i32.const 1)
                                      )
                                      (i32.const 2)
                                    )
                                    (i32.const 5328)
                                  )
                                )
                                (if
                                  (i32.and
                                    (tee_local $1
                                      (i32.load
                                        (i32.const 5288)
                                      )
                                    )
                                    (tee_local $2
                                      (i32.shl
                                        (i32.const 1)
                                        (get_local $2)
                                      )
                                    )
                                  )
                                  (if
                                    (i32.lt_u
                                      (tee_local $2
                                        (i32.load
                                          (tee_local $1
                                            (i32.add
                                              (get_local $0)
                                              (i32.const 8)
                                            )
                                          )
                                        )
                                      )
                                      (i32.load
                                        (i32.const 5304)
                                      )
                                    )
                                    (call $_abort)
                                    (block
                                      (set_local $7
                                        (get_local $2)
                                      )
                                      (set_local $16
                                        (get_local $1)
                                      )
                                    )
                                  )
                                  (block
                                    (i32.store
                                      (i32.const 5288)
                                      (i32.or
                                        (get_local $1)
                                        (get_local $2)
                                      )
                                    )
                                    (set_local $7
                                      (get_local $0)
                                    )
                                    (set_local $16
                                      (i32.add
                                        (get_local $0)
                                        (i32.const 8)
                                      )
                                    )
                                  )
                                )
                                (i32.store
                                  (get_local $16)
                                  (get_local $9)
                                )
                                (i32.store offset=12
                                  (get_local $7)
                                  (get_local $9)
                                )
                                (i32.store offset=8
                                  (get_local $9)
                                  (get_local $7)
                                )
                                (i32.store offset=12
                                  (get_local $9)
                                  (get_local $0)
                                )
                                (br $do-once25)
                              )
                            )
                            (set_local $0
                              (i32.add
                                (i32.shl
                                  (tee_local $2
                                    (if i32
                                      (tee_local $0
                                        (i32.shr_u
                                          (get_local $3)
                                          (i32.const 8)
                                        )
                                      )
                                      (if i32
                                        (i32.gt_u
                                          (get_local $3)
                                          (i32.const 16777215)
                                        )
                                        (i32.const 31)
                                        (i32.or
                                          (i32.and
                                            (i32.shr_u
                                              (get_local $3)
                                              (i32.add
                                                (tee_local $0
                                                  (i32.add
                                                    (i32.sub
                                                      (i32.const 14)
                                                      (i32.or
                                                        (i32.or
                                                          (tee_local $5
                                                            (i32.and
                                                              (i32.shr_u
                                                                (i32.add
                                                                  (tee_local $2
                                                                    (i32.shl
                                                                      (get_local $0)
                                                                      (tee_local $0
                                                                        (i32.and
                                                                          (i32.shr_u
                                                                            (i32.add
                                                                              (get_local $0)
                                                                              (i32.const 1048320)
                                                                            )
                                                                            (i32.const 16)
                                                                          )
                                                                          (i32.const 8)
                                                                        )
                                                                      )
                                                                    )
                                                                  )
                                                                  (i32.const 520192)
                                                                )
                                                                (i32.const 16)
                                                              )
                                                              (i32.const 4)
                                                            )
                                                          )
                                                          (get_local $0)
                                                        )
                                                        (tee_local $2
                                                          (i32.and
                                                            (i32.shr_u
                                                              (i32.add
                                                                (tee_local $0
                                                                  (i32.shl
                                                                    (get_local $2)
                                                                    (get_local $5)
                                                                  )
                                                                )
                                                                (i32.const 245760)
                                                              )
                                                              (i32.const 16)
                                                            )
                                                            (i32.const 2)
                                                          )
                                                        )
                                                      )
                                                    )
                                                    (i32.shr_u
                                                      (i32.shl
                                                        (get_local $0)
                                                        (get_local $2)
                                                      )
                                                      (i32.const 15)
                                                    )
                                                  )
                                                )
                                                (i32.const 7)
                                              )
                                            )
                                            (i32.const 1)
                                          )
                                          (i32.shl
                                            (get_local $0)
                                            (i32.const 1)
                                          )
                                        )
                                      )
                                      (i32.const 0)
                                    )
                                  )
                                  (i32.const 2)
                                )
                                (i32.const 5592)
                              )
                            )
                            (i32.store offset=28
                              (get_local $9)
                              (get_local $2)
                            )
                            (i32.store offset=4
                              (tee_local $5
                                (i32.add
                                  (get_local $9)
                                  (i32.const 16)
                                )
                              )
                              (i32.const 0)
                            )
                            (i32.store
                              (get_local $5)
                              (i32.const 0)
                            )
                            (if
                              (i32.eqz
                                (i32.and
                                  (get_local $1)
                                  (tee_local $5
                                    (i32.shl
                                      (i32.const 1)
                                      (get_local $2)
                                    )
                                  )
                                )
                              )
                              (block
                                (i32.store
                                  (i32.const 5292)
                                  (i32.or
                                    (get_local $1)
                                    (get_local $5)
                                  )
                                )
                                (i32.store
                                  (get_local $0)
                                  (get_local $9)
                                )
                                (i32.store offset=24
                                  (get_local $9)
                                  (get_local $0)
                                )
                                (i32.store offset=12
                                  (get_local $9)
                                  (get_local $9)
                                )
                                (i32.store offset=8
                                  (get_local $9)
                                  (get_local $9)
                                )
                                (br $do-once25)
                              )
                            )
                            (set_local $0
                              (i32.load
                                (get_local $0)
                              )
                            )
                            (set_local $1
                              (i32.sub
                                (i32.const 25)
                                (i32.shr_u
                                  (get_local $2)
                                  (i32.const 1)
                                )
                              )
                            )
                            (set_local $1
                              (i32.shl
                                (get_local $3)
                                (if i32
                                  (i32.eq
                                    (get_local $2)
                                    (i32.const 31)
                                  )
                                  (i32.const 0)
                                  (get_local $1)
                                )
                              )
                            )
                            (block $jumpthreading$outer$1
                              (block $jumpthreading$inner$1
                                (block $jumpthreading$inner$0
                                  (loop $while-in28
                                    (br_if $jumpthreading$inner$1
                                      (i32.eq
                                        (i32.and
                                          (i32.load offset=4
                                            (get_local $0)
                                          )
                                          (i32.const -8)
                                        )
                                        (get_local $3)
                                      )
                                    )
                                    (set_local $2
                                      (i32.shl
                                        (get_local $1)
                                        (i32.const 1)
                                      )
                                    )
                                    (br_if $jumpthreading$inner$0
                                      (i32.eqz
                                        (tee_local $5
                                          (i32.load
                                            (tee_local $1
                                              (i32.add
                                                (i32.add
                                                  (get_local $0)
                                                  (i32.const 16)
                                                )
                                                (i32.shl
                                                  (i32.shr_u
                                                    (get_local $1)
                                                    (i32.const 31)
                                                  )
                                                  (i32.const 2)
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                    (set_local $1
                                      (get_local $2)
                                    )
                                    (set_local $0
                                      (get_local $5)
                                    )
                                    (br $while-in28)
                                  )
                                )
                                (if
                                  (i32.lt_u
                                    (get_local $1)
                                    (i32.load
                                      (i32.const 5304)
                                    )
                                  )
                                  (call $_abort)
                                  (block
                                    (i32.store
                                      (get_local $1)
                                      (get_local $9)
                                    )
                                    (i32.store offset=24
                                      (get_local $9)
                                      (get_local $0)
                                    )
                                    (i32.store offset=12
                                      (get_local $9)
                                      (get_local $9)
                                    )
                                    (i32.store offset=8
                                      (get_local $9)
                                      (get_local $9)
                                    )
                                    (br $do-once25)
                                  )
                                )
                                (br $jumpthreading$outer$1)
                              )
                              (if
                                (i32.and
                                  (i32.ge_u
                                    (tee_local $1
                                      (i32.load
                                        (tee_local $2
                                          (i32.add
                                            (get_local $0)
                                            (i32.const 8)
                                          )
                                        )
                                      )
                                    )
                                    (tee_local $3
                                      (i32.load
                                        (i32.const 5304)
                                      )
                                    )
                                  )
                                  (i32.ge_u
                                    (get_local $0)
                                    (get_local $3)
                                  )
                                )
                                (block
                                  (i32.store offset=12
                                    (get_local $1)
                                    (get_local $9)
                                  )
                                  (i32.store
                                    (get_local $2)
                                    (get_local $9)
                                  )
                                  (i32.store offset=8
                                    (get_local $9)
                                    (get_local $1)
                                  )
                                  (i32.store offset=12
                                    (get_local $9)
                                    (get_local $0)
                                  )
                                  (i32.store offset=24
                                    (get_local $9)
                                    (i32.const 0)
                                  )
                                )
                                (call $_abort)
                              )
                            )
                          )
                        )
                      )
                      (set_global $STACKTOP
                        (get_local $13)
                      )
                      (return
                        (i32.add
                          (get_local $4)
                          (i32.const 8)
                        )
                      )
                    )
                    (set_local $0
                      (get_local $5)
                    )
                  )
                  (set_local $0
                    (get_local $5)
                  )
                )
              )
              (set_local $0
                (get_local $5)
              )
            )
          )
        )
      )
    )
    (if
      (i32.ge_u
        (tee_local $3
          (i32.load
            (i32.const 5296)
          )
        )
        (get_local $0)
      )
      (block
        (set_local $1
          (i32.load
            (i32.const 5308)
          )
        )
        (if
          (i32.gt_u
            (tee_local $2
              (i32.sub
                (get_local $3)
                (get_local $0)
              )
            )
            (i32.const 15)
          )
          (block
            (i32.store
              (i32.const 5308)
              (tee_local $3
                (i32.add
                  (get_local $1)
                  (get_local $0)
                )
              )
            )
            (i32.store
              (i32.const 5296)
              (get_local $2)
            )
            (i32.store offset=4
              (get_local $3)
              (i32.or
                (get_local $2)
                (i32.const 1)
              )
            )
            (i32.store
              (i32.add
                (get_local $3)
                (get_local $2)
              )
              (get_local $2)
            )
            (i32.store offset=4
              (get_local $1)
              (i32.or
                (get_local $0)
                (i32.const 3)
              )
            )
          )
          (block
            (i32.store
              (i32.const 5296)
              (i32.const 0)
            )
            (i32.store
              (i32.const 5308)
              (i32.const 0)
            )
            (i32.store offset=4
              (get_local $1)
              (i32.or
                (get_local $3)
                (i32.const 3)
              )
            )
            (i32.store
              (tee_local $0
                (i32.add
                  (i32.add
                    (get_local $1)
                    (get_local $3)
                  )
                  (i32.const 4)
                )
              )
              (i32.or
                (i32.load
                  (get_local $0)
                )
                (i32.const 1)
              )
            )
          )
        )
        (set_global $STACKTOP
          (get_local $13)
        )
        (return
          (i32.add
            (get_local $1)
            (i32.const 8)
          )
        )
      )
    )
    (if
      (i32.gt_u
        (tee_local $3
          (i32.load
            (i32.const 5300)
          )
        )
        (get_local $0)
      )
      (block
        (i32.store
          (i32.const 5300)
          (tee_local $2
            (i32.sub
              (get_local $3)
              (get_local $0)
            )
          )
        )
        (i32.store
          (i32.const 5312)
          (tee_local $3
            (i32.add
              (tee_local $1
                (i32.load
                  (i32.const 5312)
                )
              )
              (get_local $0)
            )
          )
        )
        (i32.store offset=4
          (get_local $3)
          (i32.or
            (get_local $2)
            (i32.const 1)
          )
        )
        (i32.store offset=4
          (get_local $1)
          (i32.or
            (get_local $0)
            (i32.const 3)
          )
        )
        (set_global $STACKTOP
          (get_local $13)
        )
        (return
          (i32.add
            (get_local $1)
            (i32.const 8)
          )
        )
      )
    )
    (if
      (i32.le_u
        (tee_local $5
          (i32.and
            (tee_local $4
              (i32.add
                (tee_local $1
                  (if i32
                    (i32.load
                      (i32.const 5760)
                    )
                    (i32.load
                      (i32.const 5768)
                    )
                    (block i32
                      (i32.store
                        (i32.const 5768)
                        (i32.const 4096)
                      )
                      (i32.store
                        (i32.const 5764)
                        (i32.const 4096)
                      )
                      (i32.store
                        (i32.const 5772)
                        (i32.const -1)
                      )
                      (i32.store
                        (i32.const 5776)
                        (i32.const -1)
                      )
                      (i32.store
                        (i32.const 5780)
                        (i32.const 0)
                      )
                      (i32.store
                        (i32.const 5732)
                        (i32.const 0)
                      )
                      (i32.store
                        (get_local $15)
                        (tee_local $1
                          (i32.xor
                            (i32.and
                              (get_local $15)
                              (i32.const -16)
                            )
                            (i32.const 1431655768)
                          )
                        )
                      )
                      (i32.store
                        (i32.const 5760)
                        (get_local $1)
                      )
                      (i32.const 4096)
                    )
                  )
                )
                (tee_local $6
                  (i32.add
                    (get_local $0)
                    (i32.const 47)
                  )
                )
              )
            )
            (tee_local $8
              (i32.sub
                (i32.const 0)
                (get_local $1)
              )
            )
          )
        )
        (get_local $0)
      )
      (block
        (set_global $STACKTOP
          (get_local $13)
        )
        (return
          (i32.const 0)
        )
      )
    )
    (if
      (tee_local $1
        (i32.load
          (i32.const 5728)
        )
      )
      (if
        (i32.or
          (i32.le_u
            (tee_local $7
              (i32.add
                (tee_local $2
                  (i32.load
                    (i32.const 5720)
                  )
                )
                (get_local $5)
              )
            )
            (get_local $2)
          )
          (i32.gt_u
            (get_local $7)
            (get_local $1)
          )
        )
        (block
          (set_global $STACKTOP
            (get_local $13)
          )
          (return
            (i32.const 0)
          )
        )
      )
    )
    (set_local $7
      (i32.add
        (get_local $0)
        (i32.const 48)
      )
    )
    (block $jumpthreading$outer$13
      (block $jumpthreading$inner$13
        (if
          (i32.eqz
            (i32.and
              (i32.load
                (i32.const 5732)
              )
              (i32.const 4)
            )
          )
          (block
            (block $label$break$L274
              (block $jumpthreading$inner$5
                (block $jumpthreading$inner$4
                  (br_if $jumpthreading$inner$4
                    (i32.eqz
                      (tee_local $1
                        (i32.load
                          (i32.const 5312)
                        )
                      )
                    )
                  )
                  (set_local $2
                    (i32.const 5736)
                  )
                  (loop $while-in32
                    (block $while-out31
                      (if
                        (i32.le_u
                          (tee_local $11
                            (i32.load
                              (get_local $2)
                            )
                          )
                          (get_local $1)
                        )
                        (br_if $while-out31
                          (i32.gt_u
                            (i32.add
                              (get_local $11)
                              (i32.load
                                (tee_local $11
                                  (i32.add
                                    (get_local $2)
                                    (i32.const 4)
                                  )
                                )
                              )
                            )
                            (get_local $1)
                          )
                        )
                      )
                      (br_if $while-in32
                        (tee_local $2
                          (i32.load offset=8
                            (get_local $2)
                          )
                        )
                      )
                      (br $jumpthreading$inner$4)
                    )
                  )
                  (if
                    (i32.lt_u
                      (tee_local $1
                        (i32.and
                          (i32.sub
                            (get_local $4)
                            (get_local $3)
                          )
                          (get_local $8)
                        )
                      )
                      (i32.const 2147483647)
                    )
                    (if
                      (i32.eq
                        (tee_local $3
                          (call $_sbrk
                            (get_local $1)
                          )
                        )
                        (i32.add
                          (i32.load
                            (get_local $2)
                          )
                          (i32.load
                            (get_local $11)
                          )
                        )
                      )
                      (if
                        (i32.ne
                          (get_local $3)
                          (i32.const -1)
                        )
                        (block
                          (set_local $2
                            (get_local $1)
                          )
                          (set_local $1
                            (get_local $3)
                          )
                          (br $jumpthreading$inner$13)
                        )
                      )
                      (br $jumpthreading$inner$5)
                    )
                  )
                  (br $label$break$L274)
                )
                (if
                  (i32.ne
                    (tee_local $3
                      (call $_sbrk
                        (i32.const 0)
                      )
                    )
                    (i32.const -1)
                  )
                  (block
                    (set_local $2
                      (i32.sub
                        (i32.and
                          (i32.add
                            (tee_local $4
                              (i32.add
                                (tee_local $2
                                  (i32.load
                                    (i32.const 5764)
                                  )
                                )
                                (i32.const -1)
                              )
                            )
                            (tee_local $1
                              (get_local $3)
                            )
                          )
                          (i32.sub
                            (i32.const 0)
                            (get_local $2)
                          )
                        )
                        (get_local $1)
                      )
                    )
                    (set_local $2
                      (i32.add
                        (tee_local $1
                          (i32.add
                            (if i32
                              (i32.and
                                (get_local $4)
                                (get_local $1)
                              )
                              (get_local $2)
                              (i32.const 0)
                            )
                            (get_local $5)
                          )
                        )
                        (tee_local $4
                          (i32.load
                            (i32.const 5720)
                          )
                        )
                      )
                    )
                    (if
                      (i32.and
                        (i32.gt_u
                          (get_local $1)
                          (get_local $0)
                        )
                        (i32.lt_u
                          (get_local $1)
                          (i32.const 2147483647)
                        )
                      )
                      (block
                        (if
                          (tee_local $8
                            (i32.load
                              (i32.const 5728)
                            )
                          )
                          (br_if $label$break$L274
                            (i32.or
                              (i32.le_u
                                (get_local $2)
                                (get_local $4)
                              )
                              (i32.gt_u
                                (get_local $2)
                                (get_local $8)
                              )
                            )
                          )
                        )
                        (if
                          (i32.eq
                            (tee_local $2
                              (call $_sbrk
                                (get_local $1)
                              )
                            )
                            (get_local $3)
                          )
                          (block
                            (set_local $2
                              (get_local $1)
                            )
                            (set_local $1
                              (get_local $3)
                            )
                            (br $jumpthreading$inner$13)
                          )
                          (block
                            (set_local $3
                              (get_local $2)
                            )
                            (br $jumpthreading$inner$5)
                          )
                        )
                      )
                    )
                  )
                )
                (br $label$break$L274)
              )
              (set_local $4
                (i32.sub
                  (i32.const 0)
                  (get_local $1)
                )
              )
              (if
                (i32.and
                  (i32.gt_u
                    (get_local $7)
                    (get_local $1)
                  )
                  (i32.and
                    (i32.lt_u
                      (get_local $1)
                      (i32.const 2147483647)
                    )
                    (i32.ne
                      (get_local $3)
                      (i32.const -1)
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (tee_local $2
                      (i32.and
                        (i32.add
                          (i32.sub
                            (get_local $6)
                            (get_local $1)
                          )
                          (tee_local $2
                            (i32.load
                              (i32.const 5768)
                            )
                          )
                        )
                        (i32.sub
                          (i32.const 0)
                          (get_local $2)
                        )
                      )
                    )
                    (i32.const 2147483647)
                  )
                  (if
                    (i32.eq
                      (call $_sbrk
                        (get_local $2)
                      )
                      (i32.const -1)
                    )
                    (block
                      (drop
                        (call $_sbrk
                          (get_local $4)
                        )
                      )
                      (br $label$break$L274)
                    )
                    (set_local $1
                      (i32.add
                        (get_local $2)
                        (get_local $1)
                      )
                    )
                  )
                )
              )
              (if
                (i32.ne
                  (get_local $3)
                  (i32.const -1)
                )
                (block
                  (set_local $2
                    (get_local $1)
                  )
                  (set_local $1
                    (get_local $3)
                  )
                  (br $jumpthreading$inner$13)
                )
              )
            )
            (i32.store
              (i32.const 5732)
              (i32.or
                (i32.load
                  (i32.const 5732)
                )
                (i32.const 4)
              )
            )
          )
        )
        (if
          (i32.lt_u
            (get_local $5)
            (i32.const 2147483647)
          )
          (if
            (i32.and
              (i32.lt_u
                (tee_local $1
                  (call $_sbrk
                    (get_local $5)
                  )
                )
                (tee_local $2
                  (call $_sbrk
                    (i32.const 0)
                  )
                )
              )
              (i32.and
                (i32.ne
                  (get_local $1)
                  (i32.const -1)
                )
                (i32.ne
                  (get_local $2)
                  (i32.const -1)
                )
              )
            )
            (br_if $jumpthreading$inner$13
              (i32.gt_u
                (tee_local $2
                  (i32.sub
                    (get_local $2)
                    (get_local $1)
                  )
                )
                (i32.add
                  (get_local $0)
                  (i32.const 40)
                )
              )
            )
          )
        )
        (br $jumpthreading$outer$13)
      )
      (i32.store
        (i32.const 5720)
        (tee_local $3
          (i32.add
            (i32.load
              (i32.const 5720)
            )
            (get_local $2)
          )
        )
      )
      (if
        (i32.gt_u
          (get_local $3)
          (i32.load
            (i32.const 5724)
          )
        )
        (i32.store
          (i32.const 5724)
          (get_local $3)
        )
      )
      (block $do-once38
        (if
          (tee_local $6
            (i32.load
              (i32.const 5312)
            )
          )
          (block
            (set_local $3
              (i32.const 5736)
            )
            (block $jumpthreading$outer$10
              (block $jumpthreading$inner$10
                (loop $while-in43
                  (br_if $jumpthreading$inner$10
                    (i32.eq
                      (get_local $1)
                      (i32.add
                        (tee_local $5
                          (i32.load
                            (get_local $3)
                          )
                        )
                        (tee_local $8
                          (i32.load
                            (tee_local $4
                              (i32.add
                                (get_local $3)
                                (i32.const 4)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                  (br_if $while-in43
                    (tee_local $3
                      (i32.load offset=8
                        (get_local $3)
                      )
                    )
                  )
                )
                (br $jumpthreading$outer$10)
              )
              (if
                (i32.eqz
                  (i32.and
                    (i32.load offset=12
                      (get_local $3)
                    )
                    (i32.const 8)
                  )
                )
                (if
                  (i32.and
                    (i32.lt_u
                      (get_local $6)
                      (get_local $1)
                    )
                    (i32.ge_u
                      (get_local $6)
                      (get_local $5)
                    )
                  )
                  (block
                    (i32.store
                      (get_local $4)
                      (i32.add
                        (get_local $8)
                        (get_local $2)
                      )
                    )
                    (set_local $5
                      (i32.load
                        (i32.const 5300)
                      )
                    )
                    (set_local $1
                      (i32.and
                        (i32.sub
                          (i32.const 0)
                          (tee_local $3
                            (i32.add
                              (get_local $6)
                              (i32.const 8)
                            )
                          )
                        )
                        (i32.const 7)
                      )
                    )
                    (i32.store
                      (i32.const 5312)
                      (tee_local $3
                        (i32.add
                          (get_local $6)
                          (if i32
                            (i32.and
                              (get_local $3)
                              (i32.const 7)
                            )
                            (get_local $1)
                            (tee_local $1
                              (i32.const 0)
                            )
                          )
                        )
                      )
                    )
                    (i32.store
                      (i32.const 5300)
                      (tee_local $1
                        (i32.add
                          (i32.sub
                            (get_local $2)
                            (get_local $1)
                          )
                          (get_local $5)
                        )
                      )
                    )
                    (i32.store offset=4
                      (get_local $3)
                      (i32.or
                        (get_local $1)
                        (i32.const 1)
                      )
                    )
                    (i32.store offset=4
                      (i32.add
                        (get_local $3)
                        (get_local $1)
                      )
                      (i32.const 40)
                    )
                    (i32.store
                      (i32.const 5316)
                      (i32.load
                        (i32.const 5776)
                      )
                    )
                    (br $do-once38)
                  )
                )
              )
            )
            (if
              (i32.lt_u
                (get_local $1)
                (tee_local $3
                  (i32.load
                    (i32.const 5304)
                  )
                )
              )
              (block
                (i32.store
                  (i32.const 5304)
                  (get_local $1)
                )
                (set_local $3
                  (get_local $1)
                )
              )
            )
            (set_local $4
              (i32.add
                (get_local $1)
                (get_local $2)
              )
            )
            (set_local $5
              (i32.const 5736)
            )
            (block $jumpthreading$outer$11
              (block $jumpthreading$inner$11
                (loop $while-in45
                  (br_if $jumpthreading$inner$11
                    (i32.eq
                      (i32.load
                        (get_local $5)
                      )
                      (get_local $4)
                    )
                  )
                  (br_if $while-in45
                    (tee_local $5
                      (i32.load offset=8
                        (get_local $5)
                      )
                    )
                  )
                  (set_local $3
                    (i32.const 5736)
                  )
                )
                (br $jumpthreading$outer$11)
              )
              (if
                (i32.and
                  (i32.load offset=12
                    (get_local $5)
                  )
                  (i32.const 8)
                )
                (set_local $3
                  (i32.const 5736)
                )
                (block
                  (i32.store
                    (get_local $5)
                    (get_local $1)
                  )
                  (i32.store
                    (tee_local $5
                      (i32.add
                        (get_local $5)
                        (i32.const 4)
                      )
                    )
                    (i32.add
                      (i32.load
                        (get_local $5)
                      )
                      (get_local $2)
                    )
                  )
                  (set_local $5
                    (i32.and
                      (i32.sub
                        (i32.const 0)
                        (tee_local $2
                          (i32.add
                            (get_local $1)
                            (i32.const 8)
                          )
                        )
                      )
                      (i32.const 7)
                    )
                  )
                  (set_local $11
                    (i32.and
                      (i32.sub
                        (i32.const 0)
                        (tee_local $8
                          (i32.add
                            (get_local $4)
                            (i32.const 8)
                          )
                        )
                      )
                      (i32.const 7)
                    )
                  )
                  (set_local $7
                    (i32.add
                      (tee_local $9
                        (i32.add
                          (get_local $1)
                          (if i32
                            (i32.and
                              (get_local $2)
                              (i32.const 7)
                            )
                            (get_local $5)
                            (i32.const 0)
                          )
                        )
                      )
                      (get_local $0)
                    )
                  )
                  (set_local $8
                    (i32.sub
                      (i32.sub
                        (tee_local $4
                          (i32.add
                            (get_local $4)
                            (if i32
                              (i32.and
                                (get_local $8)
                                (i32.const 7)
                              )
                              (get_local $11)
                              (i32.const 0)
                            )
                          )
                        )
                        (get_local $9)
                      )
                      (get_local $0)
                    )
                  )
                  (i32.store offset=4
                    (get_local $9)
                    (i32.or
                      (get_local $0)
                      (i32.const 3)
                    )
                  )
                  (block $do-once46
                    (if
                      (i32.eq
                        (get_local $4)
                        (get_local $6)
                      )
                      (block
                        (i32.store
                          (i32.const 5300)
                          (tee_local $0
                            (i32.add
                              (i32.load
                                (i32.const 5300)
                              )
                              (get_local $8)
                            )
                          )
                        )
                        (i32.store
                          (i32.const 5312)
                          (get_local $7)
                        )
                        (i32.store offset=4
                          (get_local $7)
                          (i32.or
                            (get_local $0)
                            (i32.const 1)
                          )
                        )
                      )
                      (block
                        (if
                          (i32.eq
                            (get_local $4)
                            (i32.load
                              (i32.const 5308)
                            )
                          )
                          (block
                            (i32.store
                              (i32.const 5296)
                              (tee_local $0
                                (i32.add
                                  (i32.load
                                    (i32.const 5296)
                                  )
                                  (get_local $8)
                                )
                              )
                            )
                            (i32.store
                              (i32.const 5308)
                              (get_local $7)
                            )
                            (i32.store offset=4
                              (get_local $7)
                              (i32.or
                                (get_local $0)
                                (i32.const 1)
                              )
                            )
                            (i32.store
                              (i32.add
                                (get_local $7)
                                (get_local $0)
                              )
                              (get_local $0)
                            )
                            (br $do-once46)
                          )
                        )
                        (set_local $5
                          (if i32
                            (i32.eq
                              (i32.and
                                (tee_local $0
                                  (i32.load offset=4
                                    (get_local $4)
                                  )
                                )
                                (i32.const 3)
                              )
                              (i32.const 1)
                            )
                            (block i32
                              (set_local $11
                                (i32.and
                                  (get_local $0)
                                  (i32.const -8)
                                )
                              )
                              (set_local $5
                                (i32.shr_u
                                  (get_local $0)
                                  (i32.const 3)
                                )
                              )
                              (block $label$break$L326
                                (if
                                  (i32.lt_u
                                    (get_local $0)
                                    (i32.const 256)
                                  )
                                  (block
                                    (set_local $1
                                      (i32.load offset=12
                                        (get_local $4)
                                      )
                                    )
                                    (block $do-once49
                                      (if
                                        (i32.ne
                                          (tee_local $2
                                            (i32.load offset=8
                                              (get_local $4)
                                            )
                                          )
                                          (tee_local $0
                                            (i32.add
                                              (i32.shl
                                                (i32.shl
                                                  (get_local $5)
                                                  (i32.const 1)
                                                )
                                                (i32.const 2)
                                              )
                                              (i32.const 5328)
                                            )
                                          )
                                        )
                                        (block
                                          (if
                                            (i32.lt_u
                                              (get_local $2)
                                              (get_local $3)
                                            )
                                            (call $_abort)
                                          )
                                          (br_if $do-once49
                                            (i32.eq
                                              (i32.load offset=12
                                                (get_local $2)
                                              )
                                              (get_local $4)
                                            )
                                          )
                                          (call $_abort)
                                        )
                                      )
                                    )
                                    (if
                                      (i32.eq
                                        (get_local $1)
                                        (get_local $2)
                                      )
                                      (block
                                        (i32.store
                                          (i32.const 5288)
                                          (i32.and
                                            (i32.load
                                              (i32.const 5288)
                                            )
                                            (i32.xor
                                              (i32.shl
                                                (i32.const 1)
                                                (get_local $5)
                                              )
                                              (i32.const -1)
                                            )
                                          )
                                        )
                                        (br $label$break$L326)
                                      )
                                    )
                                    (block $do-once51
                                      (if
                                        (i32.eq
                                          (get_local $1)
                                          (get_local $0)
                                        )
                                        (set_local $18
                                          (i32.add
                                            (get_local $1)
                                            (i32.const 8)
                                          )
                                        )
                                        (block
                                          (if
                                            (i32.lt_u
                                              (get_local $1)
                                              (get_local $3)
                                            )
                                            (call $_abort)
                                          )
                                          (if
                                            (i32.eq
                                              (i32.load
                                                (tee_local $0
                                                  (i32.add
                                                    (get_local $1)
                                                    (i32.const 8)
                                                  )
                                                )
                                              )
                                              (get_local $4)
                                            )
                                            (block
                                              (set_local $18
                                                (get_local $0)
                                              )
                                              (br $do-once51)
                                            )
                                          )
                                          (call $_abort)
                                        )
                                      )
                                    )
                                    (i32.store offset=12
                                      (get_local $2)
                                      (get_local $1)
                                    )
                                    (i32.store
                                      (get_local $18)
                                      (get_local $2)
                                    )
                                  )
                                  (block
                                    (set_local $6
                                      (i32.load offset=24
                                        (get_local $4)
                                      )
                                    )
                                    (block $do-once53
                                      (if
                                        (i32.eq
                                          (tee_local $0
                                            (i32.load offset=12
                                              (get_local $4)
                                            )
                                          )
                                          (get_local $4)
                                        )
                                        (block
                                          (if
                                            (tee_local $0
                                              (i32.load
                                                (tee_local $2
                                                  (i32.add
                                                    (tee_local $1
                                                      (i32.add
                                                        (get_local $4)
                                                        (i32.const 16)
                                                      )
                                                    )
                                                    (i32.const 4)
                                                  )
                                                )
                                              )
                                            )
                                            (set_local $1
                                              (get_local $2)
                                            )
                                            (if
                                              (i32.eqz
                                                (tee_local $0
                                                  (i32.load
                                                    (get_local $1)
                                                  )
                                                )
                                              )
                                              (block
                                                (set_local $10
                                                  (i32.const 0)
                                                )
                                                (br $do-once53)
                                              )
                                            )
                                          )
                                          (loop $while-in56
                                            (if
                                              (tee_local $5
                                                (i32.load
                                                  (tee_local $2
                                                    (i32.add
                                                      (get_local $0)
                                                      (i32.const 20)
                                                    )
                                                  )
                                                )
                                              )
                                              (block
                                                (set_local $0
                                                  (get_local $5)
                                                )
                                                (set_local $1
                                                  (get_local $2)
                                                )
                                                (br $while-in56)
                                              )
                                            )
                                            (if
                                              (tee_local $5
                                                (i32.load
                                                  (tee_local $2
                                                    (i32.add
                                                      (get_local $0)
                                                      (i32.const 16)
                                                    )
                                                  )
                                                )
                                              )
                                              (block
                                                (set_local $0
                                                  (get_local $5)
                                                )
                                                (set_local $1
                                                  (get_local $2)
                                                )
                                                (br $while-in56)
                                              )
                                            )
                                          )
                                          (if
                                            (i32.lt_u
                                              (get_local $1)
                                              (get_local $3)
                                            )
                                            (call $_abort)
                                            (block
                                              (i32.store
                                                (get_local $1)
                                                (i32.const 0)
                                              )
                                              (set_local $10
                                                (get_local $0)
                                              )
                                            )
                                          )
                                        )
                                        (block
                                          (if
                                            (i32.lt_u
                                              (tee_local $1
                                                (i32.load offset=8
                                                  (get_local $4)
                                                )
                                              )
                                              (get_local $3)
                                            )
                                            (call $_abort)
                                          )
                                          (if
                                            (i32.ne
                                              (i32.load
                                                (tee_local $2
                                                  (i32.add
                                                    (get_local $1)
                                                    (i32.const 12)
                                                  )
                                                )
                                              )
                                              (get_local $4)
                                            )
                                            (call $_abort)
                                          )
                                          (if
                                            (i32.eq
                                              (i32.load
                                                (tee_local $3
                                                  (i32.add
                                                    (get_local $0)
                                                    (i32.const 8)
                                                  )
                                                )
                                              )
                                              (get_local $4)
                                            )
                                            (block
                                              (i32.store
                                                (get_local $2)
                                                (get_local $0)
                                              )
                                              (i32.store
                                                (get_local $3)
                                                (get_local $1)
                                              )
                                              (set_local $10
                                                (get_local $0)
                                              )
                                            )
                                            (call $_abort)
                                          )
                                        )
                                      )
                                    )
                                    (br_if $label$break$L326
                                      (i32.eqz
                                        (get_local $6)
                                      )
                                    )
                                    (block $do-once57
                                      (if
                                        (i32.eq
                                          (get_local $4)
                                          (i32.load
                                            (tee_local $1
                                              (i32.add
                                                (i32.shl
                                                  (tee_local $0
                                                    (i32.load offset=28
                                                      (get_local $4)
                                                    )
                                                  )
                                                  (i32.const 2)
                                                )
                                                (i32.const 5592)
                                              )
                                            )
                                          )
                                        )
                                        (block
                                          (i32.store
                                            (get_local $1)
                                            (get_local $10)
                                          )
                                          (br_if $do-once57
                                            (get_local $10)
                                          )
                                          (i32.store
                                            (i32.const 5292)
                                            (i32.and
                                              (i32.load
                                                (i32.const 5292)
                                              )
                                              (i32.xor
                                                (i32.shl
                                                  (i32.const 1)
                                                  (get_local $0)
                                                )
                                                (i32.const -1)
                                              )
                                            )
                                          )
                                          (br $label$break$L326)
                                        )
                                        (block
                                          (if
                                            (i32.lt_u
                                              (get_local $6)
                                              (i32.load
                                                (i32.const 5304)
                                              )
                                            )
                                            (call $_abort)
                                          )
                                          (if
                                            (i32.eq
                                              (i32.load
                                                (tee_local $0
                                                  (i32.add
                                                    (get_local $6)
                                                    (i32.const 16)
                                                  )
                                                )
                                              )
                                              (get_local $4)
                                            )
                                            (i32.store
                                              (get_local $0)
                                              (get_local $10)
                                            )
                                            (i32.store offset=20
                                              (get_local $6)
                                              (get_local $10)
                                            )
                                          )
                                          (br_if $label$break$L326
                                            (i32.eqz
                                              (get_local $10)
                                            )
                                          )
                                        )
                                      )
                                    )
                                    (if
                                      (i32.lt_u
                                        (get_local $10)
                                        (tee_local $1
                                          (i32.load
                                            (i32.const 5304)
                                          )
                                        )
                                      )
                                      (call $_abort)
                                    )
                                    (i32.store offset=24
                                      (get_local $10)
                                      (get_local $6)
                                    )
                                    (if
                                      (tee_local $0
                                        (i32.load
                                          (tee_local $2
                                            (i32.add
                                              (get_local $4)
                                              (i32.const 16)
                                            )
                                          )
                                        )
                                      )
                                      (if
                                        (i32.lt_u
                                          (get_local $0)
                                          (get_local $1)
                                        )
                                        (call $_abort)
                                        (block
                                          (i32.store offset=16
                                            (get_local $10)
                                            (get_local $0)
                                          )
                                          (i32.store offset=24
                                            (get_local $0)
                                            (get_local $10)
                                          )
                                        )
                                      )
                                    )
                                    (br_if $label$break$L326
                                      (i32.eqz
                                        (tee_local $0
                                          (i32.load offset=4
                                            (get_local $2)
                                          )
                                        )
                                      )
                                    )
                                    (if
                                      (i32.lt_u
                                        (get_local $0)
                                        (i32.load
                                          (i32.const 5304)
                                        )
                                      )
                                      (call $_abort)
                                      (block
                                        (i32.store offset=20
                                          (get_local $10)
                                          (get_local $0)
                                        )
                                        (i32.store offset=24
                                          (get_local $0)
                                          (get_local $10)
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                              (set_local $4
                                (i32.add
                                  (get_local $4)
                                  (get_local $11)
                                )
                              )
                              (i32.add
                                (get_local $11)
                                (get_local $8)
                              )
                            )
                            (get_local $8)
                          )
                        )
                        (i32.store
                          (tee_local $0
                            (i32.add
                              (get_local $4)
                              (i32.const 4)
                            )
                          )
                          (i32.and
                            (i32.load
                              (get_local $0)
                            )
                            (i32.const -2)
                          )
                        )
                        (i32.store offset=4
                          (get_local $7)
                          (i32.or
                            (get_local $5)
                            (i32.const 1)
                          )
                        )
                        (i32.store
                          (i32.add
                            (get_local $7)
                            (get_local $5)
                          )
                          (get_local $5)
                        )
                        (set_local $1
                          (i32.shr_u
                            (get_local $5)
                            (i32.const 3)
                          )
                        )
                        (if
                          (i32.lt_u
                            (get_local $5)
                            (i32.const 256)
                          )
                          (block
                            (set_local $0
                              (i32.add
                                (i32.shl
                                  (i32.shl
                                    (get_local $1)
                                    (i32.const 1)
                                  )
                                  (i32.const 2)
                                )
                                (i32.const 5328)
                              )
                            )
                            (block $do-once61
                              (if
                                (i32.and
                                  (tee_local $2
                                    (i32.load
                                      (i32.const 5288)
                                    )
                                  )
                                  (tee_local $1
                                    (i32.shl
                                      (i32.const 1)
                                      (get_local $1)
                                    )
                                  )
                                )
                                (block
                                  (if
                                    (i32.ge_u
                                      (tee_local $2
                                        (i32.load
                                          (tee_local $1
                                            (i32.add
                                              (get_local $0)
                                              (i32.const 8)
                                            )
                                          )
                                        )
                                      )
                                      (i32.load
                                        (i32.const 5304)
                                      )
                                    )
                                    (block
                                      (set_local $12
                                        (get_local $2)
                                      )
                                      (set_local $19
                                        (get_local $1)
                                      )
                                      (br $do-once61)
                                    )
                                  )
                                  (call $_abort)
                                )
                                (block
                                  (i32.store
                                    (i32.const 5288)
                                    (i32.or
                                      (get_local $2)
                                      (get_local $1)
                                    )
                                  )
                                  (set_local $12
                                    (get_local $0)
                                  )
                                  (set_local $19
                                    (i32.add
                                      (get_local $0)
                                      (i32.const 8)
                                    )
                                  )
                                )
                              )
                            )
                            (i32.store
                              (get_local $19)
                              (get_local $7)
                            )
                            (i32.store offset=12
                              (get_local $12)
                              (get_local $7)
                            )
                            (i32.store offset=8
                              (get_local $7)
                              (get_local $12)
                            )
                            (i32.store offset=12
                              (get_local $7)
                              (get_local $0)
                            )
                            (br $do-once46)
                          )
                        )
                        (set_local $0
                          (i32.add
                            (i32.shl
                              (tee_local $1
                                (block $do-once63 i32
                                  (if i32
                                    (tee_local $0
                                      (i32.shr_u
                                        (get_local $5)
                                        (i32.const 8)
                                      )
                                    )
                                    (block i32
                                      (drop
                                        (br_if $do-once63
                                          (i32.const 31)
                                          (i32.gt_u
                                            (get_local $5)
                                            (i32.const 16777215)
                                          )
                                        )
                                      )
                                      (i32.or
                                        (i32.and
                                          (i32.shr_u
                                            (get_local $5)
                                            (i32.add
                                              (tee_local $0
                                                (i32.add
                                                  (i32.sub
                                                    (i32.const 14)
                                                    (i32.or
                                                      (i32.or
                                                        (tee_local $2
                                                          (i32.and
                                                            (i32.shr_u
                                                              (i32.add
                                                                (tee_local $1
                                                                  (i32.shl
                                                                    (get_local $0)
                                                                    (tee_local $0
                                                                      (i32.and
                                                                        (i32.shr_u
                                                                          (i32.add
                                                                            (get_local $0)
                                                                            (i32.const 1048320)
                                                                          )
                                                                          (i32.const 16)
                                                                        )
                                                                        (i32.const 8)
                                                                      )
                                                                    )
                                                                  )
                                                                )
                                                                (i32.const 520192)
                                                              )
                                                              (i32.const 16)
                                                            )
                                                            (i32.const 4)
                                                          )
                                                        )
                                                        (get_local $0)
                                                      )
                                                      (tee_local $1
                                                        (i32.and
                                                          (i32.shr_u
                                                            (i32.add
                                                              (tee_local $0
                                                                (i32.shl
                                                                  (get_local $1)
                                                                  (get_local $2)
                                                                )
                                                              )
                                                              (i32.const 245760)
                                                            )
                                                            (i32.const 16)
                                                          )
                                                          (i32.const 2)
                                                        )
                                                      )
                                                    )
                                                  )
                                                  (i32.shr_u
                                                    (i32.shl
                                                      (get_local $0)
                                                      (get_local $1)
                                                    )
                                                    (i32.const 15)
                                                  )
                                                )
                                              )
                                              (i32.const 7)
                                            )
                                          )
                                          (i32.const 1)
                                        )
                                        (i32.shl
                                          (get_local $0)
                                          (i32.const 1)
                                        )
                                      )
                                    )
                                    (i32.const 0)
                                  )
                                )
                              )
                              (i32.const 2)
                            )
                            (i32.const 5592)
                          )
                        )
                        (i32.store offset=28
                          (get_local $7)
                          (get_local $1)
                        )
                        (i32.store offset=4
                          (tee_local $2
                            (i32.add
                              (get_local $7)
                              (i32.const 16)
                            )
                          )
                          (i32.const 0)
                        )
                        (i32.store
                          (get_local $2)
                          (i32.const 0)
                        )
                        (if
                          (i32.eqz
                            (i32.and
                              (tee_local $2
                                (i32.load
                                  (i32.const 5292)
                                )
                              )
                              (tee_local $3
                                (i32.shl
                                  (i32.const 1)
                                  (get_local $1)
                                )
                              )
                            )
                          )
                          (block
                            (i32.store
                              (i32.const 5292)
                              (i32.or
                                (get_local $2)
                                (get_local $3)
                              )
                            )
                            (i32.store
                              (get_local $0)
                              (get_local $7)
                            )
                            (i32.store offset=24
                              (get_local $7)
                              (get_local $0)
                            )
                            (i32.store offset=12
                              (get_local $7)
                              (get_local $7)
                            )
                            (i32.store offset=8
                              (get_local $7)
                              (get_local $7)
                            )
                            (br $do-once46)
                          )
                        )
                        (set_local $0
                          (i32.load
                            (get_local $0)
                          )
                        )
                        (set_local $2
                          (i32.sub
                            (i32.const 25)
                            (i32.shr_u
                              (get_local $1)
                              (i32.const 1)
                            )
                          )
                        )
                        (set_local $1
                          (i32.shl
                            (get_local $5)
                            (if i32
                              (i32.eq
                                (get_local $1)
                                (i32.const 31)
                              )
                              (i32.const 0)
                              (get_local $2)
                            )
                          )
                        )
                        (block $jumpthreading$outer$7
                          (block $jumpthreading$inner$7
                            (block $jumpthreading$inner$6
                              (loop $while-in66
                                (br_if $jumpthreading$inner$7
                                  (i32.eq
                                    (i32.and
                                      (i32.load offset=4
                                        (get_local $0)
                                      )
                                      (i32.const -8)
                                    )
                                    (get_local $5)
                                  )
                                )
                                (set_local $2
                                  (i32.shl
                                    (get_local $1)
                                    (i32.const 1)
                                  )
                                )
                                (br_if $jumpthreading$inner$6
                                  (i32.eqz
                                    (tee_local $3
                                      (i32.load
                                        (tee_local $1
                                          (i32.add
                                            (i32.add
                                              (get_local $0)
                                              (i32.const 16)
                                            )
                                            (i32.shl
                                              (i32.shr_u
                                                (get_local $1)
                                                (i32.const 31)
                                              )
                                              (i32.const 2)
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                                (set_local $1
                                  (get_local $2)
                                )
                                (set_local $0
                                  (get_local $3)
                                )
                                (br $while-in66)
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $1)
                                (i32.load
                                  (i32.const 5304)
                                )
                              )
                              (call $_abort)
                              (block
                                (i32.store
                                  (get_local $1)
                                  (get_local $7)
                                )
                                (i32.store offset=24
                                  (get_local $7)
                                  (get_local $0)
                                )
                                (i32.store offset=12
                                  (get_local $7)
                                  (get_local $7)
                                )
                                (i32.store offset=8
                                  (get_local $7)
                                  (get_local $7)
                                )
                                (br $do-once46)
                              )
                            )
                            (br $jumpthreading$outer$7)
                          )
                          (if
                            (i32.and
                              (i32.ge_u
                                (tee_local $1
                                  (i32.load
                                    (tee_local $2
                                      (i32.add
                                        (get_local $0)
                                        (i32.const 8)
                                      )
                                    )
                                  )
                                )
                                (tee_local $3
                                  (i32.load
                                    (i32.const 5304)
                                  )
                                )
                              )
                              (i32.ge_u
                                (get_local $0)
                                (get_local $3)
                              )
                            )
                            (block
                              (i32.store offset=12
                                (get_local $1)
                                (get_local $7)
                              )
                              (i32.store
                                (get_local $2)
                                (get_local $7)
                              )
                              (i32.store offset=8
                                (get_local $7)
                                (get_local $1)
                              )
                              (i32.store offset=12
                                (get_local $7)
                                (get_local $0)
                              )
                              (i32.store offset=24
                                (get_local $7)
                                (i32.const 0)
                              )
                            )
                            (call $_abort)
                          )
                        )
                      )
                    )
                  )
                  (set_global $STACKTOP
                    (get_local $13)
                  )
                  (return
                    (i32.add
                      (get_local $9)
                      (i32.const 8)
                    )
                  )
                )
              )
            )
            (loop $while-in68
              (block $while-out67
                (if
                  (i32.le_u
                    (tee_local $5
                      (i32.load
                        (get_local $3)
                      )
                    )
                    (get_local $6)
                  )
                  (br_if $while-out67
                    (i32.gt_u
                      (tee_local $10
                        (i32.add
                          (get_local $5)
                          (i32.load offset=4
                            (get_local $3)
                          )
                        )
                      )
                      (get_local $6)
                    )
                  )
                )
                (set_local $3
                  (i32.load offset=8
                    (get_local $3)
                  )
                )
                (br $while-in68)
              )
            )
            (set_local $4
              (i32.and
                (i32.sub
                  (i32.const 0)
                  (tee_local $5
                    (i32.add
                      (tee_local $3
                        (i32.add
                          (get_local $10)
                          (i32.const -47)
                        )
                      )
                      (i32.const 8)
                    )
                  )
                )
                (i32.const 7)
              )
            )
            (set_local $8
              (i32.add
                (if i32
                  (i32.lt_u
                    (tee_local $3
                      (i32.add
                        (get_local $3)
                        (if i32
                          (i32.and
                            (get_local $5)
                            (i32.const 7)
                          )
                          (get_local $4)
                          (i32.const 0)
                        )
                      )
                    )
                    (tee_local $12
                      (i32.add
                        (get_local $6)
                        (i32.const 16)
                      )
                    )
                  )
                  (tee_local $3
                    (get_local $6)
                  )
                  (get_local $3)
                )
                (i32.const 8)
              )
            )
            (set_local $5
              (i32.add
                (get_local $3)
                (i32.const 24)
              )
            )
            (set_local $11
              (i32.add
                (get_local $2)
                (i32.const -40)
              )
            )
            (set_local $4
              (i32.and
                (i32.sub
                  (i32.const 0)
                  (tee_local $7
                    (i32.add
                      (get_local $1)
                      (i32.const 8)
                    )
                  )
                )
                (i32.const 7)
              )
            )
            (i32.store
              (i32.const 5312)
              (tee_local $7
                (i32.add
                  (get_local $1)
                  (if i32
                    (i32.and
                      (get_local $7)
                      (i32.const 7)
                    )
                    (get_local $4)
                    (tee_local $4
                      (i32.const 0)
                    )
                  )
                )
              )
            )
            (i32.store
              (i32.const 5300)
              (tee_local $4
                (i32.sub
                  (get_local $11)
                  (get_local $4)
                )
              )
            )
            (i32.store offset=4
              (get_local $7)
              (i32.or
                (get_local $4)
                (i32.const 1)
              )
            )
            (i32.store offset=4
              (i32.add
                (get_local $7)
                (get_local $4)
              )
              (i32.const 40)
            )
            (i32.store
              (i32.const 5316)
              (i32.load
                (i32.const 5776)
              )
            )
            (i32.store
              (tee_local $4
                (i32.add
                  (get_local $3)
                  (i32.const 4)
                )
              )
              (i32.const 27)
            )
            (i64.store align=4
              (get_local $8)
              (i64.load align=4
                (i32.const 5736)
              )
            )
            (i64.store offset=8 align=4
              (get_local $8)
              (i64.load align=4
                (i32.const 5744)
              )
            )
            (i32.store
              (i32.const 5736)
              (get_local $1)
            )
            (i32.store
              (i32.const 5740)
              (get_local $2)
            )
            (i32.store
              (i32.const 5748)
              (i32.const 0)
            )
            (i32.store
              (i32.const 5744)
              (get_local $8)
            )
            (set_local $1
              (get_local $5)
            )
            (loop $while-in70
              (i32.store
                (tee_local $1
                  (i32.add
                    (get_local $1)
                    (i32.const 4)
                  )
                )
                (i32.const 7)
              )
              (br_if $while-in70
                (i32.lt_u
                  (i32.add
                    (get_local $1)
                    (i32.const 4)
                  )
                  (get_local $10)
                )
              )
            )
            (if
              (i32.ne
                (get_local $3)
                (get_local $6)
              )
              (block
                (i32.store
                  (get_local $4)
                  (i32.and
                    (i32.load
                      (get_local $4)
                    )
                    (i32.const -2)
                  )
                )
                (i32.store offset=4
                  (get_local $6)
                  (i32.or
                    (tee_local $4
                      (i32.sub
                        (get_local $3)
                        (get_local $6)
                      )
                    )
                    (i32.const 1)
                  )
                )
                (i32.store
                  (get_local $3)
                  (get_local $4)
                )
                (set_local $2
                  (i32.shr_u
                    (get_local $4)
                    (i32.const 3)
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $4)
                    (i32.const 256)
                  )
                  (block
                    (set_local $1
                      (i32.add
                        (i32.shl
                          (i32.shl
                            (get_local $2)
                            (i32.const 1)
                          )
                          (i32.const 2)
                        )
                        (i32.const 5328)
                      )
                    )
                    (if
                      (i32.and
                        (tee_local $3
                          (i32.load
                            (i32.const 5288)
                          )
                        )
                        (tee_local $2
                          (i32.shl
                            (i32.const 1)
                            (get_local $2)
                          )
                        )
                      )
                      (if
                        (i32.lt_u
                          (tee_local $3
                            (i32.load
                              (tee_local $2
                                (i32.add
                                  (get_local $1)
                                  (i32.const 8)
                                )
                              )
                            )
                          )
                          (i32.load
                            (i32.const 5304)
                          )
                        )
                        (call $_abort)
                        (block
                          (set_local $9
                            (get_local $3)
                          )
                          (set_local $20
                            (get_local $2)
                          )
                        )
                      )
                      (block
                        (i32.store
                          (i32.const 5288)
                          (i32.or
                            (get_local $3)
                            (get_local $2)
                          )
                        )
                        (set_local $9
                          (get_local $1)
                        )
                        (set_local $20
                          (i32.add
                            (get_local $1)
                            (i32.const 8)
                          )
                        )
                      )
                    )
                    (i32.store
                      (get_local $20)
                      (get_local $6)
                    )
                    (i32.store offset=12
                      (get_local $9)
                      (get_local $6)
                    )
                    (i32.store offset=8
                      (get_local $6)
                      (get_local $9)
                    )
                    (i32.store offset=12
                      (get_local $6)
                      (get_local $1)
                    )
                    (br $do-once38)
                  )
                )
                (set_local $1
                  (i32.add
                    (i32.shl
                      (tee_local $2
                        (if i32
                          (tee_local $1
                            (i32.shr_u
                              (get_local $4)
                              (i32.const 8)
                            )
                          )
                          (if i32
                            (i32.gt_u
                              (get_local $4)
                              (i32.const 16777215)
                            )
                            (i32.const 31)
                            (i32.or
                              (i32.and
                                (i32.shr_u
                                  (get_local $4)
                                  (i32.add
                                    (tee_local $1
                                      (i32.add
                                        (i32.sub
                                          (i32.const 14)
                                          (i32.or
                                            (i32.or
                                              (tee_local $3
                                                (i32.and
                                                  (i32.shr_u
                                                    (i32.add
                                                      (tee_local $2
                                                        (i32.shl
                                                          (get_local $1)
                                                          (tee_local $1
                                                            (i32.and
                                                              (i32.shr_u
                                                                (i32.add
                                                                  (get_local $1)
                                                                  (i32.const 1048320)
                                                                )
                                                                (i32.const 16)
                                                              )
                                                              (i32.const 8)
                                                            )
                                                          )
                                                        )
                                                      )
                                                      (i32.const 520192)
                                                    )
                                                    (i32.const 16)
                                                  )
                                                  (i32.const 4)
                                                )
                                              )
                                              (get_local $1)
                                            )
                                            (tee_local $2
                                              (i32.and
                                                (i32.shr_u
                                                  (i32.add
                                                    (tee_local $1
                                                      (i32.shl
                                                        (get_local $2)
                                                        (get_local $3)
                                                      )
                                                    )
                                                    (i32.const 245760)
                                                  )
                                                  (i32.const 16)
                                                )
                                                (i32.const 2)
                                              )
                                            )
                                          )
                                        )
                                        (i32.shr_u
                                          (i32.shl
                                            (get_local $1)
                                            (get_local $2)
                                          )
                                          (i32.const 15)
                                        )
                                      )
                                    )
                                    (i32.const 7)
                                  )
                                )
                                (i32.const 1)
                              )
                              (i32.shl
                                (get_local $1)
                                (i32.const 1)
                              )
                            )
                          )
                          (i32.const 0)
                        )
                      )
                      (i32.const 2)
                    )
                    (i32.const 5592)
                  )
                )
                (i32.store offset=28
                  (get_local $6)
                  (get_local $2)
                )
                (i32.store offset=20
                  (get_local $6)
                  (i32.const 0)
                )
                (i32.store
                  (get_local $12)
                  (i32.const 0)
                )
                (if
                  (i32.eqz
                    (i32.and
                      (tee_local $3
                        (i32.load
                          (i32.const 5292)
                        )
                      )
                      (tee_local $5
                        (i32.shl
                          (i32.const 1)
                          (get_local $2)
                        )
                      )
                    )
                  )
                  (block
                    (i32.store
                      (i32.const 5292)
                      (i32.or
                        (get_local $3)
                        (get_local $5)
                      )
                    )
                    (i32.store
                      (get_local $1)
                      (get_local $6)
                    )
                    (i32.store offset=24
                      (get_local $6)
                      (get_local $1)
                    )
                    (i32.store offset=12
                      (get_local $6)
                      (get_local $6)
                    )
                    (i32.store offset=8
                      (get_local $6)
                      (get_local $6)
                    )
                    (br $do-once38)
                  )
                )
                (set_local $1
                  (i32.load
                    (get_local $1)
                  )
                )
                (set_local $3
                  (i32.sub
                    (i32.const 25)
                    (i32.shr_u
                      (get_local $2)
                      (i32.const 1)
                    )
                  )
                )
                (set_local $2
                  (i32.shl
                    (get_local $4)
                    (if i32
                      (i32.eq
                        (get_local $2)
                        (i32.const 31)
                      )
                      (i32.const 0)
                      (get_local $3)
                    )
                  )
                )
                (block $jumpthreading$outer$9
                  (block $jumpthreading$inner$9
                    (block $jumpthreading$inner$8
                      (loop $while-in72
                        (br_if $jumpthreading$inner$9
                          (i32.eq
                            (i32.and
                              (i32.load offset=4
                                (get_local $1)
                              )
                              (i32.const -8)
                            )
                            (get_local $4)
                          )
                        )
                        (set_local $3
                          (i32.shl
                            (get_local $2)
                            (i32.const 1)
                          )
                        )
                        (br_if $jumpthreading$inner$8
                          (i32.eqz
                            (tee_local $5
                              (i32.load
                                (tee_local $2
                                  (i32.add
                                    (i32.add
                                      (get_local $1)
                                      (i32.const 16)
                                    )
                                    (i32.shl
                                      (i32.shr_u
                                        (get_local $2)
                                        (i32.const 31)
                                      )
                                      (i32.const 2)
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                        (set_local $2
                          (get_local $3)
                        )
                        (set_local $1
                          (get_local $5)
                        )
                        (br $while-in72)
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $2)
                        (i32.load
                          (i32.const 5304)
                        )
                      )
                      (call $_abort)
                      (block
                        (i32.store
                          (get_local $2)
                          (get_local $6)
                        )
                        (i32.store offset=24
                          (get_local $6)
                          (get_local $1)
                        )
                        (i32.store offset=12
                          (get_local $6)
                          (get_local $6)
                        )
                        (i32.store offset=8
                          (get_local $6)
                          (get_local $6)
                        )
                        (br $do-once38)
                      )
                    )
                    (br $jumpthreading$outer$9)
                  )
                  (if
                    (i32.and
                      (i32.ge_u
                        (tee_local $2
                          (i32.load
                            (tee_local $3
                              (i32.add
                                (get_local $1)
                                (i32.const 8)
                              )
                            )
                          )
                        )
                        (tee_local $5
                          (i32.load
                            (i32.const 5304)
                          )
                        )
                      )
                      (i32.ge_u
                        (get_local $1)
                        (get_local $5)
                      )
                    )
                    (block
                      (i32.store offset=12
                        (get_local $2)
                        (get_local $6)
                      )
                      (i32.store
                        (get_local $3)
                        (get_local $6)
                      )
                      (i32.store offset=8
                        (get_local $6)
                        (get_local $2)
                      )
                      (i32.store offset=12
                        (get_local $6)
                        (get_local $1)
                      )
                      (i32.store offset=24
                        (get_local $6)
                        (i32.const 0)
                      )
                    )
                    (call $_abort)
                  )
                )
              )
            )
          )
          (block
            (if
              (i32.or
                (i32.eqz
                  (tee_local $3
                    (i32.load
                      (i32.const 5304)
                    )
                  )
                )
                (i32.lt_u
                  (get_local $1)
                  (get_local $3)
                )
              )
              (i32.store
                (i32.const 5304)
                (get_local $1)
              )
            )
            (i32.store
              (i32.const 5736)
              (get_local $1)
            )
            (i32.store
              (i32.const 5740)
              (get_local $2)
            )
            (i32.store
              (i32.const 5748)
              (i32.const 0)
            )
            (i32.store
              (i32.const 5324)
              (i32.load
                (i32.const 5760)
              )
            )
            (i32.store
              (i32.const 5320)
              (i32.const -1)
            )
            (set_local $3
              (i32.const 0)
            )
            (loop $while-in41
              (i32.store offset=12
                (tee_local $5
                  (i32.add
                    (i32.shl
                      (i32.shl
                        (get_local $3)
                        (i32.const 1)
                      )
                      (i32.const 2)
                    )
                    (i32.const 5328)
                  )
                )
                (get_local $5)
              )
              (i32.store offset=8
                (get_local $5)
                (get_local $5)
              )
              (br_if $while-in41
                (i32.ne
                  (tee_local $3
                    (i32.add
                      (get_local $3)
                      (i32.const 1)
                    )
                  )
                  (i32.const 32)
                )
              )
            )
            (set_local $3
              (i32.add
                (get_local $2)
                (i32.const -40)
              )
            )
            (set_local $2
              (i32.and
                (i32.sub
                  (i32.const 0)
                  (tee_local $5
                    (i32.add
                      (get_local $1)
                      (i32.const 8)
                    )
                  )
                )
                (i32.const 7)
              )
            )
            (i32.store
              (i32.const 5312)
              (tee_local $1
                (i32.add
                  (get_local $1)
                  (if i32
                    (i32.and
                      (get_local $5)
                      (i32.const 7)
                    )
                    (get_local $2)
                    (tee_local $2
                      (i32.const 0)
                    )
                  )
                )
              )
            )
            (i32.store
              (i32.const 5300)
              (tee_local $2
                (i32.sub
                  (get_local $3)
                  (get_local $2)
                )
              )
            )
            (i32.store offset=4
              (get_local $1)
              (i32.or
                (get_local $2)
                (i32.const 1)
              )
            )
            (i32.store offset=4
              (i32.add
                (get_local $1)
                (get_local $2)
              )
              (i32.const 40)
            )
            (i32.store
              (i32.const 5316)
              (i32.load
                (i32.const 5776)
              )
            )
          )
        )
      )
      (if
        (i32.gt_u
          (tee_local $1
            (i32.load
              (i32.const 5300)
            )
          )
          (get_local $0)
        )
        (block
          (i32.store
            (i32.const 5300)
            (tee_local $2
              (i32.sub
                (get_local $1)
                (get_local $0)
              )
            )
          )
          (i32.store
            (i32.const 5312)
            (tee_local $3
              (i32.add
                (tee_local $1
                  (i32.load
                    (i32.const 5312)
                  )
                )
                (get_local $0)
              )
            )
          )
          (i32.store offset=4
            (get_local $3)
            (i32.or
              (get_local $2)
              (i32.const 1)
            )
          )
          (i32.store offset=4
            (get_local $1)
            (i32.or
              (get_local $0)
              (i32.const 3)
            )
          )
          (set_global $STACKTOP
            (get_local $13)
          )
          (return
            (i32.add
              (get_local $1)
              (i32.const 8)
            )
          )
        )
      )
    )
    (i32.store
      (call $___errno_location)
      (i32.const 12)
    )
    (set_global $STACKTOP
      (get_local $13)
    )
    (i32.const 0)
  )
  (func $_free (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 i32)
    (if
      (i32.eqz
        (get_local $0)
      )
      (return)
    )
    (if
      (i32.lt_u
        (tee_local $1
          (i32.add
            (get_local $0)
            (i32.const -8)
          )
        )
        (tee_local $11
          (i32.load
            (i32.const 5304)
          )
        )
      )
      (call $_abort)
    )
    (if
      (i32.eq
        (tee_local $8
          (i32.and
            (tee_local $0
              (i32.load
                (i32.add
                  (get_local $0)
                  (i32.const -4)
                )
              )
            )
            (i32.const 3)
          )
        )
        (i32.const 1)
      )
      (call $_abort)
    )
    (set_local $6
      (i32.add
        (get_local $1)
        (tee_local $4
          (i32.and
            (get_local $0)
            (i32.const -8)
          )
        )
      )
    )
    (block $do-once
      (if
        (i32.and
          (get_local $0)
          (i32.const 1)
        )
        (block
          (set_local $3
            (get_local $1)
          )
          (set_local $2
            (get_local $4)
          )
        )
        (block
          (if
            (i32.eqz
              (get_local $8)
            )
            (return)
          )
          (if
            (i32.lt_u
              (tee_local $0
                (i32.add
                  (get_local $1)
                  (i32.sub
                    (i32.const 0)
                    (tee_local $8
                      (i32.load
                        (get_local $1)
                      )
                    )
                  )
                )
              )
              (get_local $11)
            )
            (call $_abort)
          )
          (set_local $1
            (i32.add
              (get_local $8)
              (get_local $4)
            )
          )
          (if
            (i32.eq
              (get_local $0)
              (i32.load
                (i32.const 5308)
              )
            )
            (block
              (if
                (i32.ne
                  (i32.and
                    (tee_local $3
                      (i32.load
                        (tee_local $2
                          (i32.add
                            (get_local $6)
                            (i32.const 4)
                          )
                        )
                      )
                    )
                    (i32.const 3)
                  )
                  (i32.const 3)
                )
                (block
                  (set_local $3
                    (get_local $0)
                  )
                  (set_local $2
                    (get_local $1)
                  )
                  (br $do-once)
                )
              )
              (i32.store
                (i32.const 5296)
                (get_local $1)
              )
              (i32.store
                (get_local $2)
                (i32.and
                  (get_local $3)
                  (i32.const -2)
                )
              )
              (i32.store offset=4
                (get_local $0)
                (i32.or
                  (get_local $1)
                  (i32.const 1)
                )
              )
              (i32.store
                (i32.add
                  (get_local $0)
                  (get_local $1)
                )
                (get_local $1)
              )
              (return)
            )
          )
          (set_local $10
            (i32.shr_u
              (get_local $8)
              (i32.const 3)
            )
          )
          (if
            (i32.lt_u
              (get_local $8)
              (i32.const 256)
            )
            (block
              (set_local $3
                (i32.load offset=12
                  (get_local $0)
                )
              )
              (if
                (i32.ne
                  (tee_local $4
                    (i32.load offset=8
                      (get_local $0)
                    )
                  )
                  (tee_local $2
                    (i32.add
                      (i32.shl
                        (i32.shl
                          (get_local $10)
                          (i32.const 1)
                        )
                        (i32.const 2)
                      )
                      (i32.const 5328)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $4)
                      (get_local $11)
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.ne
                      (i32.load offset=12
                        (get_local $4)
                      )
                      (get_local $0)
                    )
                    (call $_abort)
                  )
                )
              )
              (if
                (i32.eq
                  (get_local $3)
                  (get_local $4)
                )
                (block
                  (i32.store
                    (i32.const 5288)
                    (i32.and
                      (i32.load
                        (i32.const 5288)
                      )
                      (i32.xor
                        (i32.shl
                          (i32.const 1)
                          (get_local $10)
                        )
                        (i32.const -1)
                      )
                    )
                  )
                  (set_local $3
                    (get_local $0)
                  )
                  (set_local $2
                    (get_local $1)
                  )
                  (br $do-once)
                )
              )
              (if
                (i32.eq
                  (get_local $3)
                  (get_local $2)
                )
                (set_local $5
                  (i32.add
                    (get_local $3)
                    (i32.const 8)
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $3)
                      (get_local $11)
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $2
                          (i32.add
                            (get_local $3)
                            (i32.const 8)
                          )
                        )
                      )
                      (get_local $0)
                    )
                    (set_local $5
                      (get_local $2)
                    )
                    (call $_abort)
                  )
                )
              )
              (i32.store offset=12
                (get_local $4)
                (get_local $3)
              )
              (i32.store
                (get_local $5)
                (get_local $4)
              )
              (set_local $3
                (get_local $0)
              )
              (set_local $2
                (get_local $1)
              )
              (br $do-once)
            )
          )
          (set_local $12
            (i32.load offset=24
              (get_local $0)
            )
          )
          (block $do-once0
            (if
              (i32.eq
                (tee_local $4
                  (i32.load offset=12
                    (get_local $0)
                  )
                )
                (get_local $0)
              )
              (block
                (if
                  (tee_local $4
                    (i32.load
                      (tee_local $8
                        (i32.add
                          (tee_local $5
                            (i32.add
                              (get_local $0)
                              (i32.const 16)
                            )
                          )
                          (i32.const 4)
                        )
                      )
                    )
                  )
                  (set_local $5
                    (get_local $8)
                  )
                  (if
                    (i32.eqz
                      (tee_local $4
                        (i32.load
                          (get_local $5)
                        )
                      )
                    )
                    (block
                      (set_local $7
                        (i32.const 0)
                      )
                      (br $do-once0)
                    )
                  )
                )
                (loop $while-in
                  (if
                    (tee_local $10
                      (i32.load
                        (tee_local $8
                          (i32.add
                            (get_local $4)
                            (i32.const 20)
                          )
                        )
                      )
                    )
                    (block
                      (set_local $4
                        (get_local $10)
                      )
                      (set_local $5
                        (get_local $8)
                      )
                      (br $while-in)
                    )
                  )
                  (if
                    (tee_local $10
                      (i32.load
                        (tee_local $8
                          (i32.add
                            (get_local $4)
                            (i32.const 16)
                          )
                        )
                      )
                    )
                    (block
                      (set_local $4
                        (get_local $10)
                      )
                      (set_local $5
                        (get_local $8)
                      )
                      (br $while-in)
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $5)
                    (get_local $11)
                  )
                  (call $_abort)
                  (block
                    (i32.store
                      (get_local $5)
                      (i32.const 0)
                    )
                    (set_local $7
                      (get_local $4)
                    )
                  )
                )
              )
              (block
                (if
                  (i32.lt_u
                    (tee_local $5
                      (i32.load offset=8
                        (get_local $0)
                      )
                    )
                    (get_local $11)
                  )
                  (call $_abort)
                )
                (if
                  (i32.ne
                    (i32.load
                      (tee_local $8
                        (i32.add
                          (get_local $5)
                          (i32.const 12)
                        )
                      )
                    )
                    (get_local $0)
                  )
                  (call $_abort)
                )
                (if
                  (i32.eq
                    (i32.load
                      (tee_local $10
                        (i32.add
                          (get_local $4)
                          (i32.const 8)
                        )
                      )
                    )
                    (get_local $0)
                  )
                  (block
                    (i32.store
                      (get_local $8)
                      (get_local $4)
                    )
                    (i32.store
                      (get_local $10)
                      (get_local $5)
                    )
                    (set_local $7
                      (get_local $4)
                    )
                  )
                  (call $_abort)
                )
              )
            )
          )
          (if
            (get_local $12)
            (block
              (if
                (i32.eq
                  (get_local $0)
                  (i32.load
                    (tee_local $5
                      (i32.add
                        (i32.shl
                          (tee_local $4
                            (i32.load offset=28
                              (get_local $0)
                            )
                          )
                          (i32.const 2)
                        )
                        (i32.const 5592)
                      )
                    )
                  )
                )
                (block
                  (i32.store
                    (get_local $5)
                    (get_local $7)
                  )
                  (if
                    (i32.eqz
                      (get_local $7)
                    )
                    (block
                      (i32.store
                        (i32.const 5292)
                        (i32.and
                          (i32.load
                            (i32.const 5292)
                          )
                          (i32.xor
                            (i32.shl
                              (i32.const 1)
                              (get_local $4)
                            )
                            (i32.const -1)
                          )
                        )
                      )
                      (set_local $3
                        (get_local $0)
                      )
                      (set_local $2
                        (get_local $1)
                      )
                      (br $do-once)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $12)
                      (i32.load
                        (i32.const 5304)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $4
                          (i32.add
                            (get_local $12)
                            (i32.const 16)
                          )
                        )
                      )
                      (get_local $0)
                    )
                    (i32.store
                      (get_local $4)
                      (get_local $7)
                    )
                    (i32.store offset=20
                      (get_local $12)
                      (get_local $7)
                    )
                  )
                  (if
                    (i32.eqz
                      (get_local $7)
                    )
                    (block
                      (set_local $3
                        (get_local $0)
                      )
                      (set_local $2
                        (get_local $1)
                      )
                      (br $do-once)
                    )
                  )
                )
              )
              (if
                (i32.lt_u
                  (get_local $7)
                  (tee_local $5
                    (i32.load
                      (i32.const 5304)
                    )
                  )
                )
                (call $_abort)
              )
              (i32.store offset=24
                (get_local $7)
                (get_local $12)
              )
              (if
                (tee_local $4
                  (i32.load
                    (tee_local $8
                      (i32.add
                        (get_local $0)
                        (i32.const 16)
                      )
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $4)
                    (get_local $5)
                  )
                  (call $_abort)
                  (block
                    (i32.store offset=16
                      (get_local $7)
                      (get_local $4)
                    )
                    (i32.store offset=24
                      (get_local $4)
                      (get_local $7)
                    )
                  )
                )
              )
              (if
                (tee_local $4
                  (i32.load offset=4
                    (get_local $8)
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $4)
                    (i32.load
                      (i32.const 5304)
                    )
                  )
                  (call $_abort)
                  (block
                    (i32.store offset=20
                      (get_local $7)
                      (get_local $4)
                    )
                    (i32.store offset=24
                      (get_local $4)
                      (get_local $7)
                    )
                    (set_local $3
                      (get_local $0)
                    )
                    (set_local $2
                      (get_local $1)
                    )
                  )
                )
                (block
                  (set_local $3
                    (get_local $0)
                  )
                  (set_local $2
                    (get_local $1)
                  )
                )
              )
            )
            (block
              (set_local $3
                (get_local $0)
              )
              (set_local $2
                (get_local $1)
              )
            )
          )
        )
      )
    )
    (if
      (i32.ge_u
        (get_local $3)
        (get_local $6)
      )
      (call $_abort)
    )
    (if
      (i32.eqz
        (i32.and
          (tee_local $0
            (i32.load
              (tee_local $1
                (i32.add
                  (get_local $6)
                  (i32.const 4)
                )
              )
            )
          )
          (i32.const 1)
        )
      )
      (call $_abort)
    )
    (if
      (i32.and
        (get_local $0)
        (i32.const 2)
      )
      (block
        (i32.store
          (get_local $1)
          (i32.and
            (get_local $0)
            (i32.const -2)
          )
        )
        (i32.store offset=4
          (get_local $3)
          (i32.or
            (get_local $2)
            (i32.const 1)
          )
        )
        (i32.store
          (i32.add
            (get_local $3)
            (get_local $2)
          )
          (get_local $2)
        )
      )
      (block
        (if
          (i32.eq
            (get_local $6)
            (i32.load
              (i32.const 5312)
            )
          )
          (block
            (i32.store
              (i32.const 5300)
              (tee_local $0
                (i32.add
                  (i32.load
                    (i32.const 5300)
                  )
                  (get_local $2)
                )
              )
            )
            (i32.store
              (i32.const 5312)
              (get_local $3)
            )
            (i32.store offset=4
              (get_local $3)
              (i32.or
                (get_local $0)
                (i32.const 1)
              )
            )
            (if
              (i32.ne
                (get_local $3)
                (i32.load
                  (i32.const 5308)
                )
              )
              (return)
            )
            (i32.store
              (i32.const 5308)
              (i32.const 0)
            )
            (i32.store
              (i32.const 5296)
              (i32.const 0)
            )
            (return)
          )
        )
        (if
          (i32.eq
            (get_local $6)
            (i32.load
              (i32.const 5308)
            )
          )
          (block
            (i32.store
              (i32.const 5296)
              (tee_local $0
                (i32.add
                  (i32.load
                    (i32.const 5296)
                  )
                  (get_local $2)
                )
              )
            )
            (i32.store
              (i32.const 5308)
              (get_local $3)
            )
            (i32.store offset=4
              (get_local $3)
              (i32.or
                (get_local $0)
                (i32.const 1)
              )
            )
            (i32.store
              (i32.add
                (get_local $3)
                (get_local $0)
              )
              (get_local $0)
            )
            (return)
          )
        )
        (set_local $5
          (i32.add
            (i32.and
              (get_local $0)
              (i32.const -8)
            )
            (get_local $2)
          )
        )
        (set_local $4
          (i32.shr_u
            (get_local $0)
            (i32.const 3)
          )
        )
        (block $do-once4
          (if
            (i32.lt_u
              (get_local $0)
              (i32.const 256)
            )
            (block
              (set_local $2
                (i32.load offset=12
                  (get_local $6)
                )
              )
              (if
                (i32.ne
                  (tee_local $1
                    (i32.load offset=8
                      (get_local $6)
                    )
                  )
                  (tee_local $0
                    (i32.add
                      (i32.shl
                        (i32.shl
                          (get_local $4)
                          (i32.const 1)
                        )
                        (i32.const 2)
                      )
                      (i32.const 5328)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $1)
                      (i32.load
                        (i32.const 5304)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.ne
                      (i32.load offset=12
                        (get_local $1)
                      )
                      (get_local $6)
                    )
                    (call $_abort)
                  )
                )
              )
              (if
                (i32.eq
                  (get_local $2)
                  (get_local $1)
                )
                (block
                  (i32.store
                    (i32.const 5288)
                    (i32.and
                      (i32.load
                        (i32.const 5288)
                      )
                      (i32.xor
                        (i32.shl
                          (i32.const 1)
                          (get_local $4)
                        )
                        (i32.const -1)
                      )
                    )
                  )
                  (br $do-once4)
                )
              )
              (if
                (i32.eq
                  (get_local $2)
                  (get_local $0)
                )
                (set_local $14
                  (i32.add
                    (get_local $2)
                    (i32.const 8)
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $2)
                      (i32.load
                        (i32.const 5304)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $0
                          (i32.add
                            (get_local $2)
                            (i32.const 8)
                          )
                        )
                      )
                      (get_local $6)
                    )
                    (set_local $14
                      (get_local $0)
                    )
                    (call $_abort)
                  )
                )
              )
              (i32.store offset=12
                (get_local $1)
                (get_local $2)
              )
              (i32.store
                (get_local $14)
                (get_local $1)
              )
            )
            (block
              (set_local $7
                (i32.load offset=24
                  (get_local $6)
                )
              )
              (block $do-once6
                (if
                  (i32.eq
                    (tee_local $0
                      (i32.load offset=12
                        (get_local $6)
                      )
                    )
                    (get_local $6)
                  )
                  (block
                    (if
                      (tee_local $0
                        (i32.load
                          (tee_local $1
                            (i32.add
                              (tee_local $2
                                (i32.add
                                  (get_local $6)
                                  (i32.const 16)
                                )
                              )
                              (i32.const 4)
                            )
                          )
                        )
                      )
                      (set_local $2
                        (get_local $1)
                      )
                      (if
                        (i32.eqz
                          (tee_local $0
                            (i32.load
                              (get_local $2)
                            )
                          )
                        )
                        (block
                          (set_local $9
                            (i32.const 0)
                          )
                          (br $do-once6)
                        )
                      )
                    )
                    (loop $while-in9
                      (if
                        (tee_local $4
                          (i32.load
                            (tee_local $1
                              (i32.add
                                (get_local $0)
                                (i32.const 20)
                              )
                            )
                          )
                        )
                        (block
                          (set_local $0
                            (get_local $4)
                          )
                          (set_local $2
                            (get_local $1)
                          )
                          (br $while-in9)
                        )
                      )
                      (if
                        (tee_local $4
                          (i32.load
                            (tee_local $1
                              (i32.add
                                (get_local $0)
                                (i32.const 16)
                              )
                            )
                          )
                        )
                        (block
                          (set_local $0
                            (get_local $4)
                          )
                          (set_local $2
                            (get_local $1)
                          )
                          (br $while-in9)
                        )
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $2)
                        (i32.load
                          (i32.const 5304)
                        )
                      )
                      (call $_abort)
                      (block
                        (i32.store
                          (get_local $2)
                          (i32.const 0)
                        )
                        (set_local $9
                          (get_local $0)
                        )
                      )
                    )
                  )
                  (block
                    (if
                      (i32.lt_u
                        (tee_local $2
                          (i32.load offset=8
                            (get_local $6)
                          )
                        )
                        (i32.load
                          (i32.const 5304)
                        )
                      )
                      (call $_abort)
                    )
                    (if
                      (i32.ne
                        (i32.load
                          (tee_local $1
                            (i32.add
                              (get_local $2)
                              (i32.const 12)
                            )
                          )
                        )
                        (get_local $6)
                      )
                      (call $_abort)
                    )
                    (if
                      (i32.eq
                        (i32.load
                          (tee_local $4
                            (i32.add
                              (get_local $0)
                              (i32.const 8)
                            )
                          )
                        )
                        (get_local $6)
                      )
                      (block
                        (i32.store
                          (get_local $1)
                          (get_local $0)
                        )
                        (i32.store
                          (get_local $4)
                          (get_local $2)
                        )
                        (set_local $9
                          (get_local $0)
                        )
                      )
                      (call $_abort)
                    )
                  )
                )
              )
              (if
                (get_local $7)
                (block
                  (if
                    (i32.eq
                      (get_local $6)
                      (i32.load
                        (tee_local $2
                          (i32.add
                            (i32.shl
                              (tee_local $0
                                (i32.load offset=28
                                  (get_local $6)
                                )
                              )
                              (i32.const 2)
                            )
                            (i32.const 5592)
                          )
                        )
                      )
                    )
                    (block
                      (i32.store
                        (get_local $2)
                        (get_local $9)
                      )
                      (if
                        (i32.eqz
                          (get_local $9)
                        )
                        (block
                          (i32.store
                            (i32.const 5292)
                            (i32.and
                              (i32.load
                                (i32.const 5292)
                              )
                              (i32.xor
                                (i32.shl
                                  (i32.const 1)
                                  (get_local $0)
                                )
                                (i32.const -1)
                              )
                            )
                          )
                          (br $do-once4)
                        )
                      )
                    )
                    (block
                      (if
                        (i32.lt_u
                          (get_local $7)
                          (i32.load
                            (i32.const 5304)
                          )
                        )
                        (call $_abort)
                      )
                      (if
                        (i32.eq
                          (i32.load
                            (tee_local $0
                              (i32.add
                                (get_local $7)
                                (i32.const 16)
                              )
                            )
                          )
                          (get_local $6)
                        )
                        (i32.store
                          (get_local $0)
                          (get_local $9)
                        )
                        (i32.store offset=20
                          (get_local $7)
                          (get_local $9)
                        )
                      )
                      (br_if $do-once4
                        (i32.eqz
                          (get_local $9)
                        )
                      )
                    )
                  )
                  (if
                    (i32.lt_u
                      (get_local $9)
                      (tee_local $2
                        (i32.load
                          (i32.const 5304)
                        )
                      )
                    )
                    (call $_abort)
                  )
                  (i32.store offset=24
                    (get_local $9)
                    (get_local $7)
                  )
                  (if
                    (tee_local $0
                      (i32.load
                        (tee_local $1
                          (i32.add
                            (get_local $6)
                            (i32.const 16)
                          )
                        )
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $0)
                        (get_local $2)
                      )
                      (call $_abort)
                      (block
                        (i32.store offset=16
                          (get_local $9)
                          (get_local $0)
                        )
                        (i32.store offset=24
                          (get_local $0)
                          (get_local $9)
                        )
                      )
                    )
                  )
                  (if
                    (tee_local $0
                      (i32.load offset=4
                        (get_local $1)
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $0)
                        (i32.load
                          (i32.const 5304)
                        )
                      )
                      (call $_abort)
                      (block
                        (i32.store offset=20
                          (get_local $9)
                          (get_local $0)
                        )
                        (i32.store offset=24
                          (get_local $0)
                          (get_local $9)
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
        (i32.store offset=4
          (get_local $3)
          (i32.or
            (get_local $5)
            (i32.const 1)
          )
        )
        (i32.store
          (i32.add
            (get_local $3)
            (get_local $5)
          )
          (get_local $5)
        )
        (if
          (i32.eq
            (get_local $3)
            (i32.load
              (i32.const 5308)
            )
          )
          (block
            (i32.store
              (i32.const 5296)
              (get_local $5)
            )
            (return)
          )
          (set_local $2
            (get_local $5)
          )
        )
      )
    )
    (set_local $1
      (i32.shr_u
        (get_local $2)
        (i32.const 3)
      )
    )
    (if
      (i32.lt_u
        (get_local $2)
        (i32.const 256)
      )
      (block
        (set_local $0
          (i32.add
            (i32.shl
              (i32.shl
                (get_local $1)
                (i32.const 1)
              )
              (i32.const 2)
            )
            (i32.const 5328)
          )
        )
        (if
          (i32.and
            (tee_local $2
              (i32.load
                (i32.const 5288)
              )
            )
            (tee_local $1
              (i32.shl
                (i32.const 1)
                (get_local $1)
              )
            )
          )
          (if
            (i32.lt_u
              (tee_local $1
                (i32.load
                  (tee_local $2
                    (i32.add
                      (get_local $0)
                      (i32.const 8)
                    )
                  )
                )
              )
              (i32.load
                (i32.const 5304)
              )
            )
            (call $_abort)
            (block
              (set_local $13
                (get_local $1)
              )
              (set_local $15
                (get_local $2)
              )
            )
          )
          (block
            (i32.store
              (i32.const 5288)
              (i32.or
                (get_local $2)
                (get_local $1)
              )
            )
            (set_local $13
              (get_local $0)
            )
            (set_local $15
              (i32.add
                (get_local $0)
                (i32.const 8)
              )
            )
          )
        )
        (i32.store
          (get_local $15)
          (get_local $3)
        )
        (i32.store offset=12
          (get_local $13)
          (get_local $3)
        )
        (i32.store offset=8
          (get_local $3)
          (get_local $13)
        )
        (i32.store offset=12
          (get_local $3)
          (get_local $0)
        )
        (return)
      )
    )
    (set_local $0
      (i32.add
        (i32.shl
          (tee_local $1
            (if i32
              (tee_local $0
                (i32.shr_u
                  (get_local $2)
                  (i32.const 8)
                )
              )
              (if i32
                (i32.gt_u
                  (get_local $2)
                  (i32.const 16777215)
                )
                (i32.const 31)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $2)
                      (i32.add
                        (tee_local $0
                          (i32.add
                            (i32.sub
                              (i32.const 14)
                              (i32.or
                                (i32.or
                                  (tee_local $4
                                    (i32.and
                                      (i32.shr_u
                                        (i32.add
                                          (tee_local $1
                                            (i32.shl
                                              (get_local $0)
                                              (tee_local $0
                                                (i32.and
                                                  (i32.shr_u
                                                    (i32.add
                                                      (get_local $0)
                                                      (i32.const 1048320)
                                                    )
                                                    (i32.const 16)
                                                  )
                                                  (i32.const 8)
                                                )
                                              )
                                            )
                                          )
                                          (i32.const 520192)
                                        )
                                        (i32.const 16)
                                      )
                                      (i32.const 4)
                                    )
                                  )
                                  (get_local $0)
                                )
                                (tee_local $1
                                  (i32.and
                                    (i32.shr_u
                                      (i32.add
                                        (tee_local $0
                                          (i32.shl
                                            (get_local $1)
                                            (get_local $4)
                                          )
                                        )
                                        (i32.const 245760)
                                      )
                                      (i32.const 16)
                                    )
                                    (i32.const 2)
                                  )
                                )
                              )
                            )
                            (i32.shr_u
                              (i32.shl
                                (get_local $0)
                                (get_local $1)
                              )
                              (i32.const 15)
                            )
                          )
                        )
                        (i32.const 7)
                      )
                    )
                    (i32.const 1)
                  )
                  (i32.shl
                    (get_local $0)
                    (i32.const 1)
                  )
                )
              )
              (i32.const 0)
            )
          )
          (i32.const 2)
        )
        (i32.const 5592)
      )
    )
    (i32.store offset=28
      (get_local $3)
      (get_local $1)
    )
    (i32.store offset=20
      (get_local $3)
      (i32.const 0)
    )
    (i32.store offset=16
      (get_local $3)
      (i32.const 0)
    )
    (block $do-once12
      (if
        (i32.and
          (tee_local $4
            (i32.load
              (i32.const 5292)
            )
          )
          (tee_local $5
            (i32.shl
              (i32.const 1)
              (get_local $1)
            )
          )
        )
        (block
          (set_local $0
            (i32.load
              (get_local $0)
            )
          )
          (set_local $4
            (i32.sub
              (i32.const 25)
              (i32.shr_u
                (get_local $1)
                (i32.const 1)
              )
            )
          )
          (set_local $1
            (i32.shl
              (get_local $2)
              (if i32
                (i32.eq
                  (get_local $1)
                  (i32.const 31)
                )
                (i32.const 0)
                (get_local $4)
              )
            )
          )
          (block $jumpthreading$outer$1
            (block $jumpthreading$inner$1
              (block $jumpthreading$inner$0
                (loop $while-in15
                  (br_if $jumpthreading$inner$1
                    (i32.eq
                      (i32.and
                        (i32.load offset=4
                          (get_local $0)
                        )
                        (i32.const -8)
                      )
                      (get_local $2)
                    )
                  )
                  (set_local $4
                    (i32.shl
                      (get_local $1)
                      (i32.const 1)
                    )
                  )
                  (br_if $jumpthreading$inner$0
                    (i32.eqz
                      (tee_local $5
                        (i32.load
                          (tee_local $1
                            (i32.add
                              (i32.add
                                (get_local $0)
                                (i32.const 16)
                              )
                              (i32.shl
                                (i32.shr_u
                                  (get_local $1)
                                  (i32.const 31)
                                )
                                (i32.const 2)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                  (set_local $1
                    (get_local $4)
                  )
                  (set_local $0
                    (get_local $5)
                  )
                  (br $while-in15)
                )
              )
              (if
                (i32.lt_u
                  (get_local $1)
                  (i32.load
                    (i32.const 5304)
                  )
                )
                (call $_abort)
                (block
                  (i32.store
                    (get_local $1)
                    (get_local $3)
                  )
                  (i32.store offset=24
                    (get_local $3)
                    (get_local $0)
                  )
                  (i32.store offset=12
                    (get_local $3)
                    (get_local $3)
                  )
                  (i32.store offset=8
                    (get_local $3)
                    (get_local $3)
                  )
                  (br $do-once12)
                )
              )
              (br $jumpthreading$outer$1)
            )
            (if
              (i32.and
                (i32.ge_u
                  (tee_local $2
                    (i32.load
                      (tee_local $1
                        (i32.add
                          (get_local $0)
                          (i32.const 8)
                        )
                      )
                    )
                  )
                  (tee_local $4
                    (i32.load
                      (i32.const 5304)
                    )
                  )
                )
                (i32.ge_u
                  (get_local $0)
                  (get_local $4)
                )
              )
              (block
                (i32.store offset=12
                  (get_local $2)
                  (get_local $3)
                )
                (i32.store
                  (get_local $1)
                  (get_local $3)
                )
                (i32.store offset=8
                  (get_local $3)
                  (get_local $2)
                )
                (i32.store offset=12
                  (get_local $3)
                  (get_local $0)
                )
                (i32.store offset=24
                  (get_local $3)
                  (i32.const 0)
                )
              )
              (call $_abort)
            )
          )
        )
        (block
          (i32.store
            (i32.const 5292)
            (i32.or
              (get_local $4)
              (get_local $5)
            )
          )
          (i32.store
            (get_local $0)
            (get_local $3)
          )
          (i32.store offset=24
            (get_local $3)
            (get_local $0)
          )
          (i32.store offset=12
            (get_local $3)
            (get_local $3)
          )
          (i32.store offset=8
            (get_local $3)
            (get_local $3)
          )
        )
      )
    )
    (i32.store
      (i32.const 5320)
      (tee_local $0
        (i32.add
          (i32.load
            (i32.const 5320)
          )
          (i32.const -1)
        )
      )
    )
    (if
      (get_local $0)
      (return)
      (set_local $0
        (i32.const 5744)
      )
    )
    (loop $while-in17
      (set_local $0
        (i32.add
          (tee_local $2
            (i32.load
              (get_local $0)
            )
          )
          (i32.const 8)
        )
      )
      (br_if $while-in17
        (get_local $2)
      )
    )
    (i32.store
      (i32.const 5320)
      (i32.const -1)
    )
  )
  (func $_cos (param $0 f64) (result f64)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (set_local $2
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $1
      (get_local $2)
    )
    (set_local $0
      (block $label$break$L1 f64
        (if f64
          (i32.lt_u
            (tee_local $3
              (i32.and
                (i32.wrap/i64
                  (i64.shr_u
                    (i64.reinterpret/f64
                      (get_local $0)
                    )
                    (i64.const 32)
                  )
                )
                (i32.const 2147483647)
              )
            )
            (i32.const 1072243196)
          )
          (if f64
            (i32.lt_u
              (get_local $3)
              (i32.const 1044816030)
            )
            (f64.const 1)
            (call $___cos
              (get_local $0)
              (f64.const 0)
            )
          )
          (block f64
            (drop
              (br_if $label$break$L1
                (f64.sub
                  (get_local $0)
                  (get_local $0)
                )
                (i32.gt_u
                  (get_local $3)
                  (i32.const 2146435071)
                )
              )
            )
            (block $switch-default
              (block $switch-case1
                (block $switch-case0
                  (block $switch-case
                    (br_table $switch-case $switch-case0 $switch-case1 $switch-default
                      (i32.sub
                        (i32.shr_s
                          (i32.shl
                            (i32.and
                              (i32.and
                                (call $___rem_pio2
                                  (get_local $0)
                                  (get_local $1)
                                )
                                (i32.const 255)
                              )
                              (i32.const 3)
                            )
                            (i32.const 24)
                          )
                          (i32.const 24)
                        )
                        (i32.const 0)
                      )
                    )
                  )
                  (br $label$break$L1
                    (call $___cos
                      (f64.load
                        (get_local $1)
                      )
                      (f64.load offset=8
                        (get_local $1)
                      )
                    )
                  )
                )
                (br $label$break$L1
                  (f64.neg
                    (call $___sin
                      (f64.load
                        (get_local $1)
                      )
                      (f64.load offset=8
                        (get_local $1)
                      )
                      (i32.const 1)
                    )
                  )
                )
              )
              (br $label$break$L1
                (f64.neg
                  (call $___cos
                    (f64.load
                      (get_local $1)
                    )
                    (f64.load offset=8
                      (get_local $1)
                    )
                  )
                )
              )
            )
            (call $___sin
              (f64.load
                (get_local $1)
              )
              (f64.load offset=8
                (get_local $1)
              )
              (i32.const 1)
            )
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $2)
    )
    (get_local $0)
  )
  (func $_sin (param $0 f64) (result f64)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (set_local $2
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $1
      (get_local $2)
    )
    (block $label$break$L1
      (if
        (i32.lt_u
          (tee_local $3
            (i32.and
              (i32.wrap/i64
                (i64.shr_u
                  (i64.reinterpret/f64
                    (get_local $0)
                  )
                  (i64.const 32)
                )
              )
              (i32.const 2147483647)
            )
          )
          (i32.const 1072243196)
        )
        (if
          (i32.ge_u
            (get_local $3)
            (i32.const 1045430272)
          )
          (set_local $0
            (call $___sin
              (get_local $0)
              (f64.const 0)
              (i32.const 0)
            )
          )
        )
        (block
          (if
            (i32.gt_u
              (get_local $3)
              (i32.const 2146435071)
            )
            (block
              (set_local $0
                (f64.sub
                  (get_local $0)
                  (get_local $0)
                )
              )
              (br $label$break$L1)
            )
          )
          (block $switch-default
            (block $switch-case1
              (block $switch-case0
                (block $switch-case
                  (br_table $switch-case $switch-case0 $switch-case1 $switch-default
                    (i32.sub
                      (i32.shr_s
                        (i32.shl
                          (i32.and
                            (i32.and
                              (call $___rem_pio2
                                (get_local $0)
                                (get_local $1)
                              )
                              (i32.const 255)
                            )
                            (i32.const 3)
                          )
                          (i32.const 24)
                        )
                        (i32.const 24)
                      )
                      (i32.const 0)
                    )
                  )
                )
                (set_local $0
                  (call $___sin
                    (f64.load
                      (get_local $1)
                    )
                    (f64.load offset=8
                      (get_local $1)
                    )
                    (i32.const 1)
                  )
                )
                (br $label$break$L1)
              )
              (set_local $0
                (call $___cos
                  (f64.load
                    (get_local $1)
                  )
                  (f64.load offset=8
                    (get_local $1)
                  )
                )
              )
              (br $label$break$L1)
            )
            (set_local $0
              (f64.neg
                (call $___sin
                  (f64.load
                    (get_local $1)
                  )
                  (f64.load offset=8
                    (get_local $1)
                  )
                  (i32.const 1)
                )
              )
            )
            (br $label$break$L1)
          )
          (set_local $0
            (f64.neg
              (call $___cos
                (f64.load
                  (get_local $1)
                )
                (f64.load offset=8
                  (get_local $1)
                )
              )
            )
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $2)
    )
    (get_local $0)
  )
  (func $__ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv (param $0 i32)
    (call $___assert_fail
      (i32.const 4411)
      (i32.const 4434)
      (i32.const 304)
      (i32.const 4603)
    )
  )
  (func $__Znwj (param $0 i32) (result i32)
    (local $1 i32)
    (if
      (i32.eqz
        (get_local $0)
      )
      (set_local $0
        (i32.const 1)
      )
    )
    (loop $while-in
      (block $while-out
        (if
          (tee_local $1
            (call $_malloc
              (get_local $0)
            )
          )
          (block
            (set_local $0
              (get_local $1)
            )
            (br $while-out)
          )
        )
        (if
          (tee_local $1
            (call $__ZSt15get_new_handlerv)
          )
          (block
            (call_indirect $FUNCSIG$v
              (i32.add
                (i32.and
                  (get_local $1)
                  (i32.const 3)
                )
                (i32.const 36)
              )
            )
            (br $while-in)
          )
          (set_local $0
            (i32.const 0)
          )
        )
      )
    )
    (get_local $0)
  )
  (func $__ZdlPv (param $0 i32)
    (call $_free
      (get_local $0)
    )
  )
  (func $__ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv (param $0 i32)
    (call $___assert_fail
      (i32.const 4504)
      (i32.const 4533)
      (i32.const 1183)
      (i32.const 4603)
    )
  )
  (func $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC2ERKS5_ (param $0 i32) (param $1 i32)
    (i64.store align=4
      (get_local $0)
      (i64.const 0)
    )
    (i32.store offset=8
      (get_local $0)
      (i32.const 0)
    )
    (if
      (i32.lt_s
        (i32.load8_s offset=11
          (get_local $1)
        )
        (i32.const 0)
      )
      (call $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj
        (get_local $0)
        (i32.load
          (get_local $1)
        )
        (i32.load offset=4
          (get_local $1)
        )
      )
      (block
        (i64.store align=4
          (get_local $0)
          (i64.load align=4
            (get_local $1)
          )
        )
        (i32.store offset=8
          (get_local $0)
          (i32.load offset=8
            (get_local $1)
          )
        )
      )
    )
  )
  (func $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj (param $0 i32) (param $1 i32) (param $2 i32)
    (local $3 i32)
    (local $4 i32)
    (if
      (i32.gt_u
        (get_local $2)
        (i32.const -17)
      )
      (call $__ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv
        (get_local $0)
      )
    )
    (block $jumpthreading$outer$0
      (block $jumpthreading$inner$0
        (if
          (i32.lt_u
            (get_local $2)
            (i32.const 11)
          )
          (block
            (i32.store8 offset=11
              (get_local $0)
              (get_local $2)
            )
            (br_if $jumpthreading$inner$0
              (get_local $2)
            )
          )
          (block
            (i32.store
              (get_local $0)
              (tee_local $4
                (call $__Znwj
                  (tee_local $3
                    (i32.and
                      (i32.add
                        (get_local $2)
                        (i32.const 16)
                      )
                      (i32.const -16)
                    )
                  )
                )
              )
            )
            (i32.store offset=8
              (get_local $0)
              (i32.or
                (get_local $3)
                (i32.const -2147483648)
              )
            )
            (i32.store offset=4
              (get_local $0)
              (get_local $2)
            )
            (set_local $0
              (get_local $4)
            )
            (br $jumpthreading$inner$0)
          )
        )
        (br $jumpthreading$outer$0)
      )
      (drop
        (call $_memcpy
          (get_local $0)
          (get_local $1)
          (get_local $2)
        )
      )
    )
    (i32.store8
      (i32.add
        (get_local $0)
        (get_local $2)
      )
      (i32.const 0)
    )
  )
  (func $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev (param $0 i32)
    (if
      (i32.lt_s
        (i32.load8_s offset=11
          (get_local $0)
        )
        (i32.const 0)
      )
      (call $__ZdlPv
        (i32.load
          (get_local $0)
        )
      )
    )
  )
  (func $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (if
      (i32.lt_u
        (tee_local $3
          (if i32
            (tee_local $5
              (i32.lt_s
                (i32.shr_s
                  (i32.shl
                    (tee_local $6
                      (i32.load8_s
                        (tee_local $4
                          (i32.add
                            (get_local $0)
                            (i32.const 11)
                          )
                        )
                      )
                    )
                    (i32.const 24)
                  )
                  (i32.const 24)
                )
                (i32.const 0)
              )
            )
            (i32.add
              (i32.and
                (i32.load offset=8
                  (get_local $0)
                )
                (i32.const 2147483647)
              )
              (i32.const -1)
            )
            (i32.const 10)
          )
        )
        (get_local $2)
      )
      (call $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc
        (get_local $0)
        (get_local $3)
        (i32.sub
          (get_local $2)
          (get_local $3)
        )
        (tee_local $4
          (if i32
            (get_local $5)
            (i32.load offset=4
              (get_local $0)
            )
            (i32.and
              (get_local $6)
              (i32.const 255)
            )
          )
        )
        (i32.const 0)
        (get_local $4)
        (get_local $2)
        (get_local $1)
      )
      (block
        (set_local $3
          (if i32
            (get_local $5)
            (i32.load
              (get_local $0)
            )
            (get_local $0)
          )
        )
        (if
          (get_local $2)
          (drop
            (call $_memmove
              (get_local $3)
              (get_local $1)
              (get_local $2)
            )
          )
        )
        (i32.store8
          (i32.add
            (get_local $3)
            (get_local $2)
          )
          (i32.const 0)
        )
        (if
          (i32.lt_s
            (i32.load8_s
              (get_local $4)
            )
            (i32.const 0)
          )
          (i32.store offset=4
            (get_local $0)
            (get_local $2)
          )
          (i32.store8
            (get_local $4)
            (get_local $2)
          )
        )
      )
    )
    (get_local $0)
  )
  (func $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (param $6 i32) (param $7 i32)
    (local $8 i32)
    (local $9 i32)
    (if
      (i32.lt_u
        (i32.sub
          (i32.const -18)
          (get_local $1)
        )
        (get_local $2)
      )
      (call $__ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv
        (get_local $0)
      )
    )
    (set_local $9
      (if i32
        (i32.lt_s
          (i32.load8_s offset=11
            (get_local $0)
          )
          (i32.const 0)
        )
        (i32.load
          (get_local $0)
        )
        (get_local $0)
      )
    )
    (if
      (i32.lt_u
        (get_local $1)
        (i32.const 2147483623)
      )
      (block
        (set_local $2
          (i32.and
            (i32.add
              (if i32
                (i32.lt_u
                  (tee_local $2
                    (i32.add
                      (get_local $2)
                      (get_local $1)
                    )
                  )
                  (tee_local $8
                    (i32.shl
                      (get_local $1)
                      (i32.const 1)
                    )
                  )
                )
                (get_local $8)
                (tee_local $8
                  (get_local $2)
                )
              )
              (i32.const 16)
            )
            (i32.const -16)
          )
        )
        (if
          (i32.lt_u
            (get_local $8)
            (i32.const 11)
          )
          (set_local $2
            (i32.const 11)
          )
        )
      )
      (set_local $2
        (i32.const -17)
      )
    )
    (set_local $8
      (call $__Znwj
        (get_local $2)
      )
    )
    (if
      (get_local $4)
      (drop
        (call $_memcpy
          (get_local $8)
          (get_local $9)
          (get_local $4)
        )
      )
    )
    (if
      (get_local $6)
      (drop
        (call $_memcpy
          (i32.add
            (get_local $8)
            (get_local $4)
          )
          (get_local $7)
          (get_local $6)
        )
      )
    )
    (if
      (tee_local $3
        (i32.sub
          (tee_local $7
            (i32.sub
              (get_local $3)
              (get_local $5)
            )
          )
          (get_local $4)
        )
      )
      (drop
        (call $_memcpy
          (i32.add
            (i32.add
              (get_local $8)
              (get_local $4)
            )
            (get_local $6)
          )
          (i32.add
            (i32.add
              (get_local $9)
              (get_local $4)
            )
            (get_local $5)
          )
          (get_local $3)
        )
      )
    )
    (if
      (i32.ne
        (get_local $1)
        (i32.const 10)
      )
      (call $__ZdlPv
        (get_local $9)
      )
    )
    (i32.store
      (get_local $0)
      (get_local $8)
    )
    (i32.store offset=8
      (get_local $0)
      (i32.or
        (get_local $2)
        (i32.const -2147483648)
      )
    )
    (i32.store offset=4
      (get_local $0)
      (tee_local $0
        (i32.add
          (get_local $7)
          (get_local $6)
        )
      )
    )
    (i32.store8
      (i32.add
        (get_local $8)
        (get_local $0)
      )
      (i32.const 0)
    )
  )
  (func $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc (param $0 i32) (param $1 i32) (result i32)
    (call $__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcj
      (get_local $0)
      (get_local $1)
      (call $_strlen
        (get_local $1)
      )
    )
  )
  (func $__ZL25default_terminate_handlerv
    (local $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i64)
    (set_local $2
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 48)
      )
    )
    (set_local $1
      (i32.add
        (get_local $2)
        (i32.const 24)
      )
    )
    (set_local $4
      (i32.add
        (get_local $2)
        (i32.const 16)
      )
    )
    (set_local $3
      (get_local $2)
    )
    (set_local $5
      (i32.add
        (get_local $2)
        (i32.const 36)
      )
    )
    (if
      (tee_local $0
        (call $___cxa_get_globals_fast)
      )
      (if
        (tee_local $0
          (i32.load
            (get_local $0)
          )
        )
        (block
          (if
            (i64.ne
              (i64.and
                (tee_local $6
                  (i64.load offset=48
                    (get_local $0)
                  )
                )
                (i64.const -256)
              )
              (i64.const 4849336966747728640)
            )
            (block
              (i32.store
                (get_local $1)
                (i32.const 4760)
              )
              (call $_abort_message
                (i32.const 4710)
                (get_local $1)
              )
            )
          )
          (set_local $1
            (i32.add
              (get_local $0)
              (i32.const 80)
            )
          )
          (if
            (i64.eq
              (get_local $6)
              (i64.const 4849336966747728641)
            )
            (set_local $1
              (i32.load offset=44
                (get_local $0)
              )
            )
          )
          (i32.store
            (get_local $5)
            (get_local $1)
          )
          (set_local $1
            (i32.load offset=4
              (tee_local $0
                (i32.load
                  (get_local $0)
                )
              )
            )
          )
          (if
            (call_indirect $FUNCSIG$iiii
              (i32.const 1136)
              (get_local $0)
              (get_local $5)
              (i32.add
                (i32.and
                  (i32.load offset=16
                    (i32.load
                      (i32.const 1136)
                    )
                  )
                  (i32.const 7)
                )
                (i32.const 0)
              )
            )
            (block
              (set_local $0
                (call_indirect $FUNCSIG$ii
                  (tee_local $0
                    (i32.load
                      (get_local $5)
                    )
                  )
                  (i32.add
                    (i32.and
                      (i32.load offset=8
                        (i32.load
                          (get_local $0)
                        )
                      )
                      (i32.const 3)
                    )
                    (i32.const 32)
                  )
                )
              )
              (i32.store
                (get_local $3)
                (i32.const 4760)
              )
              (i32.store offset=4
                (get_local $3)
                (get_local $1)
              )
              (i32.store offset=8
                (get_local $3)
                (get_local $0)
              )
              (call $_abort_message
                (i32.const 4624)
                (get_local $3)
              )
            )
            (block
              (i32.store
                (get_local $4)
                (i32.const 4760)
              )
              (i32.store offset=4
                (get_local $4)
                (get_local $1)
              )
              (call $_abort_message
                (i32.const 4669)
                (get_local $4)
              )
            )
          )
        )
      )
    )
    (call $_abort_message
      (i32.const 4748)
      (i32.add
        (get_local $2)
        (i32.const 32)
      )
    )
  )
  (func $___cxa_get_globals_fast (result i32)
    (local $0 i32)
    (local $1 i32)
    (set_local $1
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $0
      (get_local $1)
    )
    (if
      (call $_pthread_once
        (i32.const 5784)
        (i32.const 2)
      )
      (call $_abort_message
        (i32.const 4899)
        (get_local $0)
      )
      (block
        (set_local $0
          (call $_pthread_getspecific
            (i32.load
              (i32.const 5788)
            )
          )
        )
        (set_global $STACKTOP
          (get_local $1)
        )
        (return
          (get_local $0)
        )
      )
    )
    (i32.const 0)
  )
  (func $_abort_message (param $0 i32) (param $1 i32)
    (local $2 i32)
    (set_local $2
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (i32.store
      (get_local $2)
      (get_local $1)
    )
    (drop
      (call $_vfprintf
        (tee_local $1
          (i32.load
            (i32.const 1288)
          )
        )
        (get_local $0)
        (get_local $2)
      )
    )
    (drop
      (call $_fputc
        (i32.const 10)
        (get_local $1)
      )
    )
    (call $_abort)
  )
  (func $__ZN10__cxxabiv117__class_type_infoD0Ev (param $0 i32)
    (call $__ZdlPv
      (get_local $0)
    )
  )
  (func $__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $5
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 64)
      )
    )
    (set_local $3
      (get_local $5)
    )
    (set_local $0
      (if i32
        (i32.eq
          (get_local $0)
          (get_local $1)
        )
        (i32.const 1)
        (if i32
          (get_local $1)
          (if i32
            (tee_local $1
              (call $___dynamic_cast
                (get_local $1)
                (i32.const 1160)
                (i32.const 1144)
                (i32.const 0)
              )
            )
            (block i32
              (i64.store align=4
                (tee_local $4
                  (i32.add
                    (get_local $3)
                    (i32.const 4)
                  )
                )
                (i64.const 0)
              )
              (i64.store offset=8 align=4
                (get_local $4)
                (i64.const 0)
              )
              (i64.store offset=16 align=4
                (get_local $4)
                (i64.const 0)
              )
              (i64.store offset=24 align=4
                (get_local $4)
                (i64.const 0)
              )
              (i64.store offset=32 align=4
                (get_local $4)
                (i64.const 0)
              )
              (i64.store offset=40 align=4
                (get_local $4)
                (i64.const 0)
              )
              (i32.store offset=48
                (get_local $4)
                (i32.const 0)
              )
              (i32.store
                (get_local $3)
                (get_local $1)
              )
              (i32.store offset=8
                (get_local $3)
                (get_local $0)
              )
              (i32.store offset=12
                (get_local $3)
                (i32.const -1)
              )
              (i32.store offset=48
                (get_local $3)
                (i32.const 1)
              )
              (call_indirect $FUNCSIG$viiii
                (get_local $1)
                (get_local $3)
                (i32.load
                  (get_local $2)
                )
                (i32.const 1)
                (i32.add
                  (i32.and
                    (i32.load offset=28
                      (i32.load
                        (get_local $1)
                      )
                    )
                    (i32.const 3)
                  )
                  (i32.const 44)
                )
              )
              (if i32
                (i32.eq
                  (i32.load offset=24
                    (get_local $3)
                  )
                  (i32.const 1)
                )
                (block i32
                  (i32.store
                    (get_local $2)
                    (i32.load offset=16
                      (get_local $3)
                    )
                  )
                  (i32.const 1)
                )
                (i32.const 0)
              )
            )
            (i32.const 0)
          )
          (i32.const 0)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $5)
    )
    (get_local $0)
  )
  (func $__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (if
      (i32.eq
        (get_local $0)
        (i32.load offset=8
          (get_local $1)
        )
      )
      (call $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i
        (i32.const 0)
        (get_local $1)
        (get_local $2)
        (get_local $3)
        (get_local $4)
      )
    )
  )
  (func $__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (block $do-once
      (if
        (i32.eq
          (get_local $0)
          (i32.load offset=8
            (get_local $1)
          )
        )
        (if
          (i32.eq
            (i32.load offset=4
              (get_local $1)
            )
            (get_local $2)
          )
          (if
            (i32.ne
              (i32.load
                (tee_local $0
                  (i32.add
                    (get_local $1)
                    (i32.const 28)
                  )
                )
              )
              (i32.const 1)
            )
            (i32.store
              (get_local $0)
              (get_local $3)
            )
          )
        )
        (if
          (i32.eq
            (get_local $0)
            (i32.load
              (get_local $1)
            )
          )
          (block
            (if
              (i32.ne
                (i32.load offset=16
                  (get_local $1)
                )
                (get_local $2)
              )
              (if
                (i32.ne
                  (i32.load
                    (tee_local $0
                      (i32.add
                        (get_local $1)
                        (i32.const 20)
                      )
                    )
                  )
                  (get_local $2)
                )
                (block
                  (i32.store offset=32
                    (get_local $1)
                    (get_local $3)
                  )
                  (i32.store
                    (get_local $0)
                    (get_local $2)
                  )
                  (i32.store
                    (tee_local $0
                      (i32.add
                        (get_local $1)
                        (i32.const 40)
                      )
                    )
                    (i32.add
                      (i32.load
                        (get_local $0)
                      )
                      (i32.const 1)
                    )
                  )
                  (if
                    (i32.eq
                      (i32.load offset=36
                        (get_local $1)
                      )
                      (i32.const 1)
                    )
                    (if
                      (i32.eq
                        (i32.load offset=24
                          (get_local $1)
                        )
                        (i32.const 2)
                      )
                      (i32.store8 offset=54
                        (get_local $1)
                        (i32.const 1)
                      )
                    )
                  )
                  (i32.store offset=44
                    (get_local $1)
                    (i32.const 4)
                  )
                  (br $do-once)
                )
              )
            )
            (if
              (i32.eq
                (get_local $3)
                (i32.const 1)
              )
              (i32.store offset=32
                (get_local $1)
                (i32.const 1)
              )
            )
          )
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (if
      (i32.eq
        (get_local $0)
        (i32.load offset=8
          (get_local $1)
        )
      )
      (call $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi
        (i32.const 0)
        (get_local $1)
        (get_local $2)
        (get_local $3)
      )
    )
  )
  (func $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (local $4 i32)
    (block $do-once
      (if
        (tee_local $4
          (i32.load
            (tee_local $0
              (i32.add
                (get_local $1)
                (i32.const 16)
              )
            )
          )
        )
        (block
          (if
            (i32.ne
              (get_local $4)
              (get_local $2)
            )
            (block
              (i32.store
                (tee_local $0
                  (i32.add
                    (get_local $1)
                    (i32.const 36)
                  )
                )
                (i32.add
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 1)
                )
              )
              (i32.store offset=24
                (get_local $1)
                (i32.const 2)
              )
              (i32.store8 offset=54
                (get_local $1)
                (i32.const 1)
              )
              (br $do-once)
            )
          )
          (if
            (i32.eq
              (i32.load
                (tee_local $0
                  (i32.add
                    (get_local $1)
                    (i32.const 24)
                  )
                )
              )
              (i32.const 2)
            )
            (i32.store
              (get_local $0)
              (get_local $3)
            )
          )
        )
        (block
          (i32.store
            (get_local $0)
            (get_local $2)
          )
          (i32.store offset=24
            (get_local $1)
            (get_local $3)
          )
          (i32.store offset=36
            (get_local $1)
            (i32.const 1)
          )
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (i32.store8 offset=53
      (get_local $1)
      (i32.const 1)
    )
    (block $do-once
      (if
        (i32.eq
          (i32.load offset=4
            (get_local $1)
          )
          (get_local $3)
        )
        (block
          (i32.store8 offset=52
            (get_local $1)
            (i32.const 1)
          )
          (if
            (i32.eqz
              (tee_local $3
                (i32.load
                  (tee_local $0
                    (i32.add
                      (get_local $1)
                      (i32.const 16)
                    )
                  )
                )
              )
            )
            (block
              (i32.store
                (get_local $0)
                (get_local $2)
              )
              (i32.store offset=24
                (get_local $1)
                (get_local $4)
              )
              (i32.store offset=36
                (get_local $1)
                (i32.const 1)
              )
              (br_if $do-once
                (i32.eqz
                  (i32.and
                    (i32.eq
                      (i32.load offset=48
                        (get_local $1)
                      )
                      (i32.const 1)
                    )
                    (i32.eq
                      (get_local $4)
                      (i32.const 1)
                    )
                  )
                )
              )
              (i32.store8 offset=54
                (get_local $1)
                (i32.const 1)
              )
              (br $do-once)
            )
          )
          (if
            (i32.ne
              (get_local $3)
              (get_local $2)
            )
            (block
              (i32.store
                (tee_local $0
                  (i32.add
                    (get_local $1)
                    (i32.const 36)
                  )
                )
                (i32.add
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 1)
                )
              )
              (i32.store8 offset=54
                (get_local $1)
                (i32.const 1)
              )
              (br $do-once)
            )
          )
          (if
            (i32.eq
              (tee_local $0
                (i32.load
                  (tee_local $2
                    (i32.add
                      (get_local $1)
                      (i32.const 24)
                    )
                  )
                )
              )
              (i32.const 2)
            )
            (i32.store
              (get_local $2)
              (get_local $4)
            )
            (set_local $4
              (get_local $0)
            )
          )
          (if
            (i32.and
              (i32.eq
                (i32.load offset=48
                  (get_local $1)
                )
                (i32.const 1)
              )
              (i32.eq
                (get_local $4)
                (i32.const 1)
              )
            )
            (i32.store8 offset=54
              (get_local $1)
              (i32.const 1)
            )
          )
        )
      )
    )
  )
  (func $___dynamic_cast (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (set_local $8
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 64)
      )
    )
    (set_local $6
      (i32.add
        (get_local $0)
        (i32.load
          (i32.add
            (tee_local $4
              (i32.load
                (get_local $0)
              )
            )
            (i32.const -8)
          )
        )
      )
    )
    (set_local $7
      (i32.load
        (i32.add
          (get_local $4)
          (i32.const -4)
        )
      )
    )
    (i32.store
      (tee_local $4
        (get_local $8)
      )
      (get_local $2)
    )
    (i32.store offset=4
      (get_local $4)
      (get_local $0)
    )
    (i32.store offset=8
      (get_local $4)
      (get_local $1)
    )
    (i32.store offset=12
      (get_local $4)
      (get_local $3)
    )
    (set_local $0
      (i32.add
        (get_local $4)
        (i32.const 20)
      )
    )
    (set_local $9
      (i32.add
        (get_local $4)
        (i32.const 24)
      )
    )
    (set_local $10
      (i32.add
        (get_local $4)
        (i32.const 28)
      )
    )
    (set_local $3
      (i32.add
        (get_local $4)
        (i32.const 32)
      )
    )
    (set_local $1
      (i32.add
        (get_local $4)
        (i32.const 40)
      )
    )
    (i64.store align=4
      (tee_local $5
        (i32.add
          (get_local $4)
          (i32.const 16)
        )
      )
      (i64.const 0)
    )
    (i64.store offset=8 align=4
      (get_local $5)
      (i64.const 0)
    )
    (i64.store offset=16 align=4
      (get_local $5)
      (i64.const 0)
    )
    (i64.store offset=24 align=4
      (get_local $5)
      (i64.const 0)
    )
    (i32.store offset=32
      (get_local $5)
      (i32.const 0)
    )
    (i32.store16 offset=36
      (get_local $5)
      (i32.const 0)
    )
    (i32.store8 offset=38
      (get_local $5)
      (i32.const 0)
    )
    (block $label$break$L1
      (set_local $0
        (if i32
          (i32.eq
            (get_local $7)
            (get_local $2)
          )
          (block i32
            (i32.store offset=48
              (get_local $4)
              (i32.const 1)
            )
            (call_indirect $FUNCSIG$viiiiii
              (get_local $2)
              (get_local $4)
              (get_local $6)
              (get_local $6)
              (i32.const 1)
              (i32.const 0)
              (i32.add
                (i32.and
                  (i32.load offset=20
                    (i32.load
                      (get_local $2)
                    )
                  )
                  (i32.const 3)
                )
                (i32.const 40)
              )
            )
            (if i32
              (i32.eq
                (i32.load
                  (get_local $9)
                )
                (i32.const 1)
              )
              (get_local $6)
              (i32.const 0)
            )
          )
          (block i32
            (call_indirect $FUNCSIG$viiiii
              (get_local $7)
              (get_local $4)
              (get_local $6)
              (i32.const 1)
              (i32.const 0)
              (i32.add
                (i32.and
                  (i32.load offset=24
                    (i32.load
                      (get_local $7)
                    )
                  )
                  (i32.const 3)
                )
                (i32.const 8)
              )
            )
            (block $switch
              (block $switch-default
                (block $switch-case0
                  (block $switch-case
                    (br_table $switch-case $switch-case0 $switch-default
                      (i32.sub
                        (i32.load offset=36
                          (get_local $4)
                        )
                        (i32.const 0)
                      )
                    )
                  )
                  (set_local $0
                    (i32.load
                      (get_local $0)
                    )
                  )
                  (if
                    (i32.eqz
                      (i32.and
                        (i32.and
                          (i32.eq
                            (i32.load
                              (get_local $1)
                            )
                            (i32.const 1)
                          )
                          (i32.eq
                            (i32.load
                              (get_local $10)
                            )
                            (i32.const 1)
                          )
                        )
                        (i32.eq
                          (i32.load
                            (get_local $3)
                          )
                          (i32.const 1)
                        )
                      )
                    )
                    (set_local $0
                      (i32.const 0)
                    )
                  )
                  (br $label$break$L1)
                )
                (br $switch)
              )
              (set_local $0
                (i32.const 0)
              )
              (br $label$break$L1)
            )
            (if
              (i32.ne
                (i32.load
                  (get_local $9)
                )
                (i32.const 1)
              )
              (if
                (i32.eqz
                  (i32.and
                    (i32.and
                      (i32.eqz
                        (i32.load
                          (get_local $1)
                        )
                      )
                      (i32.eq
                        (i32.load
                          (get_local $10)
                        )
                        (i32.const 1)
                      )
                    )
                    (i32.eq
                      (i32.load
                        (get_local $3)
                      )
                      (i32.const 1)
                    )
                  )
                )
                (block
                  (set_local $0
                    (i32.const 0)
                  )
                  (br $label$break$L1)
                )
              )
            )
            (i32.load
              (get_local $5)
            )
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $8)
    )
    (get_local $0)
  )
  (func $__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (local $6 i32)
    (if
      (i32.eq
        (get_local $0)
        (i32.load offset=8
          (get_local $1)
        )
      )
      (call $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i
        (i32.const 0)
        (get_local $1)
        (get_local $2)
        (get_local $3)
        (get_local $4)
      )
      (call_indirect $FUNCSIG$viiiiii
        (tee_local $6
          (i32.load offset=8
            (get_local $0)
          )
        )
        (get_local $1)
        (get_local $2)
        (get_local $3)
        (get_local $4)
        (get_local $5)
        (i32.add
          (i32.and
            (i32.load offset=20
              (i32.load
                (get_local $6)
              )
            )
            (i32.const 3)
          )
          (i32.const 40)
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (block $do-once
      (if
        (i32.eq
          (get_local $0)
          (i32.load offset=8
            (get_local $1)
          )
        )
        (if
          (i32.eq
            (i32.load offset=4
              (get_local $1)
            )
            (get_local $2)
          )
          (if
            (i32.ne
              (i32.load
                (tee_local $0
                  (i32.add
                    (get_local $1)
                    (i32.const 28)
                  )
                )
              )
              (i32.const 1)
            )
            (i32.store
              (get_local $0)
              (get_local $3)
            )
          )
        )
        (block
          (if
            (i32.ne
              (get_local $0)
              (i32.load
                (get_local $1)
              )
            )
            (block
              (call_indirect $FUNCSIG$viiiii
                (tee_local $0
                  (i32.load offset=8
                    (get_local $0)
                  )
                )
                (get_local $1)
                (get_local $2)
                (get_local $3)
                (get_local $4)
                (i32.add
                  (i32.and
                    (i32.load offset=24
                      (i32.load
                        (get_local $0)
                      )
                    )
                    (i32.const 3)
                  )
                  (i32.const 8)
                )
              )
              (br $do-once)
            )
          )
          (if
            (i32.ne
              (i32.load offset=16
                (get_local $1)
              )
              (get_local $2)
            )
            (if
              (i32.ne
                (i32.load
                  (tee_local $5
                    (i32.add
                      (get_local $1)
                      (i32.const 20)
                    )
                  )
                )
                (get_local $2)
              )
              (block
                (i32.store offset=32
                  (get_local $1)
                  (get_local $3)
                )
                (br_if $do-once
                  (i32.eq
                    (i32.load
                      (tee_local $3
                        (i32.add
                          (get_local $1)
                          (i32.const 44)
                        )
                      )
                    )
                    (i32.const 4)
                  )
                )
                (i32.store8
                  (tee_local $6
                    (i32.add
                      (get_local $1)
                      (i32.const 52)
                    )
                  )
                  (i32.const 0)
                )
                (i32.store8
                  (tee_local $7
                    (i32.add
                      (get_local $1)
                      (i32.const 53)
                    )
                  )
                  (i32.const 0)
                )
                (call_indirect $FUNCSIG$viiiiii
                  (tee_local $0
                    (i32.load offset=8
                      (get_local $0)
                    )
                  )
                  (get_local $1)
                  (get_local $2)
                  (get_local $2)
                  (i32.const 1)
                  (get_local $4)
                  (i32.add
                    (i32.and
                      (i32.load offset=20
                        (i32.load
                          (get_local $0)
                        )
                      )
                      (i32.const 3)
                    )
                    (i32.const 40)
                  )
                )
                (i32.store
                  (get_local $3)
                  (tee_local $0
                    (block $jumpthreading$outer$1 i32
                      (block $jumpthreading$inner$1
                        (set_local $0
                          (if i32
                            (i32.load8_s
                              (get_local $7)
                            )
                            (block i32
                              (br_if $jumpthreading$inner$1
                                (i32.load8_s
                                  (get_local $6)
                                )
                              )
                              (i32.const 1)
                            )
                            (i32.const 0)
                          )
                        )
                        (i32.store
                          (get_local $5)
                          (get_local $2)
                        )
                        (i32.store
                          (tee_local $2
                            (i32.add
                              (get_local $1)
                              (i32.const 40)
                            )
                          )
                          (i32.add
                            (i32.load
                              (get_local $2)
                            )
                            (i32.const 1)
                          )
                        )
                        (if
                          (i32.eq
                            (i32.load offset=36
                              (get_local $1)
                            )
                            (i32.const 1)
                          )
                          (if
                            (i32.eq
                              (i32.load offset=24
                                (get_local $1)
                              )
                              (i32.const 2)
                            )
                            (block
                              (i32.store8 offset=54
                                (get_local $1)
                                (i32.const 1)
                              )
                              (br_if $jumpthreading$inner$1
                                (get_local $0)
                              )
                              (br $jumpthreading$outer$1
                                (i32.const 4)
                              )
                            )
                          )
                        )
                        (br_if $jumpthreading$inner$1
                          (get_local $0)
                        )
                        (br $jumpthreading$outer$1
                          (i32.const 4)
                        )
                      )
                      (i32.const 3)
                    )
                  )
                )
                (br $do-once)
              )
            )
          )
          (if
            (i32.eq
              (get_local $3)
              (i32.const 1)
            )
            (i32.store offset=32
              (get_local $1)
              (i32.const 1)
            )
          )
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (local $4 i32)
    (if
      (i32.eq
        (get_local $0)
        (i32.load offset=8
          (get_local $1)
        )
      )
      (call $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi
        (i32.const 0)
        (get_local $1)
        (get_local $2)
        (get_local $3)
      )
      (call_indirect $FUNCSIG$viiii
        (tee_local $4
          (i32.load offset=8
            (get_local $0)
          )
        )
        (get_local $1)
        (get_local $2)
        (get_local $3)
        (i32.add
          (i32.and
            (i32.load offset=28
              (i32.load
                (get_local $4)
              )
            )
            (i32.const 3)
          )
          (i32.const 44)
        )
      )
    )
  )
  (func $__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev
    (local $0 i32)
    (local $1 i32)
    (set_local $0
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $1
      (get_local $0)
    )
    (if
      (call $_pthread_key_create
        (i32.const 5788)
        (i32.const 10)
      )
      (call $_abort_message
        (i32.const 4948)
        (get_local $1)
      )
      (set_global $STACKTOP
        (get_local $0)
      )
    )
  )
  (func $__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $2
      (get_local $1)
    )
    (call $_free
      (get_local $0)
    )
    (if
      (call $_pthread_setspecific
        (i32.load
          (i32.const 5788)
        )
        (i32.const 0)
      )
      (call $_abort_message
        (i32.const 4998)
        (get_local $2)
      )
      (set_global $STACKTOP
        (get_local $1)
      )
    )
  )
  (func $__ZNKSt9bad_alloc4whatEv (param $0 i32) (result i32)
    (i32.const 5091)
  )
  (func $__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (if
      (i32.eq
        (get_local $0)
        (i32.load offset=8
          (get_local $1)
        )
      )
      (call $__ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i
        (i32.const 0)
        (get_local $1)
        (get_local $2)
        (get_local $3)
        (get_local $4)
      )
      (block
        (set_local $9
          (i32.and
            (tee_local $7
              (i32.load16_s
                (tee_local $6
                  (i32.add
                    (get_local $1)
                    (i32.const 52)
                  )
                )
              )
            )
            (i32.const 255)
          )
        )
        (set_local $10
          (i32.and
            (i32.shr_u
              (i32.and
                (get_local $7)
                (i32.const 65535)
              )
              (i32.const 8)
            )
            (i32.const 255)
          )
        )
        (set_local $11
          (i32.add
            (i32.add
              (get_local $0)
              (i32.const 16)
            )
            (i32.shl
              (tee_local $8
                (i32.load offset=12
                  (get_local $0)
                )
              )
              (i32.const 3)
            )
          )
        )
        (i32.store8
          (get_local $6)
          (i32.const 0)
        )
        (i32.store8
          (tee_local $7
            (i32.add
              (get_local $1)
              (i32.const 53)
            )
          )
          (i32.const 0)
        )
        (call $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib
          (i32.add
            (get_local $0)
            (i32.const 16)
          )
          (get_local $1)
          (get_local $2)
          (get_local $3)
          (get_local $4)
          (get_local $5)
        )
        (block $label$break$L4
          (if
            (i32.gt_s
              (get_local $8)
              (i32.const 1)
            )
            (block
              (set_local $12
                (i32.add
                  (get_local $1)
                  (i32.const 24)
                )
              )
              (set_local $8
                (i32.add
                  (get_local $0)
                  (i32.const 8)
                )
              )
              (set_local $13
                (i32.add
                  (get_local $1)
                  (i32.const 54)
                )
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 24)
                )
              )
              (loop $while-in
                (br_if $label$break$L4
                  (i32.load8_s
                    (get_local $13)
                  )
                )
                (if
                  (i32.shr_s
                    (i32.shl
                      (i32.and
                        (tee_local $14
                          (i32.load16_s
                            (get_local $6)
                          )
                        )
                        (i32.const 255)
                      )
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                  (block
                    (br_if $label$break$L4
                      (i32.eq
                        (i32.load
                          (get_local $12)
                        )
                        (i32.const 1)
                      )
                    )
                    (br_if $label$break$L4
                      (i32.eqz
                        (i32.and
                          (i32.load
                            (get_local $8)
                          )
                          (i32.const 2)
                        )
                      )
                    )
                  )
                  (if
                    (i32.ge_s
                      (i32.and
                        (get_local $14)
                        (i32.const 65535)
                      )
                      (i32.const 256)
                    )
                    (br_if $label$break$L4
                      (i32.eqz
                        (i32.and
                          (i32.load
                            (get_local $8)
                          )
                          (i32.const 1)
                        )
                      )
                    )
                  )
                )
                (i32.store8
                  (get_local $6)
                  (i32.const 0)
                )
                (i32.store8
                  (get_local $7)
                  (i32.const 0)
                )
                (call $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib
                  (get_local $0)
                  (get_local $1)
                  (get_local $2)
                  (get_local $3)
                  (get_local $4)
                  (get_local $5)
                )
                (br_if $while-in
                  (i32.lt_u
                    (tee_local $0
                      (i32.add
                        (get_local $0)
                        (i32.const 8)
                      )
                    )
                    (get_local $11)
                  )
                )
              )
            )
          )
        )
        (i32.store8
          (get_local $6)
          (get_local $9)
        )
        (i32.store8
          (get_local $7)
          (get_local $10)
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (block $label$break$L1
      (if
        (i32.eq
          (get_local $0)
          (i32.load offset=8
            (get_local $1)
          )
        )
        (if
          (i32.eq
            (i32.load offset=4
              (get_local $1)
            )
            (get_local $2)
          )
          (if
            (i32.ne
              (i32.load
                (tee_local $0
                  (i32.add
                    (get_local $1)
                    (i32.const 28)
                  )
                )
              )
              (i32.const 1)
            )
            (i32.store
              (get_local $0)
              (get_local $3)
            )
          )
        )
        (block
          (if
            (i32.ne
              (get_local $0)
              (i32.load
                (get_local $1)
              )
            )
            (block
              (set_local $5
                (i32.load offset=12
                  (get_local $0)
                )
              )
              (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
                (i32.add
                  (get_local $0)
                  (i32.const 16)
                )
                (get_local $1)
                (get_local $2)
                (get_local $3)
                (get_local $4)
              )
              (br_if $label$break$L1
                (i32.le_s
                  (get_local $5)
                  (i32.const 1)
                )
              )
              (set_local $7
                (i32.add
                  (i32.add
                    (get_local $0)
                    (i32.const 16)
                  )
                  (i32.shl
                    (get_local $5)
                    (i32.const 3)
                  )
                )
              )
              (set_local $5
                (i32.add
                  (get_local $0)
                  (i32.const 24)
                )
              )
              (if
                (i32.eqz
                  (i32.and
                    (tee_local $6
                      (i32.load offset=8
                        (get_local $0)
                      )
                    )
                    (i32.const 2)
                  )
                )
                (if
                  (i32.ne
                    (i32.load
                      (tee_local $0
                        (i32.add
                          (get_local $1)
                          (i32.const 36)
                        )
                      )
                    )
                    (i32.const 1)
                  )
                  (block
                    (if
                      (i32.eqz
                        (i32.and
                          (get_local $6)
                          (i32.const 1)
                        )
                      )
                      (block
                        (set_local $6
                          (i32.add
                            (get_local $1)
                            (i32.const 54)
                          )
                        )
                        (loop $while-in
                          (br_if $label$break$L1
                            (i32.load8_s
                              (get_local $6)
                            )
                          )
                          (br_if $label$break$L1
                            (i32.eq
                              (i32.load
                                (get_local $0)
                              )
                              (i32.const 1)
                            )
                          )
                          (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
                            (get_local $5)
                            (get_local $1)
                            (get_local $2)
                            (get_local $3)
                            (get_local $4)
                          )
                          (br_if $while-in
                            (i32.lt_u
                              (tee_local $5
                                (i32.add
                                  (get_local $5)
                                  (i32.const 8)
                                )
                              )
                              (get_local $7)
                            )
                          )
                          (br $label$break$L1)
                        )
                      )
                    )
                    (set_local $6
                      (i32.add
                        (get_local $1)
                        (i32.const 24)
                      )
                    )
                    (set_local $8
                      (i32.add
                        (get_local $1)
                        (i32.const 54)
                      )
                    )
                    (loop $while-in1
                      (br_if $label$break$L1
                        (i32.load8_s
                          (get_local $8)
                        )
                      )
                      (if
                        (i32.eq
                          (i32.load
                            (get_local $0)
                          )
                          (i32.const 1)
                        )
                        (br_if $label$break$L1
                          (i32.eq
                            (i32.load
                              (get_local $6)
                            )
                            (i32.const 1)
                          )
                        )
                      )
                      (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
                        (get_local $5)
                        (get_local $1)
                        (get_local $2)
                        (get_local $3)
                        (get_local $4)
                      )
                      (br_if $while-in1
                        (i32.lt_u
                          (tee_local $5
                            (i32.add
                              (get_local $5)
                              (i32.const 8)
                            )
                          )
                          (get_local $7)
                        )
                      )
                      (br $label$break$L1)
                    )
                  )
                )
              )
              (set_local $0
                (i32.add
                  (get_local $1)
                  (i32.const 54)
                )
              )
              (loop $while-in3
                (br_if $label$break$L1
                  (i32.load8_s
                    (get_local $0)
                  )
                )
                (call $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib
                  (get_local $5)
                  (get_local $1)
                  (get_local $2)
                  (get_local $3)
                  (get_local $4)
                )
                (br_if $while-in3
                  (i32.lt_u
                    (tee_local $5
                      (i32.add
                        (get_local $5)
                        (i32.const 8)
                      )
                    )
                    (get_local $7)
                  )
                )
                (br $label$break$L1)
              )
            )
          )
          (if
            (i32.ne
              (i32.load offset=16
                (get_local $1)
              )
              (get_local $2)
            )
            (if
              (i32.ne
                (i32.load
                  (tee_local $11
                    (i32.add
                      (get_local $1)
                      (i32.const 20)
                    )
                  )
                )
                (get_local $2)
              )
              (block
                (i32.store offset=32
                  (get_local $1)
                  (get_local $3)
                )
                (br_if $label$break$L1
                  (i32.eq
                    (i32.load
                      (tee_local $12
                        (i32.add
                          (get_local $1)
                          (i32.const 44)
                        )
                      )
                    )
                    (i32.const 4)
                  )
                )
                (set_local $13
                  (i32.add
                    (i32.add
                      (get_local $0)
                      (i32.const 16)
                    )
                    (i32.shl
                      (i32.load offset=12
                        (get_local $0)
                      )
                      (i32.const 3)
                    )
                  )
                )
                (set_local $7
                  (i32.add
                    (get_local $1)
                    (i32.const 52)
                  )
                )
                (set_local $6
                  (i32.add
                    (get_local $1)
                    (i32.const 53)
                  )
                )
                (set_local $8
                  (i32.add
                    (get_local $1)
                    (i32.const 54)
                  )
                )
                (set_local $9
                  (i32.add
                    (get_local $0)
                    (i32.const 8)
                  )
                )
                (set_local $10
                  (i32.add
                    (get_local $1)
                    (i32.const 24)
                  )
                )
                (set_local $3
                  (i32.const 0)
                )
                (set_local $5
                  (i32.add
                    (get_local $0)
                    (i32.const 16)
                  )
                )
                (set_local $0
                  (i32.const 0)
                )
                (i32.store
                  (get_local $12)
                  (tee_local $0
                    (block $jumpthreading$outer$1 i32
                      (block $jumpthreading$inner$1
                        (block $jumpthreading$inner$0
                          (loop $label$continue$L34
                            (br_if $jumpthreading$inner$0
                              (i32.ge_u
                                (get_local $5)
                                (get_local $13)
                              )
                            )
                            (i32.store8
                              (get_local $7)
                              (i32.const 0)
                            )
                            (i32.store8
                              (get_local $6)
                              (i32.const 0)
                            )
                            (call $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib
                              (get_local $5)
                              (get_local $1)
                              (get_local $2)
                              (get_local $2)
                              (i32.const 1)
                              (get_local $4)
                            )
                            (br_if $jumpthreading$inner$0
                              (i32.load8_s
                                (get_local $8)
                              )
                            )
                            (block $do-once
                              (if
                                (i32.load8_s
                                  (get_local $6)
                                )
                                (block
                                  (if
                                    (i32.eqz
                                      (i32.load8_s
                                        (get_local $7)
                                      )
                                    )
                                    (if
                                      (i32.and
                                        (i32.load
                                          (get_local $9)
                                        )
                                        (i32.const 1)
                                      )
                                      (block
                                        (set_local $3
                                          (i32.const 1)
                                        )
                                        (br $do-once)
                                      )
                                      (block
                                        (set_local $3
                                          (i32.const 1)
                                        )
                                        (br $jumpthreading$inner$0)
                                      )
                                    )
                                  )
                                  (br_if $jumpthreading$inner$1
                                    (i32.eq
                                      (i32.load
                                        (get_local $10)
                                      )
                                      (i32.const 1)
                                    )
                                  )
                                  (br_if $jumpthreading$inner$1
                                    (i32.eqz
                                      (i32.and
                                        (i32.load
                                          (get_local $9)
                                        )
                                        (i32.const 2)
                                      )
                                    )
                                  )
                                  (set_local $3
                                    (i32.const 1)
                                  )
                                  (set_local $0
                                    (i32.const 1)
                                  )
                                )
                              )
                            )
                            (set_local $5
                              (i32.add
                                (get_local $5)
                                (i32.const 8)
                              )
                            )
                            (br $label$continue$L34)
                          )
                        )
                        (if
                          (i32.eqz
                            (get_local $0)
                          )
                          (block
                            (i32.store
                              (get_local $11)
                              (get_local $2)
                            )
                            (i32.store
                              (tee_local $0
                                (i32.add
                                  (get_local $1)
                                  (i32.const 40)
                                )
                              )
                              (i32.add
                                (i32.load
                                  (get_local $0)
                                )
                                (i32.const 1)
                              )
                            )
                            (if
                              (i32.eq
                                (i32.load offset=36
                                  (get_local $1)
                                )
                                (i32.const 1)
                              )
                              (if
                                (i32.eq
                                  (i32.load
                                    (get_local $10)
                                  )
                                  (i32.const 2)
                                )
                                (block
                                  (i32.store8
                                    (get_local $8)
                                    (i32.const 1)
                                  )
                                  (br_if $jumpthreading$inner$1
                                    (get_local $3)
                                  )
                                  (br $jumpthreading$outer$1
                                    (i32.const 4)
                                  )
                                )
                              )
                            )
                          )
                        )
                        (br_if $jumpthreading$inner$1
                          (get_local $3)
                        )
                        (br $jumpthreading$outer$1
                          (i32.const 4)
                        )
                      )
                      (i32.const 3)
                    )
                  )
                )
                (br $label$break$L1)
              )
            )
          )
          (if
            (i32.eq
              (get_local $3)
              (i32.const 1)
            )
            (i32.store offset=32
              (get_local $1)
              (i32.const 1)
            )
          )
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (local $4 i32)
    (local $5 i32)
    (block $label$break$L1
      (if
        (i32.eq
          (get_local $0)
          (i32.load offset=8
            (get_local $1)
          )
        )
        (call $__ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi
          (i32.const 0)
          (get_local $1)
          (get_local $2)
          (get_local $3)
        )
        (block
          (set_local $5
            (i32.add
              (i32.add
                (get_local $0)
                (i32.const 16)
              )
              (i32.shl
                (tee_local $4
                  (i32.load offset=12
                    (get_local $0)
                  )
                )
                (i32.const 3)
              )
            )
          )
          (call $__ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi
            (i32.add
              (get_local $0)
              (i32.const 16)
            )
            (get_local $1)
            (get_local $2)
            (get_local $3)
          )
          (if
            (i32.gt_s
              (get_local $4)
              (i32.const 1)
            )
            (block
              (set_local $4
                (i32.add
                  (get_local $1)
                  (i32.const 54)
                )
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 24)
                )
              )
              (loop $while-in
                (call $__ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi
                  (get_local $0)
                  (get_local $1)
                  (get_local $2)
                  (get_local $3)
                )
                (br_if $label$break$L1
                  (i32.load8_s
                    (get_local $4)
                  )
                )
                (br_if $while-in
                  (i32.lt_u
                    (tee_local $0
                      (i32.add
                        (get_local $0)
                        (i32.const 8)
                      )
                    )
                    (get_local $5)
                  )
                )
              )
            )
          )
        )
      )
    )
  )
  (func $__ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (set_local $4
      (i32.shr_s
        (tee_local $5
          (i32.load offset=4
            (get_local $0)
          )
        )
        (i32.const 8)
      )
    )
    (if
      (i32.and
        (get_local $5)
        (i32.const 1)
      )
      (set_local $4
        (i32.load
          (i32.add
            (i32.load
              (get_local $2)
            )
            (get_local $4)
          )
        )
      )
    )
    (set_local $6
      (i32.load offset=28
        (i32.load
          (tee_local $0
            (i32.load
              (get_local $0)
            )
          )
        )
      )
    )
    (call_indirect $FUNCSIG$viiii
      (get_local $0)
      (get_local $1)
      (i32.add
        (get_local $2)
        (get_local $4)
      )
      (if i32
        (i32.and
          (get_local $5)
          (i32.const 2)
        )
        (get_local $3)
        (i32.const 2)
      )
      (i32.add
        (i32.and
          (get_local $6)
          (i32.const 3)
        )
        (i32.const 44)
      )
    )
  )
  (func $__ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (set_local $6
      (i32.shr_s
        (tee_local $7
          (i32.load offset=4
            (get_local $0)
          )
        )
        (i32.const 8)
      )
    )
    (if
      (i32.and
        (get_local $7)
        (i32.const 1)
      )
      (set_local $6
        (i32.load
          (i32.add
            (i32.load
              (get_local $3)
            )
            (get_local $6)
          )
        )
      )
    )
    (set_local $8
      (i32.load offset=20
        (i32.load
          (tee_local $0
            (i32.load
              (get_local $0)
            )
          )
        )
      )
    )
    (call_indirect $FUNCSIG$viiiiii
      (get_local $0)
      (get_local $1)
      (get_local $2)
      (i32.add
        (get_local $3)
        (get_local $6)
      )
      (if i32
        (i32.and
          (get_local $7)
          (i32.const 2)
        )
        (get_local $4)
        (i32.const 2)
      )
      (get_local $5)
      (i32.add
        (i32.and
          (get_local $8)
          (i32.const 3)
        )
        (i32.const 40)
      )
    )
  )
  (func $__ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (set_local $5
      (i32.shr_s
        (tee_local $6
          (i32.load offset=4
            (get_local $0)
          )
        )
        (i32.const 8)
      )
    )
    (if
      (i32.and
        (get_local $6)
        (i32.const 1)
      )
      (set_local $5
        (i32.load
          (i32.add
            (i32.load
              (get_local $2)
            )
            (get_local $5)
          )
        )
      )
    )
    (set_local $7
      (i32.load offset=24
        (i32.load
          (tee_local $0
            (i32.load
              (get_local $0)
            )
          )
        )
      )
    )
    (call_indirect $FUNCSIG$viiiii
      (get_local $0)
      (get_local $1)
      (i32.add
        (get_local $2)
        (get_local $5)
      )
      (if i32
        (i32.and
          (get_local $6)
          (i32.const 2)
        )
        (get_local $3)
        (i32.const 2)
      )
      (get_local $4)
      (i32.add
        (i32.and
          (get_local $7)
          (i32.const 3)
        )
        (i32.const 8)
      )
    )
  )
  (func $__ZNSt9bad_allocC2Ev (param $0 i32)
    (i32.store
      (get_local $0)
      (i32.const 1892)
    )
  )
  (func $__ZSt15get_new_handlerv (result i32)
    (local $0 i32)
    (i32.store
      (i32.const 5792)
      (i32.add
        (tee_local $0
          (i32.load
            (i32.const 5792)
          )
        )
        (i32.const 0)
      )
    )
    (get_local $0)
  )
  (func $___cxa_can_catch (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (set_local $3
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (i32.store
      (tee_local $4
        (get_local $3)
      )
      (i32.load
        (get_local $2)
      )
    )
    (if
      (tee_local $0
        (call_indirect $FUNCSIG$iiii
          (get_local $0)
          (get_local $1)
          (get_local $4)
          (i32.add
            (i32.and
              (i32.load offset=16
                (i32.load
                  (get_local $0)
                )
              )
              (i32.const 7)
            )
            (i32.const 0)
          )
        )
      )
      (i32.store
        (get_local $2)
        (i32.load
          (get_local $4)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $3)
    )
    (i32.and
      (get_local $0)
      (i32.const 1)
    )
  )
  (func $___cxa_is_pointer_type (param $0 i32) (result i32)
    (i32.and
      (if i32
        (get_local $0)
        (i32.ne
          (call $___dynamic_cast
            (get_local $0)
            (i32.const 1160)
            (i32.const 1232)
            (i32.const 0)
          )
          (i32.const 0)
        )
        (i32.const 0)
      )
      (i32.const 1)
    )
  )
  (func $runPostSets
    (nop)
  )
  (func $_memset (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $4
      (i32.add
        (get_local $0)
        (get_local $2)
      )
    )
    (if
      (i32.ge_s
        (get_local $2)
        (i32.const 20)
      )
      (block
        (set_local $1
          (i32.and
            (get_local $1)
            (i32.const 255)
          )
        )
        (if
          (tee_local $3
            (i32.and
              (get_local $0)
              (i32.const 3)
            )
          )
          (block
            (set_local $3
              (i32.sub
                (i32.add
                  (get_local $0)
                  (i32.const 4)
                )
                (get_local $3)
              )
            )
            (loop $while-in
              (if
                (i32.lt_s
                  (get_local $0)
                  (get_local $3)
                )
                (block
                  (i32.store8
                    (get_local $0)
                    (get_local $1)
                  )
                  (set_local $0
                    (i32.add
                      (get_local $0)
                      (i32.const 1)
                    )
                  )
                  (br $while-in)
                )
              )
            )
          )
        )
        (set_local $3
          (i32.or
            (i32.or
              (i32.or
                (get_local $1)
                (i32.shl
                  (get_local $1)
                  (i32.const 8)
                )
              )
              (i32.shl
                (get_local $1)
                (i32.const 16)
              )
            )
            (i32.shl
              (get_local $1)
              (i32.const 24)
            )
          )
        )
        (set_local $5
          (i32.and
            (get_local $4)
            (i32.const -4)
          )
        )
        (loop $while-in1
          (if
            (i32.lt_s
              (get_local $0)
              (get_local $5)
            )
            (block
              (i32.store
                (get_local $0)
                (get_local $3)
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 4)
                )
              )
              (br $while-in1)
            )
          )
        )
      )
    )
    (loop $while-in3
      (if
        (i32.lt_s
          (get_local $0)
          (get_local $4)
        )
        (block
          (i32.store8
            (get_local $0)
            (get_local $1)
          )
          (set_local $0
            (i32.add
              (get_local $0)
              (i32.const 1)
            )
          )
          (br $while-in3)
        )
      )
    )
    (i32.sub
      (get_local $0)
      (get_local $2)
    )
  )
  (func $_memcpy (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (if
      (i32.ge_s
        (get_local $2)
        (i32.const 4096)
      )
      (return
        (call $_emscripten_memcpy_big
          (get_local $0)
          (get_local $1)
          (get_local $2)
        )
      )
    )
    (set_local $3
      (get_local $0)
    )
    (if
      (i32.eq
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.and
          (get_local $1)
          (i32.const 3)
        )
      )
      (block
        (loop $while-in
          (if
            (i32.and
              (get_local $0)
              (i32.const 3)
            )
            (block
              (if
                (i32.eqz
                  (get_local $2)
                )
                (return
                  (get_local $3)
                )
              )
              (i32.store8
                (get_local $0)
                (i32.load8_s
                  (get_local $1)
                )
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 1)
                )
              )
              (set_local $1
                (i32.add
                  (get_local $1)
                  (i32.const 1)
                )
              )
              (set_local $2
                (i32.sub
                  (get_local $2)
                  (i32.const 1)
                )
              )
              (br $while-in)
            )
          )
        )
        (loop $while-in1
          (if
            (i32.ge_s
              (get_local $2)
              (i32.const 4)
            )
            (block
              (i32.store
                (get_local $0)
                (i32.load
                  (get_local $1)
                )
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 4)
                )
              )
              (set_local $1
                (i32.add
                  (get_local $1)
                  (i32.const 4)
                )
              )
              (set_local $2
                (i32.sub
                  (get_local $2)
                  (i32.const 4)
                )
              )
              (br $while-in1)
            )
          )
        )
      )
    )
    (loop $while-in3
      (if
        (i32.gt_s
          (get_local $2)
          (i32.const 0)
        )
        (block
          (i32.store8
            (get_local $0)
            (i32.load8_s
              (get_local $1)
            )
          )
          (set_local $0
            (i32.add
              (get_local $0)
              (i32.const 1)
            )
          )
          (set_local $1
            (i32.add
              (get_local $1)
              (i32.const 1)
            )
          )
          (set_local $2
            (i32.sub
              (get_local $2)
              (i32.const 1)
            )
          )
          (br $while-in3)
        )
      )
    )
    (get_local $3)
  )
  (func $_sbrk (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (i32.add
        (tee_local $2
          (i32.load
            (get_global $DYNAMICTOP_PTR)
          )
        )
        (tee_local $0
          (i32.and
            (i32.add
              (get_local $0)
              (i32.const 15)
            )
            (i32.const -16)
          )
        )
      )
    )
    (if
      (i32.or
        (i32.and
          (i32.gt_s
            (get_local $0)
            (i32.const 0)
          )
          (i32.lt_s
            (get_local $1)
            (get_local $2)
          )
        )
        (i32.lt_s
          (get_local $1)
          (i32.const 0)
        )
      )
      (block
        (drop
          (call $abortOnCannotGrowMemory)
        )
        (call $___setErrNo
          (i32.const 12)
        )
        (return
          (i32.const -1)
        )
      )
    )
    (i32.store
      (get_global $DYNAMICTOP_PTR)
      (get_local $1)
    )
    (if
      (i32.gt_s
        (get_local $1)
        (call $getTotalMemory)
      )
      (if
        (i32.eqz
          (call $enlargeMemory)
        )
        (block
          (call $___setErrNo
            (i32.const 12)
          )
          (i32.store
            (get_global $DYNAMICTOP_PTR)
            (get_local $2)
          )
          (return
            (i32.const -1)
          )
        )
      )
    )
    (get_local $2)
  )
  (func $_memmove (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (if
      (i32.and
        (i32.lt_s
          (get_local $1)
          (get_local $0)
        )
        (i32.lt_s
          (get_local $0)
          (i32.add
            (get_local $1)
            (get_local $2)
          )
        )
      )
      (block
        (set_local $3
          (get_local $0)
        )
        (set_local $1
          (i32.add
            (get_local $1)
            (get_local $2)
          )
        )
        (set_local $0
          (i32.add
            (get_local $0)
            (get_local $2)
          )
        )
        (loop $while-in
          (if
            (i32.gt_s
              (get_local $2)
              (i32.const 0)
            )
            (block
              (set_local $2
                (i32.sub
                  (get_local $2)
                  (i32.const 1)
                )
              )
              (i32.store8
                (tee_local $0
                  (i32.sub
                    (get_local $0)
                    (i32.const 1)
                  )
                )
                (i32.load8_s
                  (tee_local $1
                    (i32.sub
                      (get_local $1)
                      (i32.const 1)
                    )
                  )
                )
              )
              (br $while-in)
            )
          )
        )
        (set_local $0
          (get_local $3)
        )
      )
      (drop
        (call $_memcpy
          (get_local $0)
          (get_local $1)
          (get_local $2)
        )
      )
    )
    (get_local $0)
  )
  (func $dynCall_iiii (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
    (call_indirect $FUNCSIG$iiii
      (get_local $1)
      (get_local $2)
      (get_local $3)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 7)
        )
        (i32.const 0)
      )
    )
  )
  (func $dynCall_viiiii (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (call_indirect $FUNCSIG$viiiii
      (get_local $1)
      (get_local $2)
      (get_local $3)
      (get_local $4)
      (get_local $5)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.const 8)
      )
    )
  )
  (func $dynCall_vi (param $0 i32) (param $1 i32)
    (call_indirect $FUNCSIG$vi
      (get_local $1)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 15)
        )
        (i32.const 12)
      )
    )
  )
  (func $dynCall_vii (param $0 i32) (param $1 i32) (param $2 i32)
    (call_indirect $FUNCSIG$vii
      (get_local $1)
      (get_local $2)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.const 28)
      )
    )
  )
  (func $dynCall_ii (param $0 i32) (param $1 i32) (result i32)
    (call_indirect $FUNCSIG$ii
      (get_local $1)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.const 32)
      )
    )
  )
  (func $dynCall_v (param $0 i32)
    (call_indirect $FUNCSIG$v
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.const 36)
      )
    )
  )
  (func $dynCall_viiiiii (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (param $6 i32)
    (call_indirect $FUNCSIG$viiiiii
      (get_local $1)
      (get_local $2)
      (get_local $3)
      (get_local $4)
      (get_local $5)
      (get_local $6)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.const 40)
      )
    )
  )
  (func $dynCall_viiii (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (call_indirect $FUNCSIG$viiii
      (get_local $1)
      (get_local $2)
      (get_local $3)
      (get_local $4)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.const 44)
      )
    )
  )
  (func $b0 (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (call $abort
      (i32.const 0)
    )
    (i32.const 0)
  )
  (func $b1 (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (call $abort
      (i32.const 1)
    )
  )
  (func $b2 (param $0 i32)
    (call $abort
      (i32.const 2)
    )
  )
  (func $b3 (param $0 i32) (param $1 i32)
    (call $abort
      (i32.const 3)
    )
  )
  (func $b4 (param $0 i32) (result i32)
    (call $abort
      (i32.const 4)
    )
    (i32.const 0)
  )
  (func $b5
    (call $abort
      (i32.const 5)
    )
  )
  (func $b6 (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32)
    (call $abort
      (i32.const 6)
    )
  )
  (func $b7 (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
    (call $abort
      (i32.const 7)
    )
  )
)
