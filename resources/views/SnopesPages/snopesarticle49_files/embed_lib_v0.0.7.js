(function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:false,exports:{}};e[r].call(i.exports,i,i.exports,n);i.l=true;return i.exports}n.m=e;n.c=t;n.d=function(e,t,r){if(!n.o(e,t))Object.defineProperty(e,t,{enumerable:true,get:r})};n.r=function(e){if("undefined"!==typeof Symbol&&Symbol.toStringTag)Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:true})};n.t=function(e,t){if(1&t)e=n(e);if(8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="//s3.pstatp.com/ies/tiktok_embed/";return n(n.s=1)})({1:function(e,t,n){e.exports=n("da0115c7dd1b08601d31")},"23617503340803072f22":function(e,t,n){"use strict";n.d(t,"c",(function(){return a}));n.d(t,"f",(function(){return u}));n.d(t,"b",(function(){return s}));n.d(t,"a",(function(){return d}));n.d(t,"d",(function(){return v}));n.d(t,"e",(function(){return p}));function r(e,t,n,r,i,o,a){try{var u=e[o](a);var c=u.value}catch(s){n(s);return}if(u.done)t(c);else Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function u(e){r(a,i,o,u,c,"next",e)}function c(e){r(a,i,o,u,c,"throw",e)}u(void 0)}))}}function o(e){"@babel/helpers - typeof";if("function"===typeof Symbol&&"symbol"===typeof Symbol.iterator)o=function e(t){return typeof t};else o=function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return o(e)}function a(){return Math.round(1e17*Math.random())}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];var t=arguments.length>1?arguments[1]:void 0;var n=arguments.length>2?arguments[2]:void 0;if(!e.length||!t)return[];return e.reduce((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];var r=arguments.length>1?arguments[1]:void 0;var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;var o=Math.floor(i/t);if(!e[o])e[o]=[];if(n)e[o].push(r[n]);else e[o].push(r);return e}),[])}function c(e,t){var n=t.type||"GET";var r=t.data;var i=t.success,a=void 0===i?function e(t,n){void 0}:i,u=t.fail,c=void 0===u?function e(t,n){void 0}:u;var s=new XMLHttpRequest;s.onreadystatechange=function(){if(4===Number(s.readyState))if(s.status>=200&&s.status<300||304===s.status)a(s.responseText,s);else c(s.responseText,s)};function f(e){var t=e;var n=[];if("string"===typeof t)t=encodeURI(t);else if("object"===o(t)){Object.keys(t).forEach((function(e){n.push("".concat(e,"=").concat(encodeURIComponent(t[e].toString())))}));t=n.join("&")}return t}if("GET"===n.toUpperCase()){var l="".concat(e,"?").concat(f(r||""));s.open("get",l,true);s.send(null)}else if("POST"===n.toUpperCase()){s.open("post",e,true);s.setRequestHeader("Content-Type","application/x-www-form-urlencoded");s.send(f(r||""))}}function s(e,t){return f.apply(this,arguments)}function f(){f=i(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function e(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(e,r){var i={data:n,success:e,fail:r};c(t,i)})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}";var t={};try{t=JSON.parse(e)}catch(n){t={}}return t})));case 1:case"end":return r.stop()}}),e)})));return f.apply(this,arguments)}function l(){var e="TikTok";var t={};var n=function t(n){return"[".concat(e,"] ").concat(n.toString())};["error","log","info"].forEach((function(e){t[e]=function(t){if("info"===e)void 0;else void 0}}));return t}var d=l();function v(e){var t=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]".concat(t,"=([^&#]*)"));var r=n.exec(location.search);return null===r?"":decodeURIComponent(r[1].replace(/\+/g," "))}function p(){return false||"production"==="dev"}},"40b8419e3e2132ef0a63":function(e){e.exports={name:"tiktok_embed",version:"0.0.7",embedVersion:"0.0.8",description:"TikTok Embed SDK",main:"index.js",scripts:{test:'echo "Error: no test specified" && exit 1',dev:"eden start",build:"eden build","build:gcp":"NODE_REGION=GCP eden build","build:dev":"eden build -a",commit:"eden push",feature:"eden feature",mr:"eden release -m",lint:"eden-lint ./src --fix"},keywords:["tiktok","embed"],author:"yangminghui.jasmine, chloe.chao",license:"ISC",devDependencies:{"@ies/create-eden-config":"^1.0.2","@ies/eden-lint":"^2.15.4"},dependencies:{"core-js":"2.5.7",promise:"^8.0.3","regenerator-runtime":"^0.13.3"},husky:{hooks:{"commit-msg":"commitlint .commitlintrc.js -E HUSKY_GIT_PARAMS","pre-commit":"lint-staged"}},"lint-staged":{"*":["eden lint format","git add"]}}},be8a10cc439bb053807d:function(e,t,n){},da0115c7dd1b08601d31:function(e,t,n){"use strict";n.r(t);var r=n("be8a10cc439bb053807d");var i=n.n(r);var o=n("e0b8897ffbf48a102fbb");var a=n("23617503340803072f22");function u(e,t){return d(e)||l(e,t)||s(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor)n=e.constructor.name;if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}function f(e,t){if(null==t||t>e.length)t=e.length;for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[];var r=true;var i=false;var o=void 0;try{for(var a=e[Symbol.iterator](),u;!(r=(u=a.next()).done);r=true){n.push(u.value);if(t&&n.length===t)break}}catch(c){i=true;o=c}finally{try{if(!r&&null!=a["return"])a["return"]()}finally{if(i)throw o}}return n}function d(e){if(Array.isArray(e))return e}function v(e,t,n,r,i,o,a){try{var u=e[o](a);var c=u.value}catch(s){n(s);return}if(u.done)t(c);else Promise.resolve(c).then(r,i)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){v(o,r,i,a,u,"next",e)}function u(e){v(o,r,i,a,u,"throw",e)}a(void 0)}))}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function b(e,t,n){if(t)h(e.prototype,t);if(n)h(e,n);return e}(function e(t){var n=t;var r=3;var i=function(){function e(){m(this,e)}b(e,[{key:"init",value:function(){var e=p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function e(r){while(1)switch(r.prev=r.next){case 0:n[o["j"]].isEventsInit=true;this.receiveMessage=this.receiveMessage.bind(this);t.addEventListener(o["m"],this.receiveMessage);a["a"].info("\n\nWe're hiring!\nAre you ready to make a change?\nCheck out some of our available positions at https://careers.tiktok.com/");case 4:case"end":return r.stop()}}),e,this)})));return function t(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=p(regeneratorRuntime.mark((function e(t){var n=this;var i,o,u,c,s,f,l;return regeneratorRuntime.wrap((function e(d){while(1)switch(d.prev=d.next){case 0:if(t.length){d.next=2;break}return d.abrupt("return");case 2:i=Object(a["f"])(t,r);o=true;u=false;c=void 0;d.prev=6;s=i[Symbol.iterator]();case 8:if(o=(f=s.next()).done){d.next=15;break}l=f.value;d.next=12;return Promise.all(l.map(function(){var e=p(regeneratorRuntime.mark((function e(t){var r,i,o;return regeneratorRuntime.wrap((function e(u){while(1)switch(u.prev=u.next){case 0:r=t.dataset.videoId,i=void 0===r?null:r;o="v".concat(Object(a["c"])());t.id=o;u.next=5;return n.setDOM({domId:o,videoId:i});case 5:case"end":return u.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 12:o=true;d.next=8;break;case 15:d.next=21;break;case 17:d.prev=17;d.t0=d["catch"](6);u=true;c=d.t0;case 21:d.prev=21;d.prev=22;if(!o&&null!=s.return)s.return();case 24:d.prev=24;if(!u){d.next=27;break}throw c;case 27:return d.finish(24);case 28:return d.finish(21);case 29:case"end":return d.stop()}}),e,null,[[6,17,21,29],[22,,24,28]])})));return function t(n){return e.apply(this,arguments)}}()},{key:"setDOM",value:function(){var e=p(regeneratorRuntime.mark((function e(t){var n=this;var r,i;return regeneratorRuntime.wrap((function e(a){while(1)switch(a.prev=a.next){case 0:r=t.domId,i=t.videoId;return a.abrupt("return",new Promise((function(e){var t=document.getElementById(r);var a=document.createDocumentFragment();var u=document.createElement("iframe");u.style.width=0;u.style.height=0;u.style.display="none";u.style.visibility="hidden";u.name=n.genSignalSource(r);var c="".concat(o["n"],"/embed/v2/").concat(i);var s="";if(n.lang)s="?lang=".concat(n.lang);u.src="".concat(c).concat(s);u.onload=function(){n.renderIframe(u);e(r)};a.appendChild(u);t.appendChild(a)})));case 2:case"end":return a.stop()}}),e)})));return function t(n){return e.apply(this,arguments)}}()},{key:"genSignalSource",value:function e(t){return"".concat(o["k"]).concat(t)}},{key:"getSignalId",value:function e(t){var n=new RegExp("".concat(o["k"],"(\\w+)"));var r=n.exec(t)||[],i=u(r,2),a=i[0],c=i[1];return c}},{key:"renderIframe",value:function e(t){var n=t.parentNode.firstElementChild;t.parentNode.removeChild(n);t.style.width="100%";t.style.height="100%";t.style.display="block";t.style.visibility="unset"}},{key:"resizeIframeHeight",value:function e(t,n){if(!t||!n)return false;var r=document.documentElement.clientHeight;var i=n>r;if(i){t.style.height="".concat(n,"px");t.style.maxHeight=""}else{t.style.height="".concat(n,"px");t.style.maxHeight="".concat(n,"px")}}},{key:"receiveMessage",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=t.origin,r=void 0===n?"":n,i=t.data,a=void 0===i?"{}":i;var u=r===o["n"];if(!u)return false;var c={};try{c=JSON.parse(a)}catch(h){c={}}var s=c,f=s.signalSource,l=void 0===f?"":f,d=s.height;var v=-1!==l.indexOf(o["k"]);if(!v)return false;var p=this.getSignalId(l);var m=document.querySelector("#".concat(p," > iframe"));this.resizeIframeHeight(m,d)}},{key:"lang",get:function e(){var t=Object(a["d"])("hl")||Object(a["d"])("lang");var n="";try{n=navigator.language||navigator.userLanguage}catch(r){n=""}return t||n}}]);return e}();var c=new i;n[o["j"]]={lib:c,isEventsInit:false};c.init()})(window)},e0b8897ffbf48a102fbb:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n.d(t,"b",(function(){return u}));n.d(t,"c",(function(){return c}));n.d(t,"e",(function(){return s}));n.d(t,"d",(function(){return f}));n.d(t,"n",(function(){return l}));n.d(t,"h",(function(){return p}));n.d(t,"l",(function(){return m}));n.d(t,"j",(function(){return h}));n.d(t,"i",(function(){return b}));n.d(t,"m",(function(){return y}));n.d(t,"k",(function(){return g}));n.d(t,"f",(function(){return k}));n.d(t,"g",(function(){return w}));var r="production"!=="production";var i=void 0==="GCP";var o=i?"https://s16-u2.tiktokcdn.com":"https://s16.tiktokcdn.com";var a=r?"http://127.0.0.1:4000":"".concat(o,"/tiktok/falcon/embed");var u="ttEmbedLibCSS";var c="ttEmbedLibScript";var s="embed_lib_v";var f=n("40b8419e3e2132ef0a63").version;var l=r?"http://127.0.0.1:3000":"https://www.tiktok.com";var d="https://sf-hs-sg.ibytedtos.com/obj/ies-fe-bee-alisg/bee_prod/biz_7/bee_prod_7_bee_publish_835.json";var v="https://sf16-va.tiktokcdn-in.com/obj/ies-fe-bee-useast2a-giso/bee_prod/biz_7/bee_prod_7_bee_publish_835.json";var p=i?v:d;var m="blockquote";var h="tiktokEmbed";var b="tiktok-embed";var y="message";var g="__tt_embed__";var k="mounting";var w="newmount"}});