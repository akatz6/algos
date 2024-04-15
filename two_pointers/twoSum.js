var twoSum = function(numbers, target) {
    const map = new Map()
    for(let i = 0; i < numbers.length; i++){
        const num = target - numbers[i]
        if(map.has(num)){
            return[map.get(num), i +1]
        }else{
            map.set(numbers[i], i+ 1)
        }
    }
};

console.log(twoSum([2,7,11,15], 9))