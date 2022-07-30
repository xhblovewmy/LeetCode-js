const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return false;
  if (!head.next) return true;

  var slow = head;
  var fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  var tail = slow.next;
  slow.next = null;

  var reverseTail = new ListNode(0);
  while (tail) {
    var next = tail.next;
    tail.next = reverseTail.next;
    reverseTail.next = tail;
    tail = next;
  }

  while (reverseTail.next && head) {
    if (reverseTail.next.val !== head.val) {
      return false;
    }
    reverseTail = reverseTail.next;
    head = head.next;
  }
  return true;
};

const head = getListFromArray([1, 2, 3, 4, 4, 3, 2, 1]);
const result = isPalindrome(head);

console.log(result);

var isPalindrome2 = function (head) {
  var traverse = function (head) {
    if (head === null) {
      return;
    }
    console.log("pre", head.val);
    traverse(head.next);
    console.log("next", head.val);
  };
  traverse(head);
};

isPalindrome2(getListFromArray([1, 2, 3, 4, 4, 3, 2, 1]));
