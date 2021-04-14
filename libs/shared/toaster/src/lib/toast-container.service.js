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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastContainerService = void 0;
var core_1 = require("@angular/core");
var toast_container_component_1 = require("./toast-container/toast-container.component");
var common_1 = require("@ng-web-apis/common");
var TOAST_CONTAINER_CLASS_NAME = 'toast-container';
var ToastContainerService = /** @class */ (function () {
    function ToastContainerService(rendererFactory, factoryResolver, injector, window) {
        this.factoryResolver = factoryResolver;
        this.injector = injector;
        this.window = window;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    ToastContainerService.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ToastContainerService.prototype, "ref", {
        get: function () {
            if (!this.appRef) {
                this.appRef = this.injector.get(core_1.ApplicationRef);
            }
            if (!this.componentRef) {
                this._attach();
            }
            return this.componentRef;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToastContainerService.prototype, "containerElement", {
        get: function () {
            if (!this._containerElement) {
                this._containerElement = this.renderer.createElement('div');
                this.renderer.addClass(this._containerElement, TOAST_CONTAINER_CLASS_NAME);
                this.renderer.appendChild(this.window.document.getElementsByTagName('body')[0], this._containerElement);
            }
            return this._containerElement;
        },
        enumerable: false,
        configurable: true
    });
    ToastContainerService.prototype.ngOnDestroy = function () {
        // this._detach();
        // this._destroyContainer();
    };
    ToastContainerService.prototype._attach = function () {
        this._detach();
        var componentFactory = this.factoryResolver.resolveComponentFactory(toast_container_component_1.ToastContainerComponent);
        this.componentRef = componentFactory.create(this.injector);
        var hostView = this.componentRef.hostView;
        this.appRef.attachView(hostView);
        var rootNode = hostView.rootNodes[0];
        this.renderer.appendChild(this.containerElement, rootNode);
    };
    ToastContainerService.prototype._detach = function () {
        if (this.componentRef) {
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    };
    ToastContainerService.prototype._destroyContainer = function () {
        if (this._containerElement && this._containerElement.parentNode) {
            this.renderer.removeChild(this._containerElement.parentNode, this._containerElement);
            this._containerElement = null;
        }
    };
    ToastContainerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(3, core_1.Inject(common_1.WINDOW))
    ], ToastContainerService);
    return ToastContainerService;
}());
exports.ToastContainerService = ToastContainerService;
