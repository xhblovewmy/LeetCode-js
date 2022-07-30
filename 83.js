const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const headNode = new ListNode(0, head);
  let currentNode = headNode.next;
  let lastNode = headNode;
  while (currentNode !== null) {
    const nextNode = currentNode.next;
    lastNode.next = currentNode;
    lastNode = lastNode.next;
    if (currentNode.next !== null && currentNode.val === nextNode.val) {
      const repeatValue = currentNode.val;
      while (currentNode && currentNode.val === repeatValue) {
        currentNode = currentNode.next;
      }
      if (currentNode === null) {
        lastNode.next = currentNode;
        lastNode = lastNode.next;
        break;
      }
    } else {
      currentNode = currentNode.next;
    }
  }
  return headNode.next;
};

const list = getListFromArray([1, 1]);
// console.log(deleteDuplicates(list));
console.log(getArrayFromList(deleteDuplicates(list)));
