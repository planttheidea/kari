'use strict';

const webpack = require('webpack');
const OptimizeJsPlugin = require('optimize-js-plugin');

const defaultConfig = require('./webpack.config');

module.exports = Object.assign({}, defaultConfig, {
  devtool: undefined,

  mode: 'development',

  output: Object.assign({}, defaultConfig.output, {
    filename: 'kari.min.js'
  }),

  plugins: defaultConfig.plugins.concat([
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  ])
});
