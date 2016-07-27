// The ASMModule object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways ASMModule can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(ASMModule) { ..generated code.. }
// 3. pre-run appended it, var ASMModule = {}; ..generated code..
// 4. External script tag defines var ASMModule.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but ASMModule was defined
// elsewhere (e.g. case 4 above). We also need to check if ASMModule
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use ASMModule
// after the generated code, you will need to define   var ASMModule = {};
// before the code. Then that object will be used in the code, and you
// can continue to use ASMModule afterwards as well.
var ASMModule;
if (!ASMModule) ASMModule = (typeof ASMModule !== 'undefined' ? ASMModule : null) || {};

// Sometimes an existing ASMModule object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in ASMModule) {
  if (ASMModule.hasOwnProperty(key)) {
    moduleOverrides[key] = ASMModule[key];
  }
}

// The environment setup code below is customized to use ASMModule.
// *** Environment setup code ***
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)

if (ASMModule['ENVIRONMENT']) {
  if (ASMModule['ENVIRONMENT'] === 'WEB') {
    ENVIRONMENT_IS_WEB = true;
  } else if (ASMModule['ENVIRONMENT'] === 'WORKER') {
    ENVIRONMENT_IS_WORKER = true;
  } else if (ASMModule['ENVIRONMENT'] === 'NODE') {
    ENVIRONMENT_IS_NODE = true;
  } else if (ASMModule['ENVIRONMENT'] === 'SHELL') {
    ENVIRONMENT_IS_SHELL = true;
  } else {
    throw new Error('The provided ASMModule[\'ENVIRONMENT\'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.');
  }
} else {
  ENVIRONMENT_IS_WEB = typeof window === 'object';
  ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
  ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
  ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
}


if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  if (!ASMModule['print']) ASMModule['print'] = console.log;
  if (!ASMModule['printErr']) ASMModule['printErr'] = console.warn;

  var nodeFS;
  var nodePath;

  ASMModule['read'] = function read(filename, binary) {
    if (!nodeFS) nodeFS = require('fs');
    if (!nodePath) nodePath = require('path');
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    return binary ? ret : ret.toString();
  };

  ASMModule['readBinary'] = function readBinary(filename) {
    var ret = ASMModule['read'](filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };

  ASMModule['load'] = function load(f) {
    globalEval(read(f));
  };

  if (!ASMModule['thisProgram']) {
    if (process['argv'].length > 1) {
      ASMModule['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
    } else {
      ASMModule['thisProgram'] = 'unknown-program';
    }
  }

  ASMModule['arguments'] = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = ASMModule;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  ASMModule['inspect'] = function () { return '[Emscripten ASMModule object]'; };
}
else if (ENVIRONMENT_IS_SHELL) {
  if (!ASMModule['print']) ASMModule['print'] = print;
  if (typeof printErr != 'undefined') ASMModule['printErr'] = printErr; // not present in v8 or older sm

  if (typeof read != 'undefined') {
    ASMModule['read'] = read;
  } else {
    ASMModule['read'] = function read() { throw 'no read() available (jsc?)' };
  }

  ASMModule['readBinary'] = function readBinary(f) {
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    var data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    ASMModule['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    ASMModule['arguments'] = arguments;
  }

}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  ASMModule['read'] = function read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };

  ASMModule['readAsync'] = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
      } else {
        onerror();
      }
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

  if (typeof arguments != 'undefined') {
    ASMModule['arguments'] = arguments;
  }

  if (typeof console !== 'undefined') {
    if (!ASMModule['print']) ASMModule['print'] = function print(x) {
      console.log(x);
    };
    if (!ASMModule['printErr']) ASMModule['printErr'] = function printErr(x) {
      console.warn(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    if (!ASMModule['print']) ASMModule['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }

  if (ENVIRONMENT_IS_WORKER) {
    ASMModule['load'] = importScripts;
  }

  if (typeof ASMModule['setWindowTitle'] === 'undefined') {
    ASMModule['setWindowTitle'] = function(title) { document.title = title };
  }
}
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}

function globalEval(x) {
  eval.call(null, x);
}
if (!ASMModule['load'] && ASMModule['read']) {
  ASMModule['load'] = function load(f) {
    globalEval(ASMModule['read'](f));
  };
}
if (!ASMModule['print']) {
  ASMModule['print'] = function(){};
}
if (!ASMModule['printErr']) {
  ASMModule['printErr'] = ASMModule['print'];
}
if (!ASMModule['arguments']) {
  ASMModule['arguments'] = [];
}
if (!ASMModule['thisProgram']) {
  ASMModule['thisProgram'] = './this.program';
}

// *** Environment setup code ***

// Closure helpers
ASMModule.print = ASMModule['print'];
ASMModule.printErr = ASMModule['printErr'];

// Callbacks
ASMModule['preRun'] = [];
ASMModule['postRun'] = [];

// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    ASMModule[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = undefined;



// {{PREAMBLE_ADDITIONS}}

// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

//========================================
// Runtime code shared with compiler
//========================================

var Runtime = {
  setTempRet0: function (value) {
    tempRet0 = value;
  },
  getTempRet0: function () {
    return tempRet0;
  },
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  STACK_ALIGN: 16,
  prepVararg: function (ptr, type) {
    if (type === 'double' || type === 'i64') {
      // move so the load is aligned
      if (ptr & 7) {
        assert((ptr & 7) === 4);
        ptr += 4;
      }
    } else {
      assert((ptr & 3) === 0);
    }
    return ptr;
  },
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (!vararg && (type == 'i64' || type == 'double')) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      assert(args.length == sig.length-1);
      assert(('dynCall_' + sig) in ASMModule, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return ASMModule['dynCall_' + sig].apply(null, [ptr].concat(args));
    } else {
      assert(sig.length == 1);
      assert(('dynCall_' + sig) in ASMModule, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return ASMModule['dynCall_' + sig].call(null, ptr);
    }
  },
  functionPointers: [],
  addFunction: function (func) {
    for (var i = 0; i < Runtime.functionPointers.length; i++) {
      if (!Runtime.functionPointers[i]) {
        Runtime.functionPointers[i] = func;
        return 2*(1 + i);
      }
    }
    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  },
  removeFunction: function (index) {
    Runtime.functionPointers[(index-2)/2] = null;
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      ASMModule.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[sig]) {
      Runtime.funcWrappers[sig] = {};
    }
    var sigCache = Runtime.funcWrappers[sig];
    if (!sigCache[func]) {
      // optimize away arguments usage in common cases
      if (sig.length === 1) {
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func);
        };
      } else if (sig.length === 2) {
        sigCache[func] = function dynCall_wrapper(arg) {
          return Runtime.dynCall(sig, func, [arg]);
        };
      } else {
        // general case
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func, Array.prototype.slice.call(arguments));
        };
      }
    }
    return sigCache[func];
  },
  getCompilerSetting: function (name) {
    throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+15)&-16);(assert((((STACKTOP|0) < (STACK_MAX|0))|0))|0); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + (assert(!staticSealed),size))|0;STATICTOP = (((STATICTOP)+15)&-16); return ret; },
  dynamicAlloc: function (size) { var ret = DYNAMICTOP;DYNAMICTOP = (DYNAMICTOP + (assert(DYNAMICTOP > 0),size))|0;DYNAMICTOP = (((DYNAMICTOP)+15)&-16); if (DYNAMICTOP >= TOTAL_MEMORY) { var success = enlargeMemory(); if (!success) { DYNAMICTOP = ret;  return 0; } }; return ret; },
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 16))*(quantum ? quantum : 16); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0))); return ret; },
  GLOBAL_BASE: 8,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}



ASMModule["Runtime"] = Runtime;



//========================================
// Runtime essentials
//========================================

var ABORT = false; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;

function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

var globalScope = this;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = ASMModule['_' + ident]; // closure exported function
  if (!func) {
    try { func = eval('_' + ident); } catch(e) {}
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}

var cwrap, ccall;
(function(){
  var JSfuncs = {
    // Helpers for cwrap -- it can't refer to Runtime directly because it might
    // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
    // out what the minified function name is.
    'stackSave': function() {
      Runtime.stackSave()
    },
    'stackRestore': function() {
      Runtime.stackRestore()
    },
    // type conversion from js to c
    'arrayToC' : function(arr) {
      var ret = Runtime.stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
    'stringToC' : function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        ret = Runtime.stackAlloc((str.length << 2) + 1);
        writeStringToMemory(str, ret);
      }
      return ret;
    }
  };
  // For fast lookup of conversion functions
  var toC = {'string' : JSfuncs['stringToC'], 'array' : JSfuncs['arrayToC']};

  // C calling interface.
  ccall = function ccallFunc(ident, returnType, argTypes, args, opts) {
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    assert(returnType !== 'array', 'Return type should not be "array".');
    if (args) {
      for (var i = 0; i < args.length; i++) {
        var converter = toC[argTypes[i]];
        if (converter) {
          if (stack === 0) stack = Runtime.stackSave();
          cArgs[i] = converter(args[i]);
        } else {
          cArgs[i] = args[i];
        }
      }
    }
    var ret = func.apply(null, cArgs);
    if ((!opts || !opts.async) && typeof EmterpreterAsync === 'object') {
      assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling ccall');
    }
    if (opts && opts.async) assert(!returnType, 'async ccalls cannot return values');
    if (returnType === 'string') ret = Pointer_stringify(ret);
    if (stack !== 0) {
      if (opts && opts.async) {
        EmterpreterAsync.asyncFinalizers.push(function() {
          Runtime.stackRestore(stack);
        });
        return;
      }
      Runtime.stackRestore(stack);
    }
    return ret;
  }

  var sourceRegex = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;
  function parseJSFunc(jsfunc) {
    // Match the body and the return value of a javascript function source
    var parsed = jsfunc.toString().match(sourceRegex).slice(1);
    return {arguments : parsed[0], body : parsed[1], returnValue: parsed[2]}
  }

  // sources of useful functions. we create this lazily as it can trigger a source decompression on this entire file
  var JSsource = null;
  function ensureJSsource() {
    if (!JSsource) {
      JSsource = {};
      for (var fun in JSfuncs) {
        if (JSfuncs.hasOwnProperty(fun)) {
          // Elements of toCsource are arrays of three items:
          // the code, and the return value
          JSsource[fun] = parseJSFunc(JSfuncs[fun]);
        }
      }
    }
  }

  cwrap = function cwrap(ident, returnType, argTypes) {
    argTypes = argTypes || [];
    var cfunc = getCFunc(ident);
    // When the function takes numbers and returns a number, we can just return
    // the original function
    var numericArgs = argTypes.every(function(type){ return type === 'number'});
    var numericRet = (returnType !== 'string');
    if ( numericRet && numericArgs) {
      return cfunc;
    }
    // Creation of the arguments list (["$1","$2",...,"$nargs"])
    var argNames = argTypes.map(function(x,i){return '$'+i});
    var funcstr = "(function(" + argNames.join(',') + ") {";
    var nargs = argTypes.length;
    if (!numericArgs) {
      // Generate the code needed to convert the arguments from javascript
      // values to pointers
      ensureJSsource();
      funcstr += 'var stack = ' + JSsource['stackSave'].body + ';';
      for (var i = 0; i < nargs; i++) {
        var arg = argNames[i], type = argTypes[i];
        if (type === 'number') continue;
        var convertCode = JSsource[type + 'ToC']; // [code, return]
        funcstr += 'var ' + convertCode.arguments + ' = ' + arg + ';';
        funcstr += convertCode.body + ';';
        funcstr += arg + '=(' + convertCode.returnValue + ');';
      }
    }

    // When the code is compressed, the name of cfunc is not literally 'cfunc' anymore
    var cfuncname = parseJSFunc(function(){return cfunc}).returnValue;
    // Call the function
    funcstr += 'var ret = ' + cfuncname + '(' + argNames.join(',') + ');';
    if (!numericRet) { // Return type can only by 'string' or 'number'
      // Convert the result to a string
      var strgfy = parseJSFunc(function(){return Pointer_stringify}).returnValue;
      funcstr += 'ret = ' + strgfy + '(ret);';
    }
    funcstr += "if (typeof EmterpreterAsync === 'object') { assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling cwrap') }";
    if (!numericArgs) {
      // If we had a stack, restore it
      ensureJSsource();
      funcstr += JSsource['stackRestore'].body.replace('()', '(stack)') + ';';
    }
    funcstr += 'return ret})';
    return eval(funcstr);
  };
})();
ASMModule["ccall"] = ccall;
ASMModule["cwrap"] = cwrap;

function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}
ASMModule["setValue"] = setValue;


function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for setValue: ' + type);
    }
  return null;
}
ASMModule["getValue"] = getValue;

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
ASMModule["ALLOC_NORMAL"] = ALLOC_NORMAL;
ASMModule["ALLOC_STACK"] = ALLOC_STACK;
ASMModule["ALLOC_STATIC"] = ALLOC_STATIC;
ASMModule["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;
ASMModule["ALLOC_NONE"] = ALLOC_NONE;

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [typeof _malloc === 'function' ? _malloc : Runtime.staticAlloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}
ASMModule["allocate"] = allocate;

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!staticSealed) return Runtime.staticAlloc(size);
  if ((typeof _sbrk !== 'undefined' && !_sbrk.called) || !runtimeInitialized) return Runtime.dynamicAlloc(size);
  return _malloc(size);
}
ASMModule["getMemory"] = getMemory;

function Pointer_stringify(ptr, /* optional */ length) {
  if (length === 0 || !ptr) return '';
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = 0;
  var t;
  var i = 0;
  while (1) {
    assert(ptr + i < TOTAL_MEMORY);
    t = HEAPU8[(((ptr)+(i))>>0)];
    hasUtf |= t;
    if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;

  var ret = '';

  if (hasUtf < 128) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  return ASMModule['UTF8ToString'](ptr);
}
ASMModule["Pointer_stringify"] = Pointer_stringify;

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAP8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}
ASMModule["AsciiToString"] = AsciiToString;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}
ASMModule["stringToAscii"] = stringToAscii;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
function UTF8ArrayToString(u8Array, idx) {
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  while (u8Array[endPtr]) ++endPtr;

  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var u0, u1, u2, u3, u4, u5;

    var str = '';
    while (1) {
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      u0 = u8Array[idx++];
      if (!u0) return str;
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      u1 = u8Array[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      u2 = u8Array[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u3 = u8Array[idx++] & 63;
        if ((u0 & 0xF8) == 0xF0) {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
        } else {
          u4 = u8Array[idx++] & 63;
          if ((u0 & 0xFC) == 0xF8) {
            u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
          } else {
            u5 = u8Array[idx++] & 63;
            u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
          }
        }
      }
      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
}
ASMModule["UTF8ArrayToString"] = UTF8ArrayToString;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function UTF8ToString(ptr) {
  return UTF8ArrayToString(HEAPU8,ptr);
}
ASMModule["UTF8ToString"] = UTF8ToString;

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 0xC0 | (u >> 6);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 0xE0 | (u >> 12);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x1FFFFF) {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 0xF0 | (u >> 18);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x3FFFFFF) {
      if (outIdx + 4 >= endIdx) break;
      outU8Array[outIdx++] = 0xF8 | (u >> 24);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 5 >= endIdx) break;
      outU8Array[outIdx++] = 0xFC | (u >> 30);
      outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}
ASMModule["stringToUTF8Array"] = stringToUTF8Array;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}
ASMModule["stringToUTF8"] = stringToUTF8;

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      ++len;
    } else if (u <= 0x7FF) {
      len += 2;
    } else if (u <= 0xFFFF) {
      len += 3;
    } else if (u <= 0x1FFFFF) {
      len += 4;
    } else if (u <= 0x3FFFFFF) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
}
ASMModule["lengthBytesUTF8"] = lengthBytesUTF8;

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
function UTF16ToString(ptr) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  while (HEAP16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}


function UTF32ToString(ptr) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}


