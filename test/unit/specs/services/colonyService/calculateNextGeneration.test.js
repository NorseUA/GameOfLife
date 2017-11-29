import colonyService from '../../../../../src/services/colonyService';
import mockClusters from '../../mocks/calculateNextGeneration/mockClusters';
import mockResults from '../../mocks/calculateNextGeneration/mockResults';
import mockGenerations from '../../mocks/calculateNextGeneration/mockGenerations';

describe('Colony service', () => {
  it('should calculate new generation by list', () => {
    const { calculateNewGeneration } = colonyService;
    console.log(JSON.stringify(calculateNewGeneration(mockClusters.threeLiveCellsCorner, mockGenerations.threeLiveCellsCorner)));
    console.log(mockResults.threeLiveCellsCorner);
    expect(calculateNewGeneration(mockClusters.oneLiveCell, mockGenerations.oneLiveCell))
      .to.deep.equal(mockResults.oneLiveCell);

    expect(calculateNewGeneration(mockClusters.threeLiveCellsCorner, mockGenerations.threeLiveCellsCorner))
      .to.deep.equal(mockResults.threeLiveCellsCorner);

    // expect(calculateNewGeneration(mockClusters.threeLiveCellsInLine, mockGenerations.threeLiveCellsInLine))
    //   .to.equal(mockResults.threeLiveCellsInLine);
    //
    // expect(calculateNewGeneration(mockClusters.threeLiveCellsApart, mockGenerations.threeLiveCellsApart))
    //   .to.equal(mockResults.threeLiveCellsApart);
    //
    // expect(calculateNewGeneration(mockClusters.liveCellsInCross, mockGenerations.liveCellsInCross))
    //   .to.equal(mockResults.liveCellsInCross);
  });
});
