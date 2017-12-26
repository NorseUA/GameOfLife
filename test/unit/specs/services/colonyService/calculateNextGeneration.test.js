import colonyService from '../../../../../src/services/colonyService';
import mockPreviousLists from '../../mocks/calculateNextGeneration/mockPreviousLists';
import mockNextLists from '../../mocks/calculateNextGeneration/mockNextLists';
import mockPreviousGenerations from '../../mocks/calculateNextGeneration/mockPreviousGenerations';
import mockNextGenerations from '../../mocks/calculateNextGeneration/mockNextGenerations';

describe('Calculation of new generation by list', () => {
  const { calculateNewGeneration } = colonyService;

  it('with one live cell', () => {
    const mockType = 'oneLiveCell';
    const prevList = mockPreviousLists[mockType];
    const prevGen = mockPreviousGenerations[mockType];
    const { nextGeneration, nextList } = calculateNewGeneration(prevList, prevGen);

    expect(nextGeneration).toEqual(mockNextGenerations[mockType]);
    expect(nextList).toEqual(mockNextLists[mockType]);
  });

  it('with tree live cells like corner', () => {
    const mockType = 'threeLiveCellsCorner';
    const prevList = mockPreviousLists[mockType];
    const prevGen = mockPreviousGenerations[mockType];
    const { nextGeneration, nextList } = calculateNewGeneration(prevList, prevGen);

    expect(nextGeneration).toEqual(mockNextGenerations[mockType]);
    expect(nextList).toEqual(mockNextLists[mockType]);
  });

  it('with three live cells in line', () => {
    const mockType = 'threeLiveCellsInLine';
    const prevList = mockPreviousLists[mockType];
    const prevGen = mockPreviousGenerations[mockType];
    const { nextGeneration, nextList } = calculateNewGeneration(prevList, prevGen);

    expect(nextGeneration).toEqual(mockNextGenerations[mockType]);
    expect(nextList).toEqual(mockNextLists[mockType]);
  });

  it('with three live cells apart', () => {
    const mockType = 'threeLiveCellsApart';
    const prevList = mockPreviousLists[mockType];
    const prevGen = mockPreviousGenerations[mockType];
    const { nextGeneration, nextList } = calculateNewGeneration(prevList, prevGen);

    expect(nextGeneration).toEqual(mockNextGenerations[mockType]);
    expect(nextList).toEqual(mockNextLists[mockType]);
  });

  it('with five live cells in cross', () => {
    const mockType = 'liveCellsInCross';
    const prevList = mockPreviousLists[mockType];
    const prevGen = mockPreviousGenerations[mockType];
    const { nextGeneration, nextList } = calculateNewGeneration(prevList, prevGen);

    expect(nextGeneration).toEqual(mockNextGenerations[mockType]);
    expect(nextList).toEqual(mockNextLists[mockType]);
  });
});
