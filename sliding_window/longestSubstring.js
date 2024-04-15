const longestSubString = (str) => {
  if (!str.length) return 0;
  const set = new Set();
  let left = 0;
  let right = 1;
  let len = 1;
  set.add(str[left]);
  while (right < str.length) {
    const letter = str[right];
    while (set.has(letter)) {
      set.delete(str[left]);
      left++;
    }
    set.add(letter)
    len = Math.max(set.size, len);
    right++;
  }
  return len;
};

console.log(longestSubString("abcabcbb"));
console.log(longestSubString("bbbbb"));
console.log(longestSubString("au"));
console.log(longestSubString("pwwkew"));
