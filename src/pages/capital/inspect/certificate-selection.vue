<template>
  <f7-page>
    <f7-navbar title="证件类型选择" back-link="返回"></f7-navbar>
    <f7-card>
      <el-table
        :data="
          certificateList.filter(
            data =>
              !certificateSearchKey || data.name.toLowerCase().includes(certificateSearchKey.toLowerCase())
          )
        "
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column
          prop="id"
          label="代码"
          sortable
          width="120"
        ></el-table-column>
        <el-table-column prop="name" label="名称" width="400"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="certificateSearchKey"
              :value="certificateSearchKey"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>
          <template slot-scope="scope">
            <div v-if="scope.row.children"></div>
            <div v-else>
              <f7-link
                class="btn-link"
                view="#left-panel-view"
                data-force="true"
                data-push-state="true"
                @click="onItemClick(scope.row)"
                >选择</f7-link
              >
            </div>
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
      certificateSearchKey: "",
      certificateList: [
        {
          id: "0",
          name: "身份证",
          children: [
            {
              id: "01",
              name: "第一代身份证"
            },
            {
              id: "02",
              name: "第二代身份证"
            }
          ]
        },
        {
          id: "1",
          name: "户口簿"
        },
        {
          id: "2",
          name: "护照",
          children: [
            {
              id: "21",
              name: "中国护照"
            },
            {
              id: "22",
              name: "外国护照"
            }
          ]
        },
        {
          id: "3",
          name: "军官证",
          children: [
            {
              id: "31",
              name: "军官证"
            },
            {
              id: "32",
              name: "军官退休证"
            },
            {
              id: "33",
              name: "军事学院证"
            }
          ]
        },
        {
          id: "4",
          name: "士兵证"
        },
        {
          id: "5",
          name: "港澳居民来往内地通行证",
          children: [
            {
              id: "51",
              name: "港澳通行证"
            }
          ]
        },
        {
          id: "6",
          name: "台湾同胞来往内地通行证"
        },
        {
          id: "7",
          name: "临时身份证"
        },
        {
          id: "8",
          name: "外国人居留证",
          children: [
            {
              id: "81",
              name: "外国人永久居住证"
            },
            {
              id: "82",
              name: "边民出入境通行证"
            }
          ]
        }
      ]
    };
  },
  methods: {
    /**
     * 条目点击事件
     */
    onItemClick(item) {
      this.$f7.views.main.router.back({
        pageName: "detaile" //页面的data-page值
      });
    }
  }
};
</script>
