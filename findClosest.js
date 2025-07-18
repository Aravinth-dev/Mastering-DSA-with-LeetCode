var findClosest = function(x, y, z) {
    if(Math.abs(x-z) < Math.abs(y-z)){
        return 1
    }else if(Math.abs(x-z) === Math.abs(y-z)){
        return 0
    } else{
        return 2 
    }
};
x = 1, y = 5, z = 3
console.log(findClosest(x,y,z))