const caesarcipher = require('./caesarcipher');

test('encode one word', () => {
  expect(caesarcipher("hello", 3)).toBe("khoor");
})

test('encode a sentence', () => {
  expect(caesarcipher("hello world", 2)).toBe("jgnnq yqtnf");
})

test('works when wrapping from a-z', () => {
  expect(caesarcipher("xyz", 4)).toBe("bcd");
})

test('maintains capitalisation', () => {
  expect(caesarcipher("Hello World", 4)).toBe("Lipps Asvph");
})

test('works with punctuation', () => {
  expect(caesarcipher("Hello, World!", 7)).toBe("Olssv, Dvysk!");
})

test('works with a negative shift', () => {
  expect(caesarcipher("Hello, World!", -5)).toBe("Czggj, Rjmgy!");
})