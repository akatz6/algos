const checkInclusion = (s1, s2) => {
  let objOne = {};
  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];
    letter in objOne ? objOne[letter]++ : (objOne[letter] = 1);
  }
  let objCopy = { ...objOne };
  for (let i = 0; i < s2.length; i++) {
    const letter = s2[i];
    if (letter in objOne) {
      objOne[letter]--;
      if (objOne[letter] === 0) {
        delete objOne[letter];
      }
      if (!Object.values(objOne).length) {
        return true;
      }
      let check = i + 1;
      while (objOne[s2[check]]) {
        objOne[s2[check]]--;
        if (objOne[s2[check]] === 0) {
          delete objOne[s2[check]];
        }
        if (!Object.values(objOne).length) {
          return true;
        }
        check++;
      }
      objOne = { ...objCopy };
    }
  }
  return false;
  // const objOne = {};
  // let counter = 0;
  // for (let i = 0; i < s1.length; i++) {
  //   const letter = s1[i];
  //   letter in objOne ? objOne[letter]++ : (objOne[letter] = 1);
  // }
  // const objTwo = {};
  // for (let i = 0; i < s1.length; i++) {
  //   const letter = s2[i];
  //   letter in objTwo ? objTwo[letter]++ : (objTwo[letter] = 1);
  //   if (objTwo[letter] === objOne[letter]) {
  //     counter++;
  //   }
  // }
  // if (counter === s1.length) {
  //   return true;
  // }
  // if (counter === Object.keys(objOne).length) {
  //   return true;
  // }
  // for (let i = s1.length; i < s2.length; i++) {
  //   const left = s2[i - s1.length];
  //   const right = s2[i];
  //   if (objTwo[left] === objOne[left]) {
  //     counter--;
  //   }
  //   if (left in objTwo) {
  //     objTwo[left]--;
  //     if (objTwo[left] === 0) {
  //       delete objTwo[left];
  //     }
  //   }
  //   right in objTwo ? objTwo[right]++ : (objTwo[right] = 1);
  //   if (objTwo[right] === objOne[right]) {
  //     counter++;
  //   }
  //   if (counter === Object.keys(objOne).length) {
  //     return true;
  //   }
  // }
  // return false;
};

// console.log(checkInclusion("ab", "lecabee"));
// console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("adc", "dcda"));
