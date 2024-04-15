var pacificAtlantic = function(heights) {
    
    const pacSet = new Set();
    const atlSet = new Set();
    const res = [];
    
	// leftmost(pacific) and rightmost(atlantic) column
    for(let i=0;i<heights.length;i++){
        helper(i,0,pacSet,Number.MIN_SAFE_INTEGER)
        helper(i,heights[0].length-1,atlSet,Number.MIN_SAFE_INTEGER)
    }
	// top(pacific) and bottom(atlantic) row
    for(let i=0;i<heights[0].length;i++){
        helper(0,i,pacSet, Number.MIN_SAFE_INTEGER)
        helper(heights.length-1,i,atlSet,Number.MIN_SAFE_INTEGER)
    }
    
	// finding co-ordinates which are common among them
    for(let val of pacSet){
        if(atlSet.has(val)){
            res.push(val.split('-'))
        }
    }
    
    return res
    
    function helper(r,c,set,prevHeight){
		// boundary condition
        if(r<0||c<0||r>=heights.length||c>=heights[0].length||heights[r][c]<prevHeight||set.has(`${r}-${c}`)){
            return 
        }
        set.add(`${r}-${c}`)
        helper(r+1,c,set,heights[r][c])
        helper(r-1,c,set,heights[r][c])
        helper(r,c+1,set,heights[r][c])
        helper(r,c-1,set,heights[r][c])
    }
};


console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
