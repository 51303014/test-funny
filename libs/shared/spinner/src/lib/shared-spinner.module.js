"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedSpinnerModule = void 0;
var overlay_1 = require("@angular/cdk/overlay");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var nb_spinner_component_1 = require("./nb-spinner/nb-spinner.component");
var i_spinner_service_1 = require("./public/i-spinner.service");
var init_spinner_factory_1 = require("./public/init-spinner.factory");
var SharedSpinnerModule = /** @class */ (function () {
    function SharedSpinnerModule() {
    }
    SharedSpinnerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, overlay_1.OverlayModule],
            declarations: [nb_spinner_component_1.NbSpinnerComponent],
            entryComponents: [nb_spinner_component_1.NbSpinnerComponent],
            exports: [],
            providers: [
                {
                    provide: core_1.APP_INITIALIZER,
                    deps: [i_spinner_service_1.ISpinnerService],
                    multi: true,
                    useFactory: init_spinner_factory_1.InitSpinnerFactory
                },
            ]
        })
    ], SharedSpinnerModule);
    return SharedSpinnerModule;
}());
exports.SharedSpinnerModule = SharedSpinnerModule;
