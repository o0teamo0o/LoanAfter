<template>
  <f7-page class="navigation-layout">
    <f7-navbar class="navigation-bar">
      <f7-nav-title>授信后管理</f7-nav-title>
    </f7-navbar>

    <f7-list class="nav-menu-list">
      <f7-list-item
        v-for="(item, index) in menus"
        :key="index"
        :title="item.title"
        view="#main-view"
        @click="onNavigationClick(index)"
        :class="currentNavigationIndex == index ? 'selected-item' : 'normal-item'"
      >
        <img
          slot="media"
          :class='["icon-menu", currentNavigationIndex == index ? "icon-selected" : "icon-normal"]'
          :src="item.imgUrl"
        />
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>


<script>
export default {
  data: function() {
    return {
      currentNavigationIndex: 0, //默认选择菜单
      currentContainerPath: "/", //默认为首页
      menus: [
        {
          title: "工作台",
          imgUrl: require("../../assets/icon_task_workbench.png"),
          link: "/"
        },
        {
          title: "资金用途检查",
          imgUrl: require("../../assets/icon_task_capital.png"),
          link: "/task-capital/"
        },
        {
          title: "日常维护检查",
          imgUrl: require("../../assets/icon_task_maintain.png"),
          link: "/daily-task/"
        },
        {
          title: "业务到期检查",
          imgUrl: require("../../assets/icon_task_expire.png"),
          link: "/expire-task/"
        },
        {
          title: "设置",
          imgUrl: require("../../assets/icon_menu_setting.png"),
          link: "/setting/"
        }
      ]
    };
  },
  methods: {
    /**
     * 菜单条目点击事件
     */
    onNavigationClick(index) {
      var that = this;
      that.currentNavigationIndex = index;
      var jumpRouterUrl = that.menus[index].link;
      if (that.currentContainerPath != jumpRouterUrl) {
        that.$f7.views.main.router.navigate(jumpRouterUrl, {
          reloadCurrent: true //用路由中的新页面替换当前页面，在这种情况下不显示动画
        });
        that.currentContainerPath = jumpRouterUrl; //更新当前路径
      }

      that.clearPageCache();
    },
    /**
     * 清除缓存页面
     */
    clearPageCache() {
      let self = this;

      setTimeout(function() {
        self.$$(".page-on-left").remove();
      }, 1000);
    }
  }
};
</script>

<style lang='less'>
.icon-menu {
  width: 25px;
}

.icon-selected {
  opacity: 1;
}

.icon-normal {
  opacity: 0.6;
}
</style>