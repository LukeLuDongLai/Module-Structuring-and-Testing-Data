const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(...): removes the last character "p"
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): if the string has less than 3 characters, fill in "0" to the beginning
// 4. const pounds = paddedPenceNumberString.substring(...): extracts all characters except the last two
// 5. const pence = paddedPenceNumberString.substring(...): extract the last two characters
// 6. and then .padEnd(2, "0"): if the string has less than 2 characters, fill in "0" to the end
// 7. console.log(`£${pounds}.${pence}`): combine the 'pounds' and 'pence' with formatting and print the result out
