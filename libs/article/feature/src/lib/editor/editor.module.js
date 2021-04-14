"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@realworld/shared/common");
var editor_component_1 = require("./editor.component");
var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.SharedCommonModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: editor_component_1.EditorComponent
                    },
                    {
                        path: ':slug',
                        component: editor_component_1.EditorComponent
                    },
                ])
            ],
            declarations: [editor_component_1.EditorComponent]
        })
    ], EditorModule);
    return EditorModule;
}());
exports.EditorModule = EditorModule;
