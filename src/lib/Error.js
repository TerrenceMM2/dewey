export default class Error {
    constructor(error, statusCode, data) {
        this.error = error;
        this.statusCode = statusCode;
        this.data = data;
    }
}
