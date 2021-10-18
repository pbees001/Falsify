/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reuters_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _sophi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var _tr_rcom_bootstrap_build_bootstrap_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(126);
/* harmony import */ var _tr_rcom_bootstrap_build_bootstrap_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tr_rcom_bootstrap_build_bootstrap_static__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_queryParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(127);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);
/* harmony import */ var _permutive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(128);
/* harmony import */ var _moat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(129);
/* harmony import */ var _admantx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(130);
/* harmony import */ var _ias__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(131);
/* harmony import */ var _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
/* harmony import */ var _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_shared_utils_remainingArticles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












 // Retrieve global JS config safely

function parseConfigSafely(script) {
  try {
    var config_str = script.getAttribute('data-config');
    return JSON.parse(config_str);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.err(e);
    return null;
  }
}

function whenFusionReady() {
  return new Promise(function (resolve) {
    // eslint-disable-next-line no-negated-condition
    if (document.readyState !== 'loading') {
      resolve();
    } else {
      window.addEventListener('DOMContentLoaded', resolve, false);
    }
  });
}

var config = parseConfigSafely(document.currentScript); // Initialize Bootstrap entry

if (config && !config.ADMIN) {
  // Fire analytics when Fusion in DOM is ready
  whenFusionReady().then(function () {
    Object(_analytics__WEBPACK_IMPORTED_MODULE_1__["default"])(config);
    Object(_sophi__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
  });
  var url = new URL(window.location.href);
  var master_props = Object(_analytics__WEBPACK_IMPORTED_MODULE_1__["getMasterProperties"])();
  var moat_promise = Object(_moat__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var ias_promise = Object(_ias__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var fusion_promise = whenFusionReady();
  window.initBootstrap({
    onetrust_logs: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["getParameterByName"])(_utils_queryParams__WEBPACK_IMPORTED_MODULE_4__["ONETRUST_LOGS"]) || 'false',
    geolocation_mock: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["getParameterByName"])(_utils_queryParams__WEBPACK_IMPORTED_MODULE_4__["ONETRUST_GEOLOCATION_MOCK"]) || 'default',
    onetrust_script_id: config.ONETRUST_SCRIPT_ID
  }, function (onetrust_response) {
    var _Identity$userProfile;

    var require_consent = onetrust_response.require_consent,
        consent = onetrust_response.consent,
        require_gdpr_consent = onetrust_response.require_gdpr_consent,
        gdpr_consent_data = onetrust_response.gdpr_consent_data,
        require_ccpa_consent = onetrust_response.require_ccpa_consent,
        ccpa_consent_data = onetrust_response.ccpa_consent_data;
    var opt_in = require_consent ? consent : true;
    var token = (require_gdpr_consent ? gdpr_consent_data : undefined) || (require_ccpa_consent ? ccpa_consent_data : undefined);
    var consent_given = require_consent && consent;
    var user_id = (_Identity$userProfile = _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_10___default.a.userProfile) === null || _Identity$userProfile === void 0 ? void 0 : _Identity$userProfile.uuid;
    var permutive_promise_wrapper = new Promise(function (res) {
      var runPermutive = function runPermutive() {
        var subscription_type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var subscription_metered_articles_left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        Object(_permutive__WEBPACK_IMPORTED_MODULE_6__["default"])({
          require_consent: require_consent,
          opt_in: opt_in,
          token: token,
          user_id: user_id,
          consent_given: consent_given,
          content: master_props,
          subscription_type: subscription_type,
          subscription_metered_articles_left: subscription_metered_articles_left
        }).then(function (permutive_res) {
          res(permutive_res);
        });
      };

      _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_10___default.a.isLoggedIn().then(function (is_logged_in) {
        if (is_logged_in) {
          _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_10___default.a.getUserProfile().then(function (profile) {
            var subscription_type = profile === null || profile === void 0 ? void 0 : profile.type;
            var subscription_metered_articles_left;

            if (window && window.ArcP) {
              try {
                var _window$ArcP = window.ArcP,
                    _facts = _window$ArcP._facts,
                    _rules = _window$ArcP._rules;
                subscription_metered_articles_left = Object(_components_shared_utils_remainingArticles__WEBPACK_IMPORTED_MODULE_11__["default"])(_facts, _rules);
              } catch (error) {
                // eslint-disable-next-line no-console
                console.warn('remainingArticles did not run properly');
              }
            }

            runPermutive(subscription_type, subscription_metered_articles_left);
          });
        } else {
          runPermutive();
        }
      });
    });
    var admantx_promise = fusion_promise.then(function () {
      var _document$querySelect;

      // Only call admantx on article page
      var is_article = ((_document$querySelect = document.querySelector('meta[name="ad:template"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content) === 'article';
      return is_article ? Object(_admantx__WEBPACK_IMPORTED_MODULE_8__["default"])(url.href) : Promise.resolve();
    });
    return Promise.all([permutive_promise_wrapper, admantx_promise, moat_promise, ias_promise]).then(function (responses) {
      var _responses = _slicedToArray(responses, 4),
          permutive_response = _responses[0],
          admantx_response = _responses[1],
          moat_response = _responses[2],
          ias_response = _responses[3];

      var output_response = onetrust_response;
      output_response['permutive'] = permutive_response;
      output_response['admantx'] = admantx_response;
      output_response['moat'] = moat_response;
      output_response['ias'] = ias_response;
      return output_response;
    });
  });
  window.bootstrap.getResults(function (result) {
    // eslint-disable-next-line no-console
    console.log('bootstrap getResults:', result);
    var admantx = result.admantx; // Set GAM

    window.googletag = window.googletag || {
      cmd: []
    };
    window.googletag.cmd.push(function () {
      var _document$querySelect2, _window$Fusion, _window$Fusion$global;

      window.googletag.pubads().enableSingleRequest();
      window.googletag.pubads().enableAsyncRendering();
      window.googletag.pubads().collapseEmptyDivs(true); // Global Ads test targeting

      var adstest = url.searchParams.get('adstest');

      if (adstest) {
        window.googletag.pubads().setTargeting('adstest', adstest);
      }

      var template = (_document$querySelect2 = document.querySelector('meta[name="ad:template"]')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.content;

      if (template) {
        window.googletag.pubads().setTargeting('template', template);
      } // Permutive


      if (window.googletag.pubads().getTargeting('permutive').length === 0) {
        var g = window.localStorage.getItem('_pdfps');
        window.googletag.pubads().setTargeting('permutive', g ? JSON.parse(g) : []);
      } // Admantx


      if (admantx) {
        window.googletag.pubads().setTargeting('admant', admantx); // eslint-disable-next-line no-console

        console.log('GPT SET ADMANTX: ', admantx);
      } // Article targeting


      var global_content = (_window$Fusion = window.Fusion) === null || _window$Fusion === void 0 ? void 0 : (_window$Fusion$global = _window$Fusion.globalContent) === null || _window$Fusion$global === void 0 ? void 0 : _window$Fusion$global.result;

      if ((global_content === null || global_content === void 0 ? void 0 : global_content.type) === 'story') {
        var ad_topics = global_content.taxonomy.ad_topics;

        if (ad_topics && ad_topics.length > 0) {
          window.googletag.pubads().setTargeting('topic', ad_topics);
        }

        var usn = global_content.taxonomy.usn;

        if (usn) {
          window.googletag.pubads().setTargeting('articleID', usn);
        }

        var p_count = global_content.content_elements.length;

        if (p_count >= 0) {
          window.googletag.pubads().setTargeting('p_count', p_count.toString());
        }

        var primary_media_type = global_content.primary_media_type;

        if (primary_media_type) {
          window.googletag.pubads().setTargeting('asset', primary_media_type);
        }
      } // Target a special pixel_distance value for legacy/new site distinction


      window.googletag.pubads().setTargeting('pixel_distance', '111');
    });
  });
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMasterProperties", function() { return getMasterProperties; });
/* harmony import */ var _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _riveted_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var _riveted_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_riveted_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _components_shared_utils_legal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68);
/* harmony import */ var _components_shared_utils_contentType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var _tr_rcom_raptorui_subscription_dist_config_arcAttributesName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70);
/* harmony import */ var _eloqua__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var _permutive_map_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87);
/* harmony import */ var _permutive_map_params__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88);
/* harmony import */ var _utm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89);
/* harmony import */ var _components_shared_utils_remainingArticles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var readProfile = function readProfile(profile, name) {
  var entry = profile.attributes.find(function (x) {
    return x.name === name;
  });
  return entry ? entry.value || '' : '';
};

var getGlobalContent = function getGlobalContent() {
  var _window$Fusion, _window$Fusion$global;

  return ((_window$Fusion = window.Fusion) === null || _window$Fusion === void 0 ? void 0 : (_window$Fusion$global = _window$Fusion.globalContent) === null || _window$Fusion$global === void 0 ? void 0 : _window$Fusion$global.result) || {};
};

var getPageCategory = function getPageCategory() {
  var content = getGlobalContent();
  var contentType = Object(_components_shared_utils_contentType__WEBPACK_IMPORTED_MODULE_4__["getContentType"])(content);

  switch (contentType) {
    // Define for Article Page
    case 'story':
      {
        var _content$taxonomy, _content$taxonomy$ads;

        return (_content$taxonomy = content.taxonomy) === null || _content$taxonomy === void 0 ? void 0 : (_content$taxonomy$ads = _content$taxonomy.ads_primary_section) === null || _content$taxonomy$ads === void 0 ? void 0 : _content$taxonomy$ads.name;
      }

    case 'section':
      {
        var _content$section;

        return (_content$section = content.section) === null || _content$section === void 0 ? void 0 : _content$section.name;
      }

    case 'topic':
      {
        return content.entity;
      }

    default:
      {
        var _window$Fusion2, _window$Fusion2$metas, _window$Fusion2$metas2;

        var page = window.location.pathname.split('/').filter(function (s) {
          return s;
        }).pop();
        var knownPageTypes = ['signup', 'signin', 'subscriptiondetails', 'createaccount', 'tellusmore'];
        return knownPageTypes.includes(page) ? (_window$Fusion2 = window.Fusion) === null || _window$Fusion2 === void 0 ? void 0 : (_window$Fusion2$metas = _window$Fusion2.metas) === null || _window$Fusion2$metas === void 0 ? void 0 : (_window$Fusion2$metas2 = _window$Fusion2$metas.title) === null || _window$Fusion2$metas2 === void 0 ? void 0 : _window$Fusion2$metas2.value : null;
      }
  }
};

var getMasterProperties = function getMasterProperties() {
  function getContentMasterProperties() {
    var content = getGlobalContent();

    switch (content.type) {
      // Define for Article Page
      case 'story':
        {
          var _content$taxonomy2, _content$taxonomy2$ad, _content$taxonomy3, _content$taxonomy3$ad, _content$taxonomy3$ad2, _content$authors, _content$taxonomy4, _content$taxonomy4$ke, _content$taxonomy5, _content$taxonomy6, _content$taxonomy6$ta, _content$related_cont, _content$related_cont2, _content$law_firms, _content$taxonomy7, _content$source, _content$taxonomy8, _content$taxonomy8$n, _content$taxonomy9, _content$taxonomy9$n, _content$companies, _content$authors2;

          var topic_sub_channel = (_content$taxonomy2 = content.taxonomy) === null || _content$taxonomy2 === void 0 ? void 0 : (_content$taxonomy2$ad = _content$taxonomy2.ads_primary_section) === null || _content$taxonomy2$ad === void 0 ? void 0 : _content$taxonomy2$ad.name;
          var topic_channel = ((_content$taxonomy3 = content.taxonomy) === null || _content$taxonomy3 === void 0 ? void 0 : (_content$taxonomy3$ad = _content$taxonomy3.ads_primary_section) === null || _content$taxonomy3$ad === void 0 ? void 0 : (_content$taxonomy3$ad2 = _content$taxonomy3$ad.parent) === null || _content$taxonomy3$ad2 === void 0 ? void 0 : _content$taxonomy3$ad2.name) || topic_sub_channel;
          var content_channel = topic_channel === topic_sub_channel ? topic_channel : "".concat(topic_channel, " - ").concat(topic_sub_channel);
          var content_author = (_content$authors = content.authors) === null || _content$authors === void 0 ? void 0 : _content$authors.map(function (author) {
            return author.byline;
          }).join(',');
          var keywords = (_content$taxonomy4 = content.taxonomy) === null || _content$taxonomy4 === void 0 ? void 0 : (_content$taxonomy4$ke = _content$taxonomy4.keywords) === null || _content$taxonomy4$ke === void 0 ? void 0 : _content$taxonomy4$ke.join(','); // Original USK/USN ID of the article from Wire API

          var article_derived_from_id = (_content$taxonomy5 = content.taxonomy) === null || _content$taxonomy5 === void 0 ? void 0 : _content$taxonomy5.usn; // ID of article excluding the domain
          // Ex - if full ID is USKBN1XA18X, then the value would just KBN1XA18X
          //const article_no_domain_id = THIS IS BEST TO BE PROCESSED IN CONTENT SOURCE

          var topic_interests = (_content$taxonomy6 = content.taxonomy) === null || _content$taxonomy6 === void 0 ? void 0 : (_content$taxonomy6$ta = _content$taxonomy6.tags) === null || _content$taxonomy6$ta === void 0 ? void 0 : _content$taxonomy6$ta.filter(function (_ref) {
            var description = _ref.description,
                text = _ref.text;
            return ['NRLIN', 'NRLPA'].includes(text.split(':')[0]) && description;
          }).map(function (_ref2) {
            var description = _ref2.description;
            return description;
          }).slice(0, 5).join(',');
          var is_legal_section = Object(_components_shared_utils_legal__WEBPACK_IMPORTED_MODULE_3__["isLegalSection"])(content.section || content.ads_primary_section);

          var myfoo = function myfoo(_ref3) {
            var name = _ref3.name,
                url = _ref3.url;
            return "".concat(name, " - ").concat(url);
          };

          var third_party_content = (_content$related_cont = content.related_content) === null || _content$related_cont === void 0 ? void 0 : (_content$related_cont2 = _content$related_cont.documents) === null || _content$related_cont2 === void 0 ? void 0 : _content$related_cont2.map(myfoo).join(',');
          var topic_law_firm = (_content$law_firms = content.law_firms) === null || _content$law_firms === void 0 ? void 0 : _content$law_firms.map(function (_ref4) {
            var code = _ref4.code,
                name = _ref4.name;
            return "".concat(code, " - ").concat(name);
          }).join(',');

          var _application_product_type = is_legal_section && 'Project Emerald';

          var subscriptionsMeteredArticlesLeft = -1;

          if (window.ArcP) {
            var _window$ArcP = window.ArcP,
                _facts = _window$ArcP._facts,
                _rules = _window$ArcP._rules;
            subscriptionsMeteredArticlesLeft = Object(_components_shared_utils_remainingArticles__WEBPACK_IMPORTED_MODULE_10__["default"])(_facts, _rules);
          }

          return {
            category: 'Article',
            content_type: 'Article',
            content_type_channel: 'Article-News',
            canonical_url: content.canonical_url,
            topic_channel: topic_channel,
            topic_sub_channel: topic_sub_channel,
            content_channel: content_channel,
            keywords: keywords,
            article_asset_type: content.primary_media_type || 'none',
            article_id: content.id,
            article_derived_from_id: article_derived_from_id,
            //article_no_domain_id,
            article_backend_channel: topic_sub_channel,
            article_backend_dartzone: (_content$taxonomy7 = content.taxonomy) === null || _content$taxonomy7 === void 0 ? void 0 : _content$taxonomy7.ad_unit_path,
            article_keyword_slug: content.slug,
            article_word_count: content.word_count,
            article_read_time: content.read_minutes,
            content_title: content.title,
            content_author: content_author,
            content_date: content.published_time,
            content_update: content.updated_time,
            content_source: ((_content$source = content.source) === null || _content$source === void 0 ? void 0 : _content$source.original_name) || 'none',
            article_n2_codes: (_content$taxonomy8 = content.taxonomy) === null || _content$taxonomy8 === void 0 ? void 0 : (_content$taxonomy8$n = _content$taxonomy8.n2) === null || _content$taxonomy8$n === void 0 ? void 0 : _content$taxonomy8$n.map(function (n2) {
              return n2.code;
            }).join(','),
            article_n2_names: (_content$taxonomy9 = content.taxonomy) === null || _content$taxonomy9 === void 0 ? void 0 : (_content$taxonomy9$n = _content$taxonomy9.n2) === null || _content$taxonomy9$n === void 0 ? void 0 : _content$taxonomy9$n.map(function (n2) {
              return n2.name;
            }).join(','),
            topic_interests: topic_interests,
            topic_company: (_content$companies = content.companies) === null || _content$companies === void 0 ? void 0 : _content$companies.map(function (_ref5) {
              var name = _ref5.name;
              return name;
            }).join(','),
            topic_author: (_content$authors2 = content.authors) === null || _content$authors2 === void 0 ? void 0 : _content$authors2.map(function (_ref6) {
              var byline = _ref6.byline;
              return byline;
            }).join(','),
            third_party_content: third_party_content,
            topic_law_firm: topic_law_firm,
            application_product_type: _application_product_type,
            application_subscription_metered_articles_left: subscriptionsMeteredArticlesLeft
          };
        }

      case 'section':
        {
          var _topic_channel = content.parent ? content.parent.name : content.name;

          var _topic_sub_channel = content.name;

          var _content_channel = _topic_channel === _topic_sub_channel || !_topic_sub_channel ? _topic_channel : "".concat(_topic_channel, "-").concat(_topic_sub_channel);

          var content_type = 'Landing Page';
          var canonical_url = content.id;
          return {
            topic_channel: _topic_channel,
            topic_sub_channel: _topic_sub_channel,
            content_channel: _content_channel,
            content_type: content_type,
            canonical_url: canonical_url
          };
        }

      default:
        {
          var _canonical_url = window.location.href;
          return {
            canonical_url: _canonical_url
          };
        }
    }
  }

  function getPageMetaValue(name) {
    var _document$querySelect;

    return (_document$querySelect = document.querySelector("meta[name=\"".concat(name, "\"]"))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content;
  } // Retrieve user type account


  var profile = _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0___default.a.userProfile;
  var application_subscription_type = 'Anonymous';

  if (profile) {
    application_subscription_type = readProfile(profile, _tr_rcom_raptorui_subscription_dist_config_arcAttributesName__WEBPACK_IMPORTED_MODULE_5__["ArcAttributesName"].subscription_level);
  } // Retrieve page/template-level analytics values


  var application_page_layout = getPageMetaValue('analytics:page_layout');
  var application_ad_layout = getPageMetaValue('analytics:ad_layout');
  var application_product_type = getPageMetaValue('analytics:product_type');
  var platform = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isMobile"])() ? 'Mobile' : 'Desktop';
  return Object.assign(getContentMasterProperties(), {
    site_type: 'Rcom2021',
    edition: 'U.S.',
    platform: platform,
    ad_blocked: '0',
    application_page_layout: application_page_layout,
    application_ad_layout: application_ad_layout,
    application_product_type: application_product_type,
    application_subscription_type: application_subscription_type
  });
};

var init = function init(_ref7) {
  var SEGMENT_WRITE_KEY = _ref7.SEGMENT_WRITE_KEY,
      SEGMENT_WRITE_KEY_MOBILE = _ref7.SEGMENT_WRITE_KEY_MOBILE,
      API_ORIGIN = _ref7.API_ORIGIN;
  // Load segment CDN script and load with environment-based write-key
  !function () {
    //eslint-disable-line no-unused-expressions
    var analytics = window.analytics = window.analytics || []; //eslint-disable-line no-multi-assign

    if (!analytics.initialize) {
      if (analytics.invoked) {
        // eslint-disable-next-line no-console,no-unused-expressions
        window.console && console.error && console.error('Segment snippet included twice.');
      } else {
        analytics.invoked = !0;
        analytics.methods = ['trackSubmit', 'trackClick', 'trackLink', 'trackForm', 'pageview', 'identify', 'reset', 'group', 'track', 'ready', 'alias', 'debug', 'page', 'once', 'off', 'on', 'addSourceMiddleware', 'addIntegrationMiddleware', 'setAnonymousId', 'addDestinationMiddleware'];

        analytics.factory = function (t) {
          return function () {
            var e = Array.prototype.slice.call(arguments); //eslint-disable-line prefer-rest-params

            e.unshift(t);
            analytics.push(e);
            return analytics;
          };
        };

        for (var t = 0; t < analytics.methods.length; t++) {
          var e = analytics.methods[t];
          analytics[e] = analytics.factory(e);
        }

        analytics.load = function (t, e) {
          var n = document.createElement('script');
          n.type = 'text/javascript';
          n.async = !0;
          n.src = 'https://cdn.segment.com/analytics.js/v1/' + t + '/analytics.min.js';
          var a = document.getElementsByTagName('script')[0];
          a.parentNode.insertBefore(n, a);
          analytics._loadOptions = e;
        };

        analytics.SNIPPET_VERSION = '4.1.0';
        analytics.load(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isMobile"])() ? SEGMENT_WRITE_KEY_MOBILE : SEGMENT_WRITE_KEY);
      }
    }
  }(); //analytics.debug();
  // Initialize Raptor Analytics and map Segment event callbacks

  window.rpta = window.rpta || {
    cmd: []
  };
  window.rpta.cmd.push(function () {
    window.rpta.init({
      onTrackPageView: function onTrackPageView(category, props) {
        window.analytics.page(category, props);
      },
      onTrackIdentity: function onTrackIdentity(opt_user_id, props) {
        if (opt_user_id) {
          window.analytics.identify(opt_user_id, props);
        } else {
          window.analytics.identify(props);
        }
      },
      onTrackEvent: function onTrackEvent(event, props) {
        window.analytics.track(event, props);
      },
      debug: true
    });
    var page_category = getPageCategory();

    if (page_category) {
      window.rpta.trackPageView(page_category, {
        page_view_type: 'Page Load',
        pageView: '1'
      });
      window.freestar = window.freestar || {
        queue: []
      };
      window.freestar.queue.push(function () {
        window.freestar.trackPageview();
      });
    }

    window.rpta.trackIdentity();
  });
  _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0___default.a.options({
    apiOrigin: API_ORIGIN
  });
  window.identity = _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0___default.a; // TODO remove once tested
  // Add a middleware to define master properties
  // https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/middleware/

  window.analytics.addSourceMiddleware(function (params) {
    var payload = params.payload,
        next = params.next;
    var master_properties = getMasterProperties();
    var properties = payload.obj.properties;
    payload.obj.properties = Object.assign({}, master_properties, properties);
    next(payload);
  }); // Add a "identify" middleware to feed in page-level contextual identity information

  window.analytics.addSourceMiddleware(function (params) {
    var payload = params.payload,
        next = params.next;
    var is_authentication_track = payload.type() === 'track' && payload.obj.event === 'application.authentication';
    var is_identify = payload.type() === 'identify';

    if (is_authentication_track || is_identify) {
      Promise.all([Object(_eloqua__WEBPACK_IMPORTED_MODULE_6__["getCustomerGuid"])(), Object(_utm__WEBPACK_IMPORTED_MODULE_9__["retrieveUTM"])()]).then(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
            elqCustomerGUID = _ref9[0],
            utm = _ref9[1];

        var subscriptionsMeteredArticlesLeft; // Get the remaing articles for article pages

        var content = getGlobalContent();

        if (content && content.type === 'story') {
          if (window.ArcP) {
            var _window$ArcP2 = window.ArcP,
                _facts = _window$ArcP2._facts,
                _rules = _window$ArcP2._rules;
            subscriptionsMeteredArticlesLeft = Object(_components_shared_utils_remainingArticles__WEBPACK_IMPORTED_MODULE_10__["default"])(_facts, _rules);
          }
        }

        var extra_props = _objectSpread(_objectSpread({
          elqCustomerGUID: elqCustomerGUID
        }, utm), {}, {
          application_subscription_metered_articles_left: subscriptionsMeteredArticlesLeft || -1
        });

        var profile = _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0___default.a.userProfile;

        if (profile) {
          var status = profile.status,
              first_name = profile.firstName,
              last_name = profile.lastName,
              email = profile.email,
              uuid = profile.uuid;
          var industry = readProfile(profile, _tr_rcom_raptorui_subscription_dist_config_arcAttributesName__WEBPACK_IMPORTED_MODULE_5__["ArcAttributesName"].industry);
          var job_level = readProfile(profile, _tr_rcom_raptorui_subscription_dist_config_arcAttributesName__WEBPACK_IMPORTED_MODULE_5__["ArcAttributesName"].job_level);
          var country = readProfile(profile, _tr_rcom_raptorui_subscription_dist_config_arcAttributesName__WEBPACK_IMPORTED_MODULE_5__["ArcAttributesName"].country);
          var job_role = readProfile(profile, _tr_rcom_raptorui_subscription_dist_config_arcAttributesName__WEBPACK_IMPORTED_MODULE_5__["ArcAttributesName"].job_role_and_area);
          var contact_type = readProfile(profile, _tr_rcom_raptorui_subscription_dist_config_arcAttributesName__WEBPACK_IMPORTED_MODULE_5__["ArcAttributesName"].org_type) === 'TR-Legal-Organization' ? 'reuters-legal' : 'reuters-individual';
          var newsletter = readProfile(profile, _tr_rcom_raptorui_subscription_dist_config_arcAttributesName__WEBPACK_IMPORTED_MODULE_5__["ArcAttributesName"].newsletter_subscription) === 'true';
          var opt_in = readProfile(profile, _tr_rcom_raptorui_subscription_dist_config_arcAttributesName__WEBPACK_IMPORTED_MODULE_5__["ArcAttributesName"].announcements_and_offers) === 'true';
          var daily_docket = readProfile(profile, _tr_rcom_raptorui_subscription_dist_config_arcAttributesName__WEBPACK_IMPORTED_MODULE_5__["ArcAttributesName"].daily_docket) === 'true';
          var subscription_type = readProfile(profile, _tr_rcom_raptorui_subscription_dist_config_arcAttributesName__WEBPACK_IMPORTED_MODULE_5__["ArcAttributesName"].subscription_level);
          Object.assign(extra_props, {
            application_authenticated_status: status,
            application_authenticated_first_name: first_name,
            application_authenticated_last_name: last_name,
            application_authenticated_email: email,
            application_authenticated_job_role: job_role,
            application_authenticated_position: job_level,
            application_authenticated_industry: industry,
            application_authenticated_country: country,
            application_authentication_contact_type: contact_type,
            application_authenticated_newsletter: newsletter,
            application_authentication_opt_in: opt_in,
            application_authentication_daily_docket: daily_docket,
            application_authenticated_user_id: uuid,
            application_subscription_type: subscription_type
          });
        } else {
          Object.assign(extra_props, {
            application_subscription_type: 'Anonymous'
          });
        }

        if (payload.type() === 'identify') {
          Object.assign(payload.obj.traits, extra_props);
        }

        if (payload.type() === 'track') {
          Object.assign(payload.obj.properties, extra_props);
        }

        next(payload);
      });
    } else {
      next(payload);
    }
  });
  window.analytics.addSourceMiddleware(function (params) {
    var payload = params.payload,
        next = params.next;
    var obj = payload.obj;
    var event_name = obj.event;
    var event_data = obj.properties;

    var trackPermutive = function trackPermutive(p_event_name, p_event_params) {
      window.bootstrap = window.bootstrap || {
        queue: []
      };
      window.bootstrap.queue.push(function () {
        window.bootstrap.getResults(function () {
          if (window.permutive) {
            window.permutive.track(p_event_name, p_event_params);
          }
        });
      });
    };

    if (_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["authentication_keys"].includes(event_name)) {
      trackPermutive(_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["analitics_permutive_map"][event_name], Object(_permutive_map_params__WEBPACK_IMPORTED_MODULE_8__["MapAuthentication"])(event_data));
    } else if (_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["impression_keys"].includes(event_name)) {
      trackPermutive(_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["analitics_permutive_map"][event_name], Object(_permutive_map_params__WEBPACK_IMPORTED_MODULE_8__["MapImpression"])(event_data));
    } else if (_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["interstitial_keys"].includes(event_name)) {
      trackPermutive(_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["analitics_permutive_map"][event_name], Object(_permutive_map_params__WEBPACK_IMPORTED_MODULE_8__["MapInterstitial"])(event_data));
    } else if (_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["checkout_keys"].includes(event_name)) {
      trackPermutive(_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["analitics_permutive_map"][event_name], Object(_permutive_map_params__WEBPACK_IMPORTED_MODULE_8__["MapCheckout"])(event_data));
    } else if (_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["identify_keys"].includes(event_name)) {
      trackPermutive(_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["analitics_permutive_map"][event_name], Object(_permutive_map_params__WEBPACK_IMPORTED_MODULE_8__["MapIdentify"])(event_data));
    } else if (_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["r_impression_keys"].includes(event_name)) {
      trackPermutive(_permutive_map_names__WEBPACK_IMPORTED_MODULE_7__["analitics_permutive_map"][event_name], Object(_permutive_map_params__WEBPACK_IMPORTED_MODULE_8__["MapRImpression"])(event_data));
    } else {
      next(payload);
    }

    next(payload);
  }); // Store UTM from web URL

  Object(_utm__WEBPACK_IMPORTED_MODULE_9__["storeUTM"])(); // Drop eloqua first-party cookie and track page view

  Object(_eloqua__WEBPACK_IMPORTED_MODULE_6__["trackPageView"])(); // Initialize riveted
  // Listens for mouse movements, clicks, scrolling, and keyboard activity to define an active user. It also checks whether the tab is currently visible.

  _riveted_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.init({
    reportInterval: 15,
    idleTimeout: 30,
    eventHandler: function eventHandler(data) {
      window.rpta = window.rpta || {
        cmd: []
      };
      window.rpta.cmd.push(function () {
        window.rpta.trackEvent('active.time.spent', {
          active_time_spent_total: data.toString(),
          label: data,
          nonInteraction: 1,
          activeTimeSpent: 1
        });
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
exports.default = identity_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var constants_1 = __webpack_require__(15);
var storage_1 = __webpack_require__(16);
var login_1 = tslib_1.__importStar(__webpack_require__(19));
var logout_1 = tslib_1.__importDefault(__webpack_require__(26));
var requestMagicLink_1 = tslib_1.__importDefault(__webpack_require__(30));
var redeemMagicLink_1 = tslib_1.__importDefault(__webpack_require__(32));
var extendSession_1 = __webpack_require__(34);
var clearSession_1 = tslib_1.__importDefault(__webpack_require__(35));
var options_1 = tslib_1.__importDefault(__webpack_require__(36));
var requestOTALink_1 = tslib_1.__importDefault(__webpack_require__(31));
var redeemOTALink_1 = tslib_1.__importDefault(__webpack_require__(33));
var getUserProfile_1 = tslib_1.__importDefault(__webpack_require__(37));
var updateUserProfile_1 = tslib_1.__importDefault(__webpack_require__(39));
var avatar_1 = __webpack_require__(40);
var signUp_1 = tslib_1.__importDefault(__webpack_require__(41));
var updatePassword_1 = tslib_1.__importDefault(__webpack_require__(42));
var requestResetPassword_1 = tslib_1.__importDefault(__webpack_require__(43));
var resetPassword_1 = tslib_1.__importDefault(__webpack_require__(44));
var requestVerifyEmail_1 = tslib_1.__importDefault(__webpack_require__(45));
var verifyEmail_1 = tslib_1.__importDefault(__webpack_require__(46));
var getConfig_1 = __webpack_require__(23);
var requestDeleteAccount_1 = tslib_1.__importStar(__webpack_require__(47));
var getUserSettings_1 = __webpack_require__(48);
var getThirdPartyTokens_1 = tslib_1.__importDefault(__webpack_require__(49));
var listGdprReports_1 = tslib_1.__importDefault(__webpack_require__(50));
var getGdprReport_1 = tslib_1.__importDefault(__webpack_require__(51));
var initFacebookLogin_1 = tslib_1.__importDefault(__webpack_require__(53));
var initGoogleLogin_1 = tslib_1.__importStar(__webpack_require__(55));
var initAppleSignOn_1 = tslib_1.__importDefault(__webpack_require__(58));
var facebookSignOn_1 = tslib_1.__importDefault(__webpack_require__(59));
var googleSignOn_1 = tslib_1.__importStar(__webpack_require__(56));
var appleSignOn_1 = tslib_1.__importDefault(__webpack_require__(60));
var unlinkSocialIdentity_1 = tslib_1.__importDefault(__webpack_require__(61));
var getSwgAccessToken_1 = tslib_1.__importDefault(__webpack_require__(62));
var checkSwgLogin_1 = tslib_1.__importDefault(__webpack_require__(63));
var relinkGoogleAccount_1 = tslib_1.__importDefault(__webpack_require__(64));
var cookieStorage_1 = tslib_1.__importDefault(__webpack_require__(17));
var Identity = (function () {
    function Identity() {
    }
    Object.defineProperty(Identity, "userIdentity", {
        get: function () {
            if (!this._userIdentity && this._userIdentityStorage) {
                this._userIdentity = JSON.parse(this._userIdentityStorage.getItem(constants_1.IDENTITY_STORAGE_KEY) || '{}');
            }
            return this._userIdentity;
        },
        set: function (v) {
            if (storage_1.shouldStorageChange(this._userIdentityStorage, this._isSession, constants_1.IDENTITY_STORAGE_KEY)) {
                if (this._userIdentityStorage instanceof cookieStorage_1.default) {
                    this._userIdentityStorage.removeItem(constants_1.IDENTITY_STORAGE_KEY);
                }
                this._userIdentityStorage = storage_1.initStorage(this._baseDomain, this._isSession);
            }
            if (!v.uuid && !v.accessToken && !v.refreshToken && !v.impersonator) {
                this._userIdentityStorage.removeItem(constants_1.IDENTITY_STORAGE_KEY);
            }
            this._userIdentityStorage.setItem(constants_1.IDENTITY_STORAGE_KEY, JSON.stringify(v));
            this._userIdentity = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity, "userProfile", {
        get: function () {
            if (!this._userProfile) {
                this._userProfile = JSON.parse(this._selectedStorage.getItem(constants_1.PROFILE_STORAGE_KEY) || null);
            }
            return this._userProfile;
        },
        set: function (u) {
            if (u === null) {
                this._selectedStorage.removeItem(constants_1.PROFILE_STORAGE_KEY);
            }
            if (storage_1.shouldStorageChange(this._selectedStorage, this._isSession, constants_1.PROFILE_STORAGE_KEY)) {
                if (this._selectedStorage instanceof cookieStorage_1.default) {
                    this._selectedStorage.removeItem(constants_1.PROFILE_STORAGE_KEY);
                }
                this._selectedStorage = storage_1.initStorage(this._baseDomain, this._isSession);
            }
            this._selectedStorage.setItem(constants_1.PROFILE_STORAGE_KEY, JSON.stringify(u));
            this._userProfile = u;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity, "configOptions", {
        get: function () {
            return this._configOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity, "userSettings", {
        get: function () {
            if (!this._userSettings && !this._userSettings) {
                this._userSettings = JSON.parse(this._selectedStorage.getItem(constants_1.USER_SETTINGS_STORAGE_KEY) || null);
            }
            return this._userSettings;
        },
        set: function (u) {
            if (u === null) {
                this._selectedStorage.removeItem(constants_1.USER_SETTINGS_STORAGE_KEY);
            }
            this._selectedStorage.setItem(constants_1.USER_SETTINGS_STORAGE_KEY, JSON.stringify(u));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity, "baseDomain", {
        set: function (v) {
            this._userIdentityStorage = storage_1.initStorage(v);
            this._baseDomain = v;
        },
        enumerable: false,
        configurable: true
    });
    Identity._version = __webpack_require__(65).version;
    Identity._userIdentityStorage = storage_1.initStorage();
    Identity._selectedStorage = storage_1.initStorage();
    Identity.apiOrigin = '';
    Identity._baseDomain = '';
    Identity._google = {
        useCustomButton: false
    };
    Identity._useCustomFBButton = false;
    Identity.options = options_1.default;
    Identity.login = login_1.default;
    Identity.isLoggedIn = login_1.isLoggedIn;
    Identity.extendSession = extendSession_1.extendSession;
    Identity.clearSession = clearSession_1.default;
    Identity.heartbeat = extendSession_1.heartbeat;
    Identity.logout = logout_1.default;
    Identity.getUserSettings = getUserSettings_1.getUserSettings;
    Identity.getUserProfile = getUserProfile_1.default;
    Identity.updateUserProfile = updateUserProfile_1.default;
    Identity.uploadAvatar = avatar_1.uploadAvatar;
    Identity.deleteAvatar = avatar_1.deleteAvatar;
    Identity.signUp = signUp_1.default;
    Identity.updatePassword = updatePassword_1.default;
    Identity.requestResetPassword = requestResetPassword_1.default;
    Identity.resetPassword = resetPassword_1.default;
    Identity.requestDeleteAccount = requestDeleteAccount_1.default;
    Identity.approveDeleteAccount = requestDeleteAccount_1.approveDeleteAccount;
    Identity.declineDeleteAccount = requestDeleteAccount_1.declineDeleteAccount;
    Identity.getConfig = getConfig_1.getConfig;
    Identity.initFacebookLogin = initFacebookLogin_1.default;
    Identity.facebookSignOn = facebookSignOn_1.default;
    Identity.initGoogleLogin = initGoogleLogin_1.default;
    Identity.initGoogleAuthSDK = initGoogleLogin_1.initGoogleAuthSDK;
    Identity.initGoogleAuth = initGoogleLogin_1.initGoogleAuth;
    Identity.googleSignOn = googleSignOn_1.default;
    Identity.initAppleSignOn = initAppleSignOn_1.default;
    Identity.appleSignOn = appleSignOn_1.default;
    Identity.requestMagicLink = requestMagicLink_1.default;
    Identity.redeemMagicLink = redeemMagicLink_1.default;
    Identity.requestVerifyEmail = requestVerifyEmail_1.default;
    Identity.verifyEmail = verifyEmail_1.default;
    Identity.listGdprReports = listGdprReports_1.default;
    Identity.getGdprReport = getGdprReport_1.default;
    Identity.getThirdPartyTokens = getThirdPartyTokens_1.default;
    Identity.unlinkSocialIdentity = unlinkSocialIdentity_1.default;
    Identity.requestOTALink = requestOTALink_1.default;
    Identity.redeemOTALink = redeemOTALink_1.default;
    Identity.getSwgAccessToken = getSwgAccessToken_1.default;
    Identity.checkSwgLogin = checkSwgLogin_1.default;
    Identity.relinkGoogleAccount = relinkGoogleAccount_1.default;
    Identity.signOnSwgUser = googleSignOn_1.signOnSwgUser;
    return Identity;
}());
exports.default = Identity;
//# sourceMappingURL=identity.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.logPrefix = exports.headers = exports.USER_SETTINGS_STORAGE_KEY = exports.PROFILE_STORAGE_KEY = exports.IDENTITY_STORAGE_KEY = void 0;
exports.IDENTITY_STORAGE_KEY = 'ArcId.USER_INFO';
exports.PROFILE_STORAGE_KEY = 'ArcId.USER_PROFILE';
exports.USER_SETTINGS_STORAGE_KEY = 'ArcId.USER_SETTINGS';
exports.headers = { 'Content-Type': 'application/json' };
exports.logPrefix = '[Arc Identity SDK]';
//# sourceMappingURL=constants.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldStorageChange = exports.initStorage = void 0;
var tslib_1 = __webpack_require__(13);
var cookieStorage_1 = tslib_1.__importDefault(__webpack_require__(17));
var memoryStorage_1 = tslib_1.__importDefault(__webpack_require__(18));
var constants_1 = __webpack_require__(15);
function initStorage(baseDomain, isSession) {
    if (baseDomain === void 0) { baseDomain = ''; }
    var session = isSession;
    if (typeof window !== 'undefined') {
        var cookieStorage = new cookieStorage_1.default();
        if (baseDomain) {
            var cs = new cookieStorage_1.default(baseDomain, isSession);
            localStorage.removeItem(constants_1.IDENTITY_STORAGE_KEY);
            sessionStorage.removeItem(constants_1.IDENTITY_STORAGE_KEY);
            return cs;
        }
        if (typeof session === 'undefined') {
            if (!!sessionStorage.getItem(constants_1.IDENTITY_STORAGE_KEY) &&
                sessionStorage.getItem(constants_1.IDENTITY_STORAGE_KEY) !== '{}') {
                session = true;
            }
            else if (!!localStorage.getItem(constants_1.IDENTITY_STORAGE_KEY) &&
                localStorage.getItem(constants_1.IDENTITY_STORAGE_KEY) !== '{}') {
                session = false;
            }
            else {
                var cs = new cookieStorage_1.default(baseDomain);
                var data = JSON.parse(cs.getItem(constants_1.IDENTITY_STORAGE_KEY) || '{}');
                if (data && Object.keys(data).length > 0) {
                    session = cs.isSession(constants_1.IDENTITY_STORAGE_KEY);
                }
                else {
                    session = false;
                }
            }
        }
        try {
            var testKey = "ArcId.test";
            if (session) {
                sessionStorage.setItem(testKey, 'testValue');
                sessionStorage.removeItem(testKey);
                localStorage.removeItem(constants_1.IDENTITY_STORAGE_KEY);
                cookieStorage.removeItem(constants_1.IDENTITY_STORAGE_KEY);
                return sessionStorage;
            }
            localStorage.setItem(testKey, 'testValue');
            localStorage.removeItem(testKey);
            sessionStorage.removeItem(constants_1.IDENTITY_STORAGE_KEY);
            cookieStorage.removeItem(constants_1.IDENTITY_STORAGE_KEY);
            return localStorage;
        }
        catch (_) {
            localStorage.removeItem(constants_1.IDENTITY_STORAGE_KEY);
            sessionStorage.removeItem(constants_1.IDENTITY_STORAGE_KEY);
            return new cookieStorage_1.default(baseDomain, session);
        }
    }
    else {
        return new memoryStorage_1.default();
    }
}
exports.initStorage = initStorage;
function shouldStorageChange(selectedStorage, isSession, storageKey) {
    return (!selectedStorage ||
        (selectedStorage instanceof cookieStorage_1.default &&
            selectedStorage.isSession(storageKey) !== isSession) ||
        (selectedStorage === sessionStorage && !isSession) ||
        (selectedStorage === localStorage && isSession));
}
exports.shouldStorageChange = shouldStorageChange;
//# sourceMappingURL=storage.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(15);
var CookieStorage = (function () {
    function CookieStorage(baseDomain, isSession) {
        if (baseDomain === void 0) { baseDomain = ''; }
        this.sessionIndicator = '.session';
        this.length = 1;
        this.baseDomain = baseDomain;
        this.cookieString = isSession ? this.sessionIndicator : '';
        this.doc = document;
    }
    CookieStorage.prototype.isSession = function (key) {
        var sessionKey = "" + key + this.sessionIndicator;
        return (document.cookie.indexOf(sessionKey) >= 0 ||
            this.cookieString.indexOf(this.sessionIndicator) >= 0);
    };
    CookieStorage.prototype.getItem = function (key) {
        if (!key || !this._has(key)) {
            return null;
        }
        var regexpStr = '(?:^|.*;\\s*)' +
            encodeURIComponent("" + key + (this.isSession(key) ? this.sessionIndicator : '')).replace(/[-.+*]/g, '\\$&') +
            '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*';
        return JSON.parse(decodeURIComponent(this.doc.cookie.replace(new RegExp(regexpStr), '$1')));
    };
    CookieStorage.prototype.setItem = function (key, data) {
        if (!key) {
            return;
        }
        var escapedData = encodeURIComponent(JSON.stringify(data));
        var escapedKey = encodeURIComponent("" + key + (this.isSession(key) ? this.sessionIndicator : ''));
        this.cookieString = escapedKey + "=" + escapedData + "; " + (this.isSession(key) ? '' : 'expires=Tue, 19 Jan 2038 03:14:07 GMT; ') + ";" + (this.baseDomain ? "domain=" + this.baseDomain + ";" : '') + " path=/";
        if (data && escapedData.length > 4000) {
            console.warn(constants_1.logPrefix + " Unable to save data to key \"" + key + "\" due to the size of the data (" + this.cookieString.length + " bytes is greater than maximum allowed 4 KB)");
            return;
        }
        this.doc.cookie = this.cookieString;
        return data;
    };
    CookieStorage.prototype.removeItem = function (key) {
        if (!key || !this._has(key)) {
            return;
        }
        this.doc.cookie =
            encodeURIComponent("" + key + (this.isSession(key) ? this.sessionIndicator : '')) +
                ("=; Max-Age=-99999999;" + (this.baseDomain ? "domain=" + this.baseDomain + ";" : '') + " path=/");
    };
    CookieStorage.prototype.clear = function () {
        console.warn(constants_1.logPrefix + " unsupported method, please use .removeItem(key) instead.");
    };
    CookieStorage.prototype.key = function (_) {
        console.warn(constants_1.logPrefix + " unsupported method, please use getItem(key) instead.");
        return 'N/A';
    };
    CookieStorage.prototype._has = function (key) {
        return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=').test(this.doc.cookie) ||
            new RegExp('(?:^|;\\s*)' +
                encodeURIComponent(key + this.sessionIndicator).replace(/[-.+*]/g, '\\$&') +
                '\\s*\\=').test(this.doc.cookie));
    };
    return CookieStorage;
}());
exports.default = CookieStorage;
//# sourceMappingURL=cookieStorage.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MemoryStorage = (function () {
    function MemoryStorage() {
        this._memoryStorage = {};
    }
    MemoryStorage.prototype.length = function () {
        return Object.keys(this._memoryStorage).length;
    };
    MemoryStorage.prototype.getItem = function (key) {
        return this._memoryStorage[key];
    };
    MemoryStorage.prototype.setItem = function (key, data) {
        if (!key) {
            return;
        }
        this._memoryStorage[key] = data;
        return data;
    };
    MemoryStorage.prototype.removeItem = function (key) {
        if (!key || !this._memoryStorage[key]) {
            throw new Error('[ArcId] No such key in the store');
        }
        this._memoryStorage[key] = undefined;
    };
    MemoryStorage.prototype.clear = function () {
        this._memoryStorage = {};
    };
    MemoryStorage.prototype.key = function (_) {
        console.warn('[ArcId] unsupported method, please use getItem(key) instead.');
        return 'N/A';
    };
    return MemoryStorage;
}());
exports.default = MemoryStorage;
//# sourceMappingURL=memoryStorage.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var userIdentity_1 = __webpack_require__(21);
var constants_1 = __webpack_require__(15);
var enforceRecaptcha_1 = tslib_1.__importStar(__webpack_require__(22));
var jwt_1 = __webpack_require__(25);
function login(userName, password, options) {
    if (options === void 0) { options = {}; }
    identity_1.default._isSession = !options.rememberMe;
    return enforceRecaptcha_1.default(enforceRecaptcha_1.RecaptchaMethod.SIGN_IN, options.recaptchaToken)
        .then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/auth/login" + (options.cookie ? '?cookie=true' : ''), {
            method: 'POST',
            headers: constants_1.headers,
            body: JSON.stringify({
                userName: userName,
                credentials: password,
                grantType: 'password',
                rememberMe: options.rememberMe,
                recaptchaToken: options.recaptchaToken
            })
        });
    })
        .then(JSONResponseHandler_1.default)
        .then(function (json) {
        if (userIdentity_1.isUserIdentity(json)) {
            identity_1.default.userIdentity = json;
            return identity_1.default.userIdentity;
        }
        else {
            throw json;
        }
    });
}
exports.default = login;
function isLoggedIn() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!identity_1.default.userIdentity || !identity_1.default.userIdentity.accessToken)) return [3, 1];
                    return [2, false];
                case 1:
                    if (!jwt_1.isJwtExpired(identity_1.default.userIdentity.accessToken)) return [3, 6];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4, identity_1.default.extendSession()];
                case 3:
                    _a.sent();
                    return [2, true];
                case 4:
                    e_1 = _a.sent();
                    console.warn(constants_1.logPrefix + " code:\"" + e_1.code + "\", message:\"" + e_1.message + "\"");
                    return [2, false];
                case 5: return [3, 7];
                case 6: return [2, true];
                case 7: return [2];
            }
        });
    });
}
exports.isLoggedIn = isLoggedIn;
//# sourceMappingURL=login.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
function JSONResponseHandler(response) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var responseText, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, response.text()];
                case 1:
                    responseText = _a.sent();
                    try {
                        data = JSON.parse(responseText);
                        return [2, data];
                    }
                    catch (err) {
                        if (((response.status / 100) | 0) === 2) {
                            return [2, Promise.resolve({
                                    message: responseText
                                })];
                        }
                        else {
                            return [2, Promise.resolve({
                                    code: response.status,
                                    message: responseText,
                                    httpStatus: response.status,
                                    error: true
                                })];
                        }
                    }
                    return [2];
            }
        });
    });
}
exports.default = JSONResponseHandler;
//# sourceMappingURL=JSONResponseHandler.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserIdentity = exports.isUpdatePasswordSuccessResponse = void 0;
function isUpdatePasswordSuccessResponse(object) {
    return object.userName !== undefined;
}
exports.isUpdatePasswordSuccessResponse = isUpdatePasswordSuccessResponse;
function isUserIdentity(object) {
    return object.uuid !== undefined;
}
exports.isUserIdentity = isUserIdentity;
//# sourceMappingURL=userIdentity.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RecaptchaMethod = void 0;
var tslib_1 = __webpack_require__(13);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var getConfig_1 = __webpack_require__(23);
var RecaptchaMethod;
(function (RecaptchaMethod) {
    RecaptchaMethod["SIGN_IN"] = "SIGN_IN";
    RecaptchaMethod["SIGN_UP"] = "SIGN_UP";
    RecaptchaMethod["MAGIC_LINK"] = "MAGIC_LINK";
})(RecaptchaMethod = exports.RecaptchaMethod || (exports.RecaptchaMethod = {}));
function enforceRecaptcha(caller, recaptchaToken) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var config;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, identity_1.default.getConfig()];
                case 1:
                    config = _a.sent();
                    if (getConfig_1.isConfigOptions(config) &&
                        ((caller === RecaptchaMethod.MAGIC_LINK && config.magicLinkRecaptcha) ||
                            (caller === RecaptchaMethod.SIGN_IN && config.signinRecaptcha) ||
                            (caller === RecaptchaMethod.MAGIC_LINK && config.signupRecaptcha)) &&
                        !recaptchaToken) {
                        throw {
                            code: '130001',
                            message: 'Captcha token invalid'
                        };
                    }
                    else {
                        return [2, true];
                    }
                    return [2];
            }
        });
    });
}
exports.default = enforceRecaptcha;
//# sourceMappingURL=enforceRecaptcha.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.isConfigOptions = void 0;
var tslib_1 = __webpack_require__(13);
var constants_1 = __webpack_require__(15);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var APIErrorResponse_1 = __webpack_require__(24);
function isConfigOptions(object) {
    return object.signinRecaptcha !== undefined;
}
exports.isConfigOptions = isConfigOptions;
function getConfig() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            if (!identity_1.default._configOptions) {
                return [2, fetch(identity_1.default.apiOrigin + "/identity/public/v1/config", {
                        method: 'GET',
                        cache: 'no-cache',
                        headers: tslib_1.__assign({}, constants_1.headers)
                    })
                        .then(JSONResponseHandler_1.default)
                        .then(function (json) {
                        if (APIErrorResponse_1.isAPIErrorResponse(json)) {
                            throw json;
                        }
                        else {
                            identity_1.default._configOptions = json;
                            return json;
                        }
                    })];
            }
            else {
                return [2, identity_1.default._configOptions];
            }
            return [2];
        });
    });
}
exports.getConfig = getConfig;
exports.default = getConfig;
//# sourceMappingURL=getConfig.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isAPIErrorResponse = void 0;
function isAPIErrorResponse(object) {
    return (object.code !== undefined &&
        object.message !== undefined);
}
exports.isAPIErrorResponse = isAPIErrorResponse;
//# sourceMappingURL=APIErrorResponse.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtHasExp = exports.isJwtExpired = exports.parseJwt = void 0;
function parseJwt(token) {
    try {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    }
    catch (e) {
        console.error("[ArcSDK] Error parsing JWT: " + token + "\n    " + e);
    }
}
exports.parseJwt = parseJwt;
function isJwtExpired(token) {
    var jwtPayload = parseJwt(token);
    return 1000 * jwtPayload.exp <= Date.now();
}
exports.isJwtExpired = isJwtExpired;
function jwtHasExp(token) {
    var jwt = parseJwt(token);
    return !!jwt.exp;
}
exports.jwtHasExp = jwtHasExp;
//# sourceMappingURL=jwt.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchLogoutEvent = exports.facebookSignOut = void 0;
var tslib_1 = __webpack_require__(13);
var APIErrorResponse_1 = __webpack_require__(24);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var getFacebookLoginStatus_1 = tslib_1.__importDefault(__webpack_require__(27));
var socialSignOnTypes_1 = __webpack_require__(28);
var events_1 = __webpack_require__(29);
function logout() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var e_1;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!identity_1.default.userIdentity.accessToken) return [3, 1];
                    return [2, identity_1.default.heartbeat().then(function () {
                            return fetch(identity_1.default.apiOrigin + "/identity/public/v1/auth/token", {
                                method: 'DELETE',
                                headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers)
                            })
                                .then(JSONResponseHandler_1.default)
                                .then(function (json) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            identity_1.default.clearSession();
                                            exports.dispatchLogoutEvent();
                                            return [4, exports.facebookSignOut()];
                                        case 1:
                                            _a.sent();
                                            if (window.gapi) {
                                                try {
                                                    window.gapi.auth2.getAuthInstance().signOut();
                                                }
                                                catch (e) {
                                                    console.error('error signing out of google', e);
                                                }
                                            }
                                            if (APIErrorResponse_1.isAPIErrorResponse(json)) {
                                                throw json;
                                            }
                                            else {
                                                return [2, null];
                                            }
                                            return [2];
                                    }
                                });
                            }); })
                                .catch(function (e) {
                                return Promise.reject(e);
                            });
                        })];
                case 1:
                    identity_1.default.clearSession();
                    exports.dispatchLogoutEvent();
                    if (window.gapi) {
                        try {
                            window.gapi.auth2.getAuthInstance().signOut();
                        }
                        catch (e) {
                            console.error('error signing out of google', e);
                        }
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4, exports.facebookSignOut()];
                case 3:
                    _a.sent();
                    return [3, 5];
                case 4:
                    e_1 = _a.sent();
                    console.error('error signing out of facebook', e_1);
                    return [3, 5];
                case 5: throw new Error('No access token found, user is already logged out');
            }
        });
    });
}
exports.default = logout;
exports.facebookSignOut = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var facebookLoginStatus;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!window.FB) return [3, 2];
                return [4, getFacebookLoginStatus_1.default()];
            case 1:
                facebookLoginStatus = _a.sent();
                if (socialSignOnTypes_1.isFacebookLoginResponse(facebookLoginStatus) &&
                    facebookLoginStatus.status === 'connected') {
                    try {
                        return [2, window.FB.logout(function () {
                                return Promise.resolve(null);
                            })];
                    }
                    catch (e) {
                        return [2, Promise.reject(e)];
                    }
                }
                _a.label = 2;
            case 2: return [2, Promise.resolve(null)];
        }
    });
}); };
exports.dispatchLogoutEvent = function () { return events_1.fireEvent('ArcSDK.logout'); };
//# sourceMappingURL=logout.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFacebookLoginStatus = void 0;
exports.getFacebookLoginStatus = function (forceRoundtrip) {
    return new Promise(function (resolve, reject) {
        try {
            window.FB.getLoginStatus(function (response) {
                if (response) {
                    resolve(response);
                }
                else {
                    throw new Error('Failed to get a response from FB');
                }
            }, forceRoundtrip);
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.default = exports.getFacebookLoginStatus;
//# sourceMappingURL=getFacebookLoginStatus.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isFacebookLoginResponse = void 0;
function isFacebookLoginResponse(object) {
    return object.status !== undefined;
}
exports.isFacebookLoginResponse = isFacebookLoginResponse;
//# sourceMappingURL=socialSignOnTypes.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fireEvent = void 0;
var CustomEventPolyfill = function (event, params) {
    if (params === void 0) { params = { bubbles: false, cancelable: false, detail: null }; }
    if (!document) {
        return;
    }
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
};
if (typeof Event !== 'undefined') {
    CustomEventPolyfill.prototype = Event.prototype;
}
exports.fireEvent = function (name, params) {
    if (params === void 0) { params = {}; }
    if (typeof window !== 'undefined') {
        if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
            window.CustomEvent = CustomEventPolyfill;
        }
        var CustomEventConstructor = CustomEvent || window.CustomEvent;
        var event_1 = new CustomEventConstructor(name, params);
        window.dispatchEvent(event_1);
    }
};
//# sourceMappingURL=events.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var requestOTALink_1 = tslib_1.__importDefault(__webpack_require__(31));
function requestMagicLink(email, recaptchaToken) {
    console.warn('[Arc Identity SDK]: requestMagicLink is deprecated');
    return requestOTALink_1.default(email, recaptchaToken);
}
exports.default = requestMagicLink;
//# sourceMappingURL=requestMagicLink.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var APIErrorResponse_1 = __webpack_require__(24);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var enforceRecaptcha_1 = tslib_1.__importStar(__webpack_require__(22));
var constants_1 = __webpack_require__(15);
function requestOTALink(email, recaptchaToken) {
    return enforceRecaptcha_1.default(enforceRecaptcha_1.RecaptchaMethod.MAGIC_LINK, recaptchaToken).then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/auth/magiclink", {
            method: 'POST',
            headers: constants_1.headers,
            body: JSON.stringify({ email: email, recaptchaToken: recaptchaToken })
        })
            .then(JSONResponseHandler_1.default)
            .then(function (json) {
            if (APIErrorResponse_1.isAPIErrorResponse(json)) {
                throw json;
            }
            else {
                return true;
            }
        });
    });
}
exports.default = requestOTALink;
//# sourceMappingURL=requestOTALink.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var redeemOTALink_1 = tslib_1.__importDefault(__webpack_require__(33));
function redeemMagicLink(nonce) {
    console.warn('[Arc Identity SDK]: redeemMagicLink is deprecated');
    return redeemOTALink_1.default(nonce);
}
exports.default = redeemMagicLink;
//# sourceMappingURL=redeemMagicLink.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var userIdentity_1 = __webpack_require__(21);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function redeemOTALink(nonce) {
    return fetch(identity_1.default.apiOrigin + "/identity/public/v1/auth/magiclink/" + nonce, {
        method: 'GET',
        headers: constants_1.headers
    })
        .then(JSONResponseHandler_1.default)
        .then(function (json) {
        if (userIdentity_1.isUserIdentity(json)) {
            identity_1.default.userIdentity = json;
            return identity_1.default.userIdentity;
        }
        else {
            throw json;
        }
    });
}
exports.default = redeemOTALink;
//# sourceMappingURL=redeemOTALink.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.heartbeat = exports.extendSession = void 0;
var tslib_1 = __webpack_require__(13);
var constants_1 = __webpack_require__(15);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var userIdentity_1 = __webpack_require__(21);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var jwt_1 = __webpack_require__(25);
function extendSession() {
    if (identity_1.default.userIdentity.refreshToken &&
        identity_1.default.userIdentity.accessToken &&
        !jwt_1.isJwtExpired(identity_1.default.userIdentity.refreshToken)) {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/auth/token", {
            method: 'POST',
            headers: constants_1.headers,
            body: JSON.stringify({
                token: identity_1.default.userIdentity.refreshToken,
                grantType: 'refresh-token'
            })
        })
            .then(JSONResponseHandler_1.default)
            .then(function (json) {
            if (userIdentity_1.isUserIdentity(json)) {
                var userIdentity = tslib_1.__assign(tslib_1.__assign({}, identity_1.default.userIdentity), { accessToken: json.accessToken, refreshToken: json.refreshToken || identity_1.default.userIdentity.refreshToken });
                identity_1.default.userIdentity = userIdentity;
                return identity_1.default.userIdentity;
            }
            else {
                if (json.code) {
                    console.warn(constants_1.logPrefix + " code:\"" + json.code + "\", message:\"" + json.message + "\"");
                }
                identity_1.default.clearSession();
                throw json;
            }
        });
    }
    else if (identity_1.default.userIdentity.refreshToken &&
        jwt_1.isJwtExpired(identity_1.default.userIdentity.refreshToken)) {
        identity_1.default.clearSession();
        throw new Error(constants_1.logPrefix + " Refresh token is expired");
    }
    else {
        identity_1.default.clearSession();
        throw new Error(constants_1.logPrefix + " No refresh token found for this session");
    }
}
exports.extendSession = extendSession;
function heartbeat() {
    if (identity_1.default.userIdentity.refreshToken &&
        identity_1.default.userIdentity.accessToken &&
        (jwt_1.isJwtExpired(identity_1.default.userIdentity.accessToken) ||
            !jwt_1.jwtHasExp(identity_1.default.userIdentity.accessToken))) {
        return identity_1.default.extendSession();
    }
    else {
        return Promise.resolve(identity_1.default.userIdentity);
    }
}
exports.heartbeat = heartbeat;
//# sourceMappingURL=extendSession.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.clearSession = void 0;
var tslib_1 = __webpack_require__(13);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
function clearSession() {
    try {
        identity_1.default.userIdentity = {};
        identity_1.default.userProfile = null;
    }
    catch (e) {
        throw new Error('Error clearing session.');
    }
}
exports.clearSession = clearSession;
exports.default = clearSession;
//# sourceMappingURL=clearSession.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function options(options) {
    var _a, _b, _c, _d, _e, _f;
    if (options) {
        identity_1.default.apiOrigin =
            (options.apiOrigin && options.apiOrigin.replace(/\/$/, '')) || identity_1.default.apiOrigin;
        identity_1.default.baseDomain = options.baseDomain || identity_1.default._baseDomain;
        identity_1.default._google = tslib_1.__assign(tslib_1.__assign({}, identity_1.default._google), { auth2: (_b = (_a = options.google) === null || _a === void 0 ? void 0 : _a.auth2) !== null && _b !== void 0 ? _b : (_c = identity_1.default._google) === null || _c === void 0 ? void 0 : _c.auth2, clientId: (_e = (_d = options.google) === null || _d === void 0 ? void 0 : _d.clientId) !== null && _e !== void 0 ? _e : (_f = identity_1.default._google) === null || _f === void 0 ? void 0 : _f.clientId });
    }
    else {
        console.warn(constants_1.logPrefix + " No options specified when calling Identity.options");
    }
}
exports.default = options;
//# sourceMappingURL=options.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var userProfile_1 = __webpack_require__(38);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function getUserProfile() {
    return identity_1.default.heartbeat().then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/profile", {
            method: 'GET',
            cache: 'no-cache',
            headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers)
        })
            .then(JSONResponseHandler_1.default)
            .then(function (json) {
            if (userProfile_1.isUserProfile(json)) {
                identity_1.default.userProfile = json;
                return identity_1.default.userProfile;
            }
            else {
                throw json;
            }
        });
    });
}
exports.default = getUserProfile;
//# sourceMappingURL=getUserProfile.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isSignUpResponse = exports.isUserProfile = void 0;
function isUserProfile(object) {
    return object.uuid !== undefined;
}
exports.isUserProfile = isUserProfile;
function isSignUpResponse(object) {
    return object.uuid !== undefined;
}
exports.isSignUpResponse = isSignUpResponse;
//# sourceMappingURL=userProfile.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var userProfile_1 = __webpack_require__(38);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function updateUserProfile(profile) {
    if (!identity_1.default.userIdentity) {
        throw new Error('User is not logged in');
    }
    if (userProfile_1.isUserProfile(profile)) {
        delete profile.uuid;
    }
    return identity_1.default.heartbeat().then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/profile", {
            method: 'PATCH',
            headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers),
            body: JSON.stringify(profile)
        })
            .then(JSONResponseHandler_1.default)
            .then(function (json) {
            if (userProfile_1.isUserProfile(json)) {
                identity_1.default.userProfile = json;
                return identity_1.default.userProfile;
            }
            else {
                throw json;
            }
        });
    });
}
exports.default = updateUserProfile;
//# sourceMappingURL=updateUserProfile.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAvatar = exports.uploadAvatar = void 0;
var tslib_1 = __webpack_require__(13);
var APIErrorResponse_1 = __webpack_require__(24);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function uploadAvatar(inputField) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            console.warn('[Arc Identity SDK]: uploadAvatar is deprecated');
            return [2, identity_1.default.heartbeat().then(function () {
                    var fileInput;
                    if (typeof inputField === 'string') {
                        fileInput = document.getElementById(inputField.replace(/^#/, ''));
                    }
                    else {
                        fileInput = inputField;
                    }
                    if (!fileInput) {
                        throw Error(constants_1.logPrefix + " element provided not found " + (typeof inputField === 'string' ? "(" + inputField + ")" : '') + ".");
                    }
                    else if (!fileInput.files || !fileInput.files.length) {
                        throw {
                            message: "No image found in the input field provided " + (typeof inputField === 'string' ? "(" + inputField + ")" : '') + ".",
                            code: 'MISSING_IMAGE',
                        };
                    }
                    else if (fileInput.files[0].type !== 'image/jpeg') {
                        throw { message: 'Image type not supported', code: 'UNSUPPORTED_IMAGE_TYPE' };
                    }
                    else if (fileInput.files[0].size > 3e6) {
                        throw {
                            message: 'Image too big. Only images up to 3 MB are supported.',
                            code: 'IMAGE_TOO_LARGE',
                        };
                    }
                    else {
                        var imageFile = fileInput.files[0];
                        var body_1 = new FormData();
                        body_1.append('avatar', imageFile);
                        return identity_1.default.heartbeat().then(function () {
                            return fetch(identity_1.default.apiOrigin + "/identity/public/v1/avatar", {
                                method: 'PUT',
                                headers: {
                                    Authorization: "Bearer " + identity_1.default.userIdentity.accessToken,
                                },
                                body: body_1,
                            })
                                .then(JSONResponseHandler_1.default)
                                .then(function (json) {
                                if (APIErrorResponse_1.isAPIErrorResponse(json)) {
                                    throw json;
                                }
                                else {
                                    fileInput.value = '';
                                    identity_1.default.userProfile = json;
                                    return json;
                                }
                            });
                        });
                    }
                })];
        });
    });
}
exports.uploadAvatar = uploadAvatar;
function deleteAvatar() {
    console.warn('[Arc Identity SDK]: deleteAvatar is deprecated');
    return identity_1.default.heartbeat().then(function () {
        return identity_1.default.heartbeat().then(function () {
            return fetch(identity_1.default.apiOrigin + "/identity/public/v1/avatar", {
                method: 'DELETE',
                headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers),
            })
                .then(JSONResponseHandler_1.default)
                .then(function (json) {
                if (APIErrorResponse_1.isAPIErrorResponse(json)) {
                    throw json;
                }
                else {
                    if (identity_1.default.userProfile) {
                        identity_1.default.userProfile.picture = '';
                    }
                    return json;
                }
            });
        });
    });
}
exports.deleteAvatar = deleteAvatar;
//# sourceMappingURL=avatar.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var userProfile_1 = __webpack_require__(38);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
var enforceRecaptcha_1 = tslib_1.__importStar(__webpack_require__(22));
function signUp(identity, profile, _, rememberMe, recaptchaToken) {
    return enforceRecaptcha_1.default(enforceRecaptcha_1.RecaptchaMethod.SIGN_UP, recaptchaToken)
        .then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/signup", {
            method: 'POST',
            headers: constants_1.headers,
            body: JSON.stringify({
                identity: identity,
                profile: profile,
                recaptchaToken: recaptchaToken
            })
        });
    })
        .then(JSONResponseHandler_1.default)
        .then(function (json) {
        if (userProfile_1.isSignUpResponse(json)) {
            identity_1.default._isSession = !rememberMe;
            var identities = json.identities, profile_1 = json.profile, uuid = json.uuid, userIdentity = tslib_1.__rest(json, ["identities", "profile", "uuid"]);
            identity_1.default.userProfile = tslib_1.__assign(tslib_1.__assign({}, profile_1), { identities: identities, uuid: uuid });
            identity_1.default.userIdentity = tslib_1.__assign({ uuid: uuid }, userIdentity);
            return json;
        }
        else {
            throw json;
        }
    });
}
exports.default = signUp;
//# sourceMappingURL=signUp.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var userIdentity_1 = __webpack_require__(21);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function updatePassword(oldPassword, newPassword) {
    return identity_1.default.heartbeat().then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/password", {
            method: 'PUT',
            headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers),
            body: JSON.stringify({ oldPassword: oldPassword, newPassword: newPassword })
        })
            .then(JSONResponseHandler_1.default)
            .then(function (json) {
            if (userIdentity_1.isUpdatePasswordSuccessResponse(json)) {
                return true;
            }
            else {
                throw json;
            }
        });
    });
}
exports.default = updatePassword;
//# sourceMappingURL=updatePassword.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function requestResetPassword(userName) {
    return fetch(identity_1.default.apiOrigin + "/identity/public/v1/password/reset", {
        method: 'POST',
        headers: constants_1.headers,
        body: JSON.stringify({ userName: userName })
    })
        .then(JSONResponseHandler_1.default)
        .then(function (json) {
        if (json.success) {
            return true;
        }
        else {
            throw json;
        }
    });
}
exports.default = requestResetPassword;
//# sourceMappingURL=requestResetPassword.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var APIErrorResponse_1 = __webpack_require__(24);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function resetPassword(nonce, newPassword) {
    return fetch(identity_1.default.apiOrigin + "/identity/public/v1/password/reset/" + nonce, {
        method: 'PUT',
        headers: constants_1.headers,
        body: JSON.stringify({ newPassword: newPassword })
    })
        .then(JSONResponseHandler_1.default)
        .then(function (json) {
        if (APIErrorResponse_1.isAPIErrorResponse(json)) {
            throw json;
        }
        else {
            return true;
        }
    });
}
exports.default = resetPassword;
//# sourceMappingURL=resetPassword.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function requestVerifyEmail(email) {
    return fetch(identity_1.default.apiOrigin + "/identity/public/v1/email/verify", {
        method: 'POST',
        headers: constants_1.headers,
        body: JSON.stringify({ email: email })
    })
        .then(JSONResponseHandler_1.default)
        .then(function (json) {
        if (json.success) {
            return true;
        }
        else {
            throw json;
        }
    });
}
exports.default = requestVerifyEmail;
//# sourceMappingURL=requestVerifyEmail.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function verifyEmail(nonce) {
    return fetch(identity_1.default.apiOrigin + "/identity/public/v1/email/verify/" + nonce, {
        method: 'GET',
        headers: constants_1.headers
    })
        .then(JSONResponseHandler_1.default)
        .then(function (json) {
        if (json.success) {
            return true;
        }
        else {
            throw json;
        }
    });
}
exports.default = verifyEmail;
//# sourceMappingURL=verifyEmail.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.declineDeleteAccount = exports.approveDeleteAccount = void 0;
var tslib_1 = __webpack_require__(13);
var APIErrorResponse_1 = __webpack_require__(24);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var logout_1 = __webpack_require__(26);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function requestDeleteAccount() {
    return identity_1.default.heartbeat()
        .then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/user/anonymize", {
            method: 'DELETE',
            headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers)
        });
    })
        .then(JSONResponseHandler_1.default)
        .then(function (json) {
        if (APIErrorResponse_1.isAPIErrorResponse(json)) {
            throw json;
        }
        else {
            return json;
        }
    });
}
exports.default = requestDeleteAccount;
function approveDeleteAccount(nonce) {
    return identity_1.default.heartbeat()
        .then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/user/anonymize/approve/" + nonce, {
            method: 'PUT',
            headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers),
            body: JSON.stringify({})
        });
    })
        .then(JSONResponseHandler_1.default)
        .then(function (json) {
        if (APIErrorResponse_1.isAPIErrorResponse(json)) {
            throw json;
        }
        else {
            identity_1.default.clearSession();
            logout_1.dispatchLogoutEvent();
            return json;
        }
    });
}
exports.approveDeleteAccount = approveDeleteAccount;
function declineDeleteAccount(nonce, reason) {
    return identity_1.default.heartbeat()
        .then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/user/anonymize/decline/" + nonce, {
            method: 'PUT',
            headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers),
            body: JSON.stringify({ reason: reason })
        });
    })
        .then(JSONResponseHandler_1.default)
        .then(function (json) {
        if (APIErrorResponse_1.isAPIErrorResponse(json)) {
            throw json;
        }
        else {
            return json;
        }
    });
}
exports.declineDeleteAccount = declineDeleteAccount;
//# sourceMappingURL=requestDeleteAccount.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSettings = void 0;
var tslib_1 = __webpack_require__(13);
var constants_1 = __webpack_require__(15);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var APIErrorResponse_1 = __webpack_require__(24);
function getUserSettings() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            if (!identity_1.default.userSettings) {
                return [2, identity_1.default.heartbeat().then(function () {
                        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/user/settings", {
                            method: 'GET',
                            cache: 'no-cache',
                            headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers)
                        })
                            .then(JSONResponseHandler_1.default)
                            .then(function (json) {
                            if (APIErrorResponse_1.isAPIErrorResponse(json)) {
                                throw json;
                            }
                            else {
                                identity_1.default.userSettings = json;
                                return json;
                            }
                        });
                    })];
            }
            else {
                return [2, identity_1.default.userSettings];
            }
            return [2];
        });
    });
}
exports.getUserSettings = getUserSettings;
exports.default = getUserSettings;
//# sourceMappingURL=getUserSettings.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getThirdPartyTokens = void 0;
var tslib_1 = __webpack_require__(13);
var constants_1 = __webpack_require__(15);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
function getThirdPartyTokens(service) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            if (service === 'DISQUS') {
                return [2, getDisqusData()];
            }
            else {
                throw new Error(constants_1.logPrefix + " Unsupported third party service requested.");
            }
            return [2];
        });
    });
}
exports.getThirdPartyTokens = getThirdPartyTokens;
function getDisqusData() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!identity_1.default.userSettings) return [3, 2];
                    return [4, identity_1.default.getUserSettings()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!!identity_1.default.configOptions) return [3, 4];
                    return [4, identity_1.default.getConfig()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (identity_1.default.configOptions &&
                        identity_1.default.userSettings &&
                        identity_1.default.configOptions.disqus &&
                        identity_1.default.configOptions.disqus.enabled) {
                        return [2, {
                                enabled: true,
                                publicKey: identity_1.default.configOptions.disqus.publicKey,
                                ssoToken: identity_1.default.userSettings.disqus && identity_1.default.userSettings.disqus.ssoKey
                            }];
                    }
                    else {
                        return [2, {
                                enabled: false
                            }];
                    }
                    return [2];
            }
        });
    });
}
exports.default = getThirdPartyTokens;
//# sourceMappingURL=getThirdPartyTokens.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function listGdprReports() {
    return identity_1.default.heartbeat().then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/gdpr?_=" + Date.now(), {
            method: 'GET',
            headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers)
        })
            .then(JSONResponseHandler_1.default)
            .then(function (json) {
            if (Array.isArray(json)) {
                return json;
            }
            else {
                throw json;
            }
        });
    });
}
exports.default = listGdprReports;
//# sourceMappingURL=listGdprReports.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
var gdpr_1 = __webpack_require__(52);
function getGdprReport(id) {
    return identity_1.default.heartbeat().then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/gdpr/" + id, {
            method: 'GET',
            cache: 'no-cache',
            headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers)
        })
            .then(JSONResponseHandler_1.default)
            .then(function (json) {
            if (gdpr_1.isGdprReport(json)) {
                return json;
            }
            else {
                throw json;
            }
        });
    });
}
exports.default = getGdprReport;
//# sourceMappingURL=getGdprReport.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isGdprReport = void 0;
function isGdprReport(object) {
    return object.data !== undefined;
}
exports.isGdprReport = isGdprReport;
//# sourceMappingURL=gdpr.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initFacebookLogin = exports.loadFacebookSDK = void 0;
var tslib_1 = __webpack_require__(13);
var locales_1 = __webpack_require__(54);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var FB_SDK_ID = 'facebook-jssdk';
exports.loadFacebookSDK = function (fbLocale) {
    return new Promise(function (resolve, reject) {
        if (!document.getElementById(FB_SDK_ID)) {
            var element = document.createElement('script');
            var parent_1 = 'body';
            var attr = 'src';
            element.onload = function () {
                resolve("https://connect.facebook.net/" + fbLocale + "/sdk.js");
            };
            element.onerror = function () {
                reject('Error loading Facebook SDK');
            };
            element.async = true;
            element.id = FB_SDK_ID;
            element[attr] = "https://connect.facebook.net/" + fbLocale + "/sdk.js";
            document[parent_1].appendChild(element);
        }
        else {
            resolve();
        }
    });
};
function initFacebookLogin(appId, locale, customButton) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var fbAppId, userLocale, fbLocale;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!appId && !identity_1.default.configOptions)) return [3, 2];
                    return [4, identity_1.default.getConfig()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    fbAppId = appId
                        ? appId
                        : identity_1.default.configOptions && identity_1.default.configOptions.facebookAppId
                            ? identity_1.default.configOptions.facebookAppId.split(',')[0]
                            : null;
                    if (!!fbAppId) return [3, 3];
                    throw new Error('[Arc Identity SDK] - Facebook App ID not found, please add one in settings or explicitly pass one to the initFacebookLogin method.');
                case 3:
                    userLocale = locale ? locale : locales_1.getBrowserLocale();
                    fbLocale = locales_1.bestFacebookLocaleFor(userLocale);
                    return [4, exports.loadFacebookSDK(fbLocale)];
                case 4:
                    _a.sent();
                    if (customButton) {
                        identity_1.default._useCustomFBButton = true;
                    }
                    window.FB.init({
                        appId: fbAppId,
                        autoLogAppEvents: true,
                        xfbml: true,
                        status: true,
                        version: 'v3.3'
                    });
                    _a.label = 5;
                case 5: return [2];
            }
        });
    });
}
exports.initFacebookLogin = initFacebookLogin;
exports.default = initFacebookLogin;
//# sourceMappingURL=initFacebookLogin.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserLocale = exports.bestFacebookLocaleFor = void 0;
var FACEBOOK_SUPPORTED_LOCALES = [
    'af_ZA',
    'ak_GH',
    'am_ET',
    'ar_AR',
    'as_IN',
    'ay_BO',
    'az_AZ',
    'be_BY',
    'bg_BG',
    'bn_IN',
    'br_FR',
    'bs_BA',
    'ca_ES',
    'cb_IQ',
    'ck_US',
    'co_FR',
    'cs_CZ',
    'cx_PH',
    'cy_GB',
    'de_DE',
    'da_DK',
    'el_GR',
    'en_GB',
    'en_IN',
    'en_PI',
    'en_UD',
    'en_US',
    'eo_EO',
    'es_LA',
    'es_CL',
    'es_CO',
    'es_ES',
    'es_MX',
    'es_VE',
    'et_EE',
    'eu_ES',
    'fa_IR',
    'fb_LT',
    'ff_NG',
    'fi_FI',
    'fo_FO',
    'fr_FR',
    'fr_CA',
    'fy_NL',
    'ga_IE',
    'gl_ES',
    'gn_PY',
    'gu_IN',
    'gx_GR',
    'ha_NG',
    'he_IL',
    'hi_IN',
    'hr_HR',
    'hu_HU',
    'hy_AM',
    'id_ID',
    'ig_NG',
    'is_IS',
    'it_IT',
    'ja_JP',
    'ja_KS',
    'jv_ID',
    'ka_GE',
    'kk_KZ',
    'km_KH',
    'kn_IN',
    'ko_KR',
    'ku_TR',
    'la_VA',
    'lg_UG',
    'li_NL',
    'ln_CD',
    'lo_LA',
    'lt_LT',
    'lv_LV',
    'mg_MG',
    'mk_MK',
    'ml_IN',
    'mn_MN',
    'mr_IN',
    'ms_MY',
    'mt_MT',
    'my_MM',
    'nb_NO',
    'nd_ZW',
    'ne_NP',
    'nl_BE',
    'nl_NL',
    'nn_NO',
    'ny_MW',
    'or_IN',
    'pa_IN',
    'pl_PL',
    'ps_AF',
    'pt_BR',
    'pt_PT',
    'qu_PE',
    'rm_CH',
    'ro_RO',
    'ru_RU',
    'rw_RW',
    'sa_IN',
    'sc_IT',
    'se_NO',
    'si_LK',
    'sk_SK',
    'sl_SI',
    'sn_ZW',
    'so_SO',
    'sq_AL',
    'sr_RS',
    'sv_SE',
    'sw_KE',
    'sy_SY',
    'sz_PL',
    'ta_IN',
    'te_IN',
    'tg_TJ',
    'th_TH',
    'tk_TM',
    'tl_PH',
    'tl_ST',
    'tr_TR',
    'tt_RU',
    'tz_MA',
    'uk_UA',
    'ur_PK',
    'uz_UZ',
    'vi_VN',
    'wo_SN',
    'xh_ZA',
    'yi_DE',
    'yo_NG',
    'zh_CN',
    'zh_HK',
    'zh_TW',
    'zu_ZA',
    'zz_TR'
];
var facebookVirtualLocales = {
    es_AR: 'es_LA',
    es_PE: 'es_LA',
    es_EC: 'es_LA',
    es_GT: 'es_LA',
    es_CU: 'es_LA',
    es_BO: 'es_LA',
    es_DO: 'es_LA',
    es_HN: 'es_LA',
    es_PY: 'es_LA',
    es_SV: 'es_LA',
    es_NI: 'es_LA',
    es_CR: 'es_LA',
    es_PR: 'es_LA',
    es_PA: 'es_LA',
    es_UY: 'es_LA',
    es_GQ: 'es_LA',
    ar_DZ: 'ar_AR',
    ar_BH: 'ar_AR',
    ar_TD: 'ar_AR',
    ar_KM: 'ar_AR',
    ar_DJ: 'ar_AR',
    ar_EG: 'ar_AR',
    ar_ER: 'ar_AR',
    ar_GM: 'ar_AR',
    ar_IQ: 'ar_AR',
    ar_IL: 'ar_AR',
    ar_JO: 'ar_AR',
    ar_KW: 'ar_AR',
    ar_LB: 'ar_AR',
    ar_LY: 'ar_AR',
    ar_MR: 'ar_AR',
    ar_MA: 'ar_AR',
    ar_OM: 'ar_AR',
    ar_PS: 'ar_AR',
    ar_QA: 'ar_AR',
    ar_SA: 'ar_AR',
    ar_SO: 'ar_AR',
    ar_SD: 'ar_AR',
    ar_SY: 'ar_AR',
    ar_TN: 'ar_AR',
    ar_AE: 'ar_AR',
    ar_YE: 'ar_AR'
};
exports.bestFacebookLocaleFor = function (locale) {
    var cleanedLocale = locale.replace('-', '_');
    if (FACEBOOK_SUPPORTED_LOCALES.indexOf(cleanedLocale) > -1) {
        return cleanedLocale;
    }
    if (facebookVirtualLocales[cleanedLocale]) {
        return facebookVirtualLocales[cleanedLocale];
    }
    var lang = cleanedLocale.substring(0, 2);
    var supportedLang = FACEBOOK_SUPPORTED_LOCALES.find(function (a) { return a.substring(0, 2) === lang; });
    if (supportedLang) {
        return supportedLang;
    }
    return 'en_US';
};
exports.getBrowserLocale = function () {
    if (navigator.languages && navigator.languages.length) {
        return navigator.languages[0];
    }
    else {
        return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en_US';
    }
};
//# sourceMappingURL=locales.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initGoogleLogin = exports.initGoogleAuthSDK = exports.initGoogleAuth = exports.getGoogleAuthInstance = exports.loadGoogleAuthSDK = exports.GOOGLE_SDK_URL = void 0;
var tslib_1 = __webpack_require__(13);
var googleSignOn_1 = __webpack_require__(56);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
exports.GOOGLE_SDK_URL = 'https://apis.google.com/js/platform.js';
exports.loadGoogleAuthSDK = function (init) {
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var element, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!document.querySelector("[src=\"" + exports.GOOGLE_SDK_URL + "\"]")) return [3, 1];
                    element = document.createElement('script');
                    element.onload = function () {
                        var _this = this;
                        window.gapi.load('auth2', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var e_2;
                            var _a, _b, _c;
                            return tslib_1.__generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        identity_1.default._google = tslib_1.__assign(tslib_1.__assign({}, identity_1.default._google), { auth2: (_b = (_a = window.gapi) === null || _a === void 0 ? void 0 : _a.auth2) !== null && _b !== void 0 ? _b : (_c = identity_1.default._google) === null || _c === void 0 ? void 0 : _c.auth2 });
                                        if (!init) return [3, 4];
                                        _d.label = 1;
                                    case 1:
                                        _d.trys.push([1, 3, , 4]);
                                        return [4, init()];
                                    case 2:
                                        _d.sent();
                                        return [3, 4];
                                    case 3:
                                        e_2 = _d.sent();
                                        return [2, reject(e_2)];
                                    case 4: return [2, resolve()];
                                }
                            });
                        }); });
                    };
                    element.onerror = function () {
                        reject('[Arc Identity SDK] - Error loading Google SDK');
                    };
                    element.async = true;
                    element.src = exports.GOOGLE_SDK_URL;
                    document.head.appendChild(element);
                    return [3, 7];
                case 1:
                    if (!window.gapi) {
                        return [2, reject('[Arc Identity SDK] - Error loading Google SDK')];
                    }
                    if (!!window.gapi.auth2) return [3, 2];
                    window.gapi.load('auth2', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                        var e_3;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!init) return [3, 4];
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4, init()];
                                case 2:
                                    _a.sent();
                                    return [3, 4];
                                case 3:
                                    e_3 = _a.sent();
                                    return [2, reject(e_3)];
                                case 4: return [2, resolve()];
                            }
                        });
                    }); });
                    return [3, 7];
                case 2:
                    if (!init) return [3, 6];
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4, init()];
                case 4:
                    _a.sent();
                    return [3, 6];
                case 5:
                    e_1 = _a.sent();
                    return [2, reject(e_1)];
                case 6: return [2, resolve()];
                case 7: return [2];
            }
        });
    }); });
};
exports.getGoogleAuthInstance = function () {
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var e_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!identity_1.default._google.authInstance) return [3, 1];
                    resolve();
                    return [3, 5];
                case 1:
                    if (!identity_1.default._google.auth2) return [3, 2];
                    identity_1.default._google.authInstance = identity_1.default._google.auth2.getAuthInstance();
                    resolve();
                    return [3, 5];
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4, exports.initGoogleAuthSDK(identity_1.default._google.clientId)];
                case 3:
                    _a.sent();
                    resolve();
                    return [3, 5];
                case 4:
                    e_4 = _a.sent();
                    console.error('Error getting Google Auth instance.');
                    reject(new Error(e_4));
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
};
exports.initGoogleAuth = function (clientId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var googleAuthInstance, googleAuth;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return tslib_1.__generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                identity_1.default._google = tslib_1.__assign(tslib_1.__assign({}, identity_1.default._google), { auth2: (_b = (_a = window.gapi) === null || _a === void 0 ? void 0 : _a.auth2) !== null && _b !== void 0 ? _b : (_c = identity_1.default._google) === null || _c === void 0 ? void 0 : _c.auth2, clientId: clientId !== null && clientId !== void 0 ? clientId : (_d = identity_1.default._google) === null || _d === void 0 ? void 0 : _d.clientId });
                if (!((_e = identity_1.default._google) === null || _e === void 0 ? void 0 : _e.auth2)) {
                    throw new Error('[Arc Identity SDK] - Error loading Google SDK');
                }
                if (!(!((_f = identity_1.default._google) === null || _f === void 0 ? void 0 : _f.clientId) &&
                    (!identity_1.default.configOptions || (identity_1.default.configOptions && !identity_1.default.configOptions.googleClientId)))) return [3, 2];
                return [4, identity_1.default.getConfig()];
            case 1:
                _o.sent();
                _o.label = 2;
            case 2:
                identity_1.default._google.clientId = (_h = (_g = identity_1.default._google) === null || _g === void 0 ? void 0 : _g.clientId) !== null && _h !== void 0 ? _h : (_l = (_k = (_j = identity_1.default.configOptions) === null || _j === void 0 ? void 0 : _j.googleClientId) === null || _k === void 0 ? void 0 : _k.split(',')) === null || _l === void 0 ? void 0 : _l[0];
                if (!identity_1.default._google.clientId) {
                    throw new Error('[Arc Identity SDK] - Google Client ID not found, please add one in settings or explicitly pass one to the initGoogleLogin method.');
                }
                else {
                    try {
                        googleAuthInstance = (_m = identity_1.default._google.authInstance) !== null && _m !== void 0 ? _m : identity_1.default._google.auth2.getAuthInstance();
                        if (!googleAuthInstance) {
                            googleAuth = identity_1.default._google.auth2.init({
                                client_id: identity_1.default._google.clientId.replace('.apps.googleusercontent.com', '') + ".apps.googleusercontent.com"
                            });
                            identity_1.default._google.authInstance = googleAuth;
                        }
                        else {
                            identity_1.default._google.authInstance = googleAuthInstance;
                        }
                    }
                    catch (e) {
                        console.error('Error while initializing Google sdk:');
                        throw e;
                    }
                }
                return [2];
        }
    });
}); };
exports.initGoogleAuthSDK = function (clientId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var e_5;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (clientId && clientId !== ((_a = identity_1.default._google) === null || _a === void 0 ? void 0 : _a.clientId)) {
                    identity_1.default._google.clientId = clientId;
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4, exports.loadGoogleAuthSDK(function () { return exports.initGoogleAuth(identity_1.default._google.clientId); })];
            case 2:
                _b.sent();
                return [3, 4];
            case 3:
                e_5 = _b.sent();
                throw e_5;
            case 4: return [2];
        }
    });
}); };
function initGoogleLogin(clientId, renderOptions, buttonId, customButton) {
    var _a, _b;
    if (clientId === void 0) { clientId = ''; }
    if (renderOptions === void 0) { renderOptions = {
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        scope: ['profile', 'email']
    }; }
    if (buttonId === void 0) { buttonId = 'google-sign-in-button'; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var successHandler, defaultRenderOptions, options, e_6;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    if (clientId && clientId !== identity_1.default._google.clientId) {
                        identity_1.default._google.clientId = clientId;
                    }
                    if (!(!identity_1.default._google.auth2 || !identity_1.default._google.authInstance)) return [3, 2];
                    return [4, exports.initGoogleAuthSDK(identity_1.default._google.clientId)];
                case 1:
                    _c.sent();
                    _c.label = 2;
                case 2:
                    if (!identity_1.default._google.authInstance) {
                        throw new Error('[Arc Identity SDK] - Error initializing Google Auth2 SDK');
                    }
                    successHandler = function (googleUser) {
                        googleSignOn_1.googleSignOn(googleUser).then(function () {
                            if (renderOptions && typeof renderOptions.onSuccess === 'function') {
                                renderOptions.onSuccess(googleUser);
                            }
                        });
                    };
                    if (renderOptions && typeof renderOptions.onSuccess === 'function') {
                        identity_1.default._google.onSuccess = renderOptions.onSuccess;
                        if (typeof renderOptions.onFailure === 'function') {
                            identity_1.default._google.onFailure = renderOptions.onFailure;
                        }
                    }
                    if (customButton) {
                        identity_1.default._google.useCustomButton = true;
                    }
                    if (!customButton && renderOptions) {
                        identity_1.default._google.authInstance.attachClickHandler(buttonId, {
                            scope: ((_a = renderOptions === null || renderOptions === void 0 ? void 0 : renderOptions.scope) !== null && _a !== void 0 ? _a : ['profile', 'email']).join(' '),
                            prompt: 'select_account'
                        }, successHandler, (renderOptions && renderOptions.onFailure) || console.error);
                        defaultRenderOptions = {
                            width: 240,
                            height: 50,
                            longtitle: true,
                            theme: 'dark'
                        };
                        options = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, defaultRenderOptions), renderOptions), { scope: ((_b = renderOptions === null || renderOptions === void 0 ? void 0 : renderOptions.scope) !== null && _b !== void 0 ? _b : ['profile', 'email']).join(' ') });
                        return [2, window.gapi.signin2.render(buttonId, options)];
                    }
                    return [3, 4];
                case 3:
                    e_6 = _c.sent();
                    console.error('Error while initializing Google login:');
                    throw e_6;
                case 4: return [2];
            }
        });
    });
}
exports.initGoogleLogin = initGoogleLogin;
exports.default = initGoogleLogin;
//# sourceMappingURL=initGoogleLogin.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.signOnSwgUser = exports.googleSignOn = void 0;
var tslib_1 = __webpack_require__(13);
var socialSignOn_1 = __webpack_require__(57);
var initGoogleLogin_1 = __webpack_require__(55);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
exports.googleSignOn = function (googleUser) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var authInstance, googleUser_1, e_1;
    var _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (googleUser) {
                    return [2, signOnWithGoogleUser(googleUser)];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                if (!!identity_1.default._google.authInstance) return [3, 3];
                return [4, initGoogleLogin_1.getGoogleAuthInstance()];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                authInstance = identity_1.default._google.authInstance;
                if (authInstance && authInstance.isSignedIn.get()) {
                    return [2, signOnWithGoogleUser(authInstance.currentUser.get())];
                }
                return [4, ((_a = identity_1.default._google.authInstance) === null || _a === void 0 ? void 0 : _a.signIn({
                        prompt: 'select_account',
                    }))];
            case 4:
                googleUser_1 = _b.sent();
                return [2, signOnWithGoogleUser(googleUser_1)];
            case 5:
                e_1 = _b.sent();
                throw e_1;
            case 6: return [2];
        }
    });
}); };
exports.signOnSwgUser = function (_a) {
    var idToken = _a.idToken, swgSubscriptionTokenResponse = _a.swgSubscriptionTokenResponse;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var currentUser, idToken_1;
        var _b, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!idToken) return [3, 1];
                    return [2, socialSignOn_1.socialLogin('google', { credentials: idToken })];
                case 1:
                    if (!swgSubscriptionTokenResponse) return [3, 2];
                    identity_1.default.userIdentity = {
                        uuid: swgSubscriptionTokenResponse.profileId,
                        accessToken: swgSubscriptionTokenResponse.accessToken,
                        refreshToken: swgSubscriptionTokenResponse.refreshToken,
                    };
                    return [2, identity_1.default.heartbeat()];
                case 2: return [4, initGoogleLogin_1.getGoogleAuthInstance()];
                case 3:
                    _d.sent();
                    if ((_b = identity_1.default._google.authInstance) === null || _b === void 0 ? void 0 : _b.isSignedIn.get()) {
                        currentUser = (_c = identity_1.default._google.authInstance) === null || _c === void 0 ? void 0 : _c.currentUser.get();
                        idToken_1 = currentUser.getAuthResponse().id_token;
                        return [2, socialSignOn_1.socialLogin('google', { credentials: idToken_1 })];
                    }
                    else {
                        throw new Error('[Arc Identity SDK] - No google user logged in.');
                    }
                    _d.label = 4;
                case 4: return [2];
            }
        });
    });
};
var signOnWithGoogleUser = function (googleUser) {
    var googleIdToken = googleUser.getAuthResponse().id_token;
    return socialSignOn_1.socialLogin('google', {
        credentials: googleIdToken,
    })
        .then(function (userIdentity) {
        if (identity_1.default._google.onSuccess) {
            identity_1.default._google.onSuccess();
        }
        return userIdentity;
    })
        .catch(function (e) {
        if (identity_1.default._google.onFailure) {
            identity_1.default._google.onFailure();
        }
        throw e;
    });
};
exports.default = exports.googleSignOn;
//# sourceMappingURL=googleSignOn.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.socialLogin = void 0;
var tslib_1 = __webpack_require__(13);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var userIdentity_1 = __webpack_require__(21);
var constants_1 = __webpack_require__(15);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
function socialLogin(type, identity) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var headers;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = tslib_1.__assign({}, constants_1.headers);
                    if (!(identity_1.default.userIdentity &&
                        identity_1.default.userIdentity.accessToken &&
                        identity_1.default.userIdentity.refreshToken)) return [3, 2];
                    return [4, identity_1.default.heartbeat()];
                case 1:
                    _a.sent();
                    headers['Authorization'] = "Bearer " + identity_1.default.userIdentity.accessToken;
                    _a.label = 2;
                case 2: return [2, fetch(identity_1.default.apiOrigin + "/identity/public/v1/auth/login", {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(tslib_1.__assign(tslib_1.__assign({}, identity), { userName: '', grantType: type }))
                    })
                        .then(JSONResponseHandler_1.default)
                        .then(function (json) {
                        if (userIdentity_1.isUserIdentity(json)) {
                            identity_1.default.userIdentity = json;
                            return json;
                        }
                        else {
                            throw json;
                        }
                    })];
            }
        });
    });
}
exports.socialLogin = socialLogin;
//# sourceMappingURL=socialSignOn.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initAppleSignOn = void 0;
var tslib_1 = __webpack_require__(13);
var constants_1 = __webpack_require__(15);
var APIErrorResponse_1 = __webpack_require__(24);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
exports.initAppleSignOn = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2, fetch(identity_1.default.apiOrigin + "/identity/public/v1/apple/authurl", {
                method: 'GET',
                cache: 'no-cache',
                headers: tslib_1.__assign({}, constants_1.headers)
            })
                .then(JSONResponseHandler_1.default)
                .then(function (res) {
                if (APIErrorResponse_1.isAPIErrorResponse(res)) {
                    throw res;
                }
                else {
                    var redirect = encodeURIComponent(identity_1.default.apiOrigin + "/identity/public/v1/apple/auth");
                    window.location.href = res + "&redirect_uri=" + redirect;
                }
            })];
    });
}); };
exports.default = exports.initAppleSignOn;
//# sourceMappingURL=initAppleSignOn.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.customButtonFacebookSignOn = exports.facebookSignOn = void 0;
var tslib_1 = __webpack_require__(13);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var socialSignOn_1 = __webpack_require__(57);
var getFacebookLoginStatus_1 = tslib_1.__importDefault(__webpack_require__(27));
var socialSignOnTypes_1 = __webpack_require__(28);
function facebookSignOn() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var facebookLoginStatus;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getFacebookLoginStatus_1.default(true)];
                case 1:
                    facebookLoginStatus = _a.sent();
                    if (!socialSignOnTypes_1.isFacebookLoginResponse(facebookLoginStatus)) return [3, 5];
                    if (!(facebookLoginStatus.status === 'connected')) return [3, 3];
                    return [4, socialSignOn_1.socialLogin('facebook', {
                            credentials: facebookLoginStatus.authResponse.accessToken
                        })];
                case 2: return [2, _a.sent()];
                case 3:
                    if (identity_1.default._useCustomFBButton) {
                        return [2, customButtonFacebookSignOn()];
                    }
                    else {
                        throw new Error("User canceled login, did not fully authorize, or is not logged in to Facebook: " + facebookLoginStatus);
                    }
                    _a.label = 4;
                case 4: return [3, 6];
                case 5: throw new Error("Error getting login status. Please try again. " + facebookLoginStatus);
                case 6: return [2];
            }
        });
    });
}
exports.facebookSignOn = facebookSignOn;
function customButtonFacebookSignOn() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            return [2, window.FB.login(function (response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(response.status === 'connected')) return [3, 2];
                                return [4, socialSignOn_1.socialLogin('facebook', {
                                        credentials: response.authResponse.accessToken
                                    })];
                            case 1: return [2, _a.sent()];
                            case 2: throw new Error("User canceled login, did not fully authorize, or is not logged in to Facebook: " + response);
                        }
                    });
                }); })];
        });
    });
}
exports.customButtonFacebookSignOn = customButtonFacebookSignOn;
exports.default = facebookSignOn;
//# sourceMappingURL=facebookSignOn.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.appleSignOn = void 0;
var tslib_1 = __webpack_require__(13);
var socialSignOn_1 = __webpack_require__(57);
exports.appleSignOn = function (code) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2, socialSignOn_1.socialLogin('apple', { credentials: code })];
    });
}); };
exports.default = exports.appleSignOn;
//# sourceMappingURL=appleSignOn.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(13);
var APIErrorResponse_1 = __webpack_require__(24);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var constants_1 = __webpack_require__(15);
function unlinkSocialIdentity(grantType) {
    return identity_1.default.heartbeat().then(function () {
        return fetch(identity_1.default.apiOrigin + "/identity/public/v1/identity/" + grantType, {
            method: 'DELETE',
            headers: tslib_1.__assign({ Authorization: "Bearer " + identity_1.default.userIdentity.accessToken }, constants_1.headers)
        })
            .then(JSONResponseHandler_1.default)
            .then(function (json) {
            if (APIErrorResponse_1.isAPIErrorResponse(json)) {
                throw json;
            }
            else {
                return json;
            }
        });
    });
}
exports.default = unlinkSocialIdentity;
//# sourceMappingURL=unlinkSocialIdentity.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSwgAccessToken = exports.isSwgAccessTokenResponse = void 0;
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var constants_1 = __webpack_require__(15);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
function isSwgAccessTokenResponse(object) {
    return object.accessToken !== undefined;
}
exports.isSwgAccessTokenResponse = isSwgAccessTokenResponse;
exports.getSwgAccessToken = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var headers;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                headers = tslib_1.__assign({}, constants_1.headers);
                if (!(identity_1.default.userIdentity &&
                    identity_1.default.userIdentity.accessToken &&
                    identity_1.default.userIdentity.refreshToken)) return [3, 2];
                return [4, identity_1.default.heartbeat()];
            case 1:
                _a.sent();
                headers['Authorization'] = "Bearer " + identity_1.default.userIdentity.accessToken;
                _a.label = 2;
            case 2: return [2, fetch(identity_1.default.apiOrigin + "/identity/public/v1/swg/accesstoken", {
                    method: 'GET',
                    headers: headers
                })
                    .then(JSONResponseHandler_1.default)
                    .then(function (response) {
                    if (isSwgAccessTokenResponse(response)) {
                        return response;
                    }
                    else {
                        throw response;
                    }
                })];
        }
    });
}); };
exports.default = exports.getSwgAccessToken;
//# sourceMappingURL=getSwgAccessToken.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSwgLogin = exports.isCheckSwgLoginResponse = void 0;
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var constants_1 = __webpack_require__(15);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var initGoogleLogin_1 = __webpack_require__(55);
function isCheckSwgLoginResponse(object) {
    return object.identityExists !== undefined;
}
exports.isCheckSwgLoginResponse = isCheckSwgLoginResponse;
exports.checkSwgLogin = function (idToken) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var googleIdToken;
    var _a, _b, _c, _d, _e;
    return tslib_1.__generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                googleIdToken = idToken;
                if (!!googleIdToken) return [3, 2];
                return [4, initGoogleLogin_1.getGoogleAuthInstance()];
            case 1:
                _f.sent();
                googleIdToken = (_e = (_d = (_c = (_b = (_a = identity_1.default._google) === null || _a === void 0 ? void 0 : _a.authInstance) === null || _b === void 0 ? void 0 : _b.currentUser) === null || _c === void 0 ? void 0 : _c.get()) === null || _d === void 0 ? void 0 : _d.getAuthResponse()) === null || _e === void 0 ? void 0 : _e.id_token;
                _f.label = 2;
            case 2:
                if (!googleIdToken) {
                    console.error('No Google ID token found. Either the user is not logged in with Google, or the Google Auth2 SDK is incorrectly loaded.');
                    return [2, { identityExists: false }];
                }
                return [2, fetch(identity_1.default.apiOrigin + "/identity/public/v1/swg/checkloginexists", {
                        method: 'POST',
                        headers: constants_1.headers,
                        body: JSON.stringify({ token: googleIdToken })
                    })
                        .then(JSONResponseHandler_1.default)
                        .then(function (response) {
                        if (isCheckSwgLoginResponse(response)) {
                            return response;
                        }
                        else {
                            throw response;
                        }
                    })];
        }
    });
}); };
exports.default = exports.checkSwgLogin;
//# sourceMappingURL=checkSwgLogin.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.relinkGoogleAccount = void 0;
var tslib_1 = __webpack_require__(13);
var JSONResponseHandler_1 = tslib_1.__importDefault(__webpack_require__(20));
var constants_1 = __webpack_require__(15);
var identity_1 = tslib_1.__importDefault(__webpack_require__(14));
var userIdentity_1 = __webpack_require__(21);
var getSwgAccessToken_1 = __webpack_require__(62);
exports.relinkGoogleAccount = function (accessToken) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var headers, subscriptionToken;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                headers = tslib_1.__assign({}, constants_1.headers);
                if (!(identity_1.default.userIdentity &&
                    identity_1.default.userIdentity.accessToken &&
                    identity_1.default.userIdentity.refreshToken)) return [3, 2];
                return [4, identity_1.default.heartbeat()];
            case 1:
                _a.sent();
                headers['Authorization'] = "Bearer " + identity_1.default.userIdentity.accessToken;
                return [3, 3];
            case 2: throw new Error('[Arc Identity SDK] no logged in user found.');
            case 3: return [4, identity_1.default.getSwgAccessToken()];
            case 4:
                subscriptionToken = _a.sent();
                if (!getSwgAccessToken_1.isSwgAccessTokenResponse(subscriptionToken)) {
                    throw subscriptionToken;
                }
                return [2, fetch(identity_1.default.apiOrigin + "/identity/public/v1/swg/" + subscriptionToken.accessToken + "/relink/" + accessToken, {
                        method: 'GET',
                        headers: headers
                    })
                        .then(JSONResponseHandler_1.default)
                        .then(function (response) {
                        if (userIdentity_1.isUserIdentity(response)) {
                            identity_1.default.userIdentity = response;
                            return response;
                        }
                        else {
                            throw response;
                        }
                    })];
        }
    });
}); };
exports.default = exports.relinkGoogleAccount;
//# sourceMappingURL=relinkGoogleAccount.js.map

