(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{D3sv:function(t,e,n){"use strict";var r=n("NthX"),a=n.n(r),u=n("eijD"),o=n("2co1"),s=n("gqkn"),c=n("Ojct");e.a={addLiveUser:function(t){return{type:c.a,payload:t}},updateLiveUser:function(t,e){return function(){var n=Object(u.a)(a.a.mark((function n(r,u){var i,p,f;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=u(),p=i.liveUser,f=Object.keys(p),Promise.all(f.map((function(n){return o.a.getUserInfoCSR({userId:n,language:e},{baseURL:Object(s.b)(t)})}))).then((function(t){t.forEach((function(t){var e=((t||{}).userInfo||{}).user||{},n=e.id;!e.roomId&&n&&r({type:c.b,payload:{userId:n}})}))}));case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()}}},GBDI:function(t,e,n){"use strict";var r=n("NthX"),a=n.n(r),u=n("eijD"),o=n("pM4p"),s=n("54Ks"),c=function(){var t=null;return function(){var e=Object(u.a)(a.a.mark((function e(n,r){var u,i,p,f,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,o.c.getNewestReply();case 4:u=e.sent,i=u.data,f=(p=void 0===i?{}:i).has_reply,d=p.feedback_id,r({type:s.b,hasNewFeedbackReply:Boolean(f),lastFeedbackReplyId:d}),t=window.setTimeout((function(){return c(n,r)}),6e5);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}();e.a={setNewestReply:function(t){return function(){var e=Object(u.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},clearNewestReply:function(){return function(t){t({type:s.a})}}}},cRTF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function r(){return"undefined"!==typeof document&&document.pictureInPictureElement&&document.pictureInPictureElement.className.includes("live-sdk-inner-watch-live-video")?document.pictureInPictureElement:null}e.LIVE_PIP_NAME="live-sdk-inner-watch-live-video",e.getLivePiPElement=r,e.isLivePiPMuted=function(){var t=r();if(t)return t.muted;throw new Error("pip element is not exist")},e.muteLivePiP=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=r();e&&(e.muted=t)}},fhSU:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r,a=n("NthX"),u=n.n(a),o=n("eijD"),s=n("4p5+"),c=n("ou9M"),i=n("K92R"),p=n("cRTF");!function(t){t.MANUAL="manual",t.BROWSER_MODE="browser_mode"}(r||(r={})),e.b={setMuted:function(t){var e=t.muted,n=t.muteWay;return function(){var t=Object(o.a)(u.a.mark((function t(r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:s.b,payload:{muted:e,muteWay:n}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},initVolume:function(t){var e=t.volume;return function(){var t=Object(o.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:s.f,payload:{volume:e}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateMuted:function(t){return function(){var e=Object(o.a)(u.a.mark((function e(n,a){var o,f,d,l,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=a(),f=o.videoControl,d=f.volume,t!==r.BROWSER_MODE||!f.muteWay){e.next=4;break}return e.abrupt("return");case 4:!1===(l=t!==r.BROWSER_MODE&&!(f.muted||f.browserNeedMute))&&p.muteLivePiP&&Object(p.muteLivePiP)(),m=t||r.MANUAL,Object(i.h)(c.VIDEO_MUTE,JSON.stringify({muted:l,muteWay:m,volume:d})),n({type:s.e,payload:{muted:l,muteWay:m}}),!1===l&&0===d&&(Object(i.h)(c.VIDEO_MUTE,JSON.stringify({muted:l,muteWay:m,volume:c.DEFAULT_VOLUME})),n({type:s.f,payload:{volume:c.DEFAULT_VOLUME}}));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},updateVolume:function(t,e){return function(){var e=Object(o.a)(u.a.mark((function e(n,a){var o,p,f,d,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=a(),p=o.videoControl,f=p.muted,d=p.muteWay,Object(i.h)(c.VIDEO_MUTE,JSON.stringify({volume:t,muted:0===t,muteWay:d})),n({type:s.f,payload:{volume:t}}),l=d||r.MANUAL,0!==t||f?f&&0!==t&&n({type:s.e,payload:{muted:!1,muteWay:l}}):n({type:s.e,payload:{muted:!0,muteWay:l}});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},setBrowserNeedMute:function(t){return function(){var e=Object(o.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:s.a,payload:{need:t}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setPlayingId:function(t){return{type:s.c,payload:{id:t}}},setVideoPlaying:function(t){return{type:s.d,payload:{shouldPlay:t}}}}},pM4p:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var r,a,u=n("NthX"),o=n.n(u),s=n("mK0O"),c=n("dV/x"),i=n("eijD"),p=n("hisu"),f=n("yBJb"),d=n("gqkn");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}!function(t){t.GENERAL="",t.ACCOUNT="account",t.COMMON="common",t.BUG="bug",t.FEAT="feature"}(r||(r={})),function(t){t[t.HIDE_STILL_REPORT=2048]="HIDE_STILL_REPORT",t[t.ACCOUNT=4096]="ACCOUNT"}(a||(a={}));var v="https://www.tiktok.com",b=function(t){return t.toLocaleLowerCase().split("-")[0].replace("pt","pt_BR").replace("zh","zh-TW")},h=function(){function t(){Object(p.a)(this,t)}return Object(f.a)(t,[{key:"getList",value:function(){var t=Object(i.a)(o.a.mark((function t(e){var n,r,a,u,s,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},r=e.lang,a=Object(c.a)(e,["lang"]),t.next=4,Object(d.h)("/feedback/2/common_feedback_list/",m(m({},a),{},{lang:b(r)},this.commonData),m({baseURL:v},n));case 4:if(u=t.sent,s=u.list,"success"!==u.message){t.next=9;break}return t.abrupt("return",{statusCode:0,data:s});case 9:return t.abrupt("return",{statusCode:-1,data:[]});case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getReportRecordList",value:function(){var t=Object(i.a)(o.a.mark((function t(e){var n,r,a,u,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.language,r=Object(c.a)(e,["language"]),t.next=3,Object(d.h)("/feedback/3/list/",m(m({},r),{},{language:b(n)},this.commonData),{withCredentials:!0,baseURL:v});case 3:return a=t.sent,u=a.err_code,s=a.data,i=a.default_item,t.abrupt("return",{statusCode:u,data:s,default_item:i});case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getNewestReply",value:function(){var t=Object(i.a)(o.a.mark((function t(){var e,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.h)("/api/feedback/v1/newest_reply/",this.commonData,{withCredentials:!0,baseURL:v});case 2:if(e=t.sent,n=e.err_code,r=e.data,0!==n){t.next=7;break}return t.abrupt("return",{data:r,statusCode:n});case 7:return t.abrupt("return",{statusCode:-1});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"reportFeedback",value:function(){var t=Object(i.a)(o.a.mark((function t(e,n){var r,a,u,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.language,a=Object(c.a)(e,["language"]),t.next=3,Object(d.h)("/feedback/2/post_message/",m(m(m({},a),{},{language:b(r)},this.commonData),{},{multi_image:1}),{method:"post",baseURL:v,withCredentials:!0,headers:{"tt-csrf-token":n}});case 3:return u=t.sent,s=u.err_code,i=Object(c.a)(u,["err_code"]),t.abrupt("return",m({statusCode:s},i));case 7:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"uploadImage",value:function(t,e){var n={statusCode:-1,data:[]};return new Promise((function(r){"undefined"===typeof XMLHttpRequest&&r(n);var a=new XMLHttpRequest;return a.onerror=function(){r(n)},a.ontimeout=function(){r(n)},a.onload=function(){(a.status<200||a.status>=300)&&r(n);var t=a.responseText||a.response;if(!t)return t;try{var e=JSON.parse(t),u=e.data,o=e.statusCode;r({data:(u||[]).map((function(t){return{image_width:t.width,image_height:t.height,image_uri:t.url}})),statusCode:o})}catch(s){r(n)}},a.timeout=3e4,a.open("post","/node/feedback/upload_image/",!0),a.setRequestHeader("tt-csrf-token",e),a.send(t),a}))}},{key:"commonData",get:function(){return{appkey:"tiktok-web",aid:1284,app_name:"tiktok_web",iid:"0"}}}]),t}();e.c=new h},qUd9:function(t,e,n){"use strict";var r=n("NthX"),a=n.n(r),u=n("eijD"),o=n("tQyM"),s=n("6W+L"),c=n("lEqP");e.a={setInboxCount:function(){return function(){var t=Object(u.a)(a.a.mark((function t(e){var n,r,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getCount();case 2:n=t.sent,r=n.noticeCount,u=n.statusCode,r=r.filter((function(t){return-1!==Object.values(o.a).indexOf(t.group)&&t.group!==o.a.ALL})),u===c.OK&&e({type:s.d,noticeCount:r});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},resetInboxCount:function(){return function(){var t=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:s.d,noticeCount:[]});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setMultipleLike:function(t){return function(e){e({type:s.e,likeNoticeItem:t})}},setShowFollowRequest:function(t){return function(e){e({type:s.f,showRequestList:t})}},setFollowRequestCount:function(t){return function(e){e({type:s.a,followRequestCount:t})}},setInboxActiveTab:function(t){return function(e){e({type:s.b,tab:t})}},setHighlightComment:function(t,e,n){return function(r){r({type:s.c,id:t,show:n,groupId:e})}}}},tQyM:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r,a=n("NthX"),u=n.n(a),o=n("eijD"),s=n("hisu"),c=n("yBJb"),i=n("lEqP"),p=n("gqkn");!function(t){t[t.ALL=500]="ALL",t[t.LIKE=3]="LIKE",t[t.COMMENT=2]="COMMENT",t[t.MENTION=6]="MENTION",t[t.FOLLOW=7]="FOLLOW"}(r||(r={}));var f="https://www.tiktok.com",d=function(){function t(){Object(s.a)(this,t)}return Object(c.a)(t,[{key:"getList",value:function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a,o,s,c,i,d,l,m,v,b,h;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.h)("/api/notice/multi/",{group_list:JSON.stringify([e])},{withCredentials:!0,baseURL:f});case 2:return n=t.sent,r=n.status_code,a=n.statusCode,o=n.notice_lists,c=(null===(s=void 0===o?[]:o)||void 0===s?void 0:s[0])||{},i=c.group,d=c.notice_list,l=c.has_more,m=c.max_time,v=c.min_time,b=c.total,h=c.last_read_time,t.abrupt("return",{statusCode:a||r,group:i,list:d||[],hasMore:l||0,max_time:m||0,min_time:v||0,total:b,last_read_time:h});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCount",value:function(){var t=Object(o.a)(u.a.mark((function t(){var e,n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.h)("/api/notice/count/",{source:7},{baseURL:f,withCredentials:!0});case 2:if(e=t.sent,n=e.statusCode,r=e.status_code,a=e.notice_count,0!==r){t.next=8;break}return t.abrupt("return",{statusCode:r,noticeCount:a||[]});case 8:return t.abrupt("return",{statusCode:n,noticeCount:[]});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getLikeList",value:function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a,o,s,c,i,d;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.h)("/api/notice/digg/list/",e,{baseURL:f,withCredentials:!0});case 2:return n=t.sent,r=n.max_cursor,a=n.min_cursor,o=n.statusCode,s=n.digg_infos,c=void 0===s?[]:s,i=n.has_more,d=n.total,t.abrupt("return",{statusCode:o,diggList:c||[],hasMore:i,total:d,min_cursor:a,max_cursor:r});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getFollowRequestList",value:function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a,o,s,c,d;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.h)("/api/user/following/request/list/",e,{baseURL:f,withCredentials:!0});case 2:if(n=t.sent,r=n.status_code,a=n.statusCode,o=n.min_time,s=n.request_users,c=n.has_more,d=n.total,n.myself_user_id,r!==i.OK){t.next=12;break}return t.abrupt("return",{statusCode:r,hasMore:c,total:d||0,requestUsers:s||[],min_time:o});case 12:return t.abrupt("return",{total:0,statusCode:a,hasMore:!0,requestUsers:[]});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"approveFollowRequest",value:function(){var t=Object(o.a)(u.a.mark((function t(e,n){var r,a,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.h)("/api/commit/follow/request/approve/",e,{baseURL:f,withCredentials:!0,method:"post",headers:{"tt-csrf-token":n}});case 2:return r=t.sent,a=r.status_code,o=r.approve_status,t.abrupt("return",{statusCode:a,approveStatus:o});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"rejectFollowRequest",value:function(){var t=Object(o.a)(u.a.mark((function t(e,n){var r,a,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.h)("/api/commit/follow/request/reject/",e,{baseURL:f,withCredentials:!0,method:"post",headers:{"tt-csrf-token":n}});case 2:return r=t.sent,a=r.status_code,o=r.approve_status,t.abrupt("return",{statusCode:a,approveStatus:o});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}]),t}();e.b=new d},vvbo:function(t,e,n){"use strict";var r=n("NthX"),a=n.n(r),u=n("eijD"),o=n("mgDb");e.a={setRedDot:function(t){return function(){var e=Object(u.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:o.a,redDot:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}}]);