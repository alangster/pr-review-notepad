const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
};
