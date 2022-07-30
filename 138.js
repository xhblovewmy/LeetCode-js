const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var copyRandomList = function (head) {
  if (head === null) {
    return null;
  }
  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = new ListNode(node.val, node.next, null);
    node.next = nodeNew;
  }

  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = node.next;
    nodeNew.random = node.random ? node.random.next : null;
  }

  const headNew = head.next;
  for (let node = head; node !== null; node = node.next) {
    const nodeNew = node.next;
    node.next = node.next.next;
    nodeNew.next = nodeNew.next !== null ? nodeNew.next.next : null;
  }

  return headNew;
};

const list = getListFromArray([1, 2, 3, 4]);
console.log(getArrayFromList(list));
console.log(getArrayFromList(copyRandomList(list)));
