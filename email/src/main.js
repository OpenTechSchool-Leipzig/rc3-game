import Vue from "vue";
import Vuex from 'vuex'
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import emails from "@/content/emails.js";

Vue.config.productionTip = false;

Vue.use(Vuex)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const store = new Vuex.Store({
  state: {
    selectedEmail: null,
    selectedFolder: "inbox",
    emails,
    readEmails: []
  },
  mutations: {
    selectEmail (state, email) {
      state.selectedEmail = email
      if (!state.readEmails.includes(email.id)) {
        state.readEmails.push(email.id)
      }
    },
    selectFolder (state, folder) {
      state.selectedFolder = folder
      state.selectedEmail = null
    }
  },
  getters: {
    unreadEmails: state => {
      return state.emails.filter(email => {
        return !state.readEmails.includes(email.id)
      })
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
