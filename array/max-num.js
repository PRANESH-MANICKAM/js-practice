let arr = [1, 6, -33, 9, 4, 8, 2];

const maxNum = (arr) => {
    if (!arr.length) return -1;
    if (arr.length == 1) return arr[0];
    let max = arr[0];
    for (let num of arr) {
        if (max < num) {
            max = num
        }
    }
    return max
};

console.log(maxNum(arr));