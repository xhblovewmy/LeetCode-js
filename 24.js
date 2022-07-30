function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var res = new ListNode()
    var p = res
    var q = head
    while (q !== null) {
        if (q.next === null) {
            p.next = q
            q = q.next
        } else {
            p.next = new ListNode(q.next.val)
            p.next.next = new ListNode(q.val)
            p = p.next.next
            q = q.next.next
        }
    }
    return res.next
}

const arr = [1, 2, 3, 4, 5]

arr.forEach((item, index) => {
    const node = new ListNode(item)
    arr[index] = node
    if (index > 0) {
        arr[index - 1].next = node
    }
})

const logListNode = node => {
    let current = node
    while (current !== null) {
        console.log(current.val)
        current = current.next
    }
}

logListNode(swapPairs(arr[0]))
