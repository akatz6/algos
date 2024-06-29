/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  let result = 0;
  const map = new Map()
  let left = 0;
  for(let right = 0; right < s.length; right++){
    let len = right -left + 1;
    const letter = s[right]
    map.set(letter, 1 + (map.get(letter) || 0))
    if(len - Math.max(...map.values()) > k){
      const subLetter = s[left]
      map.set(subLetter, map.get(subLetter) - 1)
      left++
    }
    len = right -left + 1;
    result = Math.max(result, len)
  }
  return result;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
