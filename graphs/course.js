var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => [])
  const visited = new Array(numCourses).fill(0);

  for(const [key, value] of prerequisites){
    graph[key].push(value)
  }
  const finished = (element) => {
    if(visited[element] === 1) return false
    if(visited[element] === 2) return true
    const arr = graph[element]
    visited[element] = 1
    for(let i = 0; i < arr.length; i++){
      if(!(finished(arr[i]))) return false
    }
    visited[element] = 2
    return true;
  }
  for(let i = 0; i < graph.length; i++){
    if(!(finished(i))) return false
  }

  return true;
};

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
  canFinish(8, [
    [1, 0],
    [2, 6],
    [1, 7],
    [6, 4],
    [7, 0],
    [0, 5],
  ])
);
