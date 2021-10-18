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

Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;if(!document.querySelector('[data-type\x3d"dtc"]')){window.galleryRefresh=function(){console.log("Gallery refresh loaded.");var frequency=5;var limit=1;var rate=frequency*1E3;var counter=limit;var timer_running=false;var checkTimer=function(){if(!timer_running){timer_running=true;refreshAds();var myTimer=setInterval(function(){if(counter>0)refreshAds();else{timer_running=
false;window.clearInterval(myTimer);counter=limit;console.log("interval: stopped")}},rate)}};var refreshAds=function(){console.log("refreshing ads. interval: "+limit);try{if(typeof window.HDN_ResponsiveGallery!=="undefined"&&typeof window.HDN_ResponsiveGallery.fullscreen!=="undefined")hearstRefreshInterstitialAds(["GO300"]);else hearstRefreshAds()}catch(e){console.log("Gallery Refresh Error: "+e)}counter--};$(document).bind("HDNGalleryActionOnChangeState",checkTimer)};$(document).ready(window.galleryRefresh)}},
3327575,331341,24);

}
/*
     FILE ARCHIVED ON 01:07:19 Oct 07, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:36:20 Oct 17, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 878.789
  exclusion.robots: 0.124
  exclusion.robots.policy: 0.114
  RedisCDXSource: 0.98
  esindex: 0.01
  LoadShardBlock: 816.457 (3)
  PetaboxLoader3.datanode: 847.045 (5)
  CDXLines.iter: 26.063 (3)
  load_resource: 822.666 (2)
  PetaboxLoader3.resolve: 710.621 (2)
*/