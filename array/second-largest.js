let arr = [100, 20, 112, 22];

const secondLargest = (arr) => {
    let largest = -Infinity;
    let secondLargestValue = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargestValue = largest;
            largest = num;
        } else if (num > secondLargestValue && num != largest) {
            secondLargestValue = num;
        }
    }
    return secondLargestValue;
};

console.log(secondLargest(arr));