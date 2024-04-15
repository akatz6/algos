const { TreeNode } = require("./tree");

var lowestCommonAncestor = function (root, p, q) {
    const isGreater = (p.val < root.val) && (q.val < root.val);
    if (isGreater) return lowestCommonAncestor(root.left, p, q);

    const isLess = (root.val < p.val) && (root.val < q.val);
    if (isLess) return lowestCommonAncestor(root.right, p, q);

    return root;
};

let node = new TreeNode();
let rootOne = node;
node.val = 6;
let nodeLeft = new TreeNode();
nodeLeft.val = 2;
let nodeRight = new TreeNode();
nodeRight.val = 8;
node.left = nodeLeft;
node.right = nodeRight;
node = nodeLeft;
nodeLeftChild = new TreeNode();
nodeRightChild = new TreeNode();
nodeLeftChild.val = 0;
nodeRightChild.val = 4;
node.left = nodeLeftChild;
node.right = nodeRightChild;
node = nodeRightChild;
nodeLeftChild = new TreeNode();
nodeRightChild = new TreeNode();
nodeLeftChild.val = 3;
nodeRightChild.val = 5;
node.left = nodeLeftChild;
node.right = nodeRightChild;
node = nodeLeftChild;
nodeLeftChild = new TreeNode();
nodeRightChild = new TreeNode();
nodeLeftChild.val = null;
nodeRightChild.val = null;
node.left = nodeLeftChild;
node.right = nodeRightChild;
node = nodeRight;
nodeLeftChild = new TreeNode();
nodeRightChild = new TreeNode();
nodeLeftChild.val = 7;
nodeRightChild.val = 9;
node.left = nodeLeftChild;
node.right = nodeRightChild;
console.log(rootOne);

console.log(lowestCommonAncestor(rootOne, 2, 4));
