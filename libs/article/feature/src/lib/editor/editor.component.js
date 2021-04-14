"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.EditorComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(userService, articleService, router, route, fb, title) {
        this.userService = userService;
        this.articleService = articleService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.title = title;
        this.initForm();
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var slug;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.title.setTitle('Realworld - New article');
                        slug = this.route.snapshot.params['slug'];
                        if (!slug) return [3 /*break*/, 4];
                        if (!((_a = history === null || history === void 0 ? void 0 : history.state) === null || _a === void 0 ? void 0 : _a.data)) return [3 /*break*/, 1];
                        this.form.patchValue(this.processArticleResponse(history.state.data));
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.loadArticle(slug)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        this.title.setTitle('Realworld - Edit article ' + ((_c = (_b = this.form) === null || _b === void 0 ? void 0 : _b.get('title')) === null || _c === void 0 ? void 0 : _c.value));
                        this.form.get('tagList').disable();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditorComponent.prototype.loadArticle = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.articleService.getOne(slug).pipe(operators_1.take(1)).toPromise()];
                    case 1:
                        res = _a.sent();
                        if (res && res.detailData) {
                            this.form.patchValue(this.processArticleResponse(res.detailData));
                        }
                        else {
                            this.router.navigate(['/']);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.router.navigate(['/']);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditorComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            slug: [null],
            title: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(200)]],
            description: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(255)]],
            body: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(2000)]],
            tagList: [null, [forms_1.Validators.maxLength(255)]],
        });
    };
    EditorComponent.prototype.submit = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var data, promise, res;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        data = this.processFormValue(this.form.value);
                        if (data.slug) {
                            promise = this.articleService.update((_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.slug, data).pipe(operators_1.take(1)).toPromise();
                        }
                        else {
                            promise = this.articleService.create(data).pipe(operators_1.take(1)).toPromise();
                        }
                        return [4 /*yield*/, promise];
                    case 1:
                        res = _d.sent();
                        this.router.navigateByUrl("/article/" + ((_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.slug), { state: res === null || res === void 0 ? void 0 : res.data });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorComponent.prototype.processArticleResponse = function (article) {
        if (article.tagList) {
            article.tagList = article.tagList.join(', ');
        }
        return article;
    };
    EditorComponent.prototype.processFormValue = function (f) {
        var article = __assign({}, f);
        if (article.tagList) {
            article.tagList = article.tagList.split(',').map(function (t) { return t.trim(); });
        }
        if (!article.slug) {
            delete article.slug;
        }
        return article;
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'realworld-editor',
            templateUrl: './editor.component.html',
            styleUrls: ['./editor.component.scss']
        })
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;
