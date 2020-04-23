<template>
  <f7-page name="main" id="home-page">
    <f7-block class="ks-grid">
      <f7-row>
        <f7-col width="50">
          <f7-card>
            <div class="flex">
              <img class="icon-head" src="../../assets/icon_head.png" />
              <f7-row>
                <f7-col width="100" class="nickname">早安! XXX</f7-col>
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
    <Popup v-model="isShowInfoDialog">内容</Popup>
  </f7-page>
</template>

<script>
import { DateTime } from "../../utils/DataTime";
import Popup from "vant/lib/popup";
import "vant/lib/popup/style";

export default {
  data() {
    return {
      isShowInfoDialog: false,
      currentDate: {}
    };
  },
  beforeCreate() {},
  created() {
    let date = new DateTime();
    this.currentDate.currentDate = date.getDate();
    this.currentDate.currentTime = date.getTime();
    this.currentDate.currentWeek = date.getWeek();
  },
  beforeMount() {},
  components: { Popup },
  mounted() {
    var that = this;
    this.$f7ready(f7 => {
      //修改页面切换导致首页试图下移的问题
      that
        .Dom7("#home-page")
        .children("div")
        .css({
          paddingTop: "0px"
        });
    });

    this.$bridge.registerhandler(
      "objCCallWithString",
      (data, responseCallback) => {
        that.$f7.dialog.alert("确认退出系统吗?");
      }
    );
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style lang="less" scoped>
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