/***/ }),
/* 65 */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@arc-publishing/sdk-identity@1.55.0\",\"_id\":\"@arc-publishing/sdk-identity@1.55.0\",\"_inBundle\":false,\"_integrity\":\"sha512-OQcJQ8FqFVZnYKmnInJLM/YwK+kVl3YWCMMn3qtJ0IU1rrvWJDDLvW0hcoKj1/Am100Z2ckkLum3s/YMvLP8tg==\",\"_location\":\"/@arc-publishing/sdk-identity\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"@arc-publishing/sdk-identity@1.55.0\",\"name\":\"@arc-publishing/sdk-identity\",\"escapedName\":\"@arc-publishing%2fsdk-identity\",\"scope\":\"@arc-publishing\",\"rawSpec\":\"1.55.0\",\"saveSpec\":null,\"fetchSpec\":\"1.55.0\"},\"_requiredBy\":[\"/\",\"/@tr/rcom-raptorui-subscription\"],\"_resolved\":\"https://registry.npmjs.org/@arc-publishing/sdk-identity/-/sdk-identity-1.55.0.tgz\",\"_shasum\":\"ba0319d9101920726b3e20cf23dd51e8dff22930\",\"_spec\":\"@arc-publishing/sdk-identity@1.55.0\",\"_where\":\"/var/lib/jenkins/workspace/c-fusion-frontend-releases_v1.12/build\",\"author\":{\"name\":\"Arc Subscriptions\",\"url\":\"http://arcpublishing.com/\"},\"bugs\":{\"url\":\"https://github.com/WPMedia/arc-subs-ui/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"JS Identity SDK for working with Identity API\",\"devDependencies\":{\"@types/fetch-mock\":\"^7.2.2\",\"@types/gapi\":\"^0.0.39\",\"@types/gapi.auth2\":\"^0.0.53\",\"@types/jest\":\"^24\",\"@types/node\":\"^11.10.5\",\"awesome-typescript-loader\":\"^5.2.1\",\"fetch-mock\":\"^7.3.0\",\"html-webpack-exclude-assets-plugin\":\"0.0.7\",\"html-webpack-plugin\":\"^3.2.0\",\"jest\":\"^24\",\"jest-junit\":\"^6.4.0\",\"node-fetch\":\"^2.3.0\",\"shx\":\"^0.3.2\",\"terser-webpack-plugin\":\"^1.2.1\",\"ts-jest\":\"^26.5.1\",\"typescript\":\"^3.8\",\"webpack\":\"^4.28.4\",\"webpack-cli\":\"^3.2.1\",\"webpack-dev-server\":\"^3.1.14\"},\"engines\":{\"node\":\">=8\"},\"gitHead\":\"a8265199c71ff6bb3aa4c071d1c5f04cb22246e5\",\"homepage\":\"https://github.com/WPMedia/arc-subs-ui/tree/master/packages/sdk-identity#readme\",\"keywords\":[\"identity\",\"arc\",\"washingtonpost\",\"sdk\",\"typescript\"],\"license\":\"ISC\",\"main\":\"lib/index.js\",\"module\":\"lib-esm/index.esm.js\",\"name\":\"@arc-publishing/sdk-identity\",\"private\":false,\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/WPMedia/arc-subs-ui.git\"},\"scripts\":{\"build\":\"npm run clean && tsc && tsc -m es6 --outDir lib-esm && webpack\",\"build:umd\":\"webpack\",\"clean\":\"shx rm -rf umd lib lib-esm lib-umd test-report.html\",\"prepare\":\"npm run build\",\"start\":\"npm run build:umd && webpack-dev-server --colors --progress --host 0.0.0.0\",\"test\":\"jest --colors\",\"test:ci\":\"JEST_JUNIT_OUTPUT=../../reports/jest/sdk-identity.xml jest --ci --colors --reporters=default --reporters=\\\"jest-junit\\\" --no-cache --runInBand\",\"test:coverage\":\"jest --coverage --colors\",\"test:watch\":\"jest --watch\"},\"version\":\"1.55.0\"}");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * @preserve
 * riveted.js | v0.6.1
 * Copyright (c) 2016 Rob Flaherty (@robflaherty)
 * Licensed under the MIT license
 */
