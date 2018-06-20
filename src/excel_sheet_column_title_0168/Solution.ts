/**
 * @param {number} n
 * @return {string}
 */
function convertToTitle(n: number): string {
    let resArray: string[] = []
    while (n > 0) {
        n--
        let r: number = n % 26
        n = (n - r) / 26
        resArray.unshift(String.fromCharCode(65 + r))
    }
    let res: string = resArray.join("")
    return res;
};

export { convertToTitle }