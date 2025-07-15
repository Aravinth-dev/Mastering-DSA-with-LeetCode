const secondLargest = (n) => {
    let  temp = 0
    for (i=0;i<=n.length-1;i++){
        for(j=i+1;j<=n.length-1;j++){
            if(n[i] > n[j]){
                temp = n[j]
                n[j] = n[i]
                n[i] = temp
            }
        }
    }
    n = Array.from (new Set(n))
    return n[n.length-2]
    
}

let n = [90,23,56,86,86]
console.log(secondLargest(n))