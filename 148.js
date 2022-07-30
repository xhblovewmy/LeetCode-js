const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

var mergeSortedList = function (sortedHead, sortedTail) {
  var result = new ListNode(0);
  var current = result;

  while (sortedHead && sortedTail) {
    if (sortedHead.val <= sortedTail.val) {
      current.next = sortedHead;
      sortedHead = sortedHead.next;
    } else {
      current.next = sortedTail;
      sortedTail = sortedTail.next;
    }
    current = current.next;
  }
  if (sortedHead) {
    current.next = sortedHead;
  }
  if (sortedTail) {
    current.next = sortedTail;
  }
  return result.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null) return null;
  if (head.next === null) return head;
  var slow = new ListNode(0, head);
  var fast = slow;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  var tail = slow.next;
  slow.next = null;

  var sortedHead = sortList(head);
  var sortedTail = sortList(tail);

  var result = new ListNode(0);
  var current = result;

  while (sortedHead && sortedTail) {
    if (sortedHead.val <= sortedTail.val) {
      current.next = sortedHead;
      sortedHead = sortedHead.next;
    } else {
      current.next = sortedTail;
      sortedTail = sortedTail.next;
    }
    current = current.next;
  }
  if (sortedHead) {
    current.next = sortedHead;
  }
  if (sortedTail) {
    current.next = sortedTail;
  }

  return result.next;
};

const head = getListFromArray([4, 2, 1, 3]);

const result = sortList(head);

console.log(result);
console.log(getArrayFromList(result));
