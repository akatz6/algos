const checkInclusion = (s1, s2) => {
  const objOne = {};
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];
    letter in objOne ? objOne[letter]++ : (objOne[letter] = 1);
  }
  const objTwo = {};
  for (let i = 0; i < s1.length; i++) {
    const letter = s2[i];
    letter in objTwo ? objTwo[letter]++ : (objTwo[letter] = 1);
    if (objTwo[letter] === objOne[letter]) {
      counter++;
    }
  }
  if (counter === s1.length) {
    return true;
  }
  if (counter === Object.keys(objOne).length) {
    return true;
  }
  for (let i = s1.length; i < s2.length; i++) {
    const left = s2[i - s1.length];
    const right = s2[i];
    if (objTwo[left] === objOne[left]) {
      counter--;
    }
    if (left in objTwo) {
      objTwo[left]--;
      if (objTwo[left] === 0) {
        delete objTwo[left];
      }
    }
    right in objTwo ? objTwo[right]++ : (objTwo[right] = 1);
    if (objTwo[right] === objOne[right]) {
      counter++;
    }
    if (counter === Object.keys(objOne).length) {
      return true;
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("adc", "dcda"));
