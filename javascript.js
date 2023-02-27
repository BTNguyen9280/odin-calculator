const numberButton = document.querySelectorAll('.num')
const clearButton = document.querySelectorAll('.clear')
const operatorButton = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')
let display1 = document.querySelector('.display1')
let display2 = document.querySelector('.display2')


const add = function(a,b) {
    return a+b
  };
  
  const subtract = function(a,b) {
    return a-b	
  };
  
  const sum = function(a) {
    return a.reduce((total,sum1) => total+sum1,0
  )};
  
  const multiply = function(a,b) {
    return a*b
  };
  
 const divide = function(a,b) {
    return a/b
 }

 const operate = function (a,op,b) {
    if (op == '+') {
        return add(a,b)
    }
    if (op == '-') {
        return subtract(a,b)
    }
    if (op == '*') {
        return multiply(a,b)
    }
    if (op == '/') {
        return divide(a,b)
    }
 }

let num1 ; 
let num2 ;
let operator ;

numberButton.forEach(button => {
  button.addEventListener('click', (e) => {
    display2.textContent += e.target.textContent;
  })
})

operatorButton.forEach(button => {
  button.addEventListener('click', (e) => {
    display2.textContent += ` ${e.target.textContent} `;
  })
})

clearButton.forEach(button => {
  button.addEventListener('click', (e) => {
    display1.textContent = '';
    display2.textContent = '';
  })
})

equalsButton.addEventListener('click', (e) => {
  let displayEquation = display2.textContent;
  let displayEquationSplit = displayEquation.split(" ");
  display1.textContent = operate(Number(displayEquationSplit[0]), displayEquationSplit[1], Number(displayEquationSplit[2]))
  display2.textContent = ''
})