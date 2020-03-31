<template>
  <f7-page>
    <f7-navbar title="机构选择" back-link="返回"></f7-navbar>
    <f7-card>
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="onNodeClick"
        node-key="id"
        :default-expanded-keys="[1]"
      ></el-tree>
    </f7-card>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          label: "总部",
          children: [
            {
              label: "总行法律事务部"
            },
            {
              label: "总行金融市场部"
            },
            {
              label: "总行稽核管理部"
            },
            {
              label: "总行运营管理部"
            },
            {
              label: "总行风险管理部"
            },
            {
              label: "总行授信管理部"
            },
            {
              label: "总行中小企业业务管理部"
            },
            {
              label: "总行零售业务管理部"
            },
            {
              label: "总行公司业务管理部"
            },
            {
              label: "筹备组",
              children: [
                {
                  label: "业务组-公司业务管理部"
                }
              ]
            },
            {
              label: "总行国际业务部"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    onNodeClick(data) {
      console.error(data);
      this.$f7.views.main.router.back({
        pageName: "detaile", //页面的data-page值
      });
    }
  }
};
</script>

<style lang="less">
@import "../../../css/base.less";
.el-tree-node__content {
  height: 32px !important;
  border-bottom: 1px dashed #e4e4e4 !important;
}
</style>
