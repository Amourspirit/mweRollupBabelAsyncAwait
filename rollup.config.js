import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
const getBabelOptions = () => ({
  babelHelpers: 'bundled',
  exclude: 'node_modules/**', // only transpile our source code
  presets: [
    [
      "@babel/env",
      {
        modules: false,
        useBuiltIns: "usage",
        corejs: 3,
        targets: "ie 11"
      }
    ]
  ]
});
export default [{
  input: 'src/BuildTest.js',
  output: {
    file: 'dist/BuildTest.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    babel(getBabelOptions()),
    commonjs()
  ]
}];