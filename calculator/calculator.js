let calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => {
    if (y == 0) {
      return "you can't divide by 0"
    } else {
      return x / y
    }
  }
}

module.exports = calculator;