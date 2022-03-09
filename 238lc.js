/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Constraints
    2 <= nums.length <= 105

    -30 <= nums[i] <= 30

    The product of any prefix or suffix of nums is guaranteed
    to fit in a 32-bit integer.

How to methodology

    we want to loop through all elements in num once? No

    What we want to do is multiply from the left to the right multiplying prev nums
    AND multiply from the right to the left multiplying prev nums

    This results in 2 arrays that have the multiplications of all nums except itself



*/

 var productExceptSelf = function(nums) {
    let leftArr = [];

    let leftMultiplication = 1;

    for (let i = 0; i < nums.length; i++){
        leftArr[i] = leftMultiplication;
        leftMultiplication *= nums[i];
    }

    let rightArr = [];
    let rightMultiplcation = 1;

    for (let i = nums.length-1; i >= 0; i--){
        rightArr[i] = rightMultiplcation;
        rightMultiplcation *= nums[i];
        rightArr[i] *= leftArr[i]; //this is the steps multiplying the products of each left and right array saving another iteration step and doing it here.
    }

    return rightArr
};


let numTest = [1,2,3,4]
let test = productExceptSelf(numTest)
console.log(test);
console.log(numTest)
console.log(productExceptSelf(numTest))
