<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>风险分类</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-block>五级分类情况</f7-block>
    <f7-card>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>不良信用情况:
          </f7-col>
          <!-- <f7-col width="10"></f7-col> -->
          <f7-col width="70">
            <el-radio-group v-model="productionInfo" @change="onRadigChange">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </f7-col>
        </f7-row>
        <f7-row v-show="isShowChangeInfo" class="item-layout">
          <f7-col width="25" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>情况说明:</f7-col>
          <f7-col width="75">
            <el-input type="textarea" :rows="2" placeholder="请输入不良信用情况" v-model="badCredit"></el-input>
          </f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            <i class="ignore">*&nbsp;&nbsp;</i>分类结果(上期):
          </f7-col>
          <f7-col width="25">
            <el-input
              style="width:90% !important;"
              v-model="supplier"
              disabled
              :value="supplier"
              clearable
              placeholder="回显"
            ></el-input>
          </f7-col>
          <f7-col width="25" class="key">
            <i class="ignore">*&nbsp;&nbsp;</i>分类结果(本期):
          </f7-col>
          <f7-col width="25">
            <el-input
              style="width:90% !important;"
              v-model="result"
              :value="result"
              disabled
              placeholder="回显"
              clearable
            ></el-input>
          </f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            <i class="ignore">*&nbsp;&nbsp;</i>分类理由:
          </f7-col>
          <f7-col width="75">
            <el-input type="textarea" :rows="2" placeholder="请描述变化及其原因" v-model="reason"></el-input>
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
      badCredit: "",
      reason: "",
      result: "",
      supplier: "",
      isShowChangeInfo: false,
      productionInfos: [
        {
          value: "0",
          label: "是"
        },
        {
          value: "1",
          label: "否"
        }
      ], //检查类型
      productionInfo: "否" //检查类型
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customType) {
          that.customType = page.route.query.customType;
          console.log("风险分类页面获取到的参数:", that.customType);
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

    onRadigChange(index) {
      if (index == "是") {
        this.isShowChangeInfo = true;
      } else {
        this.isShowChangeInfo = false;
      }
    },

    /**
     * 数据保存事件
     */
    onSave() {}
  }
};
</script>