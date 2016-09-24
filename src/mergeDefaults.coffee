
cloneObject = require "cloneObject"
PureObject = require "PureObject"
assertType = require "assertType"
isType = require "isType"
Typle = require "Typle"
isDev = require "isDev"

Objectlike = isDev and Typle [ Object, PureObject ]

mergeDefaults = (obj, defaultValues) ->

  if isDev
    assertType obj, Objectlike
    assertType defaultValues, Objectlike

  for key, defaultValue of defaultValues

    value = obj[key]

    if isType defaultValue, Object

      if value is undefined
        obj[key] = cloneObject defaultValue, { recursive: yes }

      else if isType value, Object
        mergeDefaults value, defaultValue

    else if value is undefined
      obj[key] = defaultValue

  return

module.exports = mergeDefaults
