import Vue from 'vue'; // Import Vue
import Framework7 from 'framework7/framework7.esm.bundle.js'; // Import F7
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'; // Import F7 Vue Plugin
import 'framework7/css/framework7.bundle.css'; // Import F7 Styles
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import IconsStyles from './css/icons.css'; // Import Icons and App Custom Styles
import BaseStyles from './css/base.less';
import AppStyles from './css/app.less';
import App from './app.vue'; // Import App Component
import less from 'less'; // Import less
import store from './store/index';

Vue.use(less);
Framework7.use(Framework7Vue); // Init F7 Vue Plugin
Vue.use(ElementUI);

import VueBus from './vue-bus';
Vue.use(VueBus);

import toast from './utils/toast' //引用toast
Vue.use(toast);

// Init App
new Vue({
    el: '#app', //绑定的根元素对象
    template: '<app/>', //模板内容
    store,

    // Register App Component
    components: {
        app: App
    }
});