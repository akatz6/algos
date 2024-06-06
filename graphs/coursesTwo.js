var findOrder = function (numCourses, prerequisites) {
  const order = [];
  const queue = [];
  const map = new Map();
  const leftArr = new Array(numCourses).fill(0);

  for (const [key, value] of prerequisites) {
    map.has(value) ? map.get(value).push(key) : map.set(value, [key]);
    leftArr[key]++;
  }

  leftArr.forEach((element, index) => {
    if (element === 0) {
      queue.push(index);
    }
  });

  while (queue.length) {
    const element = queue.shift();
    if (map.has(element)) {
      const arr = map.get(element);
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        leftArr[item]--;
        if (leftArr[item] === 0) {
          queue.push(item);
        }
      }
    }
    order.push(element);
  }
  return numCourses === order.length ? order : [];
};

// var findOrder = function (numCourses, prerequisites) {
//   const graph = new Array(numCourses).fill(0).map(() => [])
//  const visited = new Array(numCourses).fill(0);
//  let returnArr =[]
//  let cycleFound = false;

//  for(const [key, value] of prerequisites){
//    graph[key].push(value)
//  }
//  const finished = (element) => {
//    if(visited[element] === 1) {
//        cycleFound = true
//        returnArr = []
//        return
//    }
//    if(visited[element] === 2) return true
//    const arr = graph[element]
//    visited[element] = 1
//    for(let i = 0; i < arr.length; i++){
//      if(!(finished(arr[i]))) {
//        cycleFound = true
//        return
//      }
//    }
//    visited[element] = 2
//    if(cycleFound){
//        return
//    }
//    returnArr.push(element)
//    return true;
//  }
//  for(let i = 0; i < graph.length; i++){
//    if(!(finished(i))){
//        return []
//    }
//  }
//  return returnArr;
// };

// console.log(canFinish(2, [[1, 0]]));

// console.log(
//   canFinish(5, [
//     [1, 4],
//     [2, 4],
//     [3, 1],
//     [3, 2],
//   ])
// );

// console.log(
//   canFinish(2, [
//     [1, 0],
//     [0, 1],
//   ])
// );

// console.log(
//   canFinish(20, [
//     [0, 10],
//     [3, 18],
//     [5, 5],
//     [6, 11],
//     [11, 14],
//     [13, 1],
//     [15, 1],
//     [17, 4],
//   ])
// );

console.log(
  findOrder(8, [
    [1, 0],
    [2, 6],
    [1, 7],
    [6, 4],
    [7, 0],
    [0, 5],
  ])
);
