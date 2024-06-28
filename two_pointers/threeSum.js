const threeSum = (nums) => {
  const returnArr = [];
  const matchObj = {};
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
   
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const result = element + nums[left] + nums[right];
      if (result === 0) {
        const tempArr = [element, nums[left], nums[right]];
        if (!(tempArr in matchObj)) {
          matchObj[tempArr] = tempArr;
          returnArr.push(tempArr);
        }
        while (element + nums[left] + nums[right] === 0) {
          right--;
          if (left > right) {
            break;
          }
        }
      } else if (result > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return returnArr;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([3,0,-2,-1,1,2]));


