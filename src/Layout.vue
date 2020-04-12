
<template>
  <div class="menu">
    <el-menu
      :default-active="this.$route.path"
      router
      class="el-menu-demo change-padding"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.path"><i :class="item.icon" /> {{ item.name }} </el-menu-item>
      <el-menu-item index="4" class="right"><a href="https://www.ele.me" target="_blank">源码<i class="el-icon-link" /></a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import menuList from './menu/data'
export default {
  name: 'Layout',
  data: function() {
    return {
      navList: []
    }
  },
  mounted() {
    this.navList = menuList
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>

 .change-padding{
     padding-left: 15%!important;
     .right{
        margin-left: 3%!important;
     }
 }

</style>>

