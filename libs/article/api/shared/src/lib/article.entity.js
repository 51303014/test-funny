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
exports.Article = void 0;
var foundation_1 = require("@realworld/shared/api/foundation");
var typeorm_1 = require("typeorm");
var Article = /** @class */ (function (_super) {
    __extends(Article, _super);
    function Article() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column({ unique: true })
    ], Article.prototype, "slug", void 0);
    __decorate([
        typeorm_1.Column()
    ], Article.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column()
    ], Article.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column()
    ], Article.prototype, "body", void 0);
    __decorate([
        typeorm_1.Column()
    ], Article.prototype, "authorId", void 0);
    __decorate([
        typeorm_1.Column("json", { array: true })
    ], Article.prototype, "tagList", void 0);
    Article = __decorate([
        typeorm_1.Entity()
    ], Article);
    return Article;
}(foundation_1.BaseEntity));
exports.Article = Article;
