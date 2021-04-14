"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApiHandlersController = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("@realworld/shared/api/constants");
var client_server_1 = require("@realworld/shared/client-server");
var shared_1 = require("@realworld/user/api/shared");
var UserApiHandlersController = /** @class */ (function () {
    function UserApiHandlersController(userService, followService) {
        this.userService = userService;
        this.followService = followService;
    }
    UserApiHandlersController.prototype.login = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.login(data)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, new client_server_1.ActionSuccessResponse({
                                message: constants_1.LOGGED_IN_MSG,
                                data: user
                            })];
                }
            });
        });
    };
    UserApiHandlersController.prototype.register = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.register(data)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, new client_server_1.ActionSuccessResponse({
                                message: constants_1.REGISTERED_MSG,
                                data: user
                            })];
                }
            });
        });
    };
    UserApiHandlersController.prototype.update = function (req, data) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.userService.updateUserInfo((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub, data)];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, new client_server_1.ActionSuccessResponse({
                                message: constants_1.UPDATED_MSG,
                                data: user
                            })];
                }
            });
        });
    };
    UserApiHandlersController.prototype.getCurrentUser = function (req) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, password, user;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.userService.findOne({ id: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub })];
                    case 1:
                        _b = (_c.sent()) || {}, password = _b.password, user = __rest(_b, ["password"]);
                        return [2 /*return*/, new client_server_1.DetailSuccessResponse({
                                detailData: user
                            })];
                }
            });
        });
    };
    UserApiHandlersController.prototype.getProfile = function (req, username) {
        return __awaiter(this, void 0, void 0, function () {
            var user, jwtInfo, _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.userService.findOne({ username: username })];
                    case 1:
                        user = _c.sent();
                        if (!user) {
                            throw new common_1.NotFoundException();
                        }
                        jwtInfo = this.userService.getJwtInfo(req);
                        _a = client_server_1.DetailSuccessResponse.bind;
                        _b = {};
                        return [4 /*yield*/, this.userService.getProfile(jwtInfo === null || jwtInfo === void 0 ? void 0 : jwtInfo.sub, user)];
                    case 2: return [2 /*return*/, new (_a.apply(client_server_1.DetailSuccessResponse, [void 0, (_b.detailData = _c.sent(),
                                _b)]))()];
                }
            });
        });
    };
    UserApiHandlersController.prototype.followAUser = function (req, username) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var user, _c;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.userService.findOne({ username: username })];
                    case 1:
                        user = _e.sent();
                        if (!user) {
                            throw new common_1.NotFoundException();
                        }
                        return [4 /*yield*/, this.followService.insert({ followedId: user.id, followerId: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub })];
                    case 2:
                        _e.sent();
                        _c = client_server_1.ActionSuccessResponse.bind;
                        _d = {
                            message: ''
                        };
                        return [4 /*yield*/, this.userService.getProfile((_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.sub, user)];
                    case 3: return [2 /*return*/, new (_c.apply(client_server_1.ActionSuccessResponse, [void 0, (_d.data = _e.sent(),
                                _d)]))()];
                }
            });
        });
    };
    UserApiHandlersController.prototype.unfollowAUser = function (req, username) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var user, _c;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.userService.findOne({ username: username })];
                    case 1:
                        user = _e.sent();
                        if (!user) {
                            throw new common_1.NotFoundException();
                        }
                        return [4 /*yield*/, this.followService.softDelete({ followedId: user.id, followerId: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.sub })];
                    case 2:
                        _e.sent();
                        _c = client_server_1.ActionSuccessResponse.bind;
                        _d = {
                            message: ''
                        };
                        return [4 /*yield*/, this.userService.getProfile((_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.sub, user)];
                    case 3: return [2 /*return*/, new (_c.apply(client_server_1.ActionSuccessResponse, [void 0, (_d.data = _e.sent(),
                                _d)]))()];
                }
            });
        });
    };
    __decorate([
        shared_1.SkipAuth(),
        common_1.Post('users/login'),
        __param(0, common_1.Body())
    ], UserApiHandlersController.prototype, "login", null);
    __decorate([
        shared_1.SkipAuth(),
        common_1.Post('users'),
        __param(0, common_1.Body())
    ], UserApiHandlersController.prototype, "register", null);
    __decorate([
        common_1.Put('users'),
        __param(0, common_1.Req()), __param(1, common_1.Body())
    ], UserApiHandlersController.prototype, "update", null);
    __decorate([
        common_1.Get('user'),
        __param(0, common_1.Req())
    ], UserApiHandlersController.prototype, "getCurrentUser", null);
    __decorate([
        shared_1.SkipAuth(),
        common_1.Get('profiles/:username'),
        __param(0, common_1.Req()), __param(1, common_1.Param('username'))
    ], UserApiHandlersController.prototype, "getProfile", null);
    __decorate([
        common_1.Post('profiles/:username/follow'),
        __param(0, common_1.Req()), __param(1, common_1.Param('username'))
    ], UserApiHandlersController.prototype, "followAUser", null);
    __decorate([
        common_1.Delete('profiles/:username/follow'),
        __param(0, common_1.Req()), __param(1, common_1.Param('username'))
    ], UserApiHandlersController.prototype, "unfollowAUser", null);
    UserApiHandlersController = __decorate([
        common_1.Controller()
    ], UserApiHandlersController);
    return UserApiHandlersController;
}());
exports.UserApiHandlersController = UserApiHandlersController;
