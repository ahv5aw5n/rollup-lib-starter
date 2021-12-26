import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
// https://github.com/rollup/plugins/tree/master/packages/babel
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';
import pkg from './package.json';
import camelCase from 'lodash.camelcase';

const libraryName = pkg.name;

export default {
  input: 'src/index.js',

  output: [
    { file: pkg.browser, name: camelCase(libraryName), format: 'umd' },
    { file: pkg.module, format: 'es' },
  ],

  external: [],

  watch: {
    include: 'src/**',
  },

  plugins: [
    json(),
    // so Rollup can find modules from node modules
    resolve(),
    // so Rollup can convert modules to an ES module
    commonjs(),
    // @rollup/plugin-commonjs must be placed before babel plugin
    babel({ babelHelpers: 'runtime', exclude: 'node_modules/**' }),
    terser(),
  ],
};
