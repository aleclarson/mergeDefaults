var PureObject, assertType, cloneObject, isType, mergeDefaults;

cloneObject = require("cloneObject");

PureObject = require("PureObject");

assertType = require("assertType");

isType = require("isType");

mergeDefaults = function(obj, defaultValues) {
  var defaultValue, key, value;
  assertType(obj, [Object, PureObject]);
  assertType(defaultValues, [Object, PureObject]);
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
