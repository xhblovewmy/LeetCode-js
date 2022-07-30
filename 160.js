const { getListFromArray, getArrayFromList } = require("./utils/list");

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let me = headA;
  let she = headB;

  while (she !== me) {
    me = me ? me.next : headB;
    she = she ? she.next : headA;
  }

  return me;
};

const temp = getListFromArray([6, 7, 8]);

let tempA = getListFromArray([1, 2, 3]);
let tempB = getListFromArray([4, 5]);
const headA = tempA;
const headB = tempB;

while (tempA.next) tempA = tempA.next;
while (tempB.next) tempB = tempB.next;

tempA.next = temp;
tempB.next = temp;

const result = getIntersectionNode(headA, headB);

console.log(getArrayFromList(result));
