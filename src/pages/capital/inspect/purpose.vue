<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>用途检查</f7-nav-title>
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
          <f7-col width="80"
            >经营范围经营范围经营范围经营范围经营范围经营范围经营范围</f7-col
          >
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

    <f7-block>授权情况及资金用途</f7-block>
    <f7-card>
      <el-table :data="taskList" border>
        <el-table-column
          prop="date"
          label="书面合同编号"
          width="280"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="合同编号"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="province"
          label="借据编号"
          width="140"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="业务品种"
          width="140"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="放款金额"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="余额"
          width="130"
        ></el-table-column>
        <el-table-column prop="zip" label="币种" width="90"></el-table-column>
      </el-table>
      <el-table :data="grantingList" border>
        <el-table-column
          fixed
          prop="type"
          label="序号"
          width="80"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="借据编号"
          width="140"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="放款金额"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="province"
          label="已检查金额"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="本次检查金额"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="币种"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="zip"
          label="起始日期"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="jclx"
          label="到期日期"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="M"
          label="支付方式"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="riqi"
          label="资金用途"
          width="150"
        ></el-table-column>
      </el-table>
      <el-transfer
        v-model="transferValue"
        :data="shuttleData"
        :titles="titles"
      ></el-transfer>
    </f7-card>

    <f7-block>交易流水</f7-block>
    <f7-card>
      <el-table :data="grantingList" border>
        <el-table-column
          fixed
          prop="type"
          label="序号"
          width="80"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="客户账号"
          width="140"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="交易日期"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="province"
          label="交易金额"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="交易方向"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="交易对手账号"
          width="150"
        ></el-table-column>
        <el-table-column prop="zip" label="摘要" width="180"></el-table-column>
      </el-table>
    </f7-card>

    <f7-block>检查情况</f7-block>
    <f7-card class="production-layout">
      <f7-row class="item-layout">
        <f7-col width="30" class="key">
          <i class="keynote">*&nbsp;&nbsp;</i>是否符合资金用途约定:
        </f7-col>
        <f7-col width="25" class="interest-col">
          <el-select
            v-model="purpose"
            placeholder="--请选择--"
            @change="onPurposeChange"
          >
            <el-option
              v-for="item in purposes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </f7-col>
        <f7-col width="20" class="key"></f7-col>
        <f7-col width="25"></f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="30" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>资金支付证明材料:
        </f7-col>
        <f7-col width="70">
          <el-checkbox-group
            v-model="marketChange"
            class="market-checkbox-layout"
          >
            <el-checkbox label="具有真实背景的交易合同"></el-checkbox>
            <el-checkbox label="增值税发票"></el-checkbox>
            <el-checkbox label="结算单据"></el-checkbox>
            <el-checkbox label="工程监理证明"></el-checkbox>
            <el-checkbox label="其他"></el-checkbox>
          </el-checkbox-group>
        </f7-col>
      </f7-row>
      <div class="dashed-line-half"></div>
      <f7-row class="item-layout">
        <f7-col width="30" class="key">
          <i class="ignore">*&nbsp;&nbsp;</i>备注:
        </f7-col>
        <f7-col width="70">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请描述情况"
            v-model="remarks"
          ></el-input>
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
      enoughRepayment: "", //任务状态
      purposes: [
        {
          value: "0",
          label: "是"
        },
        {
          value: "1",
          label: "否"
        }
      ], //任务状态
      purpose: "", //任务状态
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
      ],
      taskList: [
        {
          type: 0,
          date: "华银长金星路支个贷担字2019年第001号",
          name: "MC111000000140",
          province: "JC049100724529",
          city: "个人综合消费贷款 ",
          address: "50,000.00",
          zip: "人民币",
          jclx: "2019-04-25",
          M: "2021-08-08",
          riqi: "0.00",
          state: "0.00"
        }
      ],
      grantingList: [
        {
          type: 1,
          date: "MC111000000140",
          name: "50,000.00",
          province: "0.00",
          city: "50,000.00 ",
          address: "人民币",
          zip: "2019-04-25",
          jclx: "2019-04-25",
          M: "受托支付",
          riqi: "经营周转",
          state: "0.00"
        }
      ],
      titles: ["未查询交易流水的账户列表", "已查询交易流水的账户列表"],
      transferValue:[1, 1],
      shuttleData: [
        {
          key: "1",
          label: "6213880673100008913(一般户)"
        },
        {
          key: "2",
          label: "6213880673100008914(一般户)"
        },
        {
          key: "3",
          label: "6213880673100008915(一般户)"
        },
        {
          key: "4",
          label: "6213880673100008916(一般户)"
        },
        {
          key: "5",
          label: "6213880673100008917(一般户)"
        }
      ],
      remarks: ""
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
     * 规定用途使用监听
     */
    onPurposeChange(index) {},
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
.purpose-col .el-input {
  width: 100% !important;
}
.el-transfer-panel {
  width: 29vw !important;
}
.el-transfer__button {
  width: 56px !important;
}
</style>
