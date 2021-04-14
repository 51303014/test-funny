"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedApiCoreModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var config_1 = require("@realworld/shared/api/config");
var error_handler_1 = require("@realworld/shared/api/error-handler");
var validations_1 = require("@realworld/shared/api/validations");
var environment_1 = require("apps/api/src/environments/environment");
var SharedApiCoreModule = /** @class */ (function () {
    function SharedApiCoreModule() {
    }
    SharedApiCoreModule = __decorate([
        common_1.Module({
            imports: [
                config_1.SharedApiConfigModule.forRoot(environment_1.environment),
                typeorm_1.TypeOrmModule.forRoot(),
                error_handler_1.SharedApiErrorHandlerModule,
                validations_1.SharedApiValidationsModule,
            ],
            controllers: [],
            providers: [],
            exports: [],
        })
    ], SharedApiCoreModule);
    return SharedApiCoreModule;
}());
exports.SharedApiCoreModule = SharedApiCoreModule;
