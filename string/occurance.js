let str = "hello";

const occurance = (str) => {
    let obj = {};

    for (let val of str) {
        obj[val] = obj[val] ? obj[val] + 1 : 1;
    }

    return obj;
};

console.log(occurance(str));