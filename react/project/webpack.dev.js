var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');


var config = {
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            APP_DIR + '/app.js'
        ],
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ],
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    devServer: {
        hot: true,
        contentBase: BUILD_DIR,
        publicPath: '/',
        proxy: {
            '/app/reports/api/**': {
                target: 'http://localhost',
                secure: false,
                changeOrigin: true,
                pathRewrite: {'^/app/reports/api' : '/pequi/reports/server/api/'}
            }
        }
    },
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: '[name].[hash].js',
        }),

        /**
        * HtmlWebpackPlugin will make sure out JavaScript files are being called
        * from within our index.html
        */
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
    ],
};

module.exports = config;