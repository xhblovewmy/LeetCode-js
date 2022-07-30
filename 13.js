var romanToInt = function(s) {
  var map = {
    M: 1000,
    CM: 800,
    D: 500,
    CD: 300,
    C: 100,
    XC: 80,
    L: 50,
    XL: 30,
    X: 10,
    IX: 8,
    V: 5,
    IV: 3,
    I: 1
  }

  var sum = 0
  for (var i = 0; i < s.length; i++) {
    sum += i > 0 && map[s[i - 1] + s[i]] ? map[s[i - 1] + s[i]] : map[s[i]]
  }
  return sum
};

['III', 'IV', 'LVIII', 'MCMXCIV'].forEach(item => console.log(romanToInt(item)))