var en = require("./en");
var _ = require("../common/helpers");

var Cookies = {
  set: function (key, value) {
    window.localStorage.setItem(key, value);
  },
  get: function (key) {
    return window.localStorage.getItem(key);
  },
};

var i18n = {};

var languages = {
  en: en,

  /**
   * Other languages
   */
  ar: require("./ar"),
  bn: require("./bn"),
  es: require("./es"),
  fr: require("./fr"),
  hi: require("./hi"),
  id: require("./id"),
  km: require("./km"),
  lo: require("./lo"),
  pt: require("./pt"),
  ru: require("./ru"),
  sw: require("./sw"),
  ur: require("./ur"),
  vi: require("./vi"),
  zh: require("./zh"),

  // Add new languages here
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
  var matches = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < matches.length; i++) {
    var el = matches[i];
    var key = el.getAttribute("data-i18n");
    var translation = this._(key);
    el.innerHTML = translation;
  }
};

document.onreadystatechange = function () {
  var language = Cookies.get("language");

  // Try to guess the language based on the user's preferences
  if (!language) {
    try {
      const userPreferredLanguages = navigator.languages || [
        navigator.language,
      ];

      for (var i = 0; i < userPreferredLanguages.length; i++) {
        const userPreferredLanguage = userPreferredLanguages[i].split("-")[0];

        // Check if the language is supported, and if it is, set it as the language
        if (languages.hasOwnProperty(userPreferredLanguage)) {
          language = userPreferredLanguage;
          break;
        }
      }
    } catch (e) {
      // Do nothing
    }
  }

  // If we're still unable to determine the language, default to English
  if (!language) {
    language = "en";
  }

  i18n.set(language);
};

window.i18n = i18n;
module.exports = i18n;
