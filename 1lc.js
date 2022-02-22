/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*

trying to find the indices of two numbers within "num" which add up to "target"

create an empty object "seenNums" that will store the result of the target - element
let's forloop through all the elements in num
    if the number is in the object seenNum then we have our current number and object index to reach target
        return what we know

    else we know that since we returned nothing the result is not in our object so lets add to our object



*/


var twoSum = function(nums, target) {
    let seenNums = {}
    let result = []

    for (let i = 0; i < nums.length; i++){
        if (nums[i] in seenNums){
            result.push(seenNums[nums[i]])
            result.push(i)
            return result
        }

        let numberDiff = target - nums[i]
        seenNums[numberDiff] = i

    }
};

let testNums = [3,2,4];
let testTarget = 6

let test = twoSum(testNums, testTarget)

console.log("testing:", test);
console.log("expcted:", [1,2])
