const capitalise = require('./capitalise')

test('capitalises first letter of a word', () => {
  expect(capitalise("word")).toBe("Word");
});

test('capitalises first letter of a string', () => {
  expect(capitalise("this is a string")).toBe("This is a string");
});

test('preserves punctuation', () => {
  expect(capitalise("this, now this is a string!")).toBe("This, now this is a string!");
});

test('no effect on other capitals', () => {
  expect(capitalise("let's get CrAzY")).toBe("Let's get CrAzY");
});

test('does nothing if first letter is already capitalised', () => {
  expect(capitalise("Speak fool")).toBe("Speak fool");
})