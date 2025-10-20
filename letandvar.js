// 1. Variable Scope Examples
function scopeExample() {
    // Block scope with let
    if (true) {
        let blockScoped = "I'm block scoped";
        var functionScoped = "I'm function scoped";
        console.log(blockScoped); // Works
    }
    // console.log(blockScoped); // Error: blockScoped is not defined
    console.log(functionScoped); // Works
}

// 2. Hoisting Example
function hoistingExample() {
    console.log(varVariable); // undefined
    // console.log(letVariable); // Error: Cannot access before initialization

    var varVariable = "I'm hoisted";
    let letVariable = "I'm not hoisted";
}

// 3. Redeclaration
var x = 1;
var x = 2; // Allowed with var

let y = 1;
// let y = 2; // Error: Cannot redeclare block-scoped variable

// 4. Global Object Property
var globalVar = "I'm global with var";
let globalLet = "I'm global with let";

console.log(window?.globalVar); // "I'm global with var"
console.log(window?.globalLet); // undefined

// 5. Loop Example
function loopExample() {
    // Problem with var in loops
    for(var i = 0; i < 3; i++) {
        setTimeout(() => console.log('var i:', i), 100);
    }

    // Correct behavior with let
    for(let j = 0; j < 3; j++) {
        setTimeout(() => console.log('let j:', j), 100);
    }
}

// Run examples
console.log("=== Scope Example ===");
scopeExample();

console.log("\n=== Hoisting Example ===");
hoistingExample();

console.log("\n=== Loop Example ===");
loopExample();                       