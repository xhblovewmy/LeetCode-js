/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = []
    function f (str, l, r) {
        if (l === n && r === n) {
            return res.push(str)
        }
        if (l < n) {
            f (str + '(', l + 1, r)
        }
        if (l > r) {
            f (str + ')', l, r + 1)
        }
    }
    f ('', 0, 0)
    return res
}

console.log(generateParenthesis(3))