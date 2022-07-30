const {
  getArrayFromList,
  getListFromArray,
  ListNode,
} = require("./utils/list");

/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  var current = head;
  var i = 0;
  while (current) {
    i++;
    current = current.next;
  }
  this.length = i;
  this.node = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  var num = Math.floor(Math.random() * this.length);
  var current = this.node;
  for (let i = 1; i <= num; i++) {
    current = current.next;
  }
  return current.val;
};

var obj = new Solution(getListFromArray([1, 3, 5, 6, 7, 8]));
const map = new Map();
for (let i = 0; i < 100000; i++) {
  const num = obj.getRandom();
  map.set(num, (map.get(num) ?? 0) + 1);
}

for (let key of map.keys()) {
  console.log(key, map.get(key));
}
