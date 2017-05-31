// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import KeenUI from 'keen-ui';

import App from './components/App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(KeenUI);

const JWT_KEY = 'jwt';
/* eslint-disable */
const request = require('superagent');
const MyPlugin = {
  install(Vue, options) {
    // 4. add an instance method // this.$api('GET', '/dad/da')
    Vue.prototype.$api = function (method, ep) {
      return request[method.toLowerCase()]('/api/'+ep).set("Auth-Token", this.$root.token);
    };
  },
};
Vue.use(MyPlugin);
/* eslint-enable */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: () => ({
    token: window.localStorage.getItem(JWT_KEY),
  }),
  template: '<App v-on:jwt="jwt"/>',
  methods: {
    jwt(token) {
      this.token = token;
      if (token) {
        window.localStorage.setItem(JWT_KEY, token);
      } else {
        window.localStorage.removeItem(JWT_KEY);
      }
    },
  },
  components: { App },
  computed: {
    isLogged() { return !!this.token; },
    user() {
      this.$api('GET', 'users').then(() => {});
      if (this.isLogged) {
        const token = this.token.split('.')[1];
        return JSON.parse(atob(token));
      }
      return null;
    },
  },
});
