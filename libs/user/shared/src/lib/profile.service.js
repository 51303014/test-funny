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
exports.ProfileService = void 0;
var core_1 = require("@angular/core");
var foundation_1 = require("@realworld/shared/foundation");
var ProfileService = /** @class */ (function (_super) {
    __extends(ProfileService, _super);
    function ProfileService(config, http) {
        var _this = _super.call(this, config, http) || this;
        _this.http = http;
        return _this;
    }
    Object.defineProperty(ProfileService.prototype, "endpoint", {
        get: function () {
            return 'profiles';
        },
        enumerable: false,
        configurable: true
    });
    ProfileService.prototype.getProfile = function (username, loading) {
        if (loading === void 0) { loading = true; }
        var url = this.getURL(username);
        this.setLoading(loading ? 'show' : 'not-show');
        return this.http.get(url, this.defaultOptions);
    };
    ProfileService.prototype.followAUser = function (username, loading) {
        if (loading === void 0) { loading = true; }
        var url = this.getURLFromEndpoint({ endpoint: "profiles/" + username + "/follow" });
        this.setLoading(loading ? 'show' : 'not-show');
        var options = __assign({}, this.defaultOptions);
        return this.http.post(url, null, options);
    };
    ProfileService.prototype.unfollowAUser = function (username, loading) {
        if (loading === void 0) { loading = true; }
        var url = this.getURLFromEndpoint({ endpoint: "profiles/" + username + "/follow" });
        this.setLoading(loading ? 'show' : 'not-show');
        var options = __assign({}, this.defaultOptions);
        return this.http.delete(url, options);
    };
    ProfileService = __decorate([
        core_1.Injectable()
    ], ProfileService);
    return ProfileService;
}(foundation_1.BaseDataService));
exports.ProfileService = ProfileService;
