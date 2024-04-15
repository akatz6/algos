var dailyTemperatures = function (temperatures) {
  const holdArr = [];
  const returnArr = new Array(temperatures.length).fill(0);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    const element = temperatures[i];
    let temp = holdArr[0];
    while (temp && element >= temperatures[temp]) {
      holdArr.shift();
      temp = holdArr[0];
      //   returnArr[temp[1]] = i - temp[1] ;
      //   temp = holdArr[holdArr.length - 1];
    }

    if (holdArr.length !== 0) {
      returnArr[i] = holdArr[0] - i;
    }

    holdArr.unshift(i);
    // if (holdArr.length === 0) {
    //   holdArr.push([element, i]);
    // } else if (holdArr.length > 0 && holdArr[holdArr.length - 1][0] !== i) {
    //   let temp = holdArr[holdArr.length - 1];
    //   while (temp && element > temp[0]) {
    //     holdArr.pop();
    //     returnArr[temp[1]] = i - temp[1] ;
    //     temp = holdArr[holdArr.length - 1];
    //   }
    //   holdArr.push([element, i]);
    // }
  }
  return returnArr;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
