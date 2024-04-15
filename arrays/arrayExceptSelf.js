const arrayExceptSelf = (arr) => {
  const returnArr = [];
  let mult = 1;
  arr.forEach((element) => {
    returnArr.push(mult);
    mult *= element;
  });
  mult = 1;
  for(let i = returnArr.length -1; i >=0; i--){
    returnArr[i] *= mult
    mult *= arr[i]
  }

  return returnArr;
};

console.log(arrayExceptSelf([1, 2, 3, 4]));
console.log(arrayExceptSelf([-1, 1, 0, -3, 3]));
