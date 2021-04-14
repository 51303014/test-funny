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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.UserService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var constants_1 = require("@realworld/shared/api/constants");
var foundation_1 = require("@realworld/shared/api/foundation");
var bcrypt = __importStar(require("bcrypt"));
var user_entity_1 = require("./user.entity");
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(repository, jwtService, followService) {
        var _this = _super.call(this) || this;
        _this.jwtService = jwtService;
        _this.followService = followService;
        _this.repository = repository;
        return _this;
    }
    UserService.prototype.login = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.validateUser(data.email, data.password)];
                    case 1:
                        user = _c.sent();
                        _a = [__assign({}, user)];
                        _b = {};
                        return [4 /*yield*/, this.generateJWTToken({ sub: user.id, email: user.email, username: user.username })];
                    case 2: return [2 /*return*/, __assign.apply(void 0, _a.concat([(_b.token = _c.sent(), _b)]))];
                }
            });
        });
    };
    UserService.prototype.register = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var existingUser, user, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.findOne(null, { where: [
                                { email: data.email.toLowerCase() },
                                { username: data.username.toLowerCase() }
                            ] })];
                    case 1:
                        existingUser = _d.sent();
                        if (existingUser) {
                            throw new common_1.BadRequestException(constants_1.DUPLICATE_RESOURCE_MSG);
                        }
                        user = __assign({}, data);
                        _a = user;
                        return [4 /*yield*/, this.hashPassword(user.password)];
                    case 2:
                        _a.password = _d.sent();
                        return [4 /*yield*/, this.insert(user)];
                    case 3:
                        _d.sent();
                        _b = [__assign({}, user)];
                        _c = { password: null };
                        return [4 /*yield*/, this.generateJWTToken({ sub: user.id, email: user.email, username: user.username })];
                    case 4: return [2 /*return*/, __assign.apply(void 0, _b.concat([(_c.token = _d.sent(), _c)]))];
                }
            });
        });
    };
    UserService.prototype.updateUserInfo = function (userId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a, newUserInfo, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.findOne({ id: userId })];
                    case 1:
                        user = _d.sent();
                        if (!user) {
                            throw new common_1.BadRequestException(constants_1.INVALID_ACCOUNT_MSG);
                        }
                        if (!data.password) return [3 /*break*/, 3];
                        _a = data;
                        return [4 /*yield*/, this.hashPassword(data.password)];
                    case 2:
                        _a.password = _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        delete data.password;
                        _d.label = 4;
                    case 4: return [4 /*yield*/, this.update({ id: userId }, data)];
                    case 5:
                        _d.sent();
                        newUserInfo = __assign(__assign({}, user), data);
                        _b = [__assign({}, newUserInfo)];
                        _c = { password: null };
                        return [4 /*yield*/, this.generateJWTToken({ sub: userId, email: newUserInfo.email, username: newUserInfo.username })];
                    case 6: return [2 /*return*/, __assign.apply(void 0, _b.concat([(_c.token = _d.sent(), _c)]))];
                }
            });
        });
    };
    UserService.prototype.getProfile = function (requestUserId, user) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = {
                            username: user.username,
                            bio: user.bio,
                            image: user.image
                        };
                        if (!!requestUserId) return [3 /*break*/, 1];
                        _a = false;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.followService.findOne({
                            followerId: requestUserId,
                            followedId: user.id
                        })];
                    case 2:
                        _a = !!(_c.sent());
                        _c.label = 3;
                    case 3: return [2 /*return*/, (_b.following = _a,
                            _b.createdAt = user.createdAt,
                            _b)];
                }
            });
        });
    };
    UserService.prototype.validateUser = function (emailLogin, passwordLogin) {
        return __awaiter(this, void 0, void 0, function () {
            var user, password, email, username, bio, image, id, _, validPass;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne({
                            email: emailLogin.toLowerCase().trim()
                        })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.NotFoundException(constants_1.NOT_FOUND_MSG);
                        }
                        password = user.password, email = user.email, username = user.username, bio = user.bio, image = user.image, id = user.id, _ = __rest(user, ["password", "email", "username", "bio", "image", "id"]);
                        return [4 /*yield*/, bcrypt.compare(passwordLogin, password)];
                    case 2:
                        validPass = _a.sent();
                        if (!validPass) {
                            throw new common_1.BadRequestException(constants_1.INVALID_ACCOUNT_MSG);
                        }
                        return [2 /*return*/, { id: id, email: email, username: username, bio: bio, image: image }];
                }
            });
        });
    };
    UserService.prototype.hashPassword = function (raw) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt.hash(raw, 10)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.generateJWTToken = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.jwtService.sign(data)];
            });
        });
    };
    UserService.prototype.getJwtInfo = function (req) {
        var _a, _b;
        if (!((_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization)) {
            return null;
        }
        var authArr = (_b = req === null || req === void 0 ? void 0 : req.headers) === null || _b === void 0 ? void 0 : _b.authorization.split(' ');
        if (authArr.length !== 2) {
            return null;
        }
        return this.jwtService.decode(authArr[1]);
    };
    UserService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(user_entity_1.User))
    ], UserService);
    return UserService;
}(foundation_1.BaseService));
exports.UserService = UserService;
