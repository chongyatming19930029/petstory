import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Mint-Ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//Mint-Ui End

//Iconfont
import "@/assets/iconfont/iconfont.css";
//Iconfont End

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
