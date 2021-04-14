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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlErrorsDirective = void 0;
var core_1 = require("@angular/core");
var until_destroy_1 = require("@ngneat/until-destroy");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var control_error_component_1 = require("./control-error.component");
var errors_1 = require("./errors");
var ControlErrorsDirective = /** @class */ (function () {
    function ControlErrorsDirective(control, errors, form, vcr, resolver) {
        this.control = control;
        this.errors = errors;
        this.form = form;
        this.vcr = vcr;
        this.resolver = resolver;
        this.submit$ = this.form ? this.form.submit$ : rxjs_1.EMPTY;
    }
    ControlErrorsDirective.prototype.ngOnInit = function () {
        var _this = this;
        rxjs_1.merge(this.submit$.pipe(operators_1.map(function (_) { return true; })), this.control.valueChanges.pipe(operators_1.map(function (_) { return (_this.control.touched || _this.control.dirty) ? true : false; }))).pipe(until_destroy_1.untilDestroyed(this))
            .subscribe(function (ok) {
            if (!ok) {
                return;
            }
            var controlErrors = _this.control.errors;
            if (controlErrors) {
                var firstKey = Object.keys(controlErrors)[0];
                var getError = _this.errors[firstKey];
                var text = getError ? getError(controlErrors[firstKey]) : 'Invalid field';
                _this.setError(text);
            }
            else {
                _this.setError(null);
            }
        });
    };
    ControlErrorsDirective.prototype.setError = function (text) {
        if (!this.ref) {
            var factory = this.resolver.resolveComponentFactory(control_error_component_1.ControlErrorComponent);
            this.ref = this.vcr.createComponent(factory);
        }
        this.ref.instance.text = text;
    };
    ControlErrorsDirective = __decorate([
        until_destroy_1.UntilDestroy(),
        core_1.Directive({
            selector: '[formControl], [formControlName]'
        }),
        __param(0, core_1.Self()),
        __param(1, core_1.Inject(errors_1.FORM_ERRORS)),
        __param(2, core_1.Optional()), __param(2, core_1.Host())
    ], ControlErrorsDirective);
    return ControlErrorsDirective;
}());
exports.ControlErrorsDirective = ControlErrorsDirective;
