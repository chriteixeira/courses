/*
 * Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
 */


//Variables
console.log(x);
console.log(y);

var x = 10;
console.log(x);



//Function
foo();
function foo() {
  console.log('bar');
}