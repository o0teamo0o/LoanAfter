<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>担保信息</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-card>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>是否现场查看担保物:
          </f7-col>
          <f7-col width="10"></f7-col>
          <f7-col width="60">
            <el-radio-group v-model="productionInfo">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </f7-col>
        </f7-row>
      </div>
    </f7-card>

    <f7-block>保证人信息</f7-block>
    <f7-card class="financial-layout">
      <el-table :data="taskList" border>
        <el-table-column fixed prop="date" label="编号" width="150"></el-table-column>
        <el-table-column prop="name" label="保证人客户号" width="150"></el-table-column>
        <el-table-column prop="province" label="保证人名称" width="105"></el-table-column>
        <el-table-column prop="city" label="信用等级" width="130"></el-table-column>
        <el-table-column prop="address" label="担保资金" width="130"></el-table-column>
        <el-table-column prop="zip" label="币种" width="70"></el-table-column>
        <el-table-column fixed="right" prop="jclx" label="操作" width="100"></el-table-column>
      </el-table>
    </f7-card>

    <f7-block>履约能力/保证能力变化情况分析</f7-block>
    <f7-card>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>履约能力变化情况分析:
          </f7-col>
          <f7-col width="70" class="performance-col">
            <el-checkbox-group v-model="marketChange" class="market-checkbox-layout">
              <el-checkbox label="保证人主要管理层和管理结构发生重大不利变化"></el-checkbox>
              <el-checkbox label="保证人出现兼并、重组或分立情况"></el-checkbox>
              <el-checkbox label="无变化"></el-checkbox>
            </el-checkbox-group>
          </f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>保证能力变化情况分析:
          </f7-col>
          <f7-col width="70" class="performance-col">
            <el-checkbox-group v-model="marketChange" class="market-checkbox-layout">
              <el-checkbox label="保证人销售收入（营业收入）下滑或出现亏损"></el-checkbox>
              <el-checkbox label="保证人在我行或他行的贷款出现逾期"></el-checkbox>
              <el-checkbox label="保证人被其他金融机构起诉"></el-checkbox>
              <el-checkbox label="保证人违反保证合同或丧失承担连带担保责任能力"></el-checkbox>
              <el-checkbox label="保证人陷入重大赔偿、诉讼、重大或有负债"></el-checkbox>
              <el-checkbox label="保证人因其他重大风险事项导致重大损失"></el-checkbox>
              <el-checkbox label="无变化"></el-checkbox>
            </el-checkbox-group>
          </f7-col>
        </f7-row>
      </div>
    </f7-card>

    <f7-block>抵押物信息</f7-block>
    <f7-card class="financial-layout">
      <el-table :data="taskList" border>
        <el-table-column fixed prop="date" label="编号" width="150"></el-table-column>
        <el-table-column prop="name" label="押品编号" width="150"></el-table-column>
        <el-table-column prop="province" label="押品名称" width="105"></el-table-column>
        <el-table-column prop="city" label="押品所有人" width="130"></el-table-column>
        <el-table-column prop="address" label="估计价值" width="130"></el-table-column>
        <el-table-column prop="zip" label="币种" width="70"></el-table-column>
        <el-table-column prop="jclx" label="评估时间" width="100"></el-table-column>
        <el-table-column fixed="right" prop="jclx" label="操作" width="100"></el-table-column>
      </el-table>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>抵（质）押物变化情况分析:
          </f7-col>
          <f7-col width="70">
            <el-checkbox-group v-model="marketChange" class="market-checkbox-layout">
              <el-checkbox label="未经我行同意，抵押物权属变更为他人"></el-checkbox>
              <el-checkbox label="未经我行同意，借款人擅自将抵押物出租"></el-checkbox>
              <el-checkbox label="抵押物部分或全部缺失，或不再具备有效抵押的条件"></el-checkbox>
              <el-checkbox label="抵押物被其他金融机构或企业查封"></el-checkbox>
              <el-checkbox label="抵押物登记已失效"></el-checkbox>
              <el-checkbox label="抵（质）押物保险期限已过期"></el-checkbox>
              <el-checkbox label="抵质押物公允价值（或市场价格）发生明显变化"></el-checkbox>
              <el-checkbox label="抵押物闲置，土地使用权抵押物新增建筑物"></el-checkbox>
              <el-checkbox label="抵（质）押物重估价值无法覆盖贷款本息"></el-checkbox>
              <el-checkbox label="无变化"></el-checkbox>
            </el-checkbox-group>
          </f7-col>
        </f7-row>
      </div>
    </f7-card>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      taskList: [],
      productionInfos: [
        {
          value: "0",
          label: "保证人主要管理层和管理结构发生重大不利变化"
        },
        {
          value: "1",
          label: "保证人出现兼并、重组或分立情况"
        },
        {
          value: "2",
          label: "无变化"
        }
      ], //检查类型
      productionInfo: "", //检查类型
      capacityChanges: [
        {
          value: "0",
          label: "保证人销售收入（营业收入）下滑或出现亏损"
        },
        {
          value: "1",
          label: "保证人在我行或他行的贷款出现逾期"
        },
        {
          value: "2",
          label: "保证人被其他金融机构起诉"
        },
        {
          value: "3",
          label: "保证人违反保证合同或丧失承担连带担保责任能力"
        },
        {
          value: "4",
          label: "保证人陷入重大赔偿、诉讼、重大或有负债"
        },
        {
          value: "5",
          label: "保证人因其他重大风险事项导致重大损失"
        },
        {
          value: "6",
          label: "无变化"
        }
      ], //检查类型
      capacityChange: "", //检查类型
      marketChange: []
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customType) {
          that.customType = page.route.query.customType;
          console.log("担保信息页面获取到的参数:", that.customType);
        }
      });
    });
  },
  methods: {
    /**
     * 页面返回事件
     */
    onBack() {
      this.$f7.views.main.router.back();
      this.$f7.views.left.router.back();
    },

    /**
     * 数据保存事件
     */
    onSave() {}
  }
};
</script>
<style lang='less'>
.performance-col .el-input {
  width: 400px !important;
}
</style>