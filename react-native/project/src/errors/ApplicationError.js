import BaseError from './_BaseError';

class ApplicationError extends BaseError {
    constructor(msg) {
        super(msg);
        this.type = 'ApplicationError';
    }
}

module.exports = ApplicationError;