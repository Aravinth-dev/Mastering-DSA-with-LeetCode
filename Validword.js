const ValidWord =(word) =>{
    return (word.length >= 3 && /^[A-za-z0-9]+$/.test(word) && /[aeiou]/i.test(word) && /[b-df-hj-np-tv-z]/i.test(word))
}
word = "234Adas"
console.log(ValidWord(word))