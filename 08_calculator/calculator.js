const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  for(const num of array){
    sum += num;
  }

  return sum;
};

const multiply = function(array) {
  let product = 1;

  if(array.length === 0){
    product = 0;
  }else{
    for(const num of array){
      product *= num;
    }
  }

  return product;
};

const power = function(num, pow) {
  return Math.pow(num, pow);
};

const factorial = function(number) {
let factorial = 1;

  if(number === 0){
    return 1;
  }else{
    for(let i = number; i >= 1; i--){
      factorial *= i;
    }
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
