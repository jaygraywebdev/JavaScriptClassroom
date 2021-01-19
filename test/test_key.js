
function sum(x, y) {
  if (x && !y) {
    return x;
  }

  if (!x && y) {
    return y;
  }
  
  if (!x && !y) {
    return 0;
  }
  return x + y;
}

module.exports = sum;
