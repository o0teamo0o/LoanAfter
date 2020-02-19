<template>
  <f7-page name="index-left1">
    <f7-navbar>
      <f7-nav-title>贷后管理1</f7-nav-title>
    </f7-navbar>

    <f7-list>
      <f7-list-item link="/task-check/" title="贷后任务检查1" view="#main-view" @click="clearPageCache">
        <img slot="media" class="icon-menu" src="../../../assets/icon_menu_task.png" />
      </f7-list-item>
      <f7-list-item title="设置11" view="#main-view" link="/setting/" @click="clearPageCache">
        <img slot="media" class="icon-menu" src="../../../assets/icon_menu_setting.png" />
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      customerType: 0 //客户类型
    };
  },
  mounted() {
    var that = this;
    this.$$(document).on("page:init", function(e, page) {
      console.log("导航栏收到的参数:", page.route.query.customType);
    });
  }
};
</script>