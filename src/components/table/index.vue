<template>
    <div>
      <el-card class="box-card">
        <div class="table-head"><slot name="head"></slot></div>
        <el-table
            :data="tableData"
            border           
            v-loading="isLoading"
            style="width: 100%">
            <slot></slot>
        </el-table>
        <div class="block pageSize" v-show="isShow">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="paginationData.page"
            text-align="right"
            :page-sizes="[10, 20, 30, 50, 100]"
            :page-size="paginationData.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="paginationData.total">
            </el-pagination>
        </div>
      </el-card>
    </div>
</template>
<script>
  export default {
    props: {
        dataUrl: {
            type: String,
            default: null
        },
        search: {
            type: Object,
            default: null
        }
    },
    watch: {  
  　　search: {  
　　　　handler(newValue, oldValue) {  
　　　　 　for(var key in newValue){
            this.paginationData[key] = newValue[key]
          }
          this.paginationData.page = 1
          this.handlePageSizeChange()　  
　　　　},  
　　　　deep: true  
  　　}  
    }, 
    created () {
      this.handlePageSizeChange()
    },
    data () {
      return {
        tableData: null,
        isShow: false,
        paginationData: {
          page: 1,
          num: 10,
          total: 0,
         
        },
        isLoading: true
      }
    },
    methods: {
      // 改变页码
      handleSizeChange (val) {
        this.paginationData.size = val
        this.handlePageSizeChange()
      },
      // 改变当前页
      handleCurrentChange (val) {
        this.paginationData.page = val
        this.handlePageSizeChange()
      },
      // 改变数据
      handlePageSizeChange () {   
        this.isLoading = true
        this.$http.post(this.dataUrl, Object.assign({cloud_type: 'tianyiyun'}, {data: JSON.stringify(this.paginationData)}))
          .then(res => {
            console.log(res)
            this.isLoading = false
            if (res.total>=1) {
                this.isShow = true
              } else{
                this.isShow = false
              }
              this.paginationData.total = res.total 
              this.tableData = res.data     
            })
          .catch(err => {
            this.isLoading = false
            console.log(err)
          })
        }
    }
  }
</script>
<style lang="less" scoped>
  .table-head{
    margin-bottom:15px;
  }
  .pageSize{
    margin-top:10px;
  }
</style>