!function (e, n) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  var e = function () {
    function e(e) {
      e = e || {}, p = parseInt(e.reportInterval, 10) || 5, g = parseInt(e.idleTimeout, 10) || 30, k = e.gaGlobal || 'ga', typeof window[k] === 'function' && (w = !0), typeof _gaq !== 'undefined' && typeof _gaq.push === 'function' && (I = !0), typeof dataLayer !== 'undefined' && typeof dataLayer.push === 'function' && (h = !0), T = 'gaTracker' in e && typeof e.gaTracker === 'string' ? e.gaTracker + '.send' : 'send', typeof e.eventHandler === 'function' && (s = e.eventHandler), typeof e.userTimingHandler === 'function' && (m = e.userTimingHandler), y = 'nonInteraction' in e && (e.nonInteraction === !1 || e.nonInteraction === 'false') ? !1 : !0, t(document, 'keydown', v), t(document, 'click', v), t(window, 'mousemove', n(v, 500)), t(window, 'scroll', n(v, 500)), t(document, 'visibilitychange', o), t(document, 'webkitvisibilitychange', o);
    }

    function n(e, n) {
      var t;
      var i;
      var o;
      var a = null;
      var r = 0;

      var u = function u() {
        r = new Date(), a = null, o = e.apply(t, i);
      };

      return function () {
        var c = new Date();
        r || (r = c);
        var d = n - (c - r);
        return t = this, i = arguments, d <= 0 ? (clearTimeout(a), a = null, r = c, o = e.apply(t, i)) : a || (a = setTimeout(u, d)), o;
      };
    }

    function t(e, n, t) {
      e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent ? e.attachEvent('on' + n, t) : e['on' + n] = t;
    }

    function i() {
      clearTimeout(H), r();
    }

    function o() {
      (document.hidden || document.webkitHidden) && i();
    }

    function a() {
      _ += 1, _ > 0 && _ % p === 0 && s(_);
    }

    function r() {
      b = !0, clearInterval(E);
    }

    function u() {
      i(), L = !0;
    }

    function c() {
      L = !1;
    }

    function d() {
      b = !1, clearInterval(E), E = setInterval(a, 1e3);
    }

    function l() {
      var e = new Date();
      var n = e - D;
      R = !0, m(n), E = setInterval(a, 1e3);
    }

    function f() {
      D = new Date(), _ = 0, R = !1, b = !1, clearInterval(E), clearTimeout(H);
    }

    function v() {
      L || (R || l(), b && d(), clearTimeout(H), H = setTimeout(i, 1e3 * g + 100));
    }

    var s;
    var m;
    var p;
    var g;
    var y;
    var w;
    var I;
    var T;
    var h;
    var k;
    var R = !1;
    var b = !1;
    var L = !1;
    var _ = 0;
    var D = new Date();
    var E = null;
    var H = null;
    return m = function m(e) {
      h ? dataLayer.push({
        event: 'RivetedTiming',
        eventCategory: 'Riveted',
        timingVar: 'First Interaction',
        timingValue: e
      }) : (w && window[k](T, 'timing', 'Riveted', 'First Interaction', e), I && _gaq.push(['_trackTiming', 'Riveted', 'First Interaction', e, null, 100]));
    }, s = function s(e) {
      h ? dataLayer.push({
        event: 'Riveted',
        eventCategory: 'Riveted',
        eventAction: 'Time Spent',
        eventLabel: e,
        eventValue: p,
        eventNonInteraction: y
      }) : (w && window[k](T, 'event', 'Riveted', 'Time Spent', e.toString(), p, {
        nonInteraction: y
      }), I && _gaq.push(['_trackEvent', 'Riveted', 'Time Spent', e.toString(), p, y]));
    }, {
      init: e,
      trigger: v,
      setIdle: i,
      on: c,
      off: u,
      reset: f
    };
  }();

  return e;
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
var getParameterByName = function getParameterByName(name) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  // eslint-disable-next-line no-useless-escape
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);

  if (!results) {
    return null;
  }

  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}; // TODO Verify the approach and correct the detection


