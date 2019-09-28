const calculator = require('./calculator');

test('addition', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('subtraction', () => {
  expect(calculator.subtract(7, 3)).toBe(4);
});

test('multiplication', () => {
  expect(calculator.multiply(3, 9)).toBe(27);
});

test('division', () => {
  expect(calculator.divide(20, 10)).toBe(2);
});

test('dividing by 0', () => {
  expect(calculator.divide(5, 0)).toBe("you can't divide by 0");
});
