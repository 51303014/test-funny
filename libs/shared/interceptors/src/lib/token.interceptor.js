"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenInterceptor = void 0;
var core_1 = require("@angular/core");
var client_server_1 = require("@realworld/shared/client-server");
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(userStorageUtil) {
        this.userStorageUtil = userStorageUtil;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        // console.info('TokenInterceptor')
        var token = this.userStorageUtil.token;
        if (token) {
            var newHeaders = request.headers;
            // If we have a token, we append it to our new headers
            newHeaders = newHeaders.append(client_server_1.HTTP_HEADER.AUTHORIZATION, 'Bearer ' + token);
            // Finally we have to clone our request with our new headers
            // This is required because HttpRequests are immutable
            var authReq = request.clone({ headers: newHeaders });
            // Then we return an Observable that will run the request
            // or pass it to the next interceptor if any
            return next.handle(authReq);
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        core_1.Injectable()
    ], TokenInterceptor);
    return TokenInterceptor;
}());
exports.TokenInterceptor = TokenInterceptor;
