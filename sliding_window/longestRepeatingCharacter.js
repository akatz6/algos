const longestRepeating = (s, k) => {
  let len = 0;
  let left = 0;
  let right = 0;
  let changed = 0;
  let letter = "";
  let arr = [];
  while (right < s.length) {
    if (letter === "") {
      letter = s[right];
      arr.push(letter);
    } else {
      if (letter !== s[right]) {
        changed++;
      }
      arr.push(s[right]);
    }
   
    if (changed > k) {
      left++;
      right = left;
      letter = s[left];
      changed = 0;
      arr = [letter];
    }
    right++;
    len = Math.max(len, arr.length);
  }
  return len;
};

console.log(longestRepeating("ABAB", 2));
console.log(longestRepeating("AABABBA", 1));
