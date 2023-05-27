const express = require("express")
const path = require("path")

const app = express();

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import './assets/tailwind.css'

createApp(App).mount('#app')



// import Vue from 'vue'
// import App from './App.vue'

// // Import Bootstrap Vue
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.config.productionTip = false

// // Install BootstrapVue
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
