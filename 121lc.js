/**
 * @param {number[]} prices
 * @return {number}
 */

/*
    Explanation:
        we want to find the largest difference from when we find the lowest int
    Plan: naive way we can loop through array to findd the smallest number
    and then afterwards find the largest number that comes after that index.

    what if case: [5,4,3,2,9,1] - In this case our smallest number is the last number
    so we would never make a profit from that certain number.
    In order to find the largest profit we would have to get the second smallest int
    OR find the smallest number that has a larger int in front of it.

    Solution:
        for i in prices we take all int in i+1 => length(prices) and record maximum profit

*/

let testOutput = function(testPrices, expectedOutput){
    let output = maxProfit(testPrices);

    console.log("testing output: ", output);
    console.log("expcted output: ", expectedOutput);
}

 var maxProfit = function(prices) {
    //get first num in prices and keep that as a variable.
    let max_profit = 0;
    for (let i=0; i < prices.length; i++){
        for(let j = i+1; j < prices.length; j++){
            let profit = prices[j] - prices[i];
            if (profit > max_profit){
                max_profit = profit
            }
        }
    }
    return max_profit
};

let testPrices1 = [7,1,4,3,6,4]
let testOutput1 = 5 //buy at 1 sell at 6

let testPrices2 = [7,6,4,3,1];
let testOutput2 = 0;


testOutput(testPrices1, testOutput1);
testOutput(testPrices2, testOutput2);
