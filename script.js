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

/* 

keep this just for now 

function calculate(a, b) {
    let o = prompt('enter operator', '+')
    let answer = operate(a, b, o);
return answer
}
console.log(calculate(8, 5))

*/

/*starting use dom after this will save now */

/* display scetion */
const display = document.querySelector('#display');

const displayValue = document.createElement('div');
displayValue.classList.add('displayValue');
displayValue.textContent = '';

display.appendChild(displayValue);
/* end of display section */

let displayStorage = [];

/* button section */

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
      if (button.id === '1' || button.id === '2' || button.id === '3' || button.id === '4'
      || button.id === '5'|| button.id === '6'|| button.id === '7'|| button.id === '8'
      || button.id === '9'|| button.id === '0'|| button.id === '.'
      ) {
        let currentInput = button.id;

        changeDisplay(currentInput)
      } else if (button.id === ' + ' || button.id === ' - ' || button.id === ' * ' 
      || button.id === ' / ') {
        leftNumber()
        let currentInput = button.id;
        changeDisplay(currentInput)
      }
  
  });
});

/*array text function */
function changeDisplay(input) {
    let oldnumber = displayValue.textContent;
let string = `${oldnumber}${input}`;
displayStorage.push(displayValue.textContent);
return displayValue.textContent = string;
}
/* */

function leftNumber() {
displayStorage.push(displayValue.textContent);
console.log(displayStorage, 'displayStorage')
}