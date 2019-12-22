const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(tsx)$/,
        exclude: /node_modules/,
        use: [
          {loader: 'babel-loader'},
          {loader: 'ts-loader'}
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map'
};