/* eslint-disable no-param-reassign */
import fill from 'lodash/fill';

const mutations = {
  computeEmptyColony(state) {
    const { rows, columns } = state.fieldSize;
    const colonyRow = fill(new Array(columns), false);
    state.colony = fill(new Array(rows), colonyRow);
  },
  changeFieldSize(state, { rows, columns }) {
    const size = { ...state.fieldSize };
    size.rows = rows || size.rows;
    size.columns = columns || size.columns;
    state.fieldSize = size;
  },
};

export default mutations;
