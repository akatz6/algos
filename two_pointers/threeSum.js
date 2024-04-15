const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const returnArr = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) return returnArr;
    if (i > 0 && num === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const val = num + nums[left] + nums[right];
      if (val === 0) {
        returnArr.push([num, nums[left], nums[right]]);
        left++;
        right--;
        while(nums[left-1] === nums[left] && left< right){
            left++
        }
      } else if (val < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return returnArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0, 0]));
