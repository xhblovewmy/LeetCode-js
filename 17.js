/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations=function(digits) {
    if(digits==='') return []
    var characters=[[''],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']]

    var result=digits.split('').reduce((arr,digit) => {
        var res=[]
        for(var i=0;i<arr.length;i++) {
            for(var j=0;j<characters[digit-1].length;j++) {
                res.push(arr[i]+characters[digit-1][j])
            }
        }
        return res
    },[''])
    return result
}

console.log(letterCombinations('1231'))
console.log(letterCombinations(''))
