let input = [4, 0, 5, 0, 0, 3, 0, 1];

//[4, 5, 3, 1, 0, 0, 0, 0]


const moveZeroToLast = (arr) => {
    let j = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != 0){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    };
    return arr;
};

console.log(moveZeroToLast(input));