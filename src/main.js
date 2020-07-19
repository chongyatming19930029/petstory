import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入全部组件 Mint Ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//Mint Ui End

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
