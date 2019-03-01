const path = require('path');
const webpack = require('webpack')

module.exports = function (env) {
  const target = (env || {}).ENVIRONMENT;

  return {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
      host: 'localhost',
      port: 4200
    },
    resolve: {
      alias: {
        '@env': path.resolve(__dirname, 'src/environments'),
      },
      extensions: ['.js'],
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/@env\/environment/, function (resource) {
        resource.request = resource.request.replace(/\/environment/, target ? `/environment.${target}` : `/environment`);
      }),
      new webpack.NormalModuleReplacementPlugin(/environments\/environment/, function (resource) {
        resource.request = resource.request.replace(/environments\/environment/,
          target ? `environments/environment.${target}` : `environments/environment`);
      }),
    ],
  }
}