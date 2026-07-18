"use strict";var o=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var d=o(function(I,l){
var y=require('@stdlib/assert-is-plain-object/dist'),E=require('@stdlib/assert-has-own-property/dist'),h=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,f=require('@stdlib/error-tools-fmtprodmsg/dist');function w(t,r){return y(r)?E(r,"iter")&&(t.iter=r.iter,!h(r.iter))?new TypeError(f('0aZ2t',"iter",r.iter)):null:new TypeError(f('0aZ2V',r));}l.exports=w
});var q=o(function(N,m){
var v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/symbol-iterator/dist'),T=require('@stdlib/constants-float64-max-safe-integer/dist'),j=d();function c(t){var r,e,s,n,i,a,u;if(r={iter:T},arguments.length&&(n=j(r,t),n))throw n;return i=-1,a=0,u=-1,e={},v(e,"next",O),v(e,"return",p),g&&v(e,g,b),e;function O(){return a+=1,s||a>r.iter?{done:!0}:(i<0&&(u+=2),i*=-1,{value:i*u,done:!1})}function p(x){return s=!0,arguments.length?{value:x,done:!0}:{done:!0}}function b(){return c(r)}}m.exports=c
});var A=q();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
