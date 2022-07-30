var mergeKLists = function(lists) {
    lists.reduce(function(l1, l2) {
        if (l1 === null) return l2
        if (l2 === null) return l1
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
    }, null)
}
