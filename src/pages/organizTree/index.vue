<template>
  <div class="orgTree">
    <e-alert description="点击部门进行操作"></e-alert>
    <div>
      <el-switch
        v-model="horizontal"
        active-text="垂直展开"
        inactive-text="水平展开">
      </el-switch>
      <el-switch
        v-model="collapsable"
        active-text="可收缩"
        inactive-text="不可收缩">
      </el-switch>
      <el-switch
        v-model="expandAll"
        active-text="收缩所有"
        inactive-text="展开所有">
      </el-switch>
    </div>
    <div class="orgTree-box">
    <org-tree :data="data" :nodeRender="nodeRender" :expand-all="expandAll" :horizontal="horizontal" :collapsable="collapsable"  @on-node-click="handleNodeClick"></org-tree>
    </div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <div>
          <ul v-for="item in menuList" :key="item.key">
            <li>{{item.label}}</li>
          </ul>
        </div>
    </el-dialog>
  </div>
</template>
<script>
  import OrgTree from 'v-org-tree'
  import EAlert from '@/components/el_alert'
  import 'v-org-tree/dist/v-org-tree.css'
  const menuList = [
    {
      key: 'edit',
      label: '编辑部门'
    },
    {
      key: 'new',
      label: '新增子部门'
    },
    {
      key: 'delete',
      label: '删除部门'
    }
  ];
  export default {
    components: {
      OrgTree,
      EAlert
    },
    data() {
      return {
        horizontal: false,
        collapsable: false,
        dialogVisible: false,
        expandAll: true,
        menuList:[
          {
            key: 'edit',
            label: '编辑部门'
          },
          {
            key: 'detail',
            label: '查看部门'
          },
          {
            key: 'new',
            label: '新增子部门'
          },
          {
            key: 'delete',
            label: '删除部门'
          }
        ],
        data: {
          id: 1,
          label: "快之网",
          children: [
            {
              id: 2,
              label: '研发部',
              children: []
            },
            {
              id: 3,
              label: '技术部',
              children: [
                {
                  id: 31,
                  label: '运维',
                  children: []
                },
                {
                  id: 32,
                  label: '测试',
                  children: []
                }
              ]
            },
            {
              id:4,
              label: '商务部',
              children: []
            }
          ]
        }
      }
    },
    methods: {
      nodeRender(h,data) {
        return (
          <el-dropdown trigger="click" on-command={this.dropDownClick}>
          <span class="el-dropdown-link">
          {data.label}
          </span>
          <el-dropdown-menu slot="dropdown">
          {menuList.map(item => {
             return <el-dropdown-item command={{data: data, type: item.key}}>{item.label}</el-dropdown-item>
          })}
        </el-dropdown-menu>
        </el-dropdown>
        )
      },
      handleNodeClick(e,data,expand) {
        console.log(data)
        // this.dialogVisible = true
      },
      dropDownClick(row) {
        const _this = this;
        if(row.type=='delete') {
          this.$confirm('此操作将永久删除此部门, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message.success('点击了'+row.data.label+'删除')
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        } else if(row.type == 'edit') {
          this.$prompt('请编辑部门名称', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputValue: row.data.label
          }).then(({ value }) => {
            row.data.label = value
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        } else if (row.type == 'new') {
          this.$prompt('请编辑部门名称', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            row.data.children.push({
              id: row.data.id++,
              label: value,
              children: []
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        }
      },
    }
  }
</script>
<style lang="less">
  .orgTree{
    padding: 15px;
    .orgTree-box{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .org-tree{
      .org-tree-node-label .org-tree-node-label-inner{
        background: #738699;
        color:#f1f1f1;
        cursor: pointer;
      }
    }
    .el-switch{
      margin: 10px;
    }
    .el-dropdown{
      color:#fff;
    }

  }

</style>
