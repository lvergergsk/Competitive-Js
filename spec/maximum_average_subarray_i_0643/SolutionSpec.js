describe('maximum_average_subarray_i_0643', function () {
    var solution = require('../../src/maximum_average_subarray_i_0643/Solution');
    it('should return correct answer for [1,12,-5,-6,50,3], 4', function () {
        expect(solution.findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75);

    });

});