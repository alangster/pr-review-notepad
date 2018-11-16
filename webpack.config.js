const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [{
      test: /\.jsx$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['babel-preset-react', 'babel-preset-es2015'].map(require.resolve),
      },
    }],
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/manifest.json',
      transform(content) {
        return Buffer.from(JSON.stringify({
          description: process.env.npm_package_description,
          version: process.env.npm_package_version,
          ...JSON.parse(content.toString()),
        }));
      },
    }]),
  ],

  devtool: 'sourcemap',
};
