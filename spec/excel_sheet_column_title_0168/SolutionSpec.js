describe('excel_sheet_column_title_0168', () => {
    var solution = require('../../src/excel_sheet_column_title_0168/Solution')
    it('should return correct answer for 1', () => {
        expect(solution.convertToTitle(1))
            .toEqual("A")
    });
    it('should return correct answer for 25', () => {
        expect(solution.convertToTitle(25))
            .toEqual("Y")
    });
    it('should return correct answer for 26', () => {
        expect(solution.convertToTitle(26))
            .toEqual("Z")
    });
    it('should return correct answer for 28', () => {
        expect(solution.convertToTitle(28))
            .toEqual("AB")
    })
});