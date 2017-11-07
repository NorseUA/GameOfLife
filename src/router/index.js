import Vue from 'vue';
import Router from 'vue-router';
import { HomePage, NewGamePage, SettingsPage } from '../pages';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/new_game',
      name: 'NewGame',
      component: NewGamePage,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsPage,
    },
  ],
});
