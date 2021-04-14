"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipAuth = exports.SKIP_AUTH_KEY = void 0;
var common_1 = require("@nestjs/common");
exports.SKIP_AUTH_KEY = 'skipAuth';
exports.SkipAuth = function () { return common_1.SetMetadata(exports.SKIP_AUTH_KEY, true); };
