const { Node } = require("./linkedList");

var addTwoNumbers = function (l1, l2) {
  let returnNode = new Node();
  let moverNode = new Node();
  returnNode = moverNode;
  let overTen = 0;
  let reset = false;
  while (l1 || l2) {
    const temp = new Node();
    let val = (l1?.val || 0) + (l2?.val || 0) + overTen;
    if (val > 9) {
      val -= 10;
      reset = true;
    }
    overTen = 0;
    if(reset){
        overTen++;
        reset = false;
    }
    temp.val = val;
    l1 = l1?.next;
    l2 = l2?.next;
    moverNode.next = temp;
    moverNode = moverNode.next;
  }
  if(overTen){
    moverNode.next = new Node(1, null);
  }
  return returnNode.next;
};

// const listOne = new Node(2);
// const nodeTwo = new Node(4);
// listOne.next =nodeTwo;
// const nodeThree = new Node(3);
// nodeTwo.next =nodeThree;

// const listTwo = new Node(5);
// const nodeTwo2 = new Node(6);
// listTwo.next = nodeTwo2;
// const nodeThree2 = new Node(4);
// nodeTwo2.next =nodeThree2;
let listOne = new Node(9);
const l1 = listOne;
for (let i = 0; i < 6; i++) {
  const nodeTwo = new Node(9);
  listOne.next = nodeTwo;
  listOne = listOne.next;
}

let listTwo = new Node(9);
const l2 = listTwo;
for (let i = 0; i < 4; i++) {
  const nodeTwo = new Node(9);
  listTwo.next = nodeTwo;
  listTwo = listTwo.next;
}

console.log(addTwoNumbers(l1, l2));
