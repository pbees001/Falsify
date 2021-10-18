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

// site-specific Javascript settings
var HDN = HDN || {};
HDN.property = "HC";
HDN.site = "premiumsfgate";
HDN.twitterAcc = "sfchronicle";
HDN.domain = "sfchronicle.com";
HDN.cookieDomain = ".sfchronicle.com";
HDN.regUrl = location.protocol + "//web.archive.org/web/20211007044654/https://reg.chron.com/";
HDN.regAuthCookie = "chron_user_auth";
HDN.regDemoCookie = "hc_customize";
HDN.siteUrl = location.protocol + "//web.archive.org/web/20211007044654/https://www.sfchronicle.com/";
HDN.imageServer = location.protocol + "//web.archive.org/web/20211007044654/https://www.sfchronicle.com";
HDN.jskEPBUrl = location.protocol + "//web.archive.org/web/20211007044654/https://sfchronicle.com/profile/";
HDN.zipcode = "94102";
HDN.gtvt_partner_id = "8t+JDlhcVc8=";
HDN.siteSearchIndex = "solr";

// New implementation of HDN.dataLayer.site object -- WCM-1436
if (!HDN.hasOwnProperty('dataLayer')) {
    HDN.dataLayer = {}
}

HDN.dataLayer.site = HDN.dataLayer.site || {};
HDN.dataLayer.site.name = "premiumsfgate";
HDN.dataLayer.site.domainRoot = "sfchronicle";
HDN.dataLayer.site.domain = "sfchronicle.com";
HDN.dataLayer.site.subDomain = "www";
HDN.dataLayer.site.timeZone = "Pacific";
HDN.dataLayer.site.property = "HC";
HDN.dataLayer.site.twitterAcc = "sfchronicle";
HDN.dataLayer.site.cookieDomain = ".sfchronicle.com";
HDN.dataLayer.site.regUrl = location.protocol + "//web.archive.org/web/20211007044654/https://reg.chron.com/";
HDN.dataLayer.site.regAuthCookie = "chron_user_auth";
HDN.dataLayer.site.regDemoCookie = "hc_customize";
HDN.dataLayer.site.siteUrl = location.protocol + "//web.archive.org/web/20211007044654/https://www.sfchronicle.com/";
HDN.dataLayer.site.imageServer = location.protocol + "//web.archive.org/web/20211007044654/https://www.sfchronicle.com";
HDN.dataLayer.site.jskEPBUrl = location.protocol + "//web.archive.org/web/20211007044654/https://sfchronicle.com/profile/";
HDN.dataLayer.site.zipcode = "94102";
HDN.dataLayer.site.gtvt_partner_id = "8t+JDlhcVc8=";
HDN.dataLayer.site.siteSearchIndex = "solr";
HDN.dataLayer.site.siteId = "35";

try {
	document.domain = HDN.domain;
} catch (e) {
	console.log(e);
}

$(document).ready(function () {
	// Add class for touch specific functionality
	addClassTouch();

	function addClassTouch() {
	    // Check for mobile device
	    var isMobile = {
			 Android: function() {
					return /Android/i.test(navigator.userAgent);
			},
			iOS: function() {
					return /iPhone|iPad|iPod/i.test(navigator.userAgent);
			},
			any: function() {
					return (isMobile.Android() || isMobile.iOS());
			}
		};
		// Add touch class on mobile
		if (isMobile.any() == true) {
		    $('html').addClass("touch");
		}

	}
});


}
/*
     FILE ARCHIVED ON 04:46:54 Oct 07, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:36:07 Oct 17, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 145.204 (4)
  RedisCDXSource: 10.184
  CDXLines.iter: 17.322 (3)
  esindex: 0.016
  LoadShardBlock: 143.33 (3)
  captures_list: 175.925
  exclusion.robots.policy: 0.198
  load_resource: 78.294
  exclusion.robots: 0.214
  PetaboxLoader3.resolve: 67.653
*/