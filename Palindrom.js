
const Palindrom = (n) => {
    isPalindrom = n
    let reverse = 0
    
    while(n>0){
        digit = n%10
        reverse = reverse*10+digit
        n = Math.floor(n/10)
    }
    return reverse === isPalindrom
}

n = 121
console.log(Palindrom(n))