"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NbSpinnerComponent = void 0;
var core_1 = require("@angular/core");
var NbSpinnerComponent = /** @class */ (function () {
    function NbSpinnerComponent() {
    }
    NbSpinnerComponent.prototype.ngOnInit = function () {
    };
    NbSpinnerComponent = __decorate([
        core_1.Component({
            selector: 'nb-spinner',
            template: "\n    <div class=\"spinner-wrapper\">\n        <div class=\"spinner-border text-primary\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n        </div>\n    </div>",
            styles: ["\n    .spinner-wrapper {\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        top: 0;\n        left: 0;\n        background-color: rgba(255, 255, 255, 0.5);\n        z-index: 998;\n    }\n    "]
        })
    ], NbSpinnerComponent);
    return NbSpinnerComponent;
}());
exports.NbSpinnerComponent = NbSpinnerComponent;
