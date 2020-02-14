<template>
  <f7-page name="index-left">
    <f7-navbar>
      <f7-nav-title>贷后管理</f7-nav-title>
    </f7-navbar>

    <f7-list>
      <f7-list-item link="/left-page-1/" title="贷后任务检查" view="#main-view"></f7-list-item>
      <f7-list-item title="设置" view="#main-view" link="/" @click="clearCache"></f7-list-item>
    </f7-list>
  </f7-page>
</template>


<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    clearCache: function() {
      let self = this;

      setTimeout(function() {
        self.$$(".page-on-left").remove();
      }, 1000);
    }
  }
};
</script>