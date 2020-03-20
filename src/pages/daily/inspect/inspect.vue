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

    <f7-card class="production-layout">
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>检查情况描述:
        </f7-col>
        <f7-col width="75">
          <el-input type="textarea" :rows="2" placeholder="请输入检查情况描述" v-model="inspectInfo"></el-input>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>预警信号是否处理:
        </f7-col>
        <f7-col width="70">
          <el-radio-group v-model="productionInfo">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>建议措施:
        </f7-col>
        <f7-col width="75">
          <el-input type="textarea" :rows="2" placeholder="请输入建议措施" v-model="measures"></el-input>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>授信建议:
        </f7-col>
        <f7-col width="25" class="interest-col">
          <el-select v-model="proposal" placeholder="--请选择--">
            <el-option
              v-for="item in proposals"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>检查结论:
        </f7-col>
        <f7-col width="25" class="interest-col">
          <el-select v-model="conclusion" placeholder="--请选择--">
            <el-option
              v-for="item in conclusions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
      </f7-row>
    </f7-card>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      inspectInfo: "",
      measures: "",
      proposals: [
        {
          value: "0",
          label: "增加"
        },
        {
          value: "1",
          label: "维持"
        },
        {
          value: "2",
          label: "压缩"
        },
        {
          value: "3",
          label: "退出"
        }
      ], //任务状态
      proposal: "", //任务状态
      conclusions: [
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
      ], //任务状态
      conclusion: "", //任务状态
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