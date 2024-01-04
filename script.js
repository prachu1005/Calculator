let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let currentInput = "";
let storedValue = "";
let operator = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            // Perform calculation based on operator
            let result = calculate(storedValue, currentInput, operator);
            input.value = result;
            currentInput = result;
            storedValue = "";
            operator = "";
        } else if (e.target.innerHTML === 'AC') {
            currentInput = "";
            storedValue = "";
            operator = "";
            input.value = currentInput;
        } else if (e.target.innerHTML === 'DEL') {
            currentInput = currentInput.substring(0, currentInput.length - 1);
            input.value = currentInput;
        }else if (isOperator(e.target.innerHTML)) {
            // Store the current input, operator, and reset the input for the next number
            storedValue = currentInput;
            operator = e.target.innerHTML;
            currentInput = "";
        } else {
            currentInput += e.target.innerHTML;
            input.value = currentInput;
        }
    });
});

function calculate(value1, value2, op) {
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    if (op === '+') {
        return value1 + value2;
    } else if (op === '-') {
        return value1 - value2;
    } else if (op === '*') {
        return value1 * value2;
    } else if (op === '/') {
        if (value2 === 0) {
            return 'Error';
        } else {
            return value1 / value2;
        }
    }else if (op === '%') {
        if (value2 === 0) {
          return 'Error: Division by zero';
        } else {
          return value1 % value2; // Perform modulo operation
        }
    }
    else {
        return 'Error';
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/','%'].includes(char);
}