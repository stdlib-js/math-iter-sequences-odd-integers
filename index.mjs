// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var d=r,m=i,a=s.isPrimitive,l=o;var p=t,j=e,u=n,f=function(t,e){return d(e)?m(e,"iter")&&(t.iter=e.iter,!a(e.iter))?new TypeError(l("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",e))};var h=function t(e){var n,r,i,s,o,d,m;if(n={iter:u},arguments.length&&(s=f(n,e)))throw s;return o=-1,d=0,m=-1,p(r={},"next",a),p(r,"return",l),j&&p(r,j,h),r;function a(){return d+=1,i||d>n.iter?{done:!0}:(o<0&&(m+=2),{value:(o*=-1)*m,done:!1})}function l(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function h(){return t(n)}},v=h;export{v as default};
//# sourceMappingURL=index.mjs.map
