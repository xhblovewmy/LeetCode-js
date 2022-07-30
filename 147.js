const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (head === null) return null;
  var lastSorted = head;
  var current = head.next;
  var result = new ListNode(0, head);
  while (current) {
    if (lastSorted.val <= current.val) {
      lastSorted = lastSorted.next;
    } else {
      lastSorted.next = current.next;
      var preNode = result;
      while (preNode.next.val <= current.val) {
        preNode = preNode.next;
      }
      current.next = preNode.next;
      preNode.next = current;
    }
    current = lastSorted.next; // 每次指针指向已排好序的链表的next
  }
  return result.next;
};

const head = getListFromArray([1, 4, 2, 3]);

const result = insertionSortList(head);

console.log(getArrayFromList(result));
