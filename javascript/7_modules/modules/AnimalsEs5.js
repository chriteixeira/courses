const logger = require('./loggerEs5');

export class Dog {
    constructor() {
        logger.info('Creating a dog.');
    }
}

export class Cat {
    constructor() {
        logger.info('Creating a cat.');
    }
}

