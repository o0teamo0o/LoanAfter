<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>担保信息</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-card>
      <div class="production-layout">
        <f7-row class="item-layout">
          <f7-col width="30" class="key">
            <i class="keynote">*&nbsp;&nbsp;</i>是否现场查看担保物:
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

    <!-- <f7-block>保证人信息</f7-block> -->
    <f7-card class="financial-layout">
      <div class="flex">
        <div class="result-hint">保证人信息</div>
        <div class="empty"></div>
        <f7-link class="analysis" @click="onGuarantorAnalysis"
          >情况分析</f7-link
        >
      </div>
      <el-table
        :data="guarantorList"
        border
        @selection-change="onGuarantorSelectionChange"
      >
        <el-table-column fixed type="selection" width="50"></el-table-column>
        <el-table-column
          fixed
          type="index"
          label="编号"
          width="55"
        ></el-table-column>
        <el-table-column
          prop="no"
          label="保证人客户号"
          min-width="120"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="保证人名称"
          min-width="240"
        ></el-table-column>
        <el-table-column
          prop="leven"
          label="信用等级"
          min-width="130"
        ></el-table-column>
        <el-table-column
          prop="money"
          label="担保资金"
          min-width="130"
        ></el-table-column>
        <el-table-column
          prop="bz"
          label="币种"
          min-width="70"
        ></el-table-column>
      </el-table>
    </f7-card>

    <!-- <f7-block>抵押物信息</f7-block> -->
    <f7-card class="financial-layout">
      <div class="flex">
        <div class="result-hint">抵押物信息</div>
        <div class="empty"></div>
        <f7-link class="analysis" @click="onCollateralInfo">情况分析</f7-link>
      </div>
      <el-table
        :data="collateralList"
        border
        @selection-change="onCollateralSelectionChange"
      >
        <el-table-column fixed type="selection" width="50"></el-table-column>
        <el-table-column
          fixed
          type="index"
          label="编号"
          width="55"
        ></el-table-column>
        <el-table-column
          prop="no"
          label="押品编号"
          min-width="150"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="押品名称"
          min-width="105"
        ></el-table-column>
        <el-table-column
          prop="leven"
          label="押品所有人"
          min-width="130"
        ></el-table-column>
        <el-table-column
          prop="money"
          label="估计价值"
          min-width="130"
        ></el-table-column>
        <el-table-column
          prop="bz"
          label="币种"
          min-width="70"
        ></el-table-column>
        <el-table-column
          prop="time"
          label="评估时间"
          min-width="100"
        ></el-table-column>
      </el-table>
    </f7-card>

    <f7-popup
      :opened="isShowGuarantorAnalysisDialog"
      :closeByBackdropClick="closeByBackdropClick"
      @popup:closed="isShowGuarantorAnalysisDialog = false"
      class="guarantor-analysis-layout"
    >
      <f7-page>
        <f7-card class="production-layout">
          <div class="flex">
            <div class="empty"></div>
            <div class="popup-title">履约能力/保证能力变化情况分析</div>
            <div class="empty"></div>
          </div>
          <div class="line-half"></div>
          <f7-row class="item-layout">
            <f7-col width="30" class="key">
              <i class="keynote">*&nbsp;&nbsp;</i>履约能力变化情况分析:
            </f7-col>
            <f7-col width="70" class="performance-col">
              <el-checkbox-group
                v-model="marketChange"
                class="market-checkbox-layout"
              >
                <el-checkbox
                  label="保证人主要管理层和管理结构发生重大不利变化"
                ></el-checkbox>
                <el-checkbox
                  label="保证人出现兼并、重组或分立情况"
                ></el-checkbox>
                <el-checkbox label="无变化"></el-checkbox>
              </el-checkbox-group>
            </f7-col>
          </f7-row>
          <div class="dashed-line-half"></div>
          <f7-row class="item-layout">
            <f7-col width="30" class="key">
              <i class="keynote">*&nbsp;&nbsp;</i>保证能力变化情况分析:
            </f7-col>
            <f7-col width="70" class="performance-col">
              <el-checkbox-group
                v-model="marketChange"
                class="market-checkbox-layout"
              >
                <el-checkbox
                  label="保证人销售收入（营业收入）下滑或出现亏损"
                ></el-checkbox>
                <el-checkbox
                  label="保证人在我行或他行的贷款出现逾期"
                ></el-checkbox>
                <el-checkbox label="保证人被其他金融机构起诉"></el-checkbox>
                <el-checkbox
                  label="保证人违反保证合同或丧失承担连带担保责任能力"
                ></el-checkbox>
                <el-checkbox
                  label="保证人陷入重大赔偿、诉讼、重大或有负债"
                ></el-checkbox>
                <el-checkbox
                  label="保证人因其他重大风险事项导致重大损失"
                ></el-checkbox>
                <el-checkbox label="无变化"></el-checkbox>
              </el-checkbox-group>
            </f7-col>
          </f7-row>
          <f7-row class="btn-layout">
            <f7-col width="25"></f7-col>
            <f7-col width="20" tag="span">
              <el-button type="info" @click="onPopupGuarantorAnalysisCancel"
                >取消</el-button
              >
            </f7-col>
            <f7-col width="10"></f7-col>
            <f7-col width="20" tag="span">
              <el-button type="primary" @click="onPopupGuarantorAnalysisOk"
                >确认</el-button
              >
            </f7-col>
            <f7-col width="25"></f7-col>
          </f7-row>
        </f7-card>
      </f7-page>
    </f7-popup>

    <f7-popup
      :opened="isShowCollateralDialog"
      :closeByBackdropClick="closeByBackdropClick"
      @popup:closed="isShowCollateralDialog = false"
      class="collateral-layout"
    >
      <f7-page>
        <f7-card class="production-layout">
          <div class="flex">
            <div class="empty"></div>
            <div class="popup-title">抵（质）押物变化情况分析</div>
            <div class="empty"></div>
          </div>
          <div class="line-half"></div>
          <f7-row class="item-layout">
            <f7-col width="30" class="key">
              <i class="keynote">*&nbsp;&nbsp;</i>抵（质）押物变化情况分析:
            </f7-col>
            <f7-col width="70">
              <el-checkbox-group
                v-model="marketChange"
                class="market-checkbox-layout"
              >
                <el-checkbox
                  label="未经我行同意，抵押物权属变更为他人"
                ></el-checkbox>
                <el-checkbox
                  label="未经我行同意，借款人擅自将抵押物出租"
                ></el-checkbox>
                <el-checkbox
                  label="抵押物部分或全部缺失，或不再具备有效抵押的条件"
                ></el-checkbox>
                <el-checkbox
                  label="抵押物被其他金融机构或企业查封"
                ></el-checkbox>
                <el-checkbox label="抵押物登记已失效"></el-checkbox>
                <el-checkbox label="抵（质）押物保险期限已过期"></el-checkbox>
                <el-checkbox
                  label="抵质押物公允价值（或市场价格）发生明显变化"
                ></el-checkbox>
                <el-checkbox
                  label="抵押物闲置，土地使用权抵押物新增建筑物"
                ></el-checkbox>
                <el-checkbox
                  label="抵（质）押物重估价值无法覆盖贷款本息"
                ></el-checkbox>
                <el-checkbox label="无变化"></el-checkbox>
              </el-checkbox-group>
            </f7-col>
          </f7-row>
          <f7-row class="btn-layout">
            <f7-col width="25"></f7-col>
            <f7-col width="20" tag="span">
              <el-button type="info" @click="onPopupCollateralCancel"
                >取消</el-button
              >
            </f7-col>
            <f7-col width="10"></f7-col>
            <f7-col width="20" tag="span">
              <el-button type="primary" @click="onPopupCollateralOk"
                >确认</el-button
              >
            </f7-col>
            <f7-col width="25"></f7-col>
          </f7-row>
        </f7-card>
      </f7-page>
    </f7-popup>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      isShowGuarantorAnalysisDialog: false,
      isShowCollateralDialog: false,
      closeByBackdropClick: false,
      guarantorList: [
        {
          no: "C000014947",
          name: "永州大众朝阳房地产开发有限公司",
          leven: "",
          money: 2550000,
          bz: "人民币"
        },
        {
          no: "C000014947",
          name: "永州大众朝阳房地产开发有限公司",
          leven: "",
          money: 2550000,
          bz: "人民币"
        }
      ],
      selectedGuarantorList: [],
      collateralList: [
        {
          no: "YP00000055316",
          name: "商用房",
          leven: "P000111357",
          money: 2550000,
          bz: "人民币",
          time: "2016-01-22"
        },
        {
          no: "YP00000055317",
          name: "商用房",
          leven: "P000111357",
          money: 2550000,
          bz: "人民币",
          time: "2016-01-22"
        }
      ],
      selectedCollateralList: [],
      productionInfos: [
        {
          value: "0",
          label: "保证人主要管理层和管理结构发生重大不利变化"
        },
        {
          value: "1",
          label: "保证人出现兼并、重组或分立情况"
        },
        {
          value: "2",
          label: "无变化"
        }
      ], //检查类型
      productionInfo: "", //检查类型
      capacityChanges: [
        {
          value: "0",
          label: "保证人销售收入（营业收入）下滑或出现亏损"
        },
        {
          value: "1",
          label: "保证人在我行或他行的贷款出现逾期"
        },
        {
          value: "2",
          label: "保证人被其他金融机构起诉"
        },
        {
          value: "3",
          label: "保证人违反保证合同或丧失承担连带担保责任能力"
        },
        {
          value: "4",
          label: "保证人陷入重大赔偿、诉讼、重大或有负债"
        },
        {
          value: "5",
          label: "保证人因其他重大风险事项导致重大损失"
        },
        {
          value: "6",
          label: "无变化"
        }
      ], //检查类型
      capacityChange: "", //检查类型
      marketChange: []
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
     * 担保人列表选择监听
     */
    onGuarantorSelectionChange(list) {
      this.selectedGuarantorList = list;
    },
    /**
     * 担保人情况分析
     */
    onGuarantorAnalysis() {
      if (this.selectedGuarantorList.length == 0) {
        this.showToast("请先勾选需要操作的保证人信息!");
      } else {
        this.isShowGuarantorAnalysisDialog = true;
      }
    },
    /**
     * 履约情况取消按钮
     */
    onPopupGuarantorAnalysisCancel() {
      this.isShowGuarantorAnalysisDialog = false;
    },
    /**
     * 履约情况确定按钮
     */
    onPopupGuarantorAnalysisOk() {
      this.isShowGuarantorAnalysisDialog = false;
    },
    /**
     * 抵押物选择监听
     */
    onCollateralSelectionChange(list) {
      this.selectedCollateralList = list;
    },
    /**
     * 抵押物情况分析监听
     */
    onCollateralInfo() {
      if (this.selectedCollateralList.length == 0) {
        this.showToast("请先勾选需要操作的抵押物信息!");
      } else {
        this.isShowCollateralDialog = true;
      }
    },
    /**
     * 抵押物情况取消按钮
     */
    onPopupCollateralCancel() {
      this.isShowCollateralDialog = false;
    },
    /**
     * 抵押物情况确定按钮
     */
    onPopupCollateralOk() {
      this.isShowCollateralDialog = false;
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
<style lang="less">
.performance-col .el-input {
  width: 400px !important;
}
.analysis {
  margin-right: 15px;
}
@guarantor-analysis-layout-height: 445px; //履约情况分析高度
.guarantor-analysis-layout {
  height: @guarantor-analysis-layout-height !important;
  background: transparent !important;
  margin-top: calc(-1 * @guarantor-analysis-layout-height / 2) !important;

  .page {
    background: transparent !important;

    .page-content {
      background: transparent !important;
    }
  }
}
@collateral-layout-height: 425px;
.collateral-layout {
  height: @collateral-layout-height !important;
  background: transparent !important;
  margin-top: calc(-1 * @collateral-layout-height / 2) !important;

  .page {
    background: transparent !important;

    .page-content {
      background: transparent !important;
    }
  }
}

.popup-title {
  line-height: 44px;
  height: 44px;
  padding: 0 15px;
  font-size: 16px;
  font-weight: bold;
}
</style>
