var PureObject, assertType, combine, isType, mergeDefaults;

PureObject = require("PureObject");

assertType = require("assertType");

combine = require("combine");

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
        obj[key] = combine({}, defaultValue);
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
