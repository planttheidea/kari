'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultConfig = require('./webpack.config');

const PORT = 3000;
const ROOT = path.join(__dirname, '..');

module.exports = Object.assign({}, defaultConfig, {
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    inline: true,
    lazy: false,
    noInfo: false,
    port: PORT,
    quiet: false,
    stats: {
      colors: true,
      progress: true,
    },
    watchOptions: {
      ignored: /node_modules/,
    },
  },

  entry: [path.join(ROOT, 'DEV_ONLY', 'index.js')],

  module: Object.assign({}, defaultConfig.module, {
    rules: defaultConfig.module.rules.map((rule) => {
      if (rule.loader !== 'babel-loader') {
        return rule;
      }

      return Object.assign({}, rule, {
        include: rule.include.concat([path.join(ROOT, 'DEV_ONLY')]),
        options: Object.assign({}, rule.options, {
          presets: ['react'],
        }),
      });
    }),
  }),

  output: Object.assign({}, defaultConfig.output, {
    publicPath: `http://localhost:${PORT}/`,
  }),

  plugins: defaultConfig.plugins.concat([new HtmlWebpackPlugin()]),
});
