'use strict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.config.base');
let config = require('./config').dev;

module.exports = merge({}, baseWebpackConfig, {
    devtool: '#cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify('development'),
            '__DEV__': true
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.tpl.vm'),
            config: config.template,
        }),
    ],
});
