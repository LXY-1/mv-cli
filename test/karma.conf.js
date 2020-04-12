/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-04-10 21:45:48
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-12 22:30:06
 */
// Karma configuration
// Generated on Fri Apr 10 2020 21:45:48 GMT+0800 (GMT+08:00)

const webpackConfig = require('../webpack.test.conf')

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    // 指定编写要进行测试的文件，karma会自动运行匹配到的所有文件
    // 这里是因为配合webpack，所以使用测试入口文件
    files: [
      './index.js'
    ],

    // karma扩展的插件，启动后需要用到的，具体可以看karma的plugin相关文档。
    plugins: [
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-spec-reporter',
      // 'karma-coverage'
      'karma-coverage-istanbul-reporter'
    ],

    // list of files / patterns to exclude
    exclude: [
      'node_modules',
      '**/*.md'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    //
    //  一般我们会配合使用webpack先进行处理，比如es6转es5等
    // 关于测试文件的预处理配置，也就是使用浏览器器或其他模拟环境执行测试源码之前做的处理
    // karma运行我们启动浏览器之前对指定的文件进行预处理，这里我们使用的预处理器是webpack和coverage
    //
    preprocessors: {
      'index.js': ['webpack'] // coverage用于生成测试覆盖率
    },

    webpack: webpackConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // 测试报告
    // reporters是karma在跑完测试之后，关于测试结果报告的配置
    // 这里选用的配置是spec和coverage，spec是报告详细的测试结果，
    // coverage是报告代码测试覆盖率。下面的coverageReporter配置也是coverage reporter的相关配置
    // 需要依赖插件；karma-spec-reporter，karma-coverage,可以查看插件的相关文档来了解
    // reporters: ['spec', 'coverage-istanbul'],
    reporters: ['progress', 'coverage-istanbul'],
    coverageIstanbulReporter: { // 配置参数移步：https://www.zybuluo.com/wangxingkang/note/790416
      dir: 'coverage',
      // 以什么格式, 这里设置了输出 html文件 ,info文件 ,及控制台
      reports: ['html', 'lcovonly', 'text-summary'],
      // 修正 weback 路径
      fixWebpackSourcePaths: true,
      // 将生成的html放到./coverage/html/下
      'report-config': {
        html: {
          subdir: 'html'
        }
      }

    },

    // 生成代码测试覆盖率报告
    // coverageIstanbulReporter: {
    //   dir: './coverage',
    //   // 以什么格式, 这里设置了输出 html文件 ,info文件 ,及控制台
    //   reports: ['html', 'lcovonly', 'text-summary'],
    //   // 修正 weback 路径
    //   fixWebpackSourcePaths: true,
    //   // 将生成的html放到./coverage/html/下
    //   'report-config': {
    //     html: {
    //       subdir: 'html'
    //     }
    //   }
    // },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // karma启动配置，控制启动什么浏览器，也可以通过配置空数组让karma不启动浏览器
    // 一般使用无头浏览器PhantomJS速度比较快
    // 还有选择哪个浏览器还需要对应安装一个插件，比如'karma-chrome-launcher'
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // karma-mocha插件提供的一个关于客户端的配置提供了超时时间等配置
    client: {
      mocha: {
        timeout: 100000
      }
    }
  })
}
