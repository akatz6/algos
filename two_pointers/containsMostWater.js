const containsMostWater = (height) => {
  let left = 0;
  let subtractSize = 0;
  const len = height.length - 1;
  let right = len;
  let maxVolume = 0;

  while (left < right) {
    const leftValue = height[left];
    const rightValue = height[right];
    let tempValue = 0;
    if (leftValue < rightValue) {
      tempValue = leftValue * (len - subtractSize);
      left++;
    } else {
      tempValue = rightValue * (len - subtractSize);
      right--;
    }
    subtractSize++;
    maxVolume = Math.max(tempValue, maxVolume);
  }
  return maxVolume;
};

console.log(containsMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(containsMostWater([1, 1]));
