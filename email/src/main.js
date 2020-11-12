import Vue from "vue";
import Vuex from 'vuex'
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(Vuex)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const store = new Vuex.Store({
  state: {
    selectedEmail: null,
    selectedFolder: "inbox"
  },
  mutations: {
    selectEmail (state, email) {
      state.selectedEmail = email
    },
    selectFolder (state, folder) {
      state.selectedFolder = folder
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
