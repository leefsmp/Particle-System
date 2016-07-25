var webpack = require('webpack')
var path = require('path')

module.exports = {

  devtool: false,

  entry: {

    'Autodesk.ADN.Viewing.Extension.BasicES2015':
      './src/Autodesk.ADN.Viewing.Extension.BasicES2015/Autodesk.ADN.Viewing.Extension.BasicES2015.js',

    'Viewing.Extension.VisualReport':
      './src/Viewing.Extension.VisualReport/Viewing.Extension.VisualReport.js',

    'Viewing.Extension.StateManager':
      './src/Viewing.Extension.StateManager/Viewing.Extension.StateManager.js',

    'Viewing.Extension.Markup2D':
      './src/Viewing.Extension.Markup2D/Viewing.Extension.Markup2D.js',

    'Viewing.Extension.Markup3D':
      './src/Viewing.Extension.Markup3D/Viewing.Extension.Markup3D.js',

    'Autodesk.ADN.Viewing.Extension.ModelLoader':
      './src/Autodesk.ADN.Viewing.Extension.ModelLoader/Autodesk.ADN.Viewing.Extension.ModelLoader.js',

    'Viewing.Extension.ModelTransformer':
      './src/Viewing.Extension.ModelTransformer/Viewing.Extension.ModelTransformer.js',

    'Autodesk.ADN.Viewing.Extension.PropertyPanel':
      './src/Autodesk.ADN.Viewing.Extension.PropertyPanel/Autodesk.ADN.Viewing.Extension.PropertyPanel.js',

    'Viewing.Extension.CustomTree':
      './src/Viewing.Extension.CustomTree/Viewing.Extension.CustomTree.js',

    '_Viewing.Extension.CSSTV':
      './src/Viewing.Extension.CSSTV/Viewing.Extension.CSSTV.js',

    '_Viewing.Extension.ControlSelector':
      './src/Viewing.Extension.ControlSelector/Viewing.Extension.ControlSelector.js',

    '_Viewing.Extension.ExtensionManager':
      './src/Viewing.Extension.ExtensionManager/Viewing.Extension.ExtensionManager.js',

    'Viewing.Extension.Particle':
      './src/Viewing.Extension.Particle/Viewing.Extension.Particle.js',

    '_Viewing.Extension.Particle.LHC':
      './src/Viewing.Extension.Particle/Viewing.Extension.Particle.LHC.js',

    'Viewing.Extension.PointCloud':
      './src/Viewing.Extension.PointCloud/Viewing.Extension.PointCloud.js',

    'Viewing.Extension.TypeScript':
      './src/Viewing.Extension.TypeScript/Viewing.Extension.TypeScript.js',

    'Viewing.Extension.Transform':
      './src/Viewing.Extension.Transform/Viewing.Extension.Transform.js',

    'ConnectedData':
      './src/Forge.ConnectedData/ConnectedData.js'
  },

  output: {
    path: path.join(__dirname, '../../App/dynamic/extensions'),
    filename: "[name]/[name].min.js",
    libraryTarget: "umd",
    library: "[name]"
  },

  plugins: [

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
      jQuery: "jquery",
      _ : "lodash",
      $: "jquery"
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.ts'],
    root: [
      path.resolve('./src/utils'),
      path.resolve('./src/Viewing.Extension.Particle'),
      path.resolve('./src/Viewing.Extension.Transform')
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
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
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
