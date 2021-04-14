"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutRoutingModule = exports.profilePathMatcher = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("@realworld/user/shared");
var layout_component_1 = require("./layout.component");
function profilePathMatcher(url) {
    return url.length >= 1 && url[0].path.startsWith('@') ? ({ consumed: url }) : null;
}
exports.profilePathMatcher = profilePathMatcher;
var routes = [
    {
        path: '',
        component: layout_component_1.LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve().then(function () { return __importStar(require('@realworld/article/feature')); }).then(function (m) { return m.HomeModule; }); }
            },
            {
                matcher: profilePathMatcher,
                loadChildren: function () { return Promise.resolve().then(function () { return __importStar(require('@realworld/user/feature')); }).then(function (m) { return m.ProfileModule; }); },
            },
            {
                path: 'article/:slug',
                loadChildren: function () { return Promise.resolve().then(function () { return __importStar(require('@realworld/article/feature')); }).then(function (m) { return m.ViewArticleModule; }); }
            },
            {
                path: 'editor',
                loadChildren: function () { return Promise.resolve().then(function () { return __importStar(require('@realworld/article/feature')); }).then(function (m) { return m.EditorModule; }); },
                canActivate: [shared_1.AuthGuardService]
            },
            {
                path: 'settings',
                loadChildren: function () { return Promise.resolve().then(function () { return __importStar(require('@realworld/user/feature')); }).then(function (m) { return m.SettingModule; }); },
                canActivate: [shared_1.AuthGuardService]
            },
            {
                path: 'login',
                loadChildren: function () { return Promise.resolve().then(function () { return __importStar(require('@realworld/user/feature')); }).then(function (m) { return m.LoginModule; }); },
                canActivate: [shared_1.NotAuthGuardService]
            },
            {
                path: 'register',
                loadChildren: function () { return Promise.resolve().then(function () { return __importStar(require('@realworld/user/feature')); }).then(function (m) { return m.RegisterModule; }); },
                canActivate: [shared_1.NotAuthGuardService]
            },
        ]
    },
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());
exports.LayoutRoutingModule = LayoutRoutingModule;
