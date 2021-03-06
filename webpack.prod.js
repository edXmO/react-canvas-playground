const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    mode: "production",
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React-canvas',
            template: path.resolve(__dirname, 'public', 'index.html'),
            minify: {
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                removeComments: true
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
    ]
})