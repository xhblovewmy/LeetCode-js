function ListNode(val) {
     this.val = val;
     this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (n === 0) return head
    var first = new ListNode()
    first.next = head
    var left = first, right = head
    var valid = true
    for (i = 0; i < n; i++) {
        if (right === null) {
            valid = false
            break
        }
        right = right.next
    }
    if (!valid) return first.next
    while (right !== null) {
        left = left.next
        right = right.next
    }
    left.next = left.next.next
    return first.next
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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
logListNode(removeNthFromEnd(arr[0], 111))
