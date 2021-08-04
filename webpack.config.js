const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const openBrowser = require('react-dev-utils/openBrowser');

let mode = 'development';
let target = 'web';

const protocol = 'http:';
const host = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

const Loader = () => {
  const loader = ['babel-loader'];

  if (mode === 'development') {
    loader.push('eslint-loader')
  }

  return loader;
}


const Plugins = () => {
  const plugins = [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'favicon.ico'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
  ];

  if (mode === 'development') {
    plugins.push(new StylelintPlugin());
    plugins.push()
  }

  if (mode === 'production') {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}

module.exports = {
  mode: mode,
  target: target,
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // or asset
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)/,
        type: 'asset/inline',
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: Loader()
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: Loader()
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'scss', 'css'], // add other ./...
    alias: {
      '@': path.resolve(__dirname, 'src') // add new alias
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: Plugins(),
  devtool: 'source-map',
  devServer: {
    onListening: () => {
      openBrowser(`${protocol}//${host}:${port}`);
    },
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
      },
      pathRewrite: { '^/api': '' },
    },
    port: 3000,
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  }
}
