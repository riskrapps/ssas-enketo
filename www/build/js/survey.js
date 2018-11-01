(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

var lodashSet = __webpack_require__(368);

module.exports = {
  get: function get(obj, path, def) {
    var fullPath = path.replace(/\[/g, ".").replace(/]/g, "").split(".").filter(Boolean);
    return fullPath.every(everyFunc) ? obj : def;

    function everyFunc(step) {
      return !(step && (obj = obj[step]) === undefined);
    }
  },
  set: lodashSet
};

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var en = __webpack_require__(365);

var lo = __webpack_require__(366);

var zh = __webpack_require__(367);

var _ = __webpack_require__(144);

var Cookies = {
  set: function set(key, value) {
    window.localStorage.setItem(key, value);
  },
  get: function get(key) {
    return window.localStorage.getItem(key);
  }
};
var i18n = {};
var languages = {
  "en": en,
  "lo": lo,
  "zh": zh
};
var fallback = en;

i18n.set = function (language) {
  //
  if (!languages.hasOwnProperty(language)) {
    console.error("Language not found: " + language);
    return;
  }

  this.language = language;
  this.translations = languages[language];
  this.translateDocument();
  Cookies.set("language", this.language);
};

i18n.get = function () {
  return this.language;
};

i18n._ = function (key, bindings) {
  if (bindings == undefined) {
    bindings = {};
  }

  var t = _.get(this.translations, key, _.get(fallback, key, ""));

  for (var key in bindings) {
    t = t.replace(new RegExp(":" + key, "g"), bindings[key]);
  }

  return t;
};

i18n.translateDocument = function () {
  var matches = document.querySelectorAll('[data-i18n]');

  for (var i = 0; i < matches.length; i++) {
    var el = matches[i];
    var key = el.getAttribute('data-i18n');

    var translation = this._(key);

    el.innerHTML = translation;
  }
};

document.onreadystatechange = function () {
  var language = Cookies.get("language");

  if (language == undefined) {
    language = "en";
  }

  i18n.set(language);
};

window.i18n = i18n;
module.exports = i18n;

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = {
  "index": {
    "upload": "Upload"
  },
  "survey": {
    "loading": "Loading Survey!",
    "wait": "This will take a few moments...",
    "errors": "Form contains errors, please fix all errors before submitting.",
    "saved": "Active session has been saved",
    "camera": "Camera",
    "save": "Save",
    "validate": "Validate",
    "first": "First",
    "last": "Last",
    "jump_to": "Jump To",
    "submit": "Validate &amp; Submit",
    "back": "Back",
    "next": "Next"
  },
  "session": {
    "title": "Survey Session",
    "description": "Start a New Session",
    "name": "Name this Session",
    "start": "Start"
  },
  "constraint": {
    "required": "This field is required.",
    "invalid": "Value not allowed"
  },
  "submissions": {
    "back": "Back",
    "upload_all": "Upload All",
    "upload_single": "Upload This",
    "title": "Upload Surveys",
    "uploaded": "Uploaded!",
    "name": "Name",
    "hint": "Hint",
    "size": "Size",
    "created_at": "Created At",
    "error": "An error occured while trying to submit packet named :packet",
    "success": "Packet named :packet has been submitted!"
  }
};

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = {
  "index": {
    "upload": "ອັບໂຫລດ"
  },
  "survey": {
    "loading": "ກໍາລັງໂຫລດ",
    "wait": "ລໍຖ້າ",
    "errors": "ຜິດພາດ",
    "saved": "ບັນທຶກໄວ້ແລ້ວ",
    "camera": "ກ້ອງຖ່າຍຮູບ",
    "save": "ບັນທຶກ",
    "validate": "ກວດສອບ",
    "first": "ຫນ້າທໍາອິດ",
    "last": "ໜ້າສຸດທ້າຍ",
    "jump_to": "ຄົ້ນຫາ",
    "submit": "ສົ່ງຂໍ້ມູນ",
    "back": "ກັບຄືນໄປບ່ອນເກົ່າ",
    "next": "ຕໍ່ໄປ"
  },
  "session": {
    "title": "ຫົວຂໍ້",
    "description": "ລາຍລະອຽດ",
    "name": "ຊື່",
    "start": "ເລີ່ມຕົ້ນ"
  },
  "constraint": {
    "required": "ຕ້ອງການ",
    "invalid": "ບໍ່ຖືກຕ້ອງ"
  },
  "submissions": {
    "back": "Back",
    "upload_all": "ອັບໂຫລດທັງຫມົດ",
    "upload_single": "ອັບໂຫລດ",
    "title": "ຢູ່ລະຫວ່າງການສົ່ງຂໍ້ມູນ",
    "uploaded": "ອັບ!",
    "name": "ຊື່",
    "hint": "Hint",
    "size": "ຂະຫນາດ",
    "created_at": "ປະດິດສ້າງຂື້ນໃນ",
    "error": "ຜິດພາດ :packet",
    "success": "ສໍາເລັດ :packet ຊຸດ"
  }
};

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = {
  "index": {
    "upload": "上传"
  },
  "survey": {
    "loading": "加载问卷！",
    "wait": "需要一些时间...",
    "errors": "表单包含错误，请在提交之前修复所有错误。",
    "saved": "已保存操作",
    "camera": "相机",
    "save": "保存",
    "validate": "确认",
    "first": "首页",
    "last": "末页",
    "search": "搜索",
    "submit": "确认并提交",
    "back": "返回",
    "next": "下一页"
  },
  "session": {
    "title": "问卷调查会话",
    "description": "开始一个新的会话",
    "name": "会话命名",
    "start": "开始"
  },
  "constraint": {
    "required": "此字段必填.",
    "invalid": "值不可用"
  },
  "submissions": {
    "upload_all": "上传所有",
    "upload_single": "上传此次数据",
    "title": "申请数据提交",
    "uploaded": "上传完成！",
    "name": "名称",
    "hint": "提示",
    "size": "大小",
    "created_at": "创建于",
    "error": "试图提交名为:packet的数据包时出错。",
    "success": "包名:packet已提交！"
  }
};

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * This patches the Form-model module from enketo-core
 * The aim of this patch is to allow arbitrarily adding session parameters to the survey file
 * https://github.com/enketo/enketo-core/blob/master/src/js/form-model.js
 */
var FormModel = __webpack_require__(145);

var parser = new DOMParser();

FormModel.prototype.createSession = function (id, sessObj) {
  var instance;
  var session;
  var model = this.xml.querySelector('model');

  if (!model) {
    return;
  }

  sessObj = _typeof(sessObj) === 'object' ? sessObj : {};
  instance = model.querySelector('instance[id="' + id + '"]');

  if (!instance) {
    instance = parser.parseFromString('<instance id="' + id + '"/>', 'text/xml').documentElement;
    this.xml.adoptNode(instance);
    model.appendChild(instance);
  } // fixed: /sesssion/context properties


  Object.keys(sessObj).forEach(function (prop) {
    sessObj[prop] = sessObj[prop] || utils.readCookie('__enketo_meta_' + prop) || prop + ' not found';
  });
  session = parser.parseFromString('<session><context>' + Object.keys(sessObj).map(function (prop) {
    return '<' + prop + '>' + sessObj[prop] + '</' + prop + '>';
  }).join('') + '</context></session>', 'text/xml').documentElement;
  this.xml.adoptNode(session);
  instance.appendChild(session);
};

module.exports = FormModel;

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/sass/survey.scss
var survey = __webpack_require__(362);

// EXTERNAL MODULE: ./src/js/i18n/i18n.js
var i18n_i18n = __webpack_require__(364);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/plugins/overlay.js


(function () {
  var $body = jquery('body');

  function showOverlay($el) {
    jquery(window).scrollTop(0);
    setTimeout(function () {
      $body.addClass("noScroll");
      $el.show();
    });
  }

  function hideOverlay($el) {
    $body.removeClass('noScroll');
    $el.hide();
  }

  jquery["fn"].overlay = jquery["fn"].overlay = function (action) {
    switch (action) {
      case "show":
        showOverlay(this);
        break;

      case "hide":
        hideOverlay(this);
        break;

      default:
        throw new Exception("Unknown action. Either use show or hide.");
    }

    return this;
  };
})();
// EXTERNAL MODULE: ./node_modules/toastr/toastr.js
var toastr_toastr = __webpack_require__(60);
var toastr_default = /*#__PURE__*/__webpack_require__.n(toastr_toastr);

// EXTERNAL MODULE: ./node_modules/angular/index.js
var angular = __webpack_require__(50);
var angular_default = /*#__PURE__*/__webpack_require__.n(angular);

// EXTERNAL MODULE: ./node_modules/v-accordion/index.js
var v_accordion = __webpack_require__(371);

// CONCATENATED MODULE: ./src/js/survey/ui/JumpTo.js




var emitter = __webpack_require__(55);

var app = angular_default.a.module('jumpTo', ['vAccordion']);

var _ = __webpack_require__(144);

app.controller("jumpCtrl", ['$scope', function ($scope) {
  var rawPages = [];
  $scope.pages = {};
  $scope.search = {
    label: ""
  };
  emitter.on('EnketoForm.initialized', function () {
    return $scope.$apply(function () {
      jquery('[role="page"]').each(function () {
        var page = jquery(this);
        var labels = jquery(".question-label.active", page);
        labels.each(function () {
          var label = jquery(this).text();

          if (label.length < 2 || label[1] != ".") {
            return;
          }

          var firstSpace = label.indexOf(" ");
          var notations = label.substr(0, firstSpace).split(".").filter(function (str) {
            return str != '';
          });
          rawPages.push({
            el: page.children().first(),
            notations: notations,
            label: label
          });
        });
      });
      rawPages.forEach(function (page) {
        _.set($scope.pages, page.notations.join(".items."), page);

        if (page.notations.length > 1) {
          // lose something in the beginning
          page.notations.pop();
          var parentPage = page.notations.join(".items.");

          if (_.get($scope.pages, parentPage + ".label", null) == null) {
            _.set($scope.pages, parentPage + ".label", page.label);

            _.set($scope.pages, parentPage + ".el", page.el);
          }
        }
      });
    });
  });

  $scope.jump = function (page) {
    $scope.accordion.collapseAll();
    form.pages.flipToPageContaining(page.el);
    setTimeout(function () {
      jquery("#jump-to-block").overlay("hide");
    });
  };

  jquery("#jump-to-close").click(function () {
    $scope.accordion.collapseAll();
    jquery("#jump-to-block").overlay("hide");
  });
}]);
jquery("#jump-to").click(function () {
  jquery("#jump-to-block").overlay("show");
});
jquery("#jump-to-block").hide();
angular_default.a.bootstrap(document.getElementById('jump-to-block'), ["jumpTo"]);
// EXTERNAL MODULE: ./src/js/survey/enketo-patches/form-model.js
var form_model = __webpack_require__(374);

// CONCATENATED MODULE: ./src/js/common/QueryParams.js
var UrlSearchParams = __webpack_require__(382);

var queryParams = new UrlSearchParams(window.location.search);

queryParams.getPath = function (key) {
  var path = '';

  if (queryParams.has('base')) {
    path = queryParams.get('base') + '/';
  }

  return path + queryParams.get(key);
};

queryParams.getUrl = function (uri) {
  var url = '';

  if (queryParams.has('base')) {
    url = queryParams.get('base') + '/';
  }

  return url + uri;
};

/* harmony default export */ var QueryParams = (queryParams);
// EXTERNAL MODULE: ./node_modules/pouchdb/lib/index-browser.js
var index_browser = __webpack_require__(109);
var index_browser_default = /*#__PURE__*/__webpack_require__.n(index_browser);

// CONCATENATED MODULE: ./src/js/common/repositories/PouchDB.js

window.PouchDB = index_browser_default.a;

function getStorageDriver(name) {
  var storage = new index_browser_default.a(name, {
    adapter: 'idb',
    // We don't really want to keep revisions at all.
    revs_limit: 1,
    // Get rid of redundant documents after each write
    auto_compaction: true
  });
  return storage;
}

var instances = {};

function Storage(dbName) {
  var driver = getStorageDriver(dbName);

  this.all = function () {
    return driver.allDocs({
      include_docs: true
    }).then(function (result) {
      return result.rows.map(function (row) {
        return row.doc;
      });
    });
  };

  this.create = function (doc) {
    return driver.post(doc).then(function (result) {
      return driver.get(result.id);
    });
  };

  this.update = function (doc) {
    return driver.put(doc).then(function (result) {
      return driver.get(result.id);
    });
  };

  this.get = function (id) {
    return driver.get(id);
  };

  this.remove = function (doc) {
    return driver.remove(doc);
  };

  this.attach = function (id, attachmentId, blob) {
    return driver.putAttachment(id, attachmentId, blob);
  };

  this.getAttachment = function (id, filename) {
    return driver.getAttachment(id, filename);
  };
}

var getInstance = function getInstance(name) {
  if (!instances.hasOwnProperty(name)) {
    instances[name] = new Storage(name);
  }

  return instances[name];
};
// CONCATENATED MODULE: ./src/js/common/repositories/SessionRepository.js


var databaseName = 'sessions';

if (QueryParams.has('db')) {
  databaseName = QueryParams.get('db');
}

/* harmony default export */ var SessionRepository = (getInstance(databaseName));
// CONCATENATED MODULE: ./src/js/survey/enketo-patches/file-manager.js
/**
 * This patches the file-manager module from enketo-core
 * The aim of this patch is to be able to retrieve attachments stored inside PouchDB
 * The actual source for this module can be found here:
 * https://github.com/enketo/enketo-core/blob/master/src/js/file-manager.js
 */
var fileManager = __webpack_require__(106);


 // Preserve the original getFileUrl method

var originalGetFileUrl = fileManager.getFileUrl;

fileManager.setSession = function (session) {
  this.session = session;
};

fileManager.getFileUrlFromDatabase = function (subject) {
  return SessionRepository.getAttachment(this.session._id, subject).then(function (attachment) {
    return URL.createObjectURL(attachment);
  });
};

fileManager.getFileUrlOnServer = function (subject) {
  return Promise.resolve(QueryParams.getUrl("submissions/" + this.session.instance_id + "/photo/" + subject));
};

fileManager.getFileUrl = function (subject) {
  if (subject && typeof subject === 'string') {
    if (this.session.browser_mode) {
      // In browser mode, load the attachments directly from the server
      return this.getFileUrlOnServer(subject);
    } // When running against PouchDB load it from there


    return this.getFileUrlFromDatabase(subject);
  }

  return originalGetFileUrl(subject);
};

/* harmony default export */ var file_manager = (fileManager);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(160);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/js/common/Server.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Server_Server =
/*#__PURE__*/
function () {
  function Server() {
    _classCallCheck(this, Server);
  }

  _createClass(Server, [{
    key: "json",
    value: function () {
      var _json = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(url) {
        var _ref, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios_default.a.get(url);

              case 2:
                _ref = _context.sent;
                data = _ref.data;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function json(_x) {
        return _json.apply(this, arguments);
      };
    }()
  }]);

  return Server;
}();

/* harmony default export */ var common_Server = (new Server_Server());
// CONCATENATED MODULE: ./src/js/survey/SurveyManager.js
function SurveyManager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function SurveyManager_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { SurveyManager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { SurveyManager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function SurveyManager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SurveyManager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SurveyManager_createClass(Constructor, protoProps, staticProps) { if (protoProps) SurveyManager_defineProperties(Constructor.prototype, protoProps); if (staticProps) SurveyManager_defineProperties(Constructor, staticProps); return Constructor; }




var SurveyManager_SurveyManager =
/*#__PURE__*/
function () {
  function SurveyManager() {
    SurveyManager_classCallCheck(this, SurveyManager);
  }

  SurveyManager_createClass(SurveyManager, [{
    key: "loadAndAttach",
    value: function () {
      var _loadAndAttach = SurveyManager_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._load();

              case 2:
                this._preprocessFormHtml();

                this._attachSurveyFormToDom();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function loadAndAttach() {
        return _loadAndAttach.apply(this, arguments);
      };
    }()
  }, {
    key: "_load",
    value: function () {
      var _load2 = SurveyManager_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return common_Server.json(QueryParams.getPath('survey'));

              case 2:
                this.survey = _context2.sent;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function _load() {
        return _load2.apply(this, arguments);
      };
    }()
  }, {
    key: "_preprocessFormHtml",
    value: function _preprocessFormHtml() {
      // Redirect dropbox links to assets folder
      this.survey.form = this.survey.form.replace(/jr:\/\/images\//g, QueryParams.getPath('assets') + '/');
    }
  }, {
    key: "_attachSurveyFormToDom",
    value: function _attachSurveyFormToDom() {
      document.querySelector('.form-header').insertAdjacentHTML('afterend', this.survey.form);
    }
  }]);

  return SurveyManager;
}();

/* harmony default export */ var survey_SurveyManager = (new SurveyManager_SurveyManager());
// CONCATENATED MODULE: ./src/js/survey/sessions/drivers/InMemory.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function InMemory_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function InMemory_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { InMemory_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { InMemory_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function InMemory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function InMemory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function InMemory_createClass(Constructor, protoProps, staticProps) { if (protoProps) InMemory_defineProperties(Constructor.prototype, protoProps); if (staticProps) InMemory_defineProperties(Constructor, staticProps); return Constructor; }

var $ = __webpack_require__(1); //var submit = require('../../submit')





var _getEmptySession = function _getEmptySession() {
  return {
    'xml': null,
    'draft': false,
    'submitted': false,
    'browser_mode': true,
    'instance_id': null,
    'deprecated_id': null
  };
};
/**
 * In memory session is not stored anywhere.
 */


var InMemory_InMemory =
/*#__PURE__*/
function () {
  function InMemory() {
    InMemory_classCallCheck(this, InMemory);
  }

  InMemory_createClass(InMemory, [{
    key: "start",
    value: function start() {
      if (!QueryParams.has('edit')) {
        return Promise.resolve(_getEmptySession());
      }

      return this._loadSessionFromUrl(QueryParams.getPath('edit'));
    }
  }, {
    key: "canSave",
    value: function canSave() {
      return false;
    }
  }, {
    key: "beforeEnd",
    value: function beforeEnd(session) {
      // Before ending the session, submit it to the server.
      return submit(QueryParams.getPath('submit'), session);
    }
  }, {
    key: "_loadSessionFromUrl",
    value: function () {
      var _loadSessionFromUrl2 = InMemory_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(url) {
        var session, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                session = _getEmptySession();
                _context.next = 3;
                return common_Server.json(url);

              case 3:
                data = _context.sent;
                return _context.abrupt("return", _objectSpread({}, session, {
                  submitted: true,
                  xml: data.instance,
                  instance_id: data.instance_id,
                  deprecated_id: data.deprecated_id
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function _loadSessionFromUrl(_x) {
        return _loadSessionFromUrl2.apply(this, arguments);
      };
    }()
  }]);

  return InMemory;
}();


// CONCATENATED MODULE: ./src/js/survey/sessions/drivers/Persisted.js
function Persisted_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Persisted_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Persisted_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Persisted_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Persisted_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Persisted_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Persisted_createClass(Constructor, protoProps, staticProps) { if (protoProps) Persisted_defineProperties(Constructor.prototype, protoProps); if (staticProps) Persisted_defineProperties(Constructor, staticProps); return Constructor; }

var Persisted_emitter = __webpack_require__(55);



/**
 * Persisted session is stored on the device using IndexedDB (pouchdb)
 */

var Persisted_Persisted =
/*#__PURE__*/
function () {
  function Persisted() {
    Persisted_classCallCheck(this, Persisted);
  }

  Persisted_createClass(Persisted, [{
    key: "start",
    value: function () {
      var _start = Persisted_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._loadSessions();

              case 2:
                return _context.abrupt("return", this._chooseSession());

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function start() {
        return _start.apply(this, arguments);
      };
    }()
  }, {
    key: "canSave",
    value: function canSave() {
      return true;
    }
  }, {
    key: "save",
    value: function save(session, newSession) {
      newSession._attachments = this._normalizedAttachments(session, newSession);
      return SessionRepository.update(newSession);
    } // Save session before ending...

  }, {
    key: "beforeEnd",
    value: function beforeEnd(session) {
      this.save(session);
    }
  }, {
    key: "_loadSessions",
    value: function () {
      var _loadSessions2 = Persisted_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return SessionRepository.all();

              case 2:
                this.sessions = _context2.sent;
                Persisted_emitter.emit('SessionModal.updateSessions', this.sessions);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function _loadSessions() {
        return _loadSessions2.apply(this, arguments);
      };
    }()
  }, {
    key: "_chooseSession",
    value: function () {
      var _chooseSession2 = Persisted_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!QueryParams.has('session')) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", this._startFromName(QueryParams.get('session')));

              case 2:
                return _context3.abrupt("return", this._sessionFromUi());

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function _chooseSession() {
        return _chooseSession2.apply(this, arguments);
      };
    }()
  }, {
    key: "_sessionFromUi",
    value: function () {
      var _sessionFromUi2 = Persisted_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                Persisted_emitter.emit('SessionModal.activate');
                return _context5.abrupt("return", new Promise(function (resolve) {
                  Persisted_emitter.once('Session.create', function (name) {
                    resolve(_this._startFromName(name));
                  });
                  Persisted_emitter.on('Session.delete',
                  /*#__PURE__*/
                  function () {
                    var _ref = Persisted_asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee4(session) {
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              _context4.next = 2;
                              return SessionRepository.remove(session);

                            case 2:
                              _context4.next = 4;
                              return _this._loadSessions();

                            case 4:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4, this);
                    }));

                    return function (_x) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                  Persisted_emitter.on('Session.select', function (session) {
                    resolve(session);
                  });
                }));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function _sessionFromUi() {
        return _sessionFromUi2.apply(this, arguments);
      };
    }()
  }, {
    key: "_startFromName",
    value: function () {
      var _startFromName2 = Persisted_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(name) {
        var existingSession;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                existingSession = this.sessions.find(function (s) {
                  return s.name == name;
                });

                if (!existingSession) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt("return", existingSession);

              case 3:
                return _context6.abrupt("return", this._createFromName(name));

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function _startFromName(_x2) {
        return _startFromName2.apply(this, arguments);
      };
    }()
  }, {
    key: "_createFromName",
    value: function () {
      var _createFromName2 = Persisted_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(name) {
        var payload,
            _args7 = arguments;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                payload = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};

                if (QueryParams.has('session_extra')) {
                  payload = JSON.parse(QueryParams.get('session_extra'));
                }

                return _context7.abrupt("return", SessionRepository.create({
                  name: name,
                  xml: '',
                  payload: payload,
                  draft: true,
                  submitted: false,
                  last_update: Date.now()
                }));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function _createFromName(_x3) {
        return _createFromName2.apply(this, arguments);
      };
    }()
  }, {
    key: "_normalizedAttachments",
    value: function _normalizedAttachments(session, newSession) {
      var attachments = {};

      newSession._attachments.forEach(function (file) {
        // Mark already existing attachments as stub
        if (typeof file === 'string') {
          if (session.hasOwnProperty('_attachments') && session._attachments.hasOwnProperty(file)) {
            attachments[file] = session['_attachments'][file];
            attachments[file].stub = true;
          }

          return;
        }

        attachments[file.name] = {
          data: file,
          content_type: file.type
        };
      });

      return attachments;
    }
  }]);

  return Persisted;
}();


// CONCATENATED MODULE: ./src/js/survey/sessions/SessionDrivers.js



var AVAILABLE_DRIVERS = {
  'online': InMemory_InMemory,
  'offline': Persisted_Persisted
};
/* harmony default export */ var SessionDrivers = ({
  getDriver: function getDriver() {
    var mode = QueryParams.get('mode');
    var driver = AVAILABLE_DRIVERS[mode ? mode : 'offline'];
    return new driver();
  }
});
// CONCATENATED MODULE: ./src/js/survey/sessions/SessionManager.js
function SessionManager_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { SessionManager_defineProperty(target, key, source[key]); }); } return target; }

function SessionManager_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SessionManager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function SessionManager_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { SessionManager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { SessionManager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function SessionManager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SessionManager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SessionManager_createClass(Constructor, protoProps, staticProps) { if (protoProps) SessionManager_defineProperties(Constructor.prototype, protoProps); if (staticProps) SessionManager_defineProperties(Constructor, staticProps); return Constructor; }



var SessionManager_SessionManager =
/*#__PURE__*/
function () {
  function SessionManager() {
    SessionManager_classCallCheck(this, SessionManager);

    this.driver = SessionDrivers.getDriver();
  }

  SessionManager_createClass(SessionManager, [{
    key: "start",
    value: function () {
      var _start = SessionManager_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.driver.start();

              case 2:
                this.session = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function start() {
        return _start.apply(this, arguments);
      };
    }()
  }, {
    key: "save",
    value: function () {
      var _save = SessionManager_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(record) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.driver.canSave()) {
                  _context2.next = 2;
                  break;
                }

                throw new Exception('This driver does not support saving!');

              case 2:
                _context2.next = 4;
                return this.driver.save(this.session, this.sessionUpdate(record));

              case 4:
                this.session = _context2.sent;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function save(_x) {
        return _save.apply(this, arguments);
      };
    }()
  }, {
    key: "sessionUpdate",
    value: function sessionUpdate(record) {
      return SessionManager_objectSpread({}, this.session, {
        xml: record.xml,
        _attachments: record.files,
        instance_id: record.instance_id,
        deprecated_id: record.deprecated_id
      });
    }
  }]);

  return SessionManager;
}();

/* harmony default export */ var sessions_SessionManager = (new SessionManager_SessionManager());
// CONCATENATED MODULE: ./src/js/survey/EnketoForm.js
function EnketoForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function EnketoForm_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { EnketoForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { EnketoForm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function EnketoForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EnketoForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EnketoForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) EnketoForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) EnketoForm_defineProperties(Constructor, staticProps); return Constructor; }





var Form = __webpack_require__(395);

var EnketoForm_emitter = __webpack_require__(55);





var EnketoForm_EnketoForm =
/*#__PURE__*/
function () {
  function EnketoForm() {
    EnketoForm_classCallCheck(this, EnketoForm);
  }

  EnketoForm_createClass(EnketoForm, [{
    key: "init",
    value: function () {
      var _init = EnketoForm_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.saving = false;
                this.validating = false;
                _context.next = 4;
                return survey_SurveyManager.loadAndAttach();

              case 4:
                _context.next = 6;
                return sessions_SessionManager.start();

              case 6:
                this._newFormInstance();

                this._initFormInstance();

                this._localizeForm();

                this._setSessionInFileManager();

                EnketoForm_emitter.emit('EnketoForm.initialized');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }()
  }, {
    key: "_newFormInstance",
    value: function _newFormInstance() {
      this.form = new Form('form.or:eq(0)', {
        modelStr: survey_SurveyManager.survey.model,
        instanceStr: sessions_SessionManager.session.xml,
        submitted: sessions_SessionManager.session.submitted,
        session: sessions_SessionManager.session.payload
      });
    }
  }, {
    key: "_initFormInstance",
    value: function _initFormInstance() {
      var loadErrors = this.form.init();

      if (loadErrors.length) {
        console.error(loadErrors);
        throw new Error("The form could not be initialized");
      }
    }
  }, {
    key: "_localizeForm",
    value: function _localizeForm() {
      if (QueryParams.has("lang")) {
        i18n.set(QueryParams.get("lang"));
      }

      var lang = i18n.get();
      this.form.langs.setAll(lang);
    }
  }, {
    key: "_setSessionInFileManager",
    value: function _setSessionInFileManager() {
      file_manager.setSession(sessions_SessionManager.session);
    }
  }, {
    key: "save",
    value: function () {
      var _save = EnketoForm_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.saving) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", null);

              case 2:
                this.saving = true;
                EnketoForm_emitter.emit('EnketoForm.saving');
                _context2.prev = 4;
                _context2.next = 7;
                return this._saveSession();

              case 7:
                _context2.next = 14;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](4);
                this.saving = false;
                EnketoForm_emitter.emit('EnketoForm.saveFailed');
                throw _context2.t0;

              case 14:
                this.saving = false;
                EnketoForm_emitter.emit('EnketoForm.saveSucceded');

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 9]]);
      }));

      return function save() {
        return _save.apply(this, arguments);
      };
    }()
  }, {
    key: "_saveSession",
    value: function () {
      var _saveSession2 = EnketoForm_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = sessions_SessionManager;
                _context3.next = 3;
                return this._record();

              case 3:
                _context3.t1 = _context3.sent;
                _context3.next = 6;
                return _context3.t0.save.call(_context3.t0, _context3.t1);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function _saveSession() {
        return _saveSession2.apply(this, arguments);
      };
    }()
  }, {
    key: "_record",
    value: function () {
      var _record2 = EnketoForm_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = this.form.getDataStr();
                _context4.next = 3;
                return this._formFiles();

              case 3:
                _context4.t1 = _context4.sent;
                _context4.t2 = this.form.instanceID;
                _context4.t3 = this.form.deprecatedID;
                return _context4.abrupt("return", {
                  xml: _context4.t0,
                  files: _context4.t1,
                  instance_id: _context4.t2,
                  deprecated_id: _context4.t3
                });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function _record() {
        return _record2.apply(this, arguments);
      };
    }()
  }, {
    key: "_formFiles",
    value: function _formFiles() {
      /**
       * Get currently attached files from Enketo
       */
      var files = file_manager.getCurrentFiles();
      /**
       * Also append previously uploaded files, but as strings.
       */

      jquery('form.or input[type="file"][data-loaded-file-name]').each(function () {
        files.push(jquery(this).data('loaded-file-name'));
      });
      return files;
    }
  }, {
    key: "_validateForm",
    value: function _validateForm() {
      // You can add ?novalidate=1 to the url to disable validation for that session
      if (QueryParams.has("novalidate")) {
        return Promise.resolve(true);
      }

      return this.form.validate();
    }
  }, {
    key: "validate",
    value: function () {
      var _validate = EnketoForm_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var outcome;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this.validating) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                this.validating = true;
                EnketoForm_emitter.emit('EnketoForm.validating');
                _context5.next = 6;
                return this._validateForm();

              case 6:
                outcome = _context5.sent;
                EnketoForm_emitter.emit(outcome ? 'EnketoForm.validationSucceeded' : 'EnketoForm.validationFailed');
                this.validating = false;

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function validate() {
        return _validate.apply(this, arguments);
      };
    }()
  }]);

  return EnketoForm;
}();

