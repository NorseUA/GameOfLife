/* eslint-disable no-param-reassign */
import {
  COMPUTE_EMPTY_COLONY,
  CHANGE_FIELD_SIZE,
  CHANGE_CELL_STATE,
  CREATE_LIST_0F_CELLS_FOR_CHECK,
  CALCULATE_NEXT_GENERATION,
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
    const newCellState = !currentCellState;

    currentRow[colIdx] = newCellState;
    newColony[rowIdx] = currentRow;

    const listForCheck = { ...state.listForCheck };
    const clusterForCheck = colonyService.createClusterForCheck(rowIdx, colIdx, state.colony);

    Object.assign(listForCheck, clusterForCheck);
    listForCheck[`[${rowIdx}][${colIdx}]`] = newCellState;

    state.colony = newColony;
    state.listForCheck = listForCheck;
  },
  [CREATE_LIST_0F_CELLS_FOR_CHECK](state) {
    state.listForCheck = colonyService.createListOfCellsForCheck(state.colony);
  },
  [CALCULATE_NEXT_GENERATION](state) {
    const { colony, listForCheck } = state;
    const { nextList, nextGeneration } = colonyService.calculateNewGeneration(listForCheck, colony);

    state.colony = nextGeneration;
    state.listForCheck = nextList;
  },
};

export default mutations;
