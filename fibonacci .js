var fib = function(n) {
    if(n <= 1) return n
    let a=0,b=1,temp
    for(i=2;i<=n;i++){
        temp=a+b
        a=b
        b = temp
    }
    return b
};
n=4
console.log(fib(n))