let str = "madam";
// hello // false;
const palindrome = (str) => {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr == str;
};

console.time("1");
console.log(palindrome(str));
console.timeEnd("1");


const palindromeOpt = (str) => {
    let len = str.length - 1;
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] != str[len]) {
            return false;
        };
        len--;
    }
    return true;
};

console.time("2");
console.log(palindromeOpt("madam"));
console.timeEnd("2");