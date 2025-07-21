var isNumber = function(s) {
    if(s == 'Infinity' || s == '-Infinity' || s== '+Infinity'){
        return false
    }
    return !isNaN(s); 
};

s="+120"
console.log(isNumber(s))