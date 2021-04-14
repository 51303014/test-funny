"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitSpinnerFactory = void 0;
function InitSpinnerFactory(spinner) {
    // console.info("InitSpinner")
    return function () {
        return spinner;
    };
}
exports.InitSpinnerFactory = InitSpinnerFactory;
