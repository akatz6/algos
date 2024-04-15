var carFleet = function (target, position, speed) {
  const combineArr = [];
  for (let i = 0; i < position.length; i++) {
    combineArr.push([position[i], speed[i]]);
  }
  const arr = [];
  combineArr.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < position.length; i++) {
    arr.push((target - combineArr[i][0]) / combineArr[i][1]);
  }

  let pace = -1;
  let groups = 0;
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    if (temp > pace) {
      pace = temp;
      groups++;
    }
  }

  return groups;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(10, [3], [3]));
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
