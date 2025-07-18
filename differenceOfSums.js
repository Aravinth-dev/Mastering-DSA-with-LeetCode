var differenceOfSums = function(n, m) {
    let diff = 0
    for(i=1;i<=n;i++){
        if(i%m != 0){
            
            diff +=i 
        }else{
           
            diff -= i
        }
    }
    return diff
};
n = 5, m = 1
console.log(differenceOfSums(n,m))