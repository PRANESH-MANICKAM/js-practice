let str = "abcccccaaa";
//a2b1c5a3


const stringCompression = (str) => {
    if(!str) return "";
    let length = 1;
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i+1]) {
            length++;
        } else {
            res = res + str[i] + length;
            length = 1
        }
    };
    return res;
}

console.log(stringCompression(str));
