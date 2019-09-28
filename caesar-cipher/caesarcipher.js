const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const uppercase = lowercase.map(x => x.toUpperCase());

function caesarcipher(string, shift) {
  array = string.split("");
  for (i = 0; i < array.length; i++) {
    if (array[i].match(/^[a-z]+$/)) {
      newPosition = shifter(array[i], shift);
      array[i] = lowercase[newPosition];
    } else if (array[i].match(/^[A-Z]+$/)) {
      newPosition = shifter(array[i], shift);
      array[i] = uppercase[newPosition];
    }
  }
  return array.join("");
}

function shifter(letter, shift) {
  position = (uppercase.indexOf(letter.toUpperCase()) + shift) % 26;
  if (position < 0) {
    position += 26;
  }
  return position
}

module.exports = caesarcipher;