const search = (nums, target) => {
  let left = 0;
  let right = nums.length -1;
  while(left <= right){
      const middle = Math.floor((left + right)/2)
      if(nums[middle] === target){
          return middle
      }
      if(nums[left] <= nums[middle]){
          if(target < nums[left] || target > nums[middle]){
              left = middle + 1
          }else{
              right = middle -1
          }
      }else{
          if(target > nums[right] || target < nums[middle]){
              right = middle -1
          }else{
              left = middle + 1
          }

      }
  }
  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.log(search([5,1,2,3,4], 1));
