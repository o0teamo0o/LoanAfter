import HomePage from './pages/home/index.vue'; //首页
import PanelLeftPage from './pages/panel/panel-left.vue'; //左边菜单视图
import PanelRightPage from './pages/panel/panel-right.vue'; //右边菜单页面
import TaskCheckPage from './pages/task-check/index.vue'; //任务检查页面
import TaskNavigationPage from './pages/task-check/task-daily/navigation-menu.vue'; //日常任务导航页面
import DailyInformationPage from './pages/task-check/task-daily/information.vue'; //日常任务-基本信息通用页面
import DailyAuthorizationPage from './pages/task-check/task-daily/authorization.vue'; //日常任务-授信汇总通用页面
import DailyManagementPage from './pages/task-check/task-daily/management.vue'; //日常任务-客户经营通用页面
import DailyProjectPage from './pages/task-check/task-daily/project.vue'; //日常任务-项目管理通用页面
import DailyGuaranteePage from './pages/task-check/task-daily/guarantee.vue'; //日常任务-担保信息通用页面
import DailyRiskPage from './pages/task-check/task-daily/risk.vue'; //日常任务-风险分类通用页面
import DailyInspectPage from './pages/task-check/task-daily/inspect.vue'; //日常任务-检查结论通用页面
import DailyPortraitPage from './pages/task-check/task-daily/portrait.vue'; //日常任务-影像资料通用页面
import SettingPage from './pages/setting/index.vue'; //设置页面


import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
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
        path: '/task-navigation/',
        name: "TaskNavigationPage",
        component: TaskNavigationPage,
        options: {
            history: true,
            pushState: true
        }
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
        path: '/daily-management/',
        name: 'DailyManagementPage',
        component: DailyManagementPage,
    },
    {
        path: '/daily-project/',
        name: 'DailyProjectPage',
        component: DailyProjectPage,
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
        path: '/form/',
        name: 'form',
        component: FormPage,
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