const { TreeNode } = require("./tree");

var diameterOfBinaryTree = function (root) {
  const returnArr = [0];

  const diameter = (node, arr) => {
    if (!node) return -1;
    const left = diameter(node.left, arr);
    const right = diameter(node.right, arr);
    arr[0] = Math.max(arr[0], 2 + left + right);
    return 1 + Math.max(left, right);
  };

  diameter(root, returnArr);
  return returnArr[0];
};

let node = new TreeNode();
let root = node;
node.val = 1;
let nodeLeft = new TreeNode();
nodeLeft.val = 2;
let nodeRight = new TreeNode();
nodeRight.val = 3;
node.left = nodeLeft;
node.right = nodeRight;
node = nodeLeft;
const newNodeThree = new TreeNode();
const newNodeFour = new TreeNode();
newNodeThree.val = 4;
newNodeFour.val = 5;
node.left = newNodeThree;
node.right = newNodeFour;
console.log(root);
const temp = diameterOfBinaryTree(root);
console.log(temp);
