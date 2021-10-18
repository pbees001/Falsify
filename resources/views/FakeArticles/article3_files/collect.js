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

if ("undefined" === typeof(_etmc)) {
  var _etmc = [];
}

if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

var _etmc_temp = _etmc;
var _etmc = {

  debug: false,

  setup: function(array) {
    var l = array.length;
    for (var i = 0; i < l; i++) {
      this.callFunc(array[i]);
    }
  },

  push: function(item) {
    if (this.tracking_disabled) return;
    this.callFunc(item);
  },

  callFunc: function(array) {
    func_name = array[0];
    args = array.slice(1,3);
    this[func_name](args);
  },

  setOrgId: function(args) {
    if(Array.isArray(args[0]) === true) {
      this.org_id = args[0];
    } else {
      this.org_id = [ args[0] ];
    }
  },

  setUserInfo: function(args) {
    var user_info = args[0];
    if(this.user_info && this.user_info.email) {
      user_info.email = this.user_info.email;
    }
    this.user_info = user_info;
  },

  setFirstParty: function(args) {
    this.first_party = args[0];
  },

  setInsecure: function(args) {
    this.insecure = args[0];
  },

  doNotTrack: function() {
    this.tracking_disabled = true;
  },

  setConversionTrackingInfoFromUrl: function() {
    this.email_job_id = this.getURLParameter("sfmc_j") || this.getURLParameter("j");
    this.email = this.getURLParameter("sfmc_e") || this.getURLParameter("e");
    if (this.email != null) {
      if (this.user_info) {
        this.user_info.email = this.email;
      } else {
        this.user_info = { "email" : this.email };
      }
    }
    this.email_list_id = this.getURLParameter("sfmc_l") || this.getURLParameter("l");
    this.email_landing_url_id = this.getURLParameter("sfmc_u") || this.getURLParameter("u");
    this.email_job_batch_id = this.getURLParameter("sfmc_jb") || this.getURLParameter("jb");
    this.email_subscriber_id = this.getURLParameter("sfmc_s") || this.getURLParameter("s") || this.getURLParameter("sfmc_sub");
    this.mid = this.getURLParameter("sfmc_mid") || this.getURLParameter("mid");
  },

  isEtConversionTracking: function() {
    return (
      this.email_job_id != null &&
     (this.email != null || this.email_subscriber_id != null) &&
      this.email_list_id != null &&
      this.email_landing_url_id != null &&
      this.email_job_batch_id != null &&
      this.mid != null
    );
  },

  getCurrentLocation: function() {
    return window.location.href;
  },

  trackPageView: function(args) {
    this.setConversionTrackingInfoFromUrl();
    var pageView = args[0] || {};
    if (this.org_id) {
      pageView.title = pageView.title || document.title;
      pageView.url = pageView.url || this.getCurrentLocation();
      pageView.referrer = document.referrer;
      if (this.isEtConversionTracking()) {
        pageView.et_email                = {};
        pageView.et_email.job_id         = this.email_job_id;
        pageView.et_email.list_id        = this.email_list_id.replace(/\D+/, '');
        pageView.et_email.landing_url_id = this.email_landing_url_id;
        pageView.et_email.job_batch_id   = this.email_job_batch_id;
        pageView.et_email.subscriber_id  = this.email_subscriber_id;
        pageView.et_email.mid            = this.mid;
      }
      this.sendDataWithImage("track_page_view", pageView);
    }
  },

  trackCart: function(args) {
    var cart = args[0] || {};
    if (this.org_id) {
      var cartInfo = this.standardizeCart(cart);
      if ("clear_cart" in cart) {
        cartInfo.clear_cart = cart.clear_cart;
      }
      cartInfo.url = this.getCurrentLocation();
      this.sendDataWithImage("track_cart", cartInfo);
    }
  },

  trackConversion: function(args) {
    var cart = args[0] || [];
    var opts = args[1];
    if (this.org_id) {
      var cartInfo = this.standardizeCart(cart);
      if (cart["details"]) {
        cartInfo.details = cart["details"];
      } else if (opts) {
        if ("details" in opts) {
          cartInfo.details = opts.details;
        }
        if ("currency_code" in opts) {
          cartInfo.currency_code = opts.currency_code;
        }
      }
      cartInfo.url = this.getCurrentLocation();
      this.sendDataWithImage("track_conversion", cartInfo);
    }
  },

  trackEvent: function(args) {
    var customEvent = args[0] || {};
    var customName = customEvent.name;
    var newEvent = {};
    if (this.org_id) {
      if (customName !== null) {
        newEvent.event_name = customName;
        if (customEvent.details) {
          newEvent.details = customEvent.details;
        }
        this.sendDataWithImage("track_event", newEvent);
      }
    }
  },

  trackWishlist: function(args) {
    var wishlist = args[0] || [];
    if (this.org_id) {
      if (wishlist != []) {
        this.sendDataWithImage("track_wishlist", wishlist);
      }
    }
  },

  trackRating: function(args){
    var rating = args[0] || {};
    if (this.org_id){
      if (rating.rating != null) {
        this.sendDataWithImage("track_rating", rating);
      }
    }
  },

  sendDataWithImage: function(endpoint, args) {
    if (this.user_info) {
      args.user_info = this.user_info;
    }
    if (this.org_id.length > 1) {
      temp_org_id = [this.org_id.shift()];
      args.child_ids = this.org_id;
      this.org_id = temp_org_id;
    }

    var collectData = encodeURIComponent(JSON.stringify(args));
    var protocolPrepend = 'https';
    if (this.insecure === true && document.location.protocol === 'http:') protocolPrepend = 'http';
    if (this.first_party) {
      collect_url = this.first_party;
    } else {
      collect_url = 'nova.collect.igodigital.com';
    }

    var image_src = protocolPrepend + '://' + collect_url + '/c2/' + this.org_id + '/' + endpoint +'?payload=' + collectData;
    var image_tag = document.createElement('img');
    image_tag.src = image_src;
    image_tag.style.display = 'none';
    image_tag.width = '0';
    image_tag.height = '0';
    image_tag.title = 'blank image';
    image_tag.alt = '';
    image_tag.setAttribute('aria-hidden', 'true');

    if (this.debug) {
      console.log(args);
      console.log(image_tag.outerHTML);
    } else {
      var etmc_element = document.createElement('div');
      etmc_element.style.display = "none";
      etmc_element.innerHTML = image_tag.outerHTML;
      document.body.appendChild(etmc_element);
    }
  },

  standardizeCart: function(cart){
    var cartInfo = {};
    if (Array.isArray(cart) === true) {
      cartInfo = { "cart": cart };
    } else if ("cart" in cart) {
      cartInfo = cart;
    } else if ("item" in cart) {
      cartInfo = { "cart": [cart] };
    }
    return cartInfo;
  },

  updateItem: function(args) {
    var rec_items = args[0];
    if (rec_items !== null) {
      var items_to_update = null;

      if (!Array.isArray(rec_items)) {
        rec_items = [rec_items];
      }

      var valid_items = [];

      for (var i in rec_items) {
        if (rec_items.hasOwnProperty(i)) {
          this.setDefaultItemValues(rec_items[i]);
          if (this.hasRequiredFields(rec_items[i])) {
            valid_items.push(rec_items[i]);
          } else {
            console.log("ETMC update_rec_item error: required fields were missing from " + JSON.stringify(rec_items[i]));
          }
        }
      }

      if (valid_items.length > 0) {
        items_to_update = valid_items;
      }

      if (items_to_update !== null) {
        this.sendDataWithImage("update_item", items_to_update);
      }
    }
  },

  getURLParameter: function(paramName) {
    var regex = new RegExp('[?|&]' + paramName + '=' + '([^&;]+?)(&|#|;|$)');
    var matches = regex.exec(window.location.search) || [,""];
    var parameterValue = matches[1].replace(/\+/g, '%20');
    return decodeURIComponent(parameterValue) || null;
  },

  hasRequiredFields: function(item) {
    var isValid = item["item"] !== undefined && item["url"] !== undefined;

    if (isValid) {
      var item_type = item["item_type"];
      if (this.shouldValidateName(item_type)) {
        isValid = item["name"] != undefined;
      } else if (item_type === "banner") {
        isValid = item["image_url"] !== undefined &&
          (item["banner_size"] !== undefined || item["location_size"] !== undefined);
      }
    }
    return isValid;
  },

  shouldValidateName: function(item_type) {
    return item_type == undefined || item_type === "product" || item_type === "content" || item_type === "asset";
  },

  setDefaultItemValues: function(item) {
    if (item["item_type"] == undefined){
      item["item_type"] = "content";
    }
    if (item["url"] == undefined) {
      item["url"] = window.location.href;
    }
    if (item["item_type"] !== "banner" && item["item_type"] !== "asset" && item["name"] == undefined) {
      item["name"] = document.title;
    }
  }
};

_etmc.setup(_etmc_temp);


}
/*
     FILE ARCHIVED ON 04:46:58 Oct 07, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:36:20 Oct 17, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 380.178
  exclusion.robots: 0.088
  exclusion.robots.policy: 0.081
  RedisCDXSource: 3.333
  esindex: 0.008
  LoadShardBlock: 303.523 (3)
  PetaboxLoader3.datanode: 98.025 (4)
  CDXLines.iter: 30.569 (3)
  load_resource: 45.372
  PetaboxLoader3.resolve: 35.753
*/