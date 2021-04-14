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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogWriter = void 0;
var core_1 = require("@angular/core");
var LogWriter = /** @class */ (function () {
    function LogWriter(loggingService, configuration, userStorageUtil) {
        var _this = this;
        this.userStorageUtil = userStorageUtil;
        if (configuration) {
            configuration.configs$.subscribe(function (configs) {
                _this.handleConfigs(configs);
                loggingService.logEntries$.subscribe(function (log) { return _this.handleLogEntry(log); });
            });
        }
    }
    Object.defineProperty(LogWriter.prototype, "userId", {
        get: function () {
            var _a, _b;
            if ((_b = (_a = this.userStorageUtil) === null || _a === void 0 ? void 0 : _a.userInfo) === null || _b === void 0 ? void 0 : _b.id) {
                return this.userStorageUtil.userInfo.id;
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Use this method to execute the write process for the
     * specified [Log Entry] item.
     *
     * Using the [template method] design pattern.
     */
    LogWriter.prototype.execute = function () {
        this.preWritting();
        if (this.validateEntry()) {
            this.write();
        }
        this.finish();
    };
    /**
     * Use to perform an setup or configuration of the [writer].
     * The [setup] method runs on all executions of the writer - and
     * is called before the [write] method.
     */
    LogWriter.prototype.preWritting = function () { };
    /**
     * Use to validate the [log entry] before attempting to write
     * using the specified [log writer].
     *
     * Returns a [false] boolean to indicate the item is not valid.
     */
    LogWriter.prototype.validateEntry = function () {
        // no validate for now
        return true;
    };
    /**
     * Use to finish the process or clean-up any resources.
     */
    LogWriter.prototype.finish = function () { };
    LogWriter.prototype.handleConfigs = function (configs) {
        if (!configs || !configs.logging) {
            return;
        }
        this.applicationName = configs.applicationName;
        this.debug = configs.debug;
        this.configs = configs.logging;
    };
    LogWriter.prototype.handleLogEntry = function (logEntry) {
        this.targetEntry = this.getLoggingData(logEntry);
        this.execute();
    };
    LogWriter.prototype.getLoggingData = function (data) {
        return __assign({ timestamp: new Date().getTime(), applicationName: this.applicationName, level: data.level, userId: this.userId }, data);
    };
    LogWriter = __decorate([
        __param(1, core_1.Optional())
    ], LogWriter);
    return LogWriter;
}());
exports.LogWriter = LogWriter;
