const { TreeNode } = require("./tree");

var goodNodes = function (root) {
  let counter = 0;
  const getCount = (node, val) => {
    if(!node){
        return;
    }
    if (node.val >= val) {
      counter++;
      val = node.val;
    }
    getCount(node.left, val);
    getCount(node.right, val);
  };

  getCount(root, -1);
  return counter;
};

let node = new TreeNode();
let rootOne = node;
node.val = 3;
let nodeLeft = new TreeNode();
nodeLeft.val = 1;
let nodeRight = new TreeNode();
nodeRight.val = 4;
node.left = nodeLeft;
node.right = nodeRight;
node = nodeLeft;
nodeLeft = new TreeNode();
nodeLeft.val = 3;
node.left = nodeLeft;
node = nodeRight;
nodeLeft = new TreeNode();
nodeRight = new TreeNode();
nodeLeft.val = 1;
nodeRight.val = 5;
node.left = nodeLeft;
node.right = nodeRight;
console.log(rootOne);

console.log(goodNodes(rootOne));
