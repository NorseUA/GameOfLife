import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const HomePage = () => import('../pages/HomePage.vue');
const NewGamePage = () => import('../pages/NewGamePage.vue');
const SettingsPage = () => import('../pages/SettingsPage.vue');

function createRouter() {
  return new Router({
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
}

export default createRouter;
