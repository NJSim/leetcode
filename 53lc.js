/**
 * @param {number[]} nums
 * @return {number}
 */

/*

Find the largest contiguous subarray (sum) and return the sum.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.


How to:

we set the current max to be the first element in nums
then we set a basis for our current positive value which is current

we iterate through the forloop and



*/

 var maxSubArray = function(nums) {

    let max = nums[0];
    let current = Math.max(max, 0);

    for (let i = 1; i < nums.length; i++){
        current += nums[i];
        max = Math.max(max, current);
        current = Math.max(current, 0)
    }
    return max;

};

let numTest = [-2,1,-3,4,-1,2,1,-5,4]
let test = maxSubArray(numTest)
console.log(test);
console.log(numTest)
console.log(maxSubArray(numTest))
