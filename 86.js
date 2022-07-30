const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const headNode1 = new ListNode(0);
  const headNode2 = new ListNode(0);
  let preNodes = headNode1;
  let postNodes = headNode2;
  let currentNode = head;
  while (currentNode) {
    if (currentNode.val < x) {
      preNodes.next = currentNode;
      preNodes = preNodes.next;
    } else {
      postNodes.next = currentNode;
      postNodes = postNodes.next;
    }
    currentNode = currentNode.next;
  }
  preNodes.next = null;
  postNodes.next = null;
  preNodes.next = headNode2.next;

  return headNode1.next;
};

const head = getListFromArray([1, 4, 3, 2, 5, 2]);
const x = 3;
// console.log(partition(head, x));
console.log(getArrayFromList(partition(head, x)));
