'use strict'
// 通用配置——适用于生产环境和开发环境需要
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'], // 打包的入口文件,
  devtool: 'inline-source-map',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // 配置解析vue文件
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false // 保留空白
              }
            }
          }
        ]
      },
      // 配置babel es6 -> es5
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // 排除
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader', // 把es6转es5,只能转一部分高级语法，对于高级的全局方法等没有办法，所以需要扩展babel插件
            options: {
              presets: [
                '@babel/preset-env' // 针对特定浏览器生成es5
              ],
              plugins: [

                [
                  '@babel/plugin-proposal-decorators', // 将es6更高级的特性转化 装饰器
                  { 'legacy': true }
                ],
                [
                  '@babel/plugin-proposal-class-properties', // 将es6更好及api进行转化---类
                  { 'loose': true }
                ],
                [
                  '@babel/plugin-transform-runtime'
                ]

              ]
            }
          }
        ]
      },
      // 接下里是配置 字体、图片等等静态资源loader
      // 01 配置图片解析loader
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 3 * 1024,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'// 存放路径
                }
              }
            }
          }
        ]
      },
      // 配置音视频等资源
      {
        test: /\.(mp3|webm|ogg|wav|flac|aac|mp4|wav)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      // 配置字体资源解析
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },
  resolve: { // TODO:
    extensions: ['.js', '.json', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve(__dirname, 'src'), // 指向src目录，对深层次的文件引入外部目录资源比较方便
      '@/components': path.resolve(__dirname, 'src/components') // 公共组件路径
    }
  },
  plugins: [

    new VueLoaderPlugin()// 实验.vue文件解析插件

  ]
}
