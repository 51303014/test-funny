"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlErrorsDirectiveModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var control_errors_directive_1 = require("./control-errors.directive");
var control_error_component_1 = require("./control-error.component");
var ControlErrorsDirectiveModule = /** @class */ (function () {
    function ControlErrorsDirectiveModule() {
    }
    ControlErrorsDirectiveModule = __decorate([
        core_1.NgModule({
            declarations: [
                control_errors_directive_1.ControlErrorsDirective,
                control_error_component_1.ControlErrorComponent
            ],
            exports: [control_errors_directive_1.ControlErrorsDirective],
            imports: [
                common_1.CommonModule
            ]
        })
    ], ControlErrorsDirectiveModule);
    return ControlErrorsDirectiveModule;
}());
exports.ControlErrorsDirectiveModule = ControlErrorsDirectiveModule;
