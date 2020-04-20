<template>
  <f7-page name="task-check">
    <f7-navbar>
      <f7-nav-title>贷后任务检查</f7-nav-title>
    </f7-navbar>

    <div class="query-layout">
      <f7-card class="top-layout">
        <f7-list accordion>
          <f7-list-item
            id="accordionDailyItem"
            accordion-item
            title="查询要素"
            opened
            class="accordion-item-opened"
          >
            <div class="line"></div>
            <f7-accordion-content>
              <f7-row class="item-layout">
                <f7-col width="50" class="title">
                  <i class="keynote">*</i>
                  <span class="hint">客户类别</span>
                  <el-select v-model="customerType" placeholder="--请选择--">
                    <el-option
                      v-for="item in customerTypes"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </f7-col>
                <f7-col width="50" class="title">
                  <i class="keynote">*</i>
                  <span class="hint">客户名称</span>
                  <el-input
                    v-model="customerName"
                    :value="customerName"
                    clearable
                    placeholder="请输入客户名称"
                  ></el-input>
                </f7-col>
              </f7-row>
              <f7-row class="item-layout">
                <f7-col width="50" class="title">
                  <i class="ignore">*</i>
                  <span class="hint">检查类型</span>
                  <el-input
                    v-model="customerName"
                    :value="customerName"
                    clearable
                    disabled
                    placeholder="日常维护检查"
                  ></el-input>
                </f7-col>
                <f7-col width="50" class="title">
                  <i class="keynote">*</i>
                  <span class="hint">任务状态</span>
                  <el-select v-model="taskType" placeholder="--请选择--">
                    <el-option
                      v-for="item in taskTypes"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </f7-col>
              </f7-row>

              <f7-row class="btn-layout">
                <f7-col width="25"></f7-col>
                <f7-col width="20" tag="span">
                  <el-button type="info" @click="onResetTask">重置</el-button>
                </f7-col>
                <f7-col width="10"></f7-col>
                <f7-col width="20" tag="span">
                  <el-button type="primary" @click="onQueryTask"
                    >查询</el-button
                  >
                </f7-col>
                <f7-col width="25"></f7-col>
              </f7-row>
            </f7-accordion-content>
          </f7-list-item>
        </f7-list>
      </f7-card>

      <f7-card ref="bottomView" v-if="taskList">
        <div class="flex">
          <div class="result-hint">查询结果</div>
          <div class="empty"></div>
          <el-pagination
            class="pagination"
            background
            layout="prev, pager, next"
            :page-count="total"
            :page-size="pagesize"
            :current-page="currentPage"
            hide-on-single-page
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
        <el-table
          :data="
            taskList.slice((currentPage - 1) * pagesize, currentPage * pagesize)
          "
          border
          style="transition: max-height 0.2s linear"
          :max-height="tableMaxHeight"
        >
          <el-table-column
            fixed
            prop="date"
            label="客户名称"
            min-width="120"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="客户编号"
            min-width="120"
          ></el-table-column>
          <el-table-column
            prop="jclx"
            label="日常检查类型"
            min-width="120"
          ></el-table-column>
          <el-table-column
            prop="M"
            label="检查频率"
            min-width="80"
          ></el-table-column>
          <el-table-column
            prop="riqi"
            label="本期检查最迟完成日期"
            min-width="165"
          ></el-table-column>
          <el-table-column fixed="right" label="操作" min-width="80">
            <template slot-scope="scope">
              <div v-if="scope.row.status == 0">
                <f7-link
                  class="btn-link"
                  view="#left-panel-view"
                  data-force="true"
                  data-push-state="true"
                  @click="onItemClick(scope.row)"
                  >发起</f7-link
                >
              </div>
              <div v-if="scope.row.status == 1">
                <f7-link
                  class="btn-link"
                  view="#left-panel-view"
                  data-force="true"
                  data-push-state="true"
                  @click="onItemClick(scope.row)"
                  >检查</f7-link
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
      </f7-card>
      <div v-else class="bottom-layout default-layout">
        <img class="hint-img" src="../../assets/icon_empty.png" />
      </div>
    </div>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      customerTypes: [
        {
          value: "0",
          label: "对公客户"
        },
        {
          value: "1",
          label: "个人客户"
        }
      ],
      customerType: "", //客户类别结果
      customerName: "", //客户名称
      checkTypes: [
        {
          value: "0",
          label: "资金用途检查"
        },
        {
          value: "1",
          label: "日常维护检查"
        },
        {
          value: "2",
          label: "业务到期检查"
        }
      ], //检查类型
      checkType: "", //检查类型
      taskTypes: [
        {
          value: "0",
          label: "待检查"
        },
        {
          value: "1",
          label: "检查中"
        }
      ], //任务状态
      taskType: "", //任务状态
      screeHeight: 768, //屏幕高度
      tableMaxHeight: 0, //默认表格高度
      bigTableMaxHeight: 0, //表格最大值
      smallTableMaxHeight: 0, //表格最大值
      multipleSelection: [],
      total: 2, //总页数
      pagesize: 10, //每页数据
      currentPage: 1, //当前页
      taskList: [
        {
          type: 0,
          date: "公司类客户",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1,
          isMustInput: false,
        },
        {
          type: 1,
          date: "事业法人客户",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1,
          isMustInput: false,
        },
        {
          type: 2,
          date: "平台客户",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1,
          isMustInput: false,
        },
        {
          type: 3,
          date: "房地产客户",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1,
          isMustInput: false,
        },
        {
          type: 4,
          date: "小微企业客户",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1,
          isMustInput: false,
        },
        {
          type: 5,
          date: "个人投资类",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1,
          isMustInput: false,
        },
        {
          type: 6,
          date: "物业贷",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1,
          isMustInput: false,
        },
        {
          type: 7,
          date: "税联贷",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1,
          isMustInput: false,
        },
        {
          type: 8,
          date: "惠农系列",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1,
          isMustInput: false,
        },
        {
          type: 9,
          date: "个人消费客户",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1,
          isMustInput: false,
        }
      ], //查询结果集
      itemUrl: "/task-navigation/"
    };
  },
  mounted() {
    var that = this;
    this.$nextTick(() => {
      that.screeHeight = that.$store.state.screeHeight - 85;
      var bottomViewOffsetTop = that.$refs.bottomView.$el.offsetTop;
      that.tableMaxHeight = that.screeHeight - bottomViewOffsetTop - 30;
      that.smallTableMaxHeight = that.tableMaxHeight;
    });

    this.$f7ready(f7 => {
      that.$$("#accordionDailyItem").on("accordion:beforeopen", function() {
        that.tableMaxHeight = that.smallTableMaxHeight;
      });

      //Accordion关闭事件监听
      that.$$("#accordionDailyItem").on("accordion:closed", function() {
        if (that.bigTableMaxHeight != 0) {
          that.tableMaxHeight = that.bigTableMaxHeight;
        } else {
          var bottomViewOffsetTop = that.$refs.bottomView.$el.offsetTop;
          that.tableMaxHeight = that.screeHeight - bottomViewOffsetTop - 30;
          that.bigTableMaxHeight = that.tableMaxHeight;
        }
      });
    });
  },
  methods: {
    /**
     * 查询按钮回调
     */
    onQueryTask() {
      var queryInfo = {};
      queryInfo.customerType = this.customerType;
      queryInfo.customerName = this.customerName;
      queryInfo.checkType = this.checkType;
      queryInfo.taskType = this.taskType;
      console.error(queryInfo);
    },

    /**
     * 重置按钮回调
     */
    onResetTask() {
      this.customerType = "";
      this.customerName = "";
      this.checkType = "";
      this.taskType = "";
    },

    /**
     * 条目点击事件
     */
    onItemClick(item) {
      var jsonStr = JSON.stringify(item);
      this.$f7router.navigate({
        name: "DailyInformationPage",
        query: { customInfo: jsonStr }
      });
      this.$f7.views.left.router.navigate({
        name: "TaskDailyNavigationPage",
        query: { customInfo: jsonStr }
      });
    },

    /**
     * pageSize 改变时会触发
     */
    handleSizeChange(val) {
      this.pageSize = val;
    },

    /**
     * currentPage 改变时会触发
     */
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
};
</script>

<style lang="less">
@import "../../css/base.less";
.title {
  padding: 15px;
}

.item-layout {
  padding-left: 10px;
  padding-right: 10px;

  .title {
    padding: 15px 15px 10px 15px;
    display: flex;
    align-items: center;

    .hint {
      width: 105px !important;
      font-size: 14px;
      color: #666;
    }

    .value {
      flex: 1;
    }
  }
}

.btn-layout {
  display: flex;
  padding: 10px 0 20px;
}

.query-layout {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.bottom-layout {
  flex: 1;
}

.result-hint {
  line-height: 44px;
  height: 44px;
  padding: 0 15px;
  font-size: 16px;
}

//修复样式冲突问题
.el-pagination button {
  width: 40px !important;
}

.el-input {
  width: 234px !important;
}

.el-table .cell {
  text-align: center;
}

.btn-link {
  font-size: 12px;
}
</style>
