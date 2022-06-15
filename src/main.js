import Vue from 'vue'
import "vue-easytable/libs/theme-default/index.css"
import VueEasytable from "vue-easytable"
import VePagination from "vue-easytable";
import VueRouter from 'vue-router';
import App from './App.vue'

Vue.use(VePagination);
Vue.use(VueEasytable);
Vue.use(VueRouter);

import TableMockup from './components/TableMockup.vue';

const router = new VueRouter ({
  mode: 'history',
  routes: [
    { path: '/:footer', component: TableMockup }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
