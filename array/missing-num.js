const arr = [1, 2, 3, 4, 6, 7, 9, 10];

const findMissingTwoNum = (arr) => {
    let result = [];
    const maxNum = Math.max(...arr);
    for (let i = 1; i <= maxNum; i++) {
        if (!arr.includes(i)) {
            result.push(i);
        }
    }

    return result;
};

const optimizedFind = (arr) => {
    let result = [];
    let set = new Set(arr);
    console.log(set);
    let maxNUm = Math.max(...arr);

    for (let i = 1; i <= maxNUm; i++) {
        if (!set.has(i)) {
            result.push(i)
        }
    }
    return result;
}

console.time("1");
console.log(findMissingTwoNum(arr));
console.timeEnd("1");
console.time("2");
console.log(optimizedFind(arr));
console.timeEnd("2");