"use strict";
/**
 * @param {number[]} nums
 * @return {string[]}
 */
exports.__esModule = true;
function findRelativeRanks(nums) {
    var athletes = [];
    for (var i in nums) {
        athletes.push({ id: Number(i), score: nums[i] });
    }
    athletes.sort(function (o1, o2) { return o2.score - o1.score; });
    var res = new Array(nums.length);
    if (res.length > 0)
        res[athletes[0].id] = "Gold Medal";
    if (res.length > 1)
        res[athletes[1].id] = "Silver Medal";
    if (res.length > 2)
        res[athletes[2].id] = "Bronze Medal";
    for (var i = 3; i < athletes.length; i++) {
        res[athletes[i].id] = String(i + 1);
    }
    return res;
}
exports.findRelativeRanks = findRelativeRanks;
;
