"use strict";
exports.__esModule = true;
/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
function shiftingLetters(s, shifts) {
    for (var i = shifts.length - 2; i >= 0; i--)
        shifts[i] += shifts[i + 1];
    var resArr = new Array(s.length);
    for (var i = 0; i < s.length; i++) {
        var v = s.charCodeAt(i);
        if (i < shifts.length)
            v = ((v - 97) + shifts[i]) % 26 + 97;
        resArr[i] = String.fromCharCode(v);
    }
    return resArr.join("");
}
exports.shiftingLetters = shiftingLetters;
;
