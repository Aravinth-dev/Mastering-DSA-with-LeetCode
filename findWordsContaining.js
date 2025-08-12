//2942. Find Words Containing Character

var findWordsContaining = function(words, x) {
    let arr = []
    for(i=0;i<words.length;i++){
        if(words[i].includes(x)){
            arr.push(i)
        }
    }
    return arr
};
words = ["leet","code"], x = "e"
console.log(findWordsContaining(words, x))