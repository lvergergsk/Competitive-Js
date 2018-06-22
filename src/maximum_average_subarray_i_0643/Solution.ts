/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums: number[], k: number): number {
    let sum: number = 0

    for (let i = 0; i < k; i++)
        sum += nums[i]

    let maxSum: number = sum
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]
        maxSum = maxSum > sum ? maxSum : sum
    }

    return maxSum/k
};

export {findMaxAverage}