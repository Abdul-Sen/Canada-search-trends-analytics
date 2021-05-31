const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
  
  entry: './src/index',

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
            test: /\.geojson$/,
            use: 'json-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          }        
    ]
},
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/public/index.html'),
    }),
    new ForkTsCheckerWebpackPlugin() // Type checking for TS
  ],
};