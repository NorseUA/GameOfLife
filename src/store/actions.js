import types from './mutationsTypes';

const actions = {
  changeFieldSize({ commit }, { rows, columns }) {
    commit(types.CHANGE_FIELD_SIZE, { rows, columns });
  },
  createNewEmptyColony({ commit }) {
    commit(types.COMPUTE_EMPTY_COLONY);
  },
  changeCellState({ commit }, { rowIdx, colIdx }) {
    commit(types.CHANGE_CELL_STATE, { rowIdx, colIdx });
  },
  calculateNewGeneration({ dispatch, commit, state }) {
    if (Object.keys(state.listForCheck).length === 0) {
      dispatch('stopLife');
    } else {
      commit(types.CALCULATE_NEXT_GENERATION);
    }
  },
  startLife({ dispatch, commit }, { speed = 300 }) {
    const intervalId = setInterval(() => {
      dispatch('calculateNewGeneration');
    }, speed);

    commit(types.START_LIFE, { intervalId });
  },
  stopLife({ commit, state }) {
    clearInterval(state.intervalId);
    commit(types.STOP_LIFE);
  },
};

export default actions;
