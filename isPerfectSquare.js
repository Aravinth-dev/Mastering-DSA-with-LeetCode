//367. Valid Perfect Square

var isPerfectSquare = function(num) {
    if (num < 0) return false; 
    let guess = num / 2;
    for (let i = 0; i < 20; i++) {
        guess = (guess + num / guess) / 2;
    }
    return Number.isInteger(guess);
};
num = 16
console.log(isPerfectSquare(num)); 