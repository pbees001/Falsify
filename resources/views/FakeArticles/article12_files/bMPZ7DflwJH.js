if (self.CavalryLogger) { CavalryLogger.start_js(["Oq2ftYd"]); }

__d("CometGHLScrambledLabel_GHLNode.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"val",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGHLScrambledLabel_GHLNode",selections:[{alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"attributes",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"styles",plural:!0,selections:a,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tag",storageKey:null}],type:"GHLScramblingNode",abstractKey:null}}();e.exports=a}),null);
__d("CometGHLScrambledLabel_label.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"val",storageKey:null}],b={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"attributes",plural:!0,selections:a,storageKey:null};a={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"styles",plural:!0,selections:a,storageKey:null};var c={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"tag",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGHLScrambledLabel_label",selections:[b,a,c,d,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[b,a,c,d,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[b,a,c,d],storageKey:null}],storageKey:null}],type:"GHLScramblingNode",abstractKey:null}}();e.exports=a}),null);
__d("BaseButtonOrLink_DEPRECATED.react",["CometPressable.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var d=a.fbclid,e=a.href,f=a.lynxMode,g=a.onClick,i=a.passthroughProps,j=a.preventLocalNavigation,k=a.rel,l=a.replace,m=a.routeTarget,n=a.target,o=a.to;a=babelHelpers.objectWithoutPropertiesLoose(a,["fbclid","href","lynxMode","onClick","passthroughProps","preventLocalNavigation","rel","replace","routeTarget","target","to"]);e=(e=e)!=null?e:o==null?void 0:o.url;o=e!=null?{fbclid:d,lynxMode:f,passthroughProps:i,preventLocalNavigation:j,rel:k,replace:l,routeTarget:m,target:n,url:e}:void 0;return h.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{display:"inline",linkProps:o,onPress:g,overlayDisabled:!0,ref:b}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("Dots3HorizontalFilled20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("484387"),20);g["default"]=a}),98);
__d("useCometAriaID",["react","useCometUniqueID","useSetAttributeRef"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useMemo;function a(a){var b=c("useCometUniqueID")(),d=c("useSetAttributeRef")("id",b),e=c("useSetAttributeRef")(a,b);return h(function(){var c;return[[{id:b,suppressHydrationWarning:!0},d],[(c={},c[a]=b,c.suppressHydrationWarning=!0,c),e]]},[a,b,d,e])}g["default"]=a}),98);
__d("CometFeedClickEventsLoggerProvider.react",["CometFeedClickEventsLoggerContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.children,d=a.logger,e=a.onPress;a=i(function(a,b,c,f,g,h,i){d.loadImmediately(function(d){return e(d,a,b,c,f,g,h,i)})},[d,e]);return h.jsx(c("CometFeedClickEventsLoggerContext").Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometFeedLoggingExtraFields",["CometFeedLoggingExtraFieldsContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){return h(c("CometFeedLoggingExtraFieldsContext"))}g["default"]=a}),98);
__d("CometFeedLoggingExtraFieldsProvider.react",["CometFeedLoggingExtraFieldsContext","react","shallowEqual","useCometFeedLoggingExtraFields"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useRef;function a(a){var b=a.children;a=a.extraFields;var d=i({}),e=c("useCometFeedLoggingExtraFields")();e=babelHelpers["extends"]({},e,a);c("shallowEqual")(d.current,e)||(d.current=e);return h.jsx(c("CometFeedLoggingExtraFieldsContext").Provider,{value:d.current,children:b})}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("CometMetricsClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1950603");c=b("FalcoLoggerInternal").create("comet_metrics_click",a);e.exports=c}),null);
__d("CometFeedStoryClickLoggerImpl.react",["CometFeedClickEventsLoggerProvider.react","CometFeedLoggingExtraFieldsProvider.react","CometMetricsClickFalcoEvent","CometRouteURL","react","requireDeferred","uuid"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback,j=c("requireDeferred")("Banzai").__setRef("CometFeedStoryClickLoggerImpl.react");function a(a){a=a.children;var b=d("CometRouteURL").useRouteURLParams(),e=b.notif_t!=null?String(b.notif_t):null;b=b.notif_id!=null?+b.notif_id:null;var f=i(function(a,b,d,e,f,g,h,i){if(e==null||e==="")return;a=c("uuid")();var j=f===1?"middle_click":f===2?"right_click":f===-1?"dummy_click":"",k=(f=i)!=null?f:a;c("CometMetricsClickFalcoEvent").logImmediately(function(){return{click_type:j,event_trace_id:k,extra_fields:h,href:g,tn:d.join(""),ts:b.toString(),xt:e}})});return h.jsx(c("CometFeedClickEventsLoggerProvider.react"),{logger:j,onPress:f,children:h.jsx(c("CometFeedLoggingExtraFieldsProvider.react"),{extraFields:{notif_id:b,notif_type:e},children:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometGHLNode.react",["Env","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=function(a){return a==null?{}:a.reduce(function(a,b){var c=b.name;b=b.val;c!=null&&b!=null&&(a[c]=b);return a},{})};function j(a){var b=a.attributes,d=a.children,e=a.styles,f=a.tag;a=a.text;b=i(b);e=i(e);f=f==null||f===""?"span":f;var g=b.checksum,k=b.className;k=k===void 0?"":k;var l=babelHelpers.objectWithoutPropertiesLoose(b,["checksum","className"]);g=c("Env").ghlss===g&&c("gkx")("3463")&&k;return h.jsxs(f,babelHelpers["extends"]({},l,{className:"b6zbclly myohyog2 l9j0dhe7 aenfhxwr l94mrbxd ihxqhq3m nc684nl6 t5a262vz"+(b["data-content"]!==null?" sdhka5h4":"")+" "+k,style:g?{}:e,children:[a,d&&d.map(function(a,b){return h.jsx(j,babelHelpers["extends"]({},a),b)})]}))}j.displayName=j.name+" [from "+f.id+"]";g["default"]=j}),98);
__d("CometGHLScrambledLabel.react",["fbt","CometGHLNode.react","CometGHLScrambledLabel_GHLNode.graphql","CometGHLScrambledLabel_label.graphql","CometRelay","cr:1787397","gkx","react","useCometAriaID"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=d("react");i!==void 0?i:i=b("CometGHLScrambledLabel_GHLNode.graphql");function a(a){var e=a.label,f=a.location;f=f===void 0?"news_feed":f;var g=a.text;a=a.withTextDecoration;a=a===void 0?!0:a;var i=c("gkx")("1787398");i=c("gkx")("1787399")&&!i;var l=c("gkx")("1787400")&&f==="news_feed";f=c("gkx")("1844895")&&f==="rhc";e=d("CometRelay").useFragment(j!==void 0?j:j=b("CometGHLScrambledLabel_label.graphql"),e);var m=c("useCometAriaID")("aria-labelledby"),n=m[0],o=n[0];n=n[1];m=m[1];var p=m[0];m=m[1];var q=c("useCometAriaID")("aria-labelledby"),r=q[0],s=r[0];r=r[1];q=q[1];var t=q[0];q=q[1];var u=c("useCometAriaID")("aria-labelledby"),v=u[0],w=v[0];v=v[1];u=u[1];var x=u[0];u=u[1];o=b("cr:1787397")?k.jsx(b("cr:1787397"),{targetProps:o,targetRef:n,children:g}):null;n=b("cr:1787397")?k.jsx(b("cr:1787397"),{targetProps:s,targetRef:r,children:h._(/*FBT_CALL*/"Sponsored"/*FBT_CALL*/)}):null;g=b("cr:1787397")?k.jsx(b("cr:1787397"),{targetProps:w,targetRef:v,children:h._(/*FBT_CALL*/"Advertiser link"/*FBT_CALL*/)}):null;s=l?k.jsx("span",babelHelpers["extends"]({"aria-label":i?null:h._(/*FBT_CALL*/"Sponsored"/*FBT_CALL*/)},i?t:null,{ref:i?q:null,children:n})):null;r=f?k.jsx("span",babelHelpers["extends"]({"aria-label":i?null:h._(/*FBT_CALL*/"Advertiser link"/*FBT_CALL*/)},i?x:null,{ref:i?u:null,children:g})):null;return k.jsxs("span",babelHelpers["extends"]({},i?p:null,{className:"j1lvzwm4 stjgntxs ni8dbmo4 q9uorilb"+(a?" gpro0wi8":""),ref:i?m:null,children:[s,r,o,k.jsx(c("CometGHLNode.react"),babelHelpers["extends"]({},e))]}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("oz-player/manifests/OzApplicationRepresentation",["oz-player/manifests/OzRepresentationBase"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(c("oz-player/manifests/OzRepresentationBase"));g["default"]=a}),98);
__d("oz-player/media_source/OzMSESourceBufferImpl",["oz-player/shims/OzDOMEventListener"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){this.$1=a}var b=a.prototype;b.registerOnUpdateEndListener=function(a){return c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1,"updateend",a)};b.registerOnErrorListener=function(a){return c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1,"error",a)};b.getIsUpdating=function(){return this.$1.updating};b.getBuffered=function(){return this.$1.buffered};b.setAppendWindowEnd=function(a){this.$1.appendWindowEnd=a};b.appendBuffer=function(a){this.$1.appendBuffer(a)};b.abort=function(){this.$1.abort()};b.remove=function(a,b){this.$1.remove(a,b)};return a}();g["default"]=a}),98);
__d("oz-player/parsers/OzApplicationRepresentationParser",["oz-player/manifests/OzApplicationRepresentation","oz-player/parsers/OzRepresentationParserBase"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c,d,e,f,g,h,i,j,k){b=a.call(this,b,c,d,e,f,g,h,i,j,k)||this;b.$OzApplicationRepresentationParser1=c;b.$OzApplicationRepresentationParser2=d;return b}var d=b.prototype;d.parse=function(){var a=this.$OzApplicationRepresentationParser2.customRepresentationParsers;return new(c("oz-player/manifests/OzApplicationRepresentation"))(this.$OzApplicationRepresentationParser1,this.parseID(),this.parseMimeCodecs(),this.parseInitSegment(),this.parseSegmentsContainer(),this.parseBandwidth(),this.parseCustomFieldFirstSegment(),a)};return b}(c("oz-player/parsers/OzRepresentationParserBase"));g["default"]=a}),98);
__d("sumOfArray",[],(function(a,b,c,d,e,f){function a(a){var b=0,c=a.length;for(var d=0;d<c;++d)b+=a[d];return b}f["default"]=a}),66);
__d("oz-player/playback_controls/OzSteadyStateManager",["oz-player/shims/OzDOMEventListener","oz-player/shims/OzSubscriptionsHandler","sumOfArray"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a,b){var d=this;this.$1=new(c("oz-player/shims/OzSubscriptionsHandler"))();this.$2=[];this.$3=!1;this.$5=a.getNumber("steady_state_measurement_duration_ms");this.$6=a.getNumber("steady_state_min_buffer_duration_sec");this.$7=a.getNumber("steady_state_target_latency_sec");this.$4=Date.now();this.$1.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(b,"pause",function(){return d.reset()}))}var b=a.prototype;b.reset=function(){this.$2=[],this.$3=!1,this.$4=Date.now()};b.appendBuffer=function(a){if(this.$3)return;if(a<this.$6){this.reset();return}this.$2.push(a);Date.now()-this.$4>this.$5&&(this.$3=!0)};b.recommendedLatency=function(a){if(!this.$3)return 0;var b=c("sumOfArray")(this.$2)/this.$2.length;b=b-this.$7;return a-b};b.destroy=function(){this.$1.release()};return a}();g["default"]=a}),98);