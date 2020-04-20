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
        <f7-button outline @click="onLoadCreditReporting">银行流水</f7-button>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-card>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            简要评价：
            <i class="keynote">*</i>
          </f7-col>
          <f7-col width="75">
            <el-input type="textarea" :rows="2" placeholder="请输入简要评价内容" v-model="evaluate"></el-input>
          </f7-col>
        </f7-row>
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            生产经营情况：
            <i class="keynote">*&nbsp;</i>
          </f7-col>
          <f7-col width="75">
            <el-select v-model="productionInfo" placeholder="--请选择--">
              <el-option
                v-for="item in productionInfos"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </f7-col>
        </f7-row>
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            变动较大财务指标分析：
            <i class="keynote">*</i>
          </f7-col>
          <f7-col width="75">
            <el-input
              type="textarea"
              :rows="2"
              cols="400"
              placeholder="请输入变动较大财务指标分析内容"
              v-model="variableFinance"
            ></el-input>
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
      evaluate: "", //简要评价
      productionInfos: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "基本正常"
        },
        {
          value: "2",
          label: "不正常"
        }
      ], //检查类型
      productionInfo: "", //检查类型
      variableFinance: "", //较大变动财务状况
      supplier: "", //供应商
      distributor: "", //经销商
      marketChange: [], //市场变化多选
      environment: [], //
      interests: [
        {
          value: "0",
          label: "是"
        },
        {
          value: "1",
          label: "否"
        }
      ], //任务状态
      interest: "" //任务状态
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
    onLoadCreditReporting() {},

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

.production-layout {
  padding: 10px 15px;
  color: #666;

  .item-layout {
    padding: 10px 0;
    display: flex;
    align-items: center;

    .key {
      text-align: right;
      font-weight: bold;

      .keynote,
      .ignore {
        margin-right: 0;
      }
    }
  }
}

.market-checkbox-layout .el-checkbox {
  display: block;
  line-height: 25px;
}

.interest-col .el-input {
  width: 90% !important;
}
</style>