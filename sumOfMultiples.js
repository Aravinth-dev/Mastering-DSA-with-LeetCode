var sumOfMultiples = function(n) {
        let sum = 0
    for(i=3;i<=n;i++){
        if(i%3 ==0 || i%5 == 0 || i%7 == 0){
            sum += i
        }
    }
        return sum
};

sum = 10
console.log(sumOfMultiples(sum));