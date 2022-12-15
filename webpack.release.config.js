var os = require('os');
const config = require('./webpack.config');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

config.mode = "production";
config.output.filename = '[name].bundle.min.js';

// https://webpack.js.org/plugins/terser-webpack-plugin/#uglify-js
config.optimization = {
    runtimeChunk: "single",
    minimize: true,
    minimizer: [
        new TerserPlugin({
            minify: TerserPlugin.uglifyJsMinify,
            // `terserOptions` options will be passed to `uglify-js`
            // Link to options - https://github.com/mishoo/UglifyJS#minify-options
            terserOptions: {
                sourceMap: true,
            },
        }),
    ],
};

module.exports = config;
