/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
    Given an integer array nums, return true if any value
    appears at least twice in the array, and return false if
    every element is distinct.

    Explanation:
    This can be done most likely using Sets -
    The Set object lets you store unique values
    of any type.

    So since we're working with integers we should be able
    to do this in O(n) time

    We can also just uset an object with manual testing over Sets
    Since that is what Sets are.



*/
 var containsDuplicate = function(nums) {
    const numsSet = new Set(nums);
    return numsSet.size != nums.length;



};

var containsDuplicate2 = function(nums) {
    const seenNumbers = {}

    for (let i = 0 ; i < nums.length; i++){
        //if int in object exists then return false
        let currentNum = nums[i]
        if (seenNumbers[currentNum]){
            //console.log('test')
            return true
        }
        else{
            seenNumbers[currentNum];
        }
    }
    return false;
};
