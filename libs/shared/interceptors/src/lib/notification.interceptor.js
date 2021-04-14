"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationInterceptor = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var client_server_1 = require("@realworld/shared/client-server");
var notification_1 = require("@realworld/shared/notification");
var operators_1 = require("rxjs/operators");
var NotificationInterceptor = /** @class */ (function () {
    function NotificationInterceptor(notificationService) {
        this.notificationService = notificationService;
    }
    NotificationInterceptor.prototype.intercept = function (request, next) {
        // console.info('NotificationInterceptor')
        var _this = this;
        return next.handle(request).pipe(operators_1.tap(function (event) {
            if (event instanceof http_1.HttpResponse) {
                _this.notify(request, event);
            }
        }));
    };
    NotificationInterceptor.prototype.notify = function (req, res) {
        var noti = this.getNotification(req, res);
        if (!noti || !noti.message) {
            return;
        }
        switch (noti.type) {
            case notification_1.NotificationType.sussess:
                this.notificationService.showSuccess(noti.message);
                break;
            case notification_1.NotificationType.info:
                this.notificationService.showInfo(noti.message);
                break;
            case notification_1.NotificationType.warning:
                this.notificationService.showWarning(noti.message);
                break;
            case notification_1.NotificationType.error:
                this.notificationService.showError(noti.message);
                break;
        }
    };
    NotificationInterceptor.prototype.getNotification = function (req, res) {
        var _a, _b, _c;
        // errors will be handled in error intercepter
        if (res.ok) {
            switch (req.method) {
                case client_server_1.HTTP_METHOD.DELETE:
                    return {
                        type: notification_1.NotificationType.sussess,
                        message: (_a = res === null || res === void 0 ? void 0 : res.body) === null || _a === void 0 ? void 0 : _a.message
                    };
                case client_server_1.HTTP_METHOD.POST:
                    return {
                        type: notification_1.NotificationType.sussess,
                        message: (_b = res === null || res === void 0 ? void 0 : res.body) === null || _b === void 0 ? void 0 : _b.message
                    };
                case client_server_1.HTTP_METHOD.PUT:
                case client_server_1.HTTP_METHOD.PATCH:
                    return {
                        type: notification_1.NotificationType.sussess,
                        message: (_c = res === null || res === void 0 ? void 0 : res.body) === null || _c === void 0 ? void 0 : _c.message
                    };
                default:
                    return null;
            }
        }
    };
    NotificationInterceptor = __decorate([
        core_1.Injectable()
    ], NotificationInterceptor);
    return NotificationInterceptor;
}());
exports.NotificationInterceptor = NotificationInterceptor;
