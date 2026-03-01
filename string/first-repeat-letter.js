let str = "leetcode";

const firstRepeatLetter = (str) => {
    const obj = {};

    for (let i = 0; i < str.length; i++) {
        const j = str[i];
        obj[j] = obj[j] ? obj[j] + 1 : 1;
    }

    for (let key in obj) {
        if (obj[key] == 1) {
            return key;
        }
        break;
    }
}

console.log(firstRepeatLetter(str));