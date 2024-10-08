const count = (coins, sum) => {
  const trackerArr = new Array(sum + 1).fill(0);
  trackerArr[0] = 1
  for(let coin of coins){
    for(let i = coin; i <= sum; i++){
        trackerArr[i] += trackerArr[i - coin]
    }
  }
  return trackerArr[trackerArr.length - 1]
};

let coins = [1, 2, 3];
let sum = 4;
console.log(count(coins, sum));
