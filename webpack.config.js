
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "css/bundle.css"
});

module.exports = {
    context: __dirname,
    entry: [
        './app/ClientApp.jsx',
        './app/scss/main.scss'
    ],
    devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/bundle.js',
        publicPath: '/public/js/'
    },
    devServer: {
        hot: true,
        publicPath: '/public/',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    plugins: [extractSass],
    module: {
        rules: [
            {
              enforce: 'pre',
              test: /\.jsx?$/,
              loader: 'eslint-loader',
              exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    }
};
