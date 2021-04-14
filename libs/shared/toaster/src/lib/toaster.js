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
exports.Toaster = void 0;
var core_1 = require("@angular/core");
var toast_notifications_config_1 = require("./toast-config/toast-notifications.config");
var DEFAULT_CONFIG = {
    autoClose: true,
    duration: 8000,
    type: 1,
    position: 'top-right',
};
var Toaster = /** @class */ (function () {
    function Toaster(config, containerService, noti) {
        var _this = this;
        this.config = config;
        this.containerService = containerService;
        this.noti = noti;
        this.noti.notification$.subscribe(function (message) {
            _this.open({
                caption: message.message,
                type: message.type
            });
        });
    }
    Toaster.prototype.open = function (config, componentConfig) {
        if (typeof config === 'string') {
            config = __assign({ text: config }, componentConfig);
        }
        if (config instanceof core_1.Type) {
            config = __assign(__assign({}, componentConfig), { component: config });
        }
        config = __assign(__assign(__assign({}, DEFAULT_CONFIG), this.config), config);
        var ref = this.containerService.ref.instance;
        return ref.add(config);
    };
    Toaster = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(0, core_1.Inject(toast_notifications_config_1.TOAST_NOTIFICATIONS_CONFIG))
    ], Toaster);
    return Toaster;
}());
exports.Toaster = Toaster;
