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

 const operate = function (op,a,b) {
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
