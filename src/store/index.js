import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
    screenWidth: 1024, //屏幕宽
    screeHeight: 768, //屏幕高
    currentCensorInfo: null, //当前检查对象
}
const actions = {}
const mutations = {
    /**
     * 设置屏幕宽
     */
    setScreenWidth(state, value) {
        state.screenWidth = value;
    },

    /**
     * 设置屏幕高度
     */
    setScreeHeight(state, value) {
        state.screeHeight = value;
    },

    /**
     * 设置当前检查对象
     * @param {*} info 当前检查对象
     */
    setCurrentCensorInfo(state, info) {
        state.currentCensorInfo = info;
    }
}
const getters = {
    /**
     * 获取屏幕宽度
     */
    getScreenWidth(state) {
        return state.screenWidth;
    },

    /**
     * 获取屏幕高度
     */
    getScreenHeight(state) {
        return state.screeHeight;
    },

    /**
     * 获取当前检查对象
     */
    getCurrentCensorInfo() {
        return state.currentCensorInfo;
    }
}
const store = new Vuex.Store({
    actions,
    state,
    mutations,
    getters
})
export default store;