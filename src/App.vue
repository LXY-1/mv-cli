<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-04-08 21:55:58
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-11 21:38:03
 -->

<template>
  <div class="app">
    <layout />
    <router-view />
  </div>
</template>

<script>
import Layout from './Layout.vue'
export default {
  name: 'App',
  components: {
    Layout
  },
  data: function() {
    return {
      msg: 'myCli版本：从vuex获取——'
    }
  }
}
</script>

<style lang="less" >
@import url('./styles/index.less');
.app{
    h5{
        color: aquamarine;
    }
}
</style>

