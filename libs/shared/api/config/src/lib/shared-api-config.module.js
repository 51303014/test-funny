"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedApiConfigModule = void 0;
var common_1 = require("@nestjs/common");
var api_config_service_1 = require("./api-config.service");
var i_api_config_1 = require("./i-api-config");
var SharedApiConfigModule = /** @class */ (function () {
    function SharedApiConfigModule() {
    }
    SharedApiConfigModule_1 = SharedApiConfigModule;
    SharedApiConfigModule.forRoot = function (configs) {
        return {
            module: SharedApiConfigModule_1,
            providers: [
                {
                    provide: i_api_config_1.IApiConfig,
                    useValue: configs
                }
            ]
        };
    };
    var SharedApiConfigModule_1;
    SharedApiConfigModule = SharedApiConfigModule_1 = __decorate([
        common_1.Global(),
        common_1.Module({
            controllers: [],
            providers: [api_config_service_1.ApiConfigService],
            exports: [api_config_service_1.ApiConfigService],
        })
    ], SharedApiConfigModule);
    return SharedApiConfigModule;
}());
exports.SharedApiConfigModule = SharedApiConfigModule;
