!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=25)}([function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},,,,,,,function(e,t,o){var n=o(9),r=o(10),i=o(11),s=o(12);e.exports=function(e){return n(e)||r(e)||i(e)||s()}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}},function(e,t,o){var n=o(8);e.exports=function(e){if(Array.isArray(e))return n(e)}},function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,o){var n=o(8);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,,,,,,,,,,,,function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),i=o(7),s=o.n(i),a=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(Object.prototype.hasOwnProperty.call(snopes.page_data,t)){var n=[e,snopes.page_data[t]];o&&n.unshift("setCustomVariable"),tp.push(n)}},c=function(e,t){window.tp.push(["addHandler",e,t])},p=function(e,t,o,n){var r=document.getElementById(e);return!!r&&(r.contentWindow.postMessage({piano:{success:t,message:o,object:n}},"*"),!0)},l=function(e){var t=new URLSearchParams(window.location.search);if(localStorage.getItem("SNOPES_DEBUG")&&console.log('Handling redirect. Referrer is "'.concat(t.has("referrer")?t.get("referrer"):e,'"')),!t.has("referrer")&&!e)return!1;var o=t.has("referrer")?t.get("referrer"):e;o.includes(snopes.shop.admin_host)||o.includes(snopes.shop.frontend_host)?window.location.href="".concat(window.snopes.rest_root_path,"/shopify/multipass?shop_url=").concat(o):window.location.href=o};function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){r()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var f=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function g(e,t){if(!t.email)throw new Error("Missing required field `email`");return fetch("".concat(window.smg.api.root_endpoint,"newsletter/").concat(e,"/subscriptions"),{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":window.smg.api.nonce},body:JSON.stringify(t)})}var h=function(e,t){var o=e.params,n=o.email,r=o.list;if(!n||!n.length||!f.test(n))return Promise.resolve();var i=d(d({},e.params.profile&&JSON.parse(e.params.profile)),{},{email:n});return g(r||window.smg.debunker,i).then((function(e){if(!e.ok)throw Error(e.statusText);p(t,!0),setTimeout(tp.offer.close,5e3)})).catch((function(e){p(t,!1)}))},m=function(e,t){var o=e.email,n=window.smg&&window.smg.digest_id||!1;return o&&n?e.rid!==window.snopes.user.rids.member?Promise.reject():g(n,{email:o}):Promise.reject()};window.tp=window.tp||[],function(){s()(document.querySelectorAll("[data-shop-link]")).forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),tp.pianoId.isUserValid()?window.location.href="".concat(smg.api.root_endpoint,"store/shop_handler?shop_url=").concat(e.getAttribute("href")):window.location.href="".concat(snopes.core.host,"/login?referrer=").concat(e.getAttribute("href"))}))})),tp.push(["setSandbox","production"!==snopes.core.env]),tp.push(["setUsePianoIdUserProvider",!0]),tp.push(["setZone","Web"]),a("setContentAuthor","author_name"),a("setContentCreated","date_published_iso"),a("postID","post_id",!0),a("rating","rating",!0),a("template","template",!0),a("primaryCategory","primary_category",!0),a("categories","categories",!0);var e=snopes.page_data.tags&&Array.isArray(snopes.page_data.tags)?snopes.page_data.tags:[];if(snopes.page_data.retracted&&e.push("retracted"),snopes.page_data.date_published){var t=31536e6,o=Date.now(),n=new Date(snopes.page_data.date_published).getTime();n>o-t?e.push("age-0y"):n>o-63072e6?e.push("age-1y"):n>o-94608e6?e.push("age-2y"):n>o-126144e6?e.push("age-3y"):n>o-15768e7?e.push("age-4y"):e.push("age-5y")}tp.push(["setTags",e]),tp.push(["setContentIsNative",Object.prototype.hasOwnProperty.call(smg.page_data,"is_native_content")&&smg.page_data.is_native_content]),tp.push(["init",function(){tp.pianoId.init(),tp.experience.init()}]),document.addEventListener("DOMContentLoaded",(function(){tp.push(["init",function(){s()(document.querySelectorAll("[data-piano-btn]")).forEach((function(e){switch(e.getAttribute("data-piano-btn")){case"login":tp.pianoId.isUserValid()||(e.addEventListener("click",(function(e){e.preventDefault(),tp.pianoId.show({screen:"login",containerSelector:"#piano-login-page",loginSuccess:function(){return l(window.location.href)}})})),e.style.display="block");break;case"logout":tp.pianoId.isUserValid()&&(e.style.display="block",e.addEventListener("click",(function(e){e.preventDefault(),tp.pianoId.logout(),window.location.reload()})));break;case"account":tp.pianoId.isUserValid()&&(e.style.display="block",e.href="".concat(snopes.core.host,"/account/"));break;case"become-a-member":if(!tp.pianoId.isUserValid()){e.style.display="block",e.href="".concat(snopes.core.host,"/membership/");break}tp.api.callApi("/access/check",{rid:window.snopes.user.rids.member},(function(t){(!t.access||t.access&&!t.access.granted)&&(e.style.display="block",e.href="".concat(snopes.core.host,"/membership/"))}))}})),function(){if(document.getElementById("piano-account-container")){if(!tp.pianoId.isUserValid())return void(window.location.href="".concat(snopes.core.host,"/login"));tp.myaccount.show({displayMode:"inline",containerSelector:"#piano-account-container"})}document.getElementById("shopify-order-history")&&fetch("".concat(window.snopes.rest_root_path,"/shopify/order-history"),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.success&&(document.getElementById("shopify-order-history").classList.add("shopify-order-history--active"),document.getElementById("shopify-order-history-link").href=e.result)}))}(),function(){if(document.getElementById("piano-login-page")){if(localStorage.getItem("SNOPES_DEBUG")&&console.log("Login page. Logged in? ".concat(tp.pianoId.isUserValid())),tp.pianoId.isUserValid())return void l(snopes.core.host);tp.pianoId.show({displayMode:"inline",screen:"login",containerSelector:"#piano-login-page",loginSuccess:function(){localStorage.getItem("SNOPES_DEBUG")&&console.log("loginSuccess callback"),document.getElementById("piano-login-page").innerHTML='<img src="/content/mu-plugins/snopes-editorial/blocks/piano-container/spinner.svg" class="loader loading" />',l(snopes.core.host)}}),new URLSearchParams(window.location.search).has("passwordless_token")&&c("loginSuccess",(function(){l(snopes.core.host)}))}}(),function(){if(document.getElementById("piano-signup-page")){if(tp.pianoId.isUserValid())return void l(snopes.core.host);tp.pianoId.show({displayMode:"inline",screen:"register",containerSelector:"#piano-signup-page",loginSuccess:function(){document.getElementById("piano-signup-page").innerHTML='<img src="https://snopes.com/content/themes/snopes/assets/images/loader.svg" class="loader loading" />',l(snopes.core.host)}})}}(),"production"===snopes.core.env&&tp.enableGACrossDomainLinking("UA-40468225-1"),localStorage.getItem("SNOPES_DEBUG")&&(console.log("----------  START PIANO DEBUGGING ----------"),console.log(tp.pianoId.isUserValid()?"You are logged in to Piano":"You are not logged in to Piano"),console.log(-1===document.cookie.indexOf("__tac")?"The __tac cookie does not exist":"The __tac cookie does exist"),console.log("----------  END PIANO DEBUGGING ----------"))}])})),localStorage.getItem("SNOPES_DEBUG")&&["checkoutComplete","checkoutClose","checkoutCustomEvent","checkoutError","checkoutSelectTerm","checkoutStateChange","showOffer","showTemplate","startCheckout","submitPayment","loginRequired","loginSuccess","experienceExecute","meterActive","meterExpired","beforeBrowserEvent","setResponseVariable"].forEach((function(e){c(e,(function(t){console.log(e,t)}))})),["checkoutComplete"].forEach((function(e){c(e,(function(t,o){fetch("".concat(window.smg.api.root_endpoint.replace(/smg/,"piano"),"events"),{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":window.smg.api.nonce},body:JSON.stringify({event:e,data:t})})}))}))}(),function(){var e,t;e="email-signup",t=h,window.tp.push(["addHandler","customEvent",function(o,n,r,i){o.eventName===e&&t(o,n,r,i)}]),c("checkoutComplete",m)}()}]);