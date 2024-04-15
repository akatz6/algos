const { TreeNode } = require("./tree");

var rightSideView = function (root) {
    if(!root){
        return []
    }
  const arr = [root, -1];
  const returnArr = [];
  while (arr.length > 0) {
    const node = arr.shift();
    if (node?.left) {
      arr.push(node.left);
    }
    if (node?.right) {
      arr.push(node.right);
    }
    if (arr[0] === -1) {
      returnArr.push(node?.val);
      arr.shift();
      arr.push(-1);
    }
  }
  return returnArr;
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
// const newNodeFour = new TreeNode();
// newNodeThree.val = 15;
newNodeThree.val = 5;
// node.left = newNodeThree;
node.right = newNodeThree;
node = nodeRight;
const newNodeFour = new TreeNode();
newNodeFour.val = 4;
node.right = newNodeFour;
console.log(root);

console.log(rightSideView(root));
