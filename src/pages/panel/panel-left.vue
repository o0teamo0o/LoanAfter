<template>
  <f7-page name="index-left">
    <f7-navbar>
      <f7-nav-title>贷后管理</f7-nav-title>
    </f7-navbar>

    <f7-list>
      <f7-list-item link="/task-check/" title="贷后任务检查" view="#main-view" @click="clearPageCache">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
      </f7-list-item>
      <f7-list-item title="设置" view="#main-view" link="/setting/" @click="clearPageCache">
        <f7-icon slot="media" icon="house"></f7-icon>
        <!-- <img src="../../assets/icon_menu_open.png" /> -->
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>


<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    clearPageCache: function() {
      let self = this;

      setTimeout(function() {
        self.$$(".page-on-left").remove();
      }, 1000);
    }
  }
};
</script>