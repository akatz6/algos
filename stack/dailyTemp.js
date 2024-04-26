var dailyTemperatures = function (temperatures) {
  const returnArr = new Array(temperatures.length -1).fill(0)
  const tempArr = []
  for(let i = 0; i < temperatures.length; i++){
    const temp = temperatures[i]
    const position = i;
    if(!tempArr.length){
        tempArr.push([temp, position])
    }else{
        let lastElement = tempArr[tempArr.length - 1]
        let lastTemp = lastElement[0]
        let lastIndex = lastElement[1]
        while(lastTemp < temp){
            returnArr[lastIndex] = position - lastIndex
            returnArr.pop();
            lastElement = tempArr[tempArr.length - 1]
            lastTemp = lastElement[0]
            lastIndex = lastElement[1]
        }
        tempArr.push([temp, position])
    }
  }
  return returnArr
  // const holdArr = [];
  // const returnArr = new Array(temperatures.length).fill(0);
  // for (let i = temperatures.length - 1; i >= 0; i--) {
  //   const element = temperatures[i];
  //   let temp = holdArr[0];
  //   while (temp && element >= temperatures[temp]) {
  //     holdArr.shift();
  //     temp = holdArr[0];
  //     //   returnArr[temp[1]] = i - temp[1] ;
  //     //   temp = holdArr[holdArr.length - 1];
  //   }

  //   if (holdArr.length !== 0) {
  //     returnArr[i] = holdArr[0] - i;
  //   }

  //   holdArr.unshift(i);
  //   // if (holdArr.length === 0) {
  //   //   holdArr.push([element, i]);
  //   // } else if (holdArr.length > 0 && holdArr[holdArr.length - 1][0] !== i) {
  //   //   let temp = holdArr[holdArr.length - 1];
  //   //   while (temp && element > temp[0]) {
  //   //     holdArr.pop();
  //   //     returnArr[temp[1]] = i - temp[1] ;
  //   //     temp = holdArr[holdArr.length - 1];
  //   //   }
  //   //   holdArr.push([element, i]);
  //   // }
  // }
  // return returnArr;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
