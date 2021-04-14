"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleApiSharedModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var article_entity_1 = require("./article.entity");
var article_service_1 = require("./article.service");
var comment_service_1 = require("./comment.service");
var favorite_entity_1 = require("./favorite.entity");
var favorite_service_1 = require("./favorite.service");
var tag_entity_1 = require("./tag.entity");
var tag_service_1 = require("./tag.service");
var comment_entity_1 = require("./comment.entity");
var ArticleApiSharedModule = /** @class */ (function () {
    function ArticleApiSharedModule() {
    }
    ArticleApiSharedModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([article_entity_1.Article, comment_entity_1.Comment, tag_entity_1.Tag, favorite_entity_1.Favorite]),
            ],
            providers: [article_service_1.ArticleService, comment_service_1.CommentService, tag_service_1.TagService, favorite_service_1.FavoriteService],
            exports: [article_service_1.ArticleService, comment_service_1.CommentService, tag_service_1.TagService, favorite_service_1.FavoriteService],
        })
    ], ArticleApiSharedModule);
    return ArticleApiSharedModule;
}());
exports.ArticleApiSharedModule = ArticleApiSharedModule;
