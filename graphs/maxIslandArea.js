var numIslands = function(grid) {
  let counter = 0
   for(let i = 0; i < grid.length; i++){
       for(let j = 0; j < grid[0].length; j++){
           const position = grid[i][j]
           if(position === "1"){
               counter++
               findIsland(i, j, grid)
           }
       }
   }
  return counter;
};

const findIsland = (i, j, grid) => {
   if(grid[i][j] === "0"){
       return
   }
   grid[i][j] = "0"
   if(i - 1 >= 0){
       findIsland(i - 1, j, grid)
   }
   if(j - 1 >= 0){
       findIsland(i, j - 1, grid)
   }
   if(i +1 < grid.length){
       findIsland(i + 1, j, grid)
   }
   if(j +1 < grid[0].length){
       findIsland(i, j + 1, grid)
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
