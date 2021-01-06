<div align="center">
<b>Reloader</b><br/>
<br/><br/>

[![npm version](https://badge.fury.io/js/%40voodoo.io%2Freloader.svg)](https://badge.fury.io/js/%40voodoo.io%2Freloader)
[![GitHub license](https://img.shields.io/github/license/VoodooTeam/reloader)](https://github.com/VoodooTeam/reloader/blob/master/LICENSE)
[![CI pipeline](https://github.com/VoodooTeam/reloader/workflows/Node.js%20CI/badge.svg)](https://github.com/VoodooTeam/reloader/actions?query=workflow%3A%22Node.js+CI%22)
[![Opened issues](https://img.shields.io/github/issues-raw/VoodooTeam/reloader)](https://github.com/VoodooTeam/reloader/issues)
[![Opened PR](https://img.shields.io/github/issues-pr-raw/VoodooTeam/reloader)](https://github.com/VoodooTeam/reloader/pulls)
[![DeepScan grade](https://deepscan.io/api/teams/12068/projects/15412/branches/307225/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=12068&pid=15412&bid=307225)
[![Code coverage](https://codecov.io/gh/VoodooTeam/reloader/branch/master/graph/badge.svg)](https://codecov.io/gh/VoodooTeam/reloader)
![Dependencies](https://img.shields.io/david/VoodooTeam/reloader)



# Purpose

Minimalist, efficient and performance focused module to run a function at a specific interval.

# Compatibility

**/!\ This module use async/await syntax, this is why you must have node 7.6+.**

Supported and tested : >= 7.6

| Version       | Supported     | Tested         |
| ------------- |:-------------:|:--------------:|
| 14.x          | yes           | yes            |
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
