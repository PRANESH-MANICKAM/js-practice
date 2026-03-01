let arr = [1, 2, 3, 4, 5, 6, 7, 8, -8, 19, 9, 10];

const evenNumbers = (arr) => {
    const evenNumber = new Set();

    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumber.add(num);
        }
    }

    return [...evenNumber];
};

console.time("1")
console.log(evenNumbers(arr));
console.timeEnd("1");

const evenOptimized = (arr) => {
    const evenNumber = [];

    for(let num of arr) {
        if(num % 2 === 0) {
            evenNumber.push(num);
        }
    }

    return evenNumber;
};

console.time("2");
console.log(evenOptimized(arr));
console.timeEnd("2");