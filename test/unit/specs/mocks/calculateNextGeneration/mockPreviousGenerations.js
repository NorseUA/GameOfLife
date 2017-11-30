const mockGenerations = {
  oneLiveCell: [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ],

  threeLiveCellsCorner: [
    [false, false, false, false, false],
    [false, true, true, false, false],
    [false, true, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ],
  threeLiveCellsApart: [
    [false, false, false, false, false],
    [false, true, false, true, false],
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false],
  ],
  threeLiveCellsInLine: [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, true, true, true, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ],
  liveCellsInCross: [
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, true, true, true, false],
    [false, false, true, false, false],
    [false, false, false, false, false],
  ],
};

export default mockGenerations;
