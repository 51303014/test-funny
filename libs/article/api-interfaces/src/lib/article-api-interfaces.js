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
exports.INewComment = exports.IComment = exports.IUpdateArticle = exports.INewArticle = exports.IArticle = void 0;
var client_server_1 = require("@realworld/shared/client-server");
var class_validator_1 = require("class-validator");
var IArticle = /** @class */ (function (_super) {
    __extends(IArticle, _super);
    function IArticle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IArticle;
}(client_server_1.IBase));
exports.IArticle = IArticle;
var INewArticle = /** @class */ (function () {
    function INewArticle() {
    }
    __decorate([
        class_validator_1.Length(1, 200)
    ], INewArticle.prototype, "title", void 0);
    __decorate([
        class_validator_1.Length(1, 255)
    ], INewArticle.prototype, "description", void 0);
    __decorate([
        class_validator_1.Length(1, 2000)
    ], INewArticle.prototype, "body", void 0);
    return INewArticle;
}());
exports.INewArticle = INewArticle;
var IUpdateArticle = /** @class */ (function () {
    function IUpdateArticle() {
    }
    __decorate([
        class_validator_1.Length(1, 200)
    ], IUpdateArticle.prototype, "title", void 0);
    __decorate([
        class_validator_1.Length(1, 255)
    ], IUpdateArticle.prototype, "description", void 0);
    __decorate([
        class_validator_1.Length(1, 2000)
    ], IUpdateArticle.prototype, "body", void 0);
    return IUpdateArticle;
}());
exports.IUpdateArticle = IUpdateArticle;
var IComment = /** @class */ (function (_super) {
    __extends(IComment, _super);
    function IComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IComment;
}(client_server_1.IBase));
exports.IComment = IComment;
var INewComment = /** @class */ (function () {
    function INewComment() {
    }
    __decorate([
        class_validator_1.Length(1, 1000)
    ], INewComment.prototype, "body", void 0);
    return INewComment;
}());
exports.INewComment = INewComment;
