// 349. Intersection of Two Arrays

var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    let result = []
    
    for(let value of set1){
        if(set2.has(value)){
            result.push(value)
        }
    }
    return result
};
nums1 = [1,2,2,1], nums2 = [2,2]
console.log(intersection(nums1,nums2))