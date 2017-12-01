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
  // createListOfCellsForCheck({ commit }) {
  //   return new Promise((resolve) => {
  //     commit(types.CREATE_LIST_0F_CELLS_FOR_CHECK);
  //     resolve();
  //   });
  // },
  calculateNewGeneration({ commit }) {
    commit(types.CALCULATE_NEXT_GENERATION);
  },
};

export default actions;
