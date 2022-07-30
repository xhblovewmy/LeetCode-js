function ListNode(val, next, random) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.random = random;
}

const getArrayFromList = (node, result = []) => {
  if (node === null) {
    return result;
  }
  return getArrayFromList(
    node.next,
    (result.push(
      JSON.stringify({
        val: node.val,
      })
    ),
    result)
  );
};

const getListFromArray = (arr) => {
  arr.forEach((item, index) => {
    const node = new ListNode(item);
    arr[index] = node;
    if (index > 0) {
      arr[index - 1].next = node;
      arr[index].random = Math.random() > 0.3 ? arr[index - 1] : null;
    }
  });
  return arr[0];
};

module.exports = {
  getArrayFromList,
  getListFromArray,
  ListNode,
};
