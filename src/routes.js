import HomePage from './pages/home/index.vue'; //首页
import PanelLeftPage from './pages/panel/panel-left.vue'; //左边菜单视图
import PanelRightPage from './pages/panel/panel-right.vue'; //右边菜单页面
import TaskCheckPage from './pages/task-check/index.vue'; //任务检查页面
import TaskNavigationPage from './pages/task-check/task-daily/navigation-menu.vue'; //日常任务导航
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
        component: HomePage,
    },
    {
        path: '/panel-left/',
        component: PanelLeftPage,
    },
    {
        path: '/panel-right/',
        component: PanelRightPage,
    },
    {
        path: '/task-check/',
        component: TaskCheckPage,
    },
    {
        path: '/task-navigation/',
        component: TaskNavigationPage,
    },
    {
        path: '/setting/',
        component: SettingPage,
    },
    {
        path: '/about/',
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