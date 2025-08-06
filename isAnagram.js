
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let counts={}
    for(i=0;i<s.length;i++){
        counts[s[i]] = (counts[s[i]] || 0) + 1
    }
    for(i=0;i<t.length;i++){
        if(!counts[t[i]])return false
        counts[t[i]]--;
    }
    return true
};