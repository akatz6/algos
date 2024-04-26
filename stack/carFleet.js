var carFleet = function (target, position, speed) {
  const arr = [];
  let groups = 0;
  for (let i = 0; i < position.length; i++) {
    const turns = Math.ceil((target - position[i]) / speed[i]);
    arr.push([position[i], turns]);
  }
  arr.sort((a, b) => b[0] - a[0]);
  let smallest = -1;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i][1];
    if (element > smallest) {
      groups++;
      smallest = element;
    }
  }
  return groups;  
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(10, [3], [3]));
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
console.log(carFleet(10, [8,3,7,4,6,5], [4,4,4,4,4,4]));
