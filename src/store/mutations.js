/* eslint-disable no-param-reassign */
import {
  COMPUTE_EMPTY_COLONY,
  CHANGE_SETTINGS,
  CHANGE_CELL_STATE,
  CREATE_LIST_0F_CELLS_FOR_CHECK,
  CALCULATE_NEXT_GENERATION,
  START_LIFE,
  STOP_LIFE,
} from './mutationsTypes';
import colonyService from '../services/colonyService';

const mutations = {
  [COMPUTE_EMPTY_COLONY](state) {
    const { rows, columns } = state.fieldSize;
    state.colony = colonyService.createEmptyMatrix(rows, columns);
  },
  [CHANGE_SETTINGS](state, { rows, columns, speed }) {
    const size = { ...state.fieldSize };
    size.rows = rows || size.rows;
    size.columns = columns || size.columns;
    state.fieldSize = size;
    state.speedOfGame = speed || state.speedOfGame;
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
  [START_LIFE](state, { intervalId }) {
    state.intervalId = intervalId;
    state.colonyIsAlive = true;
  },
  [STOP_LIFE](state) {
    state.intervalId = null;
    state.colonyIsAlive = false;
  },
};

export default mutations;
