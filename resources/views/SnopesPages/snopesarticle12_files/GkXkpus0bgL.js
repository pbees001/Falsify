if (self.CavalryLogger) { CavalryLogger.start_js(["q15e6wc"]); }

__d("deepCompare",[],(function(a,b,c,d,e,f){"use strict";function g(a,b){if(a===b)return!0;if(!(a instanceof Object)||!(b instanceof Object))return!1;if(a.constructor!==b.constructor)return!1;if(Array.isArray(a)&&Array.isArray(b)){if(a.length!==b.length)return!1;var c={},d=0;for(var e=0,f=a.length;e<f;e++){var h=d;for(var i=0,j=b.length;i<j&&h===d;i++){if(c[i])continue;g(a[e],b[i])&&(c[i]=!0,d++)}}return d===a.length}else{h=a;i=b;for(var k in h){if(!Object.prototype.hasOwnProperty.call(h,k))continue;if(!Object.prototype.hasOwnProperty.call(i,k))return!1;if(h[k]===i[k])continue;if(typeof h[k]!=="object")return!1;if(!g(h[k],i[k]))return!1}for(k in i)if(Object.prototype.hasOwnProperty.call(i,k)&&!Object.prototype.hasOwnProperty.call(h,k))return!1}return!0}f["default"]=g}),66);
__d("BUIComponent",["react"],(function(a,b,c,d,e,f,g){"use strict";d("react");a=d("react").Component;b=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a);g["default"]=b}),98);
__d("BUISwitch.react",["cx","fbt","BUIComponent","Event","Keys","prop-types","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=d=a.call.apply(a,[this].concat(f))||this,d.$BUISwitch1=function(a){if(d.props.disabled)return;d.props.onToggle&&d.props.onToggle(!d.props.value);d.props.preventEventBubbling&&a.stopPropagation()},d.$BUISwitch2=function(a){if(d.props.disabled)return;var b=c("Event").getKeyCode(a);(b===c("Keys").RETURN||b===c("Keys").SPACE)&&(a.preventDefault(),d.props.onToggle&&d.props.onToggle(!d.props.value),d.props.preventEventBubbling&&a.stopPropagation())},d.$BUISwitch3=function(a){a.preventDefault()},b)||babelHelpers.assertThisInitialized(d)}var d=b.prototype;d.render=function(){return j.jsxs("div",babelHelpers["extends"]({},this.props,{className:"_128j"+(this.props.value?" _128k":"")+(this.props.value?"":" _128l")+(this.props.disabled?" _128m":"")+(this.props.animate?" _128n":"")+(this.props.inline?" _3n6a":""),children:[j.jsx("div",{"aria-checked":this.props.value?"true":"false",className:"_128o",onClick:this.$BUISwitch1,onKeyDown:this.$BUISwitch2,onMouseDown:this.$BUISwitch3,role:"switch",tabIndex:this.props.disabled?"-1":"0",children:j.jsx("div",{className:"_128p"})}),this.$BUISwitch4()]}))};d.$BUISwitch4=function(){return!this.props.showLabel?null:j.jsx("span",{className:"_128q",children:this.props.value?i._(/*FBT_CALL*/"ON"/*FBT_CALL*/):i._(/*FBT_CALL*/"OFF"/*FBT_CALL*/)})};return b}(c("BUIComponent"));a.propTypes={animate:c("prop-types").bool.isRequired,disabled:c("prop-types").bool,onToggle:c("prop-types").func,showLabel:c("prop-types").bool,value:c("prop-types").bool.isRequired,preventEventBubbling:c("prop-types").bool,inline:c("prop-types").bool};a.defaultProps={animate:!0};g["default"]=a}),98);
__d("Button.react",["cx","AbstractButton.react","joinClasses","prop-types","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=this.props.use||"default",b=this.props.size||"medium";b="_42fu"+(a==="special"?" _42gz":"")+(a==="confirm"?" _42g-":"")+(b==="large"?" _42gy":"")+(this.props.suppressed?" _42gx":"")+(a!=="default"?" selected":"");return i.jsx(c("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:c("joinClasses")(this.props.className,b)}))};return b}(i.Component);a.propTypes={use:c("prop-types").oneOf(["special","confirm","default"]),size:c("prop-types").oneOf(["medium","large"]),suppressed:c("prop-types").bool};g["default"]=a}),98);
__d("AbstractPopoverButton.react",["cx","URI","joinClasses","prop-types","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=this.props.config,b={},d=a.defaultMaxWidth;this.props.maxwidth!==void 0&&(d=this.props.maxwidth);d&&(b.style=babelHelpers["extends"]({},a.button.props.style,{maxWidth:d+"px"}));this.props.image&&(b.image=i.jsx("span",{className:"_-xe _3-8_",children:this.props.image}));this.props.label&&(b.labelIsHidden=this.props.labelIsHidden,b.label=i.jsx("span",{className:"_55pe",children:this.props.label}));this.props.haschevron&&(b.imageRight=i.jsx("span",{className:"_4o_3",children:a.chevron}));b.className=c("joinClasses")(a.button.props.className,"_2agf _4o_4");b.href=new(c("URI"))("#");b["aria-haspopup"]=!0;b.role="button";return i.cloneElement(a.button,b)};return b}(i.Component);a.propTypes={config:c("prop-types").object.isRequired,haschevron:c("prop-types").bool,label:c("prop-types").node,labelIsHidden:c("prop-types").bool,maxwidth:c("prop-types").number};a.defaultProps={haschevron:!0};g["default"]=a}),98);
__d("PopoverButton.react",["cx","ix","AbstractPopoverButton.react","Button.react","Image.react","joinClasses","prop-types","react"],(function(a,b,c,d,e,f,g,h,i){var j=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=j.jsx(c("Image.react"),{src:i("101373")});a={button:j.jsx(c("Button.react"),babelHelpers["extends"]({},this.props,{className:c("joinClasses")(this.props.className,"_4-s1")})),chevron:a,defaultMaxWidth:200,chevronWidth:14};return j.jsx(c("AbstractPopoverButton.react"),{config:a,haschevron:this.props.haschevron,image:this.props.image,label:this.props.label,labelIsHidden:this.props.labelIsHidden,maxwidth:this.props.maxwidth})};return b}(j.Component);a.propTypes={haschevron:c("prop-types").bool,label:c("prop-types").node,labelIsHidden:c("prop-types").bool,maxwidth:c("prop-types").number};g["default"]=a}),98);
__d("PopoverMenuContextMinWidth",["cx","CSS","Style","shield"],(function(a,b,c,d,e,f,g,h){a=function(){function a(a){var b=this;this._onSetMenu=function(){b._menu=b._popoverMenu.getMenu();b._showSubscription=b._popover.subscribe("show",c("shield")(b._updateWidth,b));var a=b._updateWidth.bind(b);b._menuSubscription=b._menu.subscribe(["change","resize"],function(){window.setTimeout(a,0)});b._updateWidth()};this._popoverMenu=a;this._popover=a.getPopover()}var b=a.prototype;b.enable=function(){this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",c("shield")(this._onSetMenu,this))};b.disable=function(){this._setMenuSubscription.unsubscribe(),this._setMenuSubscription=null,this._showSubscription&&(this._showSubscription.unsubscribe(),this._showSubscription=null),this._menuSubscription&&(this._menuSubscription.unsubscribe(),this._menuSubscription=null)};b._updateWidth=function(){var a=this._menu.getRoot(),b=this._popoverMenu.getTriggerElem();b=b.offsetWidth;c("Style").set(a,"min-width",b+"px");d("CSS").conditionClass(a,"_575s",b>=a.offsetWidth)};return a}();Object.assign(a.prototype,{_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});g["default"]=a}),98);
__d("PopoverMenuOverlappingBorder",["cx","CSS","DOM","Style","shield"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a){this._popoverMenu=a,this._popover=a.getPopover(),this._triggerElem=a.getTriggerElem()}var c=a.prototype;c.enable=function(){this._setMenuSubscription=this._popoverMenu.subscribe("setMenu",b("shield")(this._onSetMenu,this))};c.disable=function(){this._popoverMenu.unsubscribe(this._setMenuSubscription),this._setMenuSubscription=null,this._removeBorderSubscriptions(),this._removeShortBorder()};c._onSetMenu=function(){this._removeBorderSubscriptions();this._menu=this._popoverMenu.getMenu();this._renderShortBorder(this._menu.getRoot());this._showSubscription=this._popover.subscribe("show",b("shield")(this._updateBorder,this));var a=this._updateBorder.bind(this);this._menuSubscription=this._menu.subscribe(["change","resize"],function(){setTimeout(a,0)});this._updateBorder()};c._updateBorder=function(){var a=this._menu.getRoot(),c=this._triggerElem.offsetWidth;a=Math.max(a.offsetWidth-c,0);b("Style").set(this._shortBorder,"width",a+"px")};c._renderShortBorder=function(a){this._shortBorder=b("DOM").create("div",{className:"_54hx"}),b("DOM").appendContent(a,this._shortBorder),b("CSS").addClass(a,"_54hy")};c._removeShortBorder=function(){this._shortBorder&&(b("DOM").remove(this._shortBorder),this._shortBorder=null,b("CSS").removeClass(this._popoverMenu.getMenu().getRoot(),"_54hy"))};c._removeBorderSubscriptions=function(){this._showSubscription&&(this._popover.unsubscribe(this._showSubscription),this._showSubscription=null),this._menuSubscription&&(this._menu.unsubscribe(this._menuSubscription),this._menuSubscription=null)};return a}();Object.assign(a.prototype,{_shortBorder:null,_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});e.exports=a}),null);
__d("ReactSelectorUtils",["deepCompare","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b,d){d===void 0&&(d=!1);var e;d=h.Children.map(a,function(a){if(a){var d=c("deepCompare")(a.props.value,b);a=h.cloneElement(a,{selected:d});d&&(e=a);return a}});return{items:d,selectedItem:e}}function b(a,b,c){c===void 0&&(c=!1);var d=[];c=a;b&&(c=h.Children.map(a,function(a){if(a){var c=b.some(function(b){return b===a.props.value});a=h.cloneElement(a,{selected:c});c&&d.push(a);return a}}));return{items:c,selectedItems:d}}g.processMenuItems=a;g.processMultiMenuItems=b}),98);
__d("AbstractSelector.react",["cx","invariant","ContextualLayerAutoFlip","InlineBlock.react","PopoverMenu.react","PopoverMenuContextMinWidth","PopoverMenuOverlappingBorder","ReactSelectorUtils","intlList","joinClasses","prop-types","react"],(function(a,b,c,d,e,f,g,h){var i,j=i||b("react");function a(a,b){if(a[b]==null)return;var c=Array.isArray(a[b]);if(a.multiple){if(!c)return new Error("You are trying to set a single value for `"+b+"` but the menu has `multiple` set to true, so it should be an array of values.")}else if(c)return new Error("You are trying to set an array of values for `"+b+"` but the menu has `multiple` set to false, so it should be a single value.")}c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=!1,c.$2=j.createRef(),c.state={value:c.props.value!=null?c.props.value:c.props.defaultValue!=null?c.props.defaultValue:c.props.initialValue,multiple:c.props.multiple},c.onChange=function(a,b){if(c.$3)return;if(c.props.value==null){c.props.multiple?a=b.map(function(a){return a.value}):a=b.value;c.setState({value:a})}else c.setMenuValue(c.props.value);c.props.onChange&&c.props.onChange(b)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.setMenuValue=function(a){this.$2.current||h(0,1741),this.$3=!0,this.$2.current.getMenu().setValue(a),this.$3=!1};c.getDerivedStateFromProps=function(a,b){if(a.value!=null)return{value:a.value};else if(a.multiple!==b.multiple)return{value:a.multiple?[b.value]:b.value[0],multiple:a.multiple};return null};d.render=function(){var a=this.props.config,c=this.props.multiple?b("ReactSelectorUtils").processMultiMenuItems(this.props.children,this.state.value):b("ReactSelectorUtils").processMenuItems(this.props.children,this.state.value),d=j.cloneElement(a.menu,{children:c.items,className:b("joinClasses")("_575t",a.menu.props.className),maxheight:this.props.maxheight,onChange:this.onChange}),e="",f=null;if(!this.props.multiple){var g=c.selectedItem;g?(e=g.props.label||g.props.children,g.props.icon&&(f=j.cloneElement(g.props.icon,{}))):e=this.props.defaultLabel!==void 0?this.props.defaultLabel:"Select an option"}else{g=c.selectedItems;!g||!g.length?e=this.props.defaultLabel!==void 0?this.props.defaultLabel:"Select options":e=b("intlList")(g.map(function(a){return a.props.children}),b("intlList").CONJUNCTIONS.NONE)}c={label:e,disabled:this.props.disabled};f&&(c.image=f);g=j.cloneElement(a.button,c);e=[b("ContextualLayerAutoFlip")];a.layerBehaviors&&(e=e.concat(a.layerBehaviors));f=[b("PopoverMenuContextMinWidth")];this.props.overlappingborder&&f.push(b("PopoverMenuOverlappingBorder"));c=null;if(this.props.multiple){var h=this.props.name+"[]",i;this.state.value&&(i=this.state.value.map(function(a){return j.jsx("input",{type:"hidden",name:h,value:a},a)}));c=j.jsx("div",{children:i})}else c=j.jsx("input",{type:"hidden",name:this.props.name,value:this.state.value});return j.jsxs(b("InlineBlock.react"),babelHelpers["extends"]({},this.props,{alignv:"middle",name:null,children:[j.jsx(b("PopoverMenu.react"),{alignh:this.props.alignh,behaviors:f,disabled:this.props.disabled,layerBehaviors:e,menu:d,position:this.props.position,onReturnWithoutFocusedItem:this.props.onReturnWithoutFocusedItem,onHide:this.props.onHide,onShow:this.props.onShow,ref:this.$2,children:g}),c]}))};d.componentDidMount=function(){this.$1=!0};d.componentWillUnmount=function(){this.$1=!1};d.showMenu=function(){this.$1||h(0,1742),this.$2.current!=null&&this.$2.current.showPopover()};d.showAndFocusMenu=function(){this.$1||h(0,1743),this.$2.current!=null&&this.$2.current.showPopover(!0)};d.hideMenu=function(){this.$1||h(0,1744),this.$2.current!=null&&this.$2.current.hidePopover()};return c}(j.Component);c.propTypes={config:b("prop-types").object.isRequired,alignh:b("prop-types").oneOf(["left","center","right"]),name:b("prop-types").string,overlappingborder:b("prop-types").bool,onChange:b("prop-types").func,disabled:b("prop-types").bool,maxheight:b("prop-types").number,multiple:b("prop-types").bool,defaultLabel:b("prop-types").string,defaultValue:a,value:a,initialValue:a,onReturnWithoutFocusedItem:b("prop-types").func,onHide:b("prop-types").func,onShow:b("prop-types").func};e.exports=c}),null);
__d("Selector.react",["AbstractSelector.react","PopoverButton.react","ReactMenu","react"],(function(a,b,c,d,e,f,g){var h=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a={button:h.jsx(c("PopoverButton.react"),{rel:"toggle",suppressed:this.props.suppressed}),menu:h.jsx(c("ReactMenu").SelectableMenu,{})};return h.jsx(c("AbstractSelector.react"),babelHelpers["extends"]({},this.props,{overlappingborder:!0,config:a,children:this.props.children}))};return b}(h.Component);a.Option=c("ReactMenu").SelectableItem;g["default"]=a}),98);
__d("XUIButton.react",["cx","AbstractButton.react","XUISpinner.react","joinClasses","prop-types","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");a="medium";b=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.buttonRef=i.createRef(),b)||babelHelpers.assertThisInitialized(c)}var d=b.prototype;d.focus=function(){this.buttonRef.current!=null&&this.buttonRef.current.focus()};d.render=function(){var a=this.props,b=a.borderShade,d=a.loading,e=a.size,f=a.suppressed,g=a.use;a=babelHelpers.objectWithoutPropertiesLoose(a,["borderShade","loading","size","suppressed","use"]);e="_4jy0"+(e==="small"?" _517i":"")+(e==="medium"?" _4jy3":"")+(e==="large"?" _4jy4":"")+(e==="xlarge"?" _4jy5":"")+(e==="xxlarge"?" _4jy6":"")+(g==="default"?" _517h":"")+(g==="confirm"?" _4jy1":"")+(g==="special"?" _4jy2":"")+(g==="caution"?" _9w8q":"")+(b==="light"?" _51sy":"")+(b==="dark"?" _9c6":"")+(f?" _59pe":"")+(g==="confirm"||g==="special"||g==="caution"?" selected":"");return i.jsx(c("AbstractButton.react"),babelHelpers["extends"]({},a,{label:d?i.jsx(c("XUISpinner.react"),{}):this.props.label,className:c("joinClasses")(this.props.className,e),ref:this.buttonRef,disabled:!!this.props.disabled}))};return b}(i.Component);b.defaultProps={use:"default",size:a,borderShade:"light",suppressed:!1};b.propTypes={use:c("prop-types").oneOf(["default","special","confirm","caution"]),size:c("prop-types").oneOf(["small","medium","large","xlarge","xxlarge"]),borderShade:c("prop-types").oneOf(["light","dark"]),suppressed:c("prop-types").bool,disabled:c("prop-types").bool};g["default"]=b}),98);
__d("LayoutColumn.react",["cx","joinClasses","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");function a(a,b){var d=a.className,e=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);return i.jsx("div",babelHelpers["extends"]({ref:b},a,{className:c("joinClasses")(d,"_4bl7"),children:e}))}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("LayoutFillColumn.react",["cx","joinClasses","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");function a(a,b){var d=a.className,e=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);return i.jsx("div",babelHelpers["extends"]({ref:b},a,{className:c("joinClasses")(d,"_4bl9"),children:e}))}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("Layout.react",["cx","LayoutColumn.react","LayoutFillColumn.react","joinClasses","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=!1,d=!1,e=this.props,f=e.children,g=e.className;e=babelHelpers.objectWithoutPropertiesLoose(e,["children","className"]);i.Children.forEach(f,function(c){if(!c)return;c.type===b.FillColumn?d=!0:d&&(a=!0)});return i.jsx("div",babelHelpers["extends"]({},e,{className:c("joinClasses")(g,a?"_5aj7":"clearfix _ikh"),children:f}))};return b}(i.Component);a.Column=c("LayoutColumn.react");a.FillColumn=c("LayoutFillColumn.react");g["default"]=a}),98);
__d("XVideoPlaybackExperienceReportController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/videos/playback_report/",{video_id:{type:"FBID",required:!0},issue_type:{type:"String",required:!0},is_live:{type:"Int"},playback_timestamp:{type:"Int"}})}),null);
__d("VideoSettingsMenu.react",["cx","fbt","ix","AsyncRequest","BUISwitch.react","ClickableAreaButton.react","CurrentEnvironment","Image.react","Layout.react","Link.react","MessengerEnvironment","Selector.react","URI","VideoPlayerShakaPerformanceLogger","XUIButton.react","XVideoPlaybackExperienceReportController","isFacebookURI","prop-types","react","shallowCompare"],(function(a,b,c,d,e,f,g,h,i,j){var k=d("react"),l=/(instagram)/g;function m(a){return{currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:!1}}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state=m(c.props),b)||babelHelpers.assertThisInitialized(c)}var d=b.prototype;d.shouldComponentUpdate=function(a,b){return c("shallowCompare")(this,a,b)};d.createMenuItem=function(a,b,c,d,e,f){f===void 0&&(f=!1);var g=function(){};b&&(g=function(a){d(),a.preventDefault()});var h="_2iw4"+(b?"":" _4t7o"),i;if(e==="checkBox"){var j=null;b&&c&&(j=k.jsx("div",{className:"_2iw1"}));i=k.jsx("div",{className:"_2iw3",children:j})}else if(e==="radioButton"){j=null;b&&c&&(j=k.jsx("div",{className:"_4t7r"}));i=k.jsx("div",{className:"_4t7u",children:j})}j=a;f&&(j=k.jsxs("div",{children:[a.toString().slice(0,-1),k.jsx("div",{className:"_4t7w"})]}));return k.jsxs("a",{href:"#",className:h,onClick:g,tabIndex:this.props.tabIndex,"aria-checked":c?"true":"false",role:e==="radioButton"?"radio":"checkbox","aria-disabled":!b,children:[i,k.jsx("div",{className:"_2iw5"+(c?"":" _4t8e"),children:j})]},a)};d.$1=function(){var a=this.props,b=a.hasCaptions,d=a.areCaptionsActive;a=a.areCaptionsAutogenerated;if(!b)return null;b=i._(/*FBT_CALL*/"Captions"/*FBT_CALL*/);var e="_1x4f";a&&(b=i._(/*FBT_CALL*/"Auto-Generated Captions"/*FBT_CALL*/),e="_1x4f _6m2q");return k.jsxs(c("Layout.react"),{"aria-checked":d,className:"_2iw4 _1x4e",children:[k.jsx(c("Layout.react").FillColumn,{children:b}),k.jsx(c("Layout.react").Column,{children:k.jsx("div",{className:e,children:k.jsx(c("BUISwitch.react"),{animate:!0,showLabel:!0,value:d,onToggle:this.props.onToggleCaptions,tabIndex:this.props.tabIndex})})})]})};d.showQualitySelector=function(){return this.props.showQualitySelector===!0&&this.props.streamingFormat==="dash"&&this.props.availableQualities!=null&&this.props.availableQualities.length>=this.props.qualitySelectorMinStreams&&this.props.availableQualities.every(function(a){return!!a})};d.$2=function(){var a=this;return k.jsx(c("Link.react"),{"aria-label":"Back",role:"button",onClick:function(){return a.setState({currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:!1})},children:k.jsx(c("Image.react"),{className:"_4t8f",src:j("480579")})})};d.$3=function(){var a=i._(/*FBT_CALL*/"More Video Settings"/*FBT_CALL*/),b=new(c("URI"))("/settings/?tab=videos"),d=b.getQualifiedURI().getSubdomain();(d==="business"||d==="partners"||d==="developers"||d==="ai"||d==="sparkar"||d==="portal")&&b.setSubdomain("www");c("isFacebookURI")(b)||b.setDomain(b.getDomain().replace(l,"facebook"));c("MessengerEnvironment").messengerui&&b.setDomain(c("CurrentEnvironment").workplacedotcom?"workplace.com":"facebook.com").setSubdomain(d).setProtocol("https");return k.jsx("a",{href:b,target:"_blank",className:"_4t9q _2iw4",tabIndex:this.props.tabIndex,children:a})};d.$4=function(){var a=this;return k.jsxs(c("Selector.react"),{name:"feedback_selector",onChange:function(b){a.setState({currentFeedbackSelected:b.value?b.value:null})},defaultValue:0,children:[k.jsx(c("Selector.react").Option,{value:0,children:i._(/*FBT_CALL*/"What's wrong with this video?"/*FBT_CALL*/)}),k.jsx(c("Selector.react").Option,{value:"audio_video_sync",children:i._(/*FBT_CALL*/"Video and audio are out of sync"/*FBT_CALL*/)}),k.jsx(c("Selector.react").Option,{value:"video_only_stutter",children:i._(/*FBT_CALL*/"Video is choppy"/*FBT_CALL*/)}),k.jsx(c("Selector.react").Option,{value:"audio_video_stutter",children:i._(/*FBT_CALL*/"Video and audio are choppy"/*FBT_CALL*/)}),k.jsx(c("Selector.react").Option,{value:"black_screen",children:i._(/*FBT_CALL*/"Screen is black"/*FBT_CALL*/)}),k.jsx(c("Selector.react").Option,{value:"video_wont_play",children:i._(/*FBT_CALL*/"Video won't play"/*FBT_CALL*/)})]})};d.$5=function(){if(this.state.currentFeedbackSelected!=null&&this.state.currentFeedbackSelected!==""){var a=c("XVideoPlaybackExperienceReportController").getURIBuilder().setString("issue_type",this.state.currentFeedbackSelected).setFBID("video_id",this.props.videoID).setInt("is_live",this.props.isLive?1:0).getURI();new(c("AsyncRequest"))(a).send();this.setState({feedbackSubmitted:!0});c("VideoPlayerShakaPerformanceLogger").setVideoPlaybackExperienceIssue(this.state.currentFeedbackSelected)}};d.render=function(){var a=this,b=null,d=null,e=null,f=null,g=this.props.availableQualities;this.showQualitySelector()&&g!=null?(b=g.map(function(b){return a.createMenuItem(b,!0,b===a.props.preferredQuality,function(){var c=a.props.onSelectQuality;c&&c(b)},"radioButton",a.props.isSphericalVideo)}),b.push(this.createMenuItem(i._(/*FBT_CALL*/"Auto"/*FBT_CALL*/),this.props.canAutoSelectVideoQuality===!0,this.props.preferredQuality===null,function(){var b=a.props.onSelectQuality;b&&b(null)},"radioButton")),b.reverse(),d=k.jsx(c("ClickableAreaButton.react"),{onClick:function(){return a.setState({currentMenuContext:"quality"})},label:"Change Quality",children:k.jsx("div",{"data-testid":void 0,className:"_2iw4 _4t9t",children:k.jsxs(c("Layout.react"),{children:[k.jsx(c("Layout.react").FillColumn,{children:i._(/*FBT_CALL*/"Quality"/*FBT_CALL*/)}),k.jsxs(c("Layout.react").Column,{className:"_4t9u",children:[this.props.preferredQuality===null?k.jsxs(k.Fragment,{children:[i._(/*FBT_CALL*/"Auto"/*FBT_CALL*/),this.props.selectedQuality!=null?k.jsxs(k.Fragment,{children:[" ",k.jsx("span",{children:this.props.selectedQuality})]}):null]}):k.jsx("span",{children:this.props.preferredQuality}),k.jsx(c("Image.react"),{className:"_4t9v",src:j("480587")})]})]})})})):f=this.createMenuItem(i._(/*FBT_CALL*/"HD"/*FBT_CALL*/),this.props.hasHD,this.props.isHD,this.props.onToggleHD,"checkBox");e=k.jsx(c("Link.react"),{onClick:function(){return a.setState({currentMenuContext:"feedback"})},className:"_2iw4 _4t9w",children:k.jsxs(c("Layout.react"),{children:[k.jsx(c("Layout.react").FillColumn,{children:i._(/*FBT_CALL*/"Report Video Issue"/*FBT_CALL*/)}),k.jsx(c("Layout.react").Column,{className:"_4t9u",children:k.jsx(c("Image.react"),{className:"_4t9v",src:j("480587")})})]})});g=null;switch(this.state.currentMenuContext){case"main":g=k.jsxs("div",{className:"_2i_x",children:[f,this.$1(),d,this.$3(),e]});break;case"quality":g=k.jsxs("div",{className:"_2i_x",children:[k.jsxs("div",{className:"_4t9q",children:[this.$2(),i._(/*FBT_CALL*/"Quality"/*FBT_CALL*/)]}),k.jsx("div",{"data-testid":void 0,className:"_4t9z",role:"radiogroup",children:b})]});break;case"feedback":g=k.jsxs("div",{className:"_2i_x",children:[k.jsxs("div",{className:"_4t9q",children:[this.$2(),i._(/*FBT_CALL*/"Report Video Issue"/*FBT_CALL*/)]}),k.jsxs("div",{className:"_4t9z",children:[this.state.feedbackSubmitted?null:this.$4(),this.state.feedbackSubmitted?k.jsx("div",{className:"_4t9-",children:i._(/*FBT_CALL*/"Thanks for your feedback!"/*FBT_CALL*/)}):k.jsx("div",{className:"_4ta3",children:k.jsx(c("XUIButton.react"),{disabled:!(this.state.currentFeedbackSelected!=null&&this.state.currentFeedbackSelected!==""),label:i._(/*FBT_CALL*/"Submit"/*FBT_CALL*/),use:"confirm",onClick:this.$5.bind(this)})})]})]});break}return k.jsxs("div",{className:"_2i_w",children:[g,k.jsx("div",{className:"_2j03"})]})};return b}(k.Component);a.defaultProps={tabIndex:"-1",availableQualities:null,selectedQuality:null,preferredQuality:null,canAutoSelectVideoQuality:!1,showQualitySelector:!1,qualitySelectorMinStreams:2,streamingFormat:null,onSelectQuality:function(){}};a.propTypes={areCaptionsActive:c("prop-types").bool,areCaptionsAutogenerated:c("prop-types").bool,hasHD:c("prop-types").bool,hasCaptions:c("prop-types").bool,isHD:c("prop-types").bool,isLive:c("prop-types").bool,isSphericalVideo:c("prop-types").bool,onToggleHD:c("prop-types").func,onToggleCaptions:c("prop-types").func,tabIndex:c("prop-types").string,availableQualities:c("prop-types").array,selectedQuality:c("prop-types").string,preferredQuality:c("prop-types").string,canAutoSelectVideoQuality:c("prop-types").bool,onSelectQuality:c("prop-types").func,showQualitySelector:c("prop-types").bool,qualitySelectorMinStreams:c("prop-types").number,streamingFormat:c("prop-types").string};g["default"]=a}),98);
__d("VideoSettingsControl.react",["cx","fbt","ix","AbstractButton.react","ClickableArea.react","Image.react","ODS","TooltipData","TrackingNodes","VideoPlayerExperiments","VideoPlayerQualitiesArray","VideoSettingsMenu.react","prop-types","react","shallowCompare"],(function(a,b,c,d,e,f,g,h,i,j){var k=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isFocus:!1},c.$1=k.createRef(),b)||babelHelpers.assertThisInitialized(c)}var e=b.prototype;e.shouldComponentUpdate=function(a,b){return c("shallowCompare")(this,a,b)};e.onClick=function(){!this.state.isFocus&&!this.props.disabled&&this.$1.current&&this.$1.current.showQualitySelector()&&d("ODS").bumpEntityKey(2966,"videos","quality_selector.impression"),this.setState(function(a){return{isFocus:!a.isFocus}}),this.props.onSettingsClick&&this.props.onSettingsClick()};e.getHDIndicator=function(){var a=c("VideoPlayerExperiments").showHDIndicator===!0&&!this.props.isInline&&this.props.preferredQuality===null?d("VideoPlayerQualitiesArray").isVideoQualityTypicallyConsideredHD(this.props.selectedQuality):d("VideoPlayerQualitiesArray").isVideoQualityTypicallyConsideredHD(this.props.preferredQuality);if(!a)return null;d("VideoPlayerQualitiesArray").isVideoQualityTypicallyConsideredHD4K(this.props.selectedQuality)?a="4K":a="HD";return k.jsx("span",{className:"_132c",children:a})};e.render=function(){var a=k.jsx(c("Image.react"),{className:"_rwt",src:j("391244")}),b=i._(/*FBT_CALL*/"Additional Visual Settings"/*FBT_CALL*/),e=null;!this.props.disabled&&this.state.isFocus&&(e=k.jsx("div",{className:"_2iw7"+(this.state.isFocus?" _2iw8":""),children:k.jsx(c("VideoSettingsMenu.react"),{areCaptionsActive:this.props.areCaptionsActive,areCaptionsAutogenerated:this.props.areCaptionsAutogenerated,hasHD:this.props.hasHD,hasCaptions:this.props.hasCaptions,isHD:this.props.isHD,isLive:this.props.isLive,isSphericalVideo:this.props.isSphericalVideo,onToggleHD:this.props.onToggleHD,onToggleCaptions:this.props.onToggleCaptions,tabIndex:this.props.tabIndex,availableQualities:this.props.availableQualities,selectedQuality:this.props.selectedQuality,preferredQuality:this.props.preferredQuality,canAutoSelectVideoQuality:this.props.canAutoSelectVideoQuality,onSelectQuality:this.props.onSelectQuality,showQualitySelector:this.props.showQualitySelector,qualitySelectorMinStreams:this.props.qualitySelectorMinStreams,streamingFormat:this.props.streamingFormat,videoID:this.props.videoID,ref:this.$1})}));var f=this.getHDIndicator(),g="_zbd"+(this.props.disabled?" _132h":""),h=i._(/*FBT_CALL*/"Settings"/*FBT_CALL*/);g=k.jsx(c("AbstractButton.react"),{className:g,disabled:this.props.disabled,image:a,label:b,labelIsHidden:!0,ref:"button",tabIndex:this.props.tabIndex,type:"button"});a=c("TrackingNodes").getTrackingInfo(c("TrackingNodes").types.VIDEO_SETTINGS);return k.jsxs("div",{className:"_2j04","data-ft":a,children:[e,k.jsx(c("ClickableArea.react"),babelHelpers["extends"]({},d("TooltipData").propsFor(h,"above"),{onClick:this.onClick.bind(this),children:k.jsxs("div",{"data-testid":void 0,children:[g,f]})}))]})};return b}(k.Component);a.defaultProps={tabIndex:"-1"};a.propTypes={disabled:c("prop-types").bool,hasHD:c("prop-types").bool,hasCaptions:c("prop-types").bool,isHD:c("prop-types").bool,isInline:c("prop-types").bool,isLive:c("prop-types").bool,isSphericalVideo:c("prop-types").bool,areCaptionsActive:c("prop-types").bool,areCaptionsAutogenerated:c("prop-types").bool,onToggleHD:c("prop-types").func,onToggleCaptions:c("prop-types").func,tabIndex:c("prop-types").string,availableQualities:c("prop-types").array,selectedQuality:c("prop-types").string,canAutoSelectVideoQuality:c("prop-types").bool,onSelectQuality:c("prop-types").func,showQualitySelector:c("prop-types").bool,qualitySelectorMinStreams:c("prop-types").number,streamingFormat:c("prop-types").string};g["default"]=a}),98);