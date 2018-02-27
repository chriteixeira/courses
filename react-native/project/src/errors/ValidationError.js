import BaseError from './_BaseError';

class ValidationError extends BaseError {
    constructor(msg) {
        super(msg);
        this.type = 'ValidationError';
    }
}

module.exports = ValidationError;