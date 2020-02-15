import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
    screenWidth: 1024, //屏幕宽
    screeHeight: 768, //屏幕高
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
        return state.setScreeHeight
    }
}
const store = new Vuex.Store({
    actions,
    state,
    mutations,
    getters
})
export default store;