/**
 * @param {number} num
 * @return {string}
 */
// 3999 = 3 * 1000 + 999
var arr1 = [1000, 500, 100, 50, 10, 5, 1]
var arr2 = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
var copyChar = function(char, num) {
    var res = ''
    for (var i = 0; i < num; i++) {
        res += char
    }
    return res
}
var intToRoman = function(num) {
    if (num === 0) return ''
    var i = 0
    while(num < arr1[i]) i += 2
    var m = num % arr1[i]
    var c = (num - m) / arr1[i]
    if  (i === 0) {
        return copyChar('M', c) + intToRoman(m)
    }
    if (c === 9) return arr2[i] + arr2[i - 2] + intToRoman(m)
    var curResult = ''
    if (c >= 5) {
        curResult = arr2[i - 1]
        c -= 5
    }
    curResult += c === 4 && i !== 0 ? arr2[i] + arr2[i - 1] : copyChar(arr2[i], c)
    return curResult + intToRoman(m)
}


for (var i = 1; i < 100; i++) {
    console.log(i, intToRoman(i))
}