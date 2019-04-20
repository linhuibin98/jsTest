/**
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for (let i = 0, len = nums.length; i< len; i++) {
    const index = nums.indexOf(target - nums[i]);
    if (index > -1 && index !== i) {
      return [i, index];
    }
  }
};

// 例：
const arr = [2,7,11,15]
let target = 9;

console.log(twoSum(arr, target));