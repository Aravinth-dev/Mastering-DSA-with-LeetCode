//136. Single Number


var singleNumber = function(nums) {
    let myObj = {}
    nums.map((item) => {
        if(myObj.hasOwnProperty(item)){
            myObj[item] +=1
        }else{
            myObj[item] = 1
        }
    })

    for (const key in myObj) {
        if (myObj[key] === 1) {
            return Number(key);  
        }
    }
};
nums = [4,1,2,1,2]
console.log(singleNumber(nums))