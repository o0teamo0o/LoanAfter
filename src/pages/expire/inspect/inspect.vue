<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>业务到期检查</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-block>检查信息</f7-block>
    <f7-card class="production-layout">
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>检查行:
        </f7-col>
        <f7-col width="25">
          <el-input
            style="width:100% !important;"
            disabled
            clearable
            placeholder="回显"
            v-model="branchName"
            :value="branchName"
          ></el-input>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>检查人:
        </f7-col>
        <f7-col width="25">
          <el-input
            style="width:100% !important;"
            disabled
            clearable
            v-model="inspectName"
            :value="inspectName"
            placeholder="回显"
          ></el-input>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>检查日期:
        </f7-col>
        <f7-col width="25">
          <el-date-picker
            style="width:100% !important;"
            v-model="checkDate"
            :value="checkDate"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>检查方式:
        </f7-col>
        <f7-col width="25" class="purpose-col">
          <el-select
            v-model="checkType"
            placeholder="--请选择--"
            @change="onCheckTypeChange"
          >
            <el-option
              v-for="item in checkTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
      </f7-row>
      <div v-if="isScene">
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="20" class="key">
            <i class="ignore">*&nbsp;&nbsp;</i>面谈对象职务:
          </f7-col>
          <f7-col width="25" class="purpose-col">
            <el-select v-model="dutie" placeholder="--请选择--">
              <el-option
                v-for="item in duties"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </f7-col>
          <f7-col width="20" class="key">
            <i class="ignore">*&nbsp;&nbsp;</i>面谈人姓名:
          </f7-col>
          <f7-col width="25">
            <el-input
              style="width:100% !important;"
              v-model="interviewName"
              :value="interviewName"
              clearable
              placeholder="请输入面谈人姓名"
            ></el-input>
          </f7-col>
        </f7-row>
        <f7-row class="item-layout">
          <f7-col width="20" class="key">
            <i class="ignore">*&nbsp;&nbsp;</i>面谈人电话:
          </f7-col>
          <f7-col width="25">
            <el-input
              style="width:100% !important;"
              v-model="interviewPhone"
              :value="interviewPhone"
              clearable
              placeholder="请输入面谈人电话"
            ></el-input>
          </f7-col>
          <f7-col width="20" class="key"></f7-col>
          <f7-col width="25"></f7-col>
        </f7-row>
      </div>
      <div v-if="isNotScene">
        <div class="dashed-line-half"></div>
        <f7-row class="item-layout">
          <f7-col width="20" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>检查途径:
          </f7-col>
          <f7-col width="75" class="purpose-col">
            <el-checkbox-group
              v-model="checkChannelResult"
              @change="onCheckChannelChange"
            >
              <el-checkbox
                v-for="item in checkChannelList"
                :checked="item.isCheck"
                :label="item.name"
                :key="item.name"
                >{{ item.name }}</el-checkbox
              >
            </el-checkbox-group>
          </f7-col>
        </f7-row>
      </div>
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

    <f7-block>授信情况</f7-block>
    <f7-card>
      <el-table :data="taskList" border>
        <el-table-column prop="date" label="序号" width="80"></el-table-column>
        <el-table-column prop="date" label="借据编号" width="110"></el-table-column>
        <el-table-column prop="name" label="合同编号" width="110"></el-table-column>
        <el-table-column prop="province" label="业务品种" width="105"></el-table-column>
        <el-table-column prop="city" label="金额" width="180"></el-table-column>
        <el-table-column prop="address" label="余额" width="150"></el-table-column>
        <el-table-column prop="address" label="币种" width="150"></el-table-column>
      </el-table>
    </f7-card>

    <f7-block>贷后检查信息</f7-block>
    <f7-card class="production-layout">
      <f7-row class="item-layout">
        <f7-col width="20" class="key">至检查日客户在我行存款余额(元):</f7-col>
        <f7-col width="25">
          <el-input style="width:100% !important;" disabled clearable placeholder="回显"></el-input>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>客户是否清楚有授信即将到期:
        </f7-col>
        <f7-col width="25" class="purpose-col">
          <el-select v-model="enoughRepayment" placeholder="--请选择--">
            <el-option
              v-for="item in enoughRepayments"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>客户还款意愿评价:
        </f7-col>
        <f7-col width="25" class="purpose-col">
          <el-select v-model="enoughRepayment" placeholder="--请选择--">
            <el-option
              v-for="item in enoughRepayments"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
        <f7-col width="20" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>客户是否有足额还款来源:
        </f7-col>
        <f7-col width="25" class="purpose-col">
          <el-select
            v-model="enoughRepayment"
            placeholder="--请选择--"
            @change="onEnoughRepaymentChange"
          >
            <el-option
              v-for="item in enoughRepayments"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
      </f7-row>
    </f7-card>

    <div v-if="isEnoughRepayment">
      <f7-block>客户还款资金来源和安排</f7-block>
      <f7-card class="financial-layout">
        <el-table :data="financeList" border>
          <el-table-column fixed prop="key" label="资金来源" min-width="200"></el-table-column>
          <el-table-column style="padding: 0;" prop="lastYear" label="金额" min-width="200">
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
          <el-table-column prop="earlyYear" label="预计到账时间" min-width="200">
            <template slot-scope="scope">
              <i class="keynote">*</i>
              <el-date-picker
                v-model="checkDate"
                style="width:90% !important;"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="scope.row.pickerOptions"
              ></el-date-picker>
            </template>
          </el-table-column>
          <el-table-column prop="currentIssue" label="备注" min-width="200">
            <template slot-scope="scope">
              <i class="keynote">*</i>
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
    </div>

    <div v-if="isNotEnoughRepayment">
      <f7-block>客户还款资金来源和安排</f7-block>

      <f7-card class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>原因:
          </f7-col>
          <f7-col width="75">
            <el-input type="textarea" :rows="2" placeholder="请描述变化及其原因" v-model="evaluate"></el-input>
          </f7-col>
        </f7-row>
        <f7-row class="item-layout">
          <f7-col width="25" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>拟采取的处置措施:
          </f7-col>
          <f7-col width="75">
            <el-checkbox-group v-model="marketChange" class="market-checkbox-layout">
              <el-checkbox label="现金清收"></el-checkbox>
              <el-checkbox label="协议抵偿"></el-checkbox>
              <el-checkbox label="债务重组"></el-checkbox>
              <el-checkbox label="诉讼保全"></el-checkbox>
              <el-checkbox label="破产清偿"></el-checkbox>
              <el-checkbox label="资产转让"></el-checkbox>
              <el-checkbox label="呆账核销"></el-checkbox>
              <el-checkbox label="展期"></el-checkbox>
              <el-checkbox label="借新还旧"></el-checkbox>
              <el-checkbox label="其它"></el-checkbox>
            </el-checkbox-group>
          </f7-col>
        </f7-row>
      </f7-card>
    </div>

    <f7-block>岗位意见</f7-block>
    <f7-card class="production-layout">
      <f7-row class="item-layout">
        <f7-col width="25" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>操作员姓名:
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
          <i class="keynote">*&nbsp;&nbsp;</i>操作员岗位:
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
          <i class="keynote">*&nbsp;&nbsp;</i>意见内容:
        </f7-col>
        <f7-col width="75">
          <el-input type="textarea" :rows="2" placeholder="请描述变化及其原因" v-model="evaluate"></el-input>
        </f7-col>
      </f7-row>
    </f7-card>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      branchName: "",
      inspectName: "",
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
      checkType: "", //任务状态
      duties: [
        {
          value: "0",
          label: "法人"
        },
        {
          value: "1",
          label: "主要股东"
        },
        {
          value: "2",
          label: "其他"
        },
        {
          value: "3",
          label: "财务总监"
        }
      ],
      dutie: "",
      interviewName: "",
      interviewPhone: "",
      checkChannelList: [
        {
          isCheck: false,
          name: "电话"
        },
        {
          isCheck: false,
          name: "信函"
        },
        {
          isCheck: false,
          name: "邮件"
        },
        {
          isCheck: false,
          name: "媒体"
        },
        {
          isCheck: false,
          name: "短信"
        },
        {
          isCheck: false,
          name: "其他"
        }
      ],
      checkChannelResult: [],
      enoughRepayments: [
        {
          value: "0",
          label: "是"
        },
        {
          value: "1",
          label: "否"
        }
      ], //任务状态
      evaluate: "",
      distributor: "",
      supplier: "",
      taskList: [],
      enoughRepayment: "", //任务状态
      isEnoughRepayment: false, //没有充足来源
      isNotEnoughRepayment: false, //没有充足来源
      marketChange: [],
      isScene: false, //是否在现场
      isNotScene: false, //是否不在现场
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
      financeList: [
        //财务指标
        {
          type: 0, //类型
          key: "自有资金",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 1, //类型
          key: "银行借款",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        },
        {
          type: 2, //类型
          key: "其他资金来源",
          lastYear: "", //上年
          earlyYear: "", //年初
          currentIssue: "" //本期
        }
      ]
    };
  },
  methods: {
    /**
     * 检查方式是监听
     */
    onCheckTypeChange(index) {
      if (index == 0) {
        this.isScene = true;
        this.isNotScene = false;
      } else {
        this.isScene = false;
        this.isNotScene = true;
      }
    },
    /**
     * 检查用途监听
     */
    onCheckChannelChange(index) {
      console.error(index);
    },
    onPracticableChange(index) {
      if (index == 0) {
        this.isScene = true;
        this.isNotScene = false;
      } else {
        this.isScene = false;
        this.isNotScene = true;
      }
    },
    /**
     * 是否有足够还款来源
     */
    onEnoughRepaymentChange(index) {
      if (index == 0) {
        this.isEnoughRepayment = true;
        this.isNotEnoughRepayment = false;
      } else {
        this.isEnoughRepayment = false;
        this.isNotEnoughRepayment = true;
      }
    },
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
.purpose-col .el-input {
  width: 100% !important;
}
</style>