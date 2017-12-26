import types from './mutationsTypes';

const actions = {
  changeSettings({ commit }, { rows, columns, speed }) {
    commit(types.CHANGE_SETTINGS, { rows, columns, speed });
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
  startLife({ dispatch, commit, state }) {
    const intervalId = setInterval(() => {
      dispatch('calculateNewGeneration');
    }, state.speedOfGame);

    commit(types.START_LIFE, { intervalId });
  },
  stopLife({ commit, state }) {
    clearInterval(state.intervalId);
    commit(types.STOP_LIFE);
  },
};

export default actions;
