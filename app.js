// basic math operators
    // add
    let add = function(num1, num2) {
        return num1 + num2;
    }

    // substract
    let substract = function(num1, num2) {
        return num1 - num2;
    }

    // multiply
    let multiply = function(num1, num2) {
        return num1 * num2;
    }

    // divide
    let divide = function(num1, num2) {
        if (num2 === 0) {
            return 'There is an error, you can\'t divide by 0';
        } else {
            return num1 / num2;
        }
    }

// operate function that takes 2 numbers and calls one of the operator functions
    let operate = function(num1, num2, operator){
        return operator(num1, num2);
    }

// function display value
    let display = document.querySelector('#display');
    let buttons = document.querySelectorAll('.button');
    
    let displayValue = 0;
    let operator;

    buttons.forEach(item => {
        item.addEventListener("click", (event) => {
            let input = event.currentTarget.value;
            if (isNaN(input)) {
                operator = input;
            } else {
                if (input != 0 || displayValue !== 0) { // avoid user input several 0s in front of number
                    displayValue += input;
                    display.innerText = Number(displayValue);
                }           
            }
            console.log(operator);
            console.log(displayValue);
        });
    });


// check operator
    
