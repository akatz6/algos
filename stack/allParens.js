var generateParenthesis = function (n) {
  const arrTrack = ["("];
  let startParams = n - 1;
  let endParams = n;
  const returnArr = [];
  const createPrams = (arr, startParams, endParams) => {
    if (endParams < startParams) {
      return;
    }
    if (startParams === 0 && endParams === 0) {
      returnArr.push(arr.toString().replace(/,/g, ""));
      return;
    }
    if (startParams > 0) {
      arr.push("(");
      createPrams([...arr], --startParams, endParams);
      arr.pop();
      startParams++;
    }
    arr.push(")");
    createPrams([...arr], startParams, --endParams);
  };
  createPrams(["("], startParams, endParams);
  return returnArr;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
