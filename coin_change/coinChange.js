const coinChange = function(coins, amount) {
    const coinsArr = new Array(amount + 1).fill(amount + 1)
    coinsArr[0] = 0
    for(let j =0; j < coins.length; j++){
        for(let i = coins[j]; i <= amount; i++){
            const temp = Math.floor(i /coins[j])
            const temp2 = i % coins[j]
            const temp3 = coinsArr[i % coins[j]]
            coinsArr[i] = Math.min(coinsArr[i], coinsArr[i - coins[j]] + 1);
        }
    }

 return coinsArr[amount] === amount + 1 ? -1 : coinsArr[amount];
};



console.log(coinChange([186,419,83,408], 6249))
console.log(coinChange([1,3,4,5], 7))
console.log(coinChange([1,2,4,5], 8))