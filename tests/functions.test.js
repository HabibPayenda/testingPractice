const {
  Calculator,
  stringCount,
  reverseString,
  capitalize,
} = require('../functions/functions.js');

describe('String Count Function', () => {
  it('shuould check if the stringCount function is defined', () => {
    expect(stringCount).toBeDefined();
  });
  it('should return the count to be: (5)', () => {
    expect(stringCount('habib')).toBe(5);
  });
});

describe('should check if the reverseString function is defined', () => {
  it('Check if the function exist', () => {
    expect(reverseString).toBeDefined();
  });

  it('should retrun the passed string reversed', () => {
    expect(reverseString('hi')).toBe('ih');
  });
});

describe('Calculator Class', () => {
  it('should check if the class is defined', () => {
    expect(Calculator).toBeDefined();
  });
});

describe('Multiplication Method', () => {
  it('should check if the Multiplacation method works', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(20, 2)).toBe(40);
  });
});

describe('Add Method', () => {
  it('should check if the add method works', () => {
    const calculator = new Calculator();
    expect(calculator.add(20, 2)).toBe(22);
  });
});

describe('Subtraction', () => {
  it('should check if the Subtruct method works', () => {
    const calculator = new Calculator();
    expect(calculator.subtract(20, 2)).toBe(18);
  });
});

describe('Division', () => {
  it('should check if the Divide method works', () => {
    const calculator = new Calculator();
    expect(calculator.divide(20, 2)).toBe(10);
  });
});

describe('Capitalize', () => {
  it('should return the first letter capitalized', () => {
    expect(capitalize('payenda')).toBe('Payenda');
  });
});
