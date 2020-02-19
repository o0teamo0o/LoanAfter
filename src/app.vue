<template>
  <!-- App -->
  <f7-app :params="f7params">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- 左边菜单容器 -->
    <f7-panel class="menu-layout" id="left-view" :style="{width: menuWidth +'px'}" left reveal>
      <f7-view id="left-panel-view" url="/panel-left/"></f7-view>
    </f7-panel>

    <!-- 右边抽屉菜单容器 -->
    <f7-panel
      id="right-panel-view"
      class="panel-layout"
      right
      cover
      navbar-through
      :dynamic-navbar="true"
    >
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>

    <!-- 最上面的导航条 -->
    <f7-appbar>
      <div class="appbar-layout">
        <div class="logo-view">
          <f7-link href="/" view="#main-view" @click="clearPageCache">
            <img class="img-logo" src="./assets/logo.gif" />
          </f7-link>
        </div>
        <!-- 控制左边菜单的按钮 -->
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
        class="view-main"
        v-bind:style="{width: containerWidth + 'px'}"
        navbar-through
        toolbar-through
        :dynamic-navbar="true"
        main
      >
        <!-- Pages -->
        <f7-pages>
          <home-page></home-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </f7-app>
</template>

<script>
// 引入路由文件
import routes from "./routes.js";
import HomePage from "./pages/home/index.vue"; //引入首页

export default {
  data() {
    return {
      screenWidth: 1024, // 屏幕宽
      screeHeight: 768, // 屏幕高
      // Framework7全局样式设置
      f7params: {
        id: "hrxj.bank.loanafter", // App bundle ID
        name: "贷后管理系统", // App名字
        theme: "ios", // 设置为iOS样式
        routes: routes // App routes
      },
      menuToggle: true, //左边菜单当前展开状态 true:展开 false:收缩
      menuWidth: 200, //左边菜单默认宽度
      containerWidth: 0 //容器宽度
    };
  },
  mounted() {
    this.$f7ready(f7 => {
      this.screenWidth = this.$$(window).width();
      this.screeHeight = this.$$(window).height();
      this.containerWidth = this.screenWidth - this.menuWidth;
      this.$store.commit("setScreenWidth", this.screenWidth);
      this.$store.commit("setScreenWidth", this.screenWidth);

      //判断当前系统是否是ipad使用
      if (!this.$device.ipad) {
        f7.dialog.alert("请使用ipad运行此程序");
      }
    });
  },
  components: { HomePage },
  methods: {
    /**
     * 返回首页
     */
    clearPageCache: function() {
      let self = this;

      setTimeout(function() {
        self.$$(".page-on-left").remove();
      }, 1000);
    },

    /**
     * 导航条菜单收缩按钮事件
     */
    onMenuToggleListener: function() {
      this.menuToggle = !this.menuToggle;
      if (this.menuToggle) {
        this.menuWidth = 200;
      } else {
        this.menuWidth = 55;
        // this.menuWidth = 0;
      }
      this.containerWidth = this.screenWidth - this.menuWidth;
    }
  }
};
</script>
