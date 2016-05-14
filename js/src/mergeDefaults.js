var assertType, combine, isType, mergeDefaults;

assertType = require("assertType");

combine = require("combine");

isType = require("isType");

module.exports = mergeDefaults = function(options, optionDefaults) {
  var defaultValue, key, value;
  assertType(options, Object);
  assertType(optionDefaults, Object);
  for (key in optionDefaults) {
    defaultValue = optionDefaults[key];
    value = options[key];
    if (isType(defaultValue, Object)) {
      if (value === void 0) {
        options[key] = combine({}, defaultValue);
      } else if (isType(value, Object)) {
        mergeDefaults(value, defaultValue);
      }
    } else if (value === void 0) {
      options[key] = defaultValue;
    }
  }
};

//# sourceMappingURL=../../map/src/mergeDefaults.map
