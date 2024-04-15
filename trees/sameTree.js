const { TreeNode } = require("./tree");

var isSameTree = function (p, q) {
  let same = true;
  const checkIsSame = (nodeOne, nodeTwo) => {
    if (!nodeOne && !nodeTwo) {
      return;
    }
    if (nodeOne?.val !== nodeTwo?.val) {
      same = false;
      return;
    }
    checkIsSame(nodeOne.left, nodeTwo.left)
    checkIsSame(nodeOne.right, nodeTwo.right)
  };

  checkIsSame(p, q);
  return same;
};

let node = new TreeNode();
let rootOne = node;
node.val = 1;
let nodeLeft = new TreeNode();
nodeLeft.val = 2;
let nodeRight = new TreeNode();
nodeRight.val = 3;
node.left = nodeLeft;
node.right = nodeRight;
console.log(rootOne);

let nodeTwo = new TreeNode();
let rootTwo = nodeTwo;
nodeTwo.val = 1;
let nodeLeftTwo = new TreeNode();
nodeLeftTwo.val = 2;
let nodeRightTwo = new TreeNode();
nodeRightTwo.val = 3;
nodeTwo.left = nodeLeftTwo;
nodeTwo.right = nodeRightTwo;
console.log(rootTwo);

console.log(isSameTree(rootOne, rootTwo));
