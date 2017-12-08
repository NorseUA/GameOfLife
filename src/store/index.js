import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { defaultSettings } from '../constants';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    fieldSize: {
      rows: defaultSettings.rows,
      columns: defaultSettings.columns,
    },
    colony: [],
    listForCheck: {},
    colonyIsAlive: false,
    speedOfGame: defaultSettings.speed,
  },
  actions,
  getters,
  mutations,
});

export default store;
