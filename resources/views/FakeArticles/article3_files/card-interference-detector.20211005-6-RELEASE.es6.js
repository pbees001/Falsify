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

/*! 20211005-6-RELEASE */

(()=>{const e=2e3;let t=!1;class n{static isInterruptionReported(){return t}static detectCardInterrupted(t){if(t)try{n.checkForClashAndReport(t),setTimeout(()=>{n.checkForClashAndReport(t)},e)}catch(e){__trcError(`error in detectCardInterrupted: ${e}`,e)}}static checkForClashAndReport(e){if(n.isInterruptionReported())return;const t=n.getClashingElement(e);t&&n.report(t,e)}static getClashingElement(e){const t=e.getBoundingClientRect(),r=TRC.intersections.getPointsOnElement(t,["lt","mt","rt","lm","mm","rm","lb","mb","rb"]);let s=null;return Object.keys(r).some(t=>{const o=r[t],c=document.elementFromPoint(o.targetElementCenterX,o.targetElementCenterY),l=c&&n.isClashingElement(e,c);return l&&(s=c),l}),s}static isClashingElement(e,t){return!n.isRelativeElement(e,t)&&!n.isExcludedElement(t,e)&&n.areOverlapping(e,t)}static isRelativeElement(e,t){return e===t||e.contains(t)||t.contains(e)}static areOverlapping(e,t){const n=t.getBoundingClientRect(),r=e.getBoundingClientRect();if(m(n,r))return!1;const s=50*50,o=Math.max(n.top,r.top),c=Math.min(n.bottom,r.bottom),l=Math.max(n.left,r.left),a=Math.min(n.right,r.right),i=c-o,d=a-l,u=i*d;return Math.abs(u)>=s;function m(e,t){return e.bottom<t.top||t.bottom<e.top||e.right<t.left||t.right<e.left}}static report(e,n){const r=TRC.dom.closest(n,"[data-placement-name]"),s={publisher:{id:TRC.publisherId,type:TRC.listOrigin.getSource(),pageUrl:location.href},page:{scrollY:TRC.dom.getPageVerticalScroll(),viewportWidth:TRC.dom.getWindowWidth()},clashItem:{placement:r&&r.getAttribute("data-placement-name"),id:e.id,class:e.className,xpath:d.xPath(e,!1),url:e.src||e.querySelector("iframe")&&e.querySelector("iframe").src}},o={event_type:"OVERLAY_MEASUREMENT",event_state:"REPORTED",event_value:JSON.stringify(s)};TRCImpl.sendEvent("supply-feature",{d:JSON.stringify(o)},{}),TRC.util.isPercentEnabled(TRCImpl.global,"take-screenshot-on-violation")&&TRC.ModuleLoader.load("screenshot-capture",TRC.screenshotCaputre,function(){TRC.screenshotCaputre.init(document.body,{keepImages:!0})}.trcBind(this)),t=!0}static isExcludedElement(e,t){const n={element:e,rect:e.getBoundingClientRect(),cardRect:t.getBoundingClientRect()};return a.some(e=>{const t=i[e];return t.shouldExclude(n)})}}TRC.CardInterferenceDetector=n;class r{shouldExclude(){return!0}combine(e){return new r.LambdaExcluder(t=>this.shouldExclude(t)||e.shouldExclude(t))}}r.LambdaExcluder=class e extends r{constructor(e){super(),this.lambda=e}shouldExclude(e){return this.lambda(e)}};class s extends r{constructor(e){super(),this.selectors=e}shouldExclude({element:e}){return this.selectors.some(t=>null!==TRC.dom.closest(e,t))}}class o extends r{constructor(e){super(),this.patterns=e}shouldExclude({element:e}){return!!e.classList.toString()&&this.patterns.some(t=>e.classList.toString().search(t)>=0)}}class c extends r{constructor(e){super(),this.selectors=e}shouldExclude({element:e}){return this.selectors.some(t=>null!==e.querySelector(t))}}class l extends r{constructor(e){super(),this.pattern=e}shouldExclude({element:e}){return e.textContent.search(this.pattern)>=0}}const a=["exclude-taboola-elements","exclude-website-elements","exclude-sticky-classnames","exclude-social-buttons","exclude-privacy-banners"],i={"exclude-website-elements":new s(["header","footer",'[class*="header"]:not(body)','[class*="footer"]:not(body)',"nav"]),"exclude-taboola-elements":new s(["[class*=trc_]","[class*=tbl-]","[class*=cm-]"]),"exclude-sticky-classnames":new o(["sticky"]).combine(new s([".sticky-header"])),"exclude-social-buttons":new s([".sticky-social",'[class*="social"]:not(body)','[class*="share"]:not(body)']).combine(new c(['[class*="facebook"]','[class*="twitter"]'])).combine(new l(/share/i)),"exclude-privacy-banners":new l(/cookies|privacy/i).combine(new o(["qc-cmp"])),"exclude-zero-height":new r.LambdaExcluder(({rect:e})=>0===e.height)},d={xPath:function(e,t){if(e.nodeType===Node.DOCUMENT_NODE)return"/";const n=[];let r=e;for(;r;){const e=d._xPathValue(r,t);if(!e)break;if(n.push(e),e.optimized)break;r=r.parentNode}return n.reverse(),(n.length&&n[0].optimized?"":"/")+n.join("/")},_xPathValue:function(e,t){let n;const r=d._xPathIndex(e);if(-1===r)return null;switch(e.nodeType){case Node.ELEMENT_NODE:if(t&&e.getAttribute("id"))return new d.Step(`//*[@id="${e.getAttribute("id")}"]`,!0);n=e.localName;break;case Node.ATTRIBUTE_NODE:n=`@${e.nodeName}`;break;case Node.TEXT_NODE:case Node.CDATA_SECTION_NODE:n="text()";break;case Node.PROCESSING_INSTRUCTION_NODE:n="processing-instruction()";break;case Node.COMMENT_NODE:n="comment()";break;case Node.DOCUMENT_NODE:default:n=""}return r>0&&(n+=`[${r}]`),new d.Step(n,e.nodeType===Node.DOCUMENT_NODE)},_xPathIndex:function(e){function t(e,t){if(e===t)return!0;if(e.nodeType===Node.ELEMENT_NODE&&t.nodeType===Node.ELEMENT_NODE)return e.localName===t.localName;if(e.nodeType===t.nodeType)return!0;const n=e.nodeType===Node.CDATA_SECTION_NODE?Node.TEXT_NODE:e.nodeType,r=t.nodeType===Node.CDATA_SECTION_NODE?Node.TEXT_NODE:t.nodeType;return n===r}const n=e.parentNode?e.parentNode.children:null;if(!n)return 0;let r;for(let o=0;o<n.length;++o)if(t(e,n[o])&&n[o]!==e){r=!0;break}if(!r)return 0;let s=1;for(let o=0;o<n.length;++o)if(t(e,n[o])){if(n[o]===e)return s;++s}return-1},Step:class{constructor(e,t){this.value=e,this.optimized=t||!1}toString(){return this.value}}}})();

}
/*
     FILE ARCHIVED ON 04:55:22 Oct 07, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:36:25 Oct 17, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 263.45
  exclusion.robots: 0.078
  exclusion.robots.policy: 0.072
  RedisCDXSource: 5.272
  esindex: 0.005
  LoadShardBlock: 231.449 (3)
  PetaboxLoader3.datanode: 226.655 (4)
  CDXLines.iter: 17.801 (3)
  load_resource: 100.21
  PetaboxLoader3.resolve: 78.207
*/