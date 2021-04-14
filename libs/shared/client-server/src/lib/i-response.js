"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = exports.ListSuccessResponse = exports.DetailSuccessResponse = exports.ActionSuccessResponse = void 0;
// create, update, delete, archive
var ActionSuccessResponse = /** @class */ (function () {
    function ActionSuccessResponse(options) {
        this.success = true;
        this.statusCode = 200 /* OK */;
        this.message = options.message;
        this.data = options.data;
    }
    return ActionSuccessResponse;
}());
exports.ActionSuccessResponse = ActionSuccessResponse;
var DetailSuccessResponse = /** @class */ (function () {
    function DetailSuccessResponse(options) {
        this.success = true;
        this.statusCode = 200 /* OK */;
        this.detailData = options.detailData;
    }
    return DetailSuccessResponse;
}());
exports.DetailSuccessResponse = DetailSuccessResponse;
var ListSuccessResponse = /** @class */ (function () {
    function ListSuccessResponse(options) {
        this.success = true;
        this.statusCode = 200 /* OK */;
        this.listData = options.listData;
        this.total = options.total;
    }
    return ListSuccessResponse;
}());
exports.ListSuccessResponse = ListSuccessResponse;
var ErrorResponse = /** @class */ (function () {
    function ErrorResponse(options) {
        this.success = false;
        this.statusCode = options.statusCode;
        this.message = options.message;
    }
    return ErrorResponse;
}());
exports.ErrorResponse = ErrorResponse;
