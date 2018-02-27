var x;
let y; //Block-scoped
const z = 10; //Block-scoped

/* 
 * Data types
 * 
 * Primitives
 * - Boolean
 * - Number
 * - String
 * - Undefined
 * - Null
 * - Symbol (ECMAScript 6)
 * 
 * Object / Function object
 */
x = true;
console.log(x);
console.log(typeof x)

x = 10;
console.log(x);
console.log(typeof x)
x = 10.1;
console.log(x);
console.log(typeof x);

x = 'text';
console.log(x);
console.log(typeof x);

var xx;
console.log(xx);
console.log(typeof xx);

x = null;
console.log(x);
console.log(typeof x);


//Objects
x = {
  id: '1',
  name: 'Test name'
};
console.log(x);
console.log(typeof x);

x = new Error();
console.log(x);
console.log(typeof x);

x = [0, 1, 2];
console.log(x);
console.log(typeof x);

x = function (value) {
  let yy = value;
};
console.log(x);
console.log(typeof x);