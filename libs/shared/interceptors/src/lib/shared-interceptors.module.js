"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedInterceptorsModule = void 0;
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var caching_interceptor_1 = require("./caching.interceptor");
var error_interceptor_1 = require("./error.interceptor");
var loading_interceptor_1 = require("./loading.interceptor");
var logging_interceptor_1 = require("./logging.interceptor");
var notification_interceptor_1 = require("./notification.interceptor");
var timeout_interceptor_1 = require("./timeout.interceptor");
var token_interceptor_1 = require("./token.interceptor");
var SharedInterceptorsModule = /** @class */ (function () {
    function SharedInterceptorsModule() {
    }
    SharedInterceptorsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: token_interceptor_1.TokenInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: timeout_interceptor_1.TimeoutInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: caching_interceptor_1.CachingInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: loading_interceptor_1.LoadingInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: notification_interceptor_1.NotificationInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: logging_interceptor_1.LoggingInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: error_interceptor_1.ErrorInterceptor, multi: true },
            ]
        })
    ], SharedInterceptorsModule);
    return SharedInterceptorsModule;
}());
exports.SharedInterceptorsModule = SharedInterceptorsModule;
