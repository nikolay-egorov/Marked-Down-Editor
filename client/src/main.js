// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/plugins/bootstrap'
import BootstrapVue from 'bootstrap-vue'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';


Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

Vue.use(BootstrapVue)



Vue.config.productionTip = false

// Vue.component('c-nav-bar', Navbar);
// Vue.component('c-footer',Footer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',

})
