import Vue from 'vue'
import App from './app.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/css/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin } from 'Bootstrap-vue'

Vue.use(bootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    render: h =>h(App),
}).$mount('#app')
