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
  if (!head) return null;
  const map = new Map();

  while (head) {
    if (map.get(head)) {
      return head;
    }
    map.set(head, true);
    head = head.next;
  }
  return null;
};
