/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-04-11 22:07:38
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-13 00:48:51
 */

'use strict'

const path = require('path')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.common')

module.exports = merge(webpackConfig, {
  mode: 'development',
  entry: './test/index.js', // 测试配置的webpack编译过的文件,也是测试入口文件，
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'test-build'),
    filename: 'bundle.js',
    publicPath: './'
  },
  module: {
    rules: [

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

      // 用 Istanbul 只监测业务代码,include是你需要测试的源码，通过它以及你最终测试脚本统计代码覆盖率
      // {
      //   test: /\.js$|\.jsx$/,
      //   use: {
      //     loader: 'istanbul-instrumenter-loader',
      //     options: { esModules: true } // 使其支持es2015 的mudule语法
      //   },
      //   enforce: 'post', // 使用qbabel，You must run the instrumentation as a post step
      //   exclude: /node_modules|\.spec\.js$/,
      //   include: path.resolve('src')
      // },
      //   ]
      // }
    ]
  },
  devtool: 'inline-source-map'

})
