import BaseError from './_BaseError';

class AuthorizationError extends BaseError {
    constructor(msg) {
        super(msg);
        this.type = 'AuthorizationError';
    }
}

module.exports = AuthorizationError;