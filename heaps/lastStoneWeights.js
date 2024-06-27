var lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);
  while(stones.length > 1){
    const largest = stones.shift();
    const secondLargest = stones.shift();
    if(largest > secondLargest){
        const diff = largest - secondLargest;
        const index = stones.findIndex(stone => stone <= diff)
        index === -1? stones.push(diff) : stones.splice(index, 0 ,diff)
    }
  }

  return stones.length === 1 ? stones[0] : 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
