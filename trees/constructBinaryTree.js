const { TreeNode } = require("./tree");

var buildTree = function (preorder, inorder) {
  let p = (i = 0);
  const build = (stop) => {
    if (inorder[i] !== stop) {
      const node = new TreeNode(preorder[p++]);
      node.left = build(node.val);
      i++;
      node.right = build(stop);
      return node;
    }
    return null;
  };

  return build();
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

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