/* harmony default export */ var survey_EnketoForm = (new EnketoForm_EnketoForm());
// CONCATENATED MODULE: ./src/js/survey/Kernel.js
function Kernel_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Kernel_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Kernel_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Kernel_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Kernel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Kernel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Kernel_createClass(Constructor, protoProps, staticProps) { if (protoProps) Kernel_defineProperties(Constructor.prototype, protoProps); if (staticProps) Kernel_defineProperties(Constructor, staticProps); return Constructor; }




var Kernel_emitter = __webpack_require__(55);



var Kernel_Kernel =
/*#__PURE__*/
function () {
  function Kernel() {
    Kernel_classCallCheck(this, Kernel);

    this.saving = false;
    this.validating = false;
  }

  Kernel_createClass(Kernel, [{
    key: "boot",
    value: function () {
      var _boot = Kernel_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                survey_EnketoForm.init();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function boot() {
        return _boot.apply(this, arguments);
      };
    }()
  }, {
    key: "exit",
    value: function () {
      var _exit = Kernel_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return survey_EnketoForm.save();

              case 2:
                if (!QueryParams.has('return')) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", window.location(QueryParams.getUrl('return')));

              case 4:
                window.location = 'index.html';

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function exit() {
        return _exit.apply(this, arguments);
      };
    }()
  }]);

  return Kernel;
}();

