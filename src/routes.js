import HomePage from './pages/index/index.vue';
import LeftMenu from './pages/index/left-menu.vue'; //左边菜单视图
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';
import ServicesPage from './pages/services.vue'
import LeftPage1 from './pages/left-page-1.vue'
import LeftPage2 from './pages/left-page-2.vue'

export default [{
        path: '/index/',
        component: HomePage,
    },
    {
        path: '/left-menu/',
        component: LeftMenu,
    },
    {
        path: '/panel-right/',
        component: PanelRightPage,
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