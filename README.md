# Minimal Working Example for Rollup + Babel with async/await

This is a minimal working example for JavaScript bundling with rollup and babel where async/await is correctly transpiled, to be compatible with IE11.

This repository was/is necessary because it is [not so easy](https://github.com/rollup/rollup-plugin-babel/issues/312) to configure Rollup to correctly transpile async/await with Babel.

## How does it work

Not only is [rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel)
and [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve)
needed, but also
[rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs).

There is still an issue, where babel helpers are not transpiled. Therefore the polyfill for Promise is not included automatically. To workaround this, a dummy call to `Promise.resolve()` is made in the [head of the source](./src/BuildTest.js).
The issue, where babel helpers are not transpiled. The polyfill for Promise is **now** included automatically.

Once all these plugins are included and called in [rollup.config.js](./rollup.config.js) everything is transpiled as expected.

## Steps to test/run

```sh
# clone
$ git clone https://github.com/Amourspirit/mweRollupBabelAsyncAwait.git

# install
$ npm i

# bundle
$ npm run build

# start a server
$ npm start

# visit http://localhost:8080/BuildTest.html
# check if "Hi from top level!" and "Hi from the async function!" is printed to your console.
```
