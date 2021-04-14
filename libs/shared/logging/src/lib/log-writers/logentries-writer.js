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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogentriesWriter = void 0;
var core_1 = require("@angular/core");
var Logger = __importStar(require("r7insight_js"));
var log_writer_1 = require("./log-writer");
/**
 * Use this writer to log information to the logentries server.
 */
var LogentriesWriter = /** @class */ (function (_super) {
    __extends(LogentriesWriter, _super);
    function LogentriesWriter(loggingService, configuration, userStorageUtil) {
        var _this = _super.call(this, loggingService, configuration, userStorageUtil) || this;
        // console.info('Init LogentriesWriter')
        if (configuration) {
            configuration.configs$.subscribe(function (configs) {
                _this.initLogentries();
            });
        }
        return _this;
    }
    /**
     * Implementation of the abstract method. This will perform the
     * actual `write` action for the specified writer.
     */
    LogentriesWriter.prototype.write = function () {
        if (!this.configs.sendToCentralizedServer || !this.configs.logentriesToken) {
            return;
        }
        switch (this.targetEntry.level) {
            case 'info':
                Logger.info(this.formatEntry(this.targetEntry), this.targetEntry);
                break;
            case 'warn':
                Logger.warn(this.formatEntry(this.targetEntry), this.targetEntry);
                break;
            case 'error':
                Logger.error(this.formatEntry(this.targetEntry), this.targetEntry);
                break;
            case 'debug':
                if (this.debug) {
                    Logger.info(this.formatEntry(this.targetEntry), this.targetEntry);
                }
                break;
            default:
                break;
        }
    };
    /**
     * Use this function to format a specified [Log Entry] item. This should be moved
     * to a specific [formatter] service that can be injected into the specified
     * writer.
     * @param logEntry
     */
    LogentriesWriter.prototype.formatEntry = function (logEntry) {
        return "\n            timestamp: " + new Date(logEntry.timestamp).toISOString() + "; \n            application: " + logEntry.application + "; \n            level: " + logEntry.level + "; \n            message: " + logEntry.message + "; \n            action: " + logEntry.action + "; \n            userId: " + logEntry.userId + "; \n            errorCode: " + logEntry.errorCode + "; \n            errorName: " + logEntry.errorName + "; \n        ";
    };
    LogentriesWriter.prototype.initLogentries = function () {
        if (this.configs.sendToCentralizedServer && this.configs.logentriesToken) {
            Logger.init({
                token: this.configs.logentriesToken,
                region: 'eu'
            });
        }
    };
    LogentriesWriter = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(1, core_1.Optional())
    ], LogentriesWriter);
    return LogentriesWriter;
}(log_writer_1.LogWriter));
exports.LogentriesWriter = LogentriesWriter;
