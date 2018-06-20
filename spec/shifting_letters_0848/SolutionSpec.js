describe('shifting_letters_0848', () => {
    var solution=require('../../src/shifting_letters_0848/Solution');
    it('should return correct answer for ("abc",[3,5,9])', () => {
        expect(solution.shiftingLetters("abc",[3,5,9])).toEqual("rpl");
    });
});