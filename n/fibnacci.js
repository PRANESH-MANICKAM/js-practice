let n = 10;

const fibnacci = (n) => {
    if (n <= 0) return [];
    if (n == 1) return [0];
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        const add = sequence[i - 1] + sequence[i - 2];
        sequence.push(add);
    }

    return sequence;
};

console.log(fibnacci(n));