const containsMostWater = (heights) => {
  let max = 0;
  let left = 0;
  let right = heights.length - 1
  let len = heights.length - 1
  while(left < right){
      const mult = Math.min(heights[left], heights[right])
      const tempMax = mult * len;
      max = Math.max(tempMax, max);
      len--;
      if( heights[left] <= heights[right]){
          left++;
      }else{
          right--
      }
  }
  return max
};

console.log(containsMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(containsMostWater([1, 1]));
