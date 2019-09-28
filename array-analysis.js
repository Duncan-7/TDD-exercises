function analyse(array) {
  return ({
    "length": array.length,
    "max": Math.max(...array),
    "min": Math.min(...array),
    "average": array.reduce((sum, num) => sum += num, 0) / array.length
  })
}

module.exports = analyse;