const memoize = function (fn) {
    let cache = new Map();
    return function (...arg) {
        const key = JSON.stringify(...arg);
        if (cache.has(key)) {
            const value = cache.get(key);
            console.log("Cache", value);
            return value;
        } else {
            const value = fn(...arg);
            cache.set(key, value);
            console.log("New", value);
            return value;
        }
    }
};

const fnCall = memoize((a, b) => a * b);

console.time("1");
fnCall(2, 3);
fnCall(2, 3);
console.timeEnd("1");

const memoize2 = function (fn) {
    let cache = {};
    return function (key) {
        if (key in cache) {
            console.log("cache", cache[key])
            return cache[key];
        } else {
            const value = fn(key);
            cache[key] = value;
            console.log("new", value)
            return value;
        }
    }
};

const fnCall2 = memoize2((a) => a * 10);

console.time("2");
fnCall(2);
fnCall(2);
console.timeEnd("2");