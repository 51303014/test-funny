"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleItemModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@realworld/shared/common");
var article_item_component_1 = require("./article-item.component");
var ArticleItemModule = /** @class */ (function () {
    function ArticleItemModule() {
    }
    ArticleItemModule = __decorate([
        core_1.NgModule({
            imports: [common_1.SharedCommonModule],
            declarations: [article_item_component_1.ArticleItemComponent],
            exports: [article_item_component_1.ArticleItemComponent],
        })
    ], ArticleItemModule);
    return ArticleItemModule;
}());
exports.ArticleItemModule = ArticleItemModule;
