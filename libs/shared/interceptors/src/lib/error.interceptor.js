"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorInterceptor = void 0;
var core_1 = require("@angular/core");
var client_server_1 = require("@realworld/shared/client-server");
var operators_1 = require("rxjs/operators");
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    // handling http errors
    ErrorInterceptor.prototype.intercept = function (request, next) {
        // console.info('ErrorInterceptor')
        return next.handle(request).pipe(
        // retry when an error happens with GET request
        operators_1.retry(request.method === client_server_1.HTTP_METHOD.GET ? 3 : 0));
    };
    ErrorInterceptor = __decorate([
        core_1.Injectable()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
exports.ErrorInterceptor = ErrorInterceptor;
