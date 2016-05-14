var mergeDefaults;

mergeDefaults = require("../src/mergeDefaults");

describe("mergeDefaults()", function() {
  it("always returns undefined", function() {
    return expect(mergeDefaults({}, {})).toBe(void 0);
  });
  it("does NOT overwrite defined values", function() {
    var obj;
    obj = {
      foo: 1
    };
    mergeDefaults(obj, {
      foo: 2
    });
    return expect(obj.foo).toBe(1);
  });
  it("overwrites undefined values", function() {
    var obj;
    obj = {
      foo: void 0
    };
    mergeDefaults(obj, {
      foo: 1,
      bar: 1
    });
    expect(obj.foo).toBe(1);
    return expect(obj.bar).toBe(1);
  });
  return it("works with nested object literals", function() {
    var defaults, nested, obj;
    nested = {};
    obj = {
      foo: {
        bar: 1,
        bud: void 0
      }
    };
    defaults = {
      foo: {
        bar: 2,
        mud: 2
      },
      goo: {
        red: true
      }
    };
    mergeDefaults(obj, defaults);
    expect(getType(obj.foo)).toBe(Object);
    expect(obj.foo).not.toBe(defaults.foo);
    expect(obj.foo.bar).toBe(1);
    expect(obj.foo.mud).toBe(2);
    expect(getType(obj.goo)).toBe(Object);
    expect(obj.goo).not.toBe(defaults.goo);
    return expect(obj.goo.red).toBe(true);
  });
});

//# sourceMappingURL=../../map/spec/mergeDefaults.map
