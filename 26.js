/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var newNums = nums.filter(function(value, index, array) {
        return array.indexOf(value) === index
    })
    for (var i = 0; i < newNums.length; i++) {
        nums[i] = newNums[i]
    }
    return newNums.length
 }

const arr = [0, 0, 1, 2, 2, 3]
console.log(removeDuplicates(arr), arr)
