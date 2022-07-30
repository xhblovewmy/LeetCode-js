function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const getArrayFromList = (node, result = []) => {
  if (node === null) {
    return result;
  }
  return getArrayFromList(node.next, (result.push(node.val), result));
};

const getListFromArray = (arr) => {
  arr.forEach((item, index) => {
    const node = new ListNode(item);
    arr[index] = node;
    if (index > 0) {
      arr[index - 1].next = node;
    }
  });
  return arr[0];
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null;
  let listLength = 0;
  let node = head;
  while (node) {
    listLength++;
    node = node.next;
  }
  let i = (listLength - (k % listLength)) % listLength;
  console.log(i);
  let tailList = new ListNode(0);
  let list = tailList;
  while (i--) {
    let currentNode = new ListNode(head.val);
    list.next = currentNode;
    list = list.next;
    head = head.next;
  }

  let result = head;
  while (head.next) {
    head = head.next;
  }
  head.next = tailList.next;
  return result;
};

const paramList = getListFromArray([1, 2, 3, 4, 5]);

const arr = getArrayFromList(rotateRight(paramList, 10000));

console.log(arr, "arr");
