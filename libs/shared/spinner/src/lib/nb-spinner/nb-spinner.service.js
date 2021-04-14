"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NbSpinnerService = void 0;
var portal_1 = require("@angular/cdk/portal");
var core_1 = require("@angular/core");
var nb_spinner_component_1 = require("./nb-spinner.component");
var NbSpinnerService = /** @class */ (function () {
    function NbSpinnerService(loadingService, overlay) {
        var _this = this;
        this.loadingService = loadingService;
        this.overlay = overlay;
        this.spinnerOverlayPortal = new portal_1.ComponentPortal(nb_spinner_component_1.NbSpinnerComponent);
        // console.info('Init MaterialSpinnerService')
        this.loadingService.loader$.subscribe(function (isShow) { return isShow ? _this.show() : _this.hide(); });
    }
    NbSpinnerService.prototype.show = function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            return;
        }
        this.overlayRef = this.overlay.create();
        this.componentRef = this.overlayRef.attach(this.spinnerOverlayPortal);
    };
    NbSpinnerService.prototype.hide = function () {
        if (!this.overlayRef) {
            return;
        }
        if (!this.componentRef) {
            throw Error('SpinnerService: componentRef is not initialized properly');
        }
        this.componentRef.destroy();
        this.overlayRef.detach();
    };
    NbSpinnerService = __decorate([
        core_1.Injectable()
    ], NbSpinnerService);
    return NbSpinnerService;
}());
exports.NbSpinnerService = NbSpinnerService;
