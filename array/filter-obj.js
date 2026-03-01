let arr = [{ name: "sai" }, { name: "Nang" }, { name: "sai" }, { name: "Nang" }, { name: "111111" }];

const filterObj = (arr) => {
    let uniqueArr = [];
    let seen = {};
    for (let obj of arr) {
        const { name } = obj;
        if (!seen[name]) {
            uniqueArr.push(obj);
            seen[name] = true;
        }
    }

    return uniqueArr;
};

console.log(filterObj(arr));