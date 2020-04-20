<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>影像资料</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-card>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="20" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>面谈情况:
          </f7-col>
          <f7-col width="80">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="20" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>生产经营情况:
          </f7-col>
          <f7-col width="80">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="20" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>担保物情况:
          </f7-col>
          <f7-col width="80">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="20" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>财务数据:
          </f7-col>
          <f7-col width="80">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="20" class="key">
            <i class="keynote">&nbsp;&nbsp;</i>其他资料:
          </f7-col>
          <f7-col width="80">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </f7-col>
        </f7-row>
      </div>
      <f7-row class="btn-layout">
        <f7-col width="25"></f7-col>
        <f7-col width="35" tag="span">
          <el-button type="primary" @click="onMustSubmit"
            >提交基本信息及影像资料</el-button
          >
        </f7-col>
        <f7-col width="25"></f7-col>
      </f7-row>
    </f7-card>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customInfo) {
          var customInfo = JSON.parse(page.route.query.customInfo)
        }
      });
    });
  },
  methods: {
    /**
     * 必填信息提交
     */
    onMustSubmit() {
      var that = this;

      that.$f7.dialog
        .create({
          title: "温馨提示",
          text: "您已完成IPad端必填模块信息，下面的输入项模块是否通过IPad直接录入?",
          buttons: [
            {
              text: "信贷系统录入"
            },
            {
              text: "直接IPad录入"
            }
          ],
          onClick: function(dialog, index) {

          }
        })
        .open();
    },
    /**
     * 页面返回事件
     */
    onBack() {
      this.$f7.views.main.router.back();
      this.$f7.views.left.router.back();
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    /**
     * 数据保存事件
     */
    onSave() {}
  }
};
</script>
<style lang="less">
.el-upload--picture-card {
  width: 80px !important;
  height: 80px !important;
  line-height: 88px !important;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 80px !important;
  height: 80px !important;
}
</style>
