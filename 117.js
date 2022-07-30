const { TreeNode } = require("./utils/tree");

const findRightTree = function (nextTree) {
  while (nextTree !== null) {
    if (nextTree.left) {
      return nextTree.left;
    }
    if (nextTree.right) {
      return nextTree.right;
    }
    nextTree = nextTree.next;
  }
  return null;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return null;
  if (root.left !== null) {
    if (root.right !== null) {
      root.left.next = root.right;
    } else {
      root.left.next = findRightTree(root.next);
    }
  }
  if (root.right !== null) {
    root.right.next = findRightTree(root.next);
  }
  connect(root.right);
  connect(root.left);
  return root;
};
