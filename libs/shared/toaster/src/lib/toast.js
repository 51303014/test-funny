"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
var rxjs_1 = require("rxjs");
var Toast = /** @class */ (function () {
    function Toast(config, closeFunction) {
        this._onClose = new rxjs_1.Subject();
        this.autoClose = config.autoClose;
        this.duration = config.duration > 0 ? config.duration : 0;
        this.text = config.text;
        this.caption = config.caption;
        this.type = config.type;
        this.component = config.component;
        this.closeFunction = closeFunction;
        this._setTimeout();
    }
    Object.defineProperty(Toast.prototype, "onClose", {
        get: function () {
            return this._onClose.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    Toast.prototype.close = function (result) {
        if (!this._onClose.closed) {
            this._onClose.next(result);
            this._onClose.complete();
        }
        this.closeFunction(this);
        this._clearTimeout();
    };
    Toast.prototype._setTimeout = function () {
        var _this = this;
        if (this.autoClose && this.duration > 0) {
            this.timeoutId = setTimeout(function () { return _this.close(); }, this.duration);
        }
    };
    Toast.prototype._clearTimeout = function () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    };
    return Toast;
}());
exports.Toast = Toast;
