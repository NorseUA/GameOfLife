import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    fieldSize: {
      rows: 10,
      columns: 20,
    },
    colony: [],
  },
  getters,
  mutations,
});

export default store;
