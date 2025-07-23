//3289. The Two Sneaky Numbers of Digitville

var getSneakyNumbers = function(nums) {
   let arr = []
   let s = new Set()
   nums.map((item)=>{
       if(s.has(item)){
           arr.push(item)
       }else{
           s.add(item)
       }
   })
    return arr.sort()
};
nums = [7,1,5,4,3,4,6,0,9,5,8,2]
console.log(getSneakyNumbers(nums))