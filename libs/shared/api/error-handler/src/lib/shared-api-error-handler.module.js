"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedApiErrorHandlerModule = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var all_exceptions_filter_1 = require("./all-exceptions.filter");
var SharedApiErrorHandlerModule = /** @class */ (function () {
    function SharedApiErrorHandlerModule() {
    }
    SharedApiErrorHandlerModule = __decorate([
        common_1.Module({
            controllers: [],
            providers: [
                {
                    provide: core_1.APP_FILTER,
                    useClass: all_exceptions_filter_1.AllExceptionsFilter,
                }
            ],
            exports: [],
        })
    ], SharedApiErrorHandlerModule);
    return SharedApiErrorHandlerModule;
}());
exports.SharedApiErrorHandlerModule = SharedApiErrorHandlerModule;
