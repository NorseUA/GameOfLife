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
};

export default actions;
