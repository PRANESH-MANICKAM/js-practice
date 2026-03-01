let arr = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];

const findLargest = (arr) => {
    let largest = 0;
    const find = (item) => {
        for (let num of item) {
            if (num > largest) {
                largest = num
            }
        }
    };

    for (let val of arr) {
        if (Array.isArray(val)) {
            find(val)
        } else {
            if (val > largest) {
                largest = val;
            }
        }
    }

    return largest;
};

console.log(findLargest(arr));