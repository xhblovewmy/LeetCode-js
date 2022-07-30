var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''
    if (strs.length === 1) return strs[0]
    var res = strs[0]
    for (var i = 1; i < strs.length; i++) {
        if (res === '') return res
        var c = Math.min(res.length, strs[i].length)
        var cs = ''
        for (var j = 0; j < c; j++) {
            if (res[j] === strs[i][j]) {
                cs += res[j]
            } else {
                break
            }
        }
        res = cs
    }
    return res
}

console.log('line 1 => ', longestCommonPrefix(["flower", "flow", "flight"]))
console.log('line 2 => ', longestCommonPrefix(["dog", "racecar", "car"]))
