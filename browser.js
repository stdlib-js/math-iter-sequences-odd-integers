// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):s.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var O=String.fromCharCode,E=isNaN,S=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,o,a,f,s,l,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",s=1,l=0;l<e.length;l++)if(u(n=e[l]))f+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function P(e){return"string"==typeof e}function V(e){var r,t,n;if(!P(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var F,N=Object.prototype,$=N.toString,C=N.__defineGetter__,B=N.__defineSetter__,R=N.__lookupGetter__,G=N.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,r,t.get),a&&B&&B.call(e,r,t.set),e};var L=F;function Z(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=Object.prototype.hasOwnProperty;function W(e,r){return null!=e&&M.call(e,r)}var U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U&&"symbol"==typeof U("foo")&&W(U,"iterator")&&"symbol"==typeof U.iterator?Symbol.iterator:null,Y=9007199254740991,q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return q&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString,H="function"==typeof U?U.toStringTag:"",J=z()?function(e){var r,t,n;if(null==e)return D.call(e);t=e[H],r=W(e,H);try{e[H]=void 0}catch(r){return D.call(e)}return n=D.call(e),r?e[H]=t:delete e[H],n}:function(e){return D.call(e)},K=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)},Q=/./;function ee(e){return"boolean"==typeof e}var re=Boolean,te=Boolean.prototype.toString,ne=z();function ie(e){return"object"==typeof e&&(e instanceof re||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function oe(e){return ee(e)||ie(e)}function ae(){return new Function("return this;")()}Z(oe,"isPrimitive",ee),Z(oe,"isObject",ie);var ce="object"==typeof self?self:null,ue="object"==typeof window?window:null,fe="object"==typeof globalThis?globalThis:null,se=function(e){if(arguments.length){if(!ee(e))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ae()}if(fe)return fe;if(ce)return ce;if(ue)return ue;throw new Error("unexpected error. Unable to resolve global object.")}(),le=se.document&&se.document.childNodes,pe=Int8Array;function ge(){return/^\s*function\s*([^(]*)/i}var de=/^\s*function\s*([^(]*)/i;function be(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=de.exec(n.toString()))return r[1]}return be(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(ge,"REGEXP",de),Z(be,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!K(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(be));var he="function"==typeof Q||"object"==typeof pe||"function"==typeof le?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ye(e).toLowerCase():r};function ve(e){return"function"===he(e)}var we,me=Object,je=Object.getPrototypeOf;we=ve(Object.getPrototypeOf)?je:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===J(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var _e=we,Oe=Object.prototype;function Ee(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!K(e)}(e)&&(r=function(e){return null==e?null:(e=me(e),_e(e))}(e),!r||!W(e,"constructor")&&W(r,"constructor")&&ve(r.constructor)&&"[object Function]"===J(r.constructor)&&W(r,"isPrototypeOf")&&ve(r.isPrototypeOf)&&(r===Oe||function(e){var r;for(r in e)if(!W(e,r))return!1;return!0}(e)))}function Se(e){return"number"==typeof e}var xe=Number,Te=xe.prototype.toString,ke=z();function Ie(e){return"object"==typeof e&&(e instanceof xe||(ke?function(e){try{return Te.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function Ae(e){return Se(e)||Ie(e)}Z(Ae,"isPrimitive",Se),Z(Ae,"isObject",Ie);var Pe=Number.POSITIVE_INFINITY,Ve=xe.NEGATIVE_INFINITY,Fe=Math.floor;function Ne(e){return e<Pe&&e>Ve&&Fe(r=e)===r;var r}function $e(e){return Se(e)&&Ne(e)}function Ce(e){return Ie(e)&&Ne(e.valueOf())}function Be(e){return $e(e)||Ce(e)}function Re(e){return $e(e)&&e>=0}function Ge(e){return Ce(e)&&e.valueOf()>=0}function Le(e){return Re(e)||Ge(e)}function Ze(e,r){return Ee(r)?W(r,"iter")&&(e.iter=r.iter,!Re(r.iter))?new TypeError(V("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",r.iter)):null:new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",r))}return Z(Be,"isPrimitive",$e),Z(Be,"isObject",Ce),Z(Le,"isPrimitive",Re),Z(Le,"isObject",Ge),function e(r){var t,n,i,o,a,c,u;if(t={iter:Y},arguments.length&&(o=Ze(t,r)))throw o;return a=-1,c=0,u=-1,Z(n={},"next",f),Z(n,"return",s),X&&Z(n,X,l),n;function f(){return c+=1,i||c>t.iter?{done:!0}:(a<0&&(u+=2),{value:(a*=-1)*u,done:!1})}function s(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return e(t)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterOddIntegersSeq=r();
//# sourceMappingURL=browser.js.map
