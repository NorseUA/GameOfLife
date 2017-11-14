import fill from 'lodash/fill';
import get from 'lodash/get';

class ColonyService {
  createEmptyMatrix = (rowsCount, columnsCount) => {
    const matrix = [];

    for (let idx = 0; idx < rowsCount; idx += 1) {
      const row = fill(new Array(columnsCount), false);
      matrix.push(row);
    }

    return matrix;
  };

  getCellNeighbors = (idx, arrayLength) => [
    (((idx - 1) + arrayLength) % arrayLength),
    idx,
    ((idx + 1) % arrayLength),
  ];

  reduceCluster = (rowIdxs, colIdxs) => rowIdxs
    .reduce((acc, row) => {
      colIdxs.forEach(col => acc.push(`[${row}][${col}]`));
      return acc;
    }, []);

  createClusterForCheck = (rowIdx, colIdx, matrix) => {
    const rowsCount = get(matrix, 'length') || 0;
    const colsCount = get(matrix, '[0].length') || 0;

    const rowNeighbors = this.getCellNeighbors(rowIdx, rowsCount);
    const colNeighbors = this.getCellNeighbors(colIdx, colsCount);

    const clusterArray = this.reduceCluster(rowNeighbors, colNeighbors);

    return clusterArray.reduce((acc, address) => {
      acc[address] = get(matrix, address);
      return acc;
    }, {});
  };

  findInitialColonyCellsForCheck = (matrix) => {
    const targetCells = {};

    matrix.forEach((row, rowIdx) => {
      row.forEach((isAlive, colIdx) => {
        if (isAlive) {
          const cluster = this.createClusterForCheck(rowIdx, colIdx, matrix);
          Object.assign(targetCells, cluster);
        }
      });
    });

    return targetCells;
  };
}

export default new ColonyService();
