const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new Uglify(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
             }
         })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "vendor",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component')
        }
    }
};