//2239. Find Closest Number to Zero

var findClosestNumber = function(nums) {
    nums.sort((a,b) => a-b)
   let step = Infinity
    let min = 0
    let closeZero = 0
    for(i=0;i<=nums.length-1;i++){
        if(step >= Math.abs(0-nums[i])){
            step = Math.abs(0-nums[i])
            closeZero = nums[i]
        }
    }
    return closeZero
};
nums = [-4,1,-1,4,8]
console.log(findClosestNumber(nums))