var pacificAtlantic = function(heights) {
    
    const setPacific = new Set();
    const setAtlantic = new Set();
    for(let i = 0; i < heights.length; i++){
        for(let j = 0; j < heights[0].length; j++){
            getTiles(i,j, setPacific,heights)
        }
        break;
    }
    for(let i = 0; i < heights[0].length; i++){
        for(let j = 0; j < heights.length; j++){
            getTiles(j,i, setPacific,heights)
        }
        break;
    }
    for(let i = heights.length -1; i >= 0 ; i--){
        for(let j = 0; j < heights[0].length; j++){
            getTiles(i,j, setAtlantic,heights)
        }
        break;
    }
      for(let i = heights[0].length -1; i >= 0 ; i--){
        for(let j = 0; j < heights.length; j++){
            getTiles(j,i, setAtlantic,heights)
        }
        break;
    }
    const returnSet = new Set()
    for(const element of setPacific){
        if(setAtlantic.has(element)){
            returnSet.add(element)
        }
    }
    const returnArr = []
    for(const element of returnSet){
        const ele = element.split(",")
        returnArr.push([ele[0], ele[1]])
    }
    return returnArr
};
const getTiles = (i, j, set, grid) => {
    if((set.has(`${i},${j}`))){
        return
    }
    set.add(`${i},${j}`)
    if(i-1 >= 0 && grid[i][j] <= grid[i-1][j]){
        getTiles(i -1,j, set, grid)
    }
    if(j-1 >= 0 && grid[i][j] <= grid[i][j-1]){
        getTiles(i,j -1, set, grid)
    }
    if(i+1 < grid.length   && grid[i][j] <= grid[i+1][j]){
        getTiles(i + 1,j, set, grid)
    }
    if(j+1 < grid[0].length  && grid[i][j] <= grid[i][j+1]){
      
        getTiles(i,j+1, set, grid)
    }
}


console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
