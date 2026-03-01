const arr = [2,3,4,5,6,8];

const target = 9;

const hashFind = (arr, target) => {
    const map = new Map();

    for(let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];
        if(map.has(diff)) {
            return [map.get(diff), i]
        }
        map.set(arr[i], i);
    }
};

console.log(hashFind(arr, target));