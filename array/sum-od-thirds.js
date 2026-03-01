let arr = Array.from({ length: 30 }, (_, i) => i);

const sumOfThird = (arr) => {
    if (arr.length <= 3) return 0;

    let sum = 0;

    for (let i = 2; i < arr.length; i = i + 3) {
        sum += arr[i];
    };

    return sum;
};

console.log(sumOfThird(arr));