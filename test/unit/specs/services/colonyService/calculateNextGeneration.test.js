import colonyService from '../../../../../src/services/colonyService';
import mockLists from '../../mocks/calculateNextGeneration/mockLists';
import mockResults from '../../mocks/calculateNextGeneration/mockResults';
import mockGenerations from '../../mocks/calculateNextGeneration/mockGenerations';

describe('Colony service', () => {
  it('should calculate new generation by list with cells in the middle of field', () => {
    const { calculateNewGeneration } = colonyService;

    expect(
      calculateNewGeneration(mockLists.oneLiveCell, mockGenerations.oneLiveCell),
    )
      .to.deep.equal(mockResults.oneLiveCell);

    expect(
      calculateNewGeneration(mockLists.threeLiveCellsCorner, mockGenerations.threeLiveCellsCorner),
      )
      .to.deep.equal(mockResults.threeLiveCellsCorner);

    expect(
      calculateNewGeneration(mockLists.threeLiveCellsInLine, mockGenerations.threeLiveCellsInLine),
      )
      .to.deep.equal(mockResults.threeLiveCellsInLine);

    expect(
      calculateNewGeneration(mockLists.threeLiveCellsApart, mockGenerations.threeLiveCellsApart),
      )
      .to.deep.equal(mockResults.threeLiveCellsApart);

    expect(
      calculateNewGeneration(mockLists.liveCellsInCross, mockGenerations.liveCellsInCross),
      )
      .to.deep.equal(mockResults.liveCellsInCross);
  });
});
