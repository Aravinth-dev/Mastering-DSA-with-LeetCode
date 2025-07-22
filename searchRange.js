//34. Find First and Last Position of Element in Sorted Array
var searchRange = function(nums, target) {
    let result = []
    nums.map((item,index)=>{
        if(item == target){
            if(result.length===0){
                result = [index,index];
            }else{
                    result[1] = index
            }
        }
    })
    return result.length != 0 ?  result :[-1,-1] 
};
nums = [1], target = 1
console.log(searchRange(nums, target))