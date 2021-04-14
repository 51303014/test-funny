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
exports.IProfile = exports.IUpdateUser = exports.IUser = exports.INewUser = exports.ILoginUser = void 0;
var class_validator_1 = require("class-validator");
var client_server_1 = require("@realworld/shared/client-server");
// Login
var ILoginUser = /** @class */ (function () {
    function ILoginUser() {
    }
    __decorate([
        class_validator_1.IsEmail()
    ], ILoginUser.prototype, "email", void 0);
    __decorate([
        class_validator_1.IsNotEmpty()
    ], ILoginUser.prototype, "password", void 0);
    return ILoginUser;
}());
exports.ILoginUser = ILoginUser;
// Register
var INewUser = /** @class */ (function () {
    function INewUser() {
    }
    __decorate([
        class_validator_1.MaxLength(60)
    ], INewUser.prototype, "username", void 0);
    __decorate([
        class_validator_1.IsEmail(),
        class_validator_1.MaxLength(60)
    ], INewUser.prototype, "email", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.MaxLength(200)
    ], INewUser.prototype, "password", void 0);
    return INewUser;
}());
exports.INewUser = INewUser;
// User response
var IUser = /** @class */ (function (_super) {
    __extends(IUser, _super);
    function IUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IUser;
}(client_server_1.IBase));
exports.IUser = IUser;
// Update user
var IUpdateUser = /** @class */ (function () {
    function IUpdateUser() {
    }
    __decorate([
        class_validator_1.MaxLength(60)
    ], IUpdateUser.prototype, "username", void 0);
    __decorate([
        class_validator_1.IsEmail(),
        class_validator_1.MaxLength(60)
    ], IUpdateUser.prototype, "email", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.MaxLength(255)
    ], IUpdateUser.prototype, "password", void 0);
    __decorate([
        class_validator_1.MaxLength(1000)
    ], IUpdateUser.prototype, "bio", void 0);
    __decorate([
        class_validator_1.IsUrl()
    ], IUpdateUser.prototype, "image", void 0);
    return IUpdateUser;
}());
exports.IUpdateUser = IUpdateUser;
// Profile
var IProfile = /** @class */ (function (_super) {
    __extends(IProfile, _super);
    function IProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IProfile;
}(client_server_1.IBase));
exports.IProfile = IProfile;
