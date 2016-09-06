var webpack = require('webpack')
var path = require('path')

module.exports = {

  devtool: false,

  entry: {

    'Test': [
      'babel-polyfill',
      './Test/src/test-vs/babel-vs-traceur.js'
    ]
  },

  output: {
    path: path.join(__dirname, '../../Test/dist'),
    filename: 'babel-vs-traceur.bundle.js',
    publicPath: '../dist/'
  },

  plugins: [

    new webpack.IgnorePlugin(/regenerator|nodent|js\-beautify/, /ajv/),

    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200
    }),

    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      },
      minimize: true,
      mangle: true
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),

    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      _ : 'lodash',
      $: 'jquery'
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: [
      path.resolve('./Test/src'),
      path.resolve('./Test/src/utils')
    ]
  },

  module: {

    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
}
