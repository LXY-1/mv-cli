/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-04-08 16:32:00
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-13 11:57:40
 */

'use strict'
// 只用于开发环境

const path = require('path')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.common')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackConfig, {
  mode: 'development',
  devServer: {
    hot: true, // 热更新
    port: 8084,
    open: true,
    contentBase: './dist'
  },
  module: {
    rules: [
      // 配置 css解析以及相关css预处理器转换成css、以及支持css新特性、自动浏览器前缀等功能的postcss、生产环境下对css文件进行压缩
      // .css文件
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2 // 指定cssimport进来资源可以被2个loader加载器处理
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
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2 // 指定cssimport进来资源可以被2个loader加载器处理
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
  devtool: 'cheap-module-eval-source-map', // 开发环境下建议采用这个,方便调试，可以定位到指定行
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热加载

    new HtmlWebpackPlugin({

      filename: 'index.html',

      template: 'index.html',

      inject: true, // js文件至于底部
      favicon: path.resolve('./static/favicon.ico')

    }),
    new webpack.DefinePlugin({
      'process.env': {
        VUE_APP_BASE_URL: JSON.stringify('http://localhsot:8084'),
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
})

