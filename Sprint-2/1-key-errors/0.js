// Predict and explain first...
//  =============> write your prediction here
// There will be a conflict in declaring 'str' since 'str' is an input parameter already.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// Same as my prediction. Variable 'str' has already been declared.
// =============> write your new code here

function capitalise(str) {
  let capStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capStr;
}
