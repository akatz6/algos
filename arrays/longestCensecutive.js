const longestConsec = (arr) => {
    
  const set = new Set();
  arr.forEach((element) => {
    if (!set.has(element)) {
      set.add(element);
    }
  });
  let longest = 1;
  arr.forEach((element) => {
    let tempLongest = 1;
    let less = 1
    if (set.has(element - less)) {
        while(set.has(element - less)){
            tempLongest++;
            less++
        }
        if(tempLongest > longest){
            longest = tempLongest
        }
    }
  });
  return longest;
};

console.log(longestConsec([100, 4, 200, 1, 3, 2]));
console.log(longestConsec([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
