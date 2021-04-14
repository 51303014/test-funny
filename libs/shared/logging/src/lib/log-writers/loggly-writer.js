"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.LogglyWriter = void 0;
var core_1 = require("@angular/core");
// import { LogglyService } from 'ngx-loggly-logger'; // todo: uncomment this line in production
var log_writer_1 = require("./log-writer");
/**
 * Use this writer to log information to the logentries server.
 */
var LogglyWriter = /** @class */ (function (_super) {
    __extends(LogglyWriter, _super);
    function LogglyWriter(loggingService, 
    // private loggly: LogglyService, // todo: uncomment this line in production
    configuration, userStorageUtil) {
        var _this = _super.call(this, loggingService, configuration, userStorageUtil) || this;
        _this.loggingService = loggingService;
        return _this;
        // console.info('Init LogentriesWriter')
    }
    LogglyWriter.prototype.preWritting = function () {
        if (!this.configs.sendToCentralizedServer || !this.configs.logglyToken) {
            return;
        }
        try {
            this.loggly.push({
                logglyKey: this.configs.logglyToken,
                sendConsoleErrors: this.configs.sendToConsole,
            });
            if (this.targetEntry.tags && this.targetEntry.tags.length > 0) {
                var tags = this.targetEntry.tags.join(',');
                this.loggly.push({ tag: tags });
            }
        }
        catch (error) {
            var message = this.targetEntry.application + ".LogglyWriter: " + __assign({}, error);
            console.error(message);
        }
    };
    /**
     * Implementation of the abstract method. This will perform the
     * actual `write` action for the specified writer.
     */
    LogglyWriter.prototype.write = function () {
        if (!this.configs.sendToCentralizedServer || !this.configs.logglyToken) {
            return;
        }
        var log = this.formatEntry(this.targetEntry);
        if (this.targetEntry.level === 'debug') {
            if (this.debug) {
                this.loggly.push(log);
            }
        }
        else {
            this.loggly.push(log);
        }
    };
    /**
     * Use this function to format a specified [Log Entry] item. This should be moved
     * to a specific [formatter] service that can be injected into the specified
     * writer.
     * @param logEntry
     */
    LogglyWriter.prototype.formatEntry = function (logEntry) {
        return "\n            timestamp: " + new Date(logEntry.timestamp).toISOString() + "; \n            application: " + logEntry.application + "; \n            level: " + logEntry.level + "; \n            message: " + logEntry.message + "; \n            action: " + logEntry.action + "; \n            userId: " + logEntry.userId + "; \n            errorCode: " + logEntry.errorCode + "; \n            errorName: " + logEntry.errorName + "; \n            stack: " + logEntry.stack + "; \n        ";
    };
    LogglyWriter = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(1, core_1.Optional())
    ], LogglyWriter);
    return LogglyWriter;
}(log_writer_1.LogWriter));
exports.LogglyWriter = LogglyWriter;