var isMobile = function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLegalSection", function() { return isLegalSection; });
var isLegalSection = function isLegalSection(section) {
  var _section$id;

  if (section !== null && section !== void 0 && section.parent) {
    return isLegalSection(section.parent);
  }

  if (section !== null && section !== void 0 && (_section$id = section.id) !== null && _section$id !== void 0 && _section$id.startsWith('/legal')) {
    return true;
  }

  return false;
};

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentType", function() { return getContentType; });
/**
 * Gets the content type of a page
 *
 * Note: In the future, we may refactor the project to use metatags to identify the page type. Using this API ensures that any code will
 * be compatible with future changes
 *
 * @param {object} content the page content
 * @returns the content type of the page, examples: {topic, story, section, ...}
 */
var getContentType = function getContentType(content) {
  var _content$section;

  var contentType = content.type || ((_content$section = content.section) === null || _content$section === void 0 ? void 0 : _content$section.type);

  if (!contentType && content.topics) {
    contentType = 'topic';
  }

  return contentType;
};

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcAttributesName", function() { return ArcAttributesName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcAttributesValue", function() { return ArcAttributesValue; });
const ArcAttributesName = {
  access_code: 'Access Code',
  access_code_to_validate: 'Access Code Validated',
  admin: 'Admin',
  announcements_and_offers: 'Announcements & Offers',
  country: 'Country',
  daily_docket: 'Daily Docket',
  geolocation: 'Geolocation',
  industry: 'Industry',
  industry_job_role: 'Industry Job Role',
  job_level: 'Job level',
  job_role_and_area: 'Job Role/Job Area',
  newsletter_subscription: 'Newsletter Subscription',
  org_acct: 'Organization Account',
  org_type: 'Organization Type',
  org_type_segment: 'Organization Type Segment',
  subscription_level: 'Subscription Plan',
  subscription_status: 'Subscription Status',
  terms_and_conditions_acceptance: 'T&C Acceptance',
  registration_type: 'Registration Type',
  sailthru_uuid: 'sailthru-uuid'
};
const ArcAttributesValue = {
  payment_valid: 'VALID',
  payment_error: 'ERROR',
  emerald_create_account_token_invalid: 'LEGAL_TOKEN_INVALID'
};

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackPageView", function() { return trackPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerGuid", function() { return getCustomerGuid; });
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_0__);

var trackPageView = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  return new Promise(function (resolve) {
    var asyncLoad = function asyncLoad() {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = '//img.en25.com/i/elqCfg.min.js';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);

      s.onload = function () {
        var _elqQ = window._elqQ || [];

        _elqQ.push(['elqSetSiteId', '1319934923']);

        _elqQ.push(['elqTrackPageView', window.location.href]);

        resolve();
      };

      s.onerror = function () {
        resolve();
      };
    }; // eslint-disable-next-line no-negated-condition


    if (document.readyState !== 'loading') {
      asyncLoad();
    } else {
      window.addEventListener('DOMContentLoaded', asyncLoad, false);
    }
  });
});

var getCustomerGuid = function getCustomerGuid() {
  var tryGetGuid = function tryGetGuid() {
    if (typeof window.GetElqCustomerGUID === 'function') {
      return window.GetElqCustomerGUID();
    }

    return undefined;
  };

  return new Promise(function (resolve) {
    var guid = tryGetGuid();

    if (guid) {
      resolve(guid);
    } else {
      trackPageView().then(function () {
        var _elqQ = window._elqQ || [];

        _elqQ.push(['elqGetCustomerGUID']);

        var timeout = 5;

        function poll() {
          if (timeout === 0) {
            resolve(undefined);
            return;
          }

          var guid = tryGetGuid();

          if (guid) {
            resolve(guid);
            return;
          }

          timeout -= 1;
          window.setTimeout(poll, 500);
        }

        poll();
      });
    }
  });
};



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var before = __webpack_require__(73);

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(74);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(75);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(76);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(77),
    isSymbol = __webpack_require__(78);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(79),
    isObjectLike = __webpack_require__(86);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(80),
    getRawTag = __webpack_require__(84),
    objectToString = __webpack_require__(85);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(81);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(82);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(83)))

