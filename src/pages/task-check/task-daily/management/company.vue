<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>客户经营情况</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-block>财务指标分类</f7-block>
    <f7-card class="financial-layout">
      <el-table :data="financeList" border>
        <el-table-column fixed prop="key" label="指标/科目" min-width="200"></el-table-column>
        <el-table-column style="padding: 0;" prop="lastYear" label="上年同期" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.lastYear"
              :value="scope.row.lastYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="earlyYear" label="年初" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.earlyYear"
              :value="scope.row.earlyYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="currentIssue" label="本期" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.currentIssue"
              :value="scope.row.currentIssue"
              clearable
            ></el-input>
          </template>
        </el-table-column>
      </el-table>
    </f7-card>

    <f7-block>偿债能力分析</f7-block>
    <f7-card class="financial-layout">
      <el-table :data="debtList" border>
        <el-table-column fixed prop="key" label="指标/科目" min-width="200"></el-table-column>
        <el-table-column style="padding: 0;" prop="lastYear" label="上年同期" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.lastYear"
              :value="scope.row.lastYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="earlyYear" label="年初" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.earlyYear"
              :value="scope.row.earlyYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="currentIssue" label="本期" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.currentIssue"
              :value="scope.row.currentIssue"
              clearable
            ></el-input>
          </template>
        </el-table-column>
      </el-table>
    </f7-card>

    <f7-block>盈利能力分析</f7-block>
    <f7-card class="financial-layout">
      <el-table :data="profitList" border>
        <el-table-column fixed prop="key" label="指标/科目" min-width="200"></el-table-column>
        <el-table-column style="padding: 0;" prop="lastYear" label="上年同期" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.lastYear"
              :value="scope.row.lastYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="earlyYear" label="年初" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.earlyYear"
              :value="scope.row.earlyYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="currentIssue" label="本期" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.currentIssue"
              :value="scope.row.currentIssue"
              clearable
            ></el-input>
          </template>
        </el-table-column>
      </el-table>
    </f7-card>

    <f7-block>成长性指标分析</f7-block>
    <f7-card class="financial-layout">
      <el-table :data="adolesceList" border>
        <el-table-column fixed prop="key" label="指标/科目" min-width="200"></el-table-column>
        <el-table-column style="padding: 0;" prop="lastYear" label="上年同期" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.lastYear"
              :value="scope.row.lastYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="earlyYear" label="年初" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.earlyYear"
              :value="scope.row.earlyYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="currentIssue" label="本期" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.currentIssue"
              :value="scope.row.currentIssue"
              clearable
            ></el-input>
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
      financeList: [
        //财务指标
        {
          type: 0, //类型
          key: "总资产",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 1, //类型
          key: "销售收入",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 2, //类型
          key: "存货",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 3, //类型
          key: "应收账款",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 4, //类型
          key: "其他应收账款",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 5, //类型
          key: "净利润",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        }
      ],
      debtList: [
        //偿债能力
        {
          type: 0, //类型
          key: "资产负债率",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 1, //类型
          key: "流动比率",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        }
      ],
      profitList: [
        //盈利能力
        {
          type: 0, //类型
          key: "总资产报酬率",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 1, //类型
          key: "销售净利率",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        }
      ],
      adolesceList: [
        //成长性能力
        {
          type: 0, //类型
          key: "利润增长率",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 1, //类型
          key: "总资产增长率",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        }
      ]
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customType) {
          that.customType = page.route.query.customType;
          console.log("客户经营页面获取到的参数:", that.customType);
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
.financial-layout .el-table td:nth-child(n + 1) {
  padding: 5px 0;
}
</style>