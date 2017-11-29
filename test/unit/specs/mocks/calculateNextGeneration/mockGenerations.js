const mockGenerations = {
  oneLiveCell: [
    [false, false, false],
    [false, true, false],
    [false, false, false],
  ],

  threeLiveCellsCorner: [
    [true, true, false],
    [true, false, false],
    [false, false, false],
  ],
  threeLiveCellsApart: [
    [true, false, true],
    [false, false, false],
    [false, true, false],
  ],
  threeLiveCellsInLine: [
    [false, false, false],
    [true, true, true],
    [false, false, false],
  ],
  liveCellsInCross: [
    [false, true, false],
    [true, true, true],
    [false, true, false],
  ],
};

export default mockGenerations;
