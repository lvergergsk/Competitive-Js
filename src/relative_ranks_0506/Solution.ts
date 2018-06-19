/**
 * @param {number[]} nums
 * @return {string[]}
 */

function findRelativeRanks(nums: number[]): string[] {
    var athletes: { id: number, score: number }[] = []
    for (let i in nums) {
        athletes.push({ id: Number(i), score: nums[i] })
    }
    athletes.sort((o1, o2) => o2.score - o1.score);

    let res: string[] = new Array(nums.length);
    if (res.length > 0) res[athletes[0].id] = "Gold Medal"
    if (res.length > 1) res[athletes[1].id] = "Silver Medal"
    if (res.length > 2) res[athletes[2].id] = "Bronze Medal"
    for (let i = 3; i < athletes.length; i++) {
        res[athletes[i].id] = String(i + 1)
    }

    return res;
};

export { findRelativeRanks }