var isSubsequence = function(s, t) {
    let i=0,j=0
    while(i<s.length && j<t.length){
        if(s[i] == t[j]){
            i++
        }
        j++
    }
    return i == s.length
};
s = "bb", t = "ahbgdc"
console.log(isSubsequence(s,t))   