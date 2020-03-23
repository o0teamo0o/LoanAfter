<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a @click="onBack">
          <i class="icon icon-back"></i>
          <span>返回</span>
        </a>
      </f7-nav-left>
      <f7-nav-title>借据选择</f7-nav-title>
      <f7-nav-right>
        <f7-button outline @click="onAdd">添加</f7-button>
        <f7-button outline @click="onDelete">删除</f7-button>
        <f7-button outline @click="onConfirm">确认</f7-button>
        <f7-button outline @click="onSave">保存</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-card class="financial-layout">
      <div class="flex">
        <div class="result-hint">借据信息</div>
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
      <el-table :data="taskList" border>
        <el-table-column fixed type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="书面合同编号" width="280"></el-table-column>
        <el-table-column prop="name" label="合同编号" width="150"></el-table-column>
        <el-table-column prop="province" label="借据编号" width="140"></el-table-column>
        <el-table-column prop="city" label="业务种类" width="140"></el-table-column>
        <el-table-column prop="address" label="借据金额" width="130"></el-table-column>
        <el-table-column prop="zip" label="币种" width="90"></el-table-column>
        <el-table-column prop="jclx" label="起始日期" width="110"></el-table-column>
        <el-table-column prop="M" label="到期日期" width="110"></el-table-column>
        <el-table-column prop="riqi" label="已检查金额" width="130"></el-table-column>
        <el-table-column fixed="right" label="本次检查金额" width="130">
          <template slot-scope="scope">
            <i class="keynote">*</i>
            <el-input
              style="width:90% !important;"
              v-model="scope.row.state"
              :value="scope.row.state"
              clearable
            ></el-input>
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
      total: 2, //总页数
      pagesize: 10, //每页数据
      currentPage: 1, //当前页
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
      ], //查询结果集
      multipleSelection: []
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customType) {
          that.customType = page.route.query.customType;
          console.log("检查结论页面获取到的参数:", that.customType);
        }
      });
    });
  },
  methods: {
    /**
     * 添加借据
     */
    onAdd() {
      this.$f7router.navigate({
        name: "TaskCapitalAddIOUPage",
        query: { customType: "我是参数" }
      });
    },
    /**
     * 删除借据
     */
    onDelete() {},
    /**
     * 确认借据
     */
    onConfirm() {},
    /**
     * 保存借据
     */
    onSave() {},
    /**
     * 页面返回事件
     */
    onBack() {
      this.$f7.views.main.router.back();
      this.$f7.views.left.router.back();
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

<style lang='less'>
.interest-col .el-input {
  width: 90% !important;
}
</style>