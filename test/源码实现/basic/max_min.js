function max () {
  let m = -Infinity;
  for (let i = 0, len = arguments.length; i < len; i ++) {
    if (m < arguments[i]) {
      m = arguments[i];
    }
  }
  return m;
}

function min () {
  let m = Infinity;
  for (let i = 0, len = arguments.length; i < len; i ++) {
    if (m > arguments[i]) {
      m = arguments[i];
    }
  }
  return m;
}

let arr = [1, 3, 2, 4, 5, 10, 20];

console.log(max(...arr), min(...arr));

