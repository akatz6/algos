const { TreeNode } = require("./tree");

var invertTree = function (root) {
  const invert = (node) => {
    if (!node) return node;
    const nodeLeft = invert(node.left);
    const nodeRight = invert(node.right);
    node.left = nodeRight;
    node.right = nodeLeft;
    return node;
  };

  return invert(root);
};

let node = new TreeNode();
let root = node;
node.val = 4;
let nodeLeft = new TreeNode();
nodeLeft.val = 2;
let nodeRight = new TreeNode();
nodeRight.val = 7;
node.left = nodeLeft;
node.right = nodeRight;
node = nodeLeft;
const newNodeOne = new TreeNode();
const newNodeTwo = new TreeNode();
newNodeOne.val = 1;
newNodeTwo.val = 3;
node.left = newNodeOne;
node.right = newNodeTwo;
node = nodeRight;
const newNodeThree = new TreeNode();
const newNodeFour = new TreeNode();
newNodeThree.val = 6;
newNodeFour.val = 9;
node.left = newNodeThree;
node.right = newNodeFour;
console.log(root);

temp = invertTree(root);
console.log(invertTree(root));
