class Calculator {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
  }

  add(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    return num1 + num2;
  }

  subtract(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    return num1 - num2;
  }

  multiply(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    return num1 * num2;
  }

  divide(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    return num1 / num2;
  }
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const reverseString = (str) => str.split('').reverse().join('');

const stringCount = (string) => {
  const stringLength = string.length;
  if (stringLength <= 1 || stringLength < 10) {
    return stringLength;
  }
  throw new Error('String length should be less than 10');
};

module.exports = {
  Calculator,
  capitalize,
  reverseString,
  stringCount,
};
