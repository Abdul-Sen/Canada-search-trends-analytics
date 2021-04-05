const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: 'babel-loader', // Transpiling TSX to JS
                exclude: /node_modules/,
            },
            {
                test: /\.(geojson|json)$/,
                use: 'json-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/public/index.html'),
        }),
        new ForkTsCheckerWebpackPlugin() // Type checking for TS
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: true
    }
}