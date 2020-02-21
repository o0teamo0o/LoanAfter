<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>贷后管理</f7-nav-title>
    </f7-navbar>

    <f7-list>
      <f7-list-item link="/task-check/" title="贷后任务检查" view="#main-view" @click="clearPageCache">
        <img slot="media" class="icon-menu" src="../../assets/icon_menu_task.png" />
      </f7-list-item>
      <f7-list-item title="设置" view="#main-view" link="/setting/" @click="clearPageCache">
        <img slot="media" class="icon-menu" src="../../assets/icon_menu_setting.png" />
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
</style>