/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var res = new ListNode()
    var p = head
    var stack = []
    var q = res
    while (p != null) {
        stack.push(p.val)
        if (stack.length === k) {
            for (var i = 0; i < k; i++) {
                q.next = new ListNode(stack.pop())
                q = q.next
            }
        }
        p = p.next
    }
    if (stack.length) {
        var length = stack.length
        for (var i = 0; i < length; i++) {
            q.next = new ListNode(stack[i])
            q = q.next
        }
    }
    return res.next
}