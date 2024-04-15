var solve = function (board) {
  findBorders(board, 0, board[0].length - 1);
  findBorders(board, board.length - 1, board[0].length - 1);
  findBordersVert(board, 0, board.length - 1);
  findBordersVert(board, board[0].length - 1, board.length - 1);
  turnBoard(board);
  return board;
};

const turnBoard = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      } else if (board[i][j] === "T") {
        board[i][j] = "O";
      }
    }
  }
};

const findBorders = (board, start, end) => {
  for (let i = 0; i <= end; i++) {
    if (board[start][i] === "O") {
      checkForConnecting(board, start, i);
    }
  }
};

const findBordersVert = (board, start, end) => {
  for (let i = 0; i <= end; i++) {
    if (board[i][start] === "O") {
      checkForConnecting(board, i, start);
    }
  }
};

const checkForConnecting = (board, start, end) => {
  board[start][end] = "T";
  if (0 <= start - 1 && board[start - 1][end] === "O") {
    checkForConnecting(board, start - 1, end);
  }
  if (0 <= end - 1 && board[start][end - 1] === "O") {
    checkForConnecting(board, start, end - 1);
  }
  if (board.length - 1 >= start + 1 && board[start + 1][end] === "O") {
    checkForConnecting(board, start + 1, end);
  }
  if (board[0].length - 1 >= end + 1 && board[start][end + 1] === "O") {
    checkForConnecting(board, start, end + 1);
  }
};

// console.log(
//   solve([
//     ["X", "X", "X", "X"],
//     ["X", "O", "O", "X"],
//     ["X", "X", "O", "X"],
//     ["X", "O", "X", "X"],
//   ])
// );

// console.log(solve([["O"]]));

console.log(
  solve([
    ["O", "O"],
    ["O", "O"],
  ])
);
