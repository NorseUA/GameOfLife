// import colonyService from '../../../../src/services/colonyService';
// import mockClusters from './mockClusters';
// import mockResults from './mockResults';
//
// describe('Colony service', () => {
//   it('should calculate new generation by list', () => {
//     const prevGeneration = colonyService.createEmptyMatrix(3, 3);
//     const { calculateNewGeneration } = colonyService;
//
//     expect(calculateNewGeneration(mockClusters.oneLiveCell, prevGeneration))
//       .to.deep.equal(mockResults.oneLiveCell);
//
//     expect(calculateNewGeneration(mockClusters.threeLiveCellsCorner, prevGeneration))
//       .to.deep.equal(mockResults.threeLiveCellsCorner);
//
//     expect(calculateNewGeneration(mockClusters.threeLiveCellsInLine, prevGeneration))
//       .to.equal(mockResults.threeLiveCellsInLine);
//
//     expect(calculateNewGeneration(mockClusters.threeLiveCellsApart, prevGeneration))
//       .to.equal(mockResults.threeLiveCellsApart);
//
//     expect(calculateNewGeneration(mockClusters.liveCellsInCross, prevGeneration))
//       .to.equal(mockResults.liveCellsInCross);
//   });
// });
