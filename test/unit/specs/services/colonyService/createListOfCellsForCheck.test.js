import colonyService from '../../../../../src/services/colonyService';
import mockPreviousLists from '../../mocks/calculateNextGeneration/mockPreviousLists';
import mockPreviousGenerations from '../../mocks/calculateNextGeneration/mockPreviousGenerations';

describe('Create list of cells by matrix', () => {
  const { createListOfCellsForCheck } = colonyService;

  it('with one live cell', () => {
    const mockType = 'oneLiveCell';
    const generation = mockPreviousGenerations[mockType];
    const expectedList = mockPreviousLists[mockType];
    const resultList = createListOfCellsForCheck(generation);

    expect(resultList).to.deep.equal(expectedList);
  });

  it('with tree live cells like corner', () => {
    const mockType = 'threeLiveCellsCorner';
    const generation = mockPreviousGenerations[mockType];
    const expectedList = mockPreviousLists[mockType];
    const resultList = createListOfCellsForCheck(generation);

    expect(resultList).to.deep.equal(expectedList);
  });

  it('with three live cells in line', () => {
    const mockType = 'threeLiveCellsInLine';
    const generation = mockPreviousGenerations[mockType];
    const expectedList = mockPreviousLists[mockType];
    const resultList = createListOfCellsForCheck(generation);

    expect(resultList).to.deep.equal(expectedList);
  });

  it('with three live cells apart', () => {
    const mockType = 'threeLiveCellsApart';
    const generation = mockPreviousGenerations[mockType];
    const expectedList = mockPreviousLists[mockType];
    const resultList = createListOfCellsForCheck(generation);

    expect(resultList).to.deep.equal(expectedList);
  });

  it('with five live cells in cross', () => {
    const mockType = 'liveCellsInCross';
    const generation = mockPreviousGenerations[mockType];
    const expectedList = mockPreviousLists[mockType];
    const resultList = createListOfCellsForCheck(generation);

    expect(resultList).to.deep.equal(expectedList);
  });
});
