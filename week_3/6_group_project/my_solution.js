// My role in the group is: Person 4, Refactor & Translate

// Here is my part of the challenge:

// I want one set of numbers named "oddLengthArray" that contains the numbers 1, 2, 3, 4, 5, 5, 7.
// I want another set of numbers named "evenLengthArray" that contains the numbers 4, 4, 5, 5, 6, 6, 6, 7.

var oddLengthArray = [1, 2, 3, 4, 5, 5, 7];
var evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7];

// I want to run a series of tests. Each test has three components: a statement that will be either true or false,
// a message that will be displayed if the statement is false, and a test number. If the test passes
// the test number and "true" should be displayed. If it fails, the test number and "false" should be displayed,
// along with the message.

// Refactor: This function is already clear and concise, and works
// precisely as intended, so the only change I made was to rename the
// 'test' variable 'test_result' to make it a bit more descriptive.
function assert(test_result, message, test_number) {
  if (!test_result) {
    console.log(test_number + "false");
    throw "Error: " + message;
  }
  console.log(test_number + "true");
  return true;
}

// I want to be able to take a set of numbers and be told their sum

// Refactor: used reduce() rather than for-loop to sum array. I think
// this makes the function a bit easier to read. It also reduces the number of
// variables defined.
function sum(input_array) {
  return input_array.reduce(function(a,b) {return a + b;});
}

// I want to be able to take a set of numbers and be told their mean (average)

// Refactor: reused sum function to keep code DRY
function mean(input_array) {
  return sum(input_array)/input_array.length;
}

// I want to be able to take a set of numbers and be told their median

// Refactor: I made a number of changes to simplify this function.
// I defined a "midpoint" variable (not a perfect name for it but it conveys
// the purpose) to make code more DRY, and simplified the "if" test's logic
function median(input_array) {
  var sorted_array = input_array.sort(),
      midpoint = sorted_array.length/2;
  // If array length is even, median is average of two middle numbers.
  if (midpoint % 1 === 0) {
    return (sorted_array[midpoint - 1] + sorted_array[midpoint])/2;
  } // If length is odd, median is middle number.
  return sorted_array[Math.floor(midpoint)];
}

// Test number 1 should check if there is a function named "sum". If not,
// it should display the message "sum should be a Function."
assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
);

// Test number 2 should check if the sum function correctly calculates the
// sum of our oddLengthArray as 27. If not, it should display the message
// "sum should return the sum of all elements in an array with an odd length."
assert(
  (sum(oddLengthArray) === 27),
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
);

// Test number 3 should check if the sum function correctly calculates the
// sum of our evenLengthArray as 43. If not, it should display the message
// "sum should return the sum of all elements in an array with an even length."
assert(
  (sum(evenLengthArray) === 43),
  "sum should return the sum of all elements in an array with an even length.",
  "3. "
);

// Test number 4 should check if there is a function named "mean". If not,
// it should display the message "mean should be a Function."
assert(
  (mean instanceof Function),
  "mean should be a Function",
  "4. "
);

// Test number 5 should check if the mean function correctly calculates the
// mean of our oddLengthArray as 3.857142857142857. If not, it should display the message
// "mean should return the average of all elements in an array with an odd length."
assert(
  (mean(oddLengthArray) === 3.857142857142857),
  "mean should return the average of all elements in an array with an odd length.",
  "5. "
);

// Test number 6 should check if the mean function correctly calculates the
// mean of our evenLengthArray as 5.375. If not, it should display the message
// "mean should return the average of all elements in an array with an even length."
assert(
  (mean(evenLengthArray) === 5.375),
  "mean should return the average of all elements in an array with an even length.",
  "6. "
);

// Test number 7 should check if there is a function named "median". If not,
// it should display the message "median should be a Function."
assert(
  (median instanceof Function),
  "median should be a Function",
  "7. "
);

// Test number 8 should check if the median function correctly calculates the
// median of our oddLengthArray as 4. If not, it should display the message
// "median should return the median value of all elements in an array with an odd length."
assert(
  (median(oddLengthArray) === 4),
  "median should return the median value of all elements in an array with an odd length.",
  "8. "
);

// Test number 9 should check if the median function correctly calculates the
// median of our evenLengthArray as 5.5. If not, it should display the message
// "median should return the median value of all elements in an array with an even length."
assert(
  (median(evenLengthArray) === 5.5),
  "median should return the median value of all elements in an array with an even length.",
  "9. "
);
