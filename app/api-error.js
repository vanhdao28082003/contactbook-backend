class ApiError extends Error {
    constructor(statusCode, massage) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ApiError;