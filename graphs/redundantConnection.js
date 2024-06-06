var findRedundantConnection = function (edges) {
  const pair = [];
  const rank = [];
  for (let i = 0; i <= edges.length; i++) {
    pair[i] = i;
    rank.push(1);
  }
  const find = (point) => {
    let found = pair[point];
    while (found !== pair[found]) {
      pair[found] = pair[pair[found]];
      found = pair[found];
    }
    return found;
  };

  const union = (edgeOne, edgeTwo) => {
    const pointOne = find(edgeOne);
    const pointTwo = find(edgeTwo);
    if (pointOne === pointTwo) {
      return false;
    }
    if (rank[pointOne] > rank[pointTwo]) {
      pair[pointTwo] = pointOne;
      rank[pointOne] += pair[pointTwo];
    } else {
      pair[pointOne] = pointTwo;
      rank[pointTwo] += pair[pointOne];
    }
    return true;
  };
  for (let i = 0; i < edges.length; i++) {
    if (!union(edges[i][0], edges[i][1])) {
      return edges[i];
    }
  }
};

// console.log(
//   findRedundantConnection([
//     [1, 2],
//     [1, 3],
//     [2, 3],
//   ])
// );

// console.log(
//   findRedundantConnection([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [1, 4],
//     [1, 5],
//   ])
// );

console.log(
  findRedundantConnection([
    [3, 4],
    [1, 2],
    [2, 4],
    [3, 5],
    [2, 5],
  ])
);
