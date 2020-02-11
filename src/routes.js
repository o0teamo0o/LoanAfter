import Index from './pages/index/index.vue'; //首页容器
import IndexLeftMenu from './pages/index/left-menu.vue'; //左边菜单视图
import IndexContainer from './pages/index/container.vue'; //左边菜单视图
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

export default [{
        path: '/index-container',
        component: IndexContainer,
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