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
                <f7-col width="100" class="role">大堂经理</f7-col>
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
  width: 80px;
  height: 80px;
  margin: 20px;
  border: 2px solid #b2b2b2;
}

.nickname {
  font-size: 22px;
  font-weight: bold;
  color: #333;
}

.role {
  font-size: 16px;
  margin-top: 7px;
  color: @main-color;
}

.card-padding {
  padding: 20px;

  .time-mark {
    font-size: 16px;
    color: #666;
  }

  .week {
    font-size: 18px;
    color: #333;
    margin-top: 5px;
    font-weight: bold;
  }

  .date {
    font-size: 18px;
    color: #333;
    margin-top: 5px;
    font-weight: bold;
  }
}
</style>