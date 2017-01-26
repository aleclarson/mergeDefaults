
cloneObject = require "cloneObject"
isType = require "isType"
isDev = require "isDev"

if isDev
  assertType = require "assertType"
  Objectlike = do ->
    Either = require "Either"
    return Either(Array, Object, require "PureObject")

mergeDefaults = (obj, defaultValues) ->

  if isDev
    assertType obj, Objectlike
    assertType defaultValues, Objectlike

  for key, defaultValue of defaultValues

    value = obj[key]

    if isType defaultValue, Object

      if value is undefined
        obj[key] = cloneObject defaultValue, {recursive: yes}

      else if isType value, Object
        mergeDefaults value, defaultValue

    else if value is undefined
      obj[key] = defaultValue

  return

module.exports = mergeDefaults
