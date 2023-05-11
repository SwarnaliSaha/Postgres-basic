"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHandler = void 0;
class ResponseHandler {
    constructor(data, err = null) {
        this.data = data;
        this.err = err;
    }
}
exports.ResponseHandler = ResponseHandler;
