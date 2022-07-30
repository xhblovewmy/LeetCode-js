/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var res = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[res++] = nums[i]
        }
    }
    return res
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(removeElement(arr, 4), arr)