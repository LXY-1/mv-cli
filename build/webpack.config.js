// 'use strict';

// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack');
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const UglifyJsPlugin  = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//     mode:'development',// 开发模式
//     entry:['../src/index.js'], // 入口文件，webpack编译的文件，注意这里的路径要写对，是相对路径.相对于配置文件的路径
//     devtool: 'inline-source-map',// 用于调试
//     devServer:{ // 配置热更新插件
//       hot:true,
//       open:true,
//       port:8084,
//       publicPath: './'
//     },
//     context: path.resolve(__dirname),
//     output: {
//         path: path.resolve(__dirname, '../dist'), //打包后生成文件存放的目录（绝对路径）.但是前者是相对路径，使用path模块目的是为了项目存放于不同设备下都可以通过绝对路径找到
//         filename: 'bundle.js',
//         publicPath: './'
//     },
//     module: { // 模块，在webpack中所有文件皆为模块，解析css、js、图片以及字体图标等资源文件
//         rules: [
//             // 配置babel es6 -》 es5
//             {
//               test: /\.jsx?$/,
//               use:{
//                   loader:'babel-loader', // 把es6转es5,只能转一部分高级语法，对于高级的全局方法等没有办法，所以需要扩展babel插件
//                   options:{
//                       presets:[
//                           '@babel/preset-env' // 针对特定浏览器生成es5
//                       ],
//                       plugins: [

//                               [
//                                 "@babel/plugin-proposal-decorators", //将es6更高级的特性转化 装饰器
//                                 {"legacy":true}
//                               ],
//                               [
//                                "@babel/plugin-proposal-class-properties", // 将es6更好及api进行转化---类
//                                {"loose":true}
//                               ],
//                               [
//                                   "@babel/plugin-transform-runtime"
//                               ]

//                       ]
//                   }
//               }
//             },
//             // 配置 css解析以及相关css预处理器转换成css、以及支持css新特性、自动浏览器前缀等功能的postcss、生产环境下对css文件进行压缩
//             // .css文件
//             {
//                 test: /\.css$/,
//                 use : [
//                     process.env.NODE_ENV === 'development' ? 'style-loader': MiniCssExtractPlugin.loader, //TODO:MiniCssExtractPlugin使用配置
//                     { loader: "css-loader" },
//                     {
//                         loader:'postcss-loader',
//                         options:{
//                             plugins:[
//                                 require('autoprefixer')
//                             ]
//                         }
//                     }
//                 ]
//             },
//             // .less文件
//             {
//                 test:/\.less$/,
//                 use:[
//                     process.env.NODE_ENV === 'development' ? 'style-loader': MiniCssExtractPlugin.loader, //TODO:MiniCssExtractPlugin使用配置
//                     {
//                         loader:'css-loader'
//                     },
//                     {
//                         loader:'postcss-loader',
//                         options:{
//                             plugins:[
//                                 require('autoprefixer')
//                             ]
//                         }
//                     },
//                     {
//                         loader:'less-loader'
//                     },

//                 ]
//             },
//             // 接下里是配置 字体、图片等等静态资源loader
//             // 01 配置图片解析loader
//             {
//                 test:/\.(jpg|png|jpeg|gif)$/,
//                 use:[
//                     {
//                         loader:'url-loader',
//                         options:{
//                             limit:1024,
//                             fallback:{
//                                 loader:'file-loader',
//                                 options:{
//                                     name:'img/[name].[hash:8].[ext]'
//                                 }
//                             }
//                         }
//                     }
//                 ]
//             },
//             // 配置音视频等资源
//             {
//                 test:/\.(mp3|webm|ogg|mp3|wav)$/,
//                 use:[
//                     {
//                         loader:'url-loader',
//                         options:{
//                             limit:1024,
//                             fallback:{
//                                 loader:'file-loader',
//                                 options:{
//                                     name:'media/[name].[hash:8].[ext]'
//                                 }
//                             }
//                         }
//                     }
//                 ]
//             }
//         ]
//     },
//     resolve: {
//     },
//     devtool: 'source-map',
//     plugins: [ //插件，用于扩展webpack功能
//         // 配置MiniCssExtractPlugin插件用于打包时把多个css资源放在一个独立文件，需要在这里单独为webpack扩展这个插件，制定输出路径
//         new MiniCssExtractPlugin({
//             filename: "css/common.css",
//         }),
//         new OptimizeCssAssetsPlugin({ // 用于压缩css代码
//             assetNameRegExp: /\.(css|less)$/,
//             cssProcessorPluginOptions:{
//                 presets:['default',{discardComments:{removeAll:true}}]
//             },
//         }),
//         new UglifyJsPlugin(), // 用于压缩js代码
//         new HtmlWebpackPlugin({ // 1、为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题。2、可以生成创建html入口文件
//              template: path.resolve(__dirname, '../index.html')
//         }),
//         new CleanWebpackPlugin(),//删除webpack打包后的文件夹以及文件，不需要传参数删除的正是输出目录dist
//         new webpack.HotModuleReplacementPlugin() // 热加载
//     ]
// };
