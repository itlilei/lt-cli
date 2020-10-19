'use strict';

let path = require('path');
let webpack = require('webpack');
let CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
let ImageSuffixPlugin = require('@jdreact/image-suffix-webpack-plugin');
let config = require('./config')[process.env.NODE_ENV === 'development' ? 'dev' : 'build'];

process.noDeprecation = true;

function resolve(dir) {
    return path.resolve(__dirname, '../', dir);
}

const baseWebpackConfig = {
    context: path.resolve(__dirname, '..'),
    entry: [
        require.resolve('./polyfills'),
        resolve(config.entry)
    ],
    output: {
        path: resolve(config.assetsRoot),
        filename: '[name].js',
        publicPath: config.publicPath
    },
    resolve: {
        extensions: ['.js', '.web.js', '.jsx', '.json'],
        mainFields: ['client', 'main'],
        modules: [
            resolve(config.src),
            resolve('node_modules')
        ],
        alias: {
            'react-native': '@jdreact/jdreact-core-web',
            'dismissKeyboard': '@jdreact/jdreact-core-web/Libraries/Utilties/dismissKeyboard.web.js',
            'ReactNativeART': 'react-art',
            'react': resolve('node_modules/@jdreact/jdreact-core-web/node_modules/react'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react-native', 'stage-1'],
                    plugins: process.env.NODE_ENV === 'development' ? [] : ['transform-remove-console']
                },
                include: [
                    resolve(config.src),
                    process.env.NODE_ENV === 'development' ? resolve('node_modules/@jdreact') : resolve('node_modules'),
                    resolve('node_modules/@ares'),
                    resolve('node_modules/@areslabs'),
                ],
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
                include: [
                    resolve(config.src),
                    resolve('node_modules/@jdreact/jdreact-core-lib'),
                    resolve('node_modules/@jdreact/jdreact-core-web'),
                    resolve('node_modules/@ares')
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')({
                                        browsers: ['> 0%', 'Last 2 version', 'IE 8'],
                                    })
                                ];
                            }
                        }
                    },
                ],
                include: [
                    resolve(config.src),
                    resolve('node_modules/@jdreact/jdreact-core-lib'),
                    resolve('node_modules/@jdreact/jdreact-core-web'),
                ]
            }
        ]
    },
    plugins: [
        new ImageSuffixPlugin(),
        new CaseSensitivePathsPlugin(),
    ]
};

if (config.includeJDShare) {
    baseWebpackConfig.plugins.push(
        new webpack.ProvidePlugin({
            JdShare: path.join(__dirname, 'jdShare'),
        })
    );
}

module.exports = baseWebpackConfig;
