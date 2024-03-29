const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
  return {
    mode: 'development',
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                  sourceMap: true
              }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
          ],
        },
      ],
    },
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'src/components/'),
      },
    },
    devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
    },
  };
};
