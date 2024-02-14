// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,v,"$1e"),i=f.call(i,y,"e"),i=f.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):p.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var x=String.fromCharCode,k=isNaN,T=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,i,a,o,l,p,u,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(s(i=e[u]))l+=i;else{if(r=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=S(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=V.exec(e);i;)(r=e.slice(n,V.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=V.lastIndex,i=V.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function O(e){return"string"==typeof e}function _(e){var r,t;if(!O(e))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var A,C=Object.prototype,R=C.toString,Z=C.__defineGetter__,P=C.__defineSetter__,N=C.__lookupGetter__,W=C.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};var L=A;function G(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&U.call(e,r)}var B="function"==typeof Symbol?Symbol:void 0,M="function"==typeof B&&"symbol"==typeof B("foo")&&X(B,"iterator")&&"symbol"==typeof B.iterator?Symbol.iterator:null,z=9007199254740991;function Y(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var q=Y(),D=Object.prototype.toString,H="function"==typeof B?B.toStringTag:"",J=q&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return D.call(e);t=e[H],r=X(e,H);try{e[H]=void 0}catch(r){return D.call(e)}return i=D.call(e),r?e[H]=t:delete e[H],i}:function(e){return D.call(e)},K=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)},Q=/./;function ee(e){return"boolean"==typeof e}var re=Y();function te(){return re&&"symbol"==typeof Symbol.toStringTag}var ie=Object.prototype.toString,ne="function"==typeof B?B.toStringTag:"",ae=te()?function(e){var r,t,i;if(null==e)return ie.call(e);t=e[ne],r=X(e,ne);try{e[ne]=void 0}catch(r){return ie.call(e)}return i=ie.call(e),r?e[ne]=t:delete e[ne],i}:function(e){return ie.call(e)},oe=Boolean,ce=Boolean.prototype.toString,se=te();function le(e){return"object"==typeof e&&(e instanceof oe||(se?function(e){try{return ce.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ae(e)))}function pe(e){return ee(e)||le(e)}function ue(e){return"number"==typeof e}function fe(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ge(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+fe(n):fe(n)+e,i&&(e="-"+e)),e}G(pe,"isPrimitive",ee),G(pe,"isObject",le);var de=String.prototype.toLowerCase,he=String.prototype.toUpperCase;function be(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ue(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ge(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ge(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===he.call(e.specifier)?he.call(t):de.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function we(e){return"string"==typeof e}var ye=Math.abs,ve=String.prototype.toLowerCase,me=String.prototype.toUpperCase,Ee=String.prototype.replace,Se=/e\+(\d)$/,xe=/e-(\d)$/,ke=/^(\d+)$/,Te=/^(\d+)e/,je=/\.0$/,Ie=/\.0*e/,Ve=/(\..*[^0])0*e/;function $e(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ue(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ye(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ee.call(t,Ve,"$1e"),t=Ee.call(t,Ie,"e"),t=Ee.call(t,je,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ee.call(t,Se,"e+0$1"),t=Ee.call(t,xe,"e-0$1"),e.alternate&&(t=Ee.call(t,ke,"$1."),t=Ee.call(t,Te,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===me.call(e.specifier)?me.call(t):ve.call(t)}function Fe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Oe(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Fe(i):Fe(i)+e}var _e=String.fromCharCode,Ae=isNaN,Ce=Array.isArray;function Re(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ze(e){var r,t,i,n,a,o,c,s,l;if(!Ce(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(we(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Re(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ae(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ae(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=be(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ae(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ae(a)?String(i.arg):_e(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=$e(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ge(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Oe(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Pe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ne(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function We(e){var r,t,i,n;for(t=[],n=0,i=Pe.exec(e);i;)(r=e.slice(n,Pe.lastIndex-i[0].length)).length&&t.push(r),t.push(Ne(i)),n=Pe.lastIndex,i=Pe.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Le(e){return"string"==typeof e}function Ge(e){var r,t;if(!Le(e))throw new TypeError(Ge("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[We(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Ze.apply(null,r)}function Ue(){return new Function("return this;")()}var Xe="object"==typeof self?self:null,Be="object"==typeof window?window:null,Me="object"==typeof globalThis?globalThis:null,ze=function(e){if(arguments.length){if(!ee(e))throw new TypeError(Ge("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ue()}if(Me)return Me;if(Xe)return Xe;if(Be)return Be;throw new Error("unexpected error. Unable to resolve global object.")}(),Ye=ze.document&&ze.document.childNodes,qe=Int8Array,De=Y(),He=Object.prototype.toString,Je="function"==typeof B?B.toStringTag:"",Ke=De&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return He.call(e);t=e[Je],r=X(e,Je);try{e[Je]=void 0}catch(r){return He.call(e)}return i=He.call(e),r?e[Je]=t:delete e[Je],i}:function(e){return He.call(e)};function Qe(){return/^\s*function\s*([^(]*)/i}var er=/^\s*function\s*([^(]*)/i;function rr(e){return"number"==typeof e}function tr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ir(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+tr(n):tr(n)+e,i&&(e="-"+e)),e}G(Qe,"REGEXP",er);var nr=String.prototype.toLowerCase,ar=String.prototype.toUpperCase;function or(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!rr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ir(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ir(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ar.call(e.specifier)?ar.call(t):nr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function cr(e){return"string"==typeof e}var sr=Math.abs,lr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase,ur=String.prototype.replace,fr=/e\+(\d)$/,gr=/e-(\d)$/,dr=/^(\d+)$/,hr=/^(\d+)e/,br=/\.0$/,wr=/\.0*e/,yr=/(\..*[^0])0*e/;function vr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!rr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":sr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ur.call(t,yr,"$1e"),t=ur.call(t,wr,"e"),t=ur.call(t,br,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ur.call(t,fr,"e+0$1"),t=ur.call(t,gr,"e-0$1"),e.alternate&&(t=ur.call(t,dr,"$1."),t=ur.call(t,hr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===pr.call(e.specifier)?pr.call(t):lr.call(t)}function mr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Er(e,r,t){var i=r-e.length;return i<0?e:e=t?e+mr(i):mr(i)+e}var Sr=String.fromCharCode,xr=isNaN,kr=Array.isArray;function Tr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function jr(e){var r,t,i,n,a,o,c,s,l;if(!kr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(cr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Tr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,xr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,xr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=or(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!xr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=xr(a)?String(i.arg):Sr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=vr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ir(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Er(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Vr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $r(e){var r,t,i,n;for(t=[],n=0,i=Ir.exec(e);i;)(r=e.slice(n,Ir.lastIndex-i[0].length)).length&&t.push(r),t.push(Vr(i)),n=Ir.lastIndex,i=Ir.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Fr(e){return"string"==typeof e}function Or(e){var r,t;if(!Fr(e))throw new TypeError(Or("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$r(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return jr.apply(null,r)}function _r(e){return null!==e&&"object"==typeof e}function Ar(e){var r,t,i,n;if(("Object"===(t=Ke(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=er.exec(i.toString()))return r[1]}return _r(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(_r,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Or("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!K(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(_r));var Cr="function"==typeof Q||"object"==typeof qe||"function"==typeof Ye?function(e){return Ar(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Ar(e).toLowerCase():r};function Rr(e){return"function"===Cr(e)}var Zr,Pr=Object,Nr=Object.getPrototypeOf,Wr=Y(),Lr=Object.prototype.toString,Gr="function"==typeof B?B.toStringTag:"",Ur=Wr&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return Lr.call(e);t=e[Gr],r=X(e,Gr);try{e[Gr]=void 0}catch(r){return Lr.call(e)}return i=Lr.call(e),r?e[Gr]=t:delete e[Gr],i}:function(e){return Lr.call(e)};Zr=Rr(Object.getPrototypeOf)?Nr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Ur(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Xr=Zr,Br=Y(),Mr=Object.prototype.toString,zr="function"==typeof B?B.toStringTag:"",Yr=Br&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return Mr.call(e);t=e[zr],r=X(e,zr);try{e[zr]=void 0}catch(r){return Mr.call(e)}return i=Mr.call(e),r?e[zr]=t:delete e[zr],i}:function(e){return Mr.call(e)},qr=Object.prototype;function Dr(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!K(e)}(e)&&(r=function(e){return null==e?null:(e=Pr(e),Xr(e))}(e),!r||!X(e,"constructor")&&X(r,"constructor")&&Rr(r.constructor)&&"[object Function]"===Yr(r.constructor)&&X(r,"isPrototypeOf")&&Rr(r.isPrototypeOf)&&(r===qr||function(e){var r;for(r in e)if(!X(e,r))return!1;return!0}(e)))}function Hr(e){return"number"==typeof e}var Jr=Y();function Kr(){return Jr&&"symbol"==typeof Symbol.toStringTag}var Qr=Object.prototype.toString,et="function"==typeof B?B.toStringTag:"",rt=Kr()?function(e){var r,t,i;if(null==e)return Qr.call(e);t=e[et],r=X(e,et);try{e[et]=void 0}catch(r){return Qr.call(e)}return i=Qr.call(e),r?e[et]=t:delete e[et],i}:function(e){return Qr.call(e)},tt=Number,it=tt.prototype.toString,nt=Kr();function at(e){return"object"==typeof e&&(e instanceof tt||(nt?function(e){try{return it.call(e),!0}catch(e){return!1}}(e):"[object Number]"===rt(e)))}function ot(e){return Hr(e)||at(e)}G(ot,"isPrimitive",Hr),G(ot,"isObject",at);var ct=Number.POSITIVE_INFINITY,st=tt.NEGATIVE_INFINITY,lt=Math.floor;function pt(e){return e<ct&&e>st&&lt(r=e)===r;var r}function ut(e){return Hr(e)&&pt(e)}function ft(e){return at(e)&&pt(e.valueOf())}function gt(e){return ut(e)||ft(e)}function dt(e){return ut(e)&&e>=0}function ht(e){return ft(e)&&e.valueOf()>=0}function bt(e){return dt(e)||ht(e)}function wt(e){return"number"==typeof e}function yt(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function vt(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+yt(n):yt(n)+e,i&&(e="-"+e)),e}G(gt,"isPrimitive",ut),G(gt,"isObject",ft),G(bt,"isPrimitive",dt),G(bt,"isObject",ht);var mt=String.prototype.toLowerCase,Et=String.prototype.toUpperCase;function St(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!wt(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=vt(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=vt(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Et.call(e.specifier)?Et.call(t):mt.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function xt(e){return"string"==typeof e}var kt=Math.abs,Tt=String.prototype.toLowerCase,jt=String.prototype.toUpperCase,It=String.prototype.replace,Vt=/e\+(\d)$/,$t=/e-(\d)$/,Ft=/^(\d+)$/,Ot=/^(\d+)e/,_t=/\.0$/,At=/\.0*e/,Ct=/(\..*[^0])0*e/;function Rt(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!wt(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":kt(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=It.call(t,Ct,"$1e"),t=It.call(t,At,"e"),t=It.call(t,_t,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=It.call(t,Vt,"e+0$1"),t=It.call(t,$t,"e-0$1"),e.alternate&&(t=It.call(t,Ft,"$1."),t=It.call(t,Ot,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===jt.call(e.specifier)?jt.call(t):Tt.call(t)}function Zt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Pt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Zt(i):Zt(i)+e}var Nt=String.fromCharCode,Wt=isNaN,Lt=Array.isArray;function Gt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ut(e){var r,t,i,n,a,o,c,s,l;if(!Lt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(xt(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Gt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Wt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Wt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=St(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Wt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Wt(a)?String(i.arg):Nt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Rt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=vt(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Pt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Xt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Bt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Mt(e){var r,t,i,n;for(t=[],n=0,i=Xt.exec(e);i;)(r=e.slice(n,Xt.lastIndex-i[0].length)).length&&t.push(r),t.push(Bt(i)),n=Xt.lastIndex,i=Xt.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function zt(e){return"string"==typeof e}function Yt(e){var r,t,i;if(!zt(e))throw new TypeError(Yt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Mt(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Ut.apply(null,t)}function qt(e,r){return Dr(r)?X(r,"iter")&&(e.iter=r.iter,!dt(r.iter))?new TypeError(Yt("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",r.iter)):null:new TypeError(Yt("invalid argument. Options argument must be an object. Value: `%s`.",r))}return function e(r){var t,i,n,a,o,c,s;if(t={iter:z},arguments.length&&(a=qt(t,r)))throw a;return o=-1,c=0,s=-1,G(i={},"next",l),G(i,"return",p),M&&G(i,M,u),i;function l(){return c+=1,n||c>t.iter?{done:!0}:(o<0&&(s+=2),{value:(o*=-1)*s,done:!1})}function p(e){return n=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return e(t)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterOddIntegersSeq=r();
//# sourceMappingURL=browser.js.map
