const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  resolve: {
    fallback: {
      "vm": require.resolve("vm-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer"),
      "assert": require.resolve("assert"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "fs": false,
      "os": require.resolve("os-browserify/browser"),
      "url": require.resolve("url"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "net": false,
      "tls": false,
      "async_hooks": false
    }
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^express$/
    })
  ]
};
