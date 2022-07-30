/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var sortedNums = nums.sort((a, b) => a - b)
    var resultArr = []
    var resultIndex = [-1, -1, -1]
    for (var i = 1; i < sortedNums.length - 1; i++) {
        var left = resultIndex[0] > 0 && sortedNums[resultIndex[0]] === sortedNums[i] ? resultIndex[1] : 0
        var right = resultIndex[0] > 0 && sortedNums[resultIndex[0]] === sortedNums[i] ? resultIndex[2] : sortedNums.length - 1
        while (left < i && right > i) {
            var result = sortedNums[left] + sortedNums[right] + sortedNums[i]
            if (result > 0) {
                right--
            } else if (result < 0) {
                left++
            } else {
                resultArr.push([sortedNums[left],  sortedNums[i], sortedNums[right]])
                do {
                    left++
                } while (sortedNums[left] === sortedNums[left - 1])
                do {
                    right--
                } while (sortedNums[right] === sortedNums[right + 1])
                resultIndex = [i, left, right]
            }
        }
    }
    return resultArr
};

const arrs = [
    [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
    [0, 0, 0, 0],
    [-1, 0, 1, 2, -1, -4],
    [-1, -1, -1, 0, 0, 0, 1, 1, 1]
]

arrs.forEach(arr => {
    console.log(threeSum(arr))
})
