var varOne = 9;
var varTwo = 3;

// Addition
function varAdd(x, y){
    return x + y;
}
console.log(varAdd(varOne, varTwo))

// Subtraction
function varSubtract(x, y){
    return x - y;
}
console.log(varSubtract(varOne, varTwo))

// Multiplication
function varMultiply(x, y){
    return x * y;
}
console.log(varMultiply(varOne, varTwo))

// Division
function varDivide(x, y){
    if (y != 0){
        return x / y;
    }
    else {
        return "You can't divide by 0"
    }
}
console.log(varDivide(varOne, varTwo))
