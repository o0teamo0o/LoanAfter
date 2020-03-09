import HomePage from './pages/home/index.vue'; //首页
import PanelLeftPage from './pages/panel/panel-left.vue'; //左边菜单视图
import PanelRightPage from './pages/panel/panel-right.vue'; //右边菜单页面

import CapitalTaskPage from './pages/capital/index.vue'; //资金用途任务检查页面
import TaskCapitalNavigationPage from './pages/capital/navigation-menu.vue'; //资金用途导航页面
import TaskCapitalIOUSelectionPage from './pages/capital/inspect/iou-selection.vue'; //资金用途导-借据选择页面
import TaskCapitalAddIOUPage from './pages/capital/inspect/add-iou.vue'; //资金用途导-添加借据页面
import TaskCapitalCustomerSelectionPage from './pages/capital/inspect/customer-selection.vue'; //资金用途导-客户查询页面
import TaskCapitalPurposePage from './pages/capital/inspect/purpose.vue'; //资金用途导-用途检查页面

import TaskCheckPage from './pages/daily/index.vue'; //日常维护任务检查页面
import TaskDailyNavigationPage from './pages/daily/navigation-menu.vue'; //日常维护任务导航页面
import DailyInformationPage from './pages/daily/inspect/information.vue'; //日常任务-基本信息通用页面
import DailyAuthorizationPage from './pages/daily/inspect/authorization.vue'; //日常任务-授信汇总通用页面
import DailyManagementCompanyPage from './pages/daily/inspect/management/company.vue'; //日常任务-客户经营-公司类页面
import DailyManagementEnterprisePage from './pages/daily/inspect/management/enterprise.vue'; //日常任务-客户经营-事业法人页面
import DailyManagementPlatformPage from './pages/daily/inspect/management/platform.vue'; //日常任务-客户经营-平台客户页面
import DailyManagementSmallPage from './pages/daily/inspect/management/small.vue'; //日常任务-客户经营-小微企业页面
import DailyManagementPersonalPage from './pages/daily/inspect/management/personal.vue'; //日常任务-客户经营-个人投资页面
import DailyManagementPropertyPage from './pages/daily/inspect/management/property.vue'; //日常任务-客户经营-物业页面
import DailyManagementTaxUnionPage from './pages/daily/inspect/management/tax-union.vue'; //日常任务-客户经营-税联贷页面
import DailyManagementFarmersPage from './pages/daily/inspect/management/farmers.vue'; //日常任务-客户经营-惠农页面
import DailyProjectCurrencyPage from './pages/daily/inspect/project/currency.vue'; //日常任务-项目管理通用页面
import DailyProjectRealEstatePage from './pages/daily/inspect/project/real-estate.vue'; //日常任务-项目管理-房地产页面
import DailyGuaranteePage from './pages/daily/inspect/guarantee.vue'; //日常任务-担保信息通用页面
import DailyRiskPage from './pages/daily/inspect/risk.vue'; //日常任务-风险分类通用页面
import DailyInspectPage from './pages/daily/inspect/inspect.vue'; //日常任务-检查结论通用页面
import DailyPortraitPage from './pages/daily/inspect/portrait.vue'; //日常任务-影像资料通用页面
import SettingPage from './pages/setting/index.vue'; //设置页面


import AboutPage from './pages/about.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import ServicesPage from './pages/services.vue'
import LeftPage1 from './pages/left-page-1.vue'
import LeftPage2 from './pages/left-page-2.vue'

export default [{
        path: '/',
        name: "HomePage",
        component: HomePage,
        options: {
            history: true,
            pushState: true
        }
    },
    {
        path: '/panel-left/',
        name: "PanelLeftPage",
        component: PanelLeftPage,
        options: {
            history: true,
            pushState: true
        }
    },
    {
        path: '/panel-right/',
        name: "PanelRightPage",
        component: PanelRightPage,
        options: {
            history: true,
            pushState: true
        }
    },
    {
        path: '/task-capital/',
        name: "CapitalTaskPage",
        component: CapitalTaskPage,
        options: {
            history: true,
            pushState: true
        }
    },
    {
        path: '/task-check/',
        name: "TaskCheckPage",
        component: TaskCheckPage,
        keepAlive: true, //保留之前数据状态
        options: {
            history: true,
            pushState: true
        }
    },
    {
        path: '/task-daily-navigation/',
        name: "TaskDailyNavigationPage",
        component: TaskDailyNavigationPage,
    },
    {
        path: '/task-capital-navigation/',
        name: "TaskCapitalNavigationPage",
        component: TaskCapitalNavigationPage,
    },
    {
        path: '/task-capital-iou-selection/',
        name: "TaskCapitalIOUSelectionPage",
        component: TaskCapitalIOUSelectionPage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/task-capital-add-iou/',
        name: "TaskCapitalAddIOUPage",
        component: TaskCapitalAddIOUPage,
    },
    {
        path: '/task-capital-customer-selection/',
        name: "TaskCapitalCustomerSelectionPage",
        component: TaskCapitalCustomerSelectionPage,
    },
    {
        path: '/task-capital-purpose/',
        name: "TaskCapitalPurposePage",
        component: TaskCapitalPurposePage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-information/',
        name: 'DailyInformationPage',
        component: DailyInformationPage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-authorization/',
        name: 'DailyAuthorizationPage',
        component: DailyAuthorizationPage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-management-company/',
        name: 'DailyManagementCompanyPage',
        component: DailyManagementCompanyPage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-management-enterprise/',
        name: 'DailyManagementEnterprisePage',
        component: DailyManagementEnterprisePage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-management-platform/',
        name: 'DailyManagementPlatformPage',
        component: DailyManagementPlatformPage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-management-small/',
        name: 'DailyManagementSmallPage',
        component: DailyManagementSmallPage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-management-personal/',
        name: 'DailyManagementPersonalPage',
        component: DailyManagementPersonalPage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-management-property/',
        name: 'DailyManagementPropertyPage',
        component: DailyManagementPropertyPage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-management-tax-union/',
        name: 'DailyManagementTaxUnionPage',
        component: DailyManagementTaxUnionPage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-management-farmers/',
        name: 'DailyManagementFarmersPage',
        component: DailyManagementFarmersPage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-project-currency/',
        name: 'DailyProjectCurrencyPage',
        component: DailyProjectCurrencyPage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-project-real-estate/',
        name: 'DailyProjectRealEstatePage',
        component: DailyProjectRealEstatePage,
        keepAlive: true, //保留之前数据状态
    },
    {
        path: '/daily-guarantee/',
        name: 'DailyGuaranteePage',
        component: DailyGuaranteePage,
    },
    {
        path: '/daily-risk/',
        name: 'DailyRiskPage',
        component: DailyRiskPage,
    },
    {
        path: '/daily-inspect/',
        name: 'DailyInspectPage',
        component: DailyInspectPage,
    },
    {
        path: '/daily-portrait/',
        name: 'DailyPortraitPage',
        component: DailyPortraitPage,
    },
    {
        path: '/setting/',
        name: 'SettingPage',
        component: SettingPage,
    },
    {
        path: '/about/',
        name: 'AboutPage',
        component: AboutPage,
    },
    {
        path: '/left-page-1/',
        component: LeftPage1
    },
    {
        path: '/left-page-2/',
        component: LeftPage2
    },
    {
        path: '/services/',
        component: ServicesPage
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage,
    },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];