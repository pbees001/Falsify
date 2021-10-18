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



if (typeof _tb_dis === 'undefined' || _tb_dis === null) {
    var _tb_dis = false;
}
if (!_tb_dis) {
    var pm_ppy = "hearstlocalnews-sfchronicle";

    var _pmep = '//web.archive.org/web/20211007044658/https://widget.perfectmarket.com/';
    var _pmep_geo = '//web.archive.org/web/20211007044658/https://geo.perfectmarket.com/';
    if (document.URL.indexOf('https://') > -1) {
        _pmep = _pmep.replace(/88\//gi, '90/');
        _pmep_geo = _pmep_geo.replace(/88\//gi, '90/');
    }
    var _pmpmk = pm_ppy + '/pmk-202003261.3.js';
    var _pmasync = true;
    var _pmoptimization = true;
    var _pmoptimizationmanipulation = true;
    var _pmhp = false;
    var _pmsb = false;

    function _pmloadfile(fileName) {

        if (_pmasync) {
            var js, elements = document.getElementsByTagName("head")[0];
            js = document.createElement("script");
            js.setAttribute("type", "text/javascript");
            js.setAttribute("src", fileName);
            js.setAttribute('async','');
            elements.appendChild(js);
        } else {
            document.writeln('<script src=' + fileName + '></script>');
        }
    }

    var pmk, pmglb, pmfa, pmad, pmdebug_c;
    pmglb = pmglb || null;
    pmfa = pmfa || null;
    pmad = pmad || null;
    pmdebug_c = pmdebug_c || null;
    pmk = pmk || null;
    var _pmenv = _tb_getUrlParameter('pmenv');
    //pm async
    var _pma = _tb_getUrlParameter('_pma');
    if (_pma == true) {
        _pmasync = true;
    }

    if (_pmenv && _pmenv == 'sandbox' && !_pmsb) {

        _pmep = '//web.archive.org/web/20211007044658/https://widget.sandbox.perfectmarket.com/';
        _pmep_geo = '//web.archive.org/web/20211007044658/https://geo.sandbox.perfectmarket.com/';
        var _tb_d = new Date();
        var _tb_rand = _tb_d.getTime();
        _pmpmk = pm_ppy + "/load.js?" + _tb_rand;
    }

    (function () {
        var sc = 'script', doc = document;
        _pmloadfile(_pmep + _pmpmk);
    })();
    function pmws_request_done() {
        var sc = "script", doc = document;
        if (doc.all && !window.opera) {
            doc.write('<' + sc + ' type="text/javascript" id="pm_contentloadtag" defer="defer" src="javascript:void(0)"><\/' + sc + '>');
            var pm_contentloadtag = doc.getElementById("pm_contentloadtag");
            if (pm_contentloadtag)pm_contentloadtag.onreadystatechange = function () {
                if (this.readyState == "complete") return;
            }
        }
        _pmloadfile(_pmep + _pmpmk);
    }


    function _tb_getUrlParameter(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }


     /** Generated CJS **/  var _pm_ecd = {
        'sx': '//web.archive.org/web/20211007044658/https://meta[@property="article:section"]/@content',
        'at' :'//web.archive.org/web/20211007044658/https://div[contains(@class,"author")]//span[contains(@class,"byline")]'
         };

var _pm_sud = {};

var _tb_vautop=false;





/** Generated CJS end **/ 
}

}
/*
     FILE ARCHIVED ON 04:46:58 Oct 07, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:36:18 Oct 17, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 371.171
  exclusion.robots: 0.184
  exclusion.robots.policy: 0.17
  RedisCDXSource: 1.707
  esindex: 0.012
  LoadShardBlock: 71.39 (3)
  PetaboxLoader3.datanode: 43.294 (4)
  CDXLines.iter: 44.122 (3)
  PetaboxLoader3.resolve: 52.237 (2)
  load_resource: 34.315
*/