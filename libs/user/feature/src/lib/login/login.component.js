"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ngx_custom_validators_1 = require("ngx-custom-validators");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authUIService, fb, router, route, title) {
        this.authUIService = authUIService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.title = title;
        this.initForm();
    }
    Object.defineProperty(LoginComponent.prototype, "control", {
        get: function () {
            return {
                email: this.form.get('email'),
                password: this.form.get('password'),
            };
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.title.setTitle("Sign in");
    };
    LoginComponent.prototype.initForm = function () {
        this.form = this.fb.group({
            email: [null, [forms_1.Validators.required, ngx_custom_validators_1.CustomValidators.email]],
            password: [null, [forms_1.Validators.required]]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authUIService.login(this.form.value)
            .subscribe(function (_) {
            var returnUrl = _this.route.snapshot.queryParamMap.get('returnUrl');
            _this.router.navigateByUrl(returnUrl);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
