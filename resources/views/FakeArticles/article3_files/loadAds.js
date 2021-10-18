window.aps=window.aps||{};
window.googletag=window.googletag||{};
window.pbjs=window.pbjs||{};
window.HDN=window.HDN||{};
window.debugSGA=window.debugSGA||false;
window.APSpageUrl=window.APSpageUrl||"";
window.responsiveAds=window.responsiveAds||function(){};
(function(){if(aps.cmd){throw new Error("loadAds.js already loaded")
}aps.cmd=[];
aps.juiceLog=[];
aps.modules={};
aps.events=[];
aps.event={};
aps.app_events={};
aps.logtype={};
aps.implementSRA=true;
aps.juiceErrors="";
aps.cfg={logToConsole:true,perf:[]};
window.loadAd_UrlLocation=window.loadAd_UrlLocation||"https://web.archive.org/web/20211007045442/https://aps.hearstnp.com/";
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)
};
ga.l=+new Date;
ga("create","UA-1616916-99","auto","pb");
aps.isRichie=APSpageUrl.indexOf("staging.richie")==0||APSpageUrl.indexOf("richie")==0||APSpageUrl.indexOf("papp")==0;
aps.leafsSites=["livehealthy.chron.com","smallbusiness.chron.com","work.chron.com","healthyeating.sfgate.com","homeguides.sfgate.com","education.seattlepi.com","pyme.lavoztx.com"];
aps.isLeafSite=aps.leafsSites.includes(document.location.hostname);
aps.isLegacy=(document.location.hostname.indexOf("legacy.com")>-1||(top.location!=location&&document.referrer=="https://web.archive.org/web/20211007045442/https://www.legacy.com/"));
aps.isQA=(document.location.hostname.startsWith("cmf.")||document.location.hostname.startsWith("preview.cmf")||loadAd_UrlLocation=="https://web.archive.org/web/20211007045442/https://aps-staging.hearstnp.com/")?true:false;
aps.isEEdition=document.location.hostname.indexOf("olivesoftware.com")>0;
aps.isWP=typeof(window.wp_content)=="object";
aps.isWCM=(HDN&&HDN.dataLayer&&HDN.dataLayer.content&&typeof HDN.dataLayer.content.designTemplate!="undefined");
if(typeof(window.performance)=="undefined"){aps.getTimeElapsed=function(){return -1
};
aps.getTimeStamp=function(){return 0
};
aps.getTimeElapsedFromStamp=function(tm){return"0.00"
}
}else{aps.getTimeElapsed=function(timeStamp,msg,mtype){var tm=(performance.timing.navigationStart+window.performance.now())-performance.timing.domLoading;
return tm.toFixed(2)
};
aps.getTimeStamp=function(){return window.performance.now().toFixed(2)
};
aps.getTimeElapsedFromStamp=function(tm){return(window.performance.now()-tm).toFixed(2)
}
}aps.performanceMetrics={adUnit:"",networkCode:0,DomLoaded:0,JuiceScriptLoading:0,JuiceScriptDoneLoading:0,FirstAdRendered:0,FirstAdViewable:0,A9BidsRequested:0,A9AllBidsReceived:0,PrebidFirstBidsReceived:0,PrebidAllBidsReceived:0,PrebidBidsRequested:0,GoogleLoaded:0,TotalThirdPartyScripts:0,ThirdPartyScriptsLoaded:0,DefineTags:0,page_type2:"",matchedUrl:"",ThirdParty:{},iCrossing_userid:"",urlHash:"",timed:aps.cfg.perf};
aps.setPerformanceMetrics=function(name,description){var ts=aps.getTimeStamp();
if(name&&(!aps.performanceMetrics[name]||aps.performanceMetrics[name]==0)){aps.performanceMetrics[name]=ts
}aps.cfg.perf[ts]=description;
aps.logInfo(description)
};
aps.logEvent=function(timeStamp,msg,mtype){aps.juiceLog.push({d:timeStamp,pt:(window.performance)?window.performance.now():null,m:msg,t:mtype})
};
aps.logf=function(e,t){return e=[].slice.call(e),t&&e.unshift(t),e.unshift("display: inline-block; color: #fff; background: #ff8a45; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cJuice"),e
};
aps.logInfo=function(msg,perf){if(msg=="#SWITCH(DOM)"||msg=="#ENDSWITCH"){return
}aps.logEvent(new Date(),msg,aps.logtype.info);
perf=perf||false;
if(aps.cfg.logToConsole){console.info.apply(console,aps.logf(arguments,""))
}if(perf){aps.cfg.perf[aps.getTimeElapsed()]=msg
}};
aps.setPerformanceMetrics("JuiceScriptLoading","start of juice script loading");
var gamAd=function(code,width,height,sizeMappings){this.code=code;
this.width=width;
this.height=height;
this.sizeMappings=sizeMappings;
this.kvps=[];
this.rm=false;
this.interstitial=false;
this.oop=false;
this.video=false;
this.companion_units=false;
this.exclude=false;
if(aps.isLeafSite&&!["Leaf1","Leaf2","Leaf3","Leaf4","A728","A300","B300","S300","B728","MAD"].includes(code)){this.exclude=true
}};
aps.defineDefaultAds=function(){aps.juiceMatchedUrl="Using Juice Direct";
window.juiceservice=("https:"==document.location.protocol?"https:":"http:")+"//web.archive.org/web/20211007045442/https://aps.hearstnp.com/";
window.APSpageID=66623;
window.APSGenerationID="";
window.APSResponsiveDesign=true;
window.definedTags={"networkCode":"36117602","adUnit":"hnp-hearstdemosite/hearstdemozone","kvps":[],"ads":[],"responsiveMappings":277,"singleRequestMode":false};
definedTags.ads.push(new gamAd("Crown",99,99,["0001x99x99","0001x001x002"]));
definedTags.ads.push(new gamAd("Flex1",970,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0996x055x001","0768x055x001","0768x728x90","0768x88x88","0768x001x001","0001x300x50","0001x320x50","0001x88x88","0001x001x001","0001x055x001"]));
definedTags.ads.push(new gamAd("GPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]));
definedTags.ads.push(new gamAd("FPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]));
definedTags.ads.push(new gamAd("LNlogo",150,47,["0001x150x47"]));
definedTags.ads.push(new gamAd("EE300_3",300,250,["000x300x250"]));
definedTags.ads.push(new gamAd("EE320",320,50,["0768x000x000","0000x320x50"]));
definedTags.ads.push(new gamAd("EE728",728,90,["0768x728x90","000x000x000"]));
definedTags.ads.push(new gamAd("EEinsert",1,1,["0001x001x001"]));
definedTags.ads.push(new gamAd("OBIT-A728",728,90,["1056x970x90","1056x728x90","0750x728x90","0001x320x50"]));
definedTags.ads.push(new gamAd("OBIT-AP300",300,250,["0001x300x250"]));
definedTags.ads.push(new gamAd("OBIT-B728",728,90,["1056x970x90","1056x728x90","0750x728x90","0001x320x50"]));
definedTags.ads.push(new gamAd("A728",728,90,["1312x970x90","1312x728x90","1312x003x003","1312x003x001","0996x970x90","0996x728x90","0996x468x60","0996x003x001","0996x003x003","0768x728x90","0654x468x60","0654x003x001","0654x003x003","0001x000x000"]));
definedTags.ads.push(new gamAd("A951",970,250,["1312x002x001","1312x1200x300","1312x980x40","1312x971x90","1312x970x415","1312x970x250","1312x970x90","1312x970x168","1312x960x150","1312x950x30","0996x002x001","0996x980x40","0996x971x90","0996x970x415","0996x970x250","0996x970x168","0996x970x90","0996x960x300","0996x960x150","0996x950x30","0654x002x001","0654x704x300","0001x000x000"]));
definedTags.ads.push(new gamAd("CONCERT1",501,501,["0996x001x001","0996x501x501","0996x620x366","0996x336x280","0996x325x508","0996x325x204","0001x001x001","0001x501x501","0001x336x280","0001x325x508","0001x325x204"]));
definedTags.ads.push(new gamAd("CONCERT2",501,501,["0996x001x001","0996x501x501","0996x620x366","0996x336x280","0996x325x508","0996x325x204","0996x300x250","0001x001x001","0001x501x501","0001x336x280","0001x325x508","0001x325x204","0001x300x250","0001x320x100"]));
definedTags.ads.push(new gamAd("EE300",300,250,["000x300x250"]));
definedTags.ads.push(new gamAd("SPweather",150,32,["0986x150x32","0001x000x000"]));
definedTags.ads.push(new gamAd("A300",300,250,["1312x300x600","1312x300x250","1312x004x001","0996x300x600","0996x300x250","0996x004x001","0654x300x600","0654x300x250","0654x004x001","0001x300x250","0001x004x001"]));
definedTags.ads.push(new gamAd("AP300",300,250,["0001x004x001","0001x300x250"]));
definedTags.ads.push(new gamAd("CP300",300,250,["0996x300x250","0996x005x001","0654x300x250","0654x005x001","0001x300x250","0001x005x001"]));
definedTags.ads.push(new gamAd("DP300",300,250,["0996x300x250","0996x005x001","0654x300x250","0654x005x001","0001x300x250","0001x005x001"]));
definedTags.ads.push(new gamAd("EP300",300,250,["0996x300x250","0996x005x001","0654x300x250","0654x005x001","0001x300x250","0001x005x001"]));
definedTags.ads.push(new gamAd("EE300_2",300,250,["000x300x250"]));
definedTags.ads.push(new gamAd("B300",300,250,["0654x300x600","0654x300x250","0654x160x600","0654x005x001","0001x300x250","0001x005x001"]));
definedTags.ads.push(new gamAd("BP300",300,250,["0001x300x250","0001x005x001"]));
definedTags.ads.push(new gamAd("MW728_1",728,90,["1280x970x415","1280x940x250","1280x728x90","0768x003x003","0001x000x000"]));
definedTags.ads.push(new gamAd("S300",300,250,["0654x300x600","0654x300x250","0654x160x600","0001x300x250"]));
definedTags.ads.push(new gamAd("MW728_2",728,90,["1280x940x250","1280x728x90","0768x003x003","0001x000x000"]));
definedTags.ads.push(new gamAd("TMP300_3",300,250,["0654x300x250","0001x000x000"]));
definedTags.ads.push(new gamAd("B728",728,90,["1312x970x90","1312x728x90","1312x003x003","0996x970x90","0996x728x90","0996x468x60","0996x003x003","0654x728x90","0654x468x60","0654x003x003","0001x000x000"]));
definedTags.ads.push(new gamAd("MAD",320,50,["1312x000x000","0996x000x000","0654x000x000","0001x320x50","0001x300x50"]));
definedTags.ads.push(new gamAd("APflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]));
definedTags.ads.push(new gamAd("BPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]));
definedTags.ads.push(new gamAd("CPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]));
definedTags.ads.push(new gamAd("DPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]));
definedTags.ads.push(new gamAd("EPflex",300,250,["0996x001x001","0996x970x250","0996x970x90","0996x728x90","0996x88x88","0768x001x001","0768x728x90","0768x88x88","0001x001x001","0001x300x250","0001x88x88"]));
definedTags.ads.push(new gamAd("PMAD",320,50,["1312x000x000","0996x000x000","0654x000x000","0001x320x50","0001x300x50"]));
definedTags.ads.push(new gamAd("Leaf1",300,250,["0001x300x255","0001x343x255","0001x343x280","0001x300x250"]));
definedTags.ads.push(new gamAd("Leaf2",300,250,["0996x336x280","0996x300x250","0996x320x100","0996x320x50","0996x250x250","0996x300x50","0001x300x600","0001x160x600","0001x336x280","0001x300x250","0001x250x250","0001x320x50","0001x300x50","0001x501x501"]));
definedTags.ads.push(new gamAd("Leaf3",300,250,["0996x728x90","0996x468x60","0996x320x50","0996x300x50","0001x300x250","0001x250x250"]));
definedTags.ads.push(new gamAd("Leaf4",300,250,["0996x336x280","0996x300x250","0996x250x250","0001x000x000"]));
aps.scriptHash="0xA69253206A2E81275D0F45F0799689A0D936139C";
aps.logInfo("Ad Definition loaded",true);
if(aps.fireEvent){aps.fireEvent(aps.event.on_ad_definition_loaded)
}};
function getPageUrl(){var returnUrl;
var parentAPSPageURL;
var parentPageUrl;
try{parentAPSPageURL=parent.APSpageUrl;
parentPageUrl=parent.window.location.host+parent.window.location.pathname+parent.window.location.search
}catch(e){aps.juiceErrors="juice service error - unable to get parent information\n"
}try{returnUrl=parentAPSPageURL||APSpageUrl||parentPageUrl||window.location.host+window.location.pathname+window.location.search
}catch(e){returnUrl=window.location.host+window.location.pathname+window.location.search;
aps.juiceErrors+="juice serve error - getting JuicePageUrl\n"
}return returnUrl
}function cleanUrl(returnUrl){if(returnUrl.toLowerCase().indexOf("http://")==0){returnUrl=returnUrl.substr(7,returnUrl.length)
}if(returnUrl.toLowerCase().indexOf("https://")==0){returnUrl=returnUrl.substr(8,returnUrl.length)
}if(returnUrl.length>300){returnUrl=returnUrl.substr(0,300)
}var queryStr="";
if(returnUrl.indexOf("?")!=-1){queryStr=returnUrl.substr(returnUrl.indexOf("?"),returnUrl.length);
returnUrl=returnUrl.substr(0,returnUrl.indexOf("?"))
}if(returnUrl.charAt(returnUrl.length-1)=="/"){returnUrl=returnUrl.slice(0,-1)
}return returnUrl+queryStr
}window.JuicePageUrl=cleanUrl(getPageUrl());
aps.sitesWithoutCallback=["education.seattlepi.com"];
if(document.location.href.indexOf("dbgDirect")>-1){aps.sitesWithoutCallback=[window.JuicePageUrl.split("/")[0],document.location.hostname]
}if(aps.sitesWithoutCallback.includes(document.location.hostname)){aps.logInfo("juice Direct");
aps.defineDefaultAds()
}if(typeof definedTags=="undefined"){var url=loadAd_UrlLocation+((debugSGA)?getsource:"SRO/GetJS?url=")+escape(JuicePageUrl.toLowerCase());
var scr=document.createElement("script");
scr.src=url;
scr.onerror=aps.defineDefaultAds;
scr.id="AdsConfigJavaScript";
var node=document.getElementsByTagName("html")[0].children;
node[(node.length>1)?1:0].appendChild(scr)
}aps.waitForDefinedTags=function(func){if(typeof definedTags=="object"){eval(func)()
}else{aps.alreadyWaiting=aps.alreadyWaiting||false;
aps.waitingForDefinedTags=aps.waitingForDefinedTags||[];
if(aps.waitingForDefinedTags.indexOf(func)>-1){return
}aps.waitingForDefinedTags.push(func);
if(typeof definedTags=="undefined"){aps.registerEvent(aps.event.on_ad_definition_loaded,function(){eval(func)()
});
if(!aps.alreadyWaiting){aps.setPerformanceMetrics(null,"waiting for Ad Definition");
aps.alreadyWaiting=true
}}}};
googletag.cmd=googletag.cmd||[];
pbjs.que=pbjs.que||[];
pbjs.bidderSettings=pbjs.bidderSettings||{};
HDN.dataLayer=HDN.dataLayer||{};
HDN.dataLayer.ads=HDN.dataLayer.ads||{};
HDN.dataLayer.privacy=HDN.dataLayer.privacy||{};
aps.pageWidth=window.screen.width||top.window.innerWidth||window.width||-1;
window.DESKTOP=1;
window.MOBILE=2;
window.TABLET=3;
if(navigator.userAgent.indexOf("iPad")>-1){window.current_device=TABLET
}else{if(navigator.userAgent.indexOf("iPhone")>-1){window.current_device=MOBILE
}else{if(navigator.userAgent.indexOf("Android")>-1){window.current_device=MOBILE
}else{if(document.querySelectorAll("meta[name=viewport]").length>0){try{var pw;
var metat=document.querySelectorAll("meta[name=viewport]")[0].content.split(",");
for(var i=0;
i<metat.length;
i++){var pwt=metat[i].split("=");
if(pwt[0].trim()=="width"){pw=pwt[1].trim()
}}aps.pageWidth=(pw=="device-width")?window.innerWidth:pw
}catch(ex){}}window.current_device=(aps.pageWidth<768)?MOBILE:DESKTOP
}}}window.CLIENT=1;
window.SERVER=2;
window.SERVER_COMPATIBLE=3;
aps.cfg={advertisers:{46962802:"House PSA",46402162:"House PSA",46328242:"A9",4506751574:"Aardvark",198604042:"AppNexus",4401584047:"Consumable",46513882:"Criteo",99465802:"Facebook",53211082:"Google Adx",47574562:"ix",4726587804:"JustPremium",47576002:"Kargo",4542983697:"Lockerdome",4903417422:"NoBid",53204482:"OpenX",79962922:"Pubmatic",5024029832:"PulsePoint",53212282:"Rubicon",55181242:"Teads",53212402:"TripleLift",4907535500:"Vidazoo",4401894681:"Yieldmo",203184442:"Gamut Media",169654522:"ix",169655602:"OpenX",169656562:"RhythmOne",169656562:"Rubicon",195800602:"Sovrn",4579237619:"Media.net",4417528020:"TripleLift",},adtest:{},adtestparam:"",disablePersonalisation:false,doNotSell:HDN.dataLayer.privacy.ccpaDoNotSell||false,logToConsole:(window.debugSGA)?true:(window.location.search.indexOf("console=1")!==-1)?true:false,nlpCat:[],stp:{at:-1,nextTimeout:2500,def:{timeout:2500,stepStarted:false,dfpCalled:false,ads:[],adsToRequest:[],divids:[],pb:{biddersDone:[],bids:[],calledBidders:[],clientSideBidders:[],},a9:{bidsReceived:false,},adRendered:false,matching:[],reason:"",},},dfp:{ads:[],celtra:{},dynamicAds:[],phd:{enabled:false,},rnd:{},celtraAds:[],googleSlots:[],removeMissingDivs:true,moatYieldReady:false,uncalledAds:[],adsNotShowing:[],refreshes:0,undefinedAds:[],waiting:[],isWaiting:false,dataLayerInterstitialRefreshables:["Flex1","A300","TMP300_3","MAD"],viewability:[],},bid:{a9:{adUnits:[],enabled:true,config:{},apstag:{},initCalled:false,videoAdUnits:[],partners:[],},pb:{config:{},data:{},adUnits:[],adUnitIds:[],videoAdUnits:[],s2sBidders:[],bidders:[],biddersCount:0,biddersDone:[],biddersPriority:["triplelift","criteo","concert","ix","kargo","vidazoo"],dataProviders:[],settings:{},moveToS2SOnMax:["rubicon","appnexus","openx"],notSupportingGDPR:["consumable","kargo","appnexus"],shuffleMoveToS2SOnMax:true,},bids:[],detectAllBids:true,disableNative:false,disableMobile:false,disabledOnMobile:[],enabled:(window.location.search.indexOf("pb=0")!==-1)?false:true,enableGDPR:false,excludedDomains:["gametimect.com","olivesoftware.com"],lessBidder:0,current_domain:"",current_device:current_device,showTargeting:true,showType:false,maxClientSideBidders:6,excludedBids:[['wrapper=="pb" && aps.current_domain=="chron.com" && adDef.code == "A951" && ["home page","channel"].includes(aps.page_type2)',"no bid on A951 for page_type2 home_page or channel on chron.com"],['wrapper=="pb" && aps.page_type2 != "article" && adDef.code.startsWith("CONCERT")',"no bid on CONCERTx ads for page_type2 not article"],['bidder == "criteo" && adDef.code.startsWith("NTV")',"no bid on NTV ads for criteo"],['bidder == "consumable" && adDef.width == 970 && adDef.height == 250',"no bid on 970x250 ads for consumable"],['bidder == "teads" && adDef.width == 501 && adDef.height == 501 && aps.page_type2 != "article"',"no bid on non article page on CONCERTx for teads"],['bidder == "teads" && aps.page.ads.filter(function(ad){return ad.advertiserId == 55181242}).count >= 10',"no bid after 10 impressions of teads"],['bidder=="triplelift" && ["Flex1","B728","TMP300_3"].includes(adDef.code)',"no bid on Flex1, B728 or TMP300_3 for triplelift"],['adDef.code == "A951" && document.location.href.startsWith("https://web.archive.org/web/20211007045442/https://www.sfgate.com/realestate/")',"no bid on A951 on sfgate realestate"],['bidder == "kargo" && adDef.code == "Flex1"',"no bid on Flex1 for Kargo"],['bidder == "teads" && ["Flex1","MAD"].includes(adDef.code)',"no bid on Flex1, MAD for teads"],],},vid:{mode:"apv",tagUrl:"",enabled:false,},gaLog:(Math.floor(Math.random()*100)<=25),ev:[],excludeModules:[],perf:{},waitingGoogle:false,pageuuid:new Date().valueOf()+"_"+Math.random(),preventCeltraAdsToRefresh:true,preventNonSecureContent:false,};
if(document.location.hostname=="www.seattlepi.com"){aps.cfg.bid.pb.moveToS2SOnMax=["rubicon","openx"];
aps.cfg.bid.disableNative=false
}aps.adPerformanceMetrics={};
aps.getCookie=function(cname){var name=cname+"=";
var ca=document.cookie.split(";");
for(var i=0;
i<ca.length;
i++){var c=ca[i];
while(c.charAt(0)==" "){c=c.substring(1)
}if(c.indexOf(name)==0){return c.substring(name.length,c.length)
}}return""
};
if(aps.cfg.logToConsole){var date=new Date();
date.setTime(date.getTime()+(24*60*60*1000));
var expires="; expires="+date.toGMTString();
document.cookie="console=1"+expires+"; path=/"
}var cookie=aps.getCookie("console");
if(cookie!=undefined&&cookie=="1"){aps.cfg.logToConsole=true
}aps.event.on_dom_loaded=10;
aps.event.on_update_page_level_targeting=20;
aps.event.on_begin_define_tags=40;
aps.event.on_end_define_tags=50;
aps.event.on_ad_rendered=60;
aps.event.on_ad_impression_viewable=65;
aps.event.on_dynamic_ad_rendered=80;
aps.event.on_before_enable_google_services=100;
aps.event.on_set_dynamic_ad_targeting=110;
aps.event.on_before_display_ad=120;
aps.event.on_script_loaded=130;
aps.event.on_before_refresh_ad=140;
aps.event.on_before_refresh_ads=150;
aps.event.on_init_ad_definition=160;
aps.event.on_third_party_complete=170;
aps.event.on_hearst_place_ad=180;
aps.event.on_request_new_video_ads=190;
aps.event.on_start_bidding=200;
aps.event.on_ad_refresh_call=210;
aps.event.on_ad_definition_loaded=220;
aps.event.on_define_bid_data=230;
aps.event.on_initial_bid_request=240;
aps.event.on_check_include_ad=250;
aps.logtype.info=0;
aps.logtype.warning=1;
aps.logtype.error=2;
aps.registerEvent=function(event,action){var oldAction=aps.events[event];
aps.events[event]=function(parms){oldAction&&oldAction(parms);
action(parms)
}
};
aps.registerAppEvent=function(event,action){var oldAction=aps.app_events[event];
aps.app_events[event]=function(parms){oldAction&&oldAction(parms);
action(parms)
}
};
aps.fireEvent=function(event,parms){aps.events[event]&&aps.events[event](parms)
};
window.onHearstAdEvent=function(){var eventName=arguments[0],params;
params=(arguments.length==2)?arguments[1]:null;
aps.app_events[eventName]&&aps.app_events[eventName](params)
};
aps.topLogInfo=function(msg){try{top.aps.logInfo(msg)
}catch(e){}};
aps.toplogException=function(msg,e){try{top.aps.logException(msg)
}catch(e){}};
aps.logWarning=function(msg){aps.logEvent(new Date(),msg,aps.logtype.warning);
if(aps.cfg.logToConsole){console.info.apply(console,aps.logf(arguments,"WARNING:"))
}};
aps.logError=function(msg){aps.logEvent(new Date(),msg,aps.logtype.error);
if(aps.cfg.logToConsole){console.info.apply(console,aps.logf(arguments,"ERROR:"))
}};
aps.logException=function(msg,e){if(typeof e!="undefined"){if(typeof e.message!="undefined"){aps.logEvent(new Date(),msg+e.message);
return
}}aps.logEvent(new Date(),msg,aps.logtype.error)
};
aps.dumpLogWindow=function(){var logs=aps.juiceLog;
var html="";
for(var i=0;
i<logs.length;
i++){var sClass="msg";
var time="";
if(typeof(logs[i].pt)=="undefined"){time=(performance.timing.navigationStart+logs[i].pt)-performance.timing.domLoading;
time=time.toFixed(2)
}else{time=aps.formatDateTime(logs[i].d)
}if(typeof(logs[i].t)!="undefined"){if(logs[i].t==aps.logtype.warning){sClass+=" warning"
}if(logs[i].t==aps.logtype.error){sClass+=" error"
}}var msg='<div class="'+sClass+'">'+time+" : "+logs[i].m+"</div>";
html+=msg
}var w=window.open("","wnd");
w.document.body.innerHTML=html
};
aps.formatDateTime=function(timeStamp){var h=(timeStamp.getHours()<10?"0":"")+timeStamp.getHours();
var m=(timeStamp.getMinutes()<10?"0":"")+timeStamp.getMinutes();
var s=(timeStamp.getSeconds()<10?"0":"")+timeStamp.getSeconds();
var ms=timeStamp.getMilliseconds();
return h+":"+m+":"+s+": "+ms
};
aps.getAdMetrics=function(code){var def=aps.adPerformanceMetrics[code];
if(typeof(def)=="undefined"){def={lineItemId:0,creativeId:0,DomId:code,hearstPlaceAd:0,googleDisplay:0,rendered:0,impressionViewable:0,refreshCalled:0,isEmpty:true,size:"",totalRenders:0,totalImpressions:0,pageInfo:aps.performanceMetrics};
aps.adPerformanceMetrics[code]=def
}return def
};
aps.registerModule=function(name){aps.modules[name]={};
return aps.modules[name]
};
aps.getThirdPartyMetrics=function(name){var def=aps.performanceMetrics.ThirdParty[name];
if(typeof(def)=="undefined"){def={start:0,stop:0,runtime:0,refresh_start:0,refresh_stop:0,refresh_runtime:0};
aps.performanceMetrics.ThirdParty[name]=def
}return def
};
aps.startThirdParty=function(name){aps.getThirdPartyMetrics(name).start=aps.getTimeElapsed()
};
aps.stopThirdParty=function(name){var def=aps.getThirdPartyMetrics(name);
def.stop=aps.getTimeElapsed();
def.runtime=(def.stop-def.start).toFixed(2)
};
aps.startThirdPartyRefresh=function(name){aps.getThirdPartyMetrics(name).refresh_start=aps.getTimeElapsed()
};
aps.stopThirdPartyRefresh=function(name){var def=aps.getThirdPartyMetrics(name);
def.refresh_stop=aps.getTimeElapsed();
def.refresh_runtime=(def.refresh_stop-def.refresh_start).toFixed(2)
};
aps.desktopOrMobile=function(desktopValue,mobileValue){return(aps.cfg.bid.current_device==DESKTOP)?desktopValue:mobileValue
};
aps.startStep=function(reason){var nextStep=aps.cfg.stp.at+2;
if(aps.cfg.stp.at==-1&&aps.cfg.stp[0]==undefined){aps.cfg.stp[0]=JSON.parse(JSON.stringify(aps.cfg.stp.def))
}if(aps.cfg.stp[nextStep]==undefined){aps.cfg.stp[nextStep]=JSON.parse(JSON.stringify(aps.cfg.stp.def));
aps.cfg.stp[nextStep].timeout=aps.cfg.stp.nextTimeout;
if(!aps.cfg.bid.a9.enabled){aps.cfg.stp[nextStep].a9.bidsReceived=true
}}if(aps.cfg.stp.at==-1||(aps.cfg.stp[aps.cfg.stp.at].adRendered&&(aps.cfg.dfp.waiting.length>0||aps.cfg.dfp.batchSRA.enabled))){aps.cfg.stp.at++;
aps.logInfo("Starting step "+aps.cfg.stp.at);
aps.cfg.stp[aps.cfg.stp.at].reason=reason;
return true
}else{return false
}};
aps.waitStartStep=function(reason){if(aps.cfg.dfp.waiting.length>0){if(aps.startStep(reason)){defineTags(definedTags)
}else{setTimeout(function(){aps.waitStartStep()
},500)
}}};
aps.nextStep=function(){if(typeof definedTags=="undefined"){aps.waitForDefinedTags(function(){defineTags(definedTags)
})
}else{if((!aps.cfg.dfp.batchSRA.enabled||aps.cfg.dfp.batchSRA.auto&&aps.cfg.dfp.batchSRA.waitingNext)||(aps.cfg.dfp.batchSRA.userInteractFor>(aps.cfg.stp.at+1))){if(aps.startStep("batchSRA")){window.defineTags(definedTags)
}}else{aps.logInfo("BatchSRA : waiting for scroll")
}}};
try{if(HDN.jwplayers){for(var pl in HDN.jwplayers){if(!pl.mute&&!pl.startenabled){aps.cfg.vid.mode="ctp"
}}}}catch(e){}if(document.location.pathname.indexOf("/sponsored/")!==-1){aps.logInfo("*Disabling bidders - sponsored content");
aps.cfg.bid.enabled=false
}aps.addPageKvp=function(key,value){aps.page_kvps=aps.page_kvps||[];
var kvp=aps.page_kvps.filter(function(kvp){return kvp.key==key
})[0];
if(kvp==undefined){aps.page_kvps.push({key:key,value:[]});
kvp=aps.page_kvps.filter(function(kvp){return kvp.key==key
})[0]
}if(!kvp.value.includes(value)){kvp.value.push(value);
aps.logInfo("Page KVP: "+key+" = "+kvp.value);
if(!aps.gcontext){googletag.cmd.push(function(){aps.gcontext._setTargeting(key,kvp.value)
})
}else{aps.gcontext._setTargeting(key,kvp.value)
}}};
if(aps.cfg.vid.enabled){document.addEventListener("hdn.jwplayer",function(e){aps.logInfo("VideoEvent: "+e.details.eventAction);
console.log(e.details);
if(e.details.eventAction=="Video Progress 75%"){aps.logInfo("Requesting new video bids");
aps.cfg.vid.tagUrl="";
aps.startStep();
aps.fireEvent(aps.event.on_request_new_video_ads,{})
}},false)
}})();(function(){aps.cfg.userAgent=navigator.userAgent;
aps.logInfo("user agent: "+aps.cfg.userAgent);
aps.page_kvps=aps.page_kvps||[];
aps.cfg.IABSpiders="false";
var d=["1job","abot","agentname","apachebench","applesyndication","ask jeeves","ask+jeeves","atomz","avantgo","baiduspider","blitzbot","bloglines","bordermanager","changedetection","check_http","checkurl","chkd","contype","Download Ninja","Download+Ninja","dts agent","dts+agent","favorg","getright","golem","gomezagent","googlebot","grabber","ia_archive","ichiro","IEAutoDiscovery","indy library","indy+library","infolink","internet ninja","internet+ninja","internetseer","isilo","jakarta","jobo","justview","keynote","larbin","libwww-perl","linkbot","linkchecker","linklint","linkscan","linkwalker","^lwp","lydia","magus bot","magus+bot","mediapartners-google","mfc_tear_sample","microsoft scheduled cache content download service","microsoft url control","microsoft+scheduled+cache+content+download+service","microsoft+url+control","miva","mj12bot","monitor","mozilla/5.0 (compatible; msie 5.0)","mozilla/5.0+(compatible;+msie+5.0)","ms frontpage","MS Search","ms+frontpage","MS+Search","MSNPTC","nbot","newsnow","^ng/2.0","nutch","nutscrape","ocelli","patric","pluck","plumtree","powermarks","psbot","rpt-http","rssreader","scooter","seekbot","sherlock","shopwiki","slurp","sucker","templeton","/teoma","thunderstone","t-h-u-n-d-e-r-s-t-o-n-e","topix","ukonline","ultraseek","urchin","vagabondo","web downloader","web+downloader","webauto","webcapture","webcheck","WebCopier","webtool","wget","xenu","yacy","zealbot","zeusbot","ez publish link validator","ez+publish+link+validator","Goldfire","SiteVigil","iOpus","Microsoft BITS","Microsoft+BITS","heritrix","yahoofeedseeker","internal zero-knowledge agent","internal+zero-knowledge+agent","SurveyBot/","Liferea","YahooSeeker","FindLinks","oodlebot","AdsBot-Google","KHTE","KTXN","Advanced Email Extractor","Advanced+Email+Extractor","webbot","panscient.com","Snoopy","bot/1.0","UniversalSearch","Maxamine","Argus","Google Wireless Transcoder","Google+Wireless+Transcoder","ClickAJob","JobRapido","Python-urllib","iSearch","https://web.archive.org/web/20211007045442/http://bot.ims.ca","System Center Operations Manager","System+Center+Operations+Manager","JoeDog","websitepulse","BitvoUserAgent","Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;1813)","Mozilla/4.0+(compatible;+MSIE+6.0;+Windows+NT+5.1;1813)","Paros","Watchmouse","proximic","Scoutjet","Twiceler","Pingdom","Europarchive","Webmetrics","holmes","AlertSite","Yahoo Pipes","Yahoo+Pipes","SimplePie","Drupal","HTMLParser","SnapPreviewBot","^FDM 3.x","^FDM+3.x","Trovit","RiverglassScanner","Wepbot","Siteimprove","archive.org","VocusBot","BLP_bbot","W3C_Validator","Dotbot","(simulated_by_Webserver_Stress_Tool)","Linguee Bot","Linguee+Bot","WAPT","updatepatrol","SiteCon","twitterbot","richmetrics.com/bot","bingbot","WWW-Mechanize","Google Web Preview","Google+Web+Preview","ADGBOT","httpunit","HttpComponents","Twisted PageGetter","Twisted+PageGetter","AppEngine-Google","YioopBot","Flamingo_SearchEngine","Atomic_Email_Hunter","FeedBurner","talktalk","facebookexternalhit","adbeat","^SJN","outbrain","TweetmemeBot","WASALive","wikiwix-bot","Ezooms","HiScan","d24y-aegis","Google-HotelAdsVerifier","FupBot","moatbot","VMCbot","companydatatree","CookieReports","BingPreview","^Scan","flamingosearch","Reconnoiter","^Funnelback","Feed43","auditbot","Genieo","NerdByNature","Python-httplib","Cutbot","Server Density External Llama","Server+Density+External+Llama","MNA Digital Circonus Check","MNA+Digital+Circonus+Check","scanalert","catchpoint","discoverybot","Jooblebot","bitlybot","ADR)","YottaaMonitor","AdometryBot","TSMbot","PhantomJS","tagscanner","LoadImpactPageAnalyzer","CFSCHEDULE","searchme.com/support/","MetaURI","cXensebot","linkdex","SearchBot","ColdFusion","Open Web Analytics Bot","Open+Web+Analytics+Bot","YahooExternalCache","HP SiteScope","HP+SiteScope","Nielsen","Feedzilla","Superfeedr","^Java/","MixrankBot","Squider","topsy.com/butterfly/","Neustar","^InAGist URL Resolver","^InAGist+URL+Resolver","^Crowsnest/","^kraken/","^JS-Kit URL Resolver","^JS-Kit+URL+Resolver","^python-requests/","^Scrapy/","imgsizer","PTST","WeSEE:Search","ContextAd Bot","ContextAd+Bot","ADmantX","Google-HTTP-Java-Client","YahooCacheSystem","Typhoeus","Twikle","EbuzzingFeedBot","Cliqzbot","CrystalSemanticsBot","Livelapbot","evidon","automationtest","WeSEE:Ads/","riddler.io","LongURL API","LongURL+API","LOCKSS cache","LOCKSS+cache","Go 1.1 package http","Go+1.1+package+http","google_partner_monitoring","SiteExplorer","A6-Indexer","VigLink","HTTP_Request2","binlar","BUbiNG","spbot","LinkTiger","newspaper/0.0.","twibble.io","GoogleSecurityScanner","RKG Url Verifier","RKG+Url+Verifier","MaxPoint Bot","MaxPoint+Bot","^Worldwatch/","^WebNotifier/","oia.OWA","Google Page Speed Insights","Google+Page+Speed+Insights","Site24x7","RediffNewsBot","WinHttpRequest","aiHitBot","help.coccoc.com","Adsense-Snapshot-Google","^prerender","COMODO SSL Checker","COMODO+SSL+Checker","RuxitSynthetic","EngageBDR","intergator","Yahoo Ad Monitoring","Yahoo+Ad+Monitoring","Applebot","flipboard.com/browserproxy","ArgClrInt","Halebot","SkypeUriPreview","^AHC/","Lyttbot","DYbot/","Apache-HttpClient/4.","WeSEE_Bot","bl.uk_lddc_bot","special_archiver","SemrushBot","alexa site audit","alexa+site+audit","PRTGCloudBot","Domain Re-Animator Bot","Domain+Re-Animator+Bot","GigablastOpenSource/","Amazon Route 53 Health Check Service","Amazon+Route+53+Health+Check+Service","ZnajdzFoto/Image","(compatible; Optimizer)","(compatible;+Optimizer)","Moreover/5.1","Spundge/0.1","CaptoraBot","^ltx71","Google News","Google+News","AppleNewsBot","Freshbot/","^eContext/","tangjiutao","kulturarw3","SearchmetricsBot","evaliant","sqlmap","web.nli.org.il/sites/NLI/English/collections","Masabeeh/Masabeeh","^omgili","^CloudEndure Scanner","^CloudEndure+Scanner","Nmap Scripting Engine","Nmap+Scripting+Engine","SmartBriefBot","FartBot","GCE x86","GCE+x86","Sgalerts","HubSpot Marketing Grader","HubSpot+Marketing+Grader","Facebot","NeumobBot","Macros-Web-Automation","Go-http-client","AppInsights","SpringBot","Clickagy Intelligence Bot","Clickagy+Intelligence+Bot","BoogleBot","webScrapy","searchbutton.org","naver.me/bot","pinterest.com/bot","BrandVerity","AddThis.com","Mediatoolkitbot","MetaCommentBot","Wotbox/","CJBot","PiplBot","MojeekBot","Quantcastbot","^arianna.libero.it","okhttp/","^LittleScraper","ken-webarchiving","TagInspector","quantcastbtot","JobboerseBot","zgrab/","demandbase","Dataprovider.com","OpenVAS","Plukkie/","ips-agent","Yeti/","evc-batch/","CrsspxlBot","The Knowledge AI","The+Knowledge+AI","OPBot","DuckDuckBot","APIs-Google","FlippBot","HisBot","Tesseract/","Qwantify/","archivethe.net","^G-i-g-a-b-o-t","HubSpot; combined-css","HubSpot;+combined-css","ExtLinksBot/","Laserlikebot/","^expo9","ScooperBot/","YaK/","HeadlessChrome/","OSZKbot/","wewatchtgbu","Google-Apps-Script","CloudFlare-AlwaysOnline/","shrinktheweb","Nessus","^bl.uk_ldfc_bot/","^MixnodeCache/","Fess/","INA dlweb","INA+dlweb","^TagVisit/","^Wada.vn Vietnamese Search","^Wada.vn+Vietnamese+Search","CutyCapt","Datanyze","^Google-Ads-Overview","Google-Read-Aloud","SISTRIX Optimizer","SISTRIX+Optimizer","PressRush/","CVManaged","Sitebulb/","Mappy/","^SemanticJuice","^ddline.cn rank history","^ddline.cn+rank+history","^IZaBEE/","marfeelman","dejaclick/","NumeratorBot","^LamarkBot","adscanner/","^IDG/","NetpeakCheckerBot/","Lucidworks-Anda/","DuplexWeb-Google/","digital long-term preservation project","digital+long-term+preservation+project","^ePochta_Extractor/","contentinsights.com data-extractor/","contentinsights.com+data-extractor/","Wappalyzer","woorankreview/","NewsUSA/","^Pandalytics/","^Seeker v","^Seeker+v","PR-CY.RU","^Google-speakr","Chrome-Lighthouse","um-LN/","^SeobilityBot","aiohttp/","Eesti Rahvusraamatukogu/","Eesti+Rahvusraamatukogu/","^WordChampBot","ExaleadCloudview/","^PleskBot","Scrubby/","Pubperf-Lighthouse","^StatusCake_Pagespeed_Indev","ArchiveBot/","^Dispatch/","^Easy-Thumb","^!Susie","Netcraft Web Server Survey","Netcraft+Web+Server+Survey","ZyBorg/","^Pompos/","FurlBot/","Ghost Inspector","Ghost+Inspector","^Mnogosearch","^ScooperBot","Select.Pdf","IndeedBot","CouponWCode Bot/","CouponWCode+Bot/","MicroAdBot/","botify","^ScopeContentAG-HTTP-Client","YaDirectFetcher/","YandexAccessibilityBot/","YandexAdNet/","YandexBlogs/","YandexBot/","YandexCalendar/","YandexDirect/","YandexDirectDyn/","YandexFavicons/","YandexForDomain/","YandexImageResizer/","YandexImages/","YandexMarket/","YandexMedia/","YandexMedianaBot","YandexMetrika/","YandexMobileBot/","YandexMobileScreenShotBot/","YandexNews/","YandexOntoDB/","YandexOntoDBAPI/","YandexPagechecker/","YandexPartner/","YandexRCA/","YandexScreenshotBot/","YandexSearchShop/","YandexSitelinks","YandexSpravBot/","YandexTracker/","YandexTurbo/","YandexVerticals/","YandexVertis/","YandexVideo/","YandexVideoParser/","YandexWebmaster/","YandexAntivirus/","PetalBot","AspiegelBot","Morningscore/","^8LEGS","Google Favicon","Google+Favicon","Adsbot/","NetcraftSurveyAgent/","^CriteoBot/","detectify","Uptime/","^axios/","seolyt/","ssr.ias-lab.de","AmazonProductDiscovery/","^armeria/","aport","b2w","combine","crawl","crescent","curl","dialer","fetch","grub","harvest","httrack","ibot","lisa","nomad","obot","pita","sohu","spider","teleport","webtrends","worm","Daum","OrangeBot","Seznam","^WhatsApp/"];
var c=d.join("|").replace(/[-[\]{}()*+?.,\\$|#\s]/g,"\\$&");
var b=new RegExp(c,"i");
if(b.test(aps.cfg.userAgen)){aps.cfg.IABSpiders="true"
}aps.logInfo("user agent "+((aps.cfg.IABSpiders)?"is not":"is")+" a spider");
aps.addPageKvp("IABSpiders",aps.cfg.IABSpiders);
aps.cfg.IABBrowsers="false";
var a=["(Apple; CPU)","(Apple;+CPU)","++UE4+Release","^ABCNews","^ADhubee","^AHONG","^AIM","^ANVSDK","^AOL/AIM/","^AOLadServerGifbank","^AU-MIC","^AUDIOVOX-","^Acast/","^AdColony Adserver/","^AdColony+Adserver/","^AdXChange","AdobeAIR","AerServ","^Aftonbladet/","^Alcatel","Amazon","^Amiga","^Amoi","Android","^Anypoint-SSP/","^Apache-HttpClient/UNAVAILABLE","^Apple Mac","^Apple Safari","Apple TV","^Apple+Mac","^Apple+Safari","Apple+TV","^AppleCoreMedia","AppleTV","^Appsflyer-Server","^Asus","^AvegaMediaServer/","^AvsDeviceSdk/","BARouter","^BIRD","BREW","BUNTE.de/de.burda.buntede","^BenQ","^BlackBerry","^Bleach/","Blitzlicht/com","^Boggle","^Bose/","^Bose_Lisa/","^Branch Metrics API","^Branch+Metrics+API","^Break","^Bring!/","^Bring/","^BroadSign Reach DOOH Player/","^BroadSign+Reach+DOOH+Player/","^CDM","CFNetwork","^CanoeVentures/RequestManager","^CastBox/","Chocolate-VMP/","Configuration/CLDC","Crazy Browser","Crazy+Browser","^Crunchyroll/","^Cupid/","^DBTEL","^DMTT","^Dalvik","^Dancing%20On%20Ice","^DancingOnIce","Darwin","^Deezer/","^DoCoMo","DoubleClick RProxy","DoubleClick SmartCount","DoubleClick+RProxy","DoubleClick+SmartCount","^Draw%20Free","^ERICY-","ESPNApp_ExoPlayer","^EbGamingClient","^EbPcExtMng","^Echo/","^Elinks","Elisa","^Emacs-W3","^Ericsson","Eudora","^Eurogamer","^Explorer-VeohWebPlayer","FBAN/","^FOXNews/","^FTV/","^FantasyUniversal","^FeedDemon","FetchTV","FireOS","FireTV","^Fly","^Frameplay/","^France Explorer","^France+Explorer","^FreeSWITCH(mod_shout)/","^GIONEE","^Go.Web/","^Google-AdX-Bidder-Ping","^Gradiente","Grundig","^HD-MMD1010/","^HD2_","^HP iPAQ","^HP+iPAQ","HPiPAQ","^HS-","^HTC","^Haier","^HangingWithFriendsFree","HasOffers","HbbTV","^HollerSDK/","HorizonWPE","^Horoscopes","^HotJava","^Huawei","^Hulu","^IBM WebExplorer","^IBM+WebExplorer","^ICE Browser","^ICE+Browser","^ICQ","^IMAtvOS","^ITV_Player","Ignition X/","Ignition+X/","^Ignition/","^Internet Explorer","^Internet+Explorer","^Invoca-Integrations","^J-PHONE/","^KDDI-","Klondike","^Konqueror","^L-mode/","^LENOVO","^LG Browser","^LG+Browser","^LG-","^LG/","^LGE-","^Lavf","^LinkBoks","^Lotus SmartCenter","^Lotus+SmartCenter","^Lotus-Notes","^Louisville/Zune/Xbox360","^Lynx","^M6/","MALNJS","MAUI","^MOT-","^MOTO-","^MOTORAZR","^MOTORIZR","^MOTOROKR","MQQBrowser","MSN Mobile","MSN+Mobile","^MTA:SA Server","^MTA:SA+Server","^MacMini","^MacPro","^Macbook","^MailOnline","MapQuest Mobile","MapQuest+Mobile","MapQuest-Mobile","^MapQuest/","^MassiveAdClient","^Meebo/","^Megaphone-Tracking-Url-Service/","^Micromax","^Microsoft Internet Explorer","^Microsoft Office/","^Microsoft+Internet+Explorer","^Microsoft+Office/","^Microsoft-Xbox-One","^Microsoft/","^Mitsu-","^Mitsu/","^MobileSafari","^Moozilla","^Mosaic","^Motorola","^MoveIt","^Mozilla Compatible","^Mozilla+Compatible","^Mozilla/","^Mplayer","^MyYearbook","^NEC-","^NETCOMplete","^NP800-Uniti","^NRS DOOH PLAYER/","^NRS+DOOH+PLAYER/","^NSPlayer","^NYTimes/","^Naruto/","NetFront","^Nokia","^OAR/","^ORF Tvthek","^ORF+Tvthek","OneBrowser","^Onefootball/","^Opera","Opera Mini","Opera+Mini","OperaMini","^Outlook-Express/","^Overcast/","PC-Youku/","^PG-","PHILIPS","PS3Application","PS4Application","^PT-","^PalmCentro","^Palmscape/","Panasonic","^Pandora","^Pantech","Philco","Playstation","^Pocket Casts","^Pocket+Casts","Profile/MIDP","^QC-/","^QC6035/","^QYPlayer/iOS/","^QtWebKit","^Qtek","^RD2020","^RD21","^RMA/","^Radio@Netscape","^Radioplayer","^Realytics/","^Reddit/","ResponseTap","^Rhythm","Roku","^Rover","Ruckus","^SAGEM","^SCH-","^SEC-","^SEC03","^SFRWebkitLauncher","^SGH-","^SHARP","^SHImpressionTracker/","^SKT11SK","^SMFC/","^SMTP","^SOLEO","^Safari","Samsung","^Samsung-SGH","^Sanyo-","^ScoreMobile/","^ScrambleWithFriends","Semp","Series60","^ShareChat/","^ShareChatApp/","Silk-Accelerated","Simple Browser","Simple+Browser","SiteKiosk","^SkyD_STB","^SkyQ_STB/","^SmartDownload","SmartTV","^SoftBank","^Solitaire","Sonos","^Sony","SonyEricsson","^Spice","^Spinner","^Sportacular/","^Sportbladet/","SpotXchange","Spotify","Spotx Web Proxy","Spotx+Web+Proxy","^Stitcher/","^Stocard/","^StreamMagic/","Sunrise","^Surviving_HS","Syabas","^T-Mobile Dash","^T-Mobile+Dash","^TBD","^TF1/","TFFTWrapper","TIANYU-KTOUCH","^TMZ","^TPSystem","^TWC","^Tapjoy Downloader","^Tapjoy+Downloader","TeleNav","^Textfree","^TiVo","Tizen","Toshiba","^TransperaSDK","TremorVideo/SSP-AdServer","TritonDigitalTracker","^U2FsdGVkX1","UCBrowser","UCWEB","^UK-MHEG","^UNiDAYS/","UP.Browser","UP.Link","UP/","^UnityPlayer/","^UnlimitedSMS","^Uzbl","^VLC","^Videofy.me","Vienna/","^Vodafone","Vungle","W3M","^WELLCOM","^WFB user agent","^WFB+user+agent","^WMPlayer/","WMT1H/","WapTV/","^WebtrendsClientLibrary","^WinWAP","^Winamp","Winamp3","Windows Ad Client","Windows Phone","Windows+Ad+Client","Windows+Phone","^Windows-Media-Player/","WindowsAdClient","^Wise","^WordsWithFriendsFree","^X%20Factor","XBOX360","^XV6975","Xbox Live Client","Xbox+Live+Client","XboxOne","^Xda","^Y!J2ME","^Y!MSGR","^Y!Oasis","^Y!PHOTOS","^YInstHelper","^YJInstHelper","^YPC","^YPHOTOS","^YUMSURL","^Yahoo!_for_SMS","^YahooMailProxy","^YahooMobile","YouView","^ZTE-","abcplayer","adjust.com","anonymized by abelssoft","anonymized+by+abelssoft","^aolbrowser","^atc/","^barcoo","bidstack","^burnbubb","^checkpoints_","^clearchannel/","^clipfish","com.facebook.katana","com.mlb.AtBatUniversal/","^com.murselturk.radyo7","com.skype.skype","^dopod","dorado wap-browser","dorado+wap-browser","^flixster","^gbplugin","googletv","^i-mobile","^iBrowser","iCab","iLiga","^iMac","iPhone","iPod","iTunes","ios_ampya","ipad","^ipla/","^ipla_MOBILE","kochava","^liquid air lab","^liquid+air+lab","^marktjagd","^mheg-uk","^mipla_a","^mipla_w8rt","muJS/","^myTuner","^nook browser","^nook+browser","^offeristafr","^orf-tvthek","ott_dt_stb","partner frontier","partner+frontier","^pb0.6b","^profital","^scorecenter","^scrabblefree","smartclip-atv","^treo","twitter","uforia","^waipu/","wap browser-karbonn","wap+browser-karbonn","^webUserAgent","windows mobile application search","windows+mobile+application+search","windowsphoneadclient","wininethttploader","^wogibtswas","^wunderkauf","^xbox"];
a.forEach(function(e){e=e.replace(/[-[\]{}()*+?.,\\$|#\s]/g,"\\$&");
var f=new RegExp(e,"i");
if(f.test(aps.cfg.userAgent)){aps.cfg.IABBrowsers="true";
aps.logInfo("user agent "+e+" matched")
}});
aps.logInfo("user agent "+((aps.cfg.IABBrowsers)?"is":"is not")+" a valid browser");
aps.addPageKvp("IABBrowsers",aps.cfg.IABBrowsers)
})();(function(){aps.cfg.sectionPath=null;
if(HDN&&HDN.dataLayer&&HDN.dataLayer.content){aps.cfg.sectionPath=HDN.dataLayer.content.sectionPath
}if(aps.isLeafSite){aps.addPageKvp("section1",document.location.hostname.split(".")[0]);
aps.addPageKvp("category","third_party");
aps.addPageKvp("custom","demandmedia")
}if(aps.cfg.sectionPath){aps.logInfo("section Path: "+aps.cfg.sectionPath);
for(var a=0;
a<3;
a++){if(aps.cfg.sectionPath[a]){aps.cfg.sectionPath[a]=aps.cfg.sectionPath[a].replace(/["\'=!#*~;\^<>]/g,"");
aps.cfg.sectionPath[a]=aps.cfg.sectionPath[a].replace(/\s\+\s|\s\&\s|\+|\&/g,"-and-");
aps.cfg.sectionPath[a]=aps.cfg.sectionPath[a].replace(/[\(\)\[\],]/g,"|");
aps.logInfo("section Path: section"+(a+1)+"="+aps.cfg.sectionPath[a]);
aps.addPageKvp("section"+(a+1),aps.cfg.sectionPath[a])
}}}})();(function(){aps.refreshAvailable=false;
aps.pageKVPsByDomID=[];
aps.hearstPlaceAdHasUpdatedKVPS=false;
aps.current_page_kvps={};
aps.adScripts=aps.adScripts||{};
aps.queuedWaitCount=aps.queuedWaitCount||0;
aps.queuedScriptCount=aps.queuedScriptCount||0;
aps.adScriptsLoaded=false;
aps.queryStringObj=null;
aps.serveAds=true;
if(document.location.hostname.startsWith("storystudio")){aps.logInfo("storystudio - no ads");
aps.serveAds=false
}aps.slotsSetup=false;
aps.faceBookInstantArticle=(JuicePageUrl.indexOf("juicemode=fbinstant")!==-1);
aps.shouldPlaceAd=function(adCode){return true
};
aps.shouldRunThirdParty=function(modulecode){return true
};
aps.loadGoogleService=function(async){window.onJuiceEvent_LoadingGPT&&window.onJuiceEvent_LoadingGPT();
if(!aps.googleLoaded){var gads=document.createElement("script");
if(async){gads.async=true
}gads.type="text/javascript";
gads.src="https://web.archive.org/web/20211007045442/https://securepubads.g.doubleclick.net/tag/js/gpt.js";
var node=document.getElementsByTagName("script")[0];
node.parentNode.insertBefore(gads,node)
}};
aps.gcontext={};
aps.gcontext._setTargeting=function(kvpKey,kvpValue){if(kvpKey!=""){aps.current_page_kvps[kvpKey]=kvpValue;
googletag.cmd.push(function(){googletag.pubads().setTargeting(kvpKey,kvpValue)
})
}};
aps.gcontext.pubads=function(){this.setTargeting=function(kvpKey,kvpVal,logmsg){logmsg=logmsg||null;
if(aps.slotsSetup){aps.gcontext._setTargeting(kvpKey,kvpVal);
if(logmsg!=null){aps.logInfo(logmsg)
}}else{aps.registerEvent(aps.event.on_end_define_tags,function(parms){aps.gcontext._setTargeting(kvpKey,kvpVal);
if(logmsg!=null){aps.logInfo(logmsg)
}})
}};
this.clearTargeting=function(kvpKey){aps.current_page_kvps[kvpKey]=null;
googletag.pubads().clearTargeting(kvpKey)
};
return this
};
aps.runWhenSlotsReady=function(fn){if(aps.slotsSetup){fn()
}else{aps.registerEvent(aps.event.on_end_define_tags,function(parms){fn()
})
}};
aps.getQueryParameterByName=function(key){if(aps.qeueryStringObj==null){aps.qeueryStringObj=aps.queryStringToJSON()
}var qobj=aps.qeueryStringObj;
var keyToUse=key.replace("[]","");
if(!qobj.hasOwnProperty(keyToUse)){return null
}if(key.indexOf("[]")==-1){return qobj[keyToUse]
}if(typeof qobj[keyToUse]==="string"){var retval=[];
retval.push(qobj[keyToUse]);
return retval
}return qobj[keyToUse]
};
aps.queryStringToJSON=function(){var str=location.search.slice(1);
var pairs=str.split("&");
var result={};
pairs.forEach(function(pair){pair=pair.split("=");
var name=pair[0];
var value=pair[1];
if(name.length){if(result[name]!==undefined){if(!result[name].push){result[name]=[result[name]]
}result[name].push(value||"")
}else{result[name]=value||""
}}});
return(result)
};
aps.initialUpdatePageLevelKVPS=function(apsContext){if(!aps.hearstPlaceAdHasUpdatedKVPS){aps.hearstPlaceAdHasUpdatedKVPS=true;
aps.logInfo("calling updatePageLevelKVPS from hpa");
top.aps.updatePageLevelKVPS(apsContext)
}};
aps.updatePageLevelKVPS=function(apsContext){aps.addPageKvp("juice_id",APSpageID.toString());
if(window.omni_bizObjectId){aps.addPageKvp("WcmID",window.omni_bizObjectId)
}return;
aps.cfg.dfp.pageLevelKvpDone=aps.cfg.dfp.pageLevelKvpDone||false;
if(!aps.cfg.dfp.pageLevelKvpDone){aps.cfg.dfp.pageLevelKvpDone=true;
for(var i=0;
i<aps.page_kvps.length;
i++){var kvp=aps.page_kvps[i];
var kvp_value=kvp.value;
try{if(typeof(kvp_value)!="object"){if(kvp_value.substring(0,1)=="{"){kvp_value=window.eval(kvp_value.replace("{","").replace("}",""));
if(typeof(kvp_value)=="undefined"){aps.logWarning("Undefined value for page Level KVP: "+kvp.key);
continue
}}}aps.logInfo("page kvp: "+kvp.key+" = "+kvp_value);
apsContext.pubads().setTargeting(kvp.key,kvp_value)
}catch(e){aps.logWarning("Exception setting page Level KVP: "+kvp.key+" message: "+e.message)
}}}};
aps.setupResponsiveMappings=function(slot,ad){var arSizeMappings=aps.generateSizeMappings(ad);
slot.defineSizeMapping(arSizeMappings)
};
aps.generateSizeMappings=function(ad){var arSizeMappings=[];
if(ad.sizeMappings!=undefined&&ad.sizeMappings.length>0){if(aps.isLegacy){aps.sizeMappings=ad.sizeMappings.filter(function(sizemap){return sizemap.split("x")[0]<aps.pageWidth
});
var largest=ad.sizeMappings[0].split("x")[0];
ad.sizeMappings=ad.sizeMappings.filter(function(sizemap){return sizemap.split("x")[0]==largest
});
for(var i=0;
i<ad.sizeMappings.length;
i++){ad.sizeMappings[i]=ad.sizeMappings[i].replace(largest,"0001")
}if(ad.sizeMappings.length==0){ad.sizeMappings.push("0001x0x0")
}}var arFixedMappings=[];
var arViewports=[];
var viewPortIDX={};
for(var i=0;
i<ad.sizeMappings.length;
i++){var arMap=ad.sizeMappings[i].split("x");
var adSize=[parseInt(arMap[1],10),parseInt(arMap[2],10)];
var nViewport=parseInt(arMap[0],10);
var idx=viewPortIDX[arMap[0]];
if(idx==undefined){idx=arFixedMappings.length;
arFixedMappings[idx]=new Array();
viewPortIDX[arMap[0]]=idx;
arViewports.push(arMap[0])
}if(adSize[0]!=0&&adSize[1]!=0){arFixedMappings[idx].push(adSize)
}}for(i=0;
i<arViewports.length;
i++){var viewport=[parseInt(arViewports[i],10),100];
var idx=viewPortIDX[arViewports[i]];
var slots=arFixedMappings[idx];
slots.push(["fluid"]);
if(slots.length==1){arSizeMappings.push([viewport,slots[0]])
}else{arSizeMappings.push([viewport,slots])
}}}else{arSizeMappings.push([[0,0],[ad.width,ad.height]])
}return arSizeMappings
};
window.hearstSetAdPageType=function(pageType){if(aps.cfg.stp[aps.cfg.stp.at].ads.length>0){for(var i=0;
i<aps.cfg.stp[aps.cfg.stp.at].ads.length;
i++){var hasPageType=false;
var ad=page.ads[i];
var slot=aps.cfg.stp[aps.cfg.stp.at].ads[i];
for(var j=0;
j<ad.kvps.length;
j++){if(ad.kvps[j].key=="page_type"){hasPageType=true;
ad.kvps[j].value=pageType;
break
}}if(!hasPageType){ad.kvps.push({key:"page_type",value:pageType})
}setDFPSlotTargeting(ad,slot,true)
}}};
window.setDFPSlotTargeting=function(ad,slot,clearTargeting){if(clearTargeting){slot.clearTargeting()
}if(!ad.kvps){return
}for(var j=0;
j<ad.kvps.length;
j++){var kvp=ad.kvps[j];
slot.setTargeting(kvp.key,kvp.value)
}slot.setTargeting("DIV_ID",ad.code)
};
aps.getAdDefinitionByCode=function(code){return aps.cfg.dfp.ads[code]
};
aps.filterRevenueProfileAds=function(code){if(aps.cfg.dfp.revenueProfile==undefined){aps.cfg.dfp.revenueProfile=[];
try{if(HDN.dataLayer.content.designTemplate.indexOf("dynamic_two_column.tpl")>-1){var revProfile=Object.entries(HDN.dataLayer.revenueProfiles.profiles);
for(var rp in revProfile){var subscriptions=revProfile[rp][1];
for(col in subscriptions){if(col.indexOf("column")==0){var ads=Object.entries(subscriptions[col]);
for(adtype in ads){aps.cfg.dfp.revenueProfile.push(ads[adtype][1].id)
}}}}if(aps.current_domain=="timesunion.com"){aps.cfg.dfp.revenueProfile.push("LNlogo")
}}}catch(e){}}if(aps.cfg.dfp.revenueProfile.length>0&&aps.cfg.dfp.revenueProfile.indexOf(code)==-1){return false
}else{return true
}};
aps.fixLen=function(text,len){var padder="                                    ";
var tlen=(""+text).length;
var pad=(tlen<len)?len-tlen:0;
return text+padder.substr(0,pad)
};
aps.logSkip=function(adcode,reason){aps.alreadyLogged=aps.alreadyLogged||[];
if(aps.alreadyLogged.indexOf[adcode+":"+reason]>-1){return
}aps.logInfo("*SKIP "+aps.fixLen(adcode,10)+" "+reason);
aps.alreadyLogged.push(adcode+":"+reason)
};
aps._initAdDefinitionByCode=function(param){if(!aps.serveAds){return
}if(typeof definedTags=="undefined"){aps.waitForDefinedTags(function(){aps._initAdDefinitionByCode()
});
return
}aps.page=aps.page||definedTags;
page_kvps_loaded=aps.page_kvps_loaded||false;
if(!page_kvps_loaded){definedTags.kvps.forEach(function(kvp){aps.addPageKvp(kvp.key,kvp.value)
})
}aps.cfg.dfp.allAds=aps.cfg.dfp.allAds||[];
var adsToProcess=[];
if(param==undefined){adsToProcess=aps.page.ads
}else{adsToProcess.push(param)
}var hasNewAd=false;
for(var i=0;
i<adsToProcess.length;
i++){var ad=adsToProcess[i];
if(typeof(aps.cfg.dfp.ads[ad.code])!="undefined"&&typeof(aps.cfg.dfp.ads[ad.code].sizes)!="undefined"){continue
}aps.cfg.dfp.allAds.push(ad.code);
hasNewAd=true;
ad.advertiserId=0;
ad.batchRequest="";
ad.googleFrame=null;
ad.exclude=ad.exclude||false;
ad.impressionViewable=false;
ad.isBounceX=false;
ad.isDynamic=false;
ad.isLoading=false;
ad.kvps=ad.kvps||[];
ad.lowerCode=ad.code.toLowerCase();
ad.mediaType="banner";
ad.supportsNative=ad.code.startsWith("NTV")?true:false;
ad.position="";
ad.refreshable=false;
ad.renderCount=1;
ad.renderedSize="";
ad.sizes=aps.setAdSize(ad);
ad.stringSizes=[];
ad.trackScrollPosition=true;
aps.checkMultiType(ad);
for(var j=0;
j<ad.sizes.length;
j++){ad.stringSizes.push(ad.sizes[j].join("x"))
}if(!aps.toBeDisplayed(ad)){aps.logSkip(ad.code,"will not show on this device");
ad.exclude=true
}if(!aps.filterRevenueProfileAds(ad.code)&&!ad.multiAd){aps.logSkip(ad.code,"not included in revenueProfile");
ad.exclude=true
}aps.setAdPosition(ad,true);
aps.cfg.dfp.ads[ad.code]=ad;
aps.fireEvent(aps.event.on_init_ad_definition,{adDefinition:ad});
if(aps.cfg.bid.prefetch.enabled&&!ad.exclude){aps.fireEvent(aps.event.on_define_bid_data,ad)
}}if(adsToProcess.length<=1||!hasNewAd){if(aps.page.ads.length==0&&!location.pathname.startsWith("/sponsoredarticles")&&!location.href.startsWith("https://web.archive.org/web/20211007045442/https://www.chron.com/shopping/")){aps.logInfo("******************************");
aps.logInfo("No ads defined on "+juiceservice.replace("aps","juiceui")+"DfpPage/Edit/"+APSpageID);
aps.logInfo("******************************");
ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice-undefined-ads",eventAction:location.href,eventLabel:juiceservice.replace("aps","juiceui")+"DfpPage/Edit/"+APSpageID})
}return
}if(aps.cfg.bid.prefetch.enabled){var remaining=aps.cfg.dfp.revenueProfile.filter(function(id){return aps.cfg.dfp.allAds.indexOf(id)==-1
});
for(var adno in remaining){adType=remaining[adno];
if(adType.startsWith("NTV")){continue
}if(aps.cfg.dfp.multi.availableTypes[adType]!=undefined){if(aps.page_type2=="slideshow list view"){for(var i=1;
i<=10;
i++){var newSlot=JSON.parse(JSON.stringify(aps.cfg.dfp.multi.availableTypes[adType]));
newSlot.code=aps.cfg.dfp.multi.availableTypes[adType].code+"-"+i;
newSlot.multiAd=true;
aps.page.ads.push(newSlot);
aps._initAdDefinitionByCode(newSlot)
}}}else{ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice-missing-ads",eventAction:location.hostname+location.pathname,eventLabel:remaining[adno]})
}}if(aps.isLeafSite&&aps.cfg.stp.at==-1){aps.page.ads.forEach(function(ad){if(!ad.exclude&&ad.multiAd){for(var i=1;
i<=2;
i++){var newSlot=JSON.parse(JSON.stringify(aps.cfg.dfp.ads[ad.code]));
newSlot.code=ad.code+"-"+i;
newSlot.multiAd=true;
aps.page.ads.push(newSlot);
aps._initAdDefinitionByCode(newSlot)
}}})
}aps.fireEvent(aps.event.on_initial_bid_request)
}aps.setAdUnit(false)
};
aps.getNextDynamicAdDivID=function(code){var ad=aps.getAdDefinitionByCode(code);
return code+"-"+aps.divIDPostfix+"-"+ad.renderCount
};
aps.getLastDynamicAdDivID=function(code){var ad=aps.getAdDefinitionByCode(code);
return code+"-"+aps.divIDPostfix+"-"+(ad.renderCount-1)
};
window.hearstGetNextDynamicAdDivID=function(code){return aps.getNextDynamicAdDivID(code)
};
window.hearstGetLastDynamicAdDivID=function(code){return aps.getLastDynamicAdDivID(code)
};
aps.MarkDivIDAsUnique=function(){var divID=arguments[0];
var code=(arguments.length>=2)?arguments[1]:divID;
aps.codesByDomID[divID]=code
};
aps.isDivIDUniqueForAdPlacement=function(fname,divID){if(typeof(aps.codesByDomID[divID])!="undefined"){if(aps.codesByDomID[divID]=="passthrough"){return true
}aps.logWarning("A duplicate div id was specified ("+divID+") for "+fname+".  The call was ignored.");
return false
}return true
};
aps.logPageKVPsforDiv=function(divID){aps.pageKVPsByDomID[divID]={};
var pageKVPs=aps.current_page_kvps;
var divKVPS=aps.pageKVPsByDomID[divID];
for(var keyVal in pageKVPs){if(!pageKVPs.hasOwnProperty(keyVal)){continue
}divKVPS[keyVal]=pageKVPs[keyVal]
}};
window.setDfpSearchValues=function(apsContext){if(typeof(aps)!="undefined"&&aps!=null){aps.key=aps.key||"";
aps.values=aps.values||"";
try{apsContext.pubads().setTargeting(aps.key,aps.values)
}catch(e){}}};
aps.run_once=function(fn,context){var result;
return function(){if(fn){result=fn.apply(context||this,arguments);
fn=null
}return result
}
};
aps.contentLoaded=function(win,fn){var done=false,top=true,doc=win.document,root=doc.documentElement,add=doc.addEventListener?"addEventListener":"attachEvent",rem=doc.addEventListener?"removeEventListener":"detachEvent",pre=doc.addEventListener?"":"on",init=function(e){if(e.type=="readystatechange"&&doc.readyState!="complete"){return
}(e.type=="load"?win:doc)[rem](pre+e.type,init,false);
if(!done&&(done=true)){fn.call(win,e.type||e)
}},poll=function(){try{root.doScroll("left")
}catch(e){setTimeout(poll,50);
return
}init("poll")
};
if(doc.readyState=="complete"){fn.call(win,"lazy")
}else{if(doc.createEventObject&&root.doScroll){try{top=!win.frameElement
}catch(e){}if(top){poll()
}}doc[add](pre+"DOMContentLoaded",init,false);
doc[add](pre+"readystatechange",init,false);
win[add](pre+"load",init,false)
}};
aps.getChildElementByNameAndTag=function(elm,name,tagName){var nodes=elm.childNodes;
for(var i=0;
i<nodes.length;
i++){var node=nodes[i];
if(typeof(node.name)!="undefined"){if(node.name.indexOf(name)!=-1){if(node.tagName==tagName){return node
}}}}return null
};
aps.clearAdSlotFrameContent=function(frame){try{frame.parentNode.removeChild(frame)
}catch(e){}};
aps.findAdSlotFrame=function(divid){var elm=document.getElementById(divid);
if(elm!=null){var delm=aps.getChildElementByNameAndTag(elm,"google_ads_iframe_","DIV");
if(delm!=null){return aps.getChildElementByNameAndTag(delm,"google_ads_iframe_","IFRAME")
}}return null
};
aps.toBeDisplayed=function(ad){var willDisplay=false;
var widthfound=30000;
for(var j=0;
j<ad.sizeMappings.length;
j++){var map=ad.sizeMappings[j].split("x");
var split=parseInt(map[0]);
if(split>aps.pageWidth){continue
}if(widthfound==30000){widthfound=split
}if(widthfound==split){if(parseInt(map[1])>0&&parseInt(map[2])>0){willDisplay=true
}}}return willDisplay
};
aps.setAdSize=function(ad){var availables=["320x50","300x250","300x600","400x300","640x480","728x90","970x90","970x250","501x501","001x001","620x366","325x508","325x204","336x280","160x600","320x100","155x210","286x110","300x300","309x280","840x300"];
var sizes=[];
var widthfound=30000;
var doNotServe=["DTBK_AP951","MW_1_TEXT","MW_2_TEXT","MW_3_TEXT"];
if(doNotServe.indexOf(ad.code)>-1){aps.logInfo("Skippig ad:"+ad.code);
return sizes
}ad.sizeMappings=ad.sizeMappings||[];
for(var j=0;
j<ad.sizeMappings.length;
j++){var map=ad.sizeMappings[j].split("x");
var split=parseInt(map);
if(split>aps.pageWidth){continue
}if(widthfound==30000){widthfound=split
}if(widthfound==split){var adSize=map[1]+"x"+map[2];
if(availables.indexOf(adSize)>-1){sizes.push([parseInt(map[1]),parseInt(map[2])])
}}}return sizes
};
aps.getDictionnaryKey=function(dictionnary,value,destination){var BreakException={};
var retValue=destination;
try{Object.entries(dictionnary).forEach(function(line){if(line[1].includes(value)){retValue=line[0];
throw BreakException
}})
}catch(e){if(e!==BreakException){throw e
}}return retValue
}
})();(function(){try{var a=document.location.search.indexOf("adtest")+7;
if(a==6){return
}var c=document.location.search.indexOf(";",a);
if(c==-1){c=document.location.search.length-a
}aps.cfg.adtestparam=document.location.search.substr(a,c);
if(aps.cfg.adtestparam){aps.page_kvps=aps.page_kvps||[];
aps.cfg.adtestparam=decodeURI(aps.cfg.adtestparam).split("|");
for(var g=0;
g<aps.cfg.adtestparam.length;
g++){var d=aps.cfg.adtestparam[g];
var h=d.split(":");
var i=h[0];
var f=h[1].split("=");
if(i=="page"){aps.addPageKvp(f[0],f[1])
}else{if(!aps.cfg.adtest[i]){aps.cfg.adtest[i]=[]
}aps.cfg.adtest[i].push({key:f[0],value:f[1]})
}}}}catch(b){}})();(function(){var b=this;
b.getHostName=function(d){var c=d.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
if(c!=null&&c.length>2&&typeof c[2]==="string"&&c[2].length>0){return c[2]
}else{return null
}};
b.getDomain=function(f){var d=b.getHostName(f);
var c=d;
if(d!=null){var e=d.split(".").reverse();
if(e!=null&&e.length>1){c=e[1]+"."+e[0];
if(e.length>2&&e[2].toLowerCase()=="m"){c="m."+c
}}}return c
};
if(typeof(aps.current_domain)=="undefined"){try{aps.current_domain=b.getDomain(document.URL)
}catch(a){aps.logException("unable to resolve domain name",a);
aps.current_domain="undefined"
}}aps.cfg.bid.current_domain=aps.current_domain;
if(aps.cfg.bid.current_domain.indexOf("m.")==0){aps.cfg.bid.current_domain=aps.cfg.bid.current_domain.substr(2)
}if(aps.cfg.bid.current_domain=="ctinsider.com"){googletag.cmd.push(function(){aps.gcontext.pubads().setTargeting("sect","ctinsider")
})
}})();(function(){aps.cfg.forcePos={"atf":["bpflex","concert1","concert2","crown","eeinsert","ee300","ee300_2","ee300_3","ee320","ee728","flex1","gsa1","gsa2","gsa2_m","gsa3","gsa3_m","gsa4","gsa4_m","gsa5","gsa_rec","gsa_rec_m","gsa_drec","gsa_lead","leaf1","leaf2","leaf3","leaf4","list","lnlogo","mad","mw_1_text","pmad","qat","rb","vsf1"],"btf":["cp300","dp300","ep300","cpflex","dpflex","epflex","fpflex","gpflex","mw_2_text","qat2","tmp300_3","vsf2"],"stf":["ft728","la300","mw_3_text","mw728_1","mw728_2","rs300","vsf3"],"oop":["oop"],"":["noad","spweather"]};
aps.setAdPosition=function(a,f){var e=f||false;
var g=a.kvps.filter(function(i){return i.key=="position"
});
var h=(g.length==0)?"":g[0].value;
if(g[0]&&Array.isArray(g[0].value)){g[0].value=g[0].value[0];
h=g[0].value
}var b=a.lowerCode.replace("dtbk_","").replace("obit-","").split("-")[0];
var d="";
var c=b.substring(0,1);
if(["a","b","s"].includes(c)){d=c+"tf"
}d=aps.getDictionnaryKey(aps.cfg.forcePos,b,d);
if(d==""&&!aps.cfg.forcePos[""].includes(b)){d="atf";
ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice_position",eventAction:a.code,eventLabel:document.location.href})
}if(h!=d.toUpperCase()){if(h!=""&&d==""){d=h.toLowerCase()
}else{if(h!=""&&d!=""){if(e){h=d.toUpperCase()
}else{d=h.toLowerCase()
}}else{a.kvps.push({"key":"position","value":d.toUpperCase()})
}}}a.position=d;
if(debugSGA&&debugSGA.log=="all"&&d!=""){aps.logInfo("*KVP "+a.code+" - "+d)
}if(a.code=="mad"){a.position="mad"
}if(a.code=="tmp300_3"){a.potision="atf"
}}
})();(function(){aps.setAdUnit=function(){var e=(APSpageUrl=="")?document.location.href:"https://"+APSpageUrl;
e=e.substring(e.indexOf("/")+2).split("#")[0].toLowerCase();
var h=e.indexOf("/");
var d=e.substring(0,h);
var g=e.substring(h);
var c=d.toLowerCase().split(".");
var b=c[c.length-2]+"."+c[c.length-1];
var f=g.toLowerCase().split("?")[0].split("/");
f=(f[f.length-1]=="")?f.slice(1,f.length-1):f.slice(1,f.length);
var a={domainInfo:c,current_domain:b,hostname:d,isSubDomain:(c[0]=="www")?false:true,pathInfo:f,previousValue:aps.page.adUnit||"",queryStringOverwritten:false,forceSectionFrontsToDefault:[],levelOne:{value:"hnp-"+b,forced:false,},levelTwo:{infoToUse:f[0],value:"",forced:false,"default":"default"},checkQueryStringValue:function(){var j=aps.getQueryParameterByName("hnpau");
if(!j){return
}var i=j.split("/");
if(i[0]&&i[0]!=""){if(i[0].startsWith("hnp-")){this.levelOne.value=i[0];
this.levelOne.forced=true;
this.queryStringOverwritten=true
}else{aps.logInfo("*WRN* Using hnpau query string param to set runtime adunit needs to have an adunit to start with 'hnp-'. To define second level, add it after /. To only change second level, start at /")
}}if(i[1]&&i[1]!=""){this.levelTwo.value=i[1];
this.levelTwo.forced=true;
this.queryStringOverwritten=true
}},getNewValue:function(){this.checkQueryStringValue();
if(aps.isLegacy){if(!this.levelOne.forced){this.levelOne.value="hnp-"+this.current_domain;
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value="Obituaries";
this.levelTwo.forced=true
}}if(aps.isEEdition){if(!this.levelOne.forced){var j="";
switch(this.pathInfo[2]){case"houstonchronicle":j="chron.com";
break
}if(j!=""){this.levelOne.value="hnp-"+j;
this.levelOne.forced=true
}}if(!this.levelTwo.forced){this.levelTwo.value="E-edition";
this.levelTwo.forced=true
}}if(aps.isQA){if(!this.levelOne.forced){this.levelOne.value="hnp-hearstdemosite";
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value="hearstdemozone";
this.levelTwo.forced=true
}}if(aps.isLeafSite){if(this.hostname=="pyme.lavoztx.com"){if(!this.levelOne.forced){this.levelOne.value="hnp-chron.com";
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value="La_Voz";
this.levelTwo.forced=true
}}if(!this.levelOne.forced){this.levelOne.value="hnp-"+this.current_domain;
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value=(this.pathInfo=="")?"channel_leaf":"article_leaf";
this.levelTwo.forced=true
}}if(aps.isRichie){if(!this.levelOne.forced){this.levelOne.value="hnp-"+this.current_domain;
this.levelOne.forced=true
}if(!this.levelTwo.forced){this.levelTwo.value="article_rapp";
this.levelTwo.forced=true
}}if(!this.levelTwo.forced&&!this.isSubDomain&&this.pathInfo.length==0){this.levelTwo.value="Homepage";
this.levelTwo.forced=true
}if(!this.levelTwo.forced){var i="";
if(HDN&&HDN.dataLayer&&HDN.dataLayer.content&&HDN.dataLayer.content.designTemplate){i=HDN.dataLayer.content.designTemplate||""
}switch(i){case"design/article/dynamic_two_column.tpl":this.levelTwo.value="article_dtc";
this.levelTwo.forced=true;
break;
case"design/article/dynamic_one_column.tpl":this.levelTwo.value="article_doc";
this.levelTwo.forced=true;
break;
case"design/slideshow/dynamic_two_column.tpl":this.levelTwo.value="article_list";
this.levelTwo.forced=true;
break;
case"design/channel/dynamic_two_column.tpl":this.levelTwo.value="channel_wcm";
this.levelTwo.forced=true;
break
}}if(this.levelTwo.value==""){this.levelTwo.value=this.levelTwo.defaultTo
}var k=this.levelOne.value+"/"+this.levelTwo.value;
if(this.queryStringOverwritten||aps.sitesWithoutCallback.includes(this.hostname)){aps.page.adUnit=k;
aps.logInfo("*AdUnit: setting adUnit to : "+aps.page.adUnit)
}return k
}};
aps.cfg.dfp.adUnit=a;
a.newAdUnit=a.getNewValue();
if(a.queryStringOverwritten){aps.logInfo("*AdUnit: overwritten using query string; "+a.newAdUnit)
}else{if(a.previousValue=="hnp-hearstdemosite/hearstdemozone"&&!aps.isQA&&!aps.sitesWithoutCallback.includes(this.hostname)){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice_rollup",eventAction:document.location.hostname,eventLabel:document.location.href})
}}ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice_pageId",eventAction:loadAd_UrlLocation,eventLabel:APSpageID})
}
})();(function(){aps.cfg.dfp.lazyload={enabled:(HDN.dataLayer.ads.adMode=="lazy")||false,firstLoad:["Crown","Flex1","A300","MAD"],};
aps.placeAd=function(a){if(!aps.cfg.dfp.lazyload.enabled){aps.logInfo("aps.placeAd called but lazyload is not enabled via HDN.dataLayer.ads.adMode");
return
}if((JSON.stringify(a)=="[null]"||JSON.stringify(a)=="[]")&&!aps.cfg.dfp.isWaiting){aps.logInfo("aps.placeAd: Called with empty array");
return
}var d=(a.length==0||!aps.cfg.dfp.isWaiting);
var b=[];
var c=[];
a.forEach(function(e){var f=e.id;
b.push(f);
if(!aps.cfg.dfp.allAds.includes(f)){aps.logSkip(f,"ad not defined - aps.placeAd");
return
}if(aps.cfg.dfp.waiting.includes(f)){aps.logSkip(f,"ad already queued - aps.placeAd");
return
}if(aps.cfg.dfp.ads[f].renderCount>1){aps.logSkip(f,"ad already displayed - aps.placeAd");
return
}c.push(f);
aps.cfg.dfp.waiting.push(f);
aps.cfg.dfp.isWaiting=true;
d=true
});
aps.logInfo("aps.placeAd: called with values: "+b.join(","));
if(c.length==0){aps.logInfo("aps.placeAd: No ad to proceed");
return
}aps.logInfo("aps.placeAd: processing: "+c.join(","));
aps.waitStartStep("lazyload")
};
if(aps.cfg.dfp.lazyload.enabled){aps.logInfo("lazyloading: enabled");
aps.registerEvent(aps.event.on_check_include_ad,function(a){var b=a.checkForInclude;
if(b.stop||b.addAdSlot){return
}if(aps.cfg.stp.at==0){b.stop=true;
if(aps.cfg.dfp.lazyload.firstLoad.includes(a.code)){b.addAdSlot=true
}}else{b.stop=true;
if(aps.cfg.stp[aps.cfg.stp.at].reason=="lazy"){b.addAdSlot=true
}}})
}})();(function(){aps.cfg.dfp.batchSRA={delay:3000,enabled:(window.location.search.indexOf("batchsra=1")!==-1||document.location.hostname.toLowerCase()=="sfinsider.sfgate.com")?true:false,auto:false,waitingNext:false,hasScrolled:false,maxSlots:15,maxSlotExtenderDomains:["ctinsider.com","ctpost.com","thehour.com","stamfordadvocate.com","newstimes.com","nhregister.com","greenwichtime.com","timesunion.com","sfgate.com"],userInteractFor:1,atfFirst:true,minRatioLoaded:1,};
try{if(HDN.dataLayer.ads.adMode=="batch"){aps.cfg.dfp.batchSRA.enabled=true
}}catch(a){}if(aps.isWCM&&!aps.cfg.dfp.batchSRA.enabled&&!aps.cfg.dfp.lazyload.enabled&&document.location.search.indexOf("autobatch")>-1){aps.cfg.dfp.batchSRA.enabled=true;
aps.cfg.dfp.batchSRA.auto=true;
aps.cfg.dfp.batchSRA.minRatioLoaded=0.8;
aps.logInfo("BatchSRA: forcing auto batch")
}if(aps.cfg.dfp.batchSRA.enabled){aps.performanceMetrics.SRA=aps.implementSRA?"true":"false";
aps.onScroll=function(){if(aps.cfg.dfp.batchSRA.hasScrolled){return
}if(aps.cfg.dfp.batchSRA.userInteractFor==(aps.cfg.stp.at+1-aps.cfg.dfp.refreshes)){aps.logInfo("Batch SRA : Scrolled");
aps.cfg.dfp.batchSRA.auto=true;
if(aps.cfg.dfp.batchSRA.waitingNext||aps.cfg.dfp.batchSRA.userInteractFor==0){if(aps.cfg.dfp.batchSRA.userInteractFor==0){aps.cfg.dfp.batchSRA.waitingNext=true
}aps.nextStep();
aps.cfg.dfp.batchSRA.hasScrolled=true
}}};
aps.cfg.dfp.batchSRA.maxSlots=30;
aps.logInfo("Batch SRA : listening to Scroll event");
if(window.addEventListener){window.addEventListener("scroll",aps.onScroll,false);
window.addEventListener("click",aps.onScroll,false)
}else{if(window.attachEvent){window.attachEvent("onscroll",aps.onScroll);
window.attachEvent("onclick",aps.onScroll)
}}aps.registerEvent(aps.event.on_check_include_ad,function(b){var c=b.checkForInclude;
if(c.stop||c.addAdSlot){return
}if(aps.cfg.stp[aps.cfg.stp.at].reason=="batchSRA"){c.stop=true;
if(aps.cfg.stp.at==0&&aps.cfg.dfp.batchSRA.atfFirst){if(b.position=="atf"||b.position=="oop"||b.position=="mad"){c.addAdSlot=true
}}else{if(aps.cfg.stp[aps.cfg.stp.at].adsToRequest.length<aps.cfg.dfp.batchSRA.maxSlots){c.addAdSlot=true
}}}})
}})();(function(){if(aps.isLeafSite){if(document.cookie.split(";").filter(function(a){return a.indexOf("region=EU")>=0
}).length==1){aps.logInfo("region EU detected, disabling personalized ads");
aps.cfg.disablePersonalisation=true;
if(document.location.href.indexOf("gdpr=true")>-1){aps.cfg.bid.enableGDPR=true
}}}else{if(document.location.href.indexOf("?is_eu=1")>-1){aps.logInfo("region EU (test) detected, disabling personalized ads");
aps.cfg.disablePersonalisation=true
}}})();(function(){aps.cfg.bid.prefetch={enabled:false,delay:2000,allBidsOnRefresh:true,que:[],refreshTimeout:2500,timeout:2500,timeoutPadding:10*1000,version:1.3,a9:{adUnits:[],enabled:true,},pb:{adUnits:[],bidCount:[],biddersDone:[],calledBidders:[],clientSideBidders:[],enabled:true,}};
aps.cfg.bid.prefetch.enabled=true;
if(aps.cfg.bid.prefetch.enabled){aps.logInfo("Bid prefetching enabled")
}})();(function(){try{aps.cfg.stp.def.timeout=2500;
var f=aps.cfg.stp.def.timeout;
var b=aps.current_domain;
var d=document.location.hostname;
var a=current_device;
switch(b){case"anotherdomain.com":f=1500;
break
}switch(d){case"sub.anotherdomain.com":f=1500;
break
}switch(a){case MOBILE:break;
case TABLET:break;
case DESKTOP:break
}if(d=="sub.anotherdomain.com"&&a==MOBILE){}}catch(c){}aps.cfg.stp.def.timeout=f;
aps.cfg.stp.nextTimeout=(f>1500)?f-1000:1000;
aps.logInfo("Setting per config timeout : "+aps.cfg.stp.def.timeout);
aps.logInfo("next timeout : "+aps.cfg.stp.nextTimeout)
})();(function(){if(document.location.hostname.match(/((homeguides|smallbusiness|work|healthyeating|livehealthy)\.(chron|sfgate)\.com)/)){return
}var d={"beaumontenterprise.com":"75e9ad4b5f1f1f3de38dea085cc34f079b9d8243999d3b30d70a543f2c3ae813","sfgate.com":"1cbbeea35302b334c17ec7de41048b19077c3452b8825fa3017876cf49d877c2","chron.com":"b8d94fd702b39f91830ea26eb261a1dd7eb3f9d18e86f88c83f7a317f3115379","mysanantonio.com":"3c81fd9605d796d254c7bdc62001ec2c520515c7c306b66b713a4421f7343766","seattlepi.com":"a3e9f57e66bb33f8f8995e6866a7eace83bca9720ee52bb2d8ab18fb8dddae94","sfchronicle.com":"a5e03e178aaf9b41b3fc69428362339bd7ba9a606118acee43f6169a1f7f9847","houstonchronicle.com":"48a6940997d234b7add9af8ed2b41694654edaeb6e7b5827579702d25182700b","expressnews.com":"d65ba7cd6a96847162fb556c3a5dc7b7e66de309481ec4e558b4e9dc40515858","timesunion.com":"f999472effec7a1ef427ab8ed55df47b4d250f60f376ce71f7293b353026f514","ctpost.com":"1118fad26ca4bcdf2a99fdee52724e3c512a258c149cbd8e6c4084c13040e86a","stamfordadvocate.com":"2df4f16391dbd310915a08bd62897dde4902fe30a7c29dcb2b80ba04345df633","nhregister.com":"2370d2dc32ab1b0d0894de8f024e2764a55756c723edb12fa7d7b6b221922fba","newstimes.com":"68fab42777221c69e8d127d9ba7a8b29e0ba95aae66e6166eb070c330ac04c0f","greenwichtime.com":"4a6fb4d137bab5bdc207d09d4b1acfc191dbad1e9e0e3190ca676d3730195d06","thehour.com":"049118934d099a757a2987317f05327a8ccd5a7c1501feaf8e4639fadbdb8936","ctinsider.com":"21b81f81bd7fa576db043ec887848073bbc6eafc46d9f8bec5240163093e2d46","registercitizen.com":"3377ba9d7d5061bf618f4ae6d3900e0067f913f99748fc366b7cb1542e6a96b2","middletownpress.com":"4f1f32e75691195dd027c417eed6c56d8a37e7ed729eb57c8ecd8abf8d5f420b","thetelegraph.com":"bf557221a53f15d39c7bce3aeed56dd6c13e57b3eba48f8e4fd2d54af42f0122","ourmidland.com":"37af6c3aa88542ced759eb5a9c478617d1b50eeae32789a669e3facca42eb56a","myjournalcourier.com":"5497becf77524b62bee5a589030b1e2163d34a60b7d960cdc976afc12b64d623","michigansthumb.com":"601647fe4d84d12a565e709dc7e944d38db91923d65d9bb6865788234f41893d","theintelligencer.com":"aadf36ee0d8d0f2765013057eb1bad1a552f9377dfc4b532d9b698df9a655884","manisteenews.com":"a2031afbd2e08a959fa777db882a99b7cc56d1dbff61d9d2d56c20a89c6d8b7e","bigrapidsnews.com":"7c907dba0dac340d4f0b3879a3d1699f0bf19e2a95b06945aa3b31cfde002c09","recordpatriot.com":"d4c71cee77592309f10e62ab4ce1a4d995719a82a77932eee5fc18a7948e2f41","lakecountystar.com":"2a7c7fb608092db498480edf2068123ffcd679d5ce9e8819760338386e1350e4","theheraldreview.com":"1655d53ab46f5391a09e189a8cf86f8e22098886ea6a2ae727b112087a05cbd0","yourconroenews.com":"aa3912f9cfd7f1fafd025dbd846d2383acce1b3574061b2c9508d43d5cc653da","lmtonline.com":"ffd0921bb88989b2dc6bac92611425966d93e8be7cf154e95fd27ae95db26375","mrt.com":"08621a723e4a1cd4ba4c25f46ce953173b9b3cffad4ec0bfb9b0e5d22bc22bc8","myplainview.com":"b49696bc422c346e4f4282e32cfc324d782f32b9c9d0fec6751d29dc0862bf61","theridgefieldpress.com":"053f373cd281b81bb04913797ec13da4438c7cc4596fc29e382ce5a1a93ce32d","westport-news.com":"55e354cf58c712583585324c15d758cd2b9801c0ce839fb6020d8835a63c0502","ncadvertiser.com":"eaff3ad2730aea1b010a2434dad485aef8e1a473f8977f048e5888c27a0a8b15","fairfieldcitizenonline.com":"ddbcce19fd54ba6f20d8e3bedb35cfea7887e9579c34d38307b3f3fa3f659ab0","wiltonbulletin.com":"7ef8a69225bec566b6a15690bd94081ed7898400ff9a8c68ac05ee924c2c2ce3","darientimes.com":"f0790e5c63dd390570f98d8b20ad18ee2666f8184dc03434de1c60fb823ff71c","trumbulltimes.com":"909616d5d05133cda02800bf40834036448deeea436efebe0d39fcb3f3f4bec8","sheltonherald.com":"2ea54058f6365a6a2bcb4ecda879ff406900d5b274c1e1ed6e2f0e746ad5068f","milfordmirror.com":"0f7190eb184e8a5af5171a9ea07a792b5a193725ebdb8a2c55a30ff187802fef","newmilfordspectrum.com":"34fda7a5dec281cc4ac526c9c1609ee8a6223ae799760c638c3b92d86751b2c5","southeasttexas.com":"1ca0a738d5cf7bb8ce1434d5522573d7f6894098e4706151b2882420b6bb6c62","gametimect.com":"c5a3ed040f3b98d6d9877a09dc7f00f3ba126d6f10836272b84a07be9ced5df7","connecticutmag.com":"6daa3d7e6b8778d504883db9545f72adfc4df9ba624ae5ac79af0dda7e1f98a3","shorelinetimes.com":"91a7025281ac9294e20e8cdd7b9c5d6414f44d887193db48097942a2404a9d1d","countytimes.com":"26a8bb30dec1f24c1e7bd51988a30cdaf1a32c615057fa4a092fedd8d19b6005","westhartfordnews.com":"5de2ce5445b39d5609215833a7fa6410f027135902d458f6751d115c11c33634","dolphin-news.com":"041a5d17decdae44358ae2eca8065b501b5a4936882e2188a3d41470b64eb47d","ctpostchronicle.com":"645700f07ec80b72131b2a6fc97f8f43da5820ce68bd559b0b507dfdf08f9f6a","ctbulletin.com":"26a8bb30dec1f24c1e7bd51988a30cdaf1a32c615057fa4a092fedd8d19b6005","greenstate.com":"412163cc8d602f027626c2ffab24515bd8f6ff426d0d4096330b64d8e7681e03","canyonnews.com":"593c0a648b760954871854fb60be6dfc252fd7387de8bcb568ebf2cd5449f3d8","sellitlaredo.com":"a86e9a199fadcfd738a0fa46b3fa9381cbb92bdc9b7a75b7fa222e143eaac6b9",};
var b=d[aps.cfg.bid.current_domain]||"";
if(b!=""){aps.logInfo("The Media Trust: Loading");
var a=document.getElementsByTagName("script")[0];
var c=document.createElement("script");
c.async=1;
c.src="https://web.archive.org/web/20211007045442/https://scripts.webcontentassessor.com/scripts/"+b;
a.parentNode.insertBefore(c,a)
}})();(function(){aps.divIDPostfix="ju1c3-TWFobmEgTWFobmE=";
aps.scriptName="googleAsync";
aps.leaderboardLineItemID=null;
aps.page=null;
aps.slotsByDivID=[];
aps.interstitialAdDefs=[];
aps.codesByDomID=[];
aps.domIsLoaded=false;
aps.dynamicSlots=[];
aps.refreshableSlots=[];
aps.normalAdSlots=[];
aps.dynamicAdSlots=[];
aps.dfpInititalization=false;
aps.callsByDomID=[];
aps.renderInfo=[];
aps.isIFrameDynamicPage=(top!=self);
aps.refreshWaitCounter=0;
aps.refreshWaitScripts={};
aps.disabledWaitScripts={};
aps.refreshViewableOnly=true;
aps.videoAdTag=null;
aps.perf_sec="video";
aps.setPerformanceMetrics("GoogleLoadingStart","loading google");
aps.loadGoogleService(true);
if(aps.cfg.bid.enabled){googletag.cmd.push(function(){googletag.pubads().disableInitialLoad();
googletag.pubads().setPrivacySettings({childDirectedTreatment:false})
})
}googletag.cmd.push(function(){aps.setPerformanceMetrics("GoogleLoaded","google ready");
aps.performanceMetrics.matchedUrl=aps.juiceMatchedUrl;
googletag.pubads().collapseEmptyDivs(false);
googletag.pubads().enableSingleRequest();
googletag.enableServices()
});
aps.unQueueCommands=function(){for(var a=0;
a<aps.cmd.length;
a++){googletag.cmd.push(aps.cmd[a])
}aps.cmd=googletag.cmd
};
aps.domLoaded=function(){aps.setPerformanceMetrics("DomLoaded","DomLoaded");
aps.domIsLoaded=true;
aps.fireEvent(aps.event.on_dom_loaded)
};
aps.increaseRefreshTimer=function(a){if(typeof aps.disabledWaitScripts[a]!="undefined"){return false
}aps.refreshWaitScripts[a]=true;
aps.refreshWaitCounter++;
return true
};
aps.decreaseRefreshTimer=function(a){aps.refreshWaitScripts[a]=false;
aps.refreshWaitCounter--
};
aps.disableFailedWaitScripts=function(){for(var a in aps.refreshWaitScripts){if(aps.refreshWaitScripts.hasOwnProperty(a)){if(aps.refreshWaitScripts[a]==true){aps.disabledWaitScripts[a]=true
}}}};
aps.getDataLayerInterstitial=function(){if(aps.cfg.dfp.dataLayerInterstials){return
}var a="";
try{a=HDN.dataLayer.revenueProfiles.profiles.nonsub.interstitials.value
}catch(b){}aps.cfg.dfp.dataLayerInterstials=a.split(",")||[]
};
aps.getPosOrder=function(a){return(a=="atf")?0:1
};
aps.enableGoogleServices=function(c){if(!aps.domIsLoaded){aps.logInfo("Waiting for DomLoaded");
aps.registerEvent(aps.event.on_dom_loaded,function(){aps.enableGoogleServices(0)
});
setTimeout(function(i){if(aps.domIsLoaded){return
}aps.setPerformanceMetrics(null,"forcing DomLoaded");
aps.domIsLoaded=true;
aps.enableGoogleServices(c)
},1500);
return
}if(!googletag.apiReady){aps.cfg.waitingGoogle=aps.cfg.waitingGoogle||false;
if(!aps.cfg.waitingGoogle){aps.logInfo("waiting for google api");
aps.cfg.waitingGoogle=true
}setTimeout(function(i){aps.enableGoogleServices(c)
},100);
return
}if(aps.cfg.dfp.waitingForRichie){aps.cfg.dfp.waitingForRichieLog=aps.cfg.dfp.waitingForRichieLog||false;
if(!aps.cfg.dfp.waitingForRichieLog){aps.logInfo("Richie app: waiting for viewable trigger");
aps.cfg.dfp.waitingForRichieLog=true
}setTimeout(function(i){aps.enableGoogleServices(c)
},100);
return
}if(!aps.cfg.tregReady&&typeof(treg.realm)!="undefined"){aps.cfg.tregReady=aps.cfg.tregReady||false;
if(!aps.cfg.waitingTreg){aps.logInfo("Treg not ready");
aps.cfg.waitingTreg=true
}setTimeout(function(i){aps.enableGoogleServices(c)
},100);
setTimeout(function(){aps.cfg.tregReady=true
},2000);
return
}if(aps.cfg.stp[aps.cfg.stp.at].dfpCalled){aps.logInfo("enableGoogleServices already ran");
return
}if(HDN.dataLayer.ads.loaded!=undefined){if(!HDN.dataLayer.ads.loaded){aps.cfg.dfp.waitForWCM=true;
if(aps.cfg.dfp.lazyload.enabled){var b=true;
aps.logInfo("LazyLoad : checking "+aps.cfg.dfp.lazyload.firstLoad);
aps.cfg.dfp.lazyload.firstLoad.forEach(function(p){if(aps.cfg.dfp.ads[p].exclude){aps.logInfo("LazyLoad : "+p+" excluded in revenue Profile/Device")
}else{var i=document.getElementById(p);
aps.logInfo("LazyLoad : "+p+((i==null)?" not":"")+" on the page");
if(i==null){b=false
}}});
if(b){aps.logInfo("LazyLoad : All required divs are on the page");
HDN.dataLayer.ads.loaded=true
}}if(aps.cfg.dfp.batchSRA.enabled){var b=true;
aps.cfg.dfp.batchSRA.npPresent=aps.cfg.dfp.batchSRA.npPresent||0;
if(typeof(aps.cfg.dfp.batchSRA.ads)=="undefined"){aps.cfg.dfp.batchSRA.ads=[];
aps.logInfo("BatchSRA : checking "+aps.cfg.stp[aps.cfg.stp.at].adsToRequest.map(function(i){return i.code
}))
}var o=aps.cfg.stp[aps.cfg.stp.at].adsToRequest.forEach(function(i){if(typeof(aps.cfg.dfp.batchSRA.ads[i.code])=="undefined"||!aps.cfg.dfp.batchSRA.ads[i.code]){var p=document.getElementById(i.code);
if(aps.cfg.dfp.batchSRA.ads[i.code]!=(p!=null)){aps.logInfo("BatchSRA : "+i.code+((p==null)?" not":"")+" on the page")
}aps.cfg.dfp.batchSRA.ads[i.code]=(p!=null);
if(p==null&&i.code!="LNlogo"){b=false
}else{aps.cfg.dfp.batchSRA.npPresent++;
if(aps.cfg.dfp.batchSRA.npPresent==aps.cfg.stp[aps.cfg.stp.at].adsToRequest.length){HDN.dataLayer.ads.loaded=true
}else{if(aps.cfg.dfp.batchSRA.npPresent/aps.cfg.stp[aps.cfg.stp.at].adsToRequest.length>=aps.cfg.dfp.batchSRA.minRatioLoaded){aps.logInfo("BatchSRA : more than "+aps.cfg.dfp.batchSRA.minRatioLoaded+" of slots available");
HDN.dataLayer.ads.loaded=true
}}}}});
if(b){aps.logInfo("BatchSRA : All required divs are on the page");
HDN.dataLayer.ads.loaded=true
}}aps.cfg.dfp.waitingWCM=aps.cfg.dfp.waitingWCM||false;
if(!aps.cfg.dfp.waitingWCM&&!HDN.dataLayer.ads.loaded){aps.logInfo("Waiting WCM to complete ad positionning");
aps.cfg.dfp.waitingWCM=true;
if(aps.cfg.gaLog){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice",eventAction:"WCMnotready",eventLabel:document.location.href})
}ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"WCMnotready",eventAction:location.href,eventLabel:juiceservice.replace("aps","juiceui")+"DfpPage/Edit/"+APSpageID});
setTimeout(function(){if(!HDN.dataLayer.ads.loaded){aps.logInfo("Forcing HDN.dataLayer.ads.loaded = true");
HDN.dataLayer.ads.loaded=true
}},5000)
}if(aps.cfg.dfp.waitingWCM){setTimeout(function(i){aps.enableGoogleServices(c)
},100);
return
}}}var k=[];
var j=[];
if(aps.cfg.dfp.removeMissingDivs){if(aps.cfg.stp[aps.cfg.stp.at].adsToRequest.length>0){var f=googletag.pubads().getSlots();
if(!aps.cfg.stp[0].dfpCalled&&HDN.dataLayer.ads.loaded==undefined){if(aps.cfg.dfp.allAds.indexOf("A300")>-1&&!aps.isLegacy&&(aps.cfg.dfp.revenueProfile.length==0||aps.cfg.dfp.revenueProfile.indexOf("A300")>-1)){if(document.getElementById("A300")==null&&c<20){aps.logInfo("waiting for div A300 - "+c++);
setTimeout(function(i){aps.enableGoogleServices(c)
},10);
return
}}}var h="";
for(var m=0;
m<f.length;
m++){e=f[m].getSlotElementId();
if(typeof(aps.cfg.dfp.ads[e])=="undefined"){continue
}if(aps.cfg.stp[aps.cfg.stp.at].ads.indexOf(f[m])>-1){var l=f[m];
var n=(aps.videoAdTag==null)?null:aps.videoAdTag.code;
if(n==e){k.push(l);
aps.cfg.stp[aps.cfg.stp.at].divids.push(e)
}else{var d=document.getElementById(e);
if(d==null&&!aps.cfg.dfp.ads[e].multiAd){aps.cfg.dfp.ads[e].batchRequest="done";
l.requestStatus="destroyed";
j.push(l);
aps.cfg.dfp.uncalledAds.push(l);
h=(h=="")?e:h+", "+e;
for(var g=0;
g<aps.cfg.stp[aps.cfg.stp.at].ads.length;
g++){if(aps.cfg.stp[aps.cfg.stp.at].ads[g].getSlotElementId()==e){aps.cfg.stp[aps.cfg.stp.at].ads.splice(g,1);
break
}}}else{if(aps.cfg.dfp.ads[e].batchRequest=="requested"&&d!=null){aps.cfg.dfp.ads[e].batchRequest="called";
k.push(l);
aps.cfg.stp[aps.cfg.stp.at].divids.push(d.id);
var a=aps.getAdDefinitionByCode(d.id);
if(typeof a.placed=="undefined"){hearstPlaceAd(d.id);
if(typeof loadAd_UrlLocation=="undefined"){loadAd_UrlLocation=juiceservice
}}l.setTargeting("frsh",a.renderCount);
aps.logInfo(a.code+" set kvp frsh="+a.renderCount);
setSlotTargeting(l,e)
}}}}}if(j.length>0){aps.logInfo("Div(s) "+h+" not on page : destroyed");
googletag.destroySlots(j)
}}}aps.updatePageLevelKVPS(aps.gcontext);
aps.fireEvent(aps.event.on_before_enable_google_services,aps.cfg.stp[aps.cfg.stp.at].divids);
aps.setPerformanceMetrics(null,"Calling GAM: "+aps.cfg.stp[aps.cfg.stp.at].divids);
if(aps.cfg.preventCeltraAdsToRefresh){aps.logInfo("Known Celtra ads: "+aps.cfg.dfp.celtraAds.join(","))
}if(aps.cfg.dfp.batchSRA.enabled||aps.page_type2=="article"){googletag.pubads().refresh(k,{changeCorrelator:false})
}else{googletag.pubads().refresh(k)
}aps.fireEvent(aps.event.on_ad_refresh_call,{gslots:k});
aps.cfg.stp[aps.cfg.stp.at].dfpCalled=true;
aps.setPerformanceMetrics(null,"googleServices done");
if(!aps.cfg.stp[aps.cfg.stp.at].adRendered){aps.cfg.stp[aps.cfg.stp.at].adRendered=true;
for(var g=0;
g<definedTags.ads.length;
g++){if(definedTags.ads[g].batchRequest=="called"){definedTags.ads[g].batchRequest="done"
}}}if(aps.cfg.dfp.batchSRA.enabled&&(k.length>0||j.length>0)&&aps.cfg.stp[aps.cfg.stp.at].reason=="batchSRA"){if(k.length==0){aps.cfg.dfp.batchSRA.waitingNext=true;
aps.logInfo("BatchSRA : next step");
aps.nextStep()
}else{aps.cfg.dfp.batchSRA.waitingNext=true;
if(aps.cfg.dfp.batchSRA.auto){aps.logInfo("BatchSRA : waiting to next step in "+aps.cfg.dfp.batchSRA.delay+" ms");
setTimeout(function(){aps.nextStep()
},aps.cfg.dfp.batchSRA.delay)
}else{aps.nextStep()
}}}};
window.defineTags=function(h){if(aps.cfg.stp.at==-1){aps.nextStep();
return
}if(!aps.serveAds){return
}aps.cfg.stp[aps.cfg.stp.at].stepStarted=true;
if(aps.cfg.dfp.batchSRA.enabled){aps.logInfo("BatchSRA mode - step : "+aps.cfg.stp.at)
}aps.setPerformanceMetrics(null,"defineTags");
if(aps.cfg.stp.at==0){aps.loadAsyncScripts();
var f=[];
var l=["OOP","Crown","Flex1"];
for(var b in l){var m=definedTags.ads.filter(function(i){return i.code==l[b]
});
if(m.length>0){f.push(m[0])
}}m=definedTags.ads.filter(function(i){return l.indexOf(i.code)==-1
});
definedTags.ads=f.concat(m);
googletag.cmd.push(function(){try{var n=JSON.parse(GetCookie("location_data"));
if(n.is_eu){aps.cfg.disablePersonalisation=true
}}catch(i){}if(aps.cfg.disablePersonalisation){aps.logInfo("disabling personalizedAds");
googletag.pubads().setRequestNonPersonalizedAds(1)
}googletag.pubads().addEventListener("slotRenderEnded",function(p){if(typeof p.slot.getSlotId!="undefined"){if(typeof p.slot.getSlotId().getDomId!="undefined"){hearstUpdateSlotRenderInfo(p);
aps.adRenderCallback&&aps.adRenderCallback(p)
}var o=p.slot.adcode;
if(o=="MAD"){if(p.size[0]!=320||p.size[1]!=50){aps.logInfo("Fixing: MAD having wrong size: "+p.size);
var r=document.getElementById("MAD").firstChild;
r.style.width="320px";
r.style.height="50px"
}aps.cfg.dfp.ads["MAD"].impressionTimer=aps.cfg.dfp.ads["MAD"].impressionTimer||null;
if(aps.cfg.dfp.ads["MAD"].impressionTimer==null){aps.cfg.dfp.ads["MAD"].impressionTimer=setTimeout(function(){aps.logInfo("Forcing MAD viewability");
aps.cfg.dfp.ads["MAD"].impressionTimer=null;
aps.cfg.dfp.ads["MAD"].impressionViewable=true
},30000)
}}if(!aps.cfg.stp[aps.cfg.stp.at].adRendered){aps.cfg.stp[aps.cfg.stp.at].adRendered=true;
for(var q=0;
q<h.ads.length;
q++){if(h.ads[q].batchRequest=="called"){h.ads[q].batchRequest="done"
}}}}});
googletag.pubads().addEventListener("impressionViewable",function(r){if(typeof r.slot.getSlotId!="undefined"){var q=r.slot.getSlotId().getDomId();
if(typeof(q)!="undefined"){aps.setPerformanceMetrics("FirstAdViewable","*VIEW "+q);
var p=aps.getAdMetrics(q);
var o=aps.getAdDefinitionByCode(q);
p.impressionViewable=aps.getTimeElapsed();
p.totalImpressions++;
if(p.totalRenders>1){p.impressionViewable=aps.getTimeElapsedFromStamp(p.refreshCalled)
}else{p.impressionViewable=aps.getTimeElapsed()
}if(o){o.impressionViewable=true
}aps.fireEvent(aps.event.on_ad_impression_viewable,{code:q})
}}})
})
}var g=0;
var j={};
aps.cfg.stp[aps.cfg.stp.at].ads=aps.cfg.stp[aps.cfg.stp.at].ads||[];
window.onJuiceEvent_StartDefineTags&&window.onJuiceEvent_StartDefineTags();
aps.fireEvent(aps.event.on_begin_define_tags);
aps.setPerformanceMetrics("DefineTags","defining tags started");
if(aps.performanceMetrics.adUnit==""){aps.performanceMetrics.adUnit=h.adUnit;
aps.performanceMetrics.networkCode=h.networkCode
}aps.definedTagArr=aps.definedTagArr||{};
for(var d=0;
d<h.ads.length;
d++){var a=h.ads[d];
if(aps.cfg.dfp.ads[a.code]==undefined){aps.cfg.dfp.ads[a.code]=a
}if(!aps.shouldPlaceAd(a.code)){continue
}if(a.exclude){continue
}if(a.hasOwnProperty("video")){if(a.video){if(aps.cfg.vid.enabled){aps.videoAdTag=a
}else{aps.logInfo(a.code+" - video prebid disabled - *skipped*");
a.exclude=true;
continue
}}}a.oldDivID=a.code;
a.newDivID=a.code;
if(a.isDynamic){a.newDivID=aps.getNextDynamicAdDivID(a.code);
try{document.getElementById(a.code).id=a.newDivID
}catch(c){}}aps.getDataLayerInterstitial();
if(["BGS_REC_IN","EEinsert"].includes(a.code)||aps.cfg.dfp.dataLayerInterstials.indexOf(a.code)>-1){a.interstitial=true;
a.refreshable=true;
a.impressionViewable=true
}if(a.interstitial){aps.interstitialAdDefs[a.code]=a;
a.callInterstitial=a.callInterstitial||false;
if(!a.callInterstitial){continue
}}var k=null;
if(a.code=="MAD"&&a.impressionViewable&&window.current_device==MOBILE&&aps.cfg.dfp.multi.enabled){a.batchRequest="refresh"
}if(a.batchRequest=="done"||a.batchRequest=="called"||a.batchRequest=="requested"){continue
}else{a.checkForInclude={addAdSlot:false,stop:false};
if(a.batchRequest=="refresh"){a.checkForInclude.addAdSlot=true;
a.checkForInclude.stop=true
}else{if(aps.cfg.dfp.waiting.filter(function(i){return i==a.code
}).length>0){aps.cfg.dfp.waiting=aps.cfg.dfp.waiting.filter(function(i){return i!=a.code
});
a.checkForInclude.addAdSlot=true;
a.checkForInclude.stop=true
}else{if(a.interstitial&&a.callInterstitial){a.checkForInclude.addAdSlot=true;
a.checkForInclude.stop=true
}}}if(!a.checkForInclude.stop){aps.fireEvent(aps.event.on_check_include_ad,a)
}if(!a.checkForInclude.stop){a.checkForInclude.addAdSlot=true
}if(a.checkForInclude.addAdSlot){j[a.code]=a;
a.adSizeDefined=[a.width,a.height];
aps.logInfo(a.code+" slot defined");
aps.definedTagArr[a.code]=a;
a.batchRequest="requested";
g++;
aps.cfg.stp[aps.cfg.stp.at].adsToRequest.push(a)
}}}if(g==0){aps.logInfo("No more slots to process");
aps.cfg.dfp.batchSRA.enabled=false;
aps.cfg.stp[aps.cfg.stp.at].adRendered=true;
return
}googletag.cmd.push(function(){setDfpSearchValues(aps.gcontext)
});
if(!aps.cfg.bid.prefetch.enabled){aps.fireEvent(aps.event.on_start_bidding,{slots:j})
}googletag.cmd.push(function(){aps.cfg.bid.pb.adUnitIds[aps.cfg.stp.at]=aps.cfg.bid.pb.adUnitIds[aps.cfg.stp.at]||[];
for(var n=0;
n<aps.cfg.stp[aps.cfg.stp.at].adsToRequest.length;
n++){var i=aps.cfg.stp[aps.cfg.stp.at].adsToRequest[n];
if(aps.cfg.dfp.googleSlots[i.code]==undefined){if(i.code=="OOP"){k=googletag.defineOutOfPageSlot("/"+h.networkCode+"/"+h.adUnit,i.code)
}else{if(i.supportsNative){k=googletag.defineSlot("/"+h.networkCode+"/"+h.adUnit,["fluid"],i.newDivID)
}else{if(aps.isLegacy){k=googletag.defineSlot("/"+h.networkCode+"/"+h.adUnit,i.sizes,i.newDivID)
}else{k=googletag.defineSlot("/"+h.networkCode+"/"+h.adUnit,[i.width,i.height],i.newDivID)
}}}aps.cfg.dfp.googleSlots[i.code]=k
}else{k=aps.cfg.dfp.googleSlots[i.code]
}if(k!=null){if(["Crown"].includes(i.code)){k.setCollapseEmptyDiv(true,true)
}aps.normalAdSlots[i.code]=k;
aps.cfg.stp[aps.cfg.stp.at].ads.push(k);
aps.slotsByDivID[i.newDivID]=k;
if(APSResponsiveDesign==true&&!i.oop){aps.setupResponsiveMappings(k,i)
}k.addService(googletag.pubads());
setDFPSlotTargeting(i,k,false)
}}if(aps.cfg.stp[aps.cfg.stp.at].ads.length==0){aps.logInfo("No bid to request");
aps.enableGoogleServices(0)
}});
aps.setPerformanceMetrics(null,"defining tags ended : enabling google services");
aps.fireEvent(aps.event.on_update_page_level_targeting);
aps.slotsSetup=true;
window.onJuiceEvent_endDefineTags&&window.onJuiceEvent_endDefineTags();
aps.fireEvent(aps.event.on_end_define_tags,{slots:j});
aps.refreshAvailable=true;
window.onJuiceRefreshable&&window.onJuiceRefreshable();
if(aps.cfg.bid.excludedDomains.indexOf(aps.current_domain)>-1){aps.cfg.bid.enabled=false
}if(!aps.cfg.bid.enabled||aps.cfg.bid.prefetch.enabled){googletag.cmd.push(function(){aps.enableGoogleServices(0)
})
}};
window.hearstUpdateSlotRenderInfo=function(s){var C=s.slot||null;
var D=s.slot.getSlotId().getDomId()||null;
var w=s.lineItemId||null;
if(w==null&&s.yieldGroupIds!=null){w=s.yieldGroupIds[0]
}var m=s.creativeId||null;
var r=s.isEmpty;
var f=s.size||null;
var i=s.advertiserId||null;
var l=s.companyIds||[];
var g="banner";
var d=(r||m==null)?"":C.getHtml();
var E=C.getTargetingMap();
try{g=E.hb_format[0]||"banner";
if(g=="native"&&C.getHtml().indexOf("pbNativeTagData")==-1){g="banner"
}}catch(o){}var n=s.slot.getSlotElementId();
var v=(E.custom&&E.custom.includes("blank_refresh"))||false;
if(!r&&v&&document.location.hostname=="www.seattlepi.com"){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice_recoveredBlank",eventAction:document.location.hostname+":"+D,eventLabel:D})
}if(r){if(n!="Crown"&&n!="LNLogo"&&!n.startsWith("browsi")){if(!v){C.setTargeting("custom","blank_refresh");
aps.logInfo("*BLANK* "+n+"blank ad served. Refreshing");
googletag.cmd.push(function(){googletag.pubads().refresh([C],{changeCorrelator:false})
});
if(document.location.hostname=="www.seattlepi.com"){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice_blanks",eventAction:D,eventLabel:document.location.hostname})
}}}var c=document.querySelectorAll("#"+n)[0];
if(c.dataset.slug=="Advertisement"){aps.logInfo(n+" - slot empty: hiding div");
c.style.display="none"
}}if(!r&&document.location.hostname=="www.seattlepi.com"&&["NTVALT6DCP","NTV1HED"].indexOf(c)){var q=document.getElementById(n).children;
for(var p=0;
p<q.length;
p++){if(!q[p].id.startsWith("google")){q[p].parentElement.removeChild(q[p])
}}}var j=aps.getAdMetrics(D);
j.lineItemId=w;
j.creativeId=m;
j.isEmpty=r;
j.totalRenders++;
if(j.totalRenders>1){j.rendered=aps.getTimeElapsedFromStamp(j.refreshCalled)
}else{j.rendered=aps.getTimeElapsed()
}if(f!=null){j.size=f[0]+" x "+f[1]
}var h=(i==null)?"No ad":"Direct";
if(typeof(aps.cfg.advertisers[i])!="undefined"){h=aps.cfg.advertisers[i]
}if(s.yieldGroupIds!=null){h="ExB/"+h;
try{if(typeof(l[0])!="undefined"){h="ExB/"+aps.cfg.advertisers[l[0]]
}}catch(o){}}var k="";
if(aps.cfg.bid.prefetch.enabled){var G=null;
if(g=="native"){var B=(d=="")?false:d.match(/renderNativeAd/g);
var a=null
}else{var B=(d=="")?false:d.match(/renderAd\(document, \'(.*)\'/g);
var a=(d=="")?false:d.match(/renderImp\(document,"(.*)"/g)
}if(B||a){G=C.currentBid;
G.won=true
}else{if(C.currentBid){C.currentBid.sent=false
}}if(G){k=" bid: "+G.adId;
if(C.aps.optimized){k=k+" [OPT] +"+C.aps.increase;
ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice_optimized_v"+aps.cfg.bid.prefetch.version,eventAction:document.location.hostname,eventLabel:C.aps.increase})
}if(aps.cfg.bid.prefetch.enabled){aps.cfg.bid.prefetch.que.push(D)
}}var y=aps.cfg.bid.bids.length;
aps.cfg.bid.bids=aps.cfg.bid.bids.filter(function(H){return H.expires>new Date().valueOf()
});
y=y-aps.cfg.bid.bids.length;
if(y>0){aps.logInfo("*OPT* Removed "+y+" expired bids from cache, now having "+aps.cfg.bid.bids.length)
}if(aps.cfg.bid.prefetch.timer==null&&aps.cfg.bid.bids.length<500){aps.cfg.bid.prefetch.timer=setTimeout(function(){var H=JSON.parse(JSON.stringify(aps.cfg.bid.prefetch.que));
aps.cfg.bid.prefetch.que=[];
aps.fireEvent(aps.event.on_refresh_bids,H);
aps.cfg.bid.prefetch.timer=null
},aps.cfg.bid.prefetch.delay)
}}aps.cfg.dfp.rnd[D]=s;
var b=aps.getAdDefinitionByCode(aps.codesByDomID[D])||{code:"",creativeURL:""};
if(b){b.renderCount++;
b.isLoading=false;
b.refreshable=true;
b.advertiserId=i;
b.size=f;
if(aps.cfg.preventCeltraAdsToRefresh){if(d.indexOf("celtra")>-1){if(aps.cfg.dfp.celtraAds.indexOf(b.code)==-1){aps.cfg.dfp.celtraAds.push(b.code)
}aps.logInfo(b.code+": Celtra ad detected");
b.refreshable=false;
if(b.code=="Crown"||b.code=="Flex1"){if(aps.getQueryParameterByName("plainceltra")==null){aps.cfg.dfp.celtra.preventMonitorIframe=aps.cfg.dfp.celtra.preventMonitorIframe||false;
aps.cfg.dfp.celtra.checkMonitorIframe=aps.cfg.dfp.celtra.checkMonitorIframe||false;
if(!aps.cfg.dfp.celtra.checkMonitorIframe){aps.cfg.dfp.celtra.checkMonitorIframe=true;
aps.page.kvps.forEach(function(H){if(H.key=="testpage"&&H.value=="NYC_AdTech_CeltraViewTest"){aps.cfg.dfp.celtra.preventMonitorIframe=true
}})
}if(aps.cfg.dfp.celtra.preventMonitorIframe){aps.logInfo("Not loading CeltraIframeFix");
return
}aps.cfg.dfp.celtra.divs=aps.cfg.dfp.celtra.divs||[];
aps.cfg.dfp.celtra.monitorIframe=aps.cfg.dfp.celtra.monitorIframe||false;
var t=document.getElementById("google_ads_iframe_"+s.slot.getSlotId().getId());
aps.cfg.dfp.celtra.divs.push(t);
if(!aps.cfg.dfp.celtra.monitorIframe){aps.cfg.dfp.celtra.monitorIframe=true;
t.addEventListener("load",function(H){aps.cfg.dfp.celtra.monitorIframeDisplay(0)
})
}}if(aps.cfg.dfp.celtraAds.indexOf("Flex1")==-1){aps.cfg.dfp.celtraAds.push("Flex1");
aps.logInfo("Flex1 also disabled (Celtra on Crown)")
}if(aps.cfg.dfp.celtraAds.indexOf("Crown")==-1){aps.cfg.dfp.celtraAds.push("Crown");
aps.logInfo("Crown also disabled (Celtra on Flex1)")
}}}}var x="*IMP* "+aps.fixLen(b.code,10)+" "+aps.fixLen(h,14)+" lineitem: "+aps.fixLen(w,12)+k;
aps.setPerformanceMetrics("FirstAdRendered",x)
}if(aps.cfg.preventNonSecureContent){if(d.indexOf("http:")>-1){aps.logInfo(b.code+" *WARNING* non https code found ["+h+"] lineitem: "+w)
}}try{b.creativeURL=C.getContentUrl()
}catch(o){b.creativeURL=""
}aps.fireEvent(aps.event.on_ad_rendered,{adDefinition:b,newid:D,lineitem:w,size:f,isEmpty:r});
if(f!=null&&aps.leaderboardLineItemID==null){if(f[0]==300){aps.leaderboardLineItemID=w
}}aps.renderInfo[D]={lineItem:w,creative:m,isEmpty:r,size:f,advertiser:h,advertiserId:i||s.yieldGroupIds};
if(b.isDynamic==true){var A=b.oldDivID;
var z=b.newDivID;
var F=(f!=null)?f[0]:0;
var u=(f!=null)?f[1]:0;
setTimeout(function(){aps.fireEvent(aps.event.on_dynamic_ad_rendered,{oldid:A,newid:z,cx:F,cy:u});
window.onJuiceEvent_DynamicAdRendered&&window.onJuiceEvent_DynamicAdRendered(A,z,F,u)
},5)
}};
aps.cfg.dfp.celtra.monitorIframeDisplay=function(a){if(a===7||aps.cfg.dfp.celtra.divs.length==0){return
}for(var d=aps.cfg.dfp.celtra.divs.length-1;
d>=0;
d--){var b=aps.cfg.dfp.celtra.divs[d];
var f=b.parentElement;
if(b.style.display==="none"){if(f.children.length>1){f.style.position="relative";
b.style.position="absolute";
b.style.width="100%";
b.style.height="100%";
b.style.left="0"
}b.style.display="block";
aps.logInfo(f.parentElement.id+": fixing Celtra display");
aps.cfg.dfp.celtra.divs.splice(d,1)
}}if(aps.cfg.dfp.celtra.divs.length>0){setTimeout(function(){aps.cfg.dfp.celtra.monitorIframeDisplay(a+1)
},1000)
}};
window.hearstGetVideoAdTagSize=function(a){var f="";
if(a.sizeMappings!=undefined&&a.sizeMappings.length>0){var d=[];
for(var c=0;
c<a.sizeMappings.length;
c++){var b=a.sizeMappings[c].split("x");
if(parseInt(b[1],10)>1&&parseInt(b[2],10)>4){d.push(parseInt(b[1],10)+"x"+parseInt(b[2],10))
}}f="?sz="+d.join("%7C")
}else{f="?sz="+encodeURIComponent(a.width+"x"+a.height)
}return f
};
window.hearstGetVideoAdTag=function(b){if(aps.videoAdTag==null){aps.videoAdTag={width:1,height:4,code:"Video_MOS",rm:false,interstitial:false,oop:false,sizeMappings:["001x400x300","001x640x360","001x640x480","001x001x004"],video:true,companion_units:null,kvps:[],}
}var a=aps.videoAdTag;
if(typeof(a)=="undefined"){aps.logInfo("hearstGetVideoAdTag called with non-defined ad slot "+b+" : ignoring ");
return null
}if(a.video==false){aps.logInfo("hearstGetVideoAdTag called non video defined ad slot "+b);
return null
}aps.fireEvent(aps.event.on_hearst_place_ad,{adDefinition:a});
var g=hearstGetVideoAdTagSize(a);
var h="https://web.archive.org/web/20211007045442/https://pubads.g.doubleclick.net/gampad/ads";
h+=g;
h+="&iu="+encodeURIComponent(definedTags.networkCode+"/"+definedTags.adUnit);
h+="&url="+encodeURIComponent(top.location.protocol+"//"+JuicePageUrl);
h+="&impl=s";
h+="&gdfp_req=1";
h+="&env=vp";
h+="&output=xml_vast3";
h+="&page_type="+aps.page_type2;
h+="&unviewed_position_start=1";
h+="&description_url="+encodeURIComponent(top.location.protocol+"//"+JuicePageUrl);
h+="&vpos=preroll";
h+="&ad_safe=medium";
if(a.companion_units!=null&&a.companion_units!=""){h+="&ciu_szs="+encodeURIComponent(a.companion_units)
}else{h+="&ciu_szs="
}var c="";
c+="distributor_domain=";
if(aps.current_domain.indexOf("m.")==0){c+=aps.current_domain.substr(2)
}else{c+=aps.current_domain
}c+="&perf_sec="+aps.perf_sec;
c+="&page_type2="+aps.page_type2;
c+="&page_type3="+(encodeURIComponent(aps.getVideoTagPageType3(b)));
c+="&pageurl="+encodeURIComponent(top.location.protocol+"//"+JuicePageUrl);
c+="&referrer="+encodeURIComponent(document.referrer);
c+="&urlhash="+aps.performanceMetrics.urlHash;
c+="&pw=__player-width__&ph=__player-height__";
c+=(aps.cfg.vid.tagUrl=="")?"":"&"+aps.cfg.vid.tagUrl;
for(var d=0;
d<aps.page_kvps.length;
d++){var f=aps.page_kvps[d];
c+="&"+f.key+"="+f.value
}for(var d=0;
d<a.kvps.length;
d++){var f=a.kvps[d];
c+="&"+f.key+"="+f.value
}aps.cfg.adtest[a.code]=aps.cfg.adtest[a.code]||[];
for(var d=0;
d<aps.cfg.adtest[a.code].length;
d++){var f=aps.cfg.adtest[a.code][d];
c+="&"+f.key+"="+f.value
}if(c.length>0){h+="&cust_params="+encodeURIComponent(c)
}h+="&correlator="+new Date().getTime();
aps.logInfo("hearstGetVideoAdTag:"+h);
return h
};
aps.getVideoTagPageType3=function(a){var c="";
if(typeof(aps.topWindow.omni_SSVariant)!="undefined"){c="_"+aps.topWindow.omni_SSVariant
}try{aps.page_type2=self.getOmniContentType()
}catch(b){}return a+"_"+aps.page_type2+c
};
aps.placeDynamicDuringPageLoad=function(b){var a=aps.getAdDefinitionByCode(b);
a.isDynamic=true;
hearstPlaceAd(b)
};
window.hearstPlaceDynamicAd=function(){var b=arguments[0],d;
var a=aps.getAdDefinitionByCode(b);
if(typeof(a)=="undefined"){aps.logWarning("hearstPlaceDynamicAd called with non-defined ad slot "+b+" : ignoring ");
return
}if(!aps.shouldPlaceAd(b)){a.refreshable=false;
return
}if(arguments.length==1){d=aps.getNextDynamicAdDivID(b);
a.oldDivID=b;
a.newDivID=d;
document.getElementById(b).id=d;
aps.callsByDomID[a.newDivID]=1;
aps.logInfo("hearstPlaceDynamicAd called with one parameter "+b+" : new dom id "+d)
}else{d=arguments[1];
if(!aps.isDivIDUniqueForAdPlacement("hearstPlaceDynamicAd",d)){return
}if(document.getElementById(arguments[1])==null){var c=(arguments.length==3)?arguments[2]:0;
d=arguments[1];
if(c<10){c++;
setTimeout(function(){aps.logWarning("Div "+b+" did not exist - retrying : "+c);
hearstPlaceDynamicAd(b,d,c)
},100)
}return
}a.oldDivID=d;
a.newDivID=d;
aps.callsByDomID[a.newDivID]=2
}aps.logInfo("hearstPlaceDynamicAd "+b+"into a div id of "+a.newDivID);
aps.cfg.dfp.ads[a.newDivID]=a;
aps.cfg.dfp.dynamicAds.push[a.newDivId];
aps.MarkDivIDAsUnique(a.newDivID,a.code);
a.isDynamic=true;
aps.cmd.push(function(){aps.waitForScriptsToLoad();
var f=definedTags;
var g=googletag.defineSlot("/"+f.networkCode+"/"+f.adUnit,[a.width,a.height],a.newDivID);
aps.setupResponsiveMappings(g,a);
g.addService(googletag.pubads());
setDFPSlotTargeting(a,g,false);
aps.fireEvent(aps.event.on_update_page_level_targeting);
g.setTargeting("scroll_position",a.renderCount);
aps.slotsByDivID[a.newDivID]=g;
aps.dynamicAdSlots[a.newDivID]=g;
a.renderCount++;
aps.fireEvent(aps.event.on_set_dynamic_ad_targeting,{slot:g,adDefinition:a});
aps.dynamicSlots.push(g);
aps.logPageKVPsforDiv(a.newDivID);
aps.fireEvent(aps.event.on_before_display_ad,{adDefinition:a,slot:aps.slotsByDivID[a.newDivID]});
aps.getAdMetrics(a.newDivID).googleDisplay=aps.getTimeElapsed();
aps.markInterstitialAsRefreshable(b);
googletag.pubads().refresh([g]);
aps.fireEvent(aps.event.on_ad_refresh_call,{gslots:[g]})
})
};
window.hearstPlaceAd=function(){var b=arguments[0];
var d=false;
var a=aps.getAdDefinitionByCode(b);
divID=(arguments.length==2)?arguments[1]:null;
if(typeof definedTags=="undefined"){aps.waitForDefinedTags(function(){hearstPlaceAd(b,divID)
});
return
}if(typeof(a)=="undefined"){aps._initAdDefinitionByCode();
a=aps.getAdDefinitionByCode(b);
if(typeof(a)=="undefined"){aps.logInfo("hearstPlaceAd called with non-defined ad slot "+b+" : ignoring ");
aps.cfg.dfp.undefinedAds.push(b);
return
}}a.placed=true;
aps.getAdMetrics(b).hearstPlaceAd=aps.getTimeElapsed();
if(!aps.shouldPlaceAd(b)){a.refreshable=false;
return
}if(a.code=="OOP"){a.oop=true
}else{a.oop=false
}aps.fireEvent(aps.event.on_hearst_place_ad,{adDefinition:a});
aps.getDataLayerInterstitial();
if(aps.cfg.dfp.dataLayerInterstials.indexOf(a.code)>-1){a.interstitial=true
}if(a.interstitial){aps.logInfo("hearstPlaceAd "+b);
return
}if(!a.interstitial&&!a.rm){if(divID!=null){aps.logInfo("hearstPlaceAd calling hearstPlaceDynamicAd "+b+" divid "+divID);
hearstPlaceDynamicAd(b,divID);
return
}else{if(!a.oop){d=true
}}}if(!aps.isDivIDUniqueForAdPlacement("hearstPlaceAd",b)){return
}aps.logInfo("hearstPlaceAd "+b);
aps.MarkDivIDAsUnique(b);
aps.callsByDomID[b]=0;
if(document.getElementById(b)==null){aps.logInfo("hearstPlaceAd called with div not on page: "+b)
}if(b.indexOf("SSHOW")==0){d=false
}if(d){aps.refreshableSlots.push(b)
}if(document.getElementById(b)!=null){try{aps.cmd.push(function(){aps.waitForScriptsToLoad();
aps.initialUpdatePageLevelKVPS(aps.gcontext);
aps.logPageKVPsforDiv(b);
aps.fireEvent(aps.event.on_before_display_ad,{adDefinition:a,slot:aps.slotsByDivID[a.newDivID]});
aps.getAdMetrics(b).googleDisplay=aps.getTimeElapsed()
})
}catch(c){aps.logException("hearstPlaceAd exception for "+b,c)
}}};
aps.markInterstitialAsRefreshable=function(b){if(b=="GO300"){return
}if(aps.isAdCodeRefreshable(b)){return
}var a=aps.getAdDefinitionByCode(b);
if(!a.interstitial){return
}aps.refreshableSlots.push(b)
};
aps.isAdCodeRefreshable=function(a){for(var b=0;
b<aps.refreshableSlots.length;
b++){if(aps.refreshableSlots[b]==a){return true
}}if(aps.cfg.dfp.dataLayerInterstials.indexOf(a)>-1){return true
}return false
};
aps.refreshSlotsWithWaitCounter=function(c,b){if(aps.refreshWaitCounter>0){var a=0;
self.refreshCheck=setInterval(function(){if(a>50){if(a>50){aps.logError("hearstRefreshAds wait -  timed out waiting for a script");
aps.disableFailedWaitScripts()
}aps.refreshWaitCounter=0
}if(aps.refreshWaitCounter<=0){window.clearInterval(self.refreshCheck);
aps.logInfo("hearstRefreshAds wait complete : "+a+" iterations");
aps.logInfo(b);
googletag.cmd.push(function(){if(aps.cfg.bid.enabled){aps.setPerformanceMetrics(null,"prebid set targeting");
pbjs.setTargetingForGPTAsync();
aps.fireEvent(aps.event.on_before_enable_google_services)
}googletag.pubads().refresh(c);
aps.fireEvent(aps.event.on_ad_refresh_call,{gslots:c})
})
}a++
},50)
}else{aps.logInfo(b);
googletag.cmd.push(function(){aps.setPerformanceMetrics(null,"prebid set targeting");
pbjs.setTargetingForGPTAsync();
aps.fireEvent(aps.event.on_before_enable_google_services);
googletag.pubads().refresh(c);
aps.fireEvent(aps.event.on_ad_refresh_call,{gslots:c})
})
}};
window.hearstRefreshAds=function(){var a=(arguments.length==1)?arguments[0]:aps.refreshableSlots;
var o=[];
var n=this;
var m="";
var k=[];
var l=[];
var g=0;
if(typeof definedTags=="undefined"){aps.logInfo("Tags not received, delaying 0.5s");
setTimeout(function(){hearstRefreshAds(a)
},500);
return
}if(!aps.refreshAvailable){aps.logInfo("hearstRefreshAds called premature : rejected");
return
}var h=[];
for(var d=0;
d<a.length;
d++){if(h.indexOf(a[d])==-1){h.push(a[d])
}}a=h;
if(arguments.length==0){var f=[];
for(var d=0;
d<a.length;
d++){if(aps.isAdCodeRefreshable(a[d])){f.push(a[d])
}}aps.logInfo("hearstRefreshAds called : (all refreshable slots) "+f.join(", "))
}if(!document.hasFocus()){aps.logInfo("hearstRefreshAds called: Tab does not have focus - skipped");
return
}for(var c=0;
c<a.length;
c++){var b=aps.getAdDefinitionByCode(a[c]);
if(b==undefined){aps.logSkip(a[c],"Not defined on this page");
continue
}if(aps.cfg.dfp.adsNotShowing.indexOf(b.code)>-1){aps.logSkip(b.code,"Not displaying on this device");
continue
}if(!b.refreshable){aps.getDataLayerInterstitial();
if(aps.cfg.dfp.dataLayerInterstials.length>0&&aps.cfg.dfp.dataLayerInterstitialRefreshables.indexOf(b.code)>-1&&b.renderCount>1){b.refreshable=true
}}if(aps.cfg.dfp.celtraAds.indexOf(b.code)>-1){aps.logSkip(b.code,"Celtra ad")
}else{if(b.isLoading==true){aps.logSkip(b.code,"Last request not completed");
g++
}else{if(!b.refreshable){aps.logSkip(b.code,"Not refreshable")
}else{if(b.renderCount<=1){aps.logSkip(b.code,"Not rendered")
}else{if(aps.refreshViewableOnly&&!b.impressionViewable){aps.logSkip(b.code,"Not viewable")
}else{if(b.code=="Crown"&&b.advertiserId==4958539431){aps.logSkip(b.code,"Not refreshing BounceX ads on Crown");
b.exclude=true
}else{aps.logInfo("refreshing "+b.code);
b.impressionViewable=false;
k.push(b.code)
}}}}}}}if(k.length<=0){aps.logInfo("No ads are in refreshable state - skipping refresh");
return
}aps.updatePageLevelKVPS(aps.gcontext);
aps.fireEvent(aps.event.on_update_page_level_targeting);
aps.fireEvent(aps.event.on_before_refresh_ads);
a=k;
for(c=0;
c<a.length;
c++){var b=aps.getAdDefinitionByCode(a[c]);
if(aps.isAdCodeRefreshable(a[c])){var p=aps.normalAdSlots[a[c]];
if(typeof(p)=="undefined"){p=aps.dynamicAdSlots[a[c]]
}if(typeof(p)=="undefined"){continue
}o.push(p);
l.push(b);
aps.fireEvent(aps.event.on_before_refresh_ad,{slot:p});
aps.logPageKVPsforDiv(a[c]);
aps.getAdMetrics(a[c]).refreshCalled=aps.getTimeStamp();
b.isLoading=true;
b.batchRequest="refresh"
}}m="refreshing ad slots "+k.join(", ");
if(o.length>0){aps.cfg.dfp.refreshes++;
aps.cfg.dfp.waiting=aps.cfg.dfp.waiting.concat(l);
aps.cfg.dfp.isWaiting=true;
aps.waitStartStep("hearstRefreshAds")
}};
window.hearstRefreshInterstitialAds=function(a){var f=[];
if(!Array.isArray(a)){a=[a]
}var b=[];
aps.logInfo("hearstRefreshInterstitialAds called: "+a.join(", "));
if(typeof definedTags=="undefined"){aps.logInfo("Tags not received, delaying 0.5s");
setTimeout(function(){hearstRefreshInterstitialAds(a)
},500);
return
}if(!aps.refreshAvailable){aps.logInfo("hearstRefreshInterstitialAds called premature, delaying 0.5s");
setTimeout(function(){hearstRefreshInterstitialAds(a)
},500);
return
}for(var d=0;
d<a.length;
d++){var c=aps.interstitialAdDefs[a[d]];
if(typeof(c)=="undefined"){aps._initAdDefinitionByCode();
c=aps.interstitialAdDefs[a[d]];
if(typeof(aps.getAdDefinitionByCode(a[d]))=="undefined"){aps.logInfo("hearstRefreshInterstitialAds called with non-defined ad slot "+a[d]+" : ignoring ");
continue
}else{aps.logWarning("hearstRefreshInterstitialAds called with "+a[d]+", which is not an interstitial ad - ignoring");
continue
}}if(aps.getAdMetrics(a[d]).hearstPlaceAd==0){aps.logWarning("hearstRefreshInterstitialAds called with "+a[d]+", which was never placed on the page using hearstPlaceAd - skipping");
continue
}if(!c.interstitial){aps.logWarning("skipping "+a[d]+" is not an interstitial ad");
continue
}if(c.isLoading==true&&c.code!="EEinsert"){aps.logInfo("skipping refresh of "+c.code+" .  It has not completed last request.");
continue
}c.isLoading=true;
var g=a[d];
if(aps.refreshViewableOnly&&!c.impressionViewable&&c.code!="EEinsert"){aps.logInfo("skipping refresh of interstitial "+c.code+" .  It is not viewable.")
}else{c.impressionViewable=false;
c.callInterstitial=true;
c.batchRequest="refresh";
b.push(c.code);
aps.codesByDomID[c.code]=c.code;
aps.cfg.dfp.ads[c.code]=c;
f.push(g)
}}if(f.length>0){aps.cfg.dfp.refreshes++;
aps.cfg.dfp.waiting=aps.cfg.dfp.waiting.concat(f);
aps.cfg.dfp.isWaiting=true;
aps.waitStartStep("hearstRefreshInterstitialAds")
}};
aps.contentLoaded(window,aps.domLoaded)
})();(function(){var a=document.createElement("script");
a.src="https://web.archive.org/web/20211007045442/https://z.moatads.com/hearstnewsprebidheader515009925453/moatheader.js";
a.setAttribute("id","moat-tag");
document.getElementsByTagName("head")[0].appendChild(a);
window.moatYieldReady=function(){aps.cfg.dfp.moatYieldReady=true;
window.moatPrebidApi.enableLogging()
};
aps.registerEvent(aps.event.on_before_enable_google_services,function(b){googletag.cmd.push(function(){aps.logInfo("setMoatPrebidData");
setMoatPrebidData()
})
});
setMoatPrebidData=function(){if(window.moatPrebidApi&&typeof window.moatPrebidApi.enableLogging==="function"){window.moatPrebidApi.enableLogging()
}if(window.moatPrebidApi&&typeof window.moatPrebidApi.slotDataAvailable==="function"&&window.moatPrebidApi.pageDataAvailable()){var b=window.moatPrebidApi.getMoatTargetingForPage();
Object.entries(b).forEach(function(c){if(debugSGA){if(c[0]=="m_data"){c[1]="0"
}else{if(Array.isArray(c[1])){for(var d=0;
d<c[1].length;
d++){c[1][d]=c[1][d].replace("unsafe","safe")
}}else{if(c[1].indexOf("unsafe")>-1){c[1]=c[1].toString().replace("unsafe","safe")
}}}}aps.gcontext.pubads().setTargeting(c[0],c[1]);
aps.logInfo("kvp: "+c[0]+" = "+c[1])
})
}}
})();aps.cfg.bid.disabledOnMobile.push("vidazoo");(function(){aps.topWindow=(aps.scriptName=="googleAsync")?window:top;
aps.topAps=aps.topWindow.aps;
aps.initialUpdatePageLevelKVPS=function(a){if(!aps.hearstPlaceAdHasUpdatedKVPS){aps.hearstPlaceAdHasUpdatedKVPS=true;
aps.logInfo("calling updatePageLevelKVPS from hpa");
aps.topAps.updatePageLevelKVPS(a)
}}
})();(function(){aps.hash=aps.hash||{};
aps.codec=aps.codec||{};
aps.bitArray={bitSlice:function(b,d,c){b=aps.bitArray._shiftRight(b.slice(d/32),32-(d&31)).slice(1);
return(c===undefined)?b:aps.bitArray.clamp(b,c-d)
},extract:function(b,d,c){var f,e=Math.floor((-d-c)&31);
if((d+c-1^d)&-32){f=(b[d/32|0]<<(32-e))^(b[d/32+1|0]>>>e)
}else{f=b[d/32|0]>>>e
}return f&((1<<c)-1)
},concat:function(a,b){if(a.length===0||b.length===0){return a.concat(b)
}var c=a[a.length-1],d=aps.bitArray.getPartial(c);
if(d===32){return a.concat(b)
}else{return aps.bitArray._shiftRight(b,d,c|0,a.slice(0,a.length-1))
}},bitLength:function(b){var c=b.length,d;
if(c===0){return 0
}d=b[c-1];
return(c-1)*32+aps.bitArray.getPartial(d)
},clamp:function(b,d){if(b.length*32<d){return b
}b=b.slice(0,Math.ceil(d/32));
var c=b.length;
d=d&31;
if(c>0&&d){b[c-1]=aps.bitArray.partial(d,b[c-1]&2147483648>>(d-1),1)
}return b
},partial:function(b,c,a){if(b===32){return c
}return(a?c|0:c<<(32-b))+b*1099511627776
},getPartial:function(a){return Math.round(a/1099511627776)||32
},equal:function(c,d){if(aps.bitArray.bitLength(c)!==aps.bitArray.bitLength(d)){return false
}var f=0,e;
for(e=0;
e<c.length;
e++){f|=c[e]^d[e]
}return(f===0)
},_shiftRight:function(b,g,c,f){var d,e=0,h;
if(f===undefined){f=[]
}for(;
g>=32;
g-=32){f.push(c);
c=0
}if(g===0){return f.concat(b)
}for(d=0;
d<b.length;
d++){f.push(c|b[d]>>>g);
c=b[d]<<(32-g)
}e=b.length?b[b.length-1]:0;
h=aps.bitArray.getPartial(e);
f.push(aps.bitArray.partial(g+h&31,(g+h>32)?c:f.pop(),1));
return f
},_xor4:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]
},byteswapM:function(b){var c,e,d=65280;
for(c=0;
c<b.length;
++c){e=b[c];
b[c]=(e>>>24)|((e>>>8)&d)|((e&d)<<8)|(e<<24)
}return b
}};
aps.codec.hex={fromBits:function(a){var c="",b;
for(b=0;
b<a.length;
b++){c+=((a[b]|0)+263882790666240).toString(16).substr(4)
}return c.substr(0,aps.bitArray.bitLength(a)/4)
},toBits:function(d){var a,c=[],b;
d=d.replace(/\s|0x/g,"");
b=d.length;
d=d+"00000000";
for(a=0;
a<d.length;
a+=8){c.push(parseInt(d.substr(a,8),16)^0)
}return aps.bitArray.clamp(c,b*4)
}};
aps.hash.sha256=function(a){if(!this._key[0]){this._precompute()
}if(a){this._h=a._h.slice(0);
this._buffer=a._buffer.slice(0);
this._length=a._length
}else{this.reset()
}};
aps.codec.utf8String={fromBits:function(a){var d="",b=aps.bitArray.bitLength(a),c,e;
for(c=0;
c<b/8;
c++){if((c&3)===0){e=a[c/4]
}d+=String.fromCharCode(e>>>8>>>8>>>8);
e<<=8
}return decodeURIComponent(escape(d))
},toBits:function(c){c=unescape(encodeURIComponent(c));
var b=[],a,d=0;
for(a=0;
a<c.length;
a++){d=d<<8|c.charCodeAt(a);
if((a&3)===3){b.push(d);
d=0
}}if(a&3){b.push(aps.bitArray.partial(8*(a&3),d))
}return b
}};
aps.hash.sha256.hash=function(a){return(new aps.hash.sha256()).update(a).finalize()
};
aps.hash.sha256.prototype={blockSize:512,reset:function(){this._h=this._init.slice(0);
this._buffer=[];
this._length=0;
return this
},update:function(e){if(typeof e==="string"){e=aps.codec.utf8String.toBits(e)
}var f,a=this._buffer=aps.bitArray.concat(this._buffer,e),k=this._length,h=this._length=k+aps.bitArray.bitLength(e);
if(h>9007199254740991){throw ("Cannot hash more than 2^53 - 1 bits")
}if(typeof Uint32Array!=="undefined"){var d=new Uint32Array(a);
var g=0;
for(f=512+k-((512+k)&511);
f<=h;
f+=512){this._block(d.subarray(16*g,16*(g+1)));
g+=1
}a.splice(0,16*g)
}else{for(f=512+k-((512+k)&511);
f<=h;
f+=512){this._block(a.splice(0,16))
}}return this
},finalize:function(){var d,a=this._buffer,c=this._h;
a=aps.bitArray.concat(a,[aps.bitArray.partial(1,1)]);
for(d=a.length+2;
d&15;
d++){a.push(0)
}a.push(Math.floor(this._length/4294967296));
a.push(this._length|0);
while(a.length){this._block(a.splice(0,16))
}this.reset();
return c
},_init:[],_key:[],_precompute:function(){var c=0,e=2,a,d;
function b(f){return(f-Math.floor(f))*4294967296|0
}for(;
c<64;
e++){d=true;
for(a=2;
a*a<=e;
a++){if(e%a===0){d=false;
break
}}if(d){if(c<8){this._init[c]=b(Math.pow(e,1/2))
}this._key[c]=b(Math.pow(e,1/3));
c++
}}},_block:function(t){var q,s,c,d,e=this._h,r=this._key,f=e[0],g=e[1],j=e[2],l=e[3],m=e[4],n=e[5],o=e[6],p=e[7];
for(q=0;
q<64;
q++){if(q<16){s=t[q]
}else{c=t[(q+1)&15];
d=t[(q+14)&15];
s=t[q&15]=((c>>>7^c>>>18^c>>>3^c<<25^c<<14)+(d>>>17^d>>>19^d>>>10^d<<15^d<<13)+t[q&15]+t[(q+9)&15])|0
}s=(s+p+(m>>>6^m>>>11^m>>>25^m<<26^m<<21^m<<7)+(o^m&(n^o))+r[q]);
p=o;
o=n;
n=m;
m=l+s|0;
l=j;
j=g;
g=f;
f=(s+((g&j)^(l&(g^j)))+(g>>>2^g>>>13^g>>>22^g<<30^g<<19^g<<10))|0
}e[0]=e[0]+f|0;
e[1]=e[1]+g|0;
e[2]=e[2]+j|0;
e[3]=e[3]+l|0;
e[4]=e[4]+m|0;
e[5]=e[5]+n|0;
e[6]=e[6]+o|0;
e[7]=e[7]+p|0
}}
})();(function(){aps.waitForScriptsToLoad=function(){};
aps.scriptLoaderStarted=false;
aps.requiredGPTScriptCount=aps.requiredGPTScriptCount||0;
aps.loadAsyncScripts=function(){if(aps.topWindow!=self){return
}aps.logInfo("loadingAsyncScripts: "+aps.queuedScriptCount);
aps.performanceMetrics.TotalThirdPartyScripts=aps.queuedScriptCount;
for(var a in aps.adScripts){if(aps.adScripts.hasOwnProperty(a)){aps.queueAsyncScript(aps.adScripts[a])
}}aps.scriptLoaderStarted=true;
aps.testAsyncWaitFunctions();
aps.initializeScriptLoadChecking()
};
aps.queueAsyncScript=function(a){a.loadstart=new Date();
if(a.testFunction!=null){return
}var b=a;
a.callback=function(){if(!b.complete){b.loadend=new Date();
b.complete=true;
aps.logInfo(b.name+" loaded  : "+(b.loadend-b.loadstart));
aps.fireEvent(aps.event.on_script_loaded,{scriptDetails:b})
}};
aps._loadScript2(a)
};
aps.testAsyncWaitFunctions=function(){for(var b in aps.adScripts){if(aps.adScripts.hasOwnProperty(b)){if(aps.adScripts[b].testFunction!=null&&aps.adScripts[b].complete==false){if(aps.adScripts[b].testFunction()===true){var a=aps.adScripts[b];
a.loadend=new Date();
a.complete=true;
aps.logInfo(a.name+" loaded  : "+(a.loadend-a.loadstart));
aps.fireEvent(aps.event.on_script_loaded,{scriptDetails:aps.adScripts[b]})
}}}}};
aps._testAsyncStatus=function(){var a=aps.adScripts;
aps.testAsyncWaitFunctions();
var c=0;
for(var b in aps.adScripts){if(aps.adScripts.hasOwnProperty(b)){if(aps.adScripts[b].complete&&aps.adScripts[b].requiredForGPT){c++
}}}if(c==aps.requiredGPTScriptCount){aps.adScriptsLoaded=true
}return aps.adScriptsLoaded
};
aps.initializeScriptLoadChecking=function(){var c=this;
var b=0;
var a=aps.adScripts;
aps.adScriptsLoaded=false;
aps.logInfo("initializeScriptLoadChecking");
c.loadCheck=function(){if(b>50){aps.logError("ScriptLoadChecking timed out waiting for a script");
aps.adScriptsLoaded=true
}else{aps._testAsyncStatus()
}if(aps.adScriptsLoaded==true){aps.logInfo("ScriptLoadChecking complete : "+b+" iterations");
aps.performanceMetrics.ThirdPartyScriptsLoaded=aps.getTimeElapsed();
window.clearInterval(c.loadCheck);
aps.fireEvent(aps.event.on_third_party_complete);
googletag.cmd.push(function(){aps.unQueueCommands()
})
}else{b++;
setTimeout(c.loadCheck,50)
}};
setTimeout(c.loadCheck,50)
};
aps.queueScriptAsync=function(d,e,c,a){var b={name:d,scriptID:null,path:e,testFunction:null,complete:false,loadstart:null,loadend:null,appCallback:a,requiredForGPT:c};
aps.adScripts[d]=b;
aps.queuedScriptCount++;
aps.queuedWaitCount++;
if(c){aps.requiredGPTScriptCount++
}if(aps.scriptLoaderStarted){aps.queueAsyncScript(b)
}return b
};
aps.queueScriptAsyncID=function(e,c,f,d,a){var b={name:e,scriptID:c,path:f,testFunction:null,complete:false,loadstart:null,loadend:null,appCallback:a,requiredForGPT:d};
aps.adScripts[e]=b;
aps.queuedScriptCount++;
aps.queuedWaitCount++;
if(d){aps.requiredGPTScriptCount++
}if(aps.scriptLoaderStarted){aps.queueAsyncScript(b)
}return b
};
aps.queueWaitFunction=function(b,c){var a={name:b,scriptID:null,path:null,testFunction:c,complete:false,loadstart:null,loadend:null,appCallback:null,requiredForGPT:true};
aps.adScripts[b]=a;
aps.queuedWaitCount++;
aps.requiredGPTScriptCount++;
if(aps.scriptLoaderStarted){aps.queueAsyncScript(a)
}return a
};
aps._loadScript2=function(a){var c=a.path;
if(!c||!(typeof c==="string")){return
}var b=document.createElement("script");
b.type="text/javascript";
b.async=true;
if(a.scriptID!=null){b.id=a.scriptID
}if(b.addEventListener){b.addEventListener("load",function(){try{a.callback.apply(a)
}catch(d){aps.logException("_loadScript2",d)
}if(a.appCallback!=null){a.appCallback.apply(a)
}},false)
}else{b.onreadystatechange=function(){if(b.readyState in {loaded:1,complete:1}){b.onreadystatechange=null;
console.log(oCallback);
try{a.callback.apply(a)
}catch(d){aps.logException("_loadScript2",d)
}if(a.appCallback!=null){a.appCallback.apply(a)
}}}
}b.src=c;
document.getElementsByTagName("head")[0].appendChild(b)
}
})();(function(){var b=this;
b.StripAndPreserveQuerystringVars=function(e,d){if(typeof(e)=="undefined"){return""
}var c=e.split("&");
var f=[];
c.forEach(function(g){g=g.split("=");
if(d.indexOf(g[0])!=-1){f.push(g[0]+"="+g[1])
}});
if(f.length>0){return"?"+f.join("&")
}return""
};
b.setPageTargettedUrl=function(d,c,f){var g=c.split("?");
var e="";
if(f.length==0){e=g[0]
}else{e=g[0]+b.StripAndPreserveQuerystringVars(g[1],f)
}aps.addPageKvp(d,e)
};
b.setPageTargettedUrl("PageUrl",JuicePageUrl,["Testpage","Cmpid","Ipid"]);
var a=document.referrer.replace(/^(http(?:s)?:\/\/)/,"").split("/")[0];
b.setPageTargettedUrl("referrer",a,[])
})();(function(){var b=this;
b.aps=aps;
b.refreshed=[];
b.codeFromSlot=function(d){for(var c in aps.slotsByDivID){if(aps.slotsByDivID.hasOwnProperty(c)){if(aps.slotsByDivID[c]==d){return aps.codesByDomID[c]
}}}return"undefined"
};
b.setSlotTargeting=function(j,c){var i=(typeof(b.refreshed[c])=="undefined")?"":"_R";
var h="";
if(aps.faceBookInstantArticle){aps.page_type2="instant article"
}else{if(typeof(aps.topWindow.omni_SSVariant)!="undefined"){h="_"+aps.topWindow.omni_SSVariant
}try{var g=b.getOmniContentType();
if(aps.page_type2!=g){aps.page_type2=b.getOmniContentType();
aps.cfg.dfp.pageType2Set=false
}}catch(d){}}aps.cfg.dfp.pageType2Set=aps.cfg.dfp.pageType2Set||false;
if(!aps.cfg.dfp.pageType2Set){aps.gcontext.pubads().setTargeting("page_type2",aps.page_type2);
aps.cfg.dfp.pageType2Set=true
}j.setTargeting("page_type3",c+"_"+aps.page_type2+h);
b.refreshed[c]=true;
try{if(aps.cfg.adtest[c]){for(var f=0;
f<aps.cfg.adtest[c].length;
f++){j.setTargeting(aps.cfg.adtest[c][f].key,aps.cfg.adtest[c][f].value);
if(!aps.cfg.adtest[c][f].printed){aps.cfg.adtest[c][f].printed=true;
aps.logInfo("set adtest kvp to "+c+": "+aps.cfg.adtest[c][f].key+" = "+aps.cfg.adtest[c][f].value)
}}}}catch(d){}};
aps.registerEvent(aps.event.on_before_display_ad,function(d){if(aps.isIFrameDynamicPage&&aps.scriptName=="googleSync"){b.setSlotTargeting(aps.cfg.stp[aps.cfg.stp.at].ads[0],b.codeFromSlot(aps.cfg.stp[aps.cfg.stp.at].ads[0]))
}else{var c=d.adDefinition;
var e=d.slot;
if(typeof(d.slot)!="undefined"){b.setSlotTargeting(e,c.code)
}}});
aps.registerEvent(aps.event.on_before_refresh_ad,function(c){b.setSlotTargeting(c.slot,b.codeFromSlot(c.slot))
});
b.getOmniContentType=function(){if(typeof(aps.topWindow.ess)!="undefined"){if(typeof(aps.topWindow.ess.prop24)!="undefined"){return aps.topWindow.ess.prop24
}}if(typeof(top.aps.awOmniContentType)=="undefined"){if(typeof(top.omni_blogname)!="undefined"){top.aps.awOmniContentType=b._getBlogOmniType()
}else{top.aps.awOmniContentType=HDN.dataLayer.content.objectType
}}try{if(HDN.dataLayer.content.galleryListType=="list"){top.aps.awOmniContentType="slideshow list view"
}}catch(c){}return top.aps.awOmniContentType
};
b.getQueryParam=function(c){c=c.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var d=new RegExp("[\\?&]"+c+"=([^&#]*)"),e=d.exec(top.location.search);
return e==null?"":decodeURIComponent(e[1].replace(/\+/g," "))
};
b._getBlogOmniType=function(){var p;
var i;
var n;
var r=document.location.host;
var s;
var t;
var u;
var v;
var h;
var w="";
var o="";
var j="Blogs";
var e="";
var q="";
var k;
var g="";
var m="";
var l=document.URL.toLowerCase();
var f="";
var c=new Object;
c.SuperCategory="";
c.Category="";
c.AuthorType="reader";
c.Usage="blog";
c.Section="";
c.Voice="";
var A;
var z="";
var x;
var y;
var d=false;
this.toProperCase=function B(C){if(C!="undefined"){if(C.length>1){return C.toLowerCase().replace(/^(.)|\s(.)/g,function(D){return D.toUpperCase()
})
}}};
if(typeof(omni_blogID)!="undefined"){o=omni_blogID
}if(typeof(omni_blogauthor)!="undefined"){e=B(omni_blogauthor)
}if(typeof(omni_blogauthortype)!="undefined"){c.AuthorType=omni_blogauthortype
}if(typeof(omni_blogposttitle)!="undefined"){d=(omni_blogposttitle.toLowerCase()=="page not found");
w=omni_blogposttitle;
if(w.charAt(w.length-1)==" "){w=w.substr(0,w.length-1)
}}if(typeof(omni_blogname)!="undefined"){g=omni_blogname
}if(typeof(omni_blogcategory2)!="undefined"){c.Category=omni_blogcategory2
}if(c.Category.length>0){if(typeof(omni_blogcategory)!="undefined"){c.SuperCategory=omni_blogcategory
}}else{if(typeof(omni_blogcategory)!="undefined"){c.Category=omni_blogcategory
}}if(typeof(omni_blogusage)!="undefined"){c.Usage=omni_blogusage
}if(typeof(omni_section)!="undefined"){c.Section=omni_section
}if(typeof(omni_voices)!="undefined"){c.Voice=omni_voices
}this.abParseURL=function(){var F=l;
if(F.indexOf("#")>-1){F=F.split("#")[0]
}var D=F.indexOf("?")+1;
var E=F.indexOf(".com")+5;
k=F.substr(0,E);
if(D>0){q=F.substring(D);
A=F.substring(0,D-1)
}else{A=F
}z=A;
A=A.substr(E);
if(A.charAt(A.length-1)=="/"){A=A.substr(0,A.length-1)
}var C=new Array();
C=A.split("/");
x=C[0];
y=C[C.length-1];
if(x==y){y="index"
}if(top.document.location.hostname=="insidescoopsf.sfgate.com"){x="insidescoop"
}return x+":"+y
};
this.abAssignSections=function(){if(c.SuperCategory.length>0){i=c.SuperCategory;
s=c.SuperCategory;
t=s+":"+c.Category;
u=t+":blogs";
v=u+":"+g.toLowerCase()
}else{i=c.Category;
s=c.Category;
t=s+":blogs";
u=t+":"+g.toLowerCase();
v=u;
if(c.Voice.length>0){v=v+":"+c.Voice.toLowerCase()
}}n=v.replace(/:/g,",")
};
p="Blogs-"+abParseURL();
if(c.Category==""){abCategorizeBlog(x,c)
}abAssignSections();
if(w==""||w==g){w="Blog index page"
}if(c.Section.length>0){g=g+":"+c.Section
}w=g+":"+w;
o=g+"--"+o;
h=c.AuthorType;
g=g+"("+c.AuthorType+")";
w=w+"("+c.AuthorType+")";
w=w.replace(/'/g,"");
m=w;
if(e){if(e.indexOf(",")!=-1){e=e.substring(0,e.indexOf(","))
}}if(d){return"undefined"
}else{return j
}};
aps.page_type2="undefined";
if(aps.faceBookInstantArticle){aps.page_type2="instant article"
}else{try{aps.page_type2=b.getOmniContentType()
}catch(a){}}if(aps.isLeafSite){if(document.location.pathname=="/"){aps.page_type2="channel"
}else{aps.page_type2="article"
}}aps.performanceMetrics.page_type2=aps.page_type2;
aps.logInfo("page_type2: "+aps.page_type2)
})();(function(){aps.cfg.dfp.waitingForRichie=aps.cfg.dfp.waitingForRichie||false;
if(APSpageUrl){if(aps.isRichie){googletag.cmd.push(function(){try{googletag.pubads().set("page_url",JuicePageUrl);
aps.logInfo("Richie app: Setting page_url to "+JuicePageUrl)
}catch(b){}});
aps.logInfo("Richie app: disabling modules");
if(document.location.href.indexOf("?appId=")==-1){aps.cfg.bid.enabled=false
}aps.cfg.excludeModules=["nlp","ab_testing","blueconic","PublisherProvidedId","permutive"];
if(typeof mraid=="undefined"){aps.logInfo("mraid not present, not waiting for Richie");
aps.cfg.dfp.waitingForRichie=false
}else{aps.cfg.dfp.waitingForRichie=true;
aps.logInfo("Richie app: enabling viewable trigger");
function a(b){if(b){aps.cfg.dfp.waitingForRichie=false;
aps.logInfo("Richie app: viewable triggered")
}}mraid.addEventListener("viewableChange",a);
aps.cfg.bid.prefetch.enabled=true
}}}})();(function(){aps.specifiedAdSlots={};
aps.usingSelectiveAdSlotLoading=false;
aps.selectiveAdSlotCookieName="Ju13ceSelectiveAdsList";
aps.shouldPlaceAd=function(c){if(!aps.usingSelectiveAdSlotLoading){return true
}return(typeof(aps.specifiedAdSlots[c])!="undefined")
};
aps.saveSelectiveLoadingAdSlotList=function(){var c=[aps.selectiveAdSlotCookieName,"=",JSON.stringify(aps.specifiedAdSlots),"; domain=.",window.location.host.toString(),"; path=/;"].join("");
document.cookie=c
};
aps.clearSelectiveLoadingAdSlots=function(){aps.specifiedAdSlots={};
aps.saveSelectiveLoadingAdSlotList()
};
aps.addSlotToSelectiveLoadingList=function(c){aps.specifiedAdSlots[c]=true;
aps.saveSelectiveLoadingAdSlotList()
};
aps.removeSlotFromSelectiveLoadingList=function(c){if(typeof(aps.specifiedAdSlots[c])!="undefined"){delete aps.specifiedAdSlots[c];
aps.saveSelectiveLoadingAdSlotList()
}};
var b=aps.getQueryParameterByName("sadslot[]");
if(b!=null){aps.usingSelectiveAdSlotLoading=true;
for(var a=0;
a<b.length;
a++){aps.specifiedAdSlots[b[a]]=true
}}else{}})();(function(){aps.specified3rdParties={};
aps.usingSelective3rdLoading=false;
aps.shouldRunThirdParty=function(c){if(aps.faceBookInstantArticle){return false
}if(aps.cfg.excludeModules.indexOf(c)>-1){return false
}if(!aps.usingSelective3rdLoading){return true
}return(typeof(aps.specified3rdParties[c])!="undefined")
};
aps.add3rdToSelectiveLoadingList=function(c){aps.specified3rdParties[c]=true
};
var a=aps.getQueryParameterByName("sad3rd[]");
if(a!=null){aps.usingSelective3rdLoading=true;
for(var b=0;
b<a.length;
b++){aps.specified3rdParties[a[b]]=true
}}})();(function(){var a=aps.getQueryParameterByName("jo");
if(a!=null){var b=decodeURIComponent(a).split(":");
if(b.length==2){aps.registerEvent(aps.event.on_before_enable_google_services,function(c){googletag.cmd.push(function(){aps.logInfo("jo "+b[0]+" = "+b[1]);
aps.gcontext.pubads().setTargeting(b[0],b[1])
})
})
}}})();(function(){var a=window;
aps.adRenderCallback=function(d){try{var b={DomId:d.slot.getSlotId().getDomId(),lineItemId:d.lineItemId,creativeId:d.creativeId,isEmpty:d.isEmpty,targetingKeys:{},width:0,height:0};
if(!d.isEmpty){b.width=(d.size!=null)?d.size[0]:0;
b.height=(d.size!=null)?d.size[1]:0;
var j=d.slot.getTargetingKeys();
for(var f=0;
f<j.length;
f++){var g=j[f];
var h=d.slot.getTargeting(g);
b.targetingKeys[g]=h
}}a.onJuiceEvent_SlotRendered&&a.onJuiceEvent_SlotRendered(b)
}catch(c){aps.logException("aps.adRenderCallback",c)
}}
})();(function(){var a=null;
aps.registerEvent(aps.event.on_init_ad_definition,function(b){if(a===null){var c=aps.juiceMatchedUrl.split("/");
var d=c[0].split(".");
var e=d[d.length-3];
a=(e==="m")||(e==="app");
if(a){aps.logInfo("Mobile site detected")
}else{aps.logInfo("Desktop site detected")
}}if(a){switch(b.adDefinition.code){case"S300":b.adDefinition.interstitial=true;
aps.logInfo(b.adDefinition.code+" marked as interstitial");
break;
case"B728":case"LA300":case"MW728_2":case"GO300":b.adDefinition.interstitial=true;
aps.logInfo(b.adDefinition.code+" marked as interstitial");
break
}}else{switch(b.adDefinition.code){case"GO300":b.adDefinition.interstitial=true;
aps.logInfo(b.adDefinition.code+" marked as interstitial");
break
}}})
})();(function(){if(!aps.shouldRunThirdParty("a9")||!aps.cfg.bid.enabled){return
}if(aps.current_domain=="greenstate.com"){return
}if(aps.cfg.bid.current_device==MOBILE||aps.cfg.bid.current_device==TABLET){if(aps.cfg.bid.disabledOnMobile.indexOf("a9")>-1||aps.cfg.bid.disableMobile){return
}}if(aps.cfg.bid.excludedDomains.indexOf(aps.current_domain)>-1){aps.logInfo("Domain excluded from bidders (A9): "+aps.current_domain);
return
}if(!aps.cfg.bid.enabled||!aps.cfg.bid.a9.enabled){return
}if(aps.cfg.disablePersonalisation&&!aps.cfg.bid.enableGDPR){return
}!function(e,c,h,j,k,d,f){if(c[e]){return
}function i(g,l){c[e]._Q.push([g,l])
}c[e]={init:function(){i("i",arguments)
},fetchBids:function(){i("f",arguments)
},setDisplayBids:function(){},_Q:[]};
d=h.createElement(j);
d.async=!0;
d.src=k;
f=h.getElementsByTagName(j)[0];
f.parentNode.insertBefore(d,f)
}("apstag",window,document,"script","https://web.archive.org/web/20211007045442/https://c.amazon-adsystem.com/aax2/apstag.js");
aps.cfg.bid.a9.partners["1ayvuv4"]="AppNexus";
aps.cfg.bid.a9.partners["2kotmo"]="DistrictM";
aps.cfg.bid.a9.partners["j80glc"]="DMX";
aps.cfg.bid.a9.partners["1eaqzgg"]="GumGum";
aps.cfg.bid.a9.partners["t7ludc"]="Magnite";
aps.cfg.bid.a9.partners["1gqg3k"]="Oath";
aps.cfg.bid.a9.partners["bgbtvk"]="OpenX";
aps.cfg.bid.a9.partners["1m2fm68"]="Pubmatic";
aps.cfg.bid.a9.partners["kbyu4g"]="Pulsepoint";
aps.cfg.bid.a9.partners["16j2cqo"]="TripleLift";
aps.cfg.bid.a9.partners["1gqg3k"]="Verizon";
aps.cfg.bid.a9.partners["lfx7nx"]="Verizon";
aps.cfg.bid.a9.partners["t7ludc"]="Rubicon";
aps.cfg.bid.a9.partners["1iqkhkw"]="Yieldmo";
aps.cfg.bid.a9.validSections={"":"home page","Homepage":"home page","news":"news","entertainment":"entertainment","sports":"sports","burningman":"burningman","realestate":"real estate","obituaries":"obituaries","bayarea":"local news","seen-events":"seen","neighborhood":"local news","food":"food","lifestyle":"living","life":"living","business":"business","local":"local news","ontheblock":"real estate","politics":"news","homestyle":"real estate","living":"living","california-wildfires":"local news","seen-saratoga":"seen","comics-and-games":"entertainment","technology":"technology","education":"education","seen":"seen","expensive-san-francisco":"local news","2018":"local news","2019":"local news","weather":"local news","national":"news","homes":"real estate","photogallery":"news","style":"living","search":"other","science":"news","houseoftheweek":"real estate","music":"entertainment","sfhistory":"local news","nation":"news","readmore":"other","49ers":"sports","portal":"subsciption","crime":"local news","client":"entertainment","warriors":"sports","chris-mcginnis":"travel","raiders":"sports","chronicle_vault":"entertainment","art":"entertainment","real-estate":"real estate","insidescoop":"food","mommyfiles":"living","seattlenews":"local news","beer":"food","access.aspx?product=newedition&from=http:":"subsciption","travel":"travel","giants":"sports","galleries":"news","home":"real estate","opinion":"local news","jobs":"jobs","houston":"local news","education_clone_6643_20180713151626":"local news","dearabby":"entertainment","beauty":"living","outdoors":"travel","subscribe-new-offers":"subsciption","earthquakes":"local news","cars":"autos","chronicle-history":"local news","capitol":"local news","tablehopping":"food","photos":"news","latestnews":"news","mlb":"sports","horoscope":"entertainment","new-haven":"local news","fiesta":"local news","collegesports":"sports","blogs":"other","preps":"sports","auto":"autos","originalpets":"living","lifestyles":"living","athletics":"sports","weird":"news","wine":"food","games":"entertainment","comics":"entertainment","columns":"local news","getaways":"travel","us":"news","rodeo":"entertainment",};
aps.cfg.bid.a9.config.pubID="3070";
aps.cfg.bid.a9.config.adServer="googletag";
aps.cfg.bid.a9.config.bidTimeout=aps.cfg.stp.def.timeout||2500;
var a=document.location.href.split("/")||["","",""];
var b="";
if(aps.cfg.bid.a9.validSections[a[3]]==undefined){b="other"
}else{b=aps.cfg.bid.a9.validSections[a[3]]
}switch(a[2]){case"education.seattlepi.com":b="Education";
break;
case"healthyeating.sfgate.com":b="Healthy Eating";
break;
case"homeguides.sfgate.com":b="Home Guides";
break;
case"livehealthy.chron.com":b="Live Healthy";
break;
case"pyme.lavoztx.com":b="Pyme";
break;
case"smallbusiness.chron.com":b="Small Business";
break;
case"work.chron.com":b="Work";
break
}aps.cfg.bid.a9.config.params={};
aps.cfg.bid.a9.config.params.si_section=b;
aps.cfg.bid.a9.config.us_privacy=(aps.cfg.doNotSell)?"1YYY":"1---";
aps.cfg.bid.a9.apstag=apstag;
aps.cfg.bid.a9.checkInitCalled=function(){if(!aps.cfg.bid.a9.initCalled){aps.cfg.bid.a9.initCalled=true;
aps.logInfo("init A9");
apstag.init(aps.cfg.bid.a9.config)
}};
if(aps.current_domain=="gametimect.com"){aps.cfg.bid.a9.config.blockedBidders=["1m2fm68","bgbtvk","1ayvuv4","t7ludc","1sq5vcw","2kotmo","1238um8","kbyu4g","1juiv40","fw5c00","1fepczk","xnfchs","1x5zdhc","70ibr4","16j2cqo","orsc8w","1oacd8g","acdgcg","19uxhc0","s3ngu8","1rm7hts","1gqg3k"]
}aps.cfg.bid.a9.configSlot=function(c){var e={sizes:[]};
if(c.exclude){return e
}if(!aps.cfg.bid.isValidBid(c,"","a9")){return e
}c.sizes=c.sizes||[];
if(c.mediaType=="native"){return e
}else{if(c.sizes.length==0){aps.logSkip(c.code,"no size available to bidders (a9)");
return e
}}if(c.batchRequest!="requested"&&!aps.cfg.bid.prefetch.enabled){return e
}if(c.video){return e
}var d={};
d.slotID=c.code;
d.slotName="/"+definedTags.networkCode+"/"+definedTags.adUnit+"/"+d.slotID;
d.sizes=c.sizes;
return d
};
aps.registerEvent(aps.event.on_define_bid_data,function(c){var d=aps.cfg.bid.a9.configSlot(c);
if(d.sizes.length>0){aps.cfg.bid.prefetch.a9.adUnits.push(d)
}});
aps.registerEvent(aps.event.on_initial_bid_request,function(){aps.cfg.bid.a9.checkInitCalled();
aps.setPerformanceMetrics("A9BidsRequested","calling a9 display");
apstag.fetchBids({slots:aps.cfg.bid.prefetch.a9.adUnits,timeout:aps.cfg.stp.def.timeout},function(c){aps.cfg.bid.a9.handleDisplayBids(c)
})
});
aps.registerEvent(aps.event.on_refresh_bids,function(e){var d,f;
var c=[];
if(aps.cfg.bid.prefetch.allBidsOnRefresh){d=aps.cfg.bid.prefetch.a9.adUnits;
f=aps.cfg.stp.def.timeout
}else{d=aps.cfg.bid.prefetch.a9.adUnits.filter(function(g){return e.indexOf(g.slotID)>-1
});
f=aps.cfg.stp.nextTimeout
}d.forEach(function(g){c.push(g.slotID)
});
aps.setPerformanceMetrics("A9BidsRequested","calling a9 display for refresh: "+c);
apstag.fetchBids({slots:d,timeout:f},function(g){aps.cfg.bid.a9.handleDisplayBids(g)
})
});
aps.registerEvent(aps.event.on_start_bidding,function(c){if(!aps.cfg.bid.a9.enabled){return
}if(!aps.cfg.bid.prefetch.enabled){aps.cfg.bid.a9.adUnits[aps.cfg.stp.at]=aps.cfg.bid.a9.buildAdSlots(c.slots);
aps.cfg.bid.a9.getDisplayBids(aps.cfg.bid.a9.adUnits[aps.cfg.stp.at]);
if(aps.cfg.bid.a9.videoAdUnits.length==0&&aps.cfg.vid.enabled){aps.cfg.bid.a9.videoAdUnits=aps.cfg.bid.a9.buildDisplaySlots(c.slots);
aps.cfg.bid.a9.getVideoBids()
}}});
aps.cfg.bid.a9.handleDisplayBids=function(d){aps.setPerformanceMetrics("A9AllBidsReceived","A9 bids received");
d.forEach(function(g){if(g.amznbid!="2"){var k=new Date().valueOf();
var h=aps.cfg.bid.a9.partners[g.amznp]||"A9";
var f=aps.cfg.dfp.ads[g.slotID];
var j=g.amznbid;
if(g.amznbid_sp){j=g.amznbid_sp
}while(j.length<7){j+="0"
}var i={ad:f.code,adId:g.amzniid.slice(-7),bidder:h,expires:(10*60*1000)+k-aps.cfg.bid.prefetch.timeoutPadding,index:-1,mediaType:"banner",pageuuid:aps.cfg.pageuuid,position:f.position,received:k,ref:j,sent:false,size:g.size,source:"a9",step:aps.cfg.stp.at,url:document.location.hostname+document.location.pathname,viewability:0,won:false,obj:g};
aps.cfg.bid.bids.push(i);
aps.logInfo(((aps.cfg.bid.showType)?"[banner] ":"")+"*BID* "+aps.fixLen(g.slotID,10)+aps.fixLen(" A9/"+h,15)+" "+aps.fixLen(g.amznbid,10)+aps.fixLen(i.mediaType,10)+" id: "+i.adId)
}});
if(aps.cfg.bid.prefetch.enabled){return
}aps.cfg.stp[aps.cfg.stp.at].a9.bidsReceived=true;
var e=aps.cfg.stp[aps.cfg.stp.at].pb.calledBidders;
var c=aps.cfg.stp[aps.cfg.stp.at].pb.biddersDone;
if(aps.cfg.bid.detectAllBids&&(c.length>=(e.length-aps.cfg.bid.lessBidder))){aps.setPerformanceMetrics(null,"all bids received");
googletag.cmd.push(function(){aps.enableGoogleServices(0)
})
}};
aps.cfg.bid.a9.buildAdSlots=function(f){var e=[];
for(var g in f){var c=aps.definedTagArr[g];
var d=aps.cfg.bid.a9.configSlot(c);
if(d.sizes.length>0){e.push(d)
}}return e
};
aps.cfg.bid.a9.keySlots=function(c){return c.reduce(function(d,e){var f=e.getSlotElementId();
d[f]=e;
return d
},{})
};
aps.cfg.bid.a9.getDisplayBids=function(c){if(aps.cfg.disablePersonalisation&&!aps.cfg.bid.enableGDPR){return
}c=c||[];
if(c.length==0){return
}if(!(aps.cfg.bid.disableMobile&&(aps.current_domain.indexOf("m.")==0))){aps.a9Requesting=c;
aps.cfg.stp[aps.cfg.stp.at].a9.bidsReceived=false;
aps.cfg.bid.a9.checkInitCalled();
aps.setPerformanceMetrics("A9BidsRequested","calling A9 display");
apstag.fetchBids({slots:aps.a9Requesting,timeout:aps.cfg.bid.a9.config.bidTimeout},function(d){aps.cfg.bid.a9.handleDisplayBids(d)
})
}};
aps.cfg.bid.a9.buildDisplaySlots=function(f){var e=[];
for(var c=0;
c<definedTags.ads.length;
c++){if(definedTags.ads[c].video){var d={};
d.slotID="videoSlotName1";
d.mediaType="video";
e.push(d);
return e
}}return e
};
aps.cfg.bid.a9.getVideoBids=function(){if(aps.cfg.disablePersonalisation&&!aps.cfg.bid.enableGDPR){return
}if(!aps.cfg.vid.enabled){return
}if(aps.cfg.bid.a9.videoAdUnits.length>0){googletag.cmd.push(function(){aps.cfg.bid.a9.checkInitCalled();
aps.logInfo("calling A9 video");
apstag.fetchBids({slots:aps.cfg.bid.a9.videoAdUnits,timeout:aps.cfg.bid.a9.config.bidTimeout},function(c){aps.cfg.bid.a9.handleVideoBids(c)
})
})
}};
aps.cfg.bid.a9.handleVideoBids=function(c){aps.logInfo("A9 video bid received: "+c.length);
if(c.length>0){aps.cfg.vid.tagUrl+=c[0].qsParams;
aps.logInfo(c[0].slotID+" *BID* A9/"+(aps.cfg.bid.a9.partners[c[0].amznp]||"A9")+" "+c[0].qsParams+" [video]");
aps.cfg.bid.bids.push({slotid:c[0].slotID,bid:c[0].amznbid,bidder:aps.cfg.bid.a9.partners[c[0].amznp]||"A9"})
}};
aps.registerEvent(aps.event.on_request_new_video_ads,function(){aps.cfg.bid.a9.getVideoBids()
})
})();(function(){aps.registerEvent(aps.event.on_before_enable_google_services,function(c){var a=!1;
if(aps.current_domain=="expressnews.com"||aps.current_domain=="houstonchronicle.com"){try{if(GetCookie("hrstctok")!=null){a=1
}}catch(b){}}else{if(aps.current_domain=="sfchronicle.com"){try{if(JSON.parse(sessionStorage.getItem("sync-subscriberPlans-status"))["hasActivePlans"]==true){a=1
}}catch(b){}}}if(a){googletag.cmd.push(function(){aps.logInfo("user authenticated");
aps.gcontext.pubads().setTargeting("category","premuser")
})
}})
})();(function(){var a="";
switch(aps.current_domain){case"houstonchronicle.com":case"chron.com":a="hou";
break;
case"expressnews.com":case"mysanantonio.com.com":a="sa";
break;
case"sfchronicle.com":case"sfgate.com":a="sf";
break;
case"timesunion.com":a="tu";
break;
default:return;
break
}aps.registerEvent(aps.event.on_before_enable_google_services,function(h){var d=false;
var l=false;
var j=[];
try{if(typeof(localStorage)!=undefined){var f=JSON.parse(localStorage.getItem("hnp_subs"));
var b=1;
var e=null;
if(f!=null){for(var g in f){if(f.hasOwnProperty(g)){e=f[g];
if(e.hasOwnProperty("sub_status_"+b)){var i=a;
if(e["sub_status_"+b]=="Active"){i=i+"_a_"
}else{i=i+"_ex_"
}i=i+e["sub_product_"+b]+"_";
i=i+e["sub_product_code_"+b];
j.push(i)
}}b++
}}}}catch(c){}var k=a+"_na";
if(j.length>=1){k=j.join(",")
}googletag.cmd.push(function(){aps.logInfo("swgt = "+k);
aps.gcontext.pubads().setTargeting("swgt",k)
})
})
})();(function(){window.onHearstLogBadScript=function(c,a){window.bad_scripts=window.bad_scripts||[];
var b=c.split(" ")[0];
window.bad_scripts.push(b);
console.log("Script with a problem: "+b);
console.log("line nuember: "+a)
}
})();!function(){var b=function(Q,S){function U(c,d){return c<<d|c>>>32-d
}function W(h,i){var j,k,l,m,n;
return l=2147483648&h,m=2147483648&i,j=1073741824&h,k=1073741824&i,n=(1073741823&h)+(1073741823&i),j&k?2147483648^n^l^m:j|k?1073741824&n?3221225472^n^l^m:1073741824^n^l^m:n^l^m
}function Y(d,e,f){return d&e|~d&f
}function aa(d,e,f){return d&f|e&~f
}function ac(d,e,f){return d^e^f
}function ae(d,e,f){return e^(d|~f)
}function ag(c,d,e,k,l,m,n){return c=W(c,W(W(Y(d,e,k),l),n)),W(U(c,m),d)
}function ai(c,d,f,k,l,m,n){return c=W(c,W(W(aa(d,f,k),l),n)),W(U(c,m),d)
}function ak(c,d,g,k,l,m,n){return c=W(c,W(W(ac(d,g,k),l),n)),W(U(c,m),d)
}function am(c,d,h,k,l,m,n){return c=W(c,W(W(ae(d,h,k),l),n)),W(U(c,m),d)
}function ao(j){for(var k,l=j.length,m=l+8,n=(m-m%64)/64,o=16*(n+1),p=Array(o-1),q=0,r=0;
l>r;
){k=(r-r%4)/4,q=r%4*8,p[k]=p[k]|j.charCodeAt(r)<<q,r++
}return k=(r-r%4)/4,q=r%4*8,p[k]=p[k]|128<<q,p[o-2]=l<<3,p[o-1]=l>>>29,p
}function aq(f){var g,h,i="",j="";
for(h=0;
3>=h;
h++){g=f>>>8*h&255,j="0"+g.toString(16),i+=j.substr(j.length-2,2)
}return i
}function at(e){e=e.replace(/\r\n/g,"\n");
for(var f="",g=0;
g<e.length;
g++){var h=e.charCodeAt(g);
128>h?f+=String.fromCharCode(h):h>127&&2048>h?(f+=String.fromCharCode(h>>6|192),f+=String.fromCharCode(63&h|128)):(f+=String.fromCharCode(h>>12|224),f+=String.fromCharCode(h>>6&63|128),f+=String.fromCharCode(63&h|128))
}return f
}void 0===S&&(S=""),void 0===Q&&(Q=10000000000*Math.random()+"||"+window.location.href+"||"+(new Date).getTime()+"||"+S);
var av,ax,ay,az,aA,aB,aC,aD,aE,aF=Array(),aG=7,R=12,T=17,V=22,X=5,Z=9,ab=14,ad=20,af=4,ah=11,aj=16,al=23,an=6,ap=10,ar=15,au=21;
for(Q=at(Q),aF=ao(Q),aB=1732584193,aC=4023233417,aD=2562383102,aE=271733878,av=0;
av<aF.length;
av+=16){ax=aB,ay=aC,az=aD,aA=aE,aB=ag(aB,aC,aD,aE,aF[av+0],aG,3614090360),aE=ag(aE,aB,aC,aD,aF[av+1],R,3905402710),aD=ag(aD,aE,aB,aC,aF[av+2],T,606105819),aC=ag(aC,aD,aE,aB,aF[av+3],V,3250441966),aB=ag(aB,aC,aD,aE,aF[av+4],aG,4118548399),aE=ag(aE,aB,aC,aD,aF[av+5],R,1200080426),aD=ag(aD,aE,aB,aC,aF[av+6],T,2821735955),aC=ag(aC,aD,aE,aB,aF[av+7],V,4249261313),aB=ag(aB,aC,aD,aE,aF[av+8],aG,1770035416),aE=ag(aE,aB,aC,aD,aF[av+9],R,2336552879),aD=ag(aD,aE,aB,aC,aF[av+10],T,4294925233),aC=ag(aC,aD,aE,aB,aF[av+11],V,2304563134),aB=ag(aB,aC,aD,aE,aF[av+12],aG,1804603682),aE=ag(aE,aB,aC,aD,aF[av+13],R,4254626195),aD=ag(aD,aE,aB,aC,aF[av+14],T,2792965006),aC=ag(aC,aD,aE,aB,aF[av+15],V,1236535329),aB=ai(aB,aC,aD,aE,aF[av+1],X,4129170786),aE=ai(aE,aB,aC,aD,aF[av+6],Z,3225465664),aD=ai(aD,aE,aB,aC,aF[av+11],ab,643717713),aC=ai(aC,aD,aE,aB,aF[av+0],ad,3921069994),aB=ai(aB,aC,aD,aE,aF[av+5],X,3593408605),aE=ai(aE,aB,aC,aD,aF[av+10],Z,38016083),aD=ai(aD,aE,aB,aC,aF[av+15],ab,3634488961),aC=ai(aC,aD,aE,aB,aF[av+4],ad,3889429448),aB=ai(aB,aC,aD,aE,aF[av+9],X,568446438),aE=ai(aE,aB,aC,aD,aF[av+14],Z,3275163606),aD=ai(aD,aE,aB,aC,aF[av+3],ab,4107603335),aC=ai(aC,aD,aE,aB,aF[av+8],ad,1163531501),aB=ai(aB,aC,aD,aE,aF[av+13],X,2850285829),aE=ai(aE,aB,aC,aD,aF[av+2],Z,4243563512),aD=ai(aD,aE,aB,aC,aF[av+7],ab,1735328473),aC=ai(aC,aD,aE,aB,aF[av+12],ad,2368359562),aB=ak(aB,aC,aD,aE,aF[av+5],af,4294588738),aE=ak(aE,aB,aC,aD,aF[av+8],ah,2272392833),aD=ak(aD,aE,aB,aC,aF[av+11],aj,1839030562),aC=ak(aC,aD,aE,aB,aF[av+14],al,4259657740),aB=ak(aB,aC,aD,aE,aF[av+1],af,2763975236),aE=ak(aE,aB,aC,aD,aF[av+4],ah,1272893353),aD=ak(aD,aE,aB,aC,aF[av+7],aj,4139469664),aC=ak(aC,aD,aE,aB,aF[av+10],al,3200236656),aB=ak(aB,aC,aD,aE,aF[av+13],af,681279174),aE=ak(aE,aB,aC,aD,aF[av+0],ah,3936430074),aD=ak(aD,aE,aB,aC,aF[av+3],aj,3572445317),aC=ak(aC,aD,aE,aB,aF[av+6],al,76029189),aB=ak(aB,aC,aD,aE,aF[av+9],af,3654602809),aE=ak(aE,aB,aC,aD,aF[av+12],ah,3873151461),aD=ak(aD,aE,aB,aC,aF[av+15],aj,530742520),aC=ak(aC,aD,aE,aB,aF[av+2],al,3299628645),aB=am(aB,aC,aD,aE,aF[av+0],an,4096336452),aE=am(aE,aB,aC,aD,aF[av+7],ap,1126891415),aD=am(aD,aE,aB,aC,aF[av+14],ar,2878612391),aC=am(aC,aD,aE,aB,aF[av+5],au,4237533241),aB=am(aB,aC,aD,aE,aF[av+12],an,1700485571),aE=am(aE,aB,aC,aD,aF[av+3],ap,2399980690),aD=am(aD,aE,aB,aC,aF[av+10],ar,4293915773),aC=am(aC,aD,aE,aB,aF[av+1],au,2240044497),aB=am(aB,aC,aD,aE,aF[av+8],an,1873313359),aE=am(aE,aB,aC,aD,aF[av+15],ap,4264355552),aD=am(aD,aE,aB,aC,aF[av+6],ar,2734768916),aC=am(aC,aD,aE,aB,aF[av+13],au,1309151649),aB=am(aB,aC,aD,aE,aF[av+4],an,4149444226),aE=am(aE,aB,aC,aD,aF[av+11],ap,3174756917),aD=am(aD,aE,aB,aC,aF[av+2],ar,718787259),aC=am(aC,aD,aE,aB,aF[av+9],au,3951481745),aB=W(aB,ax),aC=W(aC,ay),aD=W(aD,az),aE=W(aE,aA)
}var aw=aq(aB)+aq(aC)+aq(aD)+aq(aE);
return aw.toLowerCase()
};
try{juiceMdHash=window.Bootstrapper&&window.Bootstrapper.mdHash?Bootstrapper.mdHash:b();
aps.gcontext.pubads().setTargeting("urlhash",juiceMdHash,"juiceMdHash kvp:"+juiceMdHash);
aps.performanceMetrics.urlHash=juiceMdHash
}catch(b){console.warn("Error Generating Unique Hash")
}}();(function(){var a=this;
a.disableAdServingBasedOnQueryStringValues=function(d,f){if(typeof(d)=="undefined"){return false
}var c=d.split("&");
var e=false;
c.forEach(function(g){g=g.split("=");
if(f.indexOf(g[0])!=-1){e=true
}});
if(e){aps.logInfo("setting serve ads to false");
aps.serveAds=false
}};
var b=window.location.href.split("?");
a.disableAdServingBasedOnQueryStringValues(b[1],["username","password","testinggooglefilter","email","client_id","loginID","error","e","parameter","email_id","emailaddress","bc_em","cm_lm"]);
if(window.location.href.indexOf("#cluid")!==-1){aps.logInfo("setting serve ads to false");
aps.serveAds=false
}})();(function(){aps.cfg.dfp.multi=aps.cfg.dfp.multi||{};
aps.cfg.dfp.multi.ads=aps.cfg.dfp.multi.ads||[];
aps.cfg.dfp.multi.enabled=false;
if(aps.isLeafSite){aps.cfg.dfp.multi.enabled=true;
aps.cfg.dfp.multi.availableTypes={"A728":{},"A300":{},"B300":{},"S300":{},"Leaf1":{},"Leaf2":{},"Leaf3":{},"Leaf4":{},"MAD":{}};
aps.cfg.dfp.multi.ads[0]=aps.cfg.dfp.multi.ads[0]||[];
aps.cfg.dfp.multi.ads[0].push("A728");
aps.cfg.dfp.multi.ads[0].push("A300");
aps.cfg.dfp.multi.ads[0].push("B300");
aps.cfg.dfp.multi.ads[0].push("S300");
aps.cfg.dfp.multi.ads[0].push("Leaf1");
aps.cfg.dfp.multi.ads[0].push("Leaf2");
aps.cfg.dfp.multi.ads[0].push("Leaf3");
aps.cfg.dfp.multi.ads[0].push("Leaf4");
aps.cfg.dfp.multi.ads[0].push("MAD")
}else{aps.cfg.dfp.multi.availableTypes={"Inline":{"width":300,"height":250,"code":"Inline","kvps":[{"key":"position","value":"ATF"}],"rm":false,"interstitial":false,"oop":false,"sizeMappings":["0001x300x250","0001x001x001","0001x501x501","0001x336x280","0001x325x204","0001x325x508","0001x320x100"],"video":false,"companion_units":null},"LIST":{"width":300,"height":250,"code":"LIST","kvps":[{"key":"position","value":"ATF"}],"rm":false,"interstitial":false,"oop":false,"sizeMappings":["996x300x600","996x300x250","996x001x001","001x300x250","001x001x001"],"video":false,"companion_units":null},"RB":{"width":300,"height":250,"code":"RB","kvps":[{"key":"position","value":"ATF"}],"rm":false,"interstitial":false,"oop":false,"sizeMappings":["0996x300x250","0996x300x600","0996x160x600","0996x005x001","0654x300x250","0654x300x600","0654x160x600","0654x005x001","0001x300x250"],"video":false,"companion_units":null},"SSHOW":{"width":300,"height":250,"code":"SSHOW","kvps":[{"key":"position","value":"ATF"}],"rm":false,"interstitial":false,"oop":false,"sizeMappings":["001x300x250","001x001x001"],"video":false,"companion_units":null},}
}aps.cloneAdMulti=function(a){var b={};
adType=a.split("-")[0];
for(prop in aps.cfg.dfp.ads[adType]){b[prop]=aps.cfg.dfp.ads[adType][prop]
}b.kvps=aps.cfg.dfp.ads[adType].kvps;
b.sizeMappings=aps.cfg.dfp.ads[adType].sizeMappings;
b.batchRequest="";
b.code=a;
b.newDivID=a;
b.oldDivID=a;
return b
};
aps.showLIST=function(c){if((JSON.stringify(c)=="[null]"||JSON.stringify(c)=="[]")&&!aps.cfg.dfp.isWaiting){aps.logInfo("showLIST: Called with empty array");
return
}aps.cfg.dfp.multi.enabled=true;
var b=(c.length==0||!aps.cfg.dfp.isWaiting);
var a=[];
c.forEach(function(f){a.push(f.id);
var g="";
var h=f.id.split("-");
var e=true;
if(h.length==1){aps.logInfo("showLIST: Base ad "+h[0]+" won't be re-created");
e=false
}g=h[0];
if(aps.cfg.dfp.multi.availableTypes[g]==undefined){aps.logInfo("showLIST: This type of LIST ad is not supported");
e=false
}if(e){if(!aps.cfg.dfp.ads[g]){aps.cfg.dfp.ads[g]=aps.cfg.dfp.multi.availableTypes[g]
}if(aps.cfg.dfp.waiting.indexOf(f.id)==-1){aps.cfg.dfp.waiting.push(f.id);
aps.cfg.dfp.isWaiting=true;
b=true
}}});
aps.logInfo("showLIST: called with values: "+a.join(","));
if(aps.cfg.dfp.waiting.length==0){aps.logInfo("showLIST: No ad to proceed");
return
}var d=true;
if(typeof definedTags=="undefined"){d=false
}if(d){if(!aps.startStep()){d=false
}}if(d){aps.cfg.dfp.multi.ads[aps.cfg.stp.at]=aps.cfg.dfp.multi.ads[aps.cfg.stp.at]||[];
aps.appendMultiAds(aps.cfg.dfp.waiting);
aps.logInfo("showLIST: Calling MULTI slots: "+aps.cfg.dfp.multi.ads[aps.cfg.stp.at]);
defineTags(definedTags)
}else{if(b){aps.logInfo("showLIST: queuing "+a.join(","));
setTimeout(function(){aps.showLIST([])
},500)
}}};
aps.checkMultiType=function(a){var b=a.code.split("-")[0];
if(aps.cfg.dfp.multi.availableTypes[b]==undefined){a.multiAd=false;
a.multiType=null
}else{a.multiAd=true;
a.multiType=b
}a.MultiCalled=false
};
aps.appendMultiAds=function(b){for(var d in b){if(typeof b[d]!="string"){continue
}aps.cfg.dfp.multi.ads[aps.cfg.stp.at].push(b[d]);
if(!aps.cfg.dfp.ads[b[d]]){var c=aps.cloneAdMulti(b[d]);
definedTags.ads.push(c);
aps.page.ads.push(c);
aps.cfg.dfp.ads[b[d]]=c;
aps._initAdDefinitionByCode(c)
}}for(var a=0;
a<aps.cfg.dfp.multi.ads[aps.cfg.stp.at].length;
a++){hearstPlaceAd(aps.cfg.dfp.multi.ads[aps.cfg.stp.at][a])
}};
aps.registerEvent(aps.event.on_check_include_ad,function(a){var b=a.checkForInclude;
if(b.stop||b.addAdSlot){return
}if(a.multiAd){aps.cfg.dfp.multi.ads[aps.cfg.stp.at]=aps.cfg.dfp.multi.ads[aps.cfg.stp.at]||[];
if(aps.cfg.dfp.multi.ads[aps.cfg.stp.at]){if(aps.cfg.dfp.multi.ads[aps.cfg.stp.at].includes(a.code)){b.addAdSlot=true
}}b.stop=true
}})
})();(function(){if(!aps.shouldRunThirdParty("permutive")){return
}aps.cfg.permutive=aps.cfg.permutive||{};
aps.cfg.permutive.excludedFrom=["www.sfgate.com/partner/transparensee","www.mysanantonio.com/partner/transparensee","www.timesunion.com/partner/transparensee","https://web.archive.org/web/20211007045442/https://realestate.timesunion.com/"];
if(aps.cfg.permutive.excludedFrom.indexOf(APSpageUrl)>-1){return
}window.ntvConfig=window.ntvConfig||{};
window.ntvConfig.keyValues=window.ntvConfig.keyValues||{};
aps.cfg.permutive.ntvConfig=localStorage.getItem("_pnativo");
if(aps.cfg.permutive.ntvConfig){window.ntvConfig.keyValues.permutive=aps.cfg.permutive.ntvConfig
}aps.setPermutiveValue=function(arrToTest){retValue=null;
if(!arrToTest.length){arrToTest=[arrToTest]
}for(var i=0;
i<arrToTest.length;
i++){if(retValue==null){try{retValue=eval(arrToTest[i]);
if(retValue){return retValue
}}catch(e){}}}return retValue
};
aps.cfg.permutive.config={"page":{"type":"","article":{"id":"","title":"","description":"","authors":[],"sections":[],"publishedAt":"","keywords":[],"nlp":{"categories":[],"person":[],"location":[],"organization":[],"event":[],"workOfArt":[],"consumerGood":[],"other":[],"unknown":[]}},"user":{"bcDFPTargetingParams":[]}}};
aps.cfg.permutive.config.page.type=aps.setPermutiveValue(["wp_content.objectType","HDN.dataLayer.content.objectType","dataLayer.filter(function(e){return e.pagetype})[0].pagetype","document.querySelector(\"meta[property='og:type']\").content",aps.cfg.permutive.config.page.type]);
aps.cfg.permutive.config.page.article.id=aps.setPermutiveValue(["HDN.dataLayer.content.objectId",aps.cfg.permutive.config.page.article.id]);
aps.cfg.permutive.config.page.article.title=aps.setPermutiveValue(["wp_content.title","HDN.dataLayer.content.title","dataLayer.filter(function(e){return e.content_name})[0].content_name","document.querySelector(\"meta[property='og:title']\").content",aps.cfg.permutive.config.page.article.title]);
aps.cfg.permutive.config.page.article.description=aps.setPermutiveValue(["document.querySelector(\"meta[name='description']\").content",aps.cfg.permutive.config.page.article.description]);
aps.cfg.permutive.config.page.article.authors=aps.setPermutiveValue(["wp_source.authorName.split(', ')","HDN.dataLayer.source.authorName.split(', ')","dataLayer.filter(function(e){return e.author})[0].author.split(', ')","document.querySelector(\"meta[name='author']\").content.split(', ')",""]);
aps.cfg.permutive.config.page.article.sections=aps.setPermutiveValue(["wp_content.sectionPath.filter(function(e){return e!=''})","HDN.dataLayer.content.sectionPath","var e = dataLayer.filter(function(e){return e.category})[0];var p=[e.category,e.subcategory]; p.filter(function(e){return e || false})","document.querySelector(\"meta[property='og:section']\").content.split(', ')",aps.cfg.permutive.config.page.article.section]);
aps.cfg.permutive.config.page.article.publishedAt=aps.setPermutiveValue(["wp_content.pubDate.replace(' ','T')+ 'Z'","HDN.dataLayer.content.pubDate.replace(' ','T')+ 'Z'","getPublishedDateISO()","pubDate",aps.cfg.permutive.config.page.article.publishedAt]);
aps.cfg.permutive.config.page.article.keywords=aps.setPermutiveValue(['document.querySelector("meta[name=\'news_keywords\']").content.split(", ")','document.querySelector("a[rel=\'category tag\']").textContent.split(", ")',"[dataLayer.filter(function(e){return e.adcat1})[0].adcat1 || '',dataLayer.filter(function(e){return e.adcat1})[0].adcat2 || '',dataLayer.filter(function(e){return e.adcat1})[0].adcat3 || ''].filter(function (e){return e != ''})","[document.location.pathname.split('/')[1]]",[]]);
aps.cfg.permutive.config.page.article.nlp.categories=aps.setPermutiveValue(["HDN.dataLayer.content.keyNlpCategories",aps.cfg.permutive.config.page.article.nlp.categories]);
aps.cfg.permutive.config.page.article.nlp.person=aps.setPermutiveValue(["HDN.dataLayer.content.keyNlpPerson",aps.cfg.permutive.config.page.article.nlp.person]);
aps.cfg.permutive.config.page.article.nlp.location=aps.setPermutiveValue(["HDN.dataLayer.content.keyNlpLocation",aps.cfg.permutive.config.page.article.nlp.location]);
aps.cfg.permutive.config.page.article.nlp.organization=aps.setPermutiveValue(["HDN.dataLayer.content.keyNlpOrganization",aps.cfg.permutive.config.page.article.nlp.organization]);
aps.cfg.permutive.config.page.article.nlp.event=aps.setPermutiveValue(["HDN.dataLayer.content.keyNlpEvent",aps.cfg.permutive.config.page.article.nlp.event]);
aps.cfg.permutive.config.page.article.nlp.workOfArt=aps.setPermutiveValue(["HDN.dataLayer.content.keyNlpWorkOfArt",aps.cfg.permutive.config.page.article.nlp.workOfArt]);
aps.cfg.permutive.config.page.article.nlp.consumerGood=aps.setPermutiveValue(["HDN.dataLayer.content.keyNlpConsumerGood",aps.cfg.permutive.config.page.article.nlp.consumerGood]);
aps.cfg.permutive.config.page.article.nlp.other=aps.setPermutiveValue(["HDN.dataLayer.content.keyNlpOther",aps.cfg.permutive.config.page.article.nlp.other]);
aps.cfg.permutive.config.page.article.nlp.unknown=aps.setPermutiveValue(["HDN.dataLayer.content.keyNlpUnknown",aps.cfg.permutive.config.page.article.nlp.unknown]);
aps.cfg.permutive.config.page.user.bcDFPTargetingParams=aps.setPermutiveValue(['JSON.parse(localStorage.getItem("bcDFPTargetingParams"))[0].value']);
aps.cfg.permutive.config.page.user.subscriberStatus=aps.setPermutiveValue(["treg.identity.isEntitled.toString()","'false'"]);
aps.cfg.permutive.project_id="0272ac85-5199-4024-a555-397c3d825d95";
aps.cfg.permutive.organization_id="0272ac85-5199-4024-a555-397c3d825d95";
aps.cfg.permutive.public_api_key="8cbbdd6e-f6b9-4f84-9637-a93d3032cbf2";
aps.cfg.permutive.workspace_id="6af07a2d-d0d3-4dfd-961a-bab066126220";
aps.cfg.permutive.publisherUserId=aps.getCookie("HNPDIUDPF2");
aps.cfg.permutive.maxItems=100;
aps.cfg.permutive.ids=[];
!function(n,e,i){if(!n){n=n||{},window.permutive=n,n.q=[],n.config=i||{},n.config.apiKey=e,n.config.environment=n.config.environment||"production";
for(var o=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],r=0;
r<o.length;
r++){var t=o[r];
n[t]=function(e){return function(){var i=Array.prototype.slice.call(arguments,0);
n.q.push({functionName:e,arguments:i})
}
}(t)
}}}(window.permutive,aps.cfg.permutive.public_api_key,{});
if(aps.cfg.permutive.publisherUserId!=""){window.permutive.identify([{"id":aps.cfg.permutive.publisherUserId,"tag":"publisherUserId"}])
}permutive.addon("web",aps.cfg.permutive.config);
var firstScript=document.getElementsByTagName("script")[0];
var tag=document.createElement("script");
tag.async=1;
tag.src="https://"+aps.cfg.permutive.organization_id+".edge.permutive.app/"+aps.cfg.permutive.workspace_id+"-web.js";
firstScript.parentNode.insertBefore(tag,firstScript);
aps.logInfo("Permutive: Loading");
aps.registerEvent(aps.event.on_before_enable_google_services,function(parms){aps.cfg.permutive.ids=googletag.pubads().getTargeting("permutive");
if(aps.cfg.permutive.ids.length===0){if(aps.cfg.permutive.ids.length==0){var permutiveLocal=[];
try{permutiveLocal=JSON.parse(localStorage.getItem("_pdfps"))
}catch(e){}if(aps.cfg.permutive.ids.length>aps.cfg.permutive.maxItems){aps.logInfo("Permutive: "+aps.cfg.permutive.ids.length+" audiences found");
aps.cfg.permutive.ids=aps.cfg.permutive.ids.slice(0,aps.cfg.permutive.maxItems)
}aps.gcontext.pubads().setTargeting("permutive",aps.cfg.permutive.ids);
aps.logInfo("Permutive (from local storage): "+aps.cfg.permutive.ids)
}}else{if(aps.cfg.permutive.ids.length>aps.cfg.permutive.maxItems){aps.logInfo("Permutive: "+aps.cfg.permutive.ids.length+" audiences found")
}aps.gcontext.pubads().setTargeting("permutive",aps.cfg.permutive.ids);
aps.logInfo("Permutive: "+aps.cfg.permutive.ids)
}})
})();(function(){if(aps.shouldRunThirdParty("blueconic")){var a=this;
aps.registerEvent(aps.event.on_update_page_level_targeting,function(d){if(typeof localStorage.bcDFPTargetingParams!=="undefined"){aps.logInfo("Blueconic segments detected");
try{var b=window.JSON.parse(localStorage.bcDFPTargetingParams);
if(b[0]["key"]=="audiences"&&b[0]["value"].length>0){aps.gcontext.pubads().setTargeting("bc_audiences",b[0]["value"]);
aps.logInfo("Blueconic data: "+localStorage.bcDFPTargetingParams)
}else{aps.logInfo("Empty blueconic segment detected")
}}catch(c){aps.logInfo("error parsing blueconic data")
}}else{aps.logInfo("Blueconic segments not detected")
}})
}})();(function(){if(aps.shouldRunThirdParty("PublisherProvidedId")){googletag.cmd.push(function(){var d="; "+document.cookie;
var c=d.split("; BCSessionID=");
if(c.length==2){var b=c.pop().split(";").shift();
var a=aps.codec.hex.fromBits(aps.hash.sha256.hash(b));
aps.logInfo("PublisherProvidedId: "+b+" hash: "+a);
googletag.pubads().setPublisherProvidedId(a)
}else{aps.logInfo("PublisherProvidedId: BCSessionID not detected")
}})
}})();(function(){if(aps.shouldRunThirdParty("nlp")){aps.getHDNnlpWithId=function(q,o){var p=[];
try{var j=HDN.dataLayer.content["keyNlp"+q];
for(var n=0;
n<j.length;
n++){if(n<10){p.push(o+"_"+j[n].trim())
}}}catch(m){}return p
};
try{var c="";
var h=[];
var b=[];
var l=document.querySelector("meta[name='nlpCategories']");
if(l!=null){c=unescape(l.getAttribute("content")).split("+").join(" ");
var a=c.split("+").join(" ").split(",");
for(var g=0;
g<a.length;
g++){var b=a[g].split("/");
for(var f=1;
f<b.length&&f<4;
f++){if(h.indexOf(b[f])==-1){h.push(b[f])
}}}}if(h.length==0){aps.logInfo("nlp_categories: empty")
}else{aps.logInfo("nlp_categories: "+h);
aps.cfg.nlpCat=h;
googletag.cmd.push(function(){aps.gcontext.pubads().setTargeting("nlp",h)
})
}var d=[];
var k=HDN.dataLayer.source.authorName;
if(k.length>0){d.push("a_"+k)
}k=aps.getHDNnlpWithId("ConsumerGood","g");
if(k.length>0){d.push(k)
}k=aps.getHDNnlpWithId("Event","e");
if(k.length>0){d.push(k)
}k=aps.getHDNnlpWithId("Location","l");
if(k.length>0){d.push(k)
}k=aps.getHDNnlpWithId("Organization","o");
if(k.length>0){d.push(k)
}k=aps.getHDNnlpWithId("Person","p");
if(k.length>0){d.push(k)
}k=aps.getHDNnlpWithId("Unknown","u");
if(k.length>0){d.push(k)
}k=aps.getHDNnlpWithId("WorkOfArt","w");
if(k.length>0){d.push(k)
}googletag.cmd.push(function(){aps.gcontext.pubads().setTargeting("nlp_entities",d)
});
aps.logInfo("nlp_entities: "+d.toString())
}catch(e){aps.logInfo("nlp_categories: exception")
}}})();(function(){if(aps.shouldRunThirdParty("perf_sec")){var a=this;
a.getWCMPath=function(){if(typeof window.omni_channelPath=="undefined"){return null
}var c=window.omni_channelPath.toLowerCase();
c=c.replace(new RegExp(" :: ","g"),":");
var b=(window.location.search.indexOf("articleComments")!==-1);
if(omni_className=="article"||omni_className=="slideshow"){c=c+":"+omni_className;
if(b){c=c+" comments"
}}return c
};
a.getGSAPath=function(){if(window.location.search.indexOf("/search/")!==-1){return"search"
}return null
};
a.getWordpressPath=function(){if(typeof window.omni_blogname=="undefined"){return null
}var b=window.omni_blogcategory.toLowerCase();
if(typeof window.omni_blogcategory2!="undefined"){if(window.omni_blogcategory2!=""){b=b+":blog:"+window.omni_blogcategory2
}}b=b+":"+window.omni_blogname;
return b
};
aps.startThirdParty("perf_sec");
aps.queueWaitFunction("perf_sec_check",function(){var b=null;
b=a.getWCMPath();
b=(b!=null)?b:a.getGSAPath();
b=(b!=null)?b:a.getWordpressPath();
if(b!=null){aps.perf_sec=b;
googletag.cmd.push(function(){aps.logInfo("perf_sec: "+b);
aps.gcontext.pubads().setTargeting("perf_sec",b)
});
aps.stopThirdParty("perf_sec")
}return(b!=null)
})
}})();(function(){aps.cfg.dfp.abtestvar="";
if(aps.shouldRunThirdParty("ab_testing")){var a=this;
a.setNPABTEST=function(){try{aps.cfg.dfp.abtestvar=window.HDN.dataLayer.abtest.experimentId.join()+","
}catch(b){}if(aps.cfg.dfp.abtestvar==""){aps.cfg.dfp.abtestvar=aps.abtest||aps.npabtest||""
}if(aps.cfg.dfp.abtestvar!=""){googletag.cmd.push(function(){aps.logInfo("npabtest : "+aps.cfg.dfp.abtestvar);
aps.gcontext.pubads().setTargeting("ab",aps.cfg.dfp.abtestvar)
})
}else{aps.logInfo("npabtest not detected.")
}};
aps.setNPABTEST=a.setNPABTEST;
aps.registerEvent(aps.event.on_before_enable_google_services,function(b){a.setNPABTEST()
})
}})();(function(){aps.pwt={};
aps.pwt.getLocalStorage=function(){var i={};
var j=localStorage.getItem("identityHub");
if(j!=null){i=JSON.parse(j)
}var j=localStorage.getItem("identityHub_getUserIds");
if(j!=null){i.getUserIds=function(){return JSON.parse(j)
}
}return i
};
aps.pwt.setLocalStorage=function(){aps.logInfo("loaded PubMatic pwt.js");
localStorage.setItem("identityHub",JSON.stringify(window.PWT));
localStorage.setItem("identityHub_getUserIds",JSON.stringify(window.PWT.getUserIds()))
};
window.PWT=aps.pwt.getLocalStorage();
var a="2933";
switch(aps.cfg.bid.current_domain){case"chron.com":a="3346";
break;
case"ctpost.com":a="3347";
break;
case"expressnews.com":a="3348";
break;
case"houstonchronicle.com":a="3349";
break;
case"mysanantonio.com":a="3350";
break;
case"seattlepi.com":a="3351";
break;
case"sfchronicle.com":a="3352";
break;
case"sfgate.com":a="3353";
break;
case"timesunion.com":a="3354";
break
}var e=window.location.href;
var g="//web.archive.org/web/20211007045442/https://ads.pubmatic.com/AdServer/js/pwt/157076/"+a;
var d="";
if(e.indexOf("pwtv=")>0){var f=/pwtv=(.*?)(&|$)/g;
var b=f.exec(e);
if(b.length>=2&&b[1].length>0){d="/"+b[1]
}}var h=document.createElement("script");
h.async=true;
h.id="identityHub";
h.type="text/javascript";
h.src=g+d+"/pwt.js";
h.onload=aps.pwt.setLocalStorage;
var c=document.getElementsByTagName("script")[0];
c.parentNode.insertBefore(h,c);
aps.logInfo("loading PubMatic pwt.js")
})();(function () {
 /* prebid.js v5.8.0
 Updated : 2021-08-09*/
 !function(e){var t=window.pbjsChunk;window.pbjsChunk=function(n,o,a){for(var c,u,s,d=0,f=[];d<n.length;d++)u=n[d],r[u]&&f.push(r[u][0]),r[u]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);for(t&&t(n,o,a);f.length;)f.shift()();if(a)for(d=0;d<a.length;d++)s=i(i.s=a[d]);return s};var n={},r={329:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e},i(i.s=839)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"internal",(function(){return j})),t.getPrebidInternal=function(){return w},n.d(t,"bind",(function(){return U})),t.getUniqueIdentifierStr=x,t.generateUUID=function e(t){return t?(t^(window&&window.crypto&&window.crypto.getRandomValues?crypto.getRandomValues(new Uint8Array(1))[0]%16:16*Math.random())>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},t.getBidIdParameter=function(e,t){if(t&&t[e])return t[e];return""},t.tryAppendQueryString=function(e,t,n){if(n)return e+t+"="+encodeURIComponent(n)+"&";return e},t.parseQueryStringParameters=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t=t.replace(/&$/,"")},t.transformAdServerTargetingObj=function(e){return e&&Object.getOwnPropertyNames(e).length>0?ce(e).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(ue(e,t)))})).join("&"):""},t.getAdUnitSizes=function(e){if(!e)return;var t=[];if(e.mediaTypes&&e.mediaTypes.banner&&Array.isArray(e.mediaTypes.banner.sizes)){var n=e.mediaTypes.banner.sizes;Array.isArray(n[0])?t=n:t.push(n)}else Array.isArray(e.sizes)&&(Array.isArray(e.sizes[0])?t=e.sizes:t.push(e.sizes));return t},t.parseSizesInput=function(e){var t=[];if("string"==typeof e){var n=e.split(","),r=/^(\d)+x(\d)+$/i;if(n)for(var i in n)Z(n,i)&&n[i].match(r)&&t.push(n[i])}else if("object"===h(e)){var o=e.length;if(o>0)if(2===o&&"number"==typeof e[0]&&"number"==typeof e[1])t.push(D(e));else for(var a=0;a<o;a++)t.push(D(e[a]))}return t},t.parseGPTSingleSizeArray=D,t.parseGPTSingleSizeArrayToRtbSize=function(e){if(N(e))return{w:e[0],h:e[1]}},t.getWindowTop=k,t.getWindowSelf=P,t.getWindowLocation=M,t.logMessage=q,t.logInfo=G,t.logWarn=W,t.logError=L,t.hasConsoleLogger=function(){return E},t.debugTurnedOn=z,t.createInvisibleIframe=function(){var e=document.createElement("iframe");return e.id=x(),e.height=0,e.width=0,e.border="0px",e.hspace="0",e.vspace="0",e.marginWidth="0",e.marginHeight="0",e.style.border="0",e.scrolling="no",e.frameBorder="0",e.src="about:blank",e.style.display="none",e},t.getParameterByName=function(e){return me(M().search)[e]||""},t.isA=V,t.isFn=H,t.isStr=K,t.isArray=J,t.isNumber=Y,t.isPlainObject=Q,t.isBoolean=function(e){return V(e,"Boolean")},t.isEmpty=$,t.isEmptyStr=function(e){return K(e)&&(!e||0===e.length)},t._each=X,t.contains=function(e,t){if($(e))return!1;if(H(e.indexOf))return-1!==e.indexOf(t);var n=e.length;for(;n--;)if(e[n]===t)return!0;return!1},t._map=function(e,t){if($(e))return[];if(H(e.map))return e.map(t);var n=[];return X(e,(function(r,i){n.push(t(r,i,e))})),n},t.hasOwn=Z,t.insertElement=ee,t.triggerPixel=te,t.callBurl=function(e){var t=e.source,n=e.burl;t===m.S2S.SRC&&n&&j.triggerPixel(n)},t.insertHtmlIntoIframe=function(e){if(!e)return;var t=document.createElement("iframe");t.id=x(),t.width=0,t.height=0,t.hspace="0",t.vspace="0",t.marginWidth="0",t.marginHeight="0",t.style.display="none",t.style.height="0px",t.style.width="0px",t.scrolling="no",t.frameBorder="0",t.allowtransparency="true",j.insertElement(t,document,"body"),t.contentWindow.document.open(),t.contentWindow.document.write(e),t.contentWindow.document.close()},t.insertUserSyncIframe=ne,t.createTrackPixelHtml=function(e){if(!e)return"";var t=encodeURI(e),n='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return n+='<img src="'+t+'"></div>'},t.createTrackPixelIframeHtml=re,t.getValueString=ie,t.uniques=oe,t.flatten=ae,t.getBidRequest=function(e,t){if(!e)return;var n;return t.some((function(t){var r=c()(t.bids,(function(t){return["bidId","adId","bid_id"].some((function(n){return t[n]===e}))}));return r&&(n=r),r})),n},t.getKeys=ce,t.getValue=ue,t.getKeyByValue=function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t)return n},t.getBidderCodes=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pbjs.adUnits;return e.map((function(e){return e.bids.map((function(e){return e.bidder})).reduce(ae,[])})).reduce(ae).filter(oe)},t.isGptPubadsDefined=se,t.isApnGetTagDefined=function(){if(window.apntag&&H(window.apntag.getTag))return!0},n.d(t,"getHighestCpm",(function(){return de})),n.d(t,"getOldestHighestCpmBid",(function(){return fe})),n.d(t,"getLatestHighestCpmBid",(function(){return le})),t.shuffle=function(e){var t=e.length;for(;t>0;){var n=Math.floor(Math.random()*t);t--;var r=e[t];e[t]=e[n],e[n]=r}return e},t.adUnitsFilter=function(e,t){return s()(e,t&&t.adUnitCode)},t.deepClone=ge,t.inIframe=function(){try{return j.getWindowSelf()!==j.getWindowTop()}catch(e){return!0}},t.isSafariBrowser=function(){return/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)},t.replaceAuctionPrice=function(e,t){if(!e)return;return e.replace(/\$\{AUCTION_PRICE\}/g,t)},t.replaceClickThrough=function(e,t){if(!e||!t||"string"!=typeof t)return;return e.replace(/\${CLICKTHROUGH}/g,t)},t.timestamp=function(){return(new Date).getTime()},t.getPerformanceNow=function(){return window.performance&&window.performance.now&&window.performance.now()||0},t.hasDeviceAccess=function(){return!1!==r.b.getConfig("deviceAccess")},t.checkCookieSupport=be,t.delayExecution=function(e,t){if(t<1)throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));var n=0;return function(){++n===t&&e.apply(this,arguments)}},t.groupBy=function(e,t){return e.reduce((function(e,n){return(e[n[t]]=e[n[t]]||[]).push(n),e}),{})},t.getDefinedParams=function(e,t){return t.filter((function(t){return e[t]})).reduce((function(t,n){return y(t,v({},n,e[n]))}),{})},t.isValidMediaTypes=function(e){var t=["banner","native","video"];if(!Object.keys(e).every((function(e){return s()(t,e)})))return!1;if(e.video&&e.video.context)return s()(["instream","outstream","adpod"],e.video.context);return!0},t.getBidderRequest=function(e,t,n){return c()(e,(function(e){return e.bids.filter((function(e){return e.bidder===t&&e.adUnitCode===n})).length>0}))||{start:null,auctionId:null}},t.getUserConfiguredParams=function(e,t,n){return e.filter((function(e){return e.code===t})).map((function(e){return e.bids})).reduce(ae,[]).filter((function(e){return e.bidder===n})).map((function(e){return e.params||{}}))},t.getOrigin=function(){return window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")},t.getDNT=function(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNotTrack||"yes"===navigator.doNotTrack},t.isAdUnitCodeMatchingSlot=function(e){return function(t){return ve(e,t)}},t.isSlotMatchingAdUnitCode=ye,t.getGptSlotInfoForAdUnitCode=function(e){var t;se()&&(t=c()(window.googletag.pubads().getSlots(),ye(e)));if(t)return{gptSlot:t.getAdUnitPath(),divId:t.getSlotElementId()};return{}},t.unsupportedBidderMessage=function(e,t){var n=Object.keys(e.mediaTypes||{banner:"banner"}).join(", ");return"\n    ".concat(e.code," is a ").concat(n," ad unit\n    containing bidders that don't support ").concat(n,": ").concat(t,".\n    This bidder won't fetch demand.\n  ")},t.isInteger=he,t.convertCamelToUnderscore=function(e){return e.replace(/(?:^|\.?)([A-Z])/g,(function(e,t){return"_"+t.toLowerCase()})).replace(/^_/,"")},t.cleanObj=function(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})},t.pick=function(e,t){if("object"!==h(e))return{};return t.reduce((function(n,r,i){if("function"==typeof r)return n;var o=r,a=r.match(/^(.+?)\sas\s(.+?)$/i);a&&(r=a[1],o=a[2]);var c=e[r];return"function"==typeof t[i+1]&&(c=t[i+1](c,n)),void 0!==c&&(n[o]=c),n}),{})},t.transformBidderParamKeywords=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"keywords",n=[];return X(e,(function(e,r){if(J(e)){var i=[];X(e,(function(e){((e=ie(t+"."+r,e))||""===e)&&i.push(e)})),e=i}else{if(!K(e=ie(t+"."+r,e)))return;e=[e]}n.push({key:r,value:e})})),n},t.convertTypes=function(e,t){return Object.keys(e).forEach((function(n){var r,i;t[n]&&(H(e[n])?t[n]=e[n](t[n]):t[n]=(r=e[n],i=t[n],"string"===r?i&&i.toString():"number"===r?Number(i):i),isNaN(t[n])&&delete t.key)})),t},t.isArrayOfNums=function(e,t){return J(e)&&(!t||e.length===t)&&e.every((function(e){return he(e)}))},t.fill=function(e,t){for(var n=[],r=0;r<t;r++){var i=Q(e)?ge(e):e;n.push(i)}return n},t.chunk=function(e,t){for(var n=[],r=0;r<Math.ceil(e.length/t);r++){var i=r*t,o=i+t;n.push(e.slice(i,o))}return n},t.getMinValueFromArray=function(e){return Math.min.apply(Math,p(e))},t.getMaxValueFromArray=function(e){return Math.max.apply(Math,p(e))},t.compareOn=function(e){return function(t,n){return t[e]<n[e]?1:t[e]>n[e]?-1:0}},t.parseQS=me,t.formatQS=Se,t.parseUrl=function(e,t){var n=document.createElement("a");t&&"noDecodeWholeURL"in t&&t.noDecodeWholeURL?n.href=e:n.href=decodeURIComponent(e);var r=t&&"decodeSearchAsString"in t&&t.decodeSearchAsString;return{href:n.href,protocol:(n.protocol||"").replace(/:$/,""),hostname:n.hostname,port:+n.port,pathname:n.pathname.replace(/^(?!\/)/,"/"),search:r?n.search:j.parseQS(n.search||""),hash:(n.hash||"").replace(/^#/,""),host:n.host||window.location.host}},t.buildUrl=function(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":".concat(e.port):""))+(e.pathname||"")+(e.search?"?".concat(j.formatQS(e.search||"")):"")+(e.hash?"#".concat(e.hash):"")},t.deepEqual=Ae,t.mergeDeep=function e(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(!r.length)return t;var o=r.shift();if(Q(t)&&Q(o))for(var a in o)Q(o[a])?(t[a]||y(t,v({},a,{})),e(t[a],o[a])):J(o[a])&&t[a]?J(t[a])&&(t[a]=t[a].concat(o[a])):y(t,v({},a,o[a]));return e.apply(void 0,[t].concat(r))},t.cyrb53Hash=function(e){for(var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=function(e,t){if(H(Math.imul))return Math.imul(e,t);var n=(4194303&e)*(t|=0);return 4290772992&e&&(n+=(4290772992&e)*t|0),0|n},i=3735928559^n,o=1103547991^n,a=0;a<e.length;a++)t=e.charCodeAt(a),i=r(i^t,2654435761),o=r(o^t,1597334677);return i=r(i^i>>>16,2246822507)^r(o^o>>>13,3266489909),(4294967296*(2097151&(o=r(o^o>>>16,2246822507)^r(i^i>>>13,3266489909)))+(i>>>0)).toString()};var r=n(3),i=n(164),o=n.n(i),a=n(11),c=n.n(a),u=n(12),s=n.n(u),d=n(165);n.d(t,"deepAccess",(function(){return d.a}));var f=n(166);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"deepSetValue",(function(){return f.a}));var m=n(5),S=Object.prototype.toString,A=Boolean(window.console),E=Boolean(A&&window.console.log),O=Boolean(A&&window.console.info),T=Boolean(A&&window.console.warn),I=Boolean(A&&window.console.error),C=n(9),j={checkCookieSupport:be,createTrackPixelIframeHtml:re,getWindowSelf:P,getWindowTop:k,getWindowLocation:M,insertUserSyncIframe:ne,insertElement:ee,isFn:H,triggerPixel:te,logError:L,logWarn:W,logMessage:q,logInfo:G,parseQS:me,formatQS:Se,deepEqual:Ae},w={};var _,R={},U=function(e,t){return t}.bind(null,1,R)()===R?Function.prototype.bind:function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){return t.apply(e,n.concat(Array.prototype.slice.call(arguments)))}},B=(_=0,function(){return++_});function x(){return B()+Math.random().toString(16).substr(2)}function D(e){if(N(e))return e[0]+"x"+e[1]}function N(e){return J(e)&&2===e.length&&!isNaN(e[0])&&!isNaN(e[1])}function k(){return window.top}function P(){return window.self}function M(){return window.location}function q(){z()&&E&&console.log.apply(console,F(arguments,"MESSAGE:"))}function G(){z()&&O&&console.info.apply(console,F(arguments,"INFO:"))}function W(){z()&&T&&console.warn.apply(console,F(arguments,"WARNING:")),C.emit(m.EVENTS.AUCTION_DEBUG,{type:"WARNING",arguments:arguments})}function L(){z()&&I&&console.error.apply(console,F(arguments,"ERROR:")),C.emit(m.EVENTS.AUCTION_DEBUG,{type:"ERROR",arguments:arguments})}function F(e,t){e=[].slice.call(e);var n=r.b.getCurrentBidder();return t&&e.unshift(t),n&&e.unshift(i("#aaa")),e.unshift(i("#3b88c3")),e.unshift("%cPrebid"+(n?"%c".concat(n):"")),e;function i(e){return"display: inline-block; color: #fff; background: ".concat(e,"; padding: 1px 4px; border-radius: 3px;")}}function z(){return!!r.b.getConfig("debug")}function V(e,t){return S.call(e)==="[object "+t+"]"}function H(e){return V(e,"Function")}function K(e){return V(e,"String")}function J(e){return V(e,"Array")}function Y(e){return V(e,"Number")}function Q(e){return V(e,"Object")}function $(e){if(!e)return!0;if(J(e)||K(e))return!(e.length>0);for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function X(e,t){if(!$(e)){if(H(e.forEach))return e.forEach(t,this);var n=0,r=e.length;if(r>0)for(;n<r;n++)t(e[n],n,e);else for(n in e)hasOwnProperty.call(e,n)&&t.call(this,e[n],n)}}function Z(e,t){return e.hasOwnProperty?e.hasOwnProperty(t):void 0!==e[t]&&e.constructor.prototype[t]!==e[t]}function ee(e,t,n,r){var i;t=t||document,i=n?t.getElementsByTagName(n):t.getElementsByTagName("head");try{if((i=i.length?i:t.getElementsByTagName("body")).length){i=i[0];var o=r?null:i.firstChild;return i.insertBefore(e,o)}}catch(e){}}function te(e,t){var n=new Image;t&&j.isFn(t)&&(n.addEventListener("load",t),n.addEventListener("error",t)),n.src=e}function ne(e,t){var n=j.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin"),r=document.createElement("div");r.innerHTML=n;var i=r.firstChild;t&&j.isFn(t)&&(i.addEventListener("load",t),i.addEventListener("error",t)),j.insertElement(i,document,"html",!0)}function re(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e?(t&&(e=encodeURI(e)),n&&(n='sandbox="'.concat(n,'"')),"<iframe ".concat(n,' id="').concat(x(),'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e,'">\n    </iframe>')):""}function ie(e,t,n){return null==t?n:K(t)?t:Y(t)?t.toString():void j.logWarn("Unsuported type for param: "+e+" required type: String")}function oe(e,t,n){return n.indexOf(e)===t}function ae(e,t){return e.concat(t)}function ce(e){return Object.keys(e)}function ue(e,t){return e[t]}function se(){if(window.googletag&&H(window.googletag.pubads)&&H(window.googletag.pubads().getSlots))return!0}var de=pe("timeToRespond",(function(e,t){return e>t})),fe=pe("responseTimestamp",(function(e,t){return e>t})),le=pe("responseTimestamp",(function(e,t){return e<t}));function pe(e,t){return function(n,r){return n.cpm===r.cpm?t(n[e],r[e])?r:n:n.cpm<r.cpm?r:n}}function ge(e){return o()(e)}function be(){if(window.navigator.cookieEnabled||document.cookie.length)return!0}var ve=function(e,t){return e.getAdUnitPath()===t||e.getSlotElementId()===t};function ye(e){return function(t){return ve(t,e)}}function he(e){return Number.isInteger?Number.isInteger(e):"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}function me(e){return e?e.replace(/^\?/,"").split("&").reduce((function(e,t){var n=l(t.split("="),2),r=n[0],i=n[1];return/\[\]$/.test(r)?(e[r=r.replace("[]","")]=e[r]||[],e[r].push(i)):e[r]=i||"",e}),{}):{}}function Se(e){return Object.keys(e).map((function(t){return Array.isArray(e[t])?e[t].map((function(e){return"".concat(t,"[]=").concat(e)})).join("&"):"".concat(t,"=").concat(e[t])})).join("&")}function Ae(e,t){if(e===t)return!0;if("object"===h(e)&&null!==e&&"object"===h(t)&&null!==t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e){if(!t.hasOwnProperty(n))return!1;if(!Ae(e[n],t[n]))return!1}return!0}return!1}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"storage",(function(){return I})),t.registerBidder=function(e){var t=Array.isArray(e.supportedMediaTypes)?{supportedMediaTypes:e.supportedMediaTypes}:void 0;function n(e){var n=j(e);i.default.registerBidAdapter(n,e.code,t)}n(e),Array.isArray(e.aliases)&&e.aliases.forEach((function(t){var r,o,a=t;Object(y.isPlainObject)(t)&&(a=t.code,r=t.gvlid,o=t.skipPbsAliasing),i.default.aliasRegistry[a]=e.code,n(T({},e,{code:a,gvlid:r,skipPbsAliasing:o}))}))},t.newBidder=j,n.d(t,"registerSyncInner",(function(){return w})),t.preloadBidderMappingFile=_,t.getIabSubCategory=function(e,t){var n=i.default.getBidAdapter(e);if(n.getSpec().getMappingFileInfo){var r=n.getSpec().getMappingFileInfo(),o=r.localStorageKey?r.localStorageKey:n.getBidderCode(),a=I.getDataFromLocalStorage(o);if(a){try{a=JSON.parse(a)}catch(t){Object(y.logError)("Failed to parse ".concat(e," mapping data stored in local storage"))}return a.mapping[t]?a.mapping[t]:null}}},t.isValid=R;var r=n(75),i=n(8),o=n(3),a=n(39),c=n(55),u=n(36),s=n(22),d=n(5),f=n.n(d),l=n(9),p=n.n(l),g=n(12),b=n.n(g),v=n(4),y=n(0),h=n(2),m=n(10),S=n(7);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var I=Object(S.a)("bidderFactory"),C=["requestId","cpm","ttl","creativeId","netRevenue","currency"];function j(e){return T(new r.a(e.code),{getSpec:function(){return Object.freeze(e)},registerSyncs:t,callBids:function(r,i,c,u,s,d){if(Array.isArray(r.bids)){var l={},g=[],b=r.bids.filter(n);if(0!==b.length){var v={};b.forEach((function(e){v[e.bidId]=e,e.adUnitCode||(e.adUnitCode=e.placementCode)}));var h=e.buildRequests(b,r);if(h&&0!==h.length){Array.isArray(h)||(h=[h]);var m=Object(y.delayExecution)(d(S),h.length);h.forEach((function(t){switch(t.method){case"GET":u("".concat(t.url).concat(function(e){if(e)return"?".concat("object"===O(e)?Object(y.parseQueryStringParameters)(e):e);return""}(t.data)),{success:d(n),error:o},void 0,T({method:"GET",withCredentials:!0},t.options));break;case"POST":u(t.url,{success:d(n),error:o},"string"==typeof t.data?t.data:JSON.stringify(t.data),T({method:"POST",contentType:"text/plain",withCredentials:!0},t.options));break;default:Object(y.logWarn)("Skipping invalid request from ".concat(e.code,". Request type ").concat(t.type," must be GET or POST")),m()}function n(n,o){s(e.code);try{n=JSON.parse(n)}catch(e){}var c;n={body:n,headers:{get:o.getResponseHeader.bind(o)}},g.push(n);try{c=e.interpretResponse(n,t)}catch(t){return Object(y.logError)("Bidder ".concat(e.code," failed to interpret the server's response. Continuing without bids"),null,t),void m()}function u(t){var n=v[t.requestId];if(n){t.originalCpm=t.cpm,t.originalCurrency=t.currency,t.meta=t.meta||T({},t[n.bidder]);var o=T(Object(a.a)(f.a.STATUS.GOOD,n),t);!function(e,t){l[e]=!0,R(e,t,[r])&&i(e,t)}(n.adUnitCode,o)}else Object(y.logWarn)("Bidder ".concat(e.code," made bid for unknown request ID: ").concat(t.requestId,". Ignoring."))}c&&(Object(y.isArray)(c)?c.forEach(u):u(c)),m(c)}function o(t){s(e.code),Object(y.logError)("Server call for ".concat(e.code," failed: ").concat(t,". Continuing without bids.")),m()}}))}else S()}else S()}function S(){c(),o.b.runWithBidder(e.code,(function(){p.a.emit(f.a.EVENTS.BIDDER_DONE,r),t(g,r.gdprConsent,r.uspConsent)}))}}});function t(t,n,r){w(e,t,n,r)}function n(t){return!!e.isBidRequestValid(t)||(Object(y.logWarn)("Invalid bid sent to bidder ".concat(e.code,": ").concat(JSON.stringify(t))),!1)}}var w=Object(m.b)("async",(function(e,t,n,r){var a=o.b.getConfig("userSync.aliasSyncEnabled");if(e.getUserSyncs&&(a||!i.default.aliasRegistry[e.code])){var u=o.b.getConfig("userSync.filterSettings"),s=e.getUserSyncs({iframeEnabled:!(!u||!u.iframe&&!u.all),pixelEnabled:!(!u||!u.image&&!u.all)},t,n,r);s&&(Array.isArray(s)||(s=[s]),s.forEach((function(t){c.a.registerSync(t.type,e.code,t.url)})))}}),"registerSyncs");function _(e,t){if(!o.b.getConfig("adpod.brandCategoryExclusion"))return e.call(this,t);t.filter((function(e){return Object(y.deepAccess)(e,"mediaTypes.video.context")===h.a})).map((function(e){return e.bids.map((function(e){return e.bidder}))})).reduce(y.flatten,[]).filter(y.uniques).forEach((function(e){var t=i.default.getBidAdapter(e);if(t.getSpec().getMappingFileInfo){var n=t.getSpec().getMappingFileInfo(),r=n.refreshInDays?n.refreshInDays:1,o=n.localStorageKey?n.localStorageKey:t.getSpec().code,a=I.getDataFromLocalStorage(o);try{(!(a=a?JSON.parse(a):void 0)||Object(y.timestamp)()>a.lastUpdated+24*r*60*60*1e3)&&Object(v.a)(n.url,{success:function(t){try{t=JSON.parse(t);var n={lastUpdated:Object(y.timestamp)(),mapping:t.mapping};I.setDataInLocalStorage(o,JSON.stringify(n))}catch(t){Object(y.logError)("Failed to parse ".concat(e," bidder translation mapping file"))}},error:function(){Object(y.logError)("Failed to load ".concat(e," bidder translation file"))}})}catch(t){Object(y.logError)("Failed to parse ".concat(e," bidder translation mapping file"))}}})),e.call(this,t)}function R(e,t,n){function r(e){return"Invalid bid from ".concat(t.bidderCode,". Ignoring bid: ").concat(e)}return e?t?(i=Object.keys(t),C.every((function(e){return b()(i,e)&&!b()([void 0,null],t[e])}))?"native"!==t.mediaType||Object(u.g)(t,n)?"video"!==t.mediaType||Object(s.d)(t,n)?!("banner"===t.mediaType&&!function(e,t,n){if((t.width||0===parseInt(t.width,10))&&(t.height||0===parseInt(t.height,10)))return t.width=parseInt(t.width,10),t.height=parseInt(t.height,10),!0;var r=Object(y.getBidderRequest)(n,t.bidderCode,e),i=r&&r.bids&&r.bids[0]&&r.bids[0].sizes,o=Object(y.parseSizesInput)(i);if(1===o.length){var a=A(o[0].split("x"),2),c=a[0],u=a[1];return t.width=parseInt(c,10),t.height=parseInt(u,10),!0}return!1}(e,t,n))||(Object(y.logError)(r("Banner bids require a width and height")),!1):(Object(y.logError)(r("Video bid does not have required vastUrl or renderer property")),!1):(Object(y.logError)(r("Native bid missing some required properties.")),!1):(Object(y.logError)(r("Bidder ".concat(t.bidderCode," is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))),!1)):(Object(y.logWarn)("Some adapter tried to add an undefined bid for ".concat(e,".")),!1):(Object(y.logWarn)("No adUnitCode was supplied to addBidResponse."),!1);var i}Object(m.a)("checkAdUnitSetup").before(_)},10:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),t.d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,r=e.getHooks({hook:t});0===r.length&&e.before(t,n)},t.c=function(e,t){a("async",(function(e){e.forEach((function(e){return t.apply(void 0,function(e){if(Array.isArray(e))return o(e)}(n=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var n}))}),e)([])},t.e=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];c(e).before((function(e,t){t.push(n),e(t)}))};var r=n(167),i=n.n(r);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=i()({ready:i.a.SYNC|i.a.ASYNC|i.a.QUEUE}),c=a.get},100:function(e,t,n){"use strict";var r=n(14),i=n(57).find,o=n(51),a="find",c=!0;a in[]&&Array(1).find((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},101:function(e,t,n){var r=n(33),i=n(102),o=n(44),a=n(45),c=n(56),u=n(30),s=n(77),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t,!0),s)try{return d(e,t)}catch(e){}if(u(e,t))return o(!i.f.call(e,t),e[t])}},102:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},103:function(e,t,n){var r=n(28),i=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==s||n!=u&&("function"==typeof t?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",s=o.POLYFILL="P";e.exports=o},104:function(e,t,n){var r=n(29),i=n(105),o=n(23)("species");e.exports=function(e,t){var n;return i(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},105:function(e,t,n){var r=n(46);e.exports=Array.isArray||function(e){return"Array"==r(e)}},106:function(e,t,n){var r=n(25),i=n(31);e.exports=function(e,t){try{i(r,e,t)}catch(n){r[e]=t}return t}},107:function(e,t,n){var r,i,o=n(25),a=n(108),c=o.process,u=c&&c.versions,s=u&&u.v8;s?i=(r=s.split("."))[0]<4?1:r[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(i=r[1]),e.exports=i&&+i},108:function(e,t,n){var r=n(27);e.exports=r("navigator","userAgent")||""},109:function(e,t,n){var r=n(80);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},11:function(e,t,n){var r=n(99);e.exports=r},110:function(e,t,n){n(111);var r=n(52);e.exports=r("Array","includes")},111:function(e,t,n){"use strict";var r=n(14),i=n(81).includes,o=n(51);r({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},112:function(e,t,n){var r=n(58),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},113:function(e,t,n){n(114),n(131),n(92),n(133);var r=n(49);e.exports=r.Set},114:function(e,t,n){"use strict";var r=n(115),i=n(120);e.exports=r("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},115:function(e,t,n){"use strict";var r=n(14),i=n(25),o=n(83),a=n(28),c=n(31),u=n(18),s=n(86),d=n(29),f=n(64),l=n(34).f,p=n(57).forEach,g=n(33),b=n(54),v=b.set,y=b.getterFor;e.exports=function(e,t,n){var b,h=-1!==e.indexOf("Map"),m=-1!==e.indexOf("Weak"),S=h?"set":"add",A=i[e],E=A&&A.prototype,O={};if(g&&"function"==typeof A&&(m||E.forEach&&!a((function(){(new A).entries().next()})))){b=t((function(t,n){v(s(t,b,e),{type:e,collection:new A}),null!=n&&u(n,t[S],{that:t,AS_ENTRIES:h})}));var T=y(e);p(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(e){var t="add"==e||"set"==e;!(e in E)||m&&"clear"==e||c(b.prototype,e,(function(n,r){var i=T(this).collection;if(!t&&m&&!d(n))return"get"==e&&void 0;var o=i[e](0===n?0:n,r);return t?this:o}))})),m||l(b.prototype,"size",{configurable:!0,get:function(){return T(this).collection.size}})}else b=n.getConstructor(t,e,h,S),o.REQUIRED=!0;return f(b,e,!1,!0),O[e]=b,r({global:!0,forced:!0},O),m||n.setStrong(b,e,h),b}},116:function(e,t,n){var r=n(28);e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},117:function(e,t,n){"use strict";var r=n(63),i=n(62);e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},118:function(e,t,n){var r=n(25),i=n(119),o=r.WeakMap;e.exports="function"==typeof o&&/native code/.test(i(o))},119:function(e,t,n){var r=n(59),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},12:function(e,t,n){var r=n(110);e.exports=r},120:function(e,t,n){"use strict";var r=n(34).f,i=n(87),o=n(125),a=n(26),c=n(86),u=n(18),s=n(66),d=n(130),f=n(33),l=n(83).fastKey,p=n(54),g=p.set,b=p.getterFor;e.exports={getConstructor:function(e,t,n,s){var d=e((function(e,r){c(e,d,t),g(e,{type:t,index:i(null),first:void 0,last:void 0,size:0}),f||(e.size=0),null!=r&&u(r,e[s],{that:e,AS_ENTRIES:n})})),p=b(t),v=function(e,t,n){var r,i,o=p(e),a=y(e,t);return a?a.value=n:(o.last=a={index:i=l(t,!0),key:t,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=a),r&&(r.next=a),f?o.size++:e.size++,"F"!==i&&(o.index[i]=a)),e},y=function(e,t){var n,r=p(e),i=l(t);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==t)return n};return o(d.prototype,{clear:function(){for(var e=p(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=this,n=p(t),r=y(t,e);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),f?n.size--:t.size--}return!!r},forEach:function(e){for(var t,n=p(this),r=a(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!y(this,e)}}),o(d.prototype,n?{get:function(e){var t=y(this,e);return t&&t.value},set:function(e,t){return v(this,0===e?0:e,t)}}:{add:function(e){return v(this,e=0===e?0:e,e)}}),f&&r(d.prototype,"size",{get:function(){return p(this).size}}),d},setStrong:function(e,t,n){var r=t+" Iterator",i=b(t),o=b(r);s(e,t,(function(e,t){g(this,{type:r,target:e,state:i(e),kind:t,last:void 0})}),(function(){for(var e=o(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),d(t)}}},121:function(e,t,n){var r=n(33),i=n(34),o=n(15),a=n(122);e.exports=r?Object.defineProperties:function(e,t){o(e);for(var n,r=a(t),c=r.length,u=0;c>u;)i.f(e,n=r[u++],t[n]);return e}},122:function(e,t,n){var r=n(123),i=n(88);e.exports=Object.keys||function(e){return r(e,i)}},123:function(e,t,n){var r=n(30),i=n(45),o=n(81).indexOf,a=n(53);e.exports=function(e,t){var n,c=i(e),u=0,s=[];for(n in c)!r(a,n)&&r(c,n)&&s.push(n);for(;t.length>u;)r(c,n=t[u++])&&(~o(s,n)||s.push(n));return s}},124:function(e,t,n){var r=n(27);e.exports=r("document","documentElement")},125:function(e,t,n){var r=n(89);e.exports=function(e,t,n){for(var i in t)n&&n.unsafe&&e[i]?e[i]=t[i]:r(e,i,t[i],n);return e}},126:function(e,t,n){"use strict";var r=n(90).IteratorPrototype,i=n(87),o=n(44),a=n(64),c=n(37),u=function(){return this};e.exports=function(e,t,n){var s=t+" Iterator";return e.prototype=i(r,{next:o(1,n)}),a(e,s,!1,!0),c[s]=u,e}},127:function(e,t,n){var r=n(28);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},128:function(e,t,n){var r=n(15),i=n(129);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,o){return r(n),i(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},129:function(e,t,n){var r=n(29);e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},13:function(e,t,n){"use strict";t.a=u,t.c=function(e){return!(!e||!e.url)},t.b=function(e,t){e.render(t)};var r=n(40),i=n(0),o=n(11),a=n.n(o),c="outstream";function u(e){var t=this,n=e.url,o=e.config,a=e.id,u=e.callback,d=e.loaded,f=e.adUnitCode;this.url=n,this.config=o,this.handlers={},this.id=a,this.loaded=d,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():t.cmd.push(e):i.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=u||function(){t.loaded=!0,t.process()},this.render=function(){var e=this,t=arguments,o=function(){e._render?e._render.apply(e,t):i.logWarn("No render function was provided, please use .setRender on the renderer")};s(f)?(i.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(f)),o()):(this.cmd.unshift(o),Object(r.a)(n,c,this.callback))}.bind(this)}function s(e){var t=pbjs.adUnits,n=a()(t,(function(t){return t.code===e}));if(!n)return!1;var r=i.deepAccess(n,"renderer"),o=!!(r&&r.url&&r.render),c=i.deepAccess(n,"mediaTypes.video.renderer"),u=!!(c&&c.url&&c.render);return!!(o&&!0!==r.backupOnly||u&&!0!==c.backupOnly)}u.install=function(e){return new u({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},u.prototype.getConfig=function(){return this.config},u.prototype.setRender=function(e){this._render=e},u.prototype.setEventHandlers=function(e){this.handlers=e},u.prototype.handleVideoEvent=function(e){var t=e.id,n=e.eventName;"function"==typeof this.handlers[n]&&this.handlers[n](),i.logMessage("Prebid Renderer event for id ".concat(t," type ").concat(n))},u.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){i.logError("Error processing Renderer command: ",e)}}},130:function(e,t,n){"use strict";var r=n(27),i=n(34),o=n(23),a=n(33),c=o("species");e.exports=function(e){var t=r(e),n=i.f;a&&t&&!t[c]&&n(t,c,{configurable:!0,get:function(){return this}})}},131:function(e,t){},132:function(e,t,n){var r=n(58),i=n(47),o=function(e){return function(t,n){var o,a,c=String(i(t)),u=r(n),s=c.length;return u<0||u>=s?e?"":void 0:(o=c.charCodeAt(u))<55296||o>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?e?c.charAt(u):o:e?c.slice(u,u+2):a-56320+(o-55296<<10)+65536}};e.exports={codeAt:o(!1),charAt:o(!0)}},133:function(e,t,n){n(134);var r=n(135),i=n(25),o=n(62),a=n(31),c=n(37),u=n(23)("toStringTag");for(var s in r){var d=i[s],f=d&&d.prototype;f&&o(f)!==u&&a(f,u,s),c[s]=c.Array}},134:function(e,t,n){"use strict";var r=n(45),i=n(51),o=n(37),a=n(54),c=n(66),u="Array Iterator",s=a.set,d=a.getterFor(u);e.exports=c(Array,"Array",(function(e,t){s(this,{type:u,target:r(e),index:0,kind:t})}),(function(){var e=d(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},135:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},136:function(e,t,n){n(14)({target:"Set",stat:!0},{from:n(137)})},137:function(e,t,n){"use strict";var r=n(21),i=n(26),o=n(18);e.exports=function(e){var t,n,a,c,u=arguments.length,s=u>1?arguments[1]:void 0;return r(this),(t=void 0!==s)&&r(s),null==e?new this:(n=[],t?(a=0,c=i(s,u>2?arguments[2]:void 0,2),o(e,(function(e){n.push(c(e,a++))}))):o(e,n.push,{that:n}),new this(n))}},138:function(e,t,n){n(14)({target:"Set",stat:!0},{of:n(139)})},139:function(e,t,n){"use strict";e.exports=function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}},14:function(e,t,n){"use strict";var r=n(25),i=n(101).f,o=n(103),a=n(49),c=n(26),u=n(31),s=n(30),d=function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t};e.exports=function(e,t){var n,f,l,p,g,b,v,y,h=e.target,m=e.global,S=e.stat,A=e.proto,E=m?r:S?r[h]:(r[h]||{}).prototype,O=m?a:a[h]||(a[h]={}),T=O.prototype;for(l in t)n=!o(m?l:h+(S?".":"#")+l,e.forced)&&E&&s(E,l),g=O[l],n&&(b=e.noTargetGet?(y=i(E,l))&&y.value:E[l]),p=n&&b?b:t[l],n&&typeof g==typeof p||(v=e.bind&&n?c(p,r):e.wrap&&n?d(p):A&&"function"==typeof p?c(Function.call,p):p,(e.sham||p&&p.sham||g&&g.sham)&&u(v,"sham",!0),O[l]=v,A&&(s(a,f=h+"Prototype")||u(a,f,{}),a[f][l]=p,e.real&&T&&!T[l]&&u(T,l,p)))}},140:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(141);r({target:"Set",proto:!0,real:!0,forced:i},{addAll:function(){return o.apply(this,arguments)}})},141:function(e,t,n){"use strict";var r=n(15),i=n(21);e.exports=function(){for(var e=r(this),t=i(e.add),n=0,o=arguments.length;n<o;n++)t.call(e,arguments[n]);return e}},142:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(143);r({target:"Set",proto:!0,real:!0,forced:i},{deleteAll:function(){return o.apply(this,arguments)}})},143:function(e,t,n){"use strict";var r=n(15),i=n(21);e.exports=function(){for(var e,t=r(this),n=i(t.delete),o=!0,a=0,c=arguments.length;a<c;a++)e=n.call(t,arguments[a]),o=o&&e;return!!o}},144:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(26),c=n(35),u=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{every:function(e){var t=o(this),n=c(t),r=a(e,arguments.length>1?arguments[1]:void 0,3);return!u(n,(function(e,n){if(!r(e,e,t))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},145:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(38),s=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{difference:function(e){var t=a(this),n=new(u(t,o("Set")))(t),r=c(n.delete);return s(e,(function(e){r.call(n,e)})),n}})},146:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(26),s=n(38),d=n(35),f=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{filter:function(e){var t=a(this),n=d(t),r=u(e,arguments.length>1?arguments[1]:void 0,3),i=new(s(t,o("Set"))),l=c(i.add);return f(n,(function(e){r(e,e,t)&&l.call(i,e)}),{IS_ITERATOR:!0}),i}})},147:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(26),c=n(35),u=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{find:function(e){var t=o(this),n=c(t),r=a(e,arguments.length>1?arguments[1]:void 0,3);return u(n,(function(e,n){if(r(e,e,t))return n(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},148:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(38),s=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{intersection:function(e){var t=a(this),n=new(u(t,o("Set"))),r=c(t.has),i=c(n.add);return s(e,(function(e){r.call(t,e)&&i.call(n,e)})),n}})},149:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(21),c=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{isDisjointFrom:function(e){var t=o(this),n=a(t.has);return!c(e,(function(e,r){if(!0===n.call(t,e))return r()}),{INTERRUPTED:!0}).stopped}})},15:function(e,t,n){var r=n(29);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},150:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(93),s=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{isSubsetOf:function(e){var t=u(this),n=a(e),r=n.has;return"function"!=typeof r&&(n=new(o("Set"))(e),r=c(n.has)),!s(t,(function(e,t){if(!1===r.call(n,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},151:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(21),c=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{isSupersetOf:function(e){var t=o(this),n=a(t.has);return!c(e,(function(e,r){if(!1===n.call(t,e))return r()}),{INTERRUPTED:!0}).stopped}})},152:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(35),c=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{join:function(e){var t=o(this),n=a(t),r=void 0===e?",":String(e),i=[];return c(n,i.push,{that:i,IS_ITERATOR:!0}),i.join(r)}})},153:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(26),s=n(38),d=n(35),f=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{map:function(e){var t=a(this),n=d(t),r=u(e,arguments.length>1?arguments[1]:void 0,3),i=new(s(t,o("Set"))),l=c(i.add);return f(n,(function(e){l.call(i,r(e,e,t))}),{IS_ITERATOR:!0}),i}})},154:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(21),c=n(35),u=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{reduce:function(e){var t=o(this),n=c(t),r=arguments.length<2,i=r?void 0:arguments[1];if(a(e),u(n,(function(n){r?(r=!1,i=n):i=e(i,n,n,t)}),{IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty set with no initial value");return i}})},155:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(15),a=n(26),c=n(35),u=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{some:function(e){var t=o(this),n=c(t),r=a(e,arguments.length>1?arguments[1]:void 0,3);return u(n,(function(e,n){if(r(e,e,t))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},156:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(38),s=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{symmetricDifference:function(e){var t=a(this),n=new(u(t,o("Set")))(t),r=c(n.delete),i=c(n.add);return s(e,(function(e){r.call(n,e)||i.call(n,e)})),n}})},157:function(e,t,n){"use strict";var r=n(14),i=n(17),o=n(27),a=n(15),c=n(21),u=n(38),s=n(18);r({target:"Set",proto:!0,real:!0,forced:i},{union:function(e){var t=a(this),n=new(u(t,o("Set")))(t);return s(e,c(n.add),{that:n}),n}})},158:function(e,t,n){n(92),n(159);var r=n(49);e.exports=r.Array.from},159:function(e,t,n){var r=n(14),i=n(160);r({target:"Array",stat:!0,forced:!n(163)((function(e){Array.from(e)}))},{from:i})},16:function(e,t,n){"use strict";t.a=function(){return window.pbjs},window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[],window._pbjsGlobals=window._pbjsGlobals||[],window._pbjsGlobals.push("pbjs")},160:function(e,t,n){"use strict";var r=n(26),i=n(48),o=n(161),a=n(84),c=n(50),u=n(162),s=n(61);e.exports=function(e){var t,n,d,f,l,p,g=i(e),b="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,h=void 0!==y,m=s(g),S=0;if(h&&(y=r(y,v>2?arguments[2]:void 0,2)),null==m||b==Array&&a(m))for(n=new b(t=c(g.length));t>S;S++)p=h?y(g[S],S):g[S],u(n,S,p);else for(l=(f=m.call(g)).next,n=new b;!(d=l.call(f)).done;S++)p=h?o(f,y,[d.value,S],!0):d.value,u(n,S,p);return n.length=S,n}},161:function(e,t,n){var r=n(15),i=n(85);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){throw i(e),t}}},162:function(e,t,n){"use strict";var r=n(56),i=n(34),o=n(44);e.exports=function(e,t,n){var a=r(t);a in e?i.f(e,a,o(0,n)):e[a]=n}},163:function(e,t,n){var r=n(23)("iterator"),i=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){i=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var o={};o[r]=function(){return{next:function(){return{done:n=!0}}}},e(o)}catch(e){}return n}},164:function(e,t){e.exports=function e(t){var n=Array.isArray(t)?[]:{};for(var r in t){var i=t[r];n[r]=i&&"object"==typeof i?e(i):i}return n}},165:function(e,t,n){"use strict";t.a=function(e,t,n,r,i){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:i;return e===i?n:e}},166:function(e,t,n){"use strict";t.a=function(e,t,n){t.split&&(t=t.split("."));for(var r,i=0,o=t.length,a=e;i<o;++i)r=a[t[i]],a=a[t[i]]=i===o-1?n:null!=r?r:!~t[i+1].indexOf(".")&&+t[i+1]>-1?[]:{}}},167:function(e,t){ c.SYNC=1,c.ASYNC=2,c.QUEUE=4;var n=Object.freeze({useProxy:!0,ready:0}),r=new WeakMap,i="2,1,0"===[1].reduce((function(e,t,n){return[e,t,n]}),2).toString()?Array.prototype.reduce:function(e,t){var n,r=Object(this),i=r.length>>>0,o=0;if(t)n=t;else{for(;o<i&&!(o in r);)o++;n=r[o++]}for(;o<i;)o in r&&(n=e(n,r[o],o,r)),o++;return n};function o(e,t){return Array.prototype.slice.call(e,t)}var a=Object.assign||function(e){return i.call(o(arguments,1),(function(e,t){return t&&Object.keys(t).forEach((function(n){e[n]=t[n]})),e}),e)};function c(e){var t,u={},s=[];function d(e,t){return"function"==typeof e?g.call(null,"sync",e,t):"string"==typeof e&&"function"==typeof t?g.apply(null,arguments):"object"==typeof e?f.apply(null,arguments):void 0}function f(e,t,n){var r=!0;void 0===t&&(t=Object.getOwnPropertyNames(e),r=!1);var i={},o=["constructor"];do{(t=t.filter((function(t){return!("function"!=typeof e[t]||-1!==o.indexOf(t)||t.match(/^_/))}))).forEach((function(t){var r=t.split(":"),o=r[0],a=r[1]||"sync";if(!i[o]){var c=e[o];i[o]=e[o]=g(a,c,n?[n,o]:void 0)}})),e=Object.getPrototypeOf(e)}while(r&&e);return i}function l(e){var n=Array.isArray(e)?e:e.split(".");return i.call(n,(function(r,i,o){var a=r[i],c=!1;return a||(o===n.length-1?(t||s.push((function(){c||console.warn("fun-hooks: referenced '"+e+"' but it was never created")})),r[i]=p((function(e){r[i]=e,c=!0}))):r[i]={})}),u)}function p(e){var t=[],n=[],i=function(){},o={before:function(e,n){return u.call(this,t,"before",e,n)},after:function(e,t){return u.call(this,n,"after",e,t)},getHooks:function(e){var r=t.concat(n);"object"==typeof e&&(r=r.filter((function(t){return Object.keys(e).every((function(n){return t[n]===e[n]}))})));try{a(r,{remove:function(){return r.forEach((function(e){e.remove()})),this}})}catch(e){console.error("error adding `remove` to array, did you modify Array.prototype?")}return r},removeAll:function(){return this.getHooks().remove()}},c={install:function(r,o,a){this.type=r,i=a,a(t,n),e&&e(o)}};return r.set(o.after,c),o;function u(e,r,o,a){var c={hook:o,type:r,priority:a||10,remove:function(){var r=e.indexOf(c);-1!==r&&(e.splice(r,1),i(t,n))}};return e.push(c),e.sort((function(e,t){return t.priority-e.priority})),i(t,n),this}}function g(n,i,u){var d=i.after&&r.get(i.after);if(d){if(d.type!==n)throw"fun-hooks: recreated hookable with different type";return i}var f,g,b=u?l(u):p(),v={get:function(e,t){return b[t]||Reflect.get.apply(Reflect,arguments)}};return t||s.push(y),e.useProxy&&"function"==typeof Proxy&&Proxy.revocable?g=new Proxy(i,v):a(g=function(){return v.apply?v.apply(i,this,o(arguments)):i.apply(this,arguments)},b),r.get(g.after).install(n,g,(function(e,t){var r,i=[];e.length||t.length?(e.forEach(a),r=i.push(void 0)-1,t.forEach(a),f=function(e,t,a){var c,u=0,s="async"===n&&"function"==typeof a[a.length-1]&&a.pop();function d(e){"sync"===n?c=e:s&&s.apply(null,arguments)}function f(e){if(i[u]){var r=o(arguments);return f.bail=d,r.unshift(f),i[u++].apply(t,r)}"sync"===n?c=e:s&&s.apply(null,arguments)}return i[r]=function(){var r=o(arguments,1);"async"===n&&s&&(delete f.bail,r.push(f));var i=e.apply(t,r);"sync"===n&&f(i)},f.apply(null,a),c}):f=void 0;function a(e){i.push(e.hook)}y()})),g;function y(){!t&&("sync"!==n||e.ready&c.SYNC)&&("async"!==n||e.ready&c.ASYNC)?"sync"!==n&&e.ready&c.QUEUE?v.apply=function(){var e=arguments;s.push((function(){g.apply(e[1],e[2])}))}:v.apply=function(){throw"fun-hooks: hooked function not ready"}:v.apply=f}}return(e=a({},n,e)).ready?d.ready=function(){t=!0,function(e){for(var t;t=e.shift();)t()}(s)}:t=!0,d.get=l,d}e.exports=c},17:function(e,t){e.exports=!0},18:function(e,t,n){var r=n(15),i=n(84),o=n(50),a=n(26),c=n(61),u=n(85),s=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var d,f,l,p,g,b,v,y=n&&n.that,h=!(!n||!n.AS_ENTRIES),m=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),A=a(t,y,1+h+S),E=function(e){return d&&u(d),new s(!0,e)},O=function(e){return h?(r(e),S?A(e[0],e[1],E):A(e[0],e[1])):S?A(e,E):A(e)};if(m)d=e;else{if("function"!=typeof(f=c(e)))throw TypeError("Target is not iterable");if(i(f)){for(l=0,p=o(e.length);p>l;l++)if((g=O(e[l]))&&g instanceof s)return g;return new s(!1)}d=f.call(e)}for(b=d.next;!(v=b.call(d)).done;){try{g=O(v.value)}catch(e){throw u(d),e}if("object"==typeof g&&g&&g instanceof s)return g}return new s(!1)}},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(3),i=n(0);var o=function(e){function t(e){var t=r.b.getConfig("pageUrl");if(t)return t;try{var n=e.querySelector("link[rel='canonical']");if(null!==n)return n.href}catch(e){}return null}return function(){var n,o,a,c=[],u=function(e){try{if(!e.location.ancestorOrigins)return;return e.location.ancestorOrigins}catch(e){}}(e),s=r.b.getConfig("maxNestedIframes"),d=!1,f=0,l=!1,p=!1;do{var g=n,b=p,v=void 0,y=!1,h=null;p=!1,n=n?n.parent:e;try{v=n.location.href||null}catch(e){y=!0}if(y)if(b){var m=g.context;try{o=h=m.sourceUrl,l=!0,n===e.top&&(d=!0),m.canonicalUrl&&(a=m.canonicalUrl)}catch(e){}}else{Object(i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");try{var S=g.document.referrer;S&&(h=S,n===e.top&&(d=!0))}catch(e){}!h&&u&&u[f-1]&&(h=u[f-1]),h&&!l&&(o=h)}else{if(v&&(o=h=v,l=!1,n===e.top)){d=!0;var A=t(n.document);A&&(a=A)}n.context&&n.context.sourceUrl&&(p=!0)}c.push(h),f++}while(n!==e.top&&f<s);return c.reverse(),{referer:o||null,reachedTop:d,isAmp:l,numIframes:f-1,stack:c,canonicalUrl:a||null}}}(window)},2:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r="native",i="video",o="banner",a="adpod"},21:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},210:function(e,t,n){n(211);var r=n(52);e.exports=r("Array","findIndex")},211:function(e,t,n){"use strict";var r=n(14),i=n(57).findIndex,o=n(51),a="findIndex",c=!0;a in[]&&Array(1).findIndex((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},216:function(e,t,n){"use strict";t.a=function(){window.addEventListener("message",h,!1)};var r=n(9),i=n.n(r),o=n(36),a=n(5),c=n.n(a),u=n(0),s=n(24),d=n(11),f=n.n(d),l=n(13),p=n(12),g=n.n(p),b=n(3),v=c.a.EVENTS.BID_WON,y=c.a.EVENTS.STALE_RENDER;function h(e){var t=e.message?"message":"data",n={};try{n=JSON.parse(e[t])}catch(e){return}if(n&&n.adId){var r=f()(s.a.getBidsReceived(),(function(e){return e.adId===n.adId}));if(r&&"Prebid Request"===n.message){if(r.status===c.a.BID_STATUS.RENDERED&&(Object(u.logWarn)("Ad id ".concat(r.adId," has been rendered before")),i.a.emit(y,r),Object(u.deepAccess)(b.b.getConfig("auctionOptions"),"suppressStaleRender")))return;!function(e,t){var n=e.adId,r=e.ad,i=e.adUrl,o=e.width,a=e.height,c=e.renderer,s=e.cpm;Object(l.c)(c)?Object(l.b)(c,e):n&&(m(e),t.source.postMessage(JSON.stringify({message:"Prebid Response",ad:Object(u.replaceAuctionPrice)(r,s),adUrl:Object(u.replaceAuctionPrice)(i,s),adId:n,width:o,height:a}),t.origin))}(r,e),s.a.addWinningBid(r),i.a.emit(v,r)}if(r&&"Prebid Native"===n.message){if("assetRequest"===n.action){var a=Object(o.d)(n,r);return void e.source.postMessage(JSON.stringify(a),e.origin)}if("allAssetRequest"===n.action){var d=Object(o.c)(n,r);e.source.postMessage(JSON.stringify(d),e.origin)}else"resizeNativeHeight"===n.action&&(r.height=n.height,r.width=n.width,m(r));if("click"===Object(o.b)(n,r))return;s.a.addWinningBid(r),i.a.emit(v,r)}}}function m(e){var t=e.adId,n=e.adUnitCode,r=e.width,i=e.height;["div","iframe"].forEach((function(e){var o=function(e){var r=function(e,t){return Object(u.isGptPubadsDefined)()?function(e){return f()(window.googletag.pubads().getSlots(),(function(t){return f()(t.getTargetingKeys(),(function(n){return g()(t.getTargeting(n),e)}))})).getSlotElementId()}(e):Object(u.isApnGetTagDefined)()?function(e){var t=window.apntag.getTag(e);return t&&t.targetId}(t):t}(t,n),i=document.getElementById(r);return i&&i.querySelector(e)}(e+':not([style*="display: none"])');if(o){var a=o.style;a.width=r+"px",a.height=i+"px"}else Object(u.logWarn)("Unable to locate matching page element for adUnitCode ".concat(n,".  Can't resize it to ad's dimensions.  Please review setup."))}))}},217:function(e,t,n){"use strict";t.a=function(e){var t;try{e=e||window.sessionStorage,t=JSON.parse(e.getItem(u))}catch(e){}t&&p(t,!0)};var r,i,o=n(3),a=n(0),c=n(32),u="pbjs:debugging";function s(e){Object(a.logMessage)("DEBUG: "+e)}function d(e){Object(a.logWarn)("DEBUG: "+e)}function f(e){r=y.bind(e),c.c.before(r,5),i=h.bind(e),c.e.before(i,5)}function l(){c.c.getHooks({hook:r}).remove(),c.e.getHooks({hook:i}).remove()}function p(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o.b.setConfig({debug:!0}),l(),f(e),s("bidder overrides enabled".concat(t?" from session":""))}function g(e,t,n){return!(!e.bidder||e.bidder===t)||!(!e.adUnitCode||e.adUnitCode===n)}function b(e,t){return Array.isArray(e)&&-1===e.indexOf(t)}function v(e,t,n){return Object.keys(e).filter((function(e){return-1===["adUnitCode","bidder"].indexOf(e)})).reduce((function(t,r){return s("bidder overrides changed '".concat(t.adUnitCode,"/").concat(t.bidderCode,"' ").concat(n,".").concat(r," from '").concat(t[r],".js' to '").concat(e[r],"'")),t[r]=e[r],t}),t)}function y(e,t,n){var r=this;b(r.bidders,n.bidderCode)?d("bidder '".concat(n.bidderCode,"' excluded from auction by bidder overrides")):(Array.isArray(r.bids)&&r.bids.forEach((function(e){g(e,n.bidderCode,t)||v(e,n,"bidder")})),e(t,n))}function h(e,t){var n=this,r=t.filter((function(e){return!b(n.bidders,e.bidderCode)||(d("bidRequest '".concat(e.bidderCode,"' excluded from auction by bidder overrides")),!1)}));Array.isArray(n.bidRequests)&&r.forEach((function(e){n.bidRequests.forEach((function(t){e.bids.forEach((function(n){g(t,e.bidderCode,n.adUnitCode)||v(t,n,"bidRequest")}))}))})),e(r)}function m(e){if(e.enabled){try{window.sessionStorage.setItem(u,JSON.stringify(e))}catch(e){}p(e)}else{l(),s("bidder overrides disabled");try{window.sessionStorage.removeItem(u)}catch(e){}}}o.b.getConfig("debugging",(function(e){return m(e.debugging)}))},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),t.d=function(e,t){var n=Object(r.getBidRequest)(e.requestId,t),i=n&&Object(r.deepAccess)(n,"mediaTypes.video"),o=i&&Object(r.deepAccess)(i,"context");return s(e,n,i,o)},n.d(t,"c",(function(){return s}));n(8);var r=n(0),i=n(3),o=n(12),a=(n.n(o),n(10)),c="outstream",u="instream";var s=Object(a.b)("sync",(function(e,t,n,o){return!t||n&&o!==c?i.b.getConfig("cache.url")||!e.vastXml||e.vastUrl?!(!e.vastUrl&&!e.vastXml):(Object(r.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),!1):o!==c||!!(e.renderer||t.renderer||n.renderer)}),"checkVideoBidSetup")},23:function(e,t,n){var r=n(25),i=n(79),o=n(30),a=n(60),c=n(80),u=n(109),s=i("wks"),d=r.Symbol,f=u?d:d&&d.withoutSetter||a;e.exports=function(e){return o(s,e)&&(c||"string"==typeof s[e])||(c&&o(d,e)?s[e]=d[e]:s[e]=f("Symbol."+e)),s[e]}},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),i=n(32),o=n(11),a=n.n(o),c=n(5);var u=function(){var e=[],t={};return t.addWinningBid=function(t){var n=a()(e,(function(e){return e.getAuctionId()===t.auctionId}));n?(t.status=c.BID_STATUS.RENDERED,n.addWinningBid(t)):Object(r.logWarn)("Auction not found when adding winning bid")},t.getAllWinningBids=function(){return e.map((function(e){return e.getWinningBids()})).reduce(r.flatten,[])},t.getBidsRequested=function(){return e.map((function(e){return e.getBidRequests()})).reduce(r.flatten,[])},t.getNoBids=function(){return e.map((function(e){return e.getNoBids()})).reduce(r.flatten,[])},t.getBidsReceived=function(){return e.map((function(e){if(e.getAuctionStatus()===i.a)return e.getBidsReceived()})).reduce(r.flatten,[]).filter((function(e){return e}))},t.getAllBidsForAdUnitCode=function(t){return e.map((function(e){return e.getBidsReceived()})).reduce(r.flatten,[]).filter((function(e){return e&&e.adUnitCode===t}))},t.getAdUnits=function(){return e.map((function(e){return e.getAdUnits()})).reduce(r.flatten,[])},t.getAdUnitCodes=function(){return e.map((function(e){return e.getAdUnitCodes()})).reduce(r.flatten,[]).filter(r.uniques)},t.createAuction=function(t){var n=t.adUnits,r=t.adUnitCodes,o=t.callback,a=t.cbTimeout,c=t.labels,u=t.auctionId,s=Object(i.k)({adUnits:n,adUnitCodes:r,callback:o,cbTimeout:a,labels:c,auctionId:u});return function(t){e.push(t)}(s),s},t.findBidByAdId=function(t){return a()(e.map((function(e){return e.getBidsReceived()})).reduce(r.flatten,[]),(function(e){return e.adId===t}))},t.getStandardBidderAdServerTargeting=function(){return Object(i.j)()[c.JSON_MAPPING.ADSERVER_TARGETING]},t.setStatusForBids=function(n,r){var i=t.findBidByAdId(n);if(i&&(i.status=r),i&&r===c.BID_STATUS.BID_TARGETING_SET){var o=a()(e,(function(e){return e.getAuctionId()===i.auctionId}));o&&o.setBidTargeting(i)}},t.getLastAuctionId=function(){return e.length&&e[e.length-1].getAuctionId()},t.clearAllAuctions=function(){e.length=0},t}()},25:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(t,n(42))},26:function(e,t,n){var r=n(21);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},27:function(e,t,n){var r=n(49),i=n(25),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(i[e]):r[e]&&r[e][t]||i[e]&&i[e][t]}},28:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},29:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return I}));var r=n(43),i=n(11),o=n.n(i),a=n(12),c=n.n(a),u=n(82),s=n.n(u),d=n(0),f=["fpd"];function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=n(94),y=n(0),h=n(5),m="TRUE"===y.getParameterByName(h.DEBUG_MODE).toUpperCase(),S=window.location.origin,A="random",E={};E[A]=!0,E.fixed=!0;var O=A,T={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"};var I=function(){var e,t,n,i=[],a=null;function u(){e={};var i={_debug:m,get debug(){return this._debug},set debug(e){this._debug=e},_bidderTimeout:3e3,get bidderTimeout(){return this._bidderTimeout},set bidderTimeout(e){this._bidderTimeout=e},_publisherDomain:S,get publisherDomain(){return this._publisherDomain},set publisherDomain(e){this._publisherDomain=e},_priceGranularity:T.MEDIUM,set priceGranularity(e){c(e)&&("string"==typeof e?this._priceGranularity=a(e)?e:T.MEDIUM:y.isPlainObject(e)&&(this._customPriceBucket=e,this._priceGranularity=T.CUSTOM,y.logMessage("Using custom price granularity")))},get priceGranularity(){return this._priceGranularity},_customPriceBucket:{},get customPriceBucket(){return this._customPriceBucket},_mediaTypePriceGranularity:{},get mediaTypePriceGranularity(){return this._mediaTypePriceGranularity},set mediaTypePriceGranularity(e){var t=this;this._mediaTypePriceGranularity=Object.keys(e).reduce((function(n,r){return c(e[r])?"string"==typeof e?n[r]=a(e[r])?e[r]:t._priceGranularity:y.isPlainObject(e)&&(n[r]=e[r],y.logMessage("Using custom price granularity for ".concat(r))):y.logWarn("Invalid price granularity for media type: ".concat(r)),n}),{})},_sendAllBids:true,get enableSendAllBids(){return this._sendAllBids},set enableSendAllBids(e){this._sendAllBids=e},_useBidCache:false,get useBidCache(){return this._useBidCache},set useBidCache(e){this._useBidCache=e},_deviceAccess:true,get deviceAccess(){return this._deviceAccess},set deviceAccess(e){this._deviceAccess=e},_bidderSequence:O,get bidderSequence(){return this._bidderSequence},set bidderSequence(e){E[e]?this._bidderSequence=e:y.logWarn("Invalid order: ".concat(e,". Bidder Sequence was not set."))},_timeoutBuffer:400,get timeoutBuffer(){return this._timeoutBuffer},set timeoutBuffer(e){this._timeoutBuffer=e},_disableAjaxTimeout:false,get disableAjaxTimeout(){return this._disableAjaxTimeout},set disableAjaxTimeout(e){this._disableAjaxTimeout=e},_maxNestedIframes:10,get maxNestedIframes(){return this._maxNestedIframes},set maxNestedIframes(e){this._maxNestedIframes=e},_auctionOptions:{},get auctionOptions(){return this._auctionOptions},set auctionOptions(e){(function(e){if(!y.isPlainObject(e))return y.logWarn("Auction Options must be an object"),!1;for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];if("secondaryBidders"!==r&&"suppressStaleRender"!==r)return y.logWarn("Auction Options given an incorrect param: ".concat(r)),!1;if("secondaryBidders"===r){if(!y.isArray(e[r]))return y.logWarn("Auction Options ".concat(r," must be of type Array")),!1;if(!e[r].every(y.isStr))return y.logWarn("Auction Options ".concat(r," must be only string")),!1}else if("suppressStaleRender"===r&&!y.isBoolean(e[r]))return y.logWarn("Auction Options ".concat(r," must be of type boolean")),!1}return!0})(e)&&(this._auctionOptions=e)}};function a(e){return o()(Object.keys(T),(function(t){return e===T[t]}))}function c(e){if(!e)return y.logError("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof e)a(e)||y.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if(y.isPlainObject(e)&&!Object(r.b)(e))return y.logError("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0}t&&j(Object.keys(t).reduce((function(e,n){return t[n]!==i[n]&&(e[n]=i[n]||{}),e}),{})),t=i,n={}}function h(){if(a&&n&&y.isPlainObject(n[a])){var e=n[a],r=new s.a(Object.keys(t).concat(Object.keys(e)));return v(r).reduce((function(n,r){return void 0===e[r]?n[r]=t[r]:void 0===t[r]?n[r]=e[r]:y.isPlainObject(e[r])?n[r]=Object(d.mergeDeep)({},t[r],e[r]):n[r]=e[r],n}),{})}return b({},t)}function A(e){var t={};return Object.keys(e).forEach((function(n){var r="context"===n?"site":n;t[r]="site"===r||"user"===r?Object.keys(e[n]).reduce((function(t,r){return"data"===r?y.mergeDeep(t,{ext:{data:e[n][r]}}):y.mergeDeep(t,p({},r,e[n][r])),t}),{}):e[n]})),t}function I(e){var t={};return Object.keys(e).filter((function(e){return"context"===e})).forEach((function(n){Object.keys(e[n]).forEach((function(r){"data"===r?y.mergeDeep(t,{ext:{data:e[n][r]}}):"object"!==g(e[n][r])||Array.isArray(e[n][r])?y.mergeDeep(t,{ext:{data:p({},r.toLowerCase(),e[n][r])}}):Object.keys(e[n][r]).forEach((function(i){y.mergeDeep(t,{ext:{data:p({},r.toLowerCase(),p({},i.toLowerCase(),e[n][r][i]))}})}))}))})),t}function C(e,t){var n=t;if("string"!=typeof e&&(n=e,e="*"),"function"==typeof n){var r={topic:e,callback:n};return i.push(r),function(){i.splice(i.indexOf(r),1)}}y.logError("listener must be a function")}function j(e){var t=Object.keys(e);i.filter((function(e){return c()(t,e.topic)})).forEach((function(t){t.callback(p({},t.topic,e[t.topic]))})),i.filter((function(e){return"*"===e.topic})).forEach((function(t){return t.callback(e)}))}function w(e,t){a=e;try{return t()}finally{_()}}function _(){a=null}return u(),{getCurrentBidder:function(){return a},resetBidder:_,getConfig:function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var e=arguments.length<=0?void 0:arguments[0];return e?y.deepAccess(h(),e):h()}return C.apply(void 0,arguments)},setConfig:function(n){if(y.isPlainObject(n)){var r=Object.keys(n),i={};r.forEach((function(r){var o="fpd"===r?"ortb2":r,a="fpd"===r?A(n[r]):n[r];y.isPlainObject(e[o])&&y.isPlainObject(a)&&(a=b({},e[o],a)),i[o]=t[o]=a})),j(i)}else y.logError("setConfig options must be an object")},setDefaults:function(n){y.isPlainObject(e)?(b(e,n),b(t,n)):y.logError("defaults must be an object")},resetConfig:u,runWithBidder:w,callbackWithBidder:function(e){return function(t){return function(){if("function"==typeof t){for(var n,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return w(e,(n=y.bind).call.apply(n,[t,this].concat(i)))}y.logWarn("config.callbackWithBidder callback is not a function")}}},setBidderConfig:function(e){try{!function(e){if(!y.isPlainObject(e))throw"setBidderConfig bidder options must be an object";if(!Array.isArray(e.bidders)||!e.bidders.length)throw"setBidderConfig bidder options must contain a bidders list with at least 1 bidder";if(!y.isPlainObject(e.config))throw"setBidderConfig bidder options must contain a config object"}(e),e.bidders.forEach((function(t){n[t]||(n[t]={}),Object.keys(e.config).forEach((function(r){var i="fpd"===r?"ortb2":r,o="fpd"===r?A(e.config[r]):e.config[r];y.isPlainObject(o)?n[t][i]=b({},n[t][i]||{},o):n[t][i]=o}))}))}catch(e){y.logError(e)}},getBidderConfig:function(){return n},convertAdUnitFpd:function(e){var t=[];return e.forEach((function(e){e.fpd?(e.ortb2Imp?y.mergeDeep(e.ortb2Imp,I(e.fpd)):e.ortb2Imp=I(e.fpd),t.push(function(e){e.fpd;return l(e,f)}(e))):t.push(e)})),t},getLegacyFpd:function(e){if("object"===g(e)){var t={};return Object.keys(e).forEach((function(n){var r="site"===n?"context":n;t[r]="context"===r||"user"===r?Object.keys(e[n]).filter((function(e){return"data"!==e})).reduce((function(t,r){return"ext"===r?y.mergeDeep(t,e[n][r]):y.mergeDeep(t,p({},r,e[n][r])),t}),{}):e[n]})),t}},getLegacyImpFpd:function(e){if("object"===g(e)){var t={};return y.deepAccess(e,"ext.data")&&Object.keys(e.ext.data).forEach((function(n){"pbadslot"===n?y.mergeDeep(t,{context:{pbAdSlot:e.ext.data[n]}}):"adserver"===n?y.mergeDeep(t,{context:{adServer:e.ext.data[n]}}):y.mergeDeep(t,{context:{data:p({},n,e.ext.data[n])}})})),t}}}}()},30:function(e,t,n){var r=n(48),i={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return i.call(r(e),t)}},31:function(e,t,n){var r=n(33),i=n(34),o=n(44);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return T})),n.d(t,"a",(function(){return I})),t.k=function(e){var t,n,o,a,s=e.adUnits,d=e.adUnitCodes,f=e.callback,p=e.cbTimeout,v=e.labels,B=e.auctionId,k=s,P=v,M=d,q=[],W=[],L=[],F=B||S.generateUUID(),z=f,V=p,H=[],K=new Set;function J(){return{auctionId:F,timestamp:t,auctionEnd:n,auctionStatus:o,adUnits:k,adUnitCodes:M,labels:P,bidderRequests:q,noBids:L,bidsReceived:W,winningBids:H,timeout:V}}function Y(e,t){if(t&&clearTimeout(a),void 0===n){var i=[];e&&(S.logMessage("Auction ".concat(F," timedOut")),c=K,(i=q.map((function(e){return(e.bids||[]).filter((function(e){return!c.has(e.bidder)}))})).reduce(r.flatten,[]).map((function(e){return{bidId:e.bidId,bidder:e.bidder,adUnitCode:e.adUnitCode,auctionId:e.auctionId}}))).length&&E.emit(O.EVENTS.BID_TIMEOUT,i)),o=I,n=Date.now(),E.emit(O.EVENTS.AUCTION_END,J()),U(k,(function(){try{if(null!=z){var t=M,n=W.filter(S.bind.call(r.adUnitsFilter,this,t)).reduce(G,{});z.apply(pbjs,[n,e,F]),z=null}}catch(e){S.logError("Error executing bidsBackHandler",null,e)}finally{i.length&&A.callTimedOutBidders(s,i,V);var o=u.b.getConfig("userSync")||{};o.enableOverride||m(o.syncDelay)}}))}var c}function Q(){u.b.resetBidder(),S.logInfo("Bids Received for Auction with id: ".concat(F),W),o=I,Y(!1,!0)}function $(e){K.add(e)}function X(e){var t=this;e.forEach((function(e){var t;t=e,q=q.concat(t)}));var n={},s={bidRequests:e,run:function(){var s,p;s=Y.bind(null,!0),p=setTimeout(s,V),a=p,o=T,E.emit(O.EVENTS.AUCTION_INIT,J());var v=function(e,t){var n=0,o=!1,a=new Set,s={};function d(){n--,o&&0===n&&e()}function f(e,o){var a=this;s[o.requestId]=!0,n++;var f=function(e){var t=e.adUnitCode,n=e.bid,o=e.bidderRequest,a=e.auctionId,s=o.start,d=h({},n,{auctionId:a,responseTimestamp:Object(r.timestamp)(),requestTimestamp:s,cpm:parseFloat(n.cpm)||0,bidder:n.bidderCode,adUnitCode:t});d.timeToRespond=d.responseTimestamp-d.requestTimestamp,E.emit(O.EVENTS.BID_ADJUSTMENT,d);var f=o.bids&&l()(o.bids,(function(e){return e.adUnitCode==t&&e.bidId==d.requestId})),p=f&&f.renderer,g=d.mediaType,b=f&&f.mediaTypes&&f.mediaTypes[g],v=b&&b.renderer,m=null;v&&v.url&&v.render&&(!0!==v.backupOnly||!n.renderer)?m=v:p&&p.url&&p.render&&(!0!==p.backupOnly||!n.renderer)&&(m=p);m&&(d.renderer=c.a.install({url:m.url}),d.renderer.setRender(m.render));var S=N(n.mediaType,f,u.b.getConfig("mediaTypePriceGranularity")),A=Object(i.a)(d.cpm,"object"===y(S)?S:u.b.getConfig("customPriceBucket"),u.b.getConfig("currency.granularityMultiplier"));return d.pbLg=A.low,d.pbMg=A.med,d.pbHg=A.high,d.pbAg=A.auto,d.pbDg=A.dense,d.pbCg=A.custom,d}({adUnitCode:e,bid:o,bidderRequest:a,auctionId:t.getAuctionId()});"video"===f.mediaType?function(e,t,n,i){var o=!0,a=Object(r.getBidRequest)(t.originalRequestId||t.requestId,[n]),c=a&&Object(r.deepAccess)(a,"mediaTypes.video"),s=c&&Object(r.deepAccess)(c,"context");u.b.getConfig("cache.url")&&s!==b.b&&(!t.videoCacheKey||u.b.getConfig("cache.ignoreBidderCacheKey")?(o=!1,D(e,t,i,a)):t.vastUrl||(S.logError("videoCacheKey specified but not required vastUrl for video bid"),o=!1));o&&(x(e,t),i())}(t,f,a,d):(x(t,f),d())}function p(){var r=this,i=t.getBidRequests(),c=u.b.getConfig("auctionOptions");if(a.add(r),c&&!S.isEmpty(c)){var d=c.secondaryBidders;d&&!i.every((function(e){return g()(d,e.bidderCode)}))&&(i=i.filter((function(e){return!g()(d,e.bidderCode)})))}o=i.every((function(e){return a.has(e)})),r.bids.forEach((function(e){s[e.bidId]||(t.addNoBid(e),E.emit(O.EVENTS.NO_BID,e))})),o&&0===n&&e()}return{addBidResponse:f,adapterDone:p}}(Q,t);A.callBids(k,e,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];_.apply({dispatch:v.addBidResponse,bidderRequest:this},t)}),v.adapterDone,{request:function(e,t){f(C,t),f(n,e),j[e]||(j[e]={SRA:!0,origin:t}),n[e]>1&&(j[e].SRA=!1)},done:function(e){C[e]--,w[0]&&d(w[0])&&w.shift()}},V,$)}};function d(e){var t=!0,n=u.b.getConfig("maxRequestsPerOrigin")||4;return e.bidRequests.some((function(e){var r=1,i=void 0!==e.src&&e.src===O.S2S.SRC?"s2s":e.bidderCode;return j[i]&&(!1===j[i].SRA&&(r=Math.min(e.bids.length,n)),C[j[i].origin]+r>n&&(t=!1)),!t})),t&&e.run(),t}function f(e,t){void 0===e[t]?e[t]=1:e[t]++}d(s)||(S.logWarn("queueing auction due to limited endpoint capacity"),w.push(s))}return{addBidReceived:function(e){W=W.concat(e)},addNoBid:function(e){L=L.concat(e)},executeCallback:Y,callBids:function(){o="started",t=Date.now();var e=A.makeBidRequests(k,t,F,V,P);S.logInfo("Bids Requested for Auction with id: ".concat(F),e),e.length<1?(S.logWarn("No valid bid requests returned for auction"),Q()):R.call({dispatch:X,context:this},e)},addWinningBid:function(e){H=H.concat(e),A.callBidWonBidder(e.bidder,e,s)},setBidTargeting:function(e){A.callSetTargetingBidder(e.bidder,e)},getWinningBids:function(){return H},getTimeout:function(){return V},getAuctionId:function(){return F},getAuctionStatus:function(){return o},getAdUnits:function(){return k},getAdUnitCodes:function(){return M},getBidRequests:function(){return q},getBidsReceived:function(){return W},getNoBids:function(){return L}}},n.d(t,"c",(function(){return _})),n.d(t,"e",(function(){return R})),t.g=B,t.d=x,n.d(t,"f",(function(){return D})),n.d(t,"i",(function(){return k})),n.d(t,"h",(function(){return P})),t.j=M;var r=n(0),i=n(43),o=n(36),a=n(96),c=n(13),u=n(3),s=n(55),d=n(10),f=n(11),l=n.n(f),p=n(12),g=n.n(p),b=n(22),v=n(2);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=s.a.syncUsers,S=n(0),A=n(8).default,E=n(9),O=n(5),T="inProgress",I="completed";E.on(O.EVENTS.BID_ADJUSTMENT,(function(e){!function(e){var t,n=e.bidderCode,r=e.cpm;if(pbjs.bidderSettings&&(n&&pbjs.bidderSettings[n]&&"function"==typeof pbjs.bidderSettings[n].bidCpmAdjustment?t=pbjs.bidderSettings[n].bidCpmAdjustment:pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD]&&"function"==typeof pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment&&(t=pbjs.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),t))try{r=t(e.cpm,h({},e))}catch(e){S.logError("Error during bid adjustment","bidmanager.js",e)}r>=0&&(e.cpm=r)}(e)}));var C={},j={},w=[];var _=Object(d.b)("async",(function(e,t){this.dispatch.call(this.bidderRequest,e,t)}),"addBidResponse"),R=Object(d.b)("sync",(function(e){this.dispatch.call(this.context,e)}),"addBidderRequests"),U=Object(d.b)("async",(function(e,t){t&&t()}),"bidsBackCallback");function B(e,t){t.timeToRespond>e.getTimeout()+u.b.getConfig("timeoutBuffer")&&e.executeCallback(!0)}function x(e,t){var n=e.getBidRequests(),r=l()(n,(function(e){return e.bidderCode===t.bidderCode}));!function(e,t){var n;if(e.bidderCode&&(e.cpm>0||e.dealId)){var r=l()(t.bids,(function(t){return t.adUnitCode===e.adUnitCode}));n=function(e,t,n){if(!t)return{};var r={},i=pbjs.bidderSettings;if(i){q(r,M(t.mediaType,e,n),t),e&&i[e]&&i[e][O.JSON_MAPPING.ADSERVER_TARGETING]&&(q(r,i[e],t),t.sendStandardTargeting=i[e].sendStandardTargeting)}t.native&&(r=h({},r,Object(o.e)(t,n)));return r}(e.bidderCode,e,r)}e.adserverTargeting=h(e.adserverTargeting||{},n)}(t,r),E.emit(O.EVENTS.BID_RESPONSE,t),e.addBidReceived(t),B(e,t)}var D=Object(d.b)("async",(function(e,t,n,r){Object(a.b)([t],(function(r,i){r?(S.logWarn("Failed to save to the video cache: ".concat(r,". Video bid must be discarded.")),B(e,t)):""===i[0].uuid?(S.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."),B(e,t)):(t.videoCacheKey=i[0].uuid,t.vastUrl||(t.vastUrl=Object(a.a)(t.videoCacheKey)),x(e,t),n())}),r)}),"callPrebidCache");function N(e,t,n){if(e&&n){if(e===v.d){var i=Object(r.deepAccess)(t,"mediaTypes.".concat(v.d,".context"),"instream");if(n["".concat(v.d,"-").concat(i)])return n["".concat(v.d,"-").concat(i)]}return n[e]}}var k=function(e,t){var n=N(e,t,u.b.getConfig("mediaTypePriceGranularity"));return"string"==typeof e&&n?"string"==typeof n?n:"custom":u.b.getConfig("priceGranularity")},P=function(e){return function(t){return e===O.GRANULARITY_OPTIONS.AUTO?t.pbAg:e===O.GRANULARITY_OPTIONS.DENSE?t.pbDg:e===O.GRANULARITY_OPTIONS.LOW?t.pbLg:e===O.GRANULARITY_OPTIONS.MEDIUM?t.pbMg:e===O.GRANULARITY_OPTIONS.HIGH?t.pbHg:e===O.GRANULARITY_OPTIONS.CUSTOM?t.pbCg:void 0}};function M(e,t,n){function i(e,t){return{key:e,val:"function"==typeof t?function(e){return t(e)}:function(e){return Object(r.getValue)(e,t)}}}var o=O.TARGETING_KEYS,a=k(e,n),c=pbjs.bidderSettings;if(c[O.JSON_MAPPING.BD_SETTING_STANDARD]||(c[O.JSON_MAPPING.BD_SETTING_STANDARD]={}),c[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING]||(c[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING]=[i(o.BIDDER,"bidderCode"),i(o.AD_ID,"adId"),i(o.PRICE_BUCKET,P(a)),i(o.SIZE,"size"),i(o.DEAL,"dealId"),i(o.SOURCE,"source"),i(o.FORMAT,"mediaType"),i(o.ADOMAIN,(function(e){return e.meta&&e.meta.advertiserDomains&&e.meta.advertiserDomains.length>0?e.meta.advertiserDomains[0]:""}))]),"video"===e){var s=c[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING];if([o.UUID,o.CACHE_ID].forEach((function(e){void 0===l()(s,(function(t){return t.key===e}))&&s.push(i(e,"videoCacheKey"))})),u.b.getConfig("cache.url")&&(!t||!1!==S.deepAccess(c,"".concat(t,".sendStandardTargeting")))){var d=Object(r.parseUrl)(u.b.getConfig("cache.url"));void 0===l()(s,(function(e){return e.key===o.CACHE_HOST}))&&s.push(i(o.CACHE_HOST,(function(e){return S.deepAccess(e,"adserverTargeting.".concat(o.CACHE_HOST))?e.adserverTargeting[o.CACHE_HOST]:d.hostname})))}}return c[O.JSON_MAPPING.BD_SETTING_STANDARD]}function q(e,t,n){var r=t[O.JSON_MAPPING.ADSERVER_TARGETING];return n.size=n.getSize(),S._each(r,(function(r){var i=r.key,o=r.val;if(e[i]&&S.logWarn("The key: "+i+" is getting ovewritten"),S.isFn(o))try{o=o(n)}catch(e){S.logError("bidmanager","ERROR",e)}(void 0===t.suppressEmptyKeys||!0!==t.suppressEmptyKeys)&&i!==O.TARGETING_KEYS.DEAL||!S.isEmptyStr(o)&&null!=o?e[i]=o:S.logInfo("suppressing empty key '"+i+"' from adserver targeting")})),e}function G(e,t){return e[t.adUnitCode]||(e[t.adUnitCode]={bids:[]}),e[t.adUnitCode].bids.push(t),e}},33:function(e,t,n){var r=n(28);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},332:function(e,t,n){n(333);var r=n(52);e.exports=r("String","includes")},333:function(e,t,n){"use strict";var r=n(14),i=n(334),o=n(47);r({target:"String",proto:!0,forced:!n(336)("includes")},{includes:function(e){return!!~String(o(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},334:function(e,t,n){var r=n(335);e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},335:function(e,t,n){var r=n(29),i=n(46),o=n(23)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},336:function(e,t,n){var r=n(23)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(e){}}return!1}},34:function(e,t,n){var r=n(33),i=n(77),o=n(15),a=n(56),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(o(e),t=a(t,!0),o(n),i)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},35:function(e,t,n){var r=n(17),i=n(93);e.exports=r?i:function(e){return Set.prototype.values.call(e)}},36:function(e,t,n){"use strict";n.d(t,"f",(function(){return f})),n.d(t,"a",(function(){return l})),t.h=function(e){if(e&&e.type&&function(e){if(!e||!o()(Object.keys(p),e))return Object(r.logError)("".concat(e," nativeParam is not supported")),!1;return!0}(e.type))return p[e.type];return e},t.g=function(e,t){var n=Object(r.getBidRequest)(e.requestId,t);if(!n)return!1;if(!Object(r.deepAccess)(e,"native.clickUrl"))return!1;var i=n.nativeParams;if(!i)return!0;var a=Object.keys(i).filter((function(e){return i[e].required})),c=Object.keys(e.native).filter((function(t){return e.native[t]}));return a.every((function(e){return o()(c,e)}))},t.b=function(e,t){var n;"click"===e.action?n=t.native&&t.native.clickTrackers:(n=t.native&&t.native.impressionTrackers,t.native&&t.native.javascriptTrackers&&Object(r.insertHtmlIntoIframe)(t.native.javascriptTrackers));return(n||[]).forEach(r.triggerPixel),e.action},t.e=function(e,t){var n={};Object(r.deepAccess)(t,"nativeParams.rendererUrl")?e.native.rendererUrl=g(t.nativeParams.rendererUrl):Object(r.deepAccess)(t,"nativeParams.adTemplate")&&(e.native.adTemplate=g(t.nativeParams.adTemplate));var i=!1!==Object(r.deepAccess)(t,"nativeParams.sendTargetingKeys"),o=function(e){var t={};Object(r.deepAccess)(e,"nativeParams.ext")&&Object.keys(e.nativeParams.ext).forEach((function(e){t[e]="hb_native_".concat(e)}));return u(u({},d.NATIVE_KEYS),t)}(t),a=u(u({},e.native),e.native.ext);return delete a.ext,Object.keys(a).forEach((function(a){var c=o[a],u=g(e.native[a])||g(Object(r.deepAccess)(e,"native.ext.".concat(a)));if("adTemplate"!==a&&c&&u){var s=Object(r.deepAccess)(t,"nativeParams.".concat(a,".sendId"));if("boolean"!=typeof s&&(s=Object(r.deepAccess)(t,"nativeParams.ext.".concat(a,".sendId"))),s)u="".concat(c,":").concat(e.adId);var d=Object(r.deepAccess)(t,"nativeParams.".concat(a,".sendTargetingKeys"));"boolean"!=typeof d&&(d=Object(r.deepAccess)(t,"nativeParams.ext.".concat(a,".sendTargetingKeys"))),("boolean"==typeof d?d:i)&&(n[c]=u)}})),n},t.d=function(e,t){var n={message:"assetResponse",adId:e.adId,assets:[]};t.native.hasOwnProperty("adTemplate")&&(n.adTemplate=g(t.native.adTemplate));t.native.hasOwnProperty("rendererUrl")&&(n.rendererUrl=g(t.native.rendererUrl));return e.assets.forEach((function(e){var i=Object(r.getKeyByValue)(d.NATIVE_KEYS,e),o=g(t.native[i]);n.assets.push({key:i,value:o})})),n},t.c=function(e,t){var n={message:"assetResponse",adId:e.adId,assets:[]};return Object.keys(t.native).forEach((function(e,r){if("adTemplate"===e&&t.native[e])n.adTemplate=g(t.native[e]);else if("rendererUrl"===e&&t.native[e])n.rendererUrl=g(t.native[e]);else if("ext"===e)Object.keys(t.native[e]).forEach((function(r){if(t.native[e][r]){var i=g(t.native[e][r]);n.assets.push({key:r,value:i})}}));else if(t.native[e]&&d.NATIVE_KEYS.hasOwnProperty(e)){var i=g(t.native[e]);n.assets.push({key:e,value:i})}})),n};var r=n(0),i=n(12),o=n.n(i);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=n(5),f=[],l=Object.keys(d.NATIVE_KEYS).map((function(e){return d.NATIVE_KEYS[e]})),p={image:{image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}};function g(e){return"object"===a(e)&&e.url?e.url:e}},37:function(e,t){e.exports={}},38:function(e,t,n){var r=n(15),i=n(21),o=n(23)("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||null==(n=r(a)[o])?t:i(n)}},39:function(e,t,n){"use strict";t.a=function(e,t){return new i(e,t)};var r=n(0);function i(e,t){var n=t&&t.src||"client",i=e||0;this.bidderCode=t&&t.bidder||"",this.width=0,this.height=0,this.statusMessage=function(){switch(i){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}}(),this.adId=r.getUniqueIdentifierStr(),this.requestId=t&&t.bidId,this.mediaType="banner",this.source=n,this.getStatusCode=function(){return i},this.getSize=function(){return this.width+"x"+this.height}}},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),t.b=u;var r=n(3);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=n(0),c=u();function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.request,c=t.done;return function(t,u,s){var d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};try{var f,l=d.method||(s?"POST":"GET"),p=document.createElement("a");p.href=t;var g="object"===o(u)&&null!==u?u:{success:function(){a.logMessage("xhr success")},error:function(e){a.logError("xhr error",null,e)}};if("function"==typeof u&&(g.success=u),(f=new window.XMLHttpRequest).onreadystatechange=function(){if(4===f.readyState){"function"==typeof c&&c(p.origin);var e=f.status;e>=200&&e<300||304===e?g.success(f.responseText,f):g.error(f.statusText,f)}},r.b.getConfig("disableAjaxTimeout")||(f.ontimeout=function(){a.logError("  xhr timeout after ",f.timeout,"ms")}),"GET"===l&&s){var b=a.parseUrl(t,d);i(b.search,s),t=a.buildUrl(b)}f.open(l,t,!0),r.b.getConfig("disableAjaxTimeout")||(f.timeout=e),d.withCredentials&&(f.withCredentials=!0),a._each(d.customHeaders,(function(e,t){f.setRequestHeader(t,e)})),d.preflight&&f.setRequestHeader("X-Requested-With","XMLHttpRequest"),f.setRequestHeader("Content-Type",d.contentType||"text/plain"),"function"==typeof n&&n(p.origin),"POST"===l&&s?f.send(s):f.send()}catch(e){a.logError("xhr construction",e),"object"===o(u)&&null!==u&&u.error(e)}}}},40:function(e,t,n){"use strict";t.a=function(e,t,n){if(!t||!e)return void o.logError("cannot load external script without url and moduleCode");if(!i()(c,t))return void o.logError("".concat(t," not whitelisted for loading external JavaScript"));if(a[e])return n&&"function"==typeof n&&(a[e].loaded?n():a[e].callbacks.push(n)),a[e].tag;a[e]={loaded:!1,tag:null,callbacks:[]},n&&"function"==typeof n&&a[e].callbacks.push(n);return o.logWarn("module ".concat(t," is loading external JavaScript")),function(t,n){var r=document.createElement("script");r.type="text/javascript",r.async=!0,a[e].tag=r,r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,n())}:r.onload=function(){n()};return r.src=t,o.insertElement(r),r}(e,(function(){a[e].loaded=!0;try{for(var t=0;t<a[e].callbacks.length;t++)a[e].callbacks[t]()}catch(e){o.logError("Error executing callback","adloader.js:loadExternalScript",e)}}))};var r=n(12),i=n.n(r),o=n(0),a={},c=["adloox","criteo","outstream","adagio","browsi"]},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return O})),t.c=T,n.d(t,"d",(function(){return I}));var r=n(0),i=n(3),o=n(36),a=n(24),c=n(95),u=n(2),s=n(10),d=n(12),f=n.n(d),l=n(11),p=n.n(l);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=n(0),m=n(5),S=[],A=Object.keys(m.TARGETING_KEYS).map((function(e){return m.TARGETING_KEYS[e]})),E={isBidNotExpired:function(e){return e.responseTimestamp+1e3*e.ttl-1e3>Object(r.timestamp)()},isUnusedBid:function(e){return e&&(e.status&&!f()([m.BID_STATUS.RENDERED],e.status)||!e.status)}},O=Object(s.b)("sync",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!o){var a=[],c=i.b.getConfig("sendBidsControl.dealPrioritization"),u=Object(r.groupBy)(e,"adUnitCode");return Object.keys(u).forEach((function(e){var i=[],o=Object(r.groupBy)(u[e],"bidderCode");Object.keys(o).forEach((function(e){return i.push(o[e].reduce(t))})),n>0?(i=c?i.sort(T(!0)):i.sort((function(e,t){return t.cpm-e.cpm})),a.push.apply(a,v(i.slice(0,n)))):a.push.apply(a,v(i))})),a}return e}));function T(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t,n){return void 0!==t.adserverTargeting.hb_deal&&void 0===n.adserverTargeting.hb_deal?-1:void 0===t.adserverTargeting.hb_deal&&void 0!==n.adserverTargeting.hb_deal?1:e?n.cpm-t.cpm:n.adserverTargeting.hb_pb-t.adserverTargeting.hb_pb}}var I=function(e){var t={},n={};function a(e,t){return e.adserverTargeting&&t&&(h.isArray(t)&&f()(t,e.adUnitCode)||"string"==typeof t&&e.adUnitCode===t)}function s(e,t){if(!0===i.b.getConfig("targetingControls.alwaysIncludeDeals")){var n=A.concat(o.a);return O(t,r.getHighestCpm).map((function(t){if(t.dealId&&a(t,e))return b({},t.adUnitCode,D(t,n.filter((function(e){return void 0!==t.adserverTargeting[e]}))))})).filter((function(e){return e}))}return[]}function d(e,t){var n=g({},m.TARGETING_KEYS,m.NATIVE_KEYS),i=Object.keys(n),o={};Object(r.logInfo)("allowTargetingKeys - allowed keys [ ".concat(t.map((function(e){return n[e]})).join(", ")," ]")),e.map((function(e){var r=Object.keys(e)[0],a=e[r].filter((function(e){var r=Object.keys(e)[0],a=0===i.filter((function(e){return 0===r.indexOf(n[e])})).length||p()(t,(function(e){var t=n[e];return 0===r.indexOf(t)}));return o[r]=!a,a}));e[r]=a}));var a=Object.keys(o).filter((function(e){return o[e]}));return Object(r.logInfo)("allowTargetingKeys - removed keys [ ".concat(a.join(", ")," ]")),e.filter((function(e){return e[Object.keys(e)[0]].length>0}))}function l(e,t){var n=Object(r.deepClone)(e);return Object.keys(n).map((function(e){return{adUnitCode:e,adserverTargeting:n[e]}})).sort(T()).reduce((function(e,i,o,a){var c,u=(c=i.adserverTargeting,Object.keys(c).reduce((function(e,t){return e+"".concat(t,"%3d").concat(encodeURIComponent(c[t]),"%26")}),""));o+1===a.length&&(u=u.slice(0,-3));var s=i.adUnitCode,d=u.length;return d<=t?(t-=d,Object(r.logInfo)("AdUnit '".concat(s,"' auction keys comprised of ").concat(d," characters.  Deducted from running threshold; new limit is ").concat(t),n[s]),e[s]=n[s]):Object(r.logWarn)("The following keys for adUnitCode '".concat(s,"' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d,", the current allotted amount was ").concat(t,".\n"),n[s]),o+1===a.length&&0===Object.keys(e).length&&Object(r.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),e}),{})}function y(e){return e.map((function(e){return b({},Object.keys(e)[0],e[Object.keys(e)[0]].map((function(e){return b({},Object.keys(e)[0],e[Object.keys(e)[0]].join(", "))})).reduce((function(e,t){return g(t,e)}),{}))})).reduce((function(e,t){var n=Object.keys(t)[0];return e[n]=g({},e[n],t[n]),e}),{})}function I(t){return"string"==typeof t?[t]:h.isArray(t)?t:e.getAdUnitCodes()||[]}function C(){var t=e.getBidsReceived();return i.b.getConfig("useBidCache")||(t=t.filter((function(e){return n[e.adUnitCode]===e.auctionId}))),t=t.filter((function(e){return Object(r.deepAccess)(e,"video.context")!==u.a})).filter((function(e){return"banner"!==e.mediaType||Object(c.c)([e.width,e.height])})).filter(E.isUnusedBid).filter(E.isBidNotExpired),O(t,r.getOldestHighestCpmBid)}function j(e,n){var r=t.getWinningBids(e,n),i=w();return r=r.map((function(e){return b({},e.adUnitCode,Object.keys(e.adserverTargeting).filter((function(t){return void 0===e.sendStandardTargeting||e.sendStandardTargeting||-1===i.indexOf(t)})).reduce((function(t,n){var r=[e.adserverTargeting[n]],i=b({},n.substring(0,20),r);if(n===m.TARGETING_KEYS.DEAL){var o=b({},"".concat(n,"_").concat(e.bidderCode).substring(0,20),r);return[].concat(v(t),[i,o])}return[].concat(v(t),[i])}),[]))}))}function w(){return e.getStandardBidderAdServerTargeting().map((function(e){return e.key})).concat(A).filter(r.uniques)}function _(e,t,n,i){return Object.keys(t.adserverTargeting).filter(R()).forEach((function(n){e.length&&e.filter(function(e){return function(n){return n.adUnitCode===t.adUnitCode&&n.adserverTargeting[e]}}(n)).forEach(function(e){return function(n){h.isArray(n.adserverTargeting[e])||(n.adserverTargeting[e]=[n.adserverTargeting[e]]),n.adserverTargeting[e]=n.adserverTargeting[e].concat(t.adserverTargeting[e]).filter(r.uniques),delete t.adserverTargeting[e]}}(n))})),e.push(t),e}function R(){var e=w().concat(o.a);return function(t){return-1===e.indexOf(t)}}function U(e){return b({},e.adUnitCode,Object.keys(e.adserverTargeting).filter(R()).map((function(t){return b({},t.substring(0,20),[e.adserverTargeting[t]])})))}function B(e,t){return t.filter((function(t){return f()(e,t.adUnitCode)})).map((function(e){return g({},e)})).reduce(_,[]).map(U).filter((function(e){return e}))}function x(e,t){var n=A.concat(o.a),c=i.b.getConfig("sendBidsControl.bidLimit"),u=O(t,r.getHighestCpm,c),s=i.b.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),d=s?s.map((function(e){return m.TARGETING_KEYS[e]})):n;return u.map((function(t){if(a(t,e))return b({},t.adUnitCode,D(t,n.filter((function(e){return void 0!==t.adserverTargeting[e]&&-1!==d.indexOf(e)}))))})).filter((function(e){return e}))}function D(e,t){return t.map((function(t){return b({},"".concat(t,"_").concat(e.bidderCode).substring(0,20),[e.adserverTargeting[t]])}))}function N(t){function n(e){return Object(r.deepAccess)(e,m.JSON_MAPPING.ADSERVER_TARGETING)}return e.getAdUnits().filter((function(e){return f()(t,e.code)&&n(e)})).map((function(e){return b({},e.code,function(e){var t=n(e);return Object.keys(t).map((function(e){return b({},e,h.isArray(t[e])?t[e]:t[e].split(","))}))}(e))}))}return t.setLatestAuctionForAdUnit=function(e,t){n[e]=t},t.resetPresetTargeting=function(t,n){if(Object(r.isGptPubadsDefined)()){var i=I(t),o=e.getAdUnits().filter((function(e){return f()(i,e.code)}));window.googletag.pubads().getSlots().forEach((function(e){var t=h.isFn(n)&&n(e);S.forEach((function(n){o.forEach((function(r){(r.code===e.getAdUnitPath()||r.code===e.getSlotElementId()||h.isFn(t)&&t(r.code))&&e.setTargeting(n,null)}))}))}))}},t.resetPresetTargetingAST=function(e){I(e).forEach((function(e){var t=window.apntag.getTag(e);if(t&&t.keywords){var n=Object.keys(t.keywords),r={};n.forEach((function(e){f()(S,e.toLowerCase())||(r[e]=t.keywords[e])})),window.apntag.modifyTag(e,{keywords:r})}}))},t.getAllTargeting=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C(),n=I(e),o=j(n,t).concat(B(n,t)).concat(i.b.getConfig("enableSendAllBids")?x(n,t):s(n,t)).concat(N(n));o.map((function(e){Object.keys(e).map((function(t){e[t].map((function(e){-1===S.indexOf(Object.keys(e)[0])&&(S=Object.keys(e).concat(S))}))}))}));var a=Object.keys(g({},m.DEFAULT_TARGETING_KEYS,m.NATIVE_KEYS)),c=i.b.getConfig("targetingControls.allowTargetingKeys")||a;Array.isArray(c)&&c.length>0&&(o=d(o,c)),o=y(o);var u=i.b.getConfig("targetingControls.auctionKeyMaxChars");return u&&(Object(r.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(u," characters.  Running checks on auction keys...")),o=l(o,u)),n.forEach((function(e){o[e]||(o[e]={})})),o},t.setTargetingForGPT=function(e,t){window.googletag.pubads().getSlots().forEach((function(n){Object.keys(e).filter(t?t(n):Object(r.isAdUnitCodeMatchingSlot)(n)).forEach((function(t){return Object.keys(e[t]).forEach((function(r){var i=e[t][r];"string"==typeof i&&(i=i.split(",")),(i=i.length>1?[i]:i).map((function(e){return h.logMessage("Attempting to set key value for slot: ".concat(n.getSlotElementId()," key: ").concat(r," value: ").concat(e)),e})).forEach((function(e){n.setTargeting(r,e)}))}))}))}))},t.getWinningBids=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C(),n=I(e);return t.filter((function(e){return f()(n,e.adUnitCode)})).filter((function(e){return e.cpm>0})).map((function(e){return e.adUnitCode})).filter(r.uniques).map((function(e){return t.filter((function(t){return t.adUnitCode===e?t:null})).reduce(r.getHighestCpm)}))},t.setTargetingForAst=function(e){var n=t.getAllTargeting(e);try{t.resetPresetTargetingAST(e)}catch(e){h.logError("unable to reset targeting for AST"+e)}Object.keys(n).forEach((function(e){return Object.keys(n[e]).forEach((function(t){if(h.logMessage("Attempting to set targeting for targetId: ".concat(e," key: ").concat(t," value: ").concat(n[e][t])),h.isStr(n[e][t])||h.isArray(n[e][t])){var r={};t.search(/pt[0-9]/)<0?r[t.toUpperCase()]=n[e][t]:r[t]=n[e][t],window.apntag.setKeywords(e,r,{overrideKeyValue:!0})}}))}))},t.isApntagDefined=function(){if(window.apntag&&h.isFn(window.apntag.setKeywords))return!0},t}(a.a)},42:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n(11),i=n.n(r),o=n(0),a={buckets:[{max:5,increment:.5}]},c={buckets:[{max:20,increment:.1}]},u={buckets:[{max:20,increment:.01}]},s={buckets:[{max:3,increment:.01},{max:8,increment:.05},{max:20,increment:.5}]},d={buckets:[{max:5,increment:.05},{max:10,increment:.1},{max:20,increment:.5}]};function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=parseFloat(e);return isNaN(r)&&(r=""),{low:""===r?"":l(e,a,n),med:""===r?"":l(e,c,n),high:""===r?"":l(e,u,n),auto:""===r?"":l(e,d,n),dense:""===r?"":l(e,s,n),custom:""===r?"":l(e,t,n)}}function l(e,t,n){var r="";if(!p(t))return r;var o=t.buckets.reduce((function(e,t){return e.max>t.max?e:t}),{max:0}),a=0,c=i()(t.buckets,(function(t){if(e>o.max*n){var i=t.precision;void 0===i&&(i=2),r=(t.max*n).toFixed(i)}else{if(e<=t.max*n&&e>=a*n)return t.min=a,t;a=t.max}}));return c&&(r=function(e,t,n){var r=void 0!==t.precision?t.precision:2,i=t.increment*n,o=t.min*n,a=Math.pow(10,r+2),c=(e*a-o*a)/(i*a),u=Math.floor(c)*i+o;return(u=Number(u.toFixed(10))).toFixed(r)}(e,c,n)),r}function p(e){if(o.isEmpty(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var t=!0;return e.buckets.forEach((function(e){e.max&&e.increment||(t=!1)})),t}},44:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},45:function(e,t,n){var r=n(76),i=n(47);e.exports=function(e){return r(i(e))}},46:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},47:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},48:function(e,t,n){var r=n(47);e.exports=function(e){return Object(r(e))}},49:function(e,t){e.exports={}},5:function(e,t){e.exports={JSON_MAPPING:{PL_CODE:"code",PL_SIZE:"sizes",PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:"adserverTargeting",BD_SETTING_STANDARD:"standard"},DEBUG_MODE:"pbjs_debug",STATUS:{GOOD:1,NO_BID:2},CB:{TYPE:{ALL_BIDS_BACK:"allRequestedBidsBack",AD_UNIT_BIDS_BACK:"adUnitBidsBack",BID_WON:"bidWon",REQUEST_BIDS:"requestBids"}},EVENTS:{AUCTION_INIT:"auctionInit",AUCTION_END:"auctionEnd",BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",NO_BID:"noBid",BID_WON:"bidWon",BIDDER_DONE:"bidderDone",SET_TARGETING:"setTargeting",BEFORE_REQUEST_BIDS:"beforeRequestBids",REQUEST_BIDS:"requestBids",ADD_AD_UNITS:"addAdUnits",AD_RENDER_FAILED:"adRenderFailed",AD_RENDER_SUCCEEDED:"adRenderSucceeded",TCF2_ENFORCEMENT:"tcf2Enforcement",AUCTION_DEBUG:"auctionDebug",BID_VIEWABLE:"bidViewable",STALE_RENDER:"staleRender"},AD_RENDER_FAILED_REASON:{PREVENT_WRITING_ON_MAIN_DOCUMENT:"preventWritingOnMainDocument",NO_AD:"noAd",EXCEPTION:"exception",CANNOT_FIND_AD:"cannotFindAd",MISSING_DOC_OR_ADID:"missingDocOrAdid"},EVENT_ID_PATHS:{bidWon:"adUnitCode"},GRANULARITY_OPTIONS:{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},TARGETING_KEYS:{BIDDER:"hb_bidder",AD_ID:"hb_adid",PRICE_BUCKET:"hb_pb",SIZE:"hb_size",DEAL:"hb_deal",SOURCE:"hb_source",FORMAT:"hb_format",UUID:"hb_uuid",CACHE_ID:"hb_cache_id",CACHE_HOST:"hb_cache_host",ADOMAIN:"hb_adomain"},DEFAULT_TARGETING_KEYS:{BIDDER:"hb_bidder",AD_ID:"hb_adid",PRICE_BUCKET:"hb_pb",SIZE:"hb_size",DEAL:"hb_deal",FORMAT:"hb_format",UUID:"hb_uuid",CACHE_HOST:"hb_cache_host"},NATIVE_KEYS:{title:"hb_native_title",body:"hb_native_body",body2:"hb_native_body2",privacyLink:"hb_native_privacy",privacyIcon:"hb_native_privicon",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",displayUrl:"hb_native_displayurl",cta:"hb_native_cta",rating:"hb_native_rating",address:"hb_native_address",downloads:"hb_native_downloads",likes:"hb_native_likes",phone:"hb_native_phone",price:"hb_native_price",salePrice:"hb_native_saleprice",rendererUrl:"hb_renderer_url",adTemplate:"hb_adTemplate"},S2S:{SRC:"s2s",DEFAULT_ENDPOINT:"https://web.archive.org/web/20211007045442/https://prebid.adnxs.com/pbs/v1/openrtb2/auction",SYNCED_BIDDERS_KEY:"pbjsSyncs"},BID_STATUS:{BID_TARGETING_SET:"targetingSet",RENDERED:"rendered",BID_REJECTED:"bidRejected"}}},50:function(e,t,n){var r=n(58),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},51:function(e,t){e.exports=function(){}},52:function(e,t,n){var r=n(27);e.exports=r},53:function(e,t){e.exports={}},54:function(e,t,n){var r,i,o,a=n(118),c=n(25),u=n(29),s=n(31),d=n(30),f=n(59),l=n(65),p=n(53),g="Object already initialized",b=c.WeakMap;if(a||f.state){var v=f.state||(f.state=new b),y=v.get,h=v.has,m=v.set;r=function(e,t){if(h.call(v,e))throw new TypeError(g);return t.facade=e,m.call(v,e,t),t},i=function(e){return y.call(v,e)||{}},o=function(e){return h.call(v,e)}}else{var S=l("state");p[S]=!0,r=function(e,t){if(d(e,S))throw new TypeError(g);return t.facade=e,s(e,S,t),t},i=function(e){return d(e,S)?e[S]:{}},o=function(e){return d(e,S)}}e.exports={set:r,get:i,has:o,enforce:function(e){return o(e)?i(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),i=n(3),o=n(12),a=n.n(o),c=n(7);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}i.b.setDefaults({userSync:r.deepClone({syncEnabled:!0,filterSettings:{image:{bidders:"*",filter:"include"}},syncsPerBidder:5,syncDelay:3e3,auctionDelay:0})});var f=Object(c.a)("usersync");var l=!r.isSafariBrowser()&&f.cookiesAreEnabled(),p=function(e){var t={},n={image:[],iframe:[]},o=new Set,c={},s={image:!0,iframe:!1},f=e.config;function l(){if(f.syncEnabled&&e.browserSupportsCookies){try{!function(){if(!s.image)return;p(n.image,(function(e){var t=u(e,2),n=t[0],i=t[1];r.logMessage("Invoking image pixel user sync for bidder: ".concat(n)),r.triggerPixel(i)}))}(),function(){if(!s.iframe)return;p(n.iframe,(function(e){var t=u(e,2),n=t[0],i=t[1];r.logMessage("Invoking iframe user sync for bidder: ".concat(n)),r.insertUserSyncIframe(i)}))}()}catch(e){return r.logError("Error firing user syncs",e)}n={image:[],iframe:[]}}}function p(e,t){r.shuffle(e).forEach((function(e){t(e),o.add(e[0])}))}function g(e,t){var n=f.filterSettings;if(function(e,t){if(e.all&&e[t])return r.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t,'" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')),!1;var n=e.all?e.all:e[t],i=e.all?"all":t;if(!n)return!1;var o=n.filter,a=n.bidders;if(o&&"include"!==o&&"exclude"!==o)return r.logWarn('UserSync "filterSettings.'.concat(i,".filter\" setting '").concat(o,"' is not a valid option; use either 'include' or 'exclude'.")),!1;if("*"!==a&&!(Array.isArray(a)&&a.length>0&&a.every((function(e){return r.isStr(e)&&"*"!==e}))))return r.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(i,".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")),!1;return!0}(n,e)){s[e]=!0;var i=n.all?n.all:n[e],o="*"===i.bidders?[t]:i.bidders;return{include:function(e,t){return!a()(e,t)},exclude:function(e,t){return a()(e,t)}}[i.filter||"include"](o,t)}return!s[e]}return i.b.getConfig("userSync",(function(e){if(e.userSync){var t=e.userSync.filterSettings;r.isPlainObject(t)&&(t.image||t.all||(e.userSync.filterSettings.image={bidders:"*",filter:"include"}))}f=d(f,e.userSync)})),t.registerSync=function(e,i,a){return o.has(i)?r.logMessage('already fired syncs for "'.concat(i,'", ignoring registerSync call')):f.syncEnabled&&r.isArray(n[e])?i?0!==f.syncsPerBidder&&Number(c[i])>=f.syncsPerBidder?r.logWarn('Number of user syncs exceeded for "'.concat(i,'"')):t.canBidderRegisterSync(e,i)?(n[e].push([i,a]),void(c=function(e,t){return e[t]?e[t]+=1:e[t]=1,e}(c,i))):r.logWarn('Bidder "'.concat(i,'" not permitted to register their "').concat(e,'" userSync pixels.')):r.logWarn("Bidder is required for registering sync"):r.logWarn('User sync type "'.concat(e,'" not supported'))},t.syncUsers=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e)return setTimeout(l,Number(e));l()},t.triggerUserSyncs=function(){f.enableOverride&&t.syncUsers()},t.canBidderRegisterSync=function(e,t){return!f.filterSettings||!g(e,t)},t}({config:i.b.getConfig("userSync"),browserSupportsCookies:l})},56:function(e,t,n){var r=n(29);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},57:function(e,t,n){var r=n(26),i=n(76),o=n(48),a=n(50),c=n(104),u=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,d=4==e,f=6==e,l=7==e,p=5==e||f;return function(g,b,v,y){for(var h,m,S=o(g),A=i(S),E=r(b,v,3),O=a(A.length),T=0,I=y||c,C=t?I(g,O):n||l?I(g,0):void 0;O>T;T++)if((p||T in A)&&(m=E(h=A[T],T,S),e))if(t)C[T]=m;else if(m)switch(e){case 3:return!0;case 5:return h;case 6:return T;case 2:u.call(C,h)}else switch(e){case 4:return!1;case 7:u.call(C,h)}return f?-1:s||d?d:C}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},58:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},59:function(e,t,n){var r=n(25),i=n(106),o="__core-js_shared__",a=r[o]||i(o,{});e.exports=a},60:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},61:function(e,t,n){var r=n(62),i=n(37),o=n(23)("iterator");e.exports=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[r(e)]}},62:function(e,t,n){var r=n(63),i=n(46),o=n(23)("toStringTag"),a="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?n:a?i(t):"Object"==(r=i(t))&&"function"==typeof t.callee?"Arguments":r}},63:function(e,t,n){var r={};r[n(23)("toStringTag")]="z",e.exports="[object z]"===String(r)},64:function(e,t,n){var r=n(63),i=n(34).f,o=n(31),a=n(30),c=n(117),u=n(23)("toStringTag");e.exports=function(e,t,n,s){if(e){var d=n?e:e.prototype;a(d,u)||i(d,u,{configurable:!0,value:t}),s&&!r&&o(d,"toString",c)}}},65:function(e,t,n){var r=n(79),i=n(60),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},66:function(e,t,n){"use strict";var r=n(14),i=n(126),o=n(91),a=n(128),c=n(64),u=n(31),s=n(89),d=n(23),f=n(17),l=n(37),p=n(90),g=p.IteratorPrototype,b=p.BUGGY_SAFARI_ITERATORS,v=d("iterator"),y="keys",h="values",m="entries",S=function(){return this};e.exports=function(e,t,n,d,p,A,E){i(n,t,d);var O,T,I,C=function(e){if(e===p&&U)return U;if(!b&&e in _)return _[e];switch(e){case y:case h:case m:return function(){return new n(this,e)}}return function(){return new n(this)}},j=t+" Iterator",w=!1,_=e.prototype,R=_[v]||_["@@iterator"]||p&&_[p],U=!b&&R||C(p),B="Array"==t&&_.entries||R;if(B&&(O=o(B.call(new e)),g!==Object.prototype&&O.next&&(f||o(O)===g||(a?a(O,g):"function"!=typeof O[v]&&u(O,v,S)),c(O,j,!0,!0),f&&(l[j]=S))),p==h&&R&&R.name!==h&&(w=!0,U=function(){return R.call(this)}),f&&!E||_[v]===U||u(_,v,U),l[t]=U,p)if(T={values:C(h),keys:A?U:C(y),entries:C(m)},E)for(I in T)(b||w||!(I in _))&&s(_,I,T[I]);else r({target:t,proto:!0,forced:b||w},T);return T}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i={};function o(e,t,n){var r=function(e,t){var n=i[e]=i[e]||{bidders:{}};return t?n.bidders[t]=n.bidders[t]||{}:n}(e,n);return r[t]=(r[t]||0)+1,r[t]}var a={incrementRequestsCounter:function(e){return o(e,"requestsCounter")},incrementBidderRequestsCounter:function(e,t){return o(e,"requestsCounter",t)},incrementBidderWinsCounter:function(e,t){return o(e,"winsCounter",t)},getRequestsCounter:function(e){return Object(r.deepAccess)(i,"".concat(e,".requestsCounter"))||0},getBidderRequestsCounter:function(e,t){return Object(r.deepAccess)(i,"".concat(e,".bidders.").concat(t,".requestsCounter"))||0},getBidderWinsCounter:function(e,t){return Object(r.deepAccess)(i,"".concat(e,".bidders.").concat(t,".winsCounter"))||0}}},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return d})),t.a=function(e){return s({moduleName:e,moduleType:"core"})},t.b=function(e,t){return s({gvlid:e,moduleName:t})};var r=n(10),i=n(0),o=n(12),a=n.n(o),c=["core","prebid-module"],u=[];function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.gvlid,n=e.moduleName,r=e.moduleType;function o(e){if(a()(c,r)){return e({valid:!0})}var o;return d(t,n,{hasEnforcementHook:!1},(function(t){if(t&&t.hasEnforcementHook)o=e(t);else{var n={hasEnforcementHook:!1,valid:i.hasDeviceAccess()};o=e(n)}})),o}var s=function(e,t,n,r,i,a){var c=function(o){if(o&&o.valid){var a=i&&""!==i?" ;domain=".concat(encodeURIComponent(i)):"",c=n&&""!==n?" ;expires=".concat(n):"",u=null!=r&&"none"==r.toLowerCase()?"; Secure":"";document.cookie="".concat(e,"=").concat(encodeURIComponent(t)).concat(c,"; path=/").concat(a).concat(r?"; SameSite=".concat(r):"").concat(u)}};if(!a||"function"!=typeof a)return o(c);u.push((function(){var e=o(c);a(e)}))},f=function(e,t){var n=function(t){if(t&&t.valid){var n=window.document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]*)\\s*(;|$)");return n?decodeURIComponent(n[2]):null}return null};if(!t||"function"!=typeof t)return o(n);u.push((function(){var e=o(n);t(e)}))},l=function(e){var t=function(e){if(e&&e.valid)try{return localStorage.setItem("prebid.cookieTest","1"),"1"===localStorage.getItem("prebid.cookieTest")}catch(e){}finally{try{localStorage.removeItem("prebid.cookieTest")}catch(e){}}return!1};if(!e||"function"!=typeof e)return o(t);u.push((function(){var n=o(t);e(n)}))},p=function(e){var t=function(e){return!(!e||!e.valid)&&(!!i.checkCookieSupport()||(window.document.cookie="prebid.cookieTest",-1!==window.document.cookie.indexOf("prebid.cookieTest")))};if(!e||"function"!=typeof e)return o(t);u.push((function(){var n=o(t);e(n)}))},g=function(e,t,n){var r=function(n){n&&n.valid&&y()&&window.localStorage.setItem(e,t)};if(!n||"function"!=typeof n)return o(r);u.push((function(){var e=o(r);n(e)}))},b=function(e,t){var n=function(t){return t&&t.valid&&y()?window.localStorage.getItem(e):null};if(!t||"function"!=typeof t)return o(n);u.push((function(){var e=o(n);t(e)}))},v=function(e,t){var n=function(t){t&&t.valid&&y()&&window.localStorage.removeItem(e)};if(!t||"function"!=typeof t)return o(n);u.push((function(){var e=o(n);t(e)}))},y=function(e){var t=function(e){if(e&&e.valid)try{return!!window.localStorage}catch(e){i.logError("Local storage api disabled")}return!1};if(!e||"function"!=typeof e)return o(t);u.push((function(){var n=o(t);e(n)}))},h=function(e,t){var n=function(t){if(t&&t.valid){var n=[];if(i.hasDeviceAccess())for(var r=document.cookie.split(";");r.length;){var o=r.pop(),a=o.indexOf("=");a=a<0?o.length:a,decodeURIComponent(o.slice(0,a).replace(/^\s+/,"")).indexOf(e)>=0&&n.push(decodeURIComponent(o.slice(a+1)))}return n}};if(!t||"function"!=typeof t)return o(n);u.push((function(){var e=o(n);t(e)}))};return{setCookie:s,getCookie:f,localStorageIsEnabled:l,cookiesAreEnabled:p,setDataInLocalStorage:g,getDataFromLocalStorage:b,removeDataFromLocalStorage:v,hasLocalStorage:y,findSimilarCookies:h}}var d=Object(r.b)("async",(function(e,t,n,r){r(n)}),"validateStorageEnforcement")},71:function(e,t,n){var r=n(210);e.exports=r},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"adUnitSetupChecks",(function(){return J})),n.d(t,"checkAdUnitSetup",(function(){return Y})),t.executeCallbacks=Z;var r=n(16),i=n(0),o=n(216),a=n(55),c=n(3),u=n(24),s=n(41),d=n(10),f=n(217),l=n(12),p=n.n(l),g=n(67),b=n(13),v=n(39),y=n(7);function h(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var A=Object(r.a)(),E=n(5),O=n(0),T=n(8).default,I=n(9),C=a.a.triggerUserSyncs,j=E.EVENTS,w=j.ADD_AD_UNITS,_=j.BID_WON,R=j.REQUEST_BIDS,U=j.SET_TARGETING,B=j.AD_RENDER_FAILED,x=j.AD_RENDER_SUCCEEDED,D=j.STALE_RENDER,N=E.AD_RENDER_FAILED_REASON,k=N.PREVENT_WRITING_ON_MAIN_DOCUMENT,P=N.NO_AD,M=N.EXCEPTION,q=N.CANNOT_FIND_AD,G=N.MISSING_DOC_OR_ADID,W={bidWon:function(e){var t=u.a.getBidsRequested().map((function(e){return e.bids.map((function(e){return e.adUnitCode}))})).reduce(i.flatten).filter(i.uniques);if(!O.contains(t,e))return void O.logError('The "'+e+'" placement is not defined.');return!0}};function L(e,t,n){e.defaultView&&e.defaultView.frameElement&&(e.defaultView.frameElement.width=t,e.defaultView.frameElement.height=n)}function F(e,t){var n=[];return O.isArray(e)&&(t?e.length===t:e.length>0)&&(e.every((function(e){return Object(i.isArrayOfNums)(e,2)}))?n=e:Object(i.isArrayOfNums)(e,2)&&n.push(e)),n}function z(e){var t=O.deepClone(e),n=t.mediaTypes.banner,r=F(n.sizes);return r.length>0?(n.sizes=r,t.sizes=r):(O.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),delete t.mediaTypes.banner),t}function V(e){var t=O.deepClone(e),n=t.mediaTypes.video;if(n.playerSize){var r="number"==typeof n.playerSize[0]?2:1,i=F(n.playerSize,r);i.length>0?(2===r&&O.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."),n.playerSize=i,t.sizes=i):(O.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),delete t.mediaTypes.video.playerSize)}return t}function H(e){var t=O.deepClone(e),n=t.mediaTypes.native;return n.image&&n.image.sizes&&!Array.isArray(n.image.sizes)&&(O.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),delete t.mediaTypes.native.image.sizes),n.image&&n.image.aspect_ratios&&!Array.isArray(n.image.aspect_ratios)&&(O.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),delete t.mediaTypes.native.image.aspect_ratios),n.icon&&n.icon.sizes&&!Array.isArray(n.icon.sizes)&&(O.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),delete t.mediaTypes.native.icon.sizes),t}function K(e,t){var n=O.deepAccess(e,"mediaTypes.".concat(t,".pos"));if(!n||!O.isNumber(n)||!isFinite(n)){var r="Value of property 'pos' on ad unit ".concat(e.code," should be of type: Number");O.logWarn(r),I.emit(E.EVENTS.AUCTION_DEBUG,{type:"WARNING",arguments:r}),delete e.mediaTypes[t].pos}return e}Object(f.a)(),A.bidderSettings=A.bidderSettings||{},A.libLoaded=!0,A.version="v5.8.0",O.logInfo("Prebid.js v5.8.0 loaded"),A.installedModules=["rtdModule","appnexusBidAdapter","concertBidAdapter","consumableBidAdapter","criteoBidAdapter","ixBidAdapter","justpremiumBidAdapter","kargoBidAdapter","nobidBidAdapter","openxBidAdapter","prebidServerBidAdapter","pubmaticBidAdapter","pulsepointBidAdapter","rubiconBidAdapter","teadsBidAdapter","tripleliftBidAdapter","vidazooBidAdapter","yieldmoBidAdapter","browsiRtdProvider","consentManagement","consentManagementUsp","googleAnalyticsAdapter","optimeraRtdProvider","permutiveRtdProvider"],A.adUnits=A.adUnits||[],A.triggerUserSyncs=C;var J={validateBannerMediaType:z,validateVideoMediaType:V,validateNativeMediaType:H,validateSizes:F},Y=Object(d.b)("sync",(function(e){var t=[];return e.forEach((function(e){var n,r,i,o=e.mediaTypes,a=e.bids;if(a&&O.isArray(a))if(o&&0!==Object.keys(o).length){o.banner&&(n=z(e),o.banner.hasOwnProperty("pos")&&(n=K(n,"banner"))),o.video&&(r=V(n||e),o.video.hasOwnProperty("pos")&&(r=K(r,"video"))),o.native&&(i=H(r||(n||e)));var c=S({},n,r,i);t.push(c)}else O.logError("Detected adUnit.code '".concat(e.code,"' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."));else O.logError("Detected adUnit.code '".concat(e.code,"' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."))})),t}),"checkAdUnitSetup");function Q(e){var t=u.a[e]().filter(O.bind.call(i.adUnitsFilter,this,u.a.getAdUnitCodes())),n=u.a.getLastAuctionId();return t.map((function(e){return e.adUnitCode})).filter(i.uniques).map((function(e){return t.filter((function(t){return t.auctionId===n&&t.adUnitCode===e}))})).filter((function(e){return e&&e[0]&&e[0].adUnitCode})).map((function(e){return t={},n=e[0].adUnitCode,r={bids:e},n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var t,n,r})).reduce((function(e,t){return S(e,t)}),{})}function $(e){var t=e.reason,n=e.message,r=e.bid,i=e.id,o={reason:t,message:n};r&&(o.bid=r),i&&(o.adId=i),O.logError(n),I.emit(B,o)}function X(e){var t=e.doc,n=e.bid,r=e.id,i={doc:t};n&&(i.bid=n),r&&(i.adId=r),I.emit(x,i)}function Z(e,t){function n(e){for(var t;t=e.shift();)t()}n(y.c),n(ee),e.call(this,t)}A.getAdserverTargetingForAdUnitCodeStr=function(e){if(O.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),e){var t=A.getAdserverTargetingForAdUnitCode(e);return O.transformAdServerTargetingObj(t)}O.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},A.getHighestUnusedBidResponseForAdUnitCode=function(e){if(e){var t=u.a.getAllBidsForAdUnitCode(e).filter(s.a.isUnusedBid).filter(s.a.isBidNotExpired);return t.length?t.reduce(i.getHighestCpm):{}}O.logMessage("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")},A.getAdserverTargetingForAdUnitCode=function(e){return A.getAdserverTargeting(e)[e]},A.getAdserverTargeting=function(e){return O.logInfo("Invoking pbjs.getAdserverTargeting",arguments),s.d.getAllTargeting(e)},A.getNoBids=function(){return O.logInfo("Invoking pbjs.getNoBids",arguments),Q("getNoBids")},A.getNoBidsForAdUnitCode=function(e){return{bids:u.a.getNoBids().filter((function(t){return t.adUnitCode===e}))}},A.getBidResponses=function(){return O.logInfo("Invoking pbjs.getBidResponses",arguments),Q("getBidsReceived")},A.getBidResponsesForAdUnitCode=function(e){return{bids:u.a.getBidsReceived().filter((function(t){return t.adUnitCode===e}))}},A.setTargetingForGPTAsync=function(e,t){if(O.logInfo("Invoking pbjs.setTargetingForGPTAsync",arguments),Object(i.isGptPubadsDefined)()){var n=s.d.getAllTargeting(e);s.d.resetPresetTargeting(e,t),s.d.setTargetingForGPT(n,t),Object.keys(n).forEach((function(e){Object.keys(n[e]).forEach((function(t){"hb_adid"===t&&u.a.setStatusForBids(n[e][t],E.BID_STATUS.BID_TARGETING_SET)}))})),I.emit(U,n)}else O.logError("window.googletag is not defined on the page")},A.setTargetingForAst=function(e){O.logInfo("Invoking pbjs.setTargetingForAn",arguments),s.d.isApntagDefined()?(s.d.setTargetingForAst(e),I.emit(U,s.d.getAllTargeting())):O.logError("window.apntag is not defined on the page")},A.renderAd=Object(d.b)("async",(function(e,t,n){if(O.logInfo("Invoking pbjs.renderAd",arguments),O.logMessage("Calling renderAd with adId :"+t),e&&t)try{var r=u.a.findBidByAdId(t);if(r){var i=!0;if(r&&r.status===E.BID_STATUS.RENDERED&&(O.logWarn("Ad id ".concat(r.adId," has been rendered before")),I.emit(D,r),O.deepAccess(c.b.getConfig("auctionOptions"),"suppressStaleRender")&&(i=!1)),i){if(r.ad=O.replaceAuctionPrice(r.ad,r.cpm),r.adUrl=O.replaceAuctionPrice(r.adUrl,r.cpm),n&&n.clickThrough){var o=n.clickThrough;r.ad=O.replaceClickThrough(r.ad,o),r.adUrl=O.replaceClickThrough(r.adUrl,o)}u.a.addWinningBid(r),I.emit(_,r);var a=r.height,s=r.width,d=r.ad,f=r.mediaType,l=r.adUrl,p=r.renderer,g=document.createComment("Creative ".concat(r.creativeId," served by ").concat(r.bidder," Prebid.js Header Bidding"));if(Object(b.c)(p))Object(b.b)(p,r),O.insertElement(g,e,"html"),X({doc:e,bid:r,id:t});else if(e===document&&!O.inIframe()||"video"===f){var v="Error trying to write ad. Ad render call ad id ".concat(t," was prevented from writing to the main document.");$({reason:k,message:v,bid:r,id:t})}else if(d){if(navigator.userAgent&&navigator.userAgent.toLowerCase().indexOf("firefox/")>-1){var y=/firefox\/([\d\.]+)/,h=navigator.userAgent.toLowerCase().match(y)[1];h&&parseInt(h,10)<67&&e.open("text/html","replace")}e.write(d),e.close(),L(e,s,a),O.insertElement(g,e,"html"),O.callBurl(r),X({doc:e,bid:r,id:t})}else if(l){var m=O.createInvisibleIframe();m.height=a,m.width=s,m.style.display="inline",m.style.overflow="hidden",m.src=l,O.insertElement(m,e,"body"),L(e,s,a),O.insertElement(g,e,"html"),O.callBurl(r),X({doc:e,bid:r,id:t})}else{var S="Error trying to write ad. No ad for bid response id: ".concat(t);$({reason:P,message:S,bid:r,id:t})}}}else{var A="Error trying to write ad. Cannot find ad by given id : ".concat(t);$({reason:q,message:A,id:t})}}catch(e){var T="Error trying to write ad Id :".concat(t," to the page:").concat(e.message);$({reason:M,message:T,id:t})}else{var C="Error trying to write ad Id :".concat(t," to the page. Missing document or adId");$({reason:G,message:C,id:t})}})),A.removeAdUnit=function(e){(O.logInfo("Invoking pbjs.removeAdUnit",arguments),e)?(O.isArray(e)?e:[e]).forEach((function(e){for(var t=A.adUnits.length-1;t>=0;t--)A.adUnits[t].code===e&&A.adUnits.splice(t,1)})):A.adUnits=[]},A.requestBids=Object(d.b)("async",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bidsBackHandler,n=e.timeout,r=e.adUnits,i=e.adUnitCodes,o=e.labels,a=e.auctionId;I.emit(R);var d=n||c.b.getConfig("bidderTimeout");r=r&&c.b.convertAdUnitFpd(O.isArray(r)?r:[r])||A.adUnits,O.logInfo("Invoking pbjs.requestBids",arguments);var f=[],l=[];if(c.b.getConfig("s2sConfig",(function(e){e&&e.s2sConfig&&(f=Array.isArray(e.s2sConfig)?e.s2sConfig:[e.s2sConfig])})),f.forEach((function(e){l.push.apply(l,h(e.bidders))})),r=Y(r),i&&i.length?r=r.filter((function(e){return p()(i,e.code)})):i=r&&r.map((function(e){return e.code})),r.forEach((function(e){var t=Object.keys(e.mediaTypes||{banner:"banner"}),n=e.bids.map((function(e){return e.bidder})),r=T.bidderRegistry,i=l?n.filter((function(e){return!p()(l,e)})):n;e.transactionId=O.generateUUID(),i.forEach((function(n){var i=r[n],o=i&&i.getSpec&&i.getSpec(),a=o&&o.supportedMediaTypes||["banner"];t.some((function(e){return p()(a,e)}))?g.a.incrementBidderRequestsCounter(e.code,n):(O.logWarn(O.unsupportedBidderMessage(e,n)),e.bids=e.bids.filter((function(e){return e.bidder!==n})))})),g.a.incrementRequestsCounter(e.code)})),r&&0!==r.length){var b=u.a.createAuction({adUnits:r,adUnitCodes:i,callback:t,cbTimeout:d,labels:o,auctionId:a}),v=r.length;v>15&&O.logInfo("Current auction ".concat(b.getAuctionId()," contains ").concat(v," adUnits."),r),i.forEach((function(e){return s.d.setLatestAuctionForAdUnit(e,b.getAuctionId())})),b.callBids()}else if(O.logMessage("No adUnits configured. No bids requested."),"function"==typeof t)try{t()}catch(e){O.logError("Error executing bidsBackHandler",null,e)}})),A.requestBids.before(Z,49),A.addAdUnits=function(e){O.logInfo("Invoking pbjs.addAdUnits",arguments),A.adUnits.push.apply(A.adUnits,c.b.convertAdUnitFpd(O.isArray(e)?e:[e])),I.emit(w)},A.onEvent=function(e,t,n){O.logInfo("Invoking pbjs.onEvent",arguments),O.isFn(t)?!n||W[e].call(null,n)?I.on(e,t,n):O.logError('The id provided is not valid for event "'+e+'" and no handler was set.'):O.logError('The event handler provided is not a function and was not set on event "'+e+'".')},A.offEvent=function(e,t,n){O.logInfo("Invoking pbjs.offEvent",arguments),n&&!W[e].call(null,n)||I.off(e,t,n)},A.getEvents=function(){return O.logInfo("Invoking pbjs.getEvents"),I.getEvents()},A.registerBidAdapter=function(e,t){O.logInfo("Invoking pbjs.registerBidAdapter",arguments);try{T.registerBidAdapter(e(),t)}catch(e){O.logError("Error registering bidder adapter : "+e.message)}},A.registerAnalyticsAdapter=function(e){O.logInfo("Invoking pbjs.registerAnalyticsAdapter",arguments);try{T.registerAnalyticsAdapter(e)}catch(e){O.logError("Error registering analytics adapter : "+e.message)}},A.createBid=function(e){return O.logInfo("Invoking pbjs.createBid",arguments),Object(v.a)(e)};var ee=[],te=Object(d.b)("async",(function(e){e&&!O.isEmpty(e)?(O.logInfo("Invoking pbjs.enableAnalytics for: ",e),T.enableAnalytics(e)):O.logError("pbjs.enableAnalytics should be called with option {}")}),"enableAnalyticsCb");function ne(e){e.forEach((function(e){if(void 0===e.called)try{e.call(),e.called=!0}catch(e){O.logError("Error processing command :","prebid.js",e)}}))}A.enableAnalytics=function(e){ee.push(te.bind(this,e))},A.aliasBidder=function(e,t,n){O.logInfo("Invoking pbjs.aliasBidder",arguments),e&&t?T.aliasBidAdapter(e,t,n):O.logError("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},A.getAllWinningBids=function(){return u.a.getAllWinningBids()},A.getAllPrebidWinningBids=function(){return u.a.getBidsReceived().filter((function(e){return e.status===E.BID_STATUS.BID_TARGETING_SET}))},A.getHighestCpmBids=function(e){return s.d.getWinningBids(e)},A.markWinningBidAsUsed=function(e){var t=[];e.adUnitCode&&e.adId?t=u.a.getBidsReceived().filter((function(t){return t.adId===e.adId&&t.adUnitCode===e.adUnitCode})):e.adUnitCode?t=s.d.getWinningBids(e.adUnitCode):e.adId?t=u.a.getBidsReceived().filter((function(t){return t.adId===e.adId})):O.logWarn("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."),t.length>0&&(t[0].status=E.BID_STATUS.RENDERED)},A.getConfig=c.b.getConfig,A.setConfig=c.b.setConfig,A.setBidderConfig=c.b.setBidderConfig,A.que.push((function(){return Object(o.a)()})),A.cmd.push=function(e){if("function"==typeof e)try{e.call()}catch(e){O.logError("Error processing command :",e.message,e.stack)}else O.logError("Commands written into pbjs.cmd.push must be wrapped in a function")},A.que.push=A.cmd.push,A.processQueue=function(){d.b.ready(),ne(A.que),ne(A.cmd)},t.default=A},73:function(e,t,n){var r=n(332);e.exports=r},74:function(e,t,n){"use strict";t.a=function(e,t){o.adServers=o.adServers||{},o.adServers[e]=o.adServers[e]||{},Object.keys(t).forEach((function(n){o.adServers[e][n]?Object(i.logWarn)("Attempting to add an already registered function property ".concat(n," for AdServer ").concat(e,".")):o.adServers[e][n]=t[n]}))};var r=n(16),i=n(0),o=Object(r.a)()},75:function(e,t,n){"use strict";t.a=function(e){var t=e;return{callBids:function(){},setBidderCode:function(e){t=e},getBidderCode:function(){return t}}}},76:function(e,t,n){var r=n(28),i=n(46),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},77:function(e,t,n){var r=n(33),i=n(28),o=n(78);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},78:function(e,t,n){var r=n(25),i=n(29),o=r.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},79:function(e,t,n){var r=n(17),i=n(59);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.15.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"gdprDataHandler",(function(){return U})),n.d(t,"uspDataHandler",(function(){return B})),n.d(t,"coppaDataHandler",(function(){return x})),n.d(t,"clientTestAdapters",(function(){return D})),n.d(t,"allS2SBidders",(function(){return N})),t.getAllS2SBidders=k,t.setS2STestingModule=function(e){A=e};var r=n(0),i=n(95),o=n(36),a=n(1),c=n(4),u=n(3),s=n(10),d=n(12),f=n.n(d),l=n(11),p=n.n(l),g=n(67),b=n(19);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}(e,t)||h(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var A,E=n(0),O=n(5),T=n(9),I={},C=I.bidderRegistry={},j=I.aliasRegistry={},w=[];u.b.getConfig("s2sConfig",(function(e){e&&e.s2sConfig&&(w=Array.isArray(e.s2sConfig)?e.s2sConfig:[e.s2sConfig])}));var _={};var R=Object(s.b)("sync",(function(e){var t=e.bidderCode,n=e.auctionId,a=e.bidderRequestId,c=e.adUnits,u=e.labels,s=e.src;return c.reduce((function(e,c){var d=Object(i.b)(Object(i.a)(c,u),c.mediaTypes,c.sizes),f=d.active,l=d.mediaTypes,p=d.filterResults;return f?p&&E.logInfo('Size mapping filtered adUnit "'.concat(c.code,'" banner sizes from '),p.before,"to ",p.after):E.logInfo('Size mapping disabled adUnit "'.concat(c.code,'"')),f&&e.push(c.bids.filter((function(e){return e.bidder===t})).reduce((function(e,t){var d=c.nativeParams||E.deepAccess(c,"mediaTypes.native");d&&(t=S({},t,{nativeParams:Object(o.h)(d)})),t=S({},t,Object(r.getDefinedParams)(c,["ortb2Imp","mediaType","renderer","storedAuctionResponse"]));var f=Object(i.b)(Object(i.a)(t,u),l),p=f.active,b=f.mediaTypes,v=f.filterResults;return p?v&&E.logInfo('Size mapping filtered adUnit "'.concat(c.code,'" bidder "').concat(t.bidder,'" banner sizes from '),v.before,"to ",v.after):E.logInfo('Size mapping deactivated adUnit "'.concat(c.code,'" bidder "').concat(t.bidder,'"')),E.isValidMediaTypes(b)?t=S({},t,{mediaTypes:b}):E.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)),p&&e.push(S({},t,{adUnitCode:c.code,transactionId:c.transactionId,sizes:E.deepAccess(b,"banner.sizes")||E.deepAccess(b,"video.playerSize")||[],bidId:t.bid_id||E.getUniqueIdentifierStr(),bidderRequestId:a,auctionId:n,src:s,bidRequestsCount:g.a.getRequestsCounter(c.code),bidderRequestsCount:g.a.getBidderRequestsCounter(c.code,t.bidder),bidderWinsCount:g.a.getBidderWinsCounter(c.code,t.bidder)})),e}),[])),e}),[]).reduce(r.flatten,[]).filter((function(e){return""!==e}))}),"getBids");var U={consentData:null,setConsentData:function(e){U.consentData=e},getConsentData:function(){return U.consentData}},B={consentData:null,setConsentData:function(e){B.consentData=e},getConsentData:function(){return B.consentData}},x={getCoppa:function(){return!!u.b.getConfig("coppa")}},D=[],N=[];function k(){I.s2STestingEnabled=!1,w.forEach((function(e){e&&e.enabled&&e.bidders&&e.bidders.length&&N.push.apply(N,y(e.bidders))}))}function P(e){return e&&e.enabled&&e.testing&&A}function M(e,t,n){try{var i=C[e].getSpec();i&&i[t]&&"function"==typeof i[t]&&(E.logInfo("Invoking ".concat(e,".").concat(t)),u.b.runWithBidder(e,r.bind.call(i[t],i,n)))}catch(n){E.logWarn("Error calling ".concat(t," of ").concat(e))}}I.makeBidRequests=Object(s.b)("sync",(function(e,t,n,i,o){T.emit(O.EVENTS.BEFORE_REQUEST_BIDS,e);var a=Object(r.getBidderCodes)(e);u.b.getConfig("bidderSequence")===u.a&&(a=Object(r.shuffle)(a));var c=Object(b.a)(),s=a,d=[];0===N.length&&k(),w.forEach((function(t){t&&t.enabled&&(P(t)&&(A.calculateBidSources(t),A.getSourceBidderMap(e,N)[A.CLIENT].forEach((function(e){f()(D,e)||D.push(e)}))))})),s=a.filter((function(e){return!f()(N,e)||f()(D,e)}));var l=N;w.forEach((function(r){if(r&&r.enabled){(function(e){return Boolean(P(e)&&e.testServerOnly)})(r)&&function(e,t){return Boolean(p()(e,(function(e){return p()(e.bids,(function(e){return(e.bidSource||t.bidderControl&&t.bidderControl[e.bidder])&&e.finalSource===A.SERVER}))})))}(e,r)&&(E.logWarn("testServerOnly: True.  All client requests will be suppressed."),s.length=0);var i=function(e,t){var n=t.bidders,r=E.deepClone(e);return r.forEach((function(e){e.bids=e.bids.filter((function(e){return f()(n,e.bidder)&&(!P(t)||e.finalSource!==A.CLIENT)})).map((function(e){return e.bid_id=E.getUniqueIdentifierStr(),e}))})),r.filter((function(e){return 0!==e.bids.length}))}(e,r),a=E.generateUUID();l.forEach((function(e){var u=E.getUniqueIdentifierStr(),s={bidderCode:e,auctionId:n,bidderRequestId:u,tid:a,bids:R({bidderCode:e,auctionId:n,bidderRequestId:u,adUnits:E.deepClone(i),labels:o,src:O.S2S.SRC}),auctionStart:t,timeout:r.timeout,src:O.S2S.SRC,refererInfo:c};0!==s.bids.length&&d.push(s)})),i.forEach((function(e){var t=e.bids.filter((function(e){return p()(d,(function(t){return p()(t.bids,(function(t){return t.bidId===e.bid_id}))}))}));e.bids=t})),d.forEach((function(e){void 0===e.adUnitsS2SCopy&&(e.adUnitsS2SCopy=i.filter((function(e){return e.bids.length>0})))}))}}));var g=function(e){var t=E.deepClone(e);return t.forEach((function(e){e.bids=e.bids.filter((function(e){return!D.length||e.finalSource!==A.SERVER}))})),t.filter((function(e){return 0!==e.bids.length}))}(e);return s.forEach((function(e){var r=E.getUniqueIdentifierStr(),a={bidderCode:e,auctionId:n,bidderRequestId:r,bids:R({bidderCode:e,auctionId:n,bidderRequestId:r,adUnits:E.deepClone(g),labels:o,src:"client"}),auctionStart:t,timeout:i,refererInfo:c},u=C[e];u||E.logError("Trying to make a request for bidder that does not exist: ".concat(e)),u&&a.bids&&0!==a.bids.length&&d.push(a)})),U.getConsentData()&&d.forEach((function(e){e.gdprConsent=U.getConsentData()})),B.getConsentData()&&d.forEach((function(e){e.uspConsent=B.getConsentData()})),d}),"makeBidRequests"),I.callBids=function(e,t,n,i,o,a,s){if(t.length){var d=v(t.reduce((function(e,t){return e[Number(void 0!==t.src&&t.src===O.S2S.SRC)].push(t),e}),[[],[]]),2),l=d[0],p=d[1],g=[];p.forEach((function(e){for(var t=-1,n=0;n<g.length;++n)if(e.tid===g[n].tid){t=n;break}t<=-1&&g.push(e)}));var b=0;w.forEach((function(e){if(e&&g[b]&&f()(e.bidders,g[b].bidderCode)){var t=Object(c.b)(a,o?{request:o.request.bind(null,"s2s"),done:o.done}:void 0),u=e.bidders,s=C[e.adapter],d=g[b].tid,l=g[b].adUnitsS2SCopy,v=p.filter((function(e){return e.tid===d}));if(s){var y={tid:d,ad_units:l,s2sConfig:e};if(y.ad_units.length){var h=v.map((function(e){return e.start=Object(r.timestamp)(),i.bind(e)})),m=y.ad_units.reduce((function(e,t){return e.concat((t.bids||[]).reduce((function(e,t){return e.concat(t.bidder)}),[]))}),[]);E.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(u.filter((function(e){return f()(m,e)})).join(","))),v.forEach((function(e){T.emit(O.EVENTS.BID_REQUESTED,e)})),s.callBids(y,p,(function(e,t){var i=Object(r.getBidderRequest)(p,t.bidderCode,e);i&&n.call(i,e,t)}),(function(){return h.forEach((function(e){return e()}))}),t)}}else E.logError("missing "+e.adapter);b++}})),l.forEach((function(e){e.start=Object(r.timestamp)();var t=C[e.bidderCode];u.b.runWithBidder(e.bidderCode,(function(){E.logMessage("CALLING BIDDER"),T.emit(O.EVENTS.BID_REQUESTED,e)}));var d=Object(c.b)(a,o?{request:o.request.bind(null,e.bidderCode),done:o.done}:void 0),f=i.bind(e);try{u.b.runWithBidder(e.bidderCode,r.bind.call(t.callBids,t,e,n.bind(e),f,d,s,u.b.callbackWithBidder(e.bidderCode)))}catch(t){E.logError("".concat(e.bidderCode," Bid Adapter emitted an uncaught error when parsing their bidRequest"),{e:t,bidRequest:e}),f()}}))}else E.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")},I.videoAdapters=[],I.registerBidAdapter=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.supportedMediaTypes,i=void 0===r?[]:r;e&&t?"function"==typeof e.callBids?(C[t]=e,f()(i,"video")&&I.videoAdapters.push(t),f()(i,"native")&&o.f.push(t)):E.logError("Bidder adaptor error for bidder code: "+t+"bidder must implement a callBids() function"):E.logError("bidAdapter or bidderCode not specified")},I.aliasBidAdapter=function(e,t,n){if(void 0===C[t]){var r=C[e];if(void 0===r){var i=[];w.forEach((function(n){if(n.bidders&&n.bidders.length){var r=n&&n.bidders;n&&f()(r,t)?j[t]=e:i.push(e)}})),i.forEach((function(e){E.logError('bidderCode "'+e+'" is not an existing bidder.',"adapterManager.aliasBidAdapter")}))}else try{var c,u=function(e){var t=[];return f()(I.videoAdapters,e)&&t.push("video"),f()(o.f,e)&&t.push("native"),t}(e);if(r.constructor.prototype!=Object.prototype)(c=new r.constructor).setBidderCode(t);else{var s=r.getSpec(),d=n&&n.gvlid,l=n&&n.skipPbsAliasing;c=Object(a.newBidder)(S({},s,{code:t,gvlid:d,skipPbsAliasing:l})),j[t]=e}I.registerBidAdapter(c,t,{supportedMediaTypes:u})}catch(t){E.logError(e+" bidder does not currently support aliasing.","adapterManager.aliasBidAdapter")}}else E.logMessage('alias name "'+t+'" has been already specified.')},I.registerAnalyticsAdapter=function(e){var t=e.adapter,n=e.code,r=e.gvlid;t&&n?"function"==typeof t.enableAnalytics?(t.code=n,_[n]={adapter:t,gvlid:r}):E.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n,'"\n        analytics adapter must implement an enableAnalytics() function')):E.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")},I.enableAnalytics=function(e){E.isArray(e)||(e=[e]),E._each(e,(function(e){var t=_[e.provider].adapter;t?t.enableAnalytics(e):E.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider,"."))}))},I.getBidAdapter=function(e){return C[e]},I.getAnalyticsAdapter=function(e){return _[e]},I.callTimedOutBidders=function(e,t,n){t=t.map((function(t){return t.params=E.getUserConfiguredParams(e,t.adUnitCode,t.bidder),t.timeout=n,t})),t=E.groupBy(t,"bidder"),Object.keys(t).forEach((function(e){M(e,"onTimeout",t[e])}))},I.callBidWonBidder=function(e,t,n){t.params=E.getUserConfiguredParams(n,t.adUnitCode,t.bidder),g.a.incrementBidderWinsCounter(t.adUnitCode,t.bidder),M(e,"onBidWon",t)},I.callSetTargetingBidder=function(e,t){M(e,"onSetTargeting",t)},I.callBidViewableBidder=function(e,t){M(e,"onBidViewable",t)},t.default=I},80:function(e,t,n){var r=n(107),i=n(28);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},81:function(e,t,n){var r=n(45),i=n(50),o=n(112),a=function(e){return function(t,n,a){var c,u=r(t),s=i(u.length),d=o(a,s);if(e&&n!=n){for(;s>d;)if((c=u[d++])!=c)return!0}else for(;s>d;d++)if((e||d in u)&&u[d]===n)return e||d||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},82:function(e,t,n){var r=n(113);n(136),n(138),n(140),n(142),n(144),n(145),n(146),n(147),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),e.exports=r},83:function(e,t,n){var r=n(53),i=n(29),o=n(30),a=n(34).f,c=n(60),u=n(116),s=c("meta"),d=0,f=Object.isExtensible||function(){return!0},l=function(e){a(e,s,{value:{objectID:"O"+ ++d,weakData:{}}})},p=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,s)){if(!f(e))return"F";if(!t)return"E";l(e)}return e[s].objectID},getWeakData:function(e,t){if(!o(e,s)){if(!f(e))return!0;if(!t)return!1;l(e)}return e[s].weakData},onFreeze:function(e){return u&&p.REQUIRED&&f(e)&&!o(e,s)&&l(e),e}};r[s]=!0},839:function(e,t,n){e.exports=n(72)},84:function(e,t,n){var r=n(23),i=n(37),o=r("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||a[o]===e)}},85:function(e,t,n){var r=n(15);e.exports=function(e){var t=e.return;if(void 0!==t)return r(t.call(e)).value}},86:function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},87:function(e,t,n){var r,i=n(15),o=n(121),a=n(88),c=n(53),u=n(124),s=n(78),d=n(65),f=d("IE_PROTO"),l=function(){},p=function(e){return"<script>"+e+"</"+"script>"},g=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;g=r?function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t}(r):((t=s("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F);for(var n=a.length;n--;)delete g.prototype[a[n]];return g()};c[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(l.prototype=i(e),n=new l,l.prototype=null,n[f]=e):n=g(),void 0===t?n:o(n,t)}},88:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},89:function(e,t,n){var r=n(31);e.exports=function(e,t,n,i){i&&i.enumerable?e[t]=n:r(e,t,n)}},9:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=n(0),o=n(5),a=Array.prototype.slice,c=Array.prototype.push,u=i._map(o.EVENTS,(function(e){return e})),s=o.EVENT_ID_PATHS,d=[];e.exports=function(){var e={},t={};function n(t,n){i.logMessage("Emitting event for: "+t);var r=n[0]||{},o=r[s[t]],a=e[t]||{que:[]},u=i._map(a,(function(e,t){return t})),f=[];d.push({eventType:t,args:r,id:o,elapsedTime:i.getPerformanceNow()}),o&&i.contains(u,o)&&c.apply(f,a[o].que),c.apply(f,a.que),i._each(f,(function(e){if(e)try{e.apply(null,n)}catch(e){i.logError("Error executing handler:","events.js",e)}}))}return t.on=function(t,n,r){if(function(e){return i.contains(u,e)}(t)){var o=e[t]||{que:[]};r?(o[r]=o[r]||{que:[]},o[r].que.push(n)):o.que.push(n),e[t]=o}else i.logError("Wrong event name : "+t+" Valid event names :"+u)},t.emit=function(e){var t=a.call(arguments,1);n(e,t)},t.off=function(t,n,r){var o=e[t];i.isEmpty(o)||i.isEmpty(o.que)&&i.isEmpty(o[r])||r&&(i.isEmpty(o[r])||i.isEmpty(o[r].que))||(r?i._each(o[r].que,(function(e){var t=o[r].que;e===n&&t.splice(t.indexOf(e),1)})):i._each(o.que,(function(e){var t=o.que;e===n&&t.splice(t.indexOf(e),1)})),e[t]=o)},t.get=function(){return e},t.getEvents=function(){var e=[];return i._each(d,(function(t){var n=r({},t);e.push(n)})),e},t}()},90:function(e,t,n){"use strict";var r,i,o,a=n(28),c=n(91),u=n(31),s=n(30),d=n(23),f=n(17),l=d("iterator"),p=!1;[].keys&&("next"in(o=[].keys())?(i=c(c(o)))!==Object.prototype&&(r=i):p=!0);var g=null==r||a((function(){var e={};return r[l].call(e)!==e}));g&&(r={}),f&&!g||s(r,l)||u(r,l,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},91:function(e,t,n){var r=n(30),i=n(48),o=n(65),a=n(127),c=o("IE_PROTO"),u=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=i(e),r(e,c)?e[c]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},92:function(e,t,n){"use strict";var r=n(132).charAt,i=n(54),o=n(66),a="String Iterator",c=i.set,u=i.getterFor(a);o(String,"String",(function(e){c(this,{type:a,string:String(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},93:function(e,t,n){var r=n(15),i=n(61);e.exports=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},94:function(e,t,n){var r=n(158);e.exports=r},95:function(e,t,n){"use strict";t.a=function(e,t){if(e.labelAll)return{labelAll:!0,labels:e.labelAll,activeLabels:t};return{labelAll:!1,labels:e.labelAny,activeLabels:t}},t.c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,n=s(t);if(!n.shouldFilter)return!0;return!!n.sizesSupported[e]},t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.labels,n=void 0===t?[]:t,r=e.labelAll,o=void 0!==r&&r,c=e.activeLabels,d=void 0===c?[]:c,f=arguments.length>1?arguments[1]:void 0,l=arguments.length>2?arguments[2]:void 0,p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u,g=s(p);f=Object(i.isPlainObject)(f)?Object(i.deepClone)(f):l?{banner:{sizes:l}}:{};var b=Object(i.deepAccess)(f,"banner.sizes");g.shouldFilter&&b&&(f.banner.sizes=b.filter((function(e){return g.sizesSupported[e]})));var v=Object.keys(f),y={active:v.every((function(e){return"banner"!==e}))||v.some((function(e){return"banner"===e}))&&Object(i.deepAccess)(f,"banner.sizes.length")>0&&(0===n.length||!o&&(n.some((function(e){return g.labels[e]}))||n.some((function(e){return a()(d,e)})))||o&&n.reduce((function(e,t){return e?g.labels[t]||a()(d,t):e}),!0)),mediaTypes:f};b&&b.length!==f.banner.sizes.length&&(y.filterResults={before:b,after:f.banner.sizes});return y};var r=n(3),i=n(0),o=n(12),a=n.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=[];function s(e){return e.reduce((function(e,t){if("object"===c(t)&&"string"==typeof t.mediaQuery&&t.mediaQuery.length>0){var n=!1;try{n=Object(i.getWindowTop)().matchMedia(t.mediaQuery).matches}catch(e){Object(i.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"),n=matchMedia(t.mediaQuery).matches}n&&(Array.isArray(t.sizesSupported)&&(e.shouldFilter=!0),["labels","sizesSupported"].forEach((function(n){return(t[n]||[]).forEach((function(t){return e[n][t]=!0}))})))}else Object(i.logWarn)('sizeConfig rule missing required property "mediaQuery"');return e}),{labels:{},sizesSupported:{},shouldFilter:!1})}r.b.getConfig("sizeConfig",(function(e){return function(e){u=e}(e.sizeConfig)}))},96:function(e,t,n){"use strict";t.b=function(e,t,n){var o={puts:e.map(a,n)};Object(r.a)(i.b.getConfig("cache.url"),function(e){return{success:function(t){var n;try{n=JSON.parse(t).responses}catch(t){return void e(t,[])}n?e(null,n):e(new Error("The cache server didn't respond with a responses property."),[])},error:function(t,n){e(new Error("Error storing video ad in the cache: ".concat(t,": ").concat(JSON.stringify(n))),[])}}}(t),JSON.stringify(o),{contentType:"text/plain",withCredentials:!0})},t.a=function(e){return"".concat(i.b.getConfig("cache.url"),"?uuid=").concat(e)};var r=n(4),i=n(3),o=n(0);function a(e){var t,n,r,a={type:"xml",value:e.vastXml?e.vastXml:(t=e.vastUrl,n=e.vastImpUrl,r=n?"<![CDATA[".concat(n,"]]>"):"",'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t,"]]></VASTAdTagURI>\n        <Impression>").concat(r,"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),ttlseconds:Number(e.ttl)};return i.b.getConfig("cache.vasttrack")&&(a.bidder=e.bidder,a.bidid=e.requestId,a.aid=e.auctionId,o.isPlainObject(this)&&this.hasOwnProperty("auctionStart")&&(a.timestamp=this.auctionStart)),"string"==typeof e.customCacheKey&&""!==e.customCacheKey&&(a.key=e.customCacheKey),a}},99:function(e,t,n){n(100);var r=n(52);e.exports=r("Array","find")}});
/* AppNexus             */ pbjsChunk([291],{264:function(e,r,a){e.exports=a(265)},265:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),a.d(r,"spec",(function(){return R}));var t=a(13),n=a(0),i=a(3),s=a(1),o=a(2),d=a(24),p=a(11),c=a.n(p),u=a(12),l=a.n(u),m=a(22),f=a(7);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function b(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return g(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,t=new Array(r);a<r;a++)t[a]=e[a];return t}var h="appnexus",_="https://web.archive.org/web/20211007045442/https://ib.adnxs.com/ut/v3/prebid",k="https://web.archive.org/web/20211007045442/https://ib.adnxs-simple.com/ut/v3/prebid",I=["id","minduration","maxduration","skippable","playback_method","frameworks","context","skipoffset"],A=["minduration","maxduration","skip","skipafter","playbackmethod","api"],w=["age","externalUid","segments","gender","dnt","language"],x=["geo","device_id"],C=["enabled","dongle","member_id","debug_timeout"],S={playback_method:{unknown:0,auto_play_sound_on:1,auto_play_sound_off:2,click_to_play:3,mouse_over:4,auto_play_sound_unknown:5},context:{unknown:0,pre_roll:1,mid_roll:2,post_roll:3,outstream:4,"in-banner":5}},T={body:"description",body2:"desc2",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0}},icon:{serverName:"icon",requiredParams:{required:!0}},sponsoredBy:"sponsored_by",privacyLink:"privacy_link",salePrice:"saleprice",displayUrl:"displayurl"},E=/\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,O=Object(f.b)(32,h),R={code:h,gvlid:32,aliases:[{code:"appnexusAst",gvlid:32},{code:"brealtime"},{code:"emxdigital",gvlid:183},{code:"pagescience"},{code:"defymedia"},{code:"gourmetads"},{code:"matomy"},{code:"featureforward"},{code:"oftmedia"},{code:"districtm",gvlid:144},{code:"adasta"},{code:"beintoo",gvlid:618}],supportedMediaTypes:[o.b,o.d,o.c],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.member&&e.params.invCode)},buildRequests:function(e,r){var a=e.map(q),t=c()(e,M),s={};!0===i.b.getConfig("coppa")&&(s={coppa:!0}),t&&Object.keys(t.params.user).filter((function(e){return l()(w,e)})).forEach((function(e){var r=n.convertCamelToUnderscore(e);if("segments"===e&&n.isArray(t.params.user[e])){var a=[];t.params.user[e].forEach((function(e){n.isNumber(e)?a.push({id:e}):n.isPlainObject(e)&&a.push(e)})),s[r]=a}else"segments"!==e&&(s[r]=t.params.user[e])}));var o,d=c()(e,B);d&&d.params&&d.params.app&&(o={},Object.keys(d.params.app).filter((function(e){return l()(x,e)})).forEach((function(e){return o[e]=d.params.app[e]})));var p,u=c()(e,F);u&&u.params&&d.params.app&&d.params.app.id&&(p={appid:u.params.app.id});var m={},f={},v=O.getCookie("apn_prebid_debug")||null;if(v)try{m=JSON.parse(v)}catch(e){n.logError("AppNexus Debug Auction Cookie Error:\n\n"+e)}else{var y=c()(e,V);y&&y.debug&&(m=y.debug)}m&&m.enabled&&Object.keys(m).filter((function(e){return l()(C,e)})).forEach((function(e){f[e]=m[e]}));var g=c()(e,D),h=g?parseInt(g.params.member,10):0,I=e[0].schain,A=c()(e,W),S={tags:b(a),user:s,sdk:{source:"pbjs",version:"5.8.0"},schain:I};if(A&&(S.iab_support={omidpn:"Appnexus",omidpv:"5.8.0"}),h>0&&(S.member_id=h),d&&(S.device=o),u&&(S.app=p),i.b.getConfig("adpod.brandCategoryExclusion")&&(S.brand_category_uniqueness=!0),f.enabled&&(S.debug=f,n.logInfo("AppNexus Debug Auction Settings:\n\n"+JSON.stringify(f,null,4))),r&&r.gdprConsent&&(S.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies},r.gdprConsent.addtlConsent&&-1!==r.gdprConsent.addtlConsent.indexOf("~"))){var T=r.gdprConsent.addtlConsent,E=T.substring(T.indexOf("~")+1);S.gdpr_consent.addtl_consent=E.split(".").map((function(e){return parseInt(e,10)}))}if(r&&r.uspConsent&&(S.us_privacy=r.uspConsent),r&&r.refererInfo){var R={rd_ref:encodeURIComponent(r.refererInfo.referer),rd_top:r.refererInfo.reachedTop,rd_ifs:r.refererInfo.numIframes,rd_stk:r.refererInfo.stack.map((function(e){return encodeURIComponent(e)})).join(",")};S.referrer_detection=R}if(c()(e,J)&&e.filter(J).forEach((function(e){var r=function(e,r){var a=r.mediaTypes.video,t=a.durationRangeSec,i=a.requireExactDuration,s=function(e){var r=e.adPodDurationSec,a=e.durationRangeSec,t=e.requireExactDuration,i=n.getMinValueFromArray(a),s=Math.floor(r/i);return t?Math.max(s,a.length):s}(r.mediaTypes.video),o=n.getMaxValueFromArray(t),d=e.filter((function(e){return e.uuid===r.bidId})),p=n.fill.apply(n,b(d).concat([s]));if(i){var c=Math.ceil(s/t.length),u=n.chunk(p,c);t.forEach((function(e,r){u[r].map((function(r){H(r,"minduration",e),H(r,"maxduration",e)}))}))}else p.map((function(e){return H(e,"maxduration",o)}));return p}(a,e),t=S.tags.filter((function(r){return r.uuid!==e.bidId}));S.tags=[].concat(b(t),b(r))})),e[0].userId){var j=[];K(j,n.deepAccess(e[0],"userId.flocId.id"),"chrome.com",null),K(j,n.deepAccess(e[0],"userId.criteoId"),"criteo.com",null),K(j,n.deepAccess(e[0],"userId.netId"),"netid.de",null),K(j,n.deepAccess(e[0],"userId.idl_env"),"liveramp.com",null),K(j,n.deepAccess(e[0],"userId.tdid"),"adserver.org","TDID"),K(j,n.deepAccess(e[0],"userId.uid2.id"),"uidapi.com","UID2"),j.length&&(S.eids=j)}return a[0].publisher_id&&(S.publisher_id=a[0].publisher_id),function(e,r){var a=[],t={withCredentials:!0},s=_;N(r)||(s=k);"TRUE"!==n.getParameterByName("apn_test").toUpperCase()&&!0!==i.b.getConfig("apn_test")||(t.customHeaders={"X-Is-Test":1});if(e.tags.length>15){var o=n.deepClone(e);n.chunk(e.tags,15).forEach((function(e){o.tags=e;var n=JSON.stringify(o);a.push({method:"POST",url:s,data:n,bidderRequest:r,options:t})}))}else{var d=JSON.stringify(e);a={method:"POST",url:s,data:d,bidderRequest:r,options:t}}return a}(S,r)},interpretResponse:function(e,r){var a=this,i=r.bidderRequest;e=e.body;var d=[];if(!e||e.error){var p="in response for ".concat(i.bidderCode," adapter");return e&&e.error&&(p+=": ".concat(e.error)),n.logError(p),d}if(e.tags&&e.tags.forEach((function(e){var r,p=(r=e)&&r.ads&&r.ads.length&&c()(r.ads,(function(e){return e.rtb}));if(p&&0!==p.cpm&&l()(a.supportedMediaTypes,p.ad_type)){var u=function(e,r,a){var i=n.getBidRequest(e.uuid,[a]),d={requestId:e.uuid,cpm:r.cpm,creativeId:r.creative_id,dealId:r.deal_id,currency:"USD",netRevenue:!0,ttl:300,adUnitCode:i.adUnitCode,appnexus:{buyerMemberId:r.buyer_member_id,dealPriority:r.deal_priority,dealCode:r.deal_code}};r.adomain&&(d.meta=y({},d.meta,{advertiserDomains:[]}));r.advertiser_id&&(d.meta=y({},d.meta,{advertiserId:r.advertiser_id}));if(r.rtb.video){switch(y(d,{width:r.rtb.video.player_width,height:r.rtb.video.player_height,vastImpUrl:r.notify_url,ttl:3600}),n.deepAccess(i,"mediaTypes.video.context")){case o.a:var p=Object(s.getIabSubCategory)(i.bidder,r.brand_category_id);d.meta=y({},d.meta,{primaryCatId:p});var u=r.deal_priority;d.video={context:o.a,durationSeconds:Math.floor(r.rtb.video.duration_ms/1e3),dealTier:u},d.vastUrl=r.rtb.video.asset_url;break;case m.b:if(d.adResponse=e,d.adResponse.ad=d.adResponse.ads[0],d.adResponse.ad.video=d.adResponse.ad.rtb.video,d.vastXml=r.rtb.video.content,r.renderer_url){var l=c()(a.bids,(function(r){return r.bidId===e.uuid})),f=n.deepAccess(l,"renderer.options");d.renderer=function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.a.install({id:r.renderer_id,url:r.renderer_url,config:a,loaded:!1,adUnitCode:e});try{i.setRender(L)}catch(e){n.logWarn("Prebid Error calling setRender on renderer",e)}return i.setEventHandlers({impression:function(){return n.logMessage("AppNexus outstream video impression event")},loaded:function(){return n.logMessage("AppNexus outstream video loaded event")},ended:function(){n.logMessage("AppNexus outstream renderer video event"),document.querySelector("#".concat(e)).style.display="none"}}),i}(d.adUnitCode,r,f)}break;case m.a:d.vastUrl=r.notify_url+"&redir="+encodeURIComponent(r.rtb.video.asset_url)}}else if(r.rtb[o.c]){var v=r.rtb[o.c],b=r.viewability.config.replace("src=","data-src="),g=v.javascript_trackers;null==g?g=b:n.isStr(g)?g=[g,b]:g.push(b),d[o.c]={title:v.title,body:v.desc,body2:v.desc2,cta:v.ctatext,rating:v.rating,sponsoredBy:v.sponsored,privacyLink:v.privacy_link,address:v.address,downloads:v.downloads,likes:v.likes,phone:v.phone,price:v.price,salePrice:v.saleprice,clickUrl:v.link.url,displayUrl:v.displayurl,clickTrackers:v.link.click_trackers,impressionTrackers:v.impression_trackers,javascriptTrackers:g},v.main_img&&(d.native.image={url:v.main_img.url,height:v.main_img.height,width:v.main_img.width}),v.icon&&(d.native.icon={url:v.icon.url,height:v.icon.height,width:v.icon.width})}else{y(d,{width:r.rtb.banner.width,height:r.rtb.banner.height,ad:r.rtb.banner.content});try{if(r.rtb.trackers){var h=r.rtb.trackers[0].impression_urls[0],_=n.createTrackPixelHtml(h);d.ad+=_}}catch(e){n.logError("Error appending tracking pixel",e)}}return d}(e,p,i);u.mediaType=function(e){var r=e.ad_type;return r===o.d?o.d:r===o.c?o.c:o.b}(p),d.push(u)}})),e.debug&&e.debug.debug_info){var u="AppNexus Debug Auction for Prebid\n\n"+e.debug.debug_info;u=u.replace(/(<td>|<th>)/gm,"\t").replace(/(<\/td>|<\/th>)/gm,"\n").replace(/^<br>/gm,"").replace(/(<br>\n|<br>)/gm,"\n").replace(/<h1>(.*)<\/h1>/gm,"\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm,"\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim,""),n.logMessage("https://web.archive.org/web/20211007045442/https://console.appnexus.com/docs/understanding-the-debug-auction"),n.logMessage(u)}return d},getMappingFileInfo:function(){return{url:"https://web.archive.org/web/20211007045442/https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json",refreshInDays:2}},getUserSyncs:function(e,r,a){if(e.iframeEnabled&&N({gdprConsent:a}))return[{type:"iframe",url:"https://web.archive.org/web/20211007045442/https://acdn.adnxs.com/dmp/async_usersync.html"}]},transformBidParams:function(e,r){return e=n.convertTypes({member:"string",invCode:"string",placementId:"number",keywords:n.transformBidderParamKeywords,publisherId:"number"},e),r&&(e.use_pmt_rule="boolean"==typeof e.usePaymentRule&&e.usePaymentRule,e.usePaymentRule&&delete e.usePaymentRule,j(e.keywords)&&e.keywords.forEach(P),Object.keys(e).forEach((function(r){var a=n.convertCamelToUnderscore(r);a!==r&&(e[a]=e[r],delete e[r])}))),e},onBidWon:function(e){e.native&&function(e){var r=function(e){var r;if(n.isStr(e)&&U(e))r=e;else if(n.isArray(e))for(var a=0;a<e.length;a++){var t=e[a];U(t)&&(r=t)}return r}(e.native.javascriptTrackers);if(r)for(var a="pbjs_adid="+e.adId+";pbjs_auc="+e.adUnitCode,t=function(e){var r=e.indexOf('src="')+5,a=e.indexOf('"',r);return e.substring(r,a)}(r),i=t.replace("dom_id=%native_dom_id%",a),s=document.getElementsByTagName("iframe"),o=!1,d=0;d<s.length&&!o;d++){var p=s[d];try{var c=p.contentDocument||p.contentWindow.document;if(c)for(var u=c.getElementsByTagName("script"),l=0;l<u.length&&!o;l++){var m=u[l];m.getAttribute("data-src")==t&&(m.setAttribute("src",i),m.setAttribute("data-src",""),m.removeAttribute&&m.removeAttribute("data-src"),o=!0)}}catch(e){if(!(e instanceof DOMException&&"SecurityError"===e.name))throw e}}}(e)}};function j(e){return!!(n.isArray(e)&&e.length>0)}function P(e){j(e.value)&&""===e.value[0]&&delete e.value}function U(e){var r=e.match(E),a=null!=r&&r.length>=1,t=e.match("trk.js"),n=null!=t&&t.length>=1;return e.startsWith("<script")&&n&&a}function N(e){var r=!0;return e&&e.gdprConsent&&e.gdprConsent.gdprApplies&&2===e.gdprConsent.apiVersion&&(r=!(!0!==n.deepAccess(e.gdprConsent,"vendorData.purpose.consents.1"))),r}function q(e){var r={};r.sizes=z(e.sizes),r.primary_size=r.sizes[0],r.ad_types=[],r.uuid=e.bidId,e.params.placementId?r.id=parseInt(e.params.placementId,10):r.code=e.params.invCode,r.allow_smaller_sizes=e.params.allowSmallerSizes||!1,r.use_pmt_rule=e.params.usePaymentRule||!1,r.prebid=!0,r.disable_psa=!0;var a=function(e){if(!n.isFn(e.getFloor))return e.params.reserve?e.params.reserve:null;var r=e.getFloor({currency:"USD",mediaType:"*",size:"*"});if(n.isPlainObject(r)&&!isNaN(r.floor)&&"USD"===r.currency)return r.floor;return null}(e);if(a&&(r.reserve=a),e.params.position&&(r.position={above:1,below:2}[e.params.position]||0),e.params.trafficSourceCode&&(r.traffic_source_code=e.params.trafficSourceCode),e.params.privateSizes&&(r.private_sizes=z(e.params.privateSizes)),e.params.supplyType&&(r.supply_type=e.params.supplyType),e.params.pubClick&&(r.pubclick=e.params.pubClick),e.params.extInvCode&&(r.ext_inv_code=e.params.extInvCode),e.params.publisherId&&(r.publisher_id=parseInt(e.params.publisherId,10)),e.params.externalImpId&&(r.external_imp_id=e.params.externalImpId),!n.isEmpty(e.params.keywords)){var t=n.transformBidderParamKeywords(e.params.keywords);t.length>0&&t.forEach(P),r.keywords=t}var i,s,p=n.deepAccess(e,"ortb2Imp.ext.data.pbadslot");if(p&&(r.gpid=p),(e.mediaType===o.c||n.deepAccess(e,"mediaTypes.".concat(o.c)))&&(r.ad_types.push(o.c),0===r.sizes.length&&(r.sizes=z([1,1])),e.nativeParams)){var u=(i=e.nativeParams,s={},Object.keys(i).forEach((function(e){var r=T[e]&&T[e].serverName||T[e]||e,a=T[e]&&T[e].requiredParams;if(s[r]=y({},a,i[e]),(r===T.image.serverName||r===T.icon.serverName)&&s[r].sizes){var t=s[r].sizes;(n.isArrayOfNums(t)||n.isArray(t)&&t.length>0&&t.every((function(e){return n.isArrayOfNums(e)})))&&(s[r].sizes=z(s[r].sizes))}r===T.privacyLink&&(s.privacy_supported=!0)})),s);r[o.c]={layouts:[u]}}var m=n.deepAccess(e,"mediaTypes.".concat(o.d)),f=n.deepAccess(e,"mediaTypes.video.context");r.hb_source=m&&"adpod"===f?7:1,(e.mediaType===o.d||m)&&r.ad_types.push(o.d),(e.mediaType===o.d||m&&"outstream"!==f)&&(r.require_asset_url=!0),e.params.video&&(r.video={},Object.keys(e.params.video).filter((function(e){return l()(I,e)})).forEach((function(a){switch(a){case"context":case"playback_method":var t=e.params.video[a];t=n.isArray(t)?t[0]:t,r.video[a]=S[a][t];break;case"frameworks":break;default:r.video[a]=e.params.video[a]}})),e.params.video.frameworks&&n.isArray(e.params.video.frameworks)&&(r.video_frameworks=e.params.video.frameworks)),m&&(r.video=r.video||{},Object.keys(m).filter((function(e){return l()(A,e)})).forEach((function(e){switch(e){case"minduration":case"maxduration":"number"!=typeof r.video[e]&&(r.video[e]=m[e]);break;case"skip":"boolean"!=typeof r.video.skippable&&(r.video.skippable=1===m[e]);break;case"skipafter":"number"!=typeof r.video.skipoffset&&(r.video.skippoffset=m[e]);break;case"playbackmethod":if("number"!=typeof r.video.playback_method){var a=m[e];(a=n.isArray(a)?a[0]:a)>=1&&a<=4&&(r.video.playback_method=a)}break;case"api":if(!r.video_frameworks&&n.isArray(m[e])){var t=m[e].map((function(e){var r=4===e?5:5===e?4:e;if(r>=1&&r<=5)return r})).filter((function(e){return e}));r.video_frameworks=t}}}))),e.renderer&&(r.video=y({},r.video,{custom_renderer_present:!0})),e.params.frameworks&&n.isArray(e.params.frameworks)&&(r.banner_frameworks=e.params.frameworks);var v=c()(d.a.getAdUnits(),(function(r){return e.transactionId===r.transactionId}));return v&&v.mediaTypes&&v.mediaTypes.banner&&r.ad_types.push(o.b),0===r.ad_types.length&&delete r.ad_types,r}function z(e){var r=[],a={};if(n.isArray(e)&&2===e.length&&!n.isArray(e[0]))a.width=parseInt(e[0],10),a.height=parseInt(e[1],10),r.push(a);else if("object"===v(e))for(var t=0;t<e.length;t++){var i=e[t];(a={}).width=parseInt(i[0],10),a.height=parseInt(i[1],10),r.push(a)}return r}function M(e){return!!e.params.user}function D(e){return!!parseInt(e.params.member,10)}function B(e){if(e.params)return!!e.params.app}function F(e){return e.params&&e.params.app?!!e.params.app.id:!!e.params.app}function V(e){return!!e.debug}function J(e){return e.mediaTypes&&e.mediaTypes.video&&e.mediaTypes.video.context===o.a}function W(e){var r=!1,a=e.params,t=e.params.video;return a.frameworks&&n.isArray(a.frameworks)&&(r=l()(e.params.frameworks,6)),!r&&t&&t.frameworks&&n.isArray(t.frameworks)&&(r=l()(e.params.video.frameworks,6)),r}function H(e,r,a){n.isEmpty(e.video)&&(e.video={}),e.video[r]=a}function L(e){var r,a;r=e.adUnitCode,(a=document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0]&&a[0].style.setProperty("display","none"),function(e){try{var r=document.getElementById(e).querySelectorAll("script[id^='sas_script']");r[0].nextSibling&&"iframe"===r[0].nextSibling.localName&&r[0].nextSibling.style.setProperty("display","none")}catch(e){}}(e.adUnitCode),e.renderer.push((function(){window.ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},$.bind(null,e))}))}function $(e,r,a){e.renderer.handleVideoEvent({id:r,eventName:a})}function K(e,r,a,t){return r&&(t?e.push({source:a,id:r,rti_partner:t}):e.push({source:a,id:r})),e}Object(s.registerBidder)(R)}},[264]);
/* BrowsiRTDProvider    */ pbjsChunk([273],{304:function(t,e,r){t.exports=r(305)},305:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addBrowsiTag=y,e.collectData=m,e.setData=O,e.isIdMatchingAdUnit=h,e.getMacroId=j,r.d(e,"browsiSubmodule",(function(){return v}));var n=r(0),o=r(10),a=r(4),i=r(40),c=r(7),u=r(11),s=r.n(u);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=Object(c.b)(),f={},g=null;function y(t){var e=Object(i.a)(t.u,"browsi");return e.async=!0,e.setAttribute("data-sitekey",f.siteKey),e.setAttribute("data-pubkey",f.pubKey),e.setAttribute("prebidbpt","true"),e.setAttribute("id","browsi-tag"),e.setAttribute("src",t.u),e.prebidData=n.deepClone(t),f.keyName&&(e.prebidData.kn=f.keyName),e}function m(){var t=window.top,e=t.document,r=null;try{r=d.getDataFromLocalStorage("__brtd")}catch(t){n.logError("unable to parse __brtd")}var o,i,c=p(p(p(p({},{sk:f.siteKey,sw:t.screen&&t.screen.width||-1,sh:t.screen&&t.screen.height||-1,url:"".concat(e.location.protocol,"//").concat(e.location.host).concat(e.location.pathname)}),r?{us:r}:{us:"{}"}),document.referrer?{r:document.referrer}:{}),document.title?{at:document.title}:{});o="//".concat(f.url,"/prebid?").concat((i=c,Object.keys(i).map((function(t){return t+"="+encodeURIComponent(i[t])})).join("&"))),Object(a.b)()(o,{success:function(t,e){if(200===e.status)try{var r=JSON.parse(t);r&&r.p&&r.kn?O({p:r.p,kn:r.kn,pmd:r.pmd}):O({}),y(r)}catch(t){n.logError("unable to parse data"),O({})}else 204===e.status&&O({})},error:function(){O({}),n.logError("unable to get prediction data")}})}function O(t){g=t}function w(t,e){var r=t<0?"NA":(Math.floor(10*t)/10).toFixed(2),n={};return n[(f.keyName||e||"browsiViewability").toString()]=r.toString(),n}function h(t,e){if(!e||!e.length||!t)return!0;var r=t.getAdUnitPath();return-1!==e.indexOf(r)}function j(t,e){if(t)try{return function(t,e,r,n){var o=t.p.replace(/['"]+/g,"").replace(/<DIV_ID>/g,e);r&&(o=o.replace(/<AD_UNIT>/g,r));n&&(o=o.replace(/<KEY_(\w+)>/g,n));t.s&&(o=o.substring(t.s.s,t.s.e));return o}(t,e.getSlotElementId(),e.getAdUnitPath(),(function(t,r){return r&&e.getTargeting(r).join("_")||"NA"}))}catch(e){n.logError("failed to evaluate: ".concat(t))}return e.getSlotElementId()}var v={name:"browsi",getTargetingData:function(t){try{var e=g&&g.p||{};return t.reduce((function(t,r){if(!r)return t;var o=function(t){var e=n.isGptPubadsDefined()&&window.googletag.pubads().getSlots();if(!e||!e.length)return null;return s()(e,(function(e){return e.getSlotElementId()===t||e.getAdUnitPath()===t}))||null}(r),a=o?j(g.pmd,o):r,i=e[a];if(t[r]=w(-1,g.kn),!i)return t;if(i.p){if(!h(o,i.w))return t;t[r]=w(i.p,g.kn)}return t}),{})}catch(t){return{}}},init:function(t){(f=t.params)&&f.siteKey&&f.pubKey&&f.url?m():n.logError("missing params for Browsi provider");return!0}};Object(o.e)("realTimeData",v)}},[304]);
/* Concert              */ pbjsChunk([263],{326:function(e,t,n){e.exports=n(327)},327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"spec",(function(){return i}));var r=n(0),o=n(1),s=n(7);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i={code:"concert",isBidRequestValid:function(e){return!!e.params.partnerId||(r.logWarn("Missing partnerId bid parameter"),!1)},buildRequests:function(e,t){r.logMessage(e),r.logMessage(t);var n={meta:{prebidVersion:"5.8.0",pageUrl:t.refererInfo.referer,screen:[window.screen.width,window.screen.height].join("x"),debug:r.debugTurnedOn(),uid:c(t),optedOut:u(),adapterVersion:"1.1.1",uspConsent:t.uspConsent,gdprConsent:t.gdprConsent}};return n.slots=e.map((function(e){return{name:e.adUnitCode,bidId:e.bidId,transactionId:e.transactionId,sizes:e.params.sizes||e.sizes,partnerId:e.params.partnerId,slotType:e.params.slotType,adSlot:e.params.slot||e.adUnitCode,placementId:e.params.placementId||"",site:e.params.site||t.refererInfo.referer}})),r.logMessage(n),{method:"POST",url:"".concat("https://web.archive.org/web/20211007045442/https://bids.concert.io","/bids/prebid"),data:JSON.stringify(n)}},interpretResponse:function(e,t){r.logMessage(e),r.logMessage(t);var n=e.body;if(!n||"object"!==a(n))return[];var o;return o=n.bids.map((function(e){return{requestId:e.bidId,cpm:e.cpm,width:e.width,height:e.height,ad:e.ad,ttl:e.ttl,meta:{advertiserDomains:e&&e.adomain?e.adomain:[]},creativeId:e.creativeId,netRevenue:e.netRevenue,currency:e.currency}})),r.debugTurnedOn()&&n.debug&&r.logMessage("CONCERT",n.debug),r.logMessage(o),o},getUserSyncs:function(e,t,n,r){var o=[];if(e.iframeEnabled&&!u()){var s=[];n&&"boolean"==typeof n.gdprApplies&&s.push("gdpr_applies=".concat(n.gdprApplies?"1":"0")),n&&"string"==typeof n.consentString&&s.push("gdpr_consent=".concat(n.consentString)),r&&"string"==typeof r&&s.push("usp_consent=".concat(r)),o.push({type:"iframe",url:"https://web.archive.org/web/20211007045442/https://cdn.concert.io/lib/bids/sync.html"+(s.length>0?"?".concat(s.join("&")):"")})}return o},onTimeout:function(e){r.logMessage("concert bidder timed out"),r.logMessage(e)},onBidWon:function(e){r.logMessage("concert bidder won bid"),r.logMessage(e)}};Object(o.registerBidder)(i);var d=Object(s.b)();function c(e){if(u()||!function(e){return!("string"===e.uspConsent&&"1YY"===e.uspConsent.toUpperCase().substring(0,2))}(e))return!1;var t="c_uid",n=d.getDataFromLocalStorage(t);return n||(n=r.generateUUID(),d.setDataInLocalStorage(t,n)),n}function u(){return"true"===d.getDataFromLocalStorage("c_nap")}}},[326]);
/* ConsentManagement    */ pbjsChunk([262],{330:function(n,t,e){n.exports=e(331)},331:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"allowAuction",(function(){return v})),e.d(t,"userCMP",(function(){return f})),e.d(t,"consentTimeout",(function(){return p})),e.d(t,"gdprScope",(function(){return g})),e.d(t,"staticConsentData",(function(){return m})),t.requestBidsHook=D,t.resetConsentData=function(){C=void 0,f=void 0,b=0,i.gdprDataHandler.setConsentData(null)},t.setConsentConfig=I;var o=e(0),a=e(3),i=e(8),r=e(12),s=e.n(r),c=e(73),d=e.n(c);function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var f,p,g,m,C,v={value:true,definedInConfig:!1},b=0,y=!1,w={iab:function(n,t,e){function a(a,i){o.logInfo("Received a response from CMP",a),i?!1!==a.gdprApplies&&"tcloaded"!==a.eventStatus&&"useractioncomplete"!==a.eventStatus||n(a,e):t("CMP unable to register callback function.  Please check CMP setup.",e)}var i=function(){var t={};function a(){t.getConsentData&&t.getVendorConsents&&(o.logInfo("Received all requested responses from CMP",t),n(t,e))}return{consentDataCallback:function(n){t.getConsentData=n,a()},vendorConsentsCallback:function(n){t.getVendorConsents=n,a()}}}(),r={},s=function(){for(var n,t,e=window;!n;){try{if("function"==typeof e.__tcfapi||"function"==typeof e.__cmp){"function"==typeof e.__tcfapi?(b=2,t=e.__tcfapi):(b=1,t=e.__cmp),n=e;break}}catch(n){}try{if(e.frames.__tcfapiLocator){b=2,n=e;break}}catch(n){}try{if(e.frames.__cmpLocator){b=1,n=e;break}}catch(n){}if(e===window.top)break;e=e.parent}return{cmpFrame:n,cmpFunction:t}}(),c=s.cmpFrame,l=s.cmpFunction;if(!c)return t("CMP not found.",e);o.isFn(l)?(o.logInfo("Detected CMP API is directly accessible, calling it now..."),1===b?(l("getConsentData",null,i.consentDataCallback),l("getVendorConsents",null,i.vendorConsentsCallback)):2===b&&l("addEventListener",b,a)):1===b&&window.$sf&&window.$sf.ext&&"function"==typeof window.$sf.ext.cmp?(o.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."),f("getConsentData",i.consentDataCallback),f("getVendorConsents",i.vendorConsentsCallback)):(o.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."),1===b?(p("getConsentData",c,i.consentDataCallback),p("getVendorConsents",c,i.vendorConsentsCallback)):2===b&&p("addEventListener",c,a));function f(n,t){var a=e.adUnits,i=1,r=1;if(Array.isArray(a)&&a.length>0){var s=o.getAdUnitSizes(a[0]);i=s[0][0],r=s[0][1]}window.$sf.ext.register(i,r,(function(e,o){if("cmpReturn"===e){var a="getConsentData"===n?o.vendorConsentData:o.vendorConsents;t(a)}})),window.$sf.ext.cmp(n)}function p(n,t,e){var o=2===b?"__tcfapi":"__cmp",a="".concat(o,"Call");function i(n){var t="".concat(o,"Return"),e="string"==typeof n.data&&d()(n.data,t)?JSON.parse(n.data):n.data;if(e[t]&&e[t].callId){var a=e[t];void 0!==r[a.callId]&&r[a.callId](a.returnValue,a.success)}}2===b?(window[o]=function(n,e,o,i){var s=Math.random()+"",c=u({},a,{command:n,version:e,parameter:i,callId:s});r[s]=o,t.postMessage(c,"*")},window.addEventListener("message",i,!1),window[o](n,b,e)):(window[o]=function(n,e,o){var i=Math.random()+"",s=u({},a,{command:n,parameter:e,callId:i});r[i]=o,t.postMessage(s,"*")},window.addEventListener("message",i,!1),window[o](n,void 0,e))}},static:function(n,t,e){n(m,e)}};function D(n,t){var e={context:this,args:[t],nextFn:n,adUnits:t.adUnits||pbjs.adUnits,bidsBackHandler:t.bidsBackHandler,haveExited:!1,timer:null};return C?(o.logInfo("User consent information already known.  Pulling internally stored information..."),P(null,e)):s()(Object.keys(w),f)?(w[f].call(this,k,h,e),void(e.haveExited||(0===p?k(void 0,e):e.timer=setTimeout(M.bind(null,e),p)))):(o.logWarn("CMP framework (".concat(f,") is not a supported framework.  Aborting consentManagement module and resuming auction.")),e.nextFn.apply(e.context,e.args))}function k(n,t){"static"===f&&2===(b=n.getConsentData?1:n.getTCData?2:0)&&(n=n.getTCData);var e=1===b?function(n){var t=n&&n.getConsentData&&n.getConsentData.gdprApplies;return!("boolean"==typeof t&&(!0!==t||o.isStr(n.getConsentData.consentData)&&o.isPlainObject(n.getVendorConsents)&&Object.keys(n.getVendorConsents).length>1))}:2===b?function(){var t=n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:g,e=n&&n.tcString;return!("boolean"==typeof t&&(!0!==t||o.isStr(e)))}:null;v.definedInConfig&&2===b?o.logWarn("'allowAuctionWithoutConsent' ignored for TCF 2"):v.definedInConfig||1!==b||o.logInfo("'allowAuctionWithoutConsent' using system default: (".concat(true,").")),o.isFn(e)?e(n)?h("CMP returned unexpected value during lookup process.",t,n):(clearTimeout(t.timer),A(n),P(null,t)):h("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.",t,n)}function M(n){h("CMP workflow exceeded timeout threshold.",n)}function h(n,t,e){clearTimeout(t.timer),v.value&&1===b&&A(void 0),P(n,t,e)}function A(n){1===b?C={consentString:n?n.getConsentData.consentData:void 0,vendorData:n?n.getVendorConsents:void 0,gdprApplies:n?n.getConsentData.gdprApplies:g}:(C={consentString:n?n.tcString:void 0,vendorData:n||void 0,gdprApplies:n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:g},n&&n.addtlConsent&&o.isStr(n.addtlConsent)&&(C.addtlConsent=n.addtlConsent)),C.apiVersion=b,i.gdprDataHandler.setConsentData(C)}function P(n,t,e){if(!1===t.haveExited){t.haveExited=!0;var a=t.context,i=t.args,r=t.nextFn;n?v.value&&1===b?(o.logWarn(n+" 'allowAuctionWithoutConsent' activated.",e),r.apply(a,i)):(o.logError(n+" Canceling auction as per consentManagement config.",e),"function"==typeof t.bidsBackHandler?t.bidsBackHandler():o.logError("Error executing bidsBackHandler")):r.apply(a,i)}}function I(n){(n=n&&(n.gdpr||n.usp?n.gdpr:n))&&"object"===l(n)?(o.isStr(n.cmpApi)?f=n.cmpApi:(f="iab",o.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat("iab",")."))),o.isNumber(n.timeout)?p=n.timeout:(p=1e4,o.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4,")."))),"boolean"==typeof n.allowAuctionWithoutConsent&&(v.value=n.allowAuctionWithoutConsent,v.definedInConfig=!0),g=!0===n.defaultGdprScope,o.logInfo("consentManagement module has been activated..."),"static"===f&&(o.isPlainObject(n.consentData)?(m=n.consentData,p=0):o.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),y||pbjs.requestBids.before(D,50),y=!0):o.logWarn("consentManagement config not defined, exiting consent manager")}a.b.getConfig("consentManagement",(function(n){return I(n.consentManagement)}))}},[330]);
/* Consent USP          */ pbjsChunk([261],{337:function(t,n,e){t.exports=e(338)},338:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"consentAPI",(function(){return c})),e.d(n,"consentTimeout",(function(){return r})),e.d(n,"staticConsentData",(function(){return u})),n.requestBidsHook=f,n.resetConsentData=function(){l=void 0,c=void 0,i.uspDataHandler.setConsentData(null)},n.setConsentConfig=P;var a=e(0),o=e(3),i=e(8);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c,r,u,l,d=!1,p={iab:function(t,n,e){var o=(u={},{consentDataCallback:function(a,o){o&&a.uspString&&(u.usPrivacy=a.uspString),u.usPrivacy?t(u,e):n("Unable to get USP consent string.",e)}}),i={},s=function(){for(var t,n,e=window;!t;){try{if("function"==typeof e.__uspapi){n=e.__uspapi,t=e;break}}catch(t){}try{if(e.frames.__uspapiLocator){t=e;break}}catch(t){}if(e===window.top)break;e=e.parent}return{uspapiFrame:t,uspapiFunction:n}}(),c=s.uspapiFrame,r=s.uspapiFunction;var u;if(!c)return n("USP CMP not found.",e);a.isFn(r)?(a.logInfo("Detected USP CMP is directly accessible, calling it now..."),r("getUSPData",1,o.consentDataCallback)):(a.logInfo("Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now..."),function(t,n,e){function a(t){var n=t&&t.data&&t.data.__uspapiReturn;n&&n.callId&&void 0!==i[n.callId]&&(i[n.callId](n.returnValue,n.success),delete i[n.callId])}window.__uspapi=function(t,e,a){var o=Math.random()+"",s={__uspapiCall:{command:t,version:e,callId:o}};i[o]=a,n.postMessage(s,"*")},window.addEventListener("message",a,!1),window.__uspapi(t,1,e)}("getUSPData",c,o.consentDataCallback))},static:function(t,n,e){t(u,e)}};function f(t,n){var e={context:this,args:[n],nextFn:t,adUnits:n.adUnits||pbjs.adUnits,bidsBackHandler:n.bidsBackHandler,haveExited:!1,timer:null};if(!p[c])return a.logWarn("USP framework (".concat(c,") is not a supported framework. Aborting consentManagement module and resuming auction.")),e.nextFn.apply(e.context,e.args);p[c].call(this,g,b,e),e.haveExited||(0===r?g(void 0,e):e.timer=setTimeout(m.bind(null,e),r))}function g(t,n){!t||!t.usPrivacy?b("USPAPI returned unexpected value during lookup process.",n,t):(clearTimeout(n.timer),function(t){t&&t.usPrivacy&&(l=t.usPrivacy,i.uspDataHandler.setConsentData(l))}(t),y(null,n))}function m(t){b("USPAPI workflow exceeded timeout threshold.",t)}function b(t,n,e){clearTimeout(n.timer),y(t,n,e)}function y(t,n,e){if(!1===n.haveExited){n.haveExited=!0;var o=n.context,i=n.args,s=n.nextFn;t&&a.logWarn(t+" Resuming auction without consent data as per consentManagement config.",e),s.apply(o,i)}}function P(t){(t=t&&t.usp)&&"object"===s(t)?(a.isStr(t.cmpApi)?c=t.cmpApi:(c="iab",a.logInfo("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat("iab",")."))),a.isNumber(t.timeout)?r=t.timeout:(r=50,a.logInfo("consentManagement.usp config did not specify timeout. Using system default setting (".concat(50,")."))),a.logInfo("USPAPI consentManagement module has been activated..."),"static"===c&&(a.isPlainObject(t.consentData)&&a.isPlainObject(t.consentData.getUSPData)?(t.consentData.getUSPData.uspString&&(u={usPrivacy:t.consentData.getUSPData.uspString}),r=0):a.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),d||pbjs.requestBids.before(f,50),d=!0):a.logWarn("consentManagement.usp config not defined, exiting usp consent manager")}o.b.getConfig("consentManagement",(function(t){return P(t.consentManagement)}))}},[337]);
/* Consumable           */ pbjsChunk([260],{339:function(e,r,n){e.exports=n(340)},340:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",(function(){return o}));var t=n(0),i=n(1);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var a=0,d="consumable",o={code:"consumable",isBidRequestValid:function(e){return!!(e.params.networkId&&e.params.siteId&&e.params.unitId&&e.params.unitName)},buildRequests:function(e,r){var n={method:"POST",url:"",data:"",bidRequest:[]};if(e.length<1)return n;a=e[0].params.siteId,d=e[0].bidder;var t=s({placements:[],time:Date.now(),url:r.refererInfo.referer,referrer:document.referrer,source:[{name:"prebidjs",version:"5.8.0"}]},e[0].params);return r&&r.gdprConsent&&(t.gdpr={consent:r.gdprConsent.consentString,applies:"boolean"!=typeof r.gdprConsent.gdprApplies||r.gdprConsent.gdprApplies}),r&&r.uspConsent&&(t.ccpa=r.uspConsent),e.map((function(e){var r=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes||e.sizes||[],n=s({divName:e.bidId,adTypes:e.adTypes||p(r)},e.params);n.networkId&&n.siteId&&n.unitId&&n.unitName&&t.placements.push(n)})),n.data=JSON.stringify(t),n.bidRequest=e,n.bidderRequest=r,n.url="https://web.archive.org/web/20211007045442/https://e.serverbid.com/api/v2",n},interpretResponse:function(e,r){var n,t,i,s,a=[];t=r.bidRequest,e=(e||{}).body;for(var d=0;d<t.length;d++)if(n={},i=(s=t[d]).bidId,e){var o=e.decisions&&e.decisions[i],u=o&&o.pricing&&o.pricing.clearPrice;o&&u&&(n.requestId=i,n.cpm=u,n.width=o.width,n.height=o.height,n.unitId=s.params.unitId,n.unitName=s.params.unitName,n.ad=c(o,n.unitId,n.unitName),n.currency="USD",n.creativeId=o.adId,n.ttl=30,n.meta={advertiserDomains:o.adomain?o.adomain:[]},n.netRevenue=!0,n.referrer=r.bidderRequest.refererInfo.referer,a.push(n))}return a},getUserSyncs:function(e,r){return e.iframeEnabled?[{type:"iframe",url:"https://web.archive.org/web/20211007045442/https://sync.serverbid.com/ss/"+a+".html"}]:e.pixelEnabled&&r.length>0?r[0].body.pixels:void t.logWarn(d+": Please enable iframe based user syncing.")}},u=[null,"120x90","120x90","468x60","728x90","300x250","160x600","120x600","300x100","180x150","336x280","240x400","234x60","88x31","120x60","120x240","125x125","220x250","250x250","250x90","0x0","200x90","300x50","320x50","320x480","185x185","620x45","300x125","800x250"];function p(e){var r=[];return e.forEach((function(e){var n=u.indexOf(e[0]+"x"+e[1]);n>=0&&r.push(n)})),r}function c(e,r,n){return e.contents&&e.contents[0]&&e.contents[0].body+t.createTrackPixelHtml(e.impressionUrl)}u[77]="970x90",u[123]="970x250",u[43]="300x600",u[286]="970x66",u[3230]="970x280",u[429]="486x60",u[374]="700x500",u[934]="300x1050",u[1578]="320x100",u[331]="320x250",u[3301]="320x267",u[2730]="728x250",Object(i.registerBidder)(o)}},[339]);
/* Criteo               */ pbjsChunk([1],{345:function(t,e,r){t.exports=r(346)},346:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_require__.d(__webpack_exports__,"ADAPTER_VERSION",(function(){return ADAPTER_VERSION})),__webpack_require__.d(__webpack_exports__,"PROFILE_ID_PUBLISHERTAG",(function(){return PROFILE_ID_PUBLISHERTAG})),__webpack_require__.d(__webpack_exports__,"FAST_BID_VERSION_CURRENT",(function(){return FAST_BID_VERSION_CURRENT})),__webpack_require__.d(__webpack_exports__,"spec",(function(){return spec})),__webpack_exports__.canFastBid=canFastBid,__webpack_exports__.getFastBidUrl=getFastBidUrl,__webpack_exports__.tryGetCriteoFastBid=tryGetCriteoFastBid;var __WEBPACK_IMPORTED_MODULE_0__src_adloader_js__=__webpack_require__(40),__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_2__src_config_js__=__webpack_require__(3),__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_4__src_utils_js__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__=__webpack_require__(11),__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__),__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__=__webpack_require__(68),__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__),__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__=__webpack_require__(7);function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}).apply(this,arguments)}var GVLID=91,ADAPTER_VERSION=34,BIDDER_CODE="criteo",CDB_ENDPOINT="https://web.archive.org/web/20211007045442/https://bidder.criteo.com/cdb",PROFILE_ID_INLINE=207,PROFILE_ID_PUBLISHERTAG=185,storage=Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__.b)(GVLID),LOG_PREFIX="Criteo: ",FAST_BID_VERSION_PLACEHOLDER="%FAST_BID_VERSION%",FAST_BID_VERSION_CURRENT=105,FAST_BID_VERSION_LATEST="latest",FAST_BID_VERSION_NONE="none",PUBLISHER_TAG_URL_TEMPLATE="https://web.archive.org/web/20211007045442/https://static.criteo.net/js/ld/publishertag.prebid"+FAST_BID_VERSION_PLACEHOLDER+".js",FAST_BID_PUBKEY_E=65537,FAST_BID_PUBKEY_N="ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",spec={code:BIDDER_CODE,gvlid:GVLID,supportedMediaTypes:[__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.b,__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d,__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c],isBidRequestValid:function(t){return!(!t||!t.params||!t.params.zoneId&&!t.params.networkId)&&!(hasVideoMediaType(t)&&!hasValidVideoMediaType(t))},buildRequests:function(t,e){var r,i,s=__WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getLegacyFpd(__WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("ortb2"))||{};_extends(e,{publisherExt:s.context,userExt:s.user,ceh:__WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("criteo.ceh")});var a=__WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("criteo.fastBidVersion"),_=canFastBid(a);if(!publisherTagAvailable()&&_){window.Criteo=window.Criteo||{},window.Criteo.usePrebidEvents=!1,tryGetCriteoFastBid();var o=getFastBidUrl(a);setTimeout((function(){Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader_js__.a)(o,BIDDER_CODE)}),e.timeout)}if(publisherTagAvailable()){var n=new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG,ADAPTER_VERSION,t,e,"5.8.0");r=n.buildCdbUrl(),i=n.buildCdbRequest()}else{var p=buildContext(t,e);r=buildCdbUrl(p),i=buildCdbRequest(p,t,e)}if(i)return{method:"POST",url:r,data:i,bidRequests:t}},interpretResponse:function(t,e){var r=t.body||t;if(publisherTagAvailable()){var i=Criteo.PubTag.Adapters.Prebid.GetAdapter(e);if(i)return i.interpretResponse(r,e)}var s=[];return r&&r.slots&&__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.isArray(r.slots)&&r.slots.forEach((function(t){var r=__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(e.bidRequests,(function(e){return e.adUnitCode===t.impid&&(!e.params.zoneId||parseInt(e.params.zoneId)===t.zoneid)})),i=r.bidId,a={requestId:i,adId:t.bidId||__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.getUniqueIdentifierStr(),cpm:t.cpm,currency:t.currency,netRevenue:!0,ttl:t.ttl||60,creativeId:t.creativecode,width:t.width,height:t.height,dealId:t.dealCode};t.adomain&&(a.meta=_extends({},a.meta,{advertiserDomains:t.adomain})),t.native?r.params.nativeCallback?a.ad=createNativeAd(i,t.native,r.params.nativeCallback):(a.native=createPrebidNativeAd(t.native),a.mediaType=__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c):t.video?(a.vastUrl=t.displayurl,a.mediaType=__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d):a.ad=t.creative,s.push(a)})),s},onTimeout:function(t){if(publisherTagAvailable()&&Array.isArray(t)){var e=[];t.forEach((function(t){-1===e.indexOf(t.auctionId)&&(e.push(t.auctionId),Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout())}))}},onBidWon:function(t){publisherTagAvailable()&&t&&Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t)},onSetTargeting:function(t){publisherTagAvailable()&&Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t)}};function publisherTagAvailable(){return"undefined"!=typeof Criteo&&Criteo.PubTag&&Criteo.PubTag.Adapters&&Criteo.PubTag.Adapters.Prebid}function buildContext(t,e){var r="";e&&e.refererInfo&&(r=e.refererInfo.referer);var i=__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.parseUrl(r).search,s={url:r,debug:"1"===i.pbt_debug,noLog:"1"===i.pbt_nolog,amp:!1};return t.forEach((function(t){"amp"===t.params.integrationMode&&(s.amp=!0)})),s}function buildCdbUrl(t){var e=CDB_ENDPOINT;return e+="?profileId="+PROFILE_ID_INLINE,e+="&av="+String(ADAPTER_VERSION),e+="&wv="+encodeURIComponent("5.8.0"),e+="&cb="+String(Math.floor(99999999999*Math.random())),t.amp&&(e+="&im=1"),t.debug&&(e+="&debug=1"),t.noLog&&(e+="&nolog=1"),e}function checkNativeSendId(t){return!(t.nativeParams&&(t.nativeParams.image&&(!0!==t.nativeParams.image.sendId||!0===t.nativeParams.image.sendTargetingKeys)||t.nativeParams.icon&&(!0!==t.nativeParams.icon.sendId||!0===t.nativeParams.icon.sendTargetingKeys)||t.nativeParams.clickUrl&&(!0!==t.nativeParams.clickUrl.sendId||!0===t.nativeParams.clickUrl.sendTargetingKeys)||t.nativeParams.displayUrl&&(!0!==t.nativeParams.displayUrl.sendId||!0===t.nativeParams.displayUrl.sendTargetingKeys)||t.nativeParams.privacyLink&&(!0!==t.nativeParams.privacyLink.sendId||!0===t.nativeParams.privacyLink.sendTargetingKeys)||t.nativeParams.privacyIcon&&(!0!==t.nativeParams.privacyIcon.sendId||!0===t.nativeParams.privacyIcon.sendTargetingKeys)))}function buildCdbRequest(t,e,r){var i,s={publisher:{url:t.url,ext:r.publisherExt},slots:e.map((function(t){i=t.params.networkId||i;var e={impid:t.adUnitCode,transactionid:t.transactionId,auctionId:t.auctionId};if(t.params.zoneId&&(e.zoneid=t.params.zoneId),__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"ortb2Imp.ext")&&(e.ext=t.ortb2Imp.ext),t.params.ext&&(e.ext=_extends({},e.ext,t.params.ext)),t.params.publisherSubId&&(e.publishersubid=t.params.publisherSubId),t.params.nativeCallback||__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c))?(e.native=!0,checkNativeSendId(t)||__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn(LOG_PREFIX+"all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"),e.sizes=parseSizes(retrieveBannerSizes(t),parseNativeSize)):e.sizes=parseSizes(retrieveBannerSizes(t),parseSize),hasVideoMediaType(t)){var r={playersizes:parseSizes(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"mediaTypes.video.playerSize"),parseSize),mimes:t.mediaTypes.video.mimes,protocols:t.mediaTypes.video.protocols,maxduration:t.mediaTypes.video.maxduration,api:t.mediaTypes.video.api,skip:t.mediaTypes.video.skip||t.params.video.skip,placement:t.mediaTypes.video.placement||t.params.video.placement,minduration:t.mediaTypes.video.minduration||t.params.video.minduration,playbackmethod:t.mediaTypes.video.playbackmethod||t.params.video.playbackmethod,startdelay:t.mediaTypes.video.startdelay||t.params.video.startdelay};e.video=r}return e}))};return i&&(s.publisher.networkid=i),s.user={ext:r.userExt},r&&r.ceh&&(s.user.ceh=r.ceh),r&&r.gdprConsent&&(s.gdprConsent={},void 0!==r.gdprConsent.gdprApplies&&(s.gdprConsent.gdprApplies=!!r.gdprConsent.gdprApplies),s.gdprConsent.version=r.gdprConsent.apiVersion,void 0!==r.gdprConsent.consentString&&(s.gdprConsent.consentData=r.gdprConsent.consentString)),r&&r.uspConsent&&(s.user.uspIab=r.uspConsent),s}function retrieveBannerSizes(t){return __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"mediaTypes.banner.sizes")||t.sizes}function parseSizes(t,e){return Array.isArray(t[0])?t.map((function(t){return e(t)})):[e(t)]}function parseSize(t){return t[0]+"x"+t[1]}function parseNativeSize(t){return void 0===t[0]&&void 0===t[1]?"2x2":t[0]+"x"+t[1]}function hasVideoMediaType(t){return void 0!==__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"mediaTypes.video")}function hasValidVideoMediaType(t){var e=!0;if(["mimes","playerSize","maxduration","protocols","api","skip","placement","playbackmethod"].forEach((function(r){void 0===__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"mediaTypes.video."+r)&&void 0===__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t,"params.video."+r)&&(e=!1,__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: mediaTypes.video."+r+" is required"))})),e){var r=t.mediaTypes.video.placement||t.params.video.placement;if("instream"==t.mediaTypes.video.context&&1===r)return!0;if("outstream"==t.mediaTypes.video.context&&1!==r)return!0}return!1}function createPrebidNativeAd(t){return{sendTargetingKeys:!1,title:t.products[0].title,body:t.products[0].description,sponsoredBy:t.advertiser.description,icon:t.advertiser.logo,image:t.products[0].image,clickUrl:t.products[0].click_url,privacyLink:t.privacy.optout_click_url,privacyIcon:t.privacy.optout_image_url,cta:t.products[0].call_to_action,price:t.products[0].price,impressionTrackers:t.impression_pixels.map((function(t){return t.url}))}}function createNativeAd(t,e,r){var i="criteo_prebid_native_slots";return window[i]=window[i]||{},window[i][t]={callback:r,payload:e},'\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i,';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t,'"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>')}function canFastBid(t){return t!==FAST_BID_VERSION_NONE}function getFastBidUrl(t){var e;if(t===FAST_BID_VERSION_LATEST)e="";else if(t){String(t).split(".")[0]<102&&__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("Specifying a Fastbid version which is not supporting version selection."),e="."+t}else e="."+FAST_BID_VERSION_CURRENT;return PUBLISHER_TAG_URL_TEMPLATE.replace(FAST_BID_VERSION_PLACEHOLDER,e)}function tryGetCriteoFastBid(){try{var fastBidStorageKey="criteo_fast_bid",hashPrefix="// Hash: ",fastBidFromStorage=storage.getDataFromLocalStorage(fastBidStorageKey);if(null!==fastBidFromStorage){var firstLineEndPosition=fastBidFromStorage.indexOf("\n"),firstLine=fastBidFromStorage.substr(0,firstLineEndPosition).trim();if(firstLine.substr(0,hashPrefix.length)!==hashPrefix)__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("No hash found in FastBid"),storage.removeDataFromLocalStorage(fastBidStorageKey);else{var publisherTagHash=firstLine.substr(hashPrefix.length),publisherTag=fastBidFromStorage.substr(firstLineEndPosition+1);Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__.verify)(publisherTag,publisherTagHash,FAST_BID_PUBKEY_N,FAST_BID_PUBKEY_E)?(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logInfo("Using Criteo FastBid"),eval(publisherTag)):(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("Invalid Criteo FastBid found"),storage.removeDataFromLocalStorage(fastBidStorageKey))}}}catch(t){}}Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__.registerBidder)(spec)},68:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(69),s=r(70);e.verify=function(t,e,r,a){var _=new i.BigInteger(i.b64toHex(e)),o=new i.BigInteger(i.b64toHex(r)),n=_.modPowInt(a,o);return i.removeExtraSymbols(n.toHexString())===s.Sha256.hash(t)}},69:function(t,e,r){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t){null!==t&&this.fromHexString(t)}return t.prototype.toHexString=function(){if(this.s<0)return"-"+this.negate().toHexString();var t,e=!1,r="",i=this.t,s=this.DB-i*this.DB%4;if(i-- >0)for(s<this.DB&&(t=this[i]>>s)>0&&(e=!0,r=d(t));i>=0;)s<4?(t=(this[i]&(1<<s)-1)<<4-s,t|=this[--i]>>(s+=this.DB-4)):(t=this[i]>>(s-=4)&15,s<=0&&(s+=this.DB,--i)),t>0&&(e=!0),e&&(r+=d(t));return e?r:"0"},t.prototype.fromHexString=function(e){if(null!==e){this.t=0,this.s=0;for(var r=e.length,i=!1,s=0;--r>=0;){var a=c(e,r);a<0?"-"==e.charAt(r)&&(i=!0):(i=!1,0==s?this[this.t++]=a:s+4>this.DB?(this[this.t-1]|=(a&(1<<this.DB-s)-1)<<s,this[this.t++]=a>>this.DB-s):this[this.t-1]|=a<<s,(s+=4)>=this.DB&&(s-=this.DB))}0,this.clamp(),i&&t.ZERO.subTo(this,this)}},t.prototype.negate=function(){var e=a();return t.ZERO.subTo(this,e),e},t.prototype.abs=function(){return this.s<0?this.negate():this},t.prototype.mod=function(e){var r=a();return this.abs().divRemTo(e,null,r),this.s<0&&r.compareTo(t.ZERO)>0&&e.subTo(r,r),r},t.prototype.copyTo=function(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s},t.prototype.lShiftTo=function(t,e){for(var r=t%this.DB,i=this.DB-r,s=(1<<i)-1,a=Math.floor(t/this.DB),_=this.s<<r&this.DM,o=this.t-1;o>=0;--o)e[o+a+1]=this[o]>>i|_,_=(this[o]&s)<<r;for(o=a-1;o>=0;--o)e[o]=0;e[a]=_,e.t=this.t+a+1,e.s=this.s,e.clamp()},t.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return(e=(e=(e=(e=e*(2-(15&t)*e)&15)*(2-(255&t)*e)&255)*(2-((65535&t)*e&65535))&65535)*(2-t*e%this.DV)%this.DV)>0?this.DV-e:-e},t.prototype.dlShiftTo=function(t,e){var r;for(r=this.t-1;r>=0;--r)e[r+t]=this[r];for(r=t-1;r>=0;--r)e[r]=0;e.t=this.t+t,e.s=this.s},t.prototype.squareTo=function(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t[r]=0;for(r=0;r<e.t-1;++r){var i=e.am(r,e[r],t,2*r,0,1);(t[r+e.t]+=e.am(r+1,2*e[r],t,2*r+1,i,e.t-r-1))>=e.DV&&(t[r+e.t]-=e.DV,t[r+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(r,e[r],t,2*r,0,1)),t.s=0,t.clamp()},t.prototype.multiplyTo=function(e,r){var i=this.abs(),s=e.abs(),a=i.t;for(r.t=a+s.t;--a>=0;)r[a]=0;for(a=0;a<s.t;++a)r[a+i.t]=i.am(0,s[a],r,a,0,i.t);r.s=0,r.clamp(),this.s!=e.s&&t.ZERO.subTo(r,r)},t.prototype.divRemTo=function(e,r,i){var s=e.abs();if(!(s.t<=0)){var o=this.abs();if(o.t<s.t)return null!=r&&r.fromHexString("0"),void(null!=i&&this.copyTo(i));null==i&&(i=a());var n=a(),p=this.s,c=e.s,d=this.DB-_(s[s.t-1]);d>0?(s.lShiftTo(d,n),o.lShiftTo(d,i)):(s.copyTo(n),o.copyTo(i));var u=n.t,h=n[u-1];if(0!=h){var l=h*(1<<this.F1)+(u>1?n[u-2]>>this.F2:0),f=this.FV/l,v=(1<<this.F1)/l,E=1<<this.F2,m=i.t,T=m-u,b=null==r?a():r;for(n.dlShiftTo(T,b),i.compareTo(b)>=0&&(i[i.t++]=1,i.subTo(b,i)),t.ONE.dlShiftTo(u,b),b.subTo(n,n);n.t<u;)n[n.t++]=0;for(;--T>=0;){var D=i[--m]==h?this.DM:Math.floor(i[m]*f+(i[m-1]+E)*v);if((i[m]+=n.am(0,D,i,T,0,u))<D)for(n.dlShiftTo(T,b),i.subTo(b,i);i[m]<--D;)i.subTo(b,i)}null!=r&&(i.drShiftTo(u,r),p!=c&&t.ZERO.subTo(r,r)),i.t=u,i.clamp(),d>0&&i.rShiftTo(d,i),p<0&&t.ZERO.subTo(i,i)}}},t.prototype.rShiftTo=function(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)e.t=0;else{var i=t%this.DB,s=this.DB-i,a=(1<<i)-1;e[0]=this[r]>>i;for(var _=r+1;_<this.t;++_)e[_-r-1]|=(this[_]&a)<<s,e[_-r]=this[_]>>i;i>0&&(e[this.t-r-1]|=(this.s&a)<<s),e.t=this.t-r,e.clamp()}},t.prototype.drShiftTo=function(t,e){for(var r=t;r<this.t;++r)e[r-t]=this[r];e.t=Math.max(this.t-t,0),e.s=this.s},t.prototype.subTo=function(t,e){for(var r=0,i=0,s=Math.min(t.t,this.t);r<s;)i+=this[r]-t[r],e[r++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i-=t.s;r<this.t;)i+=this[r],e[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<t.t;)i-=t[r],e[r++]=i&this.DM,i>>=this.DB;i-=t.s}e.s=i<0?-1:0,i<-1?e[r++]=this.DV+i:i>0&&(e[r++]=i),e.t=r,e.clamp()},t.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},t.prototype.modPowInt=function(t,e){var r;return r=t<256||e.isEven()?new u(e):new h(e),this.exp(t,r)},t.prototype.exp=function(e,r){if(e>4294967295||e<1)return t.ONE;var i=a(),s=a(),o=r.convert(this),n=_(e)-1;for(o.copyTo(i);--n>=0;)if(r.sqrTo(i,s),(e&1<<n)>0)r.mulTo(s,o,i);else{var p=i;i=s,s=p}return r.revert(i)},t.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},t.prototype.compareTo=function(t){var e=this.s-t.s;if(0!=e)return e;var r=this.t;if(0!=(e=r-t.t))return this.s<0?-e:e;for(;--r>=0;)if(0!=(e=this[r]-t[r]))return e;return 0},t.prototype.am1=function(t,e,r,i,s,a){for(;--a>=0;){var _=e*this[t++]+r[i]+s;s=Math.floor(_/67108864),r[i++]=67108863&_}return s},t.prototype.am2=function(t,e,r,i,s,a){for(var _=32767&e,o=e>>15;--a>=0;){var n=32767&this[t],p=this[t++]>>15,c=o*n+p*_;s=((n=_*n+((32767&c)<<15)+r[i]+(1073741823&s))>>>30)+(c>>>15)+o*p+(s>>>30),r[i++]=1073741823&n}return s},t.prototype.am3=function(t,e,r,i,s,a){for(var _=16383&e,o=e>>14;--a>=0;){var n=16383&this[t],p=this[t++]>>14,c=o*n+p*_;s=((n=_*n+((16383&c)<<14)+r[i]+s)>>28)+(c>>14)+o*p,r[i++]=268435455&n}return s},t}();function a(){return new s(null)}function _(t){var e,r=1;return 0!=(e=t>>>16)&&(t=e,r+=16),0!=(e=t>>8)&&(t=e,r+=8),0!=(e=t>>4)&&(t=e,r+=4),0!=(e=t>>2)&&(t=e,r+=2),0!=(e=t>>1)&&(t=e,r+=1),r}e.BigInteger=s,e.nbi=a,e.nbits=_;var o,n,p=[];for(o="0".charCodeAt(0),n=0;n<=9;++n)p[o++]=n;for(o="a".charCodeAt(0),n=10;n<36;++n)p[o++]=n;for(o="A".charCodeAt(0),n=10;n<36;++n)p[o++]=n;function c(t,e){var r=p[t.charCodeAt(e)];return null==r?-1:r}e.intAt=c;function d(t){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)}e.int2char=d;e.b64toHex=function(t){var e,r="",i=0,s=0;for(e=0;e<t.length&&"="!=t.charAt(e);++e){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(e));a<0||(0==i?(r+=d(a>>2),s=3&a,i=1):1==i?(r+=d(s<<2|a>>4),s=15&a,i=2):2==i?(r+=d(s),r+=d(a>>2),s=3&a,i=3):(r+=d(s<<2|a>>4),r+=d(15&a),i=0))}return 1==i&&(r+=d(s<<2)),r},e.removeExtraSymbols=function(t){return t.replace(/^1f+00/,"").replace("3031300d060960864801650304020105000420","")};var u=function(){function t(t){this.m=t}return t.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},t.prototype.revert=function(t){return t},t.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}(),h=function(){function t(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}return t.prototype.convert=function(t){var e=a();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(s.ZERO)>0&&this.m.subTo(e,e),e},t.prototype.revert=function(t){var e=a();return t.copyTo(e),this.reduce(e),e},t.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=32767&t[e],i=r*this.mpl+((r*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[r=e+this.m.t]+=this.m.am(0,i,t,e,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}();function l(t){var e=a();return e.fromHexString(t.toString()),e}e.nbv=l,s.ZERO=l(0),s.ONE=l(1),"Microsoft Internet Explorer"==navigator.appName?(s.prototype.am=s.prototype.am2,i=30):"Netscape"!=navigator.appName?(s.prototype.am=s.prototype.am1,i=26):(s.prototype.am=s.prototype.am3,i=28),s.prototype.DB=i,s.prototype.DM=(1<<i)-1,s.prototype.DV=1<<i;s.prototype.FV=Math.pow(2,52),s.prototype.F1=52-i,s.prototype.F2=2*i-52},70:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.hash=function(e){e=t.utf8Encode(e||"");for(var r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],i=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],s=(e+=String.fromCharCode(128)).length/4+2,a=Math.ceil(s/16),_=new Array(a),o=0;o<a;o++){_[o]=new Array(16);for(var n=0;n<16;n++)_[o][n]=e.charCodeAt(64*o+4*n)<<24|e.charCodeAt(64*o+4*n+1)<<16|e.charCodeAt(64*o+4*n+2)<<8|e.charCodeAt(64*o+4*n+3)<<0}var p=8*(e.length-1)/Math.pow(2,32),c=8*(e.length-1)>>>0;_[a-1][14]=Math.floor(p),_[a-1][15]=c;for(o=0;o<a;o++){for(var d=new Array(64),u=0;u<16;u++)d[u]=_[o][u];for(u=16;u<64;u++)d[u]=t.q1(d[u-2])+d[u-7]+t.q0(d[u-15])+d[u-16]>>>0;var h=i[0],l=i[1],f=i[2],v=i[3],E=i[4],m=i[5],T=i[6],b=i[7];for(u=0;u<64;u++){var D=b+t.z1(E)+t.Ch(E,m,T)+r[u]+d[u],y=t.z0(h)+t.Maj(h,l,f);b=T,T=m,m=E,E=v+D>>>0,v=f,f=l,l=h,h=D+y>>>0}i[0]=i[0]+h>>>0,i[1]=i[1]+l>>>0,i[2]=i[2]+f>>>0,i[3]=i[3]+v>>>0,i[4]=i[4]+E>>>0,i[5]=i[5]+m>>>0,i[6]=i[6]+T>>>0,i[7]=i[7]+b>>>0}var P=new Array(i.length);for(b=0;b<i.length;b++)P[b]=("00000000"+i[b].toString(16)).slice(-8);return P.join("")},t.utf8Encode=function(t){try{return(new TextEncoder).encode(t).reduce((function(t,e){return t+String.fromCharCode(e)}),"")}catch(e){return unescape(encodeURIComponent(t))}},t.ROTR=function(t,e){return e>>>t|e<<32-t},t.z0=function(e){return t.ROTR(2,e)^t.ROTR(13,e)^t.ROTR(22,e)},t.z1=function(e){return t.ROTR(6,e)^t.ROTR(11,e)^t.ROTR(25,e)},t.q0=function(e){return t.ROTR(7,e)^t.ROTR(18,e)^e>>>3},t.q1=function(e){return t.ROTR(17,e)^t.ROTR(19,e)^e>>>10},t.Ch=function(t,e,r){return t&e^~t&r},t.Maj=function(t,e,r){return t&e^t&r^e&r},t}();e.Sha256=i}},[345]);
/* GA                   */ pbjsChunk([224],{419:function(e,n,t){e.exports=t(420)},420:function(e,n,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(9),s=t(0),r=t(5),a=t(8).default,u=r.EVENTS.BID_REQUESTED,c=r.EVENTS.BID_TIMEOUT,d=r.EVENTS.BID_RESPONSE,l=r.EVENTS.BID_WON,f={nonInteraction:!0},p=[],b=null,m=!0,v="Prebid.js Bids",y=0,g=!1,T=null,w=null,E=!0,S={};function h(){if(m&&"function"==typeof window[b]){for(var e=0;e<p.length;e++)p[e].call();p.push=function(e){e.call()},m=!1}s.logMessage("event count sent to GA: "+y)}function D(e){return e?Math.floor(100*e):0}function $(e){return T?T(e):(e>=0&&e<.5?n="$0-0.5":e>=.5&&e<1?n="$0.5-1":e>=1&&e<1.5?n="$1-1.5":e>=1.5&&e<2?n="$1.5-2":e>=2&&e<2.5?n="$2-2.5":e>=2.5&&e<3?n="$2.5-3":e>=3&&e<4?n="$3-4":e>=4&&e<6?n="$4-6":e>=6&&e<8?n="$6-8":e>=8&&(n="$8 above"),n);var n}function C(e){e&&e.bidderCode&&p.push((function(){y++,window[b](w,"event",v,"Requests",e.bidderCode,1,f)})),h()}function M(e){e&&e.bidderCode&&p.push((function(){var n,t,o=D(e.cpm),i=e.bidderCode;if(void 0!==e.timeToRespond&&g){y++;var s=((n=e.timeToRespond)>=0&&n<200?t="0-200ms":n>=200&&n<300?t="0200-300ms":n>=300&&n<400?t="0300-400ms":n>=400&&n<500?t="0400-500ms":n>=500&&n<600?t="0500-600ms":n>=600&&n<800?t="0600-800ms":n>=800&&n<1e3?t="0800-1000ms":n>=1e3&&n<1200?t="1000-1200ms":n>=1200&&n<1500?t="1200-1500ms":n>=1500&&n<2e3?t="1500-2000ms":n>=2e3&&(t="2000ms above"),t);window[b](w,"event","Prebid.js Load Time Distribution",s,i,1,f)}if(e.cpm>0){y+=2;var r=$(e.cpm);g&&(y++,window[b](w,"event","Prebid.js CPM Distribution",r,i,1,f)),window[b](w,"event",v,"Bids",i,o,f),window[b](w,"event",v,"Bid Load Time",i,e.timeToRespond,f)}})),h()}function N(e){p.push((function(){s._each(e,(function(e){y++;var n=e.bidder;window[b](w,"event",v,"Timeouts",n,f)}))})),h()}function _(e){var n=D(e.cpm);p.push((function(){y++,window[b](w,"event",v,"Wins",e.bidderCode,n,f)})),h()}S.enableAnalytics=function(e){var n=e.provider,t=e.options;b=n||"ga",w=t&&t.trackerName?t.trackerName+".send":"send",E=void 0===t||void 0===t.sampling||Math.random()<parseFloat(t.sampling),t&&void 0!==t.global&&(b=t.global),t&&void 0!==t.enableDistribution&&(g=t.enableDistribution),t&&"function"==typeof t.cpmDistribution&&(T=t.cpmDistribution);if(E){var r=i.getEvents();s._each(r,(function(e){if("object"===o(e)){var n=e.args;if(e.eventType===u)C(n);else if(e.eventType===d)M(n);else if(e.eventType===c){N(n)}else e.eventType===l&&_(n)}})),i.on(u,(function(e){C(e)})),i.on(d,(function(e){M(e)})),i.on(c,(function(e){N(e)})),i.on(l,(function(e){_(e)}))}else s.logMessage("Prebid.js google analytics disabled by sampling");this.enableAnalytics=function(){return s.logMessage("Analytics adapter already enabled, unnecessary call to `enableAnalytics`.")}},S.getTrackerSend=function(){return w},S.getCpmDistribution=$,a.registerAnalyticsAdapter({adapter:S,code:"ga"}),n.default=S}},[419]);
/* ix                   */ pbjsChunk([198],{481:function(e,r,t){e.exports=t(482)},482:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return V}));var n=t(0),i=t(2),a=t(3),o=t(11),s=t.n(o),d=t(1),c=t(22);function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=v(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(s)throw a}}}}function v(e,r){if(e){if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,r):void 0}}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var g="roundel",h=[i.b,i.d],x=8e3,I={JPY:1},O="p",w="x",A={"liveramp.com":"idl","netid.de":"NETID","neustar.biz":"fabrickId","zeotap.com":"zeotapIdPlus","uidapi.com":"UID2","adserver.org":"TDID"},P=["britepoolid","id5id","lipbid","haloId","criteoId","lotamePanoramaId","merkleId","parrableId","connectid","tapadId","quantcastId","pubcid","TDID","flocId"],S=["mimes","minduration","maxduration"],z=["mimes","minduration","maxduration","protocols","protocol","startdelay","placement","linearity","skip","skipmin","skipafter","sequence","battr","maxextended","minbitrate","maxbitrate","boxingallowed","playbackmethod","playbackend","delivery","pos","companionad","api","companiontype","ext","playerSize","w","h"];function T(e){var r=C(e);r.banner={};var t=n.deepAccess(e,"params.size");return t&&(r.banner.w=t[0],r.banner.h=t[1],n.deepAccess(r,"ext.sid")||(r.ext.sid=n.parseGPTSingleSizeArray(t))),r.banner.topframe=n.inIframe()?0:1,k(e,r,i.b),r}function j(e){var r=C(e),t=n.deepAccess(e,"mediaTypes.video"),a=n.deepAccess(e,"params.video");if(!B(e,t,a))return{};for(var o in r.video=a?n.deepClone(e.params.video):{},t)-1===z.indexOf(o)||r.video.hasOwnProperty(o)||(r.video[o]=t[o]);if(r.video.minduration>r.video.maxduration)return n.logError("IX Bid Adapter: video minduration [".concat(r.video.minduration,"] cannot be greater than video maxduration [").concat(r.video.maxduration,"]")),{};var s=a&&a.context||t&&t.context;if(s&&!r.video.hasOwnProperty("placement")&&(s===c.a?r.video.placement=1:s===c.b?r.video.placement=4:n.logWarn("IX Bid Adapter: Video context '".concat(s,"' is not supported"))),!r.video.w||!r.video.h){var d=R(n.deepAccess(r,"video.playerSize"))||R(n.deepAccess(e,"params.size"));if(!d)return n.logWarn("IX Bid Adapter: Video size is missing in [mediaTypes.video] missing"),{};r.video.w=d[0],r.video.h=d[1],n.deepAccess(r,"ext.sid")||(r.ext.sid=n.parseGPTSingleSizeArray(d))}return k(e,r,i.d),r}function C(e){var r={};r.id=e.bidId,r.ext={},r.ext.siteID=e.params.siteId,!e.params.hasOwnProperty("id")||"string"!=typeof e.params.id&&"number"!=typeof e.params.id||(r.ext.sid=String(e.params.id));var t=n.deepAccess(e,"ortb2Imp.ext.data.adserver.adslot");return t&&(r.ext.dfp_ad_unit_code=t),r}function k(e,r,t){var i=null,a=null;if(e.params.bidFloor&&e.params.bidFloorCur&&(i={floor:e.params.bidFloor,currency:e.params.bidFloorCur}),n.isFn(e.getFloor)){var o="*",s="*";if(t&&n.contains(h,t)){var d=r[t];o=t,s=[d.w,d.h]}try{a=e.getFloor({mediaType:o,size:s})}catch(e){n.logWarn("priceFloors module call getFloor failed, error : ",e)}}a?(r.bidfloor=a.floor,r.bidfloorcur=a.currency,r.ext.fl=O):i&&(r.bidfloor=i.floor,r.bidfloorcur=i.currency,r.ext.fl=w)}function D(e,r,t){var a={},o=!(!n.deepAccess(e,"exp")||!n.isInteger(e.exp)),s=n.deepAccess(e,"dealid")||n.deepAccess(e,"ext.dealid");return I.hasOwnProperty(r)?a.cpm=e.price/I[r]:a.cpm=e.price/100,a.requestId=e.impid,s&&(a.dealId=s),a.netRevenue=true,a.currency=r,a.creativeId=e.hasOwnProperty("crid")?e.crid:"-",n.deepAccess(e,"ext.vasturl")?(a.vastUrl=e.ext.vasturl,a.width=t.video.w,a.height=t.video.h,a.mediaType=i.d,a.ttl=o?e.exp:3600):(a.ad=e.adm,a.width=e.w,a.height=e.h,a.mediaType=i.b,a.ttl=o?e.exp:300),a.meta={},a.meta.networkId=n.deepAccess(e,"ext.dspid"),a.meta.brandId=n.deepAccess(e,"ext.advbrandid"),a.meta.brandName=n.deepAccess(e,"ext.advbrand"),e.adomain&&e.adomain.length>0&&(a.meta.advertiserDomains=e.adomain),a}function E(e){return Array.isArray(e)&&2===e.length&&n.isInteger(e[0])&&n.isInteger(e[1])}function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(E(e))return e[0]===r[0]&&e[1]===r[1];for(var t=0;t<e.length;t++)if(e[t][0]===r[0]&&e[t][1]===r[1])return!0;return!1}function B(e,r,t){var i=!0;r||n.logWarn("IX Bid Adapter: mediaTypes.video is the preferred location for video params in ad unit");var a,o=y(S);try{for(o.s();!(a=o.n()).done;){var s=a.value,d=r&&r.hasOwnProperty(s),c=t&&t.hasOwnProperty(s);d||c||(n.logError("IX Bid Adapter: ".concat(s," is not included in either the adunit or params level")),i=!1)}}catch(e){o.e(e)}finally{o.f()}if(!i)return!1;var p=r&&r.hasOwnProperty("protocol"),u=r&&r.hasOwnProperty("protocols"),l=t&&t.hasOwnProperty("protocol"),m=t&&t.hasOwnProperty("protocols");return p||u||l||m}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return E(e)?e:!!E(e[0])&&e[0]}function _(e,r){if(e)return s()(r,(function(r){return r.id===e}))}function q(e,r,t,o){var s="https://web.archive.org/web/20211007045442/https://htlb.casalemedia.com/cygnus",d=function(e,r){var t=[],i={};if(n.isArray(e)){var a,o=y(e);try{for(o.s();!(a=o.n()).done;){var s=a.value;A[s.source]&&n.deepAccess(s,"uids.0")&&(i[s.source]=!0,s.uids[0].ext={rtiPartner:A[s.source]},delete s.uids[0].atype,t.push(s))}}catch(e){o.e(e)}finally{o.f()}}if(r&&r.id&&r.version){var d={source:"chrome.com",uids:[{id:r.id,ext:{rtiPartner:"flocId",ver:r.version}}]};t.push(d),i["chrome.com"]=!0}return{toSend:t,seenSources:i}}(n.deepAccess(e,"0.userIdAsEids"),n.deepAccess(e,"0.userId.flocId")),c=d.toSend;if(window.headertag&&"function"==typeof window.headertag.getIdentityInfo){var u=window.headertag.getIdentityInfo();if(u&&"object"===f(u))for(var m in u)if(u.hasOwnProperty(m)){var v=u[m];!v.responsePending&&v.data&&"object"===f(v.data)&&Object.keys(v.data).length&&!d.seenSources[v.data.source]&&c.push(v.data)}}if(r&&r.bidderCode===g&&!d.seenSources["liveramp.com"])return[];var b={};b.id=e[0].bidderRequestId.toString(),b.site={},b.ext={},b.ext.source="prebid",b.ext.ixdiag={},b.ext.ixdiag.msd=0,b.ext.ixdiag.msi=0,b.imp=[];var h=function(e){for(var r=e.map((function(e){return e.transactionId})).filter((function(e,r,t){return t.indexOf(e)===r})),t={mfu:0,bu:0,iu:0,nu:0,ou:0,allu:0,ren:!1,version:"5.8.0",userIds:M(e[0])},i=function(i){if(o=e.filter((function(e){return e.transactionId===r[i]}))[0],n.deepAccess(o,"mediaTypes")){if(Object.keys(o.mediaTypes).length>1&&t.mfu++,n.deepAccess(o,"mediaTypes.native")&&t.nu++,n.deepAccess(o,"mediaTypes.banner")&&t.bu++,"outstream"===n.deepAccess(o,"mediaTypes.video.context")){t.ou++;var a="object"===f(n.deepAccess(o,"renderer")||n.deepAccess(o,"mediaTypes.video.renderer"));t.ren=t.ren&&a?n.deepAccess(t,"ren"):a}"instream"===n.deepAccess(o,"mediaTypes.video.context")&&t.iu++,t.allu++}},a=0;a<r.length;a++){var o;i(a)}return t}(e);for(var I in h)b.ext.ixdiag[I]=h[I];if(e[0].schain&&(b.source={ext:{schain:e[0].schain}}),c.length>0&&(b.user={},b.user.eids=c),document.referrer&&""!==document.referrer&&(b.site.ref=document.referrer),r){if(r.gdprConsent){var O=r.gdprConsent;O.hasOwnProperty("gdprApplies")&&(b.regs={ext:{gdpr:O.gdprApplies?1:0}}),O.hasOwnProperty("consentString")&&(b.user=b.user||{},b.user.ext={consent:O.consentString||""},O.hasOwnProperty("addtlConsent")&&O.addtlConsent&&(b.user.ext.consented_providers_settings={consented_providers:O.addtlConsent}))}r.uspConsent&&n.deepSetValue(b,"regs.ext.us_privacy",r.uspConsent),r.refererInfo&&(b.site.page=r.refererInfo.referer)}a.b.getConfig("coppa")&&n.deepSetValue(b,"regs.coppa",1);var w={};w.s=e[0].params.siteId,w.v=o,w.ac="j",w.sd=1,8.1===o&&(w.nf=1);var P=r&&r.bidderCode||"ix",S=a.b.getConfig(P),z=[],T=0,j=Object.keys(t),C="".concat(s).concat(n.parseQueryStringParameters(l(l({},w),{},{r:JSON.stringify(b)}))).length;if(C>x)return n.logError("ix bidder: Base request size has exceeded maximum request size."),z;var k=C;if(S){if("object"===f(S.firstPartyData)){var D=S.firstPartyData,E="?";for(var F in D)D.hasOwnProperty(F)&&(E+="".concat(encodeURIComponent(F),"=").concat(encodeURIComponent(D[F]),"&"));E=E.slice(0,-1),b.site.page+=E}"number"==typeof S.timeout&&(w.t=S.timeout),"boolean"==typeof S.detectMissingSizes?b.ext.ixdiag.dms=S.detectMissingSizes:b.ext.ixdiag.dms=!0}for(var B=function(e){if(k>=x||z.length>=4)return"break";for(var r=t[j[e]],a=r.missingCount,o=void 0===a?0:a,d=r.missingImps,c=void 0===d?[]:d,u=r.ixImps,l=!1,m=x-k,f={ixImps:void 0===u?[]:u,missingBannerImpressions:c},y=Object.keys(f).map((function(e){return f[e]})).filter((function(e){return Array.isArray(e)})).reduce((function(e,r){return e.concat.apply(e,p(r))}),[]),v=encodeURIComponent(JSON.stringify({impressionObjects:y})).length;v>m;)l=!0,y.pop(),v=encodeURIComponent(JSON.stringify({impressionObjects:y})).length;if(i.b in y[0]){var g=y[0],h={id:g.id,banner:{topframe:g.banner.topframe,format:y.map((function(e){var r=e.banner;return{w:r.w,h:r.h,ext:e.ext}}))}};"bidfloor"in y[0]&&(h.bidfloor=y[0].bidfloor),"bidfloorcur"in y[0]&&(h.bidfloorcur=y[0].bidfloorcur),b.imp.push(h),b.ext.ixdiag.msd+=o,b.ext.ixdiag.msi+=c.length}else{var I;(I=b.imp).push.apply(I,p(y))}var O=e===j.length-1;if(l||O){var A=n.deepClone(w);O&&!T||(b.ext.ixdiag.sn=T,A.sn=T),T++,A.r=JSON.stringify(b),z.push({method:"GET",url:s,data:A}),k=C,b.imp=[],b.ext.ixdiag.msd=0,b.ext.ixdiag.msi=0}},R=0;R<j.length;R++){if("break"===B(R))break}return z}function M(e){var r=e.userId||{};return P.filter((function(e){return r[e]}))}function U(e,r){if(r)for(var t=0;t<e.length;t++){var n=e[t];if(r[0]===n[0]&&r[1]===n[1]){e.splice(t,1);break}}}function N(e,r,t){var i=e.transactionId;if(r.hasOwnProperty(i)){var a=[];r[i].hasOwnProperty("missingSizes")&&(a=r[i].missingSizes),U(a,e.params.size),r[i].missingSizes=a}else if(n.deepAccess(e,"mediaTypes.banner.sizes")){var o=n.deepClone(e.mediaTypes.banner.sizes);U(o,e.params.size);var s={missingSizes:o,impression:t};r[i]=s}}function J(e,r,t){var a=n.deepClone(r);return a.ext.sid=n.parseGPTSingleSizeArray(t),a.banner.w=t[0],a.banner.h=t[1],k(e,a,i.b),a}var V={code:"ix",gvlid:10,aliases:[{code:g,gvlid:10,skipPbsAliasing:!1}],supportedMediaTypes:h,isBidRequestValid:function(e){var r,t,i=n.deepAccess(e,"params.video"),a=n.deepAccess(e,"params.size"),o=n.deepAccess(e,"mediaTypes.banner.sizes"),s=n.deepAccess(e,"mediaTypes.video"),d=n.deepAccess(e,"mediaTypes.video.playerSize"),c=e.params.hasOwnProperty("bidFloor"),p=e.params.hasOwnProperty("bidFloorCur");if(e.hasOwnProperty("mediaType")&&!n.contains(h,e.mediaType))return!1;if(n.deepAccess(e,"mediaTypes.banner")&&!o)return!1;if(a){var u=R(a);if(!u)return n.logError("ix bidder params: size has invalid format."),!1;if(!F(e.sizes,u)&&!F(d,u)&&!F(o,u))return n.logError("ix bidder params: bid size is not included in ad unit sizes or player size."),!1}return"string"!=typeof e.params.siteId&&"number"!=typeof e.params.siteId?(n.logError("ix bidder params: siteId must be string or number value."),!1):!c&&!p||c&&p&&(r=e.params.bidFloor,t=e.params.bidFloorCur,Boolean("number"==typeof r&&"string"==typeof t&&t.match(/^[A-Z]{3}$/)))?!(!o&&(s||i))||B(0,s,i):(n.logError("ix bidder params: bidFloor / bidFloorCur parameter has invalid format."),!1)},buildRequests:function(e,r){for(var t=[],o={},s={},d=null,c={},u=l(l({},{detectMissingSizes:!0}),a.b.getConfig("ix")),m=0;m<e.length;m++){d=e[m];var f=n.deepAccess(d,"mediaTypes.video"),y=n.deepAccess(d,"params.video");if((d.mediaType===i.d||f||y)&&!s.hasOwnProperty(d.transactionId)){var v=j(d);0!=Object.keys(v).length&&(s[d.transactionId]={},s[d.transactionId].ixImps=[],s[d.transactionId].ixImps.push(v))}if(d.mediaType===i.b||n.deepAccess(d,"mediaTypes.banner.sizes")||!d.mediaType&&!d.mediaTypes){var b=T(d);n.deepAccess(d,"params.size")&&(o.hasOwnProperty(d.transactionId)||(o[d.transactionId]={}),o[d.transactionId].hasOwnProperty("ixImps")||(o[d.transactionId].ixImps=[]),o[d.transactionId].ixImps.push(b)),u.hasOwnProperty("detectMissingSizes")&&u.detectMissingSizes&&N(d,c,b)}}for(var g in c)if(c.hasOwnProperty(g)){var h=c[g].missingSizes;o.hasOwnProperty(g)||(o[g]={}),o[g].hasOwnProperty("missingImps")||(o[g].missingImps=[],o[g].missingCount=0);for(var x=c[g].impression,I=0;I<h.length;I++){var O=J(d,x,h[I]);o[g].missingImps.push(O),o[g].missingCount++}}return Object.keys(o).length>0&&t.push.apply(t,p(q(e,r,o,7.2))),Object.keys(s).length>0&&t.push.apply(t,p(q(e,r,s,8.1))),t},interpretResponse:function(e,r){var t=[],n=null;if(!e.hasOwnProperty("body")||!e.body.hasOwnProperty("seatbid"))return t;for(var i=e.body,a=i.seatbid,o=0;o<a.length;o++)if(a[o].hasOwnProperty("bid"))for(var s=a[o].bid,d=JSON.parse(r.data.r),c=0;c<s.length;c++){var p=_(s[c].impid,d.imp);n=D(s[c],i.cur,p),t.push(n)}return t},transformBidParams:function(e,r){return n.convertTypes({siteID:"number"},e)},getUserSyncs:function(e,r){return e.iframeEnabled?[{type:"iframe",url:"https://web.archive.org/web/20211007045442/https://js-sec.indexww.com/um/ixmatch.html"}]:[]}};Object(d.registerBidder)(V)}},[481]);
/* JustPremium          */ pbjsChunk([196],{485:function(e,n,r){e.exports=r(486)},486:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),r.d(n,"spec",(function(){return a}));var t=r(1),i=r(0),s=[],a={code:"justpremium",gvlid:62,time:6e4,isBidRequestValid:function(e){return!!(e&&e.params&&e.params.zone)},buildRequests:function(e,n){var r,t,s=(r={},t={},e.forEach((function(e){var n=e.params,i=n.zone;if(1!==r[i]){var s=n.allow||n.formats||[],a=n.exclude||[];if(0===s.length&&0===a.length)return r[n.zone]=1;r[i]=r[i]||[[],{}],r[i][0]=function(e){for(var n=e.concat(),r=0;r<n.length;++r)for(var t=r+1;t<n.length;++t)n[r]===n[t]&&n.splice(t--,1);return n}(r[i][0].concat(s)),a.forEach((function(e){r[i][1][e]?r[i][1][e]++:r[i][1][e]=1})),t[i]=t[i]||0,a.length&&t[i]++}})),Object.keys(t).forEach((function(e){if(1!==r[e]){var n=[];Object.keys(r[e][1]).forEach((function(i){r[e][1][i]===t[e]&&n.push(i)})),r[e][1]=n}})),Object.keys(r).forEach((function(e){1!==r[e]&&r[e][1].length&&(r[e][0].forEach((function(n){var t=r[e][1].indexOf(n);t>-1&&r[e][1].splice(t,1)})),r[e][0].length=0),1===r[e]||r[e][0].length||r[e][1].length||(r[e]=1)})),r),a=function(){var e;try{e=window.top}catch(n){e=window}return{screenWidth:e.screen.width,screenHeight:e.screen.height,innerWidth:e.innerWidth,innerHeight:e.innerHeight}}(),c={zone:e.map((function(e){return parseInt(e.params.zone)})).filter((function(e,n,r){return r.indexOf(e)===n})),referer:n.refererInfo.referer,sw:a.screenWidth,sh:a.screenHeight,ww:a.innerWidth,wh:a.innerHeight,c:s,id:e[0].params.zone,sizes:{}};e.forEach((function(e){var n=e.params.zone,r=c.sizes;r[n]=r[n]||[],r[n].push.apply(r[n],e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes)})),Object(i.deepAccess)(e[0],"userId.pubcid")?c.pubcid=Object(i.deepAccess)(e[0],"userId.pubcid"):Object(i.deepAccess)(e[0],"crumbs.pubcid")&&(c.pubcid=Object(i.deepAccess)(e[0],"crumbs.pubcid")),c.uids=e[0].userId,n&&n.gdprConsent&&(c.gdpr_consent={consent_string:n.gdprConsent.consentString,consent_required:"boolean"!=typeof n.gdprConsent.gdprApplies||n.gdprConsent.gdprApplies}),n&&n.uspConsent&&(c.us_privacy=n.uspConsent),c.version={prebid:"5.8.0",jp_adapter:"1.7"};var o=JSON.stringify(c);return{method:"POST",url:"https://web.archive.org/web/20211007045442/https://pre.ads.justpremium.com/v/2.0/t/xhr?i="+ +new Date,data:o,bids:e}},interpretResponse:function(e,n){var r=e.body,t=[];return n.bids.forEach((function(e){var n=function(e,n){var r=e.zone;if(n[r])for(var t=n[r].length;t--;)if(c(e,n[r][t]))return n[r].splice(t,1).pop();return!1}(e.params,r.bid);if(n){var i=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes&&e.mediaTypes.banner.sizes.length&&e.mediaTypes.banner.sizes[0]||[],s={requestId:e.bidId,creativeId:n.id,width:i[0]||n.width,height:i[1]||n.height,ad:n.adm,cpm:n.price,netRevenue:!0,currency:n.currency||"USD",ttl:n.ttl||a.time,format:n.format,meta:{advertiserDomains:n.adomain&&n.adomain.length>0?n.adomain:[]}};t.push(s)}})),t},getUserSyncs:function(e,n,r,t){var i="https://web.archive.org/web/20211007045442/https://pre.ads.justpremium.com/v/1.0/t/sync?_c=a"+Math.random().toString(36).substring(7)+Date.now();return r&&"boolean"==typeof r.gdprApplies&&r.gdprApplies&&r.consentString&&(i=i+"&consentString="+encodeURIComponent(r.consentString)),t&&(i=i+"&usPrivacy="+encodeURIComponent(t)),e.iframeEnabled&&s.push({type:"iframe",url:i}),s}};function c(e,n){var r=n.format;return e.allow&&e.allow.length?e.allow.indexOf(r)>-1:!e.exclude||!e.exclude.length||e.exclude.indexOf(r)<0}Object(t.registerBidder)(a)}},[485]);
/* Kargo                */ pbjsChunk([194],{491:function(e,t,r){e.exports=r(492)},492:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",(function(){return p}));var n=r(0),a=r(3),o=r(1),i=r(7);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u,s,d,g="kargo",l=Object(i.b)(972,g),p={gvlid:972,code:g,isBidRequestValid:function(e){return!(!e||!e.params)&&!!e.params.placementId},buildRequests:function(e,t){var r,o=a.b.getConfig("currency"),i=o&&o.adServerCurrency||"USD",u={},s={};n._each(e,(function(e){u[e.bidId]=e.params.placementId,s[e.bidId]=e.sizes})),e.length>0&&e[0].userId&&e[0].userId.tdid&&(r=e[0].userId.tdid);var d=c({},{sessionId:p._getSessionId(),requestCount:p._getRequestCount(),timeout:t.timeout,currency:i,cpmGranularity:1,timestamp:(new Date).getTime(),cpmRange:{floor:0,ceil:20},bidIDs:u,bidSizes:s,prebidRawBidRequests:e},p._getAllMetadata(r,t.uspConsent,t.gdprConsent)),g=encodeURIComponent(JSON.stringify(d));return c({},t,{method:"GET",url:"".concat("https://web.archive.org/web/20211007045442/https://krk.kargo.com","/api/v2/bid"),data:"json=".concat(g),currency:i})},interpretResponse:function(e,t){var r=e.body,n=[];for(var a in r){var o=r[a],i=void 0;o.metadata&&o.metadata.landingPageDomain&&(i={clickUrl:o.metadata.landingPageDomain,advertiserDomains:[o.metadata.landingPageDomain]}),n.push({requestId:a,cpm:Number(o.cpm),width:o.width,height:o.height,ad:o.adm,ttl:300,creativeId:o.id,dealId:o.targetingCustom,netRevenue:!0,currency:t.currency,meta:i})}return n},getUserSyncs:function(e,t,r,n){var a=[],o=p._generateRandomUuid(),i=p._getClientId(),c=r&&r.gdprApplies?1:0,u=r&&r.consentString?r.consentString:"";if("string"==typeof n&&4==n.length&&1==n[0]&&"Y"==n[2])return a;if(e.iframeEnabled&&o&&i)for(var s=0;s<5;s++)a.push({type:"iframe",url:"https://web.archive.org/web/20211007045442/https://crb.kargo.com/api/v1/initsyncrnd/{UUID}?seed={SEED}&idx={INDEX}&gdpr={GDPR}&gdpr_consent={GDPR_CONSENT}&us_privacy={US_PRIVACY}".replace("{UUID}",i).replace("{SEED}",o).replace("{INDEX}",s).replace("{GDPR}",c).replace("{GDPR_CONSENT}",u).replace("{US_PRIVACY}",n||"")});return a},_readCookie:function(e){if(!l.cookiesAreEnabled())return null;for(var t="".concat(e,"="),r=document.cookie.split(";"),n=0;n<r.length;n++){for(var a=r[n];" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return a.substring(t.length,a.length)}return null},_getCrbFromCookie:function(){try{var e=JSON.parse(decodeURIComponent(p._readCookie("krg_crb")));if(e&&e.v){var t=JSON.parse(atob(e.v));if(t)return t}return{}}catch(e){return{}}},_getCrbFromLocalStorage:function(){try{return JSON.parse(atob(p._getLocalStorageSafely("krg_crb")))}catch(e){return{}}},_getCrb:function(){var e=p._getCrbFromLocalStorage();return Object.keys(e).length?e:p._getCrbFromCookie()},_getKruxUserId:function(){return p._getLocalStorageSafely("kxkar_user")},_getKruxSegments:function(){return p._getLocalStorageSafely("kxkar_segs")},_getKrux:function(){var e=p._getKruxSegments(),t=[];return e&&(t=e.split(",")),{userID:p._getKruxUserId(),segments:t}},_getLocalStorageSafely:function(e){try{return l.getDataFromLocalStorage(e)}catch(e){return null}},_getUserIds:function(e,t,r){var n=p._getCrb(),a={kargoID:n.userId,clientID:n.clientId,crbIDs:n.syncIds||{},optOut:n.optOut,usp:t};try{r&&(a.gdpr={consent:r.consentString||"",applies:!!r.gdprApplies})}catch(e){}return e&&(a.tdID=e),a},_getClientId:function(){return p._getCrb().clientId},_getAllMetadata:function(e,t,r){return{userIDs:p._getUserIds(e,t,r),krux:p._getKrux(),pageURL:window.location.href,rawCRB:p._readCookie("krg_crb"),rawCRBLocalStorage:p._getLocalStorageSafely("krg_crb")}},_getSessionId:function(){return u||(u=p._generateRandomUuid()),u},_getRequestCount:function(){return s===window.location.pathname?++d:(s=window.location.pathname,d=0)},_generateRandomUuid:function(){try{var e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=-177&e[6]|64,e[8]=-65&e[8]|128;var t=Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("");return t.slice(0,8)+"-"+t.slice(8,12)+"-"+t.slice(12,16)+"-"+t.slice(16,20)+"-"+t.slice(20)}catch(e){return""}}};Object(o.registerBidder)(p)}},[491]);
/* NoBid                */ pbjsChunk([165],{563:function(e,n,t){e.exports=t(564)},564:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"spec",(function(){return g}));var i=t(0),r=t(3),o=t(1),d=t(2),a=t(7),s="nobid",u=Object(a.b)(816,s);function c(e,n){i.logInfo("-NoBid- "+e,n)}function p(e,n){function t(e,n){var t=function(e,n){for(var t=0;t<n.length;t++)if(n[t].d===e)return n[t];return!1}(e.div,n)||{};return e.account&&(t.s=e.account),e.sizes&&(t.z=e.sizes),e.div&&(t.d=e.div),e.targeting?t.g=e.targeting:t.g={},e.div&&function(e,n,t){for(var i=e.length-1;i>=0;i--){var r=e[i];r[n]&&r[n]===t&&e.splice(i,1)}}(n,"d",e.div),e.sizeMapping&&(t.sm=e.sizeMapping),e.siteId&&(t.sid=e.siteId),e.placementId&&(t.pid=e.placementId),e.ad_type&&(t.at=e.ad_type),e.params&&(t.params=e.params),n.push(t),n}if(void 0!==window.nobid.refreshLimit&&window.nobid.refreshLimit<window.nobid.refreshCount)return!1;var o,a=(o="_ublock",u.getCookie(o));if(a)return c("Request blocked for user. hours: ",a),!1;for(var s=[],p=0,l=[],g=0;g<e.length;g++){var f=e[g],b=f.adUnitCode;s.push(b);var v=f.sizes;p=void 0!==f.params.siteId&&f.params.siteId?f.params.siteId:p;var m=f.params.placementId,w="banner",h=i.deepAccess(f,"mediaTypes.video"),y=i.deepAccess(f,"mediaTypes.video.context");(f.mediaType===d.d||h&&("instream"===y||"outstream"===y))&&(w="video"),p&&t({div:b,sizes:v,siteId:p,placementId:m,ad_type:w,params:f.params},l)}return!!p&&function(t,o,d){var a,s,u,c,p,l,g,f,b={};b.sid=o,b.l=function(e){var n="";return n=e&&e.refererInfo&&e.refererInfo.referer?e.refererInfo.referer:window.context&&window.context.location&&window.context.location.href?window.context.location.href:document.location.href,encodeURIComponent(n.replace(/\%/g,""))}(n),b.tt=encodeURIComponent(document.title),b.tt=b.tt.replace(/'|;|quot;|39;|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm,""),b.a=function(e,n){var t=[];if(e&&e.length){if(n){var i=[];e instanceof Array?i=e:i.push(e);for(var r=0,o=n.length;r<o;r++){var d=n[r];d&&d.d&&i.indexOf(d.d)>-1&&t.push(d)}}}else t=n;return t}(t,d||[]),b.t=(a=new Date,s=function(e){return e<=9?"0"+e:""+e},u=a.getDate(),c=a.getFullYear(),p=a.getMonth()+1,l=a.getHours(),g=a.getMinutes(),f=a.getSeconds(),c+"-"+s(p)+"-"+s(u)+" "+s(l)+":"+s(g)+":"+s(f)),b.tz=Math.round((new Date).getTimezoneOffset()),b.r=function(){try{var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),n=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return"".concat(e,"x").concat(n)}catch(e){i.logWarn("Could not parse screen dimensions, error details:",e)}}(),b.lang=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,b.ref=document.referrer,b.gdpr=function(e){var n={};return e&&e.gdprConsent&&(n={consentString:e.gdprConsent.consentString,consentRequired:"boolean"==typeof e.gdprConsent.gdprApplies&&e.gdprConsent.gdprApplies}),n}(n),b.usp=function(e){var n="";return e&&e.uspConsent&&(n=e.uspConsent),n}(n),b.pjbdr=n&&n.bidderCode?n.bidderCode:"nobid";var v=function(e){return e&&e.length>0?e[0].schain:null}(e);v&&(b.schain=v);var m=!0===r.b.getConfig("coppa")?{coppa:!0}:e&&e.length>0?e[0].coppa:null;m&&(b.coppa=m);var w=function(e){if(i.isArray(e)&&e.length>0){var n=[];return e.forEach((function(e){var t=[];e.uids&&e.uids.forEach((function(e){t.push({id:e.id+""})})),e.source&&t.length>0&&n.push({source:e.source,uids:t})})),n}}(i.deepAccess(e,"0.userIdAsEids"));return w&&w.length>0&&(b.eids=w),b}(s,p,l)}function l(e,n){var t=function(e,n){for(var t=0;t<n.length;t++)if(n[t].adUnitCode==e)return n[t];return!1};!function(e){e&&void 0!==e.rlimit&&(window.nobid.refreshLimit=e.rlimit)}(e),function(e){e&&void 0!==e.ublock&&function(e,n,t){var i=new Date;i.setTime(i.getTime()+60*t*60*1e3);var r="expires="+i.toUTCString();u.setCookie(e,n,r)}("_ublock","1",e.ublock)}(e);for(var i=[],r=0;e.bids&&r<e.bids.length;r++){var o=e.bids[r];if(!(o.bdrid<100)&&n&&n.bidderRequest&&n.bidderRequest.bids){window.nobid.bidResponses[""+o.id]=o;var a=t(o.divid,n.bidderRequest.bids);if(a){var s={requestId:a.bidId,cpm:1*(o.price?o.price:o.bucket?o.bucket:0),width:o.size.w,height:o.size.h,creativeId:o.creativeid||"",dealId:o.dealid||"",currency:"USD",netRevenue:!0,ttl:300,ad:o.adm,mediaType:o.atype||d.b};o.vastUrl&&(s.vastUrl=o.vastUrl),o.vastXml&&(s.vastXml=o.vastXml),o.videoCacheKey&&(s.videoCacheKey=o.videoCacheKey),o.meta&&(s.meta=o.meta),i.push(s)}}}return i}window.nobidVersion="1.3.1",window.nobid=window.nobid||{},window.nobid.bidResponses=window.nobid.bidResponses||{},window.nobid.timeoutTotal=0,window.nobid.bidWonTotal=0,window.nobid.refreshCount=0,window.nobid.renderTag=function(e,n,t){c("nobid.renderTag()",n);var i=window.nobid.bidResponses[""+n];if(i&&i.adm2){c("nobid.renderTag() found tag",n);var r=i.adm2;return e.write(r),void e.close()}c("nobid.renderTag() tag NOT FOUND *ERROR*",n)},window.addEventListener("message",(function(e){var n=""+e[e.message?"message":"data"];if("nbTagRenderer.requestAdMarkup|"===n.substring(0,"nbTagRenderer.requestAdMarkup|".length)){c("Prebid received nbTagRenderer.requestAdMarkup event");var t=n.substring(n.indexOf("|")+1);if(window.nobid&&window.nobid.bidResponses){var i=window.nobid.bidResponses[""+t];if(i&&i.adm2){var r=i.adm2;r&&e.source.postMessage("nbTagRenderer.renderAdInSafeFrame|"+r,"*")}}}}),!1);var g={code:s,gvlid:816,aliases:[{code:"duration",gvlid:674}],supportedMediaTypes:[d.b,d.d],isBidRequestValid:function(e){return c("isBidRequestValid",e),!!e.params.siteId},buildRequests:function(e,n){if(c("validBidRequests",e),!e||e.length<=0)c("Empty validBidRequests");else{var t=p(e,n);if(t){window.nobid.refreshCount++;var r,o,d=JSON.stringify(t).replace(/'|&|#/g,""),a=(r="https://web.archive.org/web/20211007045442/https://ads.servenobid.com/",(o="function"==typeof i.getParameterByName&&i.getParameterByName("nobid-env"))?"beta"==o?r="https://web.archive.org/web/20211007045442/https://beta.servenobid.com/":"dev"==o?r="//web.archive.org/web/20211007045442/https://localhost:8282/":"qa"==o&&(r="https://web.archive.org/web/20211007045442/https://qa-ads.nobid.com/"):r="https://web.archive.org/web/20211007045442/https://ads.servenobid.com/",r+"adreq?cb="+Math.floor(11e3*Math.random())),s={};return function(e){var n=!0;return e&&e.gdprConsent&&e.gdprConsent.gdprApplies&&2===e.gdprConsent.apiVersion&&(n=!(!0!==i.deepAccess(e.gdprConsent,"vendorData.purpose.consents.1"))),n}(n)||(s={withCredentials:!1}),{method:"POST",url:a,data:d,bidderRequest:n,options:s}}}},interpretResponse:function(e,n){return c("interpretResponse -> serverResponse",e),c("interpretResponse -> bidRequest",n),l(e.body,n)},getUserSyncs:function(e,n,t,r){if(e.iframeEnabled){var o="";return t&&"string"==typeof t.consentString&&("boolean"==typeof t.gdprApplies?o+="?gdpr=".concat(Number(t.gdprApplies),"&gdpr_consent=").concat(t.consentString):o+="?gdpr_consent=".concat(t.consentString)),r&&(o.length>0?o+="&":o+="?",o+="usp_consent="+r),[{type:"iframe",url:"https://web.archive.org/web/20211007045442/https://public.servenobid.com/sync.html"+o}]}if(e.pixelEnabled&&n.length>0){var d=[];return n[0].body.syncs&&n[0].body.syncs.length>0&&n[0].body.syncs.forEach((function(e){d.push({type:"image",url:e})})),d}return i.logWarn("-NoBid- Please enable iframe based user sync.",e),[]},onTimeout:function(e){return window.nobid.timeoutTotal++,c("Timeout total: "+window.nobid.timeoutTotal,e),window.nobid.timeoutTotal},onBidWon:function(e){return window.nobid.bidWonTotal++,c("BidWon total: "+window.nobid.bidWonTotal,e),window.nobid.bidWonTotal}};Object(o.registerBidder)(g)}},[563]);
/* OpenX                */ pbjsChunk([159],{581:function(e,t,n){e.exports=n(582)},582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"USER_ID_CODE_TO_QUERY_ARG",(function(){return f})),n.d(t,"spec",(function(){return b}));var r=n(3),a=n(1),i=n(0),o=n(2),d=n(12),s=n.n(d);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,d=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){d=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(d)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=[o.b,o.d],l=["startdelay","mimes","minduration","maxduration","startdelay","skippable","playbackmethod","api","protocols","boxingallowed","linearity","delivery","protocol","placement","minbitrate","maxbitrate"],f={britepoolid:"britepoolid",criteoId:"criteoid",fabrickId:"nuestarid",haloId:"audigentid",id5id:"id5id",idl_env:"lre",IDP:"zeotapid",idxId:"idxid",intentIqId:"intentiqid",lipb:"lipbid",lotamePanoramaId:"lotameid",merkleId:"merkleid",netId:"netid",parrableId:"parrableid",pubcid:"pubcid",quantcastId:"quantcastid",tapadId:"tapadid",tdid:"ttduuid",uid2:"uid2",flocId:"floc",admixerId:"admixerid",deepintentId:"deepintentid",dmdId:"dmdid",nextrollId:"nextrollid",novatiq:"novatiqid",mwOpenLinkId:"mwopenlinkid",dapId:"dapid",amxId:"amxid"},b={code:"openx",gvlid:69,supportedMediaTypes:m,isBidRequestValid:function(e){var t=e.params.delDomain||e.params.platform;return i.deepAccess(e,"mediaTypes.banner")&&t?!!e.params.unit||i.deepAccess(e,"mediaTypes.banner.sizes.length")>0:!(!e.params.unit||!t)},buildRequests:function(e,t){if(0===e.length)return[];var n=[],a=p(function(e){return e.reduce((function(e,t){var n;return n=t,i.deepAccess(n,"mediaTypes.video")&&!i.deepAccess(n,"mediaTypes.banner")||n.mediaType===o.d?e[0].push(t):e[1].push(t),e}),[[],[]])}(e),2),d=a[0],c=a[1];return c.length>0&&n.push(function(e,t){var n=[],a=!1,d=v(e,t),s=i._map(e,(function(e){return e.params.unit}));d.aus=i._map(e,(function(e){return i.parseSizesInput(e.mediaTypes.banner.sizes).join(",")})).join("|"),d.divids=i._map(e,(function(e){return encodeURIComponent(e.adUnitCode)})).join(","),d.aucs=i._map(e,(function(e){var t=i.deepAccess(e,"ortb2Imp.ext.data.pbadslot");return encodeURIComponent(t||"")})).join(","),s.some((function(e){return e}))&&(d.auid=s.join(","));e.some((function(e){return e.params.doNotTrack}))&&(d.ns=1);(!0===r.b.getConfig("coppa")||e.some((function(e){return e.params.coppa})))&&(d.tfcd=1);e.forEach((function(e){if(e.params.customParams){var t=i._map(Object.keys(e.params.customParams),(function(t){return function(e,t){var n=t[e];i.isArray(n)&&(n=n.join(","));return(e.toLowerCase()+"="+n.toLowerCase()).replace("+",".").replace("/","_")}(t,e.params.customParams)})),r=window.btoa(t.join("&"));a=!0,n.push(r)}else n.push("")})),a&&(d.tps=n.join(","));return y(d,o.b,e),{method:"GET",url:d.ph?"https://web.archive.org/web/20211007045442/https://u.openx.net/w/1.0/arj":"https://".concat(e[0].params.delDomain,"/w/1.0/arj"),data:d,payload:{bids:e,startTime:new Date}}}(c,t)),d.length>0&&d.forEach((function(e){n.push(function(e,t){var n=function(e,t){var n,r,a=i.deepAccess(e,"mediaTypes.video"),d=v([e],t),c=i.deepAccess(e,"params.video")||{},p=i.deepAccess(e,"mediaTypes.video.context"),u=i.deepAccess(e,"mediaTypes.video.playerSize");i.isArray(e.sizes)&&2===e.sizes.length&&!i.isArray(e.sizes[0])?(n=parseInt(e.sizes[0],10),r=parseInt(e.sizes[1],10)):i.isArray(e.sizes)&&i.isArray(e.sizes[0])&&2===e.sizes[0].length?(n=parseInt(e.sizes[0][0],10),r=parseInt(e.sizes[0][1],10)):i.isArray(u)&&2===u.length&&(n=parseInt(u[0],10),r=parseInt(u[1],10));var m={w:n,h:r},f=e.params.video||e.params.openrtb||{};f.openrtb&&(f=f.openrtb);i.isArray(f.imp)&&(f=f.imp[0].video);Object.keys(f).filter((function(e){return s()(l,e)})).forEach((function(e){return m[e]=f[e]})),Object.keys(a).filter((function(e){return s()(l,e)})).forEach((function(e){return m[e]=a[e]}));var b={imp:[{video:m}]};d.openrtb=JSON.stringify(b),d.auid=e.params.unit,d.vwd=n||c.vwd,d.vht=r||c.vht,"outstream"===p&&(d.vos="101");c.mimes&&(d.vmimes=c.mimes);e.params.test&&(d.vtest=1);var h=i.deepAccess(e,"ortb2Imp.ext.data.pbadslot");h&&(d.aucs=encodeURIComponent(h));return y(d,o.d,[e]),d}(e,t);return{method:"GET",url:n.ph?"https://web.archive.org/web/20211007045442/https://u.openx.net/v/1.0/avjp":"https://".concat(e.params.delDomain,"/v/1.0/avjp"),data:n,payload:{bid:e,startTime:new Date}}}(e,t))})),n},interpretResponse:function(e,t){var n=e.body;return function(e){return/avjp$/.test(e.url)?o.d:o.b}(t)===o.d?function(e,t){var n=t.bid,r=(t.startTime,[]);if(void 0!==e&&""!==e.vastUrl&&e.pub_rev>0){var a=i.parseUrl(e.vastUrl).search||{},d={};d.requestId=n.bidId,e.deal_id&&(d.dealId=e.deal_id),d.ttl=300,d.netRevenue=!0,d.currency=e.currency,d.cpm=parseInt(e.pub_rev,10)/1e3,d.width=parseInt(e.width,10),d.height=parseInt(e.height,10),d.creativeId=e.adid,d.vastUrl=e.vastUrl,d.mediaType=o.d,e.ph=a.ph,e.colo=a.colo,e.ts=a.ts,r.push(d)}return r}(n,t.payload):function(e,t){for(var n=t.bids,r=(t.startTime,e.ads.ad),a=[],i=0;i<r.length;i++){var o=r[i],d=parseInt(o.idx,10),s={};if(s.requestId=n[d].bidId,o.pub_rev){s.cpm=Number(o.pub_rev)/1e3;var c=o.creative[0];c&&(s.width=c.width,s.height=c.height),s.creativeId=c.id,s.ad=o.html,o.deal_id&&(s.dealId=o.deal_id),s.ttl=300,s.netRevenue=!0,s.currency=o.currency,o.tbd&&(s.tbd=o.tbd),s.ts=o.ts,s.meta={},o.brand_id&&(s.meta.brandId=o.brand_id),o.adomain&&length(o.adomain)>0?s.meta.advertiserDomains=o.adomain:s.meta.advertiserDomains=[],o.adv_id&&(s.meta.dspid=o.adv_id),a.push(s)}}return a}(n,t.payload)},getUserSyncs:function(e,t,n,r){if(e.iframeEnabled||e.pixelEnabled)return[{type:e.iframeEnabled?"iframe":"image",url:i.deepAccess(t,"0.body.ads.pixels")||i.deepAccess(t,"0.body.pixels")||function(e,t){var n="https://web.archive.org/web/20211007045442/https://u.openx.net/w/1.0/pd",r=[];e&&(r.push("gdpr="+(e.gdprApplies?1:0)),r.push("gdpr_consent="+encodeURIComponent(e.consentString||"")));t&&r.push("us_privacy="+encodeURIComponent(t));return"".concat(n).concat(r.length>0?"?"+r.join("&"):"")}(n,r)}]},transformBidParams:function(e,t){return i.convertTypes({unit:"string",customFloor:"number"},e)}};function h(e){var t,n,r,a=window,i=document,o=i.documentElement;if(e){try{a=window.top,i=window.top.document}catch(e){return}o=i.documentElement,r=i.body,t=a.innerWidth||o.clientWidth||r.clientWidth,n=a.innerHeight||o.clientHeight||r.clientHeight}else o=i.documentElement,t=a.innerWidth||o.clientWidth,n=a.innerHeight||o.clientHeight;return"".concat(t,"x").concat(n)}function v(e,t){var n,a=i.inIframe();n={ju:r.b.getConfig("pageUrl")||t.refererInfo.referer,ch:document.charSet||document.characterSet,res:"".concat(screen.width,"x").concat(screen.height,"x").concat(screen.colorDepth),ifr:a,tz:(new Date).getTimezoneOffset(),tws:h(a),be:1,bc:e[0].params.bc||"".concat("hb_pb","_").concat("3.0.3"),dddid:i._map(e,(function(e){return e.transactionId})).join(","),nocache:(new Date).getTime()};var o,d,s,p,u,m=r.b.getConfig("ortb2.user.data");if(Array.isArray(m)&&m.length>0){var l=m.filter((function(e){return Array.isArray(e.segment)&&e.segment.length>0&&void 0!==e.name&&e.name.length>0})).reduce((function(e,t){var n="object"===c(t.ext)&&t.ext.segtax?"".concat(t.name,"/").concat(t.ext.segtax):t.name;return e[n]=(e[n]||[]).concat(t.segment.map((function(e){return e.id}))),e}),{}),b=Object.keys(l).map((function(e,t){return e+":"+l[e].join("|")})).join(",");b.length>0&&(n.sm=encodeURIComponent(b))}if(e[0].params.platform&&(n.ph=e[0].params.platform),t.gdprConsent){var v=t.gdprConsent;void 0!==v.consentString&&(n.gdpr_consent=v.consentString),void 0!==v.gdprApplies&&(n.gdpr=v.gdprApplies?1:0),"iab"===r.b.getConfig("consentManagement.cmpApi")&&(n.x_gdpr_f=1)}return t&&t.uspConsent&&(n.us_privacy=t.uspConsent),i.deepAccess(e[0],"crumbs.pubcid")&&i.deepSetValue(e[0],"userId.pubcid",i.deepAccess(e[0],"crumbs.pubcid")),o=n,d=e[0].userId,i._each(d,(function(e,t){var n=f[t];if(f.hasOwnProperty(t))switch(t){case"flocId":case"uid2":o[n]=e.id;break;case"lipb":if(o[n]=e.lipbid,Array.isArray(e.segments)&&e.segments.length>0){var r="liveintent:"+e.segments.join("|");o.sm="".concat(o.sm?o.sm+encodeURIComponent(","):"").concat(encodeURIComponent(r))}break;case"parrableId":o[n]=e.eid;break;case"id5id":o[n]=e.uid;break;case"novatiq":o[n]=e.snowflake;break;default:o[n]=e}})),n=o,e[0].schain&&(n.schain=(s=e[0].schain,"".concat(s.ver,",").concat(s.complete,"!").concat((p=s.nodes,u=["asi","sid","hp","rid","name","domain"],p.map((function(e){return u.map((function(t){return e[t]||""})).join(",")})).join("!"))))),n}function y(e,t,n){var a=[],i=!1;n.forEach((function(e){var n=function(e,t){var n={},a=r.b.getConfig("currency.adServerCurrency")||"USD";"function"==typeof e.getFloor&&(n=e.getFloor({currency:a,mediaType:t,size:"*"}));var i=n.floor||e.params.customFloor||0;return Math.round(1e3*i)}(e,t);n?(a.push(n),i=!0):a.push(0)})),i&&(e.aumfs=a.join(","))}Object(a.registerBidder)(b)}},[581]);
/* OptimeraRTDProvider  */ pbjsChunk([157],{585:function(e,t,r){e.exports=r(586)},586:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"optimeraKeyName",(function(){return l})),r.d(t,"scoresBaseURL",(function(){return s})),r.d(t,"scoresURL",(function(){return n})),r.d(t,"clientID",(function(){return o})),r.d(t,"device",(function(){return f})),r.d(t,"optimeraTargeting",(function(){return p})),r.d(t,"fetchScoreFile",(function(){return d})),t.scoreFileRequest=m,t.returnTargetingData=g,t.onAuctionInit=h,t.init=v,t.setScoresURL=b,t.setScores=O,r.d(t,"optimeraSubmodule",(function(){return D}));var n,o,i=r(0),c=r(10),a=r(4),u={},l="hb_deal_optimera",s="https://web.archive.org/web/20211007045442/https://dyv1bugovvq1g.cloudfront.net/",f="default",p={},d=!0;function m(){i.logInfo("Fetch Optimera score file."),Object(a.b)()(n,{success:function(e,t){if(200===t.status)try{O(e)}catch(e){i.logError("Unable to parse Optimera Score File.",e)}else 403===t.status&&i.logError("Unable to fetch the Optimera Score File - 403")},error:function(){i.logError("Unable to fetch the Optimera Score File.")}})}function g(e,t){var r={};try{e.forEach((function(e){p[e]&&(r[e]={},r[e][l]=[p[e]])}))}catch(e){i.logError("error",e)}return i.logInfo("Apply Optimera targeting"),r}function h(e,t,r){b(),d&&m()}function v(e){return(u=e.params)&&u.clientID?(o=u.clientID,u.optimeraKeyName&&(l=u.optimeraKeyName),u.device&&(f=u.device),b(),m(),!0):(u.clientID||i.logError("Optimera clientID is missing in the Optimera RTD configuration."),!1)}function b(){var e=window.location.host,t=window.location.pathname,r="".concat(s).concat(o,"/").concat(e).concat(t,".js");n!==r?(n=r,d=!0):d=!1}function O(e){var t={};try{t=JSON.parse(e),"default"!==f&&t.device[f]&&(t=t.device[f])}catch(e){i.logError("Optimera score file could not be parsed.")}p=t}var D={name:"optimeraRTD",onAuctionInitEvent:h,getTargetingData:g,init:v};Object(c.e)("realTimeData",D)}},[585]);
/* PermutiveRTDProvider */ pbjsChunk([150],{601:function(e,t,r){e.exports=r(602)},602:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"storage",(function(){return m})),t.initSegments=b,t.setBidderRtb=g,t.isAcEnabled=O,t.isPermutiveOnPage=y,t.getSegments=S,r.d(t,"permutiveSubmodule",(function(){return h}));var n=r(16),a=r(10),c=r(7),i=r(0),u=r(3),o=r(12),s=r.n(o);function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f="permutive",m=Object(c.b)(null,f);function b(e,t,r){var n=y(),a=l(r),c=S(a.params.maxSegs);v(e,a,c),a.waitForIt&&n?window.permutive.ready((function(){v(e,a,c),t()}),"realtime"):t()}function l(e){return Object(i.mergeDeep)({waitForIt:!1,params:{maxSegs:500,acBidders:[],overwrites:{}}},e)}function g(e,t){var r=u.b.getBidderConfig(),n=l(t),a=Object(i.deepAccess)(n,"params.acBidders"),c=S(Object(i.deepAccess)(n,"params.maxSegs"));a.forEach((function(e){var t=function(e,t){var r=t.ac.map((function(e){return{id:e}})),n="permutive.com",a=Object(i.mergeDeep)({},e),c=(Object(i.deepAccess)(a,"ortb2.user.data")||[]).filter((function(e){return e.name!==n})).concat({name:n,segment:r});return Object(i.deepSetValue)(a,"ortb2.user.data",c),a}(r[e]||{},c);u.b.setBidderConfig({bidders:[e],config:t})}))}function v(e,t,r){var a=e&&e.adUnits||Object(n.a)().adUnits,c={deepSetValue:i.deepSetValue,deepAccess:i.deepAccess,isFn:i.isFn,mergeDeep:i.mergeDeep},u={appnexusAst:"appnexus"};a&&a.forEach((function(e){e.bids.forEach((function(e){var n=e.bidder;void 0!==u[n]&&(n=u[n]);var a=O(t,n),o=function(e,t){var r=Object(i.deepAccess)(e,"params.overwrites.".concat(t));return r&&Object(i.isFn)(r)?r:null}(t,n),s=function(e){return{appnexus:function(e,t,r){return r&&t.ac&&t.ac.length&&Object(i.deepSetValue)(e,"params.keywords.p_standard",t.ac),t.appnexus&&t.appnexus.length&&Object(i.deepSetValue)(e,"params.keywords.permutive",t.appnexus),e},rubicon:function(e,t,r){return r&&t.ac&&t.ac.length&&Object(i.deepSetValue)(e,"params.visitor.p_standard",t.ac),t.rubicon&&t.rubicon.length&&Object(i.deepSetValue)(e,"params.visitor.permutive",t.rubicon),e},ozone:function(e,t,r){return r&&t.ac&&t.ac.length&&Object(i.deepSetValue)(e,"params.customData.0.targeting.p_standard",t.ac),e}}[e]}(n);o?o(e,r,a,c,s):s&&s(e,r,a)}))}))}function j(e){try{e()}catch(e){Object(i.logError)(e)}}function O(e,t){var r=Object(i.deepAccess)(e,"params.acBidders")||[];return s()(r,t)}function y(){return void 0!==window.permutive&&"function"==typeof window.permutive.ready}function S(e){var t=A("_psegs").map(Number).filter((function(e){return e>=1e6})).map(String),r=A("_ppam"),n=A("_pcrprs"),a={ac:[].concat(p(n),p(r),p(t)),rubicon:A("_prubicons"),appnexus:A("_papns"),gam:A("_pdfps")};for(var c in a)a[c]=a[c].slice(0,e);return a}function A(e){try{return JSON.parse(m.getDataFromLocalStorage(e)||"[]")}catch(e){return[]}}var h={name:f,getBidRequestData:function(e,t,r){j((function(){b(e,t,r)}))},onAuctionInitEvent:function(e,t){j((function(){g(0,t)}))},init:function(e,t){return!0}};Object(a.e)("realTimeData",h)}},[601]);
/* PrebidServer         */ pbjsChunk([32],{605:function(e,r,t){e.exports=t(606)},606:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.resetSyncedStatus=function(){T=0},r.resetWurlMap=function(){J={}},r.PrebidServer=G;var n=t(75),i=t(39),s=t(0),o=t(5),a=t.n(o),c=t(8),d=t(3),p=t(2),u=t(36),l=t(1),b=t(9),f=t.n(b),g=t(12),v=t.n(g),y=t(607),m=t(4),h=t(11),S=t.n(h);function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(Object(t),!0).forEach((function(r){O(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function O(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,i,s=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(s.push(n.value),!r||s.length!==r);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return s}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return A(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function w(){return(w=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var P,k,_=d.b.getConfig,I=a.a.S2S.SRC,T=0,U={timeout:1e3,maxBids:1,adapter:"prebidServer",adapterOptions:{},syncUrlModifier:{}};function B(e){if(e){var r=Array.isArray(e)?e:[e],t=[];return r.every((function(r,n,i){if((function(e){["endpoint","syncEndpoint"].forEach((function(r){if(s.isStr(e[r])){var t=e[r];e[r]={p1Consent:t,noP1Consent:t}}!s.isPlainObject(e[r])||e[r].p1Consent&&e[r].noP1Consent||["p1Consent","noP1Consent"].forEach((function(t){e[r][t]||s.logWarn("s2sConfig.".concat(r,".").concat(t," not defined.  PBS request will be skipped in some P1 scenarios."))}))}))}(e),!1!==function(e){if(e.defaultVendor){var r=e.defaultVendor,t=Object.keys(e);if(!y.a[r])return s.logError("Incorrect or unavailable prebid server default vendor option: "+r),!1;Object.keys(y.a[r]).forEach((function(n){U[n]!==e[n]&&v()(t,n)||(e[n]=y.a[r][n])}))}return e.enabled="boolean"==typeof e.enabled&&e.enabled}(r))&&!1!==function(e){var r=Object.keys(e);if(["accountId","bidders","endpoint"].filter((function(e){return!v()(r,e)&&(s.logError(e+" missing in server to server config"),!0)})).length>0)return!1}(r))return Array.isArray(r.bidders)&&(i[n].bidders=r.bidders.filter((function(e){return-1===t.indexOf(e)&&(t.push(e),!0)}))),!0;return s.logWarn("prebidServer: s2s config is disabled"),!1}))?P=r:void 0}}function D(e,r){if(0!==e.length){var t=e.shift();t.no_cookie?function(e,r,t,n,i){if(i.syncUrlModifier&&"function"==typeof i.syncUrlModifier[t]){V(e,i.syncUrlModifier[t](e,r,t),t,n)}else V(e,r,t,n)}(t.usersync.type,t.usersync.url,t.bidder,s.bind.call(D,null,e,r),r):D(e,r)}}function V(e,r,t,n){r?"image"===e||"redirect"===e?(s.logMessage('Invoking image pixel user sync for bidder: "'.concat(t,'"')),s.triggerPixel(r,n)):"iframe"==e?(s.logMessage('Invoking iframe user sync for bidder: "'.concat(t,'"')),s.insertUserSyncIframe(r,n)):(s.logError('User sync type "'.concat(e,'" not supported for bidder: "').concat(t,'"')),n()):(s.logError('No sync url for bidder "'.concat(t,'": ').concat(r)),n())}d.b.setDefaults({s2sConfig:U}),_("s2sConfig",(function(e){return B(e.s2sConfig)}));var R={sponsoredBy:1,body:2,rating:3,likes:4,downloads:5,price:6,salePrice:7,phone:8,address:9,body2:10,cta:12},N=Object.keys(R),q={icon:1,image:3},z={img:1,js:2};[R,q,{impression:1,"viewable-mrc50":2,"viewable-mrc100":3,"viewable-video50":4},z].forEach((function(e){Object.keys(e).forEach((function(r){e[e[r]]=r}))}));var M={},W={},J={};var X=function(e,r,t,n,i){var o=[],a={},p=r[0],l=new Set;if(t.forEach((function(e){for(var t=e.code,i=1;l.has(t);)i++,t="".concat(e.code,"-").concat(i);l.add(t);var b,f=Object(u.h)(s.deepAccess(e,"mediaTypes.native"));if(f)try{b=W[t]=Object.keys(f).reduce((function(e,r){var t=f[r];function n(e){return w({required:t.required?1:0},e?s.cleanObj(e):{})}switch(r){case"image":case"icon":var i=q[r],o=s.cleanObj({type:i,w:s.deepAccess(t,"sizes.0"),h:s.deepAccess(t,"sizes.1"),wmin:s.deepAccess(t,"aspect_ratios.0.min_width"),hmin:s.deepAccess(t,"aspect_ratios.0.min_height")});if(!(o.w&&o.h||o.hmin&&o.wmin))throw"invalid img sizes (must provide sizes or min_height & min_width if using aspect_ratios)";Array.isArray(t.aspect_ratios)&&(o.ext={aspectratios:t.aspect_ratios.map((function(e){return"".concat(e.ratio_width,":").concat(e.ratio_height)}))}),e.push(n({img:o}));break;case"title":if(!t.len)throw"invalid title.len";e.push(n({title:{len:t.len}}));break;default:var a=R[r];a&&e.push(n({data:{type:a,len:t.len}}))}return e}),[])}catch(e){s.logError("error creating native request: "+String(e))}var g=s.deepAccess(e,"mediaTypes.video"),v=s.deepAccess(e,"mediaTypes.banner");e.bids.forEach((function(e){if(M["".concat(t).concat(e.bidder)]=e.bid_id,c.default.aliasRegistry[e.bidder]){var r=c.default.bidderRegistry[e.bidder];r&&!r.getSpec().skipPbsAliasing&&(a[e.bidder]=c.default.aliasRegistry[e.bidder])}}));var y={};if(v&&v.sizes){var m=s.parseSizesInput(v.sizes).map((function(e){var r=j(e.split("x"),2),t=r[0],n=r[1];return{w:parseInt(t,10),h:parseInt(n,10)}}));y.banner={format:m},v.pos&&(y.banner.pos=v.pos)}if(s.isEmpty(g)||("outstream"!==g.context||g.renderer||e.renderer?("instream"!==g.context||g.hasOwnProperty("placement")||(g.placement=1),y.video=Object.keys(g).filter((function(e){return"context"!==e})).reduce((function(e,r){return"playerSize"===r?(e.w=s.deepAccess(g,"".concat(r,".0.0")),e.h=s.deepAccess(g,"".concat(r,".0.1"))):e[r]=g[r],e}),{})):s.logError("Outstream bid without renderer cannot be sent to Prebid Server.")),b)try{y.native={request:JSON.stringify({context:1,plcmttype:1,eventtrackers:[{event:1,methods:[1]}],assets:b}),ver:"1.2"}}catch(e){s.logError("error creating native request: "+String(e))}var h=e.bids.reduce((function(t,i){var s=c.default.bidderRegistry[i.bidder];return s&&s.getSpec().transformBidParams&&(i.params=s.getSpec().transformBidParams(i.params,!0,e,r)),t[i.bidder]=n.adapterOptions&&n.adapterOptions[i.bidder]?w({},i.params,n.adapterOptions[i.bidder]):i.params,t}),x({},s.deepAccess(e,"ortb2Imp.ext"))),C={id:t,ext:h,secure:n.secure},O=x({},s.deepAccess(e,"ortb2Imp.ext.data"));Object.keys(O).forEach((function(e){"pbadslot"===e?"string"==typeof O[e]&&O[e]?s.deepSetValue(C,"ext.data.pbadslot",O[e]):delete C.ext.data.pbadslot:"adserver"===e?["name","adslot"].forEach((function(e){var r=s.deepAccess(O,"adserver.".concat(e));"string"==typeof r&&r&&s.deepSetValue(C,"ext.data.adserver.".concat(e.toLowerCase()),r)})):s.deepSetValue(C,"ext.data.".concat(e),O[e])})),w(C,y);var A=S()(p.bids,(function(r){return r.adUnitCode===e.code&&r.storedAuctionResponse}));A&&s.deepSetValue(C,"ext.prebid.storedauctionresponse.id",A.storedAuctionResponse.toString());var E=S()(p.bids,(function(r){return r.adUnitCode===e.code&&"function"==typeof r.getFloor}));if(E){var P;try{P=E.getFloor({currency:d.b.getConfig("currency.adServerCurrency")||"USD"})}catch(e){s.logError("PBS: getFloor threw an error: ",e)}P&&P.currency&&!isNaN(parseFloat(P.floor))&&(C.bidfloor=parseFloat(P.floor),C.bidfloorcur=P.currency)}(C.banner||C.video||C.native)&&o.push(C)})),o.length){var b={id:e.tid,source:{tid:e.tid},tmax:n.timeout,imp:o,test:0,ext:{prebid:{auctiontimestamp:p.auctionStart,targeting:{includewinners:!0,includebidderkeys:!1}}}};b.ext.prebid=w(b.ext.prebid,{channel:{name:"pbjs",version:pbjs.version}}),_("debug")&&(b.ext.prebid=w(b.ext.prebid,{debug:!0})),n.extPrebid&&"object"===E(n.extPrebid)&&(b.ext.prebid=w(b.ext.prebid,n.extPrebid));var f=d.b.getConfig("currency.adServerCurrency");f&&"string"==typeof f?b.cur=[f]:Array.isArray(f)&&f.length&&(b.cur=[f[0]]),function(e,r,t){e&&("object"===E(d.b.getConfig("app"))?(e.app=d.b.getConfig("app"),e.app.publisher={id:t}):(e.site={},s.isPlainObject(d.b.getConfig("site"))&&(e.site=d.b.getConfig("site")),s.deepAccess(e.site,"publisher.id")||s.deepSetValue(e.site,"publisher.id",t),e.site.page||(e.site.page=r)),"object"===E(d.b.getConfig("device"))&&(e.device=d.b.getConfig("device")),e.device||(e.device={}),e.device.w||(e.device.w=window.innerWidth),e.device.h||(e.device.h=window.innerHeight))}(b,r[0].refererInfo.referer,n.accountId);var g=s.deepAccess(r,"0.bids.0.schain");g&&(b.source.ext={schain:g}),s.isEmpty(a)||(b.ext.prebid.aliases=x(x({},b.ext.prebid.aliases),a));var v=s.deepAccess(r,"0.bids.0.userIdAsEids");s.isArray(v)&&v.length>0&&s.deepSetValue(b,"user.ext.eids",v),s.isArray(k)&&k.length>0&&(i&&s.isArray(i)&&k.forEach((function(e){e.bidders&&(e.bidders=e.bidders.filter((function(e){return i.includes(e)})))})),s.deepSetValue(b,"ext.prebid.data.eidpermissions",k));var y=d.b.getConfig("multibid");if(y&&s.deepSetValue(b,"ext.prebid.multibid",y.reduce((function(e,r){var t={};return Object.keys(r).forEach((function(e){t[e.toLowerCase()]=r[e]})),e.push(t),e}),[])),r){var m;if(p.gdprConsent)"boolean"==typeof p.gdprConsent.gdprApplies&&(m=p.gdprConsent.gdprApplies?1:0),s.deepSetValue(b,"regs.ext.gdpr",m),s.deepSetValue(b,"user.ext.consent",p.gdprConsent.consentString),p.gdprConsent.addtlConsent&&"string"==typeof p.gdprConsent.addtlConsent&&s.deepSetValue(b,"user.ext.ConsentedProvidersSettings.consented_providers",p.gdprConsent.addtlConsent);p.uspConsent&&s.deepSetValue(b,"regs.ext.us_privacy",p.uspConsent)}!0===_("coppa")&&s.deepSetValue(b,"regs.coppa",1);var h=_("ortb2")||{};return h.site&&s.mergeDeep(b,{site:h.site}),h.user&&s.mergeDeep(b,{user:h.user}),function(e){var r=d.b.getBidderConfig(),t=Object.keys(r).reduce((function(e,t){var n=r[t];if(n.ortb2){var i={};n.ortb2.site&&(i.site=n.ortb2.site),n.ortb2.user&&(i.user=n.ortb2.user),e.push({bidders:[t],config:{ortb2:i}})}return e}),[]);t.length&&s.deepSetValue(e,"ext.prebid.bidderconfig",t)}(b),b}s.logError("Request to Prebid Server rejected due to invalid media type(s) in adUnit.")},F=function(e,r,t){var n=[];return[["errors","serverErrors"],["responsetimemillis","serverResponseTimeMs"]].forEach((function(t){return function(e,r,t,n){var i=s.deepAccess(r,"ext.".concat(t));i&&Object.keys(i).forEach((function(r){var t=S()(e,(function(e){return e.bidderCode===r}));t&&(t[n]=i[r])}))}(r,e,t[0],t[1])})),e.seatbid&&e.seatbid.forEach((function(o){(o.bid||[]).forEach((function(c){var d,u="".concat(c.impid).concat(o.seat);M[u]&&(d=s.getBidRequest(M[u],r));var l=c.price,b=0!==l?a.a.STATUS.GOOD:a.a.STATUS.NO_BID,f=Object(i.a)(b,d||{bidder:o.seat,src:I});f.cpm=l;var g=s.deepAccess(e,["ext","responsetimemillis",o.seat].join("."));d&&g&&(d.serverResponseTimeMs=g);var v,y,m,h=s.deepAccess(c,"ext.prebid.bidid");s.isStr(h)&&(f.pbsBidId=h),s.isStr(s.deepAccess(c,"ext.prebid.events.win"))&&(v=d.auctionId,y=f.adId,m=s.deepAccess(c,"ext.prebid.events.win"),[v,y].every(s.isStr)&&(J["".concat(v).concat(y)]=m));var S=s.deepAccess(c,"ext.prebid.targeting");if(s.isPlainObject(S)&&(s.isStr(s.deepAccess(c,"ext.prebid.events.win"))&&(S=s.getDefinedParams(S,Object.keys(S).filter((function(e){return-1===e.indexOf("hb_winurl")&&-1===e.indexOf("hb_bidid")})))),f.adserverTargeting=S),f.seatBidId=c.id,s.deepAccess(c,"ext.prebid.type")===p.d){f.mediaType=p.d;var C=d.sizes&&d.sizes[0];f.playerWidth=C[0],f.playerHeight=C[1],c.ext.prebid.cache&&"object"===E(c.ext.prebid.cache.vastXml)&&c.ext.prebid.cache.vastXml.cacheId&&c.ext.prebid.cache.vastXml.url?(f.videoCacheKey=c.ext.prebid.cache.vastXml.cacheId,f.vastUrl=c.ext.prebid.cache.vastXml.url):S&&S.hb_uuid&&S.hb_cache_host&&S.hb_cache_path&&(f.videoCacheKey=S.hb_uuid,f.vastUrl="https://".concat(S.hb_cache_host).concat(S.hb_cache_path,"?uuid=").concat(S.hb_uuid)),c.adm&&(f.vastXml=c.adm),!f.vastUrl&&c.nurl&&(f.vastUrl=c.nurl)}else if(s.deepAccess(c,"ext.prebid.type")===p.c){var x,j;f.mediaType=p.c,j="string"==typeof c.adm?f.adm=JSON.parse(c.adm):f.adm=c.adm;var A=(O(x={},z.img,j.imptrackers||[]),O(x,z.js,j.jstracker?[j.jstracker]:[]),x);if(j.eventtrackers&&j.eventtrackers.forEach((function(e){switch(e.method){case z.img:A[z.img].push(e.url);break;case z.js:A[z.js].push(e.url)}})),s.isPlainObject(j)&&Array.isArray(j.assets)){var w=W[c.impid];f.native=s.cleanObj(j.assets.reduce((function(e,r){var t=w[r.id];return s.isPlainObject(r.img)?e[t.img.type?q[t.img.type]:"image"]=s.pick(r.img,["url","w as width","h as height"]):s.isPlainObject(r.title)?e.title=r.title.text:s.isPlainObject(r.data)&&N.forEach((function(n){R[n]===t.data.type&&(e[n]=r.data.value)})),e}),s.cleanObj({clickUrl:j.link,clickTrackers:s.deepAccess(j,"link.clicktrackers"),impressionTrackers:A[z.img],javascriptTrackers:A[z.js]})))}else s.logError("prebid server native response contained no assets")}else c.adm&&c.nurl?(f.ad=c.adm,f.ad+=s.createTrackPixelHtml(decodeURIComponent(c.nurl))):c.adm?f.ad=c.adm:c.nurl&&(f.adUrl=c.nurl);f.width=c.w,f.height=c.h,c.dealid&&(f.dealId=c.dealid),f.requestId=d.bidId||d.bid_Id,f.creative_id=c.crid,f.creativeId=c.crid,c.burl&&(f.burl=c.burl),f.currency=e.cur?e.cur:"USD",f.meta={};var P=s.deepAccess(c,"ext.prebid.meta");P&&s.isPlainObject(P)&&(f.meta=s.deepClone(P)),c.adomain&&(f.meta.advertiserDomains=c.adomain);var k=t.defaultTtl||60;f.ttl=c.exp?c.exp:k,f.netRevenue=!c.netRevenue||c.netRevenue,n.push({adUnit:d.adUnitCode,bid:f})}))})),n};function H(e){var r,t,n=function(e,r){if([e,r].every(s.isStr))return J["".concat(e).concat(r)]}(e.auctionId,e.adId);s.isStr(n)&&(s.logMessage('Invoking image pixel for wurl on BID_WIN: "'.concat(n,'"')),s.triggerPixel(n),r=e.auctionId,t=e.adId,[r,t].every(s.isStr)&&(J["".concat(r).concat(t)]=void 0))}function L(e,r){return function(e){var r=!0;return e&&e.gdprApplies&&2===e.apiVersion&&(r=!(!0!==s.deepAccess(e,"vendorData.purpose.consents.1"))),r}(r)?e.p1Consent:e.noP1Consent}function K(e){var r,t;return Array.isArray(e)&&e.length>0&&(r=e[0].gdprConsent,t=e[0].uspConsent),{gdprConsent:r,uspConsent:t}}function G(){var e=new n.a("prebidServer");return e.callBids=function(e,r,t,n,i){var o=s.deepClone(e.ad_units),p=K(r),u=p.gdprConsent,b=p.uspConsent,g=o.filter((function(e){return e.mediaTypes&&(e.mediaTypes.native||e.mediaTypes.banner&&e.mediaTypes.banner.sizes||e.mediaTypes.video&&e.mediaTypes.video.playerSize)})),y=g.map((function(e){return e.bids.map((function(e){return e.bidder})).filter(s.uniques)})).reduce(s.flatten).filter(s.uniques);if(Array.isArray(P)){if(e.s2sConfig&&e.s2sConfig.syncEndpoint&&L(e.s2sConfig.syncEndpoint,u))!function(e,r,t,n){if(P.length!==T){T++;var i={uuid:s.generateUUID(),bidders:e,account:n.accountId},o=n.userSyncLimit;s.isNumber(o)&&o>0&&(i.limit=o),r&&(i.gdpr=r.gdprApplies?1:0,!1!==r.gdprApplies&&(i.gdpr_consent=r.consentString)),t&&(i.us_privacy=t),"boolean"==typeof n.coopSync&&(i.coopSync=n.coopSync);var a=JSON.stringify(i);Object(m.a)(L(n.syncEndpoint,r),(function(e){try{D((e=JSON.parse(e)).bidder_status,n)}catch(e){s.logError(e)}}),a,{contentType:"text/plain",withCredentials:!0})}}(e.s2sConfig.bidders.map((function(e){return c.default.aliasRegistry[e]||e})).filter((function(e,r,t){return t.indexOf(e)===r})),u,b,e.s2sConfig);var h=X(e,r,g,e.s2sConfig,y),S=h&&JSON.stringify(h);s.logInfo("BidRequest: "+S);var C=L(e.s2sConfig.endpoint,u);h&&S&&C?i(C,{success:function(i){return function(e,r,t,n,i,o){var p,u=K(t),b=u.gdprConsent,g=u.uspConsent;try{p=JSON.parse(e),F(p,t,o).forEach((function(e){var r=e.adUnit,i=e.bid;Object(l.isValid)(r,i,t)&&n(r,i)})),t.forEach((function(e){return f.a.emit(a.a.EVENTS.BIDDER_DONE,e)}))}catch(e){s.logError(e)}(!p||p.status&&v()(p.status,"Error"))&&s.logError("error parsing response: ",p.status);i(),function(e,r,t){e.forEach((function(e){var n=c.default.getBidAdapter(e);n&&n.registerSyncs&&d.b.runWithBidder(e,s.bind.call(n.registerSyncs,n,[],r,t))}))}(r,b,g)}(i,y,r,t,n,e.s2sConfig)},error:n},S,{contentType:"text/plain",withCredentials:!0}):s.logError("PBS request not made.  Check endpoints.")}},f.a.on(a.a.EVENTS.BID_WON,H),w(this,{callBids:e.callBids,setBidderCode:e.setBidderCode,type:I})}Object(s.getPrebidInternal)().setEidPermissions=function(e){k=e},c.default.registerBidAdapter(new G,"prebidServer")},607:function(e,r,t){"use strict";t.d(r,"a",(function(){return n}));var n={appnexus:{adapter:"prebidServer",enabled:!0,endpoint:{p1Consent:"https://web.archive.org/web/20211007045442/https://prebid.adnxs.com/pbs/v1/openrtb2/auction",noP1Consent:"https://web.archive.org/web/20211007045442/https://prebid.adnxs-simple.com/pbs/v1/openrtb2/auction"},syncEndpoint:{p1Consent:"https://web.archive.org/web/20211007045442/https://prebid.adnxs.com/pbs/v1/cookie_sync",noP1Consent:"https://web.archive.org/web/20211007045442/https://prebid.adnxs-simple.com/pbs/v1/cookie_sync"},timeout:1e3},appnexuspsp:{adapter:"prebidServer",enabled:!0,endpoint:{p1Consent:"https://web.archive.org/web/20211007045442/https://ib.adnxs.com/openrtb2/prebid",noP1Consent:"https://web.archive.org/web/20211007045442/https://ib.adnxs-simple.com/openrtb2/prebid"},timeout:1e3},rubicon:{adapter:"prebidServer",enabled:!0,endpoint:{p1Consent:"https://web.archive.org/web/20211007045442/https://prebid-server.rubiconproject.com/openrtb2/auction",noP1Consent:"https://web.archive.org/web/20211007045442/https://prebid-server.rubiconproject.com/openrtb2/auction"},syncEndpoint:{p1Consent:"https://web.archive.org/web/20211007045442/https://prebid-server.rubiconproject.com/cookie_sync",noP1Consent:"https://web.archive.org/web/20211007045442/https://prebid-server.rubiconproject.com/cookie_sync"},timeout:500},openx:{adapter:"prebidServer",enabled:!0,endpoint:{p1Consent:"https://web.archive.org/web/20211007045442/https://prebid.openx.net/openrtb2/auction",noP1Consent:"https://web.archive.org/web/20211007045442/https://prebid.openx.net/openrtb2/auction"},syncEndpoint:{p1Consent:"https://web.archive.org/web/20211007045442/https://prebid.openx.net/cookie_sync",noP1Consent:"https://web.archive.org/web/20211007045442/https://prebid.openx.net/cookie_sync"},timeout:1e3}}}},[605]);
/* Pubmatic             */ pbjsChunk([143],{622:function(e,r,a){e.exports=a(623)},623:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),a.d(r,"spec",(function(){return F}));var t=a(0),i=a(1),n=a(2),s=a(3),o=a(13);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function p(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function c(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l="pubmatic",m="PubMatic: ",g="USD",b=void 0,h="https://web.archive.org/web/20211007045442/https://pubmatic.bbvms.com/r/".concat("$RENDERER",".js"),f={kadpageurl:"",gender:"",yob:"",lat:"",lon:"",wiid:"",profId:"",verId:""},y="number",v="string",E="boolean",I="array",w={mimes:I,minduration:y,maxduration:y,startdelay:y,playbackmethod:I,api:I,protocols:I,w:y,h:y,battr:I,linearity:y,placement:y,minbitrate:y,maxbitrate:y,skip:y},P={TITLE:{ID:1,KEY:"title",TYPE:0},IMAGE:{ID:2,KEY:"image",TYPE:0},ICON:{ID:3,KEY:"icon",TYPE:0},SPONSOREDBY:{ID:4,KEY:"sponsoredBy",TYPE:1},BODY:{ID:5,KEY:"body",TYPE:2},CLICKURL:{ID:6,KEY:"clickUrl",TYPE:0},VIDEO:{ID:7,KEY:"video",TYPE:0},EXT:{ID:8,KEY:"ext",TYPE:0},DATA:{ID:9,KEY:"data",TYPE:0},LOGO:{ID:10,KEY:"logo",TYPE:0},SPONSORED:{ID:11,KEY:"sponsored",TYPE:1},DESC:{ID:12,KEY:"data",TYPE:2},RATING:{ID:13,KEY:"rating",TYPE:3},LIKES:{ID:14,KEY:"likes",TYPE:4},DOWNLOADS:{ID:15,KEY:"downloads",TYPE:5},PRICE:{ID:16,KEY:"price",TYPE:6},SALEPRICE:{ID:17,KEY:"saleprice",TYPE:7},PHONE:{ID:18,KEY:"phone",TYPE:8},ADDRESS:{ID:19,KEY:"address",TYPE:9},DESC2:{ID:20,KEY:"desc2",TYPE:10},DISPLAYURL:{ID:21,KEY:"displayurl",TYPE:11},CTA:{ID:22,KEY:"cta",TYPE:12}},O=1,T=2,S=3,D=[{id:P.SPONSOREDBY.ID,required:!0,data:{type:1}},{id:P.TITLE.ID,required:!0},{id:P.IMAGE.ID,required:!0}],Y={1:"PMP",5:"PREF",6:"PMPG"},x=1,R=2,k={bootstrapPlayer:function(e){var r={code:e.adUnitCode};if(e.vastXml?r.vastXml=e.vastXml:e.vastUrl&&(r.vastUrl=e.vastUrl),e.vastXml||e.vastUrl){for(var a,i=k.getRendererId("pubmatic",e.rendererCode),n=document.getElementById(e.adUnitCode),s=0;s<window.bluebillywig.renderers.length;s++)if(window.bluebillywig.renderers[s]._id===i){a=window.bluebillywig.renderers[s];break}a?a.bootstrap(r,n):t.logWarn("".concat(m,": Couldn't find a renderer with ").concat(i))}else t.logWarn("".concat(m,": No vastXml or vastUrl on bid, bailing..."))},newRenderer:function(e,r){var a=h.replace("$RENDERER",e),i=o.a.install({url:a,loaded:!1,adUnitCode:r});try{i.setRender(k.outstreamRender)}catch(e){t.logWarn("".concat(m,": Error tying to setRender on renderer"),e)}return i},outstreamRender:function(e){e.renderer.push((function(){k.bootstrapPlayer(e)}))},getRendererId:function(e,r){return"".concat(e,"-").concat(r)}},A=[n.b,n.d,n.c],C=0,z=!1,K={},N={};function U(e,r){if(!t.isStr(r))return r&&t.logWarn("PubMatic: Ignoring param key: "+e+", expects string-value, found "+u(r)),b;switch(e){case"pmzoneid":return r.split(",").slice(0,50).map((function(e){return e.trim()})).join();case"kadfloor":case"lat":case"lon":return parseFloat(r)||b;case"yob":return parseInt(r)||b;default:return r}}function q(e){var r;e.params.adUnit="",e.params.adUnitIndex="0",e.params.width=0,e.params.height=0,e.params.adSlot=(r=e.params.adSlot,t.isStr(r)?r.replace(/^\s+/g,"").replace(/\s+$/g,""):(r&&t.logWarn("pubmatic: adSlot must be a string. Ignoring adSlot"),""));var a=e.params.adSlot,i=a.split(":");if(a=i[0],2==i.length&&(e.params.adUnitIndex=i[1]),i=a.split("@"),e.params.adUnit=i[0],i.length>1){if(2!=(i=i[1].split("x")).length)return void t.logWarn("PubMatic: AdSlot Error: adSlot not in required format");e.params.width=parseInt(i[0],10),e.params.height=parseInt(i[1],10)}else if(e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty(n.b)&&e.mediaTypes.banner.hasOwnProperty("sizes")){for(var s=0,o=[];s<e.mediaTypes.banner.sizes.length;s++)2===e.mediaTypes.banner.sizes[s].length&&o.push(e.mediaTypes.banner.sizes[s]);e.mediaTypes.banner.sizes=o,e.mediaTypes.banner.sizes.length>=1&&(e.params.width=e.mediaTypes.banner.sizes[0][0],e.params.height=e.mediaTypes.banner.sizes[0][1],e.mediaTypes.banner.sizes=e.mediaTypes.banner.sizes.splice(1,e.mediaTypes.banner.sizes.length-1))}}function M(e,r,a){var i,n="Ignoring param key: "+e+", expects "+a+", found "+u(r);switch(a){case E:i=t.isBoolean;break;case y:i=t.isNumber;break;case v:i=t.isStr;break;case I:i=t.isArray}return i(r)?r:(t.logWarn(m+n),b)}function L(e,r){var a=e.KEY;return{id:e.ID,required:r[a].required?1:0,data:{type:e.TYPE,len:r[a].len,ext:r[a].ext}}}function j(e){var r={assets:[]};for(var a in e){if(e.hasOwnProperty(a)){var i={};if(!(r.assets&&r.assets.length>0&&r.assets.hasOwnProperty(a)))switch(a){case P.TITLE.KEY:e[a].len||e[a].length?i={id:P.TITLE.ID,required:e[a].required?1:0,title:{len:e[a].len||e[a].length,ext:e[a].ext}}:t.logWarn("PubMatic: Error: Title Length is required for native ad: "+JSON.stringify(e));break;case P.IMAGE.KEY:e[a].sizes&&e[a].sizes.length>0?i={id:P.IMAGE.ID,required:e[a].required?1:0,img:{type:S,w:e[a].w||e[a].width||(e[a].sizes?e[a].sizes[0]:b),h:e[a].h||e[a].height||(e[a].sizes?e[a].sizes[1]:b),wmin:e[a].wmin||e[a].minimumWidth||(e[a].minsizes?e[a].minsizes[0]:b),hmin:e[a].hmin||e[a].minimumHeight||(e[a].minsizes?e[a].minsizes[1]:b),mimes:e[a].mimes,ext:e[a].ext}}:t.logWarn("PubMatic: Error: Image sizes is required for native ad: "+JSON.stringify(e));break;case P.ICON.KEY:e[a].sizes&&e[a].sizes.length>0?i={id:P.ICON.ID,required:e[a].required?1:0,img:{type:O,w:e[a].w||e[a].width||(e[a].sizes?e[a].sizes[0]:b),h:e[a].h||e[a].height||(e[a].sizes?e[a].sizes[1]:b)}}:t.logWarn("PubMatic: Error: Icon sizes is required for native ad: "+JSON.stringify(e));break;case P.VIDEO.KEY:i={id:P.VIDEO.ID,required:e[a].required?1:0,video:{minduration:e[a].minduration,maxduration:e[a].maxduration,protocols:e[a].protocols,mimes:e[a].mimes,ext:e[a].ext}};break;case P.EXT.KEY:i={id:P.EXT.ID,required:e[a].required?1:0};break;case P.LOGO.KEY:i={id:P.LOGO.ID,required:e[a].required?1:0,img:{type:T,w:e[a].w||e[a].width||(e[a].sizes?e[a].sizes[0]:b),h:e[a].h||e[a].height||(e[a].sizes?e[a].sizes[1]:b)}};break;case P.SPONSOREDBY.KEY:case P.BODY.KEY:case P.RATING.KEY:case P.LIKES.KEY:case P.DOWNLOADS.KEY:case P.PRICE.KEY:case P.SALEPRICE.KEY:case P.PHONE.KEY:case P.ADDRESS.KEY:case P.DESC2.KEY:case P.DISPLAYURL.KEY:case P.CTA.KEY:i=L(N[a],e)}}i&&i.id&&(r.assets[r.assets.length]=i)}var n=D.length,s=0;return D.forEach((function(e){for(var a=r.assets.length,t=0;t<a;t++)if(e.id==r.assets[t].id){s++;break}})),z=n!=s,r}function W(e){var r,a=e.mediaTypes.banner.sizes,i=[];if(a!==b&&t.isArray(a)){if(r={},e.params.width||e.params.height)r.w=e.params.width,r.h=e.params.height;else{if(0===a.length)return r=b,t.logWarn("PubMatic: Error: mediaTypes.banner.size missing for adunit: "+e.params.adUnit+". Ignoring the banner impression in the adunit."),r;r.w=parseInt(a[0][0],10),r.h=parseInt(a[0][1],10),a=a.splice(1,a.length-1)}a.length>0&&(i=[],a.forEach((function(e){e.length>1&&i.push({w:e[0],h:e[1]})})),i.length>0&&(r.format=i)),r.pos=0,r.topframe=t.inIframe()?0:1}else t.logWarn("PubMatic: Error: mediaTypes.banner.size missing for adunit: "+e.params.adUnit+". Ignoring the banner impression in the adunit."),r=b;return r}function _(e){var r,a=t.mergeDeep(t.deepAccess(e.mediaTypes,"video"),e.params.video);if(a!==b){for(var i in r={},w)a.hasOwnProperty(i)&&(r[i]=M(i,a[i],w[i]));t.isArray(e.mediaTypes.video.playerSize[0])?(r.w=parseInt(e.mediaTypes.video.playerSize[0][0],10),r.h=parseInt(e.mediaTypes.video.playerSize[0][1],10)):t.isNumber(e.mediaTypes.video.playerSize[0])&&(r.w=parseInt(e.mediaTypes.video.playerSize[0],10),r.h=parseInt(e.mediaTypes.video.playerSize[1],10))}else r=b,t.logWarn("PubMatic: Error: Video config params missing for adunit: "+e.params.adUnit+" with mediaType set as video. Ignoring video impression in the adunit.");return r}function B(e,r){var a,i,o={},d={},l=e.hasOwnProperty("sizes")?e.sizes:[],m="",h=[];if(function(e,r){r.params.deals&&(t.isArray(r.params.deals)?r.params.deals.forEach((function(r){t.isStr(r)&&r.length>3?(e.pmp||(e.pmp={private_auction:0,deals:[]}),e.pmp.deals.push({id:r})):t.logWarn("PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: "+r)})):t.logWarn("PubMatic: Error: bid.params.deals should be an array of strings."))}(o={id:e.bidId,tagid:e.params.adUnit||void 0,bidfloor:U("kadfloor",e.params.kadfloor),secure:1,ext:{pmZoneId:U("pmzoneid",e.params.pmzoneid)},bidfloorcur:e.params.currency?U("currency",e.params.currency):g},e),function(e,r){var a,i="";if(r.params.dctr)if(i=r.params.dctr,t.isStr(i)&&i.length>0){var n=i.split("|");i="",n.forEach((function(e){i+=e.length>0?e.trim()+"|":""})),a=i.length,"|"===i.substring(a,a-1)&&(i=i.substring(0,a-1)),e.ext.key_val=i.trim()}else t.logWarn("PubMatic: Ignoring param : dctr with value : "+i+", expects string-value, found empty or non-string value")}(o,e),e.hasOwnProperty("mediaTypes"))for(m in e.mediaTypes)switch(m){case n.b:(a=W(e))!==b&&(o.banner=a);break;case n.c:d.request=JSON.stringify(j(e.nativeParams)),z?t.logWarn("PubMatic: Error: Error in Native adunit "+e.params.adUnit+". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details."):o.native=d;break;case n.d:(i=_(e))!==b&&(o.video=i)}else a={pos:0,w:e.params.width,h:e.params.height,topframe:t.inIframe()?0:1},t.isArray(l)&&l.length>1&&((l=l.splice(1,l.length-1)).forEach((function(e){h.push({w:e[0],h:e[1]})})),a.format=h),o.banner=a;return function(e,r){var a=function(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?p(Object(a),!0).forEach((function(r){c(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}({},t.deepAccess(r,"ortb2Imp.ext.data"));Object.keys(a).forEach((function(r){"pbadslot"===r?"string"==typeof a[r]&&a[r]&&t.deepSetValue(e,"ext.data.pbadslot",a[r]):"adserver"===r?["name","adslot"].forEach((function(r){var i=t.deepAccess(a,"adserver.".concat(r));"string"==typeof i&&i&&(t.deepSetValue(e,"ext.data.adserver.".concat(r.toLowerCase()),i),"adslot"===r&&t.deepSetValue(e,"ext.dfp_ad_unit_code",i))})):t.deepSetValue(e,"ext.data.".concat(r),a[r])}))}(o,e),function(e,r){var a=-1;"function"!=typeof r.getFloor||s.b.getConfig("pubmatic.disableFloors")||[n.b,n.d,n.c].forEach((function(t){if(e.hasOwnProperty(t)){var i=r.getFloor({currency:e.bidfloorcur,mediaType:t,size:"*"});if("object"===u(i)&&i.currency===e.bidfloorcur&&!isNaN(parseInt(i.floor))){var n=parseFloat(i.floor);a=-1==a?n:Math.min(n,a)}}}));e.bidfloor&&(a=Math.max(a,e.bidfloor));e.bidfloor=!isNaN(a)&&a>0?a:b}(o,e),o.hasOwnProperty(n.b)||o.hasOwnProperty(n.c)||o.hasOwnProperty(n.d)?o:b}function V(e,r){var a=null,i=t.deepAccess(e,"0.userId.flocId");if(i&&i.id)switch(r){case R:a={id:"FLOC",name:"FLOC",ext:{ver:i.version},segment:[{id:i.id,name:"chrome.com",value:i.id.toString()}]};break;case x:default:a={source:"chrome.com",uids:[{atype:1,id:i.id,ext:{ver:i.version}}]}}return a}function G(e){return!0===t.isArray(e)&&e.length>0}t._each(P,(function(e){K[e.ID]=e.KEY})),t._each(P,(function(e){N[e.KEY]=e}));var F={code:l,gvlid:76,supportedMediaTypes:[n.b,n.d,n.c],isBidRequestValid:function(e){if(e&&e.params){if(!t.isStr(e.params.publisherId))return t.logWarn("PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: "+JSON.stringify(e)),!1;if(e.hasOwnProperty("mediaTypes")&&e.mediaTypes.hasOwnProperty(n.d)){var r=t.deepAccess(e.mediaTypes,"video.mimes"),a=t.deepAccess(e,"params.video.mimes");if(!1===G(r)&&!1===G(a))return t.logWarn("PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:"+JSON.stringify(e)),!1;if(!e.mediaTypes[n.d].hasOwnProperty("context"))return t.logError("".concat(m,": no context specified in bid. Rejecting bid: "),e),!1;if("outstream"===e.mediaTypes[n.d].context&&!t.isStr(e.params.outstreamAU)&&!e.hasOwnProperty("renderer")&&!e.mediaTypes[n.d].hasOwnProperty("renderer"))return t.logError("".concat(m,': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '),e),!1}return!0}return!1},buildRequests:function(e,r){var a;r&&r.refererInfo&&(a=r.refererInfo);var i,o=function(e){return{pageURL:e&&e.referer?e.referer:window.location.href,refURL:window.document.referrer}}(a),p=function(e){return{id:""+(new Date).getTime(),at:1,cur:[g],imp:[],site:{page:e.pageURL,ref:e.refURL,publisher:{}},device:{ua:navigator.userAgent,js:1,dnt:"yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,h:screen.height,w:screen.width,language:navigator.language},user:{},ext:{}}}(o),c="",l=[],m=[];if(e.forEach((function(e){if((i=t.deepClone(e)).params.adSlot=i.params.adSlot||"",q(i),i.params.hasOwnProperty("video"));else if(!(i.hasOwnProperty("mediaTypes")&&i.mediaTypes.hasOwnProperty(n.c)||0!==i.params.width||0!==i.params.height))return void t.logWarn("PubMatic: Skipping the non-standard adslot: ",i.params.adSlot,JSON.stringify(i));o.pubId=o.pubId||i.params.publisherId,(o=function(e,r){var a,i,n;for(a in r.kadpageurl||(r.kadpageurl=r.pageURL),f)f.hasOwnProperty(a)&&(i=e[a])&&("object"===u(n=f[a])&&(i=n.f(i,r)),t.isStr(i)?r[a]=i:t.logWarn("PubMatic: Ignoring param : "+a+" with value : "+f[a]+", expects string-value, found "+u(i)));return r}(i.params,o)).transactionId=i.transactionId,""===c?c=i.params.currency||b:i.params.hasOwnProperty("currency")&&c!==i.params.currency&&t.logWarn("PubMatic: Currency specifier ignored. Only one currency permitted."),i.params.currency=c,i.params.hasOwnProperty("dctr")&&t.isStr(i.params.dctr)&&l.push(i.params.dctr),i.params.hasOwnProperty("bcat")&&t.isArray(i.params.bcat)&&(m=m.concat(i.params.bcat));var r=B(i);r&&p.imp.push(r)})),0!=p.imp.length){var h,y;p.site.publisher.id=o.pubId.trim(),C=o.pubId.trim(),p.ext.wrapper={},p.ext.wrapper.profile=parseInt(o.profId)||b,p.ext.wrapper.version=parseInt(o.verId)||b,p.ext.wrapper.wiid=o.wiid||r.auctionId,p.ext.wrapper.wv="prebid_prebid_5.8.0",p.ext.wrapper.transactionId=o.transactionId,p.ext.wrapper.wp="pbjs",p.user.gender=o.gender?o.gender.trim():b,p.user.geo={},p.user.geo.lat=U("lat",o.lat),p.user.geo.lon=U("lon",o.lon),p.user.yob=U("yob",o.yob),p.device.geo=p.user.geo,p.site.page=o.kadpageurl.trim()||p.site.page.trim(),p.site.domain=(h=p.site.page,(y=document.createElement("a")).href=h,y.hostname),"object"===u(s.b.getConfig("content"))&&(p.site.content=s.b.getConfig("content")),"object"===u(s.b.getConfig("device"))&&(p.device=d(p.device,s.b.getConfig("device"))),t.deepSetValue(p,"source.tid",o.transactionId),-1!==window.location.href.indexOf("pubmaticTest=true")&&(p.test=1),e[0].schain&&t.deepSetValue(p,"source.ext.schain",e[0].schain),r&&r.gdprConsent&&(t.deepSetValue(p,"user.ext.consent",r.gdprConsent.consentString),t.deepSetValue(p,"regs.ext.gdpr",r.gdprConsent.gdprApplies?1:0)),r&&r.uspConsent&&t.deepSetValue(p,"regs.ext.us_privacy",r.uspConsent),!0===s.b.getConfig("coppa")&&t.deepSetValue(p,"regs.coppa",1),function(e,r){var a=t.deepAccess(r,"0.userIdAsEids"),i=V(r,x);i&&(a||(a=[]),a.push(i)),t.isArray(a)&&a.length>0&&t.deepSetValue(e,"user.eids",a)}(p,e),function(e,r){(r=r.filter((function(e){return"string"==typeof e||(t.logWarn("PubMatic: bcat: Each category should be a string, ignoring category: "+e),!1)})).map((function(e){return e.trim()})).filter((function(e,r,a){if(e.length>3)return a.indexOf(e)===r;t.logWarn("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: "+e)}))).length>0&&(t.logWarn("PubMatic: bcat: Selected: ",r),e.bcat=r)}(p,m),function(e,r){var a=V(r,R);a&&(e.user||(e.user={}),e.user.data||(e.user.data=[]),e.user.data.push(a))}(p,e);var v=s.b.getConfig("ortb2")||{};return v.site&&t.mergeDeep(p,{site:v.site}),v.user&&t.mergeDeep(p,{user:v.user}),"object"===u(s.b.getConfig("app"))&&(p.app=s.b.getConfig("app"),p.app.publisher=p.site.publisher,p.app.ext=p.site.ext||b,"object"!==u(p.app.content)&&(p.app.content=p.site.content||b),delete p.site),{method:"POST",url:"https://web.archive.org/web/20211007045442/https://hbopenbid.pubmatic.com/translator?source=prebid-client",data:JSON.stringify(p),bidderRequest:r}}},interpretResponse:function(e,r){var a=[],i=g,s=JSON.parse(r.data),o=s.site&&s.site.ref?s.site.ref:"";try{e.body&&e.body.seatbid&&t.isArray(e.body.seatbid)&&(i=e.body.cur||i,e.body.seatbid.forEach((function(e){e.bid&&t.isArray(e.bid)&&e.bid.forEach((function(d){var p={requestId:d.impid,cpm:(parseFloat(d.price)||0).toFixed(2),width:d.w,height:d.h,creativeId:d.crid||d.id,dealId:d.dealid,currency:i,netRevenue:true,ttl:300,referrer:o,ad:d.adm,pm_seat:e.seat||null,pm_dspid:d.ext&&d.ext.dspid?d.ext.dspid:null,partnerImpId:d.id||""};s.imp&&s.imp.length>0&&s.imp.forEach((function(e){if(d.impid===e.id)switch(function(e,r){if(e.ext&&null!=e.ext.BidType)r.mediaType=A[e.ext.BidType];else{t.logInfo("PubMatic: bid.ext.BidType does not exist, checking alternatively for mediaType");var a=e.adm,i="",s=new RegExp(/VAST\s+version/);if(a.indexOf('span class="PubAPIAd"')>=0)r.mediaType=n.b;else if(s.test(a))r.mediaType=n.d;else try{(i=JSON.parse(a.replace(/\\/g,"")))&&i.native&&(r.mediaType=n.c)}catch(e){t.logWarn("PubMatic: Error: Cannot parse native reponse for ad response: "+a)}}}(d,p),p.mediaType){case n.b:break;case n.d:p.width=d.hasOwnProperty("w")?d.w:e.video.w,p.height=d.hasOwnProperty("h")?d.h:e.video.h,p.vastXml=d.adm,function(e,r){var a,t,i;if(r.bidderRequest&&r.bidderRequest.bids){for(var s=0;s<r.bidderRequest.bids.length;s++)r.bidderRequest.bids[s].bidId===e.requestId&&(a=r.bidderRequest.bids[s].params,t=r.bidderRequest.bids[s].mediaTypes[n.d].context,i=r.bidderRequest.bids[s].adUnitCode);t&&"outstream"===t&&a&&a.outstreamAU&&i&&(e.rendererCode=a.outstreamAU,e.renderer=k.newRenderer(e.rendererCode,i))}}(p,r);break;case n.c:!function(e,r){if(r.native={},e.hasOwnProperty("adm")){var a="";try{a=JSON.parse(e.adm.replace(/\\/g,""))}catch(e){return void t.logWarn("PubMatic: Error: Cannot parse native reponse for ad response: "+r.adm)}if(a&&a.native&&a.native.assets&&a.native.assets.length>0){r.mediaType=n.c;for(var i=0,s=a.native.assets.length;i<s;i++)switch(a.native.assets[i].id){case P.TITLE.ID:r.native.title=a.native.assets[i].title&&a.native.assets[i].title.text;break;case P.IMAGE.ID:r.native.image={url:a.native.assets[i].img&&a.native.assets[i].img.url,height:a.native.assets[i].img&&a.native.assets[i].img.h,width:a.native.assets[i].img&&a.native.assets[i].img.w};break;case P.ICON.ID:r.native.icon={url:a.native.assets[i].img&&a.native.assets[i].img.url,height:a.native.assets[i].img&&a.native.assets[i].img.h,width:a.native.assets[i].img&&a.native.assets[i].img.w};break;case P.SPONSOREDBY.ID:case P.BODY.ID:case P.LIKES.ID:case P.DOWNLOADS.ID:case P.PRICE:case P.SALEPRICE.ID:case P.PHONE.ID:case P.ADDRESS.ID:case P.DESC2.ID:case P.CTA.ID:case P.RATING.ID:case P.DISPLAYURL.ID:r.native[K[a.native.assets[i].id]]=a.native.assets[i].data&&a.native.assets[i].data.value}r.native.clickUrl=a.native.link&&a.native.link.url,r.native.clickTrackers=a.native.link&&a.native.link.clicktrackers||[],r.native.impressionTrackers=a.native.imptrackers||[],r.native.jstracker=a.native.jstracker||[],r.width||(r.width=0),r.height||(r.height=0)}}}(d,p)}})),d.ext&&d.ext.deal_channel&&(p.dealChannel=Y[d.ext.deal_channel]||null),p.meta={},d.ext&&d.ext.dspid&&(p.meta.networkId=d.ext.dspid),d.ext&&d.ext.advid&&(p.meta.buyerId=d.ext.advid),d.adomain&&d.adomain.length>0&&(p.meta.advertiserDomains=d.adomain,p.meta.clickUrl=d.adomain[0]),e.ext&&e.ext.buyid&&(p.adserverTargeting={hb_buyid_pubmatic:e.ext.buyid}),a.push(p)}))})))}catch(e){t.logError(e)}return a},getUserSyncs:function(e,r,a,t){var i=""+C;return a&&(i+="&gdpr="+(a.gdprApplies?1:0),i+="&gdpr_consent="+encodeURIComponent(a.consentString||"")),t&&(i+="&us_privacy="+encodeURIComponent(t)),!0===s.b.getConfig("coppa")&&(i+="&coppa=1"),e.iframeEnabled?[{type:"iframe",url:"https://web.archive.org/web/20211007045442/https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p="+i}]:[{type:"image",url:"https://web.archive.org/web/20211007045442/https://image8.pubmatic.com/AdServer/ImgSync?p="+i}]},transformBidParams:function(e,r){return t.convertTypes({publisherId:"string",adSlot:"string"},e)}};Object(i.registerBidder)(F)}},[622]);
/* PulsePoint           */ pbjsChunk([140],{638:function(e,r,t){e.exports=t(639)},639:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return m}));var n=t(0),i=t(1),a=t(13);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s=100,u=200,o=50,c=150,p=50,l="USD",f=["cp","ct","cf","video","battr","bcat","badv","bidfloor"],m={code:"pulsepoint",gvlid:81,aliases:["pulseLite","pulsepointLite"],supportedMediaTypes:["banner","native","video"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.cp&&e.params.ct)},buildRequests:function(e,r){return{method:"POST",url:"https://web.archive.org/web/20211007045442/https://bid.contextweb.com/header/ortb?src=prebid",data:{id:e[0].bidderRequestId,imp:e.map((function(e){return function(e){return{id:e.bidId,banner:v(e),native:h(e),tagid:e.params.ct.toString(),video:b(e),bidfloor:k(e),ext:g(e)}}(e)})),site:O(e,r),app:T(e),device:{ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage},bcat:e[0].params.bcat,badv:e[0].params.badv,user:x(e[0],r),regs:C(r),source:P(e[0].schain)},bidderRequest:r}},interpretResponse:function(e,r){return function(e,r){var t={},i={},d={},s=r.body;e.data.imp.forEach((function(e){t[e.id]=e})),s&&s.seatbid.forEach((function(e){return e.bid.forEach((function(e){i[e.impid]=e}))}));e.bidderRequest&&e.bidderRequest.bids&&e.bidderRequest.bids.forEach((function(e){d[e.bidId]=e}));var u=[];return Object.keys(t).forEach((function(e){if(i[e]){var r={requestId:e,cpm:i[e].price,creative_id:i[e].crid,creativeId:i[e].crid,adId:e,ttl:i[e].exp||20,netRevenue:true,currency:s.cur||l,meta:{advertiserDomains:i[e].adomain||[]}};t[e].video?(d[e]&&"outstream"===n.deepAccess(d[e],"mediaTypes.video.context")&&(r.renderer=(o=n.deepAccess(d[e],"renderer.options"),c=n.deepAccess(i[e],"ext.outstream"),(p=a.a.install({url:c.rendererUrl,config:{defaultOptions:c.config,rendererOptions:o,type:c.type},loaded:!1})).setRender((function(e){e.renderer.push((function(){var r=e.renderer.getConfig();(new window.PulsePointOutstreamRenderer).render({adUnitCode:e.adUnitCode,vastXml:e.vastXml,type:r.type,defaultOptions:r.defaultOptions,rendererOptions:o})}))})),p)),r.vastXml=i[e].adm,r.mediaType="video",r.width=i[e].w,r.height=i[e].h):t[e].banner?(r.ad=i[e].adm,r.width=i[e].w||t[e].banner.w,r.height=i[e].h||t[e].banner.h):t[e].native&&(r.native=function(e,r){if(e.native){var t=function(e){try{if(e)return JSON.parse(e)}catch(e){n.logError("pulsepointLite.safeParse","ERROR",e)}return null}(r.adm),i={};if(t&&t.native&&t.native.assets)return t.native.assets.forEach((function(e){i.title=e.title?e.title.text:i.title,i.body=e.data&&2===e.data.type?e.data.value:i.body,i.sponsoredBy=e.data&&1===e.data.type?e.data.value:i.sponsoredBy,i.image=e.img&&3===e.img.type?e.img.url:i.image,i.icon=e.img&&1===e.img.type?e.img.url:i.icon})),t.native.link&&(i.clickUrl=encodeURIComponent(t.native.link.url)),i.impressionTrackers=t.native.imptrackers,i}return null}(t[e],i[e]),r.mediaType="native"),u.push(r)}var o,c,p})),u}(r,e)},getUserSyncs:function(e){return e.iframeEnabled?[{type:"iframe",url:"https://web.archive.org/web/20211007045442/https://bh.contextweb.com/visitormatch"}]:e.pixelEnabled?[{type:"image",url:"https://web.archive.org/web/20211007045442/https://bh.contextweb.com/visitormatch/prebid"}]:void 0},transformBidParams:function(e,r){return n.convertTypes({cf:"string",cp:"number",ct:"number"},e)}};function v(e){var r=function(e){var r=n.deepAccess(e,"mediaTypes.banner.sizes");if(r&&n.isArray(r))return r.filter((function(e){return n.isArray(e)&&2===e.length})).map((function(e){return{w:e[0],h:e[1]}}));return null}(e),t=function(e,r){if(e.params.cf){var t=e.params.cf.toUpperCase().split("X");return[parseInt(e.params.cw||t[0],10),parseInt(e.params.ch||t[1],10)]}if(r&&r.length>0)return[r[0].w,r[0].h];return[1,1]}(e,r);return e.mediaTypes&&e.mediaTypes.banner?{w:t[0],h:t[1],battr:e.params.battr,format:r}:null}function b(e){return e.params.video?d({},e.params.video,e.mediaTypes&&e.mediaTypes.video?e.mediaTypes.video:{},{battr:e.params.battr}):null}function g(e){var r={},t={};return f.forEach((function(e){return t[e]=1})),Object.keys(e.params).forEach((function(n){t[n]||(r[n]=e.params[n])})),Object.keys(r).length>0?{prebid:r}:null}function h(e){if(e.nativeParams){var r=[];return y(r,function(e,r,t){if(r)return{id:e,required:r.required?1:0,title:{len:r.len||t}};return null}(r.length+1,e.nativeParams.title,s)),y(r,w(r.length+1,e.nativeParams.body,2,u)),y(r,w(r.length+1,e.nativeParams.sponsoredBy,1,o)),y(r,I(r.length+1,e.nativeParams.icon,1,p,p)),y(r,I(r.length+1,e.nativeParams.image,3,c,c)),{request:JSON.stringify({assets:r}),ver:"1.1",battr:e.params.battr}}return null}function y(e,r){r&&e.push(r)}function I(e,r,t,n,i){return r?{id:e,required:r.required?1:0,img:{type:t,wmin:r.wmin||n,hmin:r.hmin||i}}:null}function w(e,r,t,n){return r?{id:e,required:r.required?1:0,data:{type:t,len:r.len||n}}:null}function O(e,r){var t=e&&e.length>0?e[0].params.cp:"0";return e[0].params.app?null:{publisher:{id:t.toString()},ref:q(),page:r&&r.refererInfo?r.refererInfo.referer:""}}function T(e){var r=e&&e.length>0?e[0].params.cp:"0",t=e[0].params.app;return t?{publisher:{id:r.toString()},bundle:t.bundle,storeurl:t.storeUrl,domain:t.domain}:null}function q(){try{return window.top.document.referrer}catch(e){return document.referrer}}function x(e,r){var t={};if(r&&r.gdprConsent&&(t.consent=r.gdprConsent.consentString),e&&e.userId){t.eids=[],R(t.eids,e.userId.pubcid,"pubcommon"),R(t.eids,e.userId.britepoolid,"britepool.com"),R(t.eids,e.userId.criteoId,"criteo"),R(t.eids,e.userId.idl_env,"identityLink"),R(t.eids,n.deepAccess(e,"userId.id5id.uid"),"id5-sync.com",n.deepAccess(e,"userId.id5id.ext")),R(t.eids,n.deepAccess(e,"userId.parrableId.eid"),"parrable.com"),e.userId.lipb&&e.userId.lipb.lipbid&&R(t.eids,e.userId.lipb.lipbid,"liveintent.com"),R(t.eids,e.userId.tdid,"adserver.org",{rtiPartner:"TDID"});var i=e.userId.digitrustid;if(i&&i.data){var a={};i.data.id&&(a.id=i.data.id),i.data.keyv&&(a.keyv=i.data.keyv),t.digitrust=a}}return{ext:t}}function R(e,r,t,n){if(r){var i={id:r};n&&(i.ext=n),e.push({source:t,uids:[i]})}}function C(e){if(e.gdprConsent||e.uspConsent){var r={};return e.gdprConsent&&(r.gdpr=e.gdprConsent.gdprApplies?1:0),e.uspConsent&&(r.us_privacy=e.uspConsent),{ext:r}}return null}function P(e){return e?{ext:{schain:e}}:null}function k(e){var r=e.params.bidfloor;if(n.isFn(e.getFloor)){var t=e.getFloor({mediaType:e.mediaTypes.banner?"banner":e.mediaTypes.video?"video":"Native",size:"*",currency:l});t&&t.floor&&(r=t.floor)}return r}Object(i.registerBidder)(m)}},[638]);
/* RtdModule            */ pbjsChunk([123],{680:function(n,t,e){n.exports=e(681)},681:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"subModules",(function(){return m})),t.attachRealTimeDataProvider=b,t.init=T,t.setBidRequestsData=N,t.getAdUnitTargeting=O,t.deepMerge=S;var o=e(3),r=e(10),a=e(0),i=e(9),u=e.n(i),f=e(5),c=e.n(f),s=e(8),g=e(11),l=e.n(g),p=e(16);function d(n){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function v(){return(v=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n}).apply(this,arguments)}var E,h,y=[],m=[],D=[];function b(n){y.push(n)}function T(n){var t=n.getConfig("realTimeData",(function(n){var e=n.realTimeData;e.dataProviders?(t(),E=e,D=e.dataProviders,u.a.on(c.a.EVENTS.AUCTION_INIT,(function(n){m.forEach((function(t){t.onAuctionInitEvent&&t.onAuctionInitEvent(n,t.config,h)}))})),u.a.on(c.a.EVENTS.AUCTION_END,(function(n){O(n),m.forEach((function(t){t.onAuctionEndEvent&&t.onAuctionEndEvent(n,t.config,h)}))})),u.a.on(c.a.EVENTS.BID_RESPONSE,(function(n){m.forEach((function(t){t.onBidResponseEvent&&t.onBidResponseEvent(n,t.config,h)}))})),Object(p.a)().requestBids.before(N,40),function(){h=A();var n=[];D.forEach((function(t){var e=l()(y,(function(n){return n.name===t.name}));e&&e.init&&e.init(t,h)&&n.push(v(e,{config:t}))})),m=n}()):a.logError("missing parameters for real time module")}))}function A(){return{gdpr:s.gdprDataHandler.getConsentData(),usp:s.uspDataHandler.getConsentData(),coppa:!!o.b.getConfig("coppa")}}function N(n,t){h=A();var e=[],o=[];m.forEach((function(n){if("function"==typeof n.getBidRequestData){e.push(n);var t=n.config;t&&t.waitForIt&&o.push(n)}}));var r,a=o.length&&E.auctionDelay&&E.auctionDelay>0,i=o.length,u=!1;if(!e.length)return c();if(a&&(r=setTimeout(c,E.auctionDelay)),e.forEach((function(n){n.getBidRequestData(t,f.bind(n),n.config,h)})),!a)return c();function f(){if(!u)return this.config&&this.config.waitForIt&&i--,i<=0?c():void 0}function c(){u=!0,clearTimeout(r),n.call(this,t)}}function O(n){var t=m.filter((function(n){return"function"==typeof n.getTargetingData}));if(t.length){var e=n.adUnitCodes;if(e){for(var o=[],r=t.length-1;r>=0;r--){var i=t[r].getTargetingData(e,t[r].config,h);i&&"object"===d(i)?o.push(i):a.logWarn("invalid getTargetingData response for sub module",t[r].name)}var u=S(o);return n.adUnits.forEach((function(n){var t=n.code&&u[n.code];t&&(n[c.a.JSON_MAPPING.ADSERVER_TARGETING]=v(n[c.a.JSON_MAPPING.ADSERVER_TARGETING]||{},t))})),n.adUnits}}}function S(n){return Array.isArray(n)&&n.length?n.reduce((function(n,t){for(var e in t)if(t.hasOwnProperty(e))if(n.hasOwnProperty(e)){var o=t[e];for(var r in o)o.hasOwnProperty(r)&&(n[e][r]=o[r])}else n[e]=t[e];return n}),{}):{}}Object(r.c)("realTimeData",b),T(o.b)}},[680]);
/* Rubicon              */ pbjsChunk([122],{684:function(e,r,t){e.exports=t(685)},685:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return _})),r.hasVideoMediaType=O,t.d(r,"resetRubiConf",(function(){return k})),r.masSizeOrdering=R,r.determineRubiconVideoSizeId=z,r.getPriceGranularity=T,r.hasValidVideoParams=E,r.hasValidSupplyChainParams=U,r.encodeParam=P,r.resetUserSync=function(){N=!1};var n=t(0),i=t(1),o=t(3),a=t(2),s=t(11),c=t.n(s),d=t(13),u=t(16);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,i,o=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==t.return||t.return()}finally{if(s)throw i}}return o}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return g(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y="https://web.archive.org/web/20211007045442/https://video-outstream.rubiconproject.com/apex-2.0.0.js",x={};o.b.getConfig("rubicon",(function(e){n.mergeDeep(x,e.rubicon)}));var h={1:"468x60",2:"728x90",5:"120x90",7:"125x125",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",17:"240x400",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",39:"750x100",40:"750x200",41:"750x300",42:"2x4",43:"320x50",44:"300x50",48:"300x300",53:"1024x768",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",64:"580x500",65:"640x480",66:"930x600",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",85:"300x120",90:"548x150",94:"970x310",95:"970x100",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",105:"250x800",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",145:"980x150",152:"1000x250",156:"640x320",159:"320x250",179:"250x600",195:"600x300",198:"640x360",199:"640x200",213:"1030x590",214:"980x360",221:"1x1",229:"320x180",230:"2000x1400",232:"580x400",234:"6x6",251:"2x2",256:"480x820",257:"400x600",258:"500x200",259:"998x200",264:"970x1000",265:"1920x1080",274:"1800x200",278:"320x500",282:"320x400",288:"640x380",548:"500x1000",550:"980x480",552:"300x200",558:"640x640"};n._each(h,(function(e,r){return h[e]=r}));var _={code:"rubicon",gvlid:52,supportedMediaTypes:[a.b,a.d],isBidRequestValid:function(e){if("object"!==b(e.params))return!1;for(var r=0,t=["accountId","siteId","zoneId"];r<t.length;r++)if(e.params[t[r]]=parseInt(e.params[t[r]]),isNaN(e.params[t[r]]))return n.logError("Rubicon: wrong format of accountId or siteId or zoneId."),!1;var i=w(e,!0);return!!i&&("video"!==i||E(e))},buildRequests:function(e,r){var t=[],i=e.filter((function(e){return"video"===w(e)})).map((function(e){e.startTime=(new Date).getTime();var t={id:e.transactionId,test:o.b.getConfig("debug")?1:0,cur:["USD"],source:{tid:e.transactionId},tmax:r.timeout,imp:[{exp:o.b.getConfig("s2sConfig.defaultTtl"),id:e.adUnitCode,secure:1,ext:v({},e.bidder,e.params),video:n.deepAccess(e,"mediaTypes.video")||{}}],ext:{prebid:{channel:{name:"pbjs",version:pbjs.version},cache:{vastxml:{returnCreative:!0===x.returnVast}},targeting:{includewinners:!0,includebidderkeys:!1,pricegranularity:T(o.b)},bidders:{rubicon:{integration:x.int_type||"pbjs"}}}}};"rubicon"!==e.bidder&&(t.ext.prebid.aliases=v({},e.bidder,"rubicon"));var i,s,c=Object(u.a)().installedModules;if(!c||c.length&&-1===c.indexOf("rubiconAnalyticsAdapter")||n.deepSetValue(t,"ext.prebid.analytics",{rubicon:{"client-analytics":!0}}),"function"!=typeof e.getFloor||x.disableFloors)i=parseFloat(n.deepAccess(e,"params.floor"));else{var d;try{d=e.getFloor({currency:"USD",mediaType:"video",size:S(e,"video")})}catch(e){n.logError("Rubicon: getFloor threw an error: ",e)}i="object"!==b(d)||"USD"!==d.currency||isNaN(parseInt(d.floor))?void 0:parseFloat(d.floor)}(isNaN(i)||(t.imp[0].bidfloor=i),t.imp[0].ext[e.bidder].video.size_id=z(e),function(e,r,t){if(!e)return;"object"===b(o.b.getConfig("app"))?e.app=o.b.getConfig("app"):e.site={page:A(r,t)};"object"===b(o.b.getConfig("device"))&&(e.device=o.b.getConfig("device"));r.params.video.language&&["site","device"].forEach((function(t){e[t]&&(e[t].content=f({language:r.params.video.language},e[t].content))}))}(t,e,r),function(e,r){"object"===b(e.imp[0].video)&&void 0===e.imp[0].video.skip&&(e.imp[0].video.skip=r.params.video.skip);"object"===b(e.imp[0].video)&&void 0===e.imp[0].video.skipafter&&(e.imp[0].video.skipafter=r.params.video.skipdelay);"object"===b(e.imp[0].video)&&void 0===e.imp[0].video.pos&&("atf"===r.params.position?e.imp[0].video.pos=1:"btf"===r.params.position&&(e.imp[0].video.pos=3));var t=S(r,"video");e.imp[0].video.w=t[0],e.imp[0].video.h=t[1]}(t,e),r.gdprConsent)&&("boolean"==typeof r.gdprConsent.gdprApplies&&(s=r.gdprConsent.gdprApplies?1:0),n.deepSetValue(t,"regs.ext.gdpr",s),n.deepSetValue(t,"user.ext.consent",r.gdprConsent.consentString));r.uspConsent&&n.deepSetValue(t,"regs.ext.us_privacy",r.uspConsent);var p=n.deepAccess(r,"bids.0.userIdAsEids");p&&p.length&&n.deepSetValue(t,"user.ext.eids",p);var l=o.b.getConfig("user.id");l&&n.deepSetValue(t,"user.id",l),!0===o.b.getConfig("coppa")&&n.deepSetValue(t,"regs.coppa",1),e.schain&&U(e.schain)&&n.deepSetValue(t,"source.ext.schain",e.schain);var m=o.b.getConfig("multibid");return m&&n.deepSetValue(t,"ext.prebid.multibid",m.reduce((function(e,r){var t={};return Object.keys(r).forEach((function(e){t[e.toLowerCase()]=r[e]})),e.push(t),e}),[])),C(e,a.d,t),e.storedAuctionResponse&&n.deepSetValue(t.imp[0],"ext.prebid.storedauctionresponse.id",e.storedAuctionResponse.toString()),n.deepSetValue(t.imp[0],"ext.prebid.auctiontimestamp",r.auctionStart),{method:"POST",url:"https://".concat(x.videoHost||"prebid-server",".rubiconproject.com/openrtb2/auction"),data:t,bidRequest:e}}));if(!0!==x.singleRequest)t=i.concat(e.filter((function(e){return"banner"===w(e)})).map((function(e){var t=_.createSlotParams(e,r);return{method:"GET",url:"https://".concat(x.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:_.getOrderedParams(t).reduce((function(e,r){var i=t[r];return n.isStr(i)&&""!==i||n.isNumber(i)?"".concat(e).concat(P(r,i),"&"):e}),"")+"slots=1&rand=".concat(Math.random()),bidRequest:e}})));else{var s=e.filter((function(e){return"banner"===w(e)})).reduce((function(e,r){return(e[r.params.siteId]=e[r.params.siteId]||[]).push(r),e}),{});t=i.concat(Object.keys(s).reduce((function(e,t){var i,o;return(i=s[t],o=10,i.map((function(e,r){return r%o==0?i.slice(r,r+o):null})).filter((function(e){return e}))).forEach((function(t){var i=_.combineSlotUrlParams(t.map((function(e){return _.createSlotParams(e,r)})));e.push({method:"GET",url:"https://".concat(x.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:_.getOrderedParams(i).reduce((function(e,r){var t=i[r];return n.isStr(t)&&""!==t||n.isNumber(t)?"".concat(e).concat(P(r,t),"&"):e}),"")+"slots=".concat(t.length,"&rand=").concat(Math.random()),bidRequest:t})})),e}),[]))}return t},getOrderedParams:function(e){var r=/^tg_v/,t=/^tg_i/,n=/^eid_|^tpid_/,i=["account_id","site_id","zone_id","size_id","alt_size_ids","p_pos","gdpr","gdpr_consent","us_privacy","rp_schain"].concat(Object.keys(e).filter((function(e){return n.test(e)}))).concat(["x_liverampidl","ppuid","rf","p_geo.latitude","p_geo.longitude","kw"]).concat(Object.keys(e).filter((function(e){return r.test(e)}))).concat(Object.keys(e).filter((function(e){return t.test(e)}))).concat(["tk_flint","x_source.tid","x_source.pchain","p_screen_res","rp_floor","rp_secure","tk_user_key"]);return i.concat(Object.keys(e).filter((function(e){return-1===i.indexOf(e)})))},combineSlotUrlParams:function(e){if(1===e.length)return e[0];var r=e.reduce((function(r,t,n){return Object.keys(t).forEach((function(i){r.hasOwnProperty(i)||(r[i]=new Array(e.length)),r[i].splice(n,1,t[i])})),r}),{}),t=new RegExp("^([^;]*)(;\\1)+$");return Object.keys(r).forEach((function(e){var n=r[e].join(";"),i=n.match(t);r[e]=i?i[1]:n})),r},createSlotParams:function(e,r){e.startTime=(new Date).getTime();var t=e.params,i=S(e,"banner"),s=m(t.latLong||[],2),d=s[0],u=s[1],p={account_id:t.accountId,site_id:t.siteId,zone_id:t.zoneId,size_id:i[0],alt_size_ids:i.slice(1).join(",")||void 0,rp_floor:(t.floor=parseFloat(t.floor))>=.01?t.floor:void 0,rp_secure:"1",tk_flint:"".concat(x.int_type||"pbjs_lite","_v5.8.0"),"x_source.tid":e.transactionId,"x_source.pchain":t.pchain,p_screen_res:[window.screen.width,window.screen.height].join("x"),tk_user_key:t.userId,"p_geo.latitude":isNaN(parseFloat(d))?void 0:parseFloat(d).toFixed(4),"p_geo.longitude":isNaN(parseFloat(u))?void 0:parseFloat(u).toFixed(4),"tg_fl.eid":e.code,rf:A(e,r)};if("function"==typeof e.getFloor&&!x.disableFloors){var l;try{l=e.getFloor({currency:"USD",mediaType:"banner",size:"*"})}catch(e){n.logError("Rubicon: getFloor threw an error: ",e)}p.rp_hard_floor="object"!==b(l)||"USD"!==l.currency||isNaN(parseInt(l.floor))?void 0:l.floor}var f={1:"atf",3:"btf"}[n.deepAccess(e,"mediaTypes.banner.pos")]||"";p.p_pos="atf"===t.position||"btf"===t.position?t.position:f;var g=o.b.getConfig("user.id");return g&&(p.ppuid=g),e.userIdAsEids&&e.userIdAsEids.forEach((function(e){try{if("adserver.org"===e.source?(p.tpid_tdid=e.uids[0].id,p["eid_adserver.org"]=e.uids[0].id):"liveintent.com"===e.source?(p["tpid_liveintent.com"]=e.uids[0].id,p["eid_liveintent.com"]=e.uids[0].id,e.ext&&Array.isArray(e.ext.segments)&&e.ext.segments.length&&(p["tg_v.LIseg"]=e.ext.segments.join(","))):"liveramp.com"===e.source?p.x_liverampidl=e.uids[0].id:"id5-sync.com"===e.source?p["eid_id5-sync.com"]="".concat(e.uids[0].id,"^").concat(e.uids[0].atype,"^").concat(e.uids[0].ext&&e.uids[0].ext.linkType||""):p["eid_".concat(e.source)]="".concat(e.uids[0].id,"^").concat(e.uids[0].atype||""),!p.ppuid){var r=c()(e.uids,(function(e){return e.ext&&"ppuid"===e.ext.stype}));r&&r.id&&(p.ppuid=r.id)}}catch(r){n.logWarn("Rubicon: error reading eid:",e,r)}})),r.gdprConsent&&("boolean"==typeof r.gdprConsent.gdprApplies&&(p.gdpr=Number(r.gdprConsent.gdprApplies)),p.gdpr_consent=r.gdprConsent.consentString),r.uspConsent&&(p.us_privacy=encodeURIComponent(r.uspConsent)),p.rp_maxbids=r.bidLimit||1,C(e,a.b,p),!0===o.b.getConfig("coppa")&&(p.coppa=1),e.schain&&U(e.schain)&&(p.rp_schain=_.serializeSupplyChain(e.schain)),p},serializeSupplyChain:function(e){if(!U(e))return"";var r=e.ver,t=e.complete,n=e.nodes;return"".concat(r,",").concat(t,"!").concat(_.serializeSupplyChainNodes(n))},serializeSupplyChainNodes:function(e){var r=["asi","sid","hp","rid","name","domain"];return e.map((function(e){return r.map((function(r){return encodeURIComponent(e[r]||"")})).join(",")})).join("!")},interpretResponse:function(e,r){var t=r.bidRequest;if(!(e=e.body)||"object"!==b(e))return[];if(e.seatbid){var i=n.deepAccess(e,"ext.errors.rubicon");Array.isArray(i)&&i.length>0&&n.logWarn("Rubicon: Error in video response");var o=[];return e.seatbid.forEach((function(r){(r.bid||[]).forEach((function(i){var s={requestId:t.bidId,currency:e.cur||"USD",creativeId:i.crid,cpm:i.price||0,bidderCode:r.seat,ttl:300,netRevenue:!1!==x.netRevenue,width:i.w||n.deepAccess(t,"mediaTypes.video.w")||n.deepAccess(t,"params.video.playerWidth"),height:i.h||n.deepAccess(t,"mediaTypes.video.h")||n.deepAccess(t,"params.video.playerHeight")};i.id&&(s.seatBidId=i.id),i.dealid&&(s.dealId=i.dealid),i.adomain&&n.deepSetValue(s,"meta.advertiserDomains",Array.isArray(i.adomain)?i.adomain:[i.adomain]),n.deepAccess(i,"ext.bidder.rp.advid")&&n.deepSetValue(s,"meta.advertiserId",i.ext.bidder.rp.advid);var c=n.deepAccess(e,"ext.responsetimemillis.rubicon");if(t&&c&&(t.serverResponseTimeMs=c),n.deepAccess(i,"ext.prebid.type")===a.d){s.mediaType=a.d,n.deepSetValue(s,"meta.mediaType",a.d);var u=n.deepAccess(i,"ext.prebid.targeting");u&&"object"===b(u)&&(s.adserverTargeting=u),i.ext.prebid.cache&&"object"===b(i.ext.prebid.cache.vastXml)&&i.ext.prebid.cache.vastXml.cacheId&&i.ext.prebid.cache.vastXml.url?(s.videoCacheKey=i.ext.prebid.cache.vastXml.cacheId,s.vastUrl=i.ext.prebid.cache.vastXml.url):u&&u.hb_uuid&&u.hb_cache_host&&u.hb_cache_path&&(s.videoCacheKey=u.hb_uuid,s.vastUrl="https://".concat(u.hb_cache_host).concat(u.hb_cache_path,"?uuid=").concat(u.hb_uuid)),i.adm&&(s.vastXml=i.adm),i.nurl&&(s.vastUrl=i.nurl),!s.vastUrl&&i.nurl&&(s.vastUrl=i.nurl),"outstream"===n.deepAccess(t,"mediaTypes.video.context").toLowerCase()&&(s.renderer=function(e){var r=d.a.install({id:e.adId,url:x.rendererUrl||y,config:x.rendererConfig||{},loaded:!1,adUnitCode:e.adUnitCode});try{r.setRender(j)}catch(e){n.logWarn("Prebid Error calling setRender on renderer",e)}return r}(s))}else n.logWarn("Rubicon: video response received non-video media type");o.push(s)}))})),o}var s,c=e.ads,u=0;return"object"!==b(t)||Array.isArray(t)||"video"!==w(t)||"object"!==b(c)||(c=c[t.adUnitCode]),!Array.isArray(c)||c.length<1?[]:c.reduce((function(r,i,o){if(i.impression_id&&s===i.impression_id?u++:s=i.impression_id,"ok"!==i.status)return r;var c,d,p=Array.isArray(t)?t[o-u]:t;if(p&&"object"===b(p)){var l={requestId:p.bidId,currency:"USD",creativeId:i.creative_id||"".concat(i.network||"","-").concat(i.advertiser||""),cpm:i.cpm||0,dealId:i.deal,ttl:300,netRevenue:!1!==x.netRevenue,rubicon:{advertiserId:i.advertiser,networkId:i.network},meta:{advertiserId:i.advertiser,networkId:i.network,mediaType:a.b}};if(i.creative_type&&(l.mediaType=i.creative_type),i.adomain&&(l.meta.advertiserDomains=Array.isArray(i.adomain)?i.adomain:[i.adomain]),i.creative_type===a.d)l.width=p.params.video.playerWidth,l.height=p.params.video.playerHeight,l.vastUrl=i.creative_depot_url,l.impression_id=i.impression_id,l.videoCacheKey=i.impression_id;else{l.ad=(c=i.script,d=i.impression_id,"<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(d,"'>\n<script type='text/javascript'>").concat(c,"<\/script>\n</div>\n</body>\n</html>"));var f=m(h[i.size_id].split("x").map((function(e){return Number(e)})),2);l.width=f[0],l.height=f[1]}l.rubiconTargeting=(Array.isArray(i.targeting)?i.targeting:[]).reduce((function(e,r){return e[r.key]=r.values[0],e}),{rpfl_elemid:p.adUnitCode}),r.push(l)}else n.logError("Rubicon: bidRequest undefined at index position:".concat(o),t,e);return r}),[]).sort((function(e,r){return(r.cpm||0)-(e.cpm||0)}))},getUserSyncs:function(e,r,t,n){if(!N&&e.iframeEnabled){var i="";return t&&"string"==typeof t.consentString&&("boolean"==typeof t.gdprApplies?i+="?gdpr=".concat(Number(t.gdprApplies),"&gdpr_consent=").concat(t.consentString):i+="?gdpr_consent=".concat(t.consentString)),n&&(i+="".concat(i?"&":"?","us_privacy=").concat(encodeURIComponent(n))),N=!0,{type:"iframe",url:"https://".concat(x.syncHost||"eus",".rubiconproject.com/usync.html")+i}}},transformBidParams:function(e,r){return n.convertTypes({accountId:"number",siteId:"number",zoneId:"number"},e)}};function A(e,r){var t=o.b.getConfig("pageUrl");return e.params.referrer?t=e.params.referrer:t||(t=r.refererInfo.referer),e.params.secure?t.replace(/^http:/i,"https:"):t}function j(e){var r,t=document.getElementById(e.adUnitCode);(r=t.querySelector("div[id^='google_ads']"))&&r.style.setProperty("display","none"),function(e){var r=e.querySelector("script[id^='sas_script']"),t=r&&r.nextSibling;t&&"iframe"===t.localName&&t.style.setProperty("display","none")}(t);var n=e.renderer.getConfig();e.renderer.push((function(){window.MagniteApex.renderAd({width:e.width,height:e.height,vastUrl:e.vastUrl,placement:{attachTo:"#".concat(e.adUnitCode),align:n.align||"center",position:n.position||"append"},closeButton:n.closeButton||!1,label:n.label||void 0,collapse:n.collapse||!0})}))}function S(e,r){var t=e.params;if("video"===r){var i=[];return t.video&&t.video.playerWidth&&t.video.playerHeight?i=[t.video.playerWidth,t.video.playerHeight]:Array.isArray(n.deepAccess(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?i=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&e.sizes.length>0&&Array.isArray(e.sizes[0])&&e.sizes[0].length>1&&(i=e.sizes[0]),i}var o=[];return Array.isArray(t.sizes)?o=t.sizes:void 0!==n.deepAccess(e,"mediaTypes.banner.sizes")?o=I(e.mediaTypes.banner.sizes):Array.isArray(e.sizes)&&e.sizes.length>0?o=I(e.sizes):n.logWarn("Rubicon: no sizes are setup or found"),R(o)}function C(e,r,t){var i={user:{ext:{data:l({},e.params.visitor)}},site:{ext:{data:l({},e.params.inventory)}}};e.params.keywords&&(i.site.keywords=n.isArray(e.params.keywords)?e.params.keywords.join(","):e.params.keywords);var s=n.mergeDeep({},o.b.getConfig("ortb2")||{},i),c=n.deepAccess(e.ortb2Imp,"ext.data")||{},d={user:[4],site:[1,2,5,6]},u={user:"tg_v.",site:"tg_i.",adserver:"tg_i.dfp_ad_unit_code",pbadslot:"tg_i.pbadslot",keywords:"kw"},p=function(e,r,t){if("data"===r&&Array.isArray(e))return e.filter((function(e){return e.segment&&n.deepAccess(e,"ext.segtax")&&d[t]&&-1!==d[t].indexOf(n.deepAccess(e,"ext.segtax"))})).map((function(e){var r=e.segment.filter((function(e){return e.id})).reduce((function(e,r){return e.push(r.id),e}),[]);if(r.length>0)return r.toString()})).toString();if("object"!==b(e)||Array.isArray(e)){if(void 0!==e)return Array.isArray(e)?e.filter((function(e){if("object"!==b(e)&&void 0!==e)return e.toString();n.logWarn("Rubicon: Filtered value: ",e,"for key",r,": Expected value to be string, integer, or an array of strings/ints")})).toString():e.toString()}else n.logWarn("Rubicon: Filtered FPD key: ",r,": Expected value to be string, integer, or an array of strings/ints")},f=function(e,r,n){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=p(e,n,r),a=u[n]&&i?"".concat(u[n]):"data"===n?"".concat(u[r],"iab"):"".concat(u[r]).concat(n);t[a]=t[a]?t[a].concat(",",o):o};Object.keys(c).forEach((function(e){"adserver"===e?["name","adslot"].forEach((function(r){c[e][r]&&(c[e][r]=c[e][r].toString().replace(/^\/+/,""))})):"pbadslot"===e&&(c[e]=c[e].toString().replace(/^\/+/,""))})),r===a.b?(["site","user"].forEach((function(e){Object.keys(s[e]).forEach((function(r){"site"===e&&"content"===r&&s[e][r].data?f(s[e][r].data,e,"data"):"ext"!==r?f(s[e][r],e,r):s[e][r].data&&Object.keys(s[e].ext.data).forEach((function(r){f(s[e].ext.data[r],e,r,!1)}))}))})),Object.keys(c).forEach((function(e){"adserver"===e?f(c[e].adslot,name,e):f(c[e],"site",e)}))):(Object.keys(c).length&&n.mergeDeep(t.imp[0].ext,{data:c}),n.mergeDeep(t,s))}function I(e){return n.parseSizesInput(e).reduce((function(e,r){var t=parseInt(h[r],10);return t&&e.push(t),e}),[])}function O(e){return"object"===b(n.deepAccess(e,"params.video"))&&void 0!==n.deepAccess(e,"mediaTypes.".concat(a.d))}function w(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return O(e)?-1===["outstream","instream"].indexOf(n.deepAccess(e,"mediaTypes.".concat(a.d,".context")))?void(r&&n.logError("Rubicon: mediaTypes.video.context must be outstream or instream")):S(e,"video").length<2?void(r&&n.logError("Rubicon: could not determine the playerSize of the video")):(r&&n.logMessage("Rubicon: making video request for adUnit",e.adUnitCode),"video"):0===S(e,"banner").length?void(r&&n.logError("Rubicon: could not determine the sizes for banner request")):(r&&n.logMessage("Rubicon: making banner request for adUnit",e.adUnitCode),"banner")}var k=function(){return x={}};function R(e){var r=[15,2,9];return e.sort((function(e,t){var n=r.indexOf(e),i=r.indexOf(t);return n>-1||i>-1?-1===n?1:-1===i?-1:n-i:e-t}))}function z(e){var r=parseInt(n.deepAccess(e,"params.video.size_id"));return isNaN(r)?"outstream"===n.deepAccess(e,"mediaTypes.".concat(a.d,".context"))?203:201:r}function T(e){return{ranges:{low:[{max:5,increment:.5}],medium:[{max:20,increment:.1}],high:[{max:20,increment:.01}],auto:[{max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}],dense:[{max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}],custom:e.getConfig("customPriceBucket")&&e.getConfig("customPriceBucket").buckets}[e.getConfig("priceGranularity")]}}function E(e){var r=!0,t=Object.prototype.toString.call([]),i={mimes:t,protocols:t,linearity:Object.prototype.toString.call(0),api:t};return Object.keys(i).forEach((function(t){Object.prototype.toString.call(n.deepAccess(e,"mediaTypes.video."+t))!==i[t]&&(r=!1,n.logError("Rubicon: mediaTypes.video."+t+" is required and must be of type: "+i[t]))})),r}function U(e){var r=!1,t=["asi","sid","hp"];return e.nodes?((r=e.nodes.reduce((function(e,r){return e?t.every((function(e){return r.hasOwnProperty(e)})):e}),!0))||n.logError("Rubicon: required schain params missing"),r):r}function P(e,r){return"rp_schain"===e?"rp_schain=".concat(r):"".concat(e,"=").concat(encodeURIComponent(r))}var N=!1;Object(i.registerBidder)(_)}},[684]);
/* Teads                */ pbjsChunk([100],{748:function(e,r,t){e.exports=t(749)},749:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"storage",(function(){return v})),t.d(r,"spec",(function(){return l}));var n=t(1),i=t(7),a=t(0);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var c="teads",p=12,u=11,f=0,g=22,y="_tfpvi",v=Object(i.b)(132,c),l={code:c,gvlid:132,supportedMediaTypes:["video","banner"],isBidRequestValid:function(e){var r=!1;if(void 0!==e.params){var t=h(a.getValue(e.params,"placementId")),n=h(a.getValue(e.params,"pageId"));r=t&&n}return r||a.logError("Teads placementId and pageId parameters are required. Bid aborted."),r},buildRequests:function(e,r){var t,n,i=e.map(I),o=s(s(s({referrer:m(r),pageReferrer:document.referrer,networkBandwidth:(n=window.navigator,n&&n.connection&&n.connection.downlink>=0?n.connection.downlink.toString():""),timeToFirstByte:b(window),data:i,deviceWidth:screen.width,hb_version:"5.8.0"},function(e){if(!e)return{};var r=e.id?{cohortId:e.id}:{},t=e.version?{cohortVersion:e.version}:{};return s(s({},r),t)}(a.deepAccess(e,"0.userId.flocId"))),(t=a.deepAccess(e,"0.userId.uid2"))?{unifiedId2:t.id}:{}),function(){if(!v.cookiesAreEnabled())return{};var e=v.getCookie(y);return e?{firstPartyCookieTeadsId:e}:{}}());e[0].schain&&(o.schain=e[0].schain);var d=r.gdprConsent;if(r&&d){var c="boolean"==typeof d.gdprApplies,l="string"==typeof d.consentString,h=c?function(e,r,t){var n=p;e?function(e,r){return e&&1===r?e.hasGlobalScope||e.hasGlobalConsent:!(!e||2!==r)&&!e.isServiceSpecific}(r,t)&&(n=u):n=f;return n}(d.gdprApplies,d.vendorData,d.apiVersion):g;o.gdpr_iab={consent:l?d.consentString:"",status:h,apiVersion:d.apiVersion}}return r&&r.uspConsent&&(o.us_privacy=r.uspConsent),{method:"POST",url:"https://web.archive.org/web/20211007045442/https://a.teads.tv/hb/bid-request",data:JSON.stringify(o)}},interpretResponse:function(e,r){var t=[];return(e=e.body).responses&&e.responses.forEach((function(e){var r={cpm:e.cpm,width:e.width,height:e.height,currency:e.currency,netRevenue:!0,ttl:e.ttl,meta:{advertiserDomains:e&&e.adomain?e.adomain:[]},ad:e.ad,requestId:e.bidId,creativeId:e.creativeId,placementId:e.placementId};e.dealId&&(r.dealId=e.dealId),t.push(r)})),t}};function m(e){var r="";return e&&e.refererInfo&&e.refererInfo.referer&&(r=e.refererInfo.referer),r}function b(e){var r=e.performance||e.webkitPerformance||e.msPerformance||e.mozPerformance,t=r&&"function"==typeof r.getEntriesByType&&"[object Function]"===Object.prototype.toString.call(r.getEntriesByType)&&r.getEntriesByType("navigation")[0]&&r.getEntriesByType("navigation")[0].responseStart&&r.getEntriesByType("navigation")[0].requestStart&&r.getEntriesByType("navigation")[0].responseStart>0&&r.getEntriesByType("navigation")[0].requestStart>0&&Math.round(r.getEntriesByType("navigation")[0].responseStart-r.getEntriesByType("navigation")[0].requestStart);if(t)return t.toString();var n=r&&r.timing.responseStart&&r.timing.requestStart&&r.timing.responseStart>0&&r.timing.requestStart>0&&r.timing.responseStart-r.timing.requestStart;return n?n.toString():""}function I(e){var r={},t=a.getValue(e.params,"placementId"),n=a.getValue(e.params,"pageId");return r.sizes=function(e){return a.parseSizesInput(function(e){var r=a.deepAccess(e,"mediaTypes.video.playerSize"),t=a.deepAccess(e,"mediaTypes.video.sizes"),n=a.deepAccess(e,"mediaTypes.banner.sizes");return a.isArray(n)||a.isArray(r)||a.isArray(t)?[n,t,r].reduce((function(e,r){return a.isArray(r)&&(a.isArray(r[0])?r.forEach((function(r){e.push(r)})):e.push(r)),e}),[]):e.sizes}(e))}(e),r.bidId=a.getBidIdParameter("bidId",e),r.bidderRequestId=a.getBidIdParameter("bidderRequestId",e),r.placementId=parseInt(t,10),r.pageId=parseInt(n,10),r.adUnitCode=a.getBidIdParameter("adUnitCode",e),r.auctionId=a.getBidIdParameter("auctionId",e),r.transactionId=a.getBidIdParameter("transactionId",e),r}function h(e){return parseInt(e)>0}Object(n.registerBidder)(l)}},[748]);
/* TripleLift           */ pbjsChunk([94],{762:function(e,r,t){e.exports=t(763)},763:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"tripleliftAdapterSpec",(function(){return b}));var n=t(2),i=t(1),o=t(0),u=t(3);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var y=!0,m=null,b={gvlid:28,code:"triplelift",supportedMediaTypes:[n.b,n.d],isBidRequestValid:function(e){return void 0!==e.params.inventoryCode},buildRequests:function(e,r){var t="https://web.archive.org/web/20211007045442/https://tlx.3lift.com/header/auction?",n=function(e){var r={},t=e[0].schain,n=function(){var e={},r={},t={},n=u.b.getLegacyFpd(u.b.getConfig("ortb2"))||{},i=a({},n.context),p=a({},n.user);S(r,i),S(t,p),o.isEmpty(r)||(e.context=r);o.isEmpty(t)||(e.user=t);return e}();r.imp=e.map((function(e,r){var t={id:r,tagid:e.params.inventoryCode,floor:v(e)};return g(e)?t.video=function(e){var r=d(d({},e.params.video),e.mediaTypes.video);r.w||(r.w=r.playerSize[0][0]);r.h||(r.h=r.playerSize[0][1]);"instream"===r.context&&(r.placement=1);return delete r.playerSize,r}(e):e.mediaTypes.banner&&(t.banner={format:O(e.sizes)}),o.isEmpty(e.ortb2Imp)||(t.fpd=function(e){var r={},t={};S(t,e.ext),o.isEmpty(t)||(r.context=t);return r}(e.ortb2Imp)),t}));var i=[].concat(f((p=[e[0]],h(p,"tdid","adserver.org","TDID"))),f(function(e){return h(e,"idl_env","liveramp.com","idl")}([e[0]])),f(function(e){return h(e,"criteoId","criteo.com","criteoId")}([e[0]])),f(function(e){return h(e,"pubcid","pubcid.org","pubcid")}([e[0]])));var p;i.length>0&&(r.user={ext:{eids:i}});var c=function(e,r){var t={};o.isEmpty(e)||(t.schain=d({},e));o.isEmpty(r)||(t.fpd=d({},r));return t}(t,n);o.isEmpty(c)||(r.ext=c);return r}(e);if(t=o.tryAppendQueryString(t,"lib","prebid"),t=o.tryAppendQueryString(t,"v","5.8.0"),r&&r.refererInfo){var i=r.refererInfo.referer;t=o.tryAppendQueryString(t,"referrer",i)}return r&&r.timeout&&(t=o.tryAppendQueryString(t,"tmax",r.timeout)),r&&r.gdprConsent&&(void 0!==r.gdprConsent.gdprApplies&&(y=r.gdprConsent.gdprApplies,t=o.tryAppendQueryString(t,"gdpr",y.toString())),void 0!==r.gdprConsent.consentString&&(m=r.gdprConsent.consentString,t=o.tryAppendQueryString(t,"cmp_cs",m))),r&&r.uspConsent&&(t=o.tryAppendQueryString(t,"us_privacy",r.uspConsent)),!0===u.b.getConfig("coppa")&&(t=o.tryAppendQueryString(t,"coppa",!0)),t.lastIndexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),o.logMessage("tlCall request built: "+t),{method:"POST",url:t,data:n,bidderRequest:r}},interpretResponse:function(e,r){var t=r.bidderRequest;return(e.body.bids||[]).map((function(e){return function(e,r){var t={},n=r.width||1,i=r.height||1,o=r.deal_id||"",u=r.crid||"",a=e.bids[r.imp_id];0!=r.cpm&&r.ad&&(t={requestId:a.bidId,cpm:r.cpm,width:n,height:i,netRevenue:!0,ad:r.ad,creativeId:u,dealId:o,currency:"USD",ttl:300,tl_source:r.tl_source,meta:{}},g(a)&&(t.vastXml=r.ad,t.mediaType="video"),r.advertiser_name&&(t.meta.advertiserName=r.advertiser_name),r.adomain&&r.adomain.length&&(t.meta.advertiserDomains=r.adomain),r.tl_source&&"hdx"==r.tl_source&&(t.meta.mediaType="banner"),r.tl_source&&"tlx"==r.tl_source&&(t.meta.mediaType="native"));return t}(t,e)}))},getUserSyncs:function(e,r,t,n){var i=function(e){if(!e)return;if(e.iframeEnabled)return"iframe";if(e.pixelEnabled)return"image"}(e);if(i){var u="https://web.archive.org/web/20211007045442/https://eb2.3lift.com/sync?";return"image"===i&&(u=o.tryAppendQueryString(u,"px",1),u=o.tryAppendQueryString(u,"src","prebid")),null!==m&&(u=o.tryAppendQueryString(u,"gdpr",y),u=o.tryAppendQueryString(u,"cmp_cs",m)),n&&(u=o.tryAppendQueryString(u,"us_privacy",n)),[{type:i,url:u}]}}};function g(e){return!!e.mediaTypes.video&&(!!e.mediaTypes.video.context&&"instream"===e.mediaTypes.video.context.toLowerCase())}function v(e){var r=null;if("function"==typeof e.getFloor){var t=e.getFloor({currency:"USD",mediaType:g(e)?"video":"banner",size:"*"});"object"!==p(t)||"USD"!==t.currency||isNaN(parseFloat(t.floor))||(r=parseFloat(t.floor))}return null!==r?r:e.params.floor}function S(e,r){o.isEmpty(r)||Object.keys(r).forEach((function(t){null!=r[t]&&(e[t]=r[t])}))}function h(e,r,t,n){return e.map(function(e){return function(r){return r&&r.userId&&r.userId[e]}}(r)).filter((function(e){return!!e})).map(function(e,r){return function(t){return{source:e,uids:[{id:t,ext:{rtiPartner:r}}]}}}(t,n))}function O(e){return e.filter(A).map((function(e){return{w:e[0],h:e[1]}}))}function A(e){return 2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]}Object(i.registerBidder)(b)}},[762]);
/* Vidazoo              */ pbjsChunk([81],{795:function(e,t,r){e.exports=r(796)},796:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"SUPPORTED_ID_SYSTEMS",(function(){return p})),t.createDomain=g,t.extractCID=v,t.extractPID=b,t.extractSubDomain=f,t.hashCode=I,t.getNextDealId=D,t.getUniqueDealId=m,t.getVidazooSessionId=S,t.getStorageItem=C,t.setStorageItem=y,t.tryParseJSON=x,r.d(t,"spec",(function(){return _}));var n=r(0),i=r(1),a=r(2),o=r(7),d="prebid",c="1.0.0",u=9e5,s=9e5,p={britepoolid:1,criteoId:1,digitrustid:1,id5id:1,idl_env:1,lipb:1,netId:1,parrableId:1,pubcid:1,tdid:1},l=Object(o.b)(744);function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return"https://".concat(e,".cootlogix.com")}function v(e){return e.cId||e.CID||e.cID||e.CId||e.cid||e.ciD||e.Cid||e.CiD}function b(e){return e.pId||e.PID||e.pID||e.PId||e.pid||e.piD||e.Pid||e.PiD}function f(e){return e.subDomain||e.SubDomain||e.Subdomain||e.subdomain||e.SUBDOMAIN||e.subDOMAIN}function h(e,t,r,i){var a,o,d,u=e.params,s=e.bidId,l=e.userId,h=e.adUnitCode,C=u.bidFloor,y=u.ext,x=I(t),_=D(x),P=m(x),O=S(),U=v(u),w=b(u),R=f(u),A={url:encodeURIComponent(t),cb:Date.now(),bidFloor:C,bidId:s,adUnitCode:h,publisherId:w,sessionId:O,sizes:r,dealId:_,uniqueDealId:P,bidderVersion:c,prebidVersion:"5.8.0",res:"".concat(screen.width,"x").concat(screen.height)};a=A,o=l,n._each(o,(function(e,t){if(p[t])switch(d="uid.".concat(t),t){case"digitrustid":a[d]=n.deepAccess(e,"data.id");break;case"lipb":a[d]=e.lipbid;break;case"parrableId":a[d]=e.eid;break;case"id5id":a[d]=e.uid;break;default:a[d]=e}})),i.gdprConsent&&(i.gdprConsent.consentString&&(A.gdprConsent=i.gdprConsent.consentString),void 0!==i.gdprConsent.gdprApplies&&(A.gdpr=i.gdprConsent.gdprApplies?1:0)),i.uspConsent&&(A.usPrivacy=i.uspConsent);var E={method:"POST",url:"".concat(g(R),"/prebid/multi/").concat(U),data:A};return n._each(y,(function(e,t){E.data["ext."+t]=e})),E}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_",r=e.length,n=0,i=0;if(r>0)for(;i<r;)n=(n<<5)-n+e.charCodeAt(i++)|0;return t+n}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;try{var r,n=C(e),i=0;n&&n.value&&Date.now()-n.created<t&&(i=n.value,r=n.created);var a=i+1;return y(e,a,r),a}catch(e){return 0}}function m(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,n="u_".concat(e),i=Date.now(),a=C(n);return!a||!a.value||i-a.created>r?y(n,t="".concat(e,"_").concat(i.toString())):t=a.value,t}function S(){return C("vidSid")||""}function C(e){try{return x(l.getDataFromLocalStorage(e))}catch(e){}return null}function y(e,t,r){try{var n=r||Date.now(),i=JSON.stringify({value:t,created:n});l.setDataInLocalStorage(e,i)}catch(e){}}function x(e){try{return JSON.parse(e)}catch(t){return e}}var _={code:"vidazoo",version:c,gvlid:744,supportedMediaTypes:[a.b],isBidRequestValid:function(e){var t=e.params||{};return!(!v(t)||!b(t))},buildRequests:function(e,t){var r=t.refererInfo.referer,i=[];return e.forEach((function(e){var a=n.parseSizesInput(e.sizes),o=h(e,r,a,t);i.push(o)})),i},interpretResponse:function(e,t){if(!e||!e.body)return[];var r=t.data.bidId,n=e.body.results,i=[];try{return n.forEach((function(e){var t=e.creativeId,n=e.ad,a=e.price,o=e.exp,d=e.width,c=e.height,u=e.currency,s=e.advertiserDomains;n&&a&&i.push({requestId:r,cpm:a,width:d,height:c,creativeId:t,currency:u||"USD",netRevenue:!0,ttl:o||300,ad:n,meta:{advertiserDomains:s||[]}})})),i}catch(e){return[]}},getUserSyncs:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=[],a=e.iframeEnabled,o=e.pixelEnabled,d=r.gdprApplies,c=r.consentString,u=void 0===c?"":c,s="?gdpr=".concat(d?1:0,"&gdpr_consent=").concat(encodeURIComponent(u||""),"&us_privacy=").concat(encodeURIComponent(n||""));return a&&i.push({type:"iframe",url:"https://web.archive.org/web/20211007045442/https://prebid.cootlogix.com/api/sync/iframe/".concat(s)}),o&&i.push({type:"image",url:"https://web.archive.org/web/20211007045442/https://prebid.cootlogix.com/api/sync/image/".concat(s)}),i}};Object(i.registerBidder)(_)}},[795]);
/* Yieldmo              */ pbjsChunk([66],{825:function(e,r,t){e.exports=t(826)},826:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",(function(){return w}));var n=t(0),i=t(2),o=t(1),a=t(13),c=t(12),d=t.n(c),u=t(11),s=t.n(u);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f="USD",m=300,l=!0,v="https://web.archive.org/web/20211007045442/https://ads.yieldmo.com/exchange/prebid",y="https://web.archive.org/web/20211007045442/https://prebid-outstream.yieldmo.com/bundle.js",g=["mimes","startdelay","placement","startdelay","skipafter","protocols","api","playbackmethod","maxduration","minduration","pos","skip","skippable"],b=["name","domain","cat","keywords"],h=n.getWindowTop(),A=["description","title","pr","page_url"],w={code:"yieldmo",supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){return!!(e&&e.adUnitCode&&e.bidId&&(x(e)||S(e))&&function(e){if(!S(e))return!0;var r=function(e,r,t){var n='"'.concat(e,'" is required');throw t&&(n+=" when "+t),new Error(n)},t=function(e,r,t){throw t=t?", expected: "+t:"",r=JSON.stringify(r),new Error('"'.concat(e,'"=').concat(r," is invalid").concat(t))},i=function(e){return void 0!==e},o=function(r,t,i,o){if(0===r.indexOf("video")){var a="params."+r,c="mediaTypes."+r,d=n.deepAccess(e,a),u=n.deepAccess(e,c),s=t(d),p=t(u);return s?d:p||(s?p||i(c,u,o):i(a,d,o),d||u)}var f=n.deepAccess(e,r);return t(f)||i(r,f,o),f};try{o("video.context",(function(e){return!n.isEmpty(e)}),r),o("params.placementId",(function(e){return!n.isEmpty(e)}),r),o("video.playerSize",(function(e){return n.isArrayOfNums(e,2)||n.isArray(e)&&e.every((function(e){return n.isArrayOfNums(e,2)}))}),t,"array of 2 integers, ex: [640,480] or [[640,480]]"),o("video.mimes",(function(e){return i(e)}),r),o("video.mimes",(function(e){return n.isArray(e)&&e.every((function(e){return n.isStr(e)}))}),t,'array of strings, ex: ["video/mp4"]');var a=o("video.placement",(function(e){return i(e)}),r);return o("video.placement",(function(e){return e>=1&&e<=5}),t),1===a&&(o("video.startdelay",(function(e){return i(e)}),(function(e,t){return r(e,t,"placement == 1")})),o("video.startdelay",(function(e){return n.isNumber(e)}),t,"number, ex: 5")),o("video.protocols",(function(e){return i(e)}),r),o("video.protocols",(function(e){return n.isArrayOfNums(e)&&e.every((function(e){return e>=1&&e<=6}))}),t,"array of numbers, ex: [2,3]"),o("video.api",(function(e){return i(e)}),r),o("video.api",(function(e){return n.isArrayOfNums(e)&&e.every((function(e){return e>=1&&e<=6}))}),t,"array of numbers, ex: [2,3]"),o("video.playbackmethod",(function(e){return!i(e)||n.isArrayOfNums(e)}),t,"array of integers, ex: [2,6]"),o("video.maxduration",(function(e){return i(e)}),r),o("video.maxduration",(function(e){return n.isInteger(e)}),t),o("video.minduration",(function(e){return!i(e)||n.isNumber(e)}),t),o("video.skippable",(function(e){return!i(e)||n.isBoolean(e)}),t),o("video.skipafter",(function(e){return!i(e)||n.isNumber(e)}),t),o("video.pos",(function(e){return!i(e)||n.isNumber(e)}),t),o("params.badv",(function(e){return!i(e)||n.isArray(e)}),t,'array of strings, ex: ["ford.com","pepsi.com"]'),o("params.bcat",(function(e){return!i(e)||n.isArray(e)}),t,'array of strings, ex: ["IAB1-5","IAB1-6"]'),!0}catch(e){return n.logError(e.message),!1}}(e))},buildRequests:function(e,r){var t=e.filter((function(e){return x(e)})),o=e.filter((function(e){return S(e)})),a=[];if(t.length>0){var c={pbav:"5.8.0",p:[],page_url:r.refererInfo.referer,bust:(new Date).getTime().toString(),pr:h.document&&h.document.referrer||"",scrd:h.devicePixelRatio||0,dnt:"1"===window.doNotTrack||"1"===window.navigator.doNotTrack||!1,description:k(),title:h.document.title||"",w:h.innerWidth,h:h.innerHeight,userConsent:JSON.stringify({gdprApplies:n.deepAccess(r,"gdprConsent.gdprApplies")||"",cmp:n.deepAccess(r,"gdprConsent.consentString")||""}),us_privacy:n.deepAccess(r,"uspConsent")||""},u=window.navigator.maxTouchPoints;u&&(c.mtp=u),t.forEach((function(e){c.p.push(function(e){var r={placement_id:e.adUnitCode,callback_id:e.bidId,sizes:e.mediaTypes.banner.sizes};if(e.params){e.params.placementId&&(r.ym_placement_id=e.params.placementId);var t=I(e,i.b);t&&(r.bidFloor=t)}return JSON.stringify(r)}(e));var r=T(e,"pubcid");r?c.pubcid=r:e.crumbs&&e.crumbs.pubcid&&(c.pubcid=e.crumbs.pubcid);var t=T(e,"tdid");t&&(c.tdid=t);var o=T(e,"criteoId");o&&(c.cri_prebid=o),e.schain&&(c.schain=JSON.stringify(e.schain)),n.deepAccess(e,"params.lr_env")&&(c.ats_envelope=e.params.lr_env)})),c.p="["+c.p.toString()+"]";var s="".concat(v,"?").concat(n.parseQueryStringParameters(c)).length-8e3;if(s>0)for(var p=0;p<A.length&&!((s=O(s,c,A[p]))<=0);p++);a.push({method:"GET",url:v,data:c})}if(o.length>0){var f=function(e,r){var t={id:e[0].bidderRequestId,at:1,imp:e.map((function(e){return function(e){var r=function(e){var r=n.deepAccess(e,"mediaTypes.video.playerSize");if(n.isArrayOfNums(r,2))return r;if(n.isArray(r)&&n.isArrayOfNums(r[0],2))return r[0];return null}(e),t={id:e.bidId,tagid:e.adUnitCode,bidfloor:I(e,i.d),ext:{placement_id:e.params.placementId},video:{w:r[0],h:r[1],linearity:1}},o=n.deepAccess(e,"mediaTypes.video");Object.keys(o).filter((function(e){return d()(g,e)})).forEach((function(e){return t.video[e]=o[e]}));var a=n.deepAccess(e,"params.video");Object.keys(a).filter((function(e){return d()(g,e)})).forEach((function(e){return t.video[e]=a[e]})),t.video.skippable&&(t.video.skip=1,delete t.video.skippable);1!==t.video.placement&&(t.video.startdelay=0,t.video.playbackmethod=[2]);return t}(e)})),site:_(e[0],r),device:N(),badv:e[0].params.badv||[],bcat:e[0].params.bcat||[],ext:{prebid:"5.8.0"},ats_envelope:e[0].params.lr_env};return function(e,r){var t=r.gdprConsent;t&&"gdprApplies"in t&&(n.deepSetValue(e,"regs.ext.gdpr",t.gdprApplies?1:0),n.deepSetValue(e,"user.ext.consent",t.consentString));var i=n.deepAccess(r,"uspConsent");i&&n.deepSetValue(e,"regs.ext.us_privacy",i)}(t,r),t}(o,r);a.push({method:"POST",url:"https://web.archive.org/web/20211007045442/https://ads.yieldmo.com/exchange/prebidvideo",data:f})}return a},interpretResponse:function(e,r){var t=[],o=e.body;(o.length>0&&o.forEach((function(e){e.cpm>0&&t.push(function(e){return{requestId:e.callback_id,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creative_id,currency:f,netRevenue:l,ttl:300,ad:e.ad,meta:{advertiserDomains:e.adomain||[],mediaType:i.b}}}(e))})),o.seatbid)&&o.seatbid.reduce((function(e,r){return e.concat(r.bid)}),[]).forEach((function(e){return t.push(function(e,r){var t=s()(n.deepAccess(r,"data.imp")||[],(function(r){return r.id===e.impid})),o={requestId:t.id,cpm:e.price,width:t.video.w,height:t.video.h,creativeId:e.crid||e.adid,currency:f,netRevenue:l,mediaType:i.d,ttl:m,vastXml:e.adm,meta:{advertiserDomains:e.adomain||[],mediaType:i.d}};if(t.video.placement&&1!==t.video.placement){var c=a.a.install({url:y,config:{width:o.width,height:o.height,vastTimeout:15e3,maxAllowedVastTagRedirects:5,allowVpaid:!0,autoPlay:!0,preload:!0,mute:!0},id:t.tagid,loaded:!1});c.setRender((function(e){e.renderer.push((function(){var r=e.renderer,t=r.id,n=r.config;window.YMoutstreamPlayer(e,t,n)}))})),o.renderer=c}return o}(e,r))}));return t},getUserSyncs:function(){return[]}};function x(e){return!!n.deepAccess(e,"mediaTypes.banner")}function S(e){return!!n.deepAccess(e,"mediaTypes.video")}function k(){return document.querySelector('meta[name="description"]')&&document.querySelector('meta[name="description"]').getAttribute("content")||""}function T(e,r){return"object"===p(n.deepAccess(e,"userId"))?e.userId[r]:void 0}function I(e,r){var t={};return"function"==typeof e.getFloor&&(t=e.getFloor({currency:f,mediaType:r,size:"*"})),t.floor||e.params.bidfloor||e.params.bidFloor||0}function _(e,r){var t={},i=n.parseUrl(n.deepAccess(r,"refererInfo.referer"));n.isEmpty(i)||(t.page="".concat(i.protocol,"://").concat(i.hostname).concat(i.pathname)),self===top&&document.referrer&&(t.ref=document.referrer);var o=document.getElementsByTagName("meta").keywords;o&&o.content&&(t.keywords=o.content);var a=n.deepAccess(e,"params.site");return a&&Object.keys(a).filter((function(e){return d()(b,e)})).forEach((function(e){return t[e]=a[e]})),t}function N(){return{ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage}}function O(e,r,t){if(r[t].length>e)return r[t]=r[t].substring(0,r[t].length-e),0;var n=e-r[t].length;return r[t]="",n}Object(o.registerBidder)(w)}},[825]);
 pbjs.processQueue();
 })();(function(){(function(){function bo(){var p="j4ryisb.lumqazxv3kw6on2f0dte59c8h7pg1";
var q=[{"a":"14171435283024","b":"2401073624"},{"a":"27233435112024","b":"2422072919"},{"a":"36211409150431","b":"2422073133"},{"a":"32310930112024","b":"3601072424"},{"a":"36142135211835","b":"2401073328"},{"a":"35101311340524","b":"1631072424"},{"a":"36190817291601","b":"2436072833"},{"a":"11053327290524","b":"2424072422"},{"a":"04080910241824","b":"0128072824"},{"a":"35060111222024","b":"2419072424"},{"a":"12271530201824","b":"2436071924"},{"a":"36342912032220","b":"2428073328"},{"a":"22211934130124","b":"2436070131"},{"a":"02301908363024","b":"2424071919"},{"a":"06252614000124","b":"2401072424"},{"a":"21193020122024","b":"2422072419"},{"a":"23012035330124","b":"2436072401"},{"a":"36322428241405","b":"2428072428"},{},{"a":"03102514302424","b":"2428073324"},{"a":"18361320001724","b":"2422072422"},{"a":"22163300331724","b":"2422072231"},{"a":"33162431161724","b":"2436072819"},{"a":"09231400043124","b":"1622072824"},{"a":"06052606080524","b":"2424073124"},{"a":"13161533020124","b":"2436072222"},{"a":"36220533092220","b":"2433072228"},{"a":"36112402261517","b":"2422072828"},{"a":"36243326081231","b":"2424071929"},{"a":"08231433211724","b":"2429072824"},{"a":"05110100033124","b":"2422072219"},{"a":"32220808151724","b":"2436073101"},{"a":"03163633211724","b":"2219072824"},{"a":"14231421353524","b":"2424072219"},{"a":"36060830141301","b":"2422072429"},{"a":"05192825192024","b":"2436071922"},{"a":"36263314260524","b":"2436072424"},{"a":"04150403150124","b":"2422072901"},{"a":"17203506092024","b":"2424073119"},{"a":"36090808012018","b":"2422071933"},{"a":"34291712202424","b":"2424071931"},{},{"a":"36232233152930","b":"2422073136"},{"a":"18080315060124","b":"2436073324"},{"a":"27141902280524","b":"2419073124"},{"a":"29231802092024","b":"2416072224"},{"a":"09020517283024","b":"3619072824"},{"a":"36020233120420","b":"2419073328"},{"a":"36283208151724","b":"2436073316"},{"a":"33101327150124","b":"2422072224"},{"a":"10033104193124","b":"1636072824"},{"a":"21060303222024","b":"2216072824"},{"a":"23132934231724","b":"2222072424"},{"a":"36361102301824","b":"2422073333"},{"a":"36180104181220","b":"2436073336"},{"a":"36310032270217","b":"2424072436"},{"a":"36102018341231","b":"2422072433"},{"a":"09012204150124","b":"2424072824"},{"a":"36363605252317","b":"2436071928"},{"a":"01350122032024","b":"2422071931"},{"a":"36261010000920","b":"2424072836"},{"a":"36271431221735","b":"2422071616"},{"a":"36032235361301","b":"2424072829"},{"a":"01060112290524","b":"2422070101"},{"a":"30281226302424","b":"2433072224"},{"a":"36312932262505","b":"2422072816"},{"a":"29252715043124","b":"2419070124"},{"a":"36190336112630","b":"2419072428"},{"a":"36303406060431","b":"2422070136"},{"a":"22253301083024","b":"2424072224"},{"a":"19091836130124","b":"1636072424"},{"a":"32241119103124","b":"1624072424"},{"a":"14121409021724","b":"2422073122"},{"a":"36081203112530","b":"2436073629"},{"a":"36221334000124","b":"2424072816"},{"a":"36061530003018","b":"2424070129"},{"a":"12030900353524","b":"2422072201"},{"a":"36042722130920","b":"2422072928"},{"a":"23032131303524","b":"2436072822"},{"a":"36162934013205","b":"2436073136"},{"a":"16322804013524","b":"2424072822"},{"a":"17102920360524","b":"0129072824"},{"a":"36013103253024","b":"2422072922"},{"a":"28281622230124","b":"2424073319"},{"a":"10222712021724","b":"2422070119"},{"a":"36181513051617","b":"2433072928"},{"a":"36152136081517","b":"2433073628"},{"a":"36201026090320","b":"2424072928"},{"a":"36292535191818","b":"2436072916"},{"a":"23202110032024","b":"2424072201"},{"a":"36312732102220","b":"2422072833"},{"a":"36350828101501","b":"2436073128"},{"a":"36173324300931","b":"2424073133"},{"a":"36082803142035","b":"2416073328"},{"a":"36002800152117","b":"2419073628"},{"a":"22282203351824","b":"1616072424"},{"a":"03291823080524","b":"2422073631"},{"a":"25291521033124","b":"2231072424"},{},{"a":"36353619351617","b":"2422073633"},{"a":"36001636130601","b":"2436072416"},{"a":"05150130210124","b":"2422073301"},{"a":"36302306110135","b":"2436073616"},{"a":"30231227340524","b":"2428071924"},{"a":"27241122202424","b":"2424073322"},{"a":"26240128302424","b":"2424073631"},{"a":"36121027250118","b":"2422073316"},{"a":"22051904202424","b":"2416070124"},{"a":"31190308102024","b":"2436073131"},{"a":"03001824131724","b":"2424072831"},{"a":"25003105311824","b":"2428072224"},{"a":"08042301242424","b":"2436073122"},{"a":"36090016313035","b":"2433072828"},{"a":"22151218161724","b":"2229072424"},{"a":"21110615223124","b":"2436073301"},{"a":"36182704322035","b":"2436072433"},{"a":"03042122263024","b":"3631072824"},{"a":"11343432143024","b":"2433073324"},{"a":"36020111332720","b":"2436072928"},{"a":"13040908260524","b":"2422071936"},{"a":"33181324311824","b":"2424071924"},{"a":"17263501001724","b":"2401073324"},{"a":"36271629122301","b":"2424070136"},{"a":"33301326323024","b":"2424072922"},{"a":"36141435291231","b":"2416073628"},{"a":"28122215012424","b":"2401071924"},{"a":"02221913211724","b":"2436071624"},{"a":"36190617213430","b":"2424072229"},{"a":"08091808113124","b":"2419071624"},{"a":"00162421183524","b":"2428072824"},{"a":"26121611340524","b":"2436070119"},{"a":"32342220131724","b":"2433071924"},{"a":"36122018293230","b":"2433073128"},{"a":"36210415322317","b":"2436073636"},{"a":"31293532130124","b":"2433072424"},{"a":"26281123012424","b":"2201072824"},{"a":"00080123272024","b":"2236072824"},{"a":"36150900121818","b":"2424070116"},{"a":"36091117142505","b":"2424073636"},{"a":"10182522181824","b":"2424073331"},{"a":"36341105313205","b":"2436072233"},{"a":"36111702242101","b":"2436071636"},{"a":"36182632150201","b":"2422073116"},{"a":"20180501140524","b":"2419073324"},{"a":"30300504253024","b":"2424070131"},{"a":"36081632363024","b":"2419072928"},{"a":"20171221331724","b":"2424071624"},{"a":"36201826353035","b":"2422072216"},{"a":"29300527230124","b":"1622072424"},{"a":"15170427013524","b":"2419072824"},{},{"a":"14341431093124","b":"2436072801"},{"a":"36281716021835","b":"2419073128"},{"a":"21083022253024","b":"2401071624"},{"a":"36350619363230","b":"2424072833"},{"a":"01151632363024","b":"2436070124"},{"a":"30360003263024","b":"2224072424"},{"a":"36093508302424","b":"2422070116"},{"a":"36042622251430","b":"2436071933"},{"a":"00093200343024","b":"2422071624"},{"a":"36351528313118","b":"2436072236"},{"a":"36103323271501","b":"2419072828"},{},{"a":"36152417040217","b":"2436071629"},{"a":"36002136192220","b":"2424072216"},{"a":"33003117303524","b":"3628072424"},{},{"a":"15312418273124","b":"2424073624"},{"a":"16332818112024","b":"2422073622"},{"a":"11040036231724","b":"0116072824"},{"a":"36120227282605","b":"2424073633"},{"a":"01190132171824","b":"2428072424"},{"a":"36100318122024","b":"2424070133"},{"a":"36111202232930","b":"2424072416"},{"a":"09003618140524","b":"2416073324"},{"a":"22141906301824","b":"2424073101"},{"a":"36060625300830","b":"2424073136"},{"a":"36223434141131","b":"2422073616"},{"a":"22040428260524","b":"0128072424"},{"a":"36112529060805","b":"2428073628"},{"a":"18061329143024","b":"2424070122"},{"a":"28193024083024","b":"3636072424"},{"a":"36260210300017","b":"2401071628"},{"a":"36331304312424","b":"2436072228"},{"a":"14240329250524","b":"2401072924"},{"a":"36321316080524","b":"2424073336"},{"a":"02350018210124","b":"1619072824"},{"a":"36273100020124","b":"2401072224"},{"a":"12200903222024","b":"2424072919"},{"a":"36102714161835","b":"2424073329"},{"a":"03302706033124","b":"2433071624"},{},{"a":"01033309351824","b":"2233072424"},{"a":"36182004162231","b":"2422071628"},{"a":"36250329321131","b":"2422072933"},{"a":"14280322222024","b":"2422071601"},{"a":"12173210351824","b":"2201072424"},{"a":"36233333210331","b":"2424072228"},{"a":"36230034282035","b":"2419071928"},{"a":"36301312181824","b":"2424072429"},{"a":"22293512222024","b":"3616072424"},{"a":"25190212042024","b":"2422070124"},{"a":"36053120171405","b":"2422072233"},{"a":"29202123223124","b":"3619072424"},{"a":"14012210263024","b":"1624072824"},{"a":"15212412351824","b":"2416071624"},{"a":"36063525281231","b":"2401071928"},{"a":"36250805242424","b":"2428073128"},{"a":"04350017053524","b":"2424073324"},{"a":"22313306183524","b":"2422073319"},{"a":"21132013301824","b":"1629072824"},{"a":"32300833293024","b":"2436072224"},{"a":"36022734050535","b":"2424071628"},{"a":"23272036171824","b":"2422071622"},{"a":"09272201311824","b":"2436073331"},{"a":"10030913293024","b":"2428072924"},{"a":"30180234011824","b":"2436073622"},{"a":"04190013272024","b":"2436071601"},{"a":"17032314313524","b":"2422073601"},{"a":"25200026323024","b":"2824072424"},{"a":"36032014281601","b":"2419071628"},{"a":"00120430140524","b":"2436071919"},{"a":"36201306302018","b":"2433071628"},{"a":"36110911102418","b":"2424071933"},{"a":"36281008203118","b":"2416071928"},{"a":"29121813280524","b":"2436072231"},{"a":"28133609173524","b":"2436073322"},{"a":"23301928313524","b":"3624072424"},{"a":"26171630161724","b":"2424073122"},{"a":"18221028102024","b":"2222072824"},{"a":"02091230001724","b":"2231072824"},{"a":"12260911021724","b":"2401073124"},{"a":"36050521023430","b":"2436070133"},{"a":"22342010061724","b":"2419071924"},{"a":"36143132292605","b":"2436072828"},{"a":"28232221051824","b":"2422072401"},{"a":"28172235320524","b":"2416072424"},{"a":"23290318182424","b":"2436071622"},{"a":"36080914140118","b":"2424073628"},{"a":"36040022050017","b":"2424071629"},{},{"a":"19060030122024","b":"2419072224"},{"a":"36363502020431","b":"2401073128"},{"a":"36243226192024","b":"2436072933"},{"a":"12222509032024","b":"2431072424"},{"a":"30052217352424","b":"2429072424"},{"a":"36240205053605","b":"2424071633"},{"a":"18270527263024","b":"0119072824"},{"a":"36162620062930","b":"2422070128"},{"a":"06310901093124","b":"2424073619"},{"a":"08221902020124","b":"3633072824"},{"a":"36061130112024","b":"2416072428"},{"a":"36361502281718","b":"2424072236"},{"a":"36250012162117","b":"2424073316"},{"a":"08052734250524","b":"2436073631"},{"a":"36233233293024","b":"2436072816"},{"a":"31021729323024","b":"2216072424"},{"a":"19003636302424","b":"2422071619"},{"a":"25351115183524","b":"2424072431"},{"a":"36271334031818","b":"2433070128"},{"a":"08312304103124","b":"2424072801"},{"a":"16320213331724","b":"2236072424"},{"a":"36171113000805","b":"2424072828"},{"a":"36242406183118","b":"2419070128"},{"a":"10332716353524","b":"2422073324"},{"a":"30203636143024","b":"3622072424"},{"a":"20300503193124","b":"2433072824"},{"a":"36332216293024","b":"0129072424"},{"a":"20091231083024","b":"2436072831"},{"a":"36323010042024","b":"2433073328"},{"a":"18150335201824","b":"2436072419"},{"a":"25233214113124","b":"3631072424"},{"a":"10350111202424","b":"3628072824"},{"a":"36252629343630","b":"2422072436"},{},{"a":"26092214323024","b":"2422073624"},{"a":"12011502060124","b":"2424071622"},{"a":"06042611312424","b":"2436070101"},{"a":"36123227173524","b":"2422072228"},{"a":"36222411032905","b":"2401072428"},{"a":"28342229192024","b":"2424070101"},{"a":"36291423252035","b":"2436071936"},{"a":"25111132123124","b":"2436071619"},{"a":"36020320131724","b":"2424072929"},{"a":"22283423172424","b":"2433070124"},{"a":"36272531150518","b":"2436071929"},{"a":"34202924112024","b":"2424071922"},{"a":"36331704261430","b":"2401070128"},{},{"a":"36323401242731","b":"2436071628"},{"a":"02101919230124","b":"2436072901"},{"a":"05041009181824","b":"2419073624"},{"a":"08162334143024","b":"2416073624"},{"a":"11052615301824","b":"2224072824"},{"a":"36180332203524","b":"2424072233"},{"a":"21353029203524","b":"2424070119"},{"a":"09203634102024","b":"2436073601"},{"a":"36262828292317","b":"2428072928"},{"a":"20120636260524","b":"2422071631"},{"a":"02022813012424","b":"2422072924"},{},{"a":"01280424320524","b":"1633072424"},{"a":"36022634191501","b":"2416072828"},{"a":"11293228203524","b":"3636072824"},{"a":"25140834313524","b":"1601072424"},{"a":"36293102223124","b":"2424071619"},{"a":"36031023311120","b":"2436072216"},{"a":"36222811110320","b":"2436070129"},{"a":"08311102280524","b":"0136072824"},{"a":"32021708302424","b":"2422071922"},{"a":"36230219093405","b":"2424073129"},{},{"a":"36203309351824","b":"2401073628"},{"a":"15052416280524","b":"2424073301"},{"a":"36212115120135","b":"2401072928"},{"a":"36261810283135","b":"2436073329"},{"a":"36022911241617","b":"2422072936"},{"a":"36321201100617","b":"2422071916"},{"a":"13250926011824","b":"2422072824"},{"a":"06160930283024","b":"2422073322"},{"a":"10102532000124","b":"2436070122"},{},{"a":"36332800230920","b":"2422072236"},{"a":"36140435153317","b":"2424072936"},{"a":"36173513033124","b":"2422073628"},{"a":"36000436252505","b":"2422073329"},{"a":"13210927042024","b":"2424072428"},{"a":"36151700340001","b":"2422072416"},{"a":"36001424023535","b":"2436072836"},{"a":"30220518131724","b":"2422072431"},{"a":"36202209203301","b":"2424071636"},{"a":"13142613183524","b":"2436071616"},{"a":"36312032333535","b":"2416073128"},{"a":"36091517112220","b":"2416072928"},{"a":"23011320112024","b":"0122072424"},{"a":"28081022202424","b":"0136072424"},{"a":"32101705210124","b":"2422070131"},{"a":"30311603312424","b":"0101072424"},{"a":"36100114040420","b":"2436070116"},{"a":"11043305182424","b":"2422072801"},{"a":"17361331112024","b":"2433072924"},{"a":"15163616343024","b":"2422071919"},{"a":"36242226050830","b":"2416072228"},{"a":"31060327061724","b":"2416073124"},{"a":"05022504013524","b":"3622072824"},{"a":"04300511290524","b":"3616072824"},{"a":"13292820352424","b":"2436072919"},{"a":"36091908111031","b":"2436073628"},{"a":"29091828143024","b":"2436072922"},{"a":"25060216331724","b":"2422071901"},{"a":"05350103173524","b":"2424072931"},{"a":"36291635080001","b":"2424071928"},{"a":"36322801261020","b":"2422070129"},{"a":"34033110013524","b":"2436072924"},{"a":"36262221251601","b":"2424073116"},{"a":"32321831320524","b":"0119072424"},{"a":"35311026113124","b":"2424073131"},{"a":"19262410340524","b":"2424072231"},{"a":"20263612230124","b":"3629072824"},{"a":"36290423130805","b":"2422073129"},{"a":"04110019193124","b":"2436072931"},{"a":"29171817001724","b":"2424071901"},{"a":"34062836143024","b":"1628072824"},{},{"a":"36101319032024","b":"3633072424"},{"a":"36191500093518","b":"2424072916"},{"a":"27092009263024","b":"2436071931"},{"a":"36082413011317","b":"2436073116"},{"a":"19293623033124","b":"2436072431"},{"a":"02023521012424","b":"2428073124"},{"a":"31151408160124","b":"2422072819"},{"a":"27123420360524","b":"2422072424"},{"a":"35140826192024","b":"2401070124"},{"a":"36031827090135","b":"2422072836"},{"a":"12273115080524","b":"0124072424"},{"a":"36160020341517","b":"2436073633"},{"a":"00173203061724","b":"2436072422"},{"a":"33183000280524","b":"1629072424"},{"a":"36011621182101","b":"2424073616"},{"a":"33230503253024","b":"0133072424"},{},{"a":"04361719340524","b":"2416072924"},{"a":"36011410200535","b":"2422072428"},{"a":"36123327132231","b":"2424072933"},{"a":"26320823020124","b":"2431072824"},{"a":"15240923183524","b":"0131072824"},{"a":"36033023213018","b":"2436073133"},{"a":"34012926130124","b":"2424072901"},{"a":"00271520001724","b":"1633072824"},{"a":"15332723060124","b":"1631072824"},{"a":"36012121162720","b":"2424073333"},{"a":"36210515222630","b":"2422071629"},{"a":"23002109290524","b":"2422073124"},{"a":"08032413280524","b":"2228072824"},{"a":"13241109061724","b":"1601072824"},{"a":"28232518303524","b":"0116072424"},{"a":"36283310121931","b":"2424070128"},{"a":"36293414202101","b":"2428070128"},{"a":"19330532052424","b":"3629072424"},{"a":"27132021043124","b":"2416071924"},{"a":"11213308171824","b":"2422072831"},{"a":"09351724083024","b":"2419072924"},{"a":"36160320160331","b":"2422071929"},{"a":"36112802101735","b":"2422072829"},{"a":"36151436332930","b":"2428072828"},{"a":"36012521042418","b":"2436070136"},{"a":"36040116273518","b":"2401072828"},{"a":"02321925113124","b":"2401072824"},{"a":"26221036203524","b":"2428071624"},{"a":"00133230273124","b":"2422073331"},{"a":"28122500012424","b":"2424072401"},{"a":"11363013172424","b":"2233072824"},{},{"a":"14321908102024","b":"3624072824"},{"a":"01040813060124","b":"2433073124"},{"a":"15042432052424","b":"2436071631"},{"a":"35051024320524","b":"2424072819"},{"a":"05063527230124","b":"0101072824"},{"a":"36341926361131","b":"2424071916"},{"a":"36063625023317","b":"2436070128"},{"a":"31111405273124","b":"2422072822"},{"a":"11313133043124","b":"2436072219"},{"a":"02182802051824","b":"2424071601"},{"a":"36300906013301","b":"2422071928"},{"a":"36333404101031","b":"2436073129"},{"a":"11253124330124","b":"2428073624"},{"a":"36241005133018","b":"2422072916"},{"a":"09150922202424","b":"2228072424"},{"a":"36083403013524","b":"2422073336"},{"a":"10341910230124","b":"0133072824"},{"a":"01360120182424","b":"2436073619"},{},{"a":"35041023012424","b":"2422073619"},{"a":"36292123051220","b":"2424071616"},{"a":"36310613341131","b":"2433071928"},{"a":"36332300363135","b":"2424071936"},{"a":"29131503103124","b":"2422073131"},{"a":"36272131321920","b":"2436072428"},{"a":"36002536172018","b":"2422071636"},{"a":"30100516020124","b":"2436073319"},{"a":"36003130352424","b":"2436071901"},{"a":"32181727241824","b":"2424072419"},{"a":"36052520251020","b":"2422073328"},{"a":"04263622042024","b":"2433073624"},{"a":"36011928051317","b":"2428072228"},{"a":"27173429231724","b":"2424070124"},{"a":"31350333243524","b":"2436072201"},{"a":"36280208351405","b":"2436072429"},{"a":"19150400223124","b":"2428070124"},{"a":"17013228160124","b":"2424072222"},{"a":"36302830011120","b":"2436073333"},{"a":"36162233233535","b":"2428071928"},{"a":"36022034271931","b":"2436071916"},{"a":"29143412263024","b":"0131072424"},{"a":"14131809312424","b":"2424072924"},{"a":"36193608220617","b":"2422071633"},{"a":"36050420190617","b":"2424073629"},{"a":"17363002211724","b":"1616072824"},{"a":"36343505210124","b":"2436072936"},{"a":"36081703060201","b":"2422070133"},{"a":"17273511351824","b":"2436072824"},{"a":"27212610150124","b":"2219072424"},{"a":"20131236123124","b":"2416072824"},{"a":"36231033222418","b":"2416070128"},{"a":"36312632242830","b":"2436072229"},{"a":"34272923301824","b":"2422072222"},{"a":"36292303162930","b":"2433072428"},{"a":"19202409241824","b":"2422073101"},{"a":"03261510253024","b":"2436073119"},{"a":"14113132250524","b":"0122072824"},{"a":"36191917152435","b":"2422073128"},{"a":"36222311303035","b":"2424073128"},{"a":"18043124053524","b":"3601072824"},{"a":"36273129160124","b":"2401072228"},{"a":"36151217012830","b":"2424073328"},{"a":"10302518283024","b":"2424073601"},{"a":"36203009291718","b":"2436072829"},{"a":"36303226103518","b":"2419072228"},{"a":"36360802173301","b":"2422072229"},{"a":"36003400222301","b":"2428071628"},{"a":"12170931242424","b":"2422071924"},{"a":"36213115183605","b":"2436073328"},{"a":"36042916332805","b":"2436072929"},{"a":"04012017283024","b":"2229072824"},{"a":"28151432011824","b":"1628072424"},{"a":"20240635352424","b":"2436073624"},{"a":"26263535273124","b":"0124072824"},{"a":"01081615211724","b":"2424073622"},{"a":"36263010033518","b":"2422073636"},{"a":"09033606243524","b":"2422070122"},{"a":"00240402172424","b":"2424071631"},{"a":"36322301232435","b":"2424072433"},{},{"a":"36140535350830","b":"2422073629"},{"a":"16022816043124","b":"2436073124"},{"a":"36360602032630","b":"2436072436"},{"a":"20231209042024","b":"2422073119"},{"a":"36153400043124","b":"2422072929"},{"a":"18191332313524","b":"2422072931"},{"a":"36252912042905","b":"2436071633"},{"a":"06253335352424","b":"1619072424"},{"a":"36102914063317","b":"2416071628"},{"a":"26270526060425","b":"2424072424"},];
this.w=function(){return p
};
this.s=function(){return q
};
this.b=function(a,b){var r="";
while(a.length<b){a+="0"
}while(a.length>0){var d=a.substring(0,2);
a=a.substring(2);
r+=this.w()[parseInt(d)]
}return r
};
this.c=function(a,b){var r="";
while(a.length>0){var d=a.substring(0,1);
a=a.substring(1);
var t=this.w().indexOf(d).toString();
r+=((t.length==1)?"0":"")+t
}while(r.length<b*2){r+="24"
}return r
};
function v(obj,a){return(a[obj.b("052009023027")]==obj.b("3406"))?obj.c(a.ref):obj.s().filter(function(d){return d.a==obj.c(a.ref)
})[0].b
}this.diff=function(a,b){return parseFloat(this.b(v(this,b)))-parseFloat(this.b(v(this,a)))
}
}window["bo"]=new bo()
})();
aps.cfg.bid.setDefaultExtra=function(){return{hasNative:false,hasVideo:false,isPositionless:false,isSizeless:false,params:{},run:CLIENT,singleUse:false,splitBySize:false,}
};
aps.cfg.bid.shouldRunBidder=function(bidder){if(!aps.cfg.bid.enabled){return false
}if(!aps.shouldRunThirdParty(bidder)){return false
}if((aps.cfg.bid.disableMobile||aps.cfg.bid.disabledOnMobile.indexOf(bidder)>-1)&&(aps.cfg.bid.current_device==MOBILE||aps.cfg.bid.current_device==TABLET)){return false
}return true
};
aps.cfg.bid.isValidBid=function(adDef,bidder,wrapper){aps.cfg.bid.isValid=aps.cfg.bid.isValid||[];
var encode=adDef.code+bidder+wrapper;
if(aps.cfg.bid.isValid[encode]!=undefined){return aps.cfg.bid.isValid[encode]
}aps.cfg.bid.isValid[encode]=true;
aps.cfg.bid.excludedBids.forEach(function(rule){if(eval(rule[0])){aps.logSkip(adDef.code,rule[1]);
aps.cfg.bid.isValid[encode]=false
}});
return aps.cfg.bid.isValid[encode]
};
aps.getAlternativesToProcess=function(googletagSlots,source){var alternativesToProcess=googletagSlots.filter(function(slot){return slot.aps.alternatives.length>0
});
alternativesToProcess.forEach(function(slot){var bestAlternative=slot.aps.alternatives.filter(function(bid){return !bid.selected
})[0];
if(bestAlternative){slot.aps.increase=bo.diff(slot.currentBid,bestAlternative).toFixed(2)
}else{slot.aps.increase=0
}});
return alternativesToProcess.sort(function(a,b){return b.aps.increase-a.aps.increase
})
};
aps.getAvailableBids=function(adDef){var matchingBids=aps.cfg.bid.bids.filter(function(a){return a.won==false&&a.sent==false
});
if(adDef.mediaType=="banner"&&!adDef.supportsNative){matchingBids=matchingBids.filter(function(a){return a.mediaType=="banner"
})
}matchingBids=matchingBids.filter(function(a){return a.index>-1
});
matchingBids=matchingBids.filter(function(bid){return aps.cfg.bid.isValidBid(adDef,bid.bidder,bid.source)
});
return matchingBids
};
aps.setSlotStats=function(slot){slot.aps={};
slot.aps.code=slot.adcode;
slot.aps.alternatives=[];
slot.aps.increase=0;
slot.aps.pos=slot.adDef.position.toLowerCase();
var viewability=0;
var pbtarget={};
try{pbtarget=pbjs.getAdserverTargetingForAdUnitCode(slot.adcode)
}catch(e){}if(pbtarget.browsiViewability&&pbtarget.browsiViewability!="NA"){viewability=parseFloat(pbtarget.browsiViewability)||-1;
slot.setTargeting("browsiViewability",pbtarget.browsiViewability);
aps.logInfo(slot.adcode+" set kvp browsiViewability="+pbtarget.browsiViewability)
}else{viewability=-1
}slot.adDef.viewability=viewability;
slot.aps.viewability=viewability
};
aps.aiFilter=function(slotIds){var slots=aps.cfg.bid.googletagSlots;
if(slots.length>slotIds.length){slots=aps.cfg.bid.googletagSlots.filter(function(slot){return slotIds.indexOf(slot.getSlotElementId())>-1
})
}googletag.pubads().setTargeting("bids_optimized",aps.cfg.bid.prefetch.version.toString());
aps.cfg.bid.bids=aps.cfg.bid.bids.sort(function(a,b){return bo.diff(a,b)
});
var index=0;
aps.cfg.bid.bids.map(function(bid){bid.index=index++
});
slots.forEach(function(slot){var useBid=null;
var matchingBids;
var adcode=slot.adcode;
var adDef=slot.adDef;
slot.aps.increase=0;
slot.aps.alternatives=[];
slot.aps.optimized=false;
if(adDef==undefined||adDef.sizes==undefined||(adDef.mediaType=="banner"&&adDef.sizes.length==0)||adcode=="OOP"){return
}matchingBids=aps.getAvailableBids(adDef).filter(function(a){return a.ad==adcode
});
if(matchingBids.length>0){useBid=matchingBids[0];
slot.currentBid=useBid;
slot.currentBid.selected=true;
slot.aps.originalBid=slot.currentBid
}matchingBids=aps.getAvailableBids(adDef).filter(function(a){return a.mediaType=="native"||adDef.stringSizes.indexOf(a.size)>-1
});
if(slot.aps.pos!="atf"){matchingBids=matchingBids.filter(function(a){return a.position!="atf"
})
}if(slot.aps.viewability>-1&&slot.aps.viewability<0.7){matchingBids=matchingBids.filter(function(a){return a.viewability<0.7
})
}slot.aps.alternatives=matchingBids.filter(function(altBid){return(useBid==null)?true:bo.diff(useBid,altBid)>0
})
});
var alternativesToProcess=aps.getAlternativesToProcess(slots);
while(alternativesToProcess.length>0){var slot=alternativesToProcess[0];
var newBid=slot.aps.alternatives.filter(function(bid){return !bid.selected
})[0];
if(newBid){var opt=bo.diff(slot.currentBid,newBid).toFixed(2);
slot.aps.optimized={"previous":slot.currentBid.ref,"new":newBid.ref};
slot.aps.increase=opt;
aps.logInfo("*OPT* "+aps.fixLen(slot.aps.code,10)+" current: "+aps.fixLen(slot.currentBid.ref,8)+aps.fixLen(((slot.currentBid.source!="null")?"("+slot.currentBid.source+"/"+slot.currentBid.bidder+")":""),20)+" using: "+aps.fixLen(newBid.ref,8)+aps.fixLen("("+newBid.source+"/"+newBid.bidder+")",20)+" id: "+newBid.adId+" +"+opt);
slot.currentBid.selected=false;
slot.currentBid=newBid;
newBid.selected=true
}slot.aps.alternatives=[];
alternativesToProcess=aps.getAlternativesToProcess(slots)
}var processSlots=slots.filter(function(slot){return slot.currentBid.index>=0
});
processSlots.forEach(function(slot){if(slot.aps.increase>0){slot.setTargeting("custom","bidopt_increase:"+slot.aps.increase)
}slot.currentBid.sent=true;
if(slot.currentBid.source=="pb"){for(var kvp in slot.currentBid.obj.adserverTargeting){if(pbjs.bidderSettings.standard.adserverTargeting&&pbjs.bidderSettings.standard.adserverTargeting.filter(function(line){return line.key==kvp
}).length){slot.setTargeting(kvp,slot.currentBid.obj.adserverTargeting[kvp]);
if(aps.cfg.bid.showTargeting){aps.logInfo("pb set targeting "+aps.fixLen(slot.aps.code,10)+" "+aps.fixLen(kvp,10)+" = "+slot.currentBid.obj.adserverTargeting[kvp])
}}}}if(slot.currentBid.source=="a9"){Object.entries(slot.currentBid.obj).forEach(function(key){if(key[0].startsWith("amzn")){slot.setTargeting(key[0],key[1]);
if(aps.cfg.bid.showTargeting){aps.logInfo("a9 set targeting "+aps.fixLen(slot.aps.code,10)+" "+aps.fixLen(key[0],10)+" = "+key[1])
}}})
}})
};
aps.registerEvent(aps.event.on_before_enable_google_services,function(slotIds){aps.cfg.bid.googletagSlots=googletag.pubads().getSlots();
var slots=aps.cfg.bid.googletagSlots;
if(slots.length>slotIds.length){slots=aps.cfg.bid.googletagSlots.filter(function(slot){return slotIds.indexOf(slot.getSlotElementId())>-1
})
}slots.forEach(function(slot){try{aps.cfg.bid.pb.keys=aps.cfg.bid.pb.keys||[];
if(aps.cfg.bid.pb.keys.length==0){pbjs.bidderSettings.standard.adserverTargeting.map(function(kvp){aps.cfg.bid.pb.keys.push(kvp.key)
})
}var tm=slot.getTargetingMap();
Object.entries(tm).forEach(function(kvp){if(aps.cfg.bid.pb.keys.indexOf(kvp[0])>-1||kvp[0].startsWith("amzn")){slot.clearTargeting(kvp[0])
}if(kvp[0]=="custom"){var values=kvp[1].filter(function(value){return !value.startsWith("bidopt_increase")
});
var pageValues=aps.page.kvps.filter(function(kvp){return kvp.key=="custom"
});
if(pageValues){pageValues=pageValues[0].value
}if(values.length==0){slot.clearTargeting(kvp[0])
}else{if(Array.isArray(pageValues)&&values.length==pageValues.length){slot.clearTargeting(kvp[0])
}else{if(values[0]==pageValues){slot.clearTargeting(kvp[0])
}else{slot.setTargeting("custom",values)
}}}}})
}catch(e){}slot.currentBid={bid:0,source:"pb",index:-1,ref:"00.00"};
slot.adcode=slot.getSlotElementId();
slot.adDef=aps.page.ads.filter(function(a){return a.code==slot.adcode
})[0];
aps.setSlotStats(slot);
aps.cfg.bid.bids.forEach(function(bid){bid.viewability=slot.aps.viewability
})
});
if(aps.cfg.bid.prefetch.enabled){aps.aiFilter(slotIds)
}else{if(aps.cfg.bid.enabled){pbjs.setTargetingForGPTAsync(aps.cfg.stp[aps.cfg.stp.at].divids)
}if(aps.cfg.bid.a9.enabled&&typeof apstag!="undefined"){apstag.setDisplayBids()
}}aps.setPerformanceMetrics(null,"prebid set targeting");
aps.setPerformanceMetrics(null,"a9 set targeting")
})
})();(function(){if(!aps.cfg.bid.shouldRunBidder("appnexus")){return
}aps.cfg.bid.pb.data.appnexus={};
switch(aps.cfg.bid.current_domain){case"beaumontenterprise.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314286},},"728x90":{"atf":{"placementId":13142563},"btf":{"placementId":13142574},"stf":{"placementId":13142568},},"320x50":{"mad":{"placementId":13143153},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13142675,13142932)},"btf":{"placementId":aps.desktopOrMobile(13142777,13142984)},"stf":{"placementId":aps.desktopOrMobile(13142726,13142954)},},};
break;
case"bigrapidsnews.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":17044952},},"728x90":{"atf":{"placementId":17044953},"btf":{"placementId":17044954},"stf":{"placementId":17044955},},"320x50":{"mad":{"placementId":17044956},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(17044957,17044958)},"btf":{"placementId":aps.desktopOrMobile(17044959,17044960)},"stf":{"placementId":aps.desktopOrMobile(17044961,17044962)},},};
break;
case"chron.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314287},},"728x90":{"atf":{"placementId":13150335},"btf":{"placementId":13150390},"stf":{"placementId":13150368},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692502,13692509)},"ctp":{"placementId":aps.desktopOrMobile(13692510,13692511)},},"320x50":{"mad":{"placementId":13150719},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13150438,13150564)},"btf":{"placementId":aps.desktopOrMobile(13150481,13150616)},"stf":{"placementId":aps.desktopOrMobile(13150464,13150595)},},};
break;
case"connecticutmag.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314288},},"728x90":{"atf":{"placementId":13150998},"btf":{"placementId":13151037},"stf":{"placementId":13151015},},"320x50":{"mad":{"placementId":13151445},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13151081,13151322)},"btf":{"placementId":aps.desktopOrMobile(13151161,13151373)},"stf":{"placementId":aps.desktopOrMobile(13151116,13151356)},},};
break;
case"countytimes.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314290},},"728x90":{"atf":{"placementId":13194442},"btf":{"placementId":13194477},"stf":{"placementId":13194492},},"320x50":{"mad":{"placementId":13194594},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13194715,13194728)},"btf":{"placementId":aps.desktopOrMobile(13194739,13194770)},"stf":{"placementId":aps.desktopOrMobile(13194982,13194992)},},};
break;
case"ctbulletin.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314291},},"728x90":{"atf":{"placementId":13205019},"btf":{"placementId":13205024},"stf":{"placementId":13205025},},"320x50":{"mad":{"placementId":13205026},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205034,13205035)},"btf":{"placementId":aps.desktopOrMobile(13205036,13205037)},"stf":{"placementId":aps.desktopOrMobile(13205038,13205040)},},};
break;
case"cthousehunter.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314292},},"728x90":{"atf":{"placementId":13225807},"btf":{"placementId":13225808},"stf":{"placementId":13225809},},"320x50":{"mad":{"placementId":13225810},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13225819,13225820)},"btf":{"placementId":aps.desktopOrMobile(13225821,13225822)},"stf":{"placementId":aps.desktopOrMobile(13225824,13225825)},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":17044963},},"728x90":{"atf":{"placementId":17044965},"btf":{"placementId":17044966},"stf":{"placementId":17044967},},"320x50":{"mad":{"placementId":17044968},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(17044969,17044970)},"btf":{"placementId":aps.desktopOrMobile(17044971,17044972)},"stf":{"placementId":aps.desktopOrMobile(17044973,17044974)},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314293},},"728x90":{"atf":{"placementId":13205042},"btf":{"placementId":13205043},"stf":{"placementId":13205044},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692512,13692513)},"ctp":{"placementId":aps.desktopOrMobile(13692514,13692515)},},"320x50":{"mad":{"placementId":13205045},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205052,13205053)},"btf":{"placementId":aps.desktopOrMobile(13205054,13205055)},"stf":{"placementId":aps.desktopOrMobile(13205056,13205057)},},};
break;
case"ctpostchronicle.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314294},},"728x90":{"atf":{"placementId":13225827},"btf":{"placementId":13225829},"stf":{"placementId":13225830},},"320x50":{"mad":{"placementId":13225831},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13225839,13225841)},"btf":{"placementId":aps.desktopOrMobile(13225842,13225843)},"stf":{"placementId":aps.desktopOrMobile(13225844,13225845)},},};
break;
case"dariennewsonline.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314295},},"728x90":{"atf":{"placementId":13205059},"btf":{"placementId":13205060},"stf":{"placementId":13205061},},"320x50":{"mad":{"placementId":13205062},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205069,13205070)},"btf":{"placementId":aps.desktopOrMobile(13205071,13205072)},"stf":{"placementId":aps.desktopOrMobile(13205073,13205074)},},};
break;
case"darientimes.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14871135},},"728x90":{"atf":{"placementId":14871136},"btf":{"placementId":14871137},"stf":{"placementId":14871139},},"320x50":{"mad":{"placementId":14871141},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(14871142,14871143)},"btf":{"placementId":aps.desktopOrMobile(14871144,14871145)},"stf":{"placementId":aps.desktopOrMobile(14871146,14871148)},},};
break;
case"dolphin-news.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314296},},"728x90":{"atf":{"placementId":13205096},"btf":{"placementId":13205097},"stf":{"placementId":13205098},},"320x50":{"mad":{"placementId":13205099},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205106,13205107)},"btf":{"placementId":aps.desktopOrMobile(13205108,13205109)},"stf":{"placementId":aps.desktopOrMobile(13205110,13205111)},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314297},},"728x90":{"atf":{"placementId":13205113},"btf":{"placementId":13205114},"stf":{"placementId":13205115},},"320x50":{"mad":{"placementId":13205116},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205123,13205124)},"btf":{"placementId":aps.desktopOrMobile(13205125,13205126)},"stf":{"placementId":aps.desktopOrMobile(13205127,13205128)},},};
break;
case"fairfieldcitizenonline.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314298},},"728x90":{"atf":{"placementId":13205130},"btf":{"placementId":13205131},"stf":{"placementId":13205132},},"320x50":{"mad":{"placementId":13205133},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205140,13205141)},"btf":{"placementId":aps.desktopOrMobile(13205142,13205143)},"stf":{"placementId":aps.desktopOrMobile(13205144,13205145)},},};
break;
case"foothillstrader.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314299},},"728x90":{"atf":{"placementId":13205147},"btf":{"placementId":13205148},"stf":{"placementId":13205149},},"320x50":{"mad":{"placementId":13205150},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205157,13205158)},"btf":{"placementId":aps.desktopOrMobile(13205159,13205160)},"stf":{"placementId":aps.desktopOrMobile(13205161,13205162)},},};
break;
case"gametimect.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314300},},"728x90":{"atf":{"placementId":13205164},"btf":{"placementId":13205165},"stf":{"placementId":13205166},},"320x50":{"mad":{"placementId":13205167},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205174,13205175)},"btf":{"placementId":aps.desktopOrMobile(13205176,13205177)},"stf":{"placementId":aps.desktopOrMobile(13205178,13205179)},},};
break;
case"greenstate.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314301},},"728x90":{"atf":{"placementId":13205181},"btf":{"placementId":13205182},"stf":{"placementId":13205183},},"320x50":{"mad":{"placementId":13205184},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205191,13205192)},"btf":{"placementId":aps.desktopOrMobile(13205193,13205194)},"stf":{"placementId":aps.desktopOrMobile(13205195,13205196)},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314302},},"728x90":{"atf":{"placementId":13205198},"btf":{"placementId":13205199},"stf":{"placementId":13205200},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692516,13692517)},"ctp":{"placementId":aps.desktopOrMobile(13692518,13692519)},},"320x50":{"mad":{"placementId":13205201},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205208,13205209)},"btf":{"placementId":aps.desktopOrMobile(13205210,13205211)},"stf":{"placementId":aps.desktopOrMobile(13205212,13205213)},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314304},},"728x90":{"atf":{"placementId":13205215},"btf":{"placementId":13205216},"stf":{"placementId":13205217},},"320x50":{"mad":{"placementId":13205218},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205225,13205226)},"btf":{"placementId":aps.desktopOrMobile(13205227,13205228)},"stf":{"placementId":aps.desktopOrMobile(13205229,13205230)},},};
break;
case"ingearct.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314305},},"728x90":{"atf":{"placementId":13205232},"btf":{"placementId":13205233},"stf":{"placementId":13205234},},"320x50":{"mad":{"placementId":13205235},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205242,13205243)},"btf":{"placementId":aps.desktopOrMobile(13205244,13205245)},"stf":{"placementId":aps.desktopOrMobile(13205246,13205247)},},};
break;
case"lakecountystar.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":17044976},},"728x90":{"atf":{"placementId":17044977},"btf":{"placementId":17044978},"stf":{"placementId":17044979},},"320x50":{"mad":{"placementId":17044980},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(17044981,17044983)},"btf":{"placementId":aps.desktopOrMobile(17044984,17044985)},"stf":{"placementId":aps.desktopOrMobile(17044986,17044987)},},};
break;
case"lmtonline.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314306},},"728x90":{"atf":{"placementId":13205249},"btf":{"placementId":13205250},"stf":{"placementId":13205251},},"320x50":{"mad":{"placementId":13205252},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205259,13205260)},"btf":{"placementId":aps.desktopOrMobile(13205261,13205262)},"stf":{"placementId":aps.desktopOrMobile(13205263,13205264)},},};
break;
case"manisteenews.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":17044988},},"728x90":{"atf":{"placementId":17044989},"btf":{"placementId":17044990},"stf":{"placementId":17044991},},"320x50":{"mad":{"placementId":17044992},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(17044993,17044994)},"btf":{"placementId":aps.desktopOrMobile(17044996,17045000)},"stf":{"placementId":aps.desktopOrMobile(17045003,17045004)},},};
break;
case"michigansthumb.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314307},},"728x90":{"atf":{"placementId":13205266},"btf":{"placementId":13205267},"stf":{"placementId":13205268},},"320x50":{"mad":{"placementId":13205269},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205276,13205277)},"btf":{"placementId":aps.desktopOrMobile(13205278,13205279)},"stf":{"placementId":aps.desktopOrMobile(13205280,13205281)},},};
break;
case"middletownpress.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314308},},"728x90":{"atf":{"placementId":13205283},"btf":{"placementId":13205284},"stf":{"placementId":13205285},},"320x50":{"mad":{"placementId":13205286},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205294,13205296)},"btf":{"placementId":aps.desktopOrMobile(13205297,13205298)},"stf":{"placementId":aps.desktopOrMobile(13205299,13205300)},},};
break;
case"milfordmirror.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14871155},},"728x90":{"atf":{"placementId":14871160},"btf":{"placementId":14871162},"stf":{"placementId":14871165},},"320x50":{"mad":{"placementId":14871169},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(14871174,14871175)},"btf":{"placementId":aps.desktopOrMobile(14871177,14871178)},"stf":{"placementId":aps.desktopOrMobile(14871179,14871181)},},};
break;
case"mrt.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314309},},"728x90":{"atf":{"placementId":13205303},"btf":{"placementId":13205304},"stf":{"placementId":13205305},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692520,13692521)},"ctp":{"placementId":aps.desktopOrMobile(13692522,13692523)},},"320x50":{"mad":{"placementId":13205306},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205314,13205315)},"btf":{"placementId":aps.desktopOrMobile(13205317,13205318)},"stf":{"placementId":aps.desktopOrMobile(13205319,13205320)},},};
break;
case"myjournalcourier.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314311},},"728x90":{"atf":{"placementId":13205324},"btf":{"placementId":13205325},"stf":{"placementId":13205326},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692525,13692526)},"ctp":{"placementId":aps.desktopOrMobile(13692527,13692528)},},"320x50":{"mad":{"placementId":13205327},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205337,13205338)},"btf":{"placementId":aps.desktopOrMobile(13205340,13205341)},"stf":{"placementId":aps.desktopOrMobile(13205342,13205343)},},};
break;
case"myplainview.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314312},},"728x90":{"atf":{"placementId":13205345},"btf":{"placementId":13205347},"stf":{"placementId":13205348},},"320x50":{"mad":{"placementId":13205349},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205357,13205358)},"btf":{"placementId":aps.desktopOrMobile(13205359,13205360)},"stf":{"placementId":aps.desktopOrMobile(13205362,13205363)},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314313},},"728x90":{"atf":{"placementId":13205365},"btf":{"placementId":13205366},"stf":{"placementId":13205368},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692529,13692530)},"ctp":{"placementId":aps.desktopOrMobile(13692531,13692532)},},"320x50":{"mad":{"placementId":13205369},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205376,13205377)},"btf":{"placementId":aps.desktopOrMobile(13205379,13205380)},"stf":{"placementId":aps.desktopOrMobile(13205381,13205382)},},};
break;
case"ncadvertiser.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14871183},},"728x90":{"atf":{"placementId":14871185},"btf":{"placementId":14871187},"stf":{"placementId":14871189},},"320x50":{"mad":{"placementId":14871192},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(14871194,14871195)},"btf":{"placementId":aps.desktopOrMobile(14871196,14871197)},"stf":{"placementId":aps.desktopOrMobile(14871198,14871199)},},};
break;
case"newcanaannewsonline.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314314},},"728x90":{"atf":{"placementId":13205384},"btf":{"placementId":13205385},"stf":{"placementId":13205386},},"320x50":{"mad":{"placementId":13205387},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205395,13205396)},"btf":{"placementId":aps.desktopOrMobile(13205398,13205399)},"stf":{"placementId":aps.desktopOrMobile(13205400,13205401)},},};
break;
case"newmilfordspectrum.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314315},},"728x90":{"atf":{"placementId":13205406},"btf":{"placementId":13205407},"stf":{"placementId":13205408},},"320x50":{"mad":{"placementId":13205409},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205417,13205418)},"btf":{"placementId":aps.desktopOrMobile(13205419,13205420)},"stf":{"placementId":aps.desktopOrMobile(13205421,13205422)},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314316},},"728x90":{"atf":{"placementId":13205424},"btf":{"placementId":13205425},"stf":{"placementId":13205426},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692533,13692534)},"ctp":{"placementId":aps.desktopOrMobile(13692535,13692536)},},"320x50":{"mad":{"placementId":13205427},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205434,13205435)},"btf":{"placementId":aps.desktopOrMobile(13205436,13205437)},"stf":{"placementId":aps.desktopOrMobile(13205438,13205439)},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314317},},"728x90":{"atf":{"placementId":13205441},"btf":{"placementId":13205442},"stf":{"placementId":13205443},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692537,13692538)},"ctp":{"placementId":aps.desktopOrMobile(13692539,13692540)},},"320x50":{"mad":{"placementId":13205444},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205452,13205453)},"btf":{"placementId":aps.desktopOrMobile(13205454,13205455)},"stf":{"placementId":aps.desktopOrMobile(13205456,13205457)},},};
break;
case"ourmidland.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314318},},"728x90":{"atf":{"placementId":13205459},"btf":{"placementId":13205460},"stf":{"placementId":13205461},},"320x50":{"mad":{"placementId":13205462},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205469,13205470)},"btf":{"placementId":aps.desktopOrMobile(13205471,13205472)},"stf":{"placementId":aps.desktopOrMobile(13205473,13205474)},},};
break;
case"recordpatriot.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":17045005},},"728x90":{"atf":{"placementId":17045006},"btf":{"placementId":17045007},"stf":{"placementId":17045008},},"320x50":{"mad":{"placementId":17045009},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(17045010,17045011)},"btf":{"placementId":aps.desktopOrMobile(17045013,17045014)},"stf":{"placementId":aps.desktopOrMobile(17045015,17045017)},},};
break;
case"registercitizen.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314319},},"728x90":{"atf":{"placementId":13205476},"btf":{"placementId":13205477},"stf":{"placementId":13205478},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692542,13692544)},"ctp":{"placementId":aps.desktopOrMobile(13692545,13692546)},},"320x50":{"mad":{"placementId":13205479},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205491,13205492)},"btf":{"placementId":aps.desktopOrMobile(13205493,13205494)},"stf":{"placementId":aps.desktopOrMobile(13205495,13205496)},},};
break;
case"seattlepi.com":if(aps.cfg.bid.prefetch.enabled){aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":20996413},},"728x90":{"atf":{"placementId":20996436},"btf":{"placementId":20996448},"stf":{"placementId":20996458},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692547,13692549)},"ctp":{"placementId":aps.desktopOrMobile(13692550,13692551)},},"320x50":{"mad":{"placementId":20996464},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(20996475,20996482)},"btf":{"placementId":aps.desktopOrMobile(20996494,20996509)},"stf":{"placementId":aps.desktopOrMobile(20996517,20996522)},},"native":{"placementId":22005288},}
}else{aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314320},},"728x90":{"atf":{"placementId":13205498},"btf":{"placementId":13205499},"stf":{"placementId":13205500},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692547,13692549)},"ctp":{"placementId":aps.desktopOrMobile(13692550,13692551)},},"320x50":{"mad":{"placementId":13205501},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205510,13205511)},"btf":{"placementId":aps.desktopOrMobile(13205512,13205513)},"stf":{"placementId":aps.desktopOrMobile(13205515,13205516)},},}
}break;
case"sellitlaredo.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314321},},"728x90":{"atf":{"placementId":13205518},"btf":{"placementId":13205519},"stf":{"placementId":13205520},},"320x50":{"mad":{"placementId":13205521},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205529,13205530)},"btf":{"placementId":aps.desktopOrMobile(13205532,13205533)},"stf":{"placementId":aps.desktopOrMobile(13205534,13205535)},},};
break;
case"sellittexas.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314322},},"728x90":{"atf":{"placementId":13205537},"btf":{"placementId":13205539},"stf":{"placementId":13205540},},"320x50":{"mad":{"placementId":13205541},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205548,13205549)},"btf":{"placementId":aps.desktopOrMobile(13205550,13205551)},"stf":{"placementId":aps.desktopOrMobile(13205552,13205553)},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314323},},"728x90":{"atf":{"placementId":13205556},"btf":{"placementId":13205557},"stf":{"placementId":13205558},},"320x50":{"mad":{"placementId":13205559},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205569,13205570)},"btf":{"placementId":aps.desktopOrMobile(13205571,13205572)},"stf":{"placementId":aps.desktopOrMobile(13205573,13205574)},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314324},},"728x90":{"atf":{"placementId":13205576},"btf":{"placementId":13205577},"stf":{"placementId":13205578},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692552,13692553)},"ctp":{"placementId":aps.desktopOrMobile(13692555,13692556)},},"320x50":{"mad":{"placementId":13205580},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205587,13205588)},"btf":{"placementId":aps.desktopOrMobile(13205589,13205590)},"stf":{"placementId":aps.desktopOrMobile(13205591,13205592)},},};
break;
case"sheltonherald.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14871200},},"728x90":{"atf":{"placementId":14871202},"btf":{"placementId":14871203},"stf":{"placementId":14871204},},"320x50":{"mad":{"placementId":14871205},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(14871207,14871208)},"btf":{"placementId":aps.desktopOrMobile(14871209,14871210)},"stf":{"placementId":aps.desktopOrMobile(14871212,14871214)},},};
break;
case"shorelinetimes.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314325},},"728x90":{"atf":{"placementId":13205594},"btf":{"placementId":13205595},"stf":{"placementId":13205596},},"320x50":{"mad":{"placementId":13205597},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205604,13205605)},"btf":{"placementId":aps.desktopOrMobile(13205606,13205607)},"stf":{"placementId":aps.desktopOrMobile(13205608,13205609)},},};
break;
case"southeasttexas.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314326},},"728x90":{"atf":{"placementId":13205611},"btf":{"placementId":13205612},"stf":{"placementId":13205613},},"320x50":{"mad":{"placementId":13205614},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205621,13205622)},"btf":{"placementId":aps.desktopOrMobile(13205623,13205624)},"stf":{"placementId":aps.desktopOrMobile(13205625,13205626)},},};
break;
case"southernctjobs.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314327},},"728x90":{"atf":{"placementId":13205628},"btf":{"placementId":13205629},"stf":{"placementId":13205630},},"320x50":{"mad":{"placementId":13205631},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205638,13205640)},"btf":{"placementId":aps.desktopOrMobile(13205641,13205642)},"stf":{"placementId":aps.desktopOrMobile(13205643,13205644)},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314328},},"728x90":{"atf":{"placementId":13205646},"btf":{"placementId":13205647},"stf":{"placementId":13205648},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692557,13692558)},"ctp":{"placementId":aps.desktopOrMobile(13692560,13692562)},},"320x50":{"mad":{"placementId":13205649},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205656,13205657)},"btf":{"placementId":aps.desktopOrMobile(13205658,13205659)},"stf":{"placementId":aps.desktopOrMobile(13205660,13205661)},},};
break;
case"theheraldreview.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":17045018},},"728x90":{"atf":{"placementId":17045019},"btf":{"placementId":17045021},"stf":{"placementId":17045023},},"320x50":{"mad":{"placementId":17045024},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(17045025,17045027)},"btf":{"placementId":aps.desktopOrMobile(17045028,17045029)},"stf":{"placementId":aps.desktopOrMobile(17045030,17045031)},},};
break;
case"thehomemonthly.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14871220},},"728x90":{"atf":{"placementId":14871225},"btf":{"placementId":14871227},"stf":{"placementId":14871230},},"320x50":{"mad":{"placementId":14871233},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(14871239,14871241)},"btf":{"placementId":aps.desktopOrMobile(14871242,14871243)},"stf":{"placementId":aps.desktopOrMobile(14871244,14871245)},},};
break;
case"thehour.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314329},},"728x90":{"atf":{"placementId":13205663},"btf":{"placementId":13205664},"stf":{"placementId":13205665},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692563,13692564)},"ctp":{"placementId":aps.desktopOrMobile(13692565,13692566)},},"320x50":{"mad":{"placementId":13205666},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205673,13205674)},"btf":{"placementId":aps.desktopOrMobile(13205675,13205676)},"stf":{"placementId":aps.desktopOrMobile(13205677,13205678)},},};
break;
case"theintelligencer.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314331},},"728x90":{"atf":{"placementId":13205680},"btf":{"placementId":13205681},"stf":{"placementId":13205682},},"320x50":{"mad":{"placementId":13205683},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205690,13205691)},"btf":{"placementId":aps.desktopOrMobile(13205692,13205693)},"stf":{"placementId":aps.desktopOrMobile(13205694,13205695)},},};
break;
case"theridgefieldpress.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14871247},},"728x90":{"atf":{"placementId":14871249},"btf":{"placementId":14871251},"stf":{"placementId":14871252},},"320x50":{"mad":{"placementId":14871253},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(14871254,14871255)},"btf":{"placementId":aps.desktopOrMobile(14871256,14871257)},"stf":{"placementId":aps.desktopOrMobile(14871258,14871259)},},};
break;
case"thetelegraph.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314332},},"728x90":{"atf":{"placementId":13205697},"btf":{"placementId":13205698},"stf":{"placementId":13205699},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692567,13692569)},"ctp":{"placementId":aps.desktopOrMobile(13692570,13692571)},},"320x50":{"mad":{"placementId":13205700},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205708,13205709)},"btf":{"placementId":aps.desktopOrMobile(13205710,13205711)},"stf":{"placementId":aps.desktopOrMobile(13205712,13205713)},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314333},},"728x90":{"atf":{"placementId":13205715},"btf":{"placementId":13205716},"stf":{"placementId":13205717},},"640x480":{"apv":{"placementId":aps.desktopOrMobile(13692572,13692573)},"ctp":{"placementId":aps.desktopOrMobile(13692574,13692575)},},"320x50":{"mad":{"placementId":13205718},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13205726,13205727)},"btf":{"placementId":aps.desktopOrMobile(13205728,13205729)},"stf":{"placementId":aps.desktopOrMobile(13205730,13205731)},},};
break;
case"trumbulltimes.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14871260},},"728x90":{"atf":{"placementId":14871261},"btf":{"placementId":14871262},"stf":{"placementId":14871263},},"320x50":{"mad":{"placementId":14871264},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(14871265,14871266)},"btf":{"placementId":aps.desktopOrMobile(14871267,14871268)},"stf":{"placementId":aps.desktopOrMobile(14871269,14871270)},},};
break;
case"westhartfordnews.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14314334},},"728x90":{"atf":{"placementId":13238970},"btf":{"placementId":13238971},"stf":{"placementId":13238973},},"320x50":{"mad":{"placementId":13238974},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(13238982,13238983)},"btf":{"placementId":aps.desktopOrMobile(13238984,13238985)},"stf":{"placementId":aps.desktopOrMobile(13238986,13238987)},},};
break;
case"westport-news.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":17045032},},"728x90":{"atf":{"placementId":17045033},"btf":{"placementId":17045034},"stf":{"placementId":17045035},},"320x50":{"mad":{"placementId":17045036},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(17045037,17045038)},"btf":{"placementId":aps.desktopOrMobile(17045039,17045040)},"stf":{"placementId":aps.desktopOrMobile(17045041,17045042)},},};
break;
case"wiltonbulletin.com":aps.cfg.bid.pb.data.appnexus={"970x250":{"atf":{"placementId":14871272},},"728x90":{"atf":{"placementId":14871273},"btf":{"placementId":14871274},"stf":{"placementId":14871275},},"320x50":{"mad":{"placementId":14871276},},"300x250":{"atf":{"placementId":aps.desktopOrMobile(14871277,14871278)},"btf":{"placementId":aps.desktopOrMobile(14871279,14871280)},"stf":{"placementId":aps.desktopOrMobile(14871281,14871282)},},};
break
}aps.cfg.bid.pb.data.appnexus.extra=aps.cfg.bid.setDefaultExtra();
aps.cfg.bid.pb.data.appnexus.extra.hasNative=true;
aps.cfg.bid.pb.data.appnexus.extra.run=SERVER_COMPATIBLE
})();(function(){if(!aps.cfg.bid.shouldRunBidder("browsiRTD")){return
}aps.logInfo("enabling browsi RTD provider for Prebid");
var a=document.location.host.split(".");
try{if(window!==window.top){a=document.referrer.split("/")[2].split(".")
}}catch(b){aps.logInfo("Error : Can't set referrer for browsi")
}if(a.length>=2){aps.cfg.bid.pb.dataProviders.push({name:"browsi",params:{url:"yield-manager.browsiprod.com",siteKey:a[a.length-2],pubKey:"hearst",keyName:"browsiViewability",}})
}})();(function(){if(!aps.cfg.bid.shouldRunBidder("concert")){return
}aps.cfg.bid.pb.data.concert={};
switch(aps.cfg.bid.current_domain){case"beaumontenterprise.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"beaumontenterprise"},},};
break;
case"chron.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"chron"},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"ctinsider"},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"connecticut_post"},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"greenwich_time"},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"houston_chronicle"},},};
break;
case"lmtonline.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"lmtonline"},},};
break;
case"manisteenews.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"manisteenews"},},};
break;
case"michigansthumb.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"michigansthumb"},},};
break;
case"middletownpress.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"middletownpress"},},};
break;
case"mrt.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"mrt"},},};
break;
case"myjournalcourier.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"myjournalcourier"},},};
break;
case"myplainview.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"myplainview"},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"my_san_antonio"},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"news_times"},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"new_haven_register"},},};
break;
case"ourmidland.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"ourmidland"},},};
break;
case"registercitizen.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"registercitizen"},},};
break;
case"seattlepi.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"seattle_pi"},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"sf_chronicle"},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"sf_gate"},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"the_advocate"},},};
break;
case"thehour.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"thehour"},},};
break;
case"theintelligencer.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"theintelligencer"},},};
break;
case"thetelegraph.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"thetelegraph"},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.concert={"501x501":{"atf":{"partnerId":"times_union"},},};
break
}aps.cfg.bid.pb.data.concert.extra=aps.cfg.bid.setDefaultExtra()
})();(function(){if(!aps.cfg.bid.shouldRunBidder("criteo")){return
}aps.cfg.bid.pb.data.criteo={"params":{"networkId":2333},};
aps.cfg.bid.pb.data.criteo.extra=aps.cfg.bid.setDefaultExtra();
aps.cfg.bid.pb.data.criteo.extra.isSizeless=true
})();(function(){if(!aps.cfg.bid.shouldRunBidder("ix")){return
}aps.cfg.bid.pb.data.ix={"728x90":{"atf":{"siteId":"208030"},"btf":{"siteId":"208034"},"stf":{"siteId":"507908"},},"300x250":{"atf":{"siteId":"208031"},"btf":{"siteId":"208033"},"stf":{"siteId":"208035"},},"300x600":{"atf":{"siteId":"208039"},"btf":{"siteId":"507906"},"stf":{"siteId":"507907"},},"336x280":{"atf":{"siteId":"507897"},"btf":{"siteId":"507898"},"stf":{"siteId":"507899"},},"160x600":{"atf":{"siteId":"507900"},"btf":{"siteId":"507901"},"stf":{"siteId":"507902"},},"320x100":{"atf":{"siteId":"507903"},"btf":{"siteId":"507904"},"stf":{"siteId":"507905"},},"320x50":{"mad":{"siteId":"208044"},},};
aps.cfg.bid.pb.data.ix.extra=aps.cfg.bid.setDefaultExtra();
aps.cfg.bid.pb.data.ix.extra.splitBySize=true
})();(function(){if(!aps.cfg.bid.shouldRunBidder("kargo")){return
}aps.cfg.bid.pb.data.kargo={};
switch(aps.cfg.bid.current_domain){case"beaumontenterprise.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_yrNxBvqVdI"},},"300x250":{"atf":{"placementId":"_xs1Q0MOOIU"},"btf":{"placementId":"_kRIKy44sEY"},"stf":{"placementId":"_sDX0Ygipc2"},},};
break;
case"chron.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_flGiZRK3cN"},},"300x250":{"atf":{"placementId":"_vBAW1QFeiu"},"btf":{"placementId":"_oHaM3Rzynf"},"stf":{"placementId":"_agLlfOvajP"},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_kraDkgJg1r"},},"300x250":{"atf":{"placementId":"_kwEPdHslnz"},"btf":{"placementId":"_oJIWhHMgmk"},"stf":{"placementId":"_sZ2mbOzb6J"},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_qWwVIYkw0V"},},"300x250":{"atf":{"placementId":"_ibCN80mYke"},"btf":{"placementId":"_yXzuJeuBNf"},"stf":{"placementId":"_rSi6pZSN16"},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_ioKbom1kHf"},},"300x250":{"atf":{"placementId":"_rZNtNZx8hM"},"btf":{"placementId":"_lCTWc3uC5X"},"stf":{"placementId":"_c2C6M0m99I"},},};
break;
case"lmtonline.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_iXcexitDzq"},},"300x250":{"atf":{"placementId":"_jckiElI0TH"},"btf":{"placementId":"_nvvirQIZ8F"},"stf":{"placementId":"_nTc4UHLMTa"},},};
break;
case"myjournalcourier.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_guEML7IO9x"},},"300x250":{"atf":{"placementId":"_gsuYHCTsjs"},"btf":{"placementId":"_hDVqbqOYHF"},"stf":{"placementId":"_gxssIPOqIj"},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_lo84Y7M9N1"},},"300x250":{"atf":{"placementId":"_s4JNyM7QQu"},"btf":{"placementId":"_uTcpGXu3y3"},"stf":{"placementId":"_onUcYTFkew"},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_pjFOHKDPm8"},},"300x250":{"atf":{"placementId":"_zMzS2qBgWN"},"btf":{"placementId":"_nAhL8Y5EX6"},"stf":{"placementId":"_gE5mwSwgwa"},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_mu1aqVI37K"},},"300x250":{"atf":{"placementId":"_bo4gGKggRc"},"btf":{"placementId":"_hVYG8Mi0bg"},"stf":{"placementId":"_x4JCHZ1XPc"},},};
break;
case"ourmidland.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_tikbEbmkzR"},},"300x250":{"atf":{"placementId":"_mSk0HmJrPI"},"btf":{"placementId":"_cnU4gYRnJT"},"stf":{"placementId":"_vtohYB9FAZ"},},};
break;
case"registercitizen.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_vqsGsXnWTg"},},"300x250":{"atf":{"placementId":"_lfT6jHTTh7"},"btf":{"placementId":"_uoYta147cW"},"stf":{"placementId":"_k4uJImf9nJ"},},};
break;
case"seattlepi.com":if(aps.cfg.bid.prefetch.enabled){aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_jycOgNaiQr"},},"300x250":{"atf":{"placementId":"_fmLd3zb1Q3"},"btf":{"placementId":"_dDYDbbIwzh"},"stf":{"placementId":"_jB7tkrrsry"},},}
}break;
case"sfgate.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_nFjRNfQmNq"},},"300x250":{"atf":{"placementId":"_yo9o0NA9zM"},"btf":{"placementId":"_n1h12oiT70"},"stf":{"placementId":"_noATLH9Qo7"},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_qL9m0BXOtz"},},"300x250":{"atf":{"placementId":"_j9kQwPz1EX"},"btf":{"placementId":"_y5YkGmNrgy"},"stf":{"placementId":"_aQSrfMcyGS"},},};
break;
case"thehour.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_pmcz6A36vQ"},},"300x250":{"atf":{"placementId":"_yPlsiGsjSw"},"btf":{"placementId":"_hTwjtSfzXO"},"stf":{"placementId":"_vXKj1GDV2o"},},};
break;
case"thetelegraph.com":aps.cfg.bid.pb.data.kargo={"320x50":{"mad":{"placementId":"_zam7HpuJWC"},},"300x250":{"atf":{"placementId":"_stqAwWwRXW"},"btf":{"placementId":"_fOKIWGtBGr"},"stf":{"placementId":"_vxjJnO0tu2"},},};
break
}aps.cfg.bid.pb.data.kargo.extra=aps.cfg.bid.setDefaultExtra()
})();(function(){if(!aps.cfg.bid.shouldRunBidder("openx")){return
}aps.cfg.bid.pb.data.openx={};
switch(aps.cfg.bid.current_domain){case"beaumontenterprise.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210294,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210291,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210292,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210293,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210298,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210288,540210295),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210289,540210296),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210290,540210297),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"bigrapidsnews.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540857049,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540857046,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540857047,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540857048,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540857053,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540857043,540857050),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540857044,540857051),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540857045,540857052),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"chron.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210305,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210302,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210303,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210304,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(539993311,539993318),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(539993313,539993320),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210309,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210299,540210306),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210300,540210307),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210301,540210308),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"connecticutmag.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210316,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210313,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210314,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210315,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210320,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210310,540210317),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210311,540210318),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210312,540210319),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"countytimes.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210327,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210324,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210325,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210326,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210331,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210321,540210328),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210322,540210329),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210323,540210330),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"ctbulletin.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210338,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210335,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210336,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210337,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210342,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210332,540210339),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210333,540210340),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210334,540210341),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"cthousehunter.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210349,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210346,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210347,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210348,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210353,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210343,540210350),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210344,540210351),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210345,540210352),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210360,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210357,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210358,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210359,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(539993372,539993376),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(539993374,539993378),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210364,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210354,540210361),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210355,540210362),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210356,540210363),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"ctpostchronicle.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210371,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210368,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210369,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210370,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210376,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210365,540210372),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210366,540210373),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210367,540210375),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"dariennewsonline.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210383,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210380,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210381,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210382,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210387,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210377,540210384),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210378,540210385),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210379,540210386),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"darientimes.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540613479,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540613477,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540613478,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540613644,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540613485,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540613472,540613480),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540613473,540613481),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540613474,540613482),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"dolphin-news.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210394,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210391,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210392,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210393,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210398,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210388,540210395),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210389,540210396),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210390,540210397),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210405,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210402,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210403,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210404,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210409,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210399,540210406),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210400,540210407),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210401,540210408),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"fairfieldcitizenonline.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210416,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210413,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210414,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210415,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210420,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210410,540210417),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210411,540210418),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210412,540210419),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"foothillstrader.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210427,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210424,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210425,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210426,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210431,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210421,540210428),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210422,540210429),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210423,540210430),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"gametimect.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210438,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210435,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210436,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210437,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210442,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210432,540210439),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210433,540210440),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210434,540210441),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"greenstate.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210449,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210446,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210447,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210448,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210453,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210443,540210450),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210444,540210451),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210445,540210452),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210460,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210457,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210458,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210459,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(540237519,540237531),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(540237523,540237551),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210464,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210454,540210461),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210455,540210462),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210456,540210463),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210471,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210468,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210469,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210470,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210475,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210465,540210472),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210466,540210473),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210467,540210474),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"ingearct.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210482,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210479,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210480,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210481,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210486,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210476,540210483),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210477,540210484),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210478,540210485),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"lakecountystar.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540857060,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540857057,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540857058,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540857059,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540857065,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540857054,540857062),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540857055,540857063),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540857056,540857064),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"lmtonline.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210493,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210490,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210491,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210492,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210497,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210487,540210494),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210488,540210495),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210489,540210496),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"manisteenews.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540857072,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540857069,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540857070,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540857071,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540857076,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540857066,540857073),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540857067,540857074),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540857068,540857075),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"michigansthumb.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210504,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210501,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210502,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210503,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210508,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210498,540210505),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210499,540210506),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210500,540210507),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"middletownpress.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210515,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210512,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210513,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210514,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210519,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210509,540210516),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210510,540210517),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210511,540210518),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"milfordmirror.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540613521,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540613519,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540613520,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540613659,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540613527,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540613514,540613522),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540613515,540613523),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540613516,540613524),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"mrt.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210527,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210524,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210525,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210526,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(540237569,540238059),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(540237984,540238105),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210531,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210520,540210528),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210521,540210529),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210522,540210530),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"myjournalcourier.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210538,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210535,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210536,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210537,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(540237571,540238061),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(540237986,540238116),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210542,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210532,540210539),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210533,540210540),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210534,540210541),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"myplainview.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210549,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210546,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210547,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210548,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210553,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210543,540210550),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210544,540210551),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210545,540210552),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210560,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210557,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210558,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210559,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(539977983,539978039),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(539976915,539977552),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210564,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210554,540210561),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210555,540210562),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210556,540210563),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"ncadvertiser.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540612800,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540612797,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540612798,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540613637,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540612804,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540612794,540612801),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540612795,540612802),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540612796,540612803),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"newcanaannewsonline.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210572,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210568,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210569,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210570,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210576,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210565,540210573),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210566,540210574),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210567,540210575),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"newmilfordspectrum.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210583,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210580,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210581,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210582,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210587,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210577,540210584),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210578,540210585),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210579,540210586),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210594,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210591,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210592,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210593,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(540237573,540238064),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(540237988,540238118),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210598,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210588,540210595),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210589,540210596),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210590,540210597),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210605,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210602,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210603,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210604,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(540237575,540238066),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(540237990,540238120),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210609,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210599,540210606),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210600,540210607),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210601,540210608),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"ourmidland.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210616,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210613,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210614,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210615,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210620,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210610,540210617),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210611,540210618),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210612,540210619),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"recordpatriot.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540857083,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540857080,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540857081,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540857082,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540857087,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540857077,540857084),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540857078,540857085),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540857079,540857086),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"registercitizen.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210627,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210624,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210625,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210626,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(540237577,540238069),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(540237992,540238122),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210631,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210621,540210628),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210622,540210629),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210623,540210630),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"seattlepi.com":if(aps.cfg.bid.prefetch.enabled){aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":543886214,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":543886216,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":543886217,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":543886218,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(539993329,539993337),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(539993333,539993341),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":543886219,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(543886220,543886221),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(543886222,543886223),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(543886224,543886215),"delDomain":"hearstnewspapers-d.openx.net"},},}
}else{aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210638,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210635,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210636,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210637,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(539993329,539993337),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(539993333,539993341),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210642,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210632,540210639),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210633,540210640),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210634,540210641),"delDomain":"hearstnewspapers-d.openx.net"},},}
}break;
case"sellitlaredo.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210649,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210646,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210647,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210648,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210653,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210643,540210650),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210644,540210651),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210645,540210652),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"sellittexas.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210660,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210657,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210658,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210659,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210664,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210654,540210661),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210655,540210662),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210656,540210663),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210671,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210668,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210669,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210670,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210675,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210665,540210672),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210666,540210673),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210667,540210674),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210682,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210679,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210680,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210681,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(539992256,539992305),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(539992169,539992237),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210686,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210676,540210683),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210677,540210684),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210678,540210685),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"sheltonherald.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540613493,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540613491,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540613492,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540613653,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540613499,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540613486,540613494),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540613487,540613495),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540613488,540613496),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"shorelinetimes.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210693,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210690,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210691,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210692,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210697,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210687,540210694),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210688,540210695),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210689,540210696),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"southeasttexas.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210704,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210701,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210702,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210703,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210708,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210698,540210705),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210699,540210706),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210700,540210707),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"southernctjobs.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210715,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210712,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210713,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210714,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210719,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210709,540210716),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210710,540210717),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210711,540210718),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210726,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210723,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210724,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210725,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(540237579,540238071),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(540237994,540238124),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210730,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210720,540210727),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210721,540210728),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210722,540210729),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"theheraldreview.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540857094,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540857091,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540857092,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540857093,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540857098,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540857088,540857095),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540857089,540857096),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540857090,540857097),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"thehomemonthly.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":"","delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":"","delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":"","delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":"","delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":"","delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":"","delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":"","delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":"","delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"thehour.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210738,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210734,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210735,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210737,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(540237581,540238073),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(540237996,540238126),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210742,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210731,540210739),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210732,540210740),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210733,540210741),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"theintelligencer.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210749,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210746,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210747,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210748,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210753,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210743,540210750),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210744,540210751),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210745,540210752),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"theridgefieldpress.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540613345,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540613342,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540613343,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540613639,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540613349,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540613339,540613346),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540613340,540613347),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540613341,540613348),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"thetelegraph.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210760,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210757,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210758,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210759,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(540237583,540238076),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(540237998,540238128),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210764,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210754,540210761),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210755,540210762),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210756,540210763),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210771,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210768,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210769,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210770,"delDomain":"hearstnewspapers-d.openx.net"},},"640x480":{"apv":{"unit":aps.desktopOrMobile(539993355,539993359),"delDomain":"hearstnewspapers-d.openx.net"},"ctp":{"unit":aps.desktopOrMobile(539993357,539993361),"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210775,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210765,540210772),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210766,540210773),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210767,540210774),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"trumbulltimes.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540613507,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540613505,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540613506,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540613655,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540613513,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540613500,540613508),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540613501,540613509),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540613502,540613510),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"westhartfordnews.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540210782,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540210779,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540210780,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540210781,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540210786,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540210776,540210783),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540210777,540210784),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540210778,540210785),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"westport-news.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540857105,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540857102,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540857103,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540857104,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540857109,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540857099,540857106),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540857100,540857107),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540857101,540857108),"delDomain":"hearstnewspapers-d.openx.net"},},};
break;
case"wiltonbulletin.com":aps.cfg.bid.pb.data.openx={"970x250":{"atf":{"unit":540613465,"delDomain":"hearstnewspapers-d.openx.net"},},"728x90":{"atf":{"unit":540613463,"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":540613464,"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":540613643,"delDomain":"hearstnewspapers-d.openx.net"},},"320x50":{"mad":{"unit":540613471,"delDomain":"hearstnewspapers-d.openx.net"},},"300x250":{"atf":{"unit":aps.desktopOrMobile(540613458,540613466),"delDomain":"hearstnewspapers-d.openx.net"},"btf":{"unit":aps.desktopOrMobile(540613459,540613467),"delDomain":"hearstnewspapers-d.openx.net"},"stf":{"unit":aps.desktopOrMobile(540613460,540613468),"delDomain":"hearstnewspapers-d.openx.net"},},};
break
}aps.cfg.bid.pb.data.openx.extra=aps.cfg.bid.setDefaultExtra();
aps.cfg.bid.pb.data.openx.extra.run=SERVER_COMPATIBLE
})();(function(){if(!aps.cfg.bid.shouldRunBidder("optimeraRTD")){return
}if(aps.isLegacy){return
}aps.logInfo("enabling optimera RTD provider for Prebid");
var c=document.createElement("script");
c.src="https://web.archive.org/web/20211007045442/https://d15kdpgjg3unno.cloudfront.net/oPS.js?cid=31";
c.id="optimera-ops";
var b=document.getElementsByTagName("html")[0].children;
b[(b.length>1)?1:0].appendChild(c);
var a=["","de","mo","tb"];
aps.cfg.bid.pb.dataProviders.push({name:"optimeraRTD",waitForIt:true,params:{clientID:"31",optimeraKeyName:"hb_deal_optimera",device:a[current_device]}});
aps.registerEvent(aps.event.on_before_enable_google_services,function(d){var e=pbjs.getAdserverTargeting();
Object.entries(e).forEach(function(f){var g=f[0];
var h=aps.cfg.dfp.googleSlots[g];
if(!h){return
}if(f[1]["hb_deal_optimera"]){aps.logInfo("pb set targeting "+aps.fixLen(g,10)+" hb_deal_optimera = "+f[1]["hb_deal_optimera"]);
h.setTargeting("hb_deal_optimera",f[1]["hb_deal_optimera"])
}})
})
})();(function(){if(!aps.cfg.bid.shouldRunBidder("permutiveRTD")){return
}aps.logInfo("enabling permutive RTD provider for Prebid");
aps.cfg.bid.pb.dataProviders.push({name:"permutive",waitForIt:true,params:{acBidders:["appnexus"],maxSegs:100,}})
})();(function(){if(!aps.cfg.bid.shouldRunBidder("pubmatic")){return
}aps.cfg.bid.pb.data.pubmatic={};
switch(aps.cfg.bid.current_domain){case"beaumontenterprise.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"beaumontenterprise.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"beaumontenterprise.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"beaumontenterprise.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"beaumontenterprise.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"beaumontenterprise.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("beaumontenterprise.com_300x250_AD@300x250","beaumontenterprise.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("beaumontenterprise.com_300x250_BD@300x250","beaumontenterprise.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("beaumontenterprise.com_300x250_SD@300x250","beaumontenterprise.com_300x250_SM@300x250")},},};
break;
case"bigrapidsnews.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"bigrapidsnews.com_desktop_970x250_ATF"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"bigrapidsnews.com_desktop_728x90_ATF"},"btf":{"publisherId":157076,"adSlot":"bigrapidsnews.com_desktop_728x90_BTF"},"stf":{"publisherId":157076,"adSlot":"bigrapidsnews.com_desktop_728x90_STF"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"bigrapidsnews.com_mobile_320x50_MAD"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("bigrapidsnews.com_desktop_300x250_ATF","bigrapidsnews.com_mobile_300x250_ATF")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("bigrapidsnews.com_desktop_300x250_BTF","bigrapidsnews.com_mobile_300x250_BTF")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("bigrapidsnews.com_desktop_300x250_STF","bigrapidsnews.com_mobile_300x250_STF")},},};
break;
case"chron.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"chron.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"chron.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"chron.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"chron.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"chron.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("chron.com_300x250_AD@300x250","chron.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("chron.com_300x250_BD@300x250","chron.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("chron.com_300x250_SD@300x250","chron.com_300x250_SM@300x250")},},};
break;
case"connecticutmag.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"connecticutmag.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"connecticutmag.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"connecticutmag.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"connecticutmag.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"connecticutmag.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("connecticutmag.com_300x250_AD@300x250","connecticutmag.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("connecticutmag.com_300x250_BD@300x250","connecticutmag.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("connecticutmag.com_300x250_SD@300x250","connecticutmag.com_300x250_SM@300x250")},},};
break;
case"countytimes.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"countytimes.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"countytimes.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"countytimes.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"countytimes.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"countytimes.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("countytimes.com_300x250_AD@300x250","countytimes.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("countytimes.com_300x250_BD@300x250","countytimes.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("countytimes.com_300x250_SD@300x250","countytimes.com_300x250_SM@300x250")},},};
break;
case"ctbulletin.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"ctbulletin.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"ctbulletin.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"ctbulletin.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"ctbulletin.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"ctbulletin.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctbulletin.com_300x250_AD@300x250","ctbulletin.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctbulletin.com_300x250_BD@300x250","ctbulletin.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctbulletin.com_300x250_SD@300x250","ctbulletin.com_300x250_SM@300x250")},},};
break;
case"cthousehunter.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"cthousehunter.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"cthousehunter.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"cthousehunter.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"cthousehunter.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"cthousehunter.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("cthousehunter.com_300x250_AD@300x250","cthousehunter.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("cthousehunter.com_300x250_BD@300x250","cthousehunter.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("cthousehunter.com_300x250_SD@300x250","cthousehunter.com_300x250_SM@300x250")},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"ctinsider.com_970x250_AD@970x250"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"ctinsider.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"ctinsider.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"ctinsider.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"ctinsider.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctinsider.com_300x250_AD@300x250","ctinsider.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctinsider.com_300x250_BD@300x250","ctinsider.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctinsider.com_300x250_SD@300x250","ctinsider.com_300x250_SM@300x250")},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"ctpost.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"ctpost.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"ctpost.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"ctpost.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"ctpost.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctpost.com_300x250_AD@300x250","ctpost.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctpost.com_300x250_BD@300x250","ctpost.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctpost.com_300x250_SD@300x250","ctpost.com_300x250_SM@300x250")},},};
break;
case"ctpostchronicle.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"ctpostchronicle.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"ctpostchronicle.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"ctpostchronicle.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"ctpostchronicle.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"ctpostchronicle.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctpostchronicle.com_300x250_AD@300x250","ctpostchronicle.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctpostchronicle.com_300x250_BD@300x250","ctpostchronicle.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ctpostchronicle.com_300x250_SD@300x250","ctpostchronicle.com_300x250_SM@300x250")},},};
break;
case"dariennewsonline.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"dariennewsonline.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"dariennewsonline.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"dariennewsonline.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"dariennewsonline.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"dariennewsonline.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("dariennewsonline.com_300x250_AD@300x250","dariennewsonline.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("dariennewsonline.com_300x250_BD@300x250","dariennewsonline.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("dariennewsonline.com_300x250_SD@300x250","dariennewsonline.com_300x250_SM@300x250")},},};
break;
case"darientimes.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"darientimes.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"darientimes.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"darientimes.com_728x90_SD@728x90"},"stf":{"publisherId":157076,"adSlot":"darientimes.com_728x90_BD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"darientimes.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("darientimes.com_300x250_AD@300x250","darientimes.com_300x250_BM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("darientimes.com_300x250_BD@300x250","darientimes.com_300x250_SM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("darientimes.com_300x250_AM@300x250","darientimes.com_300x250_SD@300x250")},},};
break;
case"dolphin-news.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"dolphin-news.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"dolphin-news.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"dolphin-news.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"dolphin-news.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"dolphin-news.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("dolphin-news.com_300x250_AD@300x250","dolphin-news.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("dolphin-news.com_300x250_BD@300x250","dolphin-news.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("dolphin-news.com_300x250_SD@300x250","dolphin-news.com_300x250_SM@300x250")},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"expressnews.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"expressnews.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"expressnews.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"expressnews.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"expressnews.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("expressnews.com_300x250_AD@300x250","expressnews.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("expressnews.com_300x250_BD@300x250","expressnews.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("expressnews.com_300x250_SD@300x250","expressnews.com_300x250_SM@300x250")},},};
break;
case"fairfieldcitizenonline.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"fairfieldcitizenonline.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"fairfieldcitizenonline.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"fairfieldcitizenonline.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"fairfieldcitizenonline.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"fairfieldcitizenonline.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("fairfieldcitizenonline.com_300x250_AD@300x250","fairfieldcitizenonline.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("fairfieldcitizenonline.com_300x250_BD@300x250","fairfieldcitizenonline.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("fairfieldcitizenonline.com_300x250_SD@300x250","fairfieldcitizenonline.com_300x250_SM@300x250")},},};
break;
case"foothillstrader.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"foothillstrader.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"foothillstrader.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"foothillstrader.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"foothillstrader.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"foothillstrader.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("foothillstrader.com_300x250_AD@300x250","foothillstrader.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("foothillstrader.com_300x250_BD@300x250","foothillstrader.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("foothillstrader.com_300x250_SD@300x250","foothillstrader.com_300x250_SM@300x250")},},};
break;
case"gametimect.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"gametimect.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"gametimect.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"gametimect.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"gametimect.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"gametimect.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("gametimect.com_300x250_AD@300x250","gametimect.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("gametimect.com_300x250_BD@300x250","gametimect.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("gametimect.com_300x250_SD@300x250","gametimect.com_300x250_SM@300x250")},},};
break;
case"greenstate.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"greenstate.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"greenstate.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"greenstate.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"greenstate.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"greenstate.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("greenstate.com_300x250_AD@300x250","greenstate.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("greenstate.com_300x250_BD@300x250","greenstate.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("greenstate.com_300x250_SD@300x250","greenstate.com_300x250_SM@300x250")},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"greenwichtime.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"greenwichtime.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"greenwichtime.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"greenwichtime.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"greenwichtime.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("greenwichtime.com_300x250_AD@300x250","greenwichtime.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("greenwichtime.com_300x250_BD@300x250","greenwichtime.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("greenwichtime.com_300x250_SD@300x250","greenwichtime.com_300x250_SM@300x250")},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"houstonchronicle.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"houstonchronicle.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"houstonchronicle.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"houstonchronicle.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"houstonchronicle.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("houstonchronicle.com_300x250_AD@300x250","houstonchronicle.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("houstonchronicle.com_300x250_BD@300x250","houstonchronicle.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("houstonchronicle.com_300x250_SD@300x250","houstonchronicle.com_300x250_SM@300x250")},},};
break;
case"ingearct.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"ingearct.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"ingearct.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"ingearct.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"ingearct.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"ingearct.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ingearct.com_300x250_AD@300x250","ingearct.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ingearct.com_300x250_BD@300x250","ingearct.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ingearct.com_300x250_SD@300x250","ingearct.com_300x250_SM@300x250")},},};
break;
case"lakecountystar.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"lakecountystar.com_desktop_970x250_ATF"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"lakecountystar.com_desktop_728x90_ATF"},"btf":{"publisherId":157076,"adSlot":"lakecountystar.com_desktop_728x90_BTF"},"stf":{"publisherId":157076,"adSlot":"lakecountystar.com_desktop_728x90_STF"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"lakecountystar.com_mobile_320x50_MAD"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("lakecountystar.com_desktop_300x250_ATF","lakecountystar.com_mobile_300x250_ATF")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("lakecountystar.com_desktop_300x250_BTF","lakecountystar.com_mobile_300x250_BTF")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("lakecountystar.com_desktop_300x250_STF","lakecountystar.com_mobile_300x250_STF")},},};
break;
case"lmtonline.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"lmtonline.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"lmtonline.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"lmtonline.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"lmtonline.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"lmtonline.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("lmtonline.com_300x250_AD@300x250","lmtonline.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("lmtonline.com_300x250_BD@300x250","lmtonline.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("lmtonline.com_300x250_SD@300x250","lmtonline.com_300x250_SM@300x250")},},};
break;
case"manisteenews.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"manisteenews.com_desktop_970x250_ATF"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"manisteenews.com_desktop_728x90_ATF"},"btf":{"publisherId":157076,"adSlot":"manisteenews.com_desktop_728x90_BTF"},"stf":{"publisherId":157076,"adSlot":"manisteenews.com_desktop_728x90_STF"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"manisteenews.com_mobile_320x50_MAD"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("manisteenews.com_desktop_300x250_ATF","manisteenews.com_mobile_300x250_ATF")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("manisteenews.com_desktop_300x250_BTF","manisteenews.com_mobile_300x250_BTF")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("manisteenews.com_desktop_300x250_STF","manisteenews.com_mobile_300x250_STF")},},};
break;
case"michigansthumb.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"michigansthumb.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"michigansthumb.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"michigansthumb.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"michigansthumb.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"michigansthumb.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("michigansthumb.com_300x250_AD@300x250","michigansthumb.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("michigansthumb.com_300x250_BD@300x250","michigansthumb.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("michigansthumb.com_300x250_SD@300x250","michigansthumb.com_300x250_SM@300x250")},},};
break;
case"middletownpress.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"middletownpress.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"middletownpress.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"middletownpress.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"middletownpress.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"middletownpress.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("middletownpress.com_300x250_AD@300x250","middletownpress.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("middletownpress.com_300x250_BD@300x250","middletownpress.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("middletownpress.com_300x250_SD@300x250","middletownpress.com_300x250_SM@300x250")},},};
break;
case"milfordmirror.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"milfordmirror.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"milfordmirror.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"milfordmirror.com_728x90_SD@728x90"},"stf":{"publisherId":157076,"adSlot":"milfordmirror.com_728x90_BD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"milfordmirror.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("milfordmirror.com_300x250_AD@300x250","milfordmirror.com_300x250_BM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("milfordmirror.com_300x250_BD@300x250","milfordmirror.com_300x250_SM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("milfordmirror.com_300x250_AM@300x250","milfordmirror.com_300x250_SD@300x250")},},};
break;
case"mrt.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"mrt.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"mrt.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"mrt.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"mrt.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"mrt.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("mrt.com_300x250_AD@300x250","mrt.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("mrt.com_300x250_BD@300x250","mrt.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("mrt.com_300x250_SD@300x250","mrt.com_300x250_SM@300x250")},},};
break;
case"myjournalcourier.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"myjournalcourier.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"myjournalcourier.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"myjournalcourier.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"myjournalcourier.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"myjournalcourier.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("myjournalcourier.com_300x250_AD@300x250","myjournalcourier.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("myjournalcourier.com_300x250_BD@300x250","myjournalcourier.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("myjournalcourier.com_300x250_SD@300x250","myjournalcourier.com_300x250_SM@300x250")},},};
break;
case"myplainview.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"myplainview.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"myplainview.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"myplainview.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"myplainview.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"myplainview.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("myplainview.com_300x250_AD@300x250","myplainview.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("myplainview.com_300x250_BD@300x250","myplainview.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("myplainview.com_300x250_SD@300x250","myplainview.com_300x250_SM@300x250")},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"mysanantonio.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"mysanantonio.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"mysanantonio.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"mysanantonio.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"mysanantonio.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("mysanantonio.com_300x250_AD@300x250","mysanantonio.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("mysanantonio.com_300x250_BD@300x250","mysanantonio.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("mysanantonio.com_300x250_SD@300x250","mysanantonio.com_300x250_SM@300x250")},},};
break;
case"ncadvertiser.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"ncadvertiser.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"ncadvertiser.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"ncadvertiser.com_728x90_SD@728x90"},"stf":{"publisherId":157076,"adSlot":"ncadvertiser.com_728x90_BD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"ncadvertiser.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ncadvertiser.com_300x250_AD@300x250","ncadvertiser.com_300x250_BM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ncadvertiser.com_300x250_BD@300x250","ncadvertiser.com_300x250_SM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ncadvertiser.com_300x250_AM@300x250","ncadvertiser.com_300x250_SD@300x250")},},};
break;
case"newcanaannewsonline.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"newcanaannewsonline.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"newcanaannewsonline.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"newcanaannewsonline.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"newcanaannewsonline.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"newcanaannewsonline.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newcanaannewsonline.com_300x250_AD@300x250","newcanaannewsonline.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newcanaannewsonline.com_300x250_BD@300x250","newcanaannewsonline.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newcanaannewsonline.com_300x250_SD@300x250","newcanaannewsonline.com_300x250_SM@300x250")},},};
break;
case"newmilfordspectrum.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"newmilfordspectrum.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"newmilfordspectrum.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"newmilfordspectrum.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"newmilfordspectrum.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"newmilfordspectrum.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newmilfordspectrum.com_300x250_AD@300x250","newmilfordspectrum.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newmilfordspectrum.com_300x250_BD@300x250","newmilfordspectrum.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newmilfordspectrum.com_300x250_SD@300x250","newmilfordspectrum.com_300x250_SM@300x250")},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"newstimes.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"newstimes.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"newstimes.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"newstimes.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"newstimes.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newstimes.com_300x250_AD@300x250","newstimes.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newstimes.com_300x250_BD@300x250","newstimes.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newstimes.com_300x250_SD@300x250","newstimes.com_300x250_SM@300x250")},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"nhregister.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"nhregister.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"nhregister.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"nhregister.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"nhregister.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("nhregister.com_300x250_AD@300x250","nhregister.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("nhregister.com_300x250_BD@300x250","nhregister.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("nhregister.com_300x250_SD@300x250","nhregister.com_300x250_SM@300x250")},},};
break;
case"ourmidland.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"ourmidland.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"ourmidland.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"ourmidland.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"ourmidland.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"ourmidland.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ourmidland.com_300x250_AD@300x250","ourmidland.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ourmidland.com_300x250_BD@300x250","ourmidland.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("ourmidland.com_300x250_SD@300x250","ourmidland.com_300x250_SM@300x250")},},};
break;
case"recordpatriot.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"recordpatriot.com_desktop_970x250_ATF"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"recordpatriot.com_desktop_728x90_ATF"},"btf":{"publisherId":157076,"adSlot":"recordpatriot.com_desktop_728x90_BTF"},"stf":{"publisherId":157076,"adSlot":"recordpatriot.com_desktop_728x90_STF"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"recordpatriot.com_mobile_320x50_MAD"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("recordpatriot.com_desktop_300x250_ATF","recordpatriot.com_mobile_300x250_ATF")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("recordpatriot.com_desktop_300x250_BTF","recordpatriot.com_mobile_300x250_BTF")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("recordpatriot.com_desktop_300x250_STF","recordpatriot.com_mobile_300x250_STF")},},};
break;
case"registercitizen.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"registercitizen.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"registercitizen.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"registercitizen.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"registercitizen.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"registercitizen.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("registercitizen.com_300x250_AD@300x250","registercitizen.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("registercitizen.com_300x250_BD@300x250","registercitizen.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("registercitizen.com_300x250_SD@300x250","registercitizen.com_300x250_SM@300x250")},},};
break;
case"seattlepi.com":if(aps.cfg.bid.prefetch.enabled){aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"newseattlepi.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"newseattlepi.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"newseattlepi.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"newseattlepi.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"newseattlepi.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newseattlepi.com_300x250_AD@300x250","newseattlepi.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newseattlepi.com_300x250_BD@300x250","newseattlepi.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("newseattlepi.com_300x250_SD@300x250","newseattlepi.com_300x250_SM@300x250")},},}
}else{aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"seattlepi.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"seattlepi.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"seattlepi.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"seattlepi.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"seattlepi.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("seattlepi.com_300x250_AD@300x250","seattlepi.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("seattlepi.com_300x250_BD@300x250","seattlepi.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("seattlepi.com_300x250_SD@300x250","seattlepi.com_300x250_SM@300x250")},},}
}break;
case"sellitlaredo.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"sellitlaredo.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"sellitlaredo.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"sellitlaredo.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"sellitlaredo.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"sellitlaredo.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sellitlaredo.com_300x250_AD@300x250","sellitlaredo.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sellitlaredo.com_300x250_BD@300x250","sellitlaredo.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sellitlaredo.com_300x250_SD@300x250","sellitlaredo.com_300x250_SM@300x250")},},};
break;
case"sellittexas.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"sellittexas.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"sellittexas.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"sellittexas.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"sellittexas.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"sellittexas.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sellittexas.com_300x250_AD@300x250","sellittexas.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sellittexas.com_300x250_BD@300x250","sellittexas.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sellittexas.com_300x250_SD@300x250","sellittexas.com_300x250_SM@300x250")},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"sfchronicle.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"sfchronicle.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"sfchronicle.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"sfchronicle.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"sfchronicle.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sfchronicle.com_300x250_AD@300x250","sfchronicle.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sfchronicle.com_300x250_BD@300x250","sfchronicle.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sfchronicle.com_300x250_SD@300x250","sfchronicle.com_300x250_SM@300x250")},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"sfgate.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"sfgate.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"sfgate.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"sfgate.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"sfgate.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sfgate.com_300x250_AD@300x250","sfgate.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sfgate.com_300x250_BD@300x250","sfgate.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sfgate.com_300x250_SD@300x250","sfgate.com_300x250_SM@300x250")},},};
break;
case"sheltonherald.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"sheltonherald.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"sheltonherald.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"sheltonherald.com_728x90_SD@728x90"},"stf":{"publisherId":157076,"adSlot":"sheltonherald.com_728x90_BD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"sheltonherald.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sheltonherald.com_300x250_AD@300x250","sheltonherald.com_300x250_BM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sheltonherald.com_300x250_BD@300x250","sheltonherald.com_300x250_SM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("sheltonherald.com_300x250_AM@300x250","sheltonherald.com_300x250_SD@300x250")},},};
break;
case"shorelinetimes.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"shorelinetimes.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"shorelinetimes.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"shorelinetimes.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"shorelinetimes.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"shorelinetimes.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("shorelinetimes.com_300x250_AD@300x250","shorelinetimes.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("shorelinetimes.com_300x250_BD@300x250","shorelinetimes.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("shorelinetimes.com_300x250_SD@300x250","shorelinetimes.com_300x250_SM@300x250")},},};
break;
case"southeasttexas.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"southeasttexas.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"southeasttexas.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"southeasttexas.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"southeasttexas.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"southeasttexas.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("southeasttexas.com_300x250_AD@300x250","southeasttexas.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("southeasttexas.com_300x250_BD@300x250","southeasttexas.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("southeasttexas.com_300x250_SD@300x250","southeasttexas.com_300x250_SM@300x250")},},};
break;
case"southernctjobs.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"southernctjobs.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"southernctjobs.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"southernctjobs.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"southernctjobs.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"southernctjobs.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("southernctjobs.com_300x250_AD@300x250","southernctjobs.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("southernctjobs.com_300x250_BD@300x250","southernctjobs.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("southernctjobs.com_300x250_SD@300x250","southernctjobs.com_300x250_SM@300x250")},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"stamfordadvocate.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"stamfordadvocate.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"stamfordadvocate.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"stamfordadvocate.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"stamfordadvocate.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("stamfordadvocate.com_300x250_AD@300x250","stamfordadvocate.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("stamfordadvocate.com_300x250_BD@300x250","stamfordadvocate.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("stamfordadvocate.com_300x250_SD@300x250","stamfordadvocate.com_300x250_SM@300x250")},},};
break;
case"theheraldreview.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"theheraldreview.com_desktop_970x250_ATF"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"theheraldreview.com_desktop_728x90_ATF"},"btf":{"publisherId":157076,"adSlot":"theheraldreview.com_desktop_728x90_BTF"},"stf":{"publisherId":157076,"adSlot":"theheraldreview.com_desktop_728x90_STF"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"theheraldreview.com_mobile_320x50_MAD"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("theheraldreview.com_desktop_300x250_ATF","theheraldreview.com_mobile_300x250_ATF")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("theheraldreview.com_desktop_300x250_BTF","theheraldreview.com_mobile_300x250_BTF")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("theheraldreview.com_desktop_300x250_STF","theheraldreview.com_mobile_300x250_STF")},},};
break;
case"thehomemonthly.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"thehomemonthly.com_970x250_AD@970x250"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"thehomemonthly.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"thehomemonthly.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"thehomemonthly.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"thehomemonthly.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("thehomemonthly.com_300x250_AD@300x250","thehomemonthly.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("thehomemonthly.com_300x250_BD@300x250","thehomemonthly.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("thehomemonthly.com_300x250_SD@300x250","thehomemonthly.com_300x250_SM@300x250")},},};
break;
case"thehour.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"thehour.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"thehour.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"thehour.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"thehour.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"thehour.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("thehour.com_300x250_AD@300x250","thehour.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("thehour.com_300x250_BD@300x250","thehour.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("thehour.com_300x250_SD@300x250","thehour.com_300x250_SM@300x250")},},};
break;
case"theintelligencer.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"theintelligencer.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"theintelligencer.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"theintelligencer.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"theintelligencer.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"theintelligencer.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("theintelligencer.com_300x250_AD@300x250","theintelligencer.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("theintelligencer.com_300x250_BD@300x250","theintelligencer.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("theintelligencer.com_300x250_SD@300x250","theintelligencer.com_300x250_SM@300x250")},},};
break;
case"theridgefieldpress.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"theridgefieldpress.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"theridgefieldpress.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"theridgefieldpress.com_728x90_SD@728x90"},"stf":{"publisherId":157076,"adSlot":"theridgefieldpress.com_728x90_BD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"theridgefieldpress.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("theridgefieldpress.com_300x250_AD@300x250","theridgefieldpress.com_300x250_BM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("theridgefieldpress.com_300x250_BD@300x250","theridgefieldpress.com_300x250_SM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("theridgefieldpress.com_300x250_AM@300x250","theridgefieldpress.com_300x250_SD@300x250")},},};
break;
case"thetelegraph.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"thetelegraph.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"thetelegraph.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"thetelegraph.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"thetelegraph.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"thetelegraph.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("thetelegraph.com_300x250_AD@300x250","thetelegraph.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("thetelegraph.com_300x250_BD@300x250","thetelegraph.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("thetelegraph.com_300x250_SD@300x250","thetelegraph.com_300x250_SM@300x250")},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"timesunion.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"timesunion.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"timesunion.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"timesunion.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"timesunion.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("timesunion.com_300x250_AD@300x250","timesunion.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("timesunion.com_300x250_BD@300x250","timesunion.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("timesunion.com_300x250_SD@300x250","timesunion.com_300x250_SM@300x250")},},};
break;
case"trumbulltimes.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"trumbulltimes.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"trumbulltimes.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"trumbulltimes.com_728x90_SD@728x90"},"stf":{"publisherId":157076,"adSlot":"trumbulltimes.com_728x90_BD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"trumbulltimes.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("trumbulltimes.com_300x250_AD@300x250","trumbulltimes.com_300x250_BM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("trumbulltimes.com_300x250_BD@300x250","trumbulltimes.com_300x250_SM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("trumbulltimes.com_300x250_AM@300x250","trumbulltimes.com_300x250_SD@300x250")},},};
break;
case"westhartfordnews.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"westhartfordnews.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"westhartfordnews.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"westhartfordnews.com_728x90_BD@728x90"},"stf":{"publisherId":157076,"adSlot":"westhartfordnews.com_728x90_SD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"westhartfordnews.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("westhartfordnews.com_300x250_AD@300x250","westhartfordnews.com_300x250_AM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("westhartfordnews.com_300x250_BD@300x250","westhartfordnews.com_300x250_BM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("westhartfordnews.com_300x250_SD@300x250","westhartfordnews.com_300x250_SM@300x250")},},};
break;
case"westport-news.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"westport-news.com_desktop_970x250_ATF"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"westport-news.com_desktop_728x90_ATF"},"btf":{"publisherId":157076,"adSlot":"westport-news.com_desktop_728x90_BTF"},"stf":{"publisherId":157076,"adSlot":"westport-news.com_desktop_728x90_STF"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"westport-news.com_mobile_320x50_MAD"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("westport-news.com_desktop_300x250_ATF","westport-news.com_mobile_300x250_ATF")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("westport-news.com_desktop_300x250_BTF","westport-news.com_mobile_300x250_BTF")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("westport-news.com_desktop_300x250_STF","westport-news.com_mobile_300x250_STF")},},};
break;
case"wiltonbulletin.com":aps.cfg.bid.pb.data.pubmatic={"970x250":{"atf":{"publisherId":157076,"adSlot":"wiltonbulletin.com_970x90_AD@970x90"},},"728x90":{"atf":{"publisherId":157076,"adSlot":"wiltonbulletin.com_728x90_AD@728x90"},"btf":{"publisherId":157076,"adSlot":"wiltonbulletin.com_728x90_SD@728x90"},"stf":{"publisherId":157076,"adSlot":"wiltonbulletin.com_728x90_BD@728x90"},},"320x50":{"mad":{"publisherId":157076,"adSlot":"wiltonbulletin.com_320x50_MM@320x50"},},"300x250":{"atf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("wiltonbulletin.com_300x250_AD@300x250","wiltonbulletin.com_300x250_BM@300x250")},"btf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("wiltonbulletin.com_300x250_BD@300x250","wiltonbulletin.com_300x250_SM@300x250")},"stf":{"publisherId":157076,"adSlot":aps.desktopOrMobile("wiltonbulletin.com_300x250_AM@300x250","wiltonbulletin.com_300x250_SD@300x250")},},};
break
}aps.cfg.bid.pb.data.pubmatic.extra=aps.cfg.bid.setDefaultExtra();
aps.cfg.bid.pb.data.pubmatic.extra.run=SERVER
})();(function(){if(!aps.cfg.bid.shouldRunBidder("rubicon")){return
}aps.cfg.bid.pb.data.rubicon={};
switch(aps.cfg.bid.current_domain){case"beaumontenterprise.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036470,"siteId":210778},},"728x90":{"atf":{"accountId":9095,"zoneId":1036470,"siteId":210778},"btf":{"accountId":9095,"zoneId":1036474,"siteId":210778},"stf":{"accountId":9095,"zoneId":1036476,"siteId":210778},},"320x50":{"mad":{"accountId":9095,"zoneId":1036488,"siteId":210780},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036470,1036482),"siteId":aps.desktopOrMobile(210778,210780)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036474,1036484),"siteId":aps.desktopOrMobile(210778,210780)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036476,1036486),"siteId":aps.desktopOrMobile(210778,210780)},},};
break;
case"bigrapidsnews.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1422290,"siteId":284248},},"728x90":{"atf":{"accountId":9095,"zoneId":1422290,"siteId":284248},"btf":{"accountId":9095,"zoneId":1422292,"siteId":284248},"stf":{"accountId":9095,"zoneId":1422294,"siteId":284248},},"320x50":{"mad":{"accountId":9095,"zoneId":1422302,"siteId":284250},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422290,1422296),"siteId":aps.desktopOrMobile(284248,284250)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422292,1422298),"siteId":aps.desktopOrMobile(284248,284250)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422294,1422300),"siteId":aps.desktopOrMobile(284248,284250)},},};
break;
case"chron.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036492,"siteId":210788},},"728x90":{"atf":{"accountId":9095,"zoneId":1036492,"siteId":210788},"btf":{"accountId":9095,"zoneId":1036502,"siteId":210788},"stf":{"accountId":9095,"zoneId":1036504,"siteId":210788},},"320x50":{"mad":{"accountId":9095,"zoneId":1036520,"siteId":210794},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036492,1036512),"siteId":aps.desktopOrMobile(210788,210794)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036502,1036516),"siteId":aps.desktopOrMobile(210788,210794)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036504,1036524),"siteId":aps.desktopOrMobile(210788,210794)},},};
break;
case"connecticutmag.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036528,"siteId":210802},},"728x90":{"atf":{"accountId":9095,"zoneId":1036528,"siteId":210802},"btf":{"accountId":9095,"zoneId":1036530,"siteId":210802},"stf":{"accountId":9095,"zoneId":1036532,"siteId":210802},},"320x50":{"mad":{"accountId":9095,"zoneId":1036548,"siteId":210806},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036528,1036544),"siteId":aps.desktopOrMobile(210802,210806)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036530,1036546),"siteId":aps.desktopOrMobile(210802,210806)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036532,1036552),"siteId":aps.desktopOrMobile(210802,210806)},},};
break;
case"countytimes.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036560,"siteId":210808},},"728x90":{"atf":{"accountId":9095,"zoneId":1036560,"siteId":210808},"btf":{"accountId":9095,"zoneId":1036562,"siteId":210808},"stf":{"accountId":9095,"zoneId":1036564,"siteId":210808},},"320x50":{"mad":{"accountId":9095,"zoneId":1036570,"siteId":210810},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036560,1036566),"siteId":aps.desktopOrMobile(210808,210810)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036562,1036568),"siteId":aps.desktopOrMobile(210808,210810)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036564,1036572),"siteId":aps.desktopOrMobile(210808,210810)},},};
break;
case"ctbulletin.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036574,"siteId":210812},},"728x90":{"atf":{"accountId":9095,"zoneId":1036574,"siteId":210812},"btf":{"accountId":9095,"zoneId":1036576,"siteId":210812},"stf":{"accountId":9095,"zoneId":1036578,"siteId":210812},},"320x50":{"mad":{"accountId":9095,"zoneId":1036584,"siteId":210814},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036574,1036580),"siteId":aps.desktopOrMobile(210812,210814)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036576,1036582),"siteId":aps.desktopOrMobile(210812,210814)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036578,1036586),"siteId":aps.desktopOrMobile(210812,210814)},},};
break;
case"cthousehunter.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036590,"siteId":210818},},"728x90":{"atf":{"accountId":9095,"zoneId":1036590,"siteId":210818},"btf":{"accountId":9095,"zoneId":1036592,"siteId":210818},"stf":{"accountId":9095,"zoneId":1036596,"siteId":210818},},"320x50":{"mad":{"accountId":9095,"zoneId":1036618,"siteId":210826},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036590,1036612),"siteId":aps.desktopOrMobile(210818,210826)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036592,1036614),"siteId":aps.desktopOrMobile(210818,210826)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036596,1036620),"siteId":aps.desktopOrMobile(210818,210826)},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1190206,"siteId":241246},},"728x90":{"atf":{"accountId":9095,"zoneId":1190206,"siteId":241246},"btf":{"accountId":9095,"zoneId":1190208,"siteId":241246},"stf":{"accountId":9095,"zoneId":1190212,"siteId":241246},},"320x50":{"mad":{"accountId":9095,"zoneId":1190214,"siteId":241248},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1190206,1190214),"siteId":aps.desktopOrMobile(241246,241248)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1190208,1190216),"siteId":aps.desktopOrMobile(241246,241248)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1190212,1190218),"siteId":aps.desktopOrMobile(241246,241248)},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036624,"siteId":210828},},"728x90":{"atf":{"accountId":9095,"zoneId":1036624,"siteId":210828},"btf":{"accountId":9095,"zoneId":1036626,"siteId":210828},"stf":{"accountId":9095,"zoneId":1036628,"siteId":210828},},"320x50":{"mad":{"accountId":9095,"zoneId":1036634,"siteId":210832},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036624,1036630),"siteId":aps.desktopOrMobile(210828,210832)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036626,1036632),"siteId":aps.desktopOrMobile(210828,210832)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036628,1036636),"siteId":aps.desktopOrMobile(210828,210832)},},};
break;
case"ctpostchronicle.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036638,"siteId":210834},},"728x90":{"atf":{"accountId":9095,"zoneId":1036638,"siteId":210834},"btf":{"accountId":9095,"zoneId":1036640,"siteId":210834},"stf":{"accountId":9095,"zoneId":1036642,"siteId":210834},},"320x50":{"mad":{"accountId":9095,"zoneId":1036648,"siteId":210836},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036638,1036644),"siteId":aps.desktopOrMobile(210834,210836)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036640,1036646),"siteId":aps.desktopOrMobile(210834,210836)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036642,1036650),"siteId":aps.desktopOrMobile(210834,210836)},},};
break;
case"dariennewsonline.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036652,"siteId":210838},},"728x90":{"atf":{"accountId":9095,"zoneId":1036652,"siteId":210838},"btf":{"accountId":9095,"zoneId":1036654,"siteId":210838},"stf":{"accountId":9095,"zoneId":1036656,"siteId":210838},},"320x50":{"mad":{"accountId":9095,"zoneId":1036662,"siteId":210840},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036652,1036658),"siteId":aps.desktopOrMobile(210838,210840)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036654,1036660),"siteId":aps.desktopOrMobile(210838,210840)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036656,1036664),"siteId":aps.desktopOrMobile(210838,210840)},},};
break;
case"darientimes.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1188332,"siteId":240798},},"728x90":{"atf":{"accountId":9095,"zoneId":1188332,"siteId":240798},"btf":{"accountId":9095,"zoneId":1188326,"siteId":240798},"stf":{"accountId":9095,"zoneId":1188340,"siteId":240798},},"320x50":{"mad":{"accountId":9095,"zoneId":1188394,"siteId":240862},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188332,1188394),"siteId":aps.desktopOrMobile(240798,240862)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188326,1188398),"siteId":aps.desktopOrMobile(240798,240862)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188340,1188406),"siteId":aps.desktopOrMobile(240798,240862)},},};
break;
case"dolphin-news.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036666,"siteId":210842},},"728x90":{"atf":{"accountId":9095,"zoneId":1036666,"siteId":210842},"btf":{"accountId":9095,"zoneId":1036668,"siteId":210842},"stf":{"accountId":9095,"zoneId":1036670,"siteId":210842},},"320x50":{"mad":{"accountId":9095,"zoneId":1036676,"siteId":210844},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036666,1036672),"siteId":aps.desktopOrMobile(210842,210844)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036668,1036674),"siteId":aps.desktopOrMobile(210842,210844)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036670,1036678),"siteId":aps.desktopOrMobile(210842,210844)},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036680,"siteId":210846},},"728x90":{"atf":{"accountId":9095,"zoneId":1036680,"siteId":210846},"btf":{"accountId":9095,"zoneId":1036682,"siteId":210846},"stf":{"accountId":9095,"zoneId":1036686,"siteId":210846},},"320x50":{"mad":{"accountId":9095,"zoneId":1036696,"siteId":210848},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036680,1036690),"siteId":aps.desktopOrMobile(210846,210848)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036682,1036692),"siteId":aps.desktopOrMobile(210846,210848)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036686,1036698),"siteId":aps.desktopOrMobile(210846,210848)},},};
break;
case"fairfieldcitizenonline.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036704,"siteId":210850},},"728x90":{"atf":{"accountId":9095,"zoneId":1036704,"siteId":210850},"btf":{"accountId":9095,"zoneId":1036706,"siteId":210850},"stf":{"accountId":9095,"zoneId":1036708,"siteId":210850},},"320x50":{"mad":{"accountId":9095,"zoneId":1036726,"siteId":210852},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036704,1036722),"siteId":aps.desktopOrMobile(210850,210852)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036706,1036724),"siteId":aps.desktopOrMobile(210850,210852)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036708,1036730),"siteId":aps.desktopOrMobile(210850,210852)},},};
break;
case"foothillstrader.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036734,"siteId":210854},},"728x90":{"atf":{"accountId":9095,"zoneId":1036734,"siteId":210854},"btf":{"accountId":9095,"zoneId":1036736,"siteId":210854},"stf":{"accountId":9095,"zoneId":1036738,"siteId":210854},},"320x50":{"mad":{"accountId":9095,"zoneId":1036744,"siteId":210856},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036734,1036740),"siteId":aps.desktopOrMobile(210854,210856)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036736,1036742),"siteId":aps.desktopOrMobile(210854,210856)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036738,1036746),"siteId":aps.desktopOrMobile(210854,210856)},},};
break;
case"gametimect.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036748,"siteId":210858},},"728x90":{"atf":{"accountId":9095,"zoneId":1036748,"siteId":210858},"btf":{"accountId":9095,"zoneId":1036750,"siteId":210858},"stf":{"accountId":9095,"zoneId":1036752,"siteId":210858},},"320x50":{"mad":{"accountId":9095,"zoneId":1036758,"siteId":210860},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036748,1036754),"siteId":aps.desktopOrMobile(210858,210860)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036750,1036756),"siteId":aps.desktopOrMobile(210858,210860)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036752,1036760),"siteId":aps.desktopOrMobile(210858,210860)},},};
break;
case"greenstate.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036762,"siteId":210866},},"728x90":{"atf":{"accountId":9095,"zoneId":1036762,"siteId":210866},"btf":{"accountId":9095,"zoneId":1036764,"siteId":210866},"stf":{"accountId":9095,"zoneId":1036766,"siteId":210866},},"320x50":{"mad":{"accountId":9095,"zoneId":1036772,"siteId":210868},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036762,1036768),"siteId":aps.desktopOrMobile(210866,210868)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036764,1036770),"siteId":aps.desktopOrMobile(210866,210868)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036766,1036774),"siteId":aps.desktopOrMobile(210866,210868)},},};
break;
case"greenwichtime.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036780,"siteId":210872},},"728x90":{"atf":{"accountId":9095,"zoneId":1036780,"siteId":210872},"btf":{"accountId":9095,"zoneId":1036782,"siteId":210872},"stf":{"accountId":9095,"zoneId":1036784,"siteId":210872},},"320x50":{"mad":{"accountId":9095,"zoneId":1036790,"siteId":210874},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036780,1036786),"siteId":aps.desktopOrMobile(210872,210874)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036782,1036788),"siteId":aps.desktopOrMobile(210872,210874)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036784,1036792),"siteId":aps.desktopOrMobile(210872,210874)},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036794,"siteId":210876},},"728x90":{"atf":{"accountId":9095,"zoneId":1036794,"siteId":210876},"btf":{"accountId":9095,"zoneId":1036796,"siteId":210876},"stf":{"accountId":9095,"zoneId":1036798,"siteId":210876},},"320x50":{"mad":{"accountId":9095,"zoneId":1036804,"siteId":210882},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036794,1036800),"siteId":aps.desktopOrMobile(210876,210882)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036796,1036802),"siteId":aps.desktopOrMobile(210876,210882)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036798,1036806),"siteId":aps.desktopOrMobile(210876,210882)},},};
break;
case"ingearct.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036828,"siteId":210900},},"728x90":{"atf":{"accountId":9095,"zoneId":1036828,"siteId":210900},"btf":{"accountId":9095,"zoneId":1036830,"siteId":210900},"stf":{"accountId":9095,"zoneId":1036832,"siteId":210900},},"320x50":{"mad":{"accountId":9095,"zoneId":1036838,"siteId":210902},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036828,1036834),"siteId":aps.desktopOrMobile(210900,210902)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036830,1036836),"siteId":aps.desktopOrMobile(210900,210902)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036832,1036840),"siteId":aps.desktopOrMobile(210900,210902)},},};
break;
case"lakecountystar.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1422304,"siteId":284252},},"728x90":{"atf":{"accountId":9095,"zoneId":1422304,"siteId":284252},"btf":{"accountId":9095,"zoneId":1422306,"siteId":284252},"stf":{"accountId":9095,"zoneId":1422308,"siteId":284252},},"320x50":{"mad":{"accountId":9095,"zoneId":1422508,"siteId":284254},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422304,1422480),"siteId":aps.desktopOrMobile(284252,284254)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422306,1422498),"siteId":aps.desktopOrMobile(284252,284254)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422308,1422506),"siteId":aps.desktopOrMobile(284252,284254)},},};
break;
case"lmtonline.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036842,"siteId":210904},},"728x90":{"atf":{"accountId":9095,"zoneId":1036842,"siteId":210904},"btf":{"accountId":9095,"zoneId":1036844,"siteId":210904},"stf":{"accountId":9095,"zoneId":1036846,"siteId":210904},},"320x50":{"mad":{"accountId":9095,"zoneId":1036852,"siteId":210906},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036842,1036848),"siteId":aps.desktopOrMobile(210904,210906)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036844,1036850),"siteId":aps.desktopOrMobile(210904,210906)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036846,1036854),"siteId":aps.desktopOrMobile(210904,210906)},},};
break;
case"manisteenews.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1422520,"siteId":284302},},"728x90":{"atf":{"accountId":9095,"zoneId":1422520,"siteId":284302},"btf":{"accountId":9095,"zoneId":1422522,"siteId":284302},"stf":{"accountId":9095,"zoneId":1422524,"siteId":284302},},"320x50":{"mad":{"accountId":9095,"zoneId":1422532,"siteId":284304},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422520,1422528),"siteId":aps.desktopOrMobile(284302,284304)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422522,1422530),"siteId":aps.desktopOrMobile(284302,284304)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422524,1422534),"siteId":aps.desktopOrMobile(284302,284304)},},};
break;
case"michigansthumb.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036856,"siteId":210908},},"728x90":{"atf":{"accountId":9095,"zoneId":1036856,"siteId":210908},"btf":{"accountId":9095,"zoneId":1036858,"siteId":210908},"stf":{"accountId":9095,"zoneId":1036860,"siteId":210908},},"320x50":{"mad":{"accountId":9095,"zoneId":1036868,"siteId":210910},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036856,1036864),"siteId":aps.desktopOrMobile(210908,210910)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036858,1036866),"siteId":aps.desktopOrMobile(210908,210910)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036860,1036870),"siteId":aps.desktopOrMobile(210908,210910)},},};
break;
case"middletownpress.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036872,"siteId":210912},},"728x90":{"atf":{"accountId":9095,"zoneId":1036872,"siteId":210912},"btf":{"accountId":9095,"zoneId":1036874,"siteId":210912},"stf":{"accountId":9095,"zoneId":1036876,"siteId":210912},},"320x50":{"mad":{"accountId":9095,"zoneId":1036920,"siteId":210914},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036872,1036916),"siteId":aps.desktopOrMobile(210912,210914)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036874,1036918),"siteId":aps.desktopOrMobile(210912,210914)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036876,1036922),"siteId":aps.desktopOrMobile(210912,210914)},},};
break;
case"milfordmirror.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1188482,"siteId":240904},},"728x90":{"atf":{"accountId":9095,"zoneId":1188482,"siteId":240904},"btf":{"accountId":9095,"zoneId":1188484,"siteId":240904},"stf":{"accountId":9095,"zoneId":1188486,"siteId":240904},},"320x50":{"mad":{"accountId":9095,"zoneId":1188492,"siteId":240918},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188482,1188492),"siteId":aps.desktopOrMobile(240904,240918)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188484,1188500),"siteId":aps.desktopOrMobile(240904,240918)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188486,1188502),"siteId":aps.desktopOrMobile(240904,240918)},},};
break;
case"mrt.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036924,"siteId":210922},},"728x90":{"atf":{"accountId":9095,"zoneId":1036924,"siteId":210922},"btf":{"accountId":9095,"zoneId":1036926,"siteId":210922},"stf":{"accountId":9095,"zoneId":1036928,"siteId":210922},},"320x50":{"mad":{"accountId":9095,"zoneId":1036934,"siteId":210924},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036924,1036930),"siteId":aps.desktopOrMobile(210922,210924)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036926,1036932),"siteId":aps.desktopOrMobile(210922,210924)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036928,1036936),"siteId":aps.desktopOrMobile(210922,210924)},},};
break;
case"myjournalcourier.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036938,"siteId":210926},},"728x90":{"atf":{"accountId":9095,"zoneId":1036938,"siteId":210926},"btf":{"accountId":9095,"zoneId":1036940,"siteId":210926},"stf":{"accountId":9095,"zoneId":1036942,"siteId":210926},},"320x50":{"mad":{"accountId":9095,"zoneId":1036948,"siteId":210928},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036938,1036944),"siteId":aps.desktopOrMobile(210926,210928)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036940,1036946),"siteId":aps.desktopOrMobile(210926,210928)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036942,1036950),"siteId":aps.desktopOrMobile(210926,210928)},},};
break;
case"myplainview.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036952,"siteId":210930},},"728x90":{"atf":{"accountId":9095,"zoneId":1036952,"siteId":210930},"btf":{"accountId":9095,"zoneId":1036954,"siteId":210930},"stf":{"accountId":9095,"zoneId":1036956,"siteId":210930},},"320x50":{"mad":{"accountId":9095,"zoneId":1036962,"siteId":210932},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036952,1036958),"siteId":aps.desktopOrMobile(210930,210932)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036954,1036960),"siteId":aps.desktopOrMobile(210930,210932)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036956,1036964),"siteId":aps.desktopOrMobile(210930,210932)},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036966,"siteId":210934},},"728x90":{"atf":{"accountId":9095,"zoneId":1036966,"siteId":210934},"btf":{"accountId":9095,"zoneId":1036968,"siteId":210934},"stf":{"accountId":9095,"zoneId":1036970,"siteId":210934},},"320x50":{"mad":{"accountId":9095,"zoneId":1036976,"siteId":210938},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036966,1036972),"siteId":aps.desktopOrMobile(210934,210938)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036968,1036974),"siteId":aps.desktopOrMobile(210934,210938)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036970,1036978),"siteId":aps.desktopOrMobile(210934,210938)},},};
break;
case"ncadvertiser.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1188508,"siteId":240926},},"728x90":{"atf":{"accountId":9095,"zoneId":1188508,"siteId":240926},"btf":{"accountId":9095,"zoneId":1188504,"siteId":240926},"stf":{"accountId":9095,"zoneId":1188506,"siteId":240926},},"320x50":{"mad":{"accountId":9095,"zoneId":1188520,"siteId":240930},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188508,1188520),"siteId":aps.desktopOrMobile(240926,240930)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188504,1188522),"siteId":aps.desktopOrMobile(240926,240930)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188506,1188524),"siteId":aps.desktopOrMobile(240926,240930)},},};
break;
case"newcanaannewsonline.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1036988,"siteId":210942},},"728x90":{"atf":{"accountId":9095,"zoneId":1036988,"siteId":210942},"btf":{"accountId":9095,"zoneId":1036992,"siteId":210942},"stf":{"accountId":9095,"zoneId":1036996,"siteId":210942},},"320x50":{"mad":{"accountId":9095,"zoneId":1037002,"siteId":210946},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036988,1036998),"siteId":aps.desktopOrMobile(210942,210946)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036992,1037000),"siteId":aps.desktopOrMobile(210942,210946)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1036996,1037006),"siteId":aps.desktopOrMobile(210942,210946)},},};
break;
case"newmilfordspectrum.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037022,"siteId":210954},},"728x90":{"atf":{"accountId":9095,"zoneId":1037022,"siteId":210954},"btf":{"accountId":9095,"zoneId":1037024,"siteId":210954},"stf":{"accountId":9095,"zoneId":1037026,"siteId":210954},},"320x50":{"mad":{"accountId":9095,"zoneId":1037032,"siteId":210958},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037022,1037028),"siteId":aps.desktopOrMobile(210954,210958)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037024,1037030),"siteId":aps.desktopOrMobile(210954,210958)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037026,1037034),"siteId":aps.desktopOrMobile(210954,210958)},},};
break;
case"newstimes.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037040,"siteId":210964},},"728x90":{"atf":{"accountId":9095,"zoneId":1037040,"siteId":210964},"btf":{"accountId":9095,"zoneId":1037044,"siteId":210964},"stf":{"accountId":9095,"zoneId":1037046,"siteId":210964},},"320x50":{"mad":{"accountId":9095,"zoneId":1037052,"siteId":210966},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037040,1037048),"siteId":aps.desktopOrMobile(210964,210966)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037044,1037050),"siteId":aps.desktopOrMobile(210964,210966)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037046,1037054),"siteId":aps.desktopOrMobile(210964,210966)},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037056,"siteId":210960},},"728x90":{"atf":{"accountId":9095,"zoneId":1037056,"siteId":210960},"btf":{"accountId":9095,"zoneId":1037058,"siteId":210960},"stf":{"accountId":9095,"zoneId":1037060,"siteId":210960},},"320x50":{"mad":{"accountId":9095,"zoneId":1037066,"siteId":210970},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037056,1037062),"siteId":aps.desktopOrMobile(210960,210970)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037058,1037064),"siteId":aps.desktopOrMobile(210960,210970)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037060,1037068),"siteId":aps.desktopOrMobile(210960,210970)},},};
break;
case"ourmidland.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037070,"siteId":210972},},"728x90":{"atf":{"accountId":9095,"zoneId":1037070,"siteId":210972},"btf":{"accountId":9095,"zoneId":1037072,"siteId":210972},"stf":{"accountId":9095,"zoneId":1037074,"siteId":210972},},"320x50":{"mad":{"accountId":9095,"zoneId":1037080,"siteId":210974},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037070,1037076),"siteId":aps.desktopOrMobile(210972,210974)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037072,1037078),"siteId":aps.desktopOrMobile(210972,210974)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037074,1037082),"siteId":aps.desktopOrMobile(210972,210974)},},};
break;
case"recordpatriot.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1422536,"siteId":284306},},"728x90":{"atf":{"accountId":9095,"zoneId":1422536,"siteId":284306},"btf":{"accountId":9095,"zoneId":1422540,"siteId":284306},"stf":{"accountId":9095,"zoneId":1422542,"siteId":284306},},"320x50":{"mad":{"accountId":9095,"zoneId":1422552,"siteId":284312},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422536,1422544),"siteId":aps.desktopOrMobile(284306,284312)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422540,1422546),"siteId":aps.desktopOrMobile(284306,284312)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422542,1422550),"siteId":aps.desktopOrMobile(284306,284312)},},};
break;
case"registercitizen.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037084,"siteId":210976},},"728x90":{"atf":{"accountId":9095,"zoneId":1037084,"siteId":210976},"btf":{"accountId":9095,"zoneId":1037086,"siteId":210976},"stf":{"accountId":9095,"zoneId":1037088,"siteId":210976},},"320x50":{"mad":{"accountId":9095,"zoneId":1037094,"siteId":210978},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037084,1037090),"siteId":aps.desktopOrMobile(210976,210978)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037086,1037092),"siteId":aps.desktopOrMobile(210976,210978)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037088,1037096),"siteId":aps.desktopOrMobile(210976,210978)},},};
break;
case"seattlepi.com":if(aps.cfg.bid.prefetch.enabled){aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1963214,"siteId":211012},},"728x90":{"atf":{"accountId":9095,"zoneId":1963216,"siteId":211012},"btf":{"accountId":9095,"zoneId":1963220,"siteId":211012},"stf":{"accountId":9095,"zoneId":1963222,"siteId":211012},},"320x50":{"mad":{"accountId":9095,"zoneId":1963230,"siteId":211014},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1963224,1963232),"siteId":aps.desktopOrMobile(211012,211014)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1963226,1963234),"siteId":aps.desktopOrMobile(211012,211014)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1963228,1963236),"siteId":aps.desktopOrMobile(211012,211014)},},}
}else{aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037186,"siteId":211012},},"728x90":{"atf":{"accountId":9095,"zoneId":1037186,"siteId":211012},"btf":{"accountId":9095,"zoneId":1037188,"siteId":211012},"stf":{"accountId":9095,"zoneId":1037190,"siteId":211012},},"320x50":{"mad":{"accountId":9095,"zoneId":1037196,"siteId":211014},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037186,1037192),"siteId":aps.desktopOrMobile(211012,211014)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037188,1037194),"siteId":aps.desktopOrMobile(211012,211014)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037190,1037198),"siteId":aps.desktopOrMobile(211012,211014)},},}
}break;
case"sellitlaredo.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037200,"siteId":211016},},"728x90":{"atf":{"accountId":9095,"zoneId":1037200,"siteId":211016},"btf":{"accountId":9095,"zoneId":1037202,"siteId":211016},"stf":{"accountId":9095,"zoneId":1037204,"siteId":211016},},"320x50":{"mad":{"accountId":9095,"zoneId":1037210,"siteId":211018},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037200,1037206),"siteId":aps.desktopOrMobile(211016,211018)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037202,1037208),"siteId":aps.desktopOrMobile(211016,211018)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037204,1037212),"siteId":aps.desktopOrMobile(211016,211018)},},};
break;
case"sellittexas.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037214,"siteId":211020},},"728x90":{"atf":{"accountId":9095,"zoneId":1037214,"siteId":211020},"btf":{"accountId":9095,"zoneId":1037216,"siteId":211020},"stf":{"accountId":9095,"zoneId":1037218,"siteId":211020},},"320x50":{"mad":{"accountId":9095,"zoneId":1037224,"siteId":211022},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037214,1037220),"siteId":aps.desktopOrMobile(211020,211022)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037216,1037222),"siteId":aps.desktopOrMobile(211020,211022)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037218,1037226),"siteId":aps.desktopOrMobile(211020,211022)},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037228,"siteId":211024},},"728x90":{"atf":{"accountId":9095,"zoneId":1037228,"siteId":211024},"btf":{"accountId":9095,"zoneId":1037230,"siteId":211024},"stf":{"accountId":9095,"zoneId":1037232,"siteId":211024},},"320x50":{"mad":{"accountId":9095,"zoneId":1037238,"siteId":211026},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037228,1037234),"siteId":aps.desktopOrMobile(211024,211026)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037230,1037236),"siteId":aps.desktopOrMobile(211024,211026)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037232,1037240),"siteId":aps.desktopOrMobile(211024,211026)},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037242,"siteId":211028},},"728x90":{"atf":{"accountId":9095,"zoneId":1037242,"siteId":211028},"btf":{"accountId":9095,"zoneId":1037244,"siteId":211028},"stf":{"accountId":9095,"zoneId":1037246,"siteId":211028},},"320x50":{"mad":{"accountId":9095,"zoneId":1037252,"siteId":211030},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037242,1037248),"siteId":aps.desktopOrMobile(211028,211030)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037244,1037250),"siteId":aps.desktopOrMobile(211028,211030)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037246,1037254),"siteId":aps.desktopOrMobile(211028,211030)},},};
break;
case"sheltonherald.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1188542,"siteId":240944},},"728x90":{"atf":{"accountId":9095,"zoneId":1188542,"siteId":240944},"btf":{"accountId":9095,"zoneId":1188540,"siteId":240944},"stf":{"accountId":9095,"zoneId":1188546,"siteId":240944},},"320x50":{"mad":{"accountId":9095,"zoneId":1188552,"siteId":240946},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188542,1188552),"siteId":aps.desktopOrMobile(240944,240946)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188540,1188554),"siteId":aps.desktopOrMobile(240944,240946)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188546,1188556),"siteId":aps.desktopOrMobile(240944,240946)},},};
break;
case"shorelinetimes.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037256,"siteId":211032},},"728x90":{"atf":{"accountId":9095,"zoneId":1037256,"siteId":211032},"btf":{"accountId":9095,"zoneId":1037258,"siteId":211032},"stf":{"accountId":9095,"zoneId":1037260,"siteId":211032},},"320x50":{"mad":{"accountId":9095,"zoneId":1037266,"siteId":211034},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037256,1037262),"siteId":aps.desktopOrMobile(211032,211034)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037258,1037264),"siteId":aps.desktopOrMobile(211032,211034)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037260,1037268),"siteId":aps.desktopOrMobile(211032,211034)},},};
break;
case"southeasttexas.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037270,"siteId":211036},},"728x90":{"atf":{"accountId":9095,"zoneId":1037270,"siteId":211036},"btf":{"accountId":9095,"zoneId":1037272,"siteId":211036},"stf":{"accountId":9095,"zoneId":1037274,"siteId":211036},},"320x50":{"mad":{"accountId":9095,"zoneId":1037280,"siteId":211038},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037270,1037276),"siteId":aps.desktopOrMobile(211036,211038)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037272,1037278),"siteId":aps.desktopOrMobile(211036,211038)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037274,1037282),"siteId":aps.desktopOrMobile(211036,211038)},},};
break;
case"southernctjobs.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037284,"siteId":211040},},"728x90":{"atf":{"accountId":9095,"zoneId":1037284,"siteId":211040},"btf":{"accountId":9095,"zoneId":1037286,"siteId":211040},"stf":{"accountId":9095,"zoneId":1037288,"siteId":211040},},"320x50":{"mad":{"accountId":9095,"zoneId":1037294,"siteId":211042},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037284,1037290),"siteId":aps.desktopOrMobile(211040,211042)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037286,1037292),"siteId":aps.desktopOrMobile(211040,211042)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037288,1037296),"siteId":aps.desktopOrMobile(211040,211042)},},};
break;
case"stamfordadvocate.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037298,"siteId":211044},},"728x90":{"atf":{"accountId":9095,"zoneId":1037298,"siteId":211044},"btf":{"accountId":9095,"zoneId":1037300,"siteId":211044},"stf":{"accountId":9095,"zoneId":1037302,"siteId":211044},},"320x50":{"mad":{"accountId":9095,"zoneId":1037308,"siteId":211046},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037298,1037304),"siteId":aps.desktopOrMobile(211044,211046)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037300,1037306),"siteId":aps.desktopOrMobile(211044,211046)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037302,1037310),"siteId":aps.desktopOrMobile(211044,211046)},},};
break;
case"theheraldreview.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1422556,"siteId":284316},},"728x90":{"atf":{"accountId":9095,"zoneId":1422556,"siteId":284316},"btf":{"accountId":9095,"zoneId":1422558,"siteId":284316},"stf":{"accountId":9095,"zoneId":1422560,"siteId":284316},},"320x50":{"mad":{"accountId":9095,"zoneId":1422570,"siteId":284318},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422556,1422562),"siteId":aps.desktopOrMobile(284316,284318)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422558,1422564),"siteId":aps.desktopOrMobile(284316,284318)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422560,1422566),"siteId":aps.desktopOrMobile(284316,284318)},},};
break;
case"thehomemonthly.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1188558,"siteId":240948},},"728x90":{"atf":{"accountId":9095,"zoneId":1188558,"siteId":240948},"btf":{"accountId":9095,"zoneId":1188560,"siteId":240948},"stf":{"accountId":9095,"zoneId":1188566,"siteId":240948},},"320x50":{"mad":{"accountId":9095,"zoneId":1188572,"siteId":240954},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188558,1188572),"siteId":aps.desktopOrMobile(240948,240954)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188560,1188574),"siteId":aps.desktopOrMobile(240948,240954)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188566,1188576),"siteId":aps.desktopOrMobile(240948,240954)},},};
break;
case"thehour.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037312,"siteId":211048},},"728x90":{"atf":{"accountId":9095,"zoneId":1037312,"siteId":211048},"btf":{"accountId":9095,"zoneId":1037314,"siteId":211048},"stf":{"accountId":9095,"zoneId":1037316,"siteId":211048},},"320x50":{"mad":{"accountId":9095,"zoneId":1037322,"siteId":211050},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037312,1037318),"siteId":aps.desktopOrMobile(211048,211050)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037314,1037320),"siteId":aps.desktopOrMobile(211048,211050)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037316,1037324),"siteId":aps.desktopOrMobile(211048,211050)},},};
break;
case"theintelligencer.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037326,"siteId":211052},},"728x90":{"atf":{"accountId":9095,"zoneId":1037326,"siteId":211052},"btf":{"accountId":9095,"zoneId":1037328,"siteId":211052},"stf":{"accountId":9095,"zoneId":1037330,"siteId":211052},},"320x50":{"mad":{"accountId":9095,"zoneId":1037336,"siteId":211054},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037326,1037332),"siteId":aps.desktopOrMobile(211052,211054)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037328,1037334),"siteId":aps.desktopOrMobile(211052,211054)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037330,1037338),"siteId":aps.desktopOrMobile(211052,211054)},},};
break;
case"theridgefieldpress.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1188580,"siteId":240960},},"728x90":{"atf":{"accountId":9095,"zoneId":1188580,"siteId":240960},"btf":{"accountId":9095,"zoneId":1188582,"siteId":240960},"stf":{"accountId":9095,"zoneId":1188586,"siteId":240960},},"320x50":{"mad":{"accountId":9095,"zoneId":1188640,"siteId":240966},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188580,1188640),"siteId":aps.desktopOrMobile(240960,240966)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188582,1188644),"siteId":aps.desktopOrMobile(240960,240966)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188586,1188646),"siteId":aps.desktopOrMobile(240960,240966)},},};
break;
case"thetelegraph.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037340,"siteId":211056},},"728x90":{"atf":{"accountId":9095,"zoneId":1037340,"siteId":211056},"btf":{"accountId":9095,"zoneId":1037342,"siteId":211056},"stf":{"accountId":9095,"zoneId":1037344,"siteId":211056},},"320x50":{"mad":{"accountId":9095,"zoneId":1037350,"siteId":211058},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037340,1037346),"siteId":aps.desktopOrMobile(211056,211058)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037342,1037348),"siteId":aps.desktopOrMobile(211056,211058)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037344,1037352),"siteId":aps.desktopOrMobile(211056,211058)},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037354,"siteId":211060},},"728x90":{"atf":{"accountId":9095,"zoneId":1037354,"siteId":211060},"btf":{"accountId":9095,"zoneId":1037356,"siteId":211060},"stf":{"accountId":9095,"zoneId":1037358,"siteId":211060},},"320x50":{"mad":{"accountId":9095,"zoneId":1037364,"siteId":211062},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037354,1037360),"siteId":aps.desktopOrMobile(211060,211062)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037356,1037362),"siteId":aps.desktopOrMobile(211060,211062)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037358,1037366),"siteId":aps.desktopOrMobile(211060,211062)},},};
break;
case"trumbulltimes.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1188612,"siteId":240968},},"728x90":{"atf":{"accountId":9095,"zoneId":1188612,"siteId":240968},"btf":{"accountId":9095,"zoneId":1188614,"siteId":240968},"stf":{"accountId":9095,"zoneId":1188616,"siteId":240968},},"320x50":{"mad":{"accountId":9095,"zoneId":1188618,"siteId":240970},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188612,1188618),"siteId":aps.desktopOrMobile(240968,240970)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188614,1188620),"siteId":aps.desktopOrMobile(240968,240970)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188616,1188622),"siteId":aps.desktopOrMobile(240968,240970)},},};
break;
case"westhartfordnews.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1037368,"siteId":211064},},"728x90":{"atf":{"accountId":9095,"zoneId":1037368,"siteId":211064},"btf":{"accountId":9095,"zoneId":1037370,"siteId":211064},"stf":{"accountId":9095,"zoneId":1037372,"siteId":211064},},"320x50":{"mad":{"accountId":9095,"zoneId":1037378,"siteId":211066},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037368,1037374),"siteId":aps.desktopOrMobile(211064,211066)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037370,1037376),"siteId":aps.desktopOrMobile(211064,211066)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1037372,1037380),"siteId":aps.desktopOrMobile(211064,211066)},},};
break;
case"westport-news.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1422574,"siteId":284320},},"728x90":{"atf":{"accountId":9095,"zoneId":1422574,"siteId":284320},"btf":{"accountId":9095,"zoneId":1422576,"siteId":284320},"stf":{"accountId":9095,"zoneId":1422578,"siteId":284320},},"320x50":{"mad":{"accountId":9095,"zoneId":1422586,"siteId":284324},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422574,1422580),"siteId":aps.desktopOrMobile(284320,284324)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422576,1422582),"siteId":aps.desktopOrMobile(284320,284324)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1422578,1422584),"siteId":aps.desktopOrMobile(284320,284324)},},};
break;
case"wiltonbulletin.com":aps.cfg.bid.pb.data.rubicon={"970x250":{"atf":{"accountId":9095,"zoneId":1188626,"siteId":240972},},"728x90":{"atf":{"accountId":9095,"zoneId":1188626,"siteId":240972},"btf":{"accountId":9095,"zoneId":1188628,"siteId":240972},"stf":{"accountId":9095,"zoneId":1188630,"siteId":240972},},"320x50":{"mad":{"accountId":9095,"zoneId":1188632,"siteId":240976},},"300x250":{"atf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188626,1188632),"siteId":aps.desktopOrMobile(240972,240976)},"btf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188628,1188634),"siteId":aps.desktopOrMobile(240972,240976)},"stf":{"accountId":9095,"zoneId":aps.desktopOrMobile(1188630,1188636),"siteId":aps.desktopOrMobile(240972,240976)},},};
break
}aps.cfg.bid.pb.data.rubicon.extra=aps.cfg.bid.setDefaultExtra();
aps.cfg.bid.pb.data.rubicon.extra.run=SERVER_COMPATIBLE
})();(function(){if(!aps.cfg.bid.shouldRunBidder("triplelift")){return
}if(["sfgate.com","timesunion.com"].includes(aps.current_domain)&&aps.cfg.dfp.abtestvar.indexOf("sfgate_article_redesign_052020_V1")>-1){aps.logInfo("TripleLift disabled on "+aps.current_domain+" because to abtest");
return
}aps.cfg.bid.pb.data.triplelift={};
switch(aps.cfg.bid.current_domain){case"chron.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"chron_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"chron_DT_728_HDX_pb"},"btf":{"inventoryCode":"chron_DT_b728_flex_pb"},"stf":{"inventoryCode":"chron_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"chron_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"chron_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.desktopOrMobile("chron_DT_a300_flex_pb","chron_MO_a300_flex_pb")},"btf":{"inventoryCode":aps.desktopOrMobile("chron_DT_b300_flex_pb","chron_MO_b300_flex_pb")},"stf":{"inventoryCode":aps.desktopOrMobile("chron_DT_s300_flex_pb","chron_M_HDX_pb")},},};
break;
case"ctinsider.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"ctinsider_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"ctinsider_DT_a728_pb"},"btf":{"inventoryCode":"ctinsider_DT_b728_pb"},"stf":{"inventoryCode":"ctinsider_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"ctinsider_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"ctinsider_MO_300_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.desktopOrMobile("ctinsider_DT_a300_pb","ctinsider_MO_a300_pb")},"btf":{"inventoryCode":aps.desktopOrMobile("ctinsider_DT_b300_pb","ctinsider_MO_b300_pb")},"stf":{"inventoryCode":aps.desktopOrMobile("ctinsider_DT_s300_pb","ctinsider_MO_s300_pb")},},};
break;
case"ctpost.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"ctpost_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"ctpost_DT_728_HDX_pb"},"btf":{"inventoryCode":"ctpost_DT_728_HDX_pb"},"stf":{"inventoryCode":"ctpost_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"ctpost_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"ctpost_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.desktopOrMobile("ctpost_DT_a300_flex_pb","ctpost_M_HDX_pb")},"btf":{"inventoryCode":aps.desktopOrMobile("ctpost_DT_b300_flex_pb","ctpost_M_HDX_pb")},"stf":{"inventoryCode":aps.desktopOrMobile("ctpost_DT_s300_flex_pb","ctpost_M_HDX_pb")},},};
break;
case"expressnews.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"expressnews_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"expressnews_DT_a728_pb"},"btf":{"inventoryCode":"expressnews_DT_b728_pb"},"stf":{"inventoryCode":"expressnews_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"expressnews_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"expressnews_MO_m320_pb"},},"300x250":{"atf":{"inventoryCode":aps.desktopOrMobile("expressnews_DT_a300_pb","expressnews_MO_a300_pb")},"btf":{"inventoryCode":aps.desktopOrMobile("expressnews_DT_b300_pb","expressnews_MO_b300_pb")},"stf":{"inventoryCode":aps.desktopOrMobile("expressnews_DT_s300_pb","expressnews_MO_s300_pb")},},};
break;
case"houstonchronicle.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"houstonchronicle_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"houstonchronicle_DT_a728_pb"},"btf":{"inventoryCode":"houstonchronicle_DT_b728_pb"},"stf":{"inventoryCode":"houstonchronicle_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"houstonchronicle_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"houstonchronicle_MO_m320_pb"},},"300x250":{"atf":{"inventoryCode":aps.desktopOrMobile("houstonchronicle_DT_a300_pb","houstonchronicle_MO_a300_pb")},"btf":{"inventoryCode":aps.desktopOrMobile("houstonchronicle_DT_b300_pb","houstonchronicle_MO_b300_pb")},"stf":{"inventoryCode":aps.desktopOrMobile("houstonchronicle_DT_s300_pb","houstonchronicle_MO_s300_pb")},},};
break;
case"mysanantonio.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"mysanantonio_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"mysanantonio_DT_728_HDX_pb"},"btf":{"inventoryCode":"mysanantonio_DT_728_HDX_pb"},"stf":{"inventoryCode":"mysanantonio_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"mysanantonio_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"mysanantonio_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.desktopOrMobile("mysanantonio_DT_a300_flex_pb","mysanantonio_M_HDX_pb")},"btf":{"inventoryCode":aps.desktopOrMobile("mysanantonio_DT_b300_flex_pb","mysanantonio_M_HDX_pb")},"stf":{"inventoryCode":aps.desktopOrMobile("mysanantonio_DT_s300_flex_pb","mysanantonio_M_HDX_pb")},},};
break;
case"nhregister.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"nhregister_DT_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"nhregister_DT_HDX_pb"},"btf":{"inventoryCode":"nhregister_DT_HDX_pb"},"stf":{"inventoryCode":"nhregister_DT_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"nhregister_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"nhregister_MO_MAD_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.desktopOrMobile("nhregister_DT_a300_pb","nhregister_MO_a300_pb")},"btf":{"inventoryCode":aps.desktopOrMobile("nhregister_DT_b300_pb","nhregister_MO_b300_pb")},"stf":{"inventoryCode":aps.desktopOrMobile("nhregister_DT_s300_pb","nhregister_MO_s300_pb")},},};
break;
case"seattlepi.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"newseattlepi_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"newseattlepi_DT_728_HDX_pb"},"btf":{"inventoryCode":"newseattlepi_DT_728_HDX_pb"},"stf":{"inventoryCode":"newseattlepi_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"newseattlepi_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"newseattlepi_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.desktopOrMobile("newseattlepi_DT_a300_flex_pb","newseattlepi_M_HDX_pb")},"btf":{"inventoryCode":aps.desktopOrMobile("newseattlepi_DT_b300_flex_pb","newseattlepi_M_HDX_pb")},"stf":{"inventoryCode":aps.desktopOrMobile("newseattlepi_DT_s300_flex_pb","newseattlepi_M_HDX_pb")},},"155x210":{"atf":{"inventoryCode":aps.desktopOrMobile("NTVALT6DCP-Desktop","NTVALT6DCP-Mobile")},},"286x110":{"atf":{"inventoryCode":"NTV1HED"},},"300x300":{"atf":{"inventoryCode":"NTV7ARD"},},"309x280":{"atf":{"inventoryCode":"NTVRELATED"},},"840x300":{"atf":{"inventoryCode":aps.desktopOrMobile("NTVBTFMW-Desktop","NTVBTFMW-Mobile")},},};
break;
case"sfchronicle.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"sfchronicle_DT_a970_pb"},},"728x90":{"atf":{"inventoryCode":"sfchronicle_DT_a728_pb"},"btf":{"inventoryCode":"sfchronicle_DT_b728_pb"},"stf":{"inventoryCode":"sfchronicle_DT_s728_pb"},},"501x501":{"atf":{"inventoryCode":"sfchronicle_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"sfchronicle_MO_m320_pb"},},"300x250":{"atf":{"inventoryCode":aps.desktopOrMobile("sfchronicle_DT_a300_pb","sfchronicle_MO_a300_pb")},"btf":{"inventoryCode":aps.desktopOrMobile("sfchronicle_DT_b300_pb","sfchronicle_MO_b300_pb")},"stf":{"inventoryCode":aps.desktopOrMobile("sfchronicle_DT_s300_pb","sfchronicle_MO_s300_pb")},},};
break;
case"sfgate.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"sfgate_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"sfgate_DT_728_HDX_pb"},"btf":{"inventoryCode":"sfgate_DT_b728_flex_pb"},"stf":{"inventoryCode":"sfgate_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"sfgate_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"sfgate_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.desktopOrMobile("sfgate_DT_a300_flex_pb","sfgate_M_HDX_pb")},"btf":{"inventoryCode":aps.desktopOrMobile("sfgate_DT_b300_flex_pb","sfgate_M_HDX_pb")},"stf":{"inventoryCode":aps.desktopOrMobile("sfgate_DT_s300_flex_pb","sfgate_M_HDX_pb")},},};
break;
case"timesunion.com":aps.cfg.bid.pb.data.triplelift={"970x250":{"atf":{"inventoryCode":"timesunion_DT_970_HDX_pb"},},"728x90":{"atf":{"inventoryCode":"timesunion_DT_728_HDX_pb"},"btf":{"inventoryCode":"timesunion_DT_728_HDX_pb"},"stf":{"inventoryCode":"timesunion_DT_728_HDX_pb"},},"501x501":{"atf":{"inventoryCode":"timesunion_DT_a501_pb"},},"320x50":{"mad":{"inventoryCode":"timesunion_M_HDX_pb"},},"300x250":{"atf":{"inventoryCode":aps.desktopOrMobile("timeunion_DT_a300_flex_pb","timesunion_M_HDX_pb")},"btf":{"inventoryCode":aps.desktopOrMobile("timesunion_DT_b300_flex_pb","timesunion_M_HDX_pb")},"stf":{"inventoryCode":aps.desktopOrMobile("timeunion_DT_s300_flex_pb","timesunion_M_HDX_pb")},},};
break
}aps.cfg.bid.pb.data.triplelift.extra=aps.cfg.bid.setDefaultExtra();
aps.cfg.bid.pb.data.triplelift.extra.run=SERVER_COMPATIBLE
})();(function(){if(!aps.cfg.bid.enabled){return
}if(aps.cfg.bid.excludedDomains.indexOf(aps.current_domain)>-1){aps.logInfo("Domain excluded from bidders (pb): "+aps.current_domain);
return
}if(aps.cfg.disablePersonalisation&&!aps.cfg.bid.enableGDPR){return
}pbjs.que.push(function(){pbjs.onEvent("bidResponse",function(c){var d=aps.cfg.dfp.ads[c.adUnitCode];
var i=new Date().valueOf();
var h=c.size;
if(c.size=="1x1"){if(d.stringSizes.includes("300x250")){h="300x250"
}else{if(d.stringSizes.includes("728x90")){h="728x90"
}else{if(d.stringSizes.includes("320x50")){h="320x50"
}}}}var g=parseFloat(c.cpm).toFixed(2);
while(g.length<5){g="0"+g
}var e={ad:c.adUnitCode,adId:c.adId.slice(-7),bid:c.cpm,bidder:c.bidderCode,expires:(c.ttl*1000)+i-aps.cfg.bid.prefetch.timeoutPadding,index:-1,mediaType:c.mediaType,pageuuid:aps.cfg.pageuuid,position:d.position,received:i,ref:g,selected:false,sent:false,size:h,source:"pb",step:aps.cfg.stp.at,url:document.location.hostname+document.location.pathname,viewability:0,won:false,obj:c};
aps.cfg.bid.bids.push(e);
var f=(((aps.cfg.bid.showType)?"["+c.mediaType+"] ":"")+"*BID* "+aps.fixLen(c.adUnitCode,10)+" pb/"+aps.fixLen(c.bidderCode,11)+" "+aps.fixLen(parseFloat(c.cpm).toFixed(2).toString(),10)+aps.fixLen(c.mediaType,10)+" id:"+e.adId);
aps.setPerformanceMetrics("PrebidFirstBidsReceived",f);
if(c.mediaType=="video"&&c.cpm>0.05){aps.cfg.vid.tagUrl+="&hnp_vid_"+c.bidderCode+"="+c.videoCacheKey+"&hnp_pb_"+c.bidderCode+"="+c.pbCg
}});
pbjs.onEvent("bidderDone",function(c){var d,e;
if(aps.cfg.bid.prefetch.enabled){d=aps.cfg.bid.prefetch.pb.biddersDone;
e=aps.cfg.bid.prefetch.pb.calledBidders
}else{d=aps.cfg.stp[aps.cfg.stp.at].pb.biddersDone;
e=aps.cfg.stp[aps.cfg.stp.at].pb.calledBidders
}if(d.indexOf(c.bidderCode)==-1){d.push(c.bidderCode);
aps.logInfo("Bid   "+aps.fixLen("-",10)+" "+aps.fixLen(c.bidderCode,14)+" done "+d.length+"/"+e.length)
}if(d.length>=(e.length-aps.cfg.bid.lessBidder)){aps.setPerformanceMetrics("PrebidAllBidsReceived","Prebid bids received")
}if(aps.cfg.bid.prefetch.enabled){return
}if(!aps.cfg.stp[aps.cfg.stp.at].dfpCalled){if(aps.cfg.bid.detectAllBids&&(d.length>=(e.length-aps.cfg.bid.lessBidder))&&aps.cfg.stp[aps.cfg.stp.at].a9.bidsReceived){aps.setPerformanceMetrics("PrebidAllBidsReceived","all bids received");
window.setTimeout(function(){googletag.cmd.push(function(){aps.enableGoogleServices(0)
})
},100)
}}});
var b={"buckets":[{"max":3,"increment":0.01},{"max":8,"increment":0.05},{"max":50,"increment":0.5}]};
pbjs.setConfig({cache:{url:"https://web.archive.org/web/20211007045442/https://prebid.adnxs.com/pbc/v1/cache"},cookieSyncDelay:100,enableSendAllBids:false,priceGranularity:b,publisherDomain:document.location.host,sizeConfig:[{"mediaQuery":"(min-width: 0px)","sizesSupported":[[1,1],[155,210],[160,600],[286,110],[320,50],[300,250],[300,300],[300,600],[309,280],[320,100],[325,204],[325,508],[336,280],[400,300],[501,501],[620,366],[640,480],[728,90],[840,300],[970,90],[970,250]],"labels":["any"]}],targetingControls:{auctionKeyMaxChars:4000},useBidCache:true,userSync:{iframeEnabled:true,enabledBidders:aps.cfg.bid.pb.bidders,syncDelay:6000}});
if(aps.cfg.bid.enableGDPR||aps.cfg.doNotSell){pbjs.setConfig({consentManagement:{gdpr:{cmpApi:"iab",timeout:3000,allowAuctionWithoutConsent:false},usp:{cmpApi:"iab",timeout:100,}}})
}pbjs.bidderSettings.standard={adserverTargeting:[{key:"hnp_bidder",val:function(c){return c.bidderCode.toLowerCase()
}},{key:"hnp_adid",val:function(c){return c.adId
}},{key:"hnp_pb",val:function(c){return c.pbCg
}},{key:"hnp_deal",val:function(c){return c.dealId
}},{key:"hnp_uuid",val:function(c){return c.videoCacheKey
}},{key:"hb_format",val:function(c){return c.mediaType
}},{key:"hb_adid",val:function(c){return c.adId
}},],bidCpmAdjustment:function(d,c){var e=d;
if(c.bidderCode=="optimera"){return e
}if(c.mediaType=="native"&&!aps.cfg.bid.pb.data[c.bidderCode].extra.hasNative){aps.logInfo(c.adUnitCode+" native bid rejected");
e=0
}if(aps.cfg.preventNonSecureContent){if(c.mediaType=="banner"){if(c.ad.indexOf("http:")>-1){if(c.ad.indexOf("campaignId: 'http://")==-1){aps.logInfo("bid received from "+c.bidderCode+" with http: reference, bid set to 0");
aps.logInfo(c.ad.substr(c.ad.indexOf("http://")-30,60));
e=0
}}}}if(debugSGA&&c.mediaType=="native"){e+=10
}return e
},suppressEmptyKeys:true,};
pbjs.enableAnalytics({provider:"ga",options:{global:"ga",trackerName:"pb",enableDistribution:true,sampling:0.05,}});
pbjs.setConfig({realTimeData:{auctionDelay:50,dataProviders:aps.cfg.bid.pb.dataProviders}})
});
aps.cfg.bid.pb.insertBids=function(e,o,b){var f=[];
if(o.supportsNative){if(aps.cfg.bid.pb.data[e]["native"]!=null){var c={bidder:e,params:aps.cfg.bid.pb.data[e]["native"]};
f.push(c)
}}if(o.video&&!aps.cfg.bid.pb.data[e].extra.hasVideo){return f
}if(!aps.cfg.bid.isValidBid(o,e,"pb")){return f
}var h,g,d;
if(aps.cfg.bid.prefetch.enabled){h=aps.cfg.bid.prefetch.pb.clientSideBidders;
g=aps.cfg.bid.prefetch.pb.calledBidders;
d=aps.cfg.bid.prefetch.pb.bidCount
}else{h=aps.cfg.stp[aps.cfg.stp.at].pb.clientSideBidders;
g=aps.cfg.stp[aps.cfg.stp.at].pb.calledBidders;
d=aps.cfg.stp[aps.cfg.stp.at].pb.bids
}var j=(o.video)?[[o.width,o.height]]:b.mediaTypes.banner.sizes;
var m=(o.video)?aps.cfg.vid.mode:(o.width+"x"+o.height=="320x50")?"mad":o.position;
if(e=="rubicon"){m=(m=="atf"||m=="mad")?"atf":"btf"
}if(aps.cfg.bid.pb.data[e].extra.isSizeless){if(aps.cfg.bid.pb.data[e].params){var c={bidder:e,params:aps.cfg.bid.pb.data[e].params};
f.push(c)
}}else{for(var k=0;
k<j.length;
k++){var n=j[k][0]+"x"+j[k][1];
if(n=="320x50"){m="mad"
}if(aps.cfg.bid.pb.data[e][n]!=null){if(aps.cfg.bid.pb.data[e].extra.isPositionless){if(aps.cfg.bid.pb.data[e][n]!=null){var c={bidder:e,params:aps.cfg.bid.pb.data[e][n]};
f.push(c)
}}else{if(aps.cfg.bid.pb.data[e][n][m]!=null){var c={bidder:e,params:aps.cfg.bid.pb.data[e][n][m]};
if(o.video){c.params.video={skippable:true};
c.params.video.playback_methods=(aps.cfg.vid.mode=="apv")?["auto_play_sound_off"]:["click_to_play"]
}if(aps.cfg.bid.pb.data[e].extra.splitBySize){c.params.size=j[k];
f.push(c)
}else{if(f.length==0){f.push(c)
}}if(aps.cfg.bid.pb.data[e].extra.singleUse){aps.cfg.bid.pb.data[e][n][m]=null
}}}}}}if(f.length>0){var l=d;
if(g.indexOf(e)==-1){g.push(e)
}if(aps.cfg.bid.pb.s2sBidders.indexOf(e)==-1){if(h.indexOf(e)==-1){h.push(e)
}}l=l||[];
l[e]=l[e]||0;
l[e]++
}return f
};
aps.cfg.bid.pb.configSlot=function(b){aps.cfg.dfp.adUnit="/"+aps.page.networkCode+"/"+aps.page.adUnit;
var d=aps.cfg.dfp.adUnit+"/"+b.code;
var c={bids:[],code:b.code,mediaTypes:{},ortb2Imp:{ext:{data:{adserver:{name:"gam",adslot:aps.cfg.dfp.adUnit},pbadslot:d}}}};
if(b.exclude){return c
}if(!aps.cfg.bid.isValidBid(b,"","pb")){return c
}if(b.batchRequest!="requested"&&!b.video&&!aps.cfg.bid.prefetch.enabled){return c
}if(b.mediaType=="banner"){if(b.sizes.length==0){aps.logSkip(b.code,"no size available to bidders (pb)");
return c
}c.mediaTypes.banner={sizes:b.sizes,w:b.width,h:b.height,}
}if(b.supportsNative){if(aps.cfg.bid.disableNative){return c
}c.mediaTypes["native"]={sendTargetingKeys:false,image:{required:true,aspect_ratios:[{min_width:300,min_height:225,ratio_width:4,ratio_height:3,}]},title:{required:true,len:800},body:{required:true,},cta:{required:false,},clickUrl:{required:true,},sponsoredBy:{required:false,},icon:{required:false,sizes:[240,240],}}
}if(b.video){if(!aps.cfg.vid.enabled&&aps.cfg.stp.at>0){return c
}c.mediaTypes={video:{context:"instream",playerSize:[640,480],mimes:["video/mp4"],protocols:[1,2,3,4,5,6,7,8],playbackmethod:[2]},}
}aps.cfg.bid.pb.bidders.forEach(function(e){var f=aps.cfg.bid.pb.insertBids(e,b,c);
f.forEach(function(g){c.bids.push(g)
})
});
return c
};
aps.cfg.bid.pb.forceS2S=function(){var b=false;
switch(aps.cfg.bid.current_domain){case"bigrapidsnews.com":b=true;
break;
case"darientimes.com":b=true;
break;
case"lakecountystar.com":b=true;
break;
case"manisteenews.com":b=true;
break;
case"milfordmirror.com":b=true;
break;
case"ncadvertiser.com":b=true;
break;
case"recordpatriot.com":b=true;
break;
case"sfgate.com":b=(window.location.host=="sfinsider.sfgate.com")?true:false;
break;
case"sheltonherald.com":b=true;
break;
case"theheraldreview.com":b=true;
break;
case"thehomemonthly.com":b=true;
break;
case"theridgefieldpress.com":b=true;
break;
case"trumbulltimes.com":b=true;
break;
case"westport-news.com":b=true;
break;
case"wiltonbulletin.com":b=true;
break
}if(b){aps.logInfo("forcing prebid S2S")
}return b
};
aps.cfg.bid.pb.setAvailableBidders=function(){aps.cfg.bid.pb.biddersCount=0;
aps.cfg.forceS2S=aps.cfg.bid.pb.forceS2S();
for(bidder in aps.cfg.bid.pb.data){if(aps.cfg.forceS2S){if(!(aps.cfg.bid.pb.data[bidder].extra.run==CLIENT)){aps.cfg.bid.pb.biddersCount++;
aps.cfg.bid.pb.bidders.push(bidder);
aps.cfg.bid.pb.s2sBidders.push(bidder)
}}else{aps.cfg.bid.pb.biddersCount++;
aps.cfg.bid.pb.bidders.push(bidder);
if(aps.cfg.bid.pb.data[bidder].extra.run==SERVER){aps.cfg.bid.pb.s2sBidders.push(bidder)
}}}var c=[];
for(var b in aps.cfg.bid.pb.biddersPriority){var d=aps.cfg.bid.pb.bidders.filter(function(f){return f==aps.cfg.bid.pb.biddersPriority[b]
});
if(d.length>0){c.push(d[0])
}}d=aps.cfg.bid.pb.bidders.filter(function(f){return aps.cfg.bid.pb.biddersPriority.indexOf(f)==-1
});
aps.cfg.bid.pb.bidders=c.concat(d);
if(aps.cfg.doNotSell){aps.cfg.bid.pb.bidders=aps.cfg.bid.pb.bidders.filter(function(e){return aps.cfg.bid.pb.notSupportingGDPR.indexOf(e)==-1
});
aps.logInfo("Bidders removed because not supporting GDPR: "+aps.cfg.bid.pb.notSupportingGDPR)
}aps.logInfo("Bidders order: "+aps.cfg.bid.pb.bidders.join(","))
};
aps.cfg.bid.pb.runBeforeBidRequest=function(n){var m=aps.cfg.bid.maxClientSideBidders;
var j,e,g,d,h;
if(aps.cfg.bid.prefetch.enabled){d=aps.cfg.bid.prefetch.pb.adUnits;
e=aps.cfg.bid.prefetch.pb.bidCount;
g=(n==undefined)?aps.cfg.bid.prefetch.timeout:n;
h=aps.cfg.bid.prefetch.pb.calledBidders;
j=aps.cfg.bid.prefetch.pb.clientSideBidders
}else{d=aps.cfg.bid.pb.adUnits[aps.cfg.stp.at];
e=aps.cfg.stp[aps.cfg.stp.at].pb.bids;
g=aps.cfg.stp[aps.cfg.stp.at].timeout;
h=aps.cfg.stp[aps.cfg.stp.at].pb.calledBidders;
j=aps.cfg.stp[aps.cfg.stp.at].pb.clientSideBidders
}if(j.length>=m){var p=j.length-m;
if(aps.cfg.bid.pb.moveToS2SOnMax.length>0){if(aps.cfg.bid.pb.shuffleMoveToS2SOnMax){aps.cfg.bid.pb.moveToS2SOnMax=aps.cfg.bid.pb.moveToS2SOnMax.map(function(i){return{value:i,sort:Math.random()}
}).sort(function(i,r){return i.sort-r.sort
}).map(function(i){return i.value
});
aps.logInfo("Bidders to be moved to S2S: "+aps.cfg.bid.pb.moveToS2SOnMax)
}for(var k=0;
k<aps.cfg.bid.pb.moveToS2SOnMax.length;
k++){var f=aps.cfg.bid.pb.moveToS2SOnMax[k];
if(j.indexOf(f)>-1&&p>0){aps.logInfo("Bidder "+f+" has been moved to Server Side request to maintain client-side limit of "+m);
j=j.filter(function(i){return i!=f
});
aps.cfg.bid.pb.s2sBidders.push(f);
p--;
if(p==0){break
}}}}if(p>0){var q=j.sort(function(i,r){return(e[i]==e[r])?0:(e[i]<e[r])?-1:1
});
q=q.filter(function(i){return aps.cfg.bid.pb.biddersPriority.indexOf(i)==-1
});
q=q.concat(aps.cfg.bid.pb.biddersPriority.reverse());
for(var k=0;
k<q.length;
k++){var f=q[k];
for(var b in aps.cfg.bid.pb.adUnits[aps.cfg.stp.at]){aps.cfg.bid.pb.adUnits[aps.cfg.stp.at][b].bids=aps.cfg.bid.pb.adUnits[aps.cfg.stp.at][b].bids.filter(function(i){return i.bidder!=f
})
}aps.logInfo("Bidder "+f+" has been removed to maintain client-side limit of "+m);
j=j.filter(function(i){return i!=f
});
h=h.filter(function(i){return i!=f
});
p--;
if(p==0){break
}}}}pbjs.setConfig({s2sConfig:{accountId:"403ca951-6d92-4f2b-816a-0cf8a69217d8",adapter:"prebidServer",bidders:aps.cfg.bid.pb.s2sBidders,cookieSet:true,defaultVendor:"appnexus",enabled:true,timeout:g,endpoint:"https://web.archive.org/web/20211007045442/https://prebid.adnxs.com/pbs/v1/openrtb2/auction",syncEndpoint:"https://web.archive.org/web/20211007045442/https://prebid.adnxs.com/pbs/v1/cookie_sync",cookieSetUrl:"https://web.archive.org/web/20211007045442/https://acdn.adnxs.com/cookieset/cs.js",},bidderTimeout:g,});
aps.cfg.bid.pb.allIds=aps.cfg.bid.pb.allIds||[];
var o=[];
for(var c=0;
c<d.length;
c++){var l=d[c].code;
if(aps.cfg.bid.pb.allIds.indexOf(l)==-1){aps.cfg.bid.pb.allIds.push(l);
o.push(d[c])
}}if(typeof PWT!="undefined"&&typeof PWT.getUserIds=="function"){o.forEach(function(i){i.bids.forEach(function(r){r["userId"]=PWT.getUserIds();
try{r["userIdAsEids"]=owpbjs.getUserIdsAsEids()
}catch(s){}})
})
}return o
};
aps.cfg.bid.pb.setAvailableBidders();
aps.registerEvent(aps.event.on_define_bid_data,function(b){var c=aps.cfg.bid.pb.configSlot(b);
if(c.bids.length>0){aps.cfg.bid.prefetch.pb.adUnits.push(c)
}});
aps.registerEvent(aps.event.on_initial_bid_request,function(){var b=aps.cfg.bid.pb.runBeforeBidRequest();
pbjs.que.push(function(){pbjs.addAdUnits(b);
aps.cfg.bid.prefetch.pb.biddersDone=[];
aps.setPerformanceMetrics("PrebidBidsRequested","Starting prebid timeout: "+aps.cfg.bid.prefetch.timeout+" ms");
setTimeout(function(){var c=aps.cfg.bid.prefetch.pb.calledBidders.filter(function(d){return aps.cfg.bid.prefetch.pb.biddersDone.indexOf(d)==-1
});
if(c.length>0){aps.setPerformanceMetrics(null,"Prebid timeout reached");
if(aps.cfg.gaLog){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice",eventAction:"timeout",eventLabel:c})
}}},bidderTimeout=aps.cfg.bid.prefetch.timeout);
pbjs.requestBids();
if(aps.cfg.gaLog){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice",eventAction:"request",eventLabel:aps.cfg.bid.prefetch.pb.calledBidders})
}})
});
aps.registerEvent(aps.event.on_refresh_bids,function(d){var c,e;
var b=[];
if(aps.cfg.bid.prefetch.allBidsOnRefresh){c=aps.cfg.bid.prefetch.pb.adUnits;
e=aps.cfg.bid.prefetch.timeout
}else{c=aps.cfg.bid.prefetch.pb.adUnits.filter(function(g){return d.indexOf(g.code)>-1
});
e=aps.cfg.bid.prefetch.refreshTimeout
}c.forEach(function(g){b.push(g.code)
});
aps.setPerformanceMetrics("PrebidBidsRequested","calling pb display for refresh: "+b);
var f=aps.cfg.bid.pb.runBeforeBidRequest(e);
pbjs.que.push(function(){pbjs.addAdUnits(f);
aps.cfg.bid.prefetch.pb.biddersDone=[];
aps.setPerformanceMetrics("PrebidBidsRequested","Starting prebid timeout: "+e+" ms");
setTimeout(function(){var g=aps.cfg.bid.prefetch.pb.calledBidders.filter(function(h){return aps.cfg.bid.prefetch.pb.biddersDone.indexOf(h)==-1
});
if(g.length>0){aps.setPerformanceMetrics(null,"Prebid timeout reached");
if(aps.cfg.gaLog){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice",eventAction:"timeout",eventLabel:g})
}}},e);
pbjs.requestBids({adUnits:c});
if(aps.cfg.gaLog){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice",eventAction:"request",eventLabel:aps.cfg.bid.prefetch.pb.calledBidders})
}})
});
aps.registerEvent(aps.event.on_request_new_video_ads,function(b){if(!aps.cfg.bid.enabled){return
}if(!aps.cfg.vid.enabled){return
}aps.logInfo("calling prebid video");
var c=[];
for(var d=0;
d<aps.cfg.bid.pb.videoAdUnits.length;
d++){c.push(aps.cfg.bid.pb.videoAdUnits[d].code)
}window.setTimeout(function(){aps.enableGoogleServices(0)
},aps.cfg.stp[0].nextTimeout);
pbjs.requestBids({adUnitCodes:c})
});
aps.registerEvent(aps.event.on_start_bidding,function(b){aps.cfg.bid.pb.adUnits[aps.cfg.stp.at]=aps.cfg.bid.pb.adUnits[aps.cfg.stp.at]||[];
aps.cfg.bid.pb.adUnitIds[aps.cfg.stp.at]=aps.cfg.bid.pb.adUnitIds[aps.cfg.stp.at]||[];
aps.cfg.stp[aps.cfg.stp.at].dfpCalled=false;
aps.page.ads.forEach(function(d){var e=aps.cfg.bid.pb.configSlot(d);
if(e.bids.length>0){if(d.video){aps.cfg.bid.pb.videoAdUnits.push(e)
}aps.cfg.bid.pb.adUnits[aps.cfg.stp.at].push(e);
aps.cfg.bid.pb.adUnitIds[aps.cfg.stp.at].push(d.code)
}});
if(aps.cfg.bid.pb.adUnits[aps.cfg.stp.at].length>0){var c=aps.cfg.bid.pb.runBeforeBidRequest();
pbjs.que.push(function(){pbjs.addAdUnits(c);
aps.cfg.stp[aps.cfg.stp.at].pb.biddersDone=[];
aps.setPerformanceMetrics("PrebidBidsRequested","Starting prebid timeout: "+aps.cfg.stp[aps.cfg.stp.at].timeout+" ms");
setTimeout(function(){if(aps.cfg.stp[aps.cfg.stp.at].dfpCalled){return
}var e=aps.cfg.stp[aps.cfg.stp.at].pb.calledBidders;
var d=aps.cfg.stp[aps.cfg.stp.at].pb.biddersDone;
var f=e.filter(function(g){return d.indexOf(g)==-1
});
if(f.length>0){aps.setPerformanceMetrics(null,"Prebid timeout reached");
if(aps.cfg.gaLog){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice",eventAction:"timeout",eventLabel:f})
}}aps.enableGoogleServices(0)
},aps.cfg.stp[aps.cfg.stp.at].timeout);
pbjs.requestBids({adUnitCodes:aps.cfg.bid.pb.adUnitIds[aps.cfg.stp.at]});
if(aps.cfg.gaLog){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice",eventAction:"request",eventLabel:calledBidders})
}})
}else{aps.logInfo("No bids to request, sending to DFP");
window.setTimeout(function(){googletag.cmd.push(function(){aps.enableGoogleServices(0)
})
},100)
}});
function a(f){try{var i=JSON.parse(f.data);
if(i.message=="Prebid Native"){aps.logInfo("PREBID MESSAGE ["+f.data+"]");
if(i.action=="impression"){var j;
if(current_device==DESKTOP){j="<style class='Default-D'>\r\nbody {\r\nbackground-color: #fff;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #709699;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 20px;\r\nleft: 4px;\r\npadding-left: 3px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: 4px;\r\ncolor: #FFFFFF;\r\n}\r\n.title {\r\ndisplay: table-cell;\r\nheight: 30px;\r\npadding-bottom: 25px;\r\npadding-left: 15px;\r\npadding-right: 0px;\r\npadding-top: 45px;\r\nvertical-align: middle;\r\n}\r\n.title a {\r\ncolor: #555556;\r\nfont-size: 24px;\r\nfont-weight: 600;\r\nline-height: 1.2;\r\ntext-decoration: none;\r\n}\r\n.body {\r\ndisplay: table;\r\ntext-align: left;\r\npadding-top: 0px;\r\npadding-left: 15px;\r\npadding-bottom: 15px;\r\n}\r\n.body a {\r\nfont-size: 18px;\r\ncolor: #555556;\r\n}\r\n.image {\r\ndisplay: flex;\r\nfloat: left;\r\nheight: 248px;\r\nwidth: 248px;\r\npadding-top: 45px;\r\npadding-bottom: 7px;\r\npadding-left: 0px;\r\n}\r\n.image img {\r\nwidth: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nborder-top: 1px solid #ddd;\r\ndisplay: table;\r\npadding-right: 6px;\r\npadding-top: 6px;\r\ntext-align: center;\r\nwidth: calc(100% - 120px);\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\n}\r\n.logo {\r\nfloat: left;\r\npadding-top: 10px;\r\npadding-bottom: 8px;\r\npadding-left: 15px;\r\nwidth: 100px;\r\n}\r\n.logo img {\r\nheight:auto;\r\nwidth: 75px;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\nfloat: left;\r\npadding-bottom: 15px;\r\npadding-left: 15px;\r\npadding-right: 0px;\r\npadding-top: 0px;\r\n}\r\n.advertiser a {\r\ncolor: #777777;\r\nfont-size: 15px;\r\nfont-weight: 400;\r\ntext-decoration: none;\r\n}\r\n</style>\r\n<div class='image'>\r\n<a class='image-link'><img src='##Image##'></a>\r\n</div>\r\n<div class='attribution'>Ad</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='body'>\r\n<a class='body-link'>##Body##</a>\r\n</div>\r\n<div class='logo'>\r\n<a class='logo-link'><img src='##Icon##'></a>\r\n</div>"
}else{j="<style class='Default-M'>\r\nbody {\r\nbackground-color: #fff;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #709699;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 18px;\r\nleft: 0px;\r\npadding-left: 3px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: 0px;\r\ncolor: #FFFFFF;\r\n}\r\n.title {\r\npadding-bottom: 0px;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\npadding-top: 15px;\r\n}\r\n.title a {\r\ncolor: #555556;\r\nfont-size: 20px;\r\nfont-weight: 600;\r\nline-height: 1.2;\r\ntext-decoration: none;\r\n}\r\n.body {\r\nborder-bottom: 1px solid #ddd;\r\npadding-bottom: 6px;\r\npadding-left: 8px;\r\npadding-right: 8px;\r\n}\r\n.body a {\r\ncolor: #777;\r\nfont-size: 11px;\r\nline-height: 1.4;\r\ntext-decoration: none;\r\n}\r\n.image {\r\ndisplay: flex;\r\nwidth: 100%;\r\npadding-top: 35px;\r\n}\r\n.image img {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nfloat: right;\r\npadding-right: 16px;\r\npadding-top: 10px;\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\ntext-transform: normal;\r\n}\r\n.logo {\r\ndisplay: flex;\r\nfloat: left;\r\nheight: 22px;\r\npadding-bottom: 8px;\r\npadding-left: 8px;\r\npadding-right: 7px;\r\npadding-top: 8px;\r\nwidth: 22px;\r\n}\r\n.logo img {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\nfloat: left;\r\npadding-top: 15px;\r\npadding-bottom: 20px;\r\n}\r\n.advertiser a {\r\ncolor: #767676;\r\nfont-size: 16px;\r\nletter-spacing: .2px;\r\ntext-decoration: none;\r\n}\r\n</style>\r\n<div class='attribution'>Ad</div>\r\n<div class='image'>\r\n<a class='image-link'><img src='##Image##'></a>\r\n</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='advertiser'>\r\n<a class='advertiser-link'>##Attribution##</a>\r\n</div>"
}var c={title:110,sponsoredBy:110,body:230};
switch(i.adslot){case"NTV1HED":if(current_device==DESKTOP){j="<style class='NTV1HED-D'>\r\nbody {\r\nbackground-color: #fff;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #FFF;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 13px;\r\nleft: 4px;\r\npadding-left: 3px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: px;\r\ncolor: #709699;\r\n}\r\n.title {\r\npadding-bottom: 10px;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\npadding-top: 25px;\r\ntext-align: center;\r\n}\r\n.title a {\r\ncolor: #111;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\ntext-decoration: none;\r\n}\r\n.body {\r\nborder-bottom: 1px solid #ddd;\r\npadding-bottom: 6px;\r\npadding-left: 8px;\r\npadding-right: 8px;\r\n}\r\n.body a {\r\ncolor: #777;\r\nfont-size: 11px;\r\nline-height: 1.4;\r\ntext-decoration: none;\r\n}\r\n.image {\r\ndisplay: flex;\r\nwidth: 100%;\r\npadding-bottom: 12px;\r\npadding-top: 30px;\r\n}\r\n.image img {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nfloat: right;\r\npadding-right: 16px;\r\npadding-top: 10px;\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\ntext-transform: normal;\r\n}\r\n.logo {\r\ndisplay: flex;\r\nfloat: left;\r\nheight: 22px;\r\npadding-bottom: 8px;\r\npadding-left: 8px;\r\npadding-right: 7px;\r\npadding-top: 8px;\r\nwidth: 22px;\r\n}\r\n.logo img {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\ntext-align: center;\r\npadding-top: 0px;\r\npadding-bottom: 15px;\r\n}\r\n.advertiser a {\r\ncolor: #767676;\r\nfont-size: 12px;\r\nletter-spacing: .2px;\r\ntext-decoration: none;\r\nfont-weight: 400;\r\n}\r\n</style>\r\n<div class='attribution'>Ad</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='advertiser'>\r\n<a class='advertiser-link'>##Attribution##</a>\r\n</div>"
}else{j="<style class='NTV1HED-M'>\r\nbody {\r\nbackground-color: #fff;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #FFF;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 13px;\r\nleft: 4px;\r\npadding-left: 3px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: 4px;\r\ncolor: #709699;\r\n}\r\n.title {\r\npadding-bottom: 10px;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\npadding-top: 25px;\r\ntext-align: center;\r\n}\r\n.title a {\r\ncolor: #111;\r\nfont-size: 13px;\r\nfont-weight: 600;\r\ntext-decoration: none;\r\n}\r\n.body {\r\nborder-bottom: 1px solid #ddd;\r\npadding-bottom: 6px;\r\npadding-left: 8px;\r\npadding-right: 8px;\r\n}\r\n.body a {\r\ncolor: #777;\r\nfont-size: 11px;\r\nline-height: 1.4;\r\ntext-decoration: none;\r\n}\r\n.image {\r\ndisplay: flex;\r\nwidth: 100%;\r\npadding-bottom: 12px;\r\npadding-top: 30px;\r\n}\r\n.image img {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nfloat: right;\r\npadding-right: 16px;\r\npadding-top: 10px;\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\ntext-transform: normal;\r\n}\r\n.logo {\r\ndisplay: flex;\r\nfloat: left;\r\nheight: 22px;\r\npadding-bottom: 8px;\r\npadding-left: 8px;\r\npadding-right: 7px;\r\npadding-top: 8px;\r\nwidth: 22px;\r\n}\r\n.logo img {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\ntext-align: center;\r\npadding-top: 0px;\r\npadding-bottom: 15px;\r\n}\r\n.advertiser a {\r\ncolor: #767676;\r\nfont-size: 12px;\r\nletter-spacing: .2px;\r\ntext-decoration: none;\r\nfont-weight: 400;\r\n}\r\n</style>\r\n<div class='attribution'>Ad</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='advertiser'>\r\n<a class='advertiser-link'>##Attribution##</a>\r\n</div>"
}break;
case"NTV7ARD":j="<style class='NTV7ARD'>\r\nbody {\r\nbackground-color: #fff;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #709699;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 14px;\r\nleft: 0px;\r\npadding-left: 3px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: 0px;\r\ncolor: #FFF;\r\n}\r\n.title {\r\npadding-bottom: 4px;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\npadding-top: 10px;\r\n}\r\n.title a {\r\ncolor: #555556;\r\nfont-size: 18px;\r\nfont-weight: 600;\r\nline-height: 1.2;\r\ntext-decoration: none;\r\n}\r\n.body {\r\nborder-bottom: 1px solid #ddd;\r\npadding-bottom: 6px;\r\npadding-left: 8px;\r\npadding-right: 8px;\r\n}\r\n.body a {\r\ncolor: #777;\r\nfont-size: 11px;\r\nline-height: 1.4;\r\ntext-decoration: none;\r\n}\r\n.image {\r\ndisplay: flex;\r\nwidth: 100%;\r\npadding-bottom: 0px;\r\npadding-top: 30px;\r\n}\r\n.image img {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nfloat: right;\r\npadding-right: 16px;\r\npadding-top: 10px;\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\ntext-transform: normal;\r\n}\r\n.logo {\r\ndisplay: flex;\r\nfloat: left;\r\nheight: 22px;\r\npadding-bottom: 8px;\r\npadding-left: 8px;\r\npadding-right: 7px;\r\npadding-top: 8px;\r\nwidth: 22px;\r\n}\r\n.logo img {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\nfloat: left;\r\npadding-top: 10px;\r\npadding-bottom: 10px;\r\n}\r\n.advertiser a {\r\ncolor: #767676;\r\nfont-size: 14px;\r\nletter-spacing: .2px;\r\ntext-decoration: none;\r\n}\r\n</style>\r\n<div class='attribution'>Ad</div>\r\n<div class='image'>\r\n<a class='image-link'><img src='##Image##'></a>\r\n</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='advertiser'>\r\n<a class='advertiser-link'>##Attribution##</a>\r\n</div>";
break;
case"NTVALT6DCP":if(current_device==DESKTOP){j="<style class='NTVALT6DCP-D'>\r\nbody {\r\nbackground-color: #fff;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #709699;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 13px;\r\nleft: 4px;\r\npadding-left: 3px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: 0px;\r\ncolor: #FFF;\r\n}\r\n.title {\r\npadding-bottom:7px;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\npadding-top: 7px;\r\n}\r\n.title a {\r\ncolor: #111;\r\nfont-size: 14px;\r\nfont-weight: 600;\r\ntext-decoration: none;\r\n}\r\n.body {\r\nborder-bottom: 1px solid #ddd;\r\npadding-bottom: 6px;\r\npadding-left: 8px;\r\npadding-right: 8px;\r\n}\r\n.body a {\r\ncolor: #777;\r\nfont-size: 11px;\r\nline-height: 1.4;\r\ntext-decoration: none;\r\n}\r\n.image {\r\ndisplay: flex;\r\nwidth: 100%;\r\npadding-top: 20px;\r\n}\r\n.image img {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nfloat: right;\r\npadding-right: 16px;\r\npadding-top: 10px;\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\ntext-transform: normal;\r\n}\r\n.logo {\r\ndisplay: flex;\r\nfloat: left;\r\npadding-bottom: 7px;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\npadding-top: 7px;\r\nwidth: 100%;\r\n}\r\n.logo img {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\nfloat: left;\r\npadding-top: 5px;\r\npadding-bottom: 7px;\r\n}\r\n.advertiser a {\r\ncolor: #767676;\r\nfont-size: 12px;\r\nletter-spacing: .2px;\r\ntext-decoration: none;\r\n}\r\n</style>\r\n<div class='attribution'>Ad</div>\r\n<div class='image'>\r\n<a class='image-link'><img src='##Image##'></a>\r\n</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='advertiser'>\r\n<a class='advertiser-link'>##Attribution##</a>\r\n</div>"
}else{j="<style class='NTVALT6DCP-M'>\r\nbody {\r\nbackground-color: #FFF;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #709699;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 13px;\r\nleft: 0px;\r\npadding-left: 4px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: 4px;\r\ncolor: #FFF;\r\n}\r\n.title {\r\ndisplay: table-cell;\r\nheight: 18px;\r\npadding-bottom: 15px;\r\npadding-left: 0px;\r\npadding-right: 4px;\r\npadding-top: 25px;\r\nvertical-align: middle;\r\n}\r\n.title a {\r\ncolor: #111111;\r\nfont-size: 16px;\r\nfont-weight: 600;\r\nline-height: 1.2;\r\ntext-decoration: none;\r\n}\r\n.body {\r\ndisplay: table;\r\n}\r\n.image {\r\ndisplay: flex;\r\nfloat: right;\r\nwidth: 95px;\r\nheight: 95px;\r\npadding-top: 25px;\r\npadding-bottom: 10px;\r\n}\r\n.image img {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nborder-top: 1px solid #ddd;\r\ndisplay: table;\r\npadding-right: 6px;\r\npadding-top: 6px;\r\ntext-align: center;\r\nwidth: calc(100% - 120px);\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\n}\r\n.logo {\r\nfloat: left;\r\npadding-bottom: 8px;\r\npadding-left: 8px;\r\nwidth: 22px;\r\n}\r\n.logo img {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\nfloat: left;\r\npadding-bottom: 0px;\r\npadding-left: 0px;\r\npadding-right: 8px;\r\npadding-top: 0px;\r\npadding-bottom: 7px;\r\n}\r\n.advertiser a {\r\ncolor: #767676;\r\nfont-size: 12px;\r\nfont-weight: 400;\r\ntext-decoration: none;\r\n}\r\n</style>\r\n<div class='attribution'>Ad</div>\r\n<div class='image'>\r\n<a class='image-link'><img src='##Image##'></a>\r\n</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='advertiser'>\r\n<a class='advertiser-link'>##Attribution##</a>\r\n</div>"
}break;
case"NTVBTFMW":if(current_device==DESKTOP){j="<style class='NTVBTFMW-D'>\r\nbody {\r\nbackground-color: #fff;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #709699;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 20px;\r\nleft: 4px;\r\npadding-left: 3px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: 4px;\r\ncolor: #FFFFFF;\r\n}\r\n.title {\r\ndisplay: table-cell;\r\nheight: 30px;\r\npadding-bottom: 25px;\r\npadding-left: 15px;\r\npadding-right: 0px;\r\npadding-top: 45px;\r\nvertical-align: middle;\r\n}\r\n.title a {\r\ncolor: #555556;\r\nfont-size: 24px;\r\nfont-weight: 600;\r\nline-height: 1.2;\r\ntext-decoration: none;\r\n}\r\n.body {\r\ndisplay: table;\r\ntext-align: left;\r\npadding-top: 0px;\r\npadding-left: 15px;\r\npadding-bottom: 15px;\r\n}\r\n.body a {\r\nfont-size: 18px;\r\ncolor: #555556;\r\n}\r\n.image {\r\ndisplay: flex;\r\nfloat: left;\r\nheight: 248px;\r\nwidth: 248px;\r\npadding-top: 45px;\r\npadding-bottom: 7px;\r\npadding-left: 0px;\r\n}\r\n.image img {\r\nwidth: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nborder-top: 1px solid #ddd;\r\ndisplay: table;\r\npadding-right: 6px;\r\npadding-top: 6px;\r\ntext-align: center;\r\nwidth: calc(100% - 120px);\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\n}\r\n.logo {\r\nfloat: left;\r\npadding-top: 10px;\r\npadding-bottom: 8px;\r\npadding-left: 15px;\r\nwidth: 100px;\r\n}\r\n.logo img {\r\nheight:auto;\r\nwidth: 75px;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\nfloat: left;\r\npadding-bottom: 15px;\r\npadding-left: 15px;\r\npadding-right: 0px;\r\npadding-top: 0px;\r\n}\r\n.advertiser a {\r\ncolor: #777777;\r\nfont-size: 15px;\r\nfont-weight: 400;\r\ntext-decoration: none;\r\n}\r\n</style>\r\n<div class='image'>\r\n<a class='image-link'><img src='##Image##'></a>\r\n</div>\r\n<div class='attribution'>Ad</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='body'>\r\n<a class='body-link'>##Body##</a>\r\n</div>\r\n<div class='logo'>\r\n<a class='logo-link'><img src='##Icon##'></a>\r\n</div>"
}else{j="<style class='NTVBTFMW-M'>\r\nbody {\r\nbackground-color: #fff;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #709699;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 18px;\r\nleft: 0px;\r\npadding-left: 3px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: 0px;\r\ncolor: #FFFFFF;\r\n}\r\n.title {\r\npadding-bottom: 0px;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\npadding-top: 15px;\r\n}\r\n.title a {\r\ncolor: #555556;\r\nfont-size: 20px;\r\nfont-weight: 600;\r\nline-height: 1.2;\r\ntext-decoration: none;\r\n}\r\n.body {\r\nborder-bottom: 1px solid #ddd;\r\npadding-bottom: 6px;\r\npadding-left: 8px;\r\npadding-right: 8px;\r\n}\r\n.body a {\r\ncolor: #777;\r\nfont-size: 11px;\r\nline-height: 1.4;\r\ntext-decoration: none;\r\n}\r\n.image {\r\ndisplay: flex;\r\nwidth: 100%;\r\npadding-top: 35px;\r\n}\r\n.image img {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nfloat: right;\r\npadding-right: 16px;\r\npadding-top: 10px;\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\ntext-transform: normal;\r\n}\r\n.logo {\r\ndisplay: flex;\r\nfloat: left;\r\nheight: 22px;\r\npadding-bottom: 8px;\r\npadding-left: 8px;\r\npadding-right: 7px;\r\npadding-top: 8px;\r\nwidth: 22px;\r\n}\r\n.logo img {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\nfloat: left;\r\npadding-top: 15px;\r\npadding-bottom: 20px;\r\n}\r\n.advertiser a {\r\ncolor: #767676;\r\nfont-size: 16px;\r\nletter-spacing: .2px;\r\ntext-decoration: none;\r\n}\r\n</style>\r\n<div class='attribution'>Ad</div>\r\n<div class='image'>\r\n<a class='image-link'><img src='##Image##'></a>\r\n</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='advertiser'>\r\n<a class='advertiser-link'>##Attribution##</a>\r\n</div>"
}break;
case"NTVBTFRR":if(current_device==DESKTOP){j="<style class='NTVBTFRR-D'>\r\nbody {\r\nbackground-color: #fff;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #709699;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 14px;\r\nleft: 0px;\r\npadding-left: 3px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: 4px;\r\ncolor: #FFF;\r\n}\r\n.title {\r\npadding-bottom: 10px;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\npadding-top: 10px;\r\n}\r\n.title a {\r\ncolor: #555556;\r\nfont-size: 18px;\r\nfont-weight: 600;\r\nline-height: 1.2;\r\ntext-decoration: none;\r\n}\r\n.body {\r\nborder-bottom: 1px solid #ddd;\r\npadding-bottom: 6px;\r\npadding-left: 8px;\r\npadding-right: 8px;\r\n}\r\n.body a {\r\ncolor: #777;\r\nfont-size: 11px;\r\nline-height: 1.4;\r\ntext-decoration: none;\r\n}\r\n.image {\r\ndisplay: flex;\r\nwidth: 100%;\r\npadding-top: 30px;\r\n}\r\n.image img {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nfloat: right;\r\npadding-right: 16px;\r\npadding-top: 10px;\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\ntext-transform: normal;\r\n}\r\n.logo {\r\ndisplay: flex;\r\nfloat: left;\r\npadding-bottom: 7px;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\npadding-top: 7px;\r\nwidth: 100%;\r\n}\r\n.logo img {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\nfloat: left;\r\npadding-top: 0px;\r\npadding-bottom: 12px;\r\n}\r\n.advertiser a {\r\ncolor: #767676;\r\nfont-size: 14px;\r\nletter-spacing: .2px;\r\ntext-decoration: none;\r\n}\r\n</style>\r\n<div class='attribution'>Ad</div>\r\n<div class='image'>\r\n<a class='image-link'><img src='##Image##'></a>\r\n</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='advertiser'>\r\n<a class='advertiser-link'>##Attribution##</a>\r\n</div>"
}else{j=="<style class='NTVBTFRR-M'>\r\nbody {\r\nbackground-color: #fff;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #709699;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 14px;\r\nleft: 0px;\r\npadding-left: 3px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: 0px;\r\ncolor: #FFFFFF;\r\n}\r\n.title {\r\npadding-bottom: 10px;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\npadding-top: 10px;\r\n}\r\n.title a {\r\ncolor: #111111;\r\nfont-size: 18px;\r\nfont-weight: 600;\r\nline-height: 1.2;\r\ntext-decoration: none;\r\n}\r\n.body {\r\nborder-bottom: 1px solid #ddd;\r\npadding-bottom: 6px;\r\npadding-left: 8px;\r\npadding-right: 8px;\r\n}\r\n.body a {\r\ncolor: #777;\r\nfont-size: 11px;\r\nline-height: 1.4;\r\ntext-decoration: none;\r\n}\r\n.image {\r\ndisplay: flex;\r\nwidth: 100%;\r\npadding-top: 30px;\r\n}\r\n.image img {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nfloat: right;\r\npadding-right: 16px;\r\npadding-top: 10px;\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\ntext-transform: normal;\r\n}\r\n.logo {\r\ndisplay: flex;\r\nfloat: left;\r\nheight: 22px;\r\npadding-bottom: 8px;\r\npadding-left: 8px;\r\npadding-right: 7px;\r\npadding-top: 8px;\r\nwidth: 22px;\r\n}\r\n.logo img {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\nfloat: left;\r\npadding-top: 0px;\r\npadding-bottom: 12px;\r\n}\r\n.advertiser a {\r\ncolor: #767676;\r\nfont-size: 14px;\r\nletter-spacing: .2px;\r\ntext-decoration: none;\r\n}\r\n</style>\r\n<div class='attribution'>Ad</div>\r\n<div class='image'>\r\n<a class='image-link'><img src='##Image##'></a>\r\n</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='advertiser'>\r\n<a class='advertiser-link'>##Attribution##</a>\r\n</div>"
}break;
case"NTVRELATED":j="<style class='NTVRELATED'>\r\nbody {\r\nbackground-color: #fff;\r\nfont-family: 'Source Sans Pro' , sans-serif;\r\nfont-size: 12px;\r\n}\r\n.attribution {\r\nbackground-color: #709699;\r\nborder-radius: 2px;\r\nbox-shadow: 0px 1px 2px rgba(0,0,0,.5);\r\nfont-size: 14px;\r\nleft: px;\r\npadding-left: 3px;\r\npadding-right: 3px;\r\nposition: absolute;\r\ntop: 0px;\r\ncolor: #FFF;\r\n}\r\n.title {\r\npadding-bottom: 10px;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\npadding-top: 10px;\r\n}\r\n.title a {\r\ncolor: #555556;\r\nfont-size: 20px;\r\nfont-weight: 600;\r\nline-height: 1.2;\r\ntext-decoration: none;\r\n}\r\n.body {\r\nborder-bottom: 1px solid #ddd;\r\npadding-bottom: 6px;\r\npadding-left: 8px;\r\npadding-right: 8px;\r\n}\r\n.body a {\r\ncolor: #777;\r\nfont-size: 11px;\r\nline-height: 1.4;\r\ntext-decoration: none;\r\n}\r\n.image {\r\ndisplay: flex;\r\nwidth: 100%;\r\npadding-bottom: 0px;\r\npadding-top: 30px;\r\n}\r\n.image img {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.image .image-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.call-to-action {\r\nfloat: right;\r\npadding-right: 16px;\r\npadding-top: 10px;\r\n}\r\n.call-to-action a {\r\ncolor: #4285F4;\r\nfont-size: 14px;\r\nfont-weight: 500;\r\ntext-decoration: none;\r\ntext-transform: normal;\r\n}\r\n.logo {\r\ndisplay: flex;\r\nfloat: left;\r\nheight: 22px;\r\npadding-bottom: 8px;\r\npadding-left: 8px;\r\npadding-right: 7px;\r\npadding-top: 8px;\r\nwidth: 22px;\r\n}\r\n.logo img {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.logo .logo-link {\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.advertiser {\r\nfloat: left;\r\npadding-top: 0px;\r\npadding-bottom: 15px;\r\n}\r\n.advertiser a {\r\ncolor: #767676;\r\nfont-size: 14px;\r\nletter-spacing: .2px;\r\ntext-decoration: none;\r\n}\r\n</style>\r\n<div class='attribution'>Ad</div>\r\n<div class='image'>\r\n<a class='image-link'><img src='##Image##'></a>\r\n</div>\r\n<div class='title'>\r\n<a class='title-link'>##Headline##</a>\r\n</div>\r\n<div class='advertiser'>\r\n<a class='advertiser-link'>##Attribution##</a>\r\n</div>";
break
}var k=pbjs.getAllWinningBids().filter(function(e){return e.adId==i.adId
});
var b={};
if(k.length>0){b=k[0]
}var h={message:"Prebid Native",action:"info",adId:i.adId,divId:i.adslot,cfg:c,template:j,obj:b,debug:debugSGA,};
var g=document.querySelectorAll("#"+i.adslot+" div iframe")[0]||null;
if(g){g.width="100%";
g.height="100%"
}f.source.postMessage(JSON.stringify(h),"*")
}}else{if(i.message=="Chrome HAI"){console.log("Chrome HAI")
}}}catch(d){}}window.addEventListener("message",a,false)
})();(function(){googletag.cmd.push(function(){if(HDN&&HDN.dataLayer&&HDN.dataLayer.presentation){var a=(HDN.dataLayer.presentation.hasSlideshow)?"GalleryY":"GalleryN";
aps.gcontext.pubads().setTargeting("has",a)
}})
})();(function(){try{if(HDN.dataLayer.content.objectType=="post"||HDN.dataLayer.content.objectType=="blog post"){if(HDN.dataLayer.content.keywords.length>0){aps.gcontext.pubads().setTargeting("kw",HDN.dataLayer.content.keywords.join(","));
aps.logInfo("page kvp: kw="+HDN.dataLayer.content.keywords)
}}}catch(a){}})();(function(){var a=window.XMLHttpRequest.prototype.open;
function b(g,l,c,n,i){if(l.indexOf("https://web.archive.org/web/20211007045442/https://securepubads.g.doubleclick.net/gampad/ads?gdfp_req")==0&&l.indexOf("trunc=1")>-1){aps.logInfo("google request truncated "+l);
arguments[1]=arguments[1].replace("&trunc=1","").replace("cust_params=","cust_params=trunc%3D1%26");
if(aps.cfg.gaLog){ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice",eventAction:"trunc",eventLabel:aps.cfg.permutive.ids.length})
}}var k="&url=richienews%3A%2F%2F%2F";
if(l.indexOf("https://web.archive.org/web/20211007045442/https://securepubads.g.doubleclick.net/gampad/ads?gdfp_req")==0&&l.indexOf(k)>-1){try{var m=arguments[1].indexOf(k);
var f=arguments[1].indexOf("&",m+1);
var j=arguments[1].substring(m,f);
var h="&url="+encodeURIComponent("https://"+JuicePageUrl.replace("staging.","").replace("richie","www"));
aps.logInfo("google request updated: "+j+" was replaced");
aps.logInfo("        by "+h);
arguments[1]=arguments[1].replace(j,h)
}catch(d){}}return a.apply(this,arguments)
}window.XMLHttpRequest.prototype.open=b
})();(function(){aps.registerEvent(aps.event.on_before_enable_google_services,function(d){aps.cfg.dfp.eedate="";
try{var f=top.document.querySelectorAll(".recent")[0].innerText;
var c=/(.* 202.?)/g;
var b=f.match(c)[0].substring(4).replace(",","").split(" ");
if(b[1].length==1){b[1]="0"+b[1]
}aps.cfg.dfp.eedate=b.join("")
}catch(a){}if(aps.cfg.dfp.eedate!=""){googletag.cmd.push(function(){aps.logInfo("page kvp: eedate="+aps.cfg.dfp.eedate+" ["+d+"]");
aps.gcontext.pubads().setTargeting("eedate",aps.cfg.dfp.eedate);
aps.cfg.dfp.eedate=aps.cfg.dfp.eedate
})
}})
})();(function(){aps.waitForDefinedTags(function(){for(var a=0;
a<definedTags.kvps.length;
a++){var b=definedTags.kvps[a];
if(b.key=="custom"&&b.value=="voter_guide"){aps.cfg.bid.enabled=false;
aps.cfg.bid.a9.enabled=false;
aps.logInfo("Bidders disabled because of custom key voter_guide")
}}})
})();(function(){window.treg=window.treg||{};
window.treg.cmd=window.treg.cmd||[];
aps.cfg.tregReady=false;
window.treg.cmd.push(function(){window.treg.realm.events.register("realm.Oidc.refreshLogicComplete",function(a){if(!aps.cfg.tregReady){aps.logInfo("Treg ready")
}aps.cfg.tregReady=true
})
})
})();(function(){if(document.location.pathname.toLowerCase().indexOf("were-you-seen")>-1){aps.gcontext.pubads().setTargeting("type","seen");
aps.logInfo("page kvp: type: seen")
}})();(function(){aps.registerEvent(aps.event.on_before_enable_google_services,function(b){var a=(document.visibilityState=="visible")?"active_tab":"passive_tab";
aps.addPageKvp("custom",a);
aps.logInfo("Tab is "+a)
})
})();(function(){aps.registerEvent(aps.event.on_before_enable_google_services,function(c){var b=aps.page_kvps.filter(function(d){return d.key=="is_premium"
});
if(b.length==0){var a="false";
if(typeof HDN.dataLayer.paywall!=="undefined"&&typeof HDN.dataLayer.paywall.premiumStatus!=="undefined"&&HDN.dataLayer.paywall.premiumStatus==="isPremium"){a="true"
}aps.addPageKvp("is_premium",a)
}})
})();(function(){if(document.location.href.indexOf("testgeoedge")==-1){return
}window.grumi={key:"eaabd999-6a21-4322-bed0-b53339579ef4",onHeavyAdBlock:function(a){console.log("Geoedge HAI event");
ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"heavy_ad_blocked",eventAction:document.location.href,eventLabel:a.metadata.bidder||a.metadata.advertiserId});
console.log(a);
hearstRefreshAds(a.elementId);
aps.logInfo("Relaoding "+a.elementId+" because of heavy ad intervention")
}};
aps.logInfo("Loading Geoedge HAI");
(function(f,g,h,i,j){i=f.createElement(g),j=f.getElementsByTagName(g)[0];
i.async=0;
i.src=h;
j.parentNode.insertBefore(i,j)
})(document,"script","https://web.archive.org/web/20211007045442/https://rumcdn.geoedge.be/ham.js")
})();(function(){aps.registerEvent(aps.event.on_dom_loaded,function(a){var b=aps.getQueryParameterByName("juiceconsole");
if(b!=null){setTimeout(function(){var c=document.createElement("script");
c.src="//web.archive.org/web/20211007045442/https://mis.hearstnp.com/juice/Bookmarklets/debug.js"+"?bustcache="+new Date().getTime();
document.body.appendChild(c)
},parseInt(b,10))
}var b=aps.getQueryParameterByName("hnp-debug");
if(b!=null){setTimeout(function(){var c=document.createElement("script");
c.src="//web.archive.org/web/20211007045442/https://mis.hearstnp.com/juice/Bookmarklets/hnp-debug.js"+"?bustcache="+new Date().getTime();
document.body.appendChild(c)
},parseInt(b,10))
}})
})();(function(){aps.registerEvent(aps.event.on_before_enable_google_services,function(c){var a=aps.page_kvps.filter(function(d){return d.key=="custom"
});
if(a.length==0){return
}var b=googletag.pubads().getSlots();
b.forEach(function(e){var d=e.getSlotElementId();
if(c.includes(d)){var f=e.getTargetingMap();
if(f.custom){e.setTargeting("custom",f.custom.concat(a[0].value));
aps.logInfo("slot "+d+" custom kvp updated to ["+f.custom.concat(a[0].value)+"]")
}}})
})
})();(function(){aps.setPerformanceMetrics("JuiceScriptDoneLoading","end of juice script loading");
try{aps.waitForDefinedTags(function(){aps._initAdDefinitionByCode();
defineTags(definedTags)
})
}catch(a){console.log("*** "+a);
ga("pb.send",{nonInteraction:true,hitType:"event",eventCategory:"juice_error",eventAction:a,eventLabel:href})
}})();