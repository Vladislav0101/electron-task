import Vue from "vue";
import axios from "axios";
import i18n from "../renderer/plugins/i18n";

import App from "./App";
import router from "./router";
import store from "./store/index";

import "./assets/styles/main.css";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// store.dispatch('setLocale', 'en')

/* eslint-disable no-new */
new Vue({
  i18n,
  components: { App },
  router,
  store,
  template: "<App/>",
}).$mount("#app");
