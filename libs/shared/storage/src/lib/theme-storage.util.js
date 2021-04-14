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
exports.ThemeStorageUtil = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@ng-web-apis/common");
var constants_1 = require("./constants");
var storage_util_1 = require("./storage.util");
var ThemeStorageUtil = /** @class */ (function (_super) {
    __extends(ThemeStorageUtil, _super);
    function ThemeStorageUtil(localStorage) {
        var _this = _super.call(this, localStorage) || this;
        _this.localStorage = localStorage;
        return _this;
    }
    Object.defineProperty(ThemeStorageUtil.prototype, "theme", {
        get: function () {
            return this.getItem(constants_1.STORAGE_KEY.THEME);
        },
        enumerable: false,
        configurable: true
    });
    ThemeStorageUtil.prototype.setTheme = function (theme) {
        this.setItem(constants_1.STORAGE_KEY.THEME, theme);
    };
    ThemeStorageUtil.prototype.clearTheme = function () {
        this.removeItem(constants_1.STORAGE_KEY.THEME);
    };
    ThemeStorageUtil = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(0, core_1.Inject(common_1.LOCAL_STORAGE))
    ], ThemeStorageUtil);
    return ThemeStorageUtil;
}(storage_util_1.StorageUtil));
exports.ThemeStorageUtil = ThemeStorageUtil;
