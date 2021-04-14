"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedConfigurationModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var i_configuration_1 = require("./i-configuration");
var SharedConfigurationModule = /** @class */ (function () {
    function SharedConfigurationModule() {
    }
    SharedConfigurationModule_1 = SharedConfigurationModule;
    SharedConfigurationModule.forRoot = function (configs) {
        return {
            ngModule: SharedConfigurationModule_1,
            providers: [{
                    provide: i_configuration_1.IConfiguration,
                    useValue: configs
                }]
        };
    };
    var SharedConfigurationModule_1;
    SharedConfigurationModule = SharedConfigurationModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            providers: []
        })
    ], SharedConfigurationModule);
    return SharedConfigurationModule;
}());
exports.SharedConfigurationModule = SharedConfigurationModule;
