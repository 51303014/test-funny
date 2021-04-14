"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingInterceptor = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var LoadingInterceptor = /** @class */ (function () {
    function LoadingInterceptor(loadingService) {
        this.loadingService = loadingService;
    }
    LoadingInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        // console.info('LoadingInterceptor')
        var loadingHeader = 'loading';
        if (request.headers.has(loadingHeader) &&
            request.headers.get(loadingHeader) === 'show') {
            request = request.clone(
            // remove loading header from headers object
            { headers: request.headers.delete(loadingHeader) });
            this.loadingService.loading();
            return next.handle(request).pipe(operators_1.finalize(function () {
                _this.loadingService.loaded();
            }));
        }
        return next.handle(request);
    };
    LoadingInterceptor = __decorate([
        core_1.Injectable()
    ], LoadingInterceptor);
    return LoadingInterceptor;
}());
exports.LoadingInterceptor = LoadingInterceptor;
