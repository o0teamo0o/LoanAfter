<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>行业地位</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-block>客户资质</f7-block>
    <f7-card class="production-layout">
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>机构类型:
        </f7-col>
        <f7-col width="75">
          <f7-row class="item-layout">
            <f7-col width="20" class="key">
              <i class="ignore">*&nbsp;&nbsp;</i>医院
            </f7-col>
            <f7-col width="80"> </f7-col>
          </f7-row>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>

      <!-- <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>医院级别:
        </f7-col>
        <f7-col width="75">
          <el-radio-group v-model="inputManagement">
            <el-radio label="三级">三级</el-radio>
            <el-radio label="二级">二级</el-radio>
            <el-radio label="一级">一级</el-radio>
          </el-radio-group>
        </f7-col>
      </f7-row>
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>医院等级:
        </f7-col>
        <f7-col width="75">
              <el-radio-group v-model="inputManagement">
                <el-radio label="甲等">甲等</el-radio>
                <el-radio label="乙等">乙等</el-radio>
                <el-radio label="丙等">丙等</el-radio>
              </el-radio-group>
        </f7-col>
      </f7-row>
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>高等院校级别:
        </f7-col>
        <f7-col width="75">
              <el-radio-group v-model="inputManagement">
                <el-radio label="一本院校">一本院校</el-radio>
                <el-radio label="二本院校">二本院校</el-radio>
                <el-radio label="其他">其他</el-radio>
              </el-radio-group>
        </f7-col>
      </f7-row>
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>中小学级别:
        </f7-col>
        <f7-col width="75">
              <el-radio-group v-model="inputManagement">
                <el-radio label="一本院校">国家级重点</el-radio>
                <el-radio label="二本院校">省级重点</el-radio>
                <el-radio label="其他">市级重点</el-radio>
                <el-radio label="其他">其他</el-radio>
              </el-radio-group>
        </f7-col>
      </f7-row> -->

      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>机构等级:
        </f7-col>
        <f7-col width="75">
          <f7-row class="item-layout">
            <f7-col width="20" class="key">
              <i class="ignore">*&nbsp;&nbsp;</i>医院级别:
            </f7-col>
            <f7-col width="80">
              <el-radio-group v-model="hospitalLevel">
                <el-radio label="三级">三级</el-radio>
                <el-radio label="二级">二级</el-radio>
                <el-radio label="一级">一级</el-radio>
              </el-radio-group>
            </f7-col>
          </f7-row>
          <f7-row class="item-layout">
            <f7-col width="20" class="key">
              <i class="ignore">*&nbsp;&nbsp;</i>医院等级:
            </f7-col>
            <f7-col width="80">
              <el-radio-group v-model="hospitalGrade">
                <el-radio label="甲等">甲等</el-radio>
                <el-radio label="乙等">乙等</el-radio>
                <el-radio label="丙等">丙等</el-radio>
              </el-radio-group>
            </f7-col>
          </f7-row>
          <f7-row class="item-layout">
            <f7-col width="20" class="key">
              <i class="ignore">*&nbsp;&nbsp;</i>高等院校级别:
            </f7-col>
            <f7-col width="80">
              <el-radio-group v-model="collegesLevel">
                <el-radio label="一本院校">一本院校</el-radio>
                <el-radio label="二本院校">二本院校</el-radio>
                <el-radio label="其他">其他</el-radio>
              </el-radio-group>
            </f7-col>
          </f7-row>
          <f7-row class="item-layout">
            <f7-col width="20" class="key">
              <i class="ignore">*&nbsp;&nbsp;</i>中小学级别:
            </f7-col>
            <f7-col width="80">
              <el-radio-group v-model="schoolLevel">
                <el-radio label="一本院校">国家级重点</el-radio>
                <el-radio label="二本院校">省级重点</el-radio>
                <el-radio label="其他">市级重点</el-radio>
                <el-radio label="其他">其他</el-radio>
              </el-radio-group>
            </f7-col>
          </f7-row>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>年就诊人数/年招生人数:
        </f7-col>
        <f7-col width="75">
          <f7-row class="item-layout">
            <f7-col width="30" class="key">
              <el-input
                style="width:90% !important;"
                v-model="recruitStudents"
                :value="recruitStudents"
                clearable
                placeholder="请输入招生人数"
              ></el-input>
            </f7-col>
            <f7-col width="60">
              <el-radio-group v-model="compareNo">
                <el-radio label="较往年上升">较往年上升</el-radio>
                <el-radio label="校往年持平">校往年持平</el-radio>
                <el-radio label="校往年下降">校往年下降</el-radio>
              </el-radio-group>
            </f7-col>
          </f7-row>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>区域环境:
        </f7-col>
        <f7-col width="75">
          <el-radio-group class="long-group" v-model="environment">
            <el-radio label="1"
              >在本地区处于先进水平,综合竞争实力增强</el-radio
            >
            <el-radio label="2"
              >在本地区处于一般水平,综合竞争实力一般</el-radio
            >
            <el-radio label="3"
              >在本地区处于落后水平,综合竞争实力下降</el-radio
            >
          </el-radio-group>
        </f7-col>
      </f7-row>
    </f7-card>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      hospitalLevel: "三级",
      hospitalGrade: "甲等",
      collegesLevel: "一本院校",
      schoolLevel: "国家级重点",
      recruitStudents: "", //招生人数
      compareNo: "校往年上升",
      environment: "1",
    }
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

<style lang="less">
.long-group > .el-radio {
  display: block;
  line-height: 30px;
}
</style>
