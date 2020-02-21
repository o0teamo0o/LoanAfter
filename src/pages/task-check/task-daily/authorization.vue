<template>
  <f7-page>
    <f7-navbar title="授权汇总" back-link="返回"></f7-navbar>
    <f7-block-title>授权汇总</f7-block-title>
  </f7-page>
</template>

<script>
export default {
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customType) {
          that.customType = page.route.query.customType;
          console.log("授权汇总页面获取到的参数:", that.customType);
        }
      });
    });
  }
};
</script>