/* harmony default export */ var survey_Kernel = (new Kernel_Kernel());
// CONCATENATED MODULE: ./src/js/survey/ui/Toolbar.js



jquery(document).ready(function () {
  jquery('.save-progress').click(function () {
    survey_EnketoForm.save();
  });
  jquery('#close-button').click(function () {
    survey_Kernel.exit();
  });
  jquery('.validate-form').on('click', function () {
    survey_EnketoForm.validate();
  });
  jquery('.first-page-alias').click(function () {
    jquery('.first-page').click();
  });
  jquery('.last-page-alias').click(function () {
    jquery('.last-page').click();
  }); // validate handler for validate button

  jquery('.submit-form').on('click', function () {
    Survey.submit().then(function () {
      // Successful
      toastr.success("Your submission has been successfully saved on the device");
      jquery('.submit-form').remove();
    }).catch(function (error) {
      if (error.message == "redirected!") {
        return;
      } // Rejected!


      toastr.error(error.message ? error.message : "An unknown error occured");
    });
    return false;
  });
});
// CONCATENATED MODULE: ./src/js/survey/ui/Overlays.js



var Overlays_emitter = __webpack_require__(55);



/**
 * Set event listeners
 */

jquery(document).ready(function () {
  return Overlays_setBackgroundImage();
});
Overlays_emitter.once('EnketoForm.initialized', function () {
  return Overlays_showSurvey();
});
Overlays_emitter.on('EnketoForm.saving', function () {
  return Overlays_saving();
});
Overlays_emitter.on('EnketoForm.saveFailed', function () {
  return saveFailed();
});
Overlays_emitter.on('EnketoForm.saveSucceded', function () {
  return saveSucceded();
});
Overlays_emitter.on('EnketoForm.validating', function () {
  return Overlays_validating();
});
Overlays_emitter.on('EnketoForm.validationFailed', function () {
  return validationFailed();
});
Overlays_emitter.on('EnketoForm.validationSucceeded', function () {
  return Overlays_validationSucceeded();
});
/**
 * Callbacks
*/

