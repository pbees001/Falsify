!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){t.exports=n(9)},function(t,e){function n(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)}))}}},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ZeusAdapter",{enumerable:!0,get:function(){return r.ZeusAdapter}});var r=n(10);Object.entries||(Object.entries=function(t){for(var e=Object.keys(t),n=e.length,r=new Array(n);n--;)r[n]=[e[n],t[e[n]]];return r})},,function(t,e,n){t.exports=n(34)},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new A(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=j(i,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?m:f,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",p="executing",m="completed",h={};function y(){}function v(){}function g(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(I([])));x&&x!==n&&r.call(x,a)&&(b=x);var k=g.prototype=y.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,a,i,u){var c=l(t[o],t,a);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,u)}))}u(c.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function I(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:L}}function L(){return{value:e,done:!0}}return v.prototype=k.constructor=g,g.constructor=v,v.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[i]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new O(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(k),c(k,u,"Generator"),k[a]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";var r=n(3);Object.defineProperty(e,"__esModule",{value:!0}),e.ZeusAdapter=void 0;var o=r(n(0)),a=r(n(11)),i=r(n(1)),u=r(n(2)),c=r(n(17)),s=r(n(18)),l=r(n(19)),d=r(n(20)),f=r(n(21)),p=n(22),m=n(23),h=n(27),y=new WeakMap,v=new WeakMap,g=new WeakMap,b=new WeakMap,w=new WeakMap,x=new WeakMap,k=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,c.default)(this,t),y.set(this,{writable:!0,value:void 0}),v.set(this,{writable:!0,value:!1}),g.set(this,{writable:!0,value:function(){return new Promise(function(){var e=(0,u.default)(i.default.mark((function e(n){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.hasOwnProperty("zeus")&&window.zeus){e.next=5;break}return e.next=3,(0,h.delay)(t.WaitQueueDelay);case 3:e.next=0;break;case 5:return e.abrupt("return",n(window.zeus));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),b.set(this,{writable:!0,value:function(){Object.entries(m.ZeusHooks).forEach((function(t){var n=(0,a.default)(t,2),r=n[0],o=n[1];if((0,d.default)(e,y).hasOwnProperty(r)){var i=(0,d.default)(e,y)[r];o(e,(function(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=(0,d.default)(e,x)).call.apply(t,[e,i].concat(r))}))}}))}}),w.set(this,{writable:!0,value:function(){Object.entries(p.ZeusCommands).forEach((function(t){var n=(0,a.default)(t,2),r=n[0],o=n[1];e[r]=function(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=(0,d.default)(e,x)).call.apply(t,[e,o].concat(r))}}))}}),x.set(this,{writable:!0,value:function(){var t=(0,u.default)(i.default.mark((function t(n){var r,a,u,c,s,l=arguments;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,d.default)(e,v)){t.next=2;break}throw new Error("Zeus is not connected. Either Zeus did not initialize or you may have forgotten to call `adapter.connect()`");case 2:if(!(n instanceof Promise)){t.next=4;break}return t.abrupt("return",n);case 4:if("function"===typeof n){t.next=8;break}throw r="[ZeusAdapter] Hook callback must be a function. Instead received [".concat((0,o.default)(n),"]."),console.warn(r),new Error(r);case 8:for(a=l.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=l[c];if((s=n.apply(void 0,u))instanceof Promise){t.next=13;break}return console.warn("[ZeusAdapter] Hook callback must return a Promise. Instead received [".concat((0,o.default)(s),"]. Please verify any callbacks supplied to the ZeusAdapter constructor return a Promise.")),t.abrupt("return",Promise.resolve().then(s));case 13:return t.abrupt("return",s);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),(0,f.default)(this,y,n),(0,d.default)(this,w).call(this)}return(0,s.default)(t,[{key:"connect",value:function(){var e=this;return Promise.race([(0,d.default)(this,g).call(this).then((function(){return(0,f.default)(e,v,!0)})).then((0,d.default)(this,b)),(0,h.timeout)("Timeout waiting to connect to Zeus.",t.ZeusWaitTimeout)])}}]),t}();e.ZeusAdapter=k,(0,l.default)(k,"WaitQueueDelay",50),(0,l.default)(k,"ZeusWaitTimeout",1e4)},function(t,e,n){var r=n(12),o=n(13),a=n(14),i=n(16);t.exports=function(t,e){return r(t)||o(t,e)||a(t,e)||i()}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}},function(t,e,n){var r=n(15);t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t,e){var n=e.get(t);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(t):n.value}},function(t,e){t.exports=function(t,e,n){var r=e.get(t);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(t,n);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=n}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ZeusCommands=void 0;var r={};e.ZeusCommands=r,Object.freeze(r)},function(t,e,n){"use strict";var r=n(3);Object.defineProperty(e,"__esModule",{value:!0}),e.ZeusHooks=void 0;var o=r(n(24)),a={onInitialize:function(t,e){return e(t)},onZeusAdRegistered:function(t,e){window.zeus.on("NODE_CONNECTED",(function(n){return e(t,n.id)})),Array.isArray(window.zeus.adNodes)&&window.zeus.adNodes.forEach((function(n){e(t,n.id)}))},onBiddingStart:function(t,e){var n=(0,o.default)();window.zeus.emit("REGISTER_CUSTOM_BIDDER",{adapterId:n}),window.zeus.on("CUSTOM_BIDDING_START",(function(r){Promise.resolve().then((function(){return e(t,r)})).then((function(){return window.zeus.emit("CUSTOM_BIDDING_FINISHED",{adapterId:n,success:!0})})).catch((function(t){window.zeus.emit("CUSTOM_BIDDING_FINISHED",{adapterId:n,error:t,success:!1})}))}))}};e.ZeusHooks=a,Object.freeze(a)},function(t,e,n){var r=n(25),o=n(26);t.exports=function(t,e,n){var a=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var i=(t=t||{}).random||(t.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e)for(var u=0;u<16;++u)e[a+u]=i[u];return e||o(i)}},function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);t.exports=function(){return n(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),o[e]=t>>>((3&e)<<3)&255;return o}}},function(t,e){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);t.exports=function(t,e){var r=e||0,o=n;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.timeout=e.delay=void 0;e.delay=function(t){return new Promise((function(e){return setTimeout(e,t)}))};e.timeout=function(t,e){return new Promise((function(n,r){return setTimeout((function(){return r(new Error(t))}),e)}))}},,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(2),i=n.n(a),u=n(6),c=function(t){var e=function(t,e){window.apstag._Q.push([t,e])};return window.apstag||(window.apstag={init:function(){e("i",arguments)},fetchBids:function(){e("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]}),window.apstag.init({pubID:"2087fad3-d4b9-44a7-80e1-723bda97cca5",adServer:"googletag",bidTimeout:1e3}),Promise.resolve()},s=function(t,e){return new Promise((function(t,n){if(window.apstag&&window.googletag&&e.length){var r=e.map((function(t){var e=document.getElementById(t);return{slotID:t,sizes:e.zeus.currentSizes,slotName:e.adUnitPath}}));try{window.apstag.fetchBids({slots:r,timeout:1e3},(function(){window.googletag.cmd.push((function(){var e=r.map((function(t){return t.slotID}));window.apstag.setDisplayBids(e),t()}))}))}catch(o){n(o)}}else e.length>0?t():n("Required ad scripts not found on the page")}))};function l(){return(l=i()(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new u.ZeusAdapter({onInitialize:c,onBiddingStart:s}),t.prev=1,t.next=4,e.connect();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error("An error occured calling ZeusAdapter.connect(): ",t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}var d=function(t,e){var n=document.querySelector("[data-ad-placement-id=".concat(t,"]")),r=document.createElement("div"),o=n.querySelector(".Placement-placeholder");r.innerHTML=e,r.className="Placement",n.appendChild(r),o.classList.remove("is-visible"),o.classList.add("is-hidden")},f=function(){var t={"header-1":"header-1","side-1":"side-1","side-2":"side-2","side-3":"side-3","home-1":"home-1","list-1":"list-1","list-2":"list-2","list-3":"list-3","post-body-1":"post-body-1","post-body-2":"post-body-2","post-body-3":"post-body-3","post-body-4":"post-body-4","post-body-5":"post-body-5","post-featured-1":"post-featured-1","rating-1":"rating-1","claim-1":"claim-1","post-footer-1":"post-footer-1","footer-1":"footer-1","sticky-1":"sticky-1"};return-1!==window.location.search.indexOf("collection-id=")&&delete t.sticky,t},p={targetedPlacements:Object.keys(f()),ads:f()},m={zeus:{name:"zeus",type:"main",async:!1,priority:30,domFallback:!1,settings:p,isActive:function(){return!0},getActiveAds:function(t){var e=[];for(var n in t)e.push(t[n]);return e},injectHead:function(t){},injectAd:function(t){if(!Object.keys(p.ads).includes(t))return"";if("sticky-1"===t){var e=document.createElement("div"),n=document.querySelector("[data-ad-placement-id=".concat(t,"]")),r=n.querySelector(".Placement-placeholder");e.className="Placement fixed-bottom",e.innerHTML='<zeus-ad id="zeus_sticky-1" data-adunitpath="/{{gamId}}/{{slotId}}"></zeus-ad>',n.appendChild(e),r.classList.remove("is-visible"),r.classList.add("is-hidden")}else d(p.ads[t],'\n\t\t<zeus-ad id="zeus_'.concat(t,'" data-adunitpath="/{{gamId}}/{{slotId}}"></zeus-ad>\n\t'))},getAdIdByPlacement:function(t){return!!Object.keys(p.ads).includes(t)&&p.ads[t].id}}},h=function(t,e){return t};!function(){l.apply(this,arguments)}();smg.ads.load=function(t){smg.ads.enable&&(smg.ads.available=smg.ads.available||{main:"zeus"},!1!==smg.ads.available.main&&Object.keys(m).includes(smg.ads.available.main)&&(m[smg.ads.available.main].injectHead(smg.ads.placements),m[smg.ads.available.main].injectAd(t),document.dispatchEvent(new CustomEvent("smg.ads.adLoaded",{detail:{placementID:t,adID:m[smg.ads.available.main].getAdIdByPlacement(t)}})),!1!==smg.ads.available.domFallback&&Object.keys(m).includes(smg.ads.available.domFallback)&&(m[smg.ads.available.domFallback].injectHead(smg.ads.placements),m[smg.ads.available.domFallback].injectAd(t),document.dispatchEvent(new CustomEvent("smg.ads.adLoaded",{detail:{placementID:t,adID:m[smg.ads.available.domFallback].getAdIdByPlacement(t)}})))))},function(){var t={main:!1,domFallback:!1},e=[];if(smg.ads.enable){document.dispatchEvent(new CustomEvent("smg.ads.preload",{detail:{smgAds:smg.ads}}));var n=0;for(var r in m){var o=m[r];o.isActive()&&"main"===o.type&&(!1===t.main||o.priority>n)&&(t.main=o.name,n=o.priority,o.async&&e.push(t.main),Object.keys(m).includes(o.domFallback)&&(t.domFallback=o.domFallback,m[o.domFallback].async&&e.push(m[o.domFallback].main)))}if(!1!==(t=h(t,m)).main&&(smg.ads.enable=t.main,smg.ads.available=t,m[t.main].injectHead(smg.ads.placements),!1!==t.domFallback&&m[t.domFallback].injectHead(smg.ads.placements),document.dispatchEvent(new CustomEvent("smg.ads.postLoad",{detail:{smgAds:smg.ads}})),e.length>0)){var a=function(){return e.map((function(t){return m[t].asyncAdLoad(smg.ads.placements)}))};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",a):a()}}}()}]);