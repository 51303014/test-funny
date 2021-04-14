"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var foundation_1 = require("@realworld/shared/foundation");
var operators_1 = require("rxjs/operators");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, articleService, tagService, title, router) {
        this.userService = userService;
        this.articleService = articleService;
        this.tagService = tagService;
        this.title = title;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _a;
        this.title.setTitle('Realworld - Home');
        if ((_a = this.userService) === null || _a === void 0 ? void 0 : _a.isAuth) {
            this.toggleFeed('personal');
        }
        else {
            this.toggleFeed('global');
        }
        this.tags$ = this.tagService.getAll({
            limit: 10,
            pageIndex: 0,
            order: { orderBy: 'count', orderType: 'desc' }
        }, null).pipe(operators_1.map(function (res) { return res.data; }));
    };
    HomeComponent.prototype.toggleFeed = function (feedType, tag) {
        var _this = this;
        this.feedType = feedType;
        this.selectedTag = tag;
        switch (feedType) {
            case 'global':
                this.dataSource = new foundation_1.PaginatedDataSource(function (req, query) { return _this.articleService.getAll(req, query); }, { orderBy: 'createdAt', orderType: 'desc' }, {}, 0, 10);
                break;
            case 'personal':
                this.dataSource = new foundation_1.PaginatedDataSource(function (req, query) { return _this.articleService.getFeed(req, query); }, { orderBy: 'createdAt', orderType: 'desc' }, {}, 0, 10);
                break;
            case 'tag':
                this.dataSource = new foundation_1.PaginatedDataSource(function (req, query) { return _this.articleService.getAll(req, query); }, { orderBy: 'createdAt', orderType: 'desc' }, { tag: this.selectedTag }, 0, 10);
                break;
        }
    };
    HomeComponent.prototype.toggleFavorite = function ($event) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!((_a = this.userService) === null || _a === void 0 ? void 0 : _a.isAuth)) {
                            this.router.navigateByUrl('/login');
                            return [2 /*return*/];
                        }
                        if (!$event.favorite) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.articleService.favoriteArticle($event.slug).pipe(operators_1.take(1)).toPromise()];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.articleService.unfavoriteArticle($event.slug).pipe(operators_1.take(1)).toPromise()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        this.dataSource.fetch();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'realworld-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
