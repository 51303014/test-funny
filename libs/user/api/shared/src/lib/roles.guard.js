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
exports.RolesGuard = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var roles_1 = require("./roles");
var RolesGuard = /** @class */ (function (_super) {
    __extends(RolesGuard, _super);
    function RolesGuard(reflector) {
        var _this = _super.call(this) || this;
        _this.reflector = reflector;
        return _this;
    }
    RolesGuard.prototype.canActivate = function (context) {
        var acceptedRoles = this.reflector.get(roles_1.ROLES_KEY, context.getHandler());
        if (!acceptedRoles) {
            return true;
        }
        var request = context.switchToHttp().getRequest();
        if (!request.user) {
            return true;
        }
        var userRole = request.user.role;
        return acceptedRoles.includes(userRole);
    };
    RolesGuard = __decorate([
        common_1.Injectable()
    ], RolesGuard);
    return RolesGuard;
}(passport_1.AuthGuard('jwt')));
exports.RolesGuard = RolesGuard;
