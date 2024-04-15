var orangesRotting = function (grid) {
  let minutes = 0;
  const arr = [];
  for (let i = 0; i < grid.length; i++) {
    const tempArr = [];
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        tempArr.push(i, j);
      }
    }
    if (tempArr.length > 0) {
      arr.push([tempArr]);
    }
  }
  console.log(arr);
  minutes = setToRotten(grid, arr, minutes);
  return minutes - 1;
};

const setToRotten = (grid, arr, minutes) => {
  while (arr.length > 0) {
    minutes++;
    const elements = arr.pop();
    while (elements.length > 0) {
      const tempArr = [];
      const tempElement = elements.pop();
      if (
        0 <= tempElement[0] - 1 &&
        grid[tempElement[0] - 1][tempElement[1]] === 1
      ) {
        grid[tempElement[0] - 1][tempElement[1]] = 2;
        tempArr.push(tempElement[0] - 1, tempElement[1]);
      }
      if (
        0 <= tempElement[1] - 1 &&
        grid[tempElement[0]][tempElement[1] - 1] === 1
      ) {
        grid[tempElement[0]][tempElement[1] - 1] = 2;
        tempArr.push(tempElement[0], tempElement[1] - 1);
      }
      if (
        grid[0].length >= tempElement[0] + 1 &&
        grid[tempElement[0] + 1][tempElement[1]] === 1
      ) {
        grid[tempElement[0] + 1][tempElement[1]] = 2;
        tempArr.push(tempElement[0] + 1, tempElement[1]);
      }
      if (
        grid.length >= tempElement[1] + 1 &&
        grid[tempElement[0]][tempElement[1] + 1] === 1
      ) {
        grid[tempElement[0]][tempElement[1] + 1] = 2;
        tempArr.push(tempElement[0], tempElement[1] + 1);
      }
      if (tempArr.length > 0) {
        arr.push([tempArr]);
      }
    }
  }
  return minutes;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
