



/* ControlTag Loader for InvestingChannel, Inc 9427dd0d-835c-471c-a5db-ab01ae8a681c */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.42.4","schema_version":3},"confid":"womptv2nm","context_terms":[],"publisher":{"name":"InvestingChannel, Inc","active":true,"uuid":"9427dd0d-835c-471c-a5db-ab01ae8a681c","version_bucket":"stable","id":4174},"params":{"first_party_dmp_managed":true,"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":true,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":true,"optout_button_id":"kx-optout-button","dfp_premium":true,"control_tag_namespace":"investingchannelinc","support_content_security_policy":false},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/9427dd0d-835c-471c-a5db-ab01ae8a681c","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/9427dd0d-835c-471c-a5db-ab01ae8a681c","consent_set":"https://consumer.krxd.net/consent/set/9427dd0d-835c-471c-a5db-ab01ae8a681c","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/9427dd0d-835c-471c-a5db-ab01ae8a681c","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"Freestar","cap":255,"id":1693574,"organization_id":4174,"uid":"womptv2nm"},"tags":[{"id":39860,"name":"Krux Standard DTC","content":"<script>\n(function(){\n\tKrux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n\tKrux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n\tKrux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n\tKrux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n\n\tKrux('scrape',{'page_attr_domain':{url_domain: '4'}});\n\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":47346,"name":"UTM Params","content":"<script>\n(function(){\n\n\tvar params = Krux('require:util').urlParams();\n\t\n\tKrux ('set', { \n\t'page_attr_utm_source': params.utm_source,\n\t'page_attr_utm_medium': params.utm_medium,\n\t'page_attr_utm_campaign': params.utm_campaign,\n\t'page_attr_utm_content': params.utm_content,\n\t'page_attr_utm_term': params.utm_term \n\t});\n\t\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\r\n(function() {\r\n\r\nvar kuid = Krux('get', 'user');\r\n  if(kuid){\r\n  // original google user match tag. will be deprecated june 1, 2020\r\n  new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\r\n\r\n  // new google user match where they host the match table. The KUID needs to be base64 encoded, but the ids sent will be regular kuids\r\n  var baseEncodedKuid = btoa(kuid).replace(/=$/, '');\r\n  new Image().src = 'https://cm.g.doubleclick.net/pixel?google_nid=krux_digital&google_cm&google_hm='+baseEncodedKuid;\r\n  }\r\n\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":15,"name":"TheTradeDesk User Match","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar consent = Krux('iab:urlParams','gdpr_consent','gdpr',true);\r\nif (kuid) {\r\nif(!consent){\r\nconsent = \"&gdpr=0\";\r\n}\r\nvar p = location.protocol == 'https:' ? 'https:' : 'http:';\r\nvar purl = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1&ttd_puid=';\r\n(new Image()).src  = p + purl +kuid+ consent; \r\n}\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":23,"name":"BlueKai S2S (Oracle)","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":34,"name":"Comscore Data Tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  var cbust = Math.round(new Date().getTime() / 1000);\r\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: url,\r\n      data: {\r\n          c1: '9',\r\n          c2: '8188709',\r\n          cs_xi: kuid,\r\n          rn: cbust\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":51,"name":"Eyeota User Match","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n\r\n        if (kuid) {\r\n           var url = prefix + '//ps.eyeota.net/match?bid=i0r4o4v&uid=' + kuid;\r\n           (new Image()).src = url;\r\n        }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":71,"name":"Xandr Connect","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var consent = Krux('iab:urlParams');\r\n        if (kuid) {\r\n            if(!consent){\r\n                consent = \"\";\r\n            }\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\r\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl + consent;\r\n            (new Image()).src=appnexus_url;\r\n        }\r\n})();\r\n</script>\r\n\r\n<!-- Krux Config:\r\n\r\n-->","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>\r\n\r\n\r\n<!-- Krux Config:\r\n\r\n-->","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":95,"name":"KBM user match (KBMG)","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var partner_url =  'https://global.ib-ibi.com/image.sbxx?go=247532&pid=314&xid=' + kuid;\r\n      new Image().src = partner_url;\r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":94,"name":"Pubmatic User Match (pixel only)","content":"<script type='text/javascript'>\r\n(function(){\r\n\r\n\tvar kuid = Krux('get', 'user');\r\n\t\r\n\tif (kuid) {\r\n\t\tvar protocol = window.location.protocol == 'https:' ? 'https:' : 'http:'\r\n\t\tvar kurl = encodeURIComponent(protocol + '//beacon.krxd.net/usermatch.gif?partner=pubmatic&partner_uid=#PM_USER_ID');\r\n\t\tvar lurl = protocol + '//image6.pubmatic.com/AdServer/UCookieSetPug?rd=';\r\n\t\t(new Image()).src = lurl + kurl;\r\n\t} \r\n \r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":153,"name":"Datonics User Match","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var datonics_url = 'https://fei.pro-market.net/engine?mimetype=img&du=88&csync=' + kuid;\r\n      var i = new Image();\r\n      i.src = datonics_url;     \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.a1705c5ac5f06cf0c202ff70908fc042', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
