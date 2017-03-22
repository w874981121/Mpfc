/**
 * Created by wangyanqi on 2017/3/21.
 */
exports.install = function (Vue, options) {
  Vue.prototype.osZero = function (n) {
    return n < 10 ? '0' + n : n
  }
}
