/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-04-08 22:44:44
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-12 16:47:41
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'// 默认显示
Vue.use(VueRouter) // 向vue注册插件

console.log('组件', Home)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // component: About
      component: () => import(/* webpackChunkName: 'About' */ '../views/About.vue') // 异步载入，懒加载
    },
    {
      path: '/mock',
      name: 'Mock',
      // component: About
      component: () => import(/* webpackChunkName: 'About' */ '../views/Mock.vue') // 异步载入，懒加载
    },
    {
      path: '*',
      redirect: '/Home'
    }
  ]
})
