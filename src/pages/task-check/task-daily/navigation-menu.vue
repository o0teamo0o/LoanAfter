<template>
  <f7-page name="navigation">
    <f7-navbar title="导航" back-link="返回"></f7-navbar>

    <f7-list>
      <f7-list-item
        v-for="(item, index) in lists[customType].items"
        :key="index"
        :title="item.title"
        view="#main-view"
        @click="onNavigationClick(index)"
        :class="currentNavigationIndex == index ? 'selected-item' : 'normal-item'"
      >
        <img
          slot="media"
          class="icon-menu"
          :src="currentNavigationIndex == index ? item.imgSelectedUrl : item.imgNormalUrl"
        />
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      customType: 0, //客户类型; 0:公司类客户 1:事业法人客户 2:平台客户 3:房地产客户 4:集团客户 5:小微企业客户 6:个人投资类客户 7:物业贷 8:税联贷 9:惠农系列 10.个人消费客户
      currentNavigationIndex: 0, //当前导航下标
      currentContainerPath: "", //当前容器路径
      lists: [
        {
          type: 0, //公司类客户
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/daily-information/"
            },
            {
              title: "授信汇总",
              imgSelectedUrl: require("../../../assets/icon_daily_authorize_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_authorize_normal.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgSelectedUrl: require("../../../assets/icon_daily_manage_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_manage_normal.png"),
              link: "/daily-management-company/"
            },
            {
              title: "项目管理",
              imgSelectedUrl: require("../../../assets/icon_daily_project_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_project_normal.png"),
              link: "/daily-project/"
            },
            {
              title: "担保信息",
              imgSelectedUrl: require("../../../assets/icon_daily_guarantee_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_guarantee_normal.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "风险分类",
              imgSelectedUrl: require("../../../assets/icon_daily_risk_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_risk_normal.png"),
              link: "/daily-risk/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/daily-inspect/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/daily-portrait/"
            }
          ]
        },
        {
          type: 1, //事业法人客户
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/daily-information/"
            },
            {
              title: "授信汇总",
              imgSelectedUrl: require("../../../assets/icon_daily_authorize_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_authorize_normal.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgSelectedUrl: require("../../../assets/icon_daily_manage_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_manage_normal.png"),
              link: "/daily-management-enterprise/"
            },
            {
              title: "项目管理",
              imgSelectedUrl: require("../../../assets/icon_daily_project_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_project_normal.png"),
              link: "/daily-project/"
            },
            {
              title: "担保信息",
              imgSelectedUrl: require("../../../assets/icon_daily_guarantee_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_guarantee_normal.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "风险分类",
              imgSelectedUrl: require("../../../assets/icon_daily_risk_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_risk_normal.png"),
              link: "/daily-risk/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/daily-inspect/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/daily-portrait/"
            }
          ]
        },
        {
          type: 2, //平台客户
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/daily-information/"
            },
            {
              title: "授信汇总",
              imgSelectedUrl: require("../../../assets/icon_daily_authorize_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_authorize_normal.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgSelectedUrl: require("../../../assets/icon_daily_manage_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_manage_normal.png"),
              link: "/daily-management-platform/"
            },
            {
              title: "项目管理",
              imgSelectedUrl: require("../../../assets/icon_daily_project_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_project_normal.png"),
              link: "/daily-project/"
            },
            {
              title: "担保信息",
              imgSelectedUrl: require("../../../assets/icon_daily_guarantee_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_guarantee_normal.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "风险分类",
              imgSelectedUrl: require("../../../assets/icon_daily_risk_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_risk_normal.png"),
              link: "/daily-risk/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/daily-inspect/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/daily-portrait/"
            }
          ]
        },
        {
          type: 3, //房地产客户
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/daily-information/"
            },
            {
              title: "授信汇总",
              imgSelectedUrl: require("../../../assets/icon_daily_authorize_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_authorize_normal.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgSelectedUrl: require("../../../assets/icon_daily_manage_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_manage_normal.png"),
              link: "/daily-management/"
            },
            {
              title: "项目管理",
              imgSelectedUrl: require("../../../assets/icon_daily_project_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_project_normal.png"),
              link: "/daily-project/"
            },
            {
              title: "担保信息",
              imgSelectedUrl: require("../../../assets/icon_daily_guarantee_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_guarantee_normal.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "风险分类",
              imgSelectedUrl: require("../../../assets/icon_daily_risk_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_risk_normal.png"),
              link: "/daily-risk/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/daily-inspect/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/daily-portrait/"
            }
          ]
        },
        {
          type: 4, //集团客户
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/daily-information/"
            },
            {
              title: "客户经营",
              imgSelectedUrl: require("../../../assets/icon_daily_manage_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_manage_normal.png"),
              link: "/daily-management/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/daily-inspect/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/daily-portrait/"
            }
          ]
        },
        {
          type: 5, //小微企业客户
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/daily-information/"
            },
            {
              title: "授信汇总",
              imgSelectedUrl: require("../../../assets/icon_daily_authorize_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_authorize_normal.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgSelectedUrl: require("../../../assets/icon_daily_manage_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_manage_normal.png"),
              link: "/daily-management-small/"
            },
            {
              title: "担保信息",
              imgSelectedUrl: require("../../../assets/icon_daily_guarantee_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_guarantee_normal.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "风险分类",
              imgSelectedUrl: require("../../../assets/icon_daily_risk_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_risk_normal.png"),
              link: "/daily-risk/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/daily-inspect/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/daily-portrait/"
            }
          ]
        },
        {
          type: 6, //个人投资类客户
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/daily-information/"
            },
            {
              title: "授信汇总",
              imgSelectedUrl: require("../../../assets/icon_daily_authorize_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_authorize_normal.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgSelectedUrl: require("../../../assets/icon_daily_manage_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_manage_normal.png"),
              link: "/daily-management-personal/"
            },
            {
              title: "担保信息",
              imgSelectedUrl: require("../../../assets/icon_daily_guarantee_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_guarantee_normal.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "风险分类",
              imgSelectedUrl: require("../../../assets/icon_daily_risk_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_risk_normal.png"),
              link: "/daily-risk/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/daily-inspect/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/daily-portrait/"
            }
          ]
        },
        {
          type: 7, //物业贷
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/daily-information/"
            },
            {
              title: "授信汇总",
              imgSelectedUrl: require("../../../assets/icon_daily_authorize_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_authorize_normal.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgSelectedUrl: require("../../../assets/icon_daily_manage_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_manage_normal.png"),
              link: "/daily-management/"
            },
            {
              title: "担保信息",
              imgSelectedUrl: require("../../../assets/icon_daily_guarantee_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_guarantee_normal.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "风险分类",
              imgSelectedUrl: require("../../../assets/icon_daily_risk_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_risk_normal.png"),
              link: "/daily-risk/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/daily-inspect/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/daily-portrait/"
            }
          ]
        },
        {
          type: 8, //税联贷
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/daily-information/"
            },
            {
              title: "授信汇总",
              imgSelectedUrl: require("../../../assets/icon_daily_authorize_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_authorize_normal.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgSelectedUrl: require("../../../assets/icon_daily_manage_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_manage_normal.png"),
              link: "/daily-management/"
            },
            {
              title: "担保信息",
              imgSelectedUrl: require("../../../assets/icon_daily_guarantee_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_guarantee_normal.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "风险分类",
              imgSelectedUrl: require("../../../assets/icon_daily_risk_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_risk_normal.png"),
              link: "/daily-risk/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/daily-inspect/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/daily-portrait/"
            }
          ]
        },
        {
          type: 9, //惠农系列
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/daily-information/"
            },
            {
              title: "授信汇总",
              imgSelectedUrl: require("../../../assets/icon_daily_authorize_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_authorize_normal.png"),
              link: "/daily-authorization/"
            },
            {
              title: "客户经营",
              imgSelectedUrl: require("../../../assets/icon_daily_manage_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_manage_normal.png"),
              link: "/daily-management/"
            },
            {
              title: "担保信息",
              imgSelectedUrl: require("../../../assets/icon_daily_guarantee_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_guarantee_normal.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "风险分类",
              imgSelectedUrl: require("../../../assets/icon_daily_risk_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_risk_normal.png"),
              link: "/daily-risk/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/daily-inspect/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/daily-portrait/"
            }
          ]
        },
        {
          type: 10, //个人消费客户
          items: [
            {
              title: "基本信息",
              imgSelectedUrl: require("../../../assets/icon_daily_info_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_info_normal.png"),
              link: "/daily-information/"
            },
            {
              title: "授信汇总",
              imgSelectedUrl: require("../../../assets/icon_daily_authorize_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_authorize_normal.png"),
              link: "/daily-authorization/"
            },
            {
              title: "担保信息",
              imgSelectedUrl: require("../../../assets/icon_daily_guarantee_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_guarantee_normal.png"),
              link: "/daily-guarantee/"
            },
            {
              title: "风险分类",
              imgSelectedUrl: require("../../../assets/icon_daily_risk_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_risk_normal.png"),
              link: "/daily-risk/"
            },
            {
              title: "检查结论",
              imgSelectedUrl: require("../../../assets/icon_daily_inspect_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_inspect_normal.png"),
              link: "/daily-inspect/"
            },
            {
              title: "影像资料",
              imgSelectedUrl: require("../../../assets/icon_daily_image_selected.png"),
              imgNormalUrl: require("../../../assets/icon_daily_image_normal.png"),
              link: "/daily-portrait/"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    var that = this;

    this.$f7ready(f7 => {
      this.$$(document).on("page:init", function(e, page) {
        if (page.route.query.customType) {
          //获取当前客户类型
          that.customType = page.route.query.customType;
          //获取当前容器路径
          that.currentContainerPath = page.route.path;
          // console.log("当前的url:", that.currentContainerPath);
        }
      });
    });
  },
  methods: {
    onNavigationClick(index) {
      var that = this;
      that.currentNavigationIndex = index;
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

<style lang='less'>
.selected-item {
  color: #409eff !important;
  font-weight: bold;
}
.normal-item {
  color: #c0c4cc !important;
}
</style>