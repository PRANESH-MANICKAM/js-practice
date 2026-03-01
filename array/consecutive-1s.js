let arr = [1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1];

const maxConsecutive = (arr) => {
    let maxCount = 0;
    let currentConsCount = 0;

    for (let num of arr) {
        if (num == 1) {
            currentConsCount += 1;
            maxCount = Math.max(currentConsCount, maxCount);
        } else {
            currentConsCount = 0;
        }
    };

    return maxCount;
};

console.log(maxConsecutive(arr));