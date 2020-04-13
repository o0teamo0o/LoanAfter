/**
 * framework7 Toast全局函数
 */
exports.install = function(Vue, options) {
    /**
     * 显示Toast
     * @message 提示文字
     */
    Vue.prototype.showToast = function(message) {
        var toast = this.$f7.toast.create({
            text: message,
            closeTimeout: 3000
        });
        toast.open();
    }
};