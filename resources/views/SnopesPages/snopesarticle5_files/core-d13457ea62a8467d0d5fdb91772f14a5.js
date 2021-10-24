!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,n){"use strict";var r=n(3);function s(){}var i=null,u={};function c(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==s&&h(t,this)}function a(t,e){for(;3===t._83;)t=t._18;if(c._47&&c._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);var n,o;n=t,o=e,r(function(){var t=1===n._83?o.onFulfilled:o.onRejected;if(null!==t){var e=function(t,e){try{return t(e)}catch(t){return i=t,u}}(t,n._18);e===u?l(o.promise,i):f(o.promise,e)}else 1===n._83?f(o.promise,n._18):l(o.promise,n._18)})}function f(t,e){if(e===t)return l(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"==typeof e||"function"==typeof e)){var n=function(t){try{return t.then}catch(t){return i=t,u}}(e);if(n===u)return l(t,i);if(n===t.then&&e instanceof c)return t._83=3,t._18=e,void o(t);if("function"==typeof n)return void h(n.bind(e),t)}t._83=1,t._18=e,o(t)}function l(t,e){t._83=2,t._18=e,c._71&&c._71(t,e),o(t)}function o(t){if(1===t._75&&(a(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)a(t,t._38[e]);t._38=null}}function p(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function h(t,e){var n=!1,o=function(t,e,n){try{t(e,n)}catch(t){return i=t,u}}(t,function(t){n||(n=!0,f(e,t))},function(t){n||(n=!0,l(e,t))});n||o!==u||(n=!0,l(e,i))}(t.exports=c)._47=null,c._71=null,c._44=s,c.prototype.then=function(t,e){if(this.constructor!==c)return r=t,i=e,new(o=this).constructor(function(t,e){var n=new c(s);n.then(t,e),a(o,new p(r,i,n))});var o,r,i,n=new c(s);return a(this,new p(t,e,n)),n}},function(t,e){t.exports={validate:function(t){return!!(t.subject&&t.legal_notices&&t.proofs)&&!(!t.subject||(e=t.legal_notices,"[object Array]"!==Object.prototype.toString.call(e)&&0===t.legal_notices.length)||0===t.proofs[0].content.length);var e},browserCheck:function(){var t=navigator.userAgent.toLowerCase();return-1!==t.indexOf("msie")&&parseInt(t.split("msie")[1])},replaceByValue:function(t,e){if(t){for(var n=this.getKeys(t),o=0;o<n.length;o++)t[n[o]]!==e[n[o]]&&void 0!==e[n[o]]&&(t[n[o]]=e[n[o]]),delete e[n[o]];for(var r=this.getKeys(e),i=0;i<r.length;i++)t[r[i]]=e[r[i]];return t}return e},getKeys:function(t){var n=[];return function(t,e){for(var n in t)"length"!==n&&"prototype"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&e(t[n],n,t)}(t,function(t,e){n.push(e)}),n},domObject:function(t){var e="string"==typeof t?document.getElementById(t):t;if(e)return e.jquery?e[0]:e},isOnExcludeList:function(t,e){if(e){if(t.attributes["data-cons-exclude"])return!0;for(var n=0;n<e.length;n++)if(e[n]===t.name)return!0}return!1}}},function(Ua,Va){var Wa;Wa=function(){return this}();try{Wa=Wa||Function("return this")()||eval("this")}catch(t){"object"==typeof window&&(Wa=window)}Ua.exports=Wa},function(p,t,e){"use strict";(function(t){function e(t){o.length||(n(),!0),o[o.length]=t}p.exports=e;var n,o=[],r=0;function i(){for(;r<o.length;){var t=r;if(r+=1,o[t].call(),1024<r){for(var e=0,n=o.length-r;e<n;e++)o[e]=o[e+r];o.length-=r,r=0}}o.length=0,r=0,!1}var s,u,c,a=void 0!==t?t:self,f=a.MutationObserver||a.WebKitMutationObserver;function l(o){return function(){var t=setTimeout(n,0),e=setInterval(n,50);function n(){clearTimeout(t),clearInterval(e),o()}}}"function"==typeof f?(s=1,u=new f(i),c=document.createTextNode(""),u.observe(c,{characterData:!0}),n=function(){s=-s,c.data=s}):n=l(i),e.requestFlush=n,e.makeRequestCallFromTimer=l}).call(t,e(2))},function(t,e,n){var o,r,i,s,u,c,a,f,l=window._iub.cons.Api,p=n(1),h={},d=["input","select"],g={init:function(t,e){return this._config=t,(u=_iub.cons.logger).use(void 0!==this._config.logger?this._config.logger:"console"),u.setLevel(void 0!==this._config.log_level?this._config.log_level:"error"),c=this._config.api_key,(void 0===this._config.sendFromLocalStorageAtLoad||this._config.sendFromLocalStorageAtLoad)&&S(null),"function"==typeof e&&e()},submit:function(t,e){return(e=e||{}).success=e.success||function(){},e.error=e.error||function(){},function(t){{if(this._option=t,a=void 0!==this._option.writeOnLocalStorage&&this._option.writeOnLocalStorage,f=void 0===this._option.autodetect_ip_address||this._option.autodetect_ip_address,this._option.form=this._option.form||{},this._option.form.selector)return i=p.domObject(this._option.form.selector),r=void 0!==this._option.form?this._option.form.map:{},h=void 0!==this._option.form.map?this._option.form.map.exclude:{},o=void 0!==this._option.consent&&this._option.consent,S(_());if(this._option.consent){var e={};return e.preferences=this._option.consent.preferences,e.subject=this._option.consent.subject,e.proofs=this._option.consent.proofs,e.legal_notices=this._option.consent.legal_notices,e.autodetect_ip_address=f,a&&localStorage.setItem("IUB_DATA",JSON.stringify(e)),S(e)}}}(t).success(e.success).error(e.error)},sendData:function(){return _()},sendFromLocalStorage:function(t){return S(t)},load:function(t){var e,n;this._option=t,a=void 0===this._option.writeOnLocalStorage||this._option.writeOnLocalStorage,f=void 0===this._option.autodetect_ip_address||this._option.autodetect_ip_address,this._option.form=this._option.form||{},o=this._option.consent,r=void 0!==this._option.form?this._option.form.map:{},h=void 0!==this._option.form.map?this._option.form.map.exclude:{},this._option.submitElement=this._option.submitElement||{},s=p.domObject(this._option.submitElement),this._option.form.selector&&(i=p.domObject(this._option.form.selector),e=s,i&&function(t){for(var e=t.getElementsByTagName("input"),n=0;n<e.length;n++)e[n].addEventListener?e[n].addEventListener("onkeypress",j,!1):e[n].attachEvent?e[n].attachEvent("onkeypress",j):e[n].onkeypress=j}(i),s&&((n=s).addEventListener?n.addEventListener("click",j,!1):n.attachEvent?n.attachEvent("onclick",j):n.click=j),"function"==typeof e&&e())}};function _(){if(i){var t=i,e={},n={};return e.preferences={},e.subject={},e.legal_notices=[],e.autodetect_ip_address=f,r&&function(t,e,n){for(var o=p.getKeys(e),r=0;r<o.length;r++){var i=p.getKeys(e[o[r]]);t[o[r]]={};for(var s=0;s<i.length;s++)if(n.querySelector("input[name="+E(e[o[r]][i[s]])+"]"))if("radio"!==n.querySelector("input[name="+E(e[o[r]][i[s]])+"]").type)t[o[r]][i[s]]=n.querySelector("input[name="+E(e[o[r]][i[s]])+"]");else{var u=n.querySelectorAll("input[name="+E(e[o[r]][i[s]])+"]");t[o[r]][i[s]]=u}}}(n,r,t),function(t,e){for(var n={},o=0,r=d.length;o<r;o++){var i=e.getElementsByTagName(d[o]);y(n,i)}t.proofs=[{form:e.innerHTML,content:JSON.stringify(n,null,2)}]}(e,t),m(e,n.subject?n.subject:t.querySelectorAll("[data-cons-subject]")),b(e,n.preferences?n.preferences:t.querySelectorAll("[data-cons-preference]")),a?(u.debug("Saving object in local storage"),o&&v(o,e),localStorage.setItem("IUB_DATA",JSON.stringify(e)),o={}):o&&v(o,e),e}return u.error("collect data error: Form required"),!1}function v(t,e){if(t.preferences&&(e.preferences=p.replaceByValue(e.preferences,t.preferences)),t.subject&&(e.subject=p.replaceByValue(e.subject,t.subject)),e.proofs=e.proofs||[],t.proofs)for(var n=0;n<t.proofs.length;n++)e.proofs.push(t.proofs[n]);e.legal_notices=e.legal_notices||[],t.legal_notices&&(e.legal_notices=t.legal_notices)}function y(t,e){for(var n=0,o=e.length;n<o;n++){var r=e[n];p.isOnExcludeList(r,h)||("checkbox"===r.type?t[r.name]=r.checked:"radio"===r.type&&r.checked?t[r.name]=r.value:"checkbox"!==r.type&&"radio"!==r.type&&(t[r.name]=r.value))}}function m(t,e){var n=p.getKeys(e);if(0<n.length&&!x(e))for(var o=0;o<n.length;o++)e[n[o]]&&(t.subject[n[o]]=e[n[o]].value);else for(o=0;o<e.length;o++)t.subject[e[o].getAttribute(["data-cons-subject"])]=e[o].value}function b(t,e){var n=p.getKeys(e);if(0<n.length&&!x(e))for(var o=0;o<n.length;o++)e[n[o]]&&("checkbox"===e[n[o]].type?t.preferences[n[o]]=e[n[o]].checked:x(e[n[o]])?w(t,e[n[o]],n[o]):t.preferences[n[o]]=e[n[o]].value);else for(o=0;o<e.length;o++)"checkbox"===e[o].type?t.preferences[e[o].getAttribute(["data-cons-preference"])]=e[o].checked:"radio"===e[o].type&&e[o].checked?t.preferences[e[o].getAttribute(["data-cons-preference"])]=e[o].value:"radio"!==e[o].type&&(t.preferences[e[o].getAttribute(["data-cons-preference"])]=e[o].value)}function w(t,e,n){for(var o=0,r=e.length;o<r;o++)e[o].checked&&(t.preferences[n]=e[o].value)}function x(t){return NodeList.prototype.isPrototypeOf(t)}function j(t){if(13===t.which||13===t.keyCode||"click"===t.type){var e=t||window.event;e.preventDefault?e.preventDefault():e.returnValue=!1,_(),t.returnValue=!0,i.constructor.prototype.submit.call(i)}}function S(t){var e;if(!1!==t&&(l.init({api_key:c,logger:u}),t?(u.debug("Data ok to send"),e=l.sendData(t)):localStorage.IUB_DATA&&(u.debug("reading IUB_DATA from localStorage"),e=l.sendData(JSON.parse(localStorage.IUB_DATA))),e))return e.success(function(){u.debug("data sent, removing from local storage"),window.localStorage.removeItem("IUB_DATA")}),e.error(function(){u.error("error send data")}),e}function E(t){return t.replace(/[-[\]{}()*+!,&$<=:?.\/\\^$|#\s,]/g,"\\$&")}t.exports=g},function(t,e,n){window._iub||(window._iub={}),window._iub.cons=window._iub.cons||{},window._iub.cons.logger=window._iub.cons.logger||{},window._iub.cons.array=window._iub.cons.array||{},window._iub.cons.console=window._iub.cons.console||{},n(6),n(7),n(8),window._iub.cons.VERSION="0.9.1",window._iub.cons.Api=n(9),window._iub.cons.Dom=n(4),window._iub.cons.init=window._iub.cons.Dom.init,window._iub.cons.submit=window._iub.cons.Dom.submit,window._iub.cons.load=window._iub.cons.Dom.load,window._iub.cons.sendData=window._iub.cons.Dom.sendData,window._iub.cons.sendFromLocalStorage=window._iub.cons.Dom.sendFromLocalStorage,_iub.cons.version=function(){return"0.9.1"},n(20).resolve()},function(t,e){!function(r){"use strict";r.isArray=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},r.wrap=function(t){return null==t?[]:r.isArray(t)?t:[t]},r.indexOf=function(t,e,n){if(Array.prototype.indexOf)return t.indexOf(e);for(var o=-1,r=n=n||0;r<t.length;r++)if(t[r]===e){o=r;break}return o},r.uniq=function(t){for(var e=[],n=0,o=t.length;n<o;n++)-1===r.indexOf(e,t[n])&&""!==t[n]&&e.push(t[n]);return e},r.filter=function(t,e,n){for(var o=[],r=0,i=t.length,s=!n;r<i;r++)!e(t[r],r)!==s&&o.push(t[r]);return o}}(window._iub.cons.array)},function(t,e){!function(r,i){"use strict";var t=r.DEBUG=0,e=r.INFO=1,n=r.WARN=2,o=r.ERROR=3,s=r.FATAL=4,u=r.NOLOG=5,c=r.LOG_LEVELS={debug:t,info:e,warn:n,error:o,fatal:s,nolog:u},a=[].slice,f={},l=[],p=!1,h=e;r.silence=function(){return p=!0,r},r.wake=function(){return p=!1,r},r.registerStrategy=function(t,e){return f[t]=e,r},r.configure=function(t,e){var n=f[t];return n&&"configure"in n&&n.configure(e),r},r.setLevel=function(t){return(t=t.toLowerCase())in c&&(h=c[t]),r},r.log=function(t,e){if(!p&&(e=i.wrap(e),(t=t.toLowerCase())in c&&h<=c[t])){for(var n=0;n<l.length;n++){var o=l[n];"function"==typeof o?o(t,e):o in f&&(o=f[o]).log(t,e)}return r}},r.use=function(t){return t&&(l=i.wrap(t)),r},r.debug=function(){r.log("debug",a.call(arguments))},r.info=function(){r.log("info",a.call(arguments))},r.warn=function(){r.log("warn",a.call(arguments))},r.error=function(){r.log("error",a.call(arguments))},r.fatal=function(){r.log("fatal",a.call(arguments))}}(window._iub.cons.logger,window._iub.cons.array)},function(t,e){!function(o){"use strict";var r=function(t,e,n){var o=[e].concat(n);console[t].apply?console[t].apply(console,o):console[t](o.join(" "))};o.registerStrategy("console",{configure:function(){},log:function(t,e){try{if("console"in window&&"log"in console&&"warn"in console&&"error"in console){var n="[IUB-CNS|"+t.toUpperCase()+"]:";o.LOG_LEVELS[t]<o.WARN?r("log",n,e):o.LOG_LEVELS[t]===o.WARN?r("warn",n,e):r("error",n,e)}}catch(t){}}})}(window._iub.cons.logger)},function(t,e,n){var o=n(10),r=n(1),i={init:function(t){this._logger=t.logger,this.maxRetry=0;var e={};e.api_key=t.api_key,e.logger=this._logger,o.init(e)},sendData:function(t){return r.validate(t)?o.post(t):function(){var t={},e={done:!1,failed:!1,data:null,successes:[],failures:[]};e.success=function(t){return this.done?t(this.data):this.successes.push(t),e},e.error=function(t){return this.failed?t(this.data):this.failures.push(t),e},e.failed=!0,t.status=0,t.responseText="data validation error",e.data=t;for(var n=0,o=e.failures.length;n<o;n++)e.failures[n](t);return e}()}};t.exports=i},function(t,e,n){var u,c,o=n(1),r=_iub.cons.api_base_url?_iub.cons.api_base_url:"consent.iubenda.com/public/",a="https://"+r+"consent",f={init:function(t){u=t.api_key,c=t.logger,this.maxRetry=0,this.isIE=o.browserCheck(),this.isIE<10&&!1!==this.isIE?("http:"===location.protocol&&(a="http://"+r+"consent"),c.debug("using IE version: "+this.isIE)):(c.debug("Not using IE8 version"),nanoajax=n(11),_iub.cons.promise=n(12),_iub.cons.promise.prototype.success=_iub.cons.promise.prototype.then,_iub.cons.promise.prototype.error=_iub.cons.promise.prototype.catch)},post:function(t){return this.isIE<10&&this.isIE?i(t):s(t)}},i=function(t){var o={done:!1,failed:!1,data:null,successes:[],failures:[],success:function(t){return this.done?t(this.data):this.successes.push(t),o},error:function(t){return this.failed?t(this.data):this.failures.push(t),o}};return xhr=new XMLHttpRequest,xhr.open("POST",a),xhr.setRequestHeader("Content-Type","application/json"),xhr.setRequestHeader("apikey",u),xhr.onreadystatechange=function(){var t={};if(4===xhr.readyState)if(200===xhr.status){o.done=!0,c.debug("Call, Status: "+xhr.status),f.maxRetry=0,t.status=xhr.status,t.responseText=xhr.responseText,o.data=t;for(var e=0,n=o.successes.length;e<n;e++)o.successes[e](t)}else{o.failed=!0,c.error("error during the call, Status: "+xhr.status),f.maxRetry=0,t.status=xhr.status,t.responseText=xhr.responseText,o.data=t;for(e=0,n=o.failures.length;e<n;e++)o.failures[e](t)}},xhr.ontimeout=function(){c.error("Timeout"+xhr.status),c.debug("Retry"+f.maxRetry),f.maxRetry<3&&(f.maxRetry++,f.sendData())},xhr.send(JSON.stringify(t)),o},s=function(s){return new _iub.cons.promise(function(r,i){var t=JSON.stringify(s);nanoajax.ajax({url:a,timeout:"5000",headers:{"Content-Type":"application/json",apikey:u},method:"POST",body:t},function(t,e,n){var o;"Timeout"!==e?200===t?(c.debug("Call, status code:"+t),f.maxRetry=0,(o={}).status=t,o.responseText=e,r(o)):(c.error("Call, status code:"+t+" response: "+e),f.maxRetry=0,(o={}).status=t,o.responseText=e,i(o)):f.maxRetry<3&&(c.error("Call Error: "+e),f.maxRetry++,this.sendData(s))})})};t.exports=f},function(t,e,n){(function(p){var h=["responseType","withCredentials","timeout","onprogress"];function d(t,e,n){t[e]=t[e]||n}e.ajax=function(t,n){var e=t.headers||{},o=t.body,r=t.method||(o?"POST":"GET"),i=!1,s=function(t){if(t&&p.XDomainRequest&&!/MSIE 1/.test(navigator.userAgent))return new XDomainRequest;if(p.XMLHttpRequest)return new XMLHttpRequest}(t.cors);function u(t,e){return function(){i||(n(void 0===s.status?t:s.status,0===s.status?"Error":s.response||s.responseText||e,s),i=!0)}}s.open(r,t.url,!0);var c=s.onload=u(200);s.onreadystatechange=function(){4===s.readyState&&c()},s.onerror=u(null,"Error"),s.ontimeout=u(null,"Timeout"),s.onabort=u(null,"Abort"),o&&(d(e,"X-Requested-With","XMLHttpRequest"),p.FormData&&o instanceof p.FormData||d(e,"Content-Type","application/x-www-form-urlencoded"));for(var a=0,f=h.length;a<f;a++)void 0!==t[l=h[a]]&&(s[l]=t[l]);for(var l in e)s.setRequestHeader(l,e[l]);return s.send(o),s}}).call(e,n(2))},function(t,e,n){"use strict";t.exports=n(13)},function(t,e,n){"use strict";t.exports=n(0),n(14),n(15),n(16),n(17),n(19)},function(t,e,n){"use strict";var o=n(0);(t.exports=o).prototype.done=function(t,e){(arguments.length?this.then.apply(this,arguments):this).then(null,function(t){setTimeout(function(){throw t},0)})}},function(t,e,n){"use strict";var o=n(0);(t.exports=o).prototype.finally=function(e){return this.then(function(t){return o.resolve(e()).then(function(){return t})},function(t){return o.resolve(e()).then(function(){throw t})})}},function(t,e,n){"use strict";var c=n(0);t.exports=c;var o=f(!0),r=f(!1),i=f(null),s=f(void 0),u=f(0),a=f("");function f(t){var e=new c(c._44);return e._83=1,e._18=t,e}c.resolve=function(t){if(t instanceof c)return t;if(null===t)return i;if(void 0===t)return s;if(!0===t)return o;if(!1===t)return r;if(0===t)return u;if(""===t)return a;if("object"==typeof t||"function"==typeof t)try{var e=t.then;if("function"==typeof e)return new c(e.bind(t))}catch(n){return new c(function(t,e){e(n)})}return f(t)},c.all=function(t){var u=Array.prototype.slice.call(t);return new c(function(o,r){if(0===u.length)return o([]);var i=u.length;function s(e,t){if(t&&("object"==typeof t||"function"==typeof t)){if(t instanceof c&&t.then===c.prototype.then){for(;3===t._83;)t=t._18;return 1===t._83?s(e,t._18):(2===t._83&&r(t._18),void t.then(function(t){s(e,t)},r))}var n=t.then;if("function"==typeof n)return void new c(n.bind(t)).then(function(t){s(e,t)},r)}u[e]=t,0==--i&&o(u)}for(var t=0;t<u.length;t++)s(t,u[t])})},c.reject=function(n){return new c(function(t,e){e(n)})},c.race=function(t){return new c(function(e,n){t.forEach(function(t){c.resolve(t).then(e,n)})})},c.prototype.catch=function(t){return this.then(null,t)}},function(t,e,n){"use strict";var i=n(0),r=n(18);(t.exports=i).denodeify=function(t,e){return"number"==typeof e&&e!==1/0?function(t,e){for(var n=[],o=0;o<e;o++)n.push("a"+o);var r=["return function ("+n.join(",")+") {","var self = this;","return new Promise(function (rs, rj) {","var res = fn.call(",["self"].concat(n).concat([s]).join(","),");","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],r)(i,t)}(t,e):function(t){for(var e=Math.max(t.length-1,3),n=[],o=0;o<e;o++)n.push("a"+o);var r=["return function ("+n.join(",")+") {","var self = this;","var args;","var argLength = arguments.length;","if (arguments.length > "+e+") {","args = new Array(arguments.length + 1);","for (var i = 0; i < arguments.length; i++) {","args[i] = arguments[i];","}","}","return new Promise(function (rs, rj) {","var cb = "+s+";","var res;","switch (argLength) {",n.concat(["extra"]).map(function(t,e){return"case "+e+":res = fn.call("+["self"].concat(n.slice(0,e)).concat("cb").join(",")+");break;"}).join(""),"default:","args[argLength] = cb;","res = fn.apply(self, args);","}","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],r)(i,t)}(t)};var s="function (err, res) {if (err) { rj(err); } else { rs(res); }}";i.nodeify=function(n){return function(){var t=Array.prototype.slice.call(arguments),e="function"==typeof t[t.length-1]?t.pop():null,o=this;try{return n.apply(this,arguments).nodeify(e,o)}catch(n){if(null==e)return new i(function(t,e){e(n)});r(function(){e.call(o,n)})}}},i.prototype.nodeify=function(e,n){if("function"!=typeof e)return this;this.then(function(t){r(function(){e.call(n,null,t)})},function(t){r(function(){e.call(n,t)})})}},function(t,e,n){"use strict";var o=n(3),r=[],i=[],s=o.makeRequestCallFromTimer(function(){if(i.length)throw i.shift()});function u(t){var e;(e=r.length?r.pop():new c).task=t,o(e)}function c(){this.task=null}t.exports=u,c.prototype.call=function(){try{this.task.call()}catch(t){u.onerror?u.onerror(t):(i.push(t),s())}finally{this.task=null,r[r.length]=this}}},function(t,e,n){"use strict";var o=n(0);(t.exports=o).enableSynchronous=function(){o.prototype.isPending=function(){return 0==this.getState()},o.prototype.isFulfilled=function(){return 1==this.getState()},o.prototype.isRejected=function(){return 2==this.getState()},o.prototype.getValue=function(){if(3===this._83)return this._18.getValue();if(!this.isFulfilled())throw new Error("Cannot get a value of an unfulfilled promise.");return this._18},o.prototype.getReason=function(){if(3===this._83)return this._18.getReason();if(!this.isRejected())throw new Error("Cannot get a rejection reason of a non-rejected promise.");return this._18},o.prototype.getState=function(){return 3===this._83?this._18.getState():-1===this._83||-2===this._83?0:this._83}},o.disableSynchronous=function(){o.prototype.isPending=void 0,o.prototype.isFulfilled=void 0,o.prototype.isRejected=void 0,o.prototype.getValue=void 0,o.prototype.getReason=void 0,o.prototype.getState=void 0}},function(t,e,n){var o=n(4),r={resolve:function(){var t,e=_iub.cons_instructions;if(e){!function(t){for(var e=0,n=t.length;e<n;e++){var o=t[e][0];if("init"===o){var r=t.splice(e,1)[0];t.unshift(r);break}}}(e);for(var n=0,o=e.length;n<o;n++)i(e[n])}(t=_iub.cons_instructions)&&(t.push=function(t){return i(t)})}};function i(t){var e=t[0],n=t.slice(1);void 0!==o[e]?o[e].apply(o,n):console.log("`"+e+"` is not a valid method.")}t.exports=r}]);