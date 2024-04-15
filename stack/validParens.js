var isValid = function (s) {
  const returnArr = [];
  const objOne = {};
  objOne["}"] = "{";
  objOne["]"] = "[";
  objOne[")"] = "(";
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element in objOne) {
      if (objOne[element] === returnArr[returnArr.length - 1]) {
        returnArr.pop();
      } else {
        return false;
      }
    } else {
      returnArr.push(element);
    }
  }
  return returnArr.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([{()]])"));
