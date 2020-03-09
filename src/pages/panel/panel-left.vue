<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>授信后管理</f7-nav-title>
    </f7-navbar>

    <f7-list>
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
          class="icon-menu"
          :src="currentNavigationIndex == index ? item.imgSelectedUrl : item.imgNormalUrl"
        />
      </f7-list-item>
    </f7-list>

    <!-- <f7-list>
      <f7-list-item link="/task-check/" title="授信后任务检查" view="#main-view" @click="clearPageCache">
        <img slot="media" class="icon-menu" src="../../assets/icon_menu_task.png" />
      </f7-list-item>
      <f7-list-item title="设置" view="#main-view" link="/setting/" @click="clearPageCache">
        <img slot="media" class="icon-menu" src="../../assets/icon_menu_setting.png" />
      </f7-list-item>
    </f7-list>-->
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
          imgSelectedUrl: require("../../assets/icon_task_workbench_selected.png"),
          imgNormalUrl: require("../../assets/icon_task_workbench_mormal.png"),
          link: "/"
        },
        {
          title: "资金用途检查",
          imgSelectedUrl: require("../../assets/icon_task_capital_selected.png"),
          imgNormalUrl: require("../../assets/icon_task_capital_normal.png"),
          link: "/task-capital/"
        },
        {
          title: "日常维护检查",
          imgSelectedUrl: require("../../assets/icon_task_maintain_selected.png"),
          imgNormalUrl: require("../../assets/icon_task_maintain_normal.png"),
          link: "/task-check/"
        },
        {
          title: "到期前检查",
          imgSelectedUrl: require("../../assets/icon_task_expire_selected.png"),
          imgNormalUrl: require("../../assets/icon_task_expire_normal.png"),
          link: "/task-check/"
        },
        {
          title: "逾期催收检查",
          imgSelectedUrl: require("../../assets/icon_task_collection_selected.png"),
          imgNormalUrl: require("../../assets/icon_task_collection_normal.png"),
          link: "/task-check/"
        },
        {
          title: "内部监督检查",
          imgSelectedUrl: require("../../assets/icon_task_supervise_selected.png"),
          imgNormalUrl: require("../../assets/icon_task_supervise_normal.png"),
          link: "/task-check/"
        },
        {
          title: "设置",
          imgSelectedUrl: require("../../assets/icon_menu_setting_selected.png"),
          imgNormalUrl: require("../../assets/icon_menu_setting_normal.png"),
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
.selected-item {
  color: #409eff !important;
  font-weight: bold;
}
.normal-item {
  color: #c0c4cc !important;
}
</style>