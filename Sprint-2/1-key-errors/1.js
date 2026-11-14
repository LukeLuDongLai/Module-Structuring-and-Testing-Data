// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// 'decimalNumber' has already been declared.
// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// Variable 'decimalNumber' is already an input parameter, it can't be declared as a const again.
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

let decimalNumber = 0.5;

console.log(convertToPercentage(decimalNumber));