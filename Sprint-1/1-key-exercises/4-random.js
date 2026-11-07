const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// The variable num represents a random integer between 1 and 100 ([1, 100]).
// Breakdown:
// 1. 'Math.random()' generates a random floating number in [0, 1)
// 2. 'maximum - minimum + 1' calculates the range, here is 100
// 3. '*' operation gets a random floating number in [0, 100)
// 4. 'Math.floor' rounds down the number, so we get integer in [0, 99]
// 5. Finally, '+ minimum' adds 'minimum' to the number, the final result is an integer in [1, 100]