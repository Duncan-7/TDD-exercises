const analyse = require('./array-analysis');

test('finds max number', () => {
  expect(analyse([1, 2, 5, 3]).max).toBe(5);
})

test('finds min number', () => {
  expect(analyse([5, 1, 19, 6]).min).toBe(1);
})

test('finds length', () => {
  expect(analyse([1, 2, 5, 3, 7, 4, 2]).length).toBe(7);
})

test('finds average', () => {
  expect(analyse([2, 4, 6, 8]).average).toBe(5);
})

test('check full object', () => {
  expect(analyse([0, 1, 2, 3, 4])).toEqual({
    length: 5,
    max: 4,
    min: 0,
    average: 2
  });
})

test('works with negative numbers', () => {
  expect(analyse([1, -2, 5, -3]).min).toBe(-3);
})

test('works with non-whole numbers', () => {
  expect(analyse([1, -2, 5.2, -3]).max).toBe(5.2);
})

test('average works with non-whole numbers', () => {
  expect(analyse([1, 2, 3, 4]).average).toBe(2.5);
})