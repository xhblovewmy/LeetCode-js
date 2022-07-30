/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var i = 0
    var j = height.length - 1
    var result = 0
    while (i < j) {
        var cur = (j - i) * Math.min(height[i], height[j])
        if (cur > result) result = cur
        height[i] < height[j] ? i++ : j--
    }
    return result
}

// ------------------------------------- //
var dataSet = [
    [[1,8,6,2,5,4,8,3,7], 49]
]

dataSet.forEach(([testData, result]) => {
    var resultStr = maxArea(testData) === result ? '测试通过' : '测试失败'
    console.log(`${testData} => ${resultStr}`)
})
