"use strict";
exports.__esModule = true;
/**
 * @param {number} n
 * @return {string}
 */
function convertToTitle(n) {
    var resArray = [];
    while (n > 0) {
        n--;
        var r = n % 26;
        n = (n - r) / 26;
        resArray.unshift(String.fromCharCode(65 + r));
    }
    var res = resArray.join("");
    return res;
}
exports.convertToTitle = convertToTitle;
;
