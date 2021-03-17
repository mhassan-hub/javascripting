const howManyHundreds = function (num) {
  let division = num / 100
  if (division % 100 === 0) {
    return num
  } else {
    return Math.floor(division)
  }
}


console.log(howManyHundreds(1234))
console.log(howManyHundreds(123456))
console.log(howManyHundreds(55))
console.log(howManyHundreds(100))