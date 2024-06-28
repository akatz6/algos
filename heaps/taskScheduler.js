const leastInterval = function (tasks, n) {
  let arr = new Array(26).fill(0);
  tasks = tasks.join("");
  for (let i = 0; i < tasks.length; i++) {
    arr[tasks.charCodeAt(i) - 65]++;
  }
  let max = Math.max(...arr);
  let noofmaxs = 0;
  for (let x of arr) {
    if (x == max) noofmaxs++;
  }
  let size = (max - 1) * (n + 1) + noofmaxs;
  return Math.max(tasks.length, size);
};

// console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
// console.log(
//   leastInterval(["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"], 4)
// );
console.log(
  leastInterval(
    [
      "A",
      "A",
      "B",
      "B",
      "B",
      "B",
      "B",
      "B",
      "C",
      "C",
      "D",
      "D",
      "F",
      "F",
      "G",
      "G",
      "E",
      "E",
      "H",
      "H",
      "I",
      "I",
      "J",
      "J",
      "K",
      "K",
      "L",
      "L",
      "M",
      "M",
      "N",
      "N",
      "O",
      "O",
    ],
    3
  )
);
// console.log(leastInterval(["A","A","A","B","B","B"], 3) === 10)
