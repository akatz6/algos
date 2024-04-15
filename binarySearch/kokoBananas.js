var minEatingSpeed = function (piles, h) {
  let right = Math.max(...piles);
  let left = 1;
  while (left < right) {
    const middle = Math.floor((right + left) / 2);
    const arr = piles.map((element) => Math.ceil(element / middle));
    const hours = arr.reduce((a, b) => a + b);
    if (hours <= h) {
      right = middle;
    } else if (h <= hours) {
      left = middle + 1;
    }
  }
  return right;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
console.log(minEatingSpeed([312884470], 312884469));
