var addDigits = function(num) {
    if (num === 0) return 0;
    var sum = 0
    while(num>0){
        sum += num%10
        num = Math.floor(num/10)
    }

    return sum = sum >= 10 ? addDigits(sum) : sum
};
num = 12
console.log(addDigits(num))