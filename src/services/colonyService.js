import fill from 'lodash/fill';
import get from 'lodash/get';
import set from 'lodash/set';

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
      if (address !== `[${rowIdx}][${colIdx}]`) {
        acc[address] = get(matrix, address);
      }
      return acc;
    }, {});
  };

  checkCellCluster = (cluster, targetCellStatus) => {
    const aliveNeighboursCount = Object.keys(cluster)
      .reduce((acc, key) => {
        const status = get(cluster, key);
        if (status) {
          acc += 1; // eslint-disable-line
        }

        return acc;
      }, 0);

    if (targetCellStatus) {
      return (aliveNeighboursCount === 2 || aliveNeighboursCount === 3);
    }

    return (aliveNeighboursCount === 3);
  };

  findInitialColonyCellsForCheck = (matrix) => {
    const targetCells = {};

    matrix.forEach((row, rowIdx) => {
      row.forEach((isAlive, colIdx) => {
        if (isAlive) {
          const cluster = this.createClusterForCheck(rowIdx, colIdx, matrix);
          set(cluster, `[${rowIdx}][${colIdx}]`, true);
          Object.assign(targetCells, cluster);
        }
      });
    });

    return targetCells;
  };

  calculateNewGeneration = (prevList, prevGeneration) => {
    const rowsCount = get(prevGeneration, 'length') || 0;
    const colsCount = get(prevGeneration, '[0].length') || 0;
    const nextGeneration = this.createEmptyMatrix(rowsCount, colsCount);
    const nextList = {};
    const changedCells = {};

    Object.keys(prevList).forEach((address) => {
      const [rowIdx, colIdx] = address.slice(1, -1).split('][');
      const cluster = this.createClusterForCheck(+rowIdx, +colIdx, prevGeneration);
      const prevGenCellStatus = get(prevList, address);
      const nextGenCellStatus = this.checkCellCluster(cluster, prevGenCellStatus);

      set(nextGeneration, address, nextGenCellStatus);

      if (nextGenCellStatus !== prevGenCellStatus) {
        changedCells[address] = nextGenCellStatus;
      }
    });

    Object.keys(changedCells).forEach((address) => {
      const [rowIdx, colIdx] = address.slice(1, -1).split('][');
      const cluster = this.createClusterForCheck(+rowIdx, +colIdx, nextGeneration);

      Object.assign(nextList, cluster);
    });

    Object.assign(nextList, changedCells);

    return {
      nextGeneration,
      nextList,
    };
  }
}

export default new ColonyService();
