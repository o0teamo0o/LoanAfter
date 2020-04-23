<template>
  <f7-page name="main" id="home-page">
    <f7-block class="ks-grid">
      <f7-row>
        <f7-col width="33">
          <f7-card class="card-capital">
            <div class="inter-layout">
              <div class="flex">
                <div class="left-layout">
                  <div>资金用途待检查任务</div>
                  <div class="num">0</div>
                </div>
                <div class="flex-1"></div>
                <img
                  class="task-icon"
                  src="../../assets/icon_home_capital.png"
                  alt=""
                />
              </div>
            </div>
          </f7-card>
        </f7-col>
        <f7-col width="33">
          <f7-card class="card-daily">
            <div class="inter-layout">
              <div class="flex">
                <div class="left-layout">
                  <div>日常维护检查任务</div>
                  <div class="num">0</div>
                </div>
                <div class="flex-1"></div>
                <img
                  class="task-icon"
                  src="../../assets/icon_home_daily.png"
                  alt=""
                />
              </div>
            </div>
          </f7-card>
        </f7-col>
        <f7-col width="33">
          <f7-card class="card-expire">
            <div class="inter-layout">
              <div class="flex">
                <div class="left-layout">
                  <div>业务到期检查任务</div>
                  <div class="num">0</div>
                </div>
                <div class="flex-1"></div>
                <img
                  class="task-icon"
                  src="../../assets/icon_home_expire.png"
                  alt=""
                />
              </div>
            </div>
          </f7-card>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import Popup from "vant/lib/popup";
import "vant/lib/popup/style";

export default {
  data() {
    return {};
  },
  beforeCreate() {},
  created() {},
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

.card-capital {
  background-color: #3d7eff;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(61, 126, 255, 0.2) !important;

  .inter-layout {
    width: 100%;
    height: 100%;
    background-color: white;
    margin-left: 4px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
  }

  .left-layout {
    color: #3d7eff;
    font-weight: bold;
    padding: 10px 5px;
    font-size: 14px;

    .num {
      font-size: 18px;
      color: #333;
    }
  }

  .task-icon {
    width: 30px;
    height: auto;
    opacity: 0.7;
  }
}


.card-daily {
  background-color: #3fba2f;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(63, 186, 47, 0.2) !important;

  .inter-layout {
    width: 100%;
    height: 100%;
    background-color: white;
    margin-left: 4px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
  }

  .left-layout {
    color: #3fba2f;
    font-weight: bold;
    padding: 10px 5px;
    font-size: 14px;

    .num {
      font-size: 18px;
      color: #333;
    }
  }

  .task-icon {
    width: 35px;
    height: auto;
    opacity: 0.7;
  }
}

.card-expire {
  background-color: #ed6d44;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(237, 109, 68, 0.2) !important;

  .inter-layout {
    width: 100%;
    height: 100%;
    background-color: white;
    margin-left: 4px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
  }

  .left-layout {
    color: #ed6d44;
    font-weight: bold;
    padding: 10px 5px;
    font-size: 14px;

    .num {
      font-size: 18px;
      color: #333;
    }
  }

  .task-icon {
    width: 30px;
    height: auto;
    opacity: 0.7;
  }
}
</style>
