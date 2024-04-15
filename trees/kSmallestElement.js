const { TreeNode } = require("./tree");

var kthSmallest = function (root, k) {
  const arr = [];
  const inOrder = (node, arr) => {
    if (node) {
      inOrder(node.left, arr);
      arr.push(node.val);
      inOrder(node.right, arr);
    }
  };

  inOrder(root, arr);
  return arr[k - 1];
};

let node = new TreeNode();
let root = node;
node.val = 5;
let nodeLeft = new TreeNode();
nodeLeft.val = 3;
let nodeRight = new TreeNode();
nodeRight.val = 6;
node.left = nodeLeft;
node.right = nodeRight;
node = nodeLeft;
const newNodeThree = new TreeNode();
const newNodeFour = new TreeNode();
newNodeThree.val = 2;
newNodeFour.val = 4;
node.left = newNodeThree;
node.right = newNodeFour;
node = newNodeThree;
const newNodeFive = new TreeNode();
newNodeFive.val = 1;
node.left = newNodeFive;
temp = kthSmallest(root, 3);
console.log(temp);
