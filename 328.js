const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  var pre = new ListNode(0);
  var next = new ListNode(0);
  var l1 = pre;
  var l2 = next;

  while (head) {
    l1.next = head;
    l2.next = head.next;
    l1 = l1.next;
    l2 = l2.next;
    head = head.next ? head.next.next : head.next;
  }
  l1.next = next.next;
  return pre.next;
};

const head = getListFromArray([2, 1, 3, 5, 6, 4, 7]);
const result = oddEvenList(head);

console.log(getArrayFromList(result));
