function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}


function operate(numberOne, numberTwo, operator) {
    if (operator === '+') {
        return add(numberOne, numberTwo)
    } else if (operator === 'subtract') {
        return subtract(numberOne, numberTwo)
    } else if (operator === 'multiply') {
        return multiply(numberOne, numberTwo)
    } else if (operator === 'divide') {
        return divide(numberOne, numberTwo)
    }
}

/* keep this just for now */
function calculate(a, b) {
    let o = prompt('enter operator', '+')
    let answer = operate(a, b, o);
return answer
}
console.log(calculate(8, 5))