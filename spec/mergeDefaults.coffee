
mergeDefaults = require "../src/mergeDefaults"

describe "mergeDefaults()", ->

  it "always returns the first argument", ->

    expect mergeDefaults arg1 = {}, {}
      .toBe arg1

  it "does NOT overwrite defined values", ->

    obj = { foo: 1 }

    mergeDefaults obj, { foo: 2 }

    expect obj.foo
      .toBe 1

  it "overwrites undefined values", ->

    obj = { foo: undefined }

    mergeDefaults obj, { foo: 1, bar: 1 }

    expect obj.foo
      .toBe 1

    expect obj.bar
      .toBe 1

  it "works with nested object literals", ->

    nested = {}

    obj =
      foo: { bar: 1, bud: undefined }

    defaults =
      foo: { bar: 2, mud: 2 }
      goo: { red: yes }

    mergeDefaults obj, defaults

    expect obj.foo.constructor
      .toBe Object

    expect obj.foo
      .not.toBe defaults.foo

    expect obj.foo.bar
      .toBe 1

    expect obj.foo.mud
      .toBe 2

    expect obj.goo.constructor
      .toBe Object

    expect obj.goo
      .not.toBe defaults.goo

    expect obj.goo.red
      .toBe yes

  it "does not support arrays", ->
    expect -> mergeDefaults [], [1]
    .toThrowError "Expected an object"

