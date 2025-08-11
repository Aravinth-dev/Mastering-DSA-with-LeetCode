//3110. Score of a String

var scoreOfString = function(s) {
    let total = 0
    for(i=1;i<s.length;i++){
        total += Math.abs((s[i].charCodeAt(0) - s[i-1].charCodeAt(0)))
    }
    return total
};

s = "hello"
console.log(scoreOfString(s))