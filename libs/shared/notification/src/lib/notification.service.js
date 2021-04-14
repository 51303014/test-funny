"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
var core_1 = require("@angular/core");
var i_notification_1 = require("./i-notification");
var rxjs_1 = require("rxjs");
var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.notification = new rxjs_1.Subject();
        this.notification$ = this.notification.asObservable();
    }
    NotificationService.prototype.showError = function (m, translate) {
        if (translate === void 0) { translate = true; }
        this.notification.next({ type: i_notification_1.NotificationType.error, message: m });
    };
    NotificationService.prototype.showSuccess = function (m, translate) {
        if (translate === void 0) { translate = true; }
        this.notification.next({ type: i_notification_1.NotificationType.sussess, message: m });
    };
    NotificationService.prototype.showInfo = function (m, translate) {
        if (translate === void 0) { translate = true; }
        this.notification.next({ type: i_notification_1.NotificationType.info, message: m });
    };
    NotificationService.prototype.showWarning = function (m, translate) {
        if (translate === void 0) { translate = true; }
        this.notification.next({ type: i_notification_1.NotificationType.warning, message: m });
    };
    NotificationService = __decorate([
        core_1.Injectable()
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
