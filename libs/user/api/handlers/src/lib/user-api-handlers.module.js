"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApiHandlersModule = void 0;
var common_1 = require("@nestjs/common");
var shared_1 = require("@realworld/user/api/shared");
var user_api_handlers_controller_1 = require("./user-api-handlers.controller");
var UserApiHandlersModule = /** @class */ (function () {
    function UserApiHandlersModule() {
    }
    UserApiHandlersModule = __decorate([
        common_1.Module({
            imports: [
                shared_1.UserApiSharedModule
            ],
            controllers: [user_api_handlers_controller_1.UserApiHandlersController],
        })
    ], UserApiHandlersModule);
    return UserApiHandlersModule;
}());
exports.UserApiHandlersModule = UserApiHandlersModule;
