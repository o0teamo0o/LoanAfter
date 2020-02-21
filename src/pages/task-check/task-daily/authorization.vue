<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>授权汇总</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-block>授信汇总情况</f7-block>
    <f7-card>
      <f7-row class="total-info">
        <f7-col width="25">授信总额：0.00</f7-col>
        <f7-col width="25">授信敞口：0.00</f7-col>
        <f7-col width="25">已用额度：0.00</f7-col>
        <f7-col width="25">可用额度：0.00</f7-col>
      </f7-row>
      <el-table :data="taskList" border>
        <el-table-column fixed prop="date" label="合同编号" width="150"></el-table-column>
        <el-table-column prop="name" label="借据编号" width="150"></el-table-column>
        <el-table-column prop="province" label="业务品种" width="105"></el-table-column>
        <el-table-column prop="city" label="放款金额" width="130"></el-table-column>
        <el-table-column prop="address" label="余额" width="130"></el-table-column>
        <el-table-column prop="zip" label="币种" width="70"></el-table-column>
        <el-table-column prop="jclx" label="起始日期" width="100"></el-table-column>
        <el-table-column prop="M" label="到期日期" width="100"></el-table-column>
        <el-table-column prop="riqi" label="逾期(垫款)本金" width="130"></el-table-column>
        <el-table-column prop="state" label="逾期利息" width="130"></el-table-column>
      </el-table>
    </f7-card>

    <f7-block>授信放款条件</f7-block>
    <f7-card>
      <el-table :data="taskList" border>
        <el-table-column fixed prop="date" label="授信编号" width="150"></el-table-column>
        <el-table-column prop="zip" label="序号" width="70"></el-table-column>
        <el-table-column prop="province" label="内容" width="583"></el-table-column>
      </el-table>
    </f7-card>

    <f7-block>放款后管理条件</f7-block>
    <f7-card>
      <el-table :data="taskList" border>
        <el-table-column fixed prop="date" label="授信编号" width="150"></el-table-column>
        <el-table-column prop="zip" label="序号" width="70"></el-table-column>
        <el-table-column prop="province" label="内容" width="300"></el-table-column>
        <el-table-column label="落实情况" width="300">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-select
              v-model="scope.row.practicable"
              placeholder="--请选择--"
              @change="onPracticableChange"
            >
              <el-option
                v-for="item in checkTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="province" label="说明" width="300"></el-table-column>
      </el-table>
    </f7-card>

    <f7-block>其他金融机构授信情况</f7-block>
    <f7-card>
      <el-table :data="taskList" border>
        <el-table-column fixed prop="date" label="机构名称" width="150"></el-table-column>
        <el-table-column prop="name" label="授信品种" width="150"></el-table-column>
        <el-table-column prop="city" label="放款金额" width="130"></el-table-column>
        <el-table-column prop="address" label="余额" width="130"></el-table-column>
        <el-table-column prop="jclx" label="起始日期" width="100"></el-table-column>
        <el-table-column prop="M" label="到期日期" width="100"></el-table-column>
        <el-table-column prop="riqi" label="逾期(垫款)本金" width="130"></el-table-column>
        <el-table-column prop="state" label="逾期利息" width="130"></el-table-column>
      </el-table>
    </f7-card>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      taskList: [
        {
          type: 0,
          date: "MC007000009191",
          name: "JC001000009548",
          province: "流动资金贷款",
          city: "4,000,000.00",
          address: "200,000.00",
          zip: "人民币",
          jclx: "2016-01-07",
          M: "2017-01-16",
          riqi: "200,000.00",
          state: "19,888.00",
          practicable: "--请选择--"
        }
      ],
      checkTypes: [
        {
          value: "0",
          label: "落实"
        },
        {
          value: "1",
          label: "部分落实"
        },
        {
          value: "2",
          label: "未落实"
        }
      ], //检查类型
      checkType: "" //检查类型
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customType) {
          that.customType = page.route.query.customType;
          console.log("授权汇总页面获取到的参数:", that.customType);
        }
      });
    });
  },
  methods: {
    onPracticableChange(index) {
      if (index == 1) {
        this.$f7.dialog.alert("请说明原因");
      }
    },
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
.total-info {
  line-height: 45px;
  text-align: center;
  color: #333 !important;
}
</style>