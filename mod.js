// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),y="get"in e,p="set"in e,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=Object.prototype.hasOwnProperty;function p(t,r){return null!=t&&y.call(t,r)}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&p(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var j="function"==typeof Symbol?Symbol.toStringTag:"";var m=v()?function(t){var r,e,n;if(null==t)return d.call(t);e=t[j],r=p(t,j);try{t[j]=void 0}catch(r){return d.call(t)}return n=d.call(t),r?t[j]=e:delete t[j],n}:function(t){return d.call(t)};var _=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};var g=/./;function w(t){return"boolean"==typeof t}var O=Boolean.prototype.toString;var h=v();function S(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function P(t){return w(t)||S(t)}function E(){return new Function("return this;")()}a(P,"isPrimitive",w),a(P,"isObject",S);var I="object"==typeof self?self:null,T="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof A?A:null;var B=function(t){if(arguments.length){if(!w(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(I)return I;if(T)return T;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),C=B.document&&B.document.childNodes,F=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;function G(t){return null!==t&&"object"==typeof t}function k(t){var r,e,n,o;if(("Object"===(e=m(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=x.exec(n.toString()))return r[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(V,"REGEXP",x),a(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!_(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(G));var L="function"==typeof g||"object"==typeof F||"function"==typeof C?function(t){return k(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?k(t).toLowerCase():r};function M(t){return"function"===L(t)}var R,U=Object.getPrototypeOf;R=M(Object.getPrototypeOf)?U:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Y=R;var X=Object.prototype;function q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!_(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Y(t))}(t),!r||!p(t,"constructor")&&p(r,"constructor")&&M(r.constructor)&&"[object Function]"===m(r.constructor)&&p(r,"isPrototypeOf")&&M(r.isPrototypeOf)&&(r===X||function(t){var r;for(r in t)if(!p(t,r))return!1;return!0}(t)))}function z(t){return"number"==typeof t}var D=Number,H=D.prototype.toString;var J=v();function K(t){return"object"==typeof t&&(t instanceof D||(J?function(t){try{return H.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function Q(t){return z(t)||K(t)}a(Q,"isPrimitive",z),a(Q,"isObject",K);var W=Number.POSITIVE_INFINITY,Z=D.NEGATIVE_INFINITY,$=Math.floor;function tt(t){return t<W&&t>Z&&$(r=t)===r;var r}function rt(t){return z(t)&&tt(t)}function et(t){return K(t)&&tt(t.valueOf())}function nt(t){return rt(t)||et(t)}function ot(t){return rt(t)&&t>=0}function ut(t){return et(t)&&t.valueOf()>=0}function it(t){return ot(t)||ut(t)}function ct(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function ft(t,r){return q(r)?p(r,"iter")&&(t.iter=r.iter,!ot(r.iter))?new TypeError(ct("0IC35","iter",r.iter)):null:new TypeError(ct("0IC2h",r))}function lt(t){var r,e,n,o,u,i,c;if(r={iter:9007199254740991},arguments.length&&(o=ft(r,t)))throw o;return u=-1,i=0,c=-1,a(e={},"next",f),a(e,"return",l),b&&a(e,b,y),e;function f(){return i+=1,n||i>r.iter?{done:!0}:(u<0&&(c+=2),{value:(u*=-1)*c,done:!1})}function l(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}}function y(){return lt(r)}}a(nt,"isPrimitive",rt),a(nt,"isObject",et),a(it,"isPrimitive",ot),a(it,"isObject",ut);export{lt as default};
//# sourceMappingURL=mod.js.map
