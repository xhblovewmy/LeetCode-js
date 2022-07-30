const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

const { TreeNode } = require("./utils/tree");

var mergeList = function (leftList, midValue, rightList) {
  const resultList = new ListNode(0);
  let currentNode = resultList;
  while (leftList) {
    currentNode.next = leftList;
    currentNode = currentNode.next;
    leftList = leftList.next;
  }
  currentNode.next = new ListNode(midValue);
  currentNode = currentNode.next;
  while (rightList) {
    currentNode.next = rightList;
    currentNode = currentNode.next;
    rightList = rightList.next;
  }
  return resultList.next;
};

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return null;
  flatten(root.left);
  flatten(root.right);
  let left = root.left;
  let right = root.right;
  root.left = null;
  root.right = left;
  while (root.right) {
    root = root.right;
  }
  root.right = right;
};

const leftList = null;
const midValue = 5;
const rightList = getListFromArray([1, 2, 3]);
console.log(getArrayFromList(mergeList(leftList, midValue, rightList)));