/***/ }),
/* 83 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(80);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analitics_permutive_map", function() { return analitics_permutive_map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authentication_keys", function() { return authentication_keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impression_keys", function() { return impression_keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interstitial_keys", function() { return interstitial_keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkout_keys", function() { return checkout_keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identify_keys", function() { return identify_keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r_impression_keys", function() { return r_impression_keys; });
var analitics_permutive_map = {
  'application.authentication': 'ApplicationAuthentication',
  'subscription.impression.clicked': 'SubscriptionImpressionClicked',
  'subscription.impression.exit': 'SubscriptionImpressionExit',
  'subscription.interstitial.tier.seen': 'SubscriptionInterstitialSeen',
  'subscription.interstitial.tier.selected': 'SubscriptionInterstitialSelected',
  'subscription.checkout.step.form.start': 'SubscriptionCheckoutStepStarted',
  'subscription.checkout.step.form.error': 'SubscriptionCheckoutStepCompleteError',
  'subscription.checkout.step.form.completed': 'SubscriptionCheckoutStepComplete',
  'subscription.checkout.step.subscription.changed': 'SubscriptionOptionChanged',
  'subscription.checkout.step.payment.form.completed': 'SubscriptionPaymentForm',
  'subscription.checkout.step.payment.terms.accepted': 'SubscriptionPaymentFormAccept',
  'subscription.checkout.step.payment.terms.exit': 'SubscriptionPaymentFormAcceptExit',
  'subscription.checkout.purchase.confirmation': 'SubscriptionPurchaseConfirmation',
  'subscription.checkout.purchase.processing.country.error': 'SubscriptionPurchaseRefused',
  'analytics.identify': 'UserIdentify',
  'registration.impression.clicked': 'RegistrationImpressionClicked',
  'registration.impression.seen': 'RegistrationImpressionSeen'
};
var authentication_keys = ['application.authentication'];
var impression_keys = ['subscription.impression.clicked', 'subscription.impression.exit'];
var r_impression_keys = ['registration.impression.clicked', 'registration.impression.seen'];
var interstitial_keys = ['subscription.interstitial.tier.seen', 'subscription.interstitial.tier.selected'];
var checkout_keys = ['subscription.checkout.step.form.start', 'subscription.checkout.step.form.error', 'subscription.checkout.step.form.completed', 'subscription.checkout.step.subscription.changed', 'subscription.checkout.step.payment.form.completed', 'subscription.checkout.step.payment.terms.accepted', 'subscription.checkout.step.payment.terms.exit', 'subscription.checkout.purchase.confirmation', 'subscription.checkout.purchase.processing.country.error'];
var identify_keys = ['analytics.identify'];


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapAuthentication", function() { return MapAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapImpression", function() { return MapImpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapInterstitial", function() { return MapInterstitial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCheckout", function() { return MapCheckout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapIdentify", function() { return MapIdentify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRImpression", function() { return MapRImpression; });
var MapAuthentication = function MapAuthentication(params) {
  var boolToString = function boolToString(some_value) {
    return String(some_value);
  };

  return {
    label: params.label,
    application: {
      authenticated_state: params.application_authenticated_state,
      authenticated_role: params.application_authenticated_job_role,
      authenticated_position: params.application_authenticated_position,
      authenticated_industry: params.application_authenticated_industry,
      authenticated_country: params.application_authenticated_country,
      authenticated_newsletter: boolToString(params.application_authenticated_newsletter),
      authenticated_user_id: params.application_authenticated_user_id,
      authenticated_organization_id: params.application_authenticated_organization_id,
      authenticated_contract_type: params.application_authenticated_contact_type,
      authenticated_opt_in: params.application_authenticated_opt_in
    }
  };
};

var MapImpression = function MapImpression(params) {
  return {
    type: params.subscription_type,
    paywall_impression_position: params.paywall_impression_position,
    category: params.category
  };
};

var MapRImpression = function MapRImpression(params) {
  return {
    label: params.label
  };
};

var MapInterstitial = function MapInterstitial(params) {
  return {
    type: params.subscription_type,
    label: params.label,
    category: params.category,
    ecommerce: {
      tier: params.subscription_ecommerce_tier,
      price: params.subscription_ecommerce_price,
      currency: params.subscription_ecommerce_currency
    }
  };
};

var MapCheckout = function MapCheckout(params) {
  var extractNumberfromStep = function extractNumberfromStep(some_flow) {
    if (!some_flow) {
      return some_flow;
    }

    var removed_step = some_flow.replace('step ', '');
    return Number(removed_step);
  };

  return {
    ecommerce: {
      tier: params.subscription_ecommerce_tier,
      order_id: params.subscription_ecommerece_order_id,
      currency: params.subscription_ecommerce_currency,
      flow: extractNumberfromStep(params.subscription_ecommerece_flow),
      type: params.subscription_type
    },
    label: params.label,
    category: params.category
  };
};

var MapIdentify = function MapIdentify(params) {
  return {
    label: params.label,
    application: {
      authenticated_state: params.application_authenticated_state,
      authenticated_role: params.application_authenticated_role,
      authenticated_position: params.application_authenticated_position,
      authenticated_industry: params.application_authenticated_industry,
      authenticated_country: params.application_authenticated_country,
      authenticated_newsletter: params.application_authenticated_newsletter,
      authenticated_user_id: params.application_authenticated_user_id,
      authenticated_organization_id: params.application_authenticated_organization_id,
      authenticated_contract_type: params.application_auhenticated_contact_type,
      subscription_type: params.application_subscription_type,
      subscription_revenue: params.application_subscription_revenue
    }
  };
};



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeUTM", function() { return storeUTM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveUTM", function() { return retrieveUTM; });
var storeUTM = function storeUTM() {
  if (window.sessionStorage && !window.sessionStorage.getItem('utm')) {
    var url_params = new URLSearchParams(window.location.search);
    var utm_source = url_params.get('utm_source');
    var utm_campaign = url_params.get('utm_campaign');
    var utm_term = url_params.get('utm_term');
    var utm_medium = url_params.get('utm_medium');
    var utm_content = url_params.get('utm_content');
    var elqCampaignId = url_params.get('elqCampaignId');

    if (!utm_source && !utm_medium) {
      var referrer_host_name = document.referrer;

      if (referrer_host_name) {
        if (referrer_host_name.indexOf('google') > -1) {
          utm_medium = 'organic';
          utm_source = 'google';
        } else if (referrer_host_name.indexOf('bing') > -1) {
          utm_medium = 'organic';
          utm_source = 'bing';
        } else if (referrer_host_name.indexOf('yahoo') > -1) {
          utm_medium = 'organic';
          utm_source = 'yahoo';
        } else if (referrer_host_name.indexOf('duckduckgo') > -1) {
          utm_medium = 'organic';
          utm_source = 'duckduckgo';
        } else if (referrer_host_name.indexOf('ecosia.org') > -1) {
          utm_medium = 'organic';
          utm_source = 'ecosia.org';
        } else if (referrer_host_name.indexOf('reuters') === -1) {
          utm_medium = 'referral';
          utm_source = referrer_host_name;
        }
      } else {
        utm_medium = 'direct';
        utm_source = 'none';
      }
    }

    window.sessionStorage.setItem('utm', JSON.stringify({
      utm_source: utm_source,
      utm_campaign: utm_campaign,
      utm_term: utm_term,
      utm_medium: utm_medium,
      utm_content: utm_content,
      elqCampaignId: elqCampaignId
    }));
  }
};

var retrieveUTM = function retrieveUTM() {
  if (window.sessionStorage) {
    try {
      var utm_obj = JSON.parse(window.sessionStorage.getItem('utm'));
      return utm_obj;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Encountered error while retrieving UTM information in Session Storage.');
      return {};
    }
  }
};



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @function remainingArticles
 * @summary Calc remaining stories based on data stored in window object by the Paywall script.
 * @description This function calc the remaining stories based on data stored in window object into ArcP property. The values are obsfucated by Arc. To a better knowledge please check the documenation link: https://reuters.arcpublishing.com/alc/arc-products/arc-subscriptions/release-notes/developer-guide-getting-started-with-the-paywall/
 * @param {Object} facts Returns all the facts gathered by the paywall evaluation script.
 * @param {Object} rules Returns the array of rules being evaluated
 * @returns The remaining article count or undefined if it is not possible to compute the count
 */
var remainingArticles = function remainingArticles(facts, rules) {
  var _facts$v;

  // Abort if essential data not present
  if (!facts || !((_facts$v = facts.v) !== null && _facts$v !== void 0 && _facts$v.ci) || !rules || !rules.length) {
    // eslint-disable-next-line no-console
    console.warn('Cannot compute remaining articles:', facts, rules);
    return undefined;
  } // v: "visited", pages that users visited
  // ci: "content identifiers", stories ID related to users visits. The values do not repeat if the user visits the same story more than once.


  var content_identifiers = facts.v.ci;
  var rt = rules[0].rt;
  var read_count = content_identifiers.length || 0;
  var limit = rt[1] || 0;
  var remaining = limit - read_count;
  var result = remaining < 0 ? 0 : remaining;
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (remainingArticles);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tr_rcom_raptorui_subscription_dist_apiproxy_RcpProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);
/* harmony import */ var _tr_rcom_raptorui_subscription_dist_config_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(120);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(122);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_utils_remainingArticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90);
/* harmony import */ var _components_shared_utils_paywall_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(123);
/* harmony import */ var _attachSophiEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(124);
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(125);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // Note: These methods only work in a deployment environment








/**
 * Attaches the 'sophi' object to the browser window resulting in the following events automatically being sent:
 * • Page Views: This includes screen views for apps and at minimum should track section and article views
 * • Page Pings: This is a heartbeat that is sent if person was active (i.e. interacted with it – scrolled, moved mouse, taped/clicked
 *     anywhere) on a page. It should be sent after first 5 seconds and then every 20 seconds as long as user stays active.
 * • Link Impressions: Captures array of all “links” (i.e. items taking visitors to a different page/screen) that were presented and was
 *     seen by the visitor. At minimum should contain all article “links”. ”Link” is considered seen as long as at least 50% of it was in a
 *     viewport for at least 0.5 seconds. The event should be sent before person leaves a page/screen or immediately after loading the
 *     designation page/screen.
 * • Link Clicks: Tracks a “link” that visitor clicked/taped. At minimum should be tracked for article “links”.
 *
 * Additionally, this file contains support for the following manual events:
 * • Wall Encounters – Indicates that a visitor hit a (pay)wall of some kind
 * • Subscriptions – Captures data about subscription
 *
 * See the document "Sophi Implementation Instructions" for more details & the JIRA ticket:
 * https://jira.thomsonreuters.com/browse/CNRM-2387?jql=text%20~%20%22sophi%22
 */
// eslint-disable-next-line no-console

console.log('### Sophi: index.js');
/** Cannot use window.Fusion.environment because sophi will sometimes start before the environment is assigned to window.Fusion */

var FUSION_ENVIRONMENT = null;
/** The app version */

var APP_VERSION_STRING = '1.0.0';
/** A list of the pages on which we attach Sophi [Note: Homepage is a section and therefore supported] */

var SOPHI_SUPPORTED_PAGE_TYPE_STRINGS = ['article', 'section'];
/** The number of articles remaining if the number cannot be determined */

var DEFAULT_REMAINING_ARTICLES = Number.MAX_VALUE;
/** The number of articles the current user has remaining */

var remainingArticlesCount = DEFAULT_REMAINING_ARTICLES;
/** The access state  */

var articlePaywallState = _components_shared_utils_paywall_helpers__WEBPACK_IMPORTED_MODULE_5__["PaywallState"].UNDETERMINED;
/**
 * UNREG_NOT_PAID: User is not logged in but from supported country
 * UNREG_FREE: User is not logged in and from the ROW [Rest of the world]
 * FREE: User is from a ROW (Rest of the World) country and not required to have a paid subscription
 * NOT_PAID:  User is from a paywall country, but has not paid
 * PAID: User is from a paywall country and has a paid subscription
 * EMERALD: User is a premium corporate user with a paid subscription
 */

var KNOWN_SUBSCRIPTIONS = ['UNREG_NOT_PAID', 'UNREG_FREE', 'FREE', 'PAID', 'NOT_PAID', 'EMERALD'];
/** Used to determine when the user is completing a subscription */

var SUBSCRIPTION_PAGE = 'tellusmore'; // --- Helpers

/**
 * Returns a promise that is executed when the paywall is setup
 *
 * IMPORTANT:
 * 1. This message is only sent for articles *not* sections and other pages
 * 2. The message is only sent in development when connected to the VPN
 *
 * @returns a promise
 */

