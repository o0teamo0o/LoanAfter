<template>
  <f7-page name="navigation" class="navigation-layout">
    <f7-navbar class="navigation-bar" title="" back-link="返回"></f7-navbar>

    <f7-list class="nav-menu-list">
      <f7-list-item
        v-for="(item, index) in mustMenuList"
        :key="index"
        :title="item.title"
        view="#main-view"
        @click="onMustNavigationClick(index)"
        :class="
          currentNavigationIndex == index ? 'selected-item' : 'normal-item'
        "
      >
        <img
          slot="media"
          :class='["icon-menu", currentNavigationIndex == index ? "icon-selected" : "icon-normal"]'
          :src="item.imgUrl"
        />
      </f7-list-item>
    </f7-list>

    <f7-list class="nav-menu-list">
      <f7-list-item
        v-for="(item, index) in lists[customType].items"
        :key="index"
        :title="item.title"
        view="#main-view"
        @click="onNavigationClick(index + 2)"
        :class="
          currentNavigationIndex == index + 2 ? 'selected-item' : 'normal-item'
        "
      >
        <img
          slot="media"
          :class='["icon-menu", currentNavigationIndex == index + 2 ? "icon-selected" : "icon-normal"]'
          :src="item.imgUrl"
        />
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      screeHeight: 0,
      customInfo: null, //当前客户信息
      customType: 0, //客户类型; 0:公司类客户 1:事业法人客户 2:平台客户 3:房地产客户 4:小微企业客户 5:个人投资类客户 6:物业贷 7:税联贷 8:惠农系列 9.个人消费客户
      currentNavigationIndex: 0, //当前导航下标
      currentContainerPath: "", //当前容器路径
      mustMenuList: [
        //必填菜单
        {
          title: "基本信息",
          imgUrl: require("../../assets/icon_daily_info.png"),
          link: "/daily-information/"
        },
        {
          title: "影像资料",
          imgUrl: require("../../assets/icon_daily_image.png"),
          link: "/daily-portrait/"
        }
      ],
      lists: [
        {
          type: 0, //公司类客户
          items: [
            {
              title: "授信汇总",
              imgUrl: require("../../assets/icon_daily_authorize.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgUrl: require("../../assets/icon_daily_manage.png"),
              link: "/daily-management-company/"
            },
            {
              title: "项目管理",
              imgUrl: require("../../assets/icon_daily_project.png"),
              link: "/daily-project-currency/"
            },
            {
              title: "担保信息",
              imgUrl: require("../../assets/icon_daily_guarantee.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "检查结论",
              imgUrl: require("../../assets/icon_daily_inspect.png"),
              link: "/daily-inspect/"
            }
          ]
        },
        {
          type: 1, //事业法人客户
          items: [
            {
              title: "授信汇总",
              imgUrl: require("../../assets/icon_daily_authorize.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgUrl: require("../../assets/icon_daily_manage.png"),
              link: "/daily-management-enterprise/"
            },
            {
              title: "项目管理",
              imgUrl: require("../../assets/icon_daily_project.png"),
              link: "/daily-project-currency/"
            },
            {
              title: "担保信息",
              imgUrl: require("../../assets/icon_daily_guarantee.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "行业地位",
              imgUrl: require("../../assets/icon_daily_status.png"),
              link: "/daily-status/"
            },
            {
              title: "检查结论",
              imgUrl: require("../../assets/icon_daily_inspect.png"),
              link: "/daily-inspect/"
            }
          ]
        },
        {
          type: 2, //平台客户
          items: [
            {
              title: "授信汇总",
              imgUrl: require("../../assets/icon_daily_authorize.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgUrl: require("../../assets/icon_daily_manage.png"),
              link: "/daily-management-platform/"
            },
            {
              title: "项目管理",
              imgUrl: require("../../assets/icon_daily_project.png"),
              link: "/daily-project-currency/"
            },
            {
              title: "担保信息",
              imgUrl: require("../../assets/icon_daily_guarantee.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "检查结论",
              imgUrl: require("../../assets/icon_daily_inspect.png"),
              link: "/daily-inspect/"
            }
          ]
        },
        {
          type: 3, //房地产客户
          items: [
            {
              title: "授信汇总",
              imgUrl: require("../../assets/icon_daily_authorize.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgUrl: require("../../assets/icon_daily_manage.png"),
              link: "/daily-management-realestate/"
            },
            {
              title: "项目管理",
              imgUrl: require("../../assets/icon_daily_project.png"),
              link: "/daily-project-real-estate/"
            },
            {
              title: "担保信息",
              imgUrl: require("../../assets/icon_daily_guarantee.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "检查结论",
              imgUrl: require("../../assets/icon_daily_inspect.png"),
              link: "/daily-inspect/"
            }
          ]
        },
        {
          type: 4, //小微企业客户
          items: [
            {
              title: "授信汇总",
              imgUrl: require("../../assets/icon_daily_authorize.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgUrl: require("../../assets/icon_daily_manage.png"),
              link: "/daily-management-small/"
            },
            {
              title: "担保信息",
              imgUrl: require("../../assets/icon_daily_guarantee.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "检查结论",
              imgUrl: require("../../assets/icon_daily_inspect.png"),
              link: "/daily-inspect/"
            }
          ]
        },
        {
          type: 5, //个人投资类客户
          items: [
            {
              title: "授信汇总",
              imgUrl: require("../../assets/icon_daily_authorize.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgUrl: require("../../assets/icon_daily_manage.png"),
              link: "/daily-management-personal/"
            },
            {
              title: "担保信息",
              imgUrl: require("../../assets/icon_daily_guarantee.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "检查结论",
              imgUrl: require("../../assets/icon_daily_inspect.png"),
              link: "/daily-inspect/"
            }
          ]
        },
        {
          type: 6, //物业贷
          items: [
            {
              title: "授信汇总",
              imgUrl: require("../../assets/icon_daily_authorize.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgUrl: require("../../assets/icon_daily_manage.png"),
              link: "/daily-management-property/"
            },
            {
              title: "担保信息",
              imgUrl: require("../../assets/icon_daily_guarantee.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "检查结论",
              imgUrl: require("../../assets/icon_daily_inspect.png"),
              link: "/daily-inspect/"
            }
          ]
        },
        {
          type: 7, //税联贷
          items: [
            {
              title: "授信汇总",
              imgUrl: require("../../assets/icon_daily_authorize.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgUrl: require("../../assets/icon_daily_manage.png"),
              link: "/daily-management-tax-union/"
            },
            {
              title: "担保信息",
              imgUrl: require("../../assets/icon_daily_guarantee.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "检查结论",
              imgUrl: require("../../assets/icon_daily_inspect.png"),
              link: "/daily-inspect/"
            }
          ]
        },
        {
          type: 8, //惠农系列
          items: [
            {
              title: "授信汇总",
              imgUrl: require("../../assets/icon_daily_authorize.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgUrl: require("../../assets/icon_daily_manage.png"),
              link: "/daily-management-farmers/"
            },
            {
              title: "担保信息",
              imgUrl: require("../../assets/icon_daily_guarantee.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "检查结论",
              imgUrl: require("../../assets/icon_daily_inspect.png"),
              link: "/daily-inspect/"
            }
          ]
        },
        {
          type: 9, //个人消费客户
          items: [
            {
              title: "授信汇总",
              imgUrl: require("../../assets/icon_daily_authorize.png"),
              link: "/daily-authorization/"
            },
            {
              title: "担保信息",
              imgUrl: require("../../assets/icon_daily_guarantee.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "检查结论",
              imgUrl: require("../../assets/icon_daily_inspect.png"),
              link: "/daily-inspect/"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    var that = this;

    that.customInfo = this.$store.state.currentCensorInfo;
    that.customType = that.customInfo.type;
    console.error("customInfo:", that.customInfo)

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
          that.currentContainerPath = page.route.path;
        // if (page.route.query.customInfo) {
          // that.customInfo = JSON.parse(page.route.query.customInfo);
          //获取当前客户类型
          // that.customType = that.customInfo.type;
          //获取当前容器路径
          // that.currentContainerPath = page.route.path;
          // console.log("当前的url:", that.currentContainerPath);
        // }
      });
    });
  },
  created() {
    var that = this;

    //监听是否新增项目管理页面
    this.$bus.on("addProjectmenu", () => {
      //先获取当前菜单集合个数
      var menuCount = that.lists[that.customType].items.length;
      var currentMenus = that.lists[that.customType].items;

      var firstProjectIndex = 0;
      for (let i = 0; i < currentMenus.length; i++) {
        const item = currentMenus[i];
        var firstIndex = item.title.indexOf("项目管理", 0);
        if (firstIndex != -1) {
          firstProjectIndex = i;
          break;
        }
      }

      //代表从来没有新增过
      //1.先修改原型的项目管理名称 项目管理-1
      that.lists[that.customType].items[firstProjectIndex].title = "项目管理-1";
      //2.产生一条新的项目管理记录
      var newProjectNo = menuCount - 3;
      //如果是事业法人模板
      if (that.customType == 1) {
        newProjectNo = menuCount - 4;
      }
      var newProject = {
        title: "项目管理-" + newProjectNo,
        imgUrl: require("../../assets/icon_daily_project.png"),
        link: "/daily-project-currency/"
      };
      //3.再新增一条记录
      var insertIndex = menuCount - 2;
      //如果是事业法人模板
      if (that.customType == 1) {
        insertIndex = menuCount - 3;
      }
      that.lists[that.customType].items.splice(insertIndex, 0, newProject);
    });
  },
  methods: {
    /**
     * 必填项菜单选择
     */
    onMustNavigationClick(index) {
      var that = this;
      that.currentNavigationIndex = index;
      var jumpRouterUrl = that.mustMenuList[index].link;
      if (that.currentContainerPath != jumpRouterUrl) {
        that.$f7.views.main.router.navigate(jumpRouterUrl, {
          reloadCurrent: true //用路由中的新页面替换当前页面，在这种情况下不显示动画
        });
        that.currentContainerPath = jumpRouterUrl; //更新当前路径
      }
    },
    /**
     * 输入项菜单条目选择
     */
    onNavigationClick(index) {
      var that = this;

      if (!that.customInfo.isMustInput) {
        that.$f7.dialog
          .create({
            title: "温馨提示",
            text:
              "请先完成“基本信息”及“影像资料”模块数据采集后，方可进行此操作!",
            buttons: [
              {
                text: "确定"
              }
            ],
            onClick: function(dialog, index) {}
          })
          .open();
        return;
      }

      that.currentNavigationIndex = index;
      var index = index - 2;
      var jumpRouterUrl = that.lists[that.customType].items[index].link;
      if (that.currentContainerPath != jumpRouterUrl) {
        that.$f7.views.main.router.navigate(jumpRouterUrl, {
          reloadCurrent: true //用路由中的新页面替换当前页面，在这种情况下不显示动画
        });
        that.currentContainerPath = jumpRouterUrl; //更新当前路径
      }
    }
  }
};
</script>

<style lang="less">
.selected-item {
  color: #409eff !important;
  font-weight: bold;
}
.normal-item {
  color: #c0c4cc !important;
}
</style>
