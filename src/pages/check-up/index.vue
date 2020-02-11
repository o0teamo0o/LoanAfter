<template>
<f7-app>
    <f7-panel class="view-left" left reveal>
      <!-- <f7-view name='left' navbar-through :dynamic-navbar='true'  url="/index-left-menu"></f7-view> -->

    <f7-view>
      <f7-page>
        <f7-block>Left panel content</f7-block>
      </f7-page>
    </f7-view>
    </f7-panel>

    <f7-views>
      <!-- 中间视图 -->
      <f7-view class="container-layout" url="/index-container"></f7-view>
    </f7-views>
</f7-app>

</template>

<script>
import '../../css/index.css';

export default {
    
}
</script>