var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [];
  for (let i = 0; i < heights.length; i++) {
    const element = heights[i];
    let start = i;
    while (stack.length > 0 && element < stack[stack.length - 1][1]) {
      const [index, value] = stack.pop();
      maxArea = Math.max(maxArea, value * (i - index));
      start = index;
    }
    stack.push([start, element]);
  }
  for (let i = 0; i < stack.length; i++) {
    const [index, value] = stack[i];
    const len = heights.length - index;
    maxArea = Math.max(maxArea, value * len);
  }

  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 4]));
console.log(largestRectangleArea([5, 4, 1, 2]));
console.log(largestRectangleArea([4, 2, 0, 3, 2, 5]));