var paywallComplete = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve) {
              window.addEventListener('paywall-complete', resolve, false);
              return; // eslint-disable-line no-useless-return
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function paywallComplete() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Get the global content result object from the window
 */


var getGlobalContent = function getGlobalContent() {
  var _window$Fusion, _window$Fusion$global;

  return ((_window$Fusion = window.Fusion) === null || _window$Fusion === void 0 ? void 0 : (_window$Fusion$global = _window$Fusion.globalContent) === null || _window$Fusion$global === void 0 ? void 0 : _window$Fusion$global.result) || {};
};
/**
 * Get the article or null if page is not an article
 *
 * @returns the article or null if page is not an article
 */


var getArticle = function getArticle() {
  var result = getGlobalContent();
  var article = result && result.type === 'story' ? result : null;
  return article;
};
/**
 * Get the name of the currrent page
 *
 * @returns the name of the current page
 */


var getPageName = function getPageName() {
  var page = window.location.pathname.split('/').filter(function (s) {
    return s;
  }).pop();
  return page;
};
/**
 * Implements the requirement:
 *
 * "Regarding breadcrumb [SectionSubsectionsPathString] and section name [getSectionString] should not start or end with "/".
 * You can use either "/" or ":" as a separator to separate section and subsections"
 *
 * Sophi Team: "We recommend supplying the breadcrumb and section name in lower case"
 *
 * Note: We elected to use '#' so that names normalised for Sophi appear distinct
 *
 * @param {string} name the name to normalise
 * @return the normalised string following Sophi rules
 */


var normalizeSophiSection = function normalizeSophiSection(name) {
  if (!name) {
    return '';
  } // Remove any leading or trailing slashes


  name = name.replace(/^\/+|\/+$/g, '');
  var SOPHI_SECTION_SEPARATOR = ':'; // Replace any slashes with #

  name = name.replace(/\//g, SOPHI_SECTION_SEPARATOR);
  name = name.toLowerCase();
  return name;
};

var trackSophiEvent = function trackSophiEvent(eventName, label) {
  var rest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  window.rpta.cmd.push(function () {
    window.rpta.trackEvent(eventName, _objectSpread({
      label: label,
      nonInteraction: 1,
      uiInteraction: 0
    }, rest));
  });
}; // --- Helpers for wall type

/**
 * Get the page content code type
 * {free, metered, ...}
 *
 * @returns the page content code type
 */


var getPageContentCode = function getPageContentCode() {
  var article = getArticle();
  return article ? article.content_code : 'free';
};
/**
 * Types of user:
 *   . FREE: User is from a ROW (Rest of the World) country and not required to have a paid subscription
 *   . NOT_PAID:  User is from a paywall country, but has not paid
 *   . PAID: User is from a paywall country and has a paid subscription
 *   . EMERALD: User is a premium corporate user with a paid subscription
 *   . PREMIUM: [This one I have assumed - not confirmed]
 *
 * Types added for Sophi:
 *   . UNREG_NOT_PAID is a unregistered user in a supported country
 *   . UNREG_FREE is a an unregistered user in the rest of the world
 *
 * @returns the tpye of user
 */


var getUserType = function getUserType(profile) {
  if (!profile) {
    // For the purposes of Sophi, a user that is not logged in is treated as unregistered
    return isSupportedCountry(Object(_tr_rcom_raptorui_subscription_dist_config_countries__WEBPACK_IMPORTED_MODULE_2__["getCountryByGeolocation"])()) ? 'UNREG_NOT_PAID' : 'UNREG_FREE';
  }

  var subscriptionPlanArr = profile === null || profile === void 0 ? void 0 : profile.attributes.filter(function (attribute) {
    return attribute.name === 'Subscription Plan';
  });

  if (!subscriptionPlanArr || subscriptionPlanArr.length === 0) {
    // eslint-disable-next-line no-console
    console.error('### Sophi: Registered user has no subscription plan'); // Infer the correct plan based the fact that they have no recognised paid subscription

    return isSupportedCountry(Object(_tr_rcom_raptorui_subscription_dist_config_countries__WEBPACK_IMPORTED_MODULE_2__["getCountryByGeolocation"])()) ? 'NOT_PAID' : 'FREE';
  }

  return subscriptionPlanArr[0].value;
};
/**
 * Returns the Sophi paywall type
 *
 * @param {string} userType The type of user: {FREE, PAID, ...}
 * @param {string} pageType The type of page: {article, section, ...}
 * @param {string} pageContentCode The content code of the page: {free, metered, ...}
 *
 * @returns The sophi paywall type
 */


var getWallTypeImpl = function getWallTypeImpl(userType, pageType, pageContentCode) {
  // Sections and other page types are currently free to all users
  if (pageType !== 'article') {
    return undefined;
  } // Analyse each type of article


  switch (pageContentCode.toLowerCase()) {
    case 'free':
      return getArticleWallType(userType);

    case 'metered':
      return getMeteredArticleWallType(userType);

    case 'freeForADay':
      // Treat as free for now as there are currently no plans to support this type
      return getArticleWallType(userType);

    case 'premium':
      return getArticleWallType(userType, 'PREMIUM');

    case 'legal':
      return getArticleWallType(userType, 'EMERALD');

    default:
      // eslint-disable-next-line no-console
      console.warn('Sophi unhandled pageContentCode', pageContentCode);
  }

  return 'paywall-hard';
};
/**
 * Gets the Sophi iwall type for a non-metered article
 *
 * @param {string} userTypeArticleFor the type of user the article is intended for
 * @param {string} userType the type of the current user
 *
 * @returns the Sophi WALL_TYPE_string or undefined if no wall
 */


var getArticleWallType = function getArticleWallType(userType) {
  var userTypeArticleFor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ALL';

  switch (userType) {
    case 'ALL':
    case userTypeArticleFor:
      return undefined;

    case 'UNREG_FREE':
    case 'UNREG_NOT_PAID':
      return 'regwall-hard';

    default:
      // eslint-disable-next-line no-console
      console.warn('Sophi unhandled userType', userType);
  }

  return 'paywall-hard';
};
/**
 * Gets the Sophi wall type for a metered article
 *
 * @param {string} userType The type of user
 *
 * @returns the Sophi paywall type or undefined if no wall
 */


var getMeteredArticleWallType = function getMeteredArticleWallType(userType) {
  if (remainingArticlesCount > 0) {
    // eslint-disable-next-line no-console
    console.log('### Sophi: User has articles remaining:', remainingArticlesCount);
    return undefined;
  }

  switch (userType) {
    // No Paywall: Undefined
    case 'PREMIUM':
    case 'EMERALD':
    case 'FREE':
      return undefined;
    // Registration Paywall: regwall-metered

    case 'UNREG_FREE':
    case 'UNREG_NOT_PAID':
      return remainingArticlesCount === 1 ? 'growl' : 'regwall-metered';
    // Metered Paywall: paywall-metered

    case 'NOT_PAID':
      return remainingArticlesCount === 1 ? 'growl' : 'paywall-metered';

    default:
      // eslint-disable-next-line no-console
      console.warn('### Sophi: Received an unknown user type');
  } // TODO: Check with team is this a good default?


  return 'paywall-metered';
};
/**
 * True if country is inside the paywall
 *
 * Note: add to the URL to simulate location: "?subscc=FR"
 */


var isSupportedCountry = function isSupportedCountry(country) {
  var _FUSION_ENVIRONMENT, _FUSION_ENVIRONMENT2, _FUSION_ENVIRONMENT3;

  // If user location not available then assume they are behind the paywall
  if (!country) {
    // eslint-disable-next-line no-console
    console.warn('### Sophi: Cannot determine if user is supported');
    return true;
  }

  var countryCode = country.alpha2;
  var supportedCountries = (_FUSION_ENVIRONMENT = FUSION_ENVIRONMENT) === null || _FUSION_ENVIRONMENT === void 0 ? void 0 : _FUSION_ENVIRONMENT.BUSINESS_COUNTRIES;

  if (!((_FUSION_ENVIRONMENT2 = FUSION_ENVIRONMENT) !== null && _FUSION_ENVIRONMENT2 !== void 0 && _FUSION_ENVIRONMENT2.BUSINESS_COUNTRIES) || ((_FUSION_ENVIRONMENT3 = FUSION_ENVIRONMENT) === null || _FUSION_ENVIRONMENT3 === void 0 ? void 0 : _FUSION_ENVIRONMENT3.BUSINESS_COUNTRIES.length) === 0) {
    // eslint-disable-next-line no-console
    console.warn('### Sophi: Cannot acquire business countries: Defaulting to 6');
    supportedCountries = ['ca', 'fr', 'de', 'ch', 'gb', 'us'];
  }

  var isSupported = supportedCountries.map(function (curr) {
    return curr.toLowerCase();
  }).includes(countryCode);
  return isSupported;
};
/**
 * Gets the remaining articles
 * TODO: remainingArticles being imported does not return correct results? Investigate...
 *
 * @returns the remaing articles
 */


var getRemainingArticles = function getRemainingArticles() {
  var count = DEFAULT_REMAINING_ARTICLES;

  if (window.ArcP) {
    var _window$ArcP = window.ArcP,
        _facts = _window$ArcP._facts,
        _rules = _window$ArcP._rules;
    count = Object(_components_shared_utils_remainingArticles__WEBPACK_IMPORTED_MODULE_4__["default"])(_facts, _rules);
  }

  if (count === undefined) {
    // eslint-disable-next-line no-console
    console.error('### Sophi: getRemainingArticles: returning undefined');
    count = DEFAULT_REMAINING_ARTICLES;
  } // eslint-disable-next-line no-console


  console.log('### Sophi: remaining article count:', count);
  return count;
};
/**
 * Determine if the subscription plan is known to Sophi
 *
 * @param {string} subscriptionPlan the type of subscription {'FREE', 'PAID', 'NOT_PAID', 'EMERALD'}
 * @returns true if the subscrption plan is known to Sophi
 */


var isKnownSubscription = function isKnownSubscription(subscriptionPlan) {
  return KNOWN_SUBSCRIPTIONS.includes(subscriptionPlan);
};
/**
 * Translate Fusion content types that are not compatible with Sophi ones
 *
 * @param {string} contentType the Fusion content type [For example: primary_media_type]
 * @returns the correspdonding Sophi content type
 *
 * External Sophi Team Feedback:
 * "As a fall back if you do find you have a page type going into production and want it to be scored. Please tag it with content type "article"
 * and reach out to us as soon as you can with the new content type you want added."
 */


var normalizeContentType = function normalizeContentType(contentType) {
  var _contentType;

  contentType = (_contentType = contentType) === null || _contentType === void 0 ? void 0 : _contentType.toLowerCase();

  switch (contentType) {
    // Use the most generic Sophi content type if nothing specified
    case undefined:
      return 'article';
    // Needs to be changed from Fusion to Sophi

    case 'gallery':
      return 'image';
    // No mapping, same in Fusion and Sophi

    case 'article':
    case 'audio':
    case 'video':
    case 'image':
      return contentType;

    default:
      // eslint-disable-next-line no-console
      console.warn('Sophi unhandled contentType', contentType);
  }

  return 'article';
}; // --- Core sohie data for the window

/**
 * Return "article" or "section" depending on the page type
 *
 * @returns "article" or "section"
 *
 * Sophi Requirements:
 *
 * Name:
 * -----
 * SECTION_SUBSECTIONS_PATH_string
 *
 * Replace With:
 * --------------
 * This should be only one of the following depending on what most of the content on the page is represented by:
 * article–for individual article pages section–for “section” pages (i.e.,pages containing links to articles with
 * a bit of description)
 *
 * Comments:
 * ----------
 * Generally, this should be set to "article" (for article pages) “section" or "subscription"(for subscription funnel pages).
 *
 * Mapping:
 * --------
 * Articles: "article"
 * Section pages: "section"
 */


var getPageTypeString = function getPageTypeString() {
  var _content$section;

  var content = getGlobalContent();

  if (content.type && content.type === 'story') {
    return 'article';
  }

  if (((_content$section = content.section) === null || _content$section === void 0 ? void 0 : _content$section.type) === 'section' || content.topics) {
    return 'section';
  } // Other pages


  return undefined;
};
/**
 * Return the section ID
 *
 * @returns the section ID
 *
 * Sophi Requirements:
 *
 * Name:
 * -----
 * SECTION_SUBSECTIONS_PATH_string: DONE
 *
 * Replace With:
 * -------------
 * This should be replaced with page path that contains sections or subsections that the page belongs to. Should be
 * an alphanumeric, lower cased string of up to 256 characters long with colons as separators of sections/subsections.
 *
 * Comments:
 * ----------
 * In the case of articles, we should use the ingested section -  the primary section coming from Arc
 * Question: This value could be changed in the future (Ask Sophi how do they will handle and use the section
 * information how can we  determine the content recommended on our side the ingested section or Pillar's section)
 *
 * Mapping:
 * ---------
 * API.results.taxonomy.section.id
 */


var getSectionSubsectionsPathString = function getSectionSubsectionsPathString() {
  var pageTypeString = getPageTypeString();
  var content = getGlobalContent();

  if (pageTypeString === 'article') {
    var _content$taxonomy, _content$taxonomy$sec;

    // Article
    return normalizeSophiSection((_content$taxonomy = content.taxonomy) === null || _content$taxonomy === void 0 ? void 0 : (_content$taxonomy$sec = _content$taxonomy.section) === null || _content$taxonomy$sec === void 0 ? void 0 : _content$taxonomy$sec.id);
  }

  if (pageTypeString === 'section') {
    var _content$section2;

    // Section
    var section = ((_content$section2 = content.section) === null || _content$section2 === void 0 ? void 0 : _content$section2.id) || (content === null || content === void 0 ? void 0 : content.entity);

    if (!section && content.topics) {
      section = content.entity;
    }

    return normalizeSophiSection(section);
  } // Other pages


  return undefined;
};
/**
 * Get the section string
 *
 * @returns the section string
 *
 * Sophi# Requirements:
 *
 * Name:
 * -----
 * SECTION_string: DONE
 *
 * Replace With:
 * --------------
 * This should be replaced with main section name that the page belongs to. Should be a string of up to 128 characters long
 *
 * Comments:
 * ---------
 * None
 *
 * Mapping:
 * ---------
 * Articles: result.taxonomy.section.parent.id # Confirming with Diego, believe this should be name?
 * Sections: results.section.parent.name
 * API.results.taxonomy.section.name
 */


var getSectionString = function getSectionString() {
  var content = getGlobalContent();
  var pageTypeString = getPageTypeString(); // Article

  if (pageTypeString === 'article') {
    var _content$taxonomy2, _content$taxonomy2$se, _content$taxonomy2$se2, _content$taxonomy3, _content$taxonomy3$se;

    // Note: Some articles have no parent
    return normalizeSophiSection(((_content$taxonomy2 = content.taxonomy) === null || _content$taxonomy2 === void 0 ? void 0 : (_content$taxonomy2$se = _content$taxonomy2.section) === null || _content$taxonomy2$se === void 0 ? void 0 : (_content$taxonomy2$se2 = _content$taxonomy2$se.parent) === null || _content$taxonomy2$se2 === void 0 ? void 0 : _content$taxonomy2$se2.name) || ((_content$taxonomy3 = content.taxonomy) === null || _content$taxonomy3 === void 0 ? void 0 : (_content$taxonomy3$se = _content$taxonomy3.section) === null || _content$taxonomy3$se === void 0 ? void 0 : _content$taxonomy3$se.name));
  } // Section [TODO: Think 2nd statement in OR is unncessary]


  if (pageTypeString === 'section') {
    var _content$section3, _content$section3$par, _content$taxonomy4, _content$taxonomy4$se, _content$section4;

    var section = ((_content$section3 = content.section) === null || _content$section3 === void 0 ? void 0 : (_content$section3$par = _content$section3.parent) === null || _content$section3$par === void 0 ? void 0 : _content$section3$par.name) || ((_content$taxonomy4 = content.taxonomy) === null || _content$taxonomy4 === void 0 ? void 0 : (_content$taxonomy4$se = _content$taxonomy4.section) === null || _content$taxonomy4$se === void 0 ? void 0 : _content$taxonomy4$se.name) || ((_content$section4 = content.section) === null || _content$section4 === void 0 ? void 0 : _content$section4.name);

    if (!section && content.topics) {
      section = content.entity;
    }

    return normalizeSophiSection(section);
  }

  return undefined;
};
/**
 * Get the date published string
 *
 * @return the date published string
 *
 * Sophi Requirements:
 *
 * Name:
 * -----
 * DATE_PUBLISHED_string: DONE
 *
 * Replace With:
 * -------------
 * Replace this with page publish date. It should be string type in rfc3339 date-time specification. Please
 *   include time-zone offset or provide date in UTC. This field is only required for article pages
 * Articles: results.updated_time
 *
 * Comments:
 * ---------
 * None
 *
 * Mapping:
 * --------
 * Sections: results.section.name
 */


var getDatePublishedString = function getDatePublishedString() {
  var article = getArticle();
  var content = getGlobalContent();
  return article ? new Date(content.updated_time).toISOString() : undefined;
};
/**
 * Get the content ID string
 *
 * @return the content ID string
 *
 * Sophi Requirements:
 *
 * Name:
 * -----
 * CONTENT_ID_strine: DONE
 *
 * Replace With:
 * -------------
 * Should contain specific Article ID as provided by the backend. Only applicable to article pages, otherwise should be set to undefined	"idUSKBN2841Q4"(assuming that this is an article Identifier that does not change over-time)	Article:
 *
 * Comments:
 * ---------
 * "idUSKBN2841Q4"(assuming that this is an article Identifier that does not change over-time)
 *
 * Mapping:
 * --------
 * Article: results.id
 * Section: TBC
 */


var getContentIdString = function getContentIdString() {
  var article = getArticle();
  return article && article.id ? article.id : undefined;
};
/**
 * Get the content type string
 *
 * @return the content type string
 *
 * Sophi Specification:
 *
 * Name:
 * -----
 * CONTENT_TYPE_string
 *
 * Replace With:
 * -------------
 *   This should be only one of the following depending on what most of the content on the page is represented by:
 *     . article–for individual article pages with most of content consisting of text (most common)
 *     . video–for video pages (i.e., page contains a video as primary content)
 *     . audio–for audio/podcast pages (i.e., page contains a podcast/audio as primary content)
 *     . image–for image/gallery pages (i.e., page contains a single image or a gallery of images as primary content)
 *
 * Comments:
 * ---------
 *   "article"
 *
 * Mapping:
 * --------
 *   results.primary_media_type
 */


var getContentTypeString = function getContentTypeString() {
  var article = getArticle();
  return article ? normalizeContentType(article.primary_media_type) : undefined;
};
/**
 * Get the visitor type string
 *
 * @return the visitor type string
 *
 * Sophi Specification:
 *
 * Name:
 * -----
 * VISITOR_TYPE_string
 * This describes what type of visitor it is to Sophi and can only be one of the following:
 *
 * Replace With:
 * -------------
 * •"Anonymous"–for anonymous/non-logged in visitors
 * •"Registered"-Visitor has a registered account on the site
 * •"Subscribed"-Visitor has a registered account on the site and is a paying subscriber
 *
 * Suggested:
 * ----------
 * "Anonymous"
 *
 * Mapping:
 * ---------
 * application_authenticated_state
 */


var getVisitorTypeString = function getVisitorTypeString(profile) {
  var subscriptionPlanArr = profile === null || profile === void 0 ? void 0 : profile.attributes.filter(function (attribute) {
    return attribute.name === 'Subscription Plan';
  });

  if (!subscriptionPlanArr || subscriptionPlanArr.length === 0) {
    return 'Anonymous';
  }

  var subscriptionPlan = subscriptionPlanArr[0];
  return subscriptionPlan.value === 'PAID' || subscriptionPlan.value === 'EMERALD' ? 'Subscribed' : 'Registered';
};
/**
 * Get the logged in state
 *
 * @return true if theu user is logged in
 *
 * Sophi Specification:
 *
 * Name:
 * -----
 * LOGGED_IN_STATE_boolean
 *
 * Replace With:
 * -------------
 * This indicates wherever visitor is logged in or not. Should be boolean type and set to true if user is logged in or false otherwise.
 * Please make sure to up date this field whenever a user logs in.
 *
 * Suggested:
 * ----------
 * true or false
 *
 * Mapping:
 * --------
 * application_authenticated_status
 */


var getLoggedInStateBoolean = function getLoggedInStateBoolean(profile) {
  return Boolean(profile);
};
/**
 * Get user ID string
 *
 * @return the user ID string
 *
 * Name:
 * -----
 * USER_ID_string
 *
 * Replace With:
 * --------------
 * If user is logged in, replace this with a string containing your internal anonymized user ID. Please make sure toupdate thisfield whenever anuserlogsin.
 *
 * Comments:
 * ----------
 * This allows tracking users across multiple devices.
 *
 * Mapping:
 * --------
 * application_authenticated_user_id
 */


var getUserIdString = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(profile) {
    var _FUSION_ENVIRONMENT4;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", Object(_hash__WEBPACK_IMPORTED_MODULE_7__["hash"])((_FUSION_ENVIRONMENT4 = FUSION_ENVIRONMENT) === null || _FUSION_ENVIRONMENT4 === void 0 ? void 0 : _FUSION_ENVIRONMENT4.SOPHI_SALT, profile === null || profile === void 0 ? void 0 : profile.uuid));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUserIdString(_x) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Get the Sophi wall type
 *
 * @returns The Sophi wall type
 *
 *
 * Full Requirements:
 * ------------------
 * Case                                                   home	section	premium section free article	   metered article	article free for day)	   legal article	 premium article
 * supported country & user not logged in	                free	free	  TBD	            free	           n per month (5)	free, after 24h metered	 TBD	           TBD
 * supported country & user logged in & not subscribed	  free	free	  TBD	            free	           n per month (5)	free, after 24h metered	 TBD	           TBD
 * supported country & user logged in & subscribed	      free	free	  TBD	            free	           unlimited	      free, after 24h metered	 TBD	           TBD
 * not-supported country & user not logged in	            free	free	  TBD	            free	           n per month (5)	free, after 24h metered	 TBD	           TBD
 * not supported country & user logged in	                free	free	  TBD	            free	           unlimited	      free, after 24h metered	 TBD	           TBD
 * emerald / legal user & logged in & sub not current     free	free	  TBD	            free	           n per month (5)	free, after 24h metered	 TBD	           TBD
 * emerald / legal user & logged in & subscribed	        free	free	  TBD	            free	           unlimited	      free, after 24h metered	 TBD	           TBD
 * group subscription
 * mobile subscription
 * premium subscription
 *
 * Simplified Requirements:
 * ------------------------
 * Case                                                   home	section	premium section free article	   metered article	legal article	 premium article
 * supported country & user not logged in	                free	free	  TBD	            free	           n per month (5)	TBD	           TBD
 * supported country & user logged in & not subscribed	  free	free	  TBD	            free	           n per month (5)	TBD	           TBD
 * supported country & user logged in & subscribed	      free	free	  TBD	            free	           unlimited	      TBD	           TBD
 * not-supported country & user not logged in	            free	free	  TBD	            free	           n per month (5)	TBD	           TBD
 * not supported country & user logged in	                free	free	  TBD	            free	           unlimited	      TBD	           TBD
 * emerald / legal user & logged in & subscribed	        free	free	  TBD	            free	           unlimited	      TBD	           TBD
 *
 * User Types:
 * -----------
 * • FREE: User is from a ROW (Rest of the World) country and not required to have a paid subscription
 * • NOT_PAID:  User is from a paywall country, but has not paid
 * • PAID: User is from a paywall country and has a paid subscription
 * • EMERALD: User is a premium corporate user with a paid subscription
 * • PREMIUM: [This one I have assumed - not confirmed]
 *
 * Page Types:
 * ------------
 * article
 * section
 *
 * Content Codes:
 * --------------
 * • free: Article is free
 * • freeForADay: Article is free for X hours [Implementaiton of this type has been shelved]
 * • premium: The article is for premium customers only
 * • metered: The article is subject to metering for NOT_PAID customers in supported countries
 * • legal: The article is for EMERALD users only
 *
 * Sophi Wall Types:
 * -----------------
 * • "paywall-hard" - Visitor needs to be a subscriber to access content
 * • "paywall-metered" - Visitor has a registered account (not subscriber) and/or reached a limit on number of content pieces for period and needs to
 *     wait until end of the period or subscribe
 * • "regwall-hard" - Visitor needs to have an account to access content
 * • "regwall-metered" - Visitor reached a limit number of content pieces and needs to register an account to access content Can be only one of the 9 provided values.
 *    Implementation Instructions
 * • "regwall-soft" – Visitor is suggested to register an account
 * • "growl" – Visitor is notified about article limit being reached with the view of the current article and is suggested to subscribe to view further articles.
 * • "scroll" – Visitor have encountered a wall as they scroll
 * • "adwall" - Visitor needs to see an ad to access content
 * • "age-wall" - Visitor needs to verify their age to access content
 *
 * • Note: The requirement of "free for a day" has been eliminated for now
 * • Note: EMERALD users with an expired subscription will revert to FREE or NOT_PAID depending on their country
 */


var getWallTypeString = function getWallTypeString(profile) {
  // Get the user type
  var userType = getUserType(profile);

  if (!isKnownSubscription(userType)) {
    // eslint-disable-next-line no-console
    console.warn('### Sophi encountered a user that it does not understand');
  } // Determine if page is an article or sction


  var pageType = getPageTypeString(); // Determine if the article is free or restricted

  var pageContentCode = getPageContentCode();
  var wallType = getWallTypeImpl(userType, pageType, pageContentCode); // eslint-disable-next-line no-console

  console.log('### Sophi: wallType:', wallType);
  return wallType;
};
/**
 * Get the wall name string
 *
 * @return the name of the wall
 *
 * Sophi Specification:
 *
 * Name:
 * -----
 * WALL_NAME_string
 *
 * Replace With:
 * -------------
 * Should be one of the following:
 * •"regular" –for standard metered paywall
 * •"incognito"–for incognito paywall
 * •"amp"–for AMPpaywallif different from "regular” paywall
 * •"app"–for apppaywallif different from "regular” paywall
 *
 * Comments:
 * ---------
 * None
 *
 * Mapping:
 * --------
 * TBC
 */


var getWallNameString = function getWallNameString() {
  return 'regular';
};
/**
 * Get the transaction ID String
 * Note: Transaction ID not available, using the encrypted subscription ID instead
 *
 * @return the Sophi transaction ID string which is our encrypted subscription ID string or undefined if not available
 *
 * Sophi Specification:
 *
 * Name:
 * -----
 * TRANSACTION_ID_string
 *
 * Replace With:
 * -------------
 * Should contain unique transaction ID
 *
 * Comments:
 * ---------
 * None
 *
 * Mapping:
 * --------
 * RPC.orderNumber
 */


var getTransactionIdString = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var _FUSION_ENVIRONMENT5, subscriptionId;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            subscriptionId = Object(_tr_rcom_raptorui_subscription_dist_apiproxy_RcpProxy__WEBPACK_IMPORTED_MODULE_1__["getSubscriptionId"])();

            if (!(!subscriptionId || subscriptionId.length === 0)) {
              _context3.next = 5;
              break;
            }

            // eslint-disable-next-line no-console
            console.warn('### Sophi: Cannot acquire subscription ID');
            return _context3.abrupt("return", undefined);

          case 5:
            return _context3.abrupt("return", Object(_hash__WEBPACK_IMPORTED_MODULE_7__["hash"])((_FUSION_ENVIRONMENT5 = FUSION_ENVIRONMENT) === null || _FUSION_ENVIRONMENT5 === void 0 ? void 0 : _FUSION_ENVIRONMENT5.SOPHI_SALT, subscriptionId));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            // eslint-disable-next-line no-console
            console.error('### Sophi: Cannot acquire subscription ID due to exception:', _context3.t0);

          case 11:
            return _context3.abrupt("return", undefined);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getTransactionIdString() {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Get the subscription plan name
 * Note: The subscription plan name is not avaialble to us in content, using the subscripiton SKU instead
 *
 * @return the subscription plan name or undefined if not available
 *
 * Sophi Specification:
 *
 * Name:
 * -----
 * SUBSCRIPTION_NAME_string
 *
 * Replace With:
 * -------------
 * This should contain your business name for the subscription that makes sense to you
 *
 * Comments:
 * ---------
 * None
 *
 * Mapping:
 * --------
 * SubscriptionPlanName
 */


var getSubscriptionNameString = function getSubscriptionNameString() {
  try {
    var subscriptionSku = Object(_tr_rcom_raptorui_subscription_dist_apiproxy_RcpProxy__WEBPACK_IMPORTED_MODULE_1__["getSubscriptionSku"])();

    if (!subscriptionSku || subscriptionSku.length === 0) {
      // eslint-disable-next-line no-console
      console.warn('### Sophi: Cannot acquire subscription SKU');
      return undefined;
    } // In meeting with payments team, we decided to use SKU until an alternative is requested/developed


    return subscriptionSku;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('### Sophi: Cannot acquire subscription SKU due to exception:', e);
  }

  return undefined;
};
/**
 * Get the subscripiton type
 *
 * @return the subscription type
 *
 * Name:
 * ------
 * SUBSCRIPTION_TYPE_string
 *
 * Replace With:
 * -------------
 * Could be set to one of the following values:
 * • digital-when subscription is digital only
 * • print-when subscription is print (even if digital subscription comes free with it)
 *
 * Comments:
 * ---------
 * Can be only one of the 4 provided values.
 *
 * Mapping:
 * --------
 * application_subscription_subscription_type
 */


var getSubscriptionTypeString = function getSubscriptionTypeString() {
  // Reuters only supports digital media
  return 'digital';
};
/**
 * Get the app version string
 *
 * @return the app version string
 *
 * Sophi Specification:
 *
 * Name:
 * -----
 * APP_VERSION_string
 *
 * Replace With:
 * -------------
 * Recommended, this indicates CMS/APP used and its version. String maximum 128 characters long.
 *
 * Comments:
 * ---------
 * "4.0.4"
 *
 * Mapping:
 * --------
 * TBC
 */


var getAppVersionString = function getAppVersionString() {
  return APP_VERSION_STRING;
};
/**
 * Get the environment string
 *
 * @return the environment string
 *
 * Sophi Specification:
 *
 * Name:
 * -----
 * ENVIRONMENT_string
 *
 * Replace With:
 * -------------
 * Recommended, specifies site environment, can be one of the following:
 * •"prod" –for Live/Production Environment (default value)
 * •"stg" –for Staging Environment
 * •"dev" –for Development Environment
 *
 * Comments:
 * ---------
 * Can be only one of the 3 provided values.
 *
 * Mapping:
 * --------
 * TBC
 */


var getEnvironmentString = function getEnvironmentString() {
  var _FUSION_ENVIRONMENT6;

  return (_FUSION_ENVIRONMENT6 = FUSION_ENVIRONMENT) === null || _FUSION_ENVIRONMENT6 === void 0 ? void 0 : _FUSION_ENVIRONMENT6.SOPHI_ENVIRONMENT;
};
/**
 * Get the access category
 *
 * @return the access category
 *
 * Name:
 * ------
 * ACCESS_CATEGORY_string
 *
 * Replace with:
 * -------------
 * • content.accessCategory possible Values:
 * • free access
 * • metered views
 * • subscribers only
 * • special package
 *
 * Definition:
 * -----------
 * • free access: No access restrictions
 * • metered views: Access is metered (i.e. only limited number of content pieces are available in a time period).
 * • subscribers only: Access to content is only available to paying subscribers.
 * • special package: Access to content is only available to people who have a special package subscription (despite other subscriptions).
 */


var getAccessCategory = function getAccessCategory() {
  var article = getArticle();

  if (!article) {
    return 'free access';
  }

  var contentCode = getPageContentCode();

  switch (contentCode) {
    case 'free':
      return 'free access';

    case 'metered':
      return 'metered views';

    case 'premium':
    case 'legal':
      return 'special package';

    default:
  } // eslint-disable-next-line no-console


  console.warn('### Sophi has no access category for content code: ', contentCode);
  return undefined;
};
/**
 * Enables us to set up different collector endpoints for production, staging and development
 *
 * @returns the collector endpoint string
 */


var getCollectorEndpointString = function getCollectorEndpointString() {
  var _FUSION_ENVIRONMENT7;

  return (_FUSION_ENVIRONMENT7 = FUSION_ENVIRONMENT) === null || _FUSION_ENVIRONMENT7 === void 0 ? void 0 : _FUSION_ENVIRONMENT7.SOPHI_COLLECTOR_ENDPOINT;
}; // --- Events


var SOPHI_SUBSCRIPTION_EVENT_PENDING = 'sophiSubscriptionPending';
/**
 * Sets a pending Sophi subscription event
 *
 * 1. Use pending flag because the user is sent to the "Tell Us More" payment confirmation page before payment
 * processing is complete. There is currently no API/callback that is triggered when payment processing is compleete
 * 2. The pending subscription flag will ensure the Sophi subscription event is always sent even if the pyament complete
 * callback (Once available) is not triggered due to an exceptional circumstance
 */

var setSubscriptionPending = function setSubscriptionPending() {
  try {
    localStorage.setItem(SOPHI_SUBSCRIPTION_EVENT_PENDING, true);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('### Sophi: cannot set pending subscription');
  }
};
/**
 * Remove the pending subscription
 *
 * This method should be called after the new subscription has been processed
 */


var removeSubscriptionPending = function removeSubscriptionPending() {
  try {
    localStorage.removeItem(SOPHI_SUBSCRIPTION_EVENT_PENDING);
  } catch (e) {}
};
/**
 * Returns true if there is a pending subcription
 *
 * @returns true if there is a confirmed subscription pending, false if there no subscription pending or the user
 * has disabled access to local storage and we cannot determine if a subscription is pending
 */


var isSubscriptionPending = function isSubscriptionPending() {
  try {
    return localStorage.getItem(SOPHI_SUBSCRIPTION_EVENT_PENDING);
  } catch (e) {}

  return false;
};
/**
 * Events fired when user encounters a paywall
 *
 * @param {string} wallType the type of wall
 * @param {string} wallName the wall name
 */


var sendPaywallEvent = function sendPaywallEvent(wallType, wallName) {
  var _getGlobalContent;

  window.sophi.sendEvent({
    type: 'wall_hit',
    data: {
      type: wallType,
      name: wallName
    }
  });
  var canonicalUrl = (_getGlobalContent = getGlobalContent()) === null || _getGlobalContent === void 0 ? void 0 : _getGlobalContent.canonical_url;
  trackSophiEvent('sophi.paywall', wallType, {
    canonical_url: canonicalUrl
  });
};
/**
 * Attach info about the current subscription to the sophi object
 *
 * If info is not available mark the subscription event as pending
 *
 * @param {string} transactionIdString the hashed transaction ID string
 *
 * @return true if the subscription info is attached to the window
 * [Note: The subscripiton info may not be attached to the window if the payment processing completed after the profile was initialised]
 */


var attachSubscriptionEvent = function attachSubscriptionEvent(transactionIdString) {
  var subscriptionNameString = getSubscriptionNameString(); // Information is complete

  if (transactionIdString && subscriptionNameString) {
    window.sophi.data.subscription_add = {
      transactionId: transactionIdString,
      name: subscriptionNameString,
      subscriptionType: getSubscriptionTypeString()
    };
    removeSubscriptionPending(); // eslint-disable-next-line no-console

    console.log('### Sophi: Attaching new subscription info:', window.sophi.data.subscription_add);
    return true;
  } // Key information is missing


  setSubscriptionPending(); // eslint-disable-next-line no-console

  console.log('### Sophi: Marking new subscription as pending:', transactionIdString, subscriptionNameString);
  return false;
};
/**
 * Send the subscription event
 *
 * @param {string} transactionIdString the hashed transaction ID string
 */


var sendSubscriptionEvent = function sendSubscriptionEvent(transactionIdString) {
  window.sophi.sendEvent({
    type: 'payment',
    data: {
      transactionId: transactionIdString
    }
  });
  trackSophiEvent('sophi.subscribed', getSubscriptionNameString()); // eslint-disable-next-line no-console

  console.log('### Sophi: Sent subscription event', transactionIdString);
};
/**
 * True if a Sophi paywall event needs to be sent
 *
 * @param {*} wallType the Sophi wall type
 * @returns true if a Sophi paywall event needs to be sent
 */


var shouldSendPaywallEvent = function shouldSendPaywallEvent(wallType) {
  if (articlePaywallState === _components_shared_utils_paywall_helpers__WEBPACK_IMPORTED_MODULE_5__["PaywallState"].RESTRICTED && wallType) {
    return true;
  }

  if (wallType === 'growl') {
    return true;
  }

  return false;
};
/**
 * Send paywall event if necessary
 *
 * @param {object} profile the profile of the current user
 */


var ensurePaywallEvent = function ensurePaywallEvent(profile) {
  var wallType = getWallTypeString(profile);

  if (shouldSendPaywallEvent(wallType)) {
    // eslint-disable-next-line no-console
    console.log('### Sophi: Sending paywall event', wallType);
    var wallName = getWallNameString();
    sendPaywallEvent(wallType, wallName);
  }
};
/**
 * Send the subscription event if necessary
 */


var ensureSubscriptionEvent = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var page, transactionIdString;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            page = getPageName();

            if (!(page === SUBSCRIPTION_PAGE || isSubscriptionPending())) {
              _context4.next = 7;
              break;
            }

            // eslint-disable-next-line no-console
            console.log('### Sophi: Attempting to send subscription event'); // Attach info about the new subscription to the window and attempt to send the event to Sophi

            _context4.next = 5;
            return getTransactionIdString();

          case 5:
            transactionIdString = _context4.sent;

            if (attachSubscriptionEvent(transactionIdString)) {
              sendSubscriptionEvent(transactionIdString);
            }

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function ensureSubscriptionEvent() {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Send any Sophi events if necessary
 *
 * @param {object} profile the profile of the current user
 */


var ensureSophiEvents = function ensureSophiEvents(profile) {
  ensurePaywallEvent(profile);
  ensureSubscriptionEvent();
}; // ---- Sophi Data

/**
 * Attach the Sophi configuration settings
 *
 * Sophi specification:
 * . The first tag defines the Data and Settings Layer and second tag loads tracker code
 * . This code should run as soon as possible once values required for window.sophi.data are available
 * . If values are not available or do not exist, set them to JavaScript undefined value or drop key-value pair altogether
 * . Note that you only need to add anything "to window.sophi.data.content" object on article pages only. On non-article pages that object can be dropped or set to empty object
 *   [Note this note applies specifically to the "content" subsection not the entire Sophi object]
 */


var attachSophiSettings = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(profile) {
    var userIdString;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getUserIdString(profile);

          case 2:
            userIdString = _context5.sent;
            window.sophi = {
              data: {
                page: {
                  type: getPageTypeString(),
                  breadcrumb: getSectionSubsectionsPathString(),
                  sectionName: getSectionString(),
                  datePublished: getDatePublishedString()
                },
                visitor: {
                  type: getVisitorTypeString(profile),
                  isLoggedIn: getLoggedInStateBoolean(profile),
                  uid: userIdString
                },
                environment: {
                  environment: getEnvironmentString(),
                  version: getAppVersionString()
                }
              },
              settings: {
                collectorEndpoint: getCollectorEndpointString(),
                client: 'reuters',
                appId: 'reuters',
                linkedDomains: ['reuters.com'],
                cookieDomain: '.reuters.com',
                plugin: {
                  adblock: false,
                  "private": false,
                  video: false
                }
              }
            }; // Attach article specific data if necessary

            if (getArticle()) {
              window.sophi.data.content = {
                type: getContentTypeString(),
                contentId: getContentIdString(),
                accessCategory: getAccessCategory()
              };
            }

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function attachSophiSettings(_x2) {
    return _ref5.apply(this, arguments);
  };
}(); // --- Sophi Events

/**
 * Called after the paywall is complete to finish the setup
 */


var completeSetup = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var _content$section5;

    var profile, result, pageTypeString, content, sophiCompleteEvent;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // Check if user logged in & get their profile
            profile = null;
            _context6.prev = 1;
            _context6.next = 4;
            return _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0___default.a.isLoggedIn();

          case 4:
            result = _context6.sent;

            if (!result) {
              _context6.next = 19;
              break;
            }

            // eslint-disable-next-line no-console
            console.log('### Sophi: logged in'); // Profile

            _context6.prev = 7;
            _context6.next = 10;
            return _arc_publishing_sdk_identity__WEBPACK_IMPORTED_MODULE_0___default.a.getUserProfile();

          case 10:
            profile = _context6.sent;
            // eslint-disable-next-line no-console
            console.log('### Sophi: profile acquired');
            _context6.next = 17;
            break;

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](7);
            // eslint-disable-next-line no-console
            console.error('### Sophi: User profile failed', _context6.t0);

          case 17:
            pageTypeString = getPageTypeString();

            if (pageTypeString === 'article') {
              // We update here because the user may have a different number remaining after login
              remainingArticlesCount = getRemainingArticles(); // eslint-disable-next-line no-console

              console.log('### Sophi: Profile complete remaining articles: ', remainingArticlesCount);
            }

          case 19:
            _context6.next = 24;
            break;

          case 21:
            _context6.prev = 21;
            _context6.t1 = _context6["catch"](1);
            // eslint-disable-next-line no-console
            console.log('### Sophi: cannot login: ', _context6.t1);

          case 24:
            // eslint-disable-next-line no-console
            console.log('### Sophi: attaching sophi settings'); // Attach the data that facilitates automatic Sophi events

            _context6.next = 27;
            return attachSophiSettings(profile);

          case 27:
            // eslint-disable-next-line no-console
            console.log('### Sophi: window.sophi settings attached:', window.sophi);
            Object(_attachSophiEvents__WEBPACK_IMPORTED_MODULE_6__["default"])();
            ensureSophiEvents(profile); // eslint-disable-next-line no-console

            console.log('### Sophi: completed');
            content = getGlobalContent();
            trackSophiEvent('sophi.attached', (content === null || content === void 0 ? void 0 : content.type) || (content === null || content === void 0 ? void 0 : (_content$section5 = content.section) === null || _content$section5 === void 0 ? void 0 : _content$section5.type)); // Inform any components waiting for window.sophi to be defined

            sophiCompleteEvent = new CustomEvent('sophi-complete', {});
            window.dispatchEvent(sophiCompleteEvent);

          case 35:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 21], [7, 14]]);
  }));

  return function completeSetup() {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Set up the Sophi environment
 *
 * 1. Attaches Sophi data to the browser window triggering 'automatic' events like page views
 * 2. Ensures that 'manual' events related to the subscripitons and paywalls are sent
 */


function handleSetupSophi() {
  return _handleSetupSophi.apply(this, arguments);
}
/**
 * Attaches Sophi data to main browser window and ensures sophi events are sent
 */


function _handleSetupSophi() {
  _handleSetupSophi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var _FUSION_ENVIRONMENT8, _FUSION_ENVIRONMENT9;

    var pageTypeString, pageName, _content$section6, content, paywallEvent, _paywallEvent$detail, _paywallEvent$detail2;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            // eslint-disable-next-line no-console
            console.log('### Sophi: Data enabled:', Boolean(Object(_hash__WEBPACK_IMPORTED_MODULE_7__["getSecureSalt"])((_FUSION_ENVIRONMENT8 = FUSION_ENVIRONMENT) === null || _FUSION_ENVIRONMENT8 === void 0 ? void 0 : _FUSION_ENVIRONMENT8.SOPHI_SALT))); // eslint-disable-next-line no-console

            console.log('### Sophi: Environment:', (_FUSION_ENVIRONMENT9 = FUSION_ENVIRONMENT) === null || _FUSION_ENVIRONMENT9 === void 0 ? void 0 : _FUSION_ENVIRONMENT9.SOPHI_ENVIRONMENT); // Do not attach Sophi unnecessarily

            pageTypeString = getPageTypeString(); // eslint-disable-next-line no-console

            console.log('### Sophi: page type:', pageTypeString);
            pageName = getPageName(); // Check if the page is supported by our Sophi implementation

            if (!(!SOPHI_SUPPORTED_PAGE_TYPE_STRINGS.includes(pageTypeString) && pageName !== SUBSCRIPTION_PAGE)) {
              _context8.next = 10;
              break;
            }

            // eslint-disable-next-line no-console
            console.log('### Sophi: Page not supported');
            content = getGlobalContent();
            trackSophiEvent('sophi.not_attached', (content === null || content === void 0 ? void 0 : content.type) || (content === null || content === void 0 ? void 0 : (_content$section6 = content.section) === null || _content$section6 === void 0 ? void 0 : _content$section6.type));
            return _context8.abrupt("return");

          case 10:
            if (!(pageTypeString === 'article')) {
              _context8.next = 17;
              break;
            }

            // eslint-disable-next-line no-console
            console.log('### Sophi: Article, waiting for the paywall complete event');
            _context8.next = 14;
            return paywallComplete();

          case 14:
            paywallEvent = _context8.sent;
            // Wait for dispatch event from paywall
            // Ensure setup was not completed by timeout
            // eslint-disable-next-line no-console
            console.log('### Sophi: paywall is complete');

            if (paywallEvent) {
              remainingArticlesCount = (_paywallEvent$detail = paywallEvent.detail) === null || _paywallEvent$detail === void 0 ? void 0 : _paywallEvent$detail.remaining_articles;
              articlePaywallState = (_paywallEvent$detail2 = paywallEvent.detail) === null || _paywallEvent$detail2 === void 0 ? void 0 : _paywallEvent$detail2.state; // eslint-disable-next-line no-console

              console.log('### Sophi: remaining articles & state from paywall complete event:', remainingArticlesCount, articlePaywallState);
            }

          case 17:
            completeSetup();

          case 18:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _handleSetupSophi.apply(this, arguments);
}

var sophi = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(fusionEnvironment) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            FUSION_ENVIRONMENT = fusionEnvironment; // eslint-disable-next-line no-console

            console.log('### Sophi visible fusion environment:', FUSION_ENVIRONMENT);

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function () {
                // eslint-disable-next-line no-console
                console.log('### Sophi: Waited for DOMContentLoaded');
                handleSetupSophi();
              });
            } else {
              // eslint-disable-next-line no-console
              console.log('### Sophi: DOMContentLoaded loaded');
              handleSetupSophi();
            }

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function sophi(_x3) {
    return _ref7.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (sophi);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePlans", function() { return savePlans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlansFromStorage", function() { return getPlansFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedPlanName", function() { return getSelectedPlanName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSelectedPlanName", function() { return saveSelectedPlanName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProposedPlansId", function() { return getProposedPlansId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProposedPlansId", function() { return saveProposedPlansId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSubscriptions", function() { return saveSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubscriptionSku", function() { return getSubscriptionSku; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubscriptionId", function() { return getSubscriptionId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPlanName", function() { return SubscriptionPlanName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RCPProxy; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(120);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(121);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const savePlans = (plans, country) => {
  const ls_plans = sessionStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_subscription_plans);

  if (ls_plans) {
    const parsed_plans = JSON.parse(ls_plans);
    parsed_plans[country.alpha2] = plans;

    try {
      sessionStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_subscription_plans, JSON.stringify(parsed_plans));
    } catch (err) {
      //eslint-disable-next-line no-console
      console.error('savePlans error: ', err);
    }
  } else {
    try {
      sessionStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_subscription_plans, JSON.stringify({
        [country.alpha2]: plans
      }));
    } catch (err) {
      //eslint-disable-next-line no-console
      console.error('savePlans error: ', err);
    }
  }
};
const formatPrice = (price, currency_code) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency_code,
    minimumFractionDigits: 2
  });
  return formatter.format(price);
};
const getPlansFromStorage = alpha2 => {
  const ls_plans = sessionStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_subscription_plans);
  const parsed_plans = JSON.parse(ls_plans);
  return parsed_plans ? parsed_plans[alpha2] : null;
};
const getSelectedPlanName = () => {
  return sessionStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_selected_plan_name);
};
const saveSelectedPlanName = plan_name => {
  try {
    sessionStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_selected_plan_name, plan_name);
  } catch (err) {
    //eslint-disable-next-line no-console
    console.error('saveSelectedPlanName error: ', err);
  }
};
const getProposedPlansId = () => {
  return JSON.parse(sessionStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_proposed_plan_id));
};
const saveProposedPlansId = plans => {
  try {
    sessionStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_proposed_plan_id, JSON.stringify(plans));
  } catch (err) {
    //eslint-disable-next-line no-console
    console.error('saveProposedPlansId error: ', err);
  }
};
const saveSubscriptions = userSubscription => {
  if (userSubscription && userSubscription.length) {
    try {
      window.sessionStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_subscription_sku, userSubscription[0].ratePlans[0].productSku);
    } catch (error) {
      //eslint-disable-next-line no-console
      console.log(`Cannot save item ${_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_subscription_sku} into sessionStorage.`, error);
    }

    try {
      window.sessionStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_subscription_id, userSubscription[0].id);
    } catch (error) {
      //eslint-disable-next-line no-console
      console.log(`Cannot save item ${_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_subscription_id} into sessionStorage.`, error);
    }
  }
};
const getSubscriptionSku = () => {
  return sessionStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_subscription_sku);
};
const getSubscriptionId = () => {
  return sessionStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE_ITEMS"].reuters_subscription_id);
};
const SubscriptionPlanName = {
  ANNUAL: 'annual',
  MONTH: 'month'
};
class RCPProxy {
  constructor(options) {
    _defineProperty(this, "options", void 0);

    _defineProperty(this, "_processPlanRates", planRaw => {
      const planObj = planRaw.data.productRatePlanCharges;
      const flatFee = planObj.find(obj => obj.model === 'FlatFee');
      const discountObj = planObj.find(obj => obj.model === 'DiscountFixedAmount');
      const currency_code = flatFee.pricing[0].currency;
      const price = flatFee.pricing[0].price;

      const end_date = planRaw.data.endDate && this._generateDate(planRaw.data.endDate);

      let discount;
      let discount_period;
      let discount_type;
      let discount_percentage;

      if (discountObj) {
        discount = discountObj.pricing[0].discountAmount;
        discount_period = discountObj.upToPeriods;
        discount_type = discountObj.upToPeriodsType; // if upToPeriodsType === 'Billing_Periods' then we need to check billingPeriod

        if (discount_type.toLowerCase() === 'billing_periods') {
          discount_type = discountObj.billingPeriod;
        }

        discount_type = this._pluralize(discount_period, discount_type);
        discount_percentage = Math.round(discount / price * 100);
      }

      const final_price = price - (discount || 0);
      return {
        currency_code,
        end_date: end_date || null,
        discount,
        price,
        final_price,
        formatted_price: formatPrice(price, currency_code),
        formatted_final_price: formatPrice(final_price, currency_code),
        discount_percentage,
        discount_period,
        discount_type
      };
    });

    this.options = options;
  }

