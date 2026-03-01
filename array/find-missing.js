let input = [1,2,4,5];
let n = 5;

const findMissingNum = (input, n) => {
    let expectedSum = 0;
    let actualSum = 0;
    for(let i = 0; i <= n; i++) {
        expectedSum += i
    }
    for(let num of input) {
        actualSum += num
    };
    return expectedSum - actualSum;
};
console.log(findMissingNum(input, n));