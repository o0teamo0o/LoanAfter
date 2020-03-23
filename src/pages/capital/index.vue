<template>
  <f7-page name="services">
    <f7-navbar>
      <f7-nav-title>资金用途检查</f7-nav-title>
    </f7-navbar>

    <div class="query-layout">
      <f7-card class="top-layout">
        <f7-list accordion>
          <f7-list-item
            id="accordionCapitalItem"
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
                    placeholder="资金用途检查"
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
                  <f7-button large raised fill color="gray" @click="onResetTask">重置</f7-button>
                </f7-col>
                <f7-col width="10"></f7-col>
                <f7-col width="20" tag="span">
                  <f7-button large raised fill color="red" @click="onQueryTask">查询</f7-button>
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
          :data="taskList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          border
          style="transition: max-height 0.2s linear"
          :max-height="tableCapitalMaxHeight"
        >
          <el-table-column fixed prop="date" label="客户名称" width="120"></el-table-column>
          <el-table-column prop="name" label="客户编号" width="120"></el-table-column>
          <el-table-column prop="province" label="证件类型" width="105"></el-table-column>
          <el-table-column prop="city" label="证件号码" width="180"></el-table-column>
          <el-table-column prop="address" label="借据编号" width="150"></el-table-column>
          <el-table-column prop="zip" label="检查类型" width="110"></el-table-column>
          <el-table-column prop="jclx" label="日常检查类型" width="120"></el-table-column>
          <el-table-column prop="M" label="检查频率" width="80"></el-table-column>
          <el-table-column prop="riqi" label="本期检查最迟完成日期" width="165"></el-table-column>
          <el-table-column prop="state" label="任务状态" width="80"></el-table-column>
          <el-table-column fixed="right" label="操作" width="80">
            <template slot-scope="scope">
              <div v-if="scope.row.status == 0">
                <f7-link
                  class="btn-link"
                  view="#left-panel-view"
                  data-force="true"
                  data-push-state="true"
                  @click="onItemClick(scope.row)"
                >发起</f7-link>
              </div>
              <div v-if="scope.row.status == 1">
                <f7-link
                  class="btn-link"
                  view="#left-panel-view"
                  data-force="true"
                  data-push-state="true"
                  @click="onItemClick(scope.row)"
                >检查</f7-link>
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
      customerType: "", //客户类别
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
      customerName: "", //客户名称
      mechanism: "", //所属机构
      customNo: "", //客户编号
      certificatesType: "", //证件类型
      certificatesTypes: [
        {
          value: "0",
          label: "身份证"
        }
      ],
      certificatesNo: "", //证件号码
      taskState: "", //任务状态
      taskStates: [
        {
          value: "0",
          label: "待检查"
        },
        {
          value: "1",
          label: "检查中"
        }
      ],
      automatic: "", //是否自动生成
      automatics: [
        {
          value: "0",
          label: "是"
        },
        {
          value: "1",
          label: "否"
        }
      ],
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
      tableCapitalMaxHeight: 0, //默认表格高度
      bigTableCapitalMaxHeight: 0, //表格最大值
      smallTableCapitalMaxHeight: 0, //表格最大值
      total: 2, //总页数
      pagesize: 10, //每页数据
      currentPage: 1, //当前页
      taskList: [
        {
          type: 0,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 0
        },
        {
          type: 0,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        },
        {
          type: 1,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        },
        {
          type: 2,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        },
        {
          type: 3,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        },
        {
          type: 4,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        },
        {
          type: 5,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        },
        {
          type: 6,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        },
        {
          type: 7,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        },
        {
          type: 8,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        },
        {
          type: 9,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        },
        {
          type: 10,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        },
        {
          type: 11,
          date: "C0000008810",
          name: "C0000008810",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查",
          status: 1
        }
      ] //查询结果集
    };
  },
  mounted() {
    var that = this;
    this.$nextTick(() => {
      that.screeHeight = that.$store.state.screeHeight - 85;
      var bottomViewOffsetTop = that.$refs.bottomView.$el.offsetTop;
      that.tableCapitalMaxHeight = that.screeHeight - bottomViewOffsetTop - 30;
      that.smallTableCapitalMaxHeight = that.tableCapitalMaxHeight;
    });

    this.$f7ready(f7 => {
      that.$$("#accordionCapitalItem").on("accordion:beforeopen", function() {
        that.tableCapitalMaxHeight = that.smallTableCapitalMaxHeight;
      });

      //Accordion关闭事件监听
      that.$$("#accordionCapitalItem").on("accordion:closed", function() {
        if (that.bigTableCapitalMaxHeight != 0) {
          that.tableCapitalMaxHeight = that.bigTableCapitalMaxHeight;
        } else {
          var bottomViewOffsetTop = that.$refs.bottomView.$el.offsetTop;
          that.tableCapitalMaxHeight =
            that.screeHeight - bottomViewOffsetTop - 30;
          that.bigTableCapitalMaxHeight = that.tableCapitalMaxHeight;
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
      queryInfo.mechanism = this.mechanism;
      queryInfo.certificatesType = this.certificatesType;
      queryInfo.customNo = this.customNo;
      queryInfo.certificatesNo = this.certificatesNo;
      queryInfo.automatic = this.automatic;
      queryInfo.taskState = this.taskState;
      console.error(queryInfo);
    },

    /**
     * 重置按钮回调
     */
    onResetTask() {
      this.customerType = "";
      this.customerName = "";
      this.mechanism = "";
      this.certificatesType = "";
      this.customNo = "";
      this.certificatesNo = "";
      this.taskState = "";
      this.automatic = "";
    },

    /**
     * 条目点击事件
     */
    onItemClick(item) {
      this.$f7router.navigate({
        name: "TaskCapitalIOUSelectionPage",
        query: { customType: item.type }
      });
      this.$f7.views.left.router.navigate({
        name: "TaskCapitalNavigationPage",
        query: { customType: item.type }
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