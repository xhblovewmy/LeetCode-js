const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let fast = new ListNode(0, head);
  let slow = new ListNode(0, fast);
  while (fast && fast.next && slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return fast === slow;
};
