const mockResults = {
  oneLiveCell: [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ],

  threeLiveCellsCorner: [
    [true, true, false],
    [true, true, false],
    [false, false, false],
  ],
  threeLiveCellsApart: [
    [false, false, false],
    [false, true, false],
    [false, false, false],
  ],
  threeLiveCellsInLine: [
    [false, true, false],
    [false, true, false],
    [false, true, false],
  ],
  liveCellsInCross: [
    [true, true, true],
    [true, false, true],
    [true, true, true],
  ],
};

export default mockResults;
