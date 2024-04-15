const { Node } = require("./linkedList");
var removeNthFromEnd = function (head, n) {
  const node = new Node();
  node.next = head;

  let fast = head;
  fast = start(fast, n);
  const slow = getSlow(node, fast);

  slow.next = slow.next.next || null;

  return node.next;
};

const start = (fast, n) => {
    for(let i = 0; i < n ;i++){
        fast = fast.next;
    }
    return fast;
}

const getSlow = (node, fast)=> {
    while(fast){
        fast = fast.next;
        node = node.next;
    }
    return node;
}





const firstNode = new Node(1, null);
const secondNode = new Node(2, null);
firstNode.next = secondNode;
const threeNode = new Node(3, null);
secondNode.next = threeNode;
const fourthNode = new Node(4, null);
threeNode.next = fourthNode;
const fifthNode = new Node(5, null);
fourthNode.next = fifthNode;

console.log(removeNthFromEnd(firstNode, 3));

// if(n === head.val){
//     head = head.next;
//     return head;
// }
// let mover = head;
// while(mover){
//     prev = mover;
//     mover = mover.next;
//     last = mover.next;
//     if(mover.val === n){
//         prev.next = last;
//         return head;
//     }
// }
// return head;
