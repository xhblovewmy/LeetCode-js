/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function(nums, target) {
    var sortedNums = nums.sort((a, b) => a - b)
    var resultArr = []
    for (var i = 1; i < sortedNums.length - 2; i++) {
        if (i > 1 && sortedNums[i] === sortedNums[i - 2]) continue
        for (var j = i + 1; j < sortedNums.length - 1; j++) {
            if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) continue
            var left = i > 1 && sortedNums[i] === sortedNums[i-1] ? i - 1 : 0
            var right = sortedNums.length - 1
            while (left < i && right > j) {
                var result = sortedNums[left] + sortedNums[right] + sortedNums[i] + sortedNums[j]
                if (result > target) {
                    right--
                } else if (result < target) {
                    left++
                } else {
                    resultArr.push([sortedNums[left],  sortedNums[i], sortedNums[j], sortedNums[right]])
                    do {
                        left++
                    } while (sortedNums[left] === sortedNums[left - 1])
                    do {
                        right--
                    } while (sortedNums[right] === sortedNums[right + 1])
                }
            }
        }
    }
    return resultArr
};

const arrs = [
    [[-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6], 1],
    [[0, 0, 0, 0], 0],
    [[-1, 0, 1, 2, -1, -4], 2],
    [[-1, -1, -1, 0, 0, 0, 1, 1, 1], -2]
]

arrs.forEach(arr => {
    console.log(fourSum(arr[0], arr[1]))
})
