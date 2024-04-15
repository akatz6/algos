var maxAreaOfIsland = function (grid) {
    let counter = [0];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        const element = grid[i][j];
        if (element === 1) {
          let tempCounter = [0];
          findIsland(grid, i, j, tempCounter);
          if (tempCounter[0] >= counter[0]) {
            counter = tempCounter;
          }
        }
      }
    }
    return counter[0];
  };
  
  const findIsland = (grid, i, j, tempCounter) => {
    grid[i][j] = 0;
    tempCounter[0]++;
    if (0 <= i - 1 && grid[i - 1][j] === 1) {
      findIsland(grid, i - 1, j, tempCounter);
    }
    if (grid.length > i + 1 && grid[i + 1][j] === 1) {
      findIsland(grid, i + 1, j, tempCounter);
    }
    if (0 <= j - 1 && grid[i][j - 1] === 1) {
      findIsland(grid, i, j - 1, tempCounter);
    }
    if (grid[i].length > j + 1 && grid[i][j + 1] === 1) {
      findIsland(grid, i, j + 1, tempCounter);
    }
  };

console.log(
    maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
