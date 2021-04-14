"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./lib/article-api-shared.module"), exports);
__exportStar(require("./lib/article.entity"), exports);
__exportStar(require("./lib/article.service"), exports);
__exportStar(require("./lib/comment.entity"), exports);
__exportStar(require("./lib/comment.service"), exports);
__exportStar(require("./lib/favorite.entity"), exports);
__exportStar(require("./lib/favorite.service"), exports);
__exportStar(require("./lib/tag.entity"), exports);
__exportStar(require("./lib/tag.service"), exports);
