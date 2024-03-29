"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListArticlesModule = void 0;
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var common_1 = require("@realworld/shared/common");
var article_item_module_1 = require("../article-item/article-item.module");
var list_articles_component_1 = require("./list-articles.component");
var ListArticlesModule = /** @class */ (function () {
    function ListArticlesModule() {
    }
    ListArticlesModule = __decorate([
        core_1.NgModule({
            declarations: [list_articles_component_1.ListArticlesComponent],
            exports: [list_articles_component_1.ListArticlesComponent],
            imports: [
                common_1.SharedCommonModule,
                ng_bootstrap_1.NgbPaginationModule,
                article_item_module_1.ArticleItemModule
            ],
        })
    ], ListArticlesModule);
    return ListArticlesModule;
}());
exports.ListArticlesModule = ListArticlesModule;
