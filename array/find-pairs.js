let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 10;

const findPairs = (arr, target) => {
    let pairs = [];
    let seen = new Set();

    for (let num of arr) {
        const component = target - num;
        if (seen.has(component)) {
            pairs.push([component, num])
        }
        seen.add(num);
    }
    return pairs;
}

console.log(findPairs(arr, target));