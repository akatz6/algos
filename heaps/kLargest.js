var findKthLargest = function (nums, k) {
    const largest = Math.max(...nums)
    const obj  ={}
    for(let i = 0; i < nums.length; i++){
      const diff = largest - nums[i]
      obj[diff] ? obj[diff]++ : obj[diff] = 1
    }
    let count = 0;
    let diff = 0;
    while(count < k){
      count += obj[diff] || 0;
      diff++
    }

    return largest - diff + 1
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4, 6], 2));
