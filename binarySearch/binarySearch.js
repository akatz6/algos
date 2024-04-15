var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        const middle = Math.floor((right + left)/2);
        if(nums[middle] === target){
            return middle
        }
        if(nums[left] === target){
            return left
        }
        if(nums[right] === target){
            return right
        }
        if(nums[left] < target && target < nums[middle]){
            right = middle
        }else{
            left = middle + 1
        }
    }
    return -1 
};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))
console.log(search([5], 5))