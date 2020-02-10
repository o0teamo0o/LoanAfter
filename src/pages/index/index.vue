<template>
<f7-app>
  <f7-statusbar></f7-statusbar>

  <f7-panel left reveal>
    <f7-view name='left' class="view-left" url="/index-left-menu"></f7-view>
  </f7-panel>

  <f7-views>
    <!-- 中间视图 -->
    <f7-view class="view-main" url="/index-container"></f7-view>
  </f7-views>
</f7-app>

</template>

<script>
import '../../css/index.css';

export default {
    
}
</script>