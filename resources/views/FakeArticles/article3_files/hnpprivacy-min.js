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


var HDN=HDN||{};HDN.dataLayer=HDN.dataLayer||{};HDN.dataLayer.privacy=HDN.dataLayer.privacy||{};HDN.getRootDomain=function(){var temp=location.host.split('.').reverse();var rootDomain='.'+temp[1]+'.'+temp[0];return rootDomain;}
HDN.getCookie=function(name){if(name=='')return('');thisCookie=document.cookie;var start=thisCookie.indexOf(name+'=');if(start==-1)return('');var end=thisCookie.indexOf(';',start);if(end==-1)end=thisCookie.length;var cookieval=thisCookie.substring(start,end);var pair=cookieval.split("=");var value=decodeURIComponent(pair[1]);return(value);}
HDN.setCookie=function(name,value,seconds){if(typeof(seconds)=="number"){var date=new Date();date.setTime(date.getTime()+(seconds*1000));var expires="; expires="+date.toGMTString();}else{var expires="";}
document.cookie=name+"="+encodeURIComponent(value)+expires+"; path=/"+"; domain="+HDN.getRootDomain();}
HDN.deleteCookie=function(name){HDN.setCookie(name,"",-1);}
HDN.randomString=function(length){var result='';var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';var charactersLength=characters.length;for(var i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}
return result;}
HDN.setDoNotSellStatus=function(){var nowDate=new Date();var nowMs=nowDate.getTime();var nowPlusOneHourDate=new Date(nowMs+(1*60*60*1000));var nowPlusOneHourMs=nowPlusOneHourDate.getTime();hnpdnsValue={dns:0,ms:nowPlusOneHourMs};var hnpccparid=HDN.getCookie("hnpccparid");if(hnpccparid){var needToUpdateCookie=false;var hnpdns=HDN.getCookie("hnpdns");if(hnpdns){try{hnpdnsValue=JSON.parse(hnpdns);if(typeof hnpdnsValue.dns==='number'){if(hnpdnsValue.dns!==0&&hnpdnsValue.dns!==1){hnpdnsValue.dns=0;needToUpdateCookie=true;}}else{hnpdnsValue.dns=0;needToUpdateCookie=true;}
if(typeof hnpdnsValue.ms==='number'){var msDifference=hnpdnsValue.ms-nowMs;if(msDifference>3600000){hnpdnsValue.dns=0;needToUpdateCookie=true;}
if(msDifference<0){needToUpdateCookie=true;}}else{needToUpdateCookie=true;}}catch(e){needToUpdateCookie=true;}}else{needToUpdateCookie=true;}
if(needToUpdateCookie){hnpdnsValue.ms=nowPlusOneHourMs;if(location.host.indexOf('www.sfgate')===0||location.host.indexOf('m.sfgate')===0||location.host.indexOf('www.sfchronicle')===0||location.host.indexOf('cmf.')===0){var ajaxSite=location.protocol+'//'+location.host;}else{var ajaxSite='https://web.archive.org/web/20211007044654/https://www.sfgate.com';}
var xhr=new XMLHttpRequest();xhr.open('GET',ajaxSite+'/hdn/tools/ccpaSetDoNotSell.php?hnpccparid='+hnpccparid);xhr.send(null);xhr.onreadystatechange=function(){var DONE=4;var OK=200;if(xhr.readyState===DONE){if(xhr.status===OK){var obj=JSON.parse(xhr.response);if(obj.doNotSell){hnpdnsValue.dns=1;HDN.dataLayer.privacy.ccpaDoNotSell=true;}else{hnpdnsValue.dns=0;HDN.dataLayer.privacy.ccpaDoNotSell=false;}
hnpdns=JSON.stringify(hnpdnsValue);HDN.setCookie("hnpdns",hnpdns,31536000);HDN.overrideDoNotSellStatus();}else{console.error(xhr.status);}}};}}
if(hnpdnsValue.dns){HDN.dataLayer.privacy.ccpaDoNotSell=true;}else{HDN.dataLayer.privacy.ccpaDoNotSell=false;}
HDN.overrideDoNotSellStatus();}
HDN.setDoNotSellStatusOnRichie=function(){HDN.dataLayer.privacy.ccpaDoNotSell=false;if(typeof window.richie!=='undefined'&&typeof window.richie.getCCPAOptOut!=='undefined'){HDN.dataLayer.privacy.ccpaDoNotSell=!!window.richie.getCCPAOptOut();}
HDN.overrideDoNotSellStatus();}
HDN.overrideDoNotSellStatus=function(){if(window.location.href.indexOf('hnpdns=')>-1){if(window.location.href.indexOf('hnpdns=1')>-1){HDN.dataLayer.privacy.ccpaDoNotSell=true;}else if(window.location.href.indexOf('hnpdns=0')>-1){HDN.dataLayer.privacy.ccpaDoNotSell=false;}}}
HDN.removeStnPlayers=function(){var stnPlayers=Array.apply(null,document.getElementsByClassName('s2nPlayer'));stnPlayers.forEach(function(p){if(p.parentNode.classList.contains('hst-freeform')){p.parentNode.parentNode.removeChild(p.parentNode);}});}
let pendingCalls=[];let addFrame=function(){if(!window.frames['__uspapiLocator']){if(document.body){const iframe=document.createElement('iframe');iframe.style.cssText='display:none';iframe.name='__uspapiLocator';document.body.appendChild(iframe);}else{setTimeout(addFrame,5);}}}
addFrame();let getuspdata=function(apiver,callback){if(typeof callback==='function'){if(apiver!==null&&apiver!==undefined&&apiver!=1){if(typeof callback==='function')
callback(null,false);return;}
if(HDN.dataLayer.privacy.ccpaDoNotSell){str='1YYY';}else{str='1---';}
if(str){callback({version:1,uspString:str},true);}else{callback({version:null,uspString:null},false);}}else{console.error("__uspapi: callback parameter not a function");}};window.__uspapi=new function(win){if(win.__uspapi){try{if(win.__uspapi('__uspapi')){return win.__uspapi;}else{pendingCalls=win.__uspapi()||[];}}catch(nfe){return win.__uspapi;}}
let api=function(cmd){try{return{getUSPData:getuspdata,__uspapi:function(){return true;}}[cmd].apply(null,[].slice.call(arguments,1));}
catch(err){console.error("__uspapi: Invalid command: ",cmd)}};return api;}(window);function __handleUspapiMessage(event){const data=event&&event.data&&event.data.__uspapiCall;if(data){window.__uspapi(data.command,data.version,(returnValue,success)=>{event.source.postMessage({__uspapiReturn:{returnValue,success,callId:data.callId}});});}}
window.addEventListener('message',__handleUspapiMessage,false);if(navigator.userAgent.indexOf(' Richie/')>-1){HDN.setDoNotSellStatusOnRichie();}else{HDN.setDoNotSellStatus();}
if(HDN.dataLayer.privacy.ccpaDoNotSell){if(document.readyState==='complete'||document.readyState==='loaded'){HDN.removeStnPlayers();}else{document.addEventListener('DOMContentLoaded',function(){HDN.removeStnPlayers();});}}

}
/*
     FILE ARCHIVED ON 04:46:54 Oct 07, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:36:08 Oct 17, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 713.365
  exclusion.robots: 0.088
  exclusion.robots.policy: 0.08
  RedisCDXSource: 0.61
  esindex: 0.007
  LoadShardBlock: 312.59 (3)
  PetaboxLoader3.datanode: 291.805 (4)
  CDXLines.iter: 53.662 (3)
  load_resource: 29.015
  PetaboxLoader3.resolve: 24.848
*/