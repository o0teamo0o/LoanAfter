<template>
  <!-- App -->
  <f7-app :params="f7params">
    <!-- 左边菜单容器 -->
    <f7-panel
      class="menu-layout"
      id="left-view"
      :style="{ width: menuWidth + 'px' }"
      left
      reveal
    >
      <f7-view id="left-panel-view" url="/panel-left/" name="left"></f7-view>
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
      <f7-view url="/panel-right/" name="right"></f7-view>
    </f7-panel>

    <!-- 最上面的导航条 -->
    <f7-appbar>
      <div class="appbar-layout">
        <img class="img-logo-l" src="./assets/logo_bg_l.png" />
        <img class="img-logo-s" src="./assets/logo_bg_s.png" />
        <div class="logo-view" :style="{ width: menuWidth + 'px' }"></div>
        <!-- 控制左边菜单的按钮 -->
        <img
          class="menu-switch"
          v-on:click="onMenuToggleListener"
          v-bind:src="
            menuToggle
              ? require('./assets/icon_menu_shrink.png')
              : require('./assets/icon_menu_open.png')
          "
        />
        <div class="empty" />
        <div class="appbar-right">
          <el-badge :value="9" :max="99" class="item">
            <img class="img-news" src="./assets/icon_news.png" />
          </el-badge>
          <img class="img-exit" src="./assets/icon_exit.png" @click="onExit" />
        </div>
      </div>
    </f7-appbar>

    <f7-views class="container-out-layout">
      <!-- 中间视图 -->
      <f7-view
        id="main-view"
        class="view-main"
        v-bind:style="{ width: containerWidth + 'px' }"
        navbar-through
        toolbar-through
        :dynamic-navbar="true"
        main
      >
        <!-- Pages -->
        <f7-page>
          <home-page></home-page>
        </f7-page>
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
      menuWidth: 180, //左边菜单默认宽度
      containerWidth: 0 //容器宽度
    };
  },
  mounted() {
    this.$f7ready(f7 => {
      this.screenWidth = this.$$(window).width();
      this.screeHeight = this.$$(window).height();
      this.containerWidth = this.screenWidth - this.menuWidth;
      this.$store.commit("setScreenWidth", this.screenWidth);
      this.$store.commit("setScreeHeight", this.screeHeight);

      //判断当前系统是否是ipad使用
      if (!this.$device.ipad) {
        f7.dialog.alert("如果是浏览器,请按F12-使用ipad横屏模式运行此程序");
      }

      // var mainView = this.$f7.views.main;
      // mainView.params.stackPages = true;
      // mainView.params.allowDuplicateUrls = true;
      // mainView.params.reloadPages = true;
      // console.error("mainView:", mainView);
    });
  },
  components: { HomePage },
  methods: {
    /**
     * 返回首页
     */
    clearPageCache() {
      let self = this;

      setTimeout(function() {
        self.$$(".page-on-left").remove();
      }, 1000);
    },

    /**
     * 导航条菜单收缩按钮事件
     */
    onMenuToggleListener() {
      this.menuToggle = !this.menuToggle;
      if (this.menuToggle) {
        this.menuWidth = 180;
        this.$$(".img-logo-l").css("opacity", "1");
        this.$$(".img-logo-s").css("opacity", "0");
      } else {
        this.menuWidth = 57;
        this.$$(".img-logo-l").css("opacity", "0");
        this.$$(".img-logo-s").css("opacity", "1");
      }
      this.containerWidth = this.screenWidth - this.menuWidth;
    },
    /**
     * 退出
     */
    onExit() {
      this.$f7.dialog.alert("确认退出系统吗?");
    }
  }
};
</script>

<style lang="less">
.appbar-right {
  display: flex;
  align-content: center;
  align-items: center;

  .img-news {
    width: 20px;
    height: 20px;
  }

  .img-exit {
    width: 20px;
    height: 20px;
    margin-left: 30px;
    margin-right: 15px;
  }
}
</style>
