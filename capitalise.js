function capitalise(string) {
  capitalised = string[0].toUpperCase() + string.slice(1);
  return capitalised;
}

module.exports = capitalise;