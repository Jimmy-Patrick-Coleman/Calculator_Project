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

function isOdd(num) { if (num === 0) {
    return true
}
    else if (num % 2 === 0) {
    return true
}
else if (num % 2!== 0) {
    return false
}
}

/*starting use dom after this will save now */

/* display scetion */
const display = document.querySelector('#display');

const displayValue = document.createElement('div');
displayValue.classList.add('displayValue');
displayValue.textContent = '';

display.appendChild(displayValue);
/* end of display section */
let leftNumberStorage = [];
let rightNumberStorage = [];
let leftNumber = [];
let rightNumber = [];
let operateArray = [];
let operateArrayStorage = []; // do not use
let displayArrayStorage = [];
let displayArray = [];
/* button section */

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === '1' || button.id === '2' || button.id === '3' || button.id === '4'
        || button.id === '5' || button.id === '6' || button.id === '7' || button.id === '8'
        || button.id === '9' || button.id === '0' || button.id === '.'
    ) {
        let oNum = operateArray.length;
        let goOrNah = isOdd(oNum);
        console.log()
        if (goOrNah === true) {
            let currentInput = button.id;
            changeDisplay(currentInput, leftNumber, leftNumberStorage, rightNumber, operateArray);
    } else if (goOrNah === false) {
        let currentInput = button.id;
        changeDisplay(currentInput, rightNumber, rightNumberStorage, operateArray, leftNumber);
}
    } else if (button.id === ' + ' || button.id === ' - ' || button.id === ' * '
    || button.id === ' / ') {
        let currentInput = button.id;
        changeDisplay(currentInput, operateArray, operateArrayStorage, leftNumber, rightNumber);
    }
    }
    
    );
});

    // and for each one we add a 'click' listener
    

    function changeDisplay(inputUseID, array, arrayStorage, otherArrayOne, otherArrayTwo) {
        arrayStorage.push(inputUseID);
        array = arrayStorage.join('')
        let displayArray = [];
        displayArray.push(array);
        displayArray.push(otherArrayOne);
        displayArray.push(otherArrayTwo);
        return displayValue.textContent = displayArray;
    }