  _getArcHeader(ArcToken) {
    return {
      headers: {
        'X-Application-Context': 'RCOM',
        'Authorization': `Bearer ${ArcToken}`,
        'Content-Type': 'application/json'
      }
    };
  }

  _getHeader(cancel_token) {
    return {
      headers: {
        'X-Application-Context': 'RCOM',
        'Content-Type': 'application/json'
      },
      cancelToken: cancel_token
    };
  }

  async getZuoraHostPage(arcToken, country) {
    const zuoraIds = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.options.url}/v1/cc-form-authz?country=${country}`, this._getArcHeader(arcToken));
    return zuoraIds;
  }

  createBillingAccount(arcToken, data) {
    const options = this._getArcHeader(arcToken);

    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${this.options.url}/v1/billing-account`, data, options);
  }

  updateBillingAccount(arcToken, data) {
    const options = this._getArcHeader(arcToken);

    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${this.options.url}/v1/billing-account`, data, options);
  }

  getBillingAccount(arcToken) {
    const options = this._getArcHeader(arcToken);

    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.options.url}/v1/billing-account`, options);
  }

  createOrder(arcToken, planId) {
    const options = this._getArcHeader(arcToken);

    const data = {
      subscriptions: [{
        ratePlanId: planId
      }]
    };
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${this.options.url}/v1/order`, data, options);
  }

  getPaymentMethods(arcToken) {
    const options = this._getArcHeader(arcToken);

    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.options.url}/v1/payment-methods`, options);
  }

  getSubscriptions(arcToken) {
    const options = this._getArcHeader(arcToken);

    try {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.options.url}/v1/subscriptions`, options);
    } catch (error) {
      return null;
    }
  }

  _getProductRatePlans(country, cancel_token) {
    const options = this._getHeader(cancel_token);

    const month = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.options.url}/v1/product-rate-plan?id=${this.options.plans.month}&country=` + country, options);
    const annual = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.options.url}/v1/product-rate-plan?id=${this.options.plans.annual}&country=` + country, options);
    return Promise.all([annual, month]);
  }

  _ordinalNumber(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  _generateDate(date) {
    if (!date) {
      return null;
    }

    const d = new Date(date);
    return this._ordinalNumber(d.getDate()) + ' ' + new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(d);
  }

  _pluralize(number, name) {
    if (name.toLowerCase().startsWith('day') || name.toLowerCase().startsWith('week') || name.toLowerCase().startsWith('month') || name.toLowerCase().startsWith('year')) {
      if (number === 1 && name.slice(-1) === 's') {
        return name.slice(0, -1);
      }

      if (number !== 1 && name.slice(-1) !== 's') {
        return name + 's';
      }
    }

    return name;
  }

  async getSubscriptionPlans(refreshCacheEveryMs, country = Object(_config_countries__WEBPACK_IMPORTED_MODULE_1__["getCountryByGeolocation"])(), cancel_token = null) {
    const ls_plans = getPlansFromStorage((country === null || country === void 0 ? void 0 : country.alpha2) || 'us');

    if (ls_plans) {
      if (refreshCacheEveryMs && ls_plans._timestamp) {
        const checkTime = new Date().getTime(); // if cached plans are still valid (within refreshCacheEveryMs since generate) we return data from cache

        if (checkTime < ls_plans._timestamp + refreshCacheEveryMs) {
          return ls_plans;
        }
      } else {
        return ls_plans;
      }
    }

    const raw_plans = await this._getProductRatePlans((country === null || country === void 0 ? void 0 : country.alpha2.toUpperCase()) || 'US', cancel_token);

    const annualObj = this._processPlanRates(raw_plans[0]);

    const monthObj = this._processPlanRates(raw_plans[1]);

    const subscription_plans = {
      _timestamp: new Date().getTime(),
      currency_code: annualObj.currency_code,
      [SubscriptionPlanName.ANNUAL]: {
        discount_amount: annualObj.discount,
        price: annualObj.price,
        final_price: annualObj.final_price,
        currency_code: annualObj.currency_code,
        formatted_price: annualObj.formatted_price,
        formatted_final_price: annualObj.formatted_final_price,
        discount_percentage: annualObj.discount_percentage,
        discountPeriod: annualObj.discount_period,
        discountType: annualObj.discount_type,
        expirationDate: annualObj.end_date
      },
      [SubscriptionPlanName.MONTH]: {
        discount_amount: monthObj.discount,
        price: monthObj.price,
        final_price: monthObj.final_price,
        currency_code: monthObj.currency_code,
        formatted_price: monthObj.formatted_price,
        formatted_final_price: monthObj.formatted_final_price,
        discount_percentage: monthObj.discount_percentage,
        discountPeriod: monthObj.discount_period,
        discountType: monthObj.discount_type,
        expirationDate: monthObj.end_date
      }
    };
    savePlans(subscription_plans, country);
    return subscription_plans;
  }

}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);
var bind = __webpack_require__(96);
var Axios = __webpack_require__(97);
var mergeConfig = __webpack_require__(116);
var defaults = __webpack_require__(103);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(117);
axios.CancelToken = __webpack_require__(118);
axios.isCancel = __webpack_require__(102);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(119);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(96);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);
var buildURL = __webpack_require__(98);
var InterceptorManager = __webpack_require__(99);
var dispatchRequest = __webpack_require__(100);
var mergeConfig = __webpack_require__(116);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);
var transformData = __webpack_require__(101);
var isCancel = __webpack_require__(102);
var defaults = __webpack_require__(103);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(95);
var normalizeHeaderName = __webpack_require__(105);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(106);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(106);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(104)))

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);
var settle = __webpack_require__(107);
var buildURL = __webpack_require__(98);
var buildFullPath = __webpack_require__(110);
var parseHeaders = __webpack_require__(113);
var isURLSameOrigin = __webpack_require__(114);
var createError = __webpack_require__(108);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(115);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(108);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(109);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(111);
var combineURLs = __webpack_require__(112);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(95);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(117);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryList", function() { return countryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryByName", function() { return getCountryByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryByCode2", function() { return getCountryByCode2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryByCode3", function() { return getCountryByCode3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryByGeolocation", function() { return getCountryByGeolocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedCountry", function() { return getSelectedCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSelectedCountry", function() { return saveSelectedCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfCountryIsSupported", function() { return checkIfCountryIsSupported; });
const countryList = [{
  'name': 'Afghanistan',
  'alpha2': 'af',
  'alpha3': 'afg'
}, {
  'name': 'Albania',
  'alpha2': 'al',
  'alpha3': 'alb'
}, {
  'name': 'Algeria',
  'alpha2': 'dz',
  'alpha3': 'dza'
}, {
  'name': 'American Samoa',
  'alpha2': 'as',
  'alpha3': 'asm'
}, {
  'name': 'Andorra',
  'alpha2': 'ad',
  'alpha3': 'and'
}, {
  'name': 'Angola',
  'alpha2': 'ao',
  'alpha3': 'ago'
}, {
  'name': 'Anguilla',
  'alpha2': 'ai',
  'alpha3': 'aia'
}, {
  'name': 'Antigua and Barbuda',
  'alpha2': 'ag',
  'alpha3': 'atg'
}, {
  'name': 'Argentina',
  'alpha2': 'ar',
  'alpha3': 'arg'
}, {
  'name': 'Armenia',
  'alpha2': 'am',
  'alpha3': 'arm'
}, {
  'name': 'Aruba',
  'alpha2': 'aw',
  'alpha3': 'abw'
}, {
  'name': 'Australia',
  'alpha2': 'au',
  'alpha3': 'aus'
}, {
  'name': 'Austria',
  'alpha2': 'at',
  'alpha3': 'aut'
}, {
  'name': 'Azerbaijan',
  'alpha2': 'az',
  'alpha3': 'aze'
}, {
  'name': 'Bahamas',
  'alpha2': 'bs',
  'alpha3': 'bhs'
}, {
  'name': 'Bahrain',
  'alpha2': 'bh',
  'alpha3': 'bhr'
}, {
  'name': 'Bangladesh',
  'alpha2': 'bd',
  'alpha3': 'bgd'
}, {
  'name': 'Barbados',
  'alpha2': 'bb',
  'alpha3': 'brb'
}, {
  'name': 'Belarus',
  'alpha2': 'by',
  'alpha3': 'blr'
}, {
  'name': 'Belgium',
  'alpha2': 'be',
  'alpha3': 'bel'
}, {
  'name': 'Belize',
  'alpha2': 'bz',
  'alpha3': 'blz'
}, {
  'name': 'Benin',
  'alpha2': 'bj',
  'alpha3': 'ben'
}, {
  'name': 'Bermuda',
  'alpha2': 'bm',
  'alpha3': 'bmu'
}, {
  'name': 'Bhutan',
  'alpha2': 'bt',
  'alpha3': 'btn'
}, {
  'name': 'Bolivia',
  'alpha2': 'bo',
  'alpha3': 'bol'
}, {
  'name': 'Bonaire, Sint Eustatius and Saba',
  'alpha2': 'bq',
  'alpha3': 'bes'
}, {
  'name': 'Bosnia and Herzegovina',
  'alpha2': 'ba',
  'alpha3': 'bih'
}, {
  'name': 'Botswana',
  'alpha2': 'bw',
  'alpha3': 'bwa'
}, {
  'name': 'Brazil',
  'alpha2': 'br',
  'alpha3': 'bra'
}, {
  'name': 'Brunei Darussalam',
  'alpha2': 'bn',
  'alpha3': 'brn'
}, {
  'name': 'Bulgaria',
  'alpha2': 'bg',
  'alpha3': 'bgr'
}, {
  'name': 'Burkina Faso',
  'alpha2': 'bf',
  'alpha3': 'bfa'
}, {
  'name': 'Burundi',
  'alpha2': 'bi',
  'alpha3': 'bdi'
}, {
  'name': 'Cambodia',
  'alpha2': 'kh',
  'alpha3': 'khm'
}, {
  'name': 'Cameroon',
  'alpha2': 'cm',
  'alpha3': 'cmr'
}, {
  'name': 'Canada',
  'alpha2': 'ca',
  'alpha3': 'can'
}, {
  'name': 'Cabo Verde',
  'alpha2': 'cv',
  'alpha3': 'cpv'
}, {
  'name': 'Cayman Islands',
  'alpha2': 'ky',
  'alpha3': 'cym'
}, {
  'name': 'Central African Republic',
  'alpha2': 'cf',
  'alpha3': 'caf'
}, {
  'name': 'Chad',
  'alpha2': 'td',
  'alpha3': 'tcd'
}, {
  'name': 'Chile',
  'alpha2': 'cl',
  'alpha3': 'chl'
}, {
  'name': 'China',
  'alpha2': 'cn',
  'alpha3': 'chn'
}, {
  'name': 'Colombia',
  'alpha2': 'co',
  'alpha3': 'col'
}, {
  'name': 'Comoros',
  'alpha2': 'km',
  'alpha3': 'com'
}, {
  'name': 'Congo',
  'alpha2': 'cg',
  'alpha3': 'cog'
}, {
  'name': 'Cook Islands',
  'alpha2': 'ck',
  'alpha3': 'cok'
}, {
  'name': 'Costa Rica',
  'alpha2': 'cr',
  'alpha3': 'cri'
}, {
  'name': 'Cote d\'Ivoire',
  'alpha2': 'ci',
  'alpha3': 'civ'
}, {
  'name': 'Croatia',
  'alpha2': 'hr',
  'alpha3': 'hrv'
}, {
  'name': 'Cuba',
  'alpha2': 'cu',
  'alpha3': 'cub'
}, {
  'name': 'Curacao',
  'alpha2': 'cw',
  'alpha3': 'cuw'
}, {
  'name': 'Cyprus',
  'alpha2': 'cy',
  'alpha3': 'cyp'
}, {
  'name': 'Czech Republic',
  'alpha2': 'cz',
  'alpha3': 'cze'
}, {
  'name': 'Denmark',
  'alpha2': 'dk',
  'alpha3': 'dnk'
}, {
  'name': 'Djibouti',
  'alpha2': 'dj',
  'alpha3': 'dji'
}, {
  'name': 'Dominica',
  'alpha2': 'dm',
  'alpha3': 'dma'
}, {
  'name': 'Dominican Republic',
  'alpha2': 'do',
  'alpha3': 'dom'
}, {
  'name': 'East Timor',
  'alpha2': 'tl',
  'alpha3': 'tls'
}, {
  'name': 'Ecuador',
  'alpha2': 'ec',
  'alpha3': 'ecu'
}, {
  'name': 'Egypt',
  'alpha2': 'eg',
  'alpha3': 'egy'
}, {
  'name': 'El Salvador',
  'alpha2': 'sv',
  'alpha3': 'slv'
}, {
  'name': 'Equatorial Guinea',
  'alpha2': 'gq',
  'alpha3': 'gnq'
}, {
  'name': 'Eritrea',
  'alpha2': 'er',
  'alpha3': 'eri'
}, {
  'name': 'Estonia',
  'alpha2': 'ee',
  'alpha3': 'est'
}, {
  'name': 'Ethiopia',
  'alpha2': 'et',
  'alpha3': 'eth'
}, {
  'name': 'Faroe Islands',
  'alpha2': 'fo',
  'alpha3': 'fro'
}, {
  'name': 'Fiji',
  'alpha2': 'fj',
  'alpha3': 'fji'
}, {
  'name': 'Finland',
  'alpha2': 'fi',
  'alpha3': 'fin'
}, {
  'name': 'France',
  'alpha2': 'fr',
  'alpha3': 'fra'
}, {
  'name': 'Gabon',
  'alpha2': 'ga',
  'alpha3': 'gab'
}, {
  'name': 'Gambia',
  'alpha2': 'gm',
  'alpha3': 'gmb'
}, {
  'name': 'Georgia',
  'alpha2': 'ge',
  'alpha3': 'geo'
}, {
  'name': 'Germany',
  'alpha2': 'de',
  'alpha3': 'deu'
}, {
  'name': 'Ghana',
  'alpha2': 'gh',
  'alpha3': 'gha'
}, {
  'name': 'Gibraltar',
  'alpha2': 'gi',
  'alpha3': 'gib'
}, {
  'name': 'Greece',
  'alpha2': 'gr',
  'alpha3': 'grc'
}, {
  'name': 'Grenada',
  'alpha2': 'gd',
  'alpha3': 'grd'
}, {
  'name': 'Guam',
  'alpha2': 'gu',
  'alpha3': 'gum'
}, {
  'name': 'Guatemala',
  'alpha2': 'gt',
  'alpha3': 'gtm'
}, {
  'name': 'Guernsey',
  'alpha2': 'gg',
  'alpha3': 'ggy'
}, {
  'name': 'Guinea',
  'alpha2': 'gn',
  'alpha3': 'gin'
}, {
  'name': 'Guinea-Bissau',
  'alpha2': 'gw',
  'alpha3': 'gnb'
}, {
  'name': 'Guyana',
  'alpha2': 'gy',
  'alpha3': 'guy'
}, {
  'name': 'Haiti',
  'alpha2': 'ht',
  'alpha3': 'hti'
}, {
  'name': 'Honduras',
  'alpha2': 'hn',
  'alpha3': 'hnd'
}, {
  'name': 'Hong Kong, China',
  'alpha2': 'hk',
  'alpha3': 'hkg'
}, {
  'name': 'Hungary',
  'alpha2': 'hu',
  'alpha3': 'hun'
}, {
  'name': 'Iceland',
  'alpha2': 'is',
  'alpha3': 'isl'
}, {
  'name': 'India',
  'alpha2': 'in',
  'alpha3': 'ind'
}, {
  'name': 'Indonesia',
  'alpha2': 'id',
  'alpha3': 'idn'
}, {
  'name': 'Iran',
  'alpha2': 'ir',
  'alpha3': 'irn'
}, {
  'name': 'Iraq',
  'alpha2': 'iq',
  'alpha3': 'irq'
}, {
  'name': 'Ireland',
  'alpha2': 'ie',
  'alpha3': 'irl'
}, {
  'name': 'Isle of Man',
  'alpha2': 'im',
  'alpha3': 'imn'
}, {
  'name': 'Israel',
  'alpha2': 'il',
  'alpha3': 'isr'
}, {
  'name': 'Italy',
  'alpha2': 'it',
  'alpha3': 'ita'
}, {
  'name': 'Jamaica',
  'alpha2': 'jm',
  'alpha3': 'jam'
}, {
  'name': 'Japan',
  'alpha2': 'jp',
  'alpha3': 'jpn'
}, {
  'name': 'Jersey',
  'alpha2': 'je',
  'alpha3': 'jey'
}, {
  'name': 'Jordan',
  'alpha2': 'jo',
  'alpha3': 'jor'
}, {
  'name': 'Kazakhstan',
  'alpha2': 'kz',
  'alpha3': 'kaz'
}, {
  'name': 'Kenya',
  'alpha2': 'ke',
  'alpha3': 'ken'
}, {
  'name': 'Kiribati',
  'alpha2': 'ki',
  'alpha3': 'kir'
}, {
  'name': 'Korea (North)',
  'alpha2': 'kp',
  'alpha3': 'prk'
}, {
  'name': 'Korea, Republic of',
  'alpha2': 'kr',
  'alpha3': 'kor'
}, {
  'name': 'Kuwait',
  'alpha2': 'kw',
  'alpha3': 'kwt'
}, {
  'name': 'Kyrgyzstan',
  'alpha2': 'kg',
  'alpha3': 'kgz'
}, {
  'name': 'Lao People\'s Democratic Republic',
  'alpha2': 'la',
  'alpha3': 'lao'
}, {
  'name': 'Latvia',
  'alpha2': 'lv',
  'alpha3': 'lva'
}, {
  'name': 'Lebanon',
  'alpha2': 'lb',
  'alpha3': 'lbn'
}, {
  'name': 'Lesotho',
  'alpha2': 'ls',
  'alpha3': 'lso'
}, {
  'name': 'Liberia',
  'alpha2': 'lr',
  'alpha3': 'lbr'
}, {
  'name': 'Libya',
  'alpha2': 'ly',
  'alpha3': 'lby'
}, {
  'name': 'Liechtenstein',
  'alpha2': 'li',
  'alpha3': 'lie'
}, {
  'name': 'Lithuania',
  'alpha2': 'lt',
  'alpha3': 'ltu'
}, {
  'name': 'Luxembourg',
  'alpha2': 'lu',
  'alpha3': 'lux'
}, {
  'name': 'Macao',
  'alpha2': 'mo',
  'alpha3': 'mac'
}, {
  'name': 'Macedonia',
  'alpha2': 'mk',
  'alpha3': 'mkd'
}, {
  'name': 'Madagascar',
  'alpha2': 'mg',
  'alpha3': 'mdg'
}, {
  'name': 'Malawi',
  'alpha2': 'mw',
  'alpha3': 'mwi'
}, {
  'name': 'Malaysia',
  'alpha2': 'my',
  'alpha3': 'mys'
}, {
  'name': 'Maldives',
  'alpha2': 'mv',
  'alpha3': 'mdv'
}, {
  'name': 'Mali',
  'alpha2': 'ml',
  'alpha3': 'mli'
}, {
  'name': 'Malta',
  'alpha2': 'mt',
  'alpha3': 'mlt'
}, {
  'name': 'Mauritania',
  'alpha2': 'mr',
  'alpha3': 'mrt'
}, {
  'name': 'Mauritius',
  'alpha2': 'mu',
  'alpha3': 'mus'
}, {
  'name': 'Mayotte',
  'alpha2': 'yt',
  'alpha3': 'myt'
}, {
  'name': 'Mexico',
  'alpha2': 'mx',
  'alpha3': 'mex'
}, {
  'name': 'Moldova, Republic of',
  'alpha2': 'md',
  'alpha3': 'mda'
}, {
  'name': 'Monaco',
  'alpha2': 'mc',
  'alpha3': 'mco'
}, {
  'name': 'Mongolia',
  'alpha2': 'mn',
  'alpha3': 'mng'
}, {
  'name': 'Montenegro',
  'alpha2': 'me',
  'alpha3': 'mne'
}, {
  'name': 'Montserrat',
  'alpha2': 'ms',
  'alpha3': 'msr'
}, {
  'name': 'Morocco',
  'alpha2': 'ma',
  'alpha3': 'mar'
}, {
  'name': 'Mozambique',
  'alpha2': 'mz',
  'alpha3': 'moz'
}, {
  'name': 'Myanmar',
  'alpha2': 'mm',
  'alpha3': 'mmr'
}, {
  'name': 'Namibia',
  'alpha2': 'na',
  'alpha3': 'nam'
}, {
  'name': 'Nepal',
  'alpha2': 'np',
  'alpha3': 'npl'
}, {
  'name': 'Netherlands',
  'alpha2': 'nl',
  'alpha3': 'nld'
}, {
  'name': 'New Zealand',
  'alpha2': 'nz',
  'alpha3': 'nzl'
}, {
  'name': 'Nicaragua',
  'alpha2': 'ni',
  'alpha3': 'nic'
}, {
  'name': 'Niger',
  'alpha2': 'ne',
  'alpha3': 'ner'
}, {
  'name': 'Nigeria',
  'alpha2': 'ng',
  'alpha3': 'nga'
}, {
  'name': 'Norfolk Island',
  'alpha2': 'nf',
  'alpha3': 'nfk'
}, {
  'name': 'Norway',
  'alpha2': 'no',
  'alpha3': 'nor'
}, {
  'name': 'Oman',
  'alpha2': 'om',
  'alpha3': 'omn'
}, {
  'name': 'Pakistan',
  'alpha2': 'pk',
  'alpha3': 'pak'
}, {
  'name': 'Palestinian Territory, Occupied',
  'alpha2': 'ps',
  'alpha3': 'pse'
}, {
  'name': 'Panama',
  'alpha2': 'pa',
  'alpha3': 'pan'
}, {
  'name': 'Papua New Guinea',
  'alpha2': 'pg',
  'alpha3': 'png'
}, {
  'name': 'Paraguay',
  'alpha2': 'py',
  'alpha3': 'pry'
}, {
  'name': 'Peru',
  'alpha2': 'pe',
  'alpha3': 'per'
}, {
  'name': 'Philippines',
  'alpha2': 'ph',
  'alpha3': 'phl'
}, {
  'name': 'Poland',
  'alpha2': 'pl',
  'alpha3': 'pol'
}, {
  'name': 'Portugal',
  'alpha2': 'pt',
  'alpha3': 'prt'
}, {
  'name': 'Puerto Rico',
  'alpha2': 'pr',
  'alpha3': 'pri'
}, {
  'name': 'Qatar',
  'alpha2': 'qa',
  'alpha3': 'qat'
}, {
  'name': 'Reunion',
  'alpha2': 're',
  'alpha3': 'reu'
}, {
  'name': 'Romania',
  'alpha2': 'ro',
  'alpha3': 'rou'
}, {
  'name': 'Russian Federation',
  'alpha2': 'ru',
  'alpha3': 'rus'
}, {
  'name': 'Rwanda',
  'alpha2': 'rw',
  'alpha3': 'rwa'
}, {
  'name': 'Saint Kitts and Nevis',
  'alpha2': 'kn',
  'alpha3': 'kna'
}, {
  'name': 'Saint Lucia',
  'alpha2': 'lc',
  'alpha3': 'lca'
}, {
  'name': 'Saint Vincent and the Grenadines',
  'alpha2': 'vc',
  'alpha3': 'vct'
}, {
  'name': 'San Marino',
  'alpha2': 'sm',
  'alpha3': 'smr'
}, {
  'name': 'Sao Tome and Principe',
  'alpha2': 'st',
  'alpha3': 'stp'
}, {
  'name': 'Saudi Arabia',
  'alpha2': 'sa',
  'alpha3': 'sau'
}, {
  'name': 'Senegal',
  'alpha2': 'sn',
  'alpha3': 'sen'
}, {
  'name': 'Serbia',
  'alpha2': 'rs',
  'alpha3': 'srb'
}, {
  'name': 'Seychelles',
  'alpha2': 'sc',
  'alpha3': 'syc'
}, {
  'name': 'Sierra Leone',
  'alpha2': 'sl',
  'alpha3': 'sle'
}, {
  'name': 'Singapore',
  'alpha2': 'sg',
  'alpha3': 'sgp'
}, {
  'name': 'Sint Maarten',
  'alpha2': 'sx',
  'alpha3': 'sxm'
}, {
  'name': 'Slovakia',
  'alpha2': 'sk',
  'alpha3': 'svk'
}, {
  'name': 'Slovenia',
  'alpha2': 'si',
  'alpha3': 'svn'
}, {
  'name': 'Solomon Islands',
  'alpha2': 'sb',
  'alpha3': 'slb'
}, {
  'name': 'Somalia',
  'alpha2': 'so',
  'alpha3': 'som'
}, {
  'name': 'South Africa',
  'alpha2': 'za',
  'alpha3': 'zaf'
}, {
  'name': 'South Sudan',
  'alpha2': 'ss',
  'alpha3': 'ssd'
}, {
  'name': 'Spain',
  'alpha2': 'es',
  'alpha3': 'esp'
}, {
  'name': 'Sri Lanka',
  'alpha2': 'lk',
  'alpha3': 'lka'
}, {
  'name': 'St. Helena',
  'alpha2': 'sh',
  'alpha3': 'shn'
}, {
  'name': 'Sudan',
  'alpha2': 'sd',
  'alpha3': 'sdn'
}, {
  'name': 'Suriname',
  'alpha2': 'sr',
  'alpha3': 'sur'
}, {
  'name': 'Sweden',
  'alpha2': 'se',
  'alpha3': 'swe'
}, {
  'name': 'Switzerland',
  'alpha2': 'ch',
  'alpha3': 'che'
}, {
  'name': 'Syrian Arab Republic',
  'alpha2': 'sy',
  'alpha3': 'syr'
}, {
  'name': 'Taiwan',
  'alpha2': 'tw',
  'alpha3': 'twn'
}, {
  'name': 'Tajikistan',
  'alpha2': 'tj',
  'alpha3': 'tjk'
}, {
  'name': 'Tanzania',
  'alpha2': 'tz',
  'alpha3': 'tza'
}, {
  'name': 'Thailand',
  'alpha2': 'th',
  'alpha3': 'tha'
}, {
  'name': 'Togo',
  'alpha2': 'tg',
  'alpha3': 'tgo'
}, {
  'name': 'Tonga',
  'alpha2': 'to',
  'alpha3': 'ton'
}, {
  'name': 'Trinidad and Tobago',
  'alpha2': 'tt',
  'alpha3': 'tto'
}, {
  'name': 'Tunisia',
  'alpha2': 'tn',
  'alpha3': 'tun'
}, {
  'name': 'Turkey',
  'alpha2': 'tr',
  'alpha3': 'tur'
}, {
  'name': 'Turkmenistan',
  'alpha2': 'tm',
  'alpha3': 'tkm'
}, {
  'name': 'Turks and Caicos Islands',
  'alpha2': 'tc',
  'alpha3': 'tca'
}, {
  'name': 'Uganda',
  'alpha2': 'ug',
  'alpha3': 'uga'
}, {
  'name': 'Ukraine',
  'alpha2': 'ua',
  'alpha3': 'ukr'
}, {
  'name': 'United Arab Emirates',
  'alpha2': 'ae',
  'alpha3': 'are'
}, {
  'name': 'United Kingdom',
  'alpha2': 'gb',
  'alpha3': 'gbr'
}, {
  'name': 'United States',
  'alpha2': 'us',
  'alpha3': 'usa'
}, {
  'name': 'Uruguay',
  'alpha2': 'uy',
  'alpha3': 'ury'
}, {
  'name': 'Uzbekistan',
  'alpha2': 'uz',
  'alpha3': 'uzb'
}, {
  'name': 'Vanuatu',
  'alpha2': 'vu',
  'alpha3': 'vut'
}, {
  'name': 'Vatican City State (Holy See)',
  'alpha2': 'va',
  'alpha3': 'vat'
}, {
  'name': 'Venezuela',
  'alpha2': 've',
  'alpha3': 'ven'
}, {
  'name': 'Viet Nam',
  'alpha2': 'vn',
  'alpha3': 'vnm'
}, {
  'name': 'Virgin Islands (British)',
  'alpha2': 'vg',
  'alpha3': 'vgb'
}, {
  'name': 'Virgin Islands (U.S.)',
  'alpha2': 'vi',
  'alpha3': 'vir'
}, {
  'name': 'Yemen',
  'alpha2': 'ye',
  'alpha3': 'yem'
}, {
  'name': 'Zambia',
  'alpha2': 'zm',
  'alpha3': 'zmb'
}, {
  'name': 'Zimbabwe',
  'alpha2': 'zw',
  'alpha3': 'zwe'
}];
const getCountryByName = countryName => {
  if (!countryName) {
    return null;
  }

  return countryList.find(country => country.name.toLowerCase() === countryName.toLowerCase());
};
const getCountryByCode2 = countryDigits => {
  if (!countryDigits) {
    return null;
  }

  return countryList.find(country => country.alpha2.toLowerCase() === countryDigits.toLowerCase());
};
const getCountryByCode3 = countryDigits => {
  if (!countryDigits) {
    return null;
  }

  return countryList.find(country => country.alpha3.toLowerCase() === countryDigits.toLowerCase());
};
const getCountryByGeolocation = () => {
  const {
    searchParams
  } = new URL(document.location);

  if (searchParams && searchParams.get('subscc')) {
    const code = searchParams.get('subscc');
    const country = getCountryByCode2(code);
    return country;
  }

  const value = `; ${document.cookie}`;
  const parts = value.split('; reuters-geo=');

  if (parts.length === 2) {
    const raw_geo = parts.pop().split(';').shift();

    try {
      const parsed_geo = JSON.parse(raw_geo);
      return getCountryByCode2(parsed_geo.country);
    } catch (error) {
      //eslint-disable-next-line no-console
      console.log('Geolocation token is not a JSON string.', error);
    }
  }

  return null;
};
const getSelectedCountry = () => {
  let selected_country = null;

  try {
    selected_country = JSON.parse(sessionStorage.getItem('reuters_selected_country'));
  } catch (error) {
    //eslint-disable-next-line no-console
    console.log('Cannot get country from sessionStorage.', error);
  }

  return selected_country;
};
const saveSelectedCountry = country => {
  sessionStorage.setItem('reuters_selected_country', JSON.stringify(country));
};
const checkIfCountryIsSupported = (list_of_supported_countries = [], country = null) => {
  return Boolean(country && list_of_supported_countries && list_of_supported_countries.some(supported_country => supported_country.alpha2 === country.alpha2));
};

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_STORAGE_ITEMS", function() { return SESSION_STORAGE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_PARAMS_KEYS", function() { return QUERY_PARAMS_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaywallType", function() { return PaywallType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDUSTRY_JOB_ROLES_LIST", function() { return INDUSTRY_JOB_ROLES_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDUSTRY_JOB_ROLES_STANDART_EQUIVALENTS_LIST", function() { return INDUSTRY_JOB_ROLES_STANDART_EQUIVALENTS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDUSTRY_JOB_ROLES_JOB_LEVELS_MAPPING", function() { return INDUSTRY_JOB_ROLES_JOB_LEVELS_MAPPING; });
const SESSION_STORAGE_ITEMS = {
  already_registered_user_subscription_flow: 'already_registered_user_subscription_flow',
  already_registered_user_emerald_flow: 'already_registered_user_emerald_flow',
  reuters_payment_error: 'reuters_payment_error',
  reuters_proposed_plan_id: 'reuters_proposed_plan_id',
  reuters_selected_plan_name: 'reuters_selected_plan_name',
  reuters_subscription_journey_started_from_url: 'reuters_subscription_journey_started_from_url',
  reuters_subscription_plans: 'reuters_subscription_plans',
  reuters_subscription_sku: 'reuters_subscription_sku',
  reuters_subscription_id: 'reuters_subscription_id',
  reuters_subscription_succeed: 'reuters_subscription_succeed'
};
const QUERY_PARAMS_KEYS = {
  nonce: 'nonce',
  email: 'email',
  relogin: 'relogin',
  legal_token: 'token',
  access_code: 'accesscode'
};
const PaywallType = {
  REGISTRATION: 'registration',
  SUBSCRIPTION: 'subscription',
  UNDETERMINED: 'undetermined',
  VERIFY_EMAIL: 'verify_email'
}; // NOTE: When namings are changed make sure there are valid with SF values. Otherwise add mapping in : https://github.com/tr/rcom-arc_subscription-websocket/blob/master/src/utils/rpc.ts#L80

const INDUSTRY_JOB_ROLES_LIST = ['Academic, Researcher or Librarian', 'Administrative Assistant', 'Associate', 'Business Development', 'Consulting', 'Corporate Counsel', 'Counsel', 'Executive Management', 'Judge', 'Knowledge Management', 'Legal Operations', 'Legal Technology', 'Paralegal', 'Partner', 'Practice Management', 'Procurement and Finance', 'Product, Brand and Marketing'];
const INDUSTRY_JOB_ROLES_STANDART_EQUIVALENTS_LIST = ['Academic, Researcher or Librarian', // Academic, Researcher or Librarian
'Other', // Administrative Assistant
'Legal and Compliance', // Associate
'Partnerships and Business Development', // Business Development
'Legal and Compliance', // Consulting
'Legal and Compliance', // Corporate Counsel
'Legal and Compliance', // Counsel
'Business Leadership and Strategy', // Executive Management
'Legal and Compliance', // Judge
'IT, Knowledge and Information', // Knowledge Management
'Legal and Compliance', // Legal Operations
'Legal and Compliance', // Legal Technology
'Legal and Compliance', // Paralegal
'Legal and Compliance', // Partner
'Legal and Compliance', // Practice Management
'Procurement and Finance', // Procurement and Finance
'Product, Brand and Marketing' // Product, Brand and Marketing
];
const INDUSTRY_JOB_ROLES_JOB_LEVELS_MAPPING = ['Other', // Academic, Researcher or Librarian
'Junior/Staff/Individual Contributor', // Administrative Assistant
'Junior/Staff/Individual Contributor', // Associate
'Other', // Business Development
'Other', //Consulting
'SVP/VP/Editor in chief', // Corporate Counsel
'SVP/VP/Editor in chief', // Counsel
'CXO/Managing Director', // Executive Management
'Govt/Public Service Senior Leader', // Judge
'Other', // Knowledge Management
'Other', // Legal Operations
'Other', // Legal Technology
'Junior/Staff/Individual Contributor', // Paralegal
'Owner/Partner', // Partner
'Other', // Practice Management
'Other', // Procurement and Finance
'Other' // Product, Brand and Marketing
];

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaywallState", function() { return PaywallState; });
var PaywallState = {
  UNDETERMINED: 'undetermined',
  UNRESTRICTED: 'unrestricted',
  RESTRICTED: 'restricted'
};

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Lint intentionally disabled because the code is supplied by the external Sophi team

/**
 * Event sending code supplied by the external Sophi team
 *
 * Code cut and pasted from the document titled 'Implementation Instructions'
 *
 * ** Do not modify code without consulting the external Sophi team **
 */
var attachSophiEvents = function attachSophiEvents() {
  (function (f, g) {
    window.sophi = window.sophi || {};
    var c = window.sophi;
    c.q = c.q || [];

    c.sendEvent = function (a) {
      c.q.push(a);
    };

    c.data = c.data || {};
    c.settings = c.settings || {};
    var b = c.settings;
    b.trackerName = b.trackerName || 'sophiTag';
    var a;

    try {
      window.localStorage && ((a = localStorage.getItem(b.trackerName + '.tagCdn')) && typeof a === 'string' && a.length > 7 || (a = void 0));
    } catch (e) {
      a = void 0;
    }

    b.loadFrom = a ? a + 'sophi.min.js' : b.loadFrom || 'https://cdn.sophi.io/latest/sophi.min.js';
    b.legacy = a ? a + 'sophi.legacy.min.js' : b.loadFrom || 'https://cdn.sophi.io/latest/sophi.legacy.min.js';

    try {
      eval('let id = Symbol("id"), a = [...new Set([0,1])].includes(0);');
    } catch (e) {
      b.loadFrom = b.legacy;
    } finally {
      if (!window[b.trackerName]) {
        a = document.createElement('script');
        var d = document.getElementsByTagName('script')[0];
        a.async = 1;
        a.src = b.loadFrom;
        d.parentNode.insertBefore(a, d);
      }
    }

    c.sendEvent({
      type: 'page_view'
    });
  })();
};

/* harmony default export */ __webpack_exports__["default"] = (attachSophiEvents);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecureSalt", function() { return getSecureSalt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Returns a secure salt
 *
 * @param {string} rawSalt the raw salt to check for security
 *
 * @returns a secure salt or undefiend if the rawSalt does not pass the security checks
 */
var getSecureSalt = function getSecureSalt(rawSalt) {
  var SALT_SAFE_LENGTH = 32;

  if (rawSalt && rawSalt.length >= SALT_SAFE_LENGTH) {
    return rawSalt;
  }

  return undefined;
};
/**
* SHA-256 hash
* Please note that hasCrypto will only be true if using https or localhost. In particular, it will be false for
* http://localhost.arcpublishing.com
*
* @param {string} rawSalt the salt to add to the data
* @param {string} data the data to hash
* @returns the SHA-256 hashed data as a hexidecimal string
*/

var hash = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(rawSalt, data) {
    var _crypto, _crypto$subtle;

    var secureSalt, hasCrypto, saltedData, textEncoder, hashBuffer, hashArray;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            secureSalt = getSecureSalt(rawSalt);
            hasCrypto = Boolean((_crypto = crypto) === null || _crypto === void 0 ? void 0 : (_crypto$subtle = _crypto.subtle) === null || _crypto$subtle === void 0 ? void 0 : _crypto$subtle.digest);

            if (!(!data || !secureSalt || !hasCrypto)) {
              _context.next = 5;
              break;
            }

            if (true) {
              console.error('Could not hash data due to missing params:', Boolean(data), Boolean(secureSalt), hasCrypto);
            }

            return _context.abrupt("return", undefined);

          case 5:
            saltedData = "".concat(secureSalt).concat(data); // Encode as UTF-8

            textEncoder = new TextEncoder().encode(saltedData); // Hash the data

            _context.next = 9;
            return crypto.subtle.digest('SHA-256', textEncoder);

          case 9:
            hashBuffer = _context.sent;
            // Convert bytes to a hexidecimal string
            hashArray = Array.from(new Uint8Array(hashBuffer));
            return _context.abrupt("return", hashArray.map(function (b) {
              return b.toString(16).padStart(2, '0');
            }).join(''));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hash(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 126 */
/***/ (function(module, exports) {

!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";(function(t){var o=n(4),r=setTimeout;function i(){}function c(t){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(t,this)}function a(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,c._immediateFn((function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var o;try{o=n(t._value)}catch(t){return void s(e.promise,t)}u(e.promise,o)}else(1===t._state?u:s)(e.promise,t._value)}))):t._deferreds.push(e)}function u(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof c)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void d((o=n,r=e,function(){o.apply(r,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(e){s(t,e)}var o,r}function s(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&c._immediateFn((function(){t._handled||c._unhandledRejectionFn(t._value)}));for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function f(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function d(t,e){var n=!1;try{t((function(t){n||(n=!0,u(e,t))}),(function(t){n||(n=!0,s(e,t))}))}catch(t){if(n)return;n=!0,s(e,t)}}c.prototype.catch=function(t){return this.then(null,t)},c.prototype.then=function(t,e){var n=new this.constructor(i);return a(this,new f(t,e,n)),n},c.prototype.finally=o.a,c.all=function(t){return new c((function(e,n){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(t);if(0===o.length)return e([]);var r=o.length;function i(t,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var a=c.then;if("function"==typeof a)return void a.call(c,(function(e){i(t,e)}),n)}o[t]=c,0==--r&&e(o)}catch(t){n(t)}}for(var c=0;c<o.length;c++)i(c,o[c])}))},c.resolve=function(t){return t&&"object"==typeof t&&t.constructor===c?t:new c((function(e){e(t)}))},c.reject=function(t){return new c((function(e,n){n(t)}))},c.race=function(t){return new c((function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)}))},c._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){r(t,0)},c._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=c}).call(this,n(5).setImmediate)},function(t,e,n){var o,r;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(r="function"==typeof(o=i)?o.call(e,n,e,t):o)||(t.exports=r),!0,t.exports=i(),!!0){var c=window.Cookies,a=window.Cookies=i();a.noConflict=function(){return window.Cookies=c,a}}}((function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function i(e,n,i){if("undefined"!=typeof document){"number"==typeof(i=t({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(n);/^[\{\[]/.test(c)&&(n=c)}catch(t){}n=o.write?o.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var u in i)i[u]&&(a+="; "+u,!0!==i[u]&&(a+="="+i[u].split(";")[0]));return document.cookie=e+"="+n+a}}function c(t,n){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var a=i[c].split("="),u=a.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var s=e(a[0]);if(u=(o.read||o)(u,s)||e(u),n)try{u=JSON.parse(u)}catch(t){}if(r[s]=u,t===s)break}catch(t){}}return t?r[t]:r}}return r.set=i,r.get=function(t){return c(t,!1)},r.getJSON=function(t){return c(t,!0)},r.remove=function(e,n){i(e,"",t(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))},function(t,e,n){"use strict";var o=n(0),r="US",i="CA",c="SA",a="BR",u="CA",s="EU",l="PL",f="default",d="none",p="eu",_="ca",v={STRICTLY_NECESSARY_COOKIES:1,PERFORMANCE_COOKIES:2,FUNCTIONAL_COOKIES:3,TARGETING_COOKIES:4,SOCIAL_MEDIA_COOKIES:5,SALE_OF_PERSONAL_DATA:"SPD_BG",STACK_42:"STACK42"},h=n(1),m=n.n(h),g=function(){return new Promise((function(t){window.__tcfapi?window.__tcfapi("getTCData",2,(function(e,n){n&&t(e)})):t(!1)}))};function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var b=function(t){var e=t.geolocation_mock,n=t.onetrust_logs,h=t.onetrust_script_id;return new o.a((function(t,w){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;t===_&&(window.OneTrust={geolocationResponse:{stateCode:i,countryCode:r},useGeoLocationService:!1}),t===p&&(window.OneTrust={geolocationResponse:{regionCode:s,countryCode:l},useGeoLocationService:!1}),t===d&&(window.OneTrust={geolocationResponse:{regionCode:c,countryCode:a},useGeoLocationService:!1})}(e);var b,T="true"===n,O="ccpa-id-".concat(h),C=function(){T&&console.log("###### onetrust setup start");var e=!1;window.OptanonWrapper=function(){new o.a((function(t){window.setTimeout((function(){t(m.a.get("OptanonConsent"))}),0)})).then((function(n){var c=function(t){var e=decodeURIComponent(t).split("&"),n={};if(e.forEach((function(t){var e=t.split("=");n[e[0]]=e[1]})),n.groups){n.groups=n.groups.split(",");var o={};n.groups.forEach((function(t){var e=t.split(":");o[e[0]]=e[1]})),n.groups=o}return n}(n);T&&console.log("%c ++++ DECODED COOKIE: ","background: yellow; color: black",c);var a=void 0,u=function(){return o.a.all([g(),new Promise((function(t){window.__uspapi("getUSPData",1,(function(e,n){t(!!n&&e)}))}))]).then((function(n){var o=y(n,2),u=o[0],s=o[1];T&&(console.log("%c RESOLVED ----- GDPR: ","background: yellow; color: black",u),console.log("%c RESOLVED ----- CCPA: ","background: yellow; color: black",s)),function(){if(c.groups){if(T)for(var t in console.log("%c ALL GROUPS ","background: yellow; color: black",c.groups),v)c.groups[v[t]]&&console.log(t,c.groups[v[t]]);a=c.groups,e=!0}}();var f,d=function(t){var e=t.country,n=t.state;return e===r&&n===i}(l),p=!!u&&u.gdprApplies,_=d&&!a;if(e){var h=!!(f=a)&&"1"===f[v.STRICTLY_NECESSARY_COOKIES]&&"1"===f[v.PERFORMANCE_COOKIES]&&"1"===f[v.FUNCTIONAL_COOKIES]&&"1"===f[v.TARGETING_COOKIES],m=d||p,g=s?s.uspString:void 0,w=u?u.tcString:void 0;m?h?(d&&t({require_gdpr_consent:p,require_ccpa_consent:d,require_consent:!0,consent:!0,gdpr_consent_data:void 0,ccpa_consent_data:g}),p&&t({require_gdpr_consent:p,require_ccpa_consent:d,require_consent:!0,consent:!!w,gdpr_consent_data:w,ccpa_consent_data:g})):t({require_gdpr_consent:p,require_ccpa_consent:d,require_consent:!0,consent:!1,gdpr_consent_data:void 0,ccpa_consent_data:g}):t({require_gdpr_consent:p,require_ccpa_consent:d,require_consent:!1,consent:void 0,gdpr_consent_data:void 0,ccpa_consent_data:g})}!e&&_&&t({require_gdpr_consent:!1,require_ccpa_consent:!0,require_consent:!0,consent:!0,gdpr_consent_data:void 0,ccpa_consent_data:"1YNN"})})).catch((function(e){t({require_gdpr_consent:!1,require_ccpa_consent:!1,require_consent:!1,consent:void 0,gdpr_consent_data:void 0,ccpa_consent_data:void 0})}))},s=function(){return o.a.all([g()]).then((function(t){var e=y(t,1)[0],n=!!e&&e.gdprApplies,o=m.a.get("OptanonAlertBoxClosed");n&&!o?(window.OneTrust.ToggleInfoDisplay(),window.OneTrust.OnConsentChanged((function(){u()}))):u()})).catch((function(e){t({require_gdpr_consent:!1,require_ccpa_consent:!1,require_consent:!1,consent:void 0,gdpr_consent_data:void 0,ccpa_consent_data:void 0})}))},l=Optanon.getGeolocationData();document.getElementById(O)?s():E("https://cdn.cookielaw.org/opt-out/otCCPAiab.js",[{attr:"type",val:"text/javascript"},{attr:"charset",val:"UTF-8"},{attr:"id",val:O},{attr:"ccpa-opt-out-ids",val:"".concat(v.PERFORMANCE_COOKIES,",").concat(v.TARGETING_COOKIES)},{attr:"ccpa-opt-out-geo",val:"ca"},{attr:"ccpa-opt-out-lspa",val:"false"}],(function(){s()}))}))}},E=function(t,e,n){var o=document.createElement("script");o.src=t,e.forEach((function(t){o.setAttribute(t.attr,t.val)})),document.head.appendChild(o),o.onload=function(){return n()},o.onerror=w};b=window.strLocalization?window.strLocalization===a?"pt":window.strLocalization===u?"en":window.strLocalization.toLowerCase():document.documentElement.lang||"en",E("https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",[{attr:"type",val:"text/javascript"},{attr:"charset",val:"UTF-8"},{attr:"data-language",val:b},{attr:"data-domain-script",val:h}],(function(){return C()}))}))};function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}n.d(e,"b",(function(){return C}));var C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t,n=null,o=function(){window.clearTimeout(n),n=window.setTimeout((function(){e.forEach((function(t){"function"!=typeof t?console.warn("Ignore execution of ",t,"in the Boostrap queue, the input is not a function."):t()})),e.length=0}),0)},r=function(t){"function"!=typeof t?console.warn("Ignore push of ",t,"to the Boostrap queue, the input is not a function."):(e.push(t),o())};return o(),{exec:o,push:r}};e.a=function(t,e){console.log("Init Bootstrap with config",t);var n=t.geolocation_mock,r=t.onetrust_logs,i=t.onetrust_script_id,c=b({geolocation_mock:n,onetrust_logs:r,onetrust_script_id:i}),a=o.a.all([c]).then((function(t){var e=T(t,1)[0],n={require_gdpr_consent:e.require_gdpr_consent,require_ccpa_consent:e.require_ccpa_consent,require_consent:e.require_consent,consent:e.consent,gdpr_consent_data:e.gdpr_consent_data,ccpa_consent_data:e.ccpa_consent_data};return console.table?console.table(n):console.log(n),n})).then(e);return{queue:C(),getResults:function(t){a.then(t)}}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";e.a=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){return e.reject(n)}))}))}},function(t,e,n){(function(t){var o=void 0!==t&&t||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},e.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(6),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(3))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var o,r,i,c,a,u=1,s={},l=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?o=function(t){e.nextTick((function(){_(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){_(t.data)},o=function(t){i.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(r=f.documentElement,o=function(t){var e=f.createElement("script");e.onreadystatechange=function(){_(t),e.onreadystatechange=null,r.removeChild(e),e=null},r.appendChild(e)}):o=function(t){setTimeout(_,0,t)}:(c="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(c)&&_(+e.data.slice(c.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),o=function(e){t.postMessage(c+e,"*")}),d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return s[u]=r,o(u),u++},d.clearImmediate=p}function p(t){delete s[t]}function _(t){if(l)setTimeout(_,0,t);else{var e=s[t];if(e){l=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{p(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(3),n(7))},function(t,e){var n,o,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{o="function"==typeof clearTimeout?clearTimeout:c}catch(t){o=c}}();var u,s=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&p())}function p(){if(!l){var t=a(d);l=!0;for(var e=s.length;e;){for(u=s,s=[];++f<e;)u&&u[f].run();f=-1,e=s.length}u=null,l=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===c||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function _(t,e){this.fun=t,this.array=e}function v(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new _(t,e)),1!==s.length||l||a(p)},_.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},,function(t,e,n){"use strict";n.r(e);var o=n(2),r=function(){var t=window.bootstrap?window.bootstrap.queue:void 0;Object(o.b)(t)};r(),window.initBootstrap=function(t,e){return r(),window.bootstrap=Object(o.a)(t,e),window.bootstrap}}]);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONETRUST_LOGS", function() { return ONETRUST_LOGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONETRUST_GEOLOCATION_MOCK", function() { return ONETRUST_GEOLOCATION_MOCK; });
var ONETRUST_LOGS = 'ot_logs';
var ONETRUST_GEOLOCATION_MOCK = 'ot_geolocation_mock';


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PROJECT_ID = 'a55a84b3-9632-4869-b625-3d8ef43ed18d';
var PUBLIC_API_KEY = '9c1ce68f-7551-4e2e-9ddb-f2beacbd91bf';

var initScript = function initScript(data, callback) {
  var require_consent = data.require_consent,
      opt_in = data.opt_in,
      token = data.token,
      user_id = data.user_id,
      consent_given = data.consent_given,
      subscription_type = data.subscription_type,
      subscription_metered_articles_left = data.subscription_metered_articles_left,
      _data$content = data.content,
      site_type = _data$content.site_type,
      edition = _data$content.edition,
      platform = _data$content.platform,
      canonical_url = _data$content.canonical_url,
      content_title = _data$content.content_title,
      content_type = _data$content.content_type,
      topic_channel = _data$content.topic_channel,
      topic_sub_channel = _data$content.topic_sub_channel,
      keywords = _data$content.keywords,
      article_keyword_slug = _data$content.article_keyword_slug,
      article_backend_channel = _data$content.article_backend_channel,
      article_n2_codes = _data$content.article_n2_codes,
      article_n2_names = _data$content.article_n2_names; // eslint-disable-next-line no-unused-expressions, max-params

  !function (n, e, o, r, i) {
    if (!e) {
      // eslint-disable-next-line no-unused-expressions, no-sequences
      e = e || {}, window.permutive = e, e.q = [], e.config = i || {}, e.config.projectId = o, e.config.apiKey = r, e.config.environment = e.config.environment || 'production';

      for (var t = ['addon', 'identify', 'track', 'trigger', 'query', 'segment', 'segments', 'ready', 'on', 'once', 'user', 'consent'], c = 0; c < t.length; c++) {
        var f = t[c];

        e[f] = function (n) {
          return function () {
            // eslint-disable-next-line prefer-rest-params
            var o = Array.prototype.slice.call(arguments, 0);
            e.q.push({
              functionName: n,
              arguments: o
            });
          };
        }(f);
      }
    }
  }(document, window.permutive, PROJECT_ID, PUBLIC_API_KEY, {
    consentRequired: require_consent
  }); // Real-time callback
  // https://www.notion.so/Realtime-Callback-88826bc0fddf462f9d8eb9b86b033968#2253054cd75c431d8ff5a8a96d8f2f8b
  // window.permutive.readyWithTimeout = function(e, i, t) {
  //   var u = !1,
  //     n = function() {
  //       u || (e(), (u = !0));
  //     };
  //   (t = t || 1 / 0) !== 1 / 0 && window.setTimeout(n, t),
  //     permutive.ready(n, i);
  // };
  // Pass consent and Fire event

  var page_properties = {
    site_type: site_type,
    content_type: content_type,
    edition: edition,
    platform: platform,
    canonical_url: canonical_url
  };

  if (typeof content_type === 'string' && content_type.toLowerCase() === 'article') {
    Object.assign(page_properties, {
      topic: {
        channel: topic_channel,
        sub_channel: topic_sub_channel
      },
      article: {
        content_title: content_title,
        keywords: keywords.split(','),
        keyword_slug: article_keyword_slug,
        backend_channel: article_backend_channel,
        //backend_channel_list: story.channel_names,
        n2_codes: article_n2_codes.split(','),
        n2_names: article_n2_names.split(',')
      },
      application: {
        subscription_type: subscription_type,
        subscription_metered_articles_left: subscription_metered_articles_left
      }
    });
  }

  if (user_id) {
    window.permutive.identify([{
      id: user_id,
      tag: 'reuters_authenticated_user'
    }]);
  } //Token for no CCPA and no GPDR
  //https://support.permutive.com/hc/en-us/articles/360010845519-Seeking-User-Consent#h_cb56747f-2c3b-4d9c-81a6-e1027435e70c


  window.permutive.consent({
    opt_in: opt_in,
    token: opt_in && !token ? 'CONSENT_CAPTURED' : token
  });
  window.permutive.addon('web', {
    page: page_properties
  }); //window.permutive.readyWithTimeout(callback, "realtime", 1500);

  window.permutive.once('Pageview', callback);

  if (!consent_given) {
    callback(null);
  }
};

var loadScript = function loadScript() {
  var script = document.createElement('script');
  script.src = "//cdn.permutive.com/".concat(PROJECT_ID, "-web.js");
  script.setAttribute('async', 'async');
  document.head.appendChild(script);
};

/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  return new Promise(function (resolve) {
    initScript(data, resolve);
    loadScript();
  });
});

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
var PARTNER_CODE = 'reutersheader194883552024';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var script_preload = document.createElement('link');
  script_preload.setAttribute('href', "https://z.moatads.com/".concat(PARTNER_CODE, "/moatheader.js"));
  script_preload.setAttribute('rel', 'preload');
  script_preload.setAttribute('as', 'script');
  document.head.appendChild(script_preload);
  var script_preconnect = document.createElement('link');
  script_preconnect.setAttribute('href', 'https://mb.moatads.com');
  script_preconnect.setAttribute('rel', 'preconnect');
  document.head.appendChild(script_preconnect);
  var script = document.createElement('script');
  script.src = "https://z.moatads.com/".concat(PARTNER_CODE, "/moatheader.js");
  script.setAttribute('async', 'async');
  document.head.appendChild(script);

  script.onload = function () {
    return console.log('MOAT setup complete');
  };

  script.onerror = function (error) {
    console.warn('MOAT load error', error);
    window['__MHS_E__reutersheader194883552024']();
  };
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (url) {
  return new Promise(function (resolve) {
    var adxsvcReq = '//usasync01.admantx.com/admantx/service?request=' + escape('{"key":"234330834c41105ad5ed794fa036e085b40225c44f9228bb9e2692f427917605",' + '"decorator":"template.reuters_ss",' + '"filter":["default"],' + '"method":"descriptor",' + '"mode":"async",' + '"type":"URL",' + "\"body\":\"".concat(encodeURIComponent(url), "\"}"));
    var admantx_xhr = new XMLHttpRequest();
    var READY_STATE = 4;
    var STATUS_OK = 200;

    if (admantx_xhr) {
      admantx_xhr.ontimeout = function () {
        admantx_xhr.abort();
        resolve('none');
      };

      var was_status_ok = false;
      var response_text = '';

      admantx_xhr.onreadystatechange = function () {
        if (admantx_xhr.status === STATUS_OK) {
          was_status_ok = true;
          response_text = admantx_xhr.responseText;
        }

        if (admantx_xhr.readyState === READY_STATE) {
          // If server response is OK
          if (was_status_ok) {
            var result = JSON.parse(response_text).admants;
            resolve(result.join(','));
          } else {
            resolve('none');
          }
        }
      };

      admantx_xhr.open('GET', adxsvcReq, true);
      admantx_xhr.timeout = 500;
      admantx_xhr.send();
    }
  });
});

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return new Promise(function (resolve) {
    var setupIAS = function setupIAS() {
      window.__iasPET = window.__iasPET || {};
      window.__iasPET.queue = window.__iasPET.queue || [];
      window.__iasPET.pubId = '931336'; // eslint-disable-next-line no-console

      console.log('IAS setup complete');
      resolve('loaded');
    }; // Set up IAS pet.js


    var script = document.createElement('script');
    script.src = '//cdn.adsafeprotected.com/iasPET.1.js';
    script.setAttribute('async', 'async');
    document.head.appendChild(script);
    script.onload = setupIAS;

    script.onerror = function (error) {
      // eslint-disable-next-line no-console
      console.warn('IAS load error', error);
      resolve('error');
    };
  });
});

/***/ })
/******/ ]);