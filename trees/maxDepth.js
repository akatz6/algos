const { TreeNode } = require("./tree");

var maxDepth = function (root) {
  let counter = 0;

  const getCount = (count, node) => {
    if (!node) return count;
    count++;
    const leftCount = getCount(count, node.left);
    const rightCount = getCount(count, node.right);
    return leftCount < rightCount ? rightCount : leftCount;
  };

  return getCount(counter, root);
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
newNodeThree.val = 15;
newNodeFour.val = 7;
node.left = newNodeThree;
node.right = newNodeFour;
console.log(root);

const temp = maxDepth(root);
console.log(temp);
