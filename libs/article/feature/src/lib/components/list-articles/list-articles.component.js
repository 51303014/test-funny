"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListArticlesComponent = void 0;
var core_1 = require("@angular/core");
var ListArticlesComponent = /** @class */ (function () {
    function ListArticlesComponent() {
        this.pageChange = new core_1.EventEmitter();
        this.toggleFavorite = new core_1.EventEmitter();
    }
    ListArticlesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], ListArticlesComponent.prototype, "articles", void 0);
    __decorate([
        core_1.Input()
    ], ListArticlesComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Input()
    ], ListArticlesComponent.prototype, "collectionSize", void 0);
    __decorate([
        core_1.Input()
    ], ListArticlesComponent.prototype, "page", void 0);
    __decorate([
        core_1.Output()
    ], ListArticlesComponent.prototype, "pageChange", void 0);
    __decorate([
        core_1.Output()
    ], ListArticlesComponent.prototype, "toggleFavorite", void 0);
    ListArticlesComponent = __decorate([
        core_1.Component({
            selector: 'realworld-list-articles',
            templateUrl: './list-articles.component.html',
            styleUrls: ['./list-articles.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], ListArticlesComponent);
    return ListArticlesComponent;
}());
exports.ListArticlesComponent = ListArticlesComponent;
