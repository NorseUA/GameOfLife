import fill from 'lodash/fill';

const createMatrix = (rowsCount, columnsCount) => {
  const row = fill(new Array(columnsCount), false);
  return fill(new Array(rowsCount), row);
};

export default createMatrix;
