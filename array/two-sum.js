let input = [2, 7, 11, 15];
let target = 9;

// [0,1]

const findTwoSum = (input, target) => {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[i] + input[j] == target) {
                if (!result.includes(i)) result.push(i);
                if (!result.includes(j)) result.push(j);
            }
        }
    }
    return result;
}

console.log(findTwoSum(input, target));