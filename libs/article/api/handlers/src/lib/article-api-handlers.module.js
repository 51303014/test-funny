"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleApiHandlersModule = void 0;
var common_1 = require("@nestjs/common");
var shared_1 = require("@realworld/article/api/shared");
var shared_2 = require("@realworld/user/api/shared");
var article_api_handlers_controller_1 = require("./article-api-handlers.controller");
var ArticleApiHandlersModule = /** @class */ (function () {
    function ArticleApiHandlersModule() {
    }
    ArticleApiHandlersModule = __decorate([
        common_1.Module({
            controllers: [article_api_handlers_controller_1.ArticleApiHandlersController],
            providers: [],
            imports: [shared_1.ArticleApiSharedModule, shared_2.UserApiSharedModule],
        })
    ], ArticleApiHandlersModule);
    return ArticleApiHandlersModule;
}());
exports.ArticleApiHandlersModule = ArticleApiHandlersModule;
