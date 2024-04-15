var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (left === right && target === nums[right]) {
      return right;
    }
    if (left === right && target !== nums[right]) {
      return -1;
    }
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[left] < nums[middle]) {
      if (nums[left] < target && target< nums[middle]) {
        right = middle - 1;
        left++;
      } else {
        left = middle + 1;
      }
    } else {
      if (nums[middle] < target && target< nums[right]) {
        left = middle + 1;
        right--;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
