import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
