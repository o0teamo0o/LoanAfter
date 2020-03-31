<template>
  <f7-page>
    <f7-navbar title="客户查询" back-link="返回"></f7-navbar>

    <f7-block>客户查询</f7-block>
    <f7-card class="production-layout">
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>客户类别:
        </f7-col>
        <f7-col width="30" class="interest-col">
          <el-select
            v-model="customType"
            placeholder="--请选择--"
            style="width:100% !important;"
            @change="onCustomTypeChange"
          >
            <el-option
              v-for="item in customTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>所属机构:
        </f7-col>
        <f7-col width="30" @click="onMechanismSearch">
          <el-input
            style="width:90% !important;"
            v-model="mechanism"
            :value="mechanism"
            suffix-icon="el-icon-search"
            clearable
            disabled
            placeholder="--请选择--"
          ></el-input>
        </f7-col>
      </f7-row>
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>客户名称:
        </f7-col>
        <f7-col width="30">
          <el-input
            style="width:90% !important;"
            v-model="customName"
            :value="customName"
            clearable
            placeholder="请输入客户名称"
          ></el-input>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>客户编号:
        </f7-col>
        <f7-col width="30">
          <el-input
            style="width:90% !important;"
            v-model="customNo"
            :value="customNo"
            clearable
            placeholder="请输入客户编号"
          ></el-input>
        </f7-col>
      </f7-row>
      <f7-row v-if="isShowPersonal" class="item-layout">
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>证件类型:
        </f7-col>
        <f7-col width="30" class="interest-col" @click="onCertificateSearch">
          <el-input
            style="width:90% !important;"
            suffix-icon="el-icon-search"
            v-model="certificate"
            :value="certificate"
            disabled
            clearable
            placeholder="--请选择--"
          ></el-input>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>证件号码:
        </f7-col>
        <f7-col width="30">
          <el-input
            style="width:90% !important;"
            v-model="identification"
            :value="identification"
            clearable
            placeholder="请输入证件号码"
          ></el-input>
        </f7-col>
      </f7-row>
      <f7-row v-if="isShowPublic" class="item-layout">
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>证件类型:
        </f7-col>
        <f7-col width="30" class="interest-col">
          <el-select
            v-model="certificate"
            placeholder="--请选择--"
            style="width:100% !important;"
          >
            <el-option
              v-for="item in certificates"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>证件号码:
        </f7-col>
        <f7-col width="30">
          <el-input
            style="width:90% !important;"
            v-model="identification"
            :value="identification"
            clearable
            placeholder="请输入证件号码"
          ></el-input>
        </f7-col>
      </f7-row>
      <f7-row class="btn-layout">
        <f7-col width="25"></f7-col>
        <f7-col width="20" tag="span">
          <f7-button large raised fill color="gray" @click="onResetTask"
            >重置</f7-button
          >
        </f7-col>
        <f7-col width="10"></f7-col>
        <f7-col width="20" tag="span">
          <f7-button large raised fill color="red" @click="onQueryTask"
            >查询</f7-button
          >
        </f7-col>
        <f7-col width="25"></f7-col>
      </f7-row>
    </f7-card>

    <f7-block>客户查询列表</f7-block>
    <f7-card>
      <el-table :data="taskList" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          prop="date"
          label="客户编号"
          min-width="110"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="客户名称"
          min-width="110"
        ></el-table-column>
        <el-table-column
          prop="province"
          label="客户类型"
          min-width="105"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <f7-link
              class="btn-link"
              data-force="true"
              data-push-state="true"
              @click="onItemClick(scope.row)"
              >保存</f7-link
            >
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
      customTypes: [
        {
          value: "0",
          label: "个人客户"
        },
        {
          value: "1",
          label: "对公客户"
        }
      ],
      customType: "",
      mechanism: "",
      customName: "",
      customNo: "",
      identification: "",
      isShowPersonal: false, //是否显示个人
      isShowPublic: false, //是否显示对公
      certificates: [
        {
          value: "0",
          label: "组织机构代码"
        },
        {
          value: "1",
          label: "其他类机构代码"
        },
        {
          value: "2",
          label: "统一社会信用代码"
        }
      ],
      certificate: "",
      taskList: []
    };
  },
  methods: {
    /**
     * 客户类别选择监听
     */
    onCustomTypeChange(index) {
      if (index == "0") {
        this.isShowPersonal = true;
        this.isShowPublic = false;
      } else {
        this.isShowPersonal = false;
        this.isShowPublic = true;
      }
    },
    /**
     * 所属机构监听
     */
    onMechanismSearch() {
      this.$f7router.navigate({
        name: "TaskCapitalMechanismSelectionPage",
        query: { customType: "我是参数" }
      });
    },
    /**
     * 证件类型检查
     */
    onCertificateSearch() {
      this.$f7router.navigate({
        name: "TaskCapitalCertificateSelectionPage",
        query: { customType: "我是参数" }
      });
    },
    /**
     * 重置按钮
     */
    onResetTask() {},
    /**
     * 查询按钮
     */
    onQueryTask() {}
  }
};
</script>
