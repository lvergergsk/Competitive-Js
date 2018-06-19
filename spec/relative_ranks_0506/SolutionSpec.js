describe("relative_ranks_0506", function () {
    var relative_ranks_0506 = require('../../src/relative_ranks_0506/Solution')
    it('should return right answer for [5,4,3,2,1]', () => {
        expect(relative_ranks_0506.findRelativeRanks([5, 4, 3, 2, 1]))
            .toEqual(["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"])
    });
    it('should return right answer for [1]', () => {
        expect(relative_ranks_0506.findRelativeRanks([1]))
            .toEqual(["Gold Medal"])
    })
})