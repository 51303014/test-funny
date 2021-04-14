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
exports.ConsoleWriter = void 0;
var core_1 = require("@angular/core");
var log_writer_1 = require("./log-writer");
/**
 * Use this writer to log information to the browser console.
 */
var ConsoleWriter = /** @class */ (function (_super) {
    __extends(ConsoleWriter, _super);
    function ConsoleWriter(loggingService, configuration, userStorageUtil) {
        return _super.call(this, loggingService, configuration, userStorageUtil) || this;
        // console.info('Init ConsoleWriter')
    }
    /**
     * Implementation of the abstract method. This will perform the
     * actual `write` action for the specified writer.
     */
    ConsoleWriter.prototype.write = function () {
        if (!this.configs.sendToConsole) {
            return;
        }
        switch (this.targetEntry.level) {
            case 'info':
                console.info(this.targetEntry);
                break;
            case 'warn':
                console.warn(this.targetEntry);
                break;
            case 'error':
                console.error(this.targetEntry);
                break;
            case 'debug':
                if (this.debug) {
                    console.info(this.targetEntry);
                }
                break;
            default:
                break;
        }
    };
    ConsoleWriter = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(1, core_1.Optional())
    ], ConsoleWriter);
    return ConsoleWriter;
}(log_writer_1.LogWriter));
exports.ConsoleWriter = ConsoleWriter;
