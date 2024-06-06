/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let freshOranges = 0;
  let turns = 0;
  const rottenOranges = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        rottenOranges.push([i, j]);
      }
      if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }

  rottenOranges.push(" ");
  while (rottenOranges.length) {
    while (rottenOranges[0] !== " ") {
      const position = rottenOranges.shift();
      const i = position[0];
      const j = position[1];

      if (i - 1 >= 0 && grid[i - 1][j] === 1) {
        grid[i - 1][j] = 2;
        rottenOranges.push([i - 1, j]);
        freshOranges--;
      }
      if (j - 1 >= 0 && grid[i][j - 1] === 1) {
        grid[i][j - 1] = 2;
        rottenOranges.push([i, j - 1]);
        freshOranges--;
      }
      if (i + 1 < grid.length && grid[i + 1][j] === 1) {
        grid[i + 1][j] = 2;
        rottenOranges.push([i + 1, j]);
        freshOranges--;
      }
      if (j + 1 < grid[0].length && grid[i][j + 1] === 1) {
        grid[i][j + 1] = 2;
        rottenOranges.push([i, j + 1]);
        freshOranges--;
      }
    }
    turns++;
    rottenOranges.shift();
    if (rottenOranges.length >= 1 && rottenOranges[0] !== " ") {
      rottenOranges.push(" ");
    }
  }
  return freshOranges > 0 ? -1 : turns - 1;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
