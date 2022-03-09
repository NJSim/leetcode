/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Given an integer array nums, find a contiguous
non-empty subarray within the array that has the largest product,
and return the product.

The hard part about this solution is that we have to take into account
situations where the contiguous product can have 2 negative numbers
in the contiguous subarray.

We do this by multiplying each number interatively starting at the second index
and storing first index into our "max" constants.


*/

 var maxProduct = function(nums) {
    let positiveMax = nums[0];
    let negativeMax = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++){
        let curMax = Math.max(nums[i] * positiveMax, nums[i], nums[i] * negativeMax);
        let curMin = Math.min(nums[i] * negativeMax, nums[i], nums[i] * positiveMax);

        positiveMax = curMax;
        negativeMax = curMin;

        result = Math.max(curMax, result)
    }

    return result;
};

let testNum = [2,3,-2,4];

console.log("testing maxproduct", maxProduct(testNum));
console.log("expected output:", 6)
