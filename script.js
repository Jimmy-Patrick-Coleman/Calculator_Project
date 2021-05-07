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
    if (b < 0) {
        return 'A portal opens and your socks are stolen by a crazy irish wizard covered in spoons.'
    } else {
        return a / b;
    }
}


function operate(numberOne, numberTwo, operator) {
    console.log(numberOne, 'numberOne');
    console.log(numberTwo, 'numberTwo');
    console.log(numberOne, 'operator');
    if (operator === ' + ') {
        return add(numberOne, numberTwo)
    } else if (operator === ' - ') {
        return subtract(numberOne, numberTwo)
    } else if (operator === ' * ') {
        return multiply(numberOne, numberTwo)
    } else if (operator === ' / ') {
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

const displayValueLeft = document.createElement('div');
displayValueLeft.classList.add('displayValueLeft');
displayValueLeft.textContent = '';

display.appendChild(displayValueLeft);

const displayValueMiddle = document.createElement('div');
displayValueMiddle.classList.add('displayValueMiddle');
displayValueMiddle.textContent = '';

display.appendChild(displayValueMiddle);

const displayValueRight = document.createElement('div');
displayValueRight.classList.add('displayValueRight');
displayValueRight.textContent = '';

display.appendChild(displayValueRight);

const displayAnswer = document.createElement('div');
displayAnswer.classList.add('displayAnswer');
displayAnswer.textContent = '';

display.appendChild(displayAnswer);
/* end of display section */
let leftNumberStorage = [];
let rightNumberStorage = [];
let leftNumber = [];
let rightNumber = [];
let operateArray = [];
let operateArrayStorage = []; // do not use
let displayArray = [];


    // and for each one we add a 'click' listener
    
function changeLeftDisplay(number) {
   leftNumberStorage.push(number)
   console.log(leftNumberStorage);
   leftNumber = [];
   leftNumber.push(leftNumberStorage.join('')) 
   console.log(leftNumber, ' left  number');
   return displayValueLeft.textContent = leftNumber;
}
function changeRightDisplay(number) {
    rightNumberStorage.push(number)
    console.log(rightNumberStorage);
    rightNumber = [];
    rightNumber.push(rightNumberStorage.join('')) 
    console.log(rightNumber, ' r ight  number');
    return displayValueRight.textContent = rightNumber;
 }
 function changeMiddleDisplay(number) {
    operateArrayStorage.push(number)
    console.log(operateArrayStorage);
    operateArray = [];
    operateArray.push(operateArrayStorage.join('')) 
    console.log(operateArray , 'o a');
    return displayValueMiddle.textContent = operateArray;
 }
 function resetArrays(array) {
     let oldLength = [...array];
 for (let i = 0; i <= oldLength.length; i++) {
     array.unshift();
 }if (array.length === 0) {
return console.log(array, 'reset')
 }
 }


 function returnValueOfArray(array) {
    return Number(array)
 }

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
        if (goOrNah === true) {
            let currentInput = button.id;
            displayArray.push('lengthisnowmore')
            changeLeftDisplay(currentInput);

    } else if (goOrNah === false) {
        let currentInput = button.id;
        displayArray.push('lengthisnowmore')
        changeRightDisplay(currentInput);
}
    } else if (button.id === ' + ' || button.id === ' - ' || button.id === ' * '
    || button.id === ' / ') {
        let oNum = operateArray.length;
        let goOrNah = isOdd(oNum);
        if (goOrNah === false) {
            let numOne = leftNumber.pop();
            console.log(numOne, 'num 1');
            let operateArg = operateArray.pop();
            console.log(operateArg , 'oparg');
            let numTwo = rightNumber.pop();
            console.log(numTwo, 'num2');
            let ln = returnValueOfArray(numOne, 'left number as number')
            let rn = returnValueOfArray(numTwo, 'left number as number')
           let answer =  operate(ln, rn, operateArg);
           displayValueLeft.textContent = answer;
           leftNumberStorage = [];
           rightNumberStorage = [];
           leftNumber = [];
           rightNumber = [];
           operateArray = [];
           operateArrayStorage = [];
           displayArray = [];
           leftNumber.push(answer);
           displayValueMiddle.textContent = operateArray;
           displayValueRight.textContent = rightNumber;
           let currentInput = button.id;
           displayArray.push('lengthisnowmore')
           changeMiddleDisplay(currentInput)
        } else {
            let currentInput = button.id;
            displayArray.push('lengthisnowmore')
            changeMiddleDisplay(currentInput)
        }
    } else if (button.id === ' = ') {
        let numOne = leftNumber.pop();
        console.log(numOne, 'num 1');
        let operateArg = operateArray.pop();
        console.log(operateArg , 'oparg');
        let numTwo = rightNumber.pop();
        console.log(numTwo, 'num2');

        let ln = returnValueOfArray(numOne, 'left number as number')
        let rn = returnValueOfArray(numTwo, 'left number as number')

       let answer =  operate(ln, rn, operateArg);
       displayValueLeft.textContent = answer;
       
       leftNumberStorage = [];
       rightNumberStorage = [];
       leftNumber = [];
       rightNumber = [];
       operateArray = [];
       operateArrayStorage = [];
       displayArray = [];
      
       leftNumber.push(answer);

       displayValueMiddle.textContent = operateArray;
       displayValueRight.textContent = rightNumber;
    } else if (button.id === 'clear') {

       leftNumberStorage = [];
       rightNumberStorage = [];
       leftNumber = [];
       rightNumber = [];
       operateArray = [];
       operateArrayStorage = [];
       displayArray = [];
        
        displayValueLeft.textContent = leftNumber;
        displayValueMiddle.textContent = operateArray;
        displayValueRight.textContent = rightNumber;
    }
    } 
    
    );
});