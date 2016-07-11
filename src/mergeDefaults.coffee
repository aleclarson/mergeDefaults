
PureObject = require "PureObject"
assertType = require "assertType"
combine = require "combine"
isType = require "isType"

mergeDefaults = (obj, defaultValues) ->

  assertType obj, [ Object, PureObject ]
  assertType defaultValues, [ Object, PureObject ]

  for key, defaultValue of defaultValues

    value = obj[key]

    if isType defaultValue, Object

      if value is undefined
        obj[key] = combine {}, defaultValue

      else if isType value, Object
        mergeDefaults value, defaultValue

    else if value is undefined
      obj[key] = defaultValue

  return

module.exports = mergeDefaults
