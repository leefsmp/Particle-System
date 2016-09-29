Module["asm"] =  (function(global,env,buffer) {

 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = env.cttz_i8 | 0;
 var n = 0;
 var o = 0;
 var p = 0;
 var q = 0;
 var r = global.NaN, s = global.Infinity;
 var t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 var C = 0;
 var D = global.Math.floor;
 var E = global.Math.abs;
 var F = global.Math.sqrt;
 var G = global.Math.pow;
 var H = global.Math.cos;
 var I = global.Math.sin;
 var J = global.Math.tan;
 var K = global.Math.acos;
 var L = global.Math.asin;
 var M = global.Math.atan;
 var N = global.Math.atan2;
 var O = global.Math.exp;
 var P = global.Math.log;
 var Q = global.Math.ceil;
 var R = global.Math.imul;
 var S = global.Math.min;
 var T = global.Math.clz32;
 var U = env.abort;
 var V = env.assert;
 var W = env.invoke_iiii;
 var X = env.invoke_viiiii;
 var Y = env.invoke_vi;
 var Z = env.invoke_vii;
 var _ = env.invoke_ii;
 var $ = env.invoke_v;
 var aa = env.invoke_viiiiii;
 var ba = env.invoke_viiii;
 var ca = env._pthread_cleanup_pop;
 var da = env._llvm_pow_f64;
 var ea = env.___syscall54;
 var fa = env._abort;
 var ga = env.___gxx_personality_v0;
 var ha = env.___assert_fail;
 var ia = env.___cxa_allocate_exception;
 var ja = env.__ZSt18uncaught_exceptionv;
 var ka = env._llvm_cttz_i32;
 var la = env._sbrk;
 var ma = env.___cxa_begin_catch;
 var na = env._emscripten_memcpy_big;
 var oa = env.___resumeException;
 var pa = env.___cxa_find_matching_catch;
 var qa = env._pthread_getspecific;
 var ra = env._pthread_once;
 var sa = env._pthread_key_create;
 var ta = env._pthread_setspecific;
 var ua = env.___cxa_throw;
 var va = env.___syscall6;
 var wa = env._pthread_cleanup_push;
 var xa = env.___syscall140;
 var ya = env.___syscall146;
 var za = 0;
 
// EMSCRIPTEN_START_FUNCS
function Ia(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 z = i;
 i = i + 16 | 0;
 do if (a >>> 0 < 245) {
  o = a >>> 0 < 11 ? 16 : a + 11 & -8;
  g = c[1322] | 0;
  if (g >>> (o >>> 3) & 3 | 0) {
   a = 5328 + ((g >>> (o >>> 3) & 1 ^ 1) + (o >>> 3) << 1 << 2) | 0;
   b = c[a + 8 >> 2] | 0;
   d = c[b + 8 >> 2] | 0;
   do if ((a | 0) == (d | 0)) c[1322] = g & ~(1 << (g >>> (o >>> 3) & 1 ^ 1) + (o >>> 3)); else {
    if (d >>> 0 < (c[1326] | 0) >>> 0) fa();
    if ((c[d + 12 >> 2] | 0) == (b | 0)) {
     c[d + 12 >> 2] = a;
     c[a + 8 >> 2] = d;
     break;
    } else fa();
   } while (0);
   y = (g >>> (o >>> 3) & 1 ^ 1) + (o >>> 3) << 3;
   c[b + 4 >> 2] = y | 3;
   c[b + y + 4 >> 2] = c[b + y + 4 >> 2] | 1;
   y = b + 8 | 0;
   i = z;
   return y | 0;
  }
  b = c[1324] | 0;
  if (o >>> 0 > b >>> 0) {
   if (g >>> (o >>> 3) | 0) {
    a = g >>> (o >>> 3) << (o >>> 3) & (2 << (o >>> 3) | 0 - (2 << (o >>> 3)));
    f = ((a & 0 - a) + -1 | 0) >>> (((a & 0 - a) + -1 | 0) >>> 12 & 16);
    e = f >>> (f >>> 5 & 8) >>> (f >>> (f >>> 5 & 8) >>> 2 & 4);
    e = (f >>> 5 & 8 | ((a & 0 - a) + -1 | 0) >>> 12 & 16 | f >>> (f >>> 5 & 8) >>> 2 & 4 | e >>> 1 & 2 | e >>> (e >>> 1 & 2) >>> 1 & 1) + (e >>> (e >>> 1 & 2) >>> (e >>> (e >>> 1 & 2) >>> 1 & 1)) | 0;
    f = c[5328 + (e << 1 << 2) + 8 >> 2] | 0;
    a = c[f + 8 >> 2] | 0;
    do if ((5328 + (e << 1 << 2) | 0) == (a | 0)) {
     c[1322] = g & ~(1 << e);
     h = b;
    } else {
     if (a >>> 0 < (c[1326] | 0) >>> 0) fa();
     if ((c[a + 12 >> 2] | 0) == (f | 0)) {
      c[a + 12 >> 2] = 5328 + (e << 1 << 2);
      c[5328 + (e << 1 << 2) + 8 >> 2] = a;
      h = c[1324] | 0;
      break;
     } else fa();
    } while (0);
    c[f + 4 >> 2] = o | 3;
    c[f + o + 4 >> 2] = (e << 3) - o | 1;
    c[f + o + ((e << 3) - o) >> 2] = (e << 3) - o;
    if (h | 0) {
     d = c[1327] | 0;
     b = h >>> 3;
     a = c[1322] | 0;
     if (!(a & 1 << b)) {
      c[1322] = a | 1 << b;
      j = 5328 + (b << 1 << 2) + 8 | 0;
      k = 5328 + (b << 1 << 2) | 0;
     } else {
      a = c[5328 + (b << 1 << 2) + 8 >> 2] | 0;
      if (a >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
       j = 5328 + (b << 1 << 2) + 8 | 0;
       k = a;
      }
     }
     c[j >> 2] = d;
     c[k + 12 >> 2] = d;
     c[d + 8 >> 2] = k;
     c[d + 12 >> 2] = 5328 + (b << 1 << 2);
    }
    c[1324] = (e << 3) - o;
    c[1327] = f + o;
    y = f + 8 | 0;
    i = z;
    return y | 0;
   }
   a = c[1323] | 0;
   if (a) {
    d = ((a & 0 - a) + -1 | 0) >>> (((a & 0 - a) + -1 | 0) >>> 12 & 16);
    e = d >>> (d >>> 5 & 8) >>> (d >>> (d >>> 5 & 8) >>> 2 & 4);
    e = c[5592 + ((d >>> 5 & 8 | ((a & 0 - a) + -1 | 0) >>> 12 & 16 | d >>> (d >>> 5 & 8) >>> 2 & 4 | e >>> 1 & 2 | e >>> (e >>> 1 & 2) >>> 1 & 1) + (e >>> (e >>> 1 & 2) >>> (e >>> (e >>> 1 & 2) >>> 1 & 1)) << 2) >> 2] | 0;
    d = (c[e + 4 >> 2] & -8) - o | 0;
    b = e;
    while (1) {
     a = c[b + 16 >> 2] | 0;
     if (!a) {
      a = c[b + 20 >> 2] | 0;
      if (!a) {
       j = d;
       break;
      }
     }
     b = (c[a + 4 >> 2] & -8) - o | 0;
     y = b >>> 0 < d >>> 0;
     d = y ? b : d;
     b = a;
     e = y ? a : e;
    }
    g = c[1326] | 0;
    if (e >>> 0 < g >>> 0) fa();
    if (e >>> 0 >= (e + o | 0) >>> 0) fa();
    h = c[e + 24 >> 2] | 0;
    a = c[e + 12 >> 2] | 0;
    do if ((a | 0) == (e | 0)) {
     a = c[e + 20 >> 2] | 0;
     if (!a) {
      a = c[e + 16 >> 2] | 0;
      if (!a) {
       l = 0;
       break;
      } else b = e + 16 | 0;
     } else b = e + 20 | 0;
     while (1) {
      d = a + 20 | 0;
      f = c[d >> 2] | 0;
      if (f | 0) {
       a = f;
       b = d;
       continue;
      }
      d = a + 16 | 0;
      f = c[d >> 2] | 0;
      if (!f) break; else {
       a = f;
       b = d;
      }
     }
     if (b >>> 0 < g >>> 0) fa(); else {
      c[b >> 2] = 0;
      l = a;
      break;
     }
    } else {
     b = c[e + 8 >> 2] | 0;
     if (b >>> 0 < g >>> 0) fa();
     if ((c[b + 12 >> 2] | 0) != (e | 0)) fa();
     if ((c[a + 8 >> 2] | 0) == (e | 0)) {
      c[b + 12 >> 2] = a;
      c[a + 8 >> 2] = b;
      l = a;
      break;
     } else fa();
    } while (0);
    do if (h | 0) {
     a = c[e + 28 >> 2] | 0;
     if ((e | 0) == (c[5592 + (a << 2) >> 2] | 0)) {
      c[5592 + (a << 2) >> 2] = l;
      if (!l) {
       c[1323] = c[1323] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[1326] | 0) >>> 0) fa();
      if ((c[h + 16 >> 2] | 0) == (e | 0)) c[h + 16 >> 2] = l; else c[h + 20 >> 2] = l;
      if (!l) break;
     }
     b = c[1326] | 0;
     if (l >>> 0 < b >>> 0) fa();
     c[l + 24 >> 2] = h;
     a = c[e + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) fa(); else {
      c[l + 16 >> 2] = a;
      c[a + 24 >> 2] = l;
      break;
     } while (0);
     a = c[e + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
      c[l + 20 >> 2] = a;
      c[a + 24 >> 2] = l;
      break;
     }
    } while (0);
    if (j >>> 0 < 16) {
     c[e + 4 >> 2] = j + o | 3;
     c[e + (j + o) + 4 >> 2] = c[e + (j + o) + 4 >> 2] | 1;
    } else {
     c[e + 4 >> 2] = o | 3;
     c[e + o + 4 >> 2] = j | 1;
     c[e + o + j >> 2] = j;
     b = c[1324] | 0;
     if (b | 0) {
      d = c[1327] | 0;
      a = c[1322] | 0;
      if (!(a & 1 << (b >>> 3))) {
       c[1322] = a | 1 << (b >>> 3);
       m = 5328 + (b >>> 3 << 1 << 2) + 8 | 0;
       n = 5328 + (b >>> 3 << 1 << 2) | 0;
      } else {
       a = c[5328 + (b >>> 3 << 1 << 2) + 8 >> 2] | 0;
       if (a >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
        m = 5328 + (b >>> 3 << 1 << 2) + 8 | 0;
        n = a;
       }
      }
      c[m >> 2] = d;
      c[n + 12 >> 2] = d;
      c[d + 8 >> 2] = n;
      c[d + 12 >> 2] = 5328 + (b >>> 3 << 1 << 2);
     }
     c[1324] = j;
     c[1327] = e + o;
    }
    y = e + 8 | 0;
    i = z;
    return y | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) o = -1; else {
  o = a + 11 & -8;
  j = c[1323] | 0;
  if (j) {
   if (!((a + 11 | 0) >>> 8)) h = 0; else if (o >>> 0 > 16777215) h = 31; else {
    h = (a + 11 | 0) >>> 8 << ((((a + 11 | 0) >>> 8) + 1048320 | 0) >>> 16 & 8);
    h = 14 - ((h + 520192 | 0) >>> 16 & 4 | (((a + 11 | 0) >>> 8) + 1048320 | 0) >>> 16 & 8 | ((h << ((h + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) + (h << ((h + 520192 | 0) >>> 16 & 4) << (((h << ((h + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
    h = o >>> (h + 7 | 0) & 1 | h << 1;
   }
   b = c[5592 + (h << 2) >> 2] | 0;
   a : do if (!b) {
    d = 0 - o | 0;
    a = 0;
    b = 0;
    s = 86;
   } else {
    d = 0 - o | 0;
    a = 0;
    f = o << ((h | 0) == 31 ? 0 : 25 - (h >>> 1) | 0);
    g = b;
    b = 0;
    while (1) {
     e = c[g + 4 >> 2] & -8;
     if ((e - o | 0) >>> 0 < d >>> 0) if ((e | 0) == (o | 0)) {
      d = e - o | 0;
      a = g;
      b = g;
      s = 90;
      break a;
     } else {
      d = e - o | 0;
      b = g;
     }
     e = c[g + 20 >> 2] | 0;
     g = c[g + 16 + (f >>> 31 << 2) >> 2] | 0;
     a = (e | 0) == 0 | (e | 0) == (g | 0) ? a : e;
     e = (g | 0) == 0;
     if (e) {
      s = 86;
      break;
     } else f = f << (e & 1 ^ 1);
    }
   } while (0);
   if ((s | 0) == 86) {
    if ((a | 0) == 0 & (b | 0) == 0) {
     a = 2 << h;
     if (!(j & (a | 0 - a))) break;
     m = (j & (a | 0 - a) & 0 - (j & (a | 0 - a))) + -1 | 0;
     n = m >>> (m >>> 12 & 16) >>> (m >>> (m >>> 12 & 16) >>> 5 & 8);
     a = n >>> (n >>> 2 & 4) >>> (n >>> (n >>> 2 & 4) >>> 1 & 2);
     a = c[5592 + ((m >>> (m >>> 12 & 16) >>> 5 & 8 | m >>> 12 & 16 | n >>> 2 & 4 | n >>> (n >>> 2 & 4) >>> 1 & 2 | a >>> 1 & 1) + (a >>> (a >>> 1 & 1)) << 2) >> 2] | 0;
    }
    if (!a) {
     j = d;
     k = b;
    } else s = 90;
   }
   if ((s | 0) == 90) while (1) {
    s = 0;
    n = (c[a + 4 >> 2] & -8) - o | 0;
    e = n >>> 0 < d >>> 0;
    d = e ? n : d;
    b = e ? a : b;
    e = c[a + 16 >> 2] | 0;
    if (e | 0) {
     a = e;
     s = 90;
     continue;
    }
    a = c[a + 20 >> 2] | 0;
    if (!a) {
     j = d;
     k = b;
     break;
    } else s = 90;
   }
   if (k) if (j >>> 0 < ((c[1324] | 0) - o | 0) >>> 0) {
    f = c[1326] | 0;
    if (k >>> 0 < f >>> 0) fa();
    h = k + o | 0;
    if (k >>> 0 >= h >>> 0) fa();
    g = c[k + 24 >> 2] | 0;
    a = c[k + 12 >> 2] | 0;
    do if ((a | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       p = 0;
       break;
      }
     }
     while (1) {
      d = a + 20 | 0;
      e = c[d >> 2] | 0;
      if (e | 0) {
       a = e;
       b = d;
       continue;
      }
      d = a + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       a = e;
       b = d;
      }
     }
     if (b >>> 0 < f >>> 0) fa(); else {
      c[b >> 2] = 0;
      p = a;
      break;
     }
    } else {
     b = c[k + 8 >> 2] | 0;
     if (b >>> 0 < f >>> 0) fa();
     if ((c[b + 12 >> 2] | 0) != (k | 0)) fa();
     if ((c[a + 8 >> 2] | 0) == (k | 0)) {
      c[b + 12 >> 2] = a;
      c[a + 8 >> 2] = b;
      p = a;
      break;
     } else fa();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     if ((k | 0) == (c[5592 + (a << 2) >> 2] | 0)) {
      c[5592 + (a << 2) >> 2] = p;
      if (!p) {
       c[1323] = c[1323] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[1326] | 0) >>> 0) fa();
      if ((c[g + 16 >> 2] | 0) == (k | 0)) c[g + 16 >> 2] = p; else c[g + 20 >> 2] = p;
      if (!p) break;
     }
     b = c[1326] | 0;
     if (p >>> 0 < b >>> 0) fa();
     c[p + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) fa(); else {
      c[p + 16 >> 2] = a;
      c[a + 24 >> 2] = p;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
      c[p + 20 >> 2] = a;
      c[a + 24 >> 2] = p;
      break;
     }
    } while (0);
    do if (j >>> 0 < 16) {
     y = j + o | 0;
     c[k + 4 >> 2] = y | 3;
     y = k + y + 4 | 0;
     c[y >> 2] = c[y >> 2] | 1;
    } else {
     c[k + 4 >> 2] = o | 3;
     c[h + 4 >> 2] = j | 1;
     c[h + j >> 2] = j;
     b = j >>> 3;
     if (j >>> 0 < 256) {
      a = c[1322] | 0;
      if (!(a & 1 << b)) {
       c[1322] = a | 1 << b;
       q = 5328 + (b << 1 << 2) + 8 | 0;
       r = 5328 + (b << 1 << 2) | 0;
      } else {
       a = c[5328 + (b << 1 << 2) + 8 >> 2] | 0;
       if (a >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
        q = 5328 + (b << 1 << 2) + 8 | 0;
        r = a;
       }
      }
      c[q >> 2] = h;
      c[r + 12 >> 2] = h;
      c[h + 8 >> 2] = r;
      c[h + 12 >> 2] = 5328 + (b << 1 << 2);
      break;
     }
     a = j >>> 8;
     if (!a) d = 0; else if (j >>> 0 > 16777215) d = 31; else {
      d = a << ((a + 1048320 | 0) >>> 16 & 8) << (((a << ((a + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4);
      d = 14 - (((a << ((a + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4 | (a + 1048320 | 0) >>> 16 & 8 | (d + 245760 | 0) >>> 16 & 2) + (d << ((d + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
      d = j >>> (d + 7 | 0) & 1 | d << 1;
     }
     e = 5592 + (d << 2) | 0;
     c[h + 28 >> 2] = d;
     c[h + 16 + 4 >> 2] = 0;
     c[h + 16 >> 2] = 0;
     a = c[1323] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[1323] = a | b;
      c[e >> 2] = h;
      c[h + 24 >> 2] = e;
      c[h + 12 >> 2] = h;
      c[h + 8 >> 2] = h;
      break;
     }
     d = j << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     b = c[e >> 2] | 0;
     while (1) {
      if ((c[b + 4 >> 2] & -8 | 0) == (j | 0)) {
       s = 148;
       break;
      }
      e = b + 16 + (d >>> 31 << 2) | 0;
      a = c[e >> 2] | 0;
      if (!a) {
       s = 145;
       break;
      } else {
       d = d << 1;
       b = a;
      }
     }
     if ((s | 0) == 145) if (e >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
      c[e >> 2] = h;
      c[h + 24 >> 2] = b;
      c[h + 12 >> 2] = h;
      c[h + 8 >> 2] = h;
      break;
     } else if ((s | 0) == 148) {
      a = c[b + 8 >> 2] | 0;
      y = c[1326] | 0;
      if (a >>> 0 >= y >>> 0 & b >>> 0 >= y >>> 0) {
       c[a + 12 >> 2] = h;
       c[b + 8 >> 2] = h;
       c[h + 8 >> 2] = a;
       c[h + 12 >> 2] = b;
       c[h + 24 >> 2] = 0;
       break;
      } else fa();
     }
    } while (0);
    y = k + 8 | 0;
    i = z;
    return y | 0;
   }
  }
 } while (0);
 d = c[1324] | 0;
 if (d >>> 0 >= o >>> 0) {
  a = d - o | 0;
  b = c[1327] | 0;
  if (a >>> 0 > 15) {
   y = b + o | 0;
   c[1327] = y;
   c[1324] = a;
   c[y + 4 >> 2] = a | 1;
   c[y + a >> 2] = a;
   c[b + 4 >> 2] = o | 3;
  } else {
   c[1324] = 0;
   c[1327] = 0;
   c[b + 4 >> 2] = d | 3;
   c[b + d + 4 >> 2] = c[b + d + 4 >> 2] | 1;
  }
  y = b + 8 | 0;
  i = z;
  return y | 0;
 }
 a = c[1325] | 0;
 if (a >>> 0 > o >>> 0) {
  w = a - o | 0;
  c[1325] = w;
  y = c[1328] | 0;
  x = y + o | 0;
  c[1328] = x;
  c[x + 4 >> 2] = w | 1;
  c[y + 4 >> 2] = o | 3;
  y = y + 8 | 0;
  i = z;
  return y | 0;
 }
 if (!(c[1440] | 0)) {
  c[1442] = 4096;
  c[1441] = 4096;
  c[1443] = -1;
  c[1444] = -1;
  c[1445] = 0;
  c[1433] = 0;
  c[z >> 2] = z & -16 ^ 1431655768;
  c[1440] = z & -16 ^ 1431655768;
 }
 g = o + 48 | 0;
 e = c[1442] | 0;
 h = o + 47 | 0;
 j = e + h & 0 - e;
 if (j >>> 0 <= o >>> 0) {
  y = 0;
  i = z;
  return y | 0;
 }
 a = c[1432] | 0;
 if (a | 0) {
  r = c[1430] | 0;
  if ((r + j | 0) >>> 0 <= r >>> 0 | (r + j | 0) >>> 0 > a >>> 0) {
   y = 0;
   i = z;
   return y | 0;
  }
 }
 b : do if (!(c[1433] & 4)) {
  a = c[1328] | 0;
  c : do if (!a) s = 171; else {
   d = 5736;
   while (1) {
    b = c[d >> 2] | 0;
    if (b >>> 0 <= a >>> 0) {
     f = d + 4 | 0;
     if ((b + (c[f >> 2] | 0) | 0) >>> 0 > a >>> 0) break;
    }
    d = c[d + 8 >> 2] | 0;
    if (!d) {
     s = 171;
     break c;
    }
   }
   a = e + h - (c[1325] | 0) & 0 - e;
   if (a >>> 0 < 2147483647) {
    b = la(a | 0) | 0;
    if ((b | 0) == ((c[d >> 2] | 0) + (c[f >> 2] | 0) | 0)) {
     if ((b | 0) != (-1 | 0)) {
      f = b;
      h = a;
      s = 191;
      break b;
     }
    } else {
     f = b;
     s = 181;
    }
   }
  } while (0);
  do if ((s | 0) == 171) {
   f = la(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = c[1441] | 0;
    if (!(a + -1 & f)) a = j; else a = j - f + (a + -1 + f & 0 - a) | 0;
    b = c[1430] | 0;
    d = b + a | 0;
    if (a >>> 0 > o >>> 0 & a >>> 0 < 2147483647) {
     e = c[1432] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = la(a | 0) | 0;
     if ((b | 0) == (f | 0)) {
      h = a;
      s = 191;
      break b;
     } else {
      f = b;
      s = 181;
     }
    }
   }
  } while (0);
  d : do if ((s | 0) == 181) {
   d = 0 - a | 0;
   do if (g >>> 0 > a >>> 0 & (a >>> 0 < 2147483647 & (f | 0) != (-1 | 0))) {
    b = c[1442] | 0;
    b = h - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((la(b | 0) | 0) == (-1 | 0)) {
     la(d | 0) | 0;
     break d;
    } else {
     a = b + a | 0;
     break;
    }
   } while (0);
   if ((f | 0) != (-1 | 0)) {
    h = a;
    s = 191;
    break b;
   }
  } while (0);
  c[1433] = c[1433] | 4;
  s = 188;
 } else s = 188; while (0);
 if ((s | 0) == 188) if (j >>> 0 < 2147483647) {
  a = la(j | 0) | 0;
  b = la(0) | 0;
  if (a >>> 0 < b >>> 0 & ((a | 0) != (-1 | 0) & (b | 0) != (-1 | 0))) if ((b - a | 0) >>> 0 > (o + 40 | 0) >>> 0) {
   f = a;
   h = b - a | 0;
   s = 191;
  }
 }
 if ((s | 0) == 191) {
  a = (c[1430] | 0) + h | 0;
  c[1430] = a;
  if (a >>> 0 > (c[1431] | 0) >>> 0) c[1431] = a;
  l = c[1328] | 0;
  do if (!l) {
   y = c[1326] | 0;
   if ((y | 0) == 0 | f >>> 0 < y >>> 0) c[1326] = f;
   c[1434] = f;
   c[1435] = h;
   c[1437] = 0;
   c[1331] = c[1440];
   c[1330] = -1;
   a = 0;
   do {
    y = 5328 + (a << 1 << 2) | 0;
    c[y + 12 >> 2] = y;
    c[y + 8 >> 2] = y;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   y = f + 8 | 0;
   y = (y & 7 | 0) == 0 ? 0 : 0 - y & 7;
   x = f + y | 0;
   y = h + -40 - y | 0;
   c[1328] = x;
   c[1325] = y;
   c[x + 4 >> 2] = y | 1;
   c[x + y + 4 >> 2] = 40;
   c[1329] = c[1444];
  } else {
   a = 5736;
   do {
    b = c[a >> 2] | 0;
    d = a + 4 | 0;
    e = c[d >> 2] | 0;
    if ((f | 0) == (b + e | 0)) {
     s = 201;
     break;
    }
    a = c[a + 8 >> 2] | 0;
   } while ((a | 0) != 0);
   if ((s | 0) == 201) if (!(c[a + 12 >> 2] & 8)) if (l >>> 0 < f >>> 0 & l >>> 0 >= b >>> 0) {
    c[d >> 2] = e + h;
    x = (l + 8 & 7 | 0) == 0 ? 0 : 0 - (l + 8) & 7;
    y = h - x + (c[1325] | 0) | 0;
    c[1328] = l + x;
    c[1325] = y;
    c[l + x + 4 >> 2] = y | 1;
    c[l + x + y + 4 >> 2] = 40;
    c[1329] = c[1444];
    break;
   }
   a = c[1326] | 0;
   if (f >>> 0 < a >>> 0) {
    c[1326] = f;
    k = f;
   } else k = a;
   d = f + h | 0;
   a = 5736;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     s = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     d = 5736;
     break;
    }
   }
   if ((s | 0) == 209) if (!(c[a + 12 >> 2] & 8)) {
    c[b >> 2] = f;
    c[a + 4 >> 2] = (c[a + 4 >> 2] | 0) + h;
    n = f + 8 | 0;
    n = f + ((n & 7 | 0) == 0 ? 0 : 0 - n & 7) | 0;
    a = d + ((d + 8 & 7 | 0) == 0 ? 0 : 0 - (d + 8) & 7) | 0;
    m = n + o | 0;
    j = a - n - o | 0;
    c[n + 4 >> 2] = o | 3;
    do if ((a | 0) == (l | 0)) {
     y = (c[1325] | 0) + j | 0;
     c[1325] = y;
     c[1328] = m;
     c[m + 4 >> 2] = y | 1;
    } else {
     if ((a | 0) == (c[1327] | 0)) {
      y = (c[1324] | 0) + j | 0;
      c[1324] = y;
      c[1327] = m;
      c[m + 4 >> 2] = y | 1;
      c[m + y >> 2] = y;
      break;
     }
     h = c[a + 4 >> 2] | 0;
     if ((h & 3 | 0) == 1) {
      e : do if (h >>> 0 < 256) {
       b = c[a + 8 >> 2] | 0;
       d = c[a + 12 >> 2] | 0;
       do if ((b | 0) != (5328 + (h >>> 3 << 1 << 2) | 0)) {
        if (b >>> 0 < k >>> 0) fa();
        if ((c[b + 12 >> 2] | 0) == (a | 0)) break;
        fa();
       } while (0);
       if ((d | 0) == (b | 0)) {
        c[1322] = c[1322] & ~(1 << (h >>> 3));
        break;
       }
       do if ((d | 0) == (5328 + (h >>> 3 << 1 << 2) | 0)) t = d + 8 | 0; else {
        if (d >>> 0 < k >>> 0) fa();
        if ((c[d + 8 >> 2] | 0) == (a | 0)) {
         t = d + 8 | 0;
         break;
        }
        fa();
       } while (0);
       c[b + 12 >> 2] = d;
       c[t >> 2] = b;
      } else {
       g = c[a + 24 >> 2] | 0;
       b = c[a + 12 >> 2] | 0;
       do if ((b | 0) == (a | 0)) {
        b = c[a + 16 + 4 >> 2] | 0;
        if (!b) {
         b = c[a + 16 >> 2] | 0;
         if (!b) {
          w = 0;
          break;
         } else d = a + 16 | 0;
        } else d = a + 16 + 4 | 0;
        while (1) {
         e = b + 20 | 0;
         f = c[e >> 2] | 0;
         if (f | 0) {
          b = f;
          d = e;
          continue;
         }
         e = b + 16 | 0;
         f = c[e >> 2] | 0;
         if (!f) break; else {
          b = f;
          d = e;
         }
        }
        if (d >>> 0 < k >>> 0) fa(); else {
         c[d >> 2] = 0;
         w = b;
         break;
        }
       } else {
        d = c[a + 8 >> 2] | 0;
        if (d >>> 0 < k >>> 0) fa();
        if ((c[d + 12 >> 2] | 0) != (a | 0)) fa();
        if ((c[b + 8 >> 2] | 0) == (a | 0)) {
         c[d + 12 >> 2] = b;
         c[b + 8 >> 2] = d;
         w = b;
         break;
        } else fa();
       } while (0);
       if (!g) break;
       b = c[a + 28 >> 2] | 0;
       do if ((a | 0) == (c[5592 + (b << 2) >> 2] | 0)) {
        c[5592 + (b << 2) >> 2] = w;
        if (w | 0) break;
        c[1323] = c[1323] & ~(1 << b);
        break e;
       } else {
        if (g >>> 0 < (c[1326] | 0) >>> 0) fa();
        if ((c[g + 16 >> 2] | 0) == (a | 0)) c[g + 16 >> 2] = w; else c[g + 20 >> 2] = w;
        if (!w) break e;
       } while (0);
       d = c[1326] | 0;
       if (w >>> 0 < d >>> 0) fa();
       c[w + 24 >> 2] = g;
       b = c[a + 16 >> 2] | 0;
       do if (b | 0) if (b >>> 0 < d >>> 0) fa(); else {
        c[w + 16 >> 2] = b;
        c[b + 24 >> 2] = w;
        break;
       } while (0);
       b = c[a + 16 + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
        c[w + 20 >> 2] = b;
        c[b + 24 >> 2] = w;
        break;
       }
      } while (0);
      a = a + (h & -8) | 0;
      f = (h & -8) + j | 0;
     } else f = j;
     b = a + 4 | 0;
     c[b >> 2] = c[b >> 2] & -2;
     c[m + 4 >> 2] = f | 1;
     c[m + f >> 2] = f;
     b = f >>> 3;
     if (f >>> 0 < 256) {
      a = c[1322] | 0;
      do if (!(a & 1 << b)) {
       c[1322] = a | 1 << b;
       x = 5328 + (b << 1 << 2) + 8 | 0;
       y = 5328 + (b << 1 << 2) | 0;
      } else {
       a = c[5328 + (b << 1 << 2) + 8 >> 2] | 0;
       if (a >>> 0 >= (c[1326] | 0) >>> 0) {
        x = 5328 + (b << 1 << 2) + 8 | 0;
        y = a;
        break;
       }
       fa();
      } while (0);
      c[x >> 2] = m;
      c[y + 12 >> 2] = m;
      c[m + 8 >> 2] = y;
      c[m + 12 >> 2] = 5328 + (b << 1 << 2);
      break;
     }
     a = f >>> 8;
     do if (!a) d = 0; else {
      if (f >>> 0 > 16777215) {
       d = 31;
       break;
      }
      d = a << ((a + 1048320 | 0) >>> 16 & 8) << (((a << ((a + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4);
      d = 14 - (((a << ((a + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4 | (a + 1048320 | 0) >>> 16 & 8 | (d + 245760 | 0) >>> 16 & 2) + (d << ((d + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
      d = f >>> (d + 7 | 0) & 1 | d << 1;
     } while (0);
     e = 5592 + (d << 2) | 0;
     c[m + 28 >> 2] = d;
     c[m + 16 + 4 >> 2] = 0;
     c[m + 16 >> 2] = 0;
     a = c[1323] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[1323] = a | b;
      c[e >> 2] = m;
      c[m + 24 >> 2] = e;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     }
     d = f << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     b = c[e >> 2] | 0;
     while (1) {
      if ((c[b + 4 >> 2] & -8 | 0) == (f | 0)) {
       s = 279;
       break;
      }
      e = b + 16 + (d >>> 31 << 2) | 0;
      a = c[e >> 2] | 0;
      if (!a) {
       s = 276;
       break;
      } else {
       d = d << 1;
       b = a;
      }
     }
     if ((s | 0) == 276) if (e >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
      c[e >> 2] = m;
      c[m + 24 >> 2] = b;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     } else if ((s | 0) == 279) {
      a = c[b + 8 >> 2] | 0;
      y = c[1326] | 0;
      if (a >>> 0 >= y >>> 0 & b >>> 0 >= y >>> 0) {
       c[a + 12 >> 2] = m;
       c[b + 8 >> 2] = m;
       c[m + 8 >> 2] = a;
       c[m + 12 >> 2] = b;
       c[m + 24 >> 2] = 0;
       break;
      } else fa();
     }
    } while (0);
    y = n + 8 | 0;
    i = z;
    return y | 0;
   } else d = 5736;
   while (1) {
    a = c[d >> 2] | 0;
    if (a >>> 0 <= l >>> 0) {
     b = a + (c[d + 4 >> 2] | 0) | 0;
     if (b >>> 0 > l >>> 0) break;
    }
    d = c[d + 8 >> 2] | 0;
   }
   g = b + -47 + ((b + -47 + 8 & 7 | 0) == 0 ? 0 : 0 - (b + -47 + 8) & 7) | 0;
   g = g >>> 0 < (l + 16 | 0) >>> 0 ? l : g;
   a = f + 8 | 0;
   a = (a & 7 | 0) == 0 ? 0 : 0 - a & 7;
   y = f + a | 0;
   a = h + -40 - a | 0;
   c[1328] = y;
   c[1325] = a;
   c[y + 4 >> 2] = a | 1;
   c[y + a + 4 >> 2] = 40;
   c[1329] = c[1444];
   c[g + 4 >> 2] = 27;
   c[g + 8 >> 2] = c[1434];
   c[g + 8 + 4 >> 2] = c[1435];
   c[g + 8 + 8 >> 2] = c[1436];
   c[g + 8 + 12 >> 2] = c[1437];
   c[1434] = f;
   c[1435] = h;
   c[1437] = 0;
   c[1436] = g + 8;
   a = g + 24 | 0;
   do {
    a = a + 4 | 0;
    c[a >> 2] = 7;
   } while ((a + 4 | 0) >>> 0 < b >>> 0);
   if ((g | 0) != (l | 0)) {
    c[g + 4 >> 2] = c[g + 4 >> 2] & -2;
    c[l + 4 >> 2] = g - l | 1;
    c[g >> 2] = g - l;
    if ((g - l | 0) >>> 0 < 256) {
     b = 5328 + ((g - l | 0) >>> 3 << 1 << 2) | 0;
     a = c[1322] | 0;
     if (!(a & 1 << ((g - l | 0) >>> 3))) {
      c[1322] = a | 1 << ((g - l | 0) >>> 3);
      u = b + 8 | 0;
      v = b;
     } else {
      a = c[b + 8 >> 2] | 0;
      if (a >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
       u = b + 8 | 0;
       v = a;
      }
     }
     c[u >> 2] = l;
     c[v + 12 >> 2] = l;
     c[l + 8 >> 2] = v;
     c[l + 12 >> 2] = b;
     break;
    }
    if (!((g - l | 0) >>> 8)) d = 0; else if ((g - l | 0) >>> 0 > 16777215) d = 31; else {
     d = (g - l | 0) >>> 8 << ((((g - l | 0) >>> 8) + 1048320 | 0) >>> 16 & 8);
     d = 14 - ((d + 520192 | 0) >>> 16 & 4 | (((g - l | 0) >>> 8) + 1048320 | 0) >>> 16 & 8 | ((d << ((d + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) + (d << ((d + 520192 | 0) >>> 16 & 4) << (((d << ((d + 520192 | 0) >>> 16 & 4)) + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
     d = (g - l | 0) >>> (d + 7 | 0) & 1 | d << 1;
    }
    e = 5592 + (d << 2) | 0;
    c[l + 28 >> 2] = d;
    c[l + 20 >> 2] = 0;
    c[l + 16 >> 2] = 0;
    a = c[1323] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[1323] = a | b;
     c[e >> 2] = l;
     c[l + 24 >> 2] = e;
     c[l + 12 >> 2] = l;
     c[l + 8 >> 2] = l;
     break;
    }
    d = g - l << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
    b = c[e >> 2] | 0;
    while (1) {
     if ((c[b + 4 >> 2] & -8 | 0) == (g - l | 0)) {
      s = 305;
      break;
     }
     e = b + 16 + (d >>> 31 << 2) | 0;
     a = c[e >> 2] | 0;
     if (!a) {
      s = 302;
      break;
     } else {
      d = d << 1;
      b = a;
     }
    }
    if ((s | 0) == 302) if (e >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
     c[e >> 2] = l;
     c[l + 24 >> 2] = b;
     c[l + 12 >> 2] = l;
     c[l + 8 >> 2] = l;
     break;
    } else if ((s | 0) == 305) {
     a = c[b + 8 >> 2] | 0;
     y = c[1326] | 0;
     if (a >>> 0 >= y >>> 0 & b >>> 0 >= y >>> 0) {
      c[a + 12 >> 2] = l;
      c[b + 8 >> 2] = l;
      c[l + 8 >> 2] = a;
      c[l + 12 >> 2] = b;
      c[l + 24 >> 2] = 0;
      break;
     } else fa();
    }
   }
  } while (0);
  a = c[1325] | 0;
  if (a >>> 0 > o >>> 0) {
   w = a - o | 0;
   c[1325] = w;
   y = c[1328] | 0;
   x = y + o | 0;
   c[1328] = x;
   c[x + 4 >> 2] = w | 1;
   c[y + 4 >> 2] = o | 3;
   y = y + 8 | 0;
   i = z;
   return y | 0;
  }
 }
 c[(vd() | 0) >> 2] = 12;
 y = 0;
 i = z;
 return y | 0;
}

function Ja(e, f, g, j, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0.0, r = 0, s = 0.0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0;
 N = i;
 i = i + 624 | 0;
 J = N + 536 + 40 | 0;
 L = N + 588 | 0;
 M = N + 576 + 12 | 0;
 K = N + 588 + 9 | 0;
 m = 0;
 o = 0;
 n = 0;
 y = f;
 a : while (1) {
  do if ((m | 0) > -1) if ((o | 0) > (2147483647 - m | 0)) {
   c[(vd() | 0) >> 2] = 75;
   m = -1;
   break;
  } else {
   m = o + m | 0;
   break;
  } while (0);
  f = a[y >> 0] | 0;
  if (!(f << 24 >> 24)) {
   I = 244;
   break;
  } else o = y;
  b : while (1) {
   switch (f << 24 >> 24) {
   case 37:
    {
     f = o;
     I = 9;
     break b;
    }
   case 0:
    {
     f = o;
     break b;
    }
   default:
    {}
   }
   H = o + 1 | 0;
   f = a[H >> 0] | 0;
   o = H;
  }
  c : do if ((I | 0) == 9) while (1) {
   I = 0;
   if ((a[f + 1 >> 0] | 0) != 37) break c;
   o = o + 1 | 0;
   f = f + 2 | 0;
   if ((a[f >> 0] | 0) == 37) I = 9; else break;
  } while (0);
  x = o - y | 0;
  if (e | 0) if (!(c[e >> 2] & 32)) hb(y, x, e) | 0;
  if ((o | 0) != (y | 0)) {
   o = x;
   y = f;
   continue;
  }
  p = f + 1 | 0;
  o = a[p >> 0] | 0;
  if (((o << 24 >> 24) + -48 | 0) >>> 0 < 10) {
   H = (a[f + 2 >> 0] | 0) == 36;
   p = H ? f + 3 | 0 : p;
   r = a[p >> 0] | 0;
   v = H ? (o << 24 >> 24) + -48 | 0 : -1;
   n = H ? 1 : n;
  } else {
   r = o;
   v = -1;
  }
  f = r << 24 >> 24;
  d : do if ((f & -32 | 0) == 32) {
   o = r;
   r = 0;
   do {
    if (!(1 << f + -32 & 75913)) break d;
    r = 1 << (o << 24 >> 24) + -32 | r;
    p = p + 1 | 0;
    o = a[p >> 0] | 0;
    f = o << 24 >> 24;
   } while ((f & -32 | 0) == 32);
  } else {
   o = r;
   r = 0;
  } while (0);
  do if (o << 24 >> 24 == 42) {
   o = p + 1 | 0;
   f = (a[o >> 0] | 0) + -48 | 0;
   if (f >>> 0 < 10) if ((a[p + 2 >> 0] | 0) == 36) {
    c[l + (f << 2) >> 2] = 10;
    n = 1;
    p = p + 3 | 0;
    f = c[j + ((a[o >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else I = 24; else I = 24;
   if ((I | 0) == 24) {
    I = 0;
    if (n | 0) {
     m = -1;
     break a;
    }
    if (!e) {
     w = r;
     n = 0;
     p = o;
     H = 0;
     break;
    }
    n = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    f = c[n >> 2] | 0;
    c[g >> 2] = n + 4;
    n = 0;
    p = o;
   }
   if ((f | 0) < 0) {
    w = r | 8192;
    H = 0 - f | 0;
   } else {
    w = r;
    H = f;
   }
  } else {
   o = (o << 24 >> 24) + -48 | 0;
   if (o >>> 0 < 10) {
    f = 0;
    do {
     f = (f * 10 | 0) + o | 0;
     p = p + 1 | 0;
     o = (a[p >> 0] | 0) + -48 | 0;
    } while (o >>> 0 < 10);
    if ((f | 0) < 0) {
     m = -1;
     break a;
    } else {
     w = r;
     H = f;
    }
   } else {
    w = r;
    H = 0;
   }
  } while (0);
  e : do if ((a[p >> 0] | 0) == 46) {
   f = p + 1 | 0;
   r = a[f >> 0] | 0;
   if (r << 24 >> 24 != 42) {
    if (((r << 24 >> 24) + -48 | 0) >>> 0 < 10) {
     o = 0;
     p = (r << 24 >> 24) + -48 | 0;
    } else {
     t = 0;
     break;
    }
    while (1) {
     o = (o * 10 | 0) + p | 0;
     f = f + 1 | 0;
     p = (a[f >> 0] | 0) + -48 | 0;
     if (p >>> 0 >= 10) {
      t = o;
      break e;
     }
    }
   }
   f = p + 2 | 0;
   o = (a[f >> 0] | 0) + -48 | 0;
   if (o >>> 0 < 10) if ((a[p + 3 >> 0] | 0) == 36) {
    c[l + (o << 2) >> 2] = 10;
    t = c[j + ((a[f >> 0] | 0) + -48 << 3) >> 2] | 0;
    f = p + 4 | 0;
    break;
   }
   if (n | 0) {
    m = -1;
    break a;
   }
   if (e | 0) {
    G = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    t = c[G >> 2] | 0;
    c[g >> 2] = G + 4;
   } else t = 0;
  } else {
   t = -1;
   f = p;
  } while (0);
  p = 0;
  while (1) {
   o = (a[f >> 0] | 0) + -65 | 0;
   if (o >>> 0 > 57) {
    m = -1;
    break a;
   }
   G = f + 1 | 0;
   r = a[1985 + (p * 58 | 0) + o >> 0] | 0;
   if (((r & 255) + -1 | 0) >>> 0 < 8) {
    f = G;
    p = r & 255;
   } else {
    u = p;
    break;
   }
  }
  if (!(r << 24 >> 24)) {
   m = -1;
   break;
  }
  o = (v | 0) > -1;
  do if (r << 24 >> 24 == 19) if (o) {
   m = -1;
   break a;
  } else I = 52; else {
   if (o) {
    c[l + (v << 2) >> 2] = r & 255;
    F = j + (v << 3) | 0;
    I = c[F + 4 >> 2] | 0;
    c[N >> 2] = c[F >> 2];
    c[N + 4 >> 2] = I;
    I = 52;
    break;
   }
   if (!e) {
    m = 0;
    break a;
   }
   Ra(N, r & 255, g);
  } while (0);
  if ((I | 0) == 52) {
   I = 0;
   if (!e) {
    o = x;
    y = G;
    continue;
   }
  }
  v = a[f >> 0] | 0;
  v = (u | 0) != 0 & (v & 15 | 0) == 3 ? v & -33 : v;
  p = w & -65537;
  F = (w & 8192 | 0) == 0 ? w : p;
  f : do switch (v | 0) {
  case 110:
   switch (u | 0) {
   case 0:
    {
     c[c[N >> 2] >> 2] = m;
     o = x;
     y = G;
     continue a;
    }
   case 1:
    {
     c[c[N >> 2] >> 2] = m;
     o = x;
     y = G;
     continue a;
    }
   case 2:
    {
     o = c[N >> 2] | 0;
     c[o >> 2] = m;
     c[o + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     o = x;
     y = G;
     continue a;
    }
   case 3:
    {
     b[c[N >> 2] >> 1] = m;
     o = x;
     y = G;
     continue a;
    }
   case 4:
    {
     a[c[N >> 2] >> 0] = m;
     o = x;
     y = G;
     continue a;
    }
   case 6:
    {
     c[c[N >> 2] >> 2] = m;
     o = x;
     y = G;
     continue a;
    }
   case 7:
    {
     o = c[N >> 2] | 0;
     c[o >> 2] = m;
     c[o + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     o = x;
     y = G;
     continue a;
    }
   default:
    {
     o = x;
     y = G;
     continue a;
    }
   }
  case 112:
   {
    u = F | 8;
    t = t >>> 0 > 8 ? t : 8;
    v = 120;
    I = 64;
    break;
   }
  case 88:
  case 120:
   {
    u = F;
    I = 64;
    break;
   }
  case 111:
   {
    o = c[N >> 2] | 0;
    p = c[N + 4 >> 2] | 0;
    if ((o | 0) == 0 & (p | 0) == 0) f = J; else {
     f = J;
     do {
      f = f + -1 | 0;
      a[f >> 0] = o & 7 | 48;
      o = Ac(o | 0, p | 0, 3) | 0;
      p = C;
     } while (!((o | 0) == 0 & (p | 0) == 0));
    }
    if (!(F & 8)) {
     o = F;
     u = 0;
     r = 2465;
     I = 77;
    } else {
     u = J - f | 0;
     o = F;
     t = (t | 0) > (u | 0) ? t : u + 1 | 0;
     u = 0;
     r = 2465;
     I = 77;
    }
    break;
   }
  case 105:
  case 100:
   {
    f = c[N >> 2] | 0;
    o = c[N + 4 >> 2] | 0;
    if ((o | 0) < 0) {
     f = Dc(0, 0, f | 0, o | 0) | 0;
     o = C;
     c[N >> 2] = f;
     c[N + 4 >> 2] = o;
     p = 1;
     r = 2465;
     I = 76;
     break f;
    }
    if (!(F & 2048)) {
     p = F & 1;
     r = (F & 1 | 0) == 0 ? 2465 : 2467;
     I = 76;
    } else {
     p = 1;
     r = 2466;
     I = 76;
    }
    break;
   }
  case 117:
   {
    f = c[N >> 2] | 0;
    o = c[N + 4 >> 2] | 0;
    p = 0;
    r = 2465;
    I = 76;
    break;
   }
  case 99:
   {
    a[N + 536 + 39 >> 0] = c[N >> 2];
    f = N + 536 + 39 | 0;
    v = 1;
    x = 0;
    w = 2465;
    o = J;
    break;
   }
  case 109:
   {
    o = Gb(c[(vd() | 0) >> 2] | 0) | 0;
    I = 82;
    break;
   }
  case 115:
   {
    o = c[N >> 2] | 0;
    o = o | 0 ? o : 4367;
    I = 82;
    break;
   }
  case 67:
   {
    c[N + 8 >> 2] = c[N >> 2];
    c[N + 8 + 4 >> 2] = 0;
    c[N >> 2] = N + 8;
    f = N + 8 | 0;
    t = -1;
    I = 86;
    break;
   }
  case 83:
   {
    f = c[N >> 2] | 0;
    if (!t) {
     rb(e, 32, H, 0, F);
     f = 0;
     I = 97;
    } else I = 86;
    break;
   }
  case 65:
  case 71:
  case 70:
  case 69:
  case 97:
  case 103:
  case 102:
  case 101:
   {
    q = +h[N >> 3];
    c[N + 16 >> 2] = 0;
    h[k >> 3] = q;
    if ((c[k + 4 >> 2] | 0) < 0) {
     q = -q;
     D = 1;
     E = 4374;
    } else if (!(F & 2048)) {
     D = F & 1;
     E = (F & 1 | 0) == 0 ? 4375 : 4380;
    } else {
     D = 1;
     E = 4377;
    }
    h[k >> 3] = q;
    B = c[k + 4 >> 2] & 2146435072;
    do if (B >>> 0 < 2146435072 | (B | 0) == 2146435072 & 0 < 0) {
     q = +bf(q, N + 16 | 0) * 2.0;
     if (q != 0.0) c[N + 16 >> 2] = (c[N + 16 >> 2] | 0) + -1;
     if ((v | 32 | 0) == 97) {
      w = (v & 32 | 0) == 0 ? E : E + 9 | 0;
      u = D | 2;
      f = 12 - t | 0;
      do if (!(t >>> 0 > 11 | (f | 0) == 0)) {
       s = 8.0;
       do {
        f = f + -1 | 0;
        s = s * 16.0;
       } while ((f | 0) != 0);
       if ((a[w >> 0] | 0) == 45) {
        q = -(s + (-q - s));
        break;
       } else {
        q = q + s - s;
        break;
       }
      } while (0);
      o = c[N + 16 >> 2] | 0;
      f = (o | 0) < 0 ? 0 - o | 0 : o;
      f = Bb(f, ((f | 0) < 0) << 31 >> 31, N + 576 + 12 | 0) | 0;
      if ((f | 0) == (N + 576 + 12 | 0)) {
       a[N + 576 + 11 >> 0] = 48;
       f = N + 576 + 11 | 0;
      }
      a[f + -1 >> 0] = (o >> 31 & 2) + 43;
      r = f + -2 | 0;
      a[r >> 0] = v + 15;
      p = (t | 0) < 1;
      f = N + 588 | 0;
      while (1) {
       E = ~~q;
       o = f + 1 | 0;
       a[f >> 0] = d[2449 + E >> 0] | v & 32;
       q = (q - +(E | 0)) * 16.0;
       do if ((o - L | 0) == 1) {
        if ((F & 8 | 0) == 0 & (p & q == 0.0)) break;
        a[o >> 0] = 46;
        o = f + 2 | 0;
       } while (0);
       if (!(q != 0.0)) break; else f = o;
      }
      f = (t | 0) != 0 & (-2 - L + o | 0) < (t | 0) ? M + 2 + t - r | 0 : M - L - r + o | 0;
      rb(e, 32, H, f + u | 0, F);
      if (!(c[e >> 2] & 32)) hb(w, u, e) | 0;
      rb(e, 48, H, f + u | 0, F ^ 65536);
      if (!(c[e >> 2] & 32)) hb(N + 588 | 0, o - L | 0, e) | 0;
      rb(e, 48, f - (o - L + (M - r)) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) hb(r, M - r | 0, e) | 0;
      rb(e, 32, H, f + u | 0, F ^ 8192);
      f = (f + u | 0) < (H | 0) ? H : f + u | 0;
      break;
     }
     f = (t | 0) < 0 ? 6 : t;
     if (q != 0.0) {
      o = (c[N + 16 >> 2] | 0) + -28 | 0;
      c[N + 16 >> 2] = o;
      q = q * 268435456.0;
     } else o = c[N + 16 >> 2] | 0;
     B = (o | 0) < 0 ? N + 24 | 0 : N + 24 + 288 | 0;
     o = B;
     while (1) {
      A = ~~q >>> 0;
      c[o >> 2] = A;
      p = o + 4 | 0;
      q = (q - +(A >>> 0)) * 1.0e9;
      if (!(q != 0.0)) break; else o = p;
     }
     o = c[N + 16 >> 2] | 0;
     if ((o | 0) > 0) {
      t = B;
      while (1) {
       u = (o | 0) > 29 ? 29 : o;
       r = p + -4 | 0;
       do if (r >>> 0 < t >>> 0) r = t; else {
        o = 0;
        do {
         A = wc(c[r >> 2] | 0, 0, u | 0) | 0;
         A = Ic(A | 0, C | 0, o | 0, 0) | 0;
         o = C;
         z = jc(A | 0, o | 0, 1e9, 0) | 0;
         c[r >> 2] = z;
         o = zd(A | 0, o | 0, 1e9, 0) | 0;
         r = r + -4 | 0;
        } while (r >>> 0 >= t >>> 0);
        if (!o) {
         r = t;
         break;
        }
        r = t + -4 | 0;
        c[r >> 2] = o;
       } while (0);
       while (1) {
        if (p >>> 0 <= r >>> 0) break;
        o = p + -4 | 0;
        if (!(c[o >> 2] | 0)) p = o; else break;
       }
       o = (c[N + 16 >> 2] | 0) - u | 0;
       c[N + 16 >> 2] = o;
       if ((o | 0) > 0) t = r; else break;
      }
     } else r = B;
     if ((o | 0) < 0) {
      do {
       w = 0 - o | 0;
       w = (w | 0) > 9 ? 9 : w;
       do if (r >>> 0 < p >>> 0) {
        o = 0;
        u = r;
        while (1) {
         t = c[u >> 2] | 0;
         c[u >> 2] = (t >>> w) + o;
         t = R(t & (1 << w) + -1, 1e9 >>> w) | 0;
         u = u + 4 | 0;
         if (u >>> 0 >= p >>> 0) break; else o = t;
        }
        o = (c[r >> 2] | 0) == 0 ? r + 4 | 0 : r;
        if (!t) {
         r = o;
         o = p;
         break;
        }
        c[p >> 2] = t;
        r = o;
        o = p + 4 | 0;
       } else {
        r = (c[r >> 2] | 0) == 0 ? r + 4 | 0 : r;
        o = p;
       } while (0);
       p = (v | 32 | 0) == 102 ? B : r;
       p = (o - p >> 2 | 0) > (((f + 25 | 0) / 9 | 0) + 1 | 0) ? p + (((f + 25 | 0) / 9 | 0) + 1 << 2) | 0 : o;
       o = (c[N + 16 >> 2] | 0) + w | 0;
       c[N + 16 >> 2] = o;
      } while ((o | 0) < 0);
      o = r;
      z = p;
     } else {
      o = r;
      z = p;
     }
     do if (o >>> 0 < z >>> 0) {
      p = (B - o >> 2) * 9 | 0;
      t = c[o >> 2] | 0;
      if (t >>> 0 < 10) break; else r = 10;
      do {
       r = r * 10 | 0;
       p = p + 1 | 0;
      } while (t >>> 0 >= r >>> 0);
     } else p = 0; while (0);
     r = f - ((v | 32 | 0) != 102 ? p : 0) + (((f | 0) != 0 & (v | 32 | 0) == 103) << 31 >> 31) | 0;
     if ((r | 0) < (((z - B >> 2) * 9 | 0) + -9 | 0)) {
      y = B + 4 + (((r + 9216 | 0) / 9 | 0) + -1024 << 2) | 0;
      if ((((r + 9216 | 0) % 9 | 0) + 1 | 0) < 9) {
       t = 10;
       u = ((r + 9216 | 0) % 9 | 0) + 1 | 0;
       while (1) {
        r = t * 10 | 0;
        u = u + 1 | 0;
        if ((u | 0) == 9) break; else t = r;
       }
      } else r = 10;
      w = c[y >> 2] | 0;
      x = (w >>> 0) % (r >>> 0) | 0;
      t = (y + 4 | 0) == (z | 0);
      do if (t & (x | 0) == 0) r = y; else {
       s = (((w >>> 0) / (r >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       u = (r | 0) / 2 | 0;
       if (x >>> 0 < u >>> 0) q = .5; else q = t & (x | 0) == (u | 0) ? 1.0 : 1.5;
       do if (D) {
        if ((a[E >> 0] | 0) != 45) break;
        s = -s;
        q = -q;
       } while (0);
       c[y >> 2] = w - x;
       if (!(s + q != s)) {
        r = y;
        break;
       }
       A = w - x + r | 0;
       c[y >> 2] = A;
       if (A >>> 0 > 999999999) {
        p = y;
        while (1) {
         r = p + -4 | 0;
         c[p >> 2] = 0;
         if (r >>> 0 < o >>> 0) {
          o = o + -4 | 0;
          c[o >> 2] = 0;
         }
         A = (c[r >> 2] | 0) + 1 | 0;
         c[r >> 2] = A;
         if (A >>> 0 > 999999999) p = r; else break;
        }
       } else r = y;
       p = (B - o >> 2) * 9 | 0;
       u = c[o >> 2] | 0;
       if (u >>> 0 < 10) break; else t = 10;
       do {
        t = t * 10 | 0;
        p = p + 1 | 0;
       } while (u >>> 0 >= t >>> 0);
      } while (0);
      y = r + 4 | 0;
      A = o;
      o = z >>> 0 > y >>> 0 ? y : z;
     } else {
      A = o;
      o = z;
     }
     u = 0 - p | 0;
     while (1) {
      if (o >>> 0 <= A >>> 0) {
       x = 0;
       z = o;
       break;
      }
      r = o + -4 | 0;
      if (!(c[r >> 2] | 0)) o = r; else {
       x = 1;
       z = o;
       break;
      }
     }
     do if ((v | 32 | 0) == 103) {
      if ((((f | 0) != 0 ^ 1) + f | 0) > (p | 0) & (p | 0) > -5) {
       v = v + -1 | 0;
       f = ((f | 0) != 0 ^ 1) + f + -1 - p | 0;
      } else {
       v = v + -2 | 0;
       f = ((f | 0) != 0 ^ 1) + f + -1 | 0;
      }
      if (F & 8 | 0) {
       t = F & 8;
       break;
      }
      do if (x) {
       o = c[z + -4 >> 2] | 0;
       if (!o) {
        r = 9;
        break;
       }
       if (!((o >>> 0) % 10 | 0)) {
        t = 10;
        r = 0;
       } else {
        r = 0;
        break;
       }
       do {
        t = t * 10 | 0;
        r = r + 1 | 0;
       } while (!((o >>> 0) % (t >>> 0) | 0 | 0));
      } else r = 9; while (0);
      o = ((z - B >> 2) * 9 | 0) + -9 | 0;
      if ((v | 32 | 0) == 102) {
       t = o - r | 0;
       t = (t | 0) < 0 ? 0 : t;
       f = (f | 0) < (t | 0) ? f : t;
       t = 0;
       break;
      } else {
       t = o + p - r | 0;
       t = (t | 0) < 0 ? 0 : t;
       f = (f | 0) < (t | 0) ? f : t;
       t = 0;
       break;
      }
     } else t = F & 8; while (0);
     w = f | t;
     r = (v | 32 | 0) == 102;
     if (r) {
      o = (p | 0) > 0 ? p : 0;
      v = 0;
     } else {
      o = (p | 0) < 0 ? u : p;
      o = Bb(o, ((o | 0) < 0) << 31 >> 31, N + 576 + 12 | 0) | 0;
      if ((M - o | 0) < 2) do {
       o = o + -1 | 0;
       a[o >> 0] = 48;
      } while ((M - o | 0) < 2);
      a[o + -1 >> 0] = (p >> 31 & 2) + 43;
      y = o + -2 | 0;
      a[y >> 0] = v;
      o = M - y | 0;
      v = y;
     }
     y = D + 1 + f + ((w | 0) != 0 & 1) + o | 0;
     rb(e, 32, H, y, F);
     if (!(c[e >> 2] & 32)) hb(E, D, e) | 0;
     rb(e, 48, H, y, F ^ 65536);
     do if (r) {
      r = A >>> 0 > B >>> 0 ? B : A;
      p = r;
      while (1) {
       o = Bb(c[p >> 2] | 0, 0, K) | 0;
       do if ((p | 0) == (r | 0)) {
        if ((o | 0) != (K | 0)) break;
        a[N + 588 + 8 >> 0] = 48;
        o = N + 588 + 8 | 0;
       } else {
        if (o >>> 0 <= (N + 588 | 0) >>> 0) break;
        Ob(N + 588 | 0, 48, o - L | 0) | 0;
        do o = o + -1 | 0; while (o >>> 0 > (N + 588 | 0) >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) hb(o, K - o | 0, e) | 0;
       o = p + 4 | 0;
       if (o >>> 0 > B >>> 0) break; else p = o;
      }
      do if (w | 0) {
       if (c[e >> 2] & 32 | 0) break;
       hb(4409, 1, e) | 0;
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < z >>> 0) {
       p = o;
       while (1) {
        o = Bb(c[p >> 2] | 0, 0, K) | 0;
        if (o >>> 0 > (N + 588 | 0) >>> 0) {
         Ob(N + 588 | 0, 48, o - L | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > (N + 588 | 0) >>> 0);
        }
        if (!(c[e >> 2] & 32)) hb(o, (f | 0) > 9 ? 9 : f, e) | 0;
        p = p + 4 | 0;
        o = f + -9 | 0;
        if (!((f | 0) > 9 & p >>> 0 < z >>> 0)) {
         f = o;
         break;
        } else f = o;
       }
      }
      rb(e, 48, f + 9 | 0, 9, 0);
     } else {
      u = x ? z : A + 4 | 0;
      if ((f | 0) > -1) {
       t = (t | 0) == 0;
       r = A;
       do {
        o = Bb(c[r >> 2] | 0, 0, K) | 0;
        if ((o | 0) == (K | 0)) {
         a[N + 588 + 8 >> 0] = 48;
         o = N + 588 + 8 | 0;
        }
        do if ((r | 0) == (A | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) hb(o, 1, e) | 0;
         if (t & (f | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          o = p;
          break;
         }
         hb(4409, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= (N + 588 | 0) >>> 0) break;
         Ob(N + 588 | 0, 48, o + (0 - L) | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > (N + 588 | 0) >>> 0);
        } while (0);
        p = K - o | 0;
        if (!(c[e >> 2] & 32)) hb(o, (f | 0) > (p | 0) ? p : f, e) | 0;
        f = f - p | 0;
        r = r + 4 | 0;
       } while (r >>> 0 < u >>> 0 & (f | 0) > -1);
      }
      rb(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      hb(v, M - v | 0, e) | 0;
     } while (0);
     rb(e, 32, H, y, F ^ 8192);
     f = (y | 0) < (H | 0) ? H : y;
    } else {
     r = q != q | 0.0 != 0.0;
     o = r ? 0 : D;
     rb(e, 32, H, o + 3 | 0, p);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      hb(E, o, e) | 0;
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) hb(r ? (v & 32 | 0 ? 4401 : 4405) : v & 32 | 0 ? 4393 : 4397, 3, e) | 0;
     rb(e, 32, H, o + 3 | 0, F ^ 8192);
     f = (o + 3 | 0) < (H | 0) ? H : o + 3 | 0;
    } while (0);
    o = f;
    y = G;
    continue a;
   }
  default:
   {
    f = y;
    p = F;
    v = t;
    x = 0;
    w = 2465;
    o = J;
   }
  } while (0);
  g : do if ((I | 0) == 64) {
   o = c[N >> 2] | 0;
   p = c[N + 4 >> 2] | 0;
   r = v & 32;
   if ((o | 0) == 0 & (p | 0) == 0) {
    f = J;
    o = u;
    u = 0;
    r = 2465;
    I = 77;
   } else {
    f = J;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[2449 + (o & 15) >> 0] | r;
     o = Ac(o | 0, p | 0, 4) | 0;
     p = C;
    } while (!((o | 0) == 0 & (p | 0) == 0));
    if ((u & 8 | 0) == 0 | (c[N >> 2] | 0) == 0 & (c[N + 4 >> 2] | 0) == 0) {
     o = u;
     u = 0;
     r = 2465;
     I = 77;
    } else {
     o = u;
     u = 2;
     r = 2465 + (v >> 4) | 0;
     I = 77;
    }
   }
  } else if ((I | 0) == 76) {
   f = Bb(f, o, J) | 0;
   o = F;
   u = p;
   I = 77;
  } else if ((I | 0) == 82) {
   I = 0;
   F = cb(o, 0, t) | 0;
   f = o;
   v = (F | 0) == 0 ? t : F - o | 0;
   x = 0;
   w = 2465;
   o = (F | 0) == 0 ? o + t | 0 : F;
  } else if ((I | 0) == 86) {
   I = 0;
   p = 0;
   o = 0;
   u = f;
   while (1) {
    r = c[u >> 2] | 0;
    if (!r) break;
    o = rd(N + 528 | 0, r) | 0;
    if ((o | 0) < 0 | o >>> 0 > (t - p | 0) >>> 0) break;
    p = o + p | 0;
    if (t >>> 0 > p >>> 0) u = u + 4 | 0; else break;
   }
   if ((o | 0) < 0) {
    m = -1;
    break a;
   }
   rb(e, 32, H, p, F);
   if (!p) {
    f = 0;
    I = 97;
   } else {
    r = 0;
    while (1) {
     o = c[f >> 2] | 0;
     if (!o) {
      f = p;
      I = 97;
      break g;
     }
     o = rd(N + 528 | 0, o) | 0;
     r = o + r | 0;
     if ((r | 0) > (p | 0)) {
      f = p;
      I = 97;
      break g;
     }
     if (!(c[e >> 2] & 32)) hb(N + 528 | 0, o, e) | 0;
     if (r >>> 0 >= p >>> 0) {
      f = p;
      I = 97;
      break;
     } else f = f + 4 | 0;
    }
   }
  } while (0);
  if ((I | 0) == 97) {
   I = 0;
   rb(e, 32, H, f, F ^ 8192);
   o = (H | 0) > (f | 0) ? H : f;
   y = G;
   continue;
  }
  if ((I | 0) == 77) {
   I = 0;
   p = (t | 0) > -1 ? o & -65537 : o;
   o = (c[N >> 2] | 0) != 0 | (c[N + 4 >> 2] | 0) != 0;
   if ((t | 0) != 0 | o) {
    v = (o & 1 ^ 1) + (J - f) | 0;
    v = (t | 0) > (v | 0) ? t : v;
    x = u;
    w = r;
    o = J;
   } else {
    f = J;
    v = 0;
    x = u;
    w = r;
    o = J;
   }
  }
  u = o - f | 0;
  r = (v | 0) < (u | 0) ? u : v;
  t = x + r | 0;
  o = (H | 0) < (t | 0) ? t : H;
  rb(e, 32, o, t, p);
  if (!(c[e >> 2] & 32)) hb(w, x, e) | 0;
  rb(e, 48, o, t, p ^ 65536);
  rb(e, 48, r, u, 0);
  if (!(c[e >> 2] & 32)) hb(f, u, e) | 0;
  rb(e, 32, o, t, p ^ 8192);
  y = G;
 }
 h : do if ((I | 0) == 244) if (!e) if (!n) m = 0; else {
  m = 1;
  while (1) {
   n = c[l + (m << 2) >> 2] | 0;
   if (!n) break;
   Ra(j + (m << 3) | 0, n, g);
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break h;
   }
  }
  if ((m | 0) < 10) while (1) {
   if (c[l + (m << 2) >> 2] | 0) {
    m = -1;
    break h;
   }
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break;
   }
  } else m = 1;
 } while (0);
 i = N;
 return m | 0;
}

function Ka(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 h = c[1326] | 0;
 if ((a + -8 | 0) >>> 0 < h >>> 0) fa();
 b = c[a + -4 >> 2] | 0;
 if ((b & 3 | 0) == 1) fa();
 n = a + -8 + (b & -8) | 0;
 do if (!(b & 1)) {
  e = c[a + -8 >> 2] | 0;
  if (!(b & 3)) return;
  k = a + -8 + (0 - e) | 0;
  j = e + (b & -8) | 0;
  if (k >>> 0 < h >>> 0) fa();
  if ((k | 0) == (c[1327] | 0)) {
   a = c[n + 4 >> 2] | 0;
   if ((a & 3 | 0) != 3) {
    q = k;
    f = j;
    break;
   }
   c[1324] = j;
   c[n + 4 >> 2] = a & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  if (e >>> 0 < 256) {
   a = c[k + 8 >> 2] | 0;
   b = c[k + 12 >> 2] | 0;
   if ((a | 0) != (5328 + (e >>> 3 << 1 << 2) | 0)) {
    if (a >>> 0 < h >>> 0) fa();
    if ((c[a + 12 >> 2] | 0) != (k | 0)) fa();
   }
   if ((b | 0) == (a | 0)) {
    c[1322] = c[1322] & ~(1 << (e >>> 3));
    q = k;
    f = j;
    break;
   }
   if ((b | 0) == (5328 + (e >>> 3 << 1 << 2) | 0)) d = b + 8 | 0; else {
    if (b >>> 0 < h >>> 0) fa();
    if ((c[b + 8 >> 2] | 0) == (k | 0)) d = b + 8 | 0; else fa();
   }
   c[a + 12 >> 2] = b;
   c[d >> 2] = a;
   q = k;
   f = j;
   break;
  }
  g = c[k + 24 >> 2] | 0;
  a = c[k + 12 >> 2] | 0;
  do if ((a | 0) == (k | 0)) {
   a = c[k + 16 + 4 >> 2] | 0;
   if (!a) {
    a = c[k + 16 >> 2] | 0;
    if (!a) {
     i = 0;
     break;
    } else b = k + 16 | 0;
   } else b = k + 16 + 4 | 0;
   while (1) {
    d = a + 20 | 0;
    e = c[d >> 2] | 0;
    if (e | 0) {
     a = e;
     b = d;
     continue;
    }
    d = a + 16 | 0;
    e = c[d >> 2] | 0;
    if (!e) break; else {
     a = e;
     b = d;
    }
   }
   if (b >>> 0 < h >>> 0) fa(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   b = c[k + 8 >> 2] | 0;
   if (b >>> 0 < h >>> 0) fa();
   if ((c[b + 12 >> 2] | 0) != (k | 0)) fa();
   if ((c[a + 8 >> 2] | 0) == (k | 0)) {
    c[b + 12 >> 2] = a;
    c[a + 8 >> 2] = b;
    i = a;
    break;
   } else fa();
  } while (0);
  if (!g) {
   q = k;
   f = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   if ((k | 0) == (c[5592 + (a << 2) >> 2] | 0)) {
    c[5592 + (a << 2) >> 2] = i;
    if (!i) {
     c[1323] = c[1323] & ~(1 << a);
     q = k;
     f = j;
     break;
    }
   } else {
    if (g >>> 0 < (c[1326] | 0) >>> 0) fa();
    if ((c[g + 16 >> 2] | 0) == (k | 0)) c[g + 16 >> 2] = i; else c[g + 20 >> 2] = i;
    if (!i) {
     q = k;
     f = j;
     break;
    }
   }
   b = c[1326] | 0;
   if (i >>> 0 < b >>> 0) fa();
   c[i + 24 >> 2] = g;
   a = c[k + 16 >> 2] | 0;
   do if (a | 0) if (a >>> 0 < b >>> 0) fa(); else {
    c[i + 16 >> 2] = a;
    c[a + 24 >> 2] = i;
    break;
   } while (0);
   a = c[k + 16 + 4 >> 2] | 0;
   if (!a) {
    q = k;
    f = j;
   } else if (a >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
    c[i + 20 >> 2] = a;
    c[a + 24 >> 2] = i;
    q = k;
    f = j;
    break;
   }
  }
 } else {
  q = a + -8 | 0;
  f = b & -8;
 } while (0);
 if (q >>> 0 >= n >>> 0) fa();
 d = c[n + 4 >> 2] | 0;
 if (!(d & 1)) fa();
 if (!(d & 2)) {
  if ((n | 0) == (c[1328] | 0)) {
   p = (c[1325] | 0) + f | 0;
   c[1325] = p;
   c[1328] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[1327] | 0)) return;
   c[1327] = 0;
   c[1324] = 0;
   return;
  }
  if ((n | 0) == (c[1327] | 0)) {
   p = (c[1324] | 0) + f | 0;
   c[1324] = p;
   c[1327] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  f = (d & -8) + f | 0;
  do if (d >>> 0 < 256) {
   a = c[n + 8 >> 2] | 0;
   b = c[n + 12 >> 2] | 0;
   if ((a | 0) != (5328 + (d >>> 3 << 1 << 2) | 0)) {
    if (a >>> 0 < (c[1326] | 0) >>> 0) fa();
    if ((c[a + 12 >> 2] | 0) != (n | 0)) fa();
   }
   if ((b | 0) == (a | 0)) {
    c[1322] = c[1322] & ~(1 << (d >>> 3));
    break;
   }
   if ((b | 0) == (5328 + (d >>> 3 << 1 << 2) | 0)) l = b + 8 | 0; else {
    if (b >>> 0 < (c[1326] | 0) >>> 0) fa();
    if ((c[b + 8 >> 2] | 0) == (n | 0)) l = b + 8 | 0; else fa();
   }
   c[a + 12 >> 2] = b;
   c[l >> 2] = a;
  } else {
   g = c[n + 24 >> 2] | 0;
   a = c[n + 12 >> 2] | 0;
   do if ((a | 0) == (n | 0)) {
    a = c[n + 16 + 4 >> 2] | 0;
    if (!a) {
     a = c[n + 16 >> 2] | 0;
     if (!a) {
      m = 0;
      break;
     } else b = n + 16 | 0;
    } else b = n + 16 + 4 | 0;
    while (1) {
     d = a + 20 | 0;
     e = c[d >> 2] | 0;
     if (e | 0) {
      a = e;
      b = d;
      continue;
     }
     d = a + 16 | 0;
     e = c[d >> 2] | 0;
     if (!e) break; else {
      a = e;
      b = d;
     }
    }
    if (b >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
     c[b >> 2] = 0;
     m = a;
     break;
    }
   } else {
    b = c[n + 8 >> 2] | 0;
    if (b >>> 0 < (c[1326] | 0) >>> 0) fa();
    if ((c[b + 12 >> 2] | 0) != (n | 0)) fa();
    if ((c[a + 8 >> 2] | 0) == (n | 0)) {
     c[b + 12 >> 2] = a;
     c[a + 8 >> 2] = b;
     m = a;
     break;
    } else fa();
   } while (0);
   if (g | 0) {
    a = c[n + 28 >> 2] | 0;
    if ((n | 0) == (c[5592 + (a << 2) >> 2] | 0)) {
     c[5592 + (a << 2) >> 2] = m;
     if (!m) {
      c[1323] = c[1323] & ~(1 << a);
      break;
     }
    } else {
     if (g >>> 0 < (c[1326] | 0) >>> 0) fa();
     if ((c[g + 16 >> 2] | 0) == (n | 0)) c[g + 16 >> 2] = m; else c[g + 20 >> 2] = m;
     if (!m) break;
    }
    b = c[1326] | 0;
    if (m >>> 0 < b >>> 0) fa();
    c[m + 24 >> 2] = g;
    a = c[n + 16 >> 2] | 0;
    do if (a | 0) if (a >>> 0 < b >>> 0) fa(); else {
     c[m + 16 >> 2] = a;
     c[a + 24 >> 2] = m;
     break;
    } while (0);
    a = c[n + 16 + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
     c[m + 20 >> 2] = a;
     c[a + 24 >> 2] = m;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
  if ((q | 0) == (c[1327] | 0)) {
   c[1324] = f;
   return;
  }
 } else {
  c[n + 4 >> 2] = d & -2;
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
 }
 b = f >>> 3;
 if (f >>> 0 < 256) {
  a = c[1322] | 0;
  if (!(a & 1 << b)) {
   c[1322] = a | 1 << b;
   o = 5328 + (b << 1 << 2) + 8 | 0;
   p = 5328 + (b << 1 << 2) | 0;
  } else {
   a = c[5328 + (b << 1 << 2) + 8 >> 2] | 0;
   if (a >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
    o = 5328 + (b << 1 << 2) + 8 | 0;
    p = a;
   }
  }
  c[o >> 2] = q;
  c[p + 12 >> 2] = q;
  c[q + 8 >> 2] = p;
  c[q + 12 >> 2] = 5328 + (b << 1 << 2);
  return;
 }
 a = f >>> 8;
 if (!a) d = 0; else if (f >>> 0 > 16777215) d = 31; else {
  d = a << ((a + 1048320 | 0) >>> 16 & 8) << (((a << ((a + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4);
  d = 14 - (((a << ((a + 1048320 | 0) >>> 16 & 8)) + 520192 | 0) >>> 16 & 4 | (a + 1048320 | 0) >>> 16 & 8 | (d + 245760 | 0) >>> 16 & 2) + (d << ((d + 245760 | 0) >>> 16 & 2) >>> 15) | 0;
  d = f >>> (d + 7 | 0) & 1 | d << 1;
 }
 e = 5592 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[1323] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[1323] = a | b;
  c[e >> 2] = q;
  c[q + 24 >> 2] = e;
  c[q + 12 >> 2] = q;
  c[q + 8 >> 2] = q;
 } else {
  d = f << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
  b = c[e >> 2] | 0;
  while (1) {
   if ((c[b + 4 >> 2] & -8 | 0) == (f | 0)) {
    a = 130;
    break;
   }
   e = b + 16 + (d >>> 31 << 2) | 0;
   a = c[e >> 2] | 0;
   if (!a) {
    a = 127;
    break;
   } else {
    d = d << 1;
    b = a;
   }
  }
  if ((a | 0) == 127) if (e >>> 0 < (c[1326] | 0) >>> 0) fa(); else {
   c[e >> 2] = q;
   c[q + 24 >> 2] = b;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((a | 0) == 130) {
   a = c[b + 8 >> 2] | 0;
   p = c[1326] | 0;
   if (a >>> 0 >= p >>> 0 & b >>> 0 >= p >>> 0) {
    c[a + 12 >> 2] = q;
    c[b + 8 >> 2] = q;
    c[q + 8 >> 2] = a;
    c[q + 12 >> 2] = b;
    c[q + 24 >> 2] = 0;
    break;
   } else fa();
  }
 } while (0);
 q = (c[1330] | 0) + -1 | 0;
 c[1330] = q;
 if (!q) a = 5744; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[1330] = -1;
 return;
}

function La(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0.0, j = 0.0, k = 0.0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 w = i;
 i = i + 560 | 0;
 v = c[1520 + (f << 2) >> 2] | 0;
 t = ((d + -3 | 0) / 24 | 0 | 0) < 0 ? 0 : (d + -3 | 0) / 24 | 0;
 l = d - ((t * 24 | 0) + 24) | 0;
 if ((v + (e + -1) | 0) >= 0) {
  m = 0;
  n = t - (e + -1) | 0;
  while (1) {
   if ((n | 0) < 0) g = 0.0; else g = +(c[1536 + (n << 2) >> 2] | 0);
   h[w + 320 + (m << 3) >> 3] = g;
   m = m + 1 | 0;
   if ((m | 0) == (v + e | 0)) break; else n = n + 1 | 0;
  }
 }
 o = 0;
 while (1) {
  if ((e | 0) > 0) {
   m = o + (e + -1) | 0;
   g = 0.0;
   n = 0;
   do {
    g = g + +h[a + (n << 3) >> 3] * +h[w + 320 + (m - n << 3) >> 3];
    n = n + 1 | 0;
   } while ((n | 0) != (e | 0));
  } else g = 0.0;
  h[w + (o << 3) >> 3] = g;
  if ((o | 0) < (v | 0)) o = o + 1 | 0; else break;
 }
 m = v;
 a : while (1) {
  g = +h[w + (m << 3) >> 3];
  p = (m | 0) > 0;
  if (p) {
   n = 0;
   o = m;
   while (1) {
    k = +(~~(g * 5.9604644775390625e-08) | 0);
    c[w + 480 + (n << 2) >> 2] = ~~(g - k * 16777216.0);
    s = o;
    o = o + -1 | 0;
    g = k + +h[w + (o << 3) >> 3];
    if ((s | 0) <= 1) break; else n = n + 1 | 0;
   }
  }
  g = +xb(g, l);
  g = g - +D(+(g * .125)) * 8.0;
  do if ((l | 0) > 0) {
   n = w + 480 + (m + -1 << 2) | 0;
   o = c[n >> 2] | 0;
   c[n >> 2] = o - (o >> 24 - l << 24 - l);
   n = o - (o >> 24 - l << 24 - l) >> 23 - l;
   o = (o >> 24 - l) + ~~g | 0;
   u = 19;
  } else if (((t * 24 | 0) + 24 | 0) == (d | 0)) {
   n = c[w + 480 + (m + -1 << 2) >> 2] >> 23;
   o = ~~g;
   u = 19;
   break;
  } else if (!(g - +(~~g | 0) >= .5)) {
   n = 0;
   o = ~~g;
   g = g - +(~~g | 0);
   break;
  } else {
   n = 2;
   o = ~~g;
   u = 20;
   break;
  } while (0);
  if ((u | 0) == 19) {
   u = 0;
   if ((n | 0) > 0) u = 20; else g = g - +(~~g | 0);
  }
  if ((u | 0) == 20) {
   u = 0;
   o = o + 1 | 0;
   if (p) {
    p = 0;
    s = 0;
    do {
     q = w + 480 + (s << 2) | 0;
     r = c[q >> 2] | 0;
     if (!p) if (!r) p = 0; else {
      c[q >> 2] = 16777216 - r;
      p = 1;
     } else c[q >> 2] = 16777215 - r;
     s = s + 1 | 0;
    } while ((s | 0) != (m | 0));
   } else p = 0;
   b : do if ((l | 0) > 0) switch (l | 0) {
   case 1:
    {
     s = w + 480 + (m + -1 << 2) | 0;
     c[s >> 2] = c[s >> 2] & 8388607;
     break b;
    }
   case 2:
    {
     s = w + 480 + (m + -1 << 2) | 0;
     c[s >> 2] = c[s >> 2] & 4194303;
     break b;
    }
   default:
    break b;
   } while (0);
   if ((n | 0) == 2) if (!p) {
    n = 2;
    g = 1.0 - (g - +(~~g | 0));
   } else {
    n = 2;
    g = 1.0 - (g - +(~~g | 0)) - +xb(1.0, l);
   } else g = g - +(~~g | 0);
  }
  if (!(g == 0.0)) {
   u = 44;
   break;
  }
  if ((m | 0) > (v | 0)) {
   q = m;
   p = 0;
   do {
    q = q + -1 | 0;
    p = c[w + 480 + (q << 2) >> 2] | p;
   } while ((q | 0) > (v | 0));
   if (!p) n = 1; else {
    u = 37;
    break;
   }
  } else n = 1;
  while (1) if (!(c[w + 480 + (v - n << 2) >> 2] | 0)) n = n + 1 | 0; else break;
  p = n + m | 0;
  if ((n | 0) <= 0) {
   m = p;
   continue;
  }
  while (1) {
   o = m + 1 | 0;
   m = m + e | 0;
   h[w + 320 + (m << 3) >> 3] = +(c[1536 + (o + t << 2) >> 2] | 0);
   if ((e | 0) > 0) {
    g = 0.0;
    n = 0;
    do {
     g = g + +h[a + (n << 3) >> 3] * +h[w + 320 + (m - n << 3) >> 3];
     n = n + 1 | 0;
    } while ((n | 0) != (e | 0));
   } else g = 0.0;
   h[w + (o << 3) >> 3] = g;
   if ((o | 0) < (p | 0)) m = o; else {
    m = p;
    continue a;
   }
  }
 }
 do if ((u | 0) == 37) {
  do {
   l = l + -24 | 0;
   m = m + -1 | 0;
  } while ((c[w + 480 + (m << 2) >> 2] | 0) == 0);
  r = n;
  q = m;
 } else if ((u | 0) == 44) {
  g = +xb(g, 0 - l | 0);
  if (!(g >= 16777216.0)) {
   c[w + 480 + (m << 2) >> 2] = ~~g;
   r = n;
   q = m;
   break;
  } else {
   c[w + 480 + (m << 2) >> 2] = ~~(g - +(~~(g * 5.9604644775390625e-08) | 0) * 16777216.0);
   c[w + 480 + (m + 1 << 2) >> 2] = ~~(g * 5.9604644775390625e-08);
   r = n;
   q = m + 1 | 0;
   l = l + 24 | 0;
   break;
  }
 } while (0);
 p = (q | 0) > -1;
 if (p) {
  g = +xb(1.0, l);
  l = q;
  while (1) {
   h[w + (l << 3) >> 3] = g * +(c[w + 480 + (l << 2) >> 2] | 0);
   if ((l | 0) > 0) {
    g = g * 5.9604644775390625e-08;
    l = l + -1 | 0;
   } else break;
  }
  if (p) {
   m = q;
   while (1) {
    l = q - m | 0;
    g = 0.0;
    n = 0;
    while (1) {
     g = g + +h[1072 + (n << 3) >> 3] * +h[w + (n + m << 3) >> 3];
     if ((n | 0) >= (v | 0) | (n | 0) >= (l | 0)) break; else n = n + 1 | 0;
    }
    h[w + 160 + (l << 3) >> 3] = g;
    if ((m | 0) > 0) m = m + -1 | 0; else break;
   }
  }
 }
 c : do switch (f | 0) {
 case 0:
  {
   if (p) {
    g = 0.0;
    l = q;
    while (1) {
     g = g + +h[w + 160 + (l << 3) >> 3];
     if ((l | 0) > 0) l = l + -1 | 0; else break;
    }
   } else g = 0.0;
   h[b >> 3] = (r | 0) == 0 ? g : -g;
   break;
  }
 case 2:
 case 1:
  {
   if (p) {
    g = 0.0;
    l = q;
    while (1) {
     g = g + +h[w + 160 + (l << 3) >> 3];
     if ((l | 0) > 0) l = l + -1 | 0; else break;
    }
   } else g = 0.0;
   m = (r | 0) == 0;
   h[b >> 3] = m ? g : -g;
   g = +h[w + 160 >> 3] - g;
   if ((q | 0) >= 1) {
    l = 1;
    while (1) {
     g = g + +h[w + 160 + (l << 3) >> 3];
     if ((l | 0) == (q | 0)) break; else l = l + 1 | 0;
    }
   }
   h[b + 8 >> 3] = m ? g : -g;
   break;
  }
 case 3:
  {
   if ((q | 0) > 0) {
    g = +h[w + 160 + (q << 3) >> 3];
    l = q;
    do {
     f = l;
     l = l + -1 | 0;
     v = w + 160 + (l << 3) | 0;
     k = +h[v >> 3];
     j = g;
     g = k + g;
     h[w + 160 + (f << 3) >> 3] = j + (k - g);
     h[v >> 3] = g;
    } while ((f | 0) > 1);
    l = (q | 0) > 1;
    if (l) {
     g = +h[w + 160 + (q << 3) >> 3];
     m = q;
     do {
      v = m;
      m = m + -1 | 0;
      f = w + 160 + (m << 3) | 0;
      k = +h[f >> 3];
      j = g;
      g = k + g;
      h[w + 160 + (v << 3) >> 3] = j + (k - g);
      h[f >> 3] = g;
     } while ((m | 0) > 1);
     if (l) {
      g = 0.0;
      l = q;
      do {
       g = g + +h[w + 160 + (l << 3) >> 3];
       l = l + -1 | 0;
      } while ((l | 0) > 1);
     } else g = 0.0;
    } else g = 0.0;
   } else g = 0.0;
   j = +h[w + 160 >> 3];
   k = +h[w + 160 + 8 >> 3];
   if (!r) {
    h[b >> 3] = j;
    h[b + 8 >> 3] = k;
    h[b + 16 >> 3] = g;
    break c;
   } else {
    h[b >> 3] = -j;
    h[b + 8 >> 3] = -k;
    h[b + 16 >> 3] = -g;
    break c;
   }
  }
 default:
  {}
 } while (0);
 i = w;
 return o & 7 | 0;
}

function Ma(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 32 | 0;
 b = c[a + 16 >> 2] | 0;
 if (b >>> 0 > 1023) {
  c[a + 16 >> 2] = b + -1024;
  h = c[a + 4 >> 2] | 0;
  m = c[h >> 2] | 0;
  c[a + 4 >> 2] = h + 4;
  b = c[a + 8 >> 2] | 0;
  d = c[a + 12 >> 2] | 0;
  do if ((b | 0) == (d | 0)) {
   f = c[a >> 2] | 0;
   if ((h + 4 | 0) >>> 0 > f >>> 0) {
    d = h + 4 + ((((h + 4 - f >> 2) + 1 | 0) / -2 | 0) << 2) | 0;
    if (!(b - (h + 4) >> 2)) e = h + 4 | 0; else {
     dc(d | 0, h + 4 | 0, b - (h + 4) | 0) | 0;
     e = c[a + 4 >> 2] | 0;
    }
    c[a + 8 >> 2] = d + (b - (h + 4) >> 2 << 2);
    c[a + 4 >> 2] = e + ((((h + 4 - f >> 2) + 1 | 0) / -2 | 0) << 2);
    b = d + (b - (h + 4) >> 2 << 2) | 0;
    break;
   }
   j = (d - f >> 1 | 0) == 0 ? 1 : d - f >> 1;
   if (j >>> 0 > 1073741823) {
    n = ia(4) | 0;
    Ye(n);
    ua(n | 0, 1200, 6);
   }
   k = mc(j << 2) | 0;
   l = k + (j >>> 2 << 2) | 0;
   if ((h + 4 | 0) == (b | 0)) {
    d = f;
    b = l;
   } else {
    g = k + (j >>> 2 << 2) | 0;
    e = h + 4 | 0;
    d = l;
    while (1) {
     c[g >> 2] = c[e >> 2];
     g = d + 4 | 0;
     f = g;
     e = e + 4 | 0;
     if ((e | 0) == (b | 0)) break; else d = f;
    }
    d = c[a >> 2] | 0;
    b = f;
   }
   c[a >> 2] = k;
   c[a + 4 >> 2] = l;
   c[a + 8 >> 2] = b;
   c[a + 12 >> 2] = k + (j << 2);
   if (d) {
    of(d);
    b = c[a + 8 >> 2] | 0;
   }
  } while (0);
  c[b >> 2] = m;
  c[a + 8 >> 2] = (c[a + 8 >> 2] | 0) + 4;
  i = n;
  return;
 }
 b = c[a + 8 >> 2] | 0;
 l = c[a + 4 >> 2] | 0;
 d = c[a + 12 >> 2] | 0;
 f = c[a >> 2] | 0;
 if ((b - l | 0) >>> 0 >= (d - f | 0) >>> 0) {
  d = (d - f >> 1 | 0) == 0 ? 1 : d - f >> 1;
  c[n + 4 + 12 >> 2] = 0;
  c[n + 4 + 16 >> 2] = a + 12;
  if (d >>> 0 > 1073741823) {
   n = ia(4) | 0;
   Ye(n);
   ua(n | 0, 1200, 6);
  }
  f = mc(d << 2) | 0;
  c[n + 4 >> 2] = f;
  e = f + (b - l >> 2 << 2) | 0;
  j = n + 4 + 8 | 0;
  c[j >> 2] = e;
  h = n + 4 + 4 | 0;
  c[h >> 2] = e;
  c[n + 4 + 12 >> 2] = f + (d << 2);
  g = mc(4096) | 0;
  do if ((b - l >> 2 | 0) == (d | 0)) {
   if (e >>> 0 > f >>> 0) {
    c[j >> 2] = e + ((((e - f >> 2) + 1 | 0) / -2 | 0) << 2);
    c[h >> 2] = e + ((((e - f >> 2) + 1 | 0) / -2 | 0) << 2);
    b = e + ((((e - f >> 2) + 1 | 0) / -2 | 0) << 2) | 0;
    break;
   }
   b = (f + (d << 2) - f >> 1 | 0) == 0 ? 1 : f + (d << 2) - f >> 1;
   if (b >>> 0 > 1073741823) {
    n = ia(4) | 0;
    Ye(n);
    ua(n | 0, 1200, 6);
   } else {
    m = mc(b << 2) | 0;
    c[n + 4 >> 2] = m;
    c[h >> 2] = m + (b >>> 2 << 2);
    c[j >> 2] = m + (b >>> 2 << 2);
    c[n + 4 + 12 >> 2] = m + (b << 2);
    of(f);
    b = m + (b >>> 2 << 2) | 0;
    break;
   }
  } else b = e; while (0);
  c[b >> 2] = g;
  c[j >> 2] = (c[j >> 2] | 0) + 4;
  b = c[a + 8 >> 2] | 0;
  while (1) {
   e = c[a + 4 >> 2] | 0;
   if ((b | 0) == (e | 0)) break;
   m = b + -4 | 0;
   Xa(n + 4 | 0, m);
   b = m;
  }
  d = c[a >> 2] | 0;
  c[a >> 2] = c[n + 4 >> 2];
  c[n + 4 >> 2] = d;
  c[a + 4 >> 2] = c[h >> 2];
  c[h >> 2] = e;
  b = c[a + 8 >> 2] | 0;
  c[a + 8 >> 2] = c[j >> 2];
  c[j >> 2] = b;
  m = c[a + 12 >> 2] | 0;
  c[a + 12 >> 2] = c[n + 4 + 12 >> 2];
  c[n + 4 + 12 >> 2] = m;
  if ((b | 0) != (e | 0)) c[j >> 2] = b + (~((b + -4 - e | 0) >>> 2) << 2);
  if (d | 0) of(d);
  i = n;
  return;
 }
 m = mc(4096) | 0;
 if ((d | 0) == (b | 0)) {
  c[n >> 2] = m;
  Xa(a, n);
  h = c[a + 4 >> 2] | 0;
  m = c[h >> 2] | 0;
  c[a + 4 >> 2] = h + 4;
  b = c[a + 8 >> 2] | 0;
  d = c[a + 12 >> 2] | 0;
  do if ((b | 0) == (d | 0)) {
   f = c[a >> 2] | 0;
   if ((h + 4 | 0) >>> 0 > f >>> 0) {
    d = h + 4 + ((((h + 4 - f >> 2) + 1 | 0) / -2 | 0) << 2) | 0;
    if (!(b - (h + 4) >> 2)) e = h + 4 | 0; else {
     dc(d | 0, h + 4 | 0, b - (h + 4) | 0) | 0;
     e = c[a + 4 >> 2] | 0;
    }
    c[a + 8 >> 2] = d + (b - (h + 4) >> 2 << 2);
    c[a + 4 >> 2] = e + ((((h + 4 - f >> 2) + 1 | 0) / -2 | 0) << 2);
    b = d + (b - (h + 4) >> 2 << 2) | 0;
    break;
   }
   j = (d - f >> 1 | 0) == 0 ? 1 : d - f >> 1;
   if (j >>> 0 > 1073741823) {
    n = ia(4) | 0;
    Ye(n);
    ua(n | 0, 1200, 6);
   }
   k = mc(j << 2) | 0;
   l = k + (j >>> 2 << 2) | 0;
   if ((h + 4 | 0) == (b | 0)) {
    d = f;
    b = l;
   } else {
    g = k + (j >>> 2 << 2) | 0;
    e = h + 4 | 0;
    d = l;
    while (1) {
     c[g >> 2] = c[e >> 2];
     g = d + 4 | 0;
     f = g;
     e = e + 4 | 0;
     if ((e | 0) == (b | 0)) break; else d = f;
    }
    d = c[a >> 2] | 0;
    b = f;
   }
   c[a >> 2] = k;
   c[a + 4 >> 2] = l;
   c[a + 8 >> 2] = b;
   c[a + 12 >> 2] = k + (j << 2);
   if (d) {
    of(d);
    b = c[a + 8 >> 2] | 0;
   }
  } while (0);
  c[b >> 2] = m;
  c[a + 8 >> 2] = (c[a + 8 >> 2] | 0) + 4;
  i = n;
  return;
 } else {
  do if ((b | 0) == (d | 0)) {
   if (l >>> 0 > f >>> 0) {
    d = l + ((((l - f >> 2) + 1 | 0) / -2 | 0) << 2) | 0;
    if (!(b - l >> 2)) e = l; else {
     dc(d | 0, l | 0, b - l | 0) | 0;
     e = c[a + 4 >> 2] | 0;
    }
    c[a + 8 >> 2] = d + (b - l >> 2 << 2);
    c[a + 4 >> 2] = e + ((((l - f >> 2) + 1 | 0) / -2 | 0) << 2);
    b = d + (b - l >> 2 << 2) | 0;
    break;
   }
   j = (d - f >> 1 | 0) == 0 ? 1 : d - f >> 1;
   if (j >>> 0 > 1073741823) {
    n = ia(4) | 0;
    Ye(n);
    ua(n | 0, 1200, 6);
   }
   k = mc(j << 2) | 0;
   h = k + (j >>> 2 << 2) | 0;
   if ((l | 0) == (b | 0)) {
    d = f;
    b = h;
   } else {
    g = k + (j >>> 2 << 2) | 0;
    e = l;
    d = h;
    while (1) {
     c[g >> 2] = c[e >> 2];
     g = d + 4 | 0;
     f = g;
     e = e + 4 | 0;
     if ((e | 0) == (b | 0)) break; else d = f;
    }
    d = c[a >> 2] | 0;
    b = f;
   }
   c[a >> 2] = k;
   c[a + 4 >> 2] = h;
   c[a + 8 >> 2] = b;
   c[a + 12 >> 2] = k + (j << 2);
   if (d) {
    of(d);
    b = c[a + 8 >> 2] | 0;
   }
  } while (0);
  c[b >> 2] = m;
  c[a + 8 >> 2] = (c[a + 8 >> 2] | 0) + 4;
  i = n;
  return;
 }
}

function Na(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0.0, f = 0.0, g = 0.0, j = 0.0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 48 | 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 m = c[k + 4 >> 2] | 0;
 l = Ac(d | 0, m | 0, 63) | 0;
 do if ((m & 2147483647) >>> 0 < 1074752123) if ((m & 1048575 | 0) == 598523) n = 21; else if ((m & 2147483647) >>> 0 < 1073928573) if (l | 0) {
  h[b >> 3] = a + 1.5707963267341256 + 6.077100506506192e-11;
  h[b + 8 >> 3] = a + 1.5707963267341256 - (a + 1.5707963267341256 + 6.077100506506192e-11) + 6.077100506506192e-11;
  d = -1;
  break;
 } else {
  h[b >> 3] = a + -1.5707963267341256 + -6.077100506506192e-11;
  h[b + 8 >> 3] = a + -1.5707963267341256 - (a + -1.5707963267341256 + -6.077100506506192e-11) + -6.077100506506192e-11;
  d = 1;
  break;
 } else if (l | 0) {
  h[b >> 3] = a + 3.1415926534682512 + 1.2154201013012384e-10;
  h[b + 8 >> 3] = a + 3.1415926534682512 - (a + 3.1415926534682512 + 1.2154201013012384e-10) + 1.2154201013012384e-10;
  d = -2;
  break;
 } else {
  h[b >> 3] = a + -3.1415926534682512 + -1.2154201013012384e-10;
  h[b + 8 >> 3] = a + -3.1415926534682512 - (a + -3.1415926534682512 + -1.2154201013012384e-10) + -1.2154201013012384e-10;
  d = 2;
  break;
 } else {
  if ((m & 2147483647) >>> 0 >= 1075594812) {
   if ((m & 2147483647) >>> 0 < 1094263291) {
    n = 21;
    break;
   }
   if ((m & 2147483647) >>> 0 > 2146435071) {
    h[b + 8 >> 3] = a - a;
    h[b >> 3] = a - a;
    d = 0;
    break;
   }
   c[k >> 2] = d;
   c[k + 4 >> 2] = m & 1048575 | 1096810496;
   a = +h[k >> 3];
   h[o + 16 >> 3] = +(~~a | 0);
   h[o + 16 + 8 >> 3] = +(~~((a - +(~~a | 0)) * 16777216.0) | 0);
   a = ((a - +(~~a | 0)) * 16777216.0 - +(~~((a - +(~~a | 0)) * 16777216.0) | 0)) * 16777216.0;
   h[o + 16 + 16 >> 3] = a;
   if (a == 0.0) {
    d = 1;
    while (1) if (+h[o + 16 + (d << 3) >> 3] == 0.0) d = d + -1 | 0; else break;
   } else d = 2;
   d = La(o + 16 | 0, o, ((m & 2147483647) >>> 20) + -1046 | 0, d + 1 | 0, 1) | 0;
   e = +h[o >> 3];
   f = +h[o + 8 >> 3];
   if (!l) {
    h[b >> 3] = e;
    h[b + 8 >> 3] = f;
    break;
   } else {
    h[b >> 3] = -e;
    h[b + 8 >> 3] = -f;
    d = 0 - d | 0;
    break;
   }
  }
  if ((m & 2147483647) >>> 0 < 1075183037) {
   if ((m & 2147483647 | 0) == 1074977148) {
    n = 21;
    break;
   }
   if (!l) {
    h[b >> 3] = a + -4.712388980202377 + -1.8231301519518578e-10;
    h[b + 8 >> 3] = a + -4.712388980202377 - (a + -4.712388980202377 + -1.8231301519518578e-10) + -1.8231301519518578e-10;
    d = 3;
    break;
   } else {
    h[b >> 3] = a + 4.712388980202377 + 1.8231301519518578e-10;
    h[b + 8 >> 3] = a + 4.712388980202377 - (a + 4.712388980202377 + 1.8231301519518578e-10) + 1.8231301519518578e-10;
    d = -3;
    break;
   }
  } else {
   if ((m & 2147483647 | 0) == 1075388923) {
    n = 21;
    break;
   }
   if (!l) {
    h[b >> 3] = a + -6.2831853069365025 + -2.430840202602477e-10;
    h[b + 8 >> 3] = a + -6.2831853069365025 - (a + -6.2831853069365025 + -2.430840202602477e-10) + -2.430840202602477e-10;
    d = 4;
    break;
   } else {
    h[b >> 3] = a + 6.2831853069365025 + 2.430840202602477e-10;
    h[b + 8 >> 3] = a + 6.2831853069365025 - (a + 6.2831853069365025 + 2.430840202602477e-10) + 2.430840202602477e-10;
    d = -4;
    break;
   }
  }
 } while (0);
 if ((n | 0) == 21) {
  g = a - (a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0) * 1.5707963267341256;
  e = g - (a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0) * 6.077100506506192e-11;
  h[b >> 3] = e;
  h[k >> 3] = e;
  n = Ac(c[k >> 2] | 0, c[k + 4 >> 2] | 0, 52) | 0;
  if ((((m & 2147483647) >>> 20) - (n & 2047) | 0) > 16) {
   j = g - (a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0) * 6.077100506303966e-11;
   f = (a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0) * 2.0222662487959506e-21 - (g - j - (a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0) * 6.077100506303966e-11);
   h[b >> 3] = j - f;
   h[k >> 3] = j - f;
   n = Ac(c[k >> 2] | 0, c[k + 4 >> 2] | 0, 52) | 0;
   if ((((m & 2147483647) >>> 20) - (n & 2047) | 0) > 49) {
    g = j - (a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0) * 2.0222662487111665e-21;
    f = (a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0) * 8.4784276603689e-32 - (j - g - (a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0) * 2.0222662487111665e-21);
    h[b >> 3] = g - f;
    e = g - f;
   } else {
    e = j - f;
    g = j;
   }
  } else f = (a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0) * 6.077100506506192e-11;
  h[b + 8 >> 3] = g - e - f;
  d = ~~(a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0);
 }
 i = o;
 return d | 0;
}

function Oa(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 if (!b) if (!e) {
  if (f | 0) {
   c[f >> 2] = (a >>> 0) % (d >>> 0);
   c[f + 4 >> 2] = 0;
  }
  e = 0;
  f = (a >>> 0) / (d >>> 0) >>> 0;
  return (C = e, f) | 0;
 } else {
  if (!f) {
   e = 0;
   f = 0;
   return (C = e, f) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = b & 0;
  e = 0;
  f = 0;
  return (C = e, f) | 0;
 }
 do if (!d) {
  if (!e) {
   if (f | 0) {
    c[f >> 2] = (b >>> 0) % (d >>> 0);
    c[f + 4 >> 2] = 0;
   }
   e = 0;
   f = (b >>> 0) / (d >>> 0) >>> 0;
   return (C = e, f) | 0;
  }
  if (!a) {
   if (f | 0) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (b >>> 0) % (e >>> 0);
   }
   d = 0;
   f = (b >>> 0) / (e >>> 0) >>> 0;
   return (C = d, f) | 0;
  }
  if (!(e - 1 & e)) {
   if (f | 0) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = e - 1 & b | b & 0;
   }
   d = 0;
   f = b >>> ((ka(e | 0) | 0) >>> 0);
   return (C = d, f) | 0;
  }
  h = (T(e | 0) | 0) - (T(b | 0) | 0) | 0;
  if (h >>> 0 <= 30) {
   n = h + 1 | 0;
   i = b << 31 - h | a >>> ((h + 1 | 0) >>> 0);
   m = b >>> ((h + 1 | 0) >>> 0);
   g = 0;
   h = a << 31 - h;
   break;
  }
  if (!f) {
   e = 0;
   f = 0;
   return (C = e, f) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = b | b & 0;
  e = 0;
  f = 0;
  return (C = e, f) | 0;
 } else {
  if (e | 0) {
   h = (T(e | 0) | 0) - (T(b | 0) | 0) | 0;
   if (h >>> 0 <= 31) {
    n = h + 1 | 0;
    i = a >>> ((h + 1 | 0) >>> 0) & h - 31 >> 31 | b << 31 - h;
    m = b >>> ((h + 1 | 0) >>> 0) & h - 31 >> 31;
    g = 0;
    h = a << 31 - h;
    break;
   }
   if (!f) {
    e = 0;
    f = 0;
    return (C = e, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b | b & 0;
   e = 0;
   f = 0;
   return (C = e, f) | 0;
  }
  if (d - 1 & d | 0) {
   h = (T(d | 0) | 0) + 33 - (T(b | 0) | 0) | 0;
   n = h;
   i = 32 - h - 1 >> 31 & b >>> ((h - 32 | 0) >>> 0) | (b << 32 - h | a >>> (h >>> 0)) & h - 32 >> 31;
   m = h - 32 >> 31 & b >>> (h >>> 0);
   g = a << 64 - h & 32 - h >> 31;
   h = (b << 64 - h | a >>> ((h - 32 | 0) >>> 0)) & 32 - h >> 31 | a << 32 - h & h - 33 >> 31;
   break;
  }
  if (f | 0) {
   c[f >> 2] = d - 1 & a;
   c[f + 4 >> 2] = 0;
  }
  if ((d | 0) == 1) {
   e = b | b & 0;
   f = a | 0 | 0;
   return (C = e, f) | 0;
  } else {
   f = ka(d | 0) | 0;
   e = b >>> (f >>> 0) | 0;
   f = b << 32 - f | a >>> (f >>> 0) | 0;
   return (C = e, f) | 0;
  }
 } while (0);
 if (!n) {
  j = h;
  b = m;
  a = 0;
  h = 0;
 } else {
  k = Ic(d | 0 | 0, e | e & 0 | 0, -1, -1) | 0;
  l = C;
  j = h;
  b = m;
  a = n;
  h = 0;
  do {
   p = j;
   j = g >>> 31 | j << 1;
   g = h | g << 1;
   p = i << 1 | p >>> 31 | 0;
   o = i >>> 31 | b << 1 | 0;
   Dc(k | 0, l | 0, p | 0, o | 0) | 0;
   n = C;
   m = n >> 31 | ((n | 0) < 0 ? -1 : 0) << 1;
   h = m & 1;
   i = Dc(p | 0, o | 0, m & (d | 0) | 0, (((n | 0) < 0 ? -1 : 0) >> 31 | ((n | 0) < 0 ? -1 : 0) << 1) & (e | e & 0) | 0) | 0;
   b = C;
   a = a - 1 | 0;
  } while ((a | 0) != 0);
  a = 0;
 }
 if (f | 0) {
  c[f >> 2] = i;
  c[f + 4 >> 2] = b;
 }
 o = (g | 0) >>> 31 | j << 1 | (0 << 1 | g >>> 31) & 0 | a;
 p = (g << 1 | 0 >>> 31) & -2 | h;
 return (C = o, p) | 0;
}

function Qa(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 a[d + 12 >> 0] = (d | 0) == (b | 0) & 1;
 if ((d | 0) == (b | 0)) return;
 while (1) {
  g = c[d + 8 >> 2] | 0;
  if (a[g + 12 >> 0] | 0) {
   d = 37;
   break;
  }
  f = d;
  d = c[g + 8 >> 2] | 0;
  e = c[d >> 2] | 0;
  if ((e | 0) == (g | 0)) {
   e = c[d + 4 >> 2] | 0;
   if (!e) {
    i = g;
    j = g + 8 | 0;
    h = g + 8 | 0;
    g = d;
    b = d;
    d = 8;
    break;
   }
   if (a[e + 12 >> 0] | 0) {
    i = g;
    j = g + 8 | 0;
    h = g + 8 | 0;
    g = d;
    b = d;
    d = 8;
    break;
   }
   a[g + 12 >> 0] = 1;
   a[d + 12 >> 0] = (d | 0) == (b | 0) & 1;
   a[e + 12 >> 0] = 1;
  } else {
   if (!e) {
    i = g + 8 | 0;
    j = g;
    h = g + 8 | 0;
    g = d;
    b = d;
    d = 24;
    break;
   }
   if (a[e + 12 >> 0] | 0) {
    i = g + 8 | 0;
    j = g;
    h = g + 8 | 0;
    g = d;
    b = d;
    d = 24;
    break;
   }
   a[g + 12 >> 0] = 1;
   a[d + 12 >> 0] = (d | 0) == (b | 0) & 1;
   a[e + 12 >> 0] = 1;
  }
  if ((d | 0) == (b | 0)) {
   d = 37;
   break;
  }
 }
 if ((d | 0) == 8) {
  if ((c[i >> 2] | 0) == (f | 0)) d = i; else {
   b = i + 4 | 0;
   e = c[b >> 2] | 0;
   d = c[e >> 2] | 0;
   c[b >> 2] = d;
   if (!d) d = g; else {
    c[d + 8 >> 2] = i;
    d = c[j >> 2] | 0;
   }
   c[e + 8 >> 2] = d;
   d = c[h >> 2] | 0;
   if ((c[d >> 2] | 0) == (i | 0)) c[d >> 2] = e; else c[d + 4 >> 2] = e;
   c[e >> 2] = i;
   c[j >> 2] = e;
   d = e;
   b = c[e + 8 >> 2] | 0;
  }
  a[d + 12 >> 0] = 1;
  a[b + 12 >> 0] = 0;
  f = c[b >> 2] | 0;
  d = c[f + 4 >> 2] | 0;
  c[b >> 2] = d;
  if (d | 0) c[d + 8 >> 2] = b;
  d = b + 8 | 0;
  c[f + 8 >> 2] = c[d >> 2];
  e = c[d >> 2] | 0;
  if ((c[e >> 2] | 0) == (b | 0)) c[e >> 2] = f; else c[e + 4 >> 2] = f;
  c[f + 4 >> 2] = b;
  c[d >> 2] = f;
  return;
 } else if ((d | 0) == 24) {
  if ((c[j >> 2] | 0) == (f | 0)) {
   e = c[j >> 2] | 0;
   d = c[e + 4 >> 2] | 0;
   c[j >> 2] = d;
   if (!d) d = g; else {
    c[d + 8 >> 2] = j;
    d = c[i >> 2] | 0;
   }
   c[e + 8 >> 2] = d;
   d = c[h >> 2] | 0;
   if ((c[d >> 2] | 0) == (j | 0)) c[d >> 2] = e; else c[d + 4 >> 2] = e;
   c[e + 4 >> 2] = j;
   c[i >> 2] = e;
   d = e;
   b = c[e + 8 >> 2] | 0;
  } else d = j;
  a[d + 12 >> 0] = 1;
  a[b + 12 >> 0] = 0;
  j = b + 4 | 0;
  f = c[j >> 2] | 0;
  d = c[f >> 2] | 0;
  c[j >> 2] = d;
  if (d | 0) c[d + 8 >> 2] = b;
  d = b + 8 | 0;
  c[f + 8 >> 2] = c[d >> 2];
  e = c[d >> 2] | 0;
  if ((c[e >> 2] | 0) == (b | 0)) c[e >> 2] = f; else c[e + 4 >> 2] = f;
  c[f >> 2] = b;
  c[d >> 2] = f;
  return;
 } else if ((d | 0) == 37) return;
}

function Pa(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0;
 a : do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0)) if ((c[d + 28 >> 2] | 0) != 1) c[d + 28 >> 2] = f;
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   i = c[b + 12 >> 2] | 0;
   Sb(b + 16 | 0, d, e, f, g);
   if ((i | 0) <= 1) break;
   h = c[b + 8 >> 2] | 0;
   if (!(h & 2)) if ((c[d + 36 >> 2] | 0) != 1) {
    if (!(h & 1)) {
     h = b + 24 | 0;
     while (1) {
      if (a[d + 54 >> 0] | 0) break a;
      if ((c[d + 36 >> 2] | 0) == 1) break a;
      Sb(h, d, e, f, g);
      h = h + 8 | 0;
      if (h >>> 0 >= (b + 16 + (i << 3) | 0) >>> 0) break a;
     }
    }
    h = b + 24 | 0;
    while (1) {
     if (a[d + 54 >> 0] | 0) break a;
     if ((c[d + 36 >> 2] | 0) == 1) if ((c[d + 24 >> 2] | 0) == 1) break a;
     Sb(h, d, e, f, g);
     h = h + 8 | 0;
     if (h >>> 0 >= (b + 16 + (i << 3) | 0) >>> 0) break a;
    }
   }
   h = b + 24 | 0;
   while (1) {
    if (a[d + 54 >> 0] | 0) break a;
    Sb(h, d, e, f, g);
    h = h + 8 | 0;
    if (h >>> 0 >= (b + 16 + (i << 3) | 0) >>> 0) break a;
   }
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0)) if ((c[d + 20 >> 2] | 0) != (e | 0)) {
   c[d + 32 >> 2] = f;
   if ((c[d + 44 >> 2] | 0) == 4) break;
   f = b + 16 + (c[b + 12 >> 2] << 3) | 0;
   i = 0;
   h = 0;
   j = b + 16 | 0;
   b : while (1) {
    if (j >>> 0 >= f >>> 0) {
     f = 20;
     break;
    }
    a[d + 52 >> 0] = 0;
    a[d + 53 >> 0] = 0;
    Mb(j, d, e, e, 1, g);
    if (a[d + 54 >> 0] | 0) {
     f = 20;
     break;
    }
    do if (a[d + 53 >> 0] | 0) {
     if (!(a[d + 52 >> 0] | 0)) if (!(c[b + 8 >> 2] & 1)) {
      h = 1;
      f = 20;
      break b;
     } else {
      h = 1;
      break;
     }
     if ((c[d + 24 >> 2] | 0) == 1) {
      f = 25;
      break b;
     }
     if (!(c[b + 8 >> 2] & 2)) {
      f = 25;
      break b;
     } else {
      i = 1;
      h = 1;
     }
    } while (0);
    j = j + 8 | 0;
   }
   do if ((f | 0) == 20) {
    if (!i) {
     c[d + 20 >> 2] = e;
     c[d + 40 >> 2] = (c[d + 40 >> 2] | 0) + 1;
     if ((c[d + 36 >> 2] | 0) == 1) if ((c[d + 24 >> 2] | 0) == 2) {
      a[d + 54 >> 0] = 1;
      if (h) {
       f = 25;
       break;
      } else {
       h = 4;
       break;
      }
     }
    }
    if (h) f = 25; else h = 4;
   } while (0);
   if ((f | 0) == 25) h = 3;
   c[d + 44 >> 2] = h;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function Ra(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0.0;
 a : do if (b >>> 0 <= 20) do switch (b | 0) {
 case 9:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = b;
   break a;
  }
 case 10:
  {
   b = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[b >> 2] | 0;
   c[d >> 2] = b + 4;
   c[a >> 2] = e;
   c[a + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 11:
  {
   b = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[b >> 2] | 0;
   c[d >> 2] = b + 4;
   c[a >> 2] = e;
   c[a + 4 >> 2] = 0;
   break a;
  }
 case 12:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   b = c[f >> 2] | 0;
   e = c[f + 4 >> 2] | 0;
   c[d >> 2] = f + 8;
   c[a >> 2] = b;
   c[a + 4 >> 2] = e;
   break a;
  }
 case 13:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   f = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = (f & 65535) << 16 >> 16;
   c[a + 4 >> 2] = (((f & 65535) << 16 >> 16 | 0) < 0) << 31 >> 31;
   break a;
  }
 case 14:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   f = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = f & 65535;
   c[a + 4 >> 2] = 0;
   break a;
  }
 case 15:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   f = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = (f & 255) << 24 >> 24;
   c[a + 4 >> 2] = (((f & 255) << 24 >> 24 | 0) < 0) << 31 >> 31;
   break a;
  }
 case 16:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   f = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = f & 255;
   c[a + 4 >> 2] = 0;
   break a;
  }
 case 17:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 case 18:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 default:
  break a;
 } while (0); while (0);
 return;
}

function Sa(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 e = c[a + 28 >> 2] | 0;
 d = c[a + 32 >> 2] | 0;
 if ((e | 0) != (d | 0)) {
  do {
   f = c[e >> 2] | 0;
   if (f) {
    of(f);
    d = c[a + 32 >> 2] | 0;
   }
   e = e + 4 | 0;
  } while ((e | 0) != (d | 0));
  e = c[a + 28 >> 2] | 0;
  if ((d | 0) != (e | 0)) c[a + 32 >> 2] = d + (~((d + -4 - e | 0) >>> 2) << 2);
 }
 d = c[a + 60 >> 2] | 0;
 if (d | 0) {
  e = c[a + 56 >> 2] | 0;
  do {
   d = d + -1 | 0;
   c[a + 60 >> 2] = d;
   e = e + 1 | 0;
   c[a + 56 >> 2] = e;
   if (e >>> 0 > 2047) {
    of(c[c[a + 44 >> 2] >> 2] | 0);
    c[a + 44 >> 2] = (c[a + 44 >> 2] | 0) + 4;
    e = (c[a + 56 >> 2] | 0) + -1024 | 0;
    c[a + 56 >> 2] = e;
    d = c[a + 60 >> 2] | 0;
   }
  } while ((d | 0) != 0);
 }
 c[a + 80 >> 2] = b;
 if ((b | 0) <= 0) {
  i = j;
  return;
 }
 h = 0;
 do {
  g = mc(128) | 0;
  qc(g);
  c[j >> 2] = g;
  d = c[a + 32 >> 2] | 0;
  if ((d | 0) == (c[a + 36 >> 2] | 0)) db(a + 28 | 0, j); else {
   c[d >> 2] = g;
   c[a + 32 >> 2] = (c[a + 32 >> 2] | 0) + 4;
  }
  Rd(g, a + 88 | 0);
  he(g, 1);
  k = c[a + 48 >> 2] | 0;
  e = c[a + 44 >> 2] | 0;
  f = c[a + 56 >> 2] | 0;
  d = c[a + 60 >> 2] | 0;
  if ((((k | 0) == (e | 0) ? 0 : (k - e << 8) + -1 | 0) | 0) == (d + f | 0)) {
   Ma(a + 40 | 0);
   d = c[a + 60 >> 2] | 0;
   f = c[a + 56 >> 2] | 0;
   e = c[a + 44 >> 2] | 0;
  }
  k = d + f | 0;
  c[(c[e + (k >>> 10 << 2) >> 2] | 0) + ((k & 1023) << 2) >> 2] = g;
  c[a + 60 >> 2] = d + 1;
  h = h + 1 | 0;
 } while ((h | 0) < (b | 0));
 i = j;
 return;
}

function Va(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 48 | 0;
 f = c[a + 28 >> 2] | 0;
 c[k + 32 >> 2] = f;
 f = (c[a + 20 >> 2] | 0) - f | 0;
 c[k + 32 + 4 >> 2] = f;
 c[k + 32 + 8 >> 2] = b;
 c[k + 32 + 12 >> 2] = d;
 e = k + 32 | 0;
 b = 2;
 f = f + d | 0;
 while (1) {
  if (!(c[1310] | 0)) {
   c[k + 16 >> 2] = c[a + 60 >> 2];
   c[k + 16 + 4 >> 2] = e;
   c[k + 16 + 8 >> 2] = b;
   h = md(ya(146, k + 16 | 0) | 0) | 0;
  } else {
   wa(9, a | 0);
   c[k >> 2] = c[a + 60 >> 2];
   c[k + 4 >> 2] = e;
   c[k + 8 >> 2] = b;
   h = md(ya(146, k | 0) | 0) | 0;
   ca(0);
  }
  if ((f | 0) == (h | 0)) {
   f = 6;
   break;
  }
  if ((h | 0) < 0) {
   f = 8;
   break;
  }
  f = f - h | 0;
  g = c[e + 4 >> 2] | 0;
  if (h >>> 0 > g >>> 0) {
   j = c[a + 44 >> 2] | 0;
   c[a + 28 >> 2] = j;
   c[a + 20 >> 2] = j;
   j = c[e + 12 >> 2] | 0;
   h = h - g | 0;
   e = e + 8 | 0;
   b = b + -1 | 0;
  } else if ((b | 0) == 2) {
   c[a + 28 >> 2] = (c[a + 28 >> 2] | 0) + h;
   j = g;
   b = 2;
  } else j = g;
  c[e >> 2] = (c[e >> 2] | 0) + h;
  c[e + 4 >> 2] = j - h;
 }
 if ((f | 0) == 6) {
  j = c[a + 44 >> 2] | 0;
  c[a + 16 >> 2] = j + (c[a + 48 >> 2] | 0);
  c[a + 28 >> 2] = j;
  c[a + 20 >> 2] = j;
 } else if ((f | 0) == 8) {
  c[a + 16 >> 2] = 0;
  c[a + 28 >> 2] = 0;
  c[a + 20 >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((b | 0) == 2) d = 0; else d = d - (c[e + 4 >> 2] | 0) | 0;
 }
 i = k;
 return d | 0;
}

function Ua(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 f = c[b + 4 >> 2] | 0;
 if (!f) {
  c[d >> 2] = b + 4;
  d = b + 4 | 0;
  return d | 0;
 }
 j = a[e + 11 >> 0] | 0;
 k = j << 24 >> 24 < 0 ? c[e + 4 >> 2] | 0 : j & 255;
 j = j << 24 >> 24 < 0 ? c[e >> 2] | 0 : e;
 while (1) {
  e = f + 16 | 0;
  g = a[e + 11 >> 0] | 0;
  h = g << 24 >> 24 < 0 ? c[f + 20 >> 2] | 0 : g & 255;
  b = h >>> 0 < k >>> 0 ? h : k;
  if (!b) i = 5; else {
   b = Vb(j, g << 24 >> 24 < 0 ? c[e >> 2] | 0 : e, b) | 0;
   if (!b) i = 5; else if ((b | 0) < 0) i = 7; else i = 9;
  }
  if ((i | 0) == 5) if (k >>> 0 < h >>> 0) i = 7; else i = 9;
  if ((i | 0) == 7) {
   b = c[f >> 2] | 0;
   if (!b) {
    b = f;
    i = 8;
    break;
   } else f = b;
  } else if ((i | 0) == 9) {
   i = 0;
   b = k >>> 0 < h >>> 0 ? k : h;
   if (!b) i = 11; else {
    b = Vb(g << 24 >> 24 < 0 ? c[e >> 2] | 0 : e, j, b) | 0;
    if (!b) i = 11; else if ((b | 0) >= 0) {
     i = 16;
     break;
    }
   }
   if ((i | 0) == 11) if (h >>> 0 >= k >>> 0) {
    i = 16;
    break;
   }
   e = f + 4 | 0;
   b = c[e >> 2] | 0;
   if (!b) {
    i = 15;
    break;
   } else f = b;
  }
 }
 if ((i | 0) == 8) {
  c[d >> 2] = f;
  d = b;
  return d | 0;
 } else if ((i | 0) == 15) {
  c[d >> 2] = f;
  d = e;
  return d | 0;
 } else if ((i | 0) == 16) {
  c[d >> 2] = f;
  return d | 0;
 }
 return 0;
}

function Ya(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 d = c[a + 4 >> 2] | 0;
 e = c[a + 16 >> 2] | 0;
 h = c[a + 8 >> 2] | 0;
 if ((h | 0) == (d | 0)) {
  f = 0;
  g = a + 20 | 0;
  b = 0;
 } else {
  f = (c[a + 20 >> 2] | 0) + e | 0;
  f = (c[d + (f >>> 10 << 2) >> 2] | 0) + ((f & 1023) << 2) | 0;
  g = a + 20 | 0;
  b = (c[d + (e >>> 10 << 2) >> 2] | 0) + ((e & 1023) << 2) | 0;
 }
 e = d + (e >>> 10 << 2) | 0;
 a : while (1) {
  do {
   if ((b | 0) == (f | 0)) break a;
   b = b + 4 | 0;
  } while ((b - (c[e >> 2] | 0) | 0) != 4096);
  b = e + 4 | 0;
  e = b;
  b = c[b >> 2] | 0;
 }
 c[g >> 2] = 0;
 if (h - d >> 2 >>> 0 > 2) do {
  of(c[d >> 2] | 0);
  d = (c[a + 4 >> 2] | 0) + 4 | 0;
  c[a + 4 >> 2] = d;
  b = (c[a + 8 >> 2] | 0) - d >> 2;
 } while (b >>> 0 > 2); else b = h - d >> 2;
 switch (b | 0) {
 case 1:
  {
   c[a + 16 >> 2] = 512;
   break;
  }
 case 2:
  {
   c[a + 16 >> 2] = 1024;
   break;
  }
 default:
  {}
 }
 b = c[a + 4 >> 2] | 0;
 d = c[a + 8 >> 2] | 0;
 if ((b | 0) != (d | 0)) {
  do {
   of(c[b >> 2] | 0);
   b = b + 4 | 0;
  } while ((b | 0) != (d | 0));
  b = c[a + 4 >> 2] | 0;
  d = c[a + 8 >> 2] | 0;
  if ((d | 0) != (b | 0)) c[a + 8 >> 2] = d + (~((d + -4 - b | 0) >>> 2) << 2);
 }
 b = c[a >> 2] | 0;
 if (!b) return;
 of(b);
 return;
}

function Xa(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 e = c[a + 4 >> 2] | 0;
 d = c[a >> 2] | 0;
 do if ((e | 0) == (d | 0)) {
  j = c[a + 8 >> 2] | 0;
  f = c[a + 12 >> 2] | 0;
  if (j >>> 0 < f >>> 0) {
   d = j + ((((f - j >> 2) + 1 | 0) / 2 | 0) << 2) | 0;
   if (!(j - e >> 2)) e = j; else {
    dc(d + (0 - (j - e >> 2) << 2) | 0, e | 0, j - e | 0) | 0;
    d = d + (0 - (j - e >> 2) << 2) | 0;
    e = c[a + 8 >> 2] | 0;
   }
   c[a + 4 >> 2] = d;
   c[a + 8 >> 2] = e + ((((f - j >> 2) + 1 | 0) / 2 | 0) << 2);
   break;
  }
  g = (f - d >> 1 | 0) == 0 ? 1 : f - d >> 1;
  if (g >>> 0 > 1073741823) {
   a = ia(4) | 0;
   Ye(a);
   ua(a | 0, 1200, 6);
  }
  h = mc(g << 2) | 0;
  i = h + ((g + 3 | 0) >>> 2 << 2) | 0;
  if ((e | 0) == (j | 0)) d = i; else {
   f = h + ((g + 3 | 0) >>> 2 << 2) | 0;
   d = i;
   do {
    c[f >> 2] = c[e >> 2];
    f = d + 4 | 0;
    d = f;
    e = e + 4 | 0;
   } while ((e | 0) != (j | 0));
   e = c[a >> 2] | 0;
  }
  c[a >> 2] = h;
  c[a + 4 >> 2] = i;
  c[a + 8 >> 2] = d;
  c[a + 12 >> 2] = h + (g << 2);
  if (!e) d = h + ((g + 3 | 0) >>> 2 << 2) | 0; else {
   of(e);
   d = c[a + 4 >> 2] | 0;
  }
 } else d = e; while (0);
 c[d + -4 >> 2] = c[b >> 2];
 c[a + 4 >> 2] = (c[a + 4 >> 2] | 0) + -4;
 return;
}

function Ta(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 d = c[a + 16 >> 2] | 0;
 b = c[a + 20 >> 2] | 0;
 if ((d | 0) != (b | 0)) do {
  e = c[d >> 2] | 0;
  if (e) {
   of(e);
   b = c[a + 20 >> 2] | 0;
  }
  d = d + 4 | 0;
 } while ((d | 0) != (b | 0));
 d = c[a + 64 >> 2] | 0;
 b = c[a + 68 >> 2] | 0;
 if ((d | 0) != (b | 0)) {
  e = d;
  do {
   d = c[e >> 2] | 0;
   if (d) {
    of(d);
    b = c[a + 68 >> 2] | 0;
   }
   e = e + 4 | 0;
  } while ((e | 0) != (b | 0));
 }
 d = c[a + 28 >> 2] | 0;
 b = c[a + 32 >> 2] | 0;
 if ((d | 0) != (b | 0)) do {
  e = c[d >> 2] | 0;
  if (e) {
   of(e);
   b = c[a + 32 >> 2] | 0;
  }
  d = d + 4 | 0;
 } while ((d | 0) != (b | 0));
 b = c[a + 64 >> 2] | 0;
 if (b | 0) {
  d = c[a + 68 >> 2] | 0;
  if ((d | 0) != (b | 0)) c[a + 68 >> 2] = d + (~((d + -4 - b | 0) >>> 2) << 2);
  of(b);
 }
 Ya(a + 40 | 0);
 b = c[a + 28 >> 2] | 0;
 if (b | 0) {
  d = c[a + 32 >> 2] | 0;
  if ((d | 0) != (b | 0)) c[a + 32 >> 2] = d + (~((d + -4 - b | 0) >>> 2) << 2);
  of(b);
 }
 b = c[a + 16 >> 2] | 0;
 if (!b) {
  e = a + 4 | 0;
  e = c[e >> 2] | 0;
  mb(a, e);
  return;
 }
 d = c[a + 20 >> 2] | 0;
 if ((d | 0) != (b | 0)) c[a + 20 >> 2] = d + (~((d + -4 - b | 0) >>> 2) << 2);
 of(b);
 e = a + 4 | 0;
 e = c[e >> 2] | 0;
 mb(a, e);
 return;
}

function Wa(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0)) if ((c[d + 28 >> 2] | 0) != 1) c[d + 28 >> 2] = f;
 } else {
  if ((b | 0) != (c[d >> 2] | 0)) {
   b = c[b + 8 >> 2] | 0;
   Ba[c[(c[b >> 2] | 0) + 24 >> 2] & 3](b, d, e, f, g);
   break;
  }
  if ((c[d + 16 >> 2] | 0) != (e | 0)) if ((c[d + 20 >> 2] | 0) != (e | 0)) {
   c[d + 32 >> 2] = f;
   if ((c[d + 44 >> 2] | 0) == 4) break;
   a[d + 52 >> 0] = 0;
   a[d + 53 >> 0] = 0;
   b = c[b + 8 >> 2] | 0;
   Ga[c[(c[b >> 2] | 0) + 20 >> 2] & 3](b, d, e, e, 1, g);
   if (!(a[d + 53 >> 0] | 0)) {
    f = 0;
    b = 13;
   } else if (!(a[d + 52 >> 0] | 0)) {
    f = 1;
    b = 13;
   } else b = 17;
   do if ((b | 0) == 13) {
    c[d + 20 >> 2] = e;
    c[d + 40 >> 2] = (c[d + 40 >> 2] | 0) + 1;
    if ((c[d + 36 >> 2] | 0) == 1) if ((c[d + 24 >> 2] | 0) == 2) {
     a[d + 54 >> 0] = 1;
     if (f) {
      b = 17;
      break;
     } else {
      f = 4;
      break;
     }
    }
    if (f) b = 17; else f = 4;
   } while (0);
   if ((b | 0) == 17) f = 3;
   c[d + 44 >> 2] = f;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function bb(d, e, f, g) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 k = i;
 i = i + 64 | 0;
 j = c[d >> 2] | 0;
 h = d + (c[j + -8 >> 2] | 0) | 0;
 j = c[j + -4 >> 2] | 0;
 c[k >> 2] = f;
 c[k + 4 >> 2] = d;
 c[k + 8 >> 2] = e;
 c[k + 12 >> 2] = g;
 g = k + 16 | 0;
 d = g + 36 | 0;
 do {
  c[g >> 2] = 0;
  g = g + 4 | 0;
 } while ((g | 0) < (d | 0));
 b[k + 16 + 36 >> 1] = 0;
 a[k + 16 + 38 >> 0] = 0;
 a : do if ((j | 0) == (f | 0)) {
  c[k + 48 >> 2] = 1;
  Ga[c[(c[f >> 2] | 0) + 20 >> 2] & 3](f, k, h, h, 1, 0);
  g = (c[k + 24 >> 2] | 0) == 1 ? h : 0;
 } else {
  Ba[c[(c[j >> 2] | 0) + 24 >> 2] & 3](j, k, h, 1, 0);
  switch (c[k + 36 >> 2] | 0) {
  case 0:
   {
    g = ((c[k + 40 >> 2] | 0) == 1 ? (c[k + 28 >> 2] | 0) == 1 : 0) & (c[k + 32 >> 2] | 0) == 1 ? c[k + 20 >> 2] | 0 : 0;
    break a;
   }
  case 1:
   break;
  default:
   {
    g = 0;
    break a;
   }
  }
  if ((c[k + 24 >> 2] | 0) != 1) if (!(((c[k + 40 >> 2] | 0) == 0 ? (c[k + 28 >> 2] | 0) == 1 : 0) & (c[k + 32 >> 2] | 0) == 1)) {
   g = 0;
   break;
  }
  g = c[k + 16 >> 2] | 0;
 } while (0);
 i = k;
 return g | 0;
}

function Za(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 b = c[b + 4 >> 2] | 0;
 if (!b) {
  j = 0;
  return j | 0;
 }
 i = a[d + 11 >> 0] | 0;
 j = i << 24 >> 24 < 0 ? c[d + 4 >> 2] | 0 : i & 255;
 i = i << 24 >> 24 < 0 ? c[d >> 2] | 0 : d;
 while (1) {
  e = b + 16 | 0;
  f = a[e + 11 >> 0] | 0;
  g = f << 24 >> 24 < 0 ? c[b + 20 >> 2] | 0 : f & 255;
  d = g >>> 0 < j >>> 0 ? g : j;
  if (!d) h = 5; else {
   d = Vb(i, f << 24 >> 24 < 0 ? c[e >> 2] | 0 : e, d) | 0;
   if (!d) h = 5; else if ((d | 0) < 0) h = 7; else h = 8;
  }
  if ((h | 0) == 5) if (j >>> 0 < g >>> 0) h = 7; else h = 8;
  if ((h | 0) != 7) if ((h | 0) == 8) {
   h = 0;
   d = j >>> 0 < g >>> 0 ? j : g;
   if (!d) h = 10; else {
    d = Vb(f << 24 >> 24 < 0 ? c[e >> 2] | 0 : e, i, d) | 0;
    if (!d) h = 10; else if ((d | 0) >= 0) {
     b = 1;
     h = 14;
     break;
    }
   }
   if ((h | 0) == 10) if (g >>> 0 >= j >>> 0) {
    b = 1;
    h = 14;
    break;
   }
   b = b + 4 | 0;
  }
  b = c[b >> 2] | 0;
  if (!b) {
   b = 0;
   h = 14;
   break;
  }
 }
 if ((h | 0) == 14) return b | 0;
 return 0;
}

function ab(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 224 | 0;
 f = j + 80 | 0;
 g = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 c[j + 120 >> 2] = c[e >> 2];
 if ((Ja(0, d, j + 120 | 0, j, j + 80 | 0) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) g = sf(b) | 0; else g = 0;
  h = c[b >> 2] | 0;
  if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = h & -33;
  if (!(c[b + 48 >> 2] | 0)) {
   f = c[b + 44 >> 2] | 0;
   c[b + 44 >> 2] = j + 136;
   c[b + 28 >> 2] = j + 136;
   c[b + 20 >> 2] = j + 136;
   c[b + 48 >> 2] = 80;
   c[b + 16 >> 2] = j + 136 + 80;
   e = Ja(b, d, j + 120 | 0, j, j + 80 | 0) | 0;
   if (f) {
    Aa[c[b + 36 >> 2] & 7](b, 0, 0) | 0;
    e = (c[b + 20 >> 2] | 0) == 0 ? -1 : e;
    c[b + 44 >> 2] = f;
    c[b + 48 >> 2] = 0;
    c[b + 16 >> 2] = 0;
    c[b + 28 >> 2] = 0;
    c[b + 20 >> 2] = 0;
   }
  } else e = Ja(b, d, j + 120 | 0, j, j + 80 | 0) | 0;
  f = c[b >> 2] | 0;
  c[b >> 2] = f | h & 32;
  if (g | 0) rf(b);
  e = (f & 32 | 0) == 0 ? e : -1;
 }
 i = j;
 return e | 0;
}

function cb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 a : do if ((e | 0) != 0 & (b & 3 | 0) != 0) while (1) {
  if ((a[b >> 0] | 0) == (d & 255) << 24 >> 24) {
   g = 6;
   break a;
  }
  b = b + 1 | 0;
  e = e + -1 | 0;
  if (!((e | 0) != 0 & (b & 3 | 0) != 0)) {
   f = e;
   e = (e | 0) != 0;
   g = 5;
   break;
  }
 } else {
  f = e;
  e = (e | 0) != 0;
  g = 5;
 } while (0);
 if ((g | 0) == 5) if (e) {
  e = f;
  g = 6;
 } else e = 0;
 b : do if ((g | 0) == 6) if ((a[b >> 0] | 0) != (d & 255) << 24 >> 24) {
  f = R(d & 255, 16843009) | 0;
  c : do if (e >>> 0 > 3) while (1) {
   h = c[b >> 2] ^ f;
   if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) break;
   b = b + 4 | 0;
   e = e + -4 | 0;
   if (e >>> 0 <= 3) {
    g = 11;
    break c;
   }
  } else g = 11; while (0);
  if ((g | 0) == 11) if (!e) {
   e = 0;
   break;
  }
  while (1) {
   if ((a[b >> 0] | 0) == (d & 255) << 24 >> 24) break b;
   b = b + 1 | 0;
   e = e + -1 | 0;
   if (!e) {
    e = 0;
    break;
   }
  }
 } while (0);
 return (e | 0 ? b : 0) | 0;
}

function _a(a, b) {
 a = a | 0;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 d = c[a + 28 >> 2] | 0;
 if ((d | 0) == (c[a + 32 >> 2] | 0)) return;
 do {
  h = c[d >> 2] | 0;
  do if (!(Ge(h) | 0)) if (+Re(h) < 0.0) {
   he(h, 1);
   i = c[a + 48 >> 2] | 0;
   f = c[a + 44 >> 2] | 0;
   g = c[a + 56 >> 2] | 0;
   e = c[a + 60 >> 2] | 0;
   if ((((i | 0) == (f | 0) ? 0 : (i - f << 8) + -1 | 0) | 0) == (e + g | 0)) {
    Ma(a + 40 | 0);
    e = c[a + 60 >> 2] | 0;
    g = c[a + 56 >> 2] | 0;
    f = c[a + 44 >> 2] | 0;
   }
   i = e + g | 0;
   c[(c[f + (i >>> 10 << 2) >> 2] | 0) + ((i & 1023) << 2) >> 2] = h;
   c[a + 60 >> 2] = e + 1;
   break;
  } else {
   Mc(gf(c[d >> 2] | 0) | 0, 0.0, 0.0, 0.0);
   e = c[a + 64 >> 2] | 0;
   if ((e | 0) != (c[a + 68 >> 2] | 0)) do {
    i = c[e >> 2] | 0;
    Da[c[c[i >> 2] >> 2] & 3](i, c[d >> 2] | 0);
    e = e + 4 | 0;
   } while ((e | 0) != (c[a + 68 >> 2] | 0));
   Cb(c[d >> 2] | 0, b);
   break;
  } while (0);
  d = d + 4 | 0;
 } while ((d | 0) != (c[a + 32 >> 2] | 0));
 return;
}

function db(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 k = c[a >> 2] | 0;
 d = ((c[a + 4 >> 2] | 0) - k >> 2) + 1 | 0;
 if (d >>> 0 > 1073741823) Jd(a);
 e = (c[a + 8 >> 2] | 0) - k | 0;
 if (e >> 2 >>> 0 < 536870911) {
  d = e >> 1 >>> 0 < d >>> 0 ? d : e >> 1;
  f = c[a + 4 >> 2] | 0;
  if (!d) {
   i = 0;
   h = 0;
   e = f - k >> 2;
   d = f;
  } else if (d >>> 0 > 1073741823) {
   a = ia(4) | 0;
   Ye(a);
   ua(a | 0, 1200, 6);
  } else {
   g = f;
   e = f - k >> 2;
   j = 8;
  }
 } else {
  e = c[a + 4 >> 2] | 0;
  d = 1073741823;
  g = e;
  e = e - k >> 2;
  j = 8;
 }
 if ((j | 0) == 8) {
  i = d;
  h = mc(d << 2) | 0;
  d = g;
 }
 e = h + (e << 2) | 0;
 c[e >> 2] = c[b >> 2];
 d = d - k | 0;
 if ((d | 0) > 0) Fb(e + (0 - (d >> 2) << 2) | 0, k | 0, d | 0) | 0;
 c[a >> 2] = e + (0 - (d >> 2) << 2);
 c[a + 4 >> 2] = e + 4;
 c[a + 8 >> 2] = h + (i << 2);
 if (!k) return;
 of(k);
 return;
}

function $a(d, e, f, g, h, i) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0, m = 0;
 if ((d | 0) == (c[e + 8 >> 2] | 0)) kb(0, e, f, g, h); else {
  l = b[e + 52 >> 1] | 0;
  j = c[d + 12 >> 2] | 0;
  a[e + 52 >> 0] = 0;
  a[e + 53 >> 0] = 0;
  Mb(d + 16 | 0, e, f, g, h, i);
  a : do if ((j | 0) > 1) {
   m = d + 24 | 0;
   do {
    if (a[e + 54 >> 0] | 0) break a;
    k = b[e + 52 >> 1] | 0;
    if (!((k & 255) << 24 >> 24)) {
     if ((k & 65535) >= 256) if (!(c[d + 8 >> 2] & 1)) break a;
    } else {
     if ((c[e + 24 >> 2] | 0) == 1) break a;
     if (!(c[d + 8 >> 2] & 2)) break a;
    }
    a[e + 52 >> 0] = 0;
    a[e + 53 >> 0] = 0;
    Mb(m, e, f, g, h, i);
    m = m + 8 | 0;
   } while (m >>> 0 < (d + 16 + (j << 3) | 0) >>> 0);
  } while (0);
  a[e + 52 >> 0] = l;
  a[e + 53 >> 0] = (l & 65535) >>> 8;
 }
 return;
}

function hb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = c[e + 16 >> 2] | 0;
 if (!f) if (!(_b(e) | 0)) {
  f = c[e + 16 >> 2] | 0;
  g = 5;
 } else f = 0; else g = 5;
 a : do if ((g | 0) == 5) {
  h = c[e + 20 >> 2] | 0;
  if ((f - h | 0) >>> 0 < d >>> 0) {
   f = Aa[c[e + 36 >> 2] & 7](e, b, d) | 0;
   break;
  }
  b : do if ((a[e + 75 >> 0] | 0) > -1) {
   f = d;
   while (1) {
    if (!f) {
     g = h;
     f = 0;
     break b;
    }
    g = f + -1 | 0;
    if ((a[b + g >> 0] | 0) == 10) break; else f = g;
   }
   if ((Aa[c[e + 36 >> 2] & 7](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   d = d - f | 0;
   b = b + f | 0;
   g = c[e + 20 >> 2] | 0;
  } else {
   g = h;
   f = 0;
  } while (0);
  Fb(g | 0, b | 0, d | 0) | 0;
  c[e + 20 >> 2] = (c[e + 20 >> 2] | 0) + d;
  f = f + d | 0;
 } while (0);
 return f | 0;
}

function ib() {
 var a = 0, b = 0, d = 0, e = 0;
 e = i;
 i = i + 48 | 0;
 a = kc() | 0;
 if (a | 0) {
  d = c[a >> 2] | 0;
  if (d | 0) {
   b = c[d + 48 >> 2] | 0;
   a = c[d + 48 + 4 >> 2] | 0;
   if (!((b & -256 | 0) == 1126902528 & (a | 0) == 1129074247)) {
    c[e + 24 >> 2] = 4906;
    zc(5001, e + 24 | 0);
   }
   if ((b | 0) == 1126902529 & (a | 0) == 1129074247) a = c[d + 44 >> 2] | 0; else a = d + 80 | 0;
   c[e + 36 >> 2] = a;
   d = c[d >> 2] | 0;
   a = c[d + 4 >> 2] | 0;
   if (Aa[c[(c[284] | 0) + 16 >> 2] & 7](1136, d, e + 36 | 0) | 0) {
    d = c[e + 36 >> 2] | 0;
    d = Ea[c[(c[d >> 2] | 0) + 8 >> 2] & 3](d) | 0;
    c[e >> 2] = 4906;
    c[e + 4 >> 2] = a;
    c[e + 8 >> 2] = d;
    zc(4915, e);
   } else {
    c[e + 16 >> 2] = 4906;
    c[e + 16 + 4 >> 2] = a;
    zc(4960, e + 16 | 0);
   }
  }
 }
 zc(5039, e + 32 | 0);
}

function gb(a, b) {
 a = a | 0;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 d = c[a + 16 >> 2] | 0;
 if ((d | 0) == (c[a + 20 >> 2] | 0)) return;
 do {
  if ((Bd(c[d >> 2] | 0, b) | 0) > 0) {
   h = 0;
   do {
    e = c[a + 60 >> 2] | 0;
    if (e | 0) {
     f = c[a + 44 >> 2] | 0;
     i = c[a + 56 >> 2] | 0;
     g = c[(c[f + (i >>> 10 << 2) >> 2] | 0) + ((i & 1023) << 2) >> 2] | 0;
     c[a + 60 >> 2] = e + -1;
     c[a + 56 >> 2] = i + 1;
     if ((i + 1 | 0) >>> 0 > 2047) {
      of(c[f >> 2] | 0);
      c[a + 44 >> 2] = (c[a + 44 >> 2] | 0) + 4;
      c[a + 56 >> 2] = (c[a + 56 >> 2] | 0) + -1024;
     }
     ge(g);
     if (g | 0) Db(c[d >> 2] | 0, g);
    }
    h = h + 1 | 0;
   } while ((h | 0) < (Bd(c[d >> 2] | 0, b) | 0));
  }
  d = d + 4 | 0;
 } while ((d | 0) != (c[a + 20 >> 2] | 0));
 return;
}

function tb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 do if (!b) b = 1; else {
  if (d >>> 0 < 128) {
   a[b >> 0] = d;
   b = 1;
   break;
  }
  if (d >>> 0 < 2048) {
   a[b >> 0] = d >>> 6 | 192;
   a[b + 1 >> 0] = d & 63 | 128;
   b = 2;
   break;
  }
  if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
   a[b >> 0] = d >>> 12 | 224;
   a[b + 1 >> 0] = d >>> 6 & 63 | 128;
   a[b + 2 >> 0] = d & 63 | 128;
   b = 3;
   break;
  }
  if ((d + -65536 | 0) >>> 0 < 1048576) {
   a[b >> 0] = d >>> 18 | 240;
   a[b + 1 >> 0] = d >>> 12 & 63 | 128;
   a[b + 2 >> 0] = d >>> 6 & 63 | 128;
   a[b + 3 >> 0] = d & 63 | 128;
   b = 4;
   break;
  } else {
   c[(vd() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } while (0);
 return b | 0;
}

function jb(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0;
 if ((-18 - d | 0) >>> 0 < e >>> 0) Gd(b);
 if ((a[b + 11 >> 0] | 0) < 0) l = c[b >> 2] | 0; else l = b;
 if (d >>> 0 < 2147483623) {
  e = (e + d | 0) >>> 0 < d << 1 >>> 0 ? d << 1 : e + d | 0;
  e = e >>> 0 < 11 ? 11 : e + 16 & -16;
 } else e = -17;
 k = mc(e) | 0;
 if (g | 0) Fb(k | 0, l | 0, g | 0) | 0;
 if (i | 0) Fb(k + g | 0, j | 0, i | 0) | 0;
 if ((f - h | 0) != (g | 0)) Fb(k + g + i | 0, l + g + h | 0, f - h - g | 0) | 0;
 if ((d | 0) != 10) of(l);
 c[b >> 2] = k;
 c[b + 8 >> 2] = e | -2147483648;
 c[b + 4 >> 2] = f - h + i;
 a[k + (f - h + i) >> 0] = 0;
 return;
}

function sb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 if ((c[d + 76 >> 2] | 0) < 0) f = 3; else if (!(sf(d) | 0)) f = 3; else {
  if ((a[d + 75 >> 0] | 0) == (b | 0)) f = 10; else {
   e = c[d + 20 >> 2] | 0;
   if (e >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[d + 20 >> 2] = e + 1;
    a[e >> 0] = b;
    e = b & 255;
   } else f = 10;
  }
  if ((f | 0) == 10) e = yb(d, b) | 0;
  rf(d);
 }
 do if ((f | 0) == 3) {
  if ((a[d + 75 >> 0] | 0) != (b | 0)) {
   e = c[d + 20 >> 2] | 0;
   if (e >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[d + 20 >> 2] = e + 1;
    a[e >> 0] = b;
    e = b & 255;
    break;
   }
  }
  e = yb(d, b) | 0;
 } while (0);
 return e | 0;
}

function kb(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 a[d + 53 >> 0] = 1;
 do if ((c[d + 4 >> 2] | 0) == (f | 0)) {
  a[d + 52 >> 0] = 1;
  f = c[d + 16 >> 2] | 0;
  if (!f) {
   c[d + 16 >> 2] = e;
   c[d + 24 >> 2] = g;
   c[d + 36 >> 2] = 1;
   if (!((g | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0)) break;
   a[d + 54 >> 0] = 1;
   break;
  }
  if ((f | 0) != (e | 0)) {
   c[d + 36 >> 2] = (c[d + 36 >> 2] | 0) + 1;
   a[d + 54 >> 0] = 1;
   break;
  }
  f = c[d + 24 >> 2] | 0;
  if ((f | 0) == 2) {
   c[d + 24 >> 2] = g;
   f = g;
  }
  if ((f | 0) == 1 ? (c[d + 48 >> 2] | 0) == 1 : 0) a[d + 54 >> 0] = 1;
 } while (0);
 return;
}

function ub(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = c[a + 16 >> 2] | 0;
 a : do if ((d | 0) != (c[a + 20 >> 2] | 0)) {
  while (1) {
   if ((Xe(c[d >> 2] | 0) | 0) == (b | 0)) break;
   d = d + 4 | 0;
   if ((d | 0) == (c[a + 20 >> 2] | 0)) break a;
  }
  return c[d >> 2] | 0;
 } while (0);
 d = c[a + 64 >> 2] | 0;
 if ((d | 0) == (c[a + 68 >> 2] | 0)) {
  e = 0;
  return e | 0;
 }
 while (1) {
  if ((Xe((c[d >> 2] | 0) + 8 | 0) | 0) == (b | 0)) break;
  d = d + 4 | 0;
  if ((d | 0) == (c[a + 68 >> 2] | 0)) {
   d = 0;
   e = 8;
   break;
  }
 }
 if ((e | 0) == 8) return d | 0;
 e = c[d >> 2] | 0;
 e = (e | 0) == 0 ? 0 : e + 8 | 0;
 return e | 0;
}

function rb(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 h = i;
 i = i + 256 | 0;
 do if ((d | 0) > (e | 0) & (f & 73728 | 0) == 0) {
  Ob(h | 0, b | 0, ((d - e | 0) >>> 0 > 256 ? 256 : d - e | 0) | 0) | 0;
  f = c[a >> 2] | 0;
  if ((d - e | 0) >>> 0 > 255) {
   g = d - e | 0;
   b = f;
   f = (f & 32 | 0) == 0;
   do {
    if (f) {
     hb(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    g = g + -256 | 0;
    f = (b & 32 | 0) == 0;
   } while (g >>> 0 > 255);
   if (f) b = d - e & 255; else break;
  } else if (!(f & 32)) b = d - e | 0; else break;
  hb(h, b, a) | 0;
 } while (0);
 i = h;
 return;
}

function xb(a, b) {
 a = +a;
 b = b | 0;
 var d = 0;
 if ((b | 0) > 1023) if ((b + -1023 | 0) > 1023) {
  b = (b + -2046 | 0) > 1023 ? 1023 : b + -2046 | 0;
  a = a * 8988465674311579538646525.0e283 * 8988465674311579538646525.0e283;
 } else {
  b = b + -1023 | 0;
  a = a * 8988465674311579538646525.0e283;
 } else if ((b | 0) < -1022) if ((b + 1022 | 0) < -1022) {
  b = (b + 2044 | 0) < -1022 ? -1022 : b + 2044 | 0;
  a = a * 2.2250738585072014e-308 * 2.2250738585072014e-308;
 } else {
  b = b + 1022 | 0;
  a = a * 2.2250738585072014e-308;
 }
 d = wc(b + 1023 | 0, 0, 52) | 0;
 b = C;
 c[k >> 2] = d;
 c[k + 4 >> 2] = b;
 return +(a * +h[k >> 3]);
}

function vb(a) {
 a = +a;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] & 2147483647;
 a : do if (b >>> 0 < 1072243196) if (b >>> 0 < 1044816030) a = 1.0; else a = +bc(a, 0.0); else {
  if (b >>> 0 > 2146435071) {
   a = a - a;
   break;
  }
  switch ((Na(a, d) | 0) & 3 | 0) {
  case 0:
   {
    a = +bc(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  case 1:
   {
    a = -+Eb(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  case 2:
   {
    a = -+bc(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  default:
   {
    a = +Eb(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  }
 } while (0);
 i = d;
 return +a;
}

function wb(a) {
 a = +a;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] & 2147483647;
 a : do if (b >>> 0 < 1072243196) {
  if (b >>> 0 >= 1045430272) a = +Eb(a, 0.0, 0);
 } else {
  if (b >>> 0 > 2146435071) {
   a = a - a;
   break;
  }
  switch ((Na(a, d) | 0) & 3 | 0) {
  case 0:
   {
    a = +Eb(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  case 1:
   {
    a = +bc(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  case 2:
   {
    a = -+Eb(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  default:
   {
    a = -+bc(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  }
 } while (0);
 i = d;
 return +a;
}

function lb(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 do if ((b | 0) == (c[d + 8 >> 2] | 0)) {
  if ((c[d + 4 >> 2] | 0) == (e | 0)) if ((c[d + 28 >> 2] | 0) != 1) c[d + 28 >> 2] = f;
 } else if ((b | 0) == (c[d >> 2] | 0)) {
  if ((c[d + 16 >> 2] | 0) != (e | 0)) if ((c[d + 20 >> 2] | 0) != (e | 0)) {
   c[d + 32 >> 2] = f;
   c[d + 20 >> 2] = e;
   c[d + 40 >> 2] = (c[d + 40 >> 2] | 0) + 1;
   if ((c[d + 36 >> 2] | 0) == 1) if ((c[d + 24 >> 2] | 0) == 2) a[d + 54 >> 0] = 1;
   c[d + 44 >> 2] = 4;
   break;
  }
  if ((f | 0) == 1) c[d + 32 >> 2] = 1;
 } while (0);
 return;
}

function ob(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 g = i;
 i = i + 64 | 0;
 if ((a | 0) == (b | 0)) b = 1; else if (!b) b = 0; else {
  b = bb(b, 1176, 1144, 0) | 0;
  if (!b) b = 0; else {
   e = g;
   f = e + 56 | 0;
   do {
    c[e >> 2] = 0;
    e = e + 4 | 0;
   } while ((e | 0) < (f | 0));
   c[g >> 2] = b;
   c[g + 8 >> 2] = a;
   c[g + 12 >> 2] = -1;
   c[g + 48 >> 2] = 1;
   Ha[c[(c[b >> 2] | 0) + 28 >> 2] & 3](b, g, c[d >> 2] | 0, 1);
   if ((c[g + 24 >> 2] | 0) == 1) {
    c[d >> 2] = c[g + 16 >> 2];
    b = 1;
   } else b = 0;
  }
 }
 i = g;
 return b | 0;
}

function nb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = a[b + 11 >> 0] | 0;
 if (f << 24 >> 24 < 0) g = (c[b + 8 >> 2] & 2147483647) + -1 | 0; else g = 10;
 do if (g >>> 0 < e >>> 0) {
  if (f << 24 >> 24 < 0) f = c[b + 4 >> 2] | 0; else f = f & 255;
  jb(b, g, e - g | 0, f, 0, f, e, d);
 } else {
  if (f << 24 >> 24 < 0) f = c[b >> 2] | 0; else f = b;
  if (e | 0) dc(f | 0, d | 0, e | 0) | 0;
  a[f + e >> 0] = 0;
  if ((a[b + 11 >> 0] | 0) < 0) {
   c[b + 4 >> 2] = e;
   break;
  } else {
   a[b + 11 >> 0] = e;
   break;
  }
 } while (0);
 return b | 0;
}

function fb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 e = Ua(a, g, b) | 0;
 d = c[e >> 2] | 0;
 if (d | 0) {
  a = d;
  a = a + 28 | 0;
  i = g;
  return a | 0;
 }
 f = mc(32) | 0;
 Rb(f + 16 | 0, b);
 c[f + 28 >> 2] = 0;
 d = c[g >> 2] | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = d;
 c[e >> 2] = f;
 d = c[c[a >> 2] >> 2] | 0;
 if (!d) d = f; else {
  c[a >> 2] = d;
  d = c[e >> 2] | 0;
 }
 Qa(c[a + 4 >> 2] | 0, d);
 c[a + 8 >> 2] = (c[a + 8 >> 2] | 0) + 1;
 a = f;
 a = a + 28 | 0;
 i = g;
 return a | 0;
}

function Eb(a, b, c) {
 a = +a;
 b = +b;
 c = c | 0;
 if (!c) a = a * a * a * (a * a * (a * a * a * a * a * a * (a * a * 1.58969099521155e-10 + -2.5050760253406863e-08) + (a * a * (a * a * 2.7557313707070068e-06 + -1.984126982985795e-04) + .00833333333332249)) + -.16666666666666632) + a; else a = a - (a * a * a * .16666666666666632 + (a * a * (b * .5 - a * a * a * (a * a * a * a * a * a * (a * a * 1.58969099521155e-10 + -2.5050760253406863e-08) + (a * a * (a * a * 2.7557313707070068e-06 + -1.984126982985795e-04) + .00833333333332249))) - b));
 return +a;
}

function pb(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0.0, d = 0.0, e = 0.0, f = 0.0;
 f = +h[a + 8 + 8 >> 3];
 f = f - +h[(ef(b) | 0) >> 3];
 d = +h[a + 8 + 16 >> 3];
 d = d - +h[(ef(b) | 0) + 8 >> 3];
 e = +h[a + 8 + 24 >> 3];
 e = e - +h[(ef(b) | 0) + 16 >> 3];
 c = +Te(b);
 c = c * +h[a + 72 >> 3] / +G(+(f * f + d * d + e * e), 1.5);
 if (!(+E(+c) > .001)) return;
 a = gf(b) | 0;
 h[a >> 3] = f * c + +h[a >> 3];
 a = (gf(b) | 0) + 8 | 0;
 h[a >> 3] = d * c + +h[a >> 3];
 b = (gf(b) | 0) + 16 | 0;
 h[b >> 3] = e * c + +h[b >> 3];
 return;
}

function yb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 a[h >> 0] = e;
 f = c[b + 16 >> 2] | 0;
 if (!f) if (!(_b(b) | 0)) {
  f = c[b + 16 >> 2] | 0;
  g = 4;
 } else f = -1; else g = 4;
 do if ((g | 0) == 4) {
  g = c[b + 20 >> 2] | 0;
  if (g >>> 0 < f >>> 0) if ((e & 255 | 0) != (a[b + 75 >> 0] | 0)) {
   c[b + 20 >> 2] = g + 1;
   a[g >> 0] = e;
   f = e & 255;
   break;
  }
  if ((Aa[c[b + 36 >> 2] & 7](b, h, 1) | 0) == 1) f = d[h >> 0] | 0; else f = -1;
 } while (0);
 i = h;
 return f | 0;
}

function Fb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return na(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function Bb(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) {
  while (1) {
   e = jc(b | 0, c | 0, 10, 0) | 0;
   d = d + -1 | 0;
   a[d >> 0] = e | 48;
   e = zd(b | 0, c | 0, 10, 0) | 0;
   if (c >>> 0 > 9 | (c | 0) == 9 & b >>> 0 > 4294967295) {
    b = e;
    c = C;
   } else break;
  }
  b = e;
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function zb(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 a : do if (!(b & 3)) {
  d = b;
  f = 4;
 } else {
  e = b;
  d = b;
  while (1) {
   if (!(a[e >> 0] | 0)) break a;
   e = e + 1 | 0;
   d = e;
   if (!(d & 3)) {
    d = e;
    f = 4;
    break;
   }
  }
 } while (0);
 if ((f | 0) == 4) {
  while (1) {
   e = c[d >> 2] | 0;
   if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) d = d + 4 | 0; else break;
  }
  if ((e & 255) << 24 >> 24) do d = d + 1 | 0; while ((a[d >> 0] | 0) != 0);
 }
 return d - b | 0;
}

function Ab(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = Ac(d | 0, e | 0, 52) | 0;
 switch (f & 2047 | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +Ab(a * 18446744073709551616.0, b);
    d = (c[b >> 2] | 0) + -64 | 0;
   } else d = 0;
   c[b >> 2] = d;
   break;
  }
 case 2047:
  break;
 default:
  {
   c[b >> 2] = (f & 2047) + -1022;
   c[k >> 2] = d;
   c[k + 4 >> 2] = e & -2146435073 | 1071644672;
   a = +h[k >> 3];
  }
 }
 return +a;
}

function Gb(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[2475 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 2563;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 2563; else {
  b = 2563;
  e = 5;
 }
 if ((e | 0) == 5) while (1) {
  e = b;
  while (1) {
   b = e + 1 | 0;
   if (!(a[e >> 0] | 0)) break; else e = b;
  }
  c = c + -1 | 0;
  if (!c) break; else e = 5;
 }
 return b | 0;
}

function Cb(a, b) {
 a = a | 0;
 b = +b;
 var c = 0.0;
 h[a + 96 >> 3] = +h[a + 96 >> 3] - b;
 c = +h[a + 24 >> 3] + +h[a >> 3] * b;
 h[a + 24 >> 3] = c;
 h[a + 48 >> 3] = +h[a + 48 >> 3] + c * +h[a + 72 >> 3] * b;
 c = +h[a + 32 >> 3] + +h[a + 8 >> 3] * b;
 h[a + 32 >> 3] = c;
 h[a + 56 >> 3] = +h[a + 56 >> 3] + c * +h[a + 80 >> 3] * b;
 c = +h[a + 40 >> 3] + +h[a + 16 >> 3] * b;
 h[a + 40 >> 3] = c;
 h[a + 64 >> 3] = +h[a + 64 >> 3] + c * +h[a + 88 >> 3] * b;
 return;
}

function eb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 c[e >> 2] = d;
 if (!(Za(a, b) | 0)) {
  f = mc(12) | 0;
  c[f >> 2] = 0;
  c[f + 4 >> 2] = 0;
  c[f + 8 >> 2] = 0;
  c[(fb(a, b) | 0) >> 2] = f;
 }
 a = c[(fb(a, b) | 0) >> 2] | 0;
 b = c[a + 4 >> 2] | 0;
 if ((b | 0) == (c[a + 8 >> 2] | 0)) {
  db(a, e);
  i = e;
  return;
 } else {
  c[b >> 2] = d;
  c[a + 4 >> 2] = (c[a + 4 >> 2] | 0) + 4;
  i = e;
  return;
 }
}

function Ob(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  g = b & 3;
  h = d | d << 8 | d << 16 | d << 24;
  if (g) {
   g = b + 4 - g | 0;
   while ((b | 0) < (g | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (f & ~3 | 0)) {
   c[b >> 2] = h;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function Kb(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = c[351] | 0;
 if ((c[d + 76 >> 2] | 0) > -1) e = sf(d) | 0; else e = 0;
 do if ((re(b, d) | 0) < 0) b = 1; else {
  if ((a[d + 75 >> 0] | 0) != 10) {
   b = c[d + 20 >> 2] | 0;
   if (b >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[d + 20 >> 2] = b + 1;
    a[b >> 0] = 10;
    b = 0;
    break;
   }
  }
  b = (yb(d, 10) | 0) < 0;
 } while (0);
 if (e | 0) rf(d);
 return b << 31 >> 31 | 0;
}

function Db(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0.0, d = 0.0, e = 0.0, f = 0.0, g = 0.0, i = 0;
 e = +h[a + 80 >> 3];
 e = e * (+(ic() | 0) / 2147483647.0 * 2.0 + -1.0);
 c = +h[a + 80 >> 3];
 c = c * (+(ic() | 0) / 2147483647.0 * 2.0 + -1.0);
 i = df(b) | 0;
 d = +h[a + 72 >> 3];
 g = d * +vb(e);
 f = +vb(c);
 e = f * d * +wb(e);
 Mc(i, g * f, e, d * +wb(c));
 sc(ef(b) | 0, a + 8 | 0);
 xe(b, +h[a + 88 >> 3]);
 return;
}

function qb(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 a : do if ((b | 0) == (c[d + 8 >> 2] | 0)) Ib(0, d, e, f); else {
  g = c[b + 12 >> 2] | 0;
  Wb(b + 16 | 0, d, e, f);
  if ((g | 0) > 1) {
   h = b + 24 | 0;
   do {
    Wb(h, d, e, f);
    if (a[d + 54 >> 0] | 0) break a;
    h = h + 8 | 0;
   } while (h >>> 0 < (b + 16 + (g << 3) | 0) >>> 0);
  }
 } while (0);
 return;
}

function Ib(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 b = c[d + 16 >> 2] | 0;
 do if (!b) {
  c[d + 16 >> 2] = e;
  c[d + 24 >> 2] = f;
  c[d + 36 >> 2] = 1;
 } else {
  if ((b | 0) != (e | 0)) {
   c[d + 36 >> 2] = (c[d + 36 >> 2] | 0) + 1;
   c[d + 24 >> 2] = 2;
   a[d + 54 >> 0] = 1;
   break;
  }
  if ((c[d + 24 >> 2] | 0) == 2) c[d + 24 >> 2] = f;
 } while (0);
 return;
}

function Qb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = c[a + 64 >> 2] | 0;
 if ((d | 0) == (c[a + 68 >> 2] | 0)) {
  e = 0;
  return e | 0;
 }
 while (1) {
  if ((Xe((c[d >> 2] | 0) + 8 | 0) | 0) == (b | 0)) break;
  d = d + 4 | 0;
  if ((d | 0) == (c[a + 68 >> 2] | 0)) {
   d = 0;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 5) return d | 0;
 e = c[d >> 2] | 0;
 return e | 0;
}

function Vb(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 a : do if (!d) d = 0; else {
  while (1) {
   e = a[b >> 0] | 0;
   f = a[c >> 0] | 0;
   if (e << 24 >> 24 != f << 24 >> 24) break;
   d = d + -1 | 0;
   if (!d) {
    d = 0;
    break a;
   } else {
    b = b + 1 | 0;
    c = c + 1 | 0;
   }
  }
  d = (e & 255) - (f & 255) | 0;
 } while (0);
 return d | 0;
}

function Pb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 d = c[a + 28 >> 2] | 0;
 b = c[a + 32 >> 2] | 0;
 if ((d | 0) == (b | 0)) return;
 do {
  e = c[d >> 2] | 0;
  if (e) {
   of(e);
   b = c[a + 32 >> 2] | 0;
  }
  d = d + 4 | 0;
 } while ((d | 0) != (b | 0));
 d = c[a + 28 >> 2] | 0;
 if ((b | 0) == (d | 0)) return;
 c[a + 32 >> 2] = b + (~((b + -4 - d | 0) >>> 2) << 2);
 return;
}

function Hb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if (e >>> 0 > 4294967279) Gd(b);
 if (e >>> 0 < 11) {
  a[b + 11 >> 0] = e;
  if (e) f = 6;
 } else {
  f = mc(e + 16 & -16) | 0;
  c[b >> 2] = f;
  c[b + 8 >> 2] = e + 16 & -16 | -2147483648;
  c[b + 4 >> 2] = e;
  b = f;
  f = 6;
 }
 if ((f | 0) == 6) Fb(b | 0, d | 0, e | 0) | 0;
 a[b + e >> 0] = 0;
 return;
}

function Ub(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = c[a + 16 >> 2] | 0;
 if ((d | 0) == (c[a + 20 >> 2] | 0)) {
  e = 0;
  return e | 0;
 }
 while (1) {
  if ((Xe(c[d >> 2] | 0) | 0) == (b | 0)) break;
  d = d + 4 | 0;
  if ((d | 0) == (c[a + 20 >> 2] | 0)) {
   d = 0;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 5) return d | 0;
 e = c[d >> 2] | 0;
 return e | 0;
}

function _b(b) {
 b = b | 0;
 var d = 0;
 d = a[b + 74 >> 0] | 0;
 a[b + 74 >> 0] = d + 255 | d;
 d = c[b >> 2] | 0;
 if (!(d & 8)) {
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
  d = c[b + 44 >> 2] | 0;
  c[b + 28 >> 2] = d;
  c[b + 20 >> 2] = d;
  c[b + 16 >> 2] = d + (c[b + 48 >> 2] | 0);
  d = 0;
 } else {
  c[b >> 2] = d | 32;
  d = -1;
 }
 return d | 0;
}

function Lb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = mc(96) | 0;
 ie(d, b);
 c[e >> 2] = d;
 b = c[a + 20 >> 2] | 0;
 if ((b | 0) == (c[a + 24 >> 2] | 0)) {
  db(a + 16 | 0, e);
  i = e;
  return d | 0;
 } else {
  c[b >> 2] = d;
  c[a + 20 >> 2] = (c[a + 20 >> 2] | 0) + 4;
  i = e;
  return d | 0;
 }
 return 0;
}

function Jb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = mc(80) | 0;
 Hd(d, b);
 c[e >> 2] = d;
 b = c[a + 68 >> 2] | 0;
 if ((b | 0) == (c[a + 72 >> 2] | 0)) {
  db(a + 64 | 0, e);
  i = e;
  return d | 0;
 } else {
  c[b >> 2] = d;
  c[a + 68 >> 2] = (c[a + 68 >> 2] | 0) + 4;
  i = e;
  return d | 0;
 }
 return 0;
}

function bc(a, b) {
 a = +a;
 b = +b;
 return +(1.0 - a * a * .5 + (1.0 - (1.0 - a * a * .5) - a * a * .5 + (a * a * (a * a * (a * a * (a * a * 2.480158728947673e-05 + -.001388888888887411) + .0416666666666666) + a * a * a * a * a * a * a * a * (a * a * (2.087572321298175e-09 - a * a * 1.1359647557788195e-11) + -2.7557314351390663e-07)) - a * b)));
}

function Yb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = i;
 i = i + 32 | 0;
 c[e >> 2] = c[a + 60 >> 2];
 c[e + 4 >> 2] = 0;
 c[e + 8 >> 2] = b;
 c[e + 12 >> 2] = e + 20;
 c[e + 16 >> 2] = d;
 if ((md(xa(140, e | 0) | 0) | 0) < 0) {
  c[e + 20 >> 2] = -1;
  a = -1;
 } else a = c[e + 20 >> 2] | 0;
 i = e;
 return a | 0;
}

function Tb() {
 var a = 0, b = 0;
 b = i;
 i = i + 16 | 0;
 a = kc() | 0;
 if (a | 0) {
  a = c[a >> 2] | 0;
  if (a | 0) if ((c[a + 48 >> 2] & -256 | 0) == 1126902528 ? (c[a + 48 + 4 >> 2] | 0) == 1129074247 : 0) {
   Fa[c[a + 12 >> 2] & 3]();
   zc(5051, b);
  }
 }
 a = c[450] | 0;
 c[450] = a + 0;
 Fa[a & 3]();
 zc(5051, b + 8 | 0);
}

function Mb(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 h = c[a + 4 >> 2] | 0;
 if (!(h & 1)) i = h >> 8; else i = c[(c[e >> 2] | 0) + (h >> 8) >> 2] | 0;
 a = c[a >> 2] | 0;
 Ga[c[(c[a >> 2] | 0) + 20 >> 2] & 3](a, b, d, e + i | 0, h & 2 | 0 ? f : 2, g);
 return;
}

function dc(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((c | 0) < (b | 0) & (b | 0) < (c + d | 0)) {
  e = b;
  c = c + d | 0;
  b = b + d | 0;
  while ((d | 0) > 0) {
   b = b - 1 | 0;
   c = c - 1 | 0;
   d = d - 1 | 0;
   a[b >> 0] = a[c >> 0] | 0;
  }
  b = e;
 } else Fb(b, c, d) | 0;
 return b | 0;
}

function Zb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 f = i;
 i = i + 80 | 0;
 c[b + 36 >> 2] = 1;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = f + 12;
  if (ea(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 e = Va(b, d, e) | 0;
 i = f;
 return e | 0;
}

function ec(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0;
 c = R(b & 65535, a & 65535) | 0;
 e = (c >>> 16) + (R(b & 65535, a >>> 16) | 0) | 0;
 d = R(b >>> 16, a & 65535) | 0;
 return (C = (e >>> 16) + (R(b >>> 16, a >>> 16) | 0) + (((e & 65535) + d | 0) >>> 16) | 0, e + d << 16 | c & 65535 | 0) | 0;
}

function Sb(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 g = c[a + 4 >> 2] | 0;
 if (!(g & 1)) h = g >> 8; else h = c[(c[d >> 2] | 0) + (g >> 8) >> 2] | 0;
 a = c[a >> 2] | 0;
 Ba[c[(c[a >> 2] | 0) + 24 >> 2] & 3](a, b, d + h | 0, g & 2 | 0 ? e : 2, f);
 return;
}

function $b(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = R(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (sf(e) | 0) == 0;
  a = hb(a, f, e) | 0;
  if (!g) rf(e);
 } else a = hb(a, f, e) | 0;
 if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;
 return d | 0;
}

function Wb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = c[a + 4 >> 2] | 0;
 if (!(f & 1)) g = f >> 8; else g = c[(c[d >> 2] | 0) + (f >> 8) >> 2] | 0;
 a = c[a >> 2] | 0;
 Ha[c[(c[a >> 2] | 0) + 28 >> 2] & 3](a, b, d + g | 0, f & 2 | 0 ? e : 2);
 return;
}

function Rb(b, d) {
 b = b | 0;
 d = d | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 if ((a[d + 11 >> 0] | 0) < 0) Hb(b, c[d >> 2] | 0, c[d + 4 >> 2] | 0); else {
  c[b >> 2] = c[d >> 2];
  c[b + 4 >> 2] = c[d + 4 >> 2];
  c[b + 8 >> 2] = c[d + 8 >> 2];
 }
 return;
}

function ac(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 Ad(a);
 d = a + 16 | 0;
 e = d + 60 | 0;
 do {
  c[d >> 2] = 0;
  d = d + 4 | 0;
 } while ((d | 0) < (e | 0));
 Fc(a + 88 | 0);
 Sa(a, b);
 c[a + 80 >> 2] = b;
 Mc(a + 88 | 0, 1.0, 1.0, 1.0);
 return;
}

function Nb(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) kb(0, b, d, e, f); else {
  a = c[a + 8 >> 2] | 0;
  Ga[c[(c[a >> 2] | 0) + 20 >> 2] & 3](a, b, d, e, f, g);
 }
 return;
}

function hc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = +c;
 var d = 0.0, e = 0.0, f = 0.0;
 f = +h[a >> 3] - +h[b >> 3];
 e = +h[a + 8 >> 3] - +h[b + 8 >> 3];
 d = +h[a + 16 >> 3] - +h[b + 16 >> 3];
 return f * f + e * e + d * d < c * c | 0;
}

function fc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = i;
 i = i + 16 | 0;
 c[e >> 2] = c[d >> 2];
 a = Aa[c[(c[a >> 2] | 0) + 16 >> 2] & 7](a, b, e) | 0;
 if (a) c[d >> 2] = c[e >> 2];
 i = e;
 return a & 1 | 0;
}

function Xb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Ib(0, b, d, e); else {
  a = c[a + 8 >> 2] | 0;
  Ha[c[(c[a >> 2] | 0) + 28 >> 2] & 3](a, b, d, e);
 }
 return;
}

function ic() {
 var a = 0, b = 0;
 b = oc(c[1308] | 0, c[1309] | 0, 1284865837, 1481765933) | 0;
 b = Ic(b | 0, C | 0, 1, 0) | 0;
 a = C;
 c[1308] = b;
 c[1309] = a;
 a = Ac(b | 0, a | 0, 33) | 0;
 return a | 0;
}

function mc(a) {
 a = a | 0;
 var b = 0;
 b = (a | 0) == 0 ? 1 : a;
 while (1) {
  a = Ia(b) | 0;
  if (a | 0) break;
  a = se() | 0;
  if (!a) {
   a = 0;
   break;
  }
  Fa[a & 3]();
 }
 return a | 0;
}

function jc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 f = i;
 i = i + 16 | 0;
 Oa(a, b, d, e, f | 0) | 0;
 i = f;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function pc(a) {
 a = a | 0;
 var b = 0;
 b = c[a + 12 >> 2] | 0;
 if ((b | 0) == (c[a + 32 >> 2] | 0)) {
  a = 0;
  return a | 0;
 }
 c[a + 12 >> 2] = b + 4;
 a = c[b >> 2] | 0;
 return a | 0;
}

function oc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = ec(a, c) | 0;
 f = C;
 return (C = (R(b, c) | 0) + (R(d, a) | 0) + f | f & 0, e | 0 | 0) | 0;
}

function wc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 C = a << c - 32;
 return 0;
}

function sc(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0.0, d = 0.0;
 d = +h[b + 8 >> 3];
 c = +h[b + 16 >> 3];
 h[a >> 3] = +h[b >> 3];
 h[a + 8 >> 3] = d;
 h[a + 16 >> 3] = c;
 return;
}

function Ac(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 C = 0;
 return b >>> c - 32 | 0;
}

function rc(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 Fc(b + 8 | 0);
 Fc(b + 32 | 0);
 a[b >> 0] = 1;
 a[b + 1 >> 0] = 1;
 c[b + 56 >> 2] = e;
 c[b + 60 >> 2] = d;
 return;
}

function vc(a, b, c, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 Ga[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0, g | 0);
}

function Cc() {}
function Dc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function kc() {
 var a = 0, b = 0;
 a = i;
 i = i + 16 | 0;
 if (!(ra(5784, 2) | 0)) {
  b = qa(c[1447] | 0) | 0;
  i = a;
  return b | 0;
 } else zc(4727, a);
 return 0;
}

function cc(a, b, d, e, f, g) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) kb(0, b, d, e, f);
 return;
}

function qc(b) {
 b = b | 0;
 Fc(b);
 Fc(b + 24 | 0);
 Fc(b + 48 | 0);
 Fc(b + 72 | 0);
 h[b + 104 >> 3] = .03;
 a[b + 120 >> 0] = 0;
 h[b + 96 >> 3] = 30.0;
 return;
}

function Bc(a) {
 a = a | 0;
 var b = 0.0, c = 0.0, d = 0.0;
 d = +h[a >> 3];
 c = +h[a + 8 >> 3];
 b = +h[a + 16 >> 3];
 return +(+F(+(d * d + c * c + b * b)));
}

function Ic(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return (C = b + d + (a + c >>> 0 >>> 0 < a >>> 0 | 0) >>> 0, a + c >>> 0 | 0) | 0;
}

function Fc(a) {
 a = a | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 c[a + 12 >> 2] = 0;
 c[a + 16 >> 2] = 0;
 c[a + 20 >> 2] = 0;
 return;
}

function zc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = i;
 i = i + 16 | 0;
 c[d >> 2] = b;
 b = c[322] | 0;
 ab(b, a, d) | 0;
 sb(10, b) | 0;
 fa();
}

function Gc(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 Ba[a & 3](b | 0, c | 0, d | 0, e | 0, f | 0);
}

function xc(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 c[b >> 2] = c[a + 60 >> 2];
 a = md(va(6, b | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function nc(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 Ka(a);
 if (!(ta(c[1447] | 0, 0) | 0)) {
  i = b;
  return;
 } else zc(4624, b);
}

function mb(a, b) {
 a = a | 0;
 b = b | 0;
 if (!b) return;
 mb(a, c[b >> 2] | 0);
 mb(a, c[b + 4 >> 2] | 0);
 Oc(b + 16 | 0);
 of(b);
 return;
}

function lc(a) {
 a = a | 0;
 var b = 0;
 b = mc(12) | 0;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b + 8 >> 2] = 0;
 tc(b, a) | 0;
 return b | 0;
}

function gc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 if ((a | 0) == (c[b + 8 >> 2] | 0)) Ib(0, b, d, e);
 return;
}

function Kc(b) {
 b = b | 0;
 if ((a[b + 11 >> 0] | 0) < 0) {
  b = c[b >> 2] | 0;
  return b | 0;
 } else return b | 0;
 return 0;
}

function Mc(a, b, c, d) {
 a = a | 0;
 b = +b;
 c = +c;
 d = +d;
 h[a >> 3] = b;
 h[a + 8 >> 3] = c;
 h[a + 16 >> 3] = d;
 return;
}

function Pc(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 Ha[a & 3](b | 0, c | 0, d | 0, e | 0);
}

function uc() {
 var a = 0;
 a = i;
 i = i + 16 | 0;
 if (!(sa(5788, 10) | 0)) {
  i = a;
  return;
 } else zc(4677, a);
}

function $c(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Aa[a & 7](b | 0, c | 0, d | 0) | 0;
}

function md(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(vd() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function Tc() {
 var a = 0;
 a = mc(12) | 0;
 c[a >> 2] = 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 return a | 0;
}

function Sc(a, b, c) {
 a = +a;
 b = +b;
 c = +c;
 var d = 0;
 d = mc(24) | 0;
 Mc(d, a, b, c);
 return d | 0;
}

function Id(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 U(6);
}

function hd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 rc(a + 8 | 0, b, d);
 c[a >> 2] = 1272;
 return;
}

function Xc(a) {
 a = a | 0;
 if (!a) a = 0; else a = (bb(a, 1176, 1232, 0) | 0) != 0;
 return a & 1 | 0;
}

function zd(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Oa(a, b, c, d, 0) | 0;
}

function Uc(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 c = mc(64) | 0;
 rc(c, a, b);
 return c | 0;
}

function rd(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = tb(a, b, 0) | 0;
 return a | 0;
}

function vd() {
 var a = 0;
 if (!0) a = 5284; else a = c[(wf() | 0) + 64 >> 2] | 0;
 return a | 0;
}

function id(a, b, c, d) {
 a = a | 0;
 b = +b;
 c = +c;
 d = +d;
 Mc(a + 32 | 0, b, c, d);
 return;
}

function fd(a, b, c, d) {
 a = a | 0;
 b = +b;
 c = +c;
 d = +d;
 Mc(a + 88 | 0, b, c, d);
 return;
}

function pd(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function cd(a, b, c, d) {
 a = a | 0;
 b = +b;
 c = +c;
 d = +d;
 Mc(a + 8 | 0, b, c, d);
 return;
}

function Lc(a, b, c, d) {
 a = a | 0;
 b = +b;
 c = +c;
 d = +d;
 id(a + 8 | 0, b, c, d);
 return;
}

function Jc(a, b, c, d) {
 a = a | 0;
 b = +b;
 c = +c;
 d = +d;
 cd(a + 8 | 0, b, c, d);
 return;
}

function Ad(a) {
 a = a | 0;
 c[a + 4 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 c[a >> 2] = a + 4;
 return;
}

function le(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 U(1);
}

function re(a, b) {
 a = a | 0;
 b = b | 0;
 return ($b(a, zb(a) | 0, 1, b) | 0) + -1 | 0;
}

function qd(a, b, c, d) {
 a = a | 0;
 b = +b;
 c = +c;
 d = +d;
 Mc(a, b, c, d);
 return;
}

function Vc(a, b, c, d) {
 a = a | 0;
 b = +b;
 c = +c;
 d = +d;
 fd(a, b, c, d);
 return;
}

function Rc(a, b, c, d) {
 a = a | 0;
 b = +b;
 c = +c;
 d = +d;
 cd(a, b, c, d);
 return;
}

function Qc(a, b, c, d) {
 a = a | 0;
 b = +b;
 c = +c;
 d = +d;
 id(a, b, c, d);
 return;
}

function Oc(b) {
 b = b | 0;
 if ((a[b + 11 >> 0] | 0) < 0) of(c[b >> 2] | 0);
 return;
}

function Hd(a, b) {
 a = a | 0;
 b = b | 0;
 hd(a, b, 1);
 c[a >> 2] = 1284;
 return;
}

function Zc(a) {
 a = a | 0;
 var b = 0;
 b = mc(112) | 0;
 ac(b, a);
 return b | 0;
}

function $d(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 Da[a & 3](b | 0, c | 0);
}

function ge(b) {
 b = b | 0;
 a[b + 120 >> 0] = 0;
 h[b + 96 >> 3] = 30.0;
 return;
}

function bd(a) {
 a = a | 0;
 var b = 0;
 b = mc(80) | 0;
 Hd(b, a);
 return b | 0;
}

function Yc(a) {
 a = a | 0;
 var b = 0;
 b = mc(96) | 0;
 ie(b, a);
 return b | 0;
}

function Bd(a, b) {
 a = a | 0;
 b = +b;
 return ~~+D(+(+h[a + 64 >> 3] * b)) | 0;
}

function yc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 eb(a, b, c);
 return;
}

function gd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = +c;
 return hc(a, b, c) | 0;
}

function Le(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 U(7);
}

function se() {
 var a = 0;
 a = c[1448] | 0;
 c[1448] = a + 0;
 return a | 0;
}

function he(b, c) {
 b = b | 0;
 c = c | 0;
 a[b + 120 >> 0] = c & 1;
 return;
}

function tc(a, b) {
 a = a | 0;
 b = b | 0;
 return nb(a, b, zb(b) | 0) | 0;
}

function be(b, c) {
 b = b | 0;
 c = c | 0;
 a[b + 1 >> 0] = c & 1;
 return;
}

function Ue(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 U(0);
 return 0;
}

function Sd(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function Ce(a, b) {
 a = a | 0;
 b = b | 0;
 return Ea[a & 3](b | 0) | 0;
}

function qe(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) rf(a);
 return;
}

function ee(b, c) {
 b = b | 0;
 c = c | 0;
 a[b >> 0] = c & 1;
 return;
}

function Rd(a, b) {
 a = a | 0;
 b = b | 0;
 sc(a + 72 | 0, b);
 return;
}

function xe(a, b) {
 a = a | 0;
 b = +b;
 h[a + 112 >> 3] = b;
 return;
}

function ld(a, b) {
 a = a | 0;
 b = b | 0;
 be(a + 8 | 0, b);
 return;
}

function ad(a, b) {
 a = a | 0;
 b = b | 0;
 ee(a + 8 | 0, b);
 return;
}

function Xd(a) {
 a = a | 0;
 c[a + 12 >> 2] = c[a + 28 >> 2];
 return;
}

function Nc(a, b) {
 a = a | 0;
 b = +b;
 gb(a, b);
 _a(a, b);
 return;
}

function ve(a, b) {
 a = a | 0;
 b = +b;
 h[a + 96 >> 3] = b;
 return;
}

function te(a, b) {
 a = a | 0;
 b = +b;
 h[a + 72 >> 3] = b;
 return;
}

function ke(a, b) {
 a = a | 0;
 b = +b;
 h[a + 88 >> 3] = b;
 return;
}

function je(a, b) {
 a = a | 0;
 b = +b;
 h[a + 80 >> 3] = b;
 return;
}

function de(a, b) {
 a = a | 0;
 b = +b;
 h[a + 72 >> 3] = b;
 return;
}

function _d(a, b) {
 a = a | 0;
 b = +b;
 h[a + 64 >> 3] = b;
 return;
}

function _c(a) {
 a = a | 0;
 if (!a) return;
 Ta(a);
 of(a);
 return;
}

function Hc(a) {
 a = a | 0;
 if (!a) return;
 Oc(a);
 of(a);
 return;
}

function Wc(a, b) {
 a = a | 0;
 b = b | 0;
 Kb(1980) | 0;
 return 0;
}

function Pd() {
 var a = 0;
 a = mc(128) | 0;
 qc(a);
 return a | 0;
}

function Ge(b) {
 b = b | 0;
 return (a[b + 120 >> 0] | 0) != 0 | 0;
}

function ie(a, b) {
 a = a | 0;
 b = b | 0;
 rc(a, b, 0);
 return;
}

function Be(b) {
 b = b | 0;
 return (a[b + 1 >> 0] | 0) != 0 | 0;
}

function td(a, b) {
 a = a | 0;
 b = b | 0;
 return Lb(a, b) | 0;
}

function sd(a, b) {
 a = a | 0;
 b = b | 0;
 return Ub(a, b) | 0;
}

function nd(a, b) {
 a = a | 0;
 b = b | 0;
 return ub(a, b) | 0;
}

function ed(a, b) {
 a = a | 0;
 b = b | 0;
 return Jb(a, b) | 0;
}

function dd(a, b) {
 a = a | 0;
 b = b | 0;
 return Qb(a, b) | 0;
}

function Ec(a, b) {
 a = a | 0;
 b = b | 0;
 return Wc(a, b) | 0;
}

function wd(a, b) {
 a = a | 0;
 b = b | 0;
 be(a, b);
 return;
}

function od(a, b) {
 a = a | 0;
 b = b | 0;
 ee(a, b);
 return;
}

function jd(a, b) {
 a = a | 0;
 b = b | 0;
 Sa(a, b);
 return;
}

function Pe(a, b) {
 a = a | 0;
 b = b | 0;
 Ca[a & 15](b | 0);
}

function bf(a, b) {
 a = +a;
 b = b | 0;
 return +(+Ab(a, b));
}

function Td(a) {
 a = a | 0;
 if (!a) return;
 of(a);
 return;
}

function Ee(b) {
 b = b | 0;
 return (a[b >> 0] | 0) != 0 | 0;
}

function yd(a, b) {
 a = a | 0;
 b = +b;
 ke(a, b);
 return;
}

function xd(a, b) {
 a = a | 0;
 b = +b;
 je(a, b);
 return;
}

function ud(a, b) {
 a = a | 0;
 b = +b;
 de(a, b);
 return;
}

function kd(a, b) {
 a = a | 0;
 b = +b;
 _d(a, b);
 return;
}

function Md(a, b) {
 a = a | 0;
 b = +b;
 Nc(a, b);
 return;
}

function Kd(a, b) {
 a = a | 0;
 b = +b;
 ve(a, b);
 return;
}

function Fd(a, b) {
 a = a | 0;
 b = +b;
 te(a, b);
 return;
}

function Ie(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function Te(a) {
 a = a | 0;
 return +(+h[a + 112 >> 3]);
}

function Se(a) {
 a = a | 0;
 return +(+h[a + 104 >> 3]);
}

function Gd(a) {
 a = a | 0;
 ha(4504, 4533, 1183, 4603);
}

function Ze(a) {
 a = a | 0;
 return +(+h[a + 16 >> 3]);
}

function Ye(a) {
 a = a | 0;
 c[a >> 2] = 1892;
 return;
}

function Xe(a) {
 a = a | 0;
 return c[a + 60 >> 2] | 0;
}

function We(a) {
 a = a | 0;
 return c[a + 56 >> 2] | 0;
}

function Re(a) {
 a = a | 0;
 return +(+h[a + 96 >> 3]);
}

function Qe(a) {
 a = a | 0;
 return +(+h[a + 72 >> 3]);
}

function Ke(a) {
 a = a | 0;
 return +(+h[a + 88 >> 3]);
}

function Je(a) {
 a = a | 0;
 return +(+h[a + 80 >> 3]);
}

function Jd(a) {
 a = a | 0;
 ha(4411, 4434, 304, 4603);
}

function He(a) {
 a = a | 0;
 return c[a + 80 >> 2] | 0;
}

function De(a) {
 a = a | 0;
 return +(+h[a + 64 >> 3]);
}

function _e(a) {
 a = a | 0;
 return +(+h[a + 8 >> 3]);
}

function Qd(a) {
 a = a | 0;
 return ff(a + 8 | 0) | 0;
}

function Ld(a) {
 a = a | 0;
 return af(a + 8 | 0) | 0;
}

function Ve(a, b) {
 a = a | 0;
 b = b | 0;
 return;
}

function cf(a) {
 a = a | 0;
 return +(+h[a >> 3]);
}

function Ae(a) {
 a = a | 0;
 ma(a | 0) | 0;
 Tb();
}

function mf(a, b) {
 a = a | 0;
 b = b | 0;
 U(3);
}

function jf(a) {
 a = a | 0;
 return a + 72 | 0;
}

function ff(a) {
 a = a | 0;
 return a + 32 | 0;
}

function ef(a) {
 a = a | 0;
 return a + 48 | 0;
}

function df(a) {
 a = a | 0;
 return a + 24 | 0;
}

function ze(a) {
 a = a | 0;
 return Xe(a) | 0;
}

function ye(a) {
 a = a | 0;
 return +(+Bc(a));
}

function we(a) {
 a = a | 0;
 return +(+Se(a));
}

function ue(a) {
 a = a | 0;
 return We(a) | 0;
}

function pe(a) {
 a = a | 0;
 return +(+Re(a));
}

function oe(a) {
 a = a | 0;
 return ef(a) | 0;
}

function ne(a) {
 a = a | 0;
 return Ge(a) | 0;
}

function me(a) {
 a = a | 0;
 return df(a) | 0;
}

function ce(a) {
 a = a | 0;
 return +(+Qe(a));
}

function af(a) {
 a = a | 0;
 return a + 8 | 0;
}

function ae(a) {
 a = a | 0;
 return ff(a) | 0;
}

function Zd(a) {
 a = a | 0;
 return gf(a) | 0;
}

function Yd(a) {
 a = a | 0;
 return Be(a) | 0;
}

function Wd(a) {
 a = a | 0;
 return +(+Ke(a));
}

function Vd(a) {
 a = a | 0;
 return af(a) | 0;
}

function Ud(a) {
 a = a | 0;
 return +(+Je(a));
}

function Oe(a) {
 a = a | 0;
 return +(+cf(a));
}

function Od(a) {
 a = a | 0;
 return Ee(a) | 0;
}

function Ne(a) {
 a = a | 0;
 return +(+_e(a));
}

function Nd(a) {
 a = a | 0;
 return pc(a) | 0;
}

function Me(a) {
 a = a | 0;
 return +(+Ze(a));
}

function Fe(a) {
 a = a | 0;
 return jf(a) | 0;
}

function Ed(a) {
 a = a | 0;
 return He(a) | 0;
}

function Cd(a) {
 a = a | 0;
 return +(+De(a));
}

function qf(a) {
 a = a | 0;
 U(4);
 return 0;
}

function of(a) {
 a = a | 0;
 Ka(a);
 return;
}

function hf(a) {
 a = a | 0;
 of(a);
 return;
}

function fe(a) {
 a = a | 0;
 Pb(a);
 return;
}

function Dd(a) {
 a = a | 0;
 Xd(a);
 return;
}

function gf(a) {
 a = a | 0;
 return a | 0;
}

function lf(a) {
 a = a | 0;
 return 5104;
}

function kf(a) {
 a = a | 0;
 Fa[a & 3]();
}

function sf(a) {
 a = a | 0;
 return 0;
}

function rf(a) {
 a = a | 0;
 return;
}

function pf(a) {
 a = a | 0;
 C = a;
}

function nf(a) {
 a = a | 0;
 i = a;
}

function vf(a) {
 a = a | 0;
 U(2);
}

function $e() {
 return mc(1) | 0;
}

function uf() {
 return i | 0;
}

function tf() {
 return C | 0;
}

function wf() {
 return 0;
}

function xf() {
 U(5);
}

// EMSCRIPTEN_END_FUNCS

 var Aa = [ Ue, Va, Yb, Zb, ob, Ue, Ue, Ue ];
 var Ba = [ le, lb, Wa, Pa ];
 var Ca = [ vf, rf, hf, rf, rf, hf, rf, hf, hf, qe, nc, vf, vf, vf, vf, vf ];
 var Da = [ mf, Ve, pb, mf ];
 var Ea = [ qf, xc, lf, qf ];
 var Fa = [ xf, ib, uc, xf ];
 var Ga = [ Id, cc, Nb, $a ];
 var Ha = [ Le, gc, Xb, qb ];
 return {
  _emscripten_bind_ParticleSystem_getObjectById_1: nd,
  _emscripten_bind_BaseObject_getTransformable_0: Od,
  _emscripten_bind_MagneticField_MagneticField_1: bd,
  _emscripten_bind_MagneticField_getOffset_0: Qd,
  _bitshift64Lshr: Ac,
  _emscripten_bind_Vector_getZ_0: Me,
  _emscripten_bind_ParticleSystem_on_2: yc,
  _emscripten_bind_ParticleSystem_ParticleSystem_1: Zc,
  _emscripten_bind_MagneticField_getForce_0: ce,
  _memcpy: Fb,
  _emscripten_bind_Particle_getLifeTime_0: pe,
  _emscripten_bind_ParticleSystem_setMaxParticles_1: jd,
  _emscripten_bind_BaseObject___destroy___0: Td,
  ___udivmoddi4: Oa,
  _emscripten_bind_Vector_Vector_3: Sc,
  _emscripten_bind_Vector_set_3: qd,
  _emscripten_bind_ParticleSystem_getEmitter_1: sd,
  _emscripten_bind_Particle_getAcceleration_0: Zd,
  ___cxa_can_catch: fc,
  _free: Ka,
  _emscripten_bind_Vector_withinSphere_2: gd,
  _emscripten_bind_Vector_getX_0: Oe,
  _main: wf,
  _emscripten_bind_BaseObject_getType_0: ue,
  _emscripten_bind_MagneticField_setForce_1: Fd,
  _emscripten_bind_ParticleSystem_addEmitter_1: td,
  _emscripten_bind_Vector_getY_0: Ne,
  _emscripten_bind_Particle_getDof_0: Fe,
  _emscripten_bind_ParticleSystem_step_1: Md,
  _emscripten_bind_ParticleEmitter_getSpread_0: Ud,
  _emscripten_bind_ParticleEmitter_setVelocity_1: ud,
  _emscripten_bind_EventHandler_EventHandler_0: $e,
  ___cxa_is_pointer_type: Xc,
  _emscripten_bind_EmString_c_str_0: Kc,
  _emscripten_bind_ParticleEmitter_getOffset_0: ae,
  _emscripten_bind_ParticleEmitter_setCharge_1: yd,
  _emscripten_bind_ParticleSystem___destroy___0: _c,
  _emscripten_bind_MagneticField_setTransformable_1: ad,
  _emscripten_bind_BaseObject_getSelectable_0: Yd,
  _emscripten_bind_ParticleEmitter_setOffset_3: Qc,
  _emscripten_bind_Particle___destroy___0: Td,
  _emscripten_bind_ParticleSystem_destroy_0: fe,
  _emscripten_bind_BaseObject_setPosition_3: Rc,
  _emscripten_bind_ParticleEmitter_setEmissionRate_1: kd,
  _emscripten_bind_ParticleEmitter_setSelectable_1: wd,
  _emscripten_bind_ParticleEmitter_ParticleEmitter_1: Yc,
  _emscripten_bind_ParticleEmitter___destroy___0: Td,
  _emscripten_bind_MagneticField_getPosition_0: Ld,
  _emscripten_bind_ParticleEmitter_getCharge_0: Wd,
  _emscripten_bind_MagneticField___destroy___0: Td,
  _emscripten_bind_Vector_magnitude_0: ye,
  _emscripten_bind_EmString___destroy___0: Hc,
  _emscripten_bind_ParticleSystem_initParticleLoop_0: Dd,
  _emscripten_bind_ParticleEmitter_setTransformable_1: od,
  ___muldsi3: ec,
  _emscripten_bind_Particle_getRecycled_0: ne,
  _emscripten_bind_VoidPtr___destroy___0: Td,
  _memset: Ob,
  _emscripten_bind_Particle_getRadius_0: we,
  _emscripten_bind_BaseObject_getId_0: ze,
  _emscripten_bind_BaseObject_setSelectable_1: wd,
  _emscripten_bind_EmString_EmString_0: Tc,
  _emscripten_bind_EmString_EmString_1: lc,
  _i64Subtract: Dc,
  _emscripten_bind_ParticleSystem_addMagneticField_1: ed,
  _emscripten_bind_Particle_Particle_0: Pd,
  _emscripten_bind_Particle_getVelocity_0: me,
  _emscripten_bind_Particle_setLifeTime_1: Kd,
  _emscripten_bind_ParticleSystem_getMagneticField_1: dd,
  _emscripten_bind_ParticleEmitter_getVelocity_0: ce,
  _malloc: Ia,
  _emscripten_bind_EventHandler___destroy___0: Td,
  _emscripten_bind_ParticleEmitter_getEmissionRate_0: Cd,
  _emscripten_bind_BaseObject_setTransformable_1: od,
  _emscripten_bind_Particle_getPosition_0: oe,
  _emscripten_bind_ParticleEmitter_setPosition_3: Rc,
  ___udivdi3: zd,
  _emscripten_bind_EventHandler_handleEvent_1: Ec,
  _emscripten_bind_Vector___destroy___0: Td,
  _bitshift64Shl: wc,
  _emscripten_bind_MagneticField_setOffset_3: Lc,
  _emscripten_bind_ParticleSystem_nextParticle_0: Nd,
  ___muldi3: oc,
  _emscripten_bind_ParticleEmitter_setSpread_1: xd,
  ___uremdi3: jc,
  _emscripten_bind_ParticleSystem_setDof_3: Vc,
  _i64Add: Ic,
  _pthread_self: wf,
  _emscripten_bind_BaseObject_BaseObject_2: Uc,
  _emscripten_bind_ParticleEmitter_getPosition_0: Vd,
  _emscripten_bind_ParticleSystem_getMaxParticles_0: Ed,
  _emscripten_bind_MagneticField_setPosition_3: Jc,
  _memmove: dc,
  _emscripten_bind_MagneticField_setSelectable_1: ld,
  runPostSets: Cc,
  stackAlloc: pd,
  stackSave: uf,
  stackRestore: nf,
  establishStackSpace: Ie,
  setThrew: Sd,
  setTempRet0: pf,
  getTempRet0: tf,
  dynCall_iiii: $c,
  dynCall_viiiii: Gc,
  dynCall_vi: Pe,
  dynCall_vii: $d,
  dynCall_ii: Ce,
  dynCall_v: kf,
  dynCall_viiiiii: vc,
  dynCall_viiii: Pc
 };
})


;