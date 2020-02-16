<template>
  <f7-page name="task-check">
    <f7-navbar>
      <f7-nav-title>贷后任务检查</f7-nav-title>
    </f7-navbar>

    <div class="query-layout">
      <f7-block-title>基本信息</f7-block-title>

      <f7-card class="top-layout">
        <f7-list accordion>
          <f7-list-item
            id="accordionItem"
            accordion-item
            title="查询要素"
            opened
            class="accordion-item-opened"
          >
            <div class="line"></div>
            <f7-accordion-content>
              <f7-row class="item-layout">
                <f7-col width="50" class="title">
                  <span class="hint">客户类别</span>
                  <f7-input class="value" type="select" placeholder="请输入内容" defaultValue="--请选择--">
                    <option>--请选择--</option>
                    <option>对公客户</option>
                    <option>个人客户</option>
                  </f7-input>
                </f7-col>
                <f7-col width="50" class="title">
                  <span class="hint">客户名称</span>
                  <f7-input class="value" type="text" placeholder="请输入内容" clear-button></f7-input>
                </f7-col>
              </f7-row>
              <f7-row class="item-layout">
                <f7-col width="50" class="title">
                  <span class="hint">检查类型</span>
                  <f7-input class="value" type="select" placeholder="请输入内容" defaultValue="--请选择--">
                    <option>--请选择--</option>
                    <option>资金用途检查</option>
                    <option>日常维护检查</option>
                    <option>业务到期检查</option>
                  </f7-input>
                </f7-col>
                <f7-col width="50" class="title">
                  <span class="hint">任务状态</span>
                  <f7-input class="value" type="select" placeholder="--请选择--">
                    <option>--请选择--</option>
                    <option>待检查</option>
                    <option>检查中</option>
                  </f7-input>
                </f7-col>
              </f7-row>

              <f7-row class="btn-layout">
                <f7-col width="25"></f7-col>
                <f7-col width="20" tag="span">
                  <f7-button large raised fill color="gray">重置</f7-button>
                </f7-col>
                <f7-col width="10"></f7-col>
                <f7-col width="20" tag="span">
                  <f7-button large raised fill color="red">查询</f7-button>
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
          :max-height="tableMaxHeight"
        >
          <el-table-column fixed prop="date" label="客户名称" width="110"></el-table-column>
          <el-table-column prop="name" label="客户编号" width="110"></el-table-column>
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
              <el-button @click="handleClick(scope.row)" type="text" size="small">接收</el-button>
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
          date: "P000089728",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        },
        {
          date: "P000089728",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        },
        {
          date: "P000089728",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        },
        {
          date: "P000089728",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        },
        {
          date: "P000089728",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        },
        {
          date: "P000089728",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        },
        {
          date: "P000089728",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        },
        {
          date: "P000089728",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        },
        {
          date: "P000089728",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        },
        {
          date: "P000089728",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        },
        {
          date: "P000089728",
          name: "P000089728",
          province: "第二代身份证",
          city: "430888888888888888",
          address: "",
          zip: "日常维护检查",
          jclx: "个人居住类检查",
          M: "M12",
          riqi: "2020-08-08",
          state: "待检查"
        }
      ] //查询结果集
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
      //Accordion打开事件监听
      that.$$("#accordionItem").on("accordion:opened", function() {
        if (that.smallTableMaxHeight != 0) {
          that.tableMaxHeight = that.smallTableMaxHeight;
        } else {
          var bottomViewOffsetTop = that.$refs.bottomView.$el.offsetTop;
          that.tableMaxHeight = that.screeHeight - bottomViewOffsetTop - 30;
          that.smallTableMaxHeight = that.tableMaxHeight;
        }
      });

      //Accordion关闭事件监听
      that.$$("#accordionItem").on("accordion:closed", function() {
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
    // 每页多少条
    handleSizeChange(val) {
      this.pageSize = val;
    },
    // 当前页
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
};
</script>

<style lang='less'>
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
      width: 100px;
      font-size: 16px;
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
</style>