let arr1 = [1, 2, 2];
let arr2 = [1, 4, 4];

const sqrtNum = (arr1, arr2) => {
    if (arr1.length != arr2.length) return false;

    let valueSet = new Set(arr2);

    for (let num of arr1) {
        const sqrt = num * num;
        if (valueSet.has(sqrt)) {
            valueSet.delete(sqrt);
        }
    }

    return ![...valueSet].length;
};

console.time("1")
console.log(sqrtNum(arr1, arr2));
console.timeEnd("1");

const sqrtArr = (arr1, arr2) => {
    if (arr1.length != arr2.length) return false;

    for (let num of arr1) {
        const sqrt = num * num;
        if (arr2.includes(sqrt)) {
            const i = arr2.indexOf(sqrt);
            arr2.splice(i, 1);
        }
    }

    return !arr2.length;
};

console.time("2");
console.log(sqrtArr(arr1, arr2));
console.timeEnd("2");
