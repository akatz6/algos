var minWindow = function (s, t) {
  const objOne = {};
  for (let i = 0; i < t.length; i++) {
    const letter = t[i];
    letter in objOne ? objOne[letter]++ : (objOne[letter] = 1);
  }
  const size = Object.keys(objOne).length;
  let left = (right = counter = 0);
  const objTwo = {};
  const arrSize = [0, 5000];
  while (right < s.length) {
    const letter = s[right];
    if (letter in objOne) {
      letter in objTwo ? objTwo[letter]++ : (objTwo[letter] = 1);
      if (objTwo[letter] === objOne[letter]) {
        counter++;
      }
    }
    while (counter === size) {
      if (arrSize[1] - arrSize[0] > right - left) {
        arrSize[0] = left;
        arrSize[1] = right;
      }
      const remove = s[left];
      if (remove in objOne && remove in objTwo) {
        if (objOne[remove] === objTwo[remove]) {
          counter--;
        }
        objTwo[remove]--;
        if (objTwo[remove] === 0) {
          delete objTwo[remove];
        }
      }
      left++;
    }
    right++;
  }
  return arrSize[1] === 5000 ? "" : s.slice(arrSize[0], arrSize[1] + 1);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
