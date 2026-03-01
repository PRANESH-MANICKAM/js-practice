let str = "()[]{}";

const stackStr = (str) => {
    let stack = [];
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for(let ch of str) {
        if(ch == "(" || ch == "[" || ch == "{") {
            stack.push(ch)
        } else if(stack.pop() != map[ch]) {
            return false;
        }
    }

    return stack.length === 0;
};

console.log(stackStr(str));