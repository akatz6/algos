var maxSlidingWindow = function (nums, k) {
  const storeArr = []; // stores *indices*
  const returnArr = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    while (storeArr && nums[storeArr[storeArr.length - 1]] <= num) {
      storeArr.pop();
    }
    storeArr.push(i);
    // remove first element if it's outside the window
    if (storeArr[0] === i - k) {
      storeArr.shift();
    }
    // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
    if (i >= k - 1) {
      returnArr.push(nums[storeArr[0]]);
    }
  }
  return returnArr;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([7, 2, 4], 2));
console.log(maxSlidingWindow([4, 3, 11], 3));
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
