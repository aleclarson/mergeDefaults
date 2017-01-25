// Generated by CoffeeScript 1.11.1
var Objectlike, PureObject, Typle, assertType, cloneObject, isDev, isType, mergeDefaults;

cloneObject = require("cloneObject");

isType = require("isType");

isDev = require("isDev");

if (isDev) {
  assertType = require("assertType");
  PureObject = require("PureObject");
  Typle = require("Typle");
  Objectlike = Typle([Object, PureObject]);
}

mergeDefaults = function(obj, defaultValues) {
  var defaultValue, key, value;
  if (isDev) {
    assertType(obj, Objectlike);
    assertType(defaultValues, Objectlike);
  }
  for (key in defaultValues) {
    defaultValue = defaultValues[key];
    value = obj[key];
    if (isType(defaultValue, Object)) {
      if (value === void 0) {
        obj[key] = cloneObject(defaultValue, {
          recursive: true
        });
      } else if (isType(value, Object)) {
        mergeDefaults(value, defaultValue);
      }
    } else if (value === void 0) {
      obj[key] = defaultValue;
    }
  }
};

module.exports = mergeDefaults;