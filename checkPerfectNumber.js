//507. Perfect Number
var checkPerfectNumber = function(num) {
   let sum = 0
   for(i=1;i<=num/2;i++){
       if(num%i === 0){
           sum+=i
       }
   }
   return sum === num
};
num = 28
console.log(checkPerfectNumber(num))