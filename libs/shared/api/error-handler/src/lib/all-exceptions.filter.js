"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
var common_1 = require("@nestjs/common");
var client_server_1 = require("@realworld/shared/client-server");
var AllExceptionsFilter = /** @class */ (function () {
    function AllExceptionsFilter() {
    }
    // TODO: implement logging
    AllExceptionsFilter.prototype.catch = function (exception, host) {
        console.error(exception);
        var ctx = host.switchToHttp();
        var response = ctx.getResponse();
        var errorRes;
        if (exception instanceof common_1.HttpException) {
            errorRes = new client_server_1.ErrorResponse({
                statusCode: exception.getStatus(),
                message: exception.message
            });
        }
        else {
            errorRes = new client_server_1.ErrorResponse({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: exception.message || 'Internal server error'
            });
        }
        response.status(errorRes.statusCode).json(errorRes);
    };
    AllExceptionsFilter = __decorate([
        common_1.Catch()
    ], AllExceptionsFilter);
    return AllExceptionsFilter;
}());
exports.AllExceptionsFilter = AllExceptionsFilter;
