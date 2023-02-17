const one = document.querySelector('#one') 
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const decimal = document.querySelector('#decimal')
const addOperator = document.querySelector('#add')
const subtractOperator = document.querySelector('#subtract')
const multiplyOperator = document.querySelector('#multiply')
const divideOperator = document.querySelector('#divide')
const equalOperator = document.querySelector('#equals')
const display1 = document.querySelector('.display1')
const display2 = document.querySelector('.display2')
const clear = document.querySelector('#clear')
const CE = document.querySelector('#ce')




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

CE.addEventListener('click', function (e) {
  display2.textContent = '';
  num2 = ''
})

clear.addEventListener('click', function(e) {
  display1.textContent = '';
  display2.textContent='';
  num1 = ''
  num2 = ''
})
