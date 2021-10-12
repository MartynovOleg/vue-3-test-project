const path = require('path');
const {config} = require("dotenv");
config({ path: '.env' });

//const { API_ROOT, PORT_BACKEND } = process.env;

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/'
    },
    historyApiFallback: true,
    hot: true,
    port: 8000,
    liveReload: false,
    open: true
  },
  module: {
    rules: [
    ],
  },
  plugins: [
  ],
};
