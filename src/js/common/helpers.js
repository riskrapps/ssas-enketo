var lodashSet = require('lodash.set')

module.exports = {
  get: function(obj, path, def) {
    var fullPath = path
      .replace(/\[/g, ".")
      .replace(/]/g, "")
      .split(".")
      .filter(Boolean);

    return fullPath.every(everyFunc) ? obj : def;

    function everyFunc(step) {
      return !(step && (obj = obj[step]) === undefined);
    }
  },
  set: lodashSet,
};