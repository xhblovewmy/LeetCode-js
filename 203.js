const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const result = new ListNode(0, head);
  let preNode = result;
  while (head) {
    if (head.val === val) {
      preNode.next = head.next;
    } else {
      preNode = preNode.next;
    }
    head = preNode.next;
  }
  return result.next;
};

const head = getListFromArray([1, 23, 4, 5, 6, 7, 6]);
const val = 6;

const result = removeElements(head, val);

console.log(getArrayFromList(result));
