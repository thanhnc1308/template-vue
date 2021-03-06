import Vue from 'vue'
import App from './App.vue'

// i18n
import i18n from './i18n/i18n'

// Vuex
import {store} from './store/store'

// global components
import globalComponents from './global/globalComponents'

// global function
import globalFunctions from './global/globalFunctions'

// router
import {router} from './router'

// add extension
import '@/common/extension'

// add filters
import '@/filters/filters'

// global style
import '@/assets/scss/common/main.scss'
import '@/assets/scss/common/common.scss'

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
