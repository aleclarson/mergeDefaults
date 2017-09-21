
assertValid = require "assertValid"
cloneObject = require "cloneObject"

mergeDefaults = (obj, defaults) ->
  assertValid obj, "object"
  assertValid defaults, "object"

  for key, value of defaults

    if value and value.constructor is Object

      if obj[key] is undefined
        obj[key] = cloneObject value, true

      else if obj[key] and obj[key].constructor is Object
        mergeDefaults obj[key], value

    else if obj[key] is undefined
      obj[key] = value

  return obj

module.exports = mergeDefaults
