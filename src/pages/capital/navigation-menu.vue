<template>
  <f7-page name="navigation">
    <f7-navbar title="" back-link="返回"></f7-navbar>

    <f7-list>
      <f7-list-item
        v-for="(item, index) in lists"
        :key="index"
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
      customType: 0,
      currentNavigationIndex: 0, //当前导航下标
      currentContainerPath: "", //当前容器路径
      lists: [
        {
          title: "借据选择",
          imgSelectedUrl: require("../../assets/icon_daily_info_selected.png"),
          imgNormalUrl: require("../../assets/icon_daily_info_normal.png"),
          link: "/task-capital-iou-selection/"
        },
        {
          title: "用途检查",
          imgSelectedUrl: require("../../assets/icon_daily_authorize_selected.png"),
          imgNormalUrl: require("../../assets/icon_daily_authorize_normal.png"),
          link: "/task-capital-purpose/"
        },
        {
          title: "影像资料",
          imgSelectedUrl: require("../../assets/icon_daily_image_selected.png"),
          imgNormalUrl: require("../../assets/icon_daily_image_normal.png"),
          link: "/task-capital-portrait/"
        }
      ]
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customType) {
          //获取当前客户类型
          that.customType = page.route.query.customType;
          console.log("init:导航菜单页面获取到的下标:", that.customType);
          //获取当前容器路径
          that.currentContainerPath = page.route.path;
          // console.log("当前的url:", that.currentContainerPath);
        }
      });
    });
  },
  methods: {
    onNavigationClick(index) {
      var that = this;
      that.currentNavigationIndex = index;
      var jumpRouterUrl = that.lists[index].link;
      if (that.currentContainerPath != jumpRouterUrl) {
        that.$f7.views.main.router.navigate(jumpRouterUrl, {
          reloadCurrent: true //用路由中的新页面替换当前页面，在这种情况下不显示动画
        });
        that.currentContainerPath = jumpRouterUrl; //更新当前路径
      }
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