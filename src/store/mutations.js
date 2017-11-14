/* eslint-disable no-param-reassign */
import set from 'lodash/set';
import {
  COMPUTE_EMPTY_COLONY,
  CHANGE_FIELD_SIZE,
  CHANGE_CELL_STATE,
  CREATE_LIST_0F_CELLS_FOR_CHECK,
} from './mutationsTypes';
import colonyService from '../services/colonyService';

const mutations = {
  [COMPUTE_EMPTY_COLONY](state) {
    const { rows, columns } = state.fieldSize;
    state.colony = colonyService.createEmptyMatrix(rows, columns);
  },
  [CHANGE_FIELD_SIZE](state, { rows, columns }) {
    const size = { ...state.fieldSize };
    size.rows = rows || size.rows;
    size.columns = columns || size.columns;
    state.fieldSize = size;
  },
  [CHANGE_CELL_STATE](state, { rowIdx, colIdx }) {
    const newColony = [...state.colony];
    const currentRow = [...state.colony[rowIdx]];
    const currentCellState = currentRow[colIdx];

    currentRow[colIdx] = !currentCellState;
    newColony[rowIdx] = currentRow;

    state.colony = newColony;
  },
  [CREATE_LIST_0F_CELLS_FOR_CHECK](state) {
    state.cellsForCheck = colonyService.findInitialColonyCellsForCheck(state.colony);
  },
};

export default mutations;
