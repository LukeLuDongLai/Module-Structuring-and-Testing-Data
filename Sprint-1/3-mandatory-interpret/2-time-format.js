const movieLength = 79; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6
// b) How many function calls are there?
// 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It represents the remaining seconds after dividing the movie length by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It subtracts the "second" part from the movie length and divides the result by 60 to calculate the total number of minutes this movie has.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// 'result' represents the movie length formatted as 'hours:minutes:seconds'. 
// I would name it as 'formattedMovieLength'

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, basically it works, but the formatting might not be the optimal, eg. input: 79 output: 0:1:19, rather than 0:01:19