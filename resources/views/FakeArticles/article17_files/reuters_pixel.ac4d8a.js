!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.h="ac4d8a9ebf913fcc39b9",n.cn="reuters_pixel",n(n.s=11)}([function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){"use strict";t.a=n.h.substring(0,6)},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t,n){var r;r=function(e){e.version="1.2.0";var t=function(){for(var e=0,t=new Array(256),n=0;256!=n;++n)e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=n)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1,t[n]=e;return"undefined"!=typeof Int32Array?new Int32Array(t):t}();e.table=t,e.bstr=function(e,n){for(var r=-1^n,i=e.length-1,o=0;o<i;)r=(r=r>>>8^t[255&(r^e.charCodeAt(o++))])>>>8^t[255&(r^e.charCodeAt(o++))];return o===i&&(r=r>>>8^t[255&(r^e.charCodeAt(o))]),-1^r},e.buf=function(e,n){if(e.length>1e4)return function(e,n){for(var r=-1^n,i=e.length-7,o=0;o<i;)r=(r=(r=(r=(r=(r=(r=(r=r>>>8^t[255&(r^e[o++])])>>>8^t[255&(r^e[o++])])>>>8^t[255&(r^e[o++])])>>>8^t[255&(r^e[o++])])>>>8^t[255&(r^e[o++])])>>>8^t[255&(r^e[o++])])>>>8^t[255&(r^e[o++])])>>>8^t[255&(r^e[o++])];for(;o<i+7;)r=r>>>8^t[255&(r^e[o++])];return-1^r}(e,n);for(var r=-1^n,i=e.length-3,o=0;o<i;)r=(r=(r=(r=r>>>8^t[255&(r^e[o++])])>>>8^t[255&(r^e[o++])])>>>8^t[255&(r^e[o++])])>>>8^t[255&(r^e[o++])];for(;o<i+3;)r=r>>>8^t[255&(r^e[o++])];return-1^r},e.str=function(e,n){for(var r,i,o=-1^n,s=0,a=e.length;s<a;)(r=e.charCodeAt(s++))<128?o=o>>>8^t[255&(o^r)]:r<2048?o=(o=o>>>8^t[255&(o^(192|r>>6&31))])>>>8^t[255&(o^(128|63&r))]:r>=55296&&r<57344?(r=64+(1023&r),i=1023&e.charCodeAt(s++),o=(o=(o=(o=o>>>8^t[255&(o^(240|r>>8&7))])>>>8^t[255&(o^(128|r>>2&63))])>>>8^t[255&(o^(128|i>>6&15|(3&r)<<4))])>>>8^t[255&(o^(128|63&i))]):o=(o=(o=o>>>8^t[255&(o^(224|r>>12&15))])>>>8^t[255&(o^(128|r>>6&63))])>>>8^t[255&(o^(128|63&r))];return-1^o}},"undefined"==typeof DO_NOT_EXPORT_CRC?r(t):r({})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={update:function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),r.hasSupport=e}}};r.update(),t.default=r},function(e,t,n){var r=n(8),i=n(9),o=n(10);e.exports=function(e,t){return r(e)||i(e,t)||o()}},,function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(1),s=n.n(o),a=n(3),c=n.n(a);function u(e){return"[object DOMError]"===Object.prototype.toString.call(e)}function l(e){return"object"===c()(e)&&null!==e}function d(e){return"function"==typeof e}function f(e){return"[object String]"===Object.prototype.toString.call(e)}function h(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):t}function g(e){var t=new Date(e);return t.setHours(0,0,0,0),t}function p(e){var t=e;return t||(t=new Date),t}function m(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t,e.getHours(),e.getMinutes(),e.getSeconds())}function v(){var e=(new Date).getTimezoneOffset()/-60;return"UTC ".concat(0<e?"+":"-").concat(Math.abs(e))}function w(){return"USE_IMAGE_TRANSPORT"in window||(e=navigator.userAgent,!!/(iPhone|iPod|iPad)/i.test(e)&&(/(iPhone|iPod|iPad).*AppleWebKit.*CriOS/i.test(e)||/(iPhone|iPod|iPad).*AppleWebKit.*FxiOS/i.test(e)||/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e)))||!(d(URLSearchParams)&&"sendBeacon"in navigator);var e}function y(e){for(var t,n=new URLSearchParams,r=Object.keys(e),i=0;i<r.length;i+=1)t=r[i],n.append(t,e[t]);return window.chrome&&!w()&&(n=new Blob([n.toString()],{type:"application/x-www-form-urlencoded;charset=UTF-8"})),n}function b(e,t){var n=e+"?"+function(e){if(d(URLSearchParams))return y(e).toString();for(var t=[],n=Object.keys(e),r=0;r<n.length;r+=1){var i=n[r],o=e[i];t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}return t.join("&")}(t),r=new Image(1,1);r.crossOrigin="anonymous",(r.complete||void 0===r.complete)&&(r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),r.src=n}function O(e,t){w()?b(e,t):function(e,t){var n=y(t);navigator.sendBeacon(e,n)}(e,t)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){function t(e){e&&l(e)&&(n=function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?k(t,!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({},n,{},e))}var n={};return t(e),{add:function(e,t){null!=t&&(n[e]=t)},addDict:t,getPayload:function(){return n}}}var I=n(2);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var L=new function(e){var t=this;this.lastError=null,this.log=function(n,r){var i,o,a=P(function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?S(t,!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({url:window.location.href,version:I.a},r));if(o=n,"[object ErrorEvent]"===Object.prototype.toString.call(o)){var c=n.error;a.addDict({type:c&&c.name||"ErrorEvent",message:n.message,source:"".concat(n.filename,":").concat(n.lineno,":").concat(n.colno),stack:c&&c.stack||null})}else if(u(n)||function(e){return"[object DOMException]"===Object.prototype.toString.call(e)}(n)){var l=n.name||(u(n)?"DOMError":"DOMException"),d=n.message?"".concat(l,": ").concat(n.message):l;a.addDict({type:l,message:d})}else if(function(e){switch(Object.prototype.toString.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return e instanceof Error}}(n)){var f=n;a.addDict({type:f.name,message:f.message,source:f.fileName||null,stack:f.stack||null})}else i=n,"[object Object]"===Object.prototype.toString.call(i)?a.addDict(n):a.add("message","".concat(n));try{O(e,a.getPayload())}catch(e){throw t.debug("error logging exception ".concat(e)),e}},this.debug=function(){if(l(console)&&"debug"in console){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];console.debug(JSON.stringify(t))}},this.error=function(e){throw t.lastError!==e&&(t.log(e),t.lastError=e),e}}("//us-central1-octane-216112.cloudfunctions.net/pixel-log");function T(e,t){return i()((function(){var n=t(arguments);return e.apply(this,n)}),e)}var E,j={AddPaymentInfo:!0,AddToCart:!0,AddToWishlist:!0,CompleteRegistration:!0,Contact:!0,CustomizeProduct:!0,Donate:!0,FindLocation:!0,InitiateCheckout:!0,Lead:!0,PageView:!0,Purchase:!0,Schedule:!0,Search:!0,StartTrial:!0,SubmitApplication:!0,Subscribe:!0,ViewContent:!0},A="track",D="trackCustom",C="trackSingle",x="trackSingleCustom";function U(){var e=window.fbq;return e&&e.instance&&e.instance.pixelsByID?Object.keys(e.instance.pixelsByID).filter((function(e){return"231683795448623"!==e})):[]}function M(e,t,n){for(var r=[t,n],i=1;i<e.length;i+=1)r.push(e[i]);return r}function V(e){return e&&(e[0]===A||e[0]===D)}function _(e,t){var n=e;switch(e[0]){case A:n=M(e,C,t);break;case D:n=M(e,x,t)}return L.debug("fbq",e),n}function q(e,t){var n;n=j[e]?C:x,t?window.fbq(n,"231683795448623",e,t):window.fbq(n,"231683795448623",e)}window.fbq?(E=window.fbq,window._fbq=window.fbq=i()((function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];V(t)?function(){for(var e=U(),n=function(n){var r=T(E,(function(){return _(t,e[n])}));r.apply(r,t)},r=0;r<e.length;r+=1)n(r)}():E.apply(E,t)}),E),L.debug("patched existing fbq")):function(){var e=function(){for(var t=function(t){"callMethod"in e?e.callMethod.apply(e,t):e.queue.push(t)},n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];if(V(r)){var o=U();if(o&&o.length)for(var s=0;s<o.length;s+=1)t(_(r,o[s]))}else t(r)};window._fbq=window.fbq=e,e.push=e,e.loaded=!0,e.version="2.0",e.queue=[];var t=document.createElement("script");t.async=!0,t.src="https://connect.facebook.net/en_US/fbevents.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}(),window.fbq("init","231683795448623"),window.fbq(C,"231683795448623","PageView");var N=n(4),H=n.n(N);function R(e,t,n,r,i,o){1<arguments.length&&(document.cookie=[e,"=",t,n?"; expires=".concat(new Date(+new Date+1e3*n).toUTCString()):"",r?"; path= ".concat(r):"",i?"; domain= ".concat(i):"",o?"; secure":""].join(""));var s="; ".concat(document.cookie).split("; ".concat(e,"=")).slice(1);return s?s.map((function(e){return e.split(";")[0]})).join(";"):null}function B(e,t,n){var r=t;this.enabled=function(){try{return void 0===navigator.cookieEnabled?(document.cookie="testcookie=1",-1!==document.cookie.indexOf("testcookie")):navigator.cookieEnabled}catch(e){return!1}},this.setItem=function(t,i){try{if(r)R(t,i,n,e,r);else for(var o=document.location.hostname.split("."),s=o.length-1;0<=s&&(r=o.slice(s).join("."),R(t,i,n,"/",r),!R(t));s-=1);return!0}catch(e){return!1}},this.getItem=function(e){try{return R(e)}catch(e){return null}},this.removeItem=function(e){try{return document.cookie="".concat(e,"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"),!0}catch(e){return!1}}}function J(){var e=this;this.enabled=function(){try{return!!window.localStorage}catch(e){return!0}},this.accessible=function(){var t="testlocalstorage";if(!e.enabled())return!1;try{return window.localStorage.setItem(t,t),window.localStorage.removeItem(t),!0}catch(e){return!1}},this.setItem=function(e,t){try{return window.localStorage.setItem(e,t),!0}catch(e){return!1}},this.getItem=function(e){try{return window.localStorage.getItem(e)}catch(e){return null}},this.removeItem=function(e){try{return window.localStorage.removeItem(e),!0}catch(e){return!1}}}function W(){var e=this;this.enabled=function(){try{return!!window.sessionStorage}catch(e){return!0}},this.accessible=function(){var t="testsessionstorage";if(!e.enabled())return!1;try{return window.sessionStorage.setItem(t,t),window.sessionStorage.removeItem(t),!0}catch(e){return!1}},this.setItem=function(e,t){try{return window.sessionStorage.setItem(e,t),!0}catch(e){return!1}},this.getItem=function(e){try{return window.sessionStorage.getItem(e)}catch(e){return null}},this.removeItem=function(e){try{return window.sessionStorage.removeItem(e),!0}catch(e){return!1}}}function z(e){this.setItem=function(t,n){for(var r,i=0,o=0;o<e.length;o+=1)if((r=e[o]).enabled()){r.setItem(t,n)&&(i+=1)}return 0<i},this.getItem=function(t){for(var n,r=0;r<e.length;r+=1)if((n=e[r]).enabled()){var i=n.getItem(t);if(i)return i}return null},this.removeItem=function(t){for(var n,r=0,i=0;i<e.length;i+=1)if((n=e[i]).enabled()){n.removeItem(t)&&(r+=1)}return r===e.length}}function F(e,t,n,r){function i(t){return"".concat(e,".").concat(t)}var o=new z([new B(t,n,r),new J]);this.setItem=function(e,t){return o.setItem(i(e),t)},this.getItem=function(e){return o.getItem(i(e))},this.removeItem=function(e){return o.removeItem(i(e))}}for(var G=new W,K=new J,Q=[],X=0;256>X;X+=1)Q[X]=(16>X?"0":"")+X.toString(16);var Y=window.crypto||window.msCrypto,Z=void 0!==Y&&void 0!==Y.getRandomValues&&"function"==typeof Y.getRandomValues?function(){var e=new Uint8Array(16);return Y.getRandomValues(e),e}:function(){for(var e=new Uint8Array(16),t=0;16>t;t+=1)e[t]=(n=0,r=255,n=Math.ceil(n),r=Math.floor(r),Math.floor(Math.random()*(r-n))+n);var n,r;return e};function $(){var e=Z();return e[6]=64|15&e[6],e[8]=128|63&e[8],Q[e[0]]+Q[e[1]]+Q[e[2]]+Q[e[3]]+"-"+Q[e[4]]+Q[e[5]]+"-"+Q[e[6]]+Q[e[7]]+"-"+Q[e[8]]+Q[e[9]]+"-"+Q[e[10]]+Q[e[11]]+Q[e[12]]+Q[e[13]]+Q[e[14]]+Q[e[15]]}var ee=new function(){var e=this,t="ta-octane.session",n=function(e){for(var t,n=window.location.search.substring(1).split("&"),r=n.length,i=0;i<r;i+=1)if(t=n[i].split("="),decodeURIComponent(t[0])===e)return decodeURIComponent(t[1]);return""}("utm_campaign");this.cookie=null,this.getId=function(){return e.cookie.load().sessionId},this.setId=function(t){return e.cookie.setSessionId(t)},this.lastActive=function(){return+e.cookie.load().lastActive||0},this.setLastActive=function(t){return e.cookie.setLastActive(t)},this.lastUTMCampaign=function(){return e.cookie.load().lastUTMCampaign},this.setLastUTMCampaign=function(t){return e.cookie.setLastUTMCampaign(t)},this.expired=function(){return Date.now()-e.lastActive()>18e5},this.sessions=[],this.addSession=function(n){e.sessions||(e.sessions=[]);var r,i=g(p(n)).getTime(),o=!1;for(r=0;r<e.sessions.length;r+=1){if(e.sessions[r].dateTs===i){o=!0;break}}o?e.sessions[r].count+=1:e.sessions.push({dateTs:i,count:1}),G.setItem(t,JSON.stringify(e.sessions))},this.count=function(t){var n=p(),r=new Date(0);"number"==typeof t&&(r=m(n,t));for(var i,o=0,s=0;s<e.sessions.length;s+=1)(i=e.sessions[s]).dateTs>=r.getTime()&&i.dateTs<=n.getTime()&&(o+=i.count);return o},this.update=function(){(e.expired()||""!==n&&n!==e.lastUTMCampaign())&&(e.setId($()),e.addSession()),(e.expired()||""!==n)&&e.setLastUTMCampaign(n),e.setLastActive(Date.now())},this.init=function(n){e.cookie=n;var r=G.getItem(t);try{e.sessions=JSON.parse(r)}catch(t){e.sessions=[]}return e.getId()||(e.setId($()),e.addSession()),e.sessions||e.addSession(),e}};function te(){var e=document,t=e.body,n=e.documentElement;return Math.max(t.scrollHeight,n.scrollHeight,t.offsetHeight,n.offsetHeight,t.clientHeight,n.clientHeight)}function ne(){var e=document;return window.innerHeight||(e.documentElement||e.body).clientHeight}function re(){return te()>ne()?te()-ne():0}function ie(e){var t=e||re();return 0===t?1:(window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop)/t}function oe(e){return 100*(ie(e)+ne()/te())}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ae=["www.google.com"],ce=["fb.me","facebook.com","ia.facebook.com","l.facebook.com","lm.facebook.com","m.facebook.com","www.facebook.com"],ue=["t.co"],le=864e5;function de(e,t){var n,r=!1;for(n=0;n<e.length;n+=1)if(t(e[n])){r=!0;break}return r?n:-1}function fe(e){function t(e){if(""===e)return"direct";var t,n,r=(t=e,n=document.createElement("a"),n.href=t,n).hostname;return-1===ae.indexOf(r)?-1===ce.indexOf(r)?-1===ue.indexOf(r)?"other":"twitter":"facebook":"google"}return{id:e,url:null,source:null,sessionDepth:0,totalEvents:0,linkClicks:[],linkClicks7d:0,linkClicksLifetime:0,pageViews:[],pageViews7d:0,pageViews15d:0,pageViews30d:0,lastHit:null,sessionId:null,sessionDuration:0,totalDuration:0,appendLinkClicks:function(e){var t=g(e).getTime(),n=de(this.linkClicks,(function(e){return e.dateTs===t}));-1===n?this.linkClicks.push({dateTs:t,count:1}):this.linkClicks[n].count+=1},sumLinkClicks:function(e,t){for(var n,r=null==t?0:g(m(e,t+1)).getTime(),i=g(e).getTime(),o=0,s=0;s<this.linkClicks.length;s+=1)(n=this.linkClicks[s]).dateTs>=r&&n.dateTs<=i&&(o+=n.count);return o},appendPageViews:function(e){var t=g(e).getTime(),n=de(this.pageViews,(function(e){return e.dateTs===t}));-1===n?this.pageViews.push({dateTs:t,count:1}):this.pageViews[n].count+=1},sumPageViews:function(e,t){for(var n,r=null==t?0:g(m(e,t+1)).getTime(),i=g(e).getTime(),o=0,s=0;s<this.pageViews.length;s+=1)(n=this.pageViews[s]).dateTs>=r&&n.dateTs<=i&&(o+=n.count);return o},updateCommon:function(e,t){var n=p(t).getTime();this.lastHit||(this.lastHit=n);var r=(n-this.lastHit)/1e3;this.totalEvents+=1,this.totalDuration+=r,this.sessionDuration=this.sessionId===e?this.sessionDuration+r:0,this.sessionId=e,this.lastHit=n},addLinkClick:function(e,t){var n=p(t);this.appendLinkClicks(n),this.linkClicks7d=this.sumLinkClicks(n,-7),this.linkClicksLifetime=this.sumLinkClicks(n),this.updateCommon(e,t)},addPageView:function(e,n,r,i,o){var s=p(o);this.id=n,this.url=r,this.source=t(i),this.sessionId===e?this.sessionDepth+=1:this.sessionDepth=1,this.appendPageViews(s),this.pageViews7d=this.sumPageViews(s,-7),this.pageViews15d=this.sumPageViews(s,-15),this.pageViews30d=this.sumPageViews(s,-30),this.updateCommon(e,o)}}}var he=(new function(){var e=this,t="ta-octane.metric";this.metrics=[],this.sessionDepth=0,this.sessionDuration=0,this.daysSinceLastSession=0,this.sessionsLast1Day=0,this.sessionsLast7Days=0,this.sessionsLast30Days=0,this.sessionsLifetime=0,this.linkClicksLifetime=0,this.isNewUser=0,this.loggedIn=0,this.viewPercentage=0,this.avgTimeOnPage=0,this.firstPurchaseTs=0,this.prePurchaseJourneyLength=0,this.uniqueJourneyLength=0,this.setIsNewUser=function(t){e.isNewUser=t?1:0},this.setLoggedIn=function(t){e.loggedIn=t?1:0},this.migrate=function(){for(var t,n=[],r=0;r<e.metrics.length;r+=1)t=e.metrics[r],c()(t)instanceof fe&&t.id&&n.push(t);return e.metrics=n,e.save(),e},this.load=function(){var n=K.getItem(t);try{var r=JSON.parse(n),o=r.firstPurchaseTs,s=r.prePurchaseJourneyLength,a=r.metrics;e.firstPurchaseTs=o||0,e.prePurchaseJourneyLength=s||0;for(var c,u=0;u<a.length;u+=1)c=i()(new fe,a[u]),e.metrics.push(c)}catch(t){e.metrics=[]}return e.metrics||(e.metrics=[]),e},this.save=function(){K.setItem(t,JSON.stringify(e))},this.find=function(t){var n=de(e.metrics,(function(e){return e.id===t}));return-1===n&&(e.metrics.push(new fe(t)),n=e.metrics.length-1),e.metrics[n]},this.aggregate=function(t,n){for(var r,i=e.find(n)||new fe(n),o=new Date,s=0,a=0,c=0,u=0,l=0,d=0;d<e.metrics.length;d+=1)c+=(r=e.metrics[d]).linkClicksLifetime,u+=r.totalDuration,l+=r.sumPageViews(o),r.sessionId===t&&(s+=r.sessionDepth,a+=r.sessionDuration);return e.sessionDepth=s,e.sessionDuration=a,e.linkClicksLifetime=c,e.daysSinceLastSession=(f=new Date(i.lastHit),h=new Date,p=Math.abs(g(h).getTime()-g(f).getTime()),Math.ceil(p/le)),e.sessionsLast1Day=ee.count(-1),e.sessionsLast7Days=ee.count(-7),e.sessionsLast30Days=ee.count(-30),e.sessionsLifetime=ee.count(),e.viewPercentage=oe()/100,e.avgTimeOnPage=l?u/l:0,e.uniqueJourneyLength=e.metrics.length,i;var f,h,p},this.getMetric=function(t,n){var r=e.aggregate(t,n);return{s:r.source,te:r.totalEvents,lc7:r.linkClicks7d,pv7:r.pageViews7d,pv15:r.pageViews15d,pv30:r.pageViews30d,sd:e.sessionDepth,dur:e.sessionDuration,ls:e.daysSinceLastSession,s1:e.sessionsLast1Day,dv7:e.sessionsLast7Days,dv30:e.sessionsLast30Days,dv:e.sessionsLifetime,n:e.isNewUser,l:e.loggedIn,pp:e.viewPercentage,top:e.avgTimeOnPage,lc:e.linkClicksLifetime,ujl:e.uniqueJourneyLength,ppjl:e.prePurchaseJourneyLength}},this.isEngagedUser=function(){if(!(0<e.sessionsLast30Days))return!1;var t=!1,n=p(),r=m(n,-30),i=m(n,-90);try{for(var o,s=0;s<e.metrics.length;s+=1){if(0<(o=e.metrics[s]).sumPageViews(r,-60))return!1;!t&&0<o.sumPageViews(i,-90)&&(t=!0)}}catch(e){L.log(e)}return t},this.onLinkClick=function(t,n,r,i){var o=p(i);e.find(n).addLinkClick(t,o),!e.firstPurchaseTs&&r&&(e.prePurchaseJourneyLength+=1,e.firstPurchaseTs=o.getTime()),e.aggregate(t,n),e.save()},this.onPageView=function(t,n,r,i,o){e.find(n).addPageView(t,n,r,i,o),e.firstPurchaseTs||(e.prePurchaseJourneyLength+=1),e.aggregate(t,n),e.save()}}).load();function ge(e,t,n){var r={content_ids:[(H.a.str(window.location.pathname)>>>0).toString()],content_type:"product",currency:"USD",product_catalog_id:e,value:1};return f(t)&&(r.content_category=t),l(n)&&(r=function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?se(t,!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({},r,{},n)),r}var pe=function(e){function t(){var e=document.querySelector("link[rel=canonical]");if(e)return e.href;var t=function(e){for(var t=["og:type","og:url","og:title","twitter:title"],n=e?t.concat(e):t,r={},i=window.document.querySelectorAll("meta"),o=0;o<i.length;o+=1){var s=i[o],a=s.getAttribute("property")||s.getAttribute("name");if(a&&(a=a.trim().toLowerCase(),!Object.prototype.hasOwnProperty.call(r,a)&&-1!==n.indexOf(a))){var c=s.getAttribute("content")||s.getAttribute("value");c&&(r[a]=c.trim())}}return r}()["og:url"];return t||"".concat(window.location.protocol,"//").concat(window.location.hostname).concat(window.location.pathname)}function n(){var e=t();if(!e)throw Error("The page URL is not found");return H.a.str(e)>>>0}var r=!1;return{pageId:n,pageURL:t,sendOnce:function(i){var o,s,a,c=t();if(!r&&c){var u=(void 0===window.innerWidth?void 0!==document.documentElement&&void 0!==document.documentElement.clientWidth&&0!==document.documentElement.clientWidth?(s=document.documentElement.clientWidth,a=document.documentElement.clientHeight):(s=document.getElementsByTagName("body")[0].clientWidth,a=document.getElementsByTagName("body")[0].clientHeight):(s=window.innerWidth,a=window.innerHeight),{width:s,height:a}),l=u.width,d=u.height,f={width:Math.max(document.documentElement.clientWidth,document.documentElement.offsetWidth,document.documentElement.scrollWidth),height:Math.max(document.documentElement.clientHeight,document.documentElement.offsetHeight,document.documentElement.scrollHeight)},h=f.width,g=f.height,p=n(),m=window.document.referrer,v=ee.getId();e.trackPageView(c,p,m,(o=window.location.search)?o.substring(1):"",l,d,h,g,i),he.onPageView(v,p,c,m),window.addEventListener("beforeunload",(function(){e.trackPageExit(p)}))}r=!0}}};function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ve=pe();function we(e,t){return ge("227623085888646",t||"",function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?me(t,!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({},he.getMetric(ee.getId(),ve.pageId()),{},e))}var ye=n(6),be=n.n(ye);var Oe=new function(){var e=this;this.storage=null,this.userId="",this.sessionId="",this.lastActive=0,this.lastUTMCampaign="",this.load=function(){var t=e.storage.getItem("id");if(t){for(var n=t.split(";"),r=n[0],i=0;i<n.length;i+=1)-1===n[i].indexOf("|")?e.storage.removeItem("id"):r=n[i];var o=r.split("|"),s=be()(o,4),a=s[0],c=s[1],u=s[2],l=s[3];a&&(e.userId=a),c?e.sessionId=c:G.accessible()&&(e.sessionId=G.getItem("sv_id")||""),u?e.lastActive=u:G.accessible()&&(e.lastActive=+G.getItem("sv_last_active")||0),l?e.lastUTMCampaign=l:G.accessible()&&(e.lastUTMCampaign=G.getItem("sv_utm_campaign")||"")}return e},this.save=function(){e.storage.setItem("id","".concat(e.userId,"|").concat(e.sessionId,"|").concat(e.lastActive,"|").concat(e.lastUTMCampaign))},this.setStorage=function(t){e.storage=t},this.setUserId=function(t){e.userId=t,e.save()},this.setSessionId=function(t){e.sessionId=t,e.save()},this.setLastActive=function(t){e.lastActive=t,e.save()},this.setLastUTMCampaign=function(t){e.lastUTMCampaign=t,e.save()}},ke="NEW",Pe="EXISTING";var Ie=new function(){var e=this;this.userId="",this.userType="",this.isNewUser=!1,this.init=function(t){return e.userId=t.load().userId,e.userType=Pe,e.userId||(e.userId=$(),e.userType=ke,e.isNewUser=!0,t.setUserId(e.userId)),e}};var Se=function(e){function t(e){for(var t,n,r=["","webkit","ms","moz"],i=0;i<r.length;i+=1)if(n=r[i],document[h(n,"hidden")]){"prerender"===document[h(n,"visibilityState")]&&(t=!0);break}return t?void window.addEventListener("".concat(n,"visibilitychange"),(function t(){window.removeEventListener("".concat(n,"visibilitychange"),t,!1),e()})):void e()}function n(e){r.setLoggedIn(e),he.setLoggedIn(e)}var r=function(e){function t(t){return d(e)&&e(t),t}var n=P();return{setVersion:function(e){n.add("v",e)},setAppId:function(e){n.add("aid",e)},setUserId:function(e){n.add("uid",e)},setUserType:function(e){n.add("ut",e)},setLoggedIn:function(e){n.add("li",e)},setPlatform:function(e){n.add("p",e)},setTimezone:function(e){n.add("tz",e)},setLang:function(e){n.add("lang",e)},trackPageView:function(e,r,i,o,s,a,c,u,l){var d=P(n.getPayload());return d.addDict(l),d.add("e","pv"),d.add("u",e),d.add("pid",r),d.add("r",i),d.add("q",o),d.add("vw",s),d.add("vh",a),d.add("pw",c),d.add("ph",u),t(d)},trackPageExit:function(e,r){var i=P(n.getPayload());return i.addDict(r),i.add("e","pe"),i.add("pid",e),t(i),!0},trackLinkClick:function(e,r,i,o,s){var a=P(n.getPayload());return a.addDict(s),a.add("e","lc"),a.add("pid",e),a.add("an",r),a.add("at",i),a.add("av",o),t(a)}}}((function(t){O(e.collectorUrl,function(e){return ee.update(),e.add("s",ee.getId()),e}(t).getPayload())}));r.setVersion(e.version),r.setAppId(e.appId),r.setTimezone(function(){try{var e=Intl.DateTimeFormat().resolvedOptions().timeZone;return e&&"etc/unknown"!==e.toLowerCase()?e:v()}catch(e){return v()}}()),r.setLang(window.navigator.language||window.navigator.userLanguage),r.setPlatform("web");var i=pe(r);return Oe.setStorage(new F("ta-octane","/",e.cookieDomain,e.cookieTimeout)),ee.init(Oe),Ie.init(Oe),r.setUserId(Ie.userId),r.setUserType(Ie.userType),he.setIsNewUser(Ie.isNewUser),n(!1),{setLoginStatus:n,trackPageView:function(e){t((function(){i.sendOnce(e)}))},trackLinkClick:function(e,n,o){t((function(){var t=i.pageId(),s=ee.getId();r.trackLinkClick(t,e,n,o),he.onLinkClick(s,t,"initiate_checkout"===n)}))}}};var Le=new function(){var e=this;this.enableTracking=function(){window.addEventListener("error",(function(e){f(e.filename)&&-1===e.filename.indexOf("https://tru.am/scripts/a")||!f(e.message)||(-1===e.message.toLowerCase().indexOf("script error")?L.log(e):L.debug(e))}),!0)},this.wrap=function(t){return d(t)?i()((function(){try{for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.apply(e,r)}catch(e){throw L.error(e),e}}),t):t},this.catch=function(t){for(var n=arguments.length,r=Array(1<n?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return e.wrap(t).apply(e,r)}},Te=Le.catch((function(){return Se({version:I.a,appId:"231683795448623",collectorUrl:"//us-central1-octane-216112.cloudfunctions.net/pixel",cookieDomain:"reuters.com",cookieTimeout:63072e3})})),Ee=n(5),je=n.n(Ee);function Ae(e){return Array.isArray(e)?e:NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e)?Array.prototype.slice.call(e):"object"===c()(e)?[e]:[]}(new function e(t){var n=this;this.children=Ae(t),this.collect=function(t){return new e(Ae(t))},this.isNotEmpty=function(){return n.children&&0<n.children.length},this.then=function(e){for(var t=0;t<n.children.length;t+=1)e(n.children[t]);return n},this.getElementsByClassName=function(t){var r=document.getElementsByClassName(t);return 0<r.length?new e(Array.prototype.slice.call(r)):n},this.hasText=function(t){for(var r=[],i=0;i<n.children.length;i+=1){var o=n.children[i],s=o.textContent&&o.textContent.toLowerCase().trim()||"";(!t||t&&-1<s.indexOf(t))&&r.push(o)}return new e(r)},this.getElementById=function(t){var n=document.getElementById(t);return new e(n?[n]:[])},this.querySelectorAll=function(t){var r=[];if(n.children&&0<n.children.length)for(var i,o=0;o<n.children.length;o+=1)0<(i=n.children[o].querySelectorAll(t)).length&&(r=r.concat(Array.prototype.slice.call(i)));else{var s=document.querySelectorAll(t);0<s.length&&(r=r.concat(Array.prototype.slice.call(s)))}return new e(r)},this.querySelector=function(t){var r=[];if(n.children&&0<n.children.length)for(var i,o=0;o<n.children.length;o+=1)(i=n.children[o].querySelector(t))&&r.push(i);else{var s=document.querySelector(t);s&&r.push(s)}return new e(r)},this.addEventListener=function(e,t){for(var r,i=0;i<n.children.length;i+=1)(r=n.children[i]).removeEventListener(e,t),r.addEventListener(e,t);return n},this.addScrollEventListner=function(e){var t="onwheel"in document.createElement("div")?"wheel":void 0===document.onmousewheel?"DOMMouseScroll":"mousewheel";return je.a.hasSupport?document.addEventListener(t,e,{capture:!1,passive:!0}):document.addEventListener(t,e,!1),je.a.update(),n},this.onReady=function(e){Le.enableTracking(),"complete"===document.readyState?Le.catch(e):window.addEventListener("load",(function(){Le.catch(e)}))}}).onReady((function(){q("ViewContent",we()),Te.trackPageView()}))}]);