var Overlays_setBackgroundImage = function setBackgroundImage() {
  if (!QueryParams.has('bg')) {
    return;
  }

  var style = "content: ' ';" + "display: block;" + "position: absolute;" + "top: 0;" + "left: 0;" + "width: 100%;" + "height: 100%;" + "opacity: 0.2;" + "z-index: -1;" + "background-image: url('" + QueryParams.get('bg') + "');" + "background-size: cover;" + "background-position: center;" + "background-repeat: no-repeat;";
  jquery('<style>' + '#loading-block:after { ' + style + '} </style>').appendTo('head');
};

var Overlays_showSurvey = function showSurvey() {
  if (!sessions_SessionManager.driver.canSave()) {
    document.querySelector('.save-progress').remove();
  }

  document.querySelector('.form-header').style.display = 'block';
  document.querySelector('#submit-progress').style.display = 'none';
  document.querySelector('#loading-block').remove();
  window.scrollTo(0, 0);
};

var Overlays_saving = function saving() {
  var $saveProgress = jquery(".save-progress");
  $saveProgress.html('<i class="fa fa-spinner fa-spin"></i>');
  $saveProgress.attr("disabled", "disabled");
};

var Overlays_finishSaving = function _finishSaving(outcome, message) {
  var $saveProgress = jquery(".save-progress");
  $saveProgress.html('<i class="fa fa-save"></i>');
  $saveProgress.removeAttr("disabled", "disabled");

  if (message) {
    toastr_default.a[outcome](message);
  }
};

