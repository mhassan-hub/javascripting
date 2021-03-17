const lastIndexOf = function (array, num) {
  let include = array.includes(num)
  let h = -1
  if (include === false) {
    return h

  } else {
    for (let i = array.length - 1; i >= 0 ; i--) {
      
      if (array[i] === num) {
        return i
      }
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([3], 3), "=?", 1);
