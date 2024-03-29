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
exports.ConfigurationService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(configs) {
        this.configs = new rxjs_1.ReplaySubject(1);
        this.configs$ = this.configs.asObservable();
        if (!configs) {
            throw new Error('Failed to load app configs');
        }
        this.configs.next(configs);
    }
    ConfigurationService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional())
    ], ConfigurationService);
    return ConfigurationService;
}());
exports.ConfigurationService = ConfigurationService;
