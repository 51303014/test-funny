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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedCoreModule = void 0;
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var configuration_1 = require("@realworld/shared/configuration");
var error_handler_1 = require("@realworld/shared/error-handler");
var interceptors_1 = require("@realworld/shared/interceptors");
var logging_1 = require("@realworld/shared/logging");
var spinner_1 = require("@realworld/shared/spinner");
var toaster_1 = require("@realworld/shared/toaster");
var config = {
    duration: 5000
};
var SharedCoreModule = /** @class */ (function () {
    function SharedCoreModule(parentModule) {
        if (parentModule) {
            throw new Error("CoreModule is already loaded. Import it in the AppModule only.");
        }
    }
    SharedCoreModule_1 = SharedCoreModule;
    SharedCoreModule.forRoot = function (configs) {
        return {
            ngModule: SharedCoreModule_1,
            providers: __spreadArrays(configuration_1.SharedConfigurationModule.forRoot(configs).providers)
        };
    };
    var SharedCoreModule_1;
    SharedCoreModule = SharedCoreModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                spinner_1.SharedSpinnerModule,
                error_handler_1.SharedErrorHandlerModule,
                logging_1.SharedLoggingModule,
                interceptors_1.SharedInterceptorsModule,
                toaster_1.SharedToasterModule.initializeConfig(config),
            ],
            providers: [
                common_1.DatePipe,
                common_1.CurrencyPipe,
                common_1.DecimalPipe,
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf())
    ], SharedCoreModule);
    return SharedCoreModule;
}());
exports.SharedCoreModule = SharedCoreModule;
