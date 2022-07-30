const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

const { TreeNode } = require("./utils/tree");

var splitList = function (head) {
  const preNode = new ListNode(0, head);
  let targetNode = new ListNode(0, preNode);
  let slowNode = new ListNode(0, head);
  let fastNode = new ListNode(0, head);

  while (fastNode) {
    targetNode.next = slowNode;
    targetNode = targetNode.next;
    slowNode = slowNode.next;
    if (fastNode.next === null) {
      fastNode = fastNode.next;
    } else {
      fastNode = fastNode.next.next;
    }
  }
  targetNode.next = null;
  const midNode = new ListNode(slowNode.val);
  return [preNode.next, midNode, slowNode.next];
};

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (head === null) return null;
  if (head.next === null) return new TreeNode(head.val);
  const [preNode, midNode, postNode] = splitList(head);
  const val = midNode.val;
  const leftTree = sortedListToBST(preNode);
  const rightTree = sortedListToBST(postNode);
  const tree = new TreeNode(val, leftTree, rightTree);
  return tree;
};

const node = getListFromArray([1, 2, 3, 4, 5, 6]);
splitList(node).forEach((n) => console.log(getArrayFromList(n)));
