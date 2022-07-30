const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const result = new ListNode(0, null);
  while (head) {
    var next = head.next;
    head.next = result.next;
    result.next = head;
    head = next;
  }
  return result.next;
};

const head = getListFromArray([1, 2, 3, 4, 5]);
const result = reverseList(head);

console.log(getArrayFromList(result));
