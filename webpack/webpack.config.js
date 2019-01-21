'use strict';

const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const path = require('path');
const webpack = require('webpack');

const ROOT = path.join(__dirname, '..');

module.exports = {
  devtool: '#source-map',

  entry: [
    path.join(ROOT, 'src', 'index.js')
  ],

  mode: 'development',

  module: {
    rules: [
      {
        enforce: 'pre',
        include: [
          path.join(ROOT, 'src')
        ],
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc',
          failOnError: true,
          failOnWarning: false,
          formatter: eslintFriendlyFormatter
        },
        test: /\.js$/
      }, {
        include: [
          path.join(ROOT, 'src')
        ],
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['env', {
              loose: true,
              modules: false,
              targets: {
                browsers: [
                  'last 2 versions',
                  'ie 11'
                ]
              }
            }],
            'stage-2'
          ]
        },
        test: /\.js$/
      }
    ]
  },

  output: {
    filename: 'kari.js',
    library: 'kari',
    path: path.join(ROOT, 'dist'),
    umdNamedDefine: true
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ])
  ]
};
