<template>
  <f7-page name="main">
    <f7-block class="ks-grid">
      <f7-row>
        <f7-col width="50">
          <f7-card>
            <div class="flex">
              <img class="icon-head" src="../../assets/icon_head.png" />
              <f7-row>
                <f7-col width="100" class="nickname">早安! 张三</f7-col>
                <f7-col width="100" class="role">客户经理</f7-col>
              </f7-row>
            </div>
          </f7-card>
        </f7-col>
        <f7-col width="50">
          <f7-card>
            <f7-row class="card-padding">
              <f7-col width="100" class="time-mark">今天是:</f7-col>
              <f7-col width="100" class="week">{{currentDate.currentWeek}}</f7-col>
              <f7-col width="100" class="date">{{currentDate.currentDate}}</f7-col>
            </f7-row>
          </f7-card>
        </f7-col>
      </f7-row>
    </f7-block>

    <!-- <f7-card>
      <f7-card-header>授信后任务快捷菜单</f7-card-header>
      <f7-card-content>待定</f7-card-content>
    </f7-card>-->
  </f7-page>
</template>


<script>
import { DateTime } from "../../utils/DataTime";
export default {
  data() {
    return {
      currentDate: {}
    };
  },
  created() {
    let date = new DateTime();
    this.currentDate.currentDate = date.getDate();
    this.currentDate.currentTime = date.getTime();
    this.currentDate.currentWeek = date.getWeek();
  }
};
</script>

<style lang='less' scoped>
@import "../../css/base.less";

.icon-head {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin: 20px;
  border: 2px solid #b2b2b2;
}

.nickname {
  font-size: 18px;
  color: #333;
}

.role {
  font-size: 14px;
  margin-top: 7px;
  color: @main-color;
}

.card-padding {
  padding: 20px;

  .time-mark {
    font-size: 14px;
    color: #666;
  }

  .week {
    font-size: 16px;
    color: #333;
    margin-top: 5px;
  }

  .date {
    font-size: 16px;
    color: #333;
    margin-top: 5px;
  }
}
</style>