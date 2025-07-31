//74. Search a 2D Matrix

var searchMatrix = function(matrix, target) {
    for(i=0;i<matrix.length;i++){
        for(j=0;j<matrix[i].length;j++){
            if(matrix[i][j] == target){
                return true
            }
        }
    }
    return false
};
matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
console.log(searchMatrix(matrix, target))