import colonyService from '../../../../../src/services/colonyService';
import mockClusters from '../../mocks/checkCellCluster/mockClusters';

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
