var searchMatrix = function (matrix, target) {
  let top = 0;
  let bottom = matrix.length - 1
  let middleRow = 0;
  while(top <= bottom){
      const middle = Math.floor((top + bottom)/2)
      const middleValue = matrix[middle][matrix[0].length - 1]
      if(matrix[middle][0] <= target && target <= middleValue){
          middleRow = middle;
          break
      }
      if(target < matrix[middle][0]){
          bottom = middle - 1
      }else{
          top = middle + 1
      }
  }
  const row = matrix[middleRow]
  let left = 0;
  let right = row.length -1;
  while(left <= right){
      const middle = Math.floor((left + right)/2)
      if(row[middle] === target){
          return true;
      }
      if(target < row[middle]){
          right = middle - 1
      }else{
          left = middle + 1
      }
  }
  return false;
};

console.log(searchMatrix([[1]], 0));
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);

console.log(
  searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50],
  ], 5)
);

console.log(searchMatrix([[1, 3, 5]], 1));
