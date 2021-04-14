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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.ArticleApiHandlersController = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("@realworld/shared/api/constants");
var foundation_1 = require("@realworld/shared/api/foundation");
var client_server_1 = require("@realworld/shared/client-server");
var string_util_1 = require("@realworld/shared/string-util");
var shared_1 = require("@realworld/user/api/shared");
var typeorm_1 = require("typeorm");
var ArticleApiHandlersController = /** @class */ (function () {
    function ArticleApiHandlersController(articleService, userService, favoriteService, followService, tagService, commentService) {
        var _this = this;
        this.articleService = articleService;
        this.userService = userService;
        this.favoriteService = favoriteService;
        this.followService = followService;
        this.tagService = tagService;
        this.commentService = commentService;
        this.mapToResponseArticle = function (requestUserId, article) { return __awaiter(_this, void 0, void 0, function () {
            var user, _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.userService.findOne({ id: article === null || article === void 0 ? void 0 : article.authorId })];
                    case 1:
                        user = _c.sent();
                        _a = [__assign({}, article)];
                        _b = {};
                        return [4 /*yield*/, this.didUserFavoriteThisArticle(requestUserId, article === null || article === void 0 ? void 0 : article.slug)];
                    case 2:
                        _b.favorited = _c.sent();
                        return [4 /*yield*/, this.getArticleFavoritesCount(article === null || article === void 0 ? void 0 : article.slug)];
                    case 3:
                        _b.favoritesCount = _c.sent();
                        return [4 /*yield*/, this.userService.getProfile(requestUserId, user)];
                    case 4: return [2 /*return*/, __assign.apply(void 0, _a.concat([(_b.author = _c.sent(), _b)]))];
                }
            });
        }); };
        this.mapToResponseComment = function (requestUserId, comment) { return __awaiter(_this, void 0, void 0, function () {
            var user, _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.userService.findOne({ id: comment === null || comment === void 0 ? void 0 : comment.authorId })];
                    case 1:
                        user = _c.sent();
                        _a = [__assign({}, comment)];
                        _b = {};
                        return [4 /*yield*/, this.userService.getProfile(requestUserId, user)];
                    case 2: return [2 /*return*/, __assign.apply(void 0, _a.concat([(_b.author = _c.sent(), _b)]))];
                }
            });
        }); };
    }
    // Article apis
    ArticleApiHandlersController.prototype.create = function (req, data) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var article, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        article = __assign(__assign({}, data), { authorId: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub, slug: string_util_1.StringUtil.asciiSlug(data.title) + '-' + new Date().getTime() });
                        return [4 /*yield*/, this.articleService.insert(article)];
                    case 1:
                        _d.sent();
                        if (data.tagList) {
                            this.updateTags(data.tagList);
                        }
                        _b = client_server_1.ActionSuccessResponse.bind;
                        _c = {
                            message: constants_1.CREATED_MSG
                        };
                        return [4 /*yield*/, this.mapToResponseArticle(article === null || article === void 0 ? void 0 : article.authorId, article)];
                    case 2: return [2 /*return*/, new (_b.apply(client_server_1.ActionSuccessResponse, [void 0, (_c.data = _d.sent(),
                                _c)]))()];
                }
            });
        });
    };
    ArticleApiHandlersController.prototype.update = function (req, slug, data) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var title, description, body, article, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        title = data.title, description = data.description, body = data.body;
                        article = {};
                        if (title) {
                            article.title = title;
                        }
                        if (description) {
                            article.description = description;
                        }
                        if (body) {
                            article.body = body;
                        }
                        return [4 /*yield*/, this.articleService.update({ slug: slug }, article)];
                    case 1:
                        _d.sent();
                        return [4 /*yield*/, this.articleService.findOne({ slug: slug })];
                    case 2:
                        article = _d.sent();
                        _b = client_server_1.ActionSuccessResponse.bind;
                        _c = {
                            message: constants_1.UPDATED_MSG
                        };
                        return [4 /*yield*/, this.mapToResponseArticle((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub, article)];
                    case 3: return [2 /*return*/, new (_b.apply(client_server_1.ActionSuccessResponse, [void 0, (_c.data = _d.sent(),
                                _c)]))()];
                }
            });
        });
    };
    ArticleApiHandlersController.prototype.delete = function (req, slug) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var article;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.articleService.findOne({ slug: slug })];
                    case 1:
                        article = _b.sent();
                        if (!article) {
                            throw new common_1.NotFoundException(constants_1.NOT_FOUND_MSG);
                        }
                        if (article.authorId !== ((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub)) {
                            throw new common_1.UnauthorizedException();
                        }
                        return [4 /*yield*/, this.articleService.softDelete({ slug: slug })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, new client_server_1.ActionSuccessResponse({
                                message: constants_1.DELETED_MSG,
                                data: null
                            })];
                }
            });
        });
    };
    ArticleApiHandlersController.prototype.findAllFeed = function (req, query) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var follows, followedIds, options, res, _b;
            var _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.followService.findAll(foundation_1.mapQueriesToFindManyOptions({ followerId: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub }))];
                    case 1:
                        follows = _d.sent();
                        followedIds = follows.map(function (f) { return f.followedId; });
                        options = foundation_1.mapQueriesToFindManyOptions(__assign(__assign({}, query), { authorId: typeorm_1.In(followedIds) }));
                        return [4 /*yield*/, this.articleService.findAll(options)];
                    case 2:
                        res = _d.sent();
                        _b = client_server_1.ListSuccessResponse.bind;
                        _c = {};
                        return [4 /*yield*/, Promise.all(res.map(function (a) { var _a; return _this.mapToResponseArticle((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub, a); }))];
                    case 3:
                        _c.listData = _d.sent();
                        return [4 /*yield*/, this.articleService.count(options)];
                    case 4: return [2 /*return*/, new (_b.apply(client_server_1.ListSuccessResponse, [void 0, (_c.total = _d.sent(),
                                _c)]))()];
                }
            });
        });
    };
    ArticleApiHandlersController.prototype.findBySlug = function (req, slug) {
        return __awaiter(this, void 0, void 0, function () {
            var article, jwtInfo, _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.articleService.findOne({ slug: slug })];
                    case 1:
                        article = _c.sent();
                        if (!article) {
                            throw new common_1.NotFoundException(constants_1.NOT_FOUND_MSG);
                        }
                        jwtInfo = this.userService.getJwtInfo(req);
                        _a = client_server_1.DetailSuccessResponse.bind;
                        _b = {};
                        return [4 /*yield*/, this.mapToResponseArticle(jwtInfo === null || jwtInfo === void 0 ? void 0 : jwtInfo.sub, article)];
                    case 2: return [2 /*return*/, new (_a.apply(client_server_1.DetailSuccessResponse, [void 0, (_b.detailData = _c.sent(),
                                _b)]))()];
                }
            });
        });
    };
    ArticleApiHandlersController.prototype.findAll = function (req, query) {
        return __awaiter(this, void 0, void 0, function () {
            var tag, author, favorited, jwtInfo, user, options, user, _a, res_1, count, _b, res, _c;
            var _d, _e;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        tag = query.tag, author = query.author, favorited = query.favorited;
                        delete query.author;
                        delete query.tag;
                        delete query.favorited;
                        jwtInfo = this.userService.getJwtInfo(req);
                        if (!author) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userService.findOne({ username: author })];
                    case 1:
                        user = _f.sent();
                        if (user) {
                            query.authorId = user.id;
                        }
                        _f.label = 2;
                    case 2:
                        if (tag) {
                            query.tagList = typeorm_1.Like("%" + tag + "%");
                        }
                        options = foundation_1.mapQueriesToFindManyOptions(query, 'title', 'slug', 'shortDescription', 'body');
                        if (!favorited) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.userService.findOne({ username: favorited })];
                    case 3:
                        user = _f.sent();
                        if (!user) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.articleService.repository.createQueryBuilder('article')
                                .innerJoinAndSelect("favorite", "favorite", "article.slug = favorite.articleSlug")
                                .where(options === null || options === void 0 ? void 0 : options.where)
                                .andWhere('favorite.userid = :userId', { userId: user.id })
                                .take(options === null || options === void 0 ? void 0 : options.take)
                                .skip(options === null || options === void 0 ? void 0 : options.skip)
                                .orderBy('favorite.createdAt', 'DESC')
                                .getManyAndCount()];
                    case 4:
                        _a = _f.sent(), res_1 = _a[0], count = _a[1];
                        _b = client_server_1.ListSuccessResponse.bind;
                        _d = {};
                        return [4 /*yield*/, Promise.all(res_1.map(function (a) { return _this.mapToResponseArticle(jwtInfo === null || jwtInfo === void 0 ? void 0 : jwtInfo.sub, a); }))];
                    case 5: return [2 /*return*/, new (_b.apply(client_server_1.ListSuccessResponse, [void 0, (_d.listData = _f.sent(),
                                _d.total = count,
                                _d)]))()];
                    case 6: return [4 /*yield*/, this.articleService.findAll(options)];
                    case 7:
                        res = _f.sent();
                        _c = client_server_1.ListSuccessResponse.bind;
                        _e = {};
                        return [4 /*yield*/, Promise.all(res.map(function (a) { return _this.mapToResponseArticle(jwtInfo === null || jwtInfo === void 0 ? void 0 : jwtInfo.sub, a); }))];
                    case 8:
                        _e.listData = _f.sent();
                        return [4 /*yield*/, this.articleService.count(options)];
                    case 9: return [2 /*return*/, new (_c.apply(client_server_1.ListSuccessResponse, [void 0, (_e.total = _f.sent(),
                                _e)]))()];
                }
            });
        });
    };
    // Favorite apis
    ArticleApiHandlersController.prototype.favoriteAnArticle = function (req, slug) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var isFavorited, article, _d;
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.favoriteService.findOne({ userId: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub, articleSlug: slug })];
                    case 1:
                        isFavorited = !!(_f.sent());
                        if (!!isFavorited) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.favoriteService.insert({ userId: (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.sub, articleSlug: slug })];
                    case 2:
                        _f.sent();
                        _f.label = 3;
                    case 3: return [4 /*yield*/, this.articleService.findOne({ slug: slug })];
                    case 4:
                        article = _f.sent();
                        _d = client_server_1.ActionSuccessResponse.bind;
                        _e = {
                            message: ''
                        };
                        return [4 /*yield*/, this.mapToResponseArticle((_c = req === null || req === void 0 ? void 0 : req.user) === null || _c === void 0 ? void 0 : _c.sub, article)];
                    case 5: return [2 /*return*/, new (_d.apply(client_server_1.ActionSuccessResponse, [void 0, (_e.data = _f.sent(),
                                _e)]))()];
                }
            });
        });
    };
    ArticleApiHandlersController.prototype.unfavoriteAnArticle = function (req, slug) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var isFavorited, article, _d;
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.favoriteService.findOne({ userId: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub, articleSlug: slug })];
                    case 1:
                        isFavorited = !!(_f.sent());
                        if (!isFavorited) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.favoriteService.softDelete({ userId: (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.sub, articleSlug: slug })];
                    case 2:
                        _f.sent();
                        _f.label = 3;
                    case 3: return [4 /*yield*/, this.articleService.findOne({ slug: slug })];
                    case 4:
                        article = _f.sent();
                        _d = client_server_1.ActionSuccessResponse.bind;
                        _e = {
                            message: ''
                        };
                        return [4 /*yield*/, this.mapToResponseArticle((_c = req === null || req === void 0 ? void 0 : req.user) === null || _c === void 0 ? void 0 : _c.sub, article)];
                    case 5: return [2 /*return*/, new (_d.apply(client_server_1.ActionSuccessResponse, [void 0, (_e.data = _f.sent(),
                                _e)]))()];
                }
            });
        });
    };
    // Comment apis
    ArticleApiHandlersController.prototype.findAllComments = function (req, slug) {
        return __awaiter(this, void 0, void 0, function () {
            var options, res, jwtInfo, _a;
            var _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        options = foundation_1.mapQueriesToFindManyOptions({ articleSlug: slug });
                        return [4 /*yield*/, this.commentService.findAll(options)];
                    case 1:
                        res = _c.sent();
                        jwtInfo = this.userService.getJwtInfo(req);
                        _a = client_server_1.ListSuccessResponse.bind;
                        _b = {};
                        return [4 /*yield*/, Promise.all(res.map(function (c) { return _this.mapToResponseComment(jwtInfo === null || jwtInfo === void 0 ? void 0 : jwtInfo.sub, c); }))];
                    case 2:
                        _b.listData = _c.sent();
                        return [4 /*yield*/, this.commentService.count(options)];
                    case 3: return [2 /*return*/, new (_a.apply(client_server_1.ListSuccessResponse, [void 0, (_b.total = _c.sent(),
                                _b)]))()];
                }
            });
        });
    };
    ArticleApiHandlersController.prototype.createAComment = function (req, slug, data) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var comment, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        comment = __assign(__assign({}, data), { authorId: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub, articleSlug: slug });
                        return [4 /*yield*/, this.commentService.insert(comment)];
                    case 1:
                        _d.sent();
                        _b = client_server_1.ActionSuccessResponse.bind;
                        _c = {
                            message: ''
                        };
                        return [4 /*yield*/, this.mapToResponseComment(comment === null || comment === void 0 ? void 0 : comment.authorId, comment)];
                    case 2: return [2 /*return*/, new (_b.apply(client_server_1.ActionSuccessResponse, [void 0, (_c.data = _d.sent(),
                                _c)]))()];
                }
            });
        });
    };
    ArticleApiHandlersController.prototype.deleteAComment = function (req, slug, id) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var comment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.commentService.findOne({ id: id, articleSlug: slug })];
                    case 1:
                        comment = _b.sent();
                        if (!comment) {
                            throw new common_1.NotFoundException();
                        }
                        if (comment.authorId !== ((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub)) {
                            throw new common_1.UnauthorizedException();
                        }
                        return [4 /*yield*/, this.commentService.softDelete({ articleSlug: slug, id: id })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, new client_server_1.ActionSuccessResponse({
                                message: constants_1.DELETED_MSG,
                                data: null
                            })];
                }
            });
        });
    };
    // Tag apis
    ArticleApiHandlersController.prototype.findAllTags = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var options, tags, _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        options = foundation_1.mapQueriesToFindManyOptions(query);
                        return [4 /*yield*/, this.tagService.findAll(options)];
                    case 1:
                        tags = _c.sent();
                        _a = client_server_1.ListSuccessResponse.bind;
                        _b = {
                            listData: tags.map(function (t) { return t.name; })
                        };
                        return [4 /*yield*/, this.tagService.count()];
                    case 2: return [2 /*return*/, new (_a.apply(client_server_1.ListSuccessResponse, [void 0, (_b.total = _c.sent(),
                                _b)]))()];
                }
            });
        });
    };
    // Helper functions
    ArticleApiHandlersController.prototype.updateTags = function (tagList) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, tagList_1, t, tag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, tagList_1 = tagList;
                        _a.label = 1;
                    case 1:
                        if (!(_i < tagList_1.length)) return [3 /*break*/, 7];
                        t = tagList_1[_i];
                        t = t.trim();
                        return [4 /*yield*/, this.tagService.findOne({ name: t })];
                    case 2:
                        tag = _a.sent();
                        if (!!tag) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.tagService.insert({ name: t, count: 1 })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.tagService.update({ id: tag.id }, { count: ++tag.count })];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ArticleApiHandlersController.prototype.didUserFavoriteThisArticle = function (userId, slug) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.favoriteService.findOne({ userId: userId, articleSlug: slug })];
                    case 1: return [2 /*return*/, !!(_a.sent())];
                }
            });
        });
    };
    ArticleApiHandlersController.prototype.getArticleFavoritesCount = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = foundation_1.mapQueriesToFindManyOptions({ articleSlug: slug });
                        return [4 /*yield*/, this.favoriteService.count(options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        common_1.Post('articles'),
        __param(0, common_1.Req()), __param(1, common_1.Body())
    ], ArticleApiHandlersController.prototype, "create", null);
    __decorate([
        common_1.Put('articles/:slug'),
        __param(0, common_1.Req()), __param(1, common_1.Param('slug')), __param(2, common_1.Body())
    ], ArticleApiHandlersController.prototype, "update", null);
    __decorate([
        common_1.Delete('articles/:slug'),
        __param(0, common_1.Req()), __param(1, common_1.Param('slug'))
    ], ArticleApiHandlersController.prototype, "delete", null);
    __decorate([
        common_1.Get('articles/feed'),
        __param(0, common_1.Req()), __param(1, common_1.Query())
    ], ArticleApiHandlersController.prototype, "findAllFeed", null);
    __decorate([
        shared_1.SkipAuth(),
        common_1.Get('articles/:slug'),
        __param(0, common_1.Req()), __param(1, common_1.Param('slug'))
    ], ArticleApiHandlersController.prototype, "findBySlug", null);
    __decorate([
        shared_1.SkipAuth(),
        common_1.Get('articles'),
        __param(0, common_1.Req()), __param(1, common_1.Query())
    ], ArticleApiHandlersController.prototype, "findAll", null);
    __decorate([
        common_1.Post('articles/:slug/favorite'),
        __param(0, common_1.Req()), __param(1, common_1.Param('slug'))
    ], ArticleApiHandlersController.prototype, "favoriteAnArticle", null);
    __decorate([
        common_1.Delete('articles/:slug/favorite'),
        __param(0, common_1.Req()), __param(1, common_1.Param('slug'))
    ], ArticleApiHandlersController.prototype, "unfavoriteAnArticle", null);
    __decorate([
        shared_1.SkipAuth(),
        common_1.Get('articles/:slug/comments'),
        __param(0, common_1.Req()), __param(1, common_1.Param('slug'))
    ], ArticleApiHandlersController.prototype, "findAllComments", null);
    __decorate([
        common_1.Post('articles/:slug/comments'),
        __param(0, common_1.Req()), __param(1, common_1.Param('slug')), __param(2, common_1.Body())
    ], ArticleApiHandlersController.prototype, "createAComment", null);
    __decorate([
        common_1.Delete('articles/:slug/comments/:id'),
        __param(0, common_1.Req()), __param(1, common_1.Param('slug')), __param(2, common_1.Param('id'))
    ], ArticleApiHandlersController.prototype, "deleteAComment", null);
    __decorate([
        shared_1.SkipAuth(),
        common_1.Get('tags'),
        __param(0, common_1.Query())
    ], ArticleApiHandlersController.prototype, "findAllTags", null);
    ArticleApiHandlersController = __decorate([
        common_1.Controller()
    ], ArticleApiHandlersController);
    return ArticleApiHandlersController;
}());
exports.ArticleApiHandlersController = ArticleApiHandlersController;
