//import request from 'request';




import customMath from './modules/customMathEs6';

var div = customMath.divide(10, 2);
var mul = customMath.multiply(10, 2);

console.log(div);
console.log(mul);

import logger from './modules/loggerEs6';

logger.info(div);
logger.info(mul);

//logger.formatMessage('test');





import {Cat, Dog} from './modules/AnimalsEs6';
import Animals from './modules/AnimalsEs6';

var dog = new Dog();
var cat = new Cat();

var dog2 = new Animals.Dog();
var cat2 = new Animals.Cat();
