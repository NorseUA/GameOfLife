const mockNextLists = {
  oneLiveCell: {
    '[1][1]': false,
    '[1][2]': false,
    '[1][3]': false,
    '[2][1]': false,
    '[2][2]': false,
    '[2][3]': false,
    '[3][1]': false,
    '[3][2]': false,
    '[3][3]': false,
  },
  threeLiveCellsCorner: {
    '[1][1]': true,
    '[1][2]': true,
    '[1][3]': false,
    '[2][1]': true,
    '[2][2]': true,
    '[2][3]': false,
    '[3][1]': false,
    '[3][2]': false,
    '[3][3]': false,
  },
  threeLiveCellsApart: {
    '[0][0]': false,
    '[0][1]': false,
    '[0][2]': false,
    '[0][3]': false,
    '[0][4]': false,
    '[1][0]': false,
    '[1][1]': false,
    '[1][2]': false,
    '[1][3]': false,
    '[1][4]': false,
    '[2][0]': false,
    '[2][1]': false,
    '[2][2]': true,
    '[2][3]': false,
    '[2][4]': false,
    '[3][1]': false,
    '[3][2]': false,
    '[3][3]': false,
    '[4][1]': false,
    '[4][2]': false,
    '[4][3]': false,
  },
  threeLiveCellsInLine: {
    '[0][1]': false,
    '[0][2]': false,
    '[0][3]': false,
    '[1][0]': false,
    '[1][1]': false,
    '[1][2]': true,
    '[1][3]': false,
    '[1][4]': false,
    '[2][0]': false,
    '[2][1]': false,
    '[2][2]': true,
    '[2][3]': false,
    '[2][4]': false,
    '[3][0]': false,
    '[3][1]': false,
    '[3][2]': true,
    '[3][3]': false,
    '[3][4]': false,
    '[4][1]': false,
    '[4][2]': false,
    '[4][3]': false,
  },
  liveCellsInCross: {
    '[0][0]': false,
    '[0][1]': false,
    '[0][2]': false,
    '[0][3]': false,
    '[0][4]': false,
    '[1][0]': false,
    '[1][1]': true,
    '[1][2]': true,
    '[1][3]': true,
    '[1][4]': false,
    '[2][0]': false,
    '[2][1]': true,
    '[2][2]': false,
    '[2][3]': true,
    '[2][4]': false,
    '[3][0]': false,
    '[3][1]': true,
    '[3][2]': true,
    '[3][3]': true,
    '[3][4]': false,
    '[4][0]': false,
    '[4][1]': false,
    '[4][2]': false,
    '[4][3]': false,
    '[4][4]': false,
  },
};

export default mockNextLists;
