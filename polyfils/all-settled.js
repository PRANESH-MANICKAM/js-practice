Promise.myAllSettled = function (promises) {
    return Promise.all(
        promises.map((p) => Promise.resolve(p).then((value) => ({ success: "Fulfilled", value })).catch((reason) => ({ success: "Rejected", reason })))
    )
}

const p1 = Promise.resolve(10);
const p2 = Promise.reject("Error");
const p3 = new Promise((res) => setTimeout(() => res(30), 1000));

Promise.myAllSettled([p1, p2, p3]).then(console.log);