
# mergeDefaults v1.0.2 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

- Only overwrites `undefined` values

- Traverse object literals recursively

- Pure objects are only traversed if passed as one of the arguments

- The return value is always `undefined`

```coffee
mergeDefaults = require "mergeDefaults"

obj = { a: 1 }
defaultValues = { a: 10, b: 2 }

mergeDefaults obj, defaultValues
# => { a: 1, b: 2 }
```
