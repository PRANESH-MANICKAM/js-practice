let arr = [1, 0, 2, 0, 3, 0, 4, 0];

const moveZeroToLast = (arr) => {
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[j] = arr[i];
            j++;
        }
    }

    for (let i = j; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

console.log(moveZeroToLast(arr));

