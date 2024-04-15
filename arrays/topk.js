var topKFrequent = function (nums, k) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    num in obj ? obj[num]++ : (obj[num] = 1);
  }
  const result = []
  for(element in obj){
    result.push([obj[element], element])
  }
  let sortedResult = result.sort((a, b) => {
    return b[1] - a[1];
  });
  let output = [];
  for (let i = 0; i < k; i++) {
    output.push(sortedResult[i][0]);
  }
  return output;
};

console.log(topKFrequent([-1, -1], 1));


/**
 *  [1,2,4,6,8,10]  8
 *  set []
 *   8 - 1 = 7
 *  does set have 7
 *  no it does not
 *   set [1]
 *  8 -2 = 6
 *  same except fpr 6
 *  set[1,2]
 *  8 -6 = 2
 *  does we have a 2 in the set
 *  yes return [6,2]
 */
