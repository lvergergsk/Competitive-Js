/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
function shiftingLetters(s: string, shifts: number[]): string {
    for (let i: number = shifts.length - 2; i >= 0; i--)
        shifts[i] += shifts[i + 1]

    let resArr: string[] = new Array(s.length)
    for (let i: number = 0; i < s.length; i++) {
        let v = s.charCodeAt(i)
        if (i < shifts.length) v = ((v - 97) + shifts[i]) % 26 + 97
        resArr[i]=String.fromCharCode(v)
    }

    return resArr.join("")
};

export {shiftingLetters}