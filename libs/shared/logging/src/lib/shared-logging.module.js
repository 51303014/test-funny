"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedLoggingModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var i_logging_service_1 = require("./i-logging.service");
var init_logging_and_writers_factory_1 = require("./init-logging-and-writers.factory");
var console_writer_1 = require("./log-writers/console-writer");
var logentries_writer_1 = require("./log-writers/logentries-writer");
var SharedLoggingModule = /** @class */ (function () {
    function SharedLoggingModule() {
    }
    SharedLoggingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            providers: [
                {
                    provide: core_1.APP_INITIALIZER,
                    deps: [i_logging_service_1.ILoggingService, console_writer_1.ConsoleWriter, logentries_writer_1.LogentriesWriter],
                    multi: true,
                    useFactory: init_logging_and_writers_factory_1.InitLoggingAndWriters
                },
            ]
        })
    ], SharedLoggingModule);
    return SharedLoggingModule;
}());
exports.SharedLoggingModule = SharedLoggingModule;
