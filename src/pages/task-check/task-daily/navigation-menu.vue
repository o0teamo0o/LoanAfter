<template>
  <f7-page name="navigation">
    <f7-navbar title="导航" back-link="返回"></f7-navbar>

    <f7-list>
      <f7-list-item
        v-for="(item, index) in lists[customerType].items"
        :key="index"
        :link="item.link"
        :title="item.title"
        view="#main-view"
        @click="onNavigationClick(index)"
        :class="currentNavigationIndex == index ? 'selected-item' : 'normal-item'"
      >
        <img
          slot="media"
          class="icon-menu"
          :src="currentNavigationIndex == index ? item.imgSelectedUrl : item.imgNormalUrl"
        />
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      customerType: 0, //客户类型; 0:公司类客户 1:事业法人客户 2:平台客户 3:房地产客户 4:集团客户 5:小微企业客户 6:个人投资类客户 7:物业贷 8:税联贷 9:惠农系列 10.个人消费客户
      currentNavigationIndex: 0, //当前导航下标
      lists: [
        {
          type: 0,
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/task-information/"
            },
            {
              title: "授信汇总",
              imgSelectedUrl: require("../../../assets/icon_daily_authorize_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_authorize_normal.png"),
              link: "/task-information/"
            },
            {
              title: "客户经营",
              imgSelectedUrl: require("../../../assets/icon_daily_manage_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_manage_normal.png"),
              link: "/task-information/"
            },
            {
              title: "项目管理",
              imgSelectedUrl: require("../../../assets/icon_daily_project_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_project_normal.png"),
              link: "/task-information/"
            },
            {
              title: "担保信息",
              imgSelectedUrl: require("../../../assets/icon_daily_guarantee_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_guarantee_normal.png"),
              link: "/task-information/"
            },
            {
              title: "风险分类",
              imgSelectedUrl: require("../../../assets/icon_daily_risk_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_risk_normal.png"),
              link: "/task-information/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/task-information/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/task-information/"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        console.log("导航栏收到的参数:", page.route.query.customType);
      });
    });
  },
  methods: {
    onNavigationClick(index) {
      this.currentNavigationIndex = index;
      var mainView = this.$f7.views.main;
      mainView.router.navigate("/about/");
    }
  }
};
</script>

<style lang='less'>
.selected-item {
  color: #409eff !important;
  font-weight: bold;
}
.normal-item {
  color: #c0c4cc !important;
}
</style>