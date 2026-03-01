let arr = [1, 2, 3, 4, 5, 6, 7]
let k = 3

//[5, 6, 7, 1, 2, 3, 4]

const rotateArr = (arr, k) => {
    let n = arr.length;
    k = k % n;
    let i = 0;
    while (i < k) {
        const popNum = arr.pop();
        arr.unshift(popNum);
        i++;
    }
    return arr;
};

console.log(rotateArr(arr, k));

const rotateArray = (arr, k) => {
    let n = arr.length;
    k = k % n;
    let result = new Array(n);
    for(let i = 0; i < n; i++) {
        const j = (i + k) % n;
        result[j] = arr[i];
    }
    return result;
};

console.log(rotateArray(arr, k))