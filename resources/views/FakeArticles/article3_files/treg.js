var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var treg=treg||{};treg.gya=treg.gya||{};treg.cmd=treg.cmd||[];treg.loaded=treg.loaded||0;++treg.loaded;treg.events=[];treg.sso={};treg.event={};treg.modules={};treg.developerMode=treg.developerMode||false;treg.screens={};treg.logtype={};treg.log=[];treg.pageType=treg.pageType||"content";treg.loggingOut=false;treg.domLoaded=false;treg.localCSS=treg.localCSS||false;treg.loadGigya=false;treg.ssoId="janrain";treg.build="3.26";treg.reloadAfterLogin=treg.reloadAfterLogin||false;treg.force_logout=treg.force_logout||false;treg.preventReloadOnLogin=false;treg.versionId="2.85";treg._loadAsync=true;treg.promiseTimeout=treg.promiseTimeout||-1;treg.useModalPortal=treg.useModalPortal||false;treg.telemetryTrace=function(a){};treg.identity={id:null,edbId:null,displayName:null};treg.server_location="treg.hearstnp.com/";treg.current_hash="0x854D1F6BD159F11C26E8F35D54ABE83D9B2E05B6";treg.main_script_node=null;treg.event.on_treg_loaded=10;treg.event.on_dom_loaded=20;treg.event.on_user_logged_in=30;treg.event.onSessionFound=40;treg.event.onSessionNotFound=50;treg.event.onSessionEnd=60;treg.event.onInitialSessionState=65;treg.event.onSocialProviderFound=500;treg.event.onAccountLinked=510;treg.event.onAccountUnLinked=520;treg.event.onScreenRendered=530;treg.event.onRegistrationStart=540;treg.event.onRegistrationSuccess=550;treg.event.onRegistrationFailed=560;treg.event.onLoginFailed=570;treg.event.onReturningExperienceData=580;treg.event.onAnalyticsDataUpdated=600;treg.event.OnBeforeNicknameUpdate=610;treg.event.onBeforeWidgets=620;treg.event.onBeforeProfileWidget=630;treg.screens.login=10;treg.screens.edit_profile=20;treg.screens.create_account=30;treg.screens.password_recover=40;treg.screens.verify_email=50;treg.screens.accountDeactivated=60;treg.screens.signInWaitMessage=70;treg.logtype.info=0;treg.logtype.warning=1;treg.logtype.error=2;treg.sso.localTimeout=7776000;treg.sso.federatedTimeout=7776000;treg.unqueueCommands=function(){treg.logInfo("unqueueCommands");while(treg.cmd.length>0){(treg.cmd.shift())()}treg.cmd={};treg.cmd.push=function(a){a()}};treg.clearCookie=function(a){document.cookie=a+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"};treg.setEnvCookie=function(a,b){document.cookie=a+"="+b+"; path=/"};treg.setConfigCookie=function(a,b){treg.setEnvCookie(a,b)};treg.clearConfigCookie=function(a){if(arguments.length==0){treg.clearCookie("site_url");treg.clearCookie("environment");treg.clearCookie("sso");treg.clearCookie("subscriber_id");treg.clearCookie("gigyaServiceAvailable");treg.clearCookie("conditional1")}else{treg.clearCookie(arguments[0])}};treg.dumpConfigCookies=function(){console.log("site_url :"+treg.readCookie("site_url"));console.log("environment :"+treg.readCookie("environment"));console.log("sso :"+treg.readCookie("sso"));console.log("subscriber_id :"+treg.readCookie("subscriber_id"));console.log("gigyaServiceAvailable :"+treg.readCookie("gigyaServiceAvailable"))};treg.readConfigFromCookies=function(){var b=treg.readCookie("site_url");var a=treg.readCookie("environment");var c=treg.readCookie("sso");var d=treg.readCookie("subscriber_id");if(typeof(b)!="undefined"){treg.url_overide=b}if(typeof(a)!="undefined"){treg.server_location=(a=="production")?"treg.hearstnp.com/":"treg-staging.hearstnp.com/"}if(typeof(c)!="undefined"){treg.forceLoadSSO=c;if(c=="janrain"){treg.loadGigya=false}else{treg.loadGigya=true}}if(typeof(d)!="subscriber_id"){treg.subscriberid=d}};(function(){var a;function b(g,d,e,f){if(a){return a[g]}d=document.cookie.split("; ");a={};for(f=d.length-1;f>=0;f--){e=d[f].split("=");a[e[0]]=e[1]}return a[g]}treg.readCookie=b})();treg.loadSystem=function(){treg.readConfigFromCookies();var d=treg.getPageUrl();var a=treg.server_location+"assets/"+treg.current_hash+"/GetJS?url="+escape(d);var c=treg.getFullExpandedAddress(a);if(treg._loadAsync==true){treg.logInfo("loading async");var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src=c;(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(b)}else{document.write('<script src="'+c+'"></script>')}treg.logInfo("treg queued to load: "+a)};treg.renderScreen=function(a){return false};treg.hasActiveSession=function(){return false};treg.clearIdentity=function(){treg.identity.id=null;treg.identity.edbId=null};treg.reloadPage=function(a){treg.logInfo("page refresh by: "+a);if(treg.getParameterByName("notregrefresh")==""){window.location.reload(true)}};treg.sso.saveIdentityObject=function(c,a,d,b){};treg.sso.clearIdentityObject=function(a){};treg.sso.loadIdentityObject=function(a,b){b(null)};treg.GetCookieDomain=function(){var b=window.location.host;var a=b;if(b!=null){var c=b.split(".").reverse();if(c!=null&&c.length>1){a=c[1]+"."+c[0];if(c.length>2&&c[2].toLowerCase()=="m"){a="m."+a}}}return a};treg.registerEvent=function(b,a){var c=treg.events[b];treg.events[b]=function(d){c&&c(d);a(d)}};treg.fireEvent=function(a,b){treg.events[a]&&treg.events[a](b)};treg.logInfo=function(a){treg.logEvent(new Date(),a,treg.logtype.info)};treg.logWarning=function(a){treg.logEvent(new Date(),a,treg.logtype.warning)};treg.logError=function(a){treg.logEvent(new Date(),a,treg.logtype.error)};treg.logException=function(b,a){if(typeof a!="undefined"){if(typeof a.message!="undefined"){treg.logEvent(new Date(),b+a.message);return}}treg.logEvent(new Date(),b,treg.logtype.error)};if(typeof(window.performance)=="undefined"){treg.logEvent=function(c,a,b){treg.log.push({d:c,m:a,t:b})};treg.getTimeElapsed=function(){return -1}}else{treg.logEvent=function(c,a,b){treg.log.push({d:c,pt:window.performance.now(),m:a,t:b})};treg.getTimeElapsed=function(c,a,b){var d=(performance.timing.navigationStart+window.performance.now())-performance.timing.domLoading;return d.toFixed(2)}}treg.dumpLog=function(){var b=treg.log;for(var a=0;a<b.length;a++){var d="msg";var e=treg.formatDateTime(b[a].d);if(typeof(b[a].t)!="undefined"){if(b[a].t==treg.logtype.warning){d+=" warning"}if(b[a].t==treg.logtype.error){d+=" error"}}var c=" : "+b[a].m;console.log("treg "+e+c)}};treg.dumpLogWindow=function(){var c=treg.log;var a="";for(var b=0;b<c.length;b++){var e="msg";var f="";if(typeof(c[b].pt)!="undefined"){f=(performance.timing.navigationStart+c[b].pt)-performance.timing.domLoading;f=f.toFixed(2)}else{f=treg.formatDateTime(c[b].d)}if(typeof(c[b].t)!="undefined"){if(c[b].t==treg.logtype.warning){e+=" warning"}if(c[b].t==treg.logtype.error){e+=" error"}}var d='<div class="'+e+'">'+f+" : "+c[b].m+"</div>";a+=d}var g=window.open("","wnd");g.document.body.innerHTML=a};treg.formatDateTime=function(e){var a=(e.getHours()<10?"0":"")+e.getHours();var b=(e.getMinutes()<10?"0":"")+e.getMinutes();var d=(e.getSeconds()<10?"0":"")+e.getSeconds();var c=e.getMilliseconds();return a+":"+b+":"+d+": "+c};treg.loadScript=function(e,a,b){var d=document.createElement("script");d.async=a;d.type="text/javascript";var f="https:"==document.location.protocol;d.src=(e.search(/^http/i)==-1?((f?"https:":"http:")+"//"):"")+e;if(typeof(b)!=="undefined"){if(d.addEventListener){d.addEventListener("load",b,false)}else{d.onreadystatechange=function(){if(d.readyState in {loaded:1,complete:1}){d.onreadystatechange=null;b()}}}}var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(d,c);return c};treg.getFullExpandedAddress=function(a){var b="https:"==document.location.protocol;return(b?"https:":"http:")+"//"+a};treg.getPageUrl=function(){var b=window.location.host;var a=treg.getPersistedUrlOveride();if(a!=null){return a}if(typeof(treg.url_overide)!="undefined"){b=treg.url_overide}return treg.cleanUrl(b)};treg.cleanUrl=function(a){if(a.toLowerCase().indexOf("http://")==0){a=a.substr(7,a.length)}if(a.toLowerCase().indexOf("https://")==0){a=a.substr(8,a.length)}if(a.length>300){a=a.substr(0,300)}if(a.charAt(a.length-1)=="/"){a=a.slice(0,-1)}return a};treg.waitForElement=function(b,a){var c=document.getElementById(b);if(c!=null){a()}else{window.requestAnimationFrame(function(){treg.waitForElement(b,a)})}};treg.renderHTML=function(c,b){var a=document.getElementById(c);if(a!=null&&typeof(treg.html[b])!="undefined"){a.innerHTML=treg.html[b]}};treg.elementHasClass=function(a,b){return(a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))!=null)};treg.addClassToElement=function(a,b){if(!treg.elementHasClass(a,b)){a.className+=(a.className.length>0)?" "+b:b}};treg.removeClassFromElement=function(a,c){if(treg.elementHasClass(a,c)){var b=new RegExp("(\\s|^)"+c+"(\\s|$)");a.className=a.className.replace(b," ")}};treg.loadCSS=function(a){var b=document.createElement("link");b.setAttribute("rel","stylesheet");b.setAttribute("type","text/css");b.setAttribute("href",a);document.getElementsByTagName("head")[0].appendChild(b)};treg.getParameterByName=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return c==null?"":decodeURIComponent(c[1].replace(/\+/g," "))};treg.showElement=function(b,a){try{document.getElementById(b).style.display=a?"block":"none"}catch(c){}};treg.getHostName=function(b){var a=b.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);if(a!=null&&a.length>2&&typeof a[2]==="string"&&a[2].length>0){return a[2]}else{return null}};treg.getDomain=function(d){var b=treg.getHostName(d);var a=b;if(b!=null){var c=b.split(".").reverse();if(c!=null&&c.length>1){a=c[1]+"."+c[0];if(c.length>2&&c[2].toLowerCase()=="m"){a="m."+a}}}return a};treg.contentLoaded=function(m,f){var c=false,l=true,b=m.document,k=b.documentElement,a=b.addEventListener?"addEventListener":"attachEvent",j=b.addEventListener?"removeEventListener":"detachEvent",i=b.addEventListener?"":"on",g=function(n){if(n.type=="readystatechange"&&b.readyState!="complete"){return}(n.type=="load"?m:b)[j](i+n.type,g,false);if(!c&&(c=true)){f.call(m,n.type||n)}},h=function(){try{k.doScroll("left")}catch(n){setTimeout(h,50);return}g("poll")};if(b.readyState=="complete"){f.call(m,"lazy")}else{if(b.createEventObject&&k.doScroll){try{l=!m.frameElement}catch(d){}if(l){h()}}b[a](i+"DOMContentLoaded",g,false);b[a](i+"readystatechange",g,false);m[a](i+"load",g,false)}};treg.getPersistedUrlOveride=function(){var a=treg.readCookie("treg_url_overide");if(typeof(a)!="undefined"){return a}return null};treg.clearPersistedUrlOveride=function(){treg.persisteUrlOveride(null)};treg.persistUrlOveride=function(c){if(c==null){treg.clearCookie("treg_url_overide")}else{var a=new Date();a.setTime(a.getTime()+(365*24*60*60*1000));var b="expires="+a.toUTCString();document.cookie="treg_url_overide="+c+";Thu, 01 Jan 2120 00:00:00 UTC; path=/"}};treg.forceUseOfRedirects=false;treg.detectedMobile=false;try{var version="20210322";console.log("realm.iosfbdr.useRedirects value:"+window.localStorage.getItem("realm.iosfbdr.useRedirects"+version));console.log("realm.isMobile value:"+window.localStorage.getItem("realm.isMobile"+version));var check=window.localStorage.getItem("realm.iosfbdr.useRedirects"+version);var isMobile=window.localStorage.getItem("realm.isMobile"+version);if(check==null||isMobile==null){console.log("Check or mobile not found.");var userAgent=navigator.userAgent||navigator.vendor||window.opera;userAgent=userAgent.toLowerCase();var mobile=(userAgent.indexOf("mobile")>-1);var iPhone=(userAgent.indexOf("iphone")>-1);var faceBookApp=((userAgent.indexOf("fban")>-1)||(userAgent.indexOf("fbios")>-1)||(userAgent.indexOf("fbdv")>-1)||(userAgent.indexOf("fb_iab")>-1));var mobileSafari=(userAgent.indexOf("mobile safari")>-1);var richieApp=(userAgent.indexOf("richie")>-1);var instaGramApp=(userAgent.indexOf("instagram")>-1);var googleSearchAppliance=(userAgent.indexOf("gsa")>-1);if(faceBookApp||mobileSafari||mobile){if(faceBookApp||richieApp||googleSearchAppliance||instaGramApp||mobileSafari||mobile){console.log("forceUseOfRedirects and isMobile set to true");treg.forceUseOfRedirects=true;treg.detectedMobile=true}else{if(typeof(document.referrer)=="string"){if(document.referrer.indexOf("m.facebook.com")!=-1){console.log("forceUseOfRedirects and isMobile set to true");treg.forceUseOfRedirects=true;treg.detectedMobile=true}}}}console.log("storing new redirect information");window.localStorage.setItem("realm.iosfbdr.useRedirects"+version,treg.forceUseOfRedirects+"");window.localStorage.setItem("realm.isMobile"+version,treg.detectedMobile+"")}else{console.log("before set: treg.forceUseOfRedirects : "+treg.forceUseOfRedirects);console.log("before set: treg.isMobile : "+treg.detectedMobile);treg.forceUseOfRedirects=(check+""=="true");treg.detectedMobile=(isMobile+""=="true");console.log("after set: treg.forceUseOfRedirects : "+treg.forceUseOfRedirects);console.log("after set: treg.isMobile : "+treg.detectedMobile)}}catch(ex){}treg.realm=treg.realm||{};treg.realm.events={registered_events:[],fired_events:[],event_log:[],fired_event_parms:[],register:function(b,a){this._register(b,false,a)},registerReplayLast:function(b,a){this._register(b,true,a)},replayEvents:function(c,a){var b=this.fired_events[c];if(typeof(b)=="undefined"){return}for(var e=0;e<b.length;e++){var f=b[e].p;try{a(f)}catch(d){treg.logInfo(c+" exception when calling: "+d)}}},registerReplayAll:function(b,a){this.replayEvents(b,a);this._register(b,false,a)},_register:function(d,f,a){var e=this.registered_events[d];this.registered_events[d]=function(h){try{e&&e(h)}catch(g){treg.logInfo(d+" exception: "+g.toString())}try{a(h)}catch(g){treg.logInfo(d+" exception: "+g.toString())}};if(f&&(typeof(this.fired_events[d])!="undefined")){var b=this.fired_events[d];var c=b[b.length-1];a(c.p)}},saveEvent:function(a,c){var d=this.getPerformanceTimestamp();var b=new Date();this.fired_events[a].push({d:b,pt:d,p:c});this.event_log.push({d:b,pt:d,msg:a})},fire:function(a,b){if(typeof(this.fired_events[a])=="undefined"){this.fired_events[a]=[]}this.saveEvent(a,b);this.registered_events[a]&&this.registered_events[a](b)},formatDateTime:function(e){var a=(e.getHours()<10?"0":"")+e.getHours();var b=(e.getMinutes()<10?"0":"")+e.getMinutes();var d=(e.getSeconds()<10?"0":"")+e.getSeconds();var c=e.getMilliseconds();return a+":"+b+":"+d+": "+c},dumpLogWindow:function(){var c=this.event_log;var a="";for(var b=0;b<c.length;b++){var e="msg";var f="";if(typeof(c[b].pt)!=null){f=(performance.timing.navigationStart+c[b].pt)-performance.timing.domLoading;f=f.toFixed(2)}else{f=this.formatDateTime(c[b].d)}var d='<div class="'+e+'">'+f+" : "+c[b].msg+"</div>";a+=d}var g=window.open("","wnd");g.document.body.innerHTML=a}};if(typeof(window.performance)=="undefined"){treg.realm.events.getPerformanceTimestamp=function(){return null};treg.realm.events.getTimeElapsed=function(){return -1}}else{treg.realm.events.getPerformanceTimestamp=function(){return window.performance.now()};treg.realm.events.getTimeElapsed=function(){var a=(performance.timing.navigationStart+window.performance.now())-performance.timing.domLoading;return a.toFixed(2)}}treg.identityPromise=new Promise(function(c,b){var a=false;treg.realm.events.registerReplayLast("treg.onSessionNotFound",function(d){a=true;c(treg.identity)});treg.realm.events.registerReplayLast("treg.onSessionFound",function(d){a=true;c(treg.identity)});if(treg.promiseTimeout!=-1){setTimeout(function(){if(!a){b("idenity timeout")}},treg.promiseTimeout)}});treg.logInfo("calling window.tregLoaderComplete");try{window.tregLoaderCompleted()}catch(er){}treg.loadSystem();

}
/*
     FILE ARCHIVED ON 04:54:42 Oct 07, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:36:08 Oct 17, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.067
  RedisCDXSource: 15.112
  esindex: 0.007
  LoadShardBlock: 150.469 (6)
  PetaboxLoader3.datanode: 121.993 (7)
  CDXLines.iter: 15.168 (3)
  load_resource: 94.788
  PetaboxLoader3.resolve: 39.43
*/