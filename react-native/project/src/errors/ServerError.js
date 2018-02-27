import BaseError from './_BaseError';

class ServerError extends BaseError {
    constructor(msg) {
        super(msg);
        this.type = 'ServerError';
    }
}

module.exports = ServerError;