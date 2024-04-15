var numIslands = function (grid) {
  let counter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const element = grid[i][j];
      if (element === "1") {
        counter++;
        findIsland(grid, i, j);
      }
    }
  }
  return counter;
};

const findIsland = (grid, i, j) => {
  grid[i][j] = "0";
  if (0 <= i - 1 && grid[i - 1][j] === "1") {
    findIsland(grid, i - 1, j);
  }
  if (grid.length > i + 1 && grid[i + 1][j] === "1") {
    findIsland(grid, i + 1, j);
  }
  if (0 <= j - 1 && grid[i][j - 1] === "1") {
    findIsland(grid, i, j - 1);
  }
  if (grid[i].length > j + 1 && grid[i][j + 1] === "1") {
    findIsland(grid, i, j + 1);
  }
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
