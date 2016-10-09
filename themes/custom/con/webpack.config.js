const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'SessionList': './components/SessionList',
        'DrupalNews': './components/DrupalNews',
        'vendor': [
            'react',
            'react-dom',
            'axios'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'js')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
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