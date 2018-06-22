"use strict";
exports.__esModule = true;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
    var sum = 0;
    for (var i = 0; i < k; i++)
        sum += nums[i];
    var maxSum = sum;
    for (var i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxSum = maxSum > sum ? maxSum : sum;
    }
    return maxSum / k;
}
exports.findMaxAverage = findMaxAverage;
;
