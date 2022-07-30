const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

var reorderList = function (head) {
  if (!head) return null;
  if (!head.next) return head;
  var slow = new ListNode(0, head);
  var fast = new ListNode(0, head);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  var leftNode = head;
  var rightNode = slow.next;
  slow.next = null;

  const rightPrefixNode = new ListNode(0);
  while (rightNode) {
    const nextNode = rightNode.next;
    rightNode.next = rightPrefixNode.next;
    rightPrefixNode.next = rightNode;
    rightNode = nextNode;
  }

  var reverseRightNode = rightPrefixNode.next;
  var currentNode = leftNode;

  while (currentNode && reverseRightNode) {
    var nextLeftNode = currentNode.next;
    var nextRightNode = reverseRightNode.next;
    currentNode.next = reverseRightNode;
    reverseRightNode.next = nextLeftNode;
    currentNode = nextLeftNode;
    reverseRightNode = nextRightNode;
  }

  return leftNode;
};

const head = getListFromArray([1, 2, 3]);
const result = getArrayFromList(reorderList(head));

console.log(result);
