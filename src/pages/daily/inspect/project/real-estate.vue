<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>项目管理</f7-nav-title>
      <f7-nav-right>
        <f7-button outline>增项目管理情况</f7-button>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-card>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>是否录入项目管理情况:
          </f7-col>
          <f7-col width="10"></f7-col>
          <f7-col width="60">
            <el-radio-group v-model="productionInfo">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </f7-col>
        </f7-row>
      </div>
    </f7-card>

    <f7-block>资金到位情况</f7-block>
    <f7-card class="financial-layout">
      <el-table :data="financeList" border>
        <el-table-column fixed prop="key" label="资金类型" min-width="200"></el-table-column>
        <el-table-column style="padding: 0;" prop="lastYear" label="实际到位金额" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.lastYear"
              :value="scope.row.lastYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="earlyYear" label="计划到位金额" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.earlyYear"
              :value="scope.row.earlyYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="currentIssue" label="情况" min-width="200">
          <template slot-scope="scope">
            <el-input
              style="width:90% !important;"
              v-model="scope.row.currentIssue"
              :value="scope.row.currentIssue"
              clearable
            ></el-input>
          </template>
        </el-table-column>
      </el-table>
    </f7-card>

    <f7-block>项目资金使用情况</f7-block>
    <f7-card class="financial-layout">
      <el-table :data="debtList" border>
        <el-table-column fixed prop="key" label="资金类型" min-width="200"></el-table-column>
        <el-table-column style="padding: 0;" prop="lastYear" label="使用情况" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.lastYear"
              :value="scope.row.lastYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="earlyYear" label="计划使用" min-width="200">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.earlyYear"
              :value="scope.row.earlyYear"
              clearable
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="currentIssue" label="情况" min-width="200">
          <template slot-scope="scope">
            <el-input
              style="width:90% !important;"
              v-model="scope.row.currentIssue"
              :value="scope.row.currentIssue"
              clearable
            ></el-input>
          </template>
        </el-table-column>
      </el-table>
    </f7-card>

    <f7-block>工程预计完成时间</f7-block>
    <f7-card>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>实际完工(%):
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
            <i class="keynote">*&nbsp;&nbsp;</i>计划完工(%):
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
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>截至检查日项目投产新增收入:
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
          <f7-col width="20" class="key"></f7-col>
          <f7-col width="25"></f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="35" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>"四证"办理情况:
          </f7-col>
          <f7-col width="65">
            <el-checkbox-group v-model="marketChange" class="market-checkbox-layout">
              <el-checkbox label="国有土地使用证"></el-checkbox>
              <el-checkbox label="建设用地规划许可证"></el-checkbox>
              <el-checkbox label="建设工程规划许可证"></el-checkbox>
              <el-checkbox label="建设工程施工许可证"></el-checkbox>
            </el-checkbox-group>
          </f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>项目资金是否实行专户管理:
          </f7-col>
          <f7-col width="20" class="interest-col">
            <el-select v-model="interest" placeholder="--请选择--">
              <el-option
                v-for="item in interests"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </f7-col>
          <f7-col width="25" class="key"></f7-col>
          <f7-col width="25" class="key"></f7-col>
        </f7-row>
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>专户帐号:
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
            <i class="keynote">*&nbsp;&nbsp;</i>上期余额:
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
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>资金转入:
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
            <i class="keynote">*&nbsp;&nbsp;</i>资金转出:
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
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>本期余额:
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
          <f7-col width="25" class="key"></f7-col>
          <f7-col width="25"></f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>是否按规定用途使用项目贷款:
          </f7-col>
          <f7-col width="20" class="interest-col">
            <el-select v-model="interest" placeholder="--请选择--">
              <el-option
                v-for="item in interests"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </f7-col>
          <f7-col width="25" class="key"></f7-col>
          <f7-col width="25" class="key"></f7-col>
        </f7-row>
        <f7-row v-show="isShowChangeInfo" class="item-layout">
          <f7-col width="30" class="key"></f7-col>
          <f7-col width="70">
            <el-input type="textarea" :rows="2" placeholder="请描述变化及其原因" v-model="evaluate"></el-input>
          </f7-col>
        </f7-row>
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>项目贷款的保证措施是否有出现问题的迹象:
          </f7-col>
          <f7-col width="20" class="interest-col">
            <el-select v-model="interest" placeholder="--请选择--">
              <el-option
                v-for="item in interests"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </f7-col>
          <f7-col width="25" class="key"></f7-col>
          <f7-col width="25" class="key"></f7-col>
        </f7-row>
        <f7-row v-show="isShowChangeInfo" class="item-layout">
          <f7-col width="30" class="key"></f7-col>
          <f7-col width="70">
            <el-input type="textarea" :rows="2" placeholder="请描述变化及其原因" v-model="evaluate"></el-input>
          </f7-col>
        </f7-row>
      </div>
    </f7-card>

    <f7-block>按揭情况</f7-block>
    <f7-card>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>本行按揭户数:
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
            <i class="keynote">*&nbsp;&nbsp;</i>本行按揭余额:
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
            <i class="keynote">*&nbsp;&nbsp;</i>他行按揭户数:
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
            <i class="keynote">*&nbsp;&nbsp;</i>他行按揭余额:
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
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>是否按规定用途使用项目贷款:
          </f7-col>
          <f7-col width="20" class="interest-col">
            <el-select v-model="interest" placeholder="--请选择--">
              <el-option
                v-for="item in interests"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </f7-col>
          <f7-col width="25" class="key"></f7-col>
          <f7-col width="25" class="key"></f7-col>
        </f7-row>
        <f7-row v-show="isShowChangeInfo" class="item-layout">
          <f7-col width="30" class="key"></f7-col>
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
  data() {
    return {
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
      productionInfo: "否", //检查类型
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
      interest: "否", //任务状态
      financeList: [
        //财务指标
        {
          type: 0, //类型
          key: "总投资",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 1, //类型
          key: "自有资金",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 2, //类型
          key: "银行贷款",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 3, //类型
          key: "其他来源",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        }
      ],
      debtList: [
        //偿债能力
        {
          type: 0, //类型
          key: "工程费用",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 1, //类型
          key: "其他费用",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        }
      ],
      marketChange: [], //市场变化多选
      isShowChangeInfo: true
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customType) {
          that.customType = page.route.query.customType;
          console.log("项目管理页面获取到的参数:", that.customType);
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