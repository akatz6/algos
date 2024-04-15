const maxProfit = (prices) => {
  let profit = 0;
  let left = 0;
  let right = left + 1;

  while (right < prices.length) {
    const leftValue = prices[left];
    const rightValue = prices[right];
    if (leftValue >= rightValue) {
      left++;
      right = left + 1;
    } else {
      const tempValue = rightValue - leftValue;
      profit = Math.max(tempValue, profit);
      right++;
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
