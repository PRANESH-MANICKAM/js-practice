let arr = [1, 3, 4, 2, 2];

const removeDuplicate = (arr) => {
    let result = [];
    let duplicates = [];

    for (let num of arr) {
        !result.includes(num) ? result.push(num) : duplicates.push(num);
    }

    return { result, duplicates };
};

console.time("1");
console.log(removeDuplicate(arr));
console.timeEnd("1");

const removeDupOptimize = (arr) => {
    const UniqueArr = new Set();

    for (let num of arr) {
        if (!UniqueArr.has(num)) {
            UniqueArr.add(num)
        }
    }

    return [...UniqueArr];
};

console.time("2");
console.log(removeDupOptimize([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]));
console.timeEnd("2");
