<template>
  <f7-page>
    <f7-navbar title="客户查询" back-link="返回"></f7-navbar>

    <f7-block>客户查询</f7-block>
    <f7-card class="production-layout">
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>客户类别:
        </f7-col>
        <f7-col width="25" class="interest-col">
          <el-select v-model="interest" placeholder="--请选择--">
            <el-option
              v-for="item in interests"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>所属机构:
        </f7-col>
        <f7-col width="25">
          <el-input
            style="width:90% !important;"
            v-model="distributor"
            :value="distributor"
            clearable
            placeholder="请输入主要经销商"
          ></el-input>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>客户名称:
        </f7-col>
        <f7-col width="25">
          <el-input
            style="width:90% !important;"
            v-model="supplier"
            :value="supplier"
            clearable
            placeholder="请输入主要供应商"
          ></el-input>
        </f7-col>
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>客户编号:
        </f7-col>
        <f7-col width="25">
          <el-input
            style="width:90% !important;"
            v-model="distributor"
            :value="distributor"
            clearable
            placeholder="请输入主要经销商"
          ></el-input>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>证件类型:
        </f7-col>
        <f7-col width="25" class="interest-col">
          <el-select v-model="interest" placeholder="--请选择--">
            <el-option
              v-for="item in interests"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>证件号码:
        </f7-col>
        <f7-col width="25">
          <el-input
            style="width:90% !important;"
            v-model="distributor"
            :value="distributor"
            clearable
            placeholder="请输入主要经销商"
          ></el-input>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="btn-layout">
        <f7-col width="25"></f7-col>
        <f7-col width="20" tag="span">
          <f7-button large raised fill color="gray" @click="onResetTask">重置</f7-button>
        </f7-col>
        <f7-col width="10"></f7-col>
        <f7-col width="20" tag="span">
          <f7-button large raised fill color="red" @click="onQueryTask">查询</f7-button>
        </f7-col>
        <f7-col width="25"></f7-col>
      </f7-row>
    </f7-card>

    <f7-block>客户查询列表</f7-block>
    <f7-card>
      <el-table :data="taskList" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="客户编号" width="110"></el-table-column>
        <el-table-column prop="name" label="客户名称" width="110"></el-table-column>
        <el-table-column prop="province" label="客户类型" width="105"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <f7-link
              class="btn-link"
              data-force="true"
              data-push-state="true"
              @click="onItemClick(scope.row)"
            >保存</f7-link>
          </template>
        </el-table-column>
      </el-table>
    </f7-card>
  </f7-page>
</template>
<script>
export default {};
</script>