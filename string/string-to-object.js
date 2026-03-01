const stringToObject = (keyString, value) => {
    let result = {};
    let current = result;
    let keys = keyString.split(".");

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        current[key] = i == keys.length - 1 ? value : {};
        current = current[key];
    }

    return result;
};

console.log(stringToObject("a.b.c", "pranesh"))