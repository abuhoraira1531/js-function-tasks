//1. Write a function called addNumbers that takes two numbers as parameters and returns their sum.
function addNumbers(x, y) {
  const sum = x + y;
  return sum;
}
console.log(addNumbers(3, 5));

// 2. Write a function called sumUpToN that takes a number n and returns the sum of all numbers from 1 to n. Use a loop.
function sumUpToN(n) {
  let sum2 = 0;
  for (let i = 1; i <= n; i++) {
    sum2 += i;
  }
  return sum2;
}
console.log(sumUpToN(3));

// 3. Write a function called sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
let myArr = [0, 2, 3, 1];
let sum3 = 0;
function sumArray(numbers) {
  for (let number of numbers) {
    sum3 += number;
  }
  return sum3;
}
sumArray(myArr);
console.log(sum3);

// 4. Write a function called countEvenNumbers that takes an array of numbers as a parameter and returns the count of even numbers in the array.
let myNumbers = [1, 2, 3, 4, 5, 6];
let sum4 = 0;
function countEvenNumbers(numbers2) {
  for (let number2 of numbers2) {
    if (number2 % 2 === 0) {
      sum4 += number2;
    }
  }
  return sum4;
}
countEvenNumbers(myNumbers);
console.log(sum4);

// 5. Write a function called stringLength that takes a string as a parameter and returns the length of the string.
let myStr = "Abu";
function stringLength(str) {
  const strLength = str.length;
  return strLength;
}
console.log(stringLength(myStr));
