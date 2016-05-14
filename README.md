
# mergeDefaults v1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

- Only overwrites `undefined` values

- Supports merging nested object literals

```coffee
mergeDefaults = require "mergeDefaults"

obj = {}
defaults = {}

mergeDefaults obj, defaults
```
