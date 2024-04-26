const maxProfit = (prices) => {
  let maxProfit = 0;
  let left = right = 0;
  while(right < prices.length){
      if(prices[left] > prices[left+1]){
          left++;
          right = left + 1;
      }
      while(prices[right] >= prices[left] && right < prices.length){
          maxProfit = Math.max(maxProfit, prices[right] - prices[left])
          right++;
      }
      left = right;
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
