
var makeFancyString = function(s) {
    let count=1;
    let str=s[0]
    for(i=1;i<=s.length-1;i++){
        if(s[i] == s[i-1]){
            count++
        }else{
            count =1
        }
        
        if(count < 3){
            str += s[i]
        }
    }
    return str
    
};
s = "aaabaaaa"
makeFancyString(s)