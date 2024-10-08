function totalProfit(prices) {
    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // If the price today is higher than yesterday, we "buy" at yesterday and "sell" today
        if (prices[i] > prices[i - 1]) {
            totalProfit += prices[i] - prices[i - 1];
        }
    }

    return totalProfit;
}

// Example usage:
const stockPrices = [19, 3, 5, 300, 40, 60, 400];
console.log(totalProfit(stockPrices));  // Output: 797