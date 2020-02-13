<template>
  <!-- App -->
  <f7-app :params="f7params">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- 左边菜单容器 -->
    <f7-panel class="menu-layout" :style="{width: menuWidth +'px'}" left reveal>
      <f7-view url="/left-menu/"></f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <f7-panel right cover theme-dark>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>

    <!-- 最上面的导航条 -->
    <f7-appbar>
      <div class="appbar-layout">
        <div class="logo-view">
          <img class="img-logo" src="./assets/logo.gif" />
        </div>
        <!-- 控制左边菜单按钮 -->
        <img
          class="menu-switch"
          v-on:click="onMenuToggleListener"
          v-bind:src="menuToggle ? require('./assets/icon_menu_shrink.png') : require('./assets/icon_menu_open.png')"
        />
        <div class="empty" />
        <f7-link
          class="btn-right-menu"
          icon-if-ios="f7:menu"
          icon-if-md="material:menu"
          panel-open="right"
        ></f7-link>
      </div>
    </f7-appbar>

    <f7-views class="container-out-layout">
      <!-- 中间视图 -->
      <f7-view
        id="main-view"
        main
        class="view-main"
        v-bind:style="{width: containerWidth + 'px'}"
        url="/index/"
      ></f7-view>
    </f7-views>
  </f7-app>
</template>

<script>
// 引入路由文件
import routes from "./routes.js";

export default {
  data() {
    return {
      screenWidth:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth, // 屏幕宽
      screeHeight:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight, // 屏幕高
      // Framework7全局样式设置
      f7params: {
        id: "hrxj.bank.loanafter", // App bundle ID
        name: "贷后管理系统", // App名字
        theme: "ios", // 设置为iOS样式
        routes: routes // App routes
      },
      menuToggle: true, //左边菜单当前展开状态 true:展开 false:收缩
      menuWidth: 180, //左边菜单默认宽度
      containerWidth: window.innerWidth - 180
    };
  },
  methods: {
    /**
     * 导航条菜单收缩按钮事件
     */
    onMenuToggleListener: function() {
      this.menuToggle = !this.menuToggle;
      if (this.menuToggle) {
        this.menuWidth = 180;
      } else {
        this.menuWidth = 80;
      }
      this.containerWidth = this.screenWidth - this.menuWidth;
    }
  }
};
</script>
