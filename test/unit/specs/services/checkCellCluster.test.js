import colonyService from '../../../../src/services/colonyService';

const mockClusters = {
  cellWithNoNeighbor: {
    '[0][0]': false,
    '[0][1]': false,
    '[0][2]': false,
    '[1][0]': false,
    '[1][2]': false,
    '[2][0]': false,
    '[2][1]': false,
    '[2][2]': false,
  },
  cellWithOneNeighbor: {
    '[0][0]': true,
    '[0][1]': false,
    '[0][2]': false,
    '[1][0]': false,
    '[1][2]': false,
    '[2][0]': false,
    '[2][1]': false,
    '[2][2]': false,
  },
  cellWithTwoNeighbor: {
    '[0][0]': true,
    '[0][1]': true,
    '[0][2]': false,
    '[1][0]': false,
    '[1][2]': false,
    '[2][0]': false,
    '[2][1]': false,
    '[2][2]': false,
  },
  cellWithThreeNeighbor: {
    '[0][0]': true,
    '[0][1]': true,
    '[0][2]': false,
    '[1][0]': true,
    '[1][2]': false,
    '[2][0]': false,
    '[2][1]': false,
    '[2][2]': false,
  },
  cellWithFourNeighbor: {
    '[0][0]': true,
    '[0][1]': true,
    '[0][2]': false,
    '[1][0]': true,
    '[1][2]': false,
    '[2][0]': true,
    '[2][1]': false,
    '[2][2]': false,
  },
};

describe('Check cell cluster', () => {
  const { checkCellCluster } = colonyService;

  it('should return new cell status for live cell', () => {
    expect(checkCellCluster(mockClusters.cellWithNoNeighbor, true))
      .to.equal(false);

    expect(checkCellCluster(mockClusters.cellWithOneNeighbor, true))
      .to.equal(false);

    expect(checkCellCluster(mockClusters.cellWithTwoNeighbor, true))
      .to.equal(true);

    expect(checkCellCluster(mockClusters.cellWithThreeNeighbor, true))
      .to.equal(true);

    expect(checkCellCluster(mockClusters.cellWithFourNeighbor, true))
      .to.equal(false);
  });

  it('should return new cell status for dead cell', () => {
    expect(checkCellCluster(mockClusters.cellWithNoNeighbor, false))
      .to.equal(false);

    expect(checkCellCluster(mockClusters.cellWithOneNeighbor, false))
      .to.equal(false);

    expect(checkCellCluster(mockClusters.cellWithTwoNeighbor, false))
      .to.equal(false);

    expect(checkCellCluster(mockClusters.cellWithThreeNeighbor, false))
      .to.equal(true);

    expect(checkCellCluster(mockClusters.cellWithFourNeighbor, false))
      .to.equal(false);
  });
});
