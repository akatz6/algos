const { TreeNode } = require("./tree");

var isBalanced = function (root) {
  let balanced = true;
  const findIsBalanced = (node) => {
    if (!node) return 0;

    const left = findIsBalanced(node.left) + 1;
    const right = findIsBalanced(node.right) + 1;
    if (Math.abs(left - right) > 1) {
      balanced = false;
      return;
    }
    return left > right ? left : right;
  };

  findIsBalanced(root);
  return balanced;
};

let node = new TreeNode();
let root = node;
node.val = 3;
let nodeLeft = new TreeNode();
nodeLeft.val = 9;
let nodeRight = new TreeNode();
nodeRight.val = 20;
node.left = nodeLeft;
node.right = nodeRight;
node = nodeRight;
const newNodeThree = new TreeNode();
const newNodeFour = new TreeNode();
newNodeThree.val = 7;
newNodeFour.val = 15;
node.left = newNodeThree;
node.right = newNodeFour;
console.log(root);

const temp = isBalanced(root);
console.log(temp);
