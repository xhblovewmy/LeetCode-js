/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack === '' && needle === '') return 0
    for (var i = 0; i < haystack.length; i++) {
        var isValid = true
        for (var j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                isValid = false
                break
            }
        }
        if (isValid) return i
    }
    return -1
}

console.log(strStr('', ''))