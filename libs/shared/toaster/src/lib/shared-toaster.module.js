"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedToasterModule = exports.InitToastFactory = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var toast_container_component_1 = require("./toast-container/toast-container.component");
var toast_container_service_1 = require("./toast-container.service");
var toaster_1 = require("./toaster");
var toast_notifications_config_1 = require("./toast-config/toast-notifications.config");
function InitToastFactory(toast) {
    return function () {
        return toast;
    };
}
exports.InitToastFactory = InitToastFactory;
var SharedToasterModule = /** @class */ (function () {
    function SharedToasterModule() {
    }
    SharedToasterModule_1 = SharedToasterModule;
    SharedToasterModule.initializeConfig = function (config) {
        return {
            ngModule: SharedToasterModule_1,
            providers: [{
                    provide: toast_notifications_config_1.TOAST_NOTIFICATIONS_CONFIG, useValue: config
                }]
        };
    };
    var SharedToasterModule_1;
    SharedToasterModule = SharedToasterModule_1 = __decorate([
        core_1.NgModule({
            declarations: [toast_container_component_1.ToastContainerComponent],
            entryComponents: [toast_container_component_1.ToastContainerComponent],
            imports: [
                common_1.CommonModule
            ],
            providers: [
                toast_container_service_1.ToastContainerService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: InitToastFactory,
                    deps: [toaster_1.Toaster],
                    multi: true
                }
            ]
        })
    ], SharedToasterModule);
    return SharedToasterModule;
}());
exports.SharedToasterModule = SharedToasterModule;
