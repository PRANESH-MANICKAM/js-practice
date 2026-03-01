let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];


const intersectionArr = (arr1, arr2) => {
    let result = [];
    for (let num of arr1) {
        if (arr2.includes(num)) {
            result.push(num)
        }
    }
    return result;
};

console.time("1");
console.log(intersectionArr(arr1, arr2));
console.timeEnd("1");

const intersection = (arr1, arr2) => {
    let result = [];
    let setArr = new Set(arr2);
    for (let num of arr1) {
        if (setArr.has(num)) {
            result.push(num)
        }
    }
    return result;
};
console.time("2");
console.log(intersection(arr1, arr2));
console.timeEnd("2");