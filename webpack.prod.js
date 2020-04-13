'use strict'
// 生产环境
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  optimization: { // TODO:提取公共代码
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      // 配置 css解析以及相关css预处理器转换成css、以及支持css新特性、自动浏览器前缀等功能的postcss、生产环境下对css文件进行压缩
      // .css文件
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 提取到一个css文件
            options: {
              publicPath: '../' // 配置css url属性，前面添加一个层级，用于找到字体等资源
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 4
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          }
        ]
      },
      // .less文件
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 提取到一个css文件,
            options: {
              publicPath: '../' // 配置css url属性，前面添加一个层级，用于找到字体等资源
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 4
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'less-loader'
          }

        ]
      }
    ]
  },
  devtool: 'cheap-module-source-map', // 生产环境下建议采用这个
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production') // 注：需要把js字符串转为json字符串格式
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new OptimizeCssAssetsPlugin({ // 用于压缩css代码
      assetNameRegExp: /\.(css|less)$/,
      cssProcessorPluginOptions: {
        presets: ['default', { discardComments: { removeAll: true }}]
      }
    }),
    new UglifyJsPlugin(), // 用于压缩js代码
    new HtmlWebpackPlugin({

      filename: 'index.html',

      template: 'index.html',

      inject: true,
      favicon: path.resolve('./static/favicon.ico'),

      minify: {

        removeComments: true,

        collapseWhitespace: true,

        removeAttributeQuotes: true

        // more options:

        // https://github.com/kangax/html-minifier#options-quick-reference

      }

    }),
    new CleanWebpackPlugin() // 删除webpack打包后的文件夹以及文件，不需要传参数删除的正是输出目录dist
  ]
})

