<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>检查结论</f7-nav-title>
      <f7-nav-right>
        <f7-button outline>保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-card>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>分类理由:
          </f7-col>
          <f7-col width="70">
            <el-input type="textarea" :rows="2" placeholder="请描述变化及其原因" v-model="evaluate"></el-input>
          </f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>预警信号处理情况:
          </f7-col>
          <f7-col width="70">
            <el-input type="textarea" :rows="2" placeholder="请描述变化及其原因" v-model="evaluate"></el-input>
          </f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>检查总结:
          </f7-col>
          <f7-col width="70">
            <el-input type="textarea" :rows="2" placeholder="请描述变化及其原因" v-model="evaluate"></el-input>
          </f7-col>
        </f7-row>
      </div>
    </f7-card>
  </f7-page>
</template>

<script>
export default {
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customType) {
          that.customType = page.route.query.customType;
          console.log("检查结论页面获取到的参数:", that.customType);
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