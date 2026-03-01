let str = "Hi Iam PraneshManickam Iam a UI Developer";

const largestWord = (str) => {
    if (!str) return undefined;
    let splitStr = str.split(" ");
    let largest = splitStr[0];

    for (let word of splitStr) {
        if (largest.length < word.length) {
            largest = word;
        }
    };

    return largest;
};

console.log(largestWord(str));