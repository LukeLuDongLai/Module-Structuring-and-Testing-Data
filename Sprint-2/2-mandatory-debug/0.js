// Predict and explain first...

// =============> write your prediction here
// The result of multiplying 10 and 32 is undefined

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function doesn't return a number, instead, it calls 'console.log' function, which by default returns an undefined value.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);