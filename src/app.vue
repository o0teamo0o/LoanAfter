<template>
  <!-- App -->
  <f7-app :params="f7params">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- 左边菜单容器 -->
    <f7-panel class="view-left" left reveal>
      <f7-navbar>
        <f7-nav-title>贷后管理</f7-nav-title>
      </f7-navbar>
      <f7-pages>
        <f7-page>我在这里</f7-page>
      </f7-pages>
    </f7-panel>

    <f7-appbar>
      <div class="appbar-layout">
        <div class="left-view">
          <img class="img-logo" src="./assets/logo.gif" />
        </div>
        <img class="menu-switch" src="./assets/icon_menu_shrink.png" />
      </div>
    </f7-appbar>

    <f7-views>
      <!-- 中间视图 -->
      <f7-view class="view-main" url="/index/"></f7-view>
    </f7-views>
  </f7-app>
</template>

<script>
// Import Routes
import routes from "./routes.js";

export default {
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: "io.framework7.testapp", // App bundle ID
        name: "Framework7", // App name
        theme: "ios", // Automatic theme detection auto
        // App routes
        routes: routes
      }
    };
  }
};
</script>
