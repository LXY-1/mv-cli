<!--
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-04-09 16:45:51
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-09 23:34:16
 -->
<template>
  <div class="mock">
    <h4 class="text-center">mockjs 使用</h4>
    <div class="text-center"> <el-button type="primary" :loading="loadingState" @click="getUsers">articleInfo</el-button></div>
    <div class="mg">
      <!-- 封装的全局表格组件，支持动态编辑操作按钮 -->
      <table-page
        :table-datas="showDatas.roleDatas"
        :table-header="showDatas.roleAttributs"
        :operate-way="showDatas.operateData"
        :page-infos="showDatas.pageInfos"
        @operate="operateFun"
        @changePageSize="changeSize"
        @changCurrentePage="changPage"
      />
    </div>
  </div>
</template>

<script>
import { getUser } from '../api/user'
import TablePage from '@/components/TablePage/TablePage'
export default {
  name: 'Mock',
  components: {
    TablePage
  },
  data: function() {
    return {
      tableData: [],
      loadingState: false,
      // 页面需要渲染的数据:包括当前页面以及制作复用子组件，渲染的数据是需要传递给子组件的。
      showDatas: {
        roleDatas: [],
        // 定义表格头部数据：一般是固定自己需要的几个字段:所以可以直接在这里定义:也算是定义渲染的模板对象
        roleAttributs: [
          {
            attributes: 'author',
            name: '作者',
            // 配置每一列的宽度，如果是为了全屏显示的话最后一个不要配置宽度
            width: '180'
          },
          {
            attributes: 'date',
            name: '日期',
            width: '260'
          },
          {
            attributes: 'title',
            name: '标题'
          }
        ],
        // 这里需要表格的尾列显示编辑、删除按钮:如果不需要显示操作列，请给它赋值false：实现是通过v-if="operateData"
        operateData: [
          {
            name: '查看',
            icon: 'el-icon-edit',
            type: '' // 按钮样式类型
          },
          {
            name: '删除',
            icon: 'el-icon-delete',
            type: 'danger' // 按钮样式类型
          }
        ],
        //  operateData:false

        // 分页信息：传递分页信息控制子组件分页器的渲染,当不需要显示分页控件的时候：比如页数为1或者是没有分页
        // 手动设置 isShowPage:false
        pageInfos: {
          totalPage: 0, // 总数
          pageSize: [6], // 定义可以调整每一页显示数目
          isShowPage: false // false：不显示分页控件
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    getUsers() {
      this.loadingState = true
      getUser().then((result) => {
        console.log(result)
        this.loadingState = false
        this.showDatas.roleDatas = result.posts
      }).catch((err) => {
        this.loadingState = false
        console.log(err)
      })
    },
    operateFun(ind, type) {
      if (type === '查看') {
        this.$message({
          type: 'info',
          message: '查看'
        })
      } else {
        this.$message({
          type: 'info',
          message: '删除'
        })
      }
    },
    changeSize(size) {
      this.$message({
        type: 'info',
        message: `每页 ${size} 条`
      })
    },
    /**
     * @description: 改变当前的页码
     * @param {type}
     * @return:
     */
    changPage(currentPage) {
      this.$message({
        type: 'info',
        message: `当前页码:${currentPage}`
      })
    }
  }
}
</script>

<style  scoped>
.mg{
    margin-top: 30px;
    padding: 0 150px;
}
</style>

