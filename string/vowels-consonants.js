const str = "Hello World";

const vowelsAndConsonants = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let vow = [];
    let consonants = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") continue;
        if (vowels.includes(str[i])) {
            vow.push(str[i]);
        } else {
            consonants.push(str[i])
        }
    };
    return {
        vow,
        consonants
    }
}

console.log(vowelsAndConsonants(str));