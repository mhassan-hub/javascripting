const range = function (start, end, step) {
  const outArray = []
  const emptyArray = []
  if (start > end || step <= 0) {
    return emptyArray
  } else {
    for (let i = start; i <= end; i = (i + step)) {
      outArray.push(i)
    }
    return outArray
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
