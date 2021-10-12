import Vue from 'vue'
import App from './App.vue'

import SimpleVueValidation from 'simple-vue-validator'
Vue.use(SimpleVueValidation); 
import TransitionExpand from 'vue-transition-expand'
import 'vue-transition-expand/dist/vue-transition-expand.css'
Vue.use(TransitionExpand)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
