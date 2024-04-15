var searchMatrix = function (matrix, target) {
  let [row, columns] = [matrix.length, matrix[0].length];
  let [top, bottom] = [0, row - 1];
  let foundRow = 0;
  while (top <= bottom) {
    const middle = Math.floor((top + bottom) / 2);
    if (matrix[middle][columns - 1] < target) {
      top = middle + 1;
    } else if (matrix[middle][0] > target) {
      bottom = middle - 1;
    } else {
      foundRow = middle;
      break;
    }
  }
  let possibleRow = matrix[foundRow];
  let [left, right] = [0, possibleRow.length - 1];
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const temp = possibleRow[left]
    if (
      possibleRow[middle] === target
    ) {
      return true;
    }
    if (possibleRow[left] <= target && target < possibleRow[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
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
