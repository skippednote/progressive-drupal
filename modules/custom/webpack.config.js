var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'session_list': './session_list/components/SessionList',
    'drupal_news': './drupal_news/components/DrupalNews',
    vendor: [
      'react',
      'react-dom',
      'isomorphic-fetch'
    ]
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name]/js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
        minChunks: Infinity
    })
  ]
}
