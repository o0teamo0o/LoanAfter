// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import BaseStyles from './css/base.less';
import AppStyles from './css/app.less';

// Import App Component
import App from './app.vue';

// Import less
import less from 'less';
Vue.use(less)

// Init F7 Vue Plugin
Framework7.use(Framework7Vue)

// Init App
new Vue({
    el: '#app', //绑定的根元素对象
    template: '<app/>', //模板内容

    // Register App Component
    components: {
        app: App
    }
});