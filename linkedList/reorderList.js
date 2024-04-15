const { LinkedList, Node } = require("./linkedList");

var reorderList = function (head) {
  if (!head.next) {
    return head;
  }
  const middle = findMiddle(head);
  const reverse = reverseList(middle);
  return merge(head, reverse);
};

const findMiddle = (head) => {
  let [walker, runner, prev] = [head, head, null];

  while (runner && runner.next) {
    prev = walker;
    walker = walker.next;
    runner = runner.next.next;
  }
  prev.next = null;
  return walker;
};

const reverseList = (head) => {
  let [mover, anchor, start] = [head, head, head];
  while (anchor.next) {
    mover = anchor.next;
    anchor.next = anchor.next.next;
    mover.next = start;
    start = mover;
  }
  return start;
};

const merge = (l1, l2) => {
  let newNode = new Node(0, null);
  const returnNode = newNode;
  while (l1 && l2) {
    newNode.next = l1;
    l1 = l1.next;
    newNode = newNode.next;

    newNode.next = l2;
    l2 = l2.next;
    newNode = newNode.next;
  }
  newNode.next = l1 || l2;

  return returnNode.next;
};

const tempOne = new Node();
tempOne.val = 1;
const tempTwo = new Node();
tempTwo.val = 2;
tempOne.next = tempTwo;
const tempThree = new Node();
tempThree.val = 3;
tempTwo.next = tempThree;
const tempFour = new Node();
tempFour.val = 4;
tempThree.next = tempFour;
const tempFive = new Node();
tempFive.val = 5;
tempFour.next = tempFive;

console.log(reorderList(tempOne));
