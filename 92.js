const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const result = new ListNode(0, head);
  let currentNode = result.next;
  let headNode = result;
  let tailNode = null;

  let i = 1;
  while (i <= right) {
    if (i < left) {
      headNode.next = currentNode;
      headNode = headNode.next;
    } else if (i === left) {
      tailNode = new ListNode(currentNode.val);
      headNode.next = tailNode;
    } else if (i <= right) {
      const cNode = new ListNode(currentNode.val);
      cNode.next = headNode.next;
      headNode.next = cNode;
      if (i === right) {
        headNode = tailNode;
      }
    }
    i++;
    currentNode = currentNode.next;
  }
  tailNode.next = currentNode;

  return result.next;
};

const head = getListFromArray([1, 2, 3, 4, 5]);
const left = 2;
const right = 4;

console.log(getArrayFromList(reverseBetween(head, left, right)));
