var Objectlike, PureObject, Typle, assertType, cloneObject, isType, mergeDefaults;

require("isDev");

cloneObject = require("cloneObject");

PureObject = require("PureObject");

assertType = require("assertType");

isType = require("isType");

Typle = require("Typle");

isDev && (Objectlike = Typle([Object, PureObject]));

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

//# sourceMappingURL=map/mergeDefaults.map
