<template>
  <f7-page name="index-left">
    <f7-navbar>
      <f7-nav-title>贷后管理</f7-nav-title>
    </f7-navbar>

    <f7-list>
      <f7-list-item
        media="<i class='icon icon-f7'></i>"
        link="/task-check/"
        title="贷后任务检查"
        view="#main-view"
        @click="clearCache"
      ></f7-list-item>
      <f7-list-item
        media="<i class='icon icon-f7'></i>"
        title="设置"
        view="#main-view"
        link="/setting/"
        @click="clearCache"
      ></f7-list-item>
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