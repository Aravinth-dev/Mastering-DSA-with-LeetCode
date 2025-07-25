//4. Median of Two Sorted Arrays


var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2)
    merged.sort((a,b)=>a-b)
    
    const length = merged.length
    const mid = Math.floor(length / 2)
    
    if(length%2 === 0){
        return (merged[mid-1]+merged[mid])/2
    }else{
        return (merged[mid])
    }
};