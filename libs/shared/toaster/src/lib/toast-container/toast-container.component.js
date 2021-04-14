"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastContainerComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var toast_1 = require("../toast");
var notification_1 = require("@realworld/shared/notification");
var nestedTransition = animations_1.transition('* => *', [
    animations_1.query('@*', animations_1.animateChild(), { optional: true })
]);
var shrinkInTransition = animations_1.transition('void => *', [
    animations_1.style({ height: 0, opacity: 0, 'margin-top': 0 }),
    animations_1.animate(100, animations_1.style({ height: '*', opacity: 1, 'margin-top': '1rem' }))
]);
var shrinkOutTransition = animations_1.transition('* => void', [
    animations_1.style({ height: '!', opacity: 1, 'margin-top': '1rem' }),
    animations_1.animate(100, animations_1.style({ height: 0, opacity: 0, 'margin-top': 0 }))
]);
var progressTransition = animations_1.transition('void => *', [
    animations_1.style({ width: 0, opacity: 0 }),
    animations_1.animate('{{duration}}', animations_1.style({ width: '100%', opacity: 1 }))
]);
var ToastContainerComponent = /** @class */ (function () {
    function ToastContainerComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.tl = [];
        this.tc = [];
        this.tr = [];
        this.bl = [];
        this.bc = [];
        this.br = [];
        this.NotificationType = notification_1.NotificationType;
    }
    ToastContainerComponent.prototype.ngOnInit = function () {
    };
    ToastContainerComponent.prototype.add = function (config) {
        var _this = this;
        var collection = this._getCollection(config.position);
        if (config.preventDuplicates && this._isDuplicate(collection, config)) {
            return null;
        }
        var toast = new toast_1.Toast(config, function (t) { return _this._delete(collection, t); });
        collection.push(toast);
        this.changeDetector.detectChanges();
        return toast;
    };
    ToastContainerComponent.prototype._delete = function (collection, toast) {
        collection.splice(collection.indexOf(toast), 1);
        this.changeDetector.detectChanges();
    };
    ToastContainerComponent.prototype._isDuplicate = function (collection, config) {
        return collection.some(function (t) {
            return t.type === config.type
                && t.caption === config.caption
                && t.text === config.text;
        });
    };
    ToastContainerComponent.prototype._getCollection = function (position) {
        switch (position) {
            case 'top-left':
                return this.tl;
            case 'top-center':
                return this.tc;
            case 'top-right':
                return this.tr;
            case 'bottom-left':
                return this.bl;
            case 'bottom-center':
                return this.bc;
            default:
                return this.br;
        }
    };
    ToastContainerComponent = __decorate([
        core_1.Component({
            selector: 'realworld-toast-container',
            templateUrl: './toast-container.component.html',
            styleUrls: ['./toast-container.component.scss'],
            animations: [
                animations_1.trigger('nested', [nestedTransition]),
                animations_1.trigger('shrink', [shrinkInTransition, shrinkOutTransition]),
                animations_1.trigger('progress', [progressTransition]),
            ],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        })
    ], ToastContainerComponent);
    return ToastContainerComponent;
}());
exports.ToastContainerComponent = ToastContainerComponent;
