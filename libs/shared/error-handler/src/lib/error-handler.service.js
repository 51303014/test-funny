"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlerService = void 0;
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(loggingService, notificationService, platformId) {
        this.loggingService = loggingService;
        this.notificationService = notificationService;
        this.platformId = platformId;
    }
    ErrorHandlerService.prototype.handleError = function (error) {
        var _a, _b, _c;
        console.info('Handling error with ErrorHandlingService');
        // Extract error wrapped by zone.js from promise rejection 
        if (error.promise && error.rejection) {
            error = error.rejection;
        }
        if (common_1.isPlatformServer(this.platformId)) {
            return this.handleErrorFunc({
                message: (error === null || error === void 0 ? void 0 : error.message) || 'unexpected error',
                errorName: (error === null || error === void 0 ? void 0 : error.name) || 'Error',
                stack: error === null || error === void 0 ? void 0 : error.stack,
            }, (error === null || error === void 0 ? void 0 : error.message) || 'Unexpected error.');
        }
        // http errors
        if (error instanceof http_1.HttpErrorResponse) {
            // client side errors
            if (error.error instanceof ProgressEvent) {
                this.handleErrorFunc({
                    message: 'Client side error: ' + error.message,
                    errorName: error.name,
                    action: "Making request to url " + error.url
                }, 'Cannot connect to server, please try again later.');
            }
            else { // server side errors
                this.handleErrorFunc({
                    message: 'Server side error: ' + ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) || error.message,
                    errorName: error.name,
                    errorCode: (_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.code,
                    action: "Making request to url " + error.url
                }, ((_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.message) || error.message);
            }
        }
        else {
            this.handleErrorFunc({
                message: (error === null || error === void 0 ? void 0 : error.message) || 'unexpected error',
                errorName: (error === null || error === void 0 ? void 0 : error.name) || 'Error',
                stack: error === null || error === void 0 ? void 0 : error.stack,
            }, (error === null || error === void 0 ? void 0 : error.message) || 'Unexpected error.');
        }
    };
    ErrorHandlerService.prototype.handleErrorFunc = function (errorData, notiMessage) {
        this.loggingService.error(errorData);
        this.notificationService.showError(notiMessage);
    };
    ErrorHandlerService = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Inject(core_1.PLATFORM_ID))
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());
exports.ErrorHandlerService = ErrorHandlerService;
