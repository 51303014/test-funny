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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var skip_auth_1 = require("../skip-auth");
var JwtAuthGuard = /** @class */ (function (_super) {
    __extends(JwtAuthGuard, _super);
    function JwtAuthGuard(reflector) {
        var _this = _super.call(this) || this;
        _this.reflector = reflector;
        return _this;
    }
    JwtAuthGuard.prototype.canActivate = function (context) {
        var skipAuth = this.reflector.getAllAndOverride(skip_auth_1.SKIP_AUTH_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        return skipAuth || _super.prototype.canActivate.call(this, context);
    };
    JwtAuthGuard = __decorate([
        common_1.Injectable()
    ], JwtAuthGuard);
    return JwtAuthGuard;
}(passport_1.AuthGuard('jwt')));
exports.JwtAuthGuard = JwtAuthGuard;
