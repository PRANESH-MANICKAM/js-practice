let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

// 7;

const maxSumArray = (arr) => {
    let maxSum = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
};

console.time("1");
console.log(maxSumArray(arr));
console.timeEnd("1");

const maxSum = (arr) => {
    let currentSum = arr[0];
    let maxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
        } else {
            currentSum = currentSum + arr[i]
        }

        if (currentSum > maxSum) {
            maxSum = currentSum
        }
    }

    return maxSum;
};

console.time("2");
console.log(maxSum(arr));
console.timeEnd("2");