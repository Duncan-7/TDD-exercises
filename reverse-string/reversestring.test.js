const reverseString = require('./reversestring');

test('reverse a lower case word', () => {
  expect(reverseString("word")).toBe("drow");
});

test('reverse a sentence', () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test('reverse while maintaining capitalisation', () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test('maintain punctuation', () => {
  expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
});
