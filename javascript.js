const numberButton = document.querySelectorAll('.num')
const decimalButton = document.querySelector('.decimal')
const clearButton = document.querySelectorAll('#clear')
const ceButton = document.querySelectorAll('#ce')
const operatorButton = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equals')
let display1 = document.querySelector('.display1')
let display2 = document.querySelector('.display2')

//Math Functions
const operators = ['+', '-', '*', '/']
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

 const updateDisplay = function() {
  let displayEquation = display2.textContent;
  let displayEquationSplit = displayEquation.split(" ");
  display1.textContent = operate(Number(displayEquationSplit[0]), displayEquationSplit[1], Number(displayEquationSplit[2]))
 }

decimalButton.addEventListener('click', (e) => {
 /* if (!(display2.textContent.includes('.'))) {
    display2.textContent += e.target.textContent;
  }*/
  let displayEquation = display2.textContent;
  let displayEquationSplit = displayEquation.split(" ");
  console.log(displayEquationSplit)
  if (displayEquationSplit[2]) {
    if (!displayEquationSplit[2].includes('.')) {
      display2.textContent += e.target.textContent;
    }
  }
  if(!(displayEquationSplit[0].includes('.'))) {
    display2.textContent += e.target.textContent;
  }
})

numberButton.forEach(button => {
  button.addEventListener('click', (e) => {
    display2.textContent += e.target.textContent;
  })
})

operatorButton.forEach(button => {
  button.addEventListener('click', (e) => {
    const operatorExists = operators.some(operator => display2.textContent.includes(operator))
    if(operatorExists){
      updateDisplay()
      display2.textContent = display1.textContent
    }
    if(display1.textContent){
      display2.textContent = display1.textContent
    }
    display2.textContent += ` ${e.target.textContent} `;
  })
})

clearButton.forEach(button => {
  button.addEventListener('click', (e) => {
    display1.textContent = '';
    display2.textContent = '';
  })
})

ceButton.forEach(button => {
  button.addEventListener('click', (e) => {
    display2.textContent = ''
  })
})

equalsButton.addEventListener('click', (e) => {
  const operatorExists = operators.some(operator => display2.textContent.includes(operator))
  if(operatorExists) {
    updateDisplay()
  display2.textContent = ''
  }
})

