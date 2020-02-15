<template>
  <f7-page name="task-check">
    <f7-navbar>
      <f7-nav-title>贷后任务检查</f7-nav-title>
    </f7-navbar>

    <f7-block-title>基本信息</f7-block-title>

    <f7-card>
      <f7-list accordion>
        <f7-list-item accordion-item title="查询要素" opened class="accordion-item-opened">
          <div class="line"></div>
          <f7-accordion-content>
            <f7-row class="item-layout">
              <f7-col width="50" class="title">
                <span class="hint">客户类别</span>
                <f7-input class="value" type="select" placeholder="请输入内容" defaultValue="--请选择--">
                  <option>--请选择--</option>
                  <option>对公客户</option>
                  <option>个人客户</option>
                </f7-input>
              </f7-col>
              <f7-col width="50" class="title">
                <span class="hint">客户名称</span>
                <f7-input class="value" type="text" placeholder="请输入内容" clear-button></f7-input>
              </f7-col>
            </f7-row>
            <f7-row class="item-layout">
              <f7-col width="50" class="title">
                <span class="hint">检查类型</span>
                <f7-input class="value" type="select" placeholder="请输入内容" defaultValue="--请选择--">
                  <option>--请选择--</option>
                  <option>资金用途检查</option>
                  <option>日常维护检查</option>
                  <option>业务到期检查</option>
                </f7-input>
              </f7-col>
              <f7-col width="50" class="title">
                <span class="hint">任务状态</span>
                <f7-input class="value" type="select" placeholder="--请选择--">
                  <option>--请选择--</option>
                  <option>待检查</option>
                  <option>检查中</option>
                </f7-input>
              </f7-col>
            </f7-row>

            <f7-row class="query-layout">
              <f7-col width="25"></f7-col>
              <f7-col width="20" tag="span">
                <f7-button large raised fill color="gray">重置</f7-button>
              </f7-col>
              <f7-col width="10"></f7-col>
              <f7-col width="20" tag="span">
                <f7-button large raised fill color="red">查询</f7-button>
              </f7-col>
              <f7-col width="25"></f7-col>
            </f7-row>
          </f7-accordion-content>
        </f7-list-item>
      </f7-list>
    </f7-card>
  </f7-page>
</template>


<script>
export default {};
</script>

<style lang='less' scoped>
@import "../../css/base.less";
.title {
  padding: 15px;
}

.item-layout {
  padding-left: 10px;
  padding-right: 10px;

  .title {
    padding: 15px 15px 10px 15px;
    display: flex;
    align-items: center;

    .hint {
      width: 100px;
      font-size: 16px;
      color: #666;
    }

    .value {
      flex: 1;
    }
  }
}

.query-layout {
  padding: 10px 0 20px;
}
</style>