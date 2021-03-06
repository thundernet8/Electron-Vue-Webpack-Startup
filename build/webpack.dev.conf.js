var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.base.conf')
var cssLoaders = require('./css-loaders')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// eval-source-map is faster for development
config.devtool = '#eval-source-map'

config.vue = config.vue || {}
config.vue.loaders = config.vue.loaders || {}
cssLoaders({
  sourceMap: false,
  extract: false
}).forEach(function (loader) {
  config.vue.loaders[loader.key] = loader.value
})

// add hot-reload related code to entry chunks
var polyfill = 'eventsource-polyfill'
var devClient = './build/dev-client'
Object.keys(config.entry).forEach(function (name, i) {
  var extras = i === 0 ? [polyfill, devClient] : [devClient]
  config.entry[name] = extras.concat(config.entry[name])
})

config.port = 8080;
config.output.path = path.resolve(__dirname, '../dist')
config.output.publicPath =  'http://localhost:' + config.port + '/static/'

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: '../dist/index.html',
    template: 'src/renderer/index.html',
    inject: true,
    excludeChunks: ['electron']
  })
])

module.exports = config