function demangle(func) {
  var hasLibcxxabi = !!ASMModule['___cxa_demangle'];
  if (hasLibcxxabi) {
    try {
      var buf = _malloc(func.length);
      writeStringToMemory(func.substr(1), buf);
      var status = _malloc(4);
      var ret = ASMModule['___cxa_demangle'](buf, 0, 0, status);
      if (getValue(status, 'i32') === 0 && ret) {
        return Pointer_stringify(ret);
      }
      // otherwise, libcxxabi failed
    } catch(e) {
      // ignore problems here
    } finally {
      if (buf) _free(buf);
      if (status) _free(status);
      if (ret) _free(ret);
    }
    // failure when using libcxxabi, don't demangle
    return func;
  }
  Runtime.warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
  return func;
}

function demangleAll(text) {
  return text.replace(/__Z[\w\d_]+/g, function(x) { var y = demangle(x); return x === y ? x : (x + ' [' + y + ']') });
}

function jsStackTrace() {
  var err = new Error();
  if (!err.stack) {
    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
    // so try that as a special-case.
    try {
      throw new Error(0);
    } catch(e) {
      err = e;
    }
    if (!err.stack) {
      return '(no stack trace available)';
    }
  }
  return err.stack.toString();
}

function stackTrace() {
  var js = jsStackTrace();
  if (ASMModule['extraStackTrace']) js += '\n' + ASMModule['extraStackTrace']();
  return demangleAll(js);
}
ASMModule["stackTrace"] = stackTrace;

// Memory management

var PAGE_SIZE = 4096;

function alignMemoryPage(x) {
  if (x % 4096 > 0) {
    x += (4096 - (x % 4096));
  }
  return x;
}

var HEAP;
var buffer;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBuffer(buf) {
  ASMModule['buffer'] = buffer = buf;
}

function updateGlobalBufferViews() {
  ASMModule['HEAP8'] = HEAP8 = new Int8Array(buffer);
  ASMModule['HEAP16'] = HEAP16 = new Int16Array(buffer);
  ASMModule['HEAP32'] = HEAP32 = new Int32Array(buffer);
  ASMModule['HEAPU8'] = HEAPU8 = new Uint8Array(buffer);
  ASMModule['HEAPU16'] = HEAPU16 = new Uint16Array(buffer);
  ASMModule['HEAPU32'] = HEAPU32 = new Uint32Array(buffer);
  ASMModule['HEAPF32'] = HEAPF32 = new Float32Array(buffer);
  ASMModule['HEAPF64'] = HEAPF64 = new Float64Array(buffer);
}

var STATIC_BASE = 0, STATICTOP = 0, staticSealed = false; // static area
var STACK_BASE = 0, STACKTOP = 0, STACK_MAX = 0; // stack area
var DYNAMIC_BASE = 0, DYNAMICTOP = 0; // dynamic area handled by sbrk


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  assert((STACK_MAX & 3) == 0);
  HEAPU32[(STACK_MAX >> 2)-1] = 0x02135467;
  HEAPU32[(STACK_MAX >> 2)-2] = 0x89BACDFE;
}

function checkStackCookie() {
  if (HEAPU32[(STACK_MAX >> 2)-1] != 0x02135467 || HEAPU32[(STACK_MAX >> 2)-2] != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x' + HEAPU32[(STACK_MAX >> 2)-2].toString(16) + ' ' + HEAPU32[(STACK_MAX >> 2)-1].toString(16));
  }
  // Also test the global address 0 for integrity. This check is not compatible with SAFE_SPLIT_MEMORY though, since that mode already tests all address 0 accesses on its own.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) throw 'Runtime error: The application has corrupted its heap memory area (address zero)!';
}

function abortStackOverflow(allocSize) {
  abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - asm.stackSave() + allocSize) + ' bytes available!');
}

function abortOnCannotGrowMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set ASMModule.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
}

function enlargeMemory() {
  abortOnCannotGrowMemory();
}


var TOTAL_STACK = ASMModule['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = ASMModule['TOTAL_MEMORY'] || 16777216;

var totalMemory = 64*1024;
while (totalMemory < TOTAL_MEMORY || totalMemory < 2*TOTAL_STACK) {
  if (totalMemory < 16*1024*1024) {
    totalMemory *= 2;
  } else {
    totalMemory += 16*1024*1024
  }
}
if (totalMemory !== TOTAL_MEMORY) {
  ASMModule.printErr('increasing TOTAL_MEMORY to ' + totalMemory + ' to be compliant with the asm.js spec (and given that TOTAL_STACK=' + TOTAL_STACK + ')');
  TOTAL_MEMORY = totalMemory;
}

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
       'JS engine does not provide full typed array support');



// Use a provided buffer, if there is one, or else allocate a new one
if (ASMModule['buffer']) {
  buffer = ASMModule['buffer'];
  assert(buffer.byteLength === TOTAL_MEMORY, 'provided buffer should be ' + TOTAL_MEMORY + ' bytes, but it is ' + buffer.byteLength);
} else {
  buffer = new ArrayBuffer(TOTAL_MEMORY);
}
updateGlobalBufferViews();


// Endianness check (note: assumes compiler arch was little-endian)
  HEAP32[0] = 0x63736d65; /* 'emsc' */
HEAP16[1] = 0x6373;
if (HEAPU8[2] !== 0x73 || HEAPU8[3] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';

ASMModule['HEAP'] = HEAP;
ASMModule['buffer'] = buffer;
ASMModule['HEAP8'] = HEAP8;
ASMModule['HEAP16'] = HEAP16;
ASMModule['HEAP32'] = HEAP32;
ASMModule['HEAPU8'] = HEAPU8;
ASMModule['HEAPU16'] = HEAPU16;
ASMModule['HEAPU32'] = HEAPU32;
ASMModule['HEAPF32'] = HEAPF32;
ASMModule['HEAPF64'] = HEAPF64;

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Runtime.dynCall('v', func);
      } else {
        Runtime.dynCall('vi', func, [callback.arg]);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {
  // compatibility - merge in anything from ASMModule['preRun'] at this time
  if (ASMModule['preRun']) {
    if (typeof ASMModule['preRun'] == 'function') ASMModule['preRun'] = [ASMModule['preRun']];
    while (ASMModule['preRun'].length) {
      addOnPreRun(ASMModule['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  checkStackCookie();
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  callRuntimeCallbacks(__ATEXIT__);
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();
  // compatibility - merge in anything from ASMModule['postRun'] at this time
  if (ASMModule['postRun']) {
    if (typeof ASMModule['postRun'] == 'function') ASMModule['postRun'] = [ASMModule['postRun']];
    while (ASMModule['postRun'].length) {
      addOnPostRun(ASMModule['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
ASMModule["addOnPreRun"] = addOnPreRun;

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
ASMModule["addOnInit"] = addOnInit;

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
ASMModule["addOnPreMain"] = addOnPreMain;

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
ASMModule["addOnExit"] = addOnExit;

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
ASMModule["addOnPostRun"] = addOnPostRun;

// Tools


function intArrayFromString(stringy, dontAddNull, length /* optional */) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}
ASMModule["intArrayFromString"] = intArrayFromString;

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
ASMModule["intArrayToString"] = intArrayToString;

function writeStringToMemory(string, buffer, dontAddNull) {
  var array = intArrayFromString(string, dontAddNull);
  var i = 0;
  while (i < array.length) {
    var chr = array[i];
    HEAP8[(((buffer)+(i))>>0)]=chr;
    i = i + 1;
  }
}
ASMModule["writeStringToMemory"] = writeStringToMemory;

function writeArrayToMemory(array, buffer) {
  for (var i = 0; i < array.length; i++) {
    HEAP8[((buffer++)>>0)]=array[i];
  }
}
ASMModule["writeArrayToMemory"] = writeArrayToMemory;

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}
ASMModule["writeAsciiToMemory"] = writeAsciiToMemory;

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}


// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];


if (!Math['clz32']) Math['clz32'] = function(x) {
  x = x >>> 0;
  for (var i = 0; i < 32; i++) {
    if (x & (1 << (31 - i))) return i;
  }
  return 32;
};
Math.clz32 = Math['clz32']

if (!Math['trunc']) Math['trunc'] = function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};
Math.trunc = Math['trunc'];

var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_min = Math.min;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
  return id;
}

function addRunDependency(id) {
  runDependencies++;
  if (ASMModule['monitorRunDependencies']) {
    ASMModule['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            ASMModule.printErr('still waiting on run dependencies:');
          }
          ASMModule.printErr('dependency: ' + dep);
        }
        if (shown) {
          ASMModule.printErr('(end of list)');
        }
      }, 10000);
    }
  } else {
    ASMModule.printErr('warning: run dependency added without ID');
  }
}
ASMModule["addRunDependency"] = addRunDependency;

function removeRunDependency(id) {
  runDependencies--;
  if (ASMModule['monitorRunDependencies']) {
    ASMModule['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    ASMModule.printErr('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
ASMModule["removeRunDependency"] = removeRunDependency;

ASMModule["preloadedImages"] = {}; // maps url to image data
ASMModule["preloadedAudios"] = {}; // maps url to audio data



var memoryInitializer = null;



var /* show errors on likely calls to FS when it was not included */ FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
ASMModule['FS_createDataFile'] = FS.createDataFile;
ASMModule['FS_createPreloadedFile'] = FS.createPreloadedFile;


// === Body ===

var ASM_CONSTS = [];




STATIC_BASE = 8;

STATICTOP = STATIC_BASE + 976;
  /* global initializers */  __ATINIT__.push();
  

/* memory initializer */ allocate([128,0,0,0,128,1,0,0,168,0,0,0,94,1,0,0,48,0,0,0,0,0,0,0,168,0,0,0,11,1,0,0,16,0,0,0,0,0,0,0,168,0,0,0,48,1,0,0,64,0,0,0,0,0,0,0,128,0,0,0,81,1,0,0,168,0,0,0,141,1,0,0,8,0,0,0,0,0,0,0,168,0,0,0,169,1,0,0,8,0,0,0,0,0,0,0,168,0,0,0,185,1,0,0,88,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0,6,0,0,0,7,0,0,0,8,0,0,0,0,0,0,0,32,0,0,0,1,0,0,0,9,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0,10,0,0,0,11,0,0,0,12,0,0,0,0,0,0,0,72,0,0,0,13,0,0,0,14,0,0,0,15,0,0,0,0,0,0,0,88,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,0,0,0,0,104,0,0,0,16,0,0,0,19,0,0,0,18,0,0,0,118,101,99,116,111,114,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,48,95,95,115,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,54,95,95,115,104,105,109,95,116,121,112,101,95,105,110,102,111,69,0,83,116,57,116,121,112,101,95,105,110,102,111,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,83,116,57,101,120,99,101,112,116,105,111,110,0,83,116,57,98,97,100,95,97,108,108,111,99,0,115,116,100,58,58,98,97,100,95,97,108,108,111,99,0,83,116,49,49,108,111,103,105,99,95,101,114,114,111,114,0,83,116,49,50,108,101,110,103,116,104,95,101,114,114,111,114,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);





/* no memory initializer */
var tempDoublePtr = STATICTOP; STATICTOP += 16;

assert(tempDoublePtr % 8 == 0);

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

}

function copyTempDouble(ptr) {

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

}

// {{PRE_LIBRARY}}


   
  ASMModule["_i64Add"] = _i64Add;

  
  function __ZSt18uncaught_exceptionv() { // std::uncaught_exception()
      return !!__ZSt18uncaught_exceptionv.uncaught_exception;
    }
  
  
  
  var EXCEPTIONS={last:0,caught:[],infos:{},deAdjust:function (adjusted) {
        if (!adjusted || EXCEPTIONS.infos[adjusted]) return adjusted;
        for (var ptr in EXCEPTIONS.infos) {
          var info = EXCEPTIONS.infos[ptr];
          if (info.adjusted === adjusted) {
            return ptr;
          }
        }
        return adjusted;
      },addRef:function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        info.refcount++;
      },decRef:function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        assert(info.refcount > 0);
        info.refcount--;
        if (info.refcount === 0) {
          if (info.destructor) {
            Runtime.dynCall('vi', info.destructor, [ptr]);
          }
          delete EXCEPTIONS.infos[ptr];
          ___cxa_free_exception(ptr);
        }
      },clearRef:function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        info.refcount = 0;
      }};
  function ___resumeException(ptr) {
      if (!EXCEPTIONS.last) { EXCEPTIONS.last = ptr; }
      EXCEPTIONS.clearRef(EXCEPTIONS.deAdjust(ptr)); // exception refcount should be cleared, but don't free it
      throw ptr;
    }function ___cxa_find_matching_catch() {
      var thrown = EXCEPTIONS.last;
      if (!thrown) {
        // just pass through the null ptr
        return ((asm["setTempRet0"](0),0)|0);
      }
      var info = EXCEPTIONS.infos[thrown];
      var throwntype = info.type;
      if (!throwntype) {
        // just pass through the thrown ptr
        return ((asm["setTempRet0"](0),thrown)|0);
      }
      var typeArray = Array.prototype.slice.call(arguments);
  
      var pointer = ASMModule['___cxa_is_pointer_type'](throwntype);
      // can_catch receives a **, add indirection
      if (!___cxa_find_matching_catch.buffer) ___cxa_find_matching_catch.buffer = _malloc(4);
      HEAP32[((___cxa_find_matching_catch.buffer)>>2)]=thrown;
      thrown = ___cxa_find_matching_catch.buffer;
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < typeArray.length; i++) {
        if (typeArray[i] && ASMModule['___cxa_can_catch'](typeArray[i], throwntype, thrown)) {
          thrown = HEAP32[((thrown)>>2)]; // undo indirection
          info.adjusted = thrown;
          return ((asm["setTempRet0"](typeArray[i]),thrown)|0);
        }
      }
      // Shouldn't happen unless we have bogus data in typeArray
      // or encounter a type for which emscripten doesn't have suitable
      // typeinfo defined. Best-efforts match just in case.
      thrown = HEAP32[((thrown)>>2)]; // undo indirection
      return ((asm["setTempRet0"](throwntype),thrown)|0);
    }function ___cxa_throw(ptr, type, destructor) {
      EXCEPTIONS.infos[ptr] = {
        ptr: ptr,
        adjusted: ptr,
        type: type,
        destructor: destructor,
        refcount: 0,
        caught: false
      };
      EXCEPTIONS.last = ptr;
      if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
        __ZSt18uncaught_exceptionv.uncaught_exception = 1;
      } else {
        __ZSt18uncaught_exceptionv.uncaught_exception++;
      }
      throw ptr;
    }

   
  ASMModule["_memset"] = _memset;

   
  ASMModule["_bitshift64Lshr"] = _bitshift64Lshr;

  function _abort() {
      ASMModule['abort']();
    }

  function ___cxa_find_matching_catch_2() {
          return ___cxa_find_matching_catch.apply(null, arguments);
        }

  
  function _free() {
  }
  ASMModule["_free"] = _free;function ___cxa_free_exception(ptr) {
      try {
        return _free(ptr);
      } catch(e) { // XXX FIXME
        ASMModule.printErr('exception during cxa_free_exception: ' + e);
      }
    }

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 
  ASMModule["_memcpy"] = _memcpy;

  
   
  ASMModule["___muldsi3"] = ___muldsi3; 
  ASMModule["___muldi3"] = ___muldi3;

  function _sbrk(bytes) {
      // Implement a Linux-like 'memory area' for our 'process'.
      // Changes the size of the memory area by |bytes|; returns the
      // address of the previous top ('break') of the memory area
      // We control the "dynamic" memory - DYNAMIC_BASE to DYNAMICTOP
      var self = _sbrk;
      if (!self.called) {
        DYNAMICTOP = alignMemoryPage(DYNAMICTOP); // make sure we start out aligned
        self.called = true;
        assert(Runtime.dynamicAlloc);
        self.alloc = Runtime.dynamicAlloc;
        Runtime.dynamicAlloc = function() { abort('cannot dynamically allocate, sbrk now has control') };
      }
      var ret = DYNAMICTOP;
      if (bytes != 0) {
        var success = self.alloc(bytes);
        if (!success) return -1 >>> 0; // sbrk failure code
      }
      return ret;  // Previous break location.
    }

   
  ASMModule["_memmove"] = _memmove;

  function ___gxx_personality_v0() {
    }


   
  ASMModule["_pthread_self"] = _pthread_self;

  
  function _malloc(bytes) {
      /* Over-allocate to make sure it is byte-aligned by 8.
       * This will leak memory, but this is only the dummy
       * implementation (replaced by dlmalloc normally) so
       * not an issue.
       */
      var ptr = Runtime.dynamicAlloc(bytes + 8);
      return (ptr+8) & 0xFFFFFFF8;
    }
  ASMModule["_malloc"] = _malloc;function ___cxa_allocate_exception(size) {
      return _malloc(size);
    }
STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);

staticSealed = true; // seal the static portion of memory

STACK_MAX = STACK_BASE + TOTAL_STACK;

DYNAMIC_BASE = DYNAMICTOP = Runtime.alignMemory(STACK_MAX);

assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");



function nullFunc_viddd(x) { ASMModule["printErr"]("Invalid function pointer called with signature 'viddd'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  ASMModule["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iiii(x) { ASMModule["printErr"]("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  ASMModule["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiiii(x) { ASMModule["printErr"]("Invalid function pointer called with signature 'viiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  ASMModule["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vi(x) { ASMModule["printErr"]("Invalid function pointer called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  ASMModule["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vii(x) { ASMModule["printErr"]("Invalid function pointer called with signature 'vii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  ASMModule["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_ii(x) { ASMModule["printErr"]("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  ASMModule["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viii(x) { ASMModule["printErr"]("Invalid function pointer called with signature 'viii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  ASMModule["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_v(x) { ASMModule["printErr"]("Invalid function pointer called with signature 'v'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  ASMModule["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiiiii(x) { ASMModule["printErr"]("Invalid function pointer called with signature 'viiiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  ASMModule["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiii(x) { ASMModule["printErr"]("Invalid function pointer called with signature 'viiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  ASMModule["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function invoke_viddd(index,a1,a2,a3,a4) {
  try {
    ASMModule["dynCall_viddd"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  try {
    return ASMModule["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    ASMModule["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_vi(index,a1) {
  try {
    ASMModule["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  try {
    ASMModule["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_ii(index,a1) {
  try {
    return ASMModule["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  try {
    ASMModule["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_v(index) {
  try {
    ASMModule["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    ASMModule["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    ASMModule["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

ASMModule.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

ASMModule.asmLibraryArg = { "abort": abort, "assert": assert, "abortStackOverflow": abortStackOverflow, "nullFunc_viddd": nullFunc_viddd, "nullFunc_iiii": nullFunc_iiii, "nullFunc_viiiii": nullFunc_viiiii, "nullFunc_vi": nullFunc_vi, "nullFunc_vii": nullFunc_vii, "nullFunc_ii": nullFunc_ii, "nullFunc_viii": nullFunc_viii, "nullFunc_v": nullFunc_v, "nullFunc_viiiiii": nullFunc_viiiiii, "nullFunc_viiii": nullFunc_viiii, "invoke_viddd": invoke_viddd, "invoke_iiii": invoke_iiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_viiii": invoke_viiii, "___cxa_throw": ___cxa_throw, "_abort": _abort, "_sbrk": _sbrk, "___cxa_find_matching_catch_2": ___cxa_find_matching_catch_2, "_emscripten_memcpy_big": _emscripten_memcpy_big, "___gxx_personality_v0": ___gxx_personality_v0, "___resumeException": ___resumeException, "___cxa_find_matching_catch": ___cxa_find_matching_catch, "___cxa_free_exception": ___cxa_free_exception, "___cxa_allocate_exception": ___cxa_allocate_exception, "__ZSt18uncaught_exceptionv": __ZSt18uncaught_exceptionv, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT };
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
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
  var nullFunc_vi=env.nullFunc_vi;
  var nullFunc_vii=env.nullFunc_vii;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_viii=env.nullFunc_viii;
  var nullFunc_v=env.nullFunc_v;
  var nullFunc_viiiiii=env.nullFunc_viiiiii;
  var nullFunc_viiii=env.nullFunc_viiii;
  var invoke_viddd=env.invoke_viddd;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_viiii=env.invoke_viiii;
  var ___cxa_throw=env.___cxa_throw;
  var _abort=env._abort;
  var _sbrk=env._sbrk;
  var ___cxa_find_matching_catch_2=env.___cxa_find_matching_catch_2;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var ___resumeException=env.___resumeException;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var ___cxa_free_exception=env.___cxa_free_exception;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
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

function __ZN5FieldC2Ei($this,$id) {
 $this = $this|0;
 $id = $id|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN6ObjectC2Ei($this,$id);
 return;
}
function __ZN5Field10applyForceEP8Particle($this,$pParticle) {
 $this = $this|0;
 $pParticle = $pParticle|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN13MagneticFieldC2Ei($this,$id) {
 $this = $this|0;
 $id = $id|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN5FieldC2Ei($this,$id);
 return;
}
function __ZN13MagneticField8setForceEd($this,$force) {
 $this = $this|0;
 $force = +$force;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 64|0);
 HEAPF64[$0>>3] = $force;
 return;
}
function _main() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function __ZN6ObjectC2Ei($this,$id) {
 $this = $this|0;
 $id = $id|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 8|0);
 __ZN6VectorC2Ev($0);
 $1 = ((($this)) + 32|0);
 __ZN6VectorC2Ev($1);
 HEAP8[$this>>0] = 1;
 $2 = ((($this)) + 1|0);
 HEAP8[$2>>0] = 1;
 $3 = ((($this)) + 56|0);
 HEAP32[$3>>2] = $id;
 return;
}
function __ZN6Object11getPositionEv($this) {
 $this = $this|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 8|0);
 return ($0|0);
}
function __ZN6Object9getOffsetEv($this) {
 $this = $this|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 32|0);
 return ($0|0);
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
function __ZN8Particle9setChargeEd($this,$charge) {
 $this = $this|0;
 $charge = +$charge;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 112|0);
 HEAPF64[$0>>3] = $charge;
 return;
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
function __ZN8Particle11getLifetimeEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 96|0);
 $1 = +HEAPF64[$0>>3];
 return (+$1);
}
function __ZN8Particle4stepEd($this,$dt) {
 $this = $this|0;
 $dt = +$dt;
 var $0 = 0, $1 = 0.0, $10 = 0.0, $11 = 0.0, $12 = 0, $13 = 0.0, $14 = 0.0, $15 = 0, $16 = 0.0, $17 = 0, $18 = 0, $19 = 0.0, $2 = 0.0, $20 = 0.0, $21 = 0, $22 = 0.0, $23 = 0.0, $24 = 0.0, $25 = 0, $26 = 0.0;
 var $27 = 0.0, $28 = 0, $29 = 0.0, $3 = 0, $30 = 0, $31 = 0, $32 = 0.0, $33 = 0.0, $34 = 0, $35 = 0.0, $36 = 0.0, $37 = 0.0, $38 = 0, $39 = 0.0, $4 = 0.0, $40 = 0.0, $5 = 0, $6 = 0.0, $7 = 0.0, $8 = 0;
 var $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 96|0);
 $1 = +HEAPF64[$0>>3];
 $2 = $1 - $dt;
 HEAPF64[$0>>3] = $2;
 $3 = ((($this)) + 72|0);
 $4 = +HEAPF64[$3>>3];
 $5 = $4 != 0.0;
 if ($5) {
  $6 = +HEAPF64[$this>>3];
  $7 = $6 * $dt;
  $8 = ((($this)) + 24|0);
  $9 = +HEAPF64[$8>>3];
  $10 = $9 + $7;
  HEAPF64[$8>>3] = $10;
  $11 = $10 * $dt;
  $12 = ((($this)) + 48|0);
  $13 = +HEAPF64[$12>>3];
  $14 = $13 + $11;
  HEAPF64[$12>>3] = $14;
 }
 $15 = ((($this)) + 80|0);
 $16 = +HEAPF64[$15>>3];
 $17 = $16 != 0.0;
 if ($17) {
  $18 = ((($this)) + 8|0);
  $19 = +HEAPF64[$18>>3];
  $20 = $19 * $dt;
  $21 = ((($this)) + 32|0);
  $22 = +HEAPF64[$21>>3];
  $23 = $22 + $20;
  HEAPF64[$21>>3] = $23;
  $24 = $23 * $dt;
  $25 = ((($this)) + 56|0);
  $26 = +HEAPF64[$25>>3];
  $27 = $26 + $24;
  HEAPF64[$25>>3] = $27;
 }
 $28 = ((($this)) + 88|0);
 $29 = +HEAPF64[$28>>3];
 $30 = $29 != 0.0;
 if (!($30)) {
  return;
 }
 $31 = ((($this)) + 16|0);
 $32 = +HEAPF64[$31>>3];
 $33 = $32 * $dt;
 $34 = ((($this)) + 40|0);
 $35 = +HEAPF64[$34>>3];
 $36 = $35 + $33;
 HEAPF64[$34>>3] = $36;
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
 __ZN6ObjectC2Ei($this,$id);
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
function __ZN15ParticleEmitter11setVelocityEd($this,$velocity) {
 $this = $this|0;
 $velocity = +$velocity;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 72|0);
 HEAPF64[$0>>3] = $velocity;
 return;
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
function __ZN15ParticleEmitter9setChargeEd($this,$charge) {
 $this = $this|0;
 $charge = +$charge;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 88|0);
 HEAPF64[$0>>3] = $charge;
 return;
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
 $18 = (+Math_cos((+$7)));
 $19 = $17 * $18;
 $20 = (+Math_cos((+$14)));
 $21 = $19 * $20;
 $22 = (+Math_sin((+$7)));
 $23 = $17 * $22;
 $24 = $20 * $23;
 $25 = (+Math_sin((+$14)));
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
 var $$0 = 0, $$01 = 0, $$lcssa = 0, $$pre$i$i$i = 0, $$pre1$i$i$i = 0, $$pre2$i$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0;
 var $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0;
 var $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0;
 var $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $i$013 = 0, $lpad$phi$index = 0, $lpad$phi$index2 = 0, $pParticle = 0, $scevgep$i$i$i = 0, $scevgep$i$i$i5 = 0, $scevgep$i$i$i8 = 0, $scevgep4$i$i$i = 0, $scevgep4$i$i$i6 = 0, $scevgep4$i$i$i9 = 0;
 var $sum$i$i$i$i = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $pParticle = sp;
 $0 = ((($this)) + 4|0);
 $1 = ((($this)) + 8|0);
 $2 = ((($this)) + 16|0);
 $3 = ((($this)) + 20|0);
 $4 = ((($this)) + 28|0);
 $5 = ((($this)) + 52|0);
 $6 = ((($this)) + 56|0);
 $7 = ((($this)) + 72|0);
 dest=$0; stop=dest+60|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 __THREW__ = 0;
 invoke_vi(20,($7|0));
 $8 = __THREW__; __THREW__ = 0;
 $9 = $8&1;
 do {
  if ($9) {
   label = 7;
  } else {
   $10 = ((($this)) + 68|0);
   HEAP32[$10>>2] = $maxParticles;
   $11 = ((($this)) + 64|0);
   HEAP32[$11>>2] = 0;
   __THREW__ = 0;
   invoke_viddd(21,($7|0),1.0,1.0,1.0);
   $12 = __THREW__; __THREW__ = 0;
   $13 = $12&1;
   if ($13) {
    label = 7;
   } else {
    $14 = HEAP32[$10>>2]|0;
    $15 = ($14|0)>(0);
    if (!($15)) {
     STACKTOP = sp;return;
    }
    $16 = ((($this)) + 24|0);
    $17 = ((($this)) + 36|0);
    $18 = ((($this)) + 32|0);
    $19 = ((($this)) + 44|0);
    $20 = ((($this)) + 48|0);
    $21 = ((($this)) + 28|0);
    $i$013 = 0;
    while(1) {
     __THREW__ = 0;
     $26 = (invoke_ii(22,128)|0);
     $27 = __THREW__; __THREW__ = 0;
     $28 = $27&1;
     if ($28) {
      label = 6;
      break;
     }
     __THREW__ = 0;
     invoke_vi(23,($26|0));
     $29 = __THREW__; __THREW__ = 0;
     $30 = $29&1;
     if ($30) {
      $$lcssa = $26;
      label = 21;
      break;
     }
     HEAP32[$pParticle>>2] = $26;
     $31 = HEAP32[$3>>2]|0;
     $32 = HEAP32[$16>>2]|0;
     $33 = ($31|0)==($32|0);
     if ($33) {
      __THREW__ = 0;
      invoke_vii(24,($2|0),($pParticle|0));
      $37 = __THREW__; __THREW__ = 0;
      $38 = $37&1;
      if ($38) {
       label = 6;
       break;
      }
     } else {
      $34 = $26;
      HEAP32[$31>>2] = $34;
      $35 = HEAP32[$3>>2]|0;
      $36 = ((($35)) + 4|0);
      HEAP32[$3>>2] = $36;
     }
     __THREW__ = 0;
     $39 = (invoke_ii(25,($26|0))|0);
     $40 = __THREW__; __THREW__ = 0;
     $41 = $40&1;
     if ($41) {
      label = 6;
      break;
     }
     __THREW__ = 0;
     invoke_vii(26,($39|0),($7|0));
     $42 = __THREW__; __THREW__ = 0;
     $43 = $42&1;
     if ($43) {
      label = 6;
      break;
     }
     $44 = $26;
     __THREW__ = 0;
     invoke_vii(27,($26|0),1);
     $45 = __THREW__; __THREW__ = 0;
     $46 = $45&1;
     if ($46) {
      label = 6;
      break;
     }
     $47 = HEAP32[$17>>2]|0;
     $48 = HEAP32[$18>>2]|0;
     $49 = (($47) - ($48))|0;
     $50 = ($47|0)==($48|0);
     $51 = $49 << 8;
     $52 = (($51) + -1)|0;
     $53 = $50 ? 0 : $52;
     $54 = HEAP32[$19>>2]|0;
     $55 = HEAP32[$20>>2]|0;
     $sum$i$i$i$i = (($55) + ($54))|0;
     $56 = ($53|0)==($sum$i$i$i$i|0);
     $57 = $48;
     if ($56) {
      __THREW__ = 0;
      invoke_vi(28,($21|0));
      $58 = __THREW__; __THREW__ = 0;
      $59 = $58&1;
      if ($59) {
       label = 6;
       break;
      }
      $$pre$i$i$i = HEAP32[$20>>2]|0;
      $$pre1$i$i$i = HEAP32[$19>>2]|0;
      $$pre2$i$i$i = HEAP32[$18>>2]|0;
      $61 = $$pre$i$i$i;$62 = $$pre1$i$i$i;$65 = $$pre2$i$i$i;
     } else {
      $61 = $55;$62 = $54;$65 = $57;
     }
     $60 = (($61) + ($62))|0;
     $63 = $60 >>> 10;
     $64 = (($65) + ($63<<2)|0);
     $66 = HEAP32[$64>>2]|0;
     $67 = $60 & 1023;
     $68 = (($66) + ($67<<2)|0);
     HEAP32[$68>>2] = $44;
     $69 = (($61) + 1)|0;
     HEAP32[$20>>2] = $69;
     $70 = HEAP32[$11>>2]|0;
     $71 = (($70) + -1)|0;
     HEAP32[$11>>2] = $71;
     $72 = (($i$013) + 1)|0;
     $73 = HEAP32[$10>>2]|0;
     $74 = ($72|0)<($73|0);
     if ($74) {
      $i$013 = $72;
     } else {
      label = 5;
      break;
     }
    }
    if ((label|0) == 5) {
     STACKTOP = sp;return;
    }
    else if ((label|0) == 6) {
     $22 = ___cxa_find_matching_catch_2()|0;
     $23 = tempRet0;
     $lpad$phi$index = $22;$lpad$phi$index2 = $23;
     label = 8;
     break;
    }
    else if ((label|0) == 21) {
     $75 = ___cxa_find_matching_catch_2()|0;
     $76 = tempRet0;
     __ZdlPv($$lcssa);
     $$0 = $76;$$01 = $75;
     break;
    }
   }
  }
 } while(0);
 if ((label|0) == 7) {
  $24 = ___cxa_find_matching_catch_2()|0;
  $25 = tempRet0;
  $lpad$phi$index = $24;$lpad$phi$index2 = $25;
  label = 8;
 }
 if ((label|0) == 8) {
  $$0 = $lpad$phi$index2;$$01 = $lpad$phi$index;
 }
 $77 = HEAP32[$5>>2]|0;
 $78 = ($77|0)==(0|0);
 $79 = $77;
 if (!($78)) {
  $80 = HEAP32[$6>>2]|0;
  $81 = ($80|0)==($77|0);
  if (!($81)) {
   $scevgep$i$i$i8 = ((($80)) + -4|0);
   $82 = $scevgep$i$i$i8;
   $83 = (($82) - ($79))|0;
   $84 = $83 >>> 2;
   $85 = $84 ^ -1;
   $scevgep4$i$i$i9 = (($80) + ($85<<2)|0);
   HEAP32[$6>>2] = $scevgep4$i$i$i9;
  }
  __ZdlPv($77);
 }
 __ZNSt3__25queueIP8ParticleNS_5dequeIS2_NS_9allocatorIS2_EEEEED2Ev($4);
 $86 = HEAP32[$2>>2]|0;
 $87 = ($86|0)==(0|0);
 $88 = $86;
 if (!($87)) {
  $89 = HEAP32[$3>>2]|0;
  $90 = ($89|0)==($86|0);
  if (!($90)) {
   $scevgep$i$i$i5 = ((($89)) + -4|0);
   $91 = $scevgep$i$i$i5;
   $92 = (($91) - ($88))|0;
   $93 = $92 >>> 2;
   $94 = $93 ^ -1;
   $scevgep4$i$i$i6 = (($89) + ($94<<2)|0);
   HEAP32[$3>>2] = $scevgep4$i$i$i6;
  }
  __ZdlPv($86);
 }
 $95 = HEAP32[$0>>2]|0;
 $96 = ($95|0)==(0|0);
 $97 = $95;
 if ($96) {
  ___resumeException($$01|0);
  // unreachable;
 }
 $98 = HEAP32[$1>>2]|0;
 $99 = ($98|0)==($95|0);
 if (!($99)) {
  $scevgep$i$i$i = ((($98)) + -4|0);
  $100 = $scevgep$i$i$i;
  $101 = (($100) - ($97))|0;
  $102 = $101 >>> 2;
  $103 = $102 ^ -1;
  $scevgep4$i$i$i = (($98) + ($103<<2)|0);
  HEAP32[$1>>2] = $scevgep4$i$i$i;
 }
 __ZdlPv($95);
 ___resumeException($$01|0);
 // unreachable;
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
    ___cxa_throw(($23|0),(72|0),(13|0));
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
     ___cxa_throw(($36|0),(72|0),(13|0));
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
   ___cxa_throw(($177|0),(72|0),(13|0));
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
  $186 = (invoke_ii(22,4096)|0);
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
       invoke_viii(29,($205|0),(72|0),(13|0));
       $206 = __THREW__; __THREW__ = 0;
      } else {
       $207 = $203 << 2;
       __THREW__ = 0;
       $208 = (invoke_ii(22,($207|0))|0);
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
     invoke_vii(30,($__buf|0),($228|0));
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
     ___cxa_throw(($147|0),(72|0),(13|0));
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
     ___cxa_throw(($96|0),(72|0),(13|0));
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
    ___cxa_throw(($29|0),(72|0),(13|0));
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
    ___cxa_throw(($29|0),(72|0),(13|0));
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
function __ZN14ParticleSystem11pushRecycleEP8Particle($this,$pParticle) {
 $this = $this|0;
 $pParticle = $pParticle|0;
 var $$pre$i$i = 0, $$pre1$i$i = 0, $$pre2$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $sum$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $pParticle;
 __ZN8Particle11setRecycledEb($pParticle,1);
 $1 = ((($this)) + 36|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ((($this)) + 32|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = (($2) - ($4))|0;
 $6 = ($2|0)==($4|0);
 $7 = $5 << 8;
 $8 = (($7) + -1)|0;
 $9 = $6 ? 0 : $8;
 $10 = ((($this)) + 44|0);
 $11 = HEAP32[$10>>2]|0;
 $12 = ((($this)) + 48|0);
 $13 = HEAP32[$12>>2]|0;
 $sum$i$i$i = (($13) + ($11))|0;
 $14 = ($9|0)==($sum$i$i$i|0);
 $15 = $4;
 if ($14) {
  $16 = ((($this)) + 28|0);
  __ZNSt3__25dequeIP8ParticleNS_9allocatorIS2_EEE19__add_back_capacityEv($16);
  $$pre$i$i = HEAP32[$12>>2]|0;
  $$pre1$i$i = HEAP32[$10>>2]|0;
  $$pre2$i$i = HEAP32[$3>>2]|0;
  $18 = $$pre$i$i;$19 = $$pre1$i$i;$22 = $$pre2$i$i;
 } else {
  $18 = $13;$19 = $11;$22 = $15;
 }
 $17 = (($18) + ($19))|0;
 $20 = $17 >>> 10;
 $21 = (($22) + ($20<<2)|0);
 $23 = HEAP32[$21>>2]|0;
 $24 = $17 & 1023;
 $25 = (($23) + ($24<<2)|0);
 HEAP32[$25>>2] = $0;
 $26 = (($18) + 1)|0;
 HEAP32[$12>>2] = $26;
 $27 = ((($this)) + 64|0);
 $28 = HEAP32[$27>>2]|0;
 $29 = (($28) + -1)|0;
 HEAP32[$27>>2] = $29;
 return;
}
function __ZN14ParticleSystemD2Ev($this) {
 $this = $this|0;
 var $$pre = 0, $$pre30 = 0, $$pre31 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $7 = 0, $8 = 0, $9 = 0, $it$sroa$0$026 = 0, $it1$sroa$0$022 = 0, $it2$sroa$0$021 = 0, $scevgep$i$i$i11 = 0, $scevgep$i$i$i16 = 0, $scevgep$i$i$i6 = 0, $scevgep4$i$i$i12 = 0, $scevgep4$i$i$i17 = 0, $scevgep4$i$i$i7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 8|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1|0)==($3|0);
 if (!($4)) {
  $58 = $3;$it$sroa$0$026 = $1;
  while(1) {
   $10 = HEAP32[$it$sroa$0$026>>2]|0;
   $11 = ($10|0)==(0|0);
   if ($11) {
    $14 = $58;
   } else {
    __ZdlPv($10);
    $$pre = HEAP32[$2>>2]|0;
    $14 = $$pre;
   }
   $12 = ((($it$sroa$0$026)) + 4|0);
   $13 = ($12|0)==($14|0);
   if ($13) {
    break;
   } else {
    $58 = $14;$it$sroa$0$026 = $12;
   }
  }
 }
 $5 = ((($this)) + 52|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = ((($this)) + 56|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = ($6|0)==($8|0);
 if (!($9)) {
  $59 = $8;$it1$sroa$0$022 = $6;
  while(1) {
   $20 = HEAP32[$it1$sroa$0$022>>2]|0;
   $21 = ($20|0)==(0|0);
   if ($21) {
    $24 = $59;
   } else {
    __ZdlPv($20);
    $$pre30 = HEAP32[$7>>2]|0;
    $24 = $$pre30;
   }
   $22 = ((($it1$sroa$0$022)) + 4|0);
   $23 = ($22|0)==($24|0);
   if ($23) {
    break;
   } else {
    $59 = $24;$it1$sroa$0$022 = $22;
   }
  }
 }
 $15 = ((($this)) + 16|0);
 $16 = HEAP32[$15>>2]|0;
 $17 = ((($this)) + 20|0);
 $18 = HEAP32[$17>>2]|0;
 $19 = ($16|0)==($18|0);
 if (!($19)) {
  $60 = $18;$it2$sroa$0$021 = $16;
  while(1) {
   $34 = HEAP32[$it2$sroa$0$021>>2]|0;
   $35 = ($34|0)==(0|0);
   if ($35) {
    $38 = $60;
   } else {
    __ZdlPv($34);
    $$pre31 = HEAP32[$17>>2]|0;
    $38 = $$pre31;
   }
   $36 = ((($it2$sroa$0$021)) + 4|0);
   $37 = ($36|0)==($38|0);
   if ($37) {
    break;
   } else {
    $60 = $38;$it2$sroa$0$021 = $36;
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
   $scevgep$i$i$i16 = ((($28)) + -4|0);
   $30 = $scevgep$i$i$i16;
   $31 = (($30) - ($27))|0;
   $32 = $31 >>> 2;
   $33 = $32 ^ -1;
   $scevgep4$i$i$i17 = (($28) + ($33<<2)|0);
   HEAP32[$7>>2] = $scevgep4$i$i$i17;
  }
  __ZdlPv($25);
 }
 $39 = ((($this)) + 28|0);
 __ZNSt3__25queueIP8ParticleNS_5dequeIS2_NS_9allocatorIS2_EEEEED2Ev($39);
 $40 = HEAP32[$15>>2]|0;
 $41 = ($40|0)==(0|0);
 $42 = $40;
 if (!($41)) {
  $43 = HEAP32[$17>>2]|0;
  $44 = ($43|0)==($40|0);
  if (!($44)) {
   $scevgep$i$i$i11 = ((($43)) + -4|0);
   $45 = $scevgep$i$i$i11;
   $46 = (($45) - ($42))|0;
   $47 = $46 >>> 2;
   $48 = $47 ^ -1;
   $scevgep4$i$i$i12 = (($43) + ($48<<2)|0);
   HEAP32[$17>>2] = $scevgep4$i$i$i12;
  }
  __ZdlPv($40);
 }
 $49 = HEAP32[$0>>2]|0;
 $50 = ($49|0)==(0|0);
 $51 = $49;
 if ($50) {
  return;
 }
 $52 = HEAP32[$2>>2]|0;
 $53 = ($52|0)==($49|0);
 if (!($53)) {
  $scevgep$i$i$i6 = ((($52)) + -4|0);
  $54 = $scevgep$i$i$i6;
  $55 = (($54) - ($51))|0;
  $56 = $55 >>> 2;
  $57 = $56 ^ -1;
  $scevgep4$i$i$i7 = (($52) + ($57<<2)|0);
  HEAP32[$2>>2] = $scevgep4$i$i$i7;
 }
 __ZdlPv($49);
 return;
}
function __ZN14ParticleSystem16initParticleLoopEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 16|0);
 $1 = HEAP32[$0>>2]|0;
 HEAP32[$this>>2] = $1;
 return;
}
function __ZN14ParticleSystem12nextParticleEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 20|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = HEAP32[$this>>2]|0;
 $3 = ($2|0)==($1|0);
 if ($3) {
  $6 = 0;
  return ($6|0);
 }
 $4 = ((($2)) + 4|0);
 HEAP32[$this>>2] = $4;
 $5 = HEAP32[$2>>2]|0;
 $6 = $5;
 return ($6|0);
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
 invoke_vii(31,($0|0),($id|0));
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
 $3 = ((($this)) + 8|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = ((($this)) + 12|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = ($4|0)==($6|0);
 if ($7) {
  $11 = ((($this)) + 4|0);
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
    ___cxa_throw(($23|0),(72|0),(13|0));
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
 $1 = (__Znwj(72)|0);
 __THREW__ = 0;
 invoke_vii(32,($1|0),($id|0));
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
 $4 = ((($this)) + 56|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = ((($this)) + 60|0);
 $7 = HEAP32[$6>>2]|0;
 $8 = ($5|0)==($7|0);
 if ($8) {
  $12 = ((($this)) + 52|0);
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
    ___cxa_throw(($23|0),(72|0),(13|0));
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
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN14ParticleSystem15addNewParticlesEd($this,$dt);
 __ZN14ParticleSystem15filterParticlesEd($this,$dt);
 return;
}
function __ZN14ParticleSystem15addNewParticlesEd($this,$dt) {
 $this = $this|0;
 $dt = +$dt;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i$01 = 0, $it$sroa$0$02 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 8|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1|0)==($3|0);
 if ($4) {
  return;
 }
 $5 = ((($this)) + 64|0);
 $6 = ((($this)) + 68|0);
 $7 = ((($this)) + 48|0);
 $8 = ((($this)) + 32|0);
 $9 = ((($this)) + 44|0);
 $it$sroa$0$02 = $1;
 while(1) {
  $10 = HEAP32[$it$sroa$0$02>>2]|0;
  $11 = (__ZN15ParticleEmitter10emitNumberEd($10,$dt)|0);
  $12 = ($11|0)>(0);
  if ($12) {
   $i$01 = 0;
   while(1) {
    $16 = HEAP32[$5>>2]|0;
    $17 = HEAP32[$6>>2]|0;
    $18 = ($16|0)<($17|0);
    if ($18) {
     $19 = HEAP32[$7>>2]|0;
     $20 = ($19|0)==(0);
     if (!($20)) {
      $21 = (($16) + 1)|0;
      HEAP32[$5>>2] = $21;
      $22 = HEAP32[$8>>2]|0;
      $23 = HEAP32[$9>>2]|0;
      $24 = $23 >>> 10;
      $25 = (($22) + ($24<<2)|0);
      $26 = HEAP32[$25>>2]|0;
      $27 = $23 & 1023;
      $28 = (($26) + ($27<<2)|0);
      $29 = HEAP32[$28>>2]|0;
      $30 = (($19) + -1)|0;
      HEAP32[$7>>2] = $30;
      $31 = (($23) + 1)|0;
      HEAP32[$9>>2] = $31;
      $32 = ($31>>>0)>(2047);
      if ($32) {
       $33 = HEAP32[$22>>2]|0;
       __ZdlPv($33);
       $34 = HEAP32[$8>>2]|0;
       $35 = ((($34)) + 4|0);
       HEAP32[$8>>2] = $35;
       $36 = HEAP32[$9>>2]|0;
       $37 = (($36) + -1024)|0;
       HEAP32[$9>>2] = $37;
      }
      __ZN8Particle5resetEv($29);
      $38 = ($29|0)==(0|0);
      if (!($38)) {
       $39 = HEAP32[$it$sroa$0$02>>2]|0;
       __ZN15ParticleEmitter12emitParticleEP8Particle($39,$29);
      }
     }
    }
    $40 = (($i$01) + 1)|0;
    $41 = HEAP32[$it$sroa$0$02>>2]|0;
    $42 = (__ZN15ParticleEmitter10emitNumberEd($41,$dt)|0);
    $43 = ($40|0)<($42|0);
    if ($43) {
     $i$01 = $40;
    } else {
     break;
    }
   }
  }
  $13 = ((($it$sroa$0$02)) + 4|0);
  $14 = HEAP32[$2>>2]|0;
  $15 = ($13|0)==($14|0);
  if ($15) {
   break;
  } else {
   $it$sroa$0$02 = $13;
  }
 }
 return;
}
function __ZN14ParticleSystem15filterParticlesEd($this,$dt) {
 $this = $this|0;
 $dt = +$dt;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $fIt$sroa$0$02 = 0, $pIt$sroa$0$03 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 16|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($this)) + 20|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1|0)==($3|0);
 if ($4) {
  return;
 }
 $5 = ((($this)) + 52|0);
 $6 = ((($this)) + 56|0);
 $pIt$sroa$0$03 = $1;
 while(1) {
  $7 = HEAP32[$pIt$sroa$0$03>>2]|0;
  $8 = (__ZN14ParticleSystem14filterParticleEP8Particle($this,$7)|0);
  if ($8) {
   $9 = HEAP32[$pIt$sroa$0$03>>2]|0;
   $10 = (__ZN8Particle15getAccelerationEv($9)|0);
   __ZN6Vector3setEddd($10,0.0,0.0,0.0);
   $11 = HEAP32[$5>>2]|0;
   $12 = HEAP32[$6>>2]|0;
   $13 = ($11|0)==($12|0);
   if (!($13)) {
    $fIt$sroa$0$02 = $11;
    while(1) {
     $15 = ((($fIt$sroa$0$02)) + 4|0);
     $16 = HEAP32[$6>>2]|0;
     $17 = ($15|0)==($16|0);
     if ($17) {
      break;
     } else {
      $fIt$sroa$0$02 = $15;
     }
    }
   }
   $14 = HEAP32[$pIt$sroa$0$03>>2]|0;
   __ZN8Particle4stepEd($14,$dt);
  }
  $18 = ((($pIt$sroa$0$03)) + 4|0);
  $19 = HEAP32[$2>>2]|0;
  $20 = ($18|0)==($19|0);
  if ($20) {
   break;
  } else {
   $pIt$sroa$0$03 = $18;
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
  $$0 = 0;
  return ($$0|0);
 }
 $1 = (+__ZN8Particle11getLifetimeEv($pParticle));
 $2 = $1 < 0.0;
 if (!($2)) {
  $$0 = 1;
  return ($$0|0);
 }
 $3 = $pParticle;
 __ZN8Particle11setRecycledEb($pParticle,1);
 $4 = ((($this)) + 36|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = ((($this)) + 32|0);
 $7 = HEAP32[$6>>2]|0;
 $8 = (($5) - ($7))|0;
 $9 = ($5|0)==($7|0);
 $10 = $8 << 8;
 $11 = (($10) + -1)|0;
 $12 = $9 ? 0 : $11;
 $13 = ((($this)) + 44|0);
 $14 = HEAP32[$13>>2]|0;
 $15 = ((($this)) + 48|0);
 $16 = HEAP32[$15>>2]|0;
 $sum$i$i$i$i = (($16) + ($14))|0;
 $17 = ($12|0)==($sum$i$i$i$i|0);
 $18 = $7;
 if ($17) {
  $19 = ((($this)) + 28|0);
  __ZNSt3__25dequeIP8ParticleNS_9allocatorIS2_EEE19__add_back_capacityEv($19);
  $$pre$i$i$i = HEAP32[$15>>2]|0;
  $$pre1$i$i$i = HEAP32[$13>>2]|0;
  $$pre2$i$i$i = HEAP32[$6>>2]|0;
  $21 = $$pre$i$i$i;$22 = $$pre1$i$i$i;$25 = $$pre2$i$i$i;
 } else {
  $21 = $16;$22 = $14;$25 = $18;
 }
 $20 = (($21) + ($22))|0;
 $23 = $20 >>> 10;
 $24 = (($25) + ($23<<2)|0);
 $26 = HEAP32[$24>>2]|0;
 $27 = $20 & 1023;
 $28 = (($26) + ($27<<2)|0);
 HEAP32[$28>>2] = $3;
 $29 = (($21) + 1)|0;
 HEAP32[$15>>2] = $29;
 $30 = ((($this)) + 64|0);
 $31 = HEAP32[$30>>2]|0;
 $32 = (($31) + -1)|0;
 HEAP32[$30>>2] = $32;
 $$0 = 0;
 return ($$0|0);
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
function _emscripten_bind_MagneticField_MagneticField_1($arg0) {
 $arg0 = $arg0|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(72)|0);
 __THREW__ = 0;
 invoke_vii(32,($0|0),($arg0|0));
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
function _emscripten_bind_MagneticField_getOffset_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN6Object9getOffsetEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_MagneticField_getPosition_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN6Object11getPositionEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_MagneticField_setForce_1($self,$arg0) {
 $self = $self|0;
 $arg0 = +$arg0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN13MagneticField8setForceEd($self,$arg0);
 return;
}
function _emscripten_bind_ParticleEmitter_ParticleEmitter_1($arg0) {
 $arg0 = $arg0|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(96)|0);
 __THREW__ = 0;
 invoke_vii(31,($0|0),($arg0|0));
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
function _emscripten_bind_ParticleEmitter_getOffset_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN6Object9getOffsetEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_ParticleEmitter_getPosition_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN6Object11getPositionEv($self)|0);
 return ($0|0);
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
function _emscripten_bind_ParticleEmitter_setSpread_1($self,$arg0) {
 $self = $self|0;
 $arg0 = +$arg0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN15ParticleEmitter9setSpreadEd($self,$arg0);
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
 $0 = (__Znwj(96)|0);
 __THREW__ = 0;
 invoke_vii(33,($0|0),($arg0|0));
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
 invoke_vi(34,($self|0));
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
function _emscripten_bind_ParticleSystem_pushRecycle_1($self,$arg0) {
 $self = $self|0;
 $arg0 = $arg0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN14ParticleSystem11pushRecycleEP8Particle($self,$arg0);
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
 invoke_vi(23,($0|0));
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
function _emscripten_bind_Particle_getPosition_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN8Particle11getPositionEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_Particle_getVelocity_0($self) {
 $self = $self|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__ZN8Particle11getVelocityEv($self)|0);
 return ($0|0);
}
function _emscripten_bind_Vector_Vector_3($arg0,$arg1,$arg2) {
 $arg0 = +$arg0;
 $arg1 = +$arg1;
 $arg2 = +$arg2;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (__Znwj(24)|0);
 __THREW__ = 0;
 invoke_viddd(35,($0|0),(+$arg0),(+$arg1),(+$arg2));
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
function ___errno_location() {
 var $$0 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (0|0)==(0|0);
 if ($0) {
  $$0 = 472;
 } else {
  $1 = (_pthread_self()|0);
  $2 = ((($1)) + 64|0);
  $3 = HEAP32[$2>>2]|0;
  $$0 = $3;
 }
 return ($$0|0);
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
function _rand() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = 464;
 $1 = $0;
 $2 = HEAP32[$1>>2]|0;
 $3 = (($0) + 4)|0;
 $4 = $3;
 $5 = HEAP32[$4>>2]|0;
 $6 = (___muldi3(($2|0),($5|0),1284865837,1481765933)|0);
 $7 = tempRet0;
 $8 = (_i64Add(($6|0),($7|0),1,0)|0);
 $9 = tempRet0;
 $10 = 464;
 $11 = $10;
 HEAP32[$11>>2] = $8;
 $12 = (($10) + 4)|0;
 $13 = $12;
 HEAP32[$13>>2] = $9;
 $14 = (_bitshift64Lshr(($8|0),($9|0),33)|0);
 $15 = tempRet0;
 return ($14|0);
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
   $6 = HEAP32[119]|0;
   $7 = $6 >>> $5;
   $8 = $7 & 3;
   $9 = ($8|0)==(0);
   if (!($9)) {
    $10 = $7 & 1;
    $11 = $10 ^ 1;
    $12 = (($11) + ($5))|0;
    $13 = $12 << 1;
    $14 = (516 + ($13<<2)|0);
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
      HEAP32[119] = $22;
     } else {
      $23 = HEAP32[(492)>>2]|0;
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
   $35 = HEAP32[(484)>>2]|0;
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
     $67 = (516 + ($66<<2)|0);
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
       HEAP32[119] = $75;
       $90 = $35;
      } else {
       $76 = HEAP32[(492)>>2]|0;
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
        $$pre = HEAP32[(484)>>2]|0;
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
      $91 = HEAP32[(496)>>2]|0;
      $92 = $90 >>> 3;
      $93 = $92 << 1;
      $94 = (516 + ($93<<2)|0);
      $95 = HEAP32[119]|0;
      $96 = 1 << $92;
      $97 = $95 & $96;
      $98 = ($97|0)==(0);
      if ($98) {
       $99 = $95 | $96;
       HEAP32[119] = $99;
       $$pre71 = ((($94)) + 8|0);
       $$pre$phiZ2D = $$pre71;$F4$0 = $94;
      } else {
       $100 = ((($94)) + 8|0);
       $101 = HEAP32[$100>>2]|0;
       $102 = HEAP32[(492)>>2]|0;
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
     HEAP32[(484)>>2] = $82;
     HEAP32[(496)>>2] = $85;
     $$0 = $70;
     STACKTOP = sp;return ($$0|0);
    }
    $107 = HEAP32[(480)>>2]|0;
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
     $132 = (780 + ($131<<2)|0);
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
     $150 = HEAP32[(492)>>2]|0;
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
       $184 = (780 + ($183<<2)|0);
       $185 = HEAP32[$184>>2]|0;
       $186 = ($v$0$i$lcssa|0)==($185|0);
       if ($186) {
        HEAP32[$184>>2] = $R$3$i;
        $cond$i = ($R$3$i|0)==(0|0);
        if ($cond$i) {
         $187 = 1 << $183;
         $188 = $187 ^ -1;
         $189 = HEAP32[(480)>>2]|0;
         $190 = $189 & $188;
         HEAP32[(480)>>2] = $190;
         break;
        }
       } else {
        $191 = HEAP32[(492)>>2]|0;
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
       $198 = HEAP32[(492)>>2]|0;
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
        $210 = HEAP32[(492)>>2]|0;
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
      $227 = HEAP32[(484)>>2]|0;
      $228 = ($227|0)==(0);
      if (!($228)) {
       $229 = HEAP32[(496)>>2]|0;
       $230 = $227 >>> 3;
       $231 = $230 << 1;
       $232 = (516 + ($231<<2)|0);
       $233 = HEAP32[119]|0;
       $234 = 1 << $230;
       $235 = $233 & $234;
       $236 = ($235|0)==(0);
       if ($236) {
        $237 = $233 | $234;
        HEAP32[119] = $237;
        $$pre$i = ((($232)) + 8|0);
        $$pre$phi$iZ2D = $$pre$i;$F1$0$i = $232;
       } else {
        $238 = ((($232)) + 8|0);
        $239 = HEAP32[$238>>2]|0;
        $240 = HEAP32[(492)>>2]|0;
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
      HEAP32[(484)>>2] = $rsize$0$i$lcssa;
      HEAP32[(496)>>2] = $152;
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
    $249 = HEAP32[(480)>>2]|0;
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
     $277 = (780 + ($idx$0$i<<2)|0);
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
       $331 = (780 + ($330<<2)|0);
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
      $346 = HEAP32[(484)>>2]|0;
      $347 = (($346) - ($248))|0;
      $348 = ($rsize$4$lcssa$i>>>0)<($347>>>0);
      if ($348) {
       $349 = HEAP32[(492)>>2]|0;
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
         $383 = (780 + ($382<<2)|0);
         $384 = HEAP32[$383>>2]|0;
         $385 = ($v$4$lcssa$i|0)==($384|0);
         if ($385) {
          HEAP32[$383>>2] = $R$3$i11;
          $cond$i12 = ($R$3$i11|0)==(0|0);
          if ($cond$i12) {
           $386 = 1 << $382;
           $387 = $386 ^ -1;
           $388 = HEAP32[(480)>>2]|0;
           $389 = $388 & $387;
           HEAP32[(480)>>2] = $389;
           break;
          }
         } else {
          $390 = HEAP32[(492)>>2]|0;
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
         $397 = HEAP32[(492)>>2]|0;
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
          $409 = HEAP32[(492)>>2]|0;
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
          $429 = (516 + ($428<<2)|0);
          $430 = HEAP32[119]|0;
          $431 = 1 << $426;
          $432 = $430 & $431;
          $433 = ($432|0)==(0);
          if ($433) {
           $434 = $430 | $431;
           HEAP32[119] = $434;
           $$pre$i13 = ((($429)) + 8|0);
           $$pre$phi$i14Z2D = $$pre$i13;$F5$0$i = $429;
          } else {
           $435 = ((($429)) + 8|0);
           $436 = HEAP32[$435>>2]|0;
           $437 = HEAP32[(492)>>2]|0;
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
         $467 = (780 + ($I7$0$i<<2)|0);
         $468 = ((($351)) + 28|0);
         HEAP32[$468>>2] = $I7$0$i;
         $469 = ((($351)) + 16|0);
         $470 = ((($469)) + 4|0);
         HEAP32[$470>>2] = 0;
         HEAP32[$469>>2] = 0;
         $471 = HEAP32[(480)>>2]|0;
         $472 = 1 << $I7$0$i;
         $473 = $471 & $472;
         $474 = ($473|0)==(0);
         if ($474) {
          $475 = $471 | $472;
          HEAP32[(480)>>2] = $475;
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
          $494 = HEAP32[(492)>>2]|0;
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
          $501 = HEAP32[(492)>>2]|0;
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
 $509 = HEAP32[(484)>>2]|0;
 $510 = ($509>>>0)<($nb$0>>>0);
 if (!($510)) {
  $511 = (($509) - ($nb$0))|0;
  $512 = HEAP32[(496)>>2]|0;
  $513 = ($511>>>0)>(15);
  if ($513) {
   $514 = (($512) + ($nb$0)|0);
   HEAP32[(496)>>2] = $514;
   HEAP32[(484)>>2] = $511;
   $515 = $511 | 1;
   $516 = ((($514)) + 4|0);
   HEAP32[$516>>2] = $515;
   $517 = (($514) + ($511)|0);
   HEAP32[$517>>2] = $511;
   $518 = $nb$0 | 3;
   $519 = ((($512)) + 4|0);
   HEAP32[$519>>2] = $518;
  } else {
   HEAP32[(484)>>2] = 0;
   HEAP32[(496)>>2] = 0;
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
 $527 = HEAP32[(488)>>2]|0;
 $528 = ($527>>>0)>($nb$0>>>0);
 if ($528) {
  $529 = (($527) - ($nb$0))|0;
  HEAP32[(488)>>2] = $529;
  $530 = HEAP32[(500)>>2]|0;
  $531 = (($530) + ($nb$0)|0);
  HEAP32[(500)>>2] = $531;
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
 $537 = HEAP32[237]|0;
 $538 = ($537|0)==(0);
 if ($538) {
  HEAP32[(956)>>2] = 4096;
  HEAP32[(952)>>2] = 4096;
  HEAP32[(960)>>2] = -1;
  HEAP32[(964)>>2] = -1;
  HEAP32[(968)>>2] = 0;
  HEAP32[(920)>>2] = 0;
  $539 = $magic$i$i;
  $540 = $539 & -16;
  $541 = $540 ^ 1431655768;
  HEAP32[$magic$i$i>>2] = $541;
  HEAP32[237] = $541;
 }
 $542 = (($nb$0) + 48)|0;
 $543 = HEAP32[(956)>>2]|0;
 $544 = (($nb$0) + 47)|0;
 $545 = (($543) + ($544))|0;
 $546 = (0 - ($543))|0;
 $547 = $545 & $546;
 $548 = ($547>>>0)>($nb$0>>>0);
 if (!($548)) {
  $$0 = 0;
  STACKTOP = sp;return ($$0|0);
 }
 $549 = HEAP32[(916)>>2]|0;
 $550 = ($549|0)==(0);
 if (!($550)) {
  $551 = HEAP32[(908)>>2]|0;
  $552 = (($551) + ($547))|0;
  $553 = ($552>>>0)<=($551>>>0);
  $554 = ($552>>>0)>($549>>>0);
  $or$cond1$i16 = $553 | $554;
  if ($or$cond1$i16) {
   $$0 = 0;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $555 = HEAP32[(920)>>2]|0;
 $556 = $555 & 4;
 $557 = ($556|0)==(0);
 L254: do {
  if ($557) {
   $558 = HEAP32[(500)>>2]|0;
   $559 = ($558|0)==(0|0);
   L256: do {
    if ($559) {
     label = 171;
    } else {
     $sp$0$i$i = (924);
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
     $591 = HEAP32[(488)>>2]|0;
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
      $572 = HEAP32[(952)>>2]|0;
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
      $581 = HEAP32[(908)>>2]|0;
      $582 = (($581) + ($ssize$0$i))|0;
      $583 = ($ssize$0$i>>>0)>($nb$0>>>0);
      $584 = ($ssize$0$i>>>0)<(2147483647);
      $or$cond$i17 = $583 & $584;
      if ($or$cond$i17) {
       $585 = HEAP32[(916)>>2]|0;
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
       $605 = HEAP32[(956)>>2]|0;
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
   $615 = HEAP32[(920)>>2]|0;
   $616 = $615 | 4;
   HEAP32[(920)>>2] = $616;
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
  $627 = HEAP32[(908)>>2]|0;
  $628 = (($627) + ($tsize$745$i))|0;
  HEAP32[(908)>>2] = $628;
  $629 = HEAP32[(912)>>2]|0;
  $630 = ($628>>>0)>($629>>>0);
  if ($630) {
   HEAP32[(912)>>2] = $628;
  }
  $631 = HEAP32[(500)>>2]|0;
  $632 = ($631|0)==(0|0);
  do {
   if ($632) {
    $633 = HEAP32[(492)>>2]|0;
    $634 = ($633|0)==(0|0);
    $635 = ($tbase$746$i>>>0)<($633>>>0);
    $or$cond11$i = $634 | $635;
    if ($or$cond11$i) {
     HEAP32[(492)>>2] = $tbase$746$i;
    }
    HEAP32[(924)>>2] = $tbase$746$i;
    HEAP32[(928)>>2] = $tsize$745$i;
    HEAP32[(936)>>2] = 0;
    $636 = HEAP32[237]|0;
    HEAP32[(512)>>2] = $636;
    HEAP32[(508)>>2] = -1;
    $i$01$i$i = 0;
    while(1) {
     $637 = $i$01$i$i << 1;
     $638 = (516 + ($637<<2)|0);
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
    HEAP32[(500)>>2] = $650;
    HEAP32[(488)>>2] = $651;
    $652 = $651 | 1;
    $653 = ((($650)) + 4|0);
    HEAP32[$653>>2] = $652;
    $654 = (($650) + ($651)|0);
    $655 = ((($654)) + 4|0);
    HEAP32[$655>>2] = 40;
    $656 = HEAP32[(964)>>2]|0;
    HEAP32[(504)>>2] = $656;
   } else {
    $sp$068$i = (924);
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
       $672 = HEAP32[(488)>>2]|0;
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
       HEAP32[(500)>>2] = $680;
       HEAP32[(488)>>2] = $682;
       $683 = $682 | 1;
       $684 = ((($680)) + 4|0);
       HEAP32[$684>>2] = $683;
       $685 = (($680) + ($682)|0);
       $686 = ((($685)) + 4|0);
       HEAP32[$686>>2] = 40;
       $687 = HEAP32[(964)>>2]|0;
       HEAP32[(504)>>2] = $687;
       break;
      }
     }
    }
    $688 = HEAP32[(492)>>2]|0;
    $689 = ($tbase$746$i>>>0)<($688>>>0);
    if ($689) {
     HEAP32[(492)>>2] = $tbase$746$i;
     $753 = $tbase$746$i;
    } else {
     $753 = $688;
    }
    $690 = (($tbase$746$i) + ($tsize$745$i)|0);
    $sp$167$i = (924);
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
      $sp$0$i$i$i = (924);
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
        $727 = HEAP32[(488)>>2]|0;
        $728 = (($727) + ($723))|0;
        HEAP32[(488)>>2] = $728;
        HEAP32[(500)>>2] = $722;
        $729 = $728 | 1;
        $730 = ((($722)) + 4|0);
        HEAP32[$730>>2] = $729;
       } else {
        $731 = HEAP32[(496)>>2]|0;
        $732 = ($718|0)==($731|0);
        if ($732) {
         $733 = HEAP32[(484)>>2]|0;
         $734 = (($733) + ($723))|0;
         HEAP32[(484)>>2] = $734;
         HEAP32[(496)>>2] = $722;
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
           $750 = (516 + ($749<<2)|0);
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
            $760 = HEAP32[119]|0;
            $761 = $760 & $759;
            HEAP32[119] = $761;
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
           $798 = (780 + ($797<<2)|0);
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
             $803 = HEAP32[(480)>>2]|0;
             $804 = $803 & $802;
             HEAP32[(480)>>2] = $804;
             break L328;
            } else {
             $805 = HEAP32[(492)>>2]|0;
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
           $812 = HEAP32[(492)>>2]|0;
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
           $824 = HEAP32[(492)>>2]|0;
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
         $839 = (516 + ($838<<2)|0);
         $840 = HEAP32[119]|0;
         $841 = 1 << $836;
         $842 = $840 & $841;
         $843 = ($842|0)==(0);
         do {
          if ($843) {
           $844 = $840 | $841;
           HEAP32[119] = $844;
           $$pre$i16$i = ((($839)) + 8|0);
           $$pre$phi$i17$iZ2D = $$pre$i16$i;$F4$0$i$i = $839;
          } else {
           $845 = ((($839)) + 8|0);
           $846 = HEAP32[$845>>2]|0;
           $847 = HEAP32[(492)>>2]|0;
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
        $877 = (780 + ($I7$0$i$i<<2)|0);
        $878 = ((($722)) + 28|0);
        HEAP32[$878>>2] = $I7$0$i$i;
        $879 = ((($722)) + 16|0);
        $880 = ((($879)) + 4|0);
        HEAP32[$880>>2] = 0;
        HEAP32[$879>>2] = 0;
        $881 = HEAP32[(480)>>2]|0;
        $882 = 1 << $I7$0$i$i;
        $883 = $881 & $882;
        $884 = ($883|0)==(0);
        if ($884) {
         $885 = $881 | $882;
         HEAP32[(480)>>2] = $885;
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
         $904 = HEAP32[(492)>>2]|0;
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
         $911 = HEAP32[(492)>>2]|0;
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
      $sp$0$i$i$i = (924);
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
    HEAP32[(500)>>2] = $948;
    HEAP32[(488)>>2] = $949;
    $950 = $949 | 1;
    $951 = ((($948)) + 4|0);
    HEAP32[$951>>2] = $950;
    $952 = (($948) + ($949)|0);
    $953 = ((($952)) + 4|0);
    HEAP32[$953>>2] = 40;
    $954 = HEAP32[(964)>>2]|0;
    HEAP32[(504)>>2] = $954;
    $955 = ((($937)) + 4|0);
    HEAP32[$955>>2] = 27;
    ;HEAP32[$938>>2]=HEAP32[(924)>>2]|0;HEAP32[$938+4>>2]=HEAP32[(924)+4>>2]|0;HEAP32[$938+8>>2]=HEAP32[(924)+8>>2]|0;HEAP32[$938+12>>2]=HEAP32[(924)+12>>2]|0;
    HEAP32[(924)>>2] = $tbase$746$i;
    HEAP32[(928)>>2] = $tsize$745$i;
    HEAP32[(936)>>2] = 0;
    HEAP32[(932)>>2] = $938;
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
      $970 = (516 + ($969<<2)|0);
      $971 = HEAP32[119]|0;
      $972 = 1 << $967;
      $973 = $971 & $972;
      $974 = ($973|0)==(0);
      if ($974) {
       $975 = $971 | $972;
       HEAP32[119] = $975;
       $$pre$i$i = ((($970)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $970;
      } else {
       $976 = ((($970)) + 8|0);
       $977 = HEAP32[$976>>2]|0;
       $978 = HEAP32[(492)>>2]|0;
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
     $1008 = (780 + ($I1$0$i$i<<2)|0);
     $1009 = ((($631)) + 28|0);
     HEAP32[$1009>>2] = $I1$0$i$i;
     $1010 = ((($631)) + 20|0);
     HEAP32[$1010>>2] = 0;
     HEAP32[$935>>2] = 0;
     $1011 = HEAP32[(480)>>2]|0;
     $1012 = 1 << $I1$0$i$i;
     $1013 = $1011 & $1012;
     $1014 = ($1013|0)==(0);
     if ($1014) {
      $1015 = $1011 | $1012;
      HEAP32[(480)>>2] = $1015;
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
      $1034 = HEAP32[(492)>>2]|0;
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
      $1041 = HEAP32[(492)>>2]|0;
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
  $1049 = HEAP32[(488)>>2]|0;
  $1050 = ($1049>>>0)>($nb$0>>>0);
  if ($1050) {
   $1051 = (($1049) - ($nb$0))|0;
   HEAP32[(488)>>2] = $1051;
   $1052 = HEAP32[(500)>>2]|0;
   $1053 = (($1052) + ($nb$0)|0);
   HEAP32[(500)>>2] = $1053;
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
 $2 = HEAP32[(492)>>2]|0;
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
   $18 = HEAP32[(496)>>2]|0;
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
    HEAP32[(484)>>2] = $16;
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
    $27 = (516 + ($26<<2)|0);
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
     $36 = HEAP32[119]|0;
     $37 = $36 & $35;
     HEAP32[119] = $37;
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
    $74 = (780 + ($73<<2)|0);
    $75 = HEAP32[$74>>2]|0;
    $76 = ($15|0)==($75|0);
    if ($76) {
     HEAP32[$74>>2] = $R$3;
     $cond20 = ($R$3|0)==(0|0);
     if ($cond20) {
      $77 = 1 << $73;
      $78 = $77 ^ -1;
      $79 = HEAP32[(480)>>2]|0;
      $80 = $79 & $78;
      HEAP32[(480)>>2] = $80;
      $p$1 = $15;$psize$1 = $16;
      break;
     }
    } else {
     $81 = HEAP32[(492)>>2]|0;
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
    $88 = HEAP32[(492)>>2]|0;
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
     $100 = HEAP32[(492)>>2]|0;
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
  $119 = HEAP32[(500)>>2]|0;
  $120 = ($9|0)==($119|0);
  if ($120) {
   $121 = HEAP32[(488)>>2]|0;
   $122 = (($121) + ($psize$1))|0;
   HEAP32[(488)>>2] = $122;
   HEAP32[(500)>>2] = $p$1;
   $123 = $122 | 1;
   $124 = ((($p$1)) + 4|0);
   HEAP32[$124>>2] = $123;
   $125 = HEAP32[(496)>>2]|0;
   $126 = ($p$1|0)==($125|0);
   if (!($126)) {
    return;
   }
   HEAP32[(496)>>2] = 0;
   HEAP32[(484)>>2] = 0;
   return;
  }
  $127 = HEAP32[(496)>>2]|0;
  $128 = ($9|0)==($127|0);
  if ($128) {
   $129 = HEAP32[(484)>>2]|0;
   $130 = (($129) + ($psize$1))|0;
   HEAP32[(484)>>2] = $130;
   HEAP32[(496)>>2] = $p$1;
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
    $143 = (516 + ($142<<2)|0);
    $144 = ($139|0)==($143|0);
    if (!($144)) {
     $145 = HEAP32[(492)>>2]|0;
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
     $153 = HEAP32[119]|0;
     $154 = $153 & $152;
     HEAP32[119] = $154;
     break;
    }
    $155 = ($141|0)==($143|0);
    if ($155) {
     $$pre40 = ((($141)) + 8|0);
     $$pre$phi41Z2D = $$pre40;
    } else {
     $156 = HEAP32[(492)>>2]|0;
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
      $189 = HEAP32[(492)>>2]|0;
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
      $169 = HEAP32[(492)>>2]|0;
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
     $194 = (780 + ($193<<2)|0);
     $195 = HEAP32[$194>>2]|0;
     $196 = ($9|0)==($195|0);
     if ($196) {
      HEAP32[$194>>2] = $R8$3;
      $cond21 = ($R8$3|0)==(0|0);
      if ($cond21) {
       $197 = 1 << $193;
       $198 = $197 ^ -1;
       $199 = HEAP32[(480)>>2]|0;
       $200 = $199 & $198;
       HEAP32[(480)>>2] = $200;
       break;
      }
     } else {
      $201 = HEAP32[(492)>>2]|0;
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
     $208 = HEAP32[(492)>>2]|0;
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
      $220 = HEAP32[(492)>>2]|0;
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
  $227 = HEAP32[(496)>>2]|0;
  $228 = ($p$1|0)==($227|0);
  if ($228) {
   HEAP32[(484)>>2] = $135;
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
  $236 = (516 + ($235<<2)|0);
  $237 = HEAP32[119]|0;
  $238 = 1 << $233;
  $239 = $237 & $238;
  $240 = ($239|0)==(0);
  if ($240) {
   $241 = $237 | $238;
   HEAP32[119] = $241;
   $$pre = ((($236)) + 8|0);
   $$pre$phiZ2D = $$pre;$F18$0 = $236;
  } else {
   $242 = ((($236)) + 8|0);
   $243 = HEAP32[$242>>2]|0;
   $244 = HEAP32[(492)>>2]|0;
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
 $274 = (780 + ($I20$0<<2)|0);
 $275 = ((($p$1)) + 28|0);
 HEAP32[$275>>2] = $I20$0;
 $276 = ((($p$1)) + 16|0);
 $277 = ((($p$1)) + 20|0);
 HEAP32[$277>>2] = 0;
 HEAP32[$276>>2] = 0;
 $278 = HEAP32[(480)>>2]|0;
 $279 = 1 << $I20$0;
 $280 = $278 & $279;
 $281 = ($280|0)==(0);
 do {
  if ($281) {
   $282 = $278 | $279;
   HEAP32[(480)>>2] = $282;
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
    $301 = HEAP32[(492)>>2]|0;
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
    $308 = HEAP32[(492)>>2]|0;
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
 $315 = HEAP32[(508)>>2]|0;
 $316 = (($315) + -1)|0;
 HEAP32[(508)>>2] = $316;
 $317 = ($316|0)==(0);
 if ($317) {
  $sp$0$in$i = (932);
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
 HEAP32[(508)>>2] = -1;
 return;
}
function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (___cxa_allocate_exception(8)|0);
 __THREW__ = 0;
 invoke_vii(36,($0|0),(260|0));
 $1 = __THREW__; __THREW__ = 0;
 $2 = $1&1;
 if ($2) {
  $3 = ___cxa_find_matching_catch_2()|0;
  $4 = tempRet0;
  ___cxa_free_exception(($0|0));
  ___resumeException($3|0);
  // unreachable;
 } else {
  HEAP32[$0>>2] = (248);
  ___cxa_throw(($0|0),(104|0),(16|0));
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
  FUNCTION_TABLE_v[$3 & 0]();
 }
 if ((label|0) == 5) {
  $5 = (___cxa_allocate_exception(4)|0);
  __ZNSt9bad_allocC2Ev($5);
  ___cxa_throw(($5|0),(72|0),(13|0));
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
 HEAP32[$this>>2] = (228);
 $0 = ((($this)) + 4|0);
 __THREW__ = 0;
 invoke_vii(37,($0|0),($msg|0));
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
   $2 = (___dynamic_cast($thrown_type,48,16,0)|0);
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
    FUNCTION_TABLE_viiii[$9 & 15]($2,$info,$10,1);
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
   FUNCTION_TABLE_viiiiii[$19 & 15]($dst_type,$info,$3,$3,1,0);
   $20 = HEAP32[$11>>2]|0;
   $21 = ($20|0)==(1);
   $$ = $21 ? $3 : 0;
   $dst_ptr$0 = $$;
  } else {
   $22 = ((($info)) + 36|0);
   $23 = HEAP32[$5>>2]|0;
   $24 = ((($23)) + 24|0);
   $25 = HEAP32[$24>>2]|0;
   FUNCTION_TABLE_viiiii[$25 & 15]($5,$info,$3,1,0);
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
  FUNCTION_TABLE_viiiiii[$7 & 15]($4,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
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
    FUNCTION_TABLE_viiiii[$48 & 15]($45,$info,$current_ptr,$path_below,$use_strcmp);
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
     FUNCTION_TABLE_viiiiii[$29 & 15]($26,$info,$current_ptr,$current_ptr,1,$use_strcmp);
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
  FUNCTION_TABLE_viiii[$7 & 15]($4,$info,$adjustedPtr,$path_below);
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
 return (410|0);
}
function __ZNSt11logic_errorD2Ev($this) {
 $this = $this|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAP32[$this>>2] = (228);
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
function __ZNSt9bad_allocC2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 HEAP32[$this>>2] = (208);
 return;
}
function __ZSt15get_new_handlerv() {
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[243]|0;HEAP32[243] = (($0+0)|0);
 $1 = $0;
 return ($1|0);
}
function runPostSets() {
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
  return FUNCTION_TABLE_iiii[index&7](a1|0,a2|0,a3|0)|0;
}


function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  FUNCTION_TABLE_viiiii[index&15](a1|0,a2|0,a3|0,a4|0,a5|0);
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
  return FUNCTION_TABLE_ii[index&31](a1|0)|0;
}


function dynCall_viii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  FUNCTION_TABLE_viii[index&31](a1|0,a2|0,a3|0);
}


function dynCall_v(index) {
  index = index|0;
  
  FUNCTION_TABLE_v[index&0]();
}


function dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0;
  FUNCTION_TABLE_viiiiii[index&15](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0);
}


function dynCall_viiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  FUNCTION_TABLE_viiii[index&15](a1|0,a2|0,a3|0,a4|0);
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
function b3(p0) {
 p0 = p0|0; nullFunc_vi(3);
}
function b4(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_vii(4);
}
function b5(p0) {
 p0 = p0|0; nullFunc_ii(5);return 0;
}
function b6(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_viii(6);
}
function ___cxa_throw__wrapper(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; ___cxa_throw(p0|0,p1|0,p2|0);
}
function b7() {
 ; nullFunc_v(7);
}
function b8(p0,p1,p2,p3,p4,p5) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0;p5 = p5|0; nullFunc_viiiiii(8);
}
function b9(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; nullFunc_viiii(9);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_viddd = [b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,__ZN6Vector3setEddd,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0,b0,__ZN6VectorC2Eddd,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0];
var FUNCTION_TABLE_iiii = [b1,b1,b1,b1,b1,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,b1,b1];
var FUNCTION_TABLE_viiiii = [b2,b2,b2,b2,b2,b2,b2,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b2,b2,b2,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b2,b2,b2,b2];
var FUNCTION_TABLE_vi = [b3,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,b3,b3,b3,b3,__ZN10__cxxabiv120__si_class_type_infoD0Ev,b3,b3,b3,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,b3,__ZNSt11logic_errorD2Ev,__ZNSt11logic_errorD0Ev,b3,__ZNSt12length_errorD0Ev,__ZN6VectorC2Ev,b3,b3,__ZN8ParticleC2Ev,b3,b3,b3,b3,__ZNSt3__25dequeIP8ParticleNS_9allocatorIS2_EEE19__add_back_capacityEv
,b3,b3,b3,b3,b3,__ZN14ParticleSystemD2Ev,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3,b3,b3];
var FUNCTION_TABLE_vii = [b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,__ZNSt3__26vectorIP8ParticleNS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_,b4,__ZN6Vector3setERS_,__ZN8Particle11setRecycledEb,b4
,b4,__ZNSt3__214__split_bufferIPP8ParticleRNS_9allocatorIS3_EEE10push_frontERKS3_,__ZN15ParticleEmitterC2Ei,__ZN13MagneticFieldC2Ei,__ZN14ParticleSystemC2Ei,b4,b4,__ZNSt11logic_errorC2EPKc,__ZNSt3__218__libcpp_refstringC2EPKc,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
,b4,b4,b4,b4,b4];
var FUNCTION_TABLE_ii = [b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,__ZNKSt9bad_alloc4whatEv,b5,b5,__ZNKSt11logic_error4whatEv,b5,b5,b5,__Znwj,b5,b5,__ZN8Particle6getDofEv,b5,b5,b5
,b5,b5,b5];
var FUNCTION_TABLE_viii = [b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
,___cxa_throw__wrapper,b6,b6];
var FUNCTION_TABLE_v = [b7];
var FUNCTION_TABLE_viiiiii = [b8,b8,b8,b8,b8,b8,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b8,b8,b8,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b8,b8,b8,b8,b8];
var FUNCTION_TABLE_viiii = [b9,b9,b9,b9,b9,b9,b9,b9,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b9,b9,b9,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b9,b9,b9];

  return { _main: _main, _bitshift64Lshr: _bitshift64Lshr, _emscripten_bind_Particle_getPosition_0: _emscripten_bind_Particle_getPosition_0, _emscripten_bind_MagneticField_setForce_1: _emscripten_bind_MagneticField_setForce_1, _emscripten_bind_MagneticField_MagneticField_1: _emscripten_bind_MagneticField_MagneticField_1, _emscripten_bind_ParticleSystem_addEmitter_1: _emscripten_bind_ParticleSystem_addEmitter_1, _emscripten_bind_Vector_getY_0: _emscripten_bind_Vector_getY_0, _emscripten_bind_MagneticField_getOffset_0: _emscripten_bind_MagneticField_getOffset_0, _emscripten_bind_ParticleSystem_step_1: _emscripten_bind_ParticleSystem_step_1, _emscripten_bind_Vector___destroy___0: _emscripten_bind_Vector___destroy___0, _emscripten_bind_Vector_getZ_0: _emscripten_bind_Vector_getZ_0, _emscripten_bind_ParticleEmitter_setVelocity_1: _emscripten_bind_ParticleEmitter_setVelocity_1, _emscripten_bind_Vector_Vector_3: _emscripten_bind_Vector_Vector_3, _emscripten_bind_VoidPtr___destroy___0: _emscripten_bind_VoidPtr___destroy___0, _memset: _memset, _emscripten_bind_Particle_getAcceleration_0: _emscripten_bind_Particle_getAcceleration_0, _emscripten_bind_ParticleEmitter_getOffset_0: _emscripten_bind_ParticleEmitter_getOffset_0, _emscripten_bind_ParticleSystem_nextParticle_0: _emscripten_bind_ParticleSystem_nextParticle_0, _memcpy: _memcpy, _emscripten_bind_ParticleEmitter_setCharge_1: _emscripten_bind_ParticleEmitter_setCharge_1, _emscripten_bind_ParticleSystem___destroy___0: _emscripten_bind_ParticleSystem___destroy___0, _emscripten_bind_ParticleEmitter_setSpread_1: _emscripten_bind_ParticleEmitter_setSpread_1, ___muldsi3: ___muldsi3, _emscripten_bind_ParticleSystem_addMagneticField_1: _emscripten_bind_ParticleSystem_addMagneticField_1, ___muldi3: ___muldi3, _emscripten_bind_Particle___destroy___0: _emscripten_bind_Particle___destroy___0, _i64Add: _i64Add, _pthread_self: _pthread_self, _emscripten_bind_ParticleSystem_initParticleLoop_0: _emscripten_bind_ParticleSystem_initParticleLoop_0, _emscripten_bind_ParticleEmitter_getPosition_0: _emscripten_bind_ParticleEmitter_getPosition_0, _emscripten_bind_Vector_set_3: _emscripten_bind_Vector_set_3, _emscripten_bind_Particle_Particle_0: _emscripten_bind_Particle_Particle_0, _emscripten_bind_ParticleEmitter_setEmissionRate_1: _emscripten_bind_ParticleEmitter_setEmissionRate_1, _emscripten_bind_ParticleSystem_ParticleSystem_1: _emscripten_bind_ParticleSystem_ParticleSystem_1, ___errno_location: ___errno_location, _emscripten_bind_Particle_getVelocity_0: _emscripten_bind_Particle_getVelocity_0, _free: _free, _emscripten_bind_ParticleEmitter_ParticleEmitter_1: _emscripten_bind_ParticleEmitter_ParticleEmitter_1, _emscripten_bind_ParticleEmitter___destroy___0: _emscripten_bind_ParticleEmitter___destroy___0, _emscripten_bind_Particle_getDof_0: _emscripten_bind_Particle_getDof_0, _emscripten_bind_Vector_getX_0: _emscripten_bind_Vector_getX_0, _malloc: _malloc, _emscripten_bind_MagneticField_getPosition_0: _emscripten_bind_MagneticField_getPosition_0, _memmove: _memmove, _emscripten_bind_MagneticField___destroy___0: _emscripten_bind_MagneticField___destroy___0, _emscripten_bind_ParticleSystem_pushRecycle_1: _emscripten_bind_ParticleSystem_pushRecycle_1, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_viddd: dynCall_viddd, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
(ASMModule.asmGlobalArg, ASMModule.asmLibraryArg, buffer);

var real__main = asm["_main"]; asm["_main"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__main.apply(null, arguments);
};

var real__emscripten_bind_Particle_getPosition_0 = asm["_emscripten_bind_Particle_getPosition_0"]; asm["_emscripten_bind_Particle_getPosition_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Particle_getPosition_0.apply(null, arguments);
};

var real__emscripten_bind_MagneticField_setForce_1 = asm["_emscripten_bind_MagneticField_setForce_1"]; asm["_emscripten_bind_MagneticField_setForce_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_MagneticField_setForce_1.apply(null, arguments);
};

var real__emscripten_bind_MagneticField_MagneticField_1 = asm["_emscripten_bind_MagneticField_MagneticField_1"]; asm["_emscripten_bind_MagneticField_MagneticField_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_MagneticField_MagneticField_1.apply(null, arguments);
};

var real__emscripten_bind_ParticleSystem_addEmitter_1 = asm["_emscripten_bind_ParticleSystem_addEmitter_1"]; asm["_emscripten_bind_ParticleSystem_addEmitter_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleSystem_addEmitter_1.apply(null, arguments);
};

var real__emscripten_bind_Vector_getY_0 = asm["_emscripten_bind_Vector_getY_0"]; asm["_emscripten_bind_Vector_getY_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Vector_getY_0.apply(null, arguments);
};

var real__emscripten_bind_MagneticField_getOffset_0 = asm["_emscripten_bind_MagneticField_getOffset_0"]; asm["_emscripten_bind_MagneticField_getOffset_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_MagneticField_getOffset_0.apply(null, arguments);
};

var real__bitshift64Lshr = asm["_bitshift64Lshr"]; asm["_bitshift64Lshr"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__bitshift64Lshr.apply(null, arguments);
};

var real__emscripten_bind_ParticleSystem_step_1 = asm["_emscripten_bind_ParticleSystem_step_1"]; asm["_emscripten_bind_ParticleSystem_step_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleSystem_step_1.apply(null, arguments);
};

var real__emscripten_bind_Vector_getZ_0 = asm["_emscripten_bind_Vector_getZ_0"]; asm["_emscripten_bind_Vector_getZ_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Vector_getZ_0.apply(null, arguments);
};

var real__emscripten_bind_Vector___destroy___0 = asm["_emscripten_bind_Vector___destroy___0"]; asm["_emscripten_bind_Vector___destroy___0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Vector___destroy___0.apply(null, arguments);
};

var real__emscripten_bind_ParticleEmitter_setVelocity_1 = asm["_emscripten_bind_ParticleEmitter_setVelocity_1"]; asm["_emscripten_bind_ParticleEmitter_setVelocity_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleEmitter_setVelocity_1.apply(null, arguments);
};

var real__emscripten_bind_Particle___destroy___0 = asm["_emscripten_bind_Particle___destroy___0"]; asm["_emscripten_bind_Particle___destroy___0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Particle___destroy___0.apply(null, arguments);
};

var real__emscripten_bind_VoidPtr___destroy___0 = asm["_emscripten_bind_VoidPtr___destroy___0"]; asm["_emscripten_bind_VoidPtr___destroy___0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_VoidPtr___destroy___0.apply(null, arguments);
};

var real__emscripten_bind_ParticleSystem_ParticleSystem_1 = asm["_emscripten_bind_ParticleSystem_ParticleSystem_1"]; asm["_emscripten_bind_ParticleSystem_ParticleSystem_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleSystem_ParticleSystem_1.apply(null, arguments);
};

var real__emscripten_bind_ParticleEmitter_getOffset_0 = asm["_emscripten_bind_ParticleEmitter_getOffset_0"]; asm["_emscripten_bind_ParticleEmitter_getOffset_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleEmitter_getOffset_0.apply(null, arguments);
};

var real__emscripten_bind_ParticleSystem_nextParticle_0 = asm["_emscripten_bind_ParticleSystem_nextParticle_0"]; asm["_emscripten_bind_ParticleSystem_nextParticle_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleSystem_nextParticle_0.apply(null, arguments);
};

var real__emscripten_bind_ParticleEmitter_setCharge_1 = asm["_emscripten_bind_ParticleEmitter_setCharge_1"]; asm["_emscripten_bind_ParticleEmitter_setCharge_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleEmitter_setCharge_1.apply(null, arguments);
};

var real__emscripten_bind_ParticleSystem___destroy___0 = asm["_emscripten_bind_ParticleSystem___destroy___0"]; asm["_emscripten_bind_ParticleSystem___destroy___0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleSystem___destroy___0.apply(null, arguments);
};

var real__emscripten_bind_ParticleEmitter_setSpread_1 = asm["_emscripten_bind_ParticleEmitter_setSpread_1"]; asm["_emscripten_bind_ParticleEmitter_setSpread_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleEmitter_setSpread_1.apply(null, arguments);
};

var real__emscripten_bind_Particle_getVelocity_0 = asm["_emscripten_bind_Particle_getVelocity_0"]; asm["_emscripten_bind_Particle_getVelocity_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Particle_getVelocity_0.apply(null, arguments);
};

var real__emscripten_bind_ParticleSystem_addMagneticField_1 = asm["_emscripten_bind_ParticleSystem_addMagneticField_1"]; asm["_emscripten_bind_ParticleSystem_addMagneticField_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleSystem_addMagneticField_1.apply(null, arguments);
};

var real____muldi3 = asm["___muldi3"]; asm["___muldi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____muldi3.apply(null, arguments);
};

var real__emscripten_bind_Vector_Vector_3 = asm["_emscripten_bind_Vector_Vector_3"]; asm["_emscripten_bind_Vector_Vector_3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Vector_Vector_3.apply(null, arguments);
};

var real__i64Add = asm["_i64Add"]; asm["_i64Add"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__i64Add.apply(null, arguments);
};

var real__pthread_self = asm["_pthread_self"]; asm["_pthread_self"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__pthread_self.apply(null, arguments);
};

var real__emscripten_bind_ParticleSystem_initParticleLoop_0 = asm["_emscripten_bind_ParticleSystem_initParticleLoop_0"]; asm["_emscripten_bind_ParticleSystem_initParticleLoop_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleSystem_initParticleLoop_0.apply(null, arguments);
};

var real__emscripten_bind_ParticleEmitter_getPosition_0 = asm["_emscripten_bind_ParticleEmitter_getPosition_0"]; asm["_emscripten_bind_ParticleEmitter_getPosition_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleEmitter_getPosition_0.apply(null, arguments);
};

var real__emscripten_bind_Vector_set_3 = asm["_emscripten_bind_Vector_set_3"]; asm["_emscripten_bind_Vector_set_3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Vector_set_3.apply(null, arguments);
};

var real__emscripten_bind_Particle_Particle_0 = asm["_emscripten_bind_Particle_Particle_0"]; asm["_emscripten_bind_Particle_Particle_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Particle_Particle_0.apply(null, arguments);
};

var real__emscripten_bind_ParticleEmitter_setEmissionRate_1 = asm["_emscripten_bind_ParticleEmitter_setEmissionRate_1"]; asm["_emscripten_bind_ParticleEmitter_setEmissionRate_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleEmitter_setEmissionRate_1.apply(null, arguments);
};

var real__emscripten_bind_Particle_getAcceleration_0 = asm["_emscripten_bind_Particle_getAcceleration_0"]; asm["_emscripten_bind_Particle_getAcceleration_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Particle_getAcceleration_0.apply(null, arguments);
};

var real____errno_location = asm["___errno_location"]; asm["___errno_location"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____errno_location.apply(null, arguments);
};

var real____muldsi3 = asm["___muldsi3"]; asm["___muldsi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____muldsi3.apply(null, arguments);
};

var real__free = asm["_free"]; asm["_free"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__free.apply(null, arguments);
};

var real__emscripten_bind_ParticleEmitter_ParticleEmitter_1 = asm["_emscripten_bind_ParticleEmitter_ParticleEmitter_1"]; asm["_emscripten_bind_ParticleEmitter_ParticleEmitter_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleEmitter_ParticleEmitter_1.apply(null, arguments);
};

var real__emscripten_bind_ParticleEmitter___destroy___0 = asm["_emscripten_bind_ParticleEmitter___destroy___0"]; asm["_emscripten_bind_ParticleEmitter___destroy___0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleEmitter___destroy___0.apply(null, arguments);
};

var real__emscripten_bind_Particle_getDof_0 = asm["_emscripten_bind_Particle_getDof_0"]; asm["_emscripten_bind_Particle_getDof_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Particle_getDof_0.apply(null, arguments);
};

var real__emscripten_bind_Vector_getX_0 = asm["_emscripten_bind_Vector_getX_0"]; asm["_emscripten_bind_Vector_getX_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_Vector_getX_0.apply(null, arguments);
};

var real__malloc = asm["_malloc"]; asm["_malloc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__malloc.apply(null, arguments);
};

var real__emscripten_bind_MagneticField_getPosition_0 = asm["_emscripten_bind_MagneticField_getPosition_0"]; asm["_emscripten_bind_MagneticField_getPosition_0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_MagneticField_getPosition_0.apply(null, arguments);
};

var real__memmove = asm["_memmove"]; asm["_memmove"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__memmove.apply(null, arguments);
};

var real__emscripten_bind_MagneticField___destroy___0 = asm["_emscripten_bind_MagneticField___destroy___0"]; asm["_emscripten_bind_MagneticField___destroy___0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_MagneticField___destroy___0.apply(null, arguments);
};

var real__emscripten_bind_ParticleSystem_pushRecycle_1 = asm["_emscripten_bind_ParticleSystem_pushRecycle_1"]; asm["_emscripten_bind_ParticleSystem_pushRecycle_1"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_bind_ParticleSystem_pushRecycle_1.apply(null, arguments);
};
var _main = ASMModule["_main"] = asm["_main"];
var _emscripten_bind_Particle_getPosition_0 = ASMModule["_emscripten_bind_Particle_getPosition_0"] = asm["_emscripten_bind_Particle_getPosition_0"];
var _emscripten_bind_MagneticField_setForce_1 = ASMModule["_emscripten_bind_MagneticField_setForce_1"] = asm["_emscripten_bind_MagneticField_setForce_1"];
var _emscripten_bind_MagneticField_MagneticField_1 = ASMModule["_emscripten_bind_MagneticField_MagneticField_1"] = asm["_emscripten_bind_MagneticField_MagneticField_1"];
var _emscripten_bind_ParticleSystem_addEmitter_1 = ASMModule["_emscripten_bind_ParticleSystem_addEmitter_1"] = asm["_emscripten_bind_ParticleSystem_addEmitter_1"];
var _emscripten_bind_Vector_getY_0 = ASMModule["_emscripten_bind_Vector_getY_0"] = asm["_emscripten_bind_Vector_getY_0"];
var _emscripten_bind_MagneticField_getOffset_0 = ASMModule["_emscripten_bind_MagneticField_getOffset_0"] = asm["_emscripten_bind_MagneticField_getOffset_0"];
var _bitshift64Lshr = ASMModule["_bitshift64Lshr"] = asm["_bitshift64Lshr"];
var _emscripten_bind_ParticleSystem_step_1 = ASMModule["_emscripten_bind_ParticleSystem_step_1"] = asm["_emscripten_bind_ParticleSystem_step_1"];
var _emscripten_bind_Vector_getZ_0 = ASMModule["_emscripten_bind_Vector_getZ_0"] = asm["_emscripten_bind_Vector_getZ_0"];
var _emscripten_bind_Vector___destroy___0 = ASMModule["_emscripten_bind_Vector___destroy___0"] = asm["_emscripten_bind_Vector___destroy___0"];
var _emscripten_bind_ParticleEmitter_setVelocity_1 = ASMModule["_emscripten_bind_ParticleEmitter_setVelocity_1"] = asm["_emscripten_bind_ParticleEmitter_setVelocity_1"];
var _emscripten_bind_Particle___destroy___0 = ASMModule["_emscripten_bind_Particle___destroy___0"] = asm["_emscripten_bind_Particle___destroy___0"];
var _emscripten_bind_VoidPtr___destroy___0 = ASMModule["_emscripten_bind_VoidPtr___destroy___0"] = asm["_emscripten_bind_VoidPtr___destroy___0"];
var _memset = ASMModule["_memset"] = asm["_memset"];
var _emscripten_bind_ParticleSystem_ParticleSystem_1 = ASMModule["_emscripten_bind_ParticleSystem_ParticleSystem_1"] = asm["_emscripten_bind_ParticleSystem_ParticleSystem_1"];
var _emscripten_bind_ParticleEmitter_getOffset_0 = ASMModule["_emscripten_bind_ParticleEmitter_getOffset_0"] = asm["_emscripten_bind_ParticleEmitter_getOffset_0"];
var _emscripten_bind_ParticleSystem_nextParticle_0 = ASMModule["_emscripten_bind_ParticleSystem_nextParticle_0"] = asm["_emscripten_bind_ParticleSystem_nextParticle_0"];
var _memcpy = ASMModule["_memcpy"] = asm["_memcpy"];
var _emscripten_bind_ParticleEmitter_setCharge_1 = ASMModule["_emscripten_bind_ParticleEmitter_setCharge_1"] = asm["_emscripten_bind_ParticleEmitter_setCharge_1"];
var _emscripten_bind_ParticleSystem___destroy___0 = ASMModule["_emscripten_bind_ParticleSystem___destroy___0"] = asm["_emscripten_bind_ParticleSystem___destroy___0"];
var _emscripten_bind_ParticleEmitter_setSpread_1 = ASMModule["_emscripten_bind_ParticleEmitter_setSpread_1"] = asm["_emscripten_bind_ParticleEmitter_setSpread_1"];
var _emscripten_bind_Particle_getVelocity_0 = ASMModule["_emscripten_bind_Particle_getVelocity_0"] = asm["_emscripten_bind_Particle_getVelocity_0"];
var _emscripten_bind_ParticleSystem_addMagneticField_1 = ASMModule["_emscripten_bind_ParticleSystem_addMagneticField_1"] = asm["_emscripten_bind_ParticleSystem_addMagneticField_1"];
var ___muldi3 = ASMModule["___muldi3"] = asm["___muldi3"];
var _emscripten_bind_Vector_Vector_3 = ASMModule["_emscripten_bind_Vector_Vector_3"] = asm["_emscripten_bind_Vector_Vector_3"];
var _i64Add = ASMModule["_i64Add"] = asm["_i64Add"];
var _pthread_self = ASMModule["_pthread_self"] = asm["_pthread_self"];
var _emscripten_bind_ParticleSystem_initParticleLoop_0 = ASMModule["_emscripten_bind_ParticleSystem_initParticleLoop_0"] = asm["_emscripten_bind_ParticleSystem_initParticleLoop_0"];
var _emscripten_bind_ParticleEmitter_getPosition_0 = ASMModule["_emscripten_bind_ParticleEmitter_getPosition_0"] = asm["_emscripten_bind_ParticleEmitter_getPosition_0"];
var _emscripten_bind_Vector_set_3 = ASMModule["_emscripten_bind_Vector_set_3"] = asm["_emscripten_bind_Vector_set_3"];
var _emscripten_bind_Particle_Particle_0 = ASMModule["_emscripten_bind_Particle_Particle_0"] = asm["_emscripten_bind_Particle_Particle_0"];
var _emscripten_bind_ParticleEmitter_setEmissionRate_1 = ASMModule["_emscripten_bind_ParticleEmitter_setEmissionRate_1"] = asm["_emscripten_bind_ParticleEmitter_setEmissionRate_1"];
var _emscripten_bind_Particle_getAcceleration_0 = ASMModule["_emscripten_bind_Particle_getAcceleration_0"] = asm["_emscripten_bind_Particle_getAcceleration_0"];
var ___errno_location = ASMModule["___errno_location"] = asm["___errno_location"];
var ___muldsi3 = ASMModule["___muldsi3"] = asm["___muldsi3"];
var _free = ASMModule["_free"] = asm["_free"];
var runPostSets = ASMModule["runPostSets"] = asm["runPostSets"];
var _emscripten_bind_ParticleEmitter_ParticleEmitter_1 = ASMModule["_emscripten_bind_ParticleEmitter_ParticleEmitter_1"] = asm["_emscripten_bind_ParticleEmitter_ParticleEmitter_1"];
var _emscripten_bind_ParticleEmitter___destroy___0 = ASMModule["_emscripten_bind_ParticleEmitter___destroy___0"] = asm["_emscripten_bind_ParticleEmitter___destroy___0"];
var _emscripten_bind_Particle_getDof_0 = ASMModule["_emscripten_bind_Particle_getDof_0"] = asm["_emscripten_bind_Particle_getDof_0"];
var _emscripten_bind_Vector_getX_0 = ASMModule["_emscripten_bind_Vector_getX_0"] = asm["_emscripten_bind_Vector_getX_0"];
var _malloc = ASMModule["_malloc"] = asm["_malloc"];
var _emscripten_bind_MagneticField_getPosition_0 = ASMModule["_emscripten_bind_MagneticField_getPosition_0"] = asm["_emscripten_bind_MagneticField_getPosition_0"];
var _memmove = ASMModule["_memmove"] = asm["_memmove"];
var _emscripten_bind_MagneticField___destroy___0 = ASMModule["_emscripten_bind_MagneticField___destroy___0"] = asm["_emscripten_bind_MagneticField___destroy___0"];
var _emscripten_bind_ParticleSystem_pushRecycle_1 = ASMModule["_emscripten_bind_ParticleSystem_pushRecycle_1"] = asm["_emscripten_bind_ParticleSystem_pushRecycle_1"];
var dynCall_viddd = ASMModule["dynCall_viddd"] = asm["dynCall_viddd"];
var dynCall_iiii = ASMModule["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiii = ASMModule["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = ASMModule["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = ASMModule["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = ASMModule["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = ASMModule["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = ASMModule["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = ASMModule["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_viiii = ASMModule["dynCall_viiii"] = asm["dynCall_viiii"];
;

Runtime.stackAlloc = asm['stackAlloc'];
Runtime.stackSave = asm['stackSave'];
Runtime.stackRestore = asm['stackRestore'];
Runtime.establishStackSpace = asm['establishStackSpace'];

Runtime.setTempRet0 = asm['setTempRet0'];
Runtime.getTempRet0 = asm['getTempRet0'];



// === Auto-generated postamble setup entry stuff ===





function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var preloadStartTime = null;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and ASMModule.noInitialRun is not false)
  if (!ASMModule['calledRun']) run();
  if (!ASMModule['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}

ASMModule['callMain'] = ASMModule.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  args = args || [];

  ensureInitRuntime();

  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString(ASMModule['thisProgram']), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);


  try {

    var ret = ASMModule['_main'](argc, argv, 0);


    // if we're not running an evented main loop, it's time to exit
    exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      ASMModule['noExitRuntime'] = true;
      return;
    } else {
      if (e && typeof e === 'object' && e.stack) ASMModule.printErr('exception thrown: ' + [e, e.stack]);
      throw e;
    }
  } finally {
    calledMain = true;
  }
}




function run(args) {
  args = args || ASMModule['arguments'];

  if (preloadStartTime === null) preloadStartTime = Date.now();

  if (runDependencies > 0) {
    ASMModule.printErr('run() called, but dependencies remain, so not running');
    return;
  }

  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (ASMModule['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (ASMModule['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    ASMModule['calledRun'] = true;

    if (ABORT) return;

    ensureInitRuntime();

    preMain();

    if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
      ASMModule.printErr('pre-main prep time: ' + (Date.now() - preloadStartTime) + ' ms');
    }

    if (ASMModule['onRuntimeInitialized']) ASMModule['onRuntimeInitialized']();

    if (ASMModule['_main'] && shouldRunNow) ASMModule['callMain'](args);

    postRun();
  }

  if (ASMModule['setStatus']) {
    ASMModule['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        ASMModule['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
  checkStackCookie();
}
ASMModule['run'] = ASMModule.run = run;

function exit(status, implicit) {
  if (implicit && ASMModule['noExitRuntime']) {
    ASMModule.printErr('exit(' + status + ') implicitly called by end of main(), but noExitRuntime, so not exiting the runtime (you can use emscripten_force_exit, if you want to force a true shutdown)');
    return;
  }

  if (ASMModule['noExitRuntime']) {
    ASMModule.printErr('exit(' + status + ') called, but noExitRuntime, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)');
  } else {

    ABORT = true;
    EXITSTATUS = status;
    STACKTOP = initialStackTop;

    exitRuntime();

    if (ASMModule['onExit']) ASMModule['onExit'](status);
  }

  if (ENVIRONMENT_IS_NODE) {
    process['exit'](status);
  } else if (ENVIRONMENT_IS_SHELL && typeof quit === 'function') {
    quit(status);
  }
  // if we reach here, we must throw an exception to halt the current execution
  throw new ExitStatus(status);
}
ASMModule['exit'] = ASMModule.exit = exit;

var abortDecorators = [];

function abort(what) {
  if (what !== undefined) {
    ASMModule.print(what);
    ASMModule.printErr(what);
    what = JSON.stringify(what)
  } else {
    what = '';
  }

  ABORT = true;
  EXITSTATUS = 1;

  var extra = '';

  var output = 'abort(' + what + ') at ' + stackTrace() + extra;
  if (abortDecorators) {
    abortDecorators.forEach(function(decorator) {
      output = decorator(output, what);
    });
  }
  throw output;
}
ASMModule['abort'] = ASMModule.abort = abort;

// {{PRE_RUN_ADDITIONS}}

if (ASMModule['preInit']) {
  if (typeof ASMModule['preInit'] == 'function') ASMModule['preInit'] = [ASMModule['preInit']];
  while (ASMModule['preInit'].length > 0) {
    ASMModule['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (ASMModule['noInitialRun']) {
  shouldRunNow = false;
}

ASMModule["noExitRuntime"] = true;

run();

// {{POST_RUN_ADDITIONS}}





// {{MODULE_ADDITIONS}}




// Bindings utilities

function WrapperObject() {
}
WrapperObject.prototype = Object.create(WrapperObject.prototype);
WrapperObject.prototype.constructor = WrapperObject;
WrapperObject.prototype.__class__ = WrapperObject;
WrapperObject.__cache__ = {};
ASMModule['WrapperObject'] = WrapperObject;

function getCache(__class__) {
  return (__class__ || WrapperObject).__cache__;
}
ASMModule['getCache'] = getCache;

function wrapPointer(ptr, __class__) {
  var cache = getCache(__class__);
  var ret = cache[ptr];
  if (ret) return ret;
  ret = Object.create((__class__ || WrapperObject).prototype);
  ret.ptr = ptr;
  return cache[ptr] = ret;
}
ASMModule['wrapPointer'] = wrapPointer;

function castObject(obj, __class__) {
  return wrapPointer(obj.ptr, __class__);
}
ASMModule['castObject'] = castObject;

ASMModule['NULL'] = wrapPointer(0);

function destroy(obj) {
  if (!obj['__destroy__']) throw 'Error: Cannot destroy object. (Did you create it yourself?)';
  obj['__destroy__']();
  // Remove from cache, so the object can be GC'd and refs added onto it released
  delete getCache(obj.__class__)[obj.ptr];
}
ASMModule['destroy'] = destroy;

function compare(obj1, obj2) {
  return obj1.ptr === obj2.ptr;
}
ASMModule['compare'] = compare;

function getPointer(obj) {
  return obj.ptr;
}
ASMModule['getPointer'] = getPointer;

function getClass(obj) {
  return obj.__class__;
}
ASMModule['getClass'] = getClass;

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
        ASMModule['_free'](this.temps[i]);
      }
      this.temps.length = 0;
      // prepare to allocate a bigger buffer
      ASMModule['_free'](this.buffer);
      this.buffer = 0;
      this.size += this.needed;
      // clean up
      this.needed = 0;
    }
    if (!this.buffer) { // happens first time, or when we need to grow
      this.size += 100; // heuristic, avoid many small grow events
      this.buffer = ASMModule['_malloc'](this.size);
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
      ret = ASMModule['_malloc'](len);
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
ASMModule['Particle'] = Particle;

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
ASMModule['MagneticField'] = MagneticField;

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
ASMModule['Vector'] = Vector;

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
ASMModule['ParticleEmitter'] = ParticleEmitter;

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
ASMModule['VoidPtr'] = VoidPtr;

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
ASMModule['ParticleSystem'] = ParticleSystem;

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
  if (ASMModule['calledRun']) setupEnums();
  else addOnPreMain(setupEnums);
})();

