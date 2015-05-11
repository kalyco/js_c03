// Immediately invoked fuctino expressions
// there functions are not given a name, and are instead executed as soon as the
// interpeter comes across them.

// area will hold the value that is returned from the function
// instead of the function itself.

var area = (function() {
  var width = 3;
  var height = 2;
  return width * height;
}());
// the final paranthesis tells the interpreter to call the function immediately.

// the grouping operators (the final remote parenthesis pair) are to
// enure the interpreter treats the function as an expression.


// used for code that only needs to be run once within a task.

// - as an argument when a function is called
// - to assign the value of a property to an object
// - in event handlers and listeners to perform a task when an event occurs
// - to prevent conflicts between two scripts that might use the same variable

