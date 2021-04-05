const chai = require('chai'); // 1
const assert = chai.assert;
const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("shouldBuyCar()", function() { // 3

  it("should return false if there is no car", function() { // 4
    const car = {};
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return false if it's a hatchback", function() { // 4
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return true if it's pink", function() { // 4
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  it("should return false if it's a hatchback and pink in color", function() { // 4
    const car = {
      type: "hatchback",
      color: 'pink'
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return true if 6 liters/100km and under $5000", function() { // 4
    const car = {
      litresPer100km: 6,
      price: 4999
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  
  });
  it("should return true if 11 liters/100km and under $5000", function() { // 4
    const car = {
      litresPer100km: 11,
      price: 4999
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  
  });
  it("should return false if  6 liters/100km and over $5000", function() { // 4
    const car = {
      litresPer100km: 6,
      price: 5001
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  
  });
  it("should return false if  11 liters/100km and over $5000", function() { // 4
    const car = {
      litresPer100km: 11,
      price: 5001
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  
  });
  it("should return false if 12 liters/100km and over $5000", function() { // 4
    const car = {
      litresPer100km: 12,
      price: 5001
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  
  });
  it("should return false if less than 6 liters/100km and under $5000", function() { // 4
    const car = {
      litresPer100km: 5,
      price: 4999 
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  
  });
  it("should return false if more than 11 liters/100km and under $5000", function() { // 4
    const car = {
      litresPer100km: 12,
      price: 4999 
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  
  });
  // should be 12 liters/100km and be equal or under $5001  false
});


// const assert = require("chai").assert;
// const isPalindrome = require("../lib/palindromes");

// describe("Palindromes", function() {
//   it("should return true if a word is a palindrome", function() {
//     const word = "abba";
//     const result = isPalindrome(word);
//     assert.isTrue(result);
//   });
  
//   it("should return false if a word is NOT a palindrome", function() {
//     const word = "not";
//     assert.isFalse(isPalindrome(word));
//   });
  
//   it("should return true if a phrase is a palindrome", function() {
//     const phrase = "a man a plan a canal panama";
//     assert.isFalse(isPalindrome(phrase));
//   });
  
//   it("should return false if a phrase is NOT a palindrome", function() {
//     const phrase = "this is not a palindrome"
//     assert.isFalse(isPalindrome(phrase));
//   });
// });