var saveFailed = function saveFailed() {
  Overlays_finishSaving("error", "An error occured while saving this sesssion...");
};

var saveSucceded = function saveSucceded() {
  Overlays_finishSaving("success", i18n._("survey.saved"));
};

var Overlays_validating = function validating() {
  jquery(".submit-form").data('original-content', jquery('.submit-form').text()).attr("disabled", "disabled").text("Validating...");
};

var Overlays_finishValidating = function _finishValidating(outcome, message) {
  jquery(".submit-form").removeAttr('disabled').text(jquery('.submit-form').data('original-content'));
  toastr_default.a[outcome](message);
};

var validationFailed = function validationFailed() {
  Overlays_finishValidating('error', 'The form contains validation errors.');
};

var Overlays_validationSucceeded = function validationSucceeded() {
  Overlays_finishValidating('success', 'The data looks valid!');

  jquery('.last-page').click();
};
// CONCATENATED MODULE: ./src/js/survey/ui/SessionModal.js
var SessionModal_emitter = __webpack_require__(55);


var SessionModal_app = angular_default.a.module('sessionModal', []);
SessionModal_app.filter('timeAgo', function () {
  return function (value) {
    var date = new Date(value);
    return date.toLocaleString();
  };
});
SessionModal_app.controller('Controller', function ($scope) {
  $scope.form = {
    name: ''
  };
  $scope.show = false;
  $scope.sessions = [];
  $scope.disableCreateButton = false;
  /**
   * Events coming from Persisted.js
   */

  SessionModal_emitter.on('SessionModal.activate', function () {
    return $scope.$apply(function () {
      $scope.show = true;
    });
  });
  SessionModal_emitter.on('SessionModal.updateSessions', function (sessions) {
    return $scope.$apply(function () {
      $scope.sessions = sessions;
    });
  });
  /**
   * UI Event Handlers
   */

  $scope.createSession = function () {
    var name = $scope.form.name.trim();

    if (!name) {
      $scope.name = '';
      return alert('Please enter a session name');
    }

    $scope.show = false;
    $scope.disableCreateButton = true;
    SessionModal_emitter.emit('Session.create', name);
  };

  $scope.delete = function (session) {
    if (confirm('Do you really want to delete this session? DATA WILL BE LOST!')) {
      SessionModal_emitter.emit('Session.delete', session);
    }
  };

  $scope.select = function (session) {
    $scope.show = false;
    SessionModal_emitter.emit('Session.select', session);
  };
});
angular_default.a.bootstrap(document.getElementById('sessionModal'), ['sessionModal']);
// CONCATENATED MODULE: ./src/js/survey.js
/**
 * Stylesheets
 */

/**
 * Localization Module
 */


/**
 * Misc. Plug-ins
 */



toastr_default.a.options = {
  "positionClass": "toast-top-left"
  /**
   * UI Controllers
   */

};





/**
 * Entrypoint
 */


survey_Kernel.boot();

/***/ })

},[[461,0,1]]]);
});