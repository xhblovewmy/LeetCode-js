/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) return 0
    if (divisor === 1) return dividend
    if (divisor === -1) return dividend === -Math.pow(2, 31) ? Math.pow(2, 31) - 1 : -dividend
    if (dividend < 0) return -divide(-dividend, divisor)
    if (divisor < 0) return -divide(dividend, -divisor)
    var count = 0
    while (dividend >= divisor) {
        dividend -= divisor
        count++
    }
    return count
}

console.log(divide(120, 11))
