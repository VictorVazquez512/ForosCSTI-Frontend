import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import VueRouter from 'vue-router'
import { routes } from "./routes"
import Vuelidate from 'vuelidate'
import VueResource from 'vue-resource'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
Vue.use(VueResource)
Vue.use(Vuelidate);
Vue.config.productionTip = false
Vue.use(VueSweetalert2);


Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
