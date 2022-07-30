var isValid = function(s) {
    var list = []
    var map = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    for (var i = 0; i < s.length; i++) {
        var c = s[i]
        var count = list.length
        if (count > 0 && map[list[count - 1]] === c) {
            list.pop()
        } else {
            list.push(c)
        }
    }
    return list.length === 0
}

const arr = ['(({}))', '()[]{}', '(]', '([)]']
arr.forEach(item => {
    console.log(isValid(item))
})
