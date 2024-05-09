## bandwidth-sdk

[![Tests](https://github.com/Bandwidth/node-sdk/actions/workflows/test-nightly.yml/badge.svg)](https://github.com/Bandwidth/node-sdk/actions/workflows/test-nightly.yml)

### Test Matrix
| **OS** | **Node** |
|:---:|:---:|
| Windows 2019 | 16, 18, 20, 22 |
| Windows 2022 | 16, 18, 20, 22 |
| Ubuntu 20.04 | 16, 18, 20, 22 |
| Ubuntu 22.04 | 16, 18, 20, 22 |

#### Available on NPM
```
npm install bandwidth-sdk
```

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install bandwidth-sdk --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Getting Started

The following is a simple example of how to use this module:

```javascript
import { CallsApi, Configuration } from 'bandwidth-sdk';

const config = new Configuration({
    username: BW_USERNAME,
    password: BW_PASSWORD
});
const callsApi = new CallsApi(config);

const body = {
    applicationId: BW_VOICE_APPLICATION_ID,
    to: TO_NUMBER,
    from: BW_NUMBER
};

await callsApi.createCall(BW_ACCOUNT_ID, body);
```

More samples can be found in the [Bandwidth Samples](https://github.com/orgs/Bandwidth-Samples/repositories?q=lang%3Ajavascript&type=all) GitHub Organization.
