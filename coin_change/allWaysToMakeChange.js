const allWaysToMakeChange = (arr, val) => {
    const returnArr = [];
    const memo = {};

  const getAllCombos = (rArr, rVal, index) => {
    if (rVal < 0) {
      return;
    }
    if (rVal === 0) {
      returnArr.push([...rArr].sort((a, b) => a - b));
      return;
    }
    let memoKey = `${rVal}-${index}`;
    if (memo[memoKey]) return;  

    memo[memoKey] = true; 
    for (let i = index; i < arr.length; i++) {
      const num = arr[i];
      rArr.push(num)
      getAllCombos(rArr, rVal - num, i);
      rArr.pop()
    }
  };

  getAllCombos([], val, 0);
  return returnArr;
};

console.log(allWaysToMakeChange([1, 2, 5], 5));
