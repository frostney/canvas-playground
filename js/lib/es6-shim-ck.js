(({define:typeof define=="function"?define:function(e){e()}})).define(function(){"use strict";var e=typeof global=="undefined"?window:global,t=e.isFinite,n=function(e){var t=1;for(var n=2;n<=e;n++)t*=n;return t},r=function(e,t,n){e[t]||Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:!0,value:n})},i=function(e,t){Object.keys(t).forEach(function(n){r(e,n,t[n])})};i(String.prototype,{repeat:function(e){return(new Array(e+1)).join(this)},startsWith:function(e){return this.lastIndexOf(e,0)===0},endsWith:function(e){var t=this.length-String(e).length;return t>=0&&this.indexOf(e,t)===t},contains:function(e){return this.indexOf(e)!==-1}});i(Array,{from:function(e){var t=Object(e),n=[];for(var r=0,i=t.length>>>0;r<i;r++)r in t&&(n[r]=t[r]);return n},of:function(){return Array.prototype.slice.call(arguments)}});i(Number,{MAX_INTEGER:9007199254740992,EPSILON:2.220446049250313e-16,parseInt:e.parseInt,parseFloat:e.parseFloat,isFinite:function(e){return typeof e=="number"&&t(e)},isInteger:function(e){return Number.isFinite(e)&&e>=-9007199254740992&&e<=Number.MAX_INTEGER&&Math.floor(e)===e},isNaN:function(e){return Object.is(e,NaN)},toInteger:function(e){var t=+e;return Object.is(t,NaN)?0:t===0||!Number.isFinite(t)?t:Math.sign(t)*Math.floor(Math.abs(t))}});i(Number.prototype,{clz:function(){var e=+this;if(!e||!Number.isFinite(e))return 32;e=e<0?Math.ceil(e):Math.floor(e);e-=Math.floor(e/4294967296)*4294967296;return 32-e.toString(2).length}});i(Object,{getOwnPropertyDescriptors:function(e){var t={};Object.getOwnPropertyNames(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)});return t},getPropertyDescriptor:function(e,t){var n=Object.getOwnPropertyDescriptor(e,t),r=Object.getPrototypeOf(e);while(n===undefined&&r!==null){n=Object.getOwnPropertyDescriptor(r,t);r=Object.getPrototypeOf(r)}return n},getPropertyNames:function(e,t){var n=Object.getOwnPropertyNames(e),r=Object.getPrototypeOf(e),i;while(r!==null){Object.getOwnPropertyNames(r).forEach(function(e){n.indexOf(e)===-1&&n.push(e)});r=Object.getPrototypeOf(r)}return n},is:function(e,t){return e===t?e===0?1/e===1/t:!0:e!==e&&t!==t},isnt:function(e,t){return!Object.is(e,t)}});i(Math,{acosh:function(e){return Math.log(e+Math.sqrt(e*e-1))},asinh:function(e){return Math.log(e+Math.sqrt(e*e+1))},atanh:function(e){return.5*Math.log((1+e)/(1-e))},cosh:function(e){e<0&&(e=-e);return e>21?Math.exp(e)/2:(Math.exp(e)+Math.exp(-e))/2},expm1:function(e){var t=0,r=50;for(var i=1;i<r;i++)t+=Math.pow(e,i)/n(i);return t},hypot:function(e,t){return Math.sqrt(e*e+t*t)||0},log2:function(e){return Math.log(e)*(1/Math.LN2)},log10:function(e){return Math.log(e)*(1/Math.LN10)},log1p:function(e){var t=0,n=50;if(e<=-1)return-Infinity;if(e<0||e>1)return Math.log(1+e);for(var r=1;r<n;r++)r%2===0?t-=Math.pow(e,r)/r:t+=Math.pow(e,r)/r;return t},sign:function(e){var t=+e;return t===0?t:Object.is(t,NaN)?t:t<0?-1:1},sinh:function(e){return(Math.exp(e)-Math.exp(-e))/2},tanh:function(e){return(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))},trunc:function(e){return~~e}});i(e,{Map:function(){function t(){if(!(this instanceof t))return new t;r(this,"keys",[]);r(this,"values",[])}var e=function(e,t){for(var n=0,r=e.length;n<r;n++)if(Object.is(e[n],t))return n;return-1};i(t.prototype,{get:function(t){var n=e(this.keys,t);return n<0?undefined:this.values[n]},has:function(t){return e(this.keys,t)>=0},set:function(t,n){var r=this.keys,i=this.values,s=e(r,t);s<0&&(s=r.length);r[s]=t;i[s]=n},"delete":function(t){var n=this.keys,r=this.values,i=e(n,t);if(i<0)return!1;n.splice(i,1);r.splice(i,1);return!0}});return t}(),Set:function(){function e(){if(!(this instanceof e))return new e;r(this,"map",Map())}i(e.prototype,{has:function(e){return this.map.has(e)},add:function(e){this.map.set(e,!0)},"delete":function(e){return this.map["delete"](e)}});return e}()})});