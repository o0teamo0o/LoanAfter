<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>授信汇总</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onLoadCreditReporting">征信报告</f7-button>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-block>授信汇总情况</f7-block>
    <f7-card>
      <f7-row class="total-info">
        <f7-col width="25">授信总额：0.00</f7-col>
        <f7-col width="25">授信敞口：0.00</f7-col>
        <f7-col width="25">已用额度：0.00</f7-col>
        <f7-col width="25">可用额度：0.00</f7-col>
      </f7-row>
      <el-table :data="taskList" border>
        <el-table-column
          fixed
          prop="date"
          label="合同编号"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="借据编号"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="province"
          label="业务品种"
          width="105"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="放款金额"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="余额"
          width="130"
        ></el-table-column>
        <el-table-column prop="zip" label="币种" width="70"></el-table-column>
        <el-table-column
          prop="jclx"
          label="起始日期"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="M"
          label="到期日期"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="riqi"
          label="逾期(垫款)本金"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="state"
          label="逾期利息"
          width="130"
        ></el-table-column>
      </el-table>
    </f7-card>

    <f7-block>授信放款条件</f7-block>
    <f7-card>
      <el-table :data="loanConditionsList" border>
        <el-table-column
          fixed
          prop="no"
          label="授信编号"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="serial"
          label="序号"
          width="70"
        ></el-table-column>
        <el-table-column
          prop="content"
          label="内容"
          min-width="583"
        ></el-table-column>
      </el-table>
    </f7-card>

    <f7-block>放款后管理条件</f7-block>
    <f7-card class="financial-layout">
      <el-table :data="taskList" border>
        <el-table-column
          fixed
          prop="date"
          label="授信编号"
          width="150"
        ></el-table-column>
        <el-table-column prop="zip" label="序号" width="70"></el-table-column>
        <el-table-column
          prop="province"
          label="内容"
          width="300"
        ></el-table-column>
        <el-table-column label="落实情况" width="280">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-select
              v-model="scope.row.practicable"
              placeholder="--请选择--"
              @change="onPracticableChange"
            >
              <el-option
                v-for="item in checkTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          v-if="practicableContent"
          prop="practicableContent"
          label="说明"
          width="300"
        ></el-table-column>
      </el-table>
    </f7-card>

    <f7-block>其他金融机构授信情况</f7-block>
    <f7-card>
      <el-table :data="taskList" border>
        <el-table-column
          fixed
          prop="date"
          label="机构名称"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="授信品种"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="放款金额"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="余额"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="jclx"
          label="起始日期"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="M"
          label="到期日期"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="riqi"
          label="逾期(垫款)本金"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="state"
          label="逾期利息"
          width="130"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <f7-link
              class="btn-link"
              @click.native.prevent="deleteRow(scope.$index, taskList)"
              >删除</f7-link
            >
          </template>
        </el-table-column>
      </el-table>
    </f7-card>

    <f7-block>对外担保情况</f7-block>
    <f7-card>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="20" class="key">对外担保金额(元):</f7-col>
          <f7-col width="80">
            <el-input
              style="width:100% !important;"
              v-model="foreignMoney"
              :value="foreignMoney"
              clearable
              placeholder="请输入对外担保金额"
            ></el-input>
          </f7-col>
        </f7-row>
        <f7-row class="item-layout">
          <f7-col width="20" class="key">对外担保情况说明:</f7-col>
          <f7-col width="80">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入对外担保情况说明"
              v-model="foreignInfo"
            ></el-input>
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
      foreignMoney: "",
      foreignInfo: "",
      taskList: [
        {
          type: 0,
          date: "MC007000009191",
          name: "JC001000009548",
          province: "流动资金贷款",
          city: "4,000,000.00",
          address: "200,000.00",
          zip: "人民币",
          jclx: "2016-01-07",
          M: "2017-01-16",
          riqi: "200,000.00",
          state: "19,888.00",
          practicable: "", //落实情况选项
          practicableContent: "" //落实情况说明
        }
      ],
      loanConditionsList: [
        //放款条件
        {
          no: "MC007000009191",
          serial: "001",
          content:
            "放款条件内容数据|放款条件内容数据|放款条件内容数据|放款条件内容数据"
        }
      ],
      checkTypes: [
        {
          value: "0",
          label: "落实"
        },
        {
          value: "1",
          label: "部分落实"
        },
        {
          value: "2",
          label: "未落实"
        }
      ], //检查类型
      checkType: "", //检查类型
      practicableContent: ""
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customInfo) {
        }
      });
    });

    /**
     * 用于获取原生textarea事件的处理
     */
    window["onPracticableContent"] = e => {
      that.practicableContent = e.value;
    };

  },
  methods: {
    onPracticableChange(index) {
      var that = this;
      if (index != 0) {
        this.$f7.dialog
          .create({
            title: "请说明情况",
            content:
              '<textarea placeholder="请说明具体原因" rows="5" cols="50" class="dialog-textarea" value="practicableContent" oninput="onPracticableContent(this)"></textarea>',
            buttons: [
              {
                text: "确定"
              }
            ],
            cssClass: "dialog-input",
            on: {
              closed: function() {
                that.taskList[0].practicableContent = that.practicableContent;
              }
            }
          })
          .open();
      }
    },

    /**
     * 删除表格记录
     */
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },

    /**
     * 页面返回事件
     */
    onBack() {
      this.$f7.views.main.router.back();
      this.$f7.views.left.router.back();
    },

    /**
     * 获取征信报告
     */
    onLoadCreditReporting() {},

    /**
     * 数据保存事件
     */
    onSave() {
    }
  }
};
</script>

<style lang="less">
.total-info {
  line-height: 45px;
  text-align: center;
  color: #333 !important;
}
.dialog-input {
  width: 400px;
}

.dialog-textarea {
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  padding: 5px;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: white;
}
.foreign-layout {
  padding: 10px 15px;
  color: #666;

  .item-layout {
    padding: 10px 0;

    .key {
      text-align: right;
      font-weight: bold;
    }
  }
}

.financial-layout .el-table td:nth-child(n + 1) {
  padding: 5px 0;
}

.navbar-current > .navbar-inner {
  .left,
  .title,
  .right {
    transform: translate3d(0px, 0px, 0px) !important;
  }
}
</style>
