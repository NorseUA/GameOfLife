const getNeighbors = (idx, maxCount) => [
  (((idx - 1) + maxCount) % maxCount),
  idx,
  ((idx + 1) % maxCount),
];

export const createTargetCluster = (rowIdx, colIdx, rowsCount, colsCount) => {
  const rowNeighbors = getNeighbors(rowIdx, rowsCount);
  const colNeighbors = getNeighbors(colIdx, colsCount);
  const clusterArray = rowNeighbors.reduce((acc, row) => {
    colNeighbors.forEach((col) => {
      acc.push(`${row},${col}`);
    });
    return acc;
  }, []);

  return clusterArray.reduce((acc, address) => {
    acc[address] = true;
    return acc;
  }, {});
};

export const findTargetCells = (matrix) => {
  const targetCells = {};
  const rowsLength = matrix.length;
  const cellsLength = matrix[0].length;

  matrix.forEach((row, rowIdx) => {
    row.forEach((isAlive, colIdx) => {
      if (isAlive) {
        const cluster = createTargetCluster(rowIdx, colIdx, rowsLength, cellsLength);
        Object.assign(targetCells, cluster);
      }
    });
  });
  return targetCells;
};

