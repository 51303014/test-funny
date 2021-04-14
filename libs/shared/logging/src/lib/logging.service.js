"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var LoggingService = /** @class */ (function () {
    function LoggingService() {
        this.logEntriesSubject = new rxjs_1.ReplaySubject(1);
        this.logEntries$ = this.logEntriesSubject.asObservable();
        // console.info('Init LoggingService')
    }
    LoggingService.prototype.info = function (data) {
        this.log(__assign({ level: 'info' }, data));
    };
    LoggingService.prototype.warn = function (data) {
        this.log(__assign({ level: 'warn' }, data));
    };
    LoggingService.prototype.error = function (data) {
        this.log(__assign({ level: 'error' }, data));
    };
    LoggingService.prototype.debug = function (data) {
        this.log(__assign({ level: 'debug' }, data));
    };
    LoggingService.prototype.log = function (data) {
        this.logEntriesSubject.next(data);
    };
    LoggingService = __decorate([
        core_1.Injectable()
    ], LoggingService);
    return LoggingService;
}());
exports.LoggingService = LoggingService;
