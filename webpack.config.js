const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}

// console.log('Mode:', mode);

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

    if (mode === 'production') {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}

module.exports = {
    mode: mode,
    target: target,
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "http://localhost:3000/",
        assetModuleFilename: 'assets/[name][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource', // or asset
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)/,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: '../fonts/'
                        }
                    }
                ]
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
        extensions: ['.js', '.jsx'], // add other ./...
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
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
            },
            pathRewrite: { '^/api': '' },
        },
        // open: 'Google Chrome',
        port: 3000,
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
    }
}
