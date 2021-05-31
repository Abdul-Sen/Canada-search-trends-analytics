const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
      open: true
  },

  plugins: [
    new DefinePlugin({
        'process.env.PUBLIC_URL': JSON.stringify("http://localhost:3000/")
    })
],
});