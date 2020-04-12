/*
 * @Description: 静态菜单数据，对应导航栏组件layout.vue渲染，每一个item都需要对应一个路由视图，否则跳转到404页面
 * @version:
 * @Author: lxw
 * @Date: 2020-04-09 14:54:30
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-09 16:42:20
 */
export default [
  {
    path: '/',
    name: '首页',
    icon: 'el-icon-s-home'
  },
  {
    path: '/about',
    name: '关于此项目',
    icon: 'el-icon-reading'
  },
  {
    path: '/mock',
    name: 'MockJs',
    icon: 'el-icon-pie-chart'
  }
]
