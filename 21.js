function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var res = new ListNode()
    var r = res
    var p = l1
    var q = l2
    while (p != null || q != null) {
        if (q === null || (p !== null && p.val < q.val)) {
            r.next = new ListNode(p.val)
            p = p.next
        } else {
            r.next = new ListNode(q.val)
            q = q.next
        }
        r = r.next
    }
    return res.next
}
