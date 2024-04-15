const { TreeNode } = require("./tree");

var isSubtree = function (root, subRoot) {
  let subTree = false;
  const check =(nodeOne, nodeTwo) => {

  }

  check(root, subRoot)
  return subTree;
};

let node = new TreeNode();
let rootOne = node;
node.val = 3;
let nodeLeft = new TreeNode();
nodeLeft.val = 4;
let nodeRight = new TreeNode();
nodeRight.val = 5;
node.left = nodeLeft;
node.right = nodeRight;
node = nodeLeft;
nodeLeft = new TreeNode();
nodeRight = new TreeNode();
nodeLeft.val = 1;
nodeRight.val = 2;
node.left = nodeLeft;
node.right = nodeRight;
console.log(rootOne);

let nodeTwo = new TreeNode();
let rootTwo = nodeTwo;
nodeTwo.val = 4;
let nodeLeftTwo = new TreeNode();
nodeLeftTwo.val = 1;
let nodeRightTwo = new TreeNode();
nodeRightTwo.val = 2;
nodeTwo.left = nodeLeftTwo;
nodeTwo.right = nodeRightTwo;
console.log(rootTwo);

console.log(isSubtree(rootOne, rootTwo));
