//33. Search in Rotated Sorted Array

var search = function(nums, target) {
    let result = -1
    nums.map((item,index)=>{
        if(item === target){
            result = index
        }
    })
    return result
};
nums = [4,5,6,7,1,1,2], target = 0
console.log(search(nums, target))