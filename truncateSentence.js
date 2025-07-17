var truncateSentence = function(s, k) {
    let split =s.split(" ")
    let str=''
    for(i=0;i<k;i++){
        if(i==k-1){
         str += split[i]
        }
        else{
            str+=split[i] + ' '
        }
    }
    return str
};

s = "What is the solution to this problem" 
k=4
console.log(truncateSentence(s,k))