<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>贷后检查信息</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-block
      medium-inset
    >&#8195;&#8195;检查人在此声明与保证：此检查表是按照本行的规定要求，根据客户提供的资料和手机的相关信息，经检查人审慎调查、核实、分析整理完成。检查人对检查表内容完整性、资料的真实性、判断的合理性负责。</f7-block>

    <f7-card class="check-layout list">
      <f7-row class="item-layout">
        <f7-col width="50" class="title">
          <i class="ignore">*</i>
          <span class="hint">检查行</span>
          <el-input disabled clearable value="回显数据"></el-input>
        </f7-col>
        <f7-col width="50" class="title">
          <i class="ignore">*</i>
          <span class="hint">检查人</span>
          <el-input disabled clearable value="回显数据"></el-input>
        </f7-col>
      </f7-row>
      <f7-row class="item-layout">
        <f7-col width="50" class="title">
          <i class="keynote">*</i>
          <span class="hint">检查方式</span>
          <el-select v-model="checkType" placeholder="--请选择--">
            <el-option
              v-for="item in checkTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
        <f7-col width="50" class="title">
          <i class="keynote">*</i>
          <span class="hint">检查日期</span>
          <el-date-picker
            v-model="checkDate"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </f7-col>
      </f7-row>
      <f7-row class="item-layout">
        <f7-col width="50" class="title">
          <i class="keynote">*</i>
          <span class="hint">面谈对象职务</span>
          <el-select v-model="checkType" placeholder="--请选择--">
            <el-option
              v-for="item in checkTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
        <f7-col width="50" class="title">
          <i class="ignore">*</i>
          <span class="hint">联合检查人</span>
          <el-input v-model="customerName" :value="customerName" clearable placeholder="请输入客户名称"></el-input>
        </f7-col>
      </f7-row>
    </f7-card>

    <f7-block>客户基本信息</f7-block>
    <f7-card>
      <div class="customer-info">
        <f7-row class="customer-info-item">
          <f7-col width="20" class="key">客户名称:</f7-col>
          <f7-col width="40">客户名称客户名称客户名称客户名称</f7-col>
          <f7-col width="20" class="key">客户编号:</f7-col>
          <f7-col width="20">C000011291</f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="customer-info-item">
          <f7-col width="20" class="key">行业(四级):</f7-col>
          <f7-col width="80">客户名称客户名称客户名称客户名称</f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="customer-info-item">
          <f7-col width="20" class="key">经营范围:</f7-col>
          <f7-col width="80">经营范围经营范围经营范围经营范围经营范围经营范围经营范围</f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="customer-info-item">
          <f7-col width="20" class="key">法定代表人:</f7-col>
          <f7-col width="40">法定代表人</f7-col>
          <f7-col width="20" class="key">客户信用评级(上期):</f7-col>
          <f7-col width="20">A</f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="customer-info-item">
          <f7-col width="20" class="key">客户信用评级(本期):</f7-col>
          <f7-col width="40">A+</f7-col>
          <f7-col width="20" class="key">评级有效截止日:</f7-col>
          <f7-col width="20">2020-08-08</f7-col>
        </f7-row>
      </div>
    </f7-card>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      checkDate: "",
      checkTypes: [
        {
          value: "0",
          label: "现场检查"
        },
        {
          value: "1",
          label: "非现场检查"
        }
      ], //任务状态
      checkType: "" //任务状态
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customType) {
          that.customType = page.route.query.customType;
          console.log("基本信息页面获取到的参数:", that.customType);
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
@import "../../../css/base.less";
.check-layout {
  padding: 15px 0;
}
.customer-info {
  padding: 15px 0;

  .customer-info-item {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #666;

    .key {
      font-weight: bold;
      text-align: right;
    }
  }
}
.block {
  margin: 20px 0 !important;
}
//解决input图片和文字之间距离冲突
.el-input--prefix .el-input__inner {
  padding-left: 30px !important;
}
//解决input图片和文字之间距离冲突
.el-input--suffix .el-input__inner {
  padding-right: 30px !important;
}
//解决日历控件button宽度冲突
.el-picker-panel__icon-btn {
  width: 26px;
}
</style>