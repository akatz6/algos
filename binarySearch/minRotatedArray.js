var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] <= nums[right]) {
      return nums[left];
    }
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
console.log(findMin([2, 1]));
