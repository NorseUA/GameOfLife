import colonyService from '../../../../../src/services/colonyService';
import mockClusters from '../../mocks/checkCellCluster/mockClusters';

describe('Check cell cluster', () => {
  const { checkCellCluster } = colonyService;

  it('should return new cell status for live cell', () => {
    expect(checkCellCluster(mockClusters.cellWithNoNeighbor, true))
      .toEqual(false);

    expect(checkCellCluster(mockClusters.cellWithOneNeighbor, true))
      .toEqual(false);

    expect(checkCellCluster(mockClusters.cellWithTwoNeighbor, true))
      .toEqual(true);

    expect(checkCellCluster(mockClusters.cellWithThreeNeighbor, true))
      .toEqual(true);

    expect(checkCellCluster(mockClusters.cellWithFourNeighbor, true))
      .toEqual(false);
  });

  it('should return new cell status for dead cell', () => {
    expect(checkCellCluster(mockClusters.cellWithNoNeighbor, false))
      .toEqual(false);

    expect(checkCellCluster(mockClusters.cellWithOneNeighbor, false))
      .toEqual(false);

    expect(checkCellCluster(mockClusters.cellWithTwoNeighbor, false))
      .toEqual(false);

    expect(checkCellCluster(mockClusters.cellWithThreeNeighbor, false))
      .toEqual(true);

    expect(checkCellCluster(mockClusters.cellWithFourNeighbor, false))
      .toEqual(false);
  });
});
