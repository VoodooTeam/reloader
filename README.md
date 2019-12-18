<div align="center">
<b>Reloader</b><br/>
<br/><br/>

<a href="https://badge.fury.io/js/reloader">
   <img src="https://badge.fury.io/js/reloader.svg" alt="npm version" height="18">
</a>
</div>


# Purpose

Minimalist, efficient and performance focused module to run a function at a specific interval.

# Compatibility

**/!\ This module use async/await syntax, this is why you must have node 7.6+.**

Supported and tested : >= 7.6

| Version       | Supported     | Tested         |
| ------------- |:-------------:|:--------------:|
| 12.x          | yes           | yes            |
| 10.x          | yes           | yes            |
| 9.x           | yes           | yes            |
| 8.x           | yes           | yes            |
| >= 7.6        | yes           | yes            |

# Installation

```console
$ npm install @voodoo.io/reloader --save
```

# Usage

## Instantiation & init

```javascript
const ConfigManager = require('@voodoo.io/reloader')
const configManager = new ConfigManager()

// create a config function that should be run every 2 seconds
configManager.addFunction("config", async () => {
  // my stuff to reload here ....
}, 2000)

await configManager.init()

```

## Basic usage

If your function returns a result it's accessible through "get" method.

```javascript
configManager.get('config')
// or
configManager.getAll()

```

## Constructor params

| Params             | description                              | Default value  |
| -------------------|:----------------------------------------:|:--------------:|
| `delay`            | Interval in ms between two check, only   | 60000    (1min)|
|                    | one timer is used to check each function |                |


# Test

```console
$ npm test
```

Coverage report can be found in coverage/.
