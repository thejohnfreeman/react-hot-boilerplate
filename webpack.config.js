var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var src = path.join(__dirname, 'src')

module.exports = {
  entry: {
    app: [path.join(src, 'app.js')],
    vendor: ['react', 'react-dom', 'semantic-ui-react'],
  },
  output: {
    path: 'public',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: 'eslint', include: src}
    ],
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loaders: ['style', 'css']},
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?cacheDirectory'],
        // Only parse files in src (i.e. not in node_modules). Alternative is
        // to exclude node_modules.
        include: src,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(src, 'template.html'),
    }),
    new webpack.NoErrorsPlugin(),
    // Put vendor chunk into its own bundle.
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
}
