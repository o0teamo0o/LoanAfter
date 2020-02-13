<template>
  <!-- App -->
  <f7-app :params="f7params">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- 左边菜单容器 -->
    <f7-panel class="menu-layout" :style="{width: menuWidth +'px'}" left reveal>
      <f7-view url="/left-menu/"></f7-view>
      <!-- <f7-view name="left">
        <f7-page name="index-left">
          <f7-navbar>
            <f7-nav-title>贷后管理</f7-nav-title>
          </f7-navbar>
          <f7-list>
            <f7-list-item link="/left-page-1/" title="LeftPage1"></f7-list-item>
            <f7-list-item link="/left-page-2/" title="LeftPage2"></f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>-->
    </f7-panel>

    <!-- 最上面的导航条 -->
    <f7-appbar>
      <div class="appbar-layout">
        <div class="logo-view">
          <img class="img-logo" src="./assets/logo.gif" />
        </div>
        <!-- 控制左边菜单按钮 -->
        <!-- <img
          class="menu-switch"
          v-on:click="onMenuToggleListener"
          v-bind:src="{menuToggle ? './assets/icon_menu_shrink.png' : './assets/icon_menu_open.png'}"
        />-->
      </div>
    </f7-appbar>

    <f7-views class="container-out-layout">
      <!-- 中间视图 -->
      <f7-view class="view-main" v-bind:style="{width: (1024 - menuWidth) + 'px'}" url="/index/"></f7-view>
    </f7-views>
  </f7-app>
</template>

<script>
// 引入路由文件
import routes from "./routes.js";

export default {
  data() {
    return {
      // Framework7全局样式设置
      f7params: {
        id: "hrxj.bank.loanafter", // App bundle ID
        name: "贷后管理系统", // App名字
        theme: "ios", // 设置为iOS样式
        routes: routes // App routes
      },
      menuToggle: true, //左边菜单当前展开状态 true:展开 false:收缩
      menuWidth: 180,
      containerWidth: 1024
    };
  },
  methods: {
    onMenuToggleListener: function() {
      this.menuToggle = !this.menuToggle;
      if (this.menuToggle) {
        this.menuWidth = 80;
      } else {
        this.menuWidth = 180;
      }
    },

    aaa: function() {
      // alert($f7router);
      this.$f7ready(f7 => {
        f7.dialog.alert("Component mounted");
      });
      console.error($f7router);
    }
  }
};
</script>
