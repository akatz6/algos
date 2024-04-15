const { TreeNode } = require("./tree");

var isValidBST = function (root) {
  const checkValid = (node, min, max) => {
    if (!node) {
      return true;
    }
    if (node.val <= min || max <= node.val) {
      return false;
    }
    const left = checkValid(node.left, min, node.val);
    const right = checkValid(node.right, node.val, max);
    return left && right;
  };
  return checkValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

let node = new TreeNode();
let root = node;
node.val = 5;
let nodeLeft = new TreeNode();
nodeLeft.val = 1;
let nodeRight = new TreeNode();
nodeRight.val = 4;
node.left = nodeLeft;
node.right = nodeRight;
node = nodeRight;
const newNodeThree = new TreeNode();
const newNodeFour = new TreeNode();
newNodeThree.val = 3;
newNodeFour.val = 6;
node.left = newNodeThree;
node.right = newNodeFour;
result = isValidBST(root);
console.log(result);
