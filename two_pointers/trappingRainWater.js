const trappingRainWater = (height) => {
  const arrLeft = [0];
  for (let i = 0; i < height.length -1; i++) {
    arrLeft.push(Math.max(height[i], arrLeft[arrLeft.length - 1]));
  }
  const rightArr = [0];
  for (let i = height.length - 1; i > 0; i--) {
    rightArr.push(Math.max(height[i], rightArr[rightArr.length - 1]));
  }
  rightArr.reverse();
  const combineArr = [];
  for (let i = 0; i < height.length; i++) {
    combineArr.push(Math.min(arrLeft[i], rightArr[i]));
  }
  let total = 0;

  for(let i = 0; i < combineArr.length; i++){
    const sum = combineArr[i] - height[i]
    if(sum > 0){
      total += sum
    }
  }
  return total;
};

console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trappingRainWater([4, 2, 0, 3, 2, 5]));
console.log(trappingRainWater([4, 2, 3]));
