var webpack = require('webpack')
var path = require('path')

module.exports = {

  devtool: 'eval-source-map',

  entry: {

    'ES6': [
      './ES6/src/ParticleSystem.js'
      ]
  },

  output: {
    path: path.join(__dirname, '../../../ES6/dist/babel'),
    filename: 'ParticleSystem.js',
    libraryTarget: 'umd',
    library: 'Babel',
    watch: true
  },

  plugins: [

    new webpack.optimize.UglifyJsPlugin({
      compress: false,
      minimize: false,
      mangle: false
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
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
      path.resolve('./ES6/src')
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
