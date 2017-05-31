import Vue from 'vue';
import Router from 'vue-router';
import Table from '@/components/Table';
import Profile from '@/components/Profile';
import Users from '@/components/Users';
import VueBus from 'vue-events';

Vue.use(VueBus);
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/table',
      name: 'Table',
      component: Table,
    },
    {
      path: '/my-profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/profile/:user',
      name: 'User Profile',
      component: Profile,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
  ],
});
