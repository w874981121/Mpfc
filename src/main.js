import Vue from 'vue'
import ElementUI from 'element-ui'
import './css/_base.css'
import 'element-ui/lib/theme-default/index.css'
import './components/publicSass/Modular_xdzf.scss'
import App from './App'
import router from './router'
import FnMethod from './function/index'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(FnMethod)
/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  el: '#app',
  router,
  components: {
    App
  }
})
