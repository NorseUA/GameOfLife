const mockClusters = {
  oneLiveCell: {
    '[0][0]': false,
    '[0][1]': false,
    '[0][2]': false,
    '[1][0]': false,
    '[1][1]': true,
    '[1][2]': false,
    '[2][0]': false,
    '[2][1]': false,
    '[2][2]': false,
  },
  threeLiveCellsCorner: {
    '[0][0]': true,
    '[0][1]': true,
    '[0][2]': false,
    '[1][0]': true,
    '[1][1]': false,
    '[1][2]': false,
    '[2][0]': false,
    '[2][1]': false,
    '[2][2]': false,
  },
  threeLiveCellsApart: {
    '[0][0]': true,
    '[0][1]': false,
    '[0][2]': true,
    '[1][0]': false,
    '[1][1]': false,
    '[1][2]': false,
    '[2][0]': false,
    '[2][1]': true,
    '[2][2]': false,
  },
  threeLiveCellsInLine: {
    '[0][0]': false,
    '[0][1]': false,
    '[0][2]': false,
    '[1][0]': true,
    '[1][1]': true,
    '[1][2]': true,
    '[2][0]': false,
    '[2][1]': false,
    '[2][2]': false,
  },
  liveCellsInCross: {
    '[0][0]': false,
    '[0][1]': true,
    '[0][2]': false,
    '[1][0]': true,
    '[1][1]': true,
    '[1][2]': true,
    '[2][0]': false,
    '[2][1]': true,
    '[2][2]': false,
  },
};

export default mockClusters;
