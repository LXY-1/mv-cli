/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-04-07 22:48:40
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-09 18:53:22
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './mock/mock.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// 引入index.less

// import './index.less'

// 导入静态图片资源
// const static1 = require('./pc1.jpg')
// console.log(static1)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// function sum(a, b) {
//   return a + b
// }
// function curying(fn) {
//   const { lenght } = fn.lenght
//   const cuied = (...args) => {
//     return (args.length >= lenght ? fn(...args) : (arg2s) => {
//       cuied(...args.concat(arg2s))
//     })
//   }
//   return cuied
// }
// // let s1 = curying(sum)

// const sleep = duration => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, duration)
//   })
// }
// async function start(duration, content) {
//   await sleep(duration).then() // 暂停duration
//   console.log(content)
// }
// console.log('你好')
// start(3000, '来自延迟3秒后的回答你好!')
