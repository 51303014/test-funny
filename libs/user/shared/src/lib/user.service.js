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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var core_1 = require("@angular/core");
var foundation_1 = require("@realworld/shared/foundation");
var operators_1 = require("rxjs/operators");
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(config, http, userStorageUtil) {
        var _this = _super.call(this, config, http) || this;
        _this.http = http;
        _this.userStorageUtil = userStorageUtil;
        _this.updateAuthState(_this.userStorageUtil.userInfo);
        return _this;
    }
    Object.defineProperty(UserService.prototype, "endpoint", {
        get: function () {
            return 'users';
        },
        enumerable: false,
        configurable: true
    });
    UserService.prototype.logout = function () {
        this.userStorageUtil.clearUserData();
        this.updateAuthState(null);
    };
    UserService.prototype.updateAuthState = function (user) {
        this.userInfo = user;
        this.isAuth = !!user;
    };
    UserService.prototype.login = function (body, loading) {
        var _this = this;
        if (loading === void 0) { loading = true; }
        var url = this.getURLFromEndpoint({ endpoint: 'users/login' });
        this.setLoading(loading ? 'show' : 'not-show');
        var options = __assign({}, this.defaultOptions);
        return this.http.post(url, body, options)
            .pipe(operators_1.tap(function (res) {
            _this.updateAuthState(res.data);
            _this.userStorageUtil.setUserData(res);
        }));
    };
    UserService.prototype.register = function (data, loading) {
        var _this = this;
        if (loading === void 0) { loading = true; }
        var url = this.getURLFromEndpoint({ endpoint: 'users' });
        this.setLoading(loading ? 'show' : 'not-show');
        return this.http.post(url, data, this.defaultOptions)
            .pipe(operators_1.tap(function (res) {
            _this.updateAuthState(res.data);
            _this.userStorageUtil.setUserData(res);
        }));
    };
    UserService.prototype.update = function (id, body, loading) {
        var _this = this;
        if (loading === void 0) { loading = true; }
        var url = this.getURL();
        this.setLoading(loading ? 'show' : 'not-show');
        var options = __assign({}, this.defaultOptions);
        return this.http.put(url, body, options)
            .pipe(operators_1.tap(function (res) {
            _this.updateAuthState(res.data);
            _this.userStorageUtil.setUserData(res);
        }));
    };
    UserService.prototype.getCurrentUser = function (loading) {
        if (loading === void 0) { loading = true; }
        var url = this.getURLFromEndpoint({ endpoint: 'user' });
        this.setLoading(loading ? 'show' : 'not-show');
        return this.http.get(url, this.defaultOptions);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}(foundation_1.BaseDataService));
exports.UserService = UserService;
