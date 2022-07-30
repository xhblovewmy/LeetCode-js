/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var sortedNums = nums.sort((a, b) => a - b)
  var result = null
  var minDistance = null
  for (var i = 1; i < sortedNums.length - 1; i++) {
    var current = sortedNums[i]
    var left = 0
    var right = sortedNums.length - 1
    do {
        var sum = current + sortedNums[left] + sortedNums[right]
        var distance = sum - target
        if (distance > 0) {
            if (minDistance === null || Math.abs(distance) < Math.abs(minDistance)) {
                minDistance = distance
                result = sum
            }
            right--
        } else if (distance < 0) {
            if (minDistance === null || Math.abs(distance) < Math.abs(minDistance)) {
                minDistance = distance
                result = sum
            }
            left++
        } else {
            return target
        }
    } while (left < i && i < right)
  }
  return result
}

const arrs = [
    [[-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6], 1],
    [[0, 0, 0, 0], 0],
    [[-1, 0, 1, 2, -1, -4], 1],
    [[-1, -1, -1, 0, 0, 0, 1, 1, 1], 20],
    [[-1, 2, 1, -4], 1]
]

arrs.forEach(arr => {
    console.log(threeSumClosest(arr[0], arr[1]))
})
