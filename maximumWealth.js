//1672. Richest Customer Wealth


var maximumWealth = function(accounts) {
    let max=0
    for(i=0;i<accounts.length;i++){
        var add = 0 
        for(j=0;j<accounts[i].length;j++){
        add += accounts[i][j]
        }
        max = Math.max(max,add)
    }
    return max
};
accounts = [[1,5],[7,3],[3,5]]
console.log(maximumWealth(accounts))