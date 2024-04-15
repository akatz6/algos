const freqElements = (nums, k) => {
    const map = new Map()
    const arr = new Array(nums.length + 1).fill(0)
    const returnArr = []
    nums.forEach(element => {
        const val = map.get(element)|| 0
        map.set(element, val + 1)
    });

    for(const [key, value] of map){
        const val = arr[value] || []
        val.push(key)
        arr[value] = val
    }

    for(let i = arr.length - 1; i >=0 ; i--){
        if(arr[i]){
            returnArr.push(...arr[i])
        }
    }

    const len = returnArr.length - k
    for(let i = 0; i < len; i++){
        returnArr.pop()
    }
    return returnArr
};

console.log(freqElements([1, 1, 1, 2, 2, 2, 2, 3, 3, 3], 2));
console.log(freqElements([1], 1));
console.log(freqElements([5, 3, 1, 1, 1, 3, 73, 1], 1));
