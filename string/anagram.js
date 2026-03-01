let s1 = "listen"
let s2 = "silent";

const anagram = (s1, s2) => {
    if(s1.length != s2.length) return false;
    const sortStr = (str) => {
        let arr = [...str];
        for(let i= 0; i < arr.length -1; i++) {
            for(let j = 0; j < arr.length -1 - i; j++) {
                if(arr[j] > arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr.join("");
    };

    const str1 = sortStr(s1);
    const str2 = sortStr(s2);

    return str1 === str2;
};

console.log(anagram(s1, s2));