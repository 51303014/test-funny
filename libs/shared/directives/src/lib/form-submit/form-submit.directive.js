"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormSubmitDirective = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FormSubmitDirective = /** @class */ (function () {
    function FormSubmitDirective(host) {
        this.host = host;
        this.submit$ = rxjs_1.fromEvent(this.element, 'submit').pipe(operators_1.shareReplay(1));
    }
    Object.defineProperty(FormSubmitDirective.prototype, "element", {
        get: function () {
            return this.host.nativeElement;
        },
        enumerable: false,
        configurable: true
    });
    FormSubmitDirective = __decorate([
        core_1.Directive({
            selector: 'form, [formGroup]'
        })
    ], FormSubmitDirective);
    return FormSubmitDirective;
}());
exports.FormSubmitDirective = FormSubmitDirective;
