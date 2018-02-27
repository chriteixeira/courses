class BaseError extends Error {
    constructor(msg) {
        super(msg);
        this.isAppError = true;
        this.type = 'BaseError';
    }
}

module.exports = BaseError;