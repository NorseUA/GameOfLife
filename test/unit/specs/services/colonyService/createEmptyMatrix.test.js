import colonyService from '../../../../../src/services/colonyService';

describe('Create empty matrix', () => {
  const { createEmptyMatrix } = colonyService;

  it('should return matrix 3x3', () => {
    const matrix = createEmptyMatrix(3, 3);

    expect(matrix.length).toEqual(3);
    expect(matrix[0].length).toEqual(3);
  });

  it('should return matrix 2x5', () => {
    const matrix = createEmptyMatrix(2, 5);

    expect(matrix.length).toEqual(2);
    expect(matrix[0].length).toEqual(5);
  });

  it('should return matrix 7x1', () => {
    const matrix = createEmptyMatrix(7, 1);

    expect(matrix.length).toEqual(7);
    expect(matrix[0].length).toEqual(1);
  });

  it('should return empty array if pass 0 rows', () => {
    const matrix = createEmptyMatrix(0, 5);

    expect(matrix).toEqual([]);
  });

  it('should return matrix with 7 empty arrays', () => {
    const matrix = createEmptyMatrix(7, 0);

    expect(matrix.length).toEqual(7);
    expect(matrix[0]).toEqual([]);
  });

  it('should return empty array', () => {
    const matrix = createEmptyMatrix(0, 0);

    expect(matrix).toEqual([]);
  });
});
