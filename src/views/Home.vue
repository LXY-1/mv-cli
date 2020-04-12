<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-04-08 22:40:39
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-12 21:23:06
 -->
<template>
  <div class="home text-center">
    <h4>简单路由视图——Home</h4>
    <h5> <span>my-cli</span>版本：<span class="version">{{ version }}</span> </h5>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
      version: '1.0'
    }
  }
}
</script>

<style lang="less" scoped>
  .home{
   padding-top: 200px!important;
   h4{
     color: #303133!important;
   }
   h5{
     color: #67C23A!important;
   }
  }
</style>>
