const logger = require('./loggerEs5');

class Dog {
    constructor() {
        logger.info('Creating a dog.');
    }
}

class Cat {
    constructor() {
        logger.info('Creating a cat.');
    }
}

module.exports = {
    Dog: Dog,
    Cat: Cat
}