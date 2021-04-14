"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitLoggingAndWriters = void 0;
function InitLoggingAndWriters(loggingService, consoleWriter, logentriesWriter) {
    // console.info("InitLoggingAndWriters")
    return function () {
        return consoleWriter;
    };
}
exports.InitLoggingAndWriters = InitLoggingAndWriters;
