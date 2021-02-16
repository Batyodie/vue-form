import Vue from "vue";
import App from "./App.vue";

import "./style/main.less";

import { ValidationProvider, ValidationObserver } from "vee-validate";

// Register it globally
// main.js or any entry file.
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
