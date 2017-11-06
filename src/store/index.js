import Vue from 'vue';
import Vuex from 'vuex';
import fill from 'lodash/fill';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    fieldSize: {
      rows: 10,
      columns: 20,
    },
    colony: [],
  },
  getters: {
    fieldSize: ({ fieldSize }) => fieldSize,
    colony: ({ colony }) => colony,
  },
  mutations: {
    computeEmptyColony(state) {
      const { rows, columns } = state.fieldSize;
      const colonyRow = fill(new Array(columns), false);
      state.colony = fill(new Array(rows), colonyRow); // eslint-disable-line
    },
  },
});

export default store;
