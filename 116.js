const { TreeNode } = require("./utils/tree");

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return null;
  if (root.left) {
    root.left.next = root.right;
  }
  if (root.right && root.next) {
    root.right.next = root.next.left;
  }
  connect(root.left);
  connect(root.right);
  return root;
};
