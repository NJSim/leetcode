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

//more efficient way
//Explanation of efficient solution
/*

We are always holding the maxprofit which can be made and changing
it depending on where we are in the iteration.

Start of the forloop we check if the first int is less than
infinity if so we want that number to be our lowest number

In the next iteration of our array, if the int is lower then we
have a new lowest number to keep track of

OR

If the next iteration of our array is a greater int then we want
to see if the we have a greater profit. We check this by
seeing if 'The current number subtracted by our current minimum price'
has a LARGER profit than what we stored in maxProfit.
If true then max profit is 'The current number subtracted by our current minimum price'

*/
let maxProfit2 = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++){
        if (prices[i] < minPrice){
            minPrice = prices[i];
        }
        else if ((prices[i] - minPrice) > maxProfit){
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit

}

let testPrices1 = [7,1,4,3,6,4]
let testOutput1 = 5 //buy at 1 sell at 6

let testPrices2 = [7,6,4,3,1];
let testOutput2 = 0;


testOutput(testPrices1, testOutput1);
testOutput(testPrices2, testOutput2);
