// const request = require('request'); request('http://www.google.com', function
// (error, response, body) {    console.log(response); });




const customMath = require('./modules/customMathEs5');

var div = customMath.divide(10, 2);
var mul = customMath.multiply(10, 2);

console.log(div);
console.log(mul);

const logger = require('./modules/loggerEs5');

logger.info(div);
logger.info(mul);

//logger.formatMessage('test');





const {Cat, Dog} = require('./modules/AnimalsEs5');
const Animals = require('./modules/AnimalsEs5');

var dog = new Dog();
var cat = new Cat();

var dog2 = new Animals.Dog();
var cat2 = new Animals.Cat();
