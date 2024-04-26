var generateParenthesis = function (n) {
  const result = [];
  const backtrack = (S = "", left = 0, right = 0) => {
    if (S.length === n * 2) {
      result.push(S);
      return;
    }
    if (left < n) {
      backtrack(S + "(", left + 1, right);
    }
    if(right < left){
      backtrack(S + ")", left, right + 1);
    }
  };
  backtrack();
  return result;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
