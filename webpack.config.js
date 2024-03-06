const path = require('path');
const { webpack } = require('webpack');
const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode: mode,

  entry: './src/index.ts',

  plugins: [new Dotenv()],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: false,
    port: 8080,
    liveReload: true,
    watchFiles: ['src/*.html'],
  },
};
