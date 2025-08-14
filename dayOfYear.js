//1154. Day of the Year

var dayOfYear = function(date) {
    let[y,m,d]=date.split('-').map(Number)
    let leap = !(y%4) && y != 1900 ? [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
        : [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    return leap[m-1]+d
};
date = "2020-03-01"
dayOfYear(date)