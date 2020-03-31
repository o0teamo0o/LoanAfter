<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>添加借据</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-block>检查任务查询</f7-block>
    <f7-card class="production-layout">
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>客户名称:
        </f7-col>
        <f7-col width="25" @click="onSearch">
          <el-input
            style="width:100% !important;"
            suffix-icon="el-icon-search"
            v-model="customName"
            :value="customName"
            disabled
            clearable
            placeholder="回显"
          ></el-input>
        </f7-col>
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>客户编号:
        </f7-col>
        <f7-col width="25">
          <el-input
            style="width:100% !important;"
            v-model="customNo"
            :value="customNo"
            clearable
            disabled
            placeholder="回显"
          ></el-input>
        </f7-col>
      </f7-row>
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>检查类型:
        </f7-col>
        <f7-col width="25">
          <el-input
            style="width:100% !important;"
            v-model="checkType"
            :value="checkType"
            disabled
            clearable
            placeholder="资金用途检查"
          ></el-input>
        </f7-col>
        <f7-col width="25" class="key"></f7-col>
        <f7-col width="25"></f7-col>
      </f7-row>
      <f7-row class="btn-layout">
        <f7-col width="25"></f7-col>
        <f7-col width="20" tag="span">
          <f7-button large raised fill color="gray" @click="onResetTask">重置</f7-button>
        </f7-col>
        <f7-col width="10"></f7-col>
        <f7-col width="20" tag="span">
          <f7-button large raised fill color="red" @click="onQueryTask">查询</f7-button>
        </f7-col>
        <f7-col width="25"></f7-col>
      </f7-row>
    </f7-card>

    <f7-block>客户查询列表</f7-block>
    <f7-card>
      <el-table :data="taskList" border>
        <el-table-column fixed type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="客户编号" min-width="110"></el-table-column>
        <el-table-column prop="name" label="客户名称" min-width="110"></el-table-column>
        <el-table-column prop="province" label="客户类型" min-width="105"></el-table-column>
        <el-table-column prop="city" label="借据编号" min-width="180"></el-table-column>
        <el-table-column prop="address" label="业务种类" min-width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <f7-link
              class="btn-link"
              data-force="true"
              data-push-state="true"
              @click="onItemClick(scope.row)"
            >保存</f7-link>
          </template>
        </el-table-column>
      </el-table>
    </f7-card>
  </f7-page>
</template>


<script>
export default {
  data() {
    return {
      customName: "",
      customNo: "",
      checkType: "",
      taskList: [
        {
          type: 0,
          date: "公司类客户",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        },
        {
          type: 1,
          date: "事业法人客户",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        }
      ]
    };
  },
  methods: {
    onSearch() {
      this.$f7router.navigate({
        name: "TaskCapitalCustomerSelectionPage",
        query: { customType: "我是参数" }
      });
    },

    /**
     * 重置按钮
     */
    onResetTask() {

    },
    /**
     * 查询按钮
     */
    onQueryTask() {

    },
    /**
     * 页面返回事件
     */
    onBack() {
      this.$f7.views.main.router.back();
    },

    /**
     * 数据保存事件
     */
    onSave() {}
  }
};
</script>

<style lang='less'>
</style>