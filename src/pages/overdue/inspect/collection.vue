<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>逾期催收检查</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-block>逾期催收业务单元</f7-block>
    <f7-card class="production-layout">
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>客户名称:
        </f7-col>
        <f7-col width="30">
          <el-input
            style="width:90% !important;"
            v-model="supplier"
            :value="supplier"
            clearable
            disabled
            placeholder="回显"
          ></el-input>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>借据编号:
        </f7-col>
        <f7-col width="30">
          <el-input
            style="width:90% !important;"
            v-model="distributor"
            :value="distributor"
            clearable
            disabled
            placeholder="回显"
          ></el-input>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>逾期金额:
        </f7-col>
        <f7-col width="30">
          <el-input
            style="width:90% !important;"
            v-model="supplier"
            :value="supplier"
            clearable
            disabled
            placeholder="回显"
          ></el-input>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>逾期时间:
        </f7-col>
        <f7-col width="30">
          <el-input
            style="width:90% !important;"
            v-model="distributor"
            :value="distributor"
            clearable
            disabled
            placeholder="回显"
          ></el-input>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>催收对象类型:
        </f7-col>
        <f7-col width="30" class="collection-col">
          <el-select v-model="interest" placeholder="--请选择--" style="width:90% !important;">
            <el-option
              v-for="item in interests"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>催收对象名称:
        </f7-col>
        <f7-col width="30">
          <el-input
            style="width:90% !important;"
            v-model="distributor"
            :value="distributor"
            clearable
            disabled
            placeholder="回显"
          ></el-input>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>送达方式:
        </f7-col>
        <f7-col width="30" class="collection-col">
          <el-select v-model="interest" placeholder="--请选择--" style="width:90% !important;">
            <el-option
              v-for="item in interests"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>是否获取回执:
        </f7-col>
        <f7-col width="30">
          <el-input
            style="width:90% !important;"
            v-model="distributor"
            :value="distributor"
            clearable
            disabled
            placeholder="回显"
          ></el-input>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          还款意愿评价：
          <i class="keynote">*</i>
        </f7-col>
        <f7-col width="80">
          <el-input type="textarea" :rows="2" placeholder="请输入还款意愿评价" v-model="evaluate"></el-input>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          还款能力评价：
          <i class="keynote">*</i>
        </f7-col>
        <f7-col width="80">
          <el-input type="textarea" :rows="2" placeholder="请输入还款能力评价" v-model="evaluate"></el-input>
        </f7-col>
      </f7-row>
    </f7-card>
  </f7-page>
</template>
<script>
export default {
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
.collection-col .el-input {
  width: 100% !important;
}
</style>