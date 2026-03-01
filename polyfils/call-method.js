Function.prototype.myCallFunctions = function (context, ...args) {
    context = context || globalThis;
    const fnSymbol = Symbol();

    context[fnSymbol] = this;

    const result = context[fnSymbol](...args);

    delete context[fnSymbol];

    return result;
}

function introduce(age) {
    console.log(`Hi, I'm ${this.name}, ${age} years old`);
}

const person = { name: "Pranesh" };

introduce.myCallFunctions(person, 25)