
assertType = require "assertType"
combine = require "combine"
isType = require "isType"

module.exports =
mergeDefaults = (options, optionDefaults) ->

  assertType options, Object
  assertType optionDefaults, Object

  for key, defaultValue of optionDefaults

    value = options[key]

    if isType defaultValue, Object

      if value is undefined
        options[key] = combine {}, defaultValue

      else if isType value, Object
        mergeDefaults value, defaultValue

    else if value is undefined
      options[key] = defaultValue